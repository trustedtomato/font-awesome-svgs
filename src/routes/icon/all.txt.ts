import { readFileSync } from 'fs'
import readdirp from 'readdirp'
import type { RequestHandler } from '@sveltejs/kit'
import { getAllIcons } from '$lib/get-all-icons'

interface Icon extends Record<string, string> {
  name: string
  content: string
}

export const get: RequestHandler = async function () {
  const iconCollection: Icon[] = await getAllIcons()

  return {
    body: iconCollection
      .map(icon => `${icon.name}:${icon.content
        .replace(/\r?\n/g, ' ')
      }`)
      .join('\n')
  }
}

