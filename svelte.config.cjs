const sveltePreprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const basePath = process.env.BASE

if (basePath) {
	console.log('Using base path: ' + basePath)
} else {
	console.log('Not using any base path.')
}

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter(),
		target: '#svelte',
		paths: basePath
			? { base: basePath }
			: {},

		// TODO This should be updated once https://github.com/sveltejs/kit/issues/733 is resolved.
		router: false,
	
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
