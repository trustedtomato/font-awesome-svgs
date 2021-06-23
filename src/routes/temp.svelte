<script context="module" lang="ts">
  import { base } from '$app/paths'
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    const icons = await fetch(`${base}/icon/all.txt`)
      .then(res => res.text())
      .then(text => text
        .split('\n')
        .map(line => line.split(':')[0])
      )
    return {
      props: {
        icons: await Promise.all(icons.map(icon => Promise.all([
          fetch(`${base}/icon/${icon}`).then(res => res.text()).then(text => text.length),
          fetch(`${base}/icon/${icon}.svg`).then(res => res.text()).then(text => text.length)
        ]))).then(x => x.flat().reduce((a, b) => a + b, 0))
      }
    }
  }
</script>

<script>
  export let icons
</script>

{ icons }
This route is temporary and should be deleted once the built is finished.