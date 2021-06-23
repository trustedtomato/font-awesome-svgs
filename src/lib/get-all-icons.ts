import type { Icon } from '$lib/Icon'
import readdirp from 'readdirp'
import { readFileSync } from 'fs'

const svgDirPath = './node_modules/@fortawesome/fontawesome-free/svgs'

export async function getAllIcons (): Promise<Icon[]> {
  const iconCollection: Icon[] = []
  for await (const { path, fullPath } of
    readdirp(svgDirPath)
  ) {
    const content = readFileSync(fullPath, 'utf8')
    iconCollection.push({
      name: path.split('.').slice(0, -1).join('.').replace(/\//, '+'),
      content
    })
  }
  return iconCollection
}