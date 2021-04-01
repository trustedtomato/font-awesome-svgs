<script lang="ts">
	import { onMount } from 'svelte'
	import VirtualList from 'svelte-tiny-virtual-list'
	import type { Icon } from '$lib/Icon'
	import { loadIcons } from '$lib/loadIcons'
	import { chunkArray } from '$lib/chunkArray'
	import { browser } from '$app/env'
	import Footer from '$lib/Footer.svelte'
	import { basePath } from '$lib/basePath'
	import Head from '$lib/Head.svelte'

	// --- setup state ---
	let search = browser
		? new URLSearchParams(window.location.search).get('q') || ''
		: ''
	$: if (browser) {
		history.replaceState(
			history.state,
			'',
			search ? `?q=${search}` : '.'
		)
	}
	let loading = true
	
	// state of the grid
	let scrollbarWidth = 0
	let itemWidth = 80
	let itemHeight = 80
	let itemsPerRow = 5
	let gridHeight = 500
	let gridContainer

	// Change the grid's dimensions when its container changes.
	$: if (gridContainer) {
		const gridWidth = Math.min(window.innerWidth - scrollbarWidth, 600)
		gridHeight = gridContainer.clientHeight
		itemHeight = Math.max(window.innerHeight / 12, 80)
		itemsPerRow = Math.floor(gridWidth / 120)
		itemWidth = gridWidth / itemsPerRow
	}

	let icons: Icon[] = []
	let iconSelection: Icon[] = []
	$: iconSelection = icons.filter(icon => icon.name.includes(search))
	let chunkedIconSelection: Icon[][] = []
	$: chunkedIconSelection = chunkArray(iconSelection, itemsPerRow)

	onMount(async () => {
		// calculate scrollbar width
		const x = document.createElement('div')
		x.style.overflow = 'scroll'
		document.body.appendChild(x)
		scrollbarWidth = x.offsetWidth - x.clientWidth
		document.body.removeChild(x)

		icons = await loadIcons()
		// When the window is resized, the gridContainer is resized too,
		// so we have to trigger changing the grid dimensions.
		window.addEventListener('resize', () => {
			gridContainer = gridContainer
		})
		loading = false
	})
</script>

<Head />

{#if loading}
	<div style="margin: auto">
		Loading icons...
	</div>
{:else}
	<label class="search">
		<span>
			{@html icons.find(icon => icon.name === 'solid/search').content}
		</span>
		<input bind:value={search} type="search">
	</label>
	<div class="grid-container" bind:this={gridContainer}>
		<VirtualList
			width="100%"
			height={gridHeight}
			itemCount={chunkedIconSelection.length}
			itemSize={itemHeight}
		>
			<div slot="item" let:index let:style {style} class="item-row">
				{#each chunkedIconSelection[index] as icon}	
					<a class="item" style="width: {itemWidth}px" href="{basePath}icon/?which={icon.name}">
						{@html icon.content }
						<div>
							<div class="truncate">
								{ icon.name }
							</div>
						</div>
					</a>
				{/each}
			</div>
		</VirtualList>
	</div>
{/if}
<Footer />

<style>
	.search {
		height: 2em;
		display: flex;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}
	.search span {
		margin: .5em;
		height: 1em;
		width: 1em;
	}
	input{
		width: 100%;
		border: 0;
		outline: 0;
		font-family: inherit;
		font-size: inherit;
		padding: .25em;
	}
	.grid-container {
		margin: .5em 0;
		min-height: 0;
		flex-grow: 1;
	}
	.item-row {
		justify-content: center;
		display: flex;
	}
	.item {
		padding: .5em;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		text-align: center;
		text-decoration: none;
		color: inherit;
	}
	.truncate {
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}
</style>