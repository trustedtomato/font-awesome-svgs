import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8'))
const basePath = process.env.BASE

if (basePath) {
	console.log('Using base path: ' + basePath)
} else {
	console.log('Not using any base path.')
}

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: sveltePreprocess(),
	kit: {
		trailingSlash: 'ignore',
		adapter: adapter(),
		target: '#svelte',
		paths: basePath
			? { base: basePath }
			: {},
	
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
