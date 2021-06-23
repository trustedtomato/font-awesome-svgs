import pathLib from 'path'
import { readFileSync } from 'fs'
import type { RequestHandler } from '@sveltejs/kit'

const svgDirPath = './node_modules/@fortawesome/fontawesome-free/svgs'

export const get: RequestHandler = async function ({ params }) {
  const { name } = params

  const body = readFileSync(pathLib.join(svgDirPath, `${name.replace(/\+/, '/')}.svg`), 'utf8')

  return {
    body
  }
}

