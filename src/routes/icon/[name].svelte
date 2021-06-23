<script context="module" lang="ts">
  import { base } from '$app/paths'
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ page, fetch }) => {
    const name = page.params.name
    const content = await fetch(`${base}/icon/${name}.svg`)
      .then(res => res.text())
    return {
      props: {
        name,
        content
      }
    }
  }
</script>

<script lang="ts">
  import IconDisplay from '$lib/IconDisplay.svelte'
  import Footer from '$lib/Footer.svelte'
  import Head from '$lib/Head.svelte'

  export let name: string
  export let content: string
</script>

<Head extraTitle={name.replace(/\+/, '/')} />

<div style="flex-grow: 1; display: flex; flex-direction: column">
  <IconDisplay icon={{ name, content }} />
</div>
<Footer />
