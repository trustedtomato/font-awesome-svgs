<script lang="ts">
  import { onMount } from 'svelte'
  import { loadIcons } from '$lib/loadIcons';
  import type { Icon } from '$lib/Icon';
  import { browser } from '$app/env';
  import IconDisplay from '$lib/IconDisplay.svelte'

  const query = browser
    ? new URLSearchParams(window.location.search).get('which')
    : null
  let icons: Icon[] = []
  let icon: Icon
  $: icon = icons.find(icon => icon.name === query)

  onMount(async () => {
    icons = await loadIcons()
  })
</script>

<svelte:head>
	<title>{query} – Font Awesome SVGs</title>
</svelte:head>

<div>
  <IconDisplay icon={icon} />
</div>