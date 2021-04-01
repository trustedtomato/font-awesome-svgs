// This is a hacky way to get the base URL specified in svelte.config.cjs.
// As soon as something nicer is available, please update this.
/** The base path, ends with a slash. */
export const basePath = import.meta.env.BASE_URL.replace(/_app\/?$/, '')