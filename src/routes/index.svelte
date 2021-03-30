<script lang="ts">
	import { onMount } from 'svelte'
	import VirtualList from 'svelte-tiny-virtual-list'
	import type { Icon } from '$lib/Icon'
	import { loadIcons } from '$lib/loadIcons'
	import { chunkArray } from '$lib/chunkArray';
	import { goto } from '$app/navigation'
	import { browser } from '$app/env';

	// setup state
	let search = browser
		? new URLSearchParams(window.location.search).get('q') || ''
		: ''
	$: {
		if (browser) {
			history.replaceState(
				history.state,
				'',
				search ? `?q=${search}` : '.'
			)
		}
	}
	let loading = true
	let searchIcon: Icon
	
	let scrollbarWidth = 0
	let itemWidth = 80
	let itemHeight = 80
	let itemsPerRow = 5
	let itemGridHeight = 500

	let icons: Icon[] = []
	let iconSelection: Icon[] = []
	$: iconSelection = icons.filter(icon => icon.name.includes(search))
	let chunkedIconSelection: Icon[][] = []
	$: chunkedIconSelection = chunkArray(iconSelection, itemsPerRow)

	let gridContainer
	$: {
		if (typeof window === 'object') {
			const newGridWidth = Math.min(window.innerWidth - scrollbarWidth, 600)
			const newGridHeight = gridContainer?.clientHeight
			if (newGridHeight) {
				itemGridHeight = newGridHeight
				itemHeight = Math.max(window.innerHeight / 12, 80)
				itemsPerRow = Math.floor(newGridWidth / 120)
				itemWidth = newGridWidth / itemsPerRow
			}
		}
	}

	onMount(async () => {
		const x = document.createElement('div')
		x.style.overflow = 'scroll'
		document.body.appendChild(x)
		scrollbarWidth = x.offsetWidth - x.clientWidth
		document.body.removeChild(x)

		icons = await loadIcons()
		window.addEventListener('resize', () => {
			gridContainer = gridContainer
		})
		loading = false
		searchIcon = icons.find(icon => icon.name === 'solid/search')
	})

	const createIconClickListener = (icon: Icon) => () => {
		goto(`icon?which=${icon.name}`)
	}
</script>

<svelte:head>
	<title>Font Awesome SVGs</title>
</svelte:head>

<main>
	{#if loading}
		<div style="margin: auto">
			Loading icons...
		</div>
	{:else}
		<label class="search">
			<span>
				{@html searchIcon.content}
			</span>
			<input bind:value={search} type="search">
		</label>
		<div class="list-container" bind:this={gridContainer}>
			<VirtualList
				width="100%"
				height={itemGridHeight}
				itemCount={chunkedIconSelection.length}
				itemSize={itemHeight}
			>
				<div slot="item" let:index let:style {style} class="flex item-row">
					{#each chunkedIconSelection[index] as icon}	
						<div class="item" style="width: {itemWidth}px" on:click={createIconClickListener(icon)}>
							{@html icon.content }
							<div>
								<div class="truncate">
									{ icon.name }
								</div>
							</div>
						</div>
					{/each}
				</div>
			</VirtualList>
		</div>
	{/if}
</main>

<style>
	main {
		height: 100%;
		max-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.search {
		height: 32px;
		display: flex;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}
	.search span {
		margin: 8px;
		height: 16px;
		width: 16px;
	}
	input{
		width: 100%;
		border: 0;
		outline: 0;
		font-family: inherit;
		font-size: inherit;
		padding: 4px;
	}
	.list-container {
		margin: 8px 0 8px 0;
		min-height: 0;
		flex-grow: 1;
	}
	.item-row {
		justify-content: center;
		display: flex;
	}
	.item {
		padding: 8px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	.truncate {
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}
</style>