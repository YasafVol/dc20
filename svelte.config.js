import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI } from '@melt-ui/pp'; // Import Melt UI preprocessor (using correct named export)
// import { sequence } from '@sveltejs/kit/hooks'; // Removed sequence import

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [preprocessMeltUI(), vitePreprocess()], // Simplified array, Melt UI preprocessor first

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapters-auto for a list.
		// If your environment is not supported or you prefer specifying a single environment, then switch out and process this adapter:
		// import adapter from '@sveltejs/adapter-auto';
		adapter: adapter()
	}
};

export default config;
