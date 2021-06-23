import { readFileSync } from 'fs'
import readdirp from 'readdirp'
import type { RequestHandler } from '@sveltejs/kit'

const svgDirPath = './node_modules/@fortawesome/fontawesome-free/svgs'

export const get: RequestHandler = async function () {
  const iconCollection: string[] = []

  for await (const { path, fullPath } of
    readdirp(svgDirPath)
  ) {
    iconCollection.push(path.replace(/\//g, '+'))
  }

  return {
    body: iconCollection.join('\n')
  }
}

