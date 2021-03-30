<script lang="ts">
  import type { Icon } from './Icon'

  export let icon: Icon
  let aHref: string
  $: aHref = icon?.content
    ? 'data:text/plain;charset=utf-8,' + encodeURIComponent(icon?.content)
    : null
</script>

<div style="display: flex">
  <div class="icon-container" style="margin: 8px">
    {@html icon?.content }
  </div>
  <div>
    <a download={icon?.name} href={aHref} style="margin: 8px; display: inline-block">
      Download!
    </a>
    <div style="margin: 0 8px 8px 8px;">
      Code:
    </div>
    <code>{ icon?.content }</code>
  </div>
</div>

<style>
  .icon-container {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 80px;
  }
  code {
    display: block;
    padding: 8px;
    margin: 8px;
    background: black;
    color: white;
    word-wrap: break-word;
    overflow-wrap: anywhere;
  }
</style>
