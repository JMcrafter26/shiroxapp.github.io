import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// The site is fully prerendered static output — deployable to GitHub Pages,
			// Cloudflare Pages, or any static host. Assumes it is served from a domain
			// root; if served from a subpath, set kit.paths.base here too.
			adapter: adapter()
		})
	]
});
