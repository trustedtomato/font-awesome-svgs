<script lang="ts">
  import { basePath } from '$lib/basePath'
  export let extraTitle: string
</script>

<svelte:head>
  <title>{ extraTitle ? `${extraTitle} – ` : ''}Font Awesome SVGs</title>
  <link rel="icon" href="{basePath}icons/solid_anchor.svg" />
</svelte:head>