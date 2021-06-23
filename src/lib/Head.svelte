<script lang="ts">
  import { base } from '$app/paths'
  export let extraTitle: string | undefined
</script>

<svelte:head>
  <title>{ extraTitle ? `${extraTitle} – ` : ''}Font Awesome SVGs</title>
  <link rel="icon" href="{base}/icon/solid+anchor.svg" />
</svelte:head>