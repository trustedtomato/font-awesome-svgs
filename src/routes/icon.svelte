<script lang="ts">
  import { onMount } from 'svelte'
  import { loadIcons } from '$lib/loadIcons'
  import type { Icon } from '$lib/Icon'
  import { browser } from '$app/env'
  import IconDisplay from '$lib/IconDisplay.svelte'
  import Footer from '$lib/Footer.svelte'
  import Head from '$lib/Head.svelte'

  const query = browser
    ? new URLSearchParams(window.location.search).get('which')
    : null
  let icons: Icon[] = []
  let icon: Icon
  $: icon = icons.find(icon => icon.name === query)

  onMount(async () => {
    // TODO Only load all icons if that file is cached (cache: 'only-if-cached')
    // else it should just load the icon it needs.
    icons = await loadIcons()
  })
</script>

<Head extraTitle={query} />

<div style="flex-grow: 1; display: flex; flex-direction: column">
  {#if icon}
    <IconDisplay icon={icon} />
  {:else}
    <div style="margin: auto">
      Loading icon...
    </div>
  {/if}
</div>
<Footer />
