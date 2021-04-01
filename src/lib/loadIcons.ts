import { basePath } from '$lib/basePath'
import type { Icon } from './Icon'

export async function loadIcons (): Promise<Icon[]> {
  const iconsRaw = await fetch(basePath + 'icons/collection.txt')
      .then(response => response.text())
  const icons = []
  for (const line of iconsRaw.split('\n')) {	
    const match = line.match(/(.*?):(.*)/)
    if (!match) {
      console.warn('the syntax of the following line is incorrect: ' + line)
      continue
    }
    icons.push({
      name: match[1],
      content: match[2]
    })
  }
  return icons
}
