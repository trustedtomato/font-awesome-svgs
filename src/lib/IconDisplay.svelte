<script lang="ts">
  import type { Icon } from './Icon'

  export let icon: Icon
  let aHref: string
  $: if(icon?.content) {
    aHref = 'data:text/plain;charset=utf-8,' + encodeURIComponent(icon?.content)
  }
</script>

<div style="display: flex">
  <div class="icon-container" style="margin: .5em">
    {@html icon?.content }
  </div>
  <div>
    <a download={icon?.name} href={aHref} style="margin: .5em; display: inline-block">
      Download!
    </a>
    <div style="margin: 0 .5em .5em .5em;">
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
    width: 5em;
    height: 5em;
  }
  code {
    display: block;
    padding: .5em;
    margin: .5em;
    background: black;
    color: white;
    word-wrap: break-word;
    overflow-wrap: anywhere;
  }
</style>
