This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
.gitignore
.repomixignore
.svelte-kit/ambient.d.ts
.svelte-kit/generated/client/app.js
.svelte-kit/generated/client/matchers.js
.svelte-kit/generated/client/nodes/0.js
.svelte-kit/generated/client/nodes/1.js
.svelte-kit/generated/client/nodes/2.js
.svelte-kit/generated/client/nodes/3.js
.svelte-kit/generated/client/nodes/4.js
.svelte-kit/generated/client/nodes/5.js
.svelte-kit/generated/client/nodes/6.js
.svelte-kit/generated/root.js
.svelte-kit/generated/root.svelte
.svelte-kit/generated/server/internal.js
.svelte-kit/non-ambient.d.ts
.svelte-kit/output/server/_app/immutable/assets/_layout.sp9yVA3c.css
.svelte-kit/output/server/.vite/manifest.json
.svelte-kit/output/server/chunks/ancestries.js
.svelte-kit/output/server/chunks/attributes.js
.svelte-kit/output/server/chunks/characterInProgressStore.js
.svelte-kit/output/server/chunks/classes.js
.svelte-kit/output/server/chunks/client.js
.svelte-kit/output/server/chunks/exports.js
.svelte-kit/output/server/chunks/index.js
.svelte-kit/output/server/chunks/index2.js
.svelte-kit/output/server/chunks/index3.js
.svelte-kit/output/server/chunks/internal.js
.svelte-kit/output/server/chunks/traits.js
.svelte-kit/output/server/entries/endpoints/api/character/progress/complete/_server.ts.js
.svelte-kit/output/server/entries/endpoints/api/character/progress/stageA/_server.ts.js
.svelte-kit/output/server/entries/endpoints/api/character/progress/stageB/_server.ts.js
.svelte-kit/output/server/entries/fallbacks/error.svelte.js
.svelte-kit/output/server/entries/pages/_layout.svelte.js
.svelte-kit/output/server/entries/pages/_page.svelte.js
.svelte-kit/output/server/entries/pages/character-creator/_page.svelte.js
.svelte-kit/output/server/entries/pages/character-creator/stage-a/_page.svelte.js
.svelte-kit/output/server/entries/pages/character-creator/stage-b/_page.svelte.js
.svelte-kit/output/server/entries/pages/test-ui/_page.svelte.js
.svelte-kit/output/server/index.js
.svelte-kit/output/server/internal.js
.svelte-kit/output/server/manifest-full.js
.svelte-kit/output/server/nodes/0.js
.svelte-kit/output/server/nodes/1.js
.svelte-kit/output/server/nodes/2.js
.svelte-kit/output/server/nodes/3.js
.svelte-kit/output/server/nodes/4.js
.svelte-kit/output/server/nodes/5.js
.svelte-kit/output/server/nodes/6.js
.svelte-kit/tsconfig.json
docs/sveltekitOnVercel.md
docs/viteOnVercel.md
memory-bank/activeContext.md
memory-bank/productContext.md
memory-bank/progress.md
memory-bank/projectbrief.md
memory-bank/systemPatterns.md
memory-bank/techContext.md
package.json
postcss.config.js
prisma/migrations/20250526210112_init/migration.sql
prisma/migrations/20250620112102_allow_next_in_stage_a/migration.sql
prisma/migrations/migration_lock.toml
prisma/schema.prisma
projectPlan/cleanVercelMigration.md
projectPlan/content.md
projectPlan/geminiTasks.md
projectPlan/merge-character-stages-plan.md
projectPlan/mvp.md
projectPlan/stage0.md
projectPlan/stage1.md
projectPlan/stage2.md
projectPlan/stage3.md
projectPlan/status.md
projectPlan/tailwind.config.js
projectPlan/techDesignDebt.md
repomix.config.json
src/app.css
src/app.html
src/lib/components/ui/button/button.svelte
src/lib/components/ui/button/index.ts
src/lib/components/ui/input/index.ts
src/lib/components/ui/input/input.svelte
src/lib/components/ui/label/index.ts
src/lib/components/ui/label/label.svelte
src/lib/components/ui/radio-group/index.ts
src/lib/components/ui/radio-group/radio-group-item.svelte
src/lib/components/ui/radio-group/radio-group-root.svelte
src/lib/rulesdata/ancestries.ts
src/lib/rulesdata/attributes.ts
src/lib/rulesdata/classes.ts
src/lib/rulesdata/languages.ts
src/lib/rulesdata/skills.ts
src/lib/rulesdata/sorcerer.ts
src/lib/rulesdata/trades.ts
src/lib/rulesdata/traits.ts
src/lib/rulesdata/types.ts
src/lib/stores/characterInProgressStore.ts
src/routes/+layout.svelte
src/routes/+page.svelte
src/routes/api/character/progress/_backup_merge_stages_20250621/stageA+server.ts
src/routes/api/character/progress/_backup_merge_stages_20250621/stageB+server.ts
src/routes/api/character/progress/complete/+server.ts
src/routes/api/character/progress/stageA/+server.ts
src/routes/api/character/progress/stageB/+server.ts
src/routes/character-creator/_backup_merge_stages_20250621/stage-a+page.svelte
src/routes/character-creator/_backup_merge_stages_20250621/stage-b+page.svelte
src/routes/character-creator/+page.svelte
src/routes/character-creator/stage-a/+page.svelte
src/routes/character-creator/stage-b/+page.svelte
src/routes/test-ui/+page.svelte
svelte.config.js
tailwind.config.js
tsconfig.json
vercel.json
vite.config.js
```

# Files

## File: .gitignore
````
*.pdf
````

## File: .repomixignore
````
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
*.pdf
````

## File: .svelte-kit/generated/client/matchers.js
````javascript
export const matchers = {};
````

## File: .svelte-kit/generated/client/nodes/1.js
````javascript
export { default as component } from "../../../../node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte";
````

## File: .svelte-kit/generated/client/nodes/2.js
````javascript
export { default as component } from "../../../../src/routes/+page.svelte";
````

## File: .svelte-kit/generated/client/nodes/6.js
````javascript
export { default as component } from "../../../../src/routes/test-ui/+page.svelte";
````

## File: .svelte-kit/generated/root.js
````javascript
import { asClassComponent } from 'svelte/legacy';
import Root from './root.svelte';
export default asClassComponent(Root);
````

## File: .svelte-kit/generated/root.svelte
````
<!-- This file is generated by @sveltejs/kit — do not edit it! -->
<svelte:options runes={true} />
<script>
	import { setContext, onMount, tick } from 'svelte';
	import { browser } from '$app/environment';

	// stores
	let { stores, page, constructors, components = [], form, data_0 = null, data_1 = null } = $props();

	if (!browser) {
		setContext('__svelte__', stores);
	}

	if (browser) {
		$effect.pre(() => stores.page.set(page));
	} else {
		stores.page.set(page);
	}
	$effect(() => {
		stores;page;constructors;components;form;data_0;data_1;
		stores.page.notify();
	});

	let mounted = $state(false);
	let navigated = $state(false);
	let title = $state(null);

	onMount(() => {
		const unsubscribe = stores.page.subscribe(() => {
			if (mounted) {
				navigated = true;
				tick().then(() => {
					title = document.title || 'untitled page';
				});
			}
		});

		mounted = true;
		return unsubscribe;
	});

	const Pyramid_1=$derived(constructors[1])
</script>

{#if constructors[1]}
	{@const Pyramid_0 = constructors[0]}
							<!-- svelte-ignore binding_property_non_reactive -->
							<Pyramid_0 bind:this={components[0]} data={data_0} {form}>
								<!-- svelte-ignore binding_property_non_reactive -->
										<Pyramid_1 bind:this={components[1]} data={data_1} {form} />
							</Pyramid_0>
	
{:else}
	{@const Pyramid_0 = constructors[0]}
	<!-- svelte-ignore binding_property_non_reactive -->
	<Pyramid_0 bind:this={components[0]} data={data_0} {form} />
	
{/if}

{#if mounted}
	<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px">
		{#if navigated}
			{title}
		{/if}
	</div>
{/if}
````

## File: .svelte-kit/non-ambient.d.ts
````typescript
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};
````

## File: .svelte-kit/output/server/_app/immutable/assets/_layout.sp9yVA3c.css
````css
*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Inter,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:0}.z-50{z-index:50}.col-span-2{grid-column:span 2 / span 2}.m-4{margin:1rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-4{margin-top:1rem;margin-bottom:1rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-3{margin-left:.75rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mr-3{margin-right:.75rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-10{height:2.5rem}.h-2{height:.5rem}.h-24{height:6rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-8{height:2rem}.w-1{width:.25rem}.w-12{width:3rem}.w-2{width:.5rem}.w-24{width:6rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-8{width:2rem}.w-full{width:100%}.min-w-\[140px\]{min-width:140px}.max-w-md{max-width:28rem}.flex-1{flex:1 1 0%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-y-2{row-gap:.5rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-2{border-width:2px}.border-dark-bg-primary{--tw-border-opacity: 1;border-color:rgb(17 24 39 / var(--tw-border-opacity, 1))}.border-light-text-primary{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-purple-primary{--tw-border-opacity: 1;border-color:rgb(131 56 236 / var(--tw-border-opacity, 1))}.border-yellow-accent{--tw-border-opacity: 1;border-color:rgb(255 190 11 / var(--tw-border-opacity, 1))}.bg-black\/50{background-color:#00000080}.bg-dark-bg-primary{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity, 1))}.bg-dark-bg-secondary{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity, 1))}.bg-magenta-error\/70{background-color:#ff006eb3}.bg-orange-secondary{--tw-bg-opacity: 1;background-color:rgb(251 86 7 / var(--tw-bg-opacity, 1))}.bg-purple-primary{--tw-bg-opacity: 1;background-color:rgb(131 56 236 / var(--tw-bg-opacity, 1))}.bg-purple-primary\/20{background-color:#8338ec33}.bg-purple-primary\/70{background-color:#8338ecb3}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.bg-yellow-accent{--tw-bg-opacity: 1;background-color:rgb(255 190 11 / var(--tw-bg-opacity, 1))}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.leading-tight{line-height:1.25}.text-blue-info{--tw-text-opacity: 1;color:rgb(58 134 255 / var(--tw-text-opacity, 1))}.text-dark-bg-primary{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-light-text-primary{--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity, 1))}.text-light-text-secondary{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-magenta-error{--tw-text-opacity: 1;color:rgb(255 0 110 / var(--tw-text-opacity, 1))}.text-purple-300{--tw-text-opacity: 1;color:rgb(216 180 254 / var(--tw-text-opacity, 1))}.text-purple-primary{--tw-text-opacity: 1;color:rgb(131 56 236 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-accent{--tw-text-opacity: 1;color:rgb(255 190 11 / var(--tw-text-opacity, 1))}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.ring-offset-dark-bg-primary{--tw-ring-offset-color: #111827}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.placeholder\:text-light-text-secondary::-moz-placeholder{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.placeholder\:text-light-text-secondary::placeholder{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.hover\:bg-gray-600:hover{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.hover\:bg-magenta-error:hover{--tw-bg-opacity: 1;background-color:rgb(255 0 110 / var(--tw-bg-opacity, 1))}.hover\:bg-purple-primary:hover{--tw-bg-opacity: 1;background-color:rgb(131 56 236 / var(--tw-bg-opacity, 1))}.hover\:bg-purple-primary\/80:hover{background-color:#8338eccc}.hover\:bg-red-600:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity, 1))}.hover\:bg-yellow-accent\/90:hover{background-color:#ffbe0be6}.hover\:bg-opacity-80:hover{--tw-bg-opacity: .8}.focus\:ring-purple-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(131 56 236 / var(--tw-ring-opacity, 1))}.focus-visible\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.disabled\:pointer-events-none:disabled{pointer-events:none}.disabled\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\:opacity-70{opacity:.7}.dark\:bg-dark-bg-secondary:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\:hover\:bg-dark-bg-primary:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity, 1))}@media (min-width: 768px){.md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\:p-8{padding:2rem}}
````

## File: .svelte-kit/output/server/.vite/manifest.json
````json
{
  ".svelte-kit/generated/server/internal.js": {
    "file": "internal.js",
    "name": "internal",
    "src": ".svelte-kit/generated/server/internal.js",
    "isEntry": true,
    "imports": [
      "_internal.js"
    ]
  },
  "_ancestries.js": {
    "file": "chunks/ancestries.js",
    "name": "ancestries"
  },
  "_attributes.js": {
    "file": "chunks/attributes.js",
    "name": "attributes"
  },
  "_characterInProgressStore.js": {
    "file": "chunks/characterInProgressStore.js",
    "name": "characterInProgressStore",
    "imports": [
      "_index3.js",
      "_classes.js"
    ]
  },
  "_classes.js": {
    "file": "chunks/classes.js",
    "name": "classes"
  },
  "_client.js": {
    "file": "chunks/client.js",
    "name": "client",
    "imports": [
      "_exports.js",
      "_index3.js",
      "_index.js"
    ]
  },
  "_exports.js": {
    "file": "chunks/exports.js",
    "name": "exports"
  },
  "_index.js": {
    "file": "chunks/index.js",
    "name": "index"
  },
  "_index2.js": {
    "file": "chunks/index2.js",
    "name": "index"
  },
  "_index3.js": {
    "file": "chunks/index3.js",
    "name": "index",
    "imports": [
      "_index.js"
    ]
  },
  "_internal.js": {
    "file": "chunks/internal.js",
    "name": "internal",
    "imports": [
      "_index.js"
    ]
  },
  "_traits.js": {
    "file": "chunks/traits.js",
    "name": "traits"
  },
  "node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte": {
    "file": "entries/fallbacks/error.svelte.js",
    "name": "entries/fallbacks/error.svelte",
    "src": "node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte",
    "isEntry": true,
    "imports": [
      "_index.js",
      "_client.js"
    ]
  },
  "node_modules/@sveltejs/kit/src/runtime/server/index.js": {
    "file": "index.js",
    "name": "index",
    "src": "node_modules/@sveltejs/kit/src/runtime/server/index.js",
    "isEntry": true,
    "imports": [
      "_index.js",
      "_internal.js",
      "_index2.js",
      "_exports.js",
      "_index3.js"
    ]
  },
  "src/routes/+layout.svelte": {
    "file": "entries/pages/_layout.svelte.js",
    "name": "entries/pages/_layout.svelte",
    "src": "src/routes/+layout.svelte",
    "isEntry": true,
    "imports": [
      "_index.js"
    ],
    "css": [
      "_app/immutable/assets/_layout.sp9yVA3c.css"
    ]
  },
  "src/routes/+page.svelte": {
    "file": "entries/pages/_page.svelte.js",
    "name": "entries/pages/_page.svelte",
    "src": "src/routes/+page.svelte",
    "isEntry": true
  },
  "src/routes/api/character/progress/complete/+server.ts": {
    "file": "entries/endpoints/api/character/progress/complete/_server.ts.js",
    "name": "entries/endpoints/api/character/progress/complete/_server.ts",
    "src": "src/routes/api/character/progress/complete/+server.ts",
    "isEntry": true,
    "imports": [
      "_index2.js",
      "_classes.js",
      "_traits.js"
    ]
  },
  "src/routes/api/character/progress/stageA/+server.ts": {
    "file": "entries/endpoints/api/character/progress/stageA/_server.ts.js",
    "name": "entries/endpoints/api/character/progress/stageA/_server.ts",
    "src": "src/routes/api/character/progress/stageA/+server.ts",
    "isEntry": true,
    "imports": [
      "_index2.js"
    ]
  },
  "src/routes/api/character/progress/stageB/+server.ts": {
    "file": "entries/endpoints/api/character/progress/stageB/_server.ts.js",
    "name": "entries/endpoints/api/character/progress/stageB/_server.ts",
    "src": "src/routes/api/character/progress/stageB/+server.ts",
    "isEntry": true,
    "imports": [
      "_index2.js",
      "_ancestries.js",
      "_traits.js"
    ]
  },
  "src/routes/character-creator/+page.svelte": {
    "file": "entries/pages/character-creator/_page.svelte.js",
    "name": "entries/pages/character-creator/_page.svelte",
    "src": "src/routes/character-creator/+page.svelte",
    "isEntry": true,
    "imports": [
      "_index.js",
      "_characterInProgressStore.js",
      "_attributes.js",
      "_ancestries.js",
      "_classes.js"
    ]
  },
  "src/routes/character-creator/stage-a/+page.svelte": {
    "file": "entries/pages/character-creator/stage-a/_page.svelte.js",
    "name": "entries/pages/character-creator/stage-a/_page.svelte",
    "src": "src/routes/character-creator/stage-a/+page.svelte",
    "isEntry": true,
    "imports": [
      "_index.js",
      "_client.js",
      "_characterInProgressStore.js",
      "_attributes.js"
    ]
  },
  "src/routes/character-creator/stage-b/+page.svelte": {
    "file": "entries/pages/character-creator/stage-b/_page.svelte.js",
    "name": "entries/pages/character-creator/stage-b/_page.svelte",
    "src": "src/routes/character-creator/stage-b/+page.svelte",
    "isEntry": true,
    "imports": [
      "_index.js",
      "_characterInProgressStore.js",
      "_ancestries.js"
    ]
  },
  "src/routes/test-ui/+page.svelte": {
    "file": "entries/pages/test-ui/_page.svelte.js",
    "name": "entries/pages/test-ui/_page.svelte",
    "src": "src/routes/test-ui/+page.svelte",
    "isEntry": true,
    "imports": [
      "_index.js",
      "_index3.js"
    ]
  }
}
````

## File: .svelte-kit/output/server/chunks/ancestries.js
````javascript
const ancestriesData = [
  {
    id: "human",
    name: "Human",
    description: "Humans are the most common ancestry in the world, known for their adaptability and resilience.",
    defaultTraitIds: ["human_attribute_increase", "human_skill_expertise", "human_resolve", "human_undying"],
    expandedTraitIds: ["human_trade_expertise", "human_determination", "human_unbreakable", "human_attribute_decrease"]
  },
  {
    id: "elf",
    name: "Elf",
    description: "Elves are graceful and long-lived beings with a deep connection to nature.",
    defaultTraitIds: ["elf_elven_will", "elf_nimble", "elf_agile_explorer", "elf_discerning_sight"],
    expandedTraitIds: ["elf_quick_reactions", "elf_peerless_sight", "elf_climb_speed", "elf_speed_increase", "elf_trade_expertise_elf", "elf_plant_knowledge", "elf_brittle", "elf_frail", "elf_might_decrease"]
  },
  {
    id: "dwarf",
    name: "Dwarf",
    description: "Dwarves are a stout and resilient folk, known for their craftsmanship and deep connection to the earth.",
    defaultTraitIds: ["dwarf_tough", "dwarf_toxic_fortitude", "dwarf_physically_sturdy", "dwarf_iron_stomach"],
    expandedTraitIds: ["dwarf_thick_skinned", "dwarf_natural_combatant", "dwarf_stone_blood", "dwarf_minor_tremorsense", "dwarf_stubborn", "dwarf_trade_expertise", "dwarf_earthen_knowledge", "dwarf_charisma_attribute_decrease", "dwarf_short_legged"]
  },
  {
    id: "halfling",
    name: "Halfling",
    description: "Halflings are a small and nimble folk, known for their bravery and love of comfort.",
    defaultTraitIds: ["halfling_small_sized", "halfling_elusive", "halfling_bravery", "halfling_endurance", "halfling_deft_footwork", "halfling_beast_whisperer"],
    expandedTraitIds: ["halfling_beast_insight", "halfling_burst_of_bravery", "halfling_trade_expertise", "halfling_critter_knowledge", "halfling_brittle", "halfling_intelligence_attribute_decrease", "halfling_short_legged"]
  },
  {
    id: "gnome",
    name: "Gnome",
    description: "Gnomes are small and energetic folk, known for their inventiveness and connection to the feywild.",
    defaultTraitIds: ["gnome_small_sized", "gnome_escape_artist", "gnome_magnified_vision", "gnome_mental_clarity", "gnome_strong_minded", "gnome_predict_weather"],
    expandedTraitIds: ["gnome_mana_increase", "gnome_trapper", "gnome_lightning_insulation", "gnome_trade_expertise", "gnome_storm_knowledge", "gnome_agility_attribute_decrease", "gnome_short_legged"]
  },
  {
    id: "orc",
    name: "Orc",
    description: "Orcs are a strong and fierce folk, known for their martial prowess and intimidating presence.",
    defaultTraitIds: ["orc_cursed_mind", "orc_rush", "orc_brutal_strikes", "orc_tough", "orc_orcish_resolve", "orc_already_cursed"],
    expandedTraitIds: ["orc_intimidating_shout", "orc_dash", "orc_finishing_blow", "orc_imposing_presence", "orc_provocation", "orc_reckless"]
  },
  {
    id: "dragonborn",
    name: "Dragonborn",
    description: "Dragonborn are a proud and powerful folk, who trace their lineage back to dragons.",
    defaultTraitIds: ["dragonborn_darkvision", "dragonborn_draconic_resistance", "dragonborn_draconic_breath_weapon", "dragonborn_reptilian_superiority"],
    expandedTraitIds: ["dragonborn_mana_increase", "dragonborn_thick_skinned", "dragonborn_second_breath", "dragonborn_concussive_breath", "dragonborn_draconic_affinity", "dragonborn_dying_breath", "dragonborn_draconic_ward", "dragonborn_draconic_protection", "dragonborn_glide_speed", "dragonborn_guardians_bond"],
    origin: {
      // Draconic Origin
      prompt: "Choose a Draconic Origin:",
      options: ["cold", "corrosion", "fire", "lightning", "poison", "sonic", "psychic", "radiant", "umbral"]
    }
  },
  {
    id: "giantborn",
    name: "Giantborn",
    description: "Giantborn are a large and powerful folk, who trace their lineage back to giants.",
    defaultTraitIds: ["giantborn_tough", "giantborn_powerful_build", "giantborn_unstoppable", "giantborn_giants_resolve", "giantborn_unyielding_movement"],
    expandedTraitIds: ["giantborn_giants_fortitude", "giantborn_strong_body", "giantborn_mighty_hurl", "giantborn_titanic_toss", "giantborn_mighty_leap", "giantborn_brute", "giantborn_heavy_riser", "giantborn_clumsiness", "giantborn_intelligence_attribute_decrease"]
  },
  {
    id: "angelborn",
    name: "Angelborn",
    description: "Angelborn are a celestial folk, known for their grace and divine connection.",
    defaultTraitIds: ["angelborn_radiant_resistance", "angelborn_celestial_magic", "angelborn_healing_touch", "angelborn_divine_glow"],
    expandedTraitIds: ["angelborn_mana_increase", "angelborn_celestial_clarity", "angelborn_angelic_insight", "angelborn_gift_of_the_angels", "angelborn_blinding_light", "angelborn_glide_speed", "angelborn_pacifist", "angelborn_umbral_weakness"],
    variantTraits: [
      // Fallen Angelborn
      { id: "angelborn_fallen", name: "Fallen", cost: 0, description: "You can now spend your Ancestry Points on Fiendborn Traits." }
    ]
  },
  {
    id: "fiendborn",
    name: "Fiendborn",
    description: "Fiendborn are a fiendish folk, known for their cunning and infernal connection.",
    defaultTraitIds: ["fiendborn_fiendish_resistance", "fiendborn_fiendish_magic", "fiendborn_darkvision", "fiendborn_lights_bane"],
    expandedTraitIds: ["fiendborn_mana_increase", "fiendborn_silver_tongued", "fiendborn_fiendish_aura", "fiendborn_superior_darkvision", "fiendborn_infernal_bravery", "fiendborn_intimidator", "fiendborn_charming_gaze", "fiendborn_glide_speed", "fiendborn_radiant_weakness", "fiendborn_divine_dampening"],
    origin: {
      // Fiendish Origin
      prompt: "Choose a Fiendish Origin:",
      options: ["cold", "corrosion", "fire", "poison", "umbral"]
    },
    variantTraits: [
      // Fiendborn Redemption
      { id: "fiendborn_redeemed", name: "Redeemed", cost: 0, description: "You can now spend your Ancestry Points on Angelborn Traits." }
    ]
  },
  {
    id: "beastborn",
    name: "Beastborn",
    description: "Beastborn are a diverse folk, who take on the characteristics of various beasts.",
    defaultTraitIds: [],
    // Beastborn has no Default Traits
    expandedTraitIds: [
      // Listed under Beast Traits sections in PDF
      // Senses
      "beastborn_darkvision",
      "beastborn_echolocation",
      "beastborn_keen_sense",
      "beastborn_sunlight_sensitivity",
      // Mobility
      "beastborn_quick_reactions",
      "beastborn_climb_speed",
      "beastborn_spider_climb",
      "beastborn_web_walk",
      "beastborn_water_breathing",
      "beastborn_swim_speed",
      "beastborn_speed_increase",
      "beastborn_sprint",
      "beastborn_charge",
      "beastborn_burrow_speed",
      // Jumping
      "beastborn_jumper",
      "beastborn_strong_jumper",
      // Flying
      "beastborn_glide_speed",
      "beastborn_limited_flight",
      "beastborn_full_flight",
      "beastborn_flyby",
      "beastborn_stealth_feathers",
      "beastborn_winged_arms",
      // Body
      "beastborn_tough",
      "beastborn_thick_skinned",
      "beastborn_powerful_build",
      "beastborn_long_limbed",
      "beastborn_secondary_arms",
      "beastborn_prehensile_appendage",
      "beastborn_hazardous_hide",
      "beastborn_natural_armor",
      "beastborn_hard_shell",
      "beastborn_shell_retreat",
      "beastborn_camouflage",
      "beastborn_prowler",
      "beastborn_cold_resistance",
      "beastborn_fire_resistance",
      "beastborn_short_legged",
      "beastborn_small_sized",
      "beastborn_reckless",
      // Natural Weapons
      "beastborn_natural_weapon",
      "beastborn_extended_natural_weapon",
      "beastborn_natural_projectile",
      "beastborn_natural_weapon_passive",
      "beastborn_rend",
      "beastborn_retractable_natural_weapon",
      "beastborn_venomous_natural_weapon",
      // Miscellaneous
      "beastborn_fast_reflexes",
      "beastborn_mimicry",
      "beastborn_intimidating_shout",
      "beastborn_toxic_fortitude",
      "beastborn_shoot_webs"
    ],
    origin: {
      // Beastborn Origin
      prompt: "Choose a type of Beast you are modeled after:",
      options: []
      // Options are open-ended, based on GM/player choice
    }
  }
];
export {
  ancestriesData as a
};
````

## File: .svelte-kit/output/server/chunks/attributes.js
````javascript
const attributesData = [
  // TODO: Replace bracketed placeholders with accurate information from the DC20 Beta 0.9.5 rulebook.
  {
    id: "might",
    name: "Might",
    description: "Your Strength of Body.",
    derivedStats: [
      // Examples, verify/adjust based on actual rules for each attribute
      { statName: "AD (area defense)", formula: "8 + CM + Might + Charisma + Bonuses" },
      { statName: "Max HP", formula: "Class HP + Might + Ancestry HP" }
    ]
  },
  {
    id: "agility",
    name: "Agility",
    description: "Your Balance, Nimbleness, and Dexterity.",
    derivedStats: [
      { statName: "PD (precision defense)", formula: "8 + CM + Agility + Intelligence + Bonuses" },
      { statName: "Jump Distance", formula: "Agility (min 1)" },
      { statName: "Initiative", formula: "CM + Agility" }
    ]
  },
  {
    id: "charisma",
    name: "Charisma",
    description: "Your Charm, Presence, Persuasiveness, and Force of Will.",
    derivedStats: [
      { statName: "Grit Points", formula: "2 + Charisma" }
    ]
  },
  {
    id: "intelligence",
    name: "Intelligence",
    description: "Your Reasoning, Understanding, and Wisdom.",
    derivedStats: [
      { statName: "Base Skill Points", formula: "5 + Intelligence" }
    ]
  }
];
export {
  attributesData as a
};
````

## File: .svelte-kit/output/server/chunks/characterInProgressStore.js
````javascript
import { d as derived, w as writable } from "./index3.js";
import { c as classesData } from "./classes.js";
const initialCharacterInProgressState = {
  id: "",
  // Will be set when a new character is started/loaded
  attribute_might: -2,
  attribute_agility: -2,
  attribute_charisma: -2,
  attribute_intelligence: -2,
  pointsSpent: 0,
  // Core Stats
  level: 1,
  // Default to Level 1 for MVP
  combatMastery: 1,
  // Calculated: Math.ceil(level / 2)
  ancestry1Id: null,
  ancestry2Id: null,
  selectedTraitIds: "",
  // JSON string of selected trait IDs
  ancestryPointsSpent: 0,
  classId: null,
  selectedFeatureChoices: "",
  // JSON string of selected feature choice IDs/values
  // Skills, Equipment, Details fields will be added/updated later
  finalName: null,
  finalPlayerName: null,
  createdAt: /* @__PURE__ */ new Date(),
  // Placeholder, will be set by DB
  updatedAt: /* @__PURE__ */ new Date(),
  // Placeholder, will be set by DB
  // UI State
  currentStep: 1,
  // Start at Stage A (Attributes)
  overflowTraitId: null,
  overflowAttributeName: null
};
const characterInProgressStore = writable(initialCharacterInProgressState);
function getModifier(attributeScore) {
  return attributeScore ?? 0;
}
const combatMastery = derived(
  characterInProgressStore,
  ($store) => {
    return Math.ceil(($store.level ?? 1) / 2);
  }
);
const primeModifier = derived(
  characterInProgressStore,
  ($store) => {
    const attributes = [
      { name: "Might", value: $store.attribute_might },
      { name: "Agility", value: $store.attribute_agility },
      { name: "Charisma", value: $store.attribute_charisma },
      { name: "Intelligence", value: $store.attribute_intelligence }
    ];
    let highestAttribute = attributes[0];
    for (let i = 1; i < attributes.length; i++) {
      if (attributes[i].value > highestAttribute.value) {
        highestAttribute = attributes[i];
      }
    }
    if (!highestAttribute) {
      console.error("Error calculating primeModifier: highestAttribute is undefined.");
      return { value: 0, attribute: "Unknown" };
    }
    const primeModifierValue = highestAttribute.value;
    const primeModifierAttribute = highestAttribute.name;
    return { value: primeModifierValue, attribute: primeModifierAttribute };
  }
);
const saveMasteries = derived(
  [characterInProgressStore, primeModifier, combatMastery],
  ([$store, $primeModifier, $combatMastery]) => {
    const primeModValue = $primeModifier.value;
    const primeModAttribute = $primeModifier.attribute;
    const currentCombatMastery = $combatMastery;
    return {
      might: currentCombatMastery + (primeModAttribute === "Might" ? primeModValue : getModifier($store.attribute_might)),
      agility: currentCombatMastery + (primeModAttribute === "Agility" ? primeModValue : getModifier($store.attribute_agility)),
      charisma: currentCombatMastery + (primeModAttribute === "Charisma" ? primeModValue : getModifier($store.attribute_charisma)),
      intelligence: currentCombatMastery + (primeModAttribute === "Intelligence" ? primeModValue : getModifier($store.attribute_intelligence))
    };
  }
);
const gritPoints = derived(
  characterInProgressStore,
  ($store) => {
    const baseGrit = 2;
    return baseGrit + getModifier($store.attribute_charisma);
  }
);
const jumpDistance = derived(
  characterInProgressStore,
  ($store) => {
    const agilityModifier = getModifier($store.attribute_agility);
    return agilityModifier < 1 ? 1 : agilityModifier;
  }
);
const startingSP = derived(
  characterInProgressStore,
  ($store) => {
    if (!$store.classId) return 0;
    const classData = classesData.find((c) => c.id === $store.classId);
    return classData?.startingSP ?? 0;
  }
);
const startingMP = derived(
  characterInProgressStore,
  ($store) => {
    if (!$store.classId) return 0;
    const classData = classesData.find((c) => c.id === $store.classId);
    return classData?.startingMP ?? 0;
  }
);
const provisionalSkillPoints = derived(
  characterInProgressStore,
  ($store) => {
    const intelligenceModifier = getModifier($store.attribute_intelligence);
    const classSkillBonus = 0;
    return 5 + intelligenceModifier + classSkillBonus;
  }
);
derived(
  characterInProgressStore,
  ($store) => {
    const basePoints = 4;
    const pointsFromNegativeTraits = 0;
    return basePoints + pointsFromNegativeTraits - $store.ancestryPointsSpent;
  }
);
const maxHP = derived(
  characterInProgressStore,
  ($store) => {
    const classData = classesData.find((c) => c.id === $store.classId);
    const classHP = classData?.baseHpContribution ?? 8;
    const mightModifier = getModifier($store.attribute_might);
    const ancestryHP = 0;
    return classHP + mightModifier + ancestryHP;
  }
);
const areaDefense = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const mightModifier = getModifier($store.attribute_might);
    const charismaModifier = getModifier($store.attribute_charisma);
    const bonuses = 0;
    return 8 + $combatMastery + mightModifier + charismaModifier + bonuses;
  }
);
const precisionDefense = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const agilityModifier = getModifier($store.attribute_agility);
    const intelligenceModifier = getModifier($store.attribute_intelligence);
    const bonuses = 0;
    return 8 + $combatMastery + agilityModifier + intelligenceModifier + bonuses;
  }
);
const initiative = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const agilityModifier = getModifier($store.attribute_agility);
    return $combatMastery + agilityModifier;
  }
);
export {
  provisionalSkillPoints as a,
  startingSP as b,
  characterInProgressStore as c,
  startingMP as d,
  combatMastery as e,
  precisionDefense as f,
  gritPoints as g,
  areaDefense as h,
  initiative as i,
  jumpDistance as j,
  maxHP as m,
  primeModifier as p,
  saveMasteries as s
};
````

## File: .svelte-kit/output/server/chunks/classes.js
````javascript
const barbarianClass = {
  id: "barbarian",
  name: "Barbarian",
  description: "Barbarians charge into battle with reckless abandon, ignoring their own safety as they brush off damage and deal even more in return. They trade defense for more offense and let out blood-crazed battle cries.",
  baseHpContribution: 9,
  // From class table p.118
  startingSP: 1,
  // From class table p.118
  startingMP: 0,
  skillPointGrantLvl1: 0,
  tradePointGrantLvl1: 0,
  combatTraining: ["Weapons", "All Armor", "All Shields"],
  // From p.118 "Barbarian Martial Path"
  maneuversKnownLvl1: "All Attack",
  // From p.118 "Maneuvers Known" - "All Attack"
  techniquesKnownLvl1: 0,
  // From p.118 "Techniques Known" - 0
  saveDCBase: 8,
  // From p.118 "Save DC" - 8
  deathThresholdBase: 10,
  // From p.118 "Death Threshold" - 10
  moveSpeedBase: 30,
  // From p.118 "Move Speed" - 30
  restPointsBase: 4,
  // From p.118 "Rest Points" - 4
  gritPointsBase: 2,
  // From p.118 "Grit Points" - 2
  initiativeBonusBase: 0,
  // From p.118 "Initiative Bonus" - 0
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: "barbarian_rage",
      name: "Rage",
      level: 1,
      description: "During Combat, you can spend 1 AP and 1 SP to enter a Rage for 1 minute. For the duration, you’re subjected to the following effects: You deal +1 damage on Melee Martial Attacks. You have ADV on Might Saves. Your PD decreases by 5. You gain Resistance (Half) to Elemental and Physical damage. Ending Early: Your Rage ends early if you fall Unconscious, die, or you choose to end it for free on your turn.",
      effects: [
        { type: "GRANT_ABILITY", value: "Rage_Mechanics_Bundle" }
        // Complex ability
      ]
    },
    {
      id: "barbarian_berserker",
      name: "Berserker",
      level: 1,
      description: "Your primal savagery grants you the following benefits: Charge: When you make a Melee Martial Attack on your turn, you can move up to 2 Spaces immediately before making the Attack. Berserker Defense: While you aren’t wearing Armor you gain +2 AD. Fast Movement: You gain +1 Speed while not wearing Armor. Mighty Leap: You can use your Might instead of Agility to determine your Jump Distance and the damage you take from Falling.",
      effects: [
        { type: "GRANT_ABILITY", subFeature: "Charge", descriptionOverride: "Move 2 Spaces before Melee Martial Attack." },
        { type: "GRANT_PASSIVE", subFeature: "Berserker_Defense", descriptionOverride: "+2 AD when not wearing Armor." },
        { type: "GRANT_PASSIVE", subFeature: "Fast_Movement", descriptionOverride: "+1 Speed when not wearing Armor." },
        { type: "GRANT_PASSIVE", subFeature: "Mighty_Leap", descriptionOverride: "Use Might for Jump Distance & Falling Damage calc." }
      ]
    },
    {
      id: "barbarian_shattering_force",
      name: "Shattering Force (Flavor)",
      level: 1,
      description: "When you Hit a structure or mundane object with a Melee Attack, it’s considered a Critical Hit.",
      effects: [{ type: "FLAVOR_MECHANIC_NOTE", value: "Melee attacks vs objects/structures are Critical Hits." }]
    }
  ],
  featureChoicesLvl1: []
  // No explicit user choices for L1 features for Barbarian
};
const sorcererClass = {
  id: "sorcerer",
  name: "Sorcerer",
  description: "Sorcerers tap into the raw magic in their own bodies as a conduit to harness, manipulate, and sculpt magic with wild resolve. They can overload themselves and even cast Spells without Mana, pushing the limits of magic and their own bodies.",
  baseHpContribution: 8,
  // From class table p.149 Lvl 1 HP
  startingSP: 0,
  startingMP: 6,
  // From class table p.149 Lvl 1 MP
  skillPointGrantLvl1: 0,
  // From class table p.149
  tradePointGrantLvl1: 0,
  // From class table p.149
  combatTraining: ["Light Armor"],
  // From p.149 "Sorcerer Spellcasting Path"
  maneuversKnownLvl1: 0,
  // From class table p.149
  techniquesKnownLvl1: 0,
  // From class table p.149
  cantripsKnownLvl1: 2,
  // From class table p.149
  spellsKnownLvl1: 3,
  // From class table p.149
  saveDCBase: 8,
  // From p.149 "Save DC" - 8
  deathThresholdBase: 10,
  // From p.149 "Death Threshold" - 10
  moveSpeedBase: 30,
  // From p.149 "Move Speed" - 30
  restPointsBase: 4,
  // From p.149 "Rest Points" - 4
  gritPointsBase: 2,
  // From p.149 "Grit Points" - 2
  initiativeBonusBase: 0,
  // From p.149 "Initiative Bonus" - 0
  level1Features: [
    {
      id: "sorcerer_innate_power",
      name: "Innate Power",
      level: 1,
      description: "Choose a Sorcerous Origin that grants you a benefit: Intuitive Magic, Resilient Magic, or Unstable Magic. Additionally, you gain the following benefits: Your Maximum MP increases by 1. Once per Long Rest, you can use a 1 MP Spell Enhancement without spending any MP (up to your Mana Spend Limit). You regain the ability to use this benefit when you roll for Initiative.",
      effects: [
        { type: "MODIFY_MP_MAX", value: 1 },
        { type: "GRANT_ABILITY", value: "Free_1MP_Spell_Enhancement_Once_Per_Long_Rest" }
      ]
    },
    {
      id: "sorcerer_overload_magic",
      name: "Overload Magic",
      level: 1,
      description: "You can spend 2 AP in Combat to channel raw magical energy for 1 minute, or until you become Incapacitated, die, or choose to end it early at any time for free. For the duration, your magic is overloaded and you’re subjected to the following effects: You gain +5 to all Spell Checks you make. You must immediately make an Attribute Save (your choice) against your Save DC upon using this Feature, and again at the start of each of your turns. Failure: You gain Exhaustion. You lose any Exhaustion gained in this way when you complete a Short Rest.",
      effects: [{ type: "GRANT_ABILITY", value: "Overload_Magic_Mechanics_Bundle" }]
    },
    {
      id: "sorcerer_sorcery_flavor",
      name: "Sorcery (Flavor)",
      level: 1,
      description: "You learn the Sorcery Spell.",
      effects: [{ type: "GRANT_SPELL_KNOWN", value: "sorcery_cantrip_id" }]
    }
  ],
  featureChoicesLvl1: [
    {
      id: "sorcerous_origin_choice",
      // Key for storing choice
      prompt: "Choose your Sorcerous Origin (DC20 p.150):",
      type: "select_one",
      options: [
        { value: "intuitive_magic", label: "Intuitive Magic", description: "You learn an additional Spell and Cantrip from your Sorcerer Spell List.", effectsOnChoice: [{ type: "GRANT_BONUS_SPELL_KNOWN" }, { type: "GRANT_BONUS_CANTRIP_KNOWN" }] },
        { value: "resilient_magic", label: "Resilient Magic", description: "You gain Dazed Resistance.", effectsOnChoice: [{ type: "GRANT_CONDITION_RESISTANCE", target: "Dazed" }] },
        { value: "unstable_magic", label: "Unstable Magic", description: "When you Critically Succeed or Fail on a Spell Check, roll on the Wild Magic Table...", effectsOnChoice: [{ type: "ENABLE_WILD_MAGIC_TABLE_ON_CRIT_SPELL_CHECK" }] }
      ]
    },
    {
      id: "sorcerer_spell_list_choice",
      // Key for storing choice
      prompt: "Choose Your Sorcerer Spell List (DC20 p.149):",
      type: "select_one",
      options: [
        { value: "arcane", label: "Arcane Spell List" },
        { value: "divine", label: "Divine Spell List" },
        { value: "primal", label: "Primal Spell List" }
      ]
    }
  ]
};
const bardClass = {
  id: "bard",
  name: "Bard",
  description: "Bards utilize artistic expression through various forms to connect with the emotions and heart of magic. This includes a wide range of mediums such as musical instruments, singing, dancing, drawing, painting, sculpting, poetry, storytelling, inspirational speech, and more. They are great at bringing the best out in those around them through both helping and performing, showcasing high proficiency across multiple disciplines. Bards are remarkably flexible and adaptable spellcasters, capable of tapping into a wide array of magical abilities with the appropriate artistic expression.",
  baseHpContribution: 8,
  // From class table p.121
  startingSP: 0,
  // From class table p.121
  startingMP: 6,
  // From class table p.121
  skillPointGrantLvl1: 2,
  // From class table p.121
  tradePointGrantLvl1: 3,
  // From class table p.121
  combatTraining: ["Light Armor", "Light Shields"],
  // From p.121 "Bard Spellcasting Path"
  maneuversKnownLvl1: 0,
  // From class table p.121
  techniquesKnownLvl1: 0,
  // From class table p.121
  saveDCBase: 8,
  // General for Spellcasters
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 2,
  // From class table p.121
  spellsKnownLvl1: 3,
  // From class table p.121
  level1Features: [
    {
      id: "bard_font_of_inspiration",
      name: "Font of Inspiration",
      level: 1,
      description: "You are an ever present source of aid for your allies. You gain the following benefits: Ranged Help Attack: The range of your Help Action when aiding an Attack increases to 10 Spaces. Help Reaction: When a creature you can see makes a Check, you can take the Help Action as a Reaction to aid them with their Check, provided you’re within range to do so.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "bard_remarkable_repertoire",
      name: "Remarkable Repertoire",
      level: 1,
      description: "You’ve picked up a few tricks along your travels, granting you the following benefits: Jack of All Trades: You gain 2 Skill Points. Magical Secrets: You learn any 2 Spells of your choice from any Spell List. Magical Expression: You learn to express your art in a unique manner, granting you the ability to alter how you cast Spells. Choose the manner of your expression: Visual or Auditory.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "bard_crowd_pleaser",
      name: "Crowd Pleaser (Flavor Feature)",
      level: 1,
      description: "When you spend at least 5 minutes performing an Artistry Trade for one or more people who are actively watching or listening to your performance, you can make an Artistry Trade Check Contested by the targets’ Charisma Save. Success: You gain ADV on Charisma Checks against the target for 1 hour or until you become hostile. Creatures have ADV on the Save if they’re considered hostile toward you.",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Bard on p.122
};
const championClass = {
  id: "champion",
  name: "Champion",
  description: "Champions are weapon and armor specialists that push themselves to the limit in combat. They are able to master a wide variety of weapon types and learn their enemies as they fight them.",
  baseHpContribution: 9,
  // From class table p.124
  startingSP: 1,
  // From class table p.124
  startingMP: 0,
  skillPointGrantLvl1: 0,
  // From class table p.124
  tradePointGrantLvl1: 0,
  // From class table p.124
  combatTraining: ["Weapons", "All Armors", "All Shields"],
  // From p.124 "Champion Martial Path"
  maneuversKnownLvl1: "All Attack",
  // From class table p.124
  techniquesKnownLvl1: 0,
  // From class table p.124
  saveDCBase: 8,
  // General for Martial Classes
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: "champion_master_at_arms",
      name: "Master-at-Arms",
      level: 1,
      description: "Your training in warfare has granted you greater offense, defense, and movement. Weapon Master: At the start of each of your turns, you can freely swap any Weapon you’re currently wielding in each hand for any other Weapon without provoking Opportunity Attacks. Maneuver Master: You learn 2 Maneuvers of your choice. Technique Master: You learn 1 Technique of your choice. Once per Combat, when you perform a Technique you can reduce its SP cost by 1.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "champion_fighting_spirit",
      name: "Fighting Spirit",
      level: 1,
      description: "You stand ready for Combat at any moment, granting you the following benefits: Combat Readiness: At the start of your first turn in Combat, you gain one of the following benefits: Brace: You gain the benefits of the Dodge Action and ADV on the next Save you make until the end of Combat. Advance: You gain the benefits of the Move Action and ADV on the next Physical Check you make until the end of Combat. Second Wind: Once per Combat when you start your turn Bloodied, you can regain 2 HP and 1 SP.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "champion_know_your_enemy",
      name: "Know Your Enemy (Flavor Feature)",
      level: 1,
      description: "You can spend 1 minute observing or interacting with a creature out of Combat (or spend 1 AP in Combat) to learn information about its physical capabilities compared to your own. Choose one of the following stats of the creature to assess: Might, Agility, PD, AD, and HP. Make a DC 10 Knowledge or Insight Check (your choice). Success: You learn if the chosen stat is higher, lower, or the same as yours.",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Champion on p.125
};
const clericClass = {
  id: "cleric",
  name: "Cleric",
  description: "Clerics can reach out and call upon the power of a deity to aid them in battle and to support them and their allies. Clerics can range from a knowledgeable priest, to a knight in holy armor. They reach out to heir deity to empower their magic in ways mortals normally cannot.",
  baseHpContribution: 8,
  // From class table p.127
  startingSP: 0,
  // From class table p.127
  startingMP: 6,
  // From class table p.127
  skillPointGrantLvl1: 2,
  // From class table p.127
  tradePointGrantLvl1: 3,
  // From class table p.127
  combatTraining: ["Light Armor", "Light Shields"],
  // From p.127 "Cleric Spellcasting Path"
  maneuversKnownLvl1: 0,
  // From class table p.127
  techniquesKnownLvl1: 0,
  // From class table p.127
  saveDCBase: 8,
  // General for Spellcasters
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 2,
  // From class table p.127
  spellsKnownLvl1: 3,
  // From class table p.127
  level1Features: [
    {
      id: "cleric_cleric_order",
      name: "Cleric Order",
      level: 1,
      description: "Your connection to your deity grants you the following benefits: Divine Damage: Choose an Elemental or Mystical damage type. The chosen damage type becomes your Divine Damage which is used for some Cleric Features. Divine Domain: You gain the benefits of 2 Divine Domains of your choice.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "cleric_divine_blessing",
      name: "Divine Blessing",
      level: 1,
      description: "You can spend 1 AP to say a prayer and petition your deity for their divine blessing. Choose 1 of the blessings listed below. Each blessing has a listed MP cost that you must spend to gain the blessing. Once during the next minute, you can apply the blessing to a Spell you cast. If your Spell targets more than 1 creature, the blessing only applies to 1 target of your choice. Unused Blessing: You can only have 1 blessing at a time. If you petition your deity for a blessing while you already have a blessing, the first blessing immediately ends without granting any benefit. If the blessing ends without granting any benefit, you regain the MP spent to gain the blessing.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "cleric_divine_omen",
      name: "Divine Omen (Flavor Feature)",
      level: 1,
      description: "Once per Long Rest, you can spend 10 minutes to commune with your Deity. Question: You can ask them 1 question, which must be posed in a way that could be answered with a yes or no. Response: The deity responds to the best of their knowledge and intentions in one of the following responses: Yes, No, or Unclear. Communing Again: If you commune with your deity more than once per Long Rest, you must make a DC 15 Spell Check. Failure: You receive no answer. Each time you commune again before you complete a Long Rest, the DC increases by 5.",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Cleric on p.128
};
const commanderClass = {
  id: "commander",
  name: "Commander",
  description: "Commanders are the leaders of the battlefield, inspiring their allies and leading them to victory. They can command their allies to attack or move around the battlefield, and are even able to “heal” allies by making them dig deep within themselves to push forward in combat.",
  baseHpContribution: 9,
  // From class table p.131
  startingSP: 1,
  // From class table p.131
  startingMP: 0,
  skillPointGrantLvl1: 0,
  // From class table p.131
  tradePointGrantLvl1: 0,
  // From class table p.131
  combatTraining: ["Weapons", "All Armor", "All Shields"],
  // From p.131 "Commander Martial Path"
  maneuversKnownLvl1: "All Attack",
  // From class table p.131
  techniquesKnownLvl1: 0,
  // From class table p.131
  saveDCBase: 8,
  // General for Martial Classes
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: "commander_inspiring_presence",
      name: "Inspiring Presence",
      level: 1,
      description: "Whenever you spend SP while in Combat, you can restore an amount of HP equal to the SP spent. Choose any creatures within 5 Spaces that can see or hear you, and divide the HP among them.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "commander_commanders_call",
      name: "Commander’s Call",
      level: 1,
      description: "You can spend 1 AP and 1 SP to command a willing creature that you can see within 5 Spaces that can also see or hear you. The chosen creature can immediately take 1 of the following Actions of your choice as a Reaction for free. You can only use each of the following commands once on each of your turns: Attack: The creature makes an Attack with ADV. They can’t spend any resources on this Attack, such as AP, SP, or MP. Dodge: The creature takes the Full Dodge Action. Move: The creature moves up to their Speed without provoking Opportunity Attacks.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "commander_natural_leader",
      name: "Natural Leader (Flavor Feature)",
      level: 1,
      description: "You have ADV on Checks made to convince creatures that you are an authority figure. Additionally, you have ADV on the first Charisma Check made to interact with non-hostile members of military groups (such as soldiers, guards, etc.).",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Commander on p.132
};
const druidClass = {
  id: "druid",
  name: "Druid",
  description: "Druids tap into the power of nature, drawing upon the energies that flow through the world and creatures around them. and connect to plants, animals, and the plane itself. They can channel both the restorative and destructive forces of nature and shapeshift into wild beasts.",
  baseHpContribution: 8,
  // From class table p.134
  startingSP: 0,
  // From class table p.134
  startingMP: 6,
  // From class table p.134
  skillPointGrantLvl1: 2,
  // From class table p.134
  tradePointGrantLvl1: 3,
  // From class table p.134
  combatTraining: ["Light Armor"],
  // From p.134 "Druid Spellcasting Path"
  maneuversKnownLvl1: 0,
  // From class table p.134
  techniquesKnownLvl1: 0,
  // From class table p.134
  saveDCBase: 8,
  // General for Spellcasters
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 2,
  // From class table p.134
  spellsKnownLvl1: 3,
  // From class table p.134
  level1Features: [
    {
      id: "druid_druid_domain",
      name: "Druid Domain",
      level: 1,
      description: "You can spend 1 AP and 1 MP to create your own Druid Domain that includes small plant life, sand, shallow water, or other naturally occurring features. You create up to 8 Domain Spaces along the ground or walls. The first Domain Space must be within 1 Space of you, and each additional Domain Space must be adjacent to another Domain Space. If you use this Feature again, the first Domain Space of it must be within 1 Space of you or another Domain Space. Domain Spaces: The area is considered to be Difficult Terrain for creatures of your choice, and when you cast a Spell, you can do so as if you were standing in any Space within your Domain. Losing Domain Spaces: A Domain Space also disappears if you end your turn farther than 15 Spaces away from it or you die. Domain Actions: While you have Domain Spaces, you can take any of the following Domain Actions: Nature’s Grasp, Move Creature, Move Object, Wild Growth.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "druid_wild_form",
      name: "Wild Form",
      level: 1,
      description: "You can spend 1 AP and 1 MP to transform into a Wild Form of your choice. You can spend 1 AP on your turn to shift back and forth between your True Form and any Wild Forms you currently have available. Once per Long Rest, you can transform without spending MP or using MP enhancements. True Form: When you transform from your Wild Form to your True Form, your statistics return to normal. You immediately revert to your True Form when your Wild Form HP is reduced to 0 or you die. Wild Form: When you transform into a Wild Form, you gain the Wild Form’s current Wild Form HP (see Wild Form HP below), retaining any HP losses. Duration: Each Wild Form remains available until its Wild Form HP is reduced to 0 or you complete a Long Rest. Multiple Forms: You can have multiple Wild Forms available at a time which have their own Wild Form HP and Traits. Equipment: Your equipment falls to the ground or merges into your Wild Form (your choice for each item). You gain the benefits of Magic Items merged with your Wild Form, but you can’t activate them or spend their charges. Statistics: While in your Wild Form, you’re subjected to the following changes (unless otherwise stated): Stat Block: You use the Wild Form Stat Block below to determine your statistics. Identity: You maintain your personality, intellect, and ability to speak. Wild Form HP: You gain a secondary pool of Wild Form Health Points, which is 3 with a maximum of 3. Damage and healing effects target your Wild Form HP before your True Form HP, and any excess damage or healing carries over to your own HP. Natural Weapon: You have Natural Weapons (claws, horns, fangs, etc.) which you can use to make Unarmed Strikes that deal 1 Bludgeoning, Piercing, or Slashing damage (your choice when you use this Feature). Features & Talents: You don’t benefit from Talents or Class Features, except Druid Class Features, Subclass Features, and Talents. Additionally, you can’t cast Spells or perform Techniques. Traits: You don’t benefit from your Ancestry Traits, but you gain 3 Trait Points to spend on Beast Traits or Wild Form Traits of your choice. You can’t select negative Beast Traits. When you use this Feature, you can spend additional MP (up to your Mana Spend Limit) to gain 2 additional Trait Points per MP spent.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "druid_wild_speech",
      name: "Wild Speech (Flavor Feature)",
      level: 1,
      description: "You learn the Druidcraft Cantrip and can choose 1 of the following options: Animals: You can understand and speak with Beasts in a limited manner. You can understand the meaning of their movements, sounds, and behaviors, and they can understand the meanings of simple words, concepts, and emotions. Plants: You can understand and speak with Plants in a limited manner. You can understand the meaning of their swaying, folding, unfolding of their leaves and flowers, and they can understand the meanings of simple words, concepts, and emotions. Weather: You can reach out to nature and cast the Commune with Nature Spell as a Ritual once per Long Rest.",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Druid on p.135
};
const hunterClass = {
  id: "hunter",
  name: "Hunter",
  description: "Hunters are master survivalists and natural explorers. They mark their targets to better track them and take them down, using their mastery over terrain, traps, and weapons to their advantage.",
  baseHpContribution: 9,
  // From class table p.139
  startingSP: 1,
  // From class table p.139
  startingMP: 0,
  skillPointGrantLvl1: 0,
  // From class table p.139
  tradePointGrantLvl1: 0,
  // From class table p.139
  combatTraining: ["Weapons", "Light Armor", "Light Shields"],
  // From p.139 "Hunter Martial Path"
  maneuversKnownLvl1: "All Attack",
  // From class table p.139
  techniquesKnownLvl1: 0,
  // From class table p.139
  saveDCBase: 8,
  // General for Martial Classes
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: "hunter_hunters_mark",
      name: "Hunter’s Mark",
      level: 1,
      description: "You can spend 1 AP and 1 SP to focus on and mark a creature you can see within 15 Spaces as your quarry. Alternatively, you can mark a creature by studying its tracks for at least 1 minute. While a creature is marked, you gain the following benefits: You have ADV on Awareness and Survival Checks made to find the target. The first Martial Attack against your target on your turn has ADV and ignores PDR. When you score a Heavy or Critical Hit against the target, you automatically grant a d8 Help Die to the next Attack made against the target before the start of your next turn. The target is marked as long as it’s on the same Plane of Existence as you, and vanishes early if you complete a Long Rest, fall Unconscious, or use this Feature again to mark another creature.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "hunter_favored_terrain",
      name: "Favored Terrain",
      level: 1,
      description: "You are particularly familiar with two types of environments and are adept at the skills unique to the region. Choose 2 types of Favored Terrain listed below. Coast, Desert, Forest, Grassland, Jungle, Mountain, Swamp, Tundra, Subterranean, Urban. Additionally, while you’re in one of your Favored Terrains, you have ADV on Stealth and Survival Checks and can’t be Surprised.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "hunter_bestiary",
      name: "Bestiary (Flavor Feature)",
      level: 1,
      description: "You have developed a trove of knowledge hunting creatures which you’ve recorded in your Bestiary. Your Bestiary can take the form of a book, a memory vault within your mind, or some other representation of your choice. You have ADV on Checks made to learn or recall information about any creature recorded in your Bestiary. Starting Entries: Choose a Creature Type: Aberration, Beast, Celestial, Construct, Dragon, Elemental, Fey, Fiend, Giant, Humanoid, Monstrosity, Ooze, Plant, or Undead. Your Bestiary includes prerecorded notes about various creatures of the chosen type. Making New Entries: You can spend 10 minutes of Light Activity recording information into your Bestiary about a specific creature you have slain within the last 24 hours.",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Hunter on p.139
};
const monkClass = {
  id: "monk",
  name: "Monk",
  description: "Monks are master martial artists that perfect their mind and bodies utilizing the ebb and flow of their inner energy. They use their body as a weapon and can enter into different stances that drastically change their combat abilities.",
  baseHpContribution: 9,
  // From class table p.143
  startingSP: 1,
  // From class table p.143
  startingMP: 0,
  skillPointGrantLvl1: 0,
  // From class table p.143
  tradePointGrantLvl1: 0,
  // From class table p.143
  combatTraining: ["Weapons", "Light Armor"],
  // From p.143 "Monk Martial Path"
  maneuversKnownLvl1: "All Attack",
  // From class table p.143
  techniquesKnownLvl1: 0,
  // From class table p.143
  saveDCBase: 8,
  // General for Martial Classes
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: "monk_monk_training",
      name: "Monk Training",
      level: 1,
      description: "Your martial arts training grants you greater offense, defense, and movement. Iron Palm: Your limbs are considered Natural Weapons with the Impact Property that deal 1 Bludgeoning damage. Patient Defense: While you aren’t wearing Armor you gain +2 PD. Step of the Wind: While you aren’t wearing Armor, you gain the following benefits: You gain +1 Speed and Jump Distance. You can move a number of Spaces up to your Speed along vertical surfaces and across liquids without falling during your move. You can use your Prime Modifier instead of Agility to determine your Jump Distance and the damage you take from Falling.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "monk_monk_stance",
      name: "Monk Stance",
      level: 1,
      description: "You learn 2 Monk Stances from the list below. Entering & Exiting: In Combat, at the start of each of your turns you can freely enter or swap into one of your Monk Stances. You can also spend 1 SP on your turn to swap to a different stance. You can end your Stance at any moment for free. You can only be in 1 Monk Stance at a time. Bear Stance, Bull Stance, Cobra Stance, Gazelle Stance, Mantis Stance, Mongoose Stance, Scorpion Stance, Turtle Stance, Wolf Stance.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "monk_meditation",
      name: "Meditation (Flavor Feature)",
      level: 1,
      description: "You can enter a state of meditation during a Short Rest (1 hour) or longer. Choose 1 Charisma or Intelligence Skill. When you complete the Rest, your Skill Mastery level increases by 1 (up to your Skill Mastery Cap) for the chosen Skill until you complete another Short or longer Rest. While meditating, you remain alert to danger.",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Monk on p.144
};
const rogueClass = {
  id: "rogue",
  name: "Rogue",
  description: "Rogues are skilled, evasive, and cunning. They impose conditions onto enemies, then exploit those weaknesses to inflict even more harm.",
  baseHpContribution: 9,
  // From class table p.146
  startingSP: 1,
  // From class table p.146
  startingMP: 0,
  skillPointGrantLvl1: 0,
  // From class table p.146
  tradePointGrantLvl1: 0,
  // From class table p.146
  combatTraining: ["Weapons", "Light Armor", "Light Shields"],
  // From p.146 "Rogue Martial Path"
  maneuversKnownLvl1: "All Attack",
  // From class table p.146
  techniquesKnownLvl1: 0,
  // From class table p.146
  saveDCBase: 8,
  // General for Martial Classes
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: "rogue_debilitating_strike",
      name: "Debilitating Strike",
      level: 1,
      description: "When you make an Attack with a Weapon, you can spend 1 SP to force the target to make a Physical Save against your Save DC. Save Failure: Until the start of your next turn, the target suffers 1 of the following effects of your choice: Deafened, Exposed, Hindered, or Slowed 2. A target can’t be affected by the same option more than once at a time.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "rogue_roguish_finesse",
      name: "Roguish Finesse",
      level: 1,
      description: "Cunning Action: You gain movement equal to half your Speed when you take the Disengage, Feint, or Hide Actions. You can use this movement immediately before or after you take the Action. Skill Expertise: Your Skill Mastery Limit increases by 1, up to Grandmaster (+10). A Skill can only benefit from one increase to its Mastery limit. Multi-Skilled: You gain 1 Skill Point.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "rogue_cypher_speech",
      name: "Cypher Speech (Flavor Feature)",
      level: 1,
      description: "You become Fluent in a Mortal Language of your choice. Additionally, you understand how to speak in code with a specific demographic of your choice (such as upper society, lower society, a faction, etc.). Your coded messages can be concealed in normal conversation and written communications. This allows you to leave simple messages such as “Safety”, “Threat”, or “Wealth”, or mark the location of a cache, a secret passageway, a safehouse, or an area of danger.",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Rogue on p.147
};
const spellbladeClass = {
  id: "spellblade",
  name: "Spellblade",
  description: "Spellblades combine their combat prowess with their ability to harness and channel magic into weapons. They can form a bond with a weapon to imbue it with damage, call it back to them, and more. Spellblades can learn a wide range of disciplines depending on their unique combination of martial and spellcasting prowess. They even gain the ability to cast spells through their weapons.",
  baseHpContribution: 9,
  // From class table p.153
  startingSP: 1,
  // From class table p.153
  startingMP: 3,
  // From class table p.153
  skillPointGrantLvl1: 0,
  // From class table p.153
  tradePointGrantLvl1: 0,
  // From class table p.153
  combatTraining: ["Weapons", "Light Armor", "Light Shields"],
  // From p.153 "Spellblade Martial Path"
  maneuversKnownLvl1: "All Attack",
  // From class table p.153
  techniquesKnownLvl1: 0,
  // From class table p.153
  saveDCBase: 8,
  // General for Hybrid Classes
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 1,
  // From class table p.153
  spellsKnownLvl1: 1,
  // From class table p.153
  level1Features: [
    {
      id: "spellblade_bound_weapon",
      name: "Bound Weapon",
      level: 1,
      description: "During a Quick Rest, you can magically bond with 1 Weapon and choose an Elemental or Mystical damage type to become your Bound Damage type. This bond lasts until you end it for free or use this feature again. Your Bound Weapon gains the following properties: Smite, Illuminate, Recall. Ending Early: Your bond with the Weapon ends early if you use this Feature again, or you choose to end it for free.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "spellblade_spellblade_disciplines",
      name: "Spellblade Disciplines",
      level: 1,
      description: "You learn 2 Spellblade Disciplines from the list below. Magus, Warrior, Acolyte, Hex Warrior, Spell Breaker, Spell Warder, Blink Blade.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "spellblade_sense_magic",
      name: "Sense Magic (Flavor Feature)",
      level: 1,
      description: "You can spend 1 minute focusing your mind to detect the following creature types within 20 Spaces: Aberration, Celestial, Elemental, Fey, Fiend, or Undead. Make a Spell Check against each creature’s Mental Save. Check Success: You learn the target’s creature type and know its location until the end of your next turn. Check Failure: You learn nothing and can’t use this Feature against the target again until you complete a Long Rest.",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Spellblade on p.154
};
const warlockClass = {
  id: "warlock",
  name: "Warlock",
  description: "Warlocks make a pact with a powerful entity that grants them magic. Their body and soul are a part of this contract and as such, they can tap into their own life force to enhance and amplify their magic and capabilities as well as drain the life force of other living creatures. They also choose a type of pact to be made that grants more powers.",
  baseHpContribution: 9,
  // From class table p.158
  startingSP: 0,
  // From class table p.158
  startingMP: 6,
  // From class table p.158
  skillPointGrantLvl1: 0,
  // From class table p.158
  tradePointGrantLvl1: 0,
  // From class table p.158
  combatTraining: ["Light Armor"],
  // From p.158 "Warlock Spellcasting Path"
  maneuversKnownLvl1: 0,
  // From class table p.158
  techniquesKnownLvl1: 0,
  // From class table p.158
  saveDCBase: 8,
  // General for Spellcasters
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 2,
  // From class table p.158
  spellsKnownLvl1: 3,
  // From class table p.158
  level1Features: [
    {
      id: "warlock_warlock_contract",
      name: "Warlock Contract",
      level: 1,
      description: "You have a binding agreement with your patron that allows you to make sacrifices in exchange for boons. Hasty Bargain: Once per turn when you make a Check, you can spend 1 HP to gain ADV on the Check. Desperate Bargain: Once per Combat, you can spend 1 AP to regain an amount of HP equal to your Prime Modifier. When you do, you become Exposed until the end of your next turn.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "warlock_pact_boon",
      name: "Pact Boon",
      level: 1,
      description: "You gain a Pact Boon from your Patron. Choose 1 of the following options: Weapon, Armor, Cantrip, or Familiar.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "warlock_beseech_patron",
      name: "Beseech Patron (Flavor Feature)",
      level: 1,
      description: "During a Long Rest, while sleeping or meditating, you can access an Inner Sanctum within your mind. Its appearance is influenced by your psyche and is subject to change. While inside your Inner Sanctum, you can attempt to contact your Patron. If they choose to respond, they enter your mind and you might possibly be able to see or hear them. While connected to your Patron in this way, you’re aware of your surroundings but you can’t take actions or move. Your Patron chooses when to end the connection, or you can make a Mental Save against your own Save DC to force the connection to end.",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Warlock on p.159
};
const wizardClass = {
  id: "wizard",
  name: "Wizard",
  description: "Wizards learn to master each of the Spell Schools to control them in a structured and efficient way. They utilize sigils on the ground to enhance certain types of magic while they push spells to their limits.",
  baseHpContribution: 8,
  // From class table p.162
  startingSP: 0,
  // From class table p.162
  startingMP: 6,
  // From class table p.162
  skillPointGrantLvl1: 2,
  // From class table p.162
  tradePointGrantLvl1: 3,
  // From class table p.162
  combatTraining: ["Light Armor"],
  // From p.162 "Wizard Spellcasting Path"
  maneuversKnownLvl1: 0,
  // From class table p.162
  techniquesKnownLvl1: 0,
  // From class table p.162
  saveDCBase: 8,
  // General for Spellcasters
  deathThresholdBase: 10,
  // General
  moveSpeedBase: 30,
  // General
  restPointsBase: 4,
  // General
  gritPointsBase: 2,
  // General
  initiativeBonusBase: 0,
  // General
  cantripsKnownLvl1: 2,
  // From class table p.162
  spellsKnownLvl1: 3,
  // From class table p.162
  level1Features: [
    {
      id: "wizard_spell_school_initiate",
      name: "Spell School Initiate",
      level: 1,
      description: "You’ve completed training in a specialized School of Magic. Choose a Spell School. You gain the following benefits: School Magic: You learn 1 Arcane Cantrip and 1 Arcane Spell from this Spell School. Signature School: When you cast a Spell from the chosen School, you can reduce its MP cost by 1. Its total MP cost before the reduction still can’t exceed your Mana Spend Limit. You can use this Feature once per Long Rest, but regain the ability to use it again when you roll for Initiative.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "wizard_arcane_sigil",
      name: "Arcane Sigil",
      level: 1,
      description: "You can spend 1 AP and 1 MP to create a 1 Space diameter Arcane Sigil on the ground beneath you that lasts for 1 minute. When you create an Arcane Sigil choose 1 Spell School (Enchantment, Necromancy, Protection, etc.) or 1 Spell Tag (Fire, Cold, Teleportation, etc.). The Arcane Sigil radiates magic of the chosen type. Using a Sigil: While a creature is within the area of your Arcane Sigil, it has ADV on Spell Checks to cast or produce the effects of Spells with the chosen Spell School or Spell Tag. Moving a Sigil: You can spend 1 AP to teleport one of your Sigils within 10 spaces to your current space, but multiple Sigils can’t coexist in the same Space.",
      effects: []
      // Complex effects, likely handled in logic
    },
    {
      id: "wizard_ritual_caster",
      name: "Ritual Caster (Flavor Feature)",
      level: 1,
      description: "You learn 1 Arcane Spell with the Ritual Spell Tag each time you gain a Wizard Class Feature (including this one). You can only gain this benefit once per Level. Additionally, when you encounter an Arcane Spell with the Ritual Spell Tag in a form you can study (such as a spellbook, a spell scroll, or from an instructor), you can spend a number of hours equal to the Spell’s base MP cost to learn it. You can only cast Spells you learn with this feature as Rituals, unless you learned it from another source.",
      effects: []
      // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: []
  // No explicit Lvl 1 feature choices listed for Wizard on p.163
};
const classesData = [
  barbarianClass,
  sorcererClass,
  bardClass,
  championClass,
  clericClass,
  commanderClass,
  druidClass,
  hunterClass,
  monkClass,
  rogueClass,
  spellbladeClass,
  warlockClass,
  wizardClass
  // Add other classes here as they are populated
];
export {
  classesData as c
};
````

## File: .svelte-kit/output/server/chunks/client.js
````javascript
import "clsx";
import "./exports.js";
import { w as writable } from "./index3.js";
import { Q as noop } from "./index.js";
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
export {
  stores as s
};
````

## File: .svelte-kit/output/server/chunks/exports.js
````javascript
const internal = new URL("sveltekit-internal://");
function resolve(base, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key in params) {
    params[key] = decodeURIComponent(params[key]);
  }
  return params;
}
function make_trackable(url, callback, search_params_callback, allow_hash = false) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key) {
        if (key === "get" || key === "getAll" || key === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key](param);
          };
        }
        callback();
        const value = Reflect.get(obj, key);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  const tracked_url_properties = ["href", "pathname", "search", "toString", "toJSON"];
  if (allow_hash) tracked_url_properties.push("hash");
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
    tracked.searchParams[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url.searchParams, opts);
    };
  }
  if (!allow_hash) {
    disable_hash(tracked);
  }
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key in module) {
      if (key[0] === "_" || expected.has(key)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
const valid_layout_exports = /* @__PURE__ */ new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
const valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
const valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
const valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
const valid_server_exports = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "HEAD",
  "fallback",
  "prerender",
  "trailingSlash",
  "config",
  "entries"
]);
const validate_layout_exports = validator(valid_layout_exports);
const validate_page_exports = validator(valid_page_exports);
const validate_layout_server_exports = validator(valid_layout_server_exports);
const validate_page_server_exports = validator(valid_page_server_exports);
const validate_server_exports = validator(valid_server_exports);
export {
  decode_params as a,
  validate_layout_exports as b,
  validate_page_server_exports as c,
  disable_search as d,
  validate_page_exports as e,
  decode_pathname as f,
  validate_server_exports as g,
  make_trackable as m,
  normalize_path as n,
  resolve as r,
  validate_layout_server_exports as v
};
````

## File: .svelte-kit/output/server/chunks/index.js
````javascript
import { clsx as clsx$1 } from "clsx";
const BROWSER = false;
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var array_from = Array.from;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
const noop = () => {
};
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
const DERIVED = 1 << 1;
const EFFECT = 1 << 2;
const RENDER_EFFECT = 1 << 3;
const BLOCK_EFFECT = 1 << 4;
const BRANCH_EFFECT = 1 << 5;
const ROOT_EFFECT = 1 << 6;
const BOUNDARY_EFFECT = 1 << 7;
const UNOWNED = 1 << 8;
const DISCONNECTED = 1 << 9;
const CLEAN = 1 << 10;
const DIRTY = 1 << 11;
const MAYBE_DIRTY = 1 << 12;
const INERT = 1 << 13;
const DESTROYED = 1 << 14;
const EFFECT_RAN = 1 << 15;
const EFFECT_TRANSPARENT = 1 << 16;
const HEAD_EFFECT = 1 << 19;
const EFFECT_HAS_DERIVED = 1 << 20;
const EFFECT_IS_UPDATING = 1 << 21;
const STATE_SYMBOL = Symbol("$state");
const LEGACY_PROPS = Symbol("legacy props");
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function state_descriptors_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
let tracing_mode_flag = false;
const HYDRATION_START = "[";
const HYDRATION_END = "]";
const HYDRATION_ERROR = {};
const ELEMENT_IS_NAMESPACED = 1;
const ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
const UNINITIALIZED = Symbol();
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
let component_context = null;
function set_component_context(context) {
  component_context = context;
}
function push$1(props, runes = false, fn) {
  var ctx = component_context = {
    p: component_context,
    c: null,
    d: false,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
  teardown(() => {
    ctx.d = true;
  });
}
function pop$1(component) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i = 0; i < component_effects.length; i++) {
          var component_effect = component_effects[i];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    context_stack_item.m = true;
  }
  return (
    /** @type {T} */
    {}
  );
}
function is_runes() {
  return true;
}
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = /* @__PURE__ */ state(0);
  var reaction = active_reaction;
  var with_parent = (fn) => {
    var previous_reaction = active_reaction;
    set_active_reaction(reaction);
    var result = fn();
    set_active_reaction(previous_reaction);
    return result;
  };
  if (is_proxied_array) {
    sources.set("length", /* @__PURE__ */ state(
      /** @type {any[]} */
      value.length
    ));
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop);
        if (s === void 0) {
          s = with_parent(() => {
            var s2 = /* @__PURE__ */ state(descriptor.value);
            sources.set(prop, s2);
            return s2;
          });
        } else {
          set(s, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop) {
        var s = sources.get(prop);
        if (s === void 0) {
          if (prop in target) {
            const s2 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
            sources.set(prop, s2);
            update_version(version);
          }
        } else {
          if (is_proxied_array && typeof prop === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop);
            if (Number.isInteger(n) && n < ls.v) {
              set(ls, n);
            }
          }
          set(s, UNINITIALIZED);
          update_version(version);
        }
        return true;
      },
      get(target, prop, receiver) {
        if (prop === STATE_SYMBOL) {
          return value;
        }
        var s = sources.get(prop);
        var exists = prop in target;
        if (s === void 0 && (!exists || get_descriptor(target, prop)?.writable)) {
          s = with_parent(() => {
            var p = proxy(exists ? target[prop] : UNINITIALIZED);
            var s2 = /* @__PURE__ */ state(p);
            return s2;
          });
          sources.set(prop, s);
        }
        if (s !== void 0) {
          var v = get(s);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop, receiver);
      },
      getOwnPropertyDescriptor(target, prop) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor && "value" in descriptor) {
          var s = sources.get(prop);
          if (s) descriptor.value = get(s);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop) {
        if (prop === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop);
        if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop)?.writable)) {
          if (s === void 0) {
            s = with_parent(() => {
              var p = has ? proxy(target[prop]) : UNINITIALIZED;
              var s2 = /* @__PURE__ */ state(p);
              return s2;
            });
            sources.set(prop, s);
          }
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop, value2, receiver) {
        var s = sources.get(prop);
        var has = prop in target;
        if (is_proxied_array && prop === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(i + "", other_s);
            }
          }
        }
        if (s === void 0) {
          if (!has || get_descriptor(target, prop)?.writable) {
            s = with_parent(() => /* @__PURE__ */ state(void 0));
            set(s, proxy(value2));
            sources.set(prop, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;
          var p = with_parent(() => proxy(value2));
          set(s, p);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop);
            if (Number.isInteger(n) && n >= ls.v) {
              set(ls, n + 1);
            }
          }
          update_version(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key2) => {
          var source3 = sources.get(key2);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key in target)) {
            own_keys.push(key);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function update_version(signal, d = 1) {
  set(signal, signal.v + d);
}
function destroy_derived_effects(derived) {
  var effects = derived.effects;
  if (effects !== null) {
    derived.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
function get_derived_parent_effect(derived) {
  var parent = derived.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived));
  {
    try {
      destroy_derived_effects(derived);
      value = update_reaction(derived);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived) {
  var value = execute_derived(derived);
  if (!derived.equals(value)) {
    derived.v = value;
    derived.wv = increment_write_version();
  }
  if (is_destroying_effect) return;
  var status = (skip_reaction || (derived.f & UNOWNED) !== 0) && derived.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived, status);
}
const old_values = /* @__PURE__ */ new Map();
function source(v, stack) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v, stack) {
  const s = source(v);
  push_reaction_value(s);
  return s;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false, trackable = true) {
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  return s;
}
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && !(reaction_sources?.[1].includes(source2) && reaction_sources[0] === active_reaction)) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  return internal_set(source2, new_value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    if ((source2.f & DERIVED) !== 0) {
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(
          /** @type {Derived} */
          source2
        );
      }
      set_signal_status(source2, (source2.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
  }
  return value;
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
var $window;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype.__click = void 0;
    element_prototype.__className = void 0;
    element_prototype.__attributes = null;
    element_prototype.__style = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype.__t = void 0;
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function clear_text_content(node) {
  node.textContent = "";
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push2 = true) {
  var parent = active_effect;
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (sync) {
    try {
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e) {
      destroy_effect(effect2);
      throw e;
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
  if (!inert && push2) {
    if (parent !== null) {
      push_effect(effect2, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived = (
        /** @type {Derived} */
        active_reaction
      );
      (derived.effects ??= []).push(effect2);
    }
  }
  return effect2;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null, false);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function component_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function branch(fn, push2 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & ROOT_EFFECT) !== 0) {
      effect2.parent = null;
    } else {
      destroy_effect(effect2, remove_dom);
    }
    effect2 = next;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null && effect2.nodes_end !== null) {
    remove_effect_dom(
      effect2.nodes_start,
      /** @type {TemplateNode} */
      effect2.nodes_end
    );
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next = node === end ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    node.remove();
    node = next;
  }
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next = effect2.next;
  if (prev !== null) prev.next = next;
  if (next !== null) next.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition of effect2.transitions) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child = effect2.first;
  while (child !== null) {
    var sibling = child.next;
    var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || (child.f & BRANCH_EFFECT) !== 0;
    pause_children(child, transitions, transparent ? local : false);
    child = sibling;
  }
}
let micro_tasks = [];
let idle_tasks = [];
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function run_idle_tasks() {
  var tasks = idle_tasks;
  idle_tasks = [];
  run_all(tasks);
}
function flush_tasks() {
  if (micro_tasks.length > 0) {
    run_micro_tasks();
  }
  if (idle_tasks.length > 0) {
    run_idle_tasks();
  }
}
function handle_error(error) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if ((effect2.f & EFFECT_RAN) === 0) {
    if ((effect2.f & BOUNDARY_EFFECT) === 0) {
      throw error;
    }
    effect2.fn(error);
  } else {
    invoke_error_boundary(error, effect2);
  }
}
function invoke_error_boundary(error, effect2) {
  while (effect2 !== null) {
    if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
      try {
        effect2.fn(error);
        return;
      } catch {
      }
    }
    effect2 = effect2.parent;
  }
  throw error;
}
let is_flushing = false;
let last_scheduled_effect = null;
let is_updating_effect = false;
let is_destroying_effect = false;
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
let queued_root_effects = [];
let dev_effect_stack = [];
let active_reaction = null;
let untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
let active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
let reaction_sources = null;
function push_reaction_value(value) {
  if (active_reaction !== null && active_reaction.f & EFFECT_IS_UPDATING) {
    if (reaction_sources === null) {
      reaction_sources = [active_reaction, [value]];
    } else {
      reaction_sources[1].push(value);
    }
  }
}
let new_deps = null;
let skipped_deps = 0;
let untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
let write_version = 1;
let read_version = 0;
let skip_reaction = false;
function increment_write_version() {
  return ++write_version;
}
function check_dirtiness(reaction) {
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      var dependency;
      var is_disconnected = (flags & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if (is_disconnected || is_unowned_connected) {
        var derived = (
          /** @type {Derived} */
          reaction
        );
        var parent = derived.parent;
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_disconnected || !dependency?.reactions?.includes(derived)) {
            (dependency.reactions ??= []).push(derived);
          }
        }
        if (is_disconnected) {
          derived.f ^= DISCONNECTED;
        }
        if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
          derived.f ^= UNOWNED;
        }
      }
      for (i = 0; i < length; i++) {
        dependency = dependencies[i];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect2, root = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if (reaction_sources?.[1].includes(signal) && reaction_sources[0] === active_reaction) continue;
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        false
      );
    } else if (effect2 === reaction) {
      if (root) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var previous_reaction_sources = reaction_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  skip_reaction = (flags & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  reaction_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  read_version++;
  reaction.f |= EFFECT_IS_UPDATING;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    return result;
  } catch (error) {
    handle_error(error);
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    reaction_sources = previous_reaction_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    reaction.f ^= EFFECT_IS_UPDATING;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index = index_of.call(reactions, signal);
    if (index !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect2;
  is_updating_effect = true;
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    var dep;
    if (BROWSER && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) ;
    if (BROWSER) ;
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
  }
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error) {
    if (last_scheduled_effect !== null) {
      {
        invoke_error_boundary(error, last_scheduled_effect);
      }
    } else {
      throw error;
    }
  }
}
function flush_queued_root_effects() {
  var was_updating_effect = is_updating_effect;
  try {
    var flush_count = 0;
    is_updating_effect = true;
    while (queued_root_effects.length > 0) {
      if (flush_count++ > 1e3) {
        infinite_loop_guard();
      }
      var root_effects = queued_root_effects;
      var length = root_effects.length;
      queued_root_effects = [];
      for (var i = 0; i < length; i++) {
        var collected_effects = process_effects(root_effects[i]);
        flush_queued_effects(collected_effects);
      }
      old_values.clear();
    }
  } finally {
    is_flushing = false;
    is_updating_effect = was_updating_effect;
    last_scheduled_effect = null;
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i = 0; i < length; i++) {
    var effect2 = effects[i];
    if ((effect2.f & (DESTROYED | INERT)) === 0) {
      if (check_dirtiness(effect2)) {
        update_effect(effect2);
        if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
          if (effect2.teardown === null) {
            unlink_effect(effect2);
          } else {
            effect2.fn = null;
          }
        }
      }
    }
  }
}
function schedule_effect(signal) {
  if (!is_flushing) {
    is_flushing = true;
    queueMicrotask(flush_queued_root_effects);
  }
  var effect2 = last_scheduled_effect = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(root) {
  var effects = [];
  var effect2 = root;
  while (effect2 !== null) {
    var flags = effect2.f;
    var is_branch = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & EFFECT) !== 0) {
        effects.push(effect2);
      } else if (is_branch) {
        effect2.f ^= CLEAN;
      } else {
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
        }
      }
      var child = effect2.first;
      if (child !== null) {
        effect2 = child;
        continue;
      }
    }
    var parent = effect2.parent;
    effect2 = effect2.next;
    while (effect2 === null && parent !== null) {
      effect2 = parent.next;
      parent = parent.parent;
    }
  }
  return effects;
}
function flushSync(fn) {
  var result;
  while (true) {
    flush_tasks();
    if (queued_root_effects.length === 0) {
      is_flushing = false;
      last_scheduled_effect = null;
      return (
        /** @type {T} */
        result
      );
    }
    is_flushing = true;
    flush_queued_root_effects();
  }
}
function get(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    if (!reaction_sources?.[1].includes(signal) || reaction_sources[0] !== active_reaction) {
      var deps = active_reaction.deps;
      if (signal.rv < read_version) {
        signal.rv = read_version;
        if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
          skipped_deps++;
        } else if (new_deps === null) {
          new_deps = [signal];
        } else if (!skip_reaction || !new_deps.includes(signal)) {
          new_deps.push(signal);
        }
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived = (
      /** @type {Derived} */
      signal
    );
    var parent = derived.parent;
    if (parent !== null && (parent.f & UNOWNED) === 0) {
      derived.f ^= UNOWNED;
    }
  }
  if (is_derived) {
    derived = /** @type {Derived} */
    signal;
    if (check_dirtiness(derived)) {
      update_derived(derived);
    }
  }
  if (is_destroying_effect && old_values.has(signal)) {
    return old_values.get(signal);
  }
  return signal.v;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
const STATUS_MASK = -7169;
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
const DOM_BOOLEAN_ATTRIBUTES = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "webkitdirectory",
  "defer",
  "disablepictureinpicture",
  "disableremoteplayback"
];
function is_boolean_attribute(name) {
  return DOM_BOOLEAN_ATTRIBUTES.includes(name);
}
const PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function clsx(value) {
  if (typeof value === "object") {
    return clsx$1(value);
  } else {
    return value ?? "";
  }
}
const whitespace = [..." 	\n\r\f \v\uFEFF"];
function to_class(value, hash, directives) {
  var classname = value == null ? "" : "" + value;
  if (directives) {
    for (var key in directives) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a = 0;
        while ((a = classname.indexOf(key, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function subscribe_to_store(store, run, invalidate) {
  if (store == null) {
    run(void 0);
    if (invalidate) invalidate(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
var current_component = null;
function getContext(key) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key)
  );
  return result;
}
function setContext(key, context) {
  get_or_init_context_map().set(key, context);
  return context;
}
function get_or_init_context_map(name) {
  if (current_component === null) {
    lifecycle_outside_component();
  }
  return current_component.c ??= new Map(get_parent_context(current_component) || void 0);
}
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component.p;
}
function get_parent_context(component_context2) {
  let parent = component_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
class HeadPayload {
  /** @type {Set<{ hash: string; code: string }>} */
  css = /* @__PURE__ */ new Set();
  out = "";
  uid = () => "";
  title = "";
  constructor(css = /* @__PURE__ */ new Set(), out = "", title = "", uid = () => "") {
    this.css = css;
    this.out = out;
    this.title = title;
    this.uid = uid;
  }
}
class Payload {
  /** @type {Set<{ hash: string; code: string }>} */
  css = /* @__PURE__ */ new Set();
  out = "";
  uid = () => "";
  select_value = void 0;
  head = new HeadPayload();
  constructor(id_prefix = "") {
    this.uid = props_id_generator(id_prefix);
    this.head.uid = this.uid;
  }
}
function props_id_generator(prefix) {
  let uid = 1;
  return () => `${prefix}s${uid++}`;
}
const INVALID_ATTR_NAME_CHAR_REGEX = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
let on_destroy = [];
function render(component, options = {}) {
  const payload = new Payload(options.idPrefix ? options.idPrefix + "-" : "");
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  if (options.context) {
    push();
    current_component.c = options.context;
  }
  component(payload, options.props ?? {}, {}, {});
  if (options.context) {
    pop();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  let head2 = payload.head.out + payload.head.title;
  for (const { hash, code } of payload.css) {
    head2 += `<style id="${hash}">${code}</style>`;
  }
  return {
    head: head2,
    html: payload.out,
    body: payload.out
  };
}
function head(payload, fn) {
  const head_payload = payload.head;
  head_payload.out += BLOCK_OPEN;
  fn(head_payload);
  head_payload.out += BLOCK_CLOSE;
}
function spread_attributes(attrs, css_hash, classes, styles, flags = 0) {
  if (attrs.class) {
    attrs.class = clsx(attrs.class);
  }
  let attr_str = "";
  let name;
  const is_html = (flags & ELEMENT_IS_NAMESPACED) === 0;
  const lowercase = (flags & ELEMENT_PRESERVE_ATTRIBUTE_CASE) === 0;
  for (name in attrs) {
    if (typeof attrs[name] === "function") continue;
    if (name[0] === "$" && name[1] === "$") continue;
    if (INVALID_ATTR_NAME_CHAR_REGEX.test(name)) continue;
    var value = attrs[name];
    if (lowercase) {
      name = name.toLowerCase();
    }
    attr_str += attr(name, value, is_html && is_boolean_attribute(name));
  }
  return attr_str;
}
function attr_class(value, hash, directives) {
  var result = to_class(value, hash, directives);
  return result ? ` class="${escape_html(result, true)}"` : "";
}
function store_get(store_values, store_name, store) {
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v) => store_values[store_name][2] = v
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
function slot(payload, $$props, name, slot_props, fallback_fn) {
  var slot_fn = $$props.$$slots?.[name];
  if (slot_fn === true) {
    slot_fn = $$props["children"];
  }
  if (slot_fn !== void 0) {
    slot_fn(payload, slot_props);
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
function maybe_selected(payload, value) {
  return value === payload.select_value ? " selected" : "";
}
export {
  push as A,
  BROWSER as B,
  setContext as C,
  pop as D,
  head as E,
  slot as F,
  getContext as G,
  HYDRATION_ERROR as H,
  escape_html as I,
  store_get as J,
  ensure_array_like as K,
  LEGACY_PROPS as L,
  attr as M,
  attr_class as N,
  maybe_selected as O,
  unsubscribe_stores as P,
  noop as Q,
  spread_attributes as R,
  safe_not_equal as S,
  subscribe_to_store as T,
  run_all as U,
  set_active_effect as a,
  active_effect as b,
  active_reaction as c,
  define_property as d,
  init_operations as e,
  get_first_child as f,
  get_next_sibling as g,
  HYDRATION_START as h,
  is_array as i,
  HYDRATION_END as j,
  hydration_failed as k,
  clear_text_content as l,
  array_from as m,
  component_root as n,
  is_passive_event as o,
  create_text as p,
  branch as q,
  push$1 as r,
  set_active_reaction as s,
  component_context as t,
  pop$1 as u,
  set as v,
  get as w,
  flushSync as x,
  mutable_source as y,
  render as z
};
````

## File: .svelte-kit/output/server/chunks/index2.js
````javascript
class HttpError {
  /**
   * @param {number} status
   * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
   */
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Redirect {
  /**
   * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
   * @param {string} location
   */
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
}
class SvelteKitError extends Error {
  /**
   * @param {number} status
   * @param {string} text
   * @param {string} message
   */
  constructor(status, text2, message) {
    super(message);
    this.status = status;
    this.text = text2;
  }
}
class ActionFailure {
  /**
   * @param {number} status
   * @param {T} data
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
}
function error(status, body) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 — ${status} is invalid`);
  }
  throw new HttpError(status, body);
}
function json(data, init) {
  const body = JSON.stringify(data);
  const headers = new Headers(init?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init,
    headers
  });
}
const encoder = new TextEncoder();
function text(body, init) {
  const headers = new Headers(init?.headers);
  if (!headers.has("content-length")) {
    const encoded = encoder.encode(body);
    headers.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init,
      headers
    });
  }
  return new Response(body, {
    ...init,
    headers
  });
}
export {
  ActionFailure as A,
  HttpError as H,
  Redirect as R,
  SvelteKitError as S,
  error as e,
  json as j,
  text as t
};
````

## File: .svelte-kit/output/server/chunks/index3.js
````javascript
import { Q as noop, S as safe_not_equal, T as subscribe_to_store, U as run_all } from "./index.js";
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
    }
    run(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  if (!stores_array.every(Boolean)) {
    throw new Error("derived() expects stores as input, got a falsy value");
  }
  const auto = fn.length < 2;
  return readable(initial_value, (set, update) => {
    let started = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set, update);
      if (auto) {
        set(result);
      } else {
        cleanup = typeof result === "function" ? result : noop;
      }
    };
    const unsubscribers = stores_array.map(
      (store, i) => subscribe_to_store(
        store,
        (value) => {
          values[i] = value;
          pending &= ~(1 << i);
          if (started) {
            sync();
          }
        },
        () => {
          pending |= 1 << i;
        }
      )
    );
    started = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
      started = false;
    };
  });
}
function get(store) {
  let value;
  subscribe_to_store(store, (_) => value = _)();
  return value;
}
export {
  derived as d,
  get as g,
  readable as r,
  writable as w
};
````

## File: .svelte-kit/output/server/chunks/traits.js
````javascript
const traitsData = [
  // Human Traits (p. 108)
  {
    id: "human_attribute_increase",
    name: "Attribute Increase",
    description: "Choose an Attribute. The chosen Attribute increases by 1 (up to the Attribute Limit).",
    cost: 2,
    effects: [{ type: "MODIFY_ATTRIBUTE", target: "any_attribute_choice", value: 1, userChoiceRequired: { prompt: "Choose an Attribute to increase by 1" } }]
  },
  {
    id: "human_skill_expertise",
    name: "Skill Expertise",
    description: "Choose a Skill. Your Mastery Cap and Mastery Level in the chosen Skill both increase by 1. You can only benefit from 1 Feature that increases your Skill Mastery Limit at a time.",
    cost: 2,
    effects: [{ type: "GRANT_SKILL_EXPERTISE", value: { skillId: "any_skill_choice", capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a skill for Expertise" } }]
  },
  {
    id: "human_resolve",
    name: "Human Resolve",
    description: "Your Death’s Door Threshold value is expanded by 1.",
    cost: 1,
    effects: [{ type: "MODIFY_DEATH_THRESHOLD_MODIFIER", value: 1 }]
  },
  {
    id: "human_undying",
    name: "Undying",
    description: "You have ADV on Saves against the Doomed Condition.",
    cost: 0,
    isMinor: true,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Doomed" }]
  },
  {
    id: "human_trade_expertise",
    name: "Trade Expertise",
    description: "Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1. You can only benefit from 1 Feature that increases your Trade Mastery Limit at a time.",
    cost: 1,
    effects: [{ type: "GRANT_TRADE_EXPERTISE", value: { tradeId: "any_trade_choice", capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: "human_determination",
    name: "Human Determination",
    description: "Once per Combat, you can give yourself ADV on an Attack Check or Spell Check while Bloodied.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_CHECK_WHILE_BLOODIED", target: "Attack_or_Spell_Check", condition: "bloodied" }]
  },
  {
    id: "human_unbreakable",
    name: "Unbreakable",
    description: "You have ADV on Death Saves.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_SAVE", target: "Death_Save" }]
  },
  {
    id: "human_attribute_decrease",
    name: "Attribute Decrease",
    description: "Choose an Attribute. You decrease the chosen Attribute by 1 (to a minimum of -2).",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_ATTRIBUTE", target: "any_attribute_choice", value: -1, userChoiceRequired: { prompt: "Choose an Attribute to decrease by 1" } }]
  },
  // Elf Traits (p. 108)
  {
    id: "elf_elven_will",
    name: "Elven Will",
    description: "You have ADV on Checks and Saves against being Charmed and put to Sleep.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Charmed" }, { type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Sleep_Magic" }]
  },
  {
    id: "elf_nimble",
    name: "Nimble",
    description: "When you take the Dodge Action, you instead gain the benefits of the Full Dodge Action.",
    cost: 2,
    effects: [{ type: "MODIFY_ACTION_BENEFIT", target: "Dodge_Action", value: "Full_Dodge_Benefit" }]
  },
  {
    id: "elf_agile_explorer",
    name: "Agile Explorer",
    description: "You’re not affected by Difficult Terrain.",
    cost: 2,
    effects: [{ type: "IGNORE_DIFFICULT_TERRAIN" }]
  },
  {
    id: "elf_discerning_sight",
    name: "Discerning Sight",
    description: "You have ADV on Checks and Saves made to discern through visual illusions.",
    cost: 0,
    isMinor: true,
    effects: [{ type: "GRANT_ADV_ON_CHECKS_SAVES_VS_ILLUSION_VISUAL" }]
  },
  {
    id: "elf_quick_reactions",
    name: "Quick Reactions",
    description: "While you aren’t wearing Armor, you gain +1 PD.",
    cost: 1,
    effects: [{ type: "MODIFY_PD", value: 1, condition: "not_wearing_armor" }]
  },
  {
    id: "elf_peerless_sight",
    name: "Peerless Sight",
    description: "You don’t have DisADV as a result of making an Attack with a Weapon at Long Range",
    cost: 1,
    effects: [{ type: "IGNORE_DISADV_ON_RANGED_ATTACK_AT_LONG_RANGE" }]
  },
  {
    id: "elf_climb_speed",
    name: "Climb Speed",
    description: "You gain a Climb Speed equal to your Movement Speed.",
    cost: 1,
    effects: [{ type: "GRANT_CLIMB_SPEED_EQUAL_TO_SPEED" }]
  },
  {
    id: "elf_speed_increase",
    name: "Speed Increase",
    description: "Your Speed increases by 1 Space.",
    cost: 2,
    effects: [{ type: "MODIFY_SPEED", value: 5 }]
    // 1 Space = 5 feet
  },
  {
    id: "elf_trade_expertise_elf",
    name: "Trade Expertise (Elf)",
    description: "Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1. You can only benefit from 1 Feature that increases your Trade Mastery Limit at a time.",
    cost: 1,
    effects: [{ type: "GRANT_TRADE_EXPERTISE", value: { tradeId: "any_trade_choice", capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: "elf_plant_knowledge",
    name: "Plant Knowledge",
    description: "While within forests, jungles, and swamps, you have ADV on Survival Checks. Additionally, you have ADV on Nature Checks made to recall information about plants.",
    cost: 0,
    isMinor: true,
    effects: [{ type: "GRANT_ADV_ON_SURVIVAL_CHECKS_IN_ENVIRONMENTS", target: "forests_jungles_swamps" }, { type: "GRANT_ADV_ON_NATURE_CHECKS_ABOUT_PLANTS" }]
  },
  {
    id: "elf_brittle",
    name: "Brittle",
    description: "Your AD decreases by 1.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_AD", value: -1 }]
  },
  {
    id: "elf_frail",
    name: "Frail",
    description: "Your HP maximum decreases by 2.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_HP_MAX_STATIC", value: -2 }]
  },
  {
    id: "elf_might_decrease",
    name: "Might Decrease",
    description: "Your Might decreases by 1 (to a minimum of -2).",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_ATTRIBUTE", target: "might", value: -1 }]
  },
  // Dwarf Traits (p. 109)
  {
    id: "dwarf_tough",
    name: "Tough",
    description: "Your HP maximum increases by 1.",
    cost: 1,
    effects: [{ type: "MODIFY_HP_MAX_STATIC", value: 1 }]
  },
  {
    id: "dwarf_toxic_fortitude",
    name: "Toxic Fortitude",
    description: "You have Poison Resistance (Half) and ADV on Saves against being Poisoned.",
    cost: 2,
    effects: [{ type: "GRANT_RESISTANCE_HALF", target: "Poison" }, { type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Poisoned" }]
  },
  {
    id: "dwarf_physically_sturdy",
    name: "Physically Sturdy",
    description: "You have ADV on Saves against being Impaired, Deafened, or Petrified.",
    cost: 2,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Impaired" }, { type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Deafened" }, { type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Petrified" }]
  },
  {
    id: "dwarf_iron_stomach",
    name: "Iron Stomach",
    description: "You have ADV on Saves against effects that come from consuming food or liquids.",
    cost: 0,
    isMinor: true,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_EFFECT_FROM_CONSUMING" }]
  },
  {
    id: "dwarf_thick_skinned",
    name: "Thick-Skinned",
    description: "While you aren’t wearing Armor, you gain +1 AD.",
    cost: 1,
    effects: [{ type: "MODIFY_AD", value: 1, condition: "not_wearing_armor" }]
  },
  {
    id: "dwarf_natural_combatant",
    name: "Natural Combatant",
    description: "You gain Combat Training with Heavy Armor and All Shields.",
    cost: 1,
    effects: [{ type: "GRANT_COMBAT_TRAINING", target: "Heavy_Armor" }, { type: "GRANT_COMBAT_TRAINING", target: "All_Shields" }]
  },
  {
    id: "dwarf_stone_blood",
    name: "Stone Blood",
    description: "You have ADV on Saves against Bleeding. Additionally, you can spend 1 AP to end the Bleeding Condition on yourself.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Bleeding" }, { type: "GRANT_ABILITY", value: "End_Bleeding_Self_1AP" }]
  },
  {
    id: "dwarf_minor_tremorsense",
    name: "Minor Tremorsense",
    description: "You have Tremorsense 3 Spaces.",
    cost: 1,
    effects: [{ type: "GRANT_TREMORSENSE", value: 3 }]
  },
  {
    id: "dwarf_stubborn",
    name: "Stubborn",
    description: "You have ADV on Saves against being Taunted and against being forcibly moved.",
    cost: 2,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Taunted" }, { type: "GRANT_ADV_ON_SAVE_VS_FORCED_MOVEMENT" }]
  },
  {
    id: "dwarf_trade_expertise",
    name: "Trade Expertise",
    description: "Choose a Crafting or Services Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.",
    cost: 1,
    effects: [{ type: "GRANT_TRADE_EXPERTISE", value: { tradeId: "any_crafting_or_services_trade_choice", capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Crafting or Services Trade for Expertise" } }]
  },
  {
    id: "dwarf_earthen_knowledge",
    name: "Earthen Knowledge",
    description: "While within mountainous and subterranean environments, you have ADV on Survival Checks. Additionally, you have ADV on Nature Checks made to recall information about rocks, soil, crystals, and gems.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_SURVIVAL_CHECKS_IN_ENVIRONMENTS", target: "mountainous_and_subterranean" }, { type: "GRANT_ADV_ON_NATURE_CHECKS_ABOUT_ROCKS_SOIL_CRYSTALS_GEMS" }]
  },
  {
    id: "dwarf_charisma_attribute_decrease",
    name: "Charisma Attribute Decrease",
    description: "You decrease your Charisma by 1 (to a minimum of -2).",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_ATTRIBUTE", target: "charisma", value: -1 }]
  },
  {
    id: "dwarf_short_legged",
    name: "Short-Legged",
    description: "Your Speed decreases by 1 Space.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_SPEED", value: -5 }]
  },
  // Halfling Traits (p. 109)
  {
    id: "halfling_small_sized",
    name: "Small-Sized",
    description: "Your Size is considered Small.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_SIZE", target: "Small" }]
  },
  {
    id: "halfling_elusive",
    name: "Elusive",
    description: "When you take the Disengage Action, you instead gain the benefits of the Full Disengage Action.",
    cost: 2,
    effects: [{ type: "MODIFY_ACTION_BENEFIT", target: "Disengage_Action", value: "Full_Disengage_Action" }]
  },
  {
    id: "halfling_bravery",
    name: "Halfling Bravery",
    description: "You have ADV on Saves against being Intimidated, Rattled, or Frightened",
    cost: 2,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Intimidated" }, { type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Rattled" }, { type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Frightened" }]
  },
  {
    id: "halfling_endurance",
    name: "Halfling Endurance",
    description: "You have Exhaustion Resistance.",
    cost: 1,
    effects: [{ type: "GRANT_CONDITION_RESISTANCE", target: "Exhaustion" }]
  },
  {
    id: "halfling_deft_footwork",
    name: "Deft Footwork",
    description: "You can move through the space of a hostile creature 1 size larger than you as if it were Difficult Terrain.",
    cost: 1,
    effects: [{ type: "IGNORE_DIFFICULT_TERRAIN_WHEN_MOVING_THROUGH_SPACE_OF_LARGER_HOSTILE" }]
  },
  {
    id: "halfling_beast_whisperer",
    name: "Beast Whisperer",
    description: "You can speak to Beasts in a limited manner. They can understand the meanings of simple words, concepts, or states of emotion. You don’t have a special ability to understand them in return.",
    cost: 0,
    isMinor: true,
    effects: [{ type: "GRANT_LIMITED_COMMUNICATION_WITH_BEASTS" }]
  },
  {
    id: "halfling_beast_insight",
    name: "Beast Insight",
    description: "You can understand Beasts in a limited manner. You can understand the meaning of their noises and behaviors, though they have no special ability to understand you in return.",
    cost: 1,
    effects: [{ type: "GRANT_LIMITED_UNDERSTANDING_OF_BEASTS" }]
  },
  {
    id: "halfling_burst_of_bravery",
    name: "Burst of Bravery",
    description: "Once per Combat, you can end the Intimidated, Rattled, or Frightened Condition on yourself for free at any time.",
    cost: 1,
    effects: [{ type: "GRANT_ABILITY", value: "End_Intimidated_Rattled_Frightened_Self_OncePerCombat" }]
  },
  {
    id: "halfling_trade_expertise",
    name: "Trade Expertise",
    description: "Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.",
    cost: 1,
    effects: [{ type: "GRANT_TRADE_EXPERTISE", value: { tradeId: "any_trade_choice", capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: "halfling_critter_knowledge",
    name: "Critter Knowledge",
    description: "You have ADV on Nature, Survival, and Animal Checks involving Small size creatures and smaller.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_CHECKS_INVOLVING_SMALL_CREATURES", target: "Nature_Survival_Animal_Checks" }]
  },
  {
    id: "halfling_brittle",
    name: "Brittle",
    description: "Your AD decreases by 1.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_AD", value: -1 }]
  },
  {
    id: "halfling_intelligence_attribute_decrease",
    name: "Intelligence Attribute Decrease",
    description: "You decrease your Intelligence by 1 (to a minimum of -2).",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_ATTRIBUTE", target: "intelligence", value: -1 }]
  },
  {
    id: "halfling_short_legged",
    name: "Short-Legged",
    description: "Your Speed decreases by 1 Space.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_SPEED", value: -5 }]
  },
  // Gnome Traits (p. 110)
  {
    id: "gnome_small_sized",
    name: "Small-Sized",
    description: "Your Size is considered Small.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_SIZE", target: "Small" }]
  },
  {
    id: "gnome_escape_artist",
    name: "Escape Artist",
    description: "You have ADV on Checks and Saves to avoid or escape being Grappled or Restrained.",
    cost: 2,
    effects: [{ type: "GRANT_ADV_ON_CHECKS_SAVES_TO_AVOID_ESCAPE", target: "Grappled_or_Restrained" }]
  },
  {
    id: "gnome_magnified_vision",
    name: "Magnified Vision",
    description: "You have ADV on Investigation Checks made on something you’re holding or touching.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_INVESTIGATION_CHECKS_ON_HELD_TOUCHED" }]
  },
  {
    id: "gnome_mental_clarity",
    name: "Mental Clarity",
    description: "You have ADV on Saves against being Dazed or Stunned.",
    cost: 2,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Dazed" }, { type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Stunned" }]
  },
  {
    id: "gnome_strong_minded",
    name: "Strong-Minded",
    description: "You gain Psychic Resistance (1).",
    cost: 1,
    effects: [{ type: "GRANT_RESISTANCE_STATIC", target: "Psychic", value: 1 }]
  },
  {
    id: "gnome_predict_weather",
    name: "Predict Weather",
    description: "You can naturally tell what the weather is going to be in the next hour in the area within 1 mile of you. You don’t have DisADV on Checks or Saves as a result of naturally occurring weather.",
    cost: 0,
    isMinor: true,
    effects: [{ type: "GRANT_ABILITY", value: "Predict_Weather_1Mile_1Hour" }, { type: "IGNORE_DISADV_FROM_NATURAL_WEATHER" }]
  },
  {
    id: "gnome_mana_increase",
    name: "Mana Increase",
    description: "Your MP maximum increases by 1.",
    cost: 1,
    effects: [{ type: "MODIFY_MP_MAX", value: 1 }]
  },
  {
    id: "gnome_trapper",
    name: "Trapper",
    description: "You have ADV on Investigation Checks to spot Traps and on Trickery Checks to Hide Traps.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_INVESTIGATION_CHECKS_TO_SPOT_TRAPS" }, { type: "GRANT_ADV_ON_TRICKERY_CHECKS_TO_HIDE_TRAPS" }]
  },
  {
    id: "gnome_lightning_insulation",
    name: "Lightning Insulation",
    description: "You have Lightning Resistance (Half) and can’t be struck by natural lightning.",
    cost: 2,
    effects: [{ type: "GRANT_RESISTANCE_HALF", target: "Lightning" }, { type: "IMMUNE_TO_NATURAL_LIGHTNING" }]
  },
  {
    id: "gnome_trade_expertise",
    name: "Trade Expertise",
    description: "Choose a Crafting or Subterfuge Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.",
    cost: 1,
    effects: [{ type: "GRANT_TRADE_EXPERTISE", value: { tradeId: "any_crafting_or_subterfuge_trade_choice", capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Crafting or Subterfuge Trade for Expertise" } }]
  },
  {
    id: "gnome_storm_knowledge",
    name: "Storm Knowledge",
    description: "While within rainy, snowy, or stormy environments, you have ADV on Survival Checks. Additionally, you have ADV on Knowledge Checks made to recall information about rain, snow, and storms.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_SURVIVAL_CHECKS_IN_ENVIRONMENTS", target: "rainy_snowy_stormy" }, { type: "GRANT_ADV_ON_KNOWLEDGE_CHECKS_ABOUT_RAIN_SNOW_STORMS" }]
  },
  {
    id: "gnome_agility_attribute_decrease",
    name: "Agility Decrease",
    description: "You decrease your Agility by 1 (to a minimum of -2).",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_ATTRIBUTE", target: "agility", value: -1 }]
  },
  {
    id: "gnome_short_legged",
    name: "Short-Legged",
    description: "Your Speed decreases by 1 Space.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_SPEED", value: -5 }]
  },
  // Orc Traits (p. 110)
  {
    id: "orc_cursed_mind",
    name: "Cursed Mind",
    description: "You gain Psychic Vulnerability (1).",
    cost: -1,
    isNegative: true,
    effects: [{ type: "GRANT_VULNERABILITY_STATIC", target: "Psychic", value: 1 }]
  },
  {
    id: "orc_rush",
    name: "Orc Rush",
    description: "Once per Combat when you willingly move toward an enemy, you can spend 1 AP to gain Temp HP equal to your Prime Modifier.",
    cost: 2,
    effects: [{ type: "GRANT_TEMP_HP_ONCE_PER_COMBAT_WHEN_MOVE_TOWARD_ENEMY", value: "Prime_Modifier" }]
  },
  {
    id: "orc_brutal_strikes",
    name: "Brutal Strikes",
    description: "You deal +1 damage when you score a Brutal or Critical Hit with a Melee Weapon or Unarmed Strike.",
    cost: 2,
    effects: [{ type: "MODIFY_DAMAGE_ON_HIT", target: "Melee_Martial_Attack", value: 1, condition: "Brutal_or_Critical_Hit" }]
  },
  {
    id: "orc_tough",
    name: "Tough",
    description: "Your HP maximum increases by 1.",
    cost: 1,
    effects: [{ type: "MODIFY_HP_MAX_STATIC", value: 1 }]
  },
  {
    id: "orc_orcish_resolve",
    name: "Orcish Resolve",
    description: "You gain 1 additional AP while on Death’s Door.",
    cost: 1,
    effects: [{ type: "MODIFY_AP_WHILE_DEATHS_DOOR", value: 1 }]
  },
  {
    id: "orc_already_cursed",
    name: "Already Cursed",
    description: "You have ADV on Saves against Curses.",
    cost: 0,
    isMinor: true,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Curses" }]
  },
  {
    id: "orc_intimidating_shout",
    name: "Intimidating Shout",
    description: "Once per Combat, you can spend 1 AP to let out an Intimidating Shout. All creatures within 5 Spaces that can hear you must make a Charisma Save contested by your Attack Check. Failure: A target is Hindered on the next Attack Check or Spell Attack it makes before the start of your next turn.",
    cost: 2,
    effects: [{ type: "GRANT_ABILITY", value: "Intimidating_Shout_OncePerCombat_1AP" }]
  },
  {
    id: "orc_dash",
    name: "Orc Dash",
    description: "Once per Combat you can use your Minor Action to move, as long as that movement is towards an enemy.",
    cost: 1,
    effects: [{ type: "GRANT_ABILITY", value: "Move_As_Minor_Action_OncePerCombat_Toward_Enemy" }]
  },
  {
    id: "orc_finishing_blow",
    name: "Finishing Blow",
    description: "You deal +1 damage to creatures who are Well-Bloodied.",
    cost: 1,
    effects: [{ type: "MODIFY_DAMAGE_ON_HIT", target: "Martial_Attacks", value: 1, condition: "Well_Bloodied" }]
  },
  {
    id: "orc_imposing_presence",
    name: "Imposing Presence",
    description: "Once per Combat when a creature makes an Attack against you, you can force them to make a Charisma Save. Save Failure: They must choose a new target for the Attack. If there are no other targets, then the Attack is wasted.",
    cost: 1,
    effects: [{ type: "GRANT_ABILITY", value: "Force_New_Target_OncePerCombat_Reaction" }]
  },
  {
    id: "orc_provocation",
    name: "Provocation",
    description: "You have DisADV on Checks and Saves against being Taunted.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "GRANT_DISADV_ON_CHECKS_SAVES_VS_CONDITION", target: "Taunted" }]
  },
  {
    id: "orc_reckless",
    name: "Reckless",
    description: "Your PD decreases by 1.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_PD", value: -1 }]
  },
  // Dragonborn Traits (p. 111)
  {
    id: "dragonborn_darkvision",
    name: "Darkvision",
    description: "You have Darkvision 10 Spaces.",
    cost: 1,
    effects: [{ type: "GRANT_DARKVISION", value: 10 }]
  },
  {
    id: "dragonborn_draconic_resistance",
    name: "Draconic Resistance",
    description: "You gain Resistance (Half) to your Draconic damage type.",
    cost: 2,
    effects: [{ type: "GRANT_RESISTANCE_HALF", target: "Draconic_damage_type" }]
  },
  {
    id: "dragonborn_draconic_breath_weapon",
    name: "Draconic Breath Weapon",
    description: "You gain a Breath Weapon that you can use by spending 2 AP to exhale destructive power in an Area or Focused against a specific target. You can use this ability once per Long Rest, and regain the ability to use it again when you roll for Initiative.",
    cost: 2,
    effects: [{ type: "GRANT_ABILITY", value: "Draconic_Breath_Weapon_OncePerLongRest_RegainOnInitiative" }]
  },
  {
    id: "dragonborn_reptilian_superiority",
    name: "Reptilian Superiority",
    description: "You have ADV on Intimidation Checks against reptilian creatures of Medium Size and smaller (not including other Dragonborn).",
    cost: 0,
    isMinor: true,
    effects: [{ type: "GRANT_ADV_ON_INTIMIDATION_CHECKS_VS_REPTILIAN_MEDIUM_SMALL" }]
  },
  {
    id: "dragonborn_mana_increase",
    name: "Mana Increase",
    description: "Your MP maximum increases by 1.",
    cost: 1,
    effects: [{ type: "MODIFY_MP_MAX", value: 1 }]
  },
  {
    id: "dragonborn_thick_skinned",
    name: "Thick-Skinned",
    description: "While you aren’t wearing Armor, you gain +1 AD.",
    cost: 1,
    effects: [{ type: "MODIFY_AD", value: 1, condition: "not_wearing_armor" }]
  },
  {
    id: "dragonborn_second_breath",
    name: "Second Breath",
    description: "You can now use your Draconic Breath Weapon twice per Combat. Additionally, whenever you use your Draconic Breath Weapon, you can spend 2 uses to increase the damage by 2 if its an Area, or by 4 if its Focused.",
    cost: 1,
    prerequisites: ["dragonborn_draconic_breath_weapon"],
    effects: [{ type: "GRANT_ABILITY", value: "Draconic_Breath_Weapon_TwicePerCombat" }, { type: "GRANT_ABILITY", value: "Draconic_Breath_Weapon_Enhanced_Damage_Spend_Uses" }]
  },
  {
    id: "dragonborn_concussive_breath",
    name: "Concussive Breath",
    description: "When you use your Draconic Breath Weapon, you can force all targets to make a Physical Save. Save Failure: The target is pushed 1 Space away +1 additional Space for every 5 it fails its Save by.",
    cost: 1,
    prerequisites: ["dragonborn_draconic_breath_weapon"],
    effects: [{ type: "GRANT_ABILITY", value: "Draconic_Breath_Weapon_Concussive_Push" }]
  },
  {
    id: "dragonborn_draconic_affinity",
    name: "Draconic Affinity",
    description: "When you take damage of the same type as your Draconic damage, your next Draconic Breath Weapon deals +1 bonus damage.",
    cost: 1,
    effects: [{ type: "MODIFY_DAMAGE_ON_NEXT_DRACONIC_BREATH_WEAPON", value: 1, condition: "take_same_type_damage" }]
  },
  {
    id: "dragonborn_dying_breath",
    name: "Dying Breath",
    description: "Once per Combat when you enter Death’s Door, you regain a use of your Draconic Breath Weapon and can immediately use it as a Reaction for free (0 AP).",
    cost: 1,
    prerequisites: ["dragonborn_draconic_breath_weapon"],
    effects: [{ type: "GRANT_ABILITY", value: "Draconic_Breath_Weapon_Reaction_On_Deaths_Door" }]
  },
  {
    id: "dragonborn_draconic_ward",
    name: "Draconic Ward",
    description: "Once per Combat when you enter Death’s Door, you gain 2 Temp HP. Whenever you’re Hit by a Melee Attack while you have this Temp HP, your Attacker takes 1 Draconic damage.",
    cost: 1,
    effects: [{ type: "GRANT_TEMP_HP_ONCE_PER_COMBAT_ON_DEATHS_DOOR", value: 2 }, { type: "GRANT_DAMAGE_ON_MELEE_HIT_WHILE_TEMP_HP", target: "Draconic_damage_type", value: 1 }]
  },
  {
    id: "dragonborn_draconic_protection",
    name: "Draconic Protection",
    description: "Once per Combat, when an ally within 20 Spaces is on Death’s Door, you begin to surge with an ancient power. While they remain on Death’s Door their PD and AD increases by 5 until Combat ends.",
    cost: 1,
    effects: [{ type: "GRANT_ABILITY", value: "Increase_PD_AD_Ally_On_Deaths_Door" }]
  },
  {
    id: "dragonborn_glide_speed",
    name: "Glide Speed",
    description: "You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.",
    cost: 2,
    effects: [{ type: "GRANT_GLIDE_SPEED" }]
  },
  {
    id: "dragonborn_guardians_bond",
    name: "Guardian’s Bond",
    description: "Once per Combat when an ally enters Death’s Door within 20 Spaces of you, you take an amount of True damage equal to your Prime Modifier.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "TAKE_TRUE_DAMAGE_ONCE_PER_COMBAT_WHEN_ALLY_DEATHS_DOOR", value: "Prime_Modifier" }]
  },
  // Giantborn Traits (p. 112)
  {
    id: "giantborn_tough",
    name: "Tough",
    description: "Your HP maximum increases by 1.",
    cost: 1,
    effects: [{ type: "MODIFY_HP_MAX_STATIC", value: 1 }]
  },
  {
    id: "giantborn_powerful_build",
    name: "Powerful Build",
    description: "You increase by 1 Size, but you occupy the Space of a creature 1 Size smaller.",
    cost: 2,
    effects: [{ type: "MODIFY_SIZE", target: "Large" }, { type: "MODIFY_SPACE_OCCUPIED", target: "1_Size_Smaller" }]
  },
  {
    id: "giantborn_unstoppable",
    name: "Unstoppable",
    description: "You have ADV on Saves against being Slowed or Stunned.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Slowed" }, { type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Stunned" }]
  },
  {
    id: "giantborn_giants_resolve",
    name: "Giant’s Resolve",
    description: "While on Death’s Door, you reduce all damage taken by 1.",
    cost: 1,
    effects: [{ type: "REDUCE_DAMAGE_TAKEN", value: 1, condition: "deaths_door" }]
  },
  {
    id: "giantborn_unyielding_movement",
    name: "Unyielding Movement",
    description: "You’re immune to being Slowed 2 (or higher).",
    cost: 0,
    isMinor: true,
    effects: [{ type: "IMMUNE_TO_SLOWED_2_OR_HIGHER" }]
  },
  {
    id: "giantborn_giants_fortitude",
    name: "Giant’s Fortitude",
    description: "You also gain the benefits of your Giant’s Resolve Trait while Well-Bloodied.",
    cost: 2,
    prerequisites: ["giantborn_giants_resolve"],
    effects: [{ type: "GRANT_BENEFIT_WHILE_WELL_BLOODIED", target: "giantborn_giants_resolve" }]
  },
  {
    id: "giantborn_strong_body",
    name: "Strong Body",
    description: "Once per Combat when you take damage from an Attack, you can reduce the damage taken by an amount equal to your Might or Agility (your choice).",
    cost: 2,
    effects: [{ type: "REDUCE_DAMAGE_TAKEN_ONCE_PER_COMBAT", value: "Might_or_Agility" }]
  },
  {
    id: "giantborn_mighty_hurl",
    name: "Mighty Hurl",
    description: "You throw creatures 1 Space farther than normal, and objects (including Weapons) 5 Spaces farther than normal.",
    cost: 1,
    effects: [{ type: "MODIFY_THROW_DISTANCE_CREATURES", value: 1 }, { type: "MODIFY_THROW_DISTANCE_OBJECTS", value: 5 }]
  },
  {
    id: "giantborn_titanic_toss",
    name: "Titanic Toss",
    description: "You have ADV on Checks made to throw creatures. Additionally, you don’t have DisADV as a result of making an Attack with a Weapon with the Toss or Thrown Property at Long Range.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_CHECKS", target: "Throw_Creatures" }, { type: "IGNORE_DISADV_ON_RANGED_ATTACK_WITH_TOSS_THROWN_AT_LONG_RANGE" }]
  },
  {
    id: "giantborn_mighty_leap",
    name: "Mighty Leap",
    description: "You can use your Might instead of Agility to determine your Jump Distance and the damage you take from Falling.",
    cost: 1,
    effects: [{ type: "USE_ATTRIBUTE_FOR_JUMP_DISTANCE_FALLING_DAMAGE", target: "Might" }]
  },
  {
    id: "giantborn_brute",
    name: "Brute",
    description: "Once per Combat, you can take the Shove or Grapple Action as a Minor Action.",
    cost: 1,
    effects: [{ type: "GRANT_ABILITY", value: "Shove_or_Grapple_As_Minor_Action_OncePerCombat" }]
  },
  {
    id: "giantborn_heavy_riser",
    name: "Heavy Riser",
    description: "You have to spend 4 Spaces of movement to stand up from Prone.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_MOVEMENT_TO_STAND_UP", value: 4 }]
  },
  {
    id: "giantborn_clumsiness",
    name: "Clumsiness",
    description: "You have DisADV on Agility Checks.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "GRANT_DISADV_ON_CHECKS", target: "Agility_Checks" }]
  },
  {
    id: "giantborn_intelligence_attribute_decrease",
    name: "Intelligence Decrease",
    description: "You decrease your Intelligence by 1 (to a minimum of -2).",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_ATTRIBUTE", target: "intelligence", value: -1 }]
  },
  // Angelborn Traits (p. 113)
  {
    id: "angelborn_radiant_resistance",
    name: "Radiant Resistance",
    description: "You have Resistance (Half) to Radiant damage.",
    cost: 1,
    effects: [{ type: "GRANT_RESISTANCE_HALF", target: "Radiant" }]
  },
  {
    id: "angelborn_celestial_magic",
    name: "Celestial Magic",
    description: "You learn 1 Spell of your choice from the Divine Spell List (Holy & Restoration during the Beta). Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum of 0 MP). The Spells total MP cost (before all reductions) still can’t exceed your Mana Spend Limit.",
    cost: 2,
    effects: [{ type: "GRANT_SPELL_FROM_LIST", target: "Divine_Spell_List" }, { type: "REDUCE_MP_COST_ONCE_PER_LONG_REST", value: 1 }]
  },
  {
    id: "angelborn_healing_touch",
    name: "Healing Touch",
    description: "Once per Combat, you can spend 1 AP to touch a creature and Heal it. Make a DC 10 Spell Check. Success: You can restore up to 2 HP to the target. Success (each 5): +1 HP. Failure: You only restore 2 HP.",
    cost: 2,
    effects: [{ type: "GRANT_ABILITY", value: "Healing_Touch_OncePerCombat_1AP" }]
  },
  {
    id: "angelborn_divine_glow",
    name: "Divine Glow",
    description: "Your body can emit a Bright Light in a 5 Space radius around you at will.",
    cost: 0,
    isMinor: true,
    effects: [{ type: "GRANT_ABILITY", value: "Emit_Bright_Light_5Space_Radius_AtWill" }]
  },
  {
    id: "angelborn_mana_increase",
    name: "Mana Increase",
    description: "Your MP maximum increases by 1.",
    cost: 1,
    effects: [{ type: "MODIFY_MP_MAX", value: 1 }]
  },
  {
    id: "angelborn_celestial_clarity",
    name: "Celestial Clarity",
    description: "You have ADV on Saves against being Blinded or Deafened.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Blinded" }, { type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Deafened" }]
  },
  {
    id: "angelborn_angelic_insight",
    name: "Angelic Insight",
    description: "Once per Long Rest you can grant yourself ADV on an Insight Check to see if someone is lying.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_INSIGHT_CHECK_ONCE_PER_LONG_REST", condition: "see_if_lying" }]
  },
  {
    id: "angelborn_gift_of_the_angels",
    name: "Gift of the Angels",
    description: "Once per Combat you can spend 1 AP and 1 MP and touch a creature to heal them over time. The creature recovers 1 HP at the start of each of their turns for 1 minute (5 Rounds).",
    cost: 2,
    effects: [{ type: "GRANT_ABILITY", value: "Heal_Over_Time_OncePerCombat_1AP_1MP" }]
  },
  {
    id: "angelborn_blinding_light",
    name: "Blinding Light",
    description: "Once per Combat, you can spend 1 AP to choose a creature within 5 Spaces and make a Spell Check contested by its Physical Save. Success: The target is Blinded until the end of your next turn.",
    cost: 1,
    effects: [{ type: "GRANT_ABILITY", value: "Blind_Target_OncePerCombat_1AP" }]
  },
  {
    id: "angelborn_glide_speed",
    name: "Glide Speed",
    description: "You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.",
    cost: 2,
    effects: [{ type: "GRANT_GLIDE_SPEED" }]
  },
  {
    id: "angelborn_pacifist",
    name: "Pacifist",
    description: "Your divine call is to put others before yourself and resist doing harm. You suffer a -1 penalty to all Checks and Saves made during the first round of Combat.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "PENALTY_ON_CHECKS_SAVES_FIRST_ROUND_OF_COMBAT", value: -1 }]
  },
  {
    id: "angelborn_umbral_weakness",
    name: "Umbral Weakness",
    description: "You have Umbral Vulnerability (1).",
    cost: -1,
    isNegative: true,
    effects: [{ type: "GRANT_VULNERABILITY_STATIC", target: "Umbral", value: 1 }]
  },
  // Fiendborn Traits (p. 114)
  {
    id: "fiendborn_fiendish_resistance",
    name: "Fiendish Resistance",
    description: "You gain Resistance (Half) to your Fiendish damage type.",
    cost: 2,
    effects: [{ type: "GRANT_RESISTANCE_HALF", target: "Fiendish_damage_type" }]
  },
  {
    id: "fiendborn_fiendish_magic",
    name: "Fiendish Magic",
    description: "You learn 1 Spell of your choice from the Arcane Spell List from the Destruction or Enchantment Spell Schools. If the Spell deals damage, it must be the same damage type as your Fiendish damage. Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum of 0 MP). The Spells total MP cost (before all reductions) still can’t exceed your Mana Spend Limit.",
    cost: 2,
    effects: [{ type: "GRANT_SPELL_FROM_LIST_SCHOOLS", target: "Arcane_Spell_List", schools: ["Destruction", "Enchantment"] }, { type: "REDUCE_MP_COST_ONCE_PER_LONG_REST", value: 1, condition: "spell_damage_type_matches_fiendish" }]
  },
  {
    id: "fiendborn_darkvision",
    name: "Darkvision",
    description: "You have a Darkvision of 10 Spaces.",
    cost: 1,
    effects: [{ type: "GRANT_DARKVISION", value: 10 }]
  },
  {
    id: "fiendborn_lights_bane",
    name: "Light’s Bane",
    description: "You can spend 1 AP to snuff out a mundane light source within 5 Spaces of you.",
    cost: 0,
    isMinor: true,
    effects: [{ type: "GRANT_ABILITY", value: "Snuff_Out_Mundane_Light_Source_1AP" }]
  },
  {
    id: "fiendborn_mana_increase",
    name: "Mana Increase",
    description: "Your MP maximum increases by 1.",
    cost: 1,
    effects: [{ type: "MODIFY_MP_MAX", value: 1 }]
  },
  {
    id: "fiendborn_silver_tongued",
    name: "Silver-Tongued",
    description: "Once per Long Rest you can grant yourself ADV on an Influence Check when trying to deceive someone.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_INFLUENCE_CHECK_ONCE_PER_LONG_REST", condition: "trying_to_deceive" }]
  },
  {
    id: "fiendborn_fiendish_aura",
    name: "Fiendish Aura",
    description: "You learn the Sorcery Cantrip, but you must choose the type of energy that’s the same as your Fiendish Origin.",
    cost: 1,
    effects: [{ type: "GRANT_SPELL_KNOWN", value: "Sorcery_Cantrip" }, { type: "SET_SORCERY_ENERGY_TYPE", target: "Fiendish_Origin" }]
  },
  {
    id: "fiendborn_superior_darkvision",
    name: "Superior Darkvision",
    description: "Your Darkvision increases to 20 Spaces.",
    cost: 1,
    prerequisites: ["fiendborn_darkvision"],
    effects: [{ type: "MODIFY_DARKVISION", value: 20 }]
  },
  {
    id: "fiendborn_infernal_bravery",
    name: "Infernal Bravery",
    description: "You have ADV on Saves against being Intimidated.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Intimidated" }]
  },
  {
    id: "fiendborn_intimidator",
    name: "Intimidator",
    description: "Once per Combat you can take the Intimidate Action as a Minor Action.",
    cost: 1,
    effects: [{ type: "GRANT_ABILITY", value: "Intimidate_As_Minor_Action_OncePerCombat" }]
  },
  {
    id: "fiendborn_charming_gaze",
    name: "Charming Gaze",
    description: "You can spend 1 AP to gaze upon a creature you can see within 10 Spaces that can also see you. Make a Spell Check contested by the target’s Repeated Charisma Save. Success: The creature becomes Charmed by you for 1 minute. You can use this ability once per Long Rest, and when you roll for Initiative, or meet some other unique criteria at the GM’s discretion, this ability recharges.",
    cost: 1,
    effects: [{ type: "GRANT_ABILITY", value: "Charm_Target_OncePerLongRest_1AP" }]
  },
  {
    id: "fiendborn_glide_speed",
    name: "Glide Speed",
    description: "You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.",
    cost: 2,
    effects: [{ type: "GRANT_GLIDE_SPEED" }]
  },
  {
    id: "fiendborn_radiant_weakness",
    name: "Radiant Weakness",
    description: "You have Radiant Vulnerability (1).",
    cost: -1,
    isNegative: true,
    effects: [{ type: "GRANT_VULNERABILITY_STATIC", target: "Radiant", value: 1 }]
  },
  {
    id: "fiendborn_divine_dampening",
    name: "Divine Dampening",
    description: "You recover 1 less HP when healed from divine sources.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "REDUCE_HP_REGAINED_FROM_DIVINE_SOURCES", value: 1 }]
  },
  // Beastborn Traits (p. 115-116)
  {
    id: "beastborn_darkvision",
    name: "Darkvision",
    description: "You have Darkvision 10 Spaces.",
    cost: 1,
    effects: [{ type: "GRANT_DARKVISION", value: 10 }]
  },
  {
    id: "beastborn_echolocation",
    name: "Echolocation",
    description: "You can spend 1 AP to roar, scream, or screech to gain Blindsight in a 10 Spaces radius that lasts until the start of your next turn. The sound can be heard from up to 100 Spaces away. You gain no benefit from this Trait in an area of Silence.",
    cost: 1,
    effects: [{ type: "GRANT_ABILITY", value: "Echolocation_1AP_10Space_1Round" }]
  },
  {
    id: "beastborn_keen_sense",
    name: "Keen Sense",
    description: "Choose 1 of the following senses: hearing, sight, or smell. You make Awareness Checks with ADV using the chosen sense.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_AWARENESS_CHECKS_USING_SENSE", target: "chosen_sense", userChoiceRequired: { prompt: "Choose a sense: hearing, sight, or smell" } }]
    // This trait can be chosen multiple times, but the interface doesn't directly support that.
    // The logic for handling multiple selections will need to be in the application.
  },
  {
    id: "beastborn_sunlight_sensitivity",
    name: "Sunlight Sensitivity",
    description: "While you or your target is in sunlight, you have DisADV on Attacks and Awareness Checks that rely on sight.",
    cost: -2,
    isNegative: true,
    effects: [{ type: "GRANT_DISADV_ON_ATTACKS_AWARENESS_CHECKS_IN_SUNLIGHT" }]
  },
  {
    id: "beastborn_quick_reactions",
    name: "Quick Reactions",
    description: "While you aren’t wearing Armor, you gain +1 PD.",
    cost: 1,
    effects: [{ type: "MODIFY_PD", value: 1, condition: "not_wearing_armor" }]
  },
  {
    id: "beastborn_climb_speed",
    name: "Climb Speed",
    description: "You gain a Climb Speed equal to your Ground Speed.",
    cost: 1,
    effects: [{ type: "GRANT_CLIMB_SPEED_EQUAL_TO_SPEED" }]
  },
  {
    id: "beastborn_spider_climb",
    name: "Spider Climb",
    description: "You can walk without falling on the ceiling and vertical surfaces normally without needing to Climb.",
    cost: 1,
    prerequisites: ["beastborn_climb_speed"],
    effects: [{ type: "GRANT_ABILITY", value: "Walk_On_Vertical_Surfaces_Ceilings" }]
  },
  {
    id: "beastborn_web_walk",
    name: "Web Walk",
    description: "You can walk along and through webs unimpeded. Additionally, you know the location of any creature that’s in contact with the same web.",
    cost: 1,
    effects: [{ type: "IGNORE_DIFFICULT_TERRAIN_FROM_WEBS" }, { type: "KNOW_LOCATION_OF_CREATURES_IN_CONTACT_WITH_WEB" }]
  },
  {
    id: "beastborn_water_breathing",
    name: "Water Breathing",
    description: "You can breathe underwater.",
    cost: 1,
    effects: [{ type: "GRANT_WATER_BREATHING" }]
  },
  {
    id: "beastborn_swim_speed",
    name: "Swim Speed",
    description: "You gain a Swim Speed equal to your Ground Speed. Additionally, your Breath Duration increases by 3.",
    cost: 1,
    effects: [{ type: "GRANT_SWIM_SPEED_EQUAL_TO_SPEED" }, { type: "MODIFY_BREATH_DURATION", value: 3 }]
  },
  {
    id: "beastborn_speed_increase",
    name: "Speed Increase",
    description: "Your Speed increases by 1 Space.",
    cost: 2,
    effects: [{ type: "MODIFY_SPEED", value: 5 }]
    // This trait can be chosen up to 5 times, but the interface doesn't directly support that.
    // The logic for handling multiple selections will need to be in the application.
  },
  {
    id: "beastborn_sprint",
    name: "Sprint",
    description: "You can use your Minor Action to take the Move Action. Once you use this Trait, you can’t use it again until you take a turn without taking the Move Action.",
    cost: 2,
    effects: [{ type: "GRANT_ABILITY", value: "Move_As_Minor_Action_OncePerTurn_NoMoveAction" }]
  },
  {
    id: "beastborn_charge",
    name: "Charge",
    description: "If you move at least 2 Spaces in a straight line before making a Melee Attack, the damage of the Attack increases by 1.",
    cost: 2,
    effects: [{ type: "MODIFY_DAMAGE_ON_MELEE_ATTACK", value: 1, condition: "move_2_spaces_straight_before" }]
  },
  {
    id: "beastborn_burrow_speed",
    name: "Burrow Speed",
    description: "You gain a Burrow Speed equal to half your Movement Speed.",
    cost: 2,
    effects: [{ type: "GRANT_BURROW_SPEED_HALF_SPEED" }]
  },
  {
    id: "beastborn_jumper",
    name: "Jumper",
    description: "Your Jump Distance increases by 2, and you can take the Jump Action as a Minor Action.",
    cost: 1,
    effects: [{ type: "MODIFY_JUMP_DISTANCE", value: 2 }, { type: "GRANT_ABILITY", value: "Jump_As_Minor_Action" }]
  },
  {
    id: "beastborn_strong_jumper",
    name: "Strong Jumper",
    description: "You no longer need to move 2 Spaces before performing a Running Jump, and you take 0 damage from Controlled Falling 5 Spaces or less.",
    cost: 1,
    effects: [{ type: "IGNORE_2_SPACES_MOVEMENT_FOR_RUNNING_JUMP" }, { type: "IGNORE_FALLING_DAMAGE_5_SPACES_OR_LESS" }]
  },
  {
    id: "beastborn_glide_speed",
    name: "Glide Speed",
    description: "You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.",
    cost: 2,
    effects: [{ type: "GRANT_GLIDE_SPEED" }]
  },
  {
    id: "beastborn_limited_flight",
    name: "Limited Flight",
    description: "You have a set of wings that grant you limited flight. Provided you aren’t Incapacitated, you gain the following benefits: Vertical Ascent: You can spend 2 Spaces of movement to ascend 1 Space vertically. Hover: When you end your turn in the air, you maintain your altitude.",
    cost: 2,
    prerequisites: ["beastborn_glide_speed"],
    effects: [{ type: "GRANT_LIMITED_FLIGHT" }]
  },
  {
    id: "beastborn_full_flight",
    name: "Full Flight",
    description: "You have a Fly Speed equal to your Ground Speed.",
    cost: 2,
    prerequisites: ["beastborn_limited_flight"],
    effects: [{ type: "GRANT_FLY_SPEED_EQUAL_TO_SPEED" }]
  },
  {
    id: "beastborn_flyby",
    name: "Flyby",
    description: "You don’t provoke Opportunity Attacks when you Fly out of an enemy’s reach.",
    cost: 1,
    prerequisites: ["beastborn_limited_flight"],
    effects: [{ type: "IGNORE_OPPORTUNITY_ATTACKS_WHEN_FLY_OUT_OF_REACH" }]
  },
  {
    id: "beastborn_stealth_feathers",
    name: "Stealth Feathers",
    description: "You have ADV on Stealth Checks while Flying.",
    cost: 2,
    prerequisites: ["beastborn_limited_flight"],
    effects: [{ type: "GRANT_ADV_ON_STEALTH_CHECKS_WHILE_FLYING" }]
  },
  {
    id: "beastborn_winged_arms",
    name: "Winged Arms",
    description: "Your arms are also your wings. Anytime you use a Glide Speed or Flying Speed, you can’t hold anything in your hands.",
    cost: -1,
    isNegative: true,
    prerequisites: ["beastborn_limited_flight"],
    // Assuming Limited Flight or Full Flight
    effects: [{ type: "PENALTY_CANT_HOLD_WHILE_FLYING" }]
  },
  {
    id: "beastborn_tough",
    name: "Tough",
    description: "Your HP maximum increases by 1.",
    cost: 1,
    effects: [{ type: "MODIFY_HP_MAX_STATIC", value: 1 }]
  },
  {
    id: "beastborn_thick_skinned",
    name: "Thick-Skinned",
    description: "While you aren’t wearing Armor, you gain +1 AD.",
    cost: 1,
    effects: [{ type: "MODIFY_AD", value: 1, condition: "not_wearing_armor" }]
  },
  {
    id: "beastborn_powerful_build",
    name: "Powerful Build",
    description: "You increase by 1 Size, but you occupy the Space of a creature 1 Size smaller.",
    cost: 2,
    effects: [{ type: "MODIFY_SIZE", target: "Large" }, { type: "MODIFY_SPACE_OCCUPIED", target: "1_Size_Smaller" }]
  },
  {
    id: "beastborn_long_limbed",
    name: "Long-Limbed",
    description: "When you make a Melee Martial Attack, your reach is 1 Space greater than normal.",
    cost: 3,
    effects: [{ type: "MODIFY_MELEE_REACH", value: 1 }]
  },
  {
    id: "beastborn_secondary_arms",
    name: "Secondary Arms",
    description: "You have 2 slightly smaller secondary arms below your primary pair of arms. They function just like your primary arms, but they can’t wield Weapons with the Heavy Property or Shields.",
    cost: 1,
    effects: [{ type: "GRANT_SECONDARY_ARMS" }]
  },
  {
    id: "beastborn_prehensile_appendage",
    name: "Prehensile Appendage",
    description: "You have a prehensile tail or trunk that has a reach of 1 Space and can lift up an amount of pounds equal to your Might times 5 (or half as many kilograms). You can use it to lift, hold, or drop objects, and to push, pull, or grapple creatures. It can’t wield Weapons or Shields, you can’t use tools with it that require manual precision, and you can’t use it in place of Somatic Components for Spells.",
    cost: 1,
    effects: [{ type: "GRANT_PREHENSILE_APPENDAGE" }]
  },
  {
    id: "beastborn_hazardous_hide",
    name: "Hazardous Hide",
    description: "You have spikes, retractable barbs, poisonous skin, or some other form of defense mechanism to keep creatures from touching you. Choose 1 of the following damage types: Corrosion, Piercing, or Poison. While you are physically Grappled, your Grappler takes 1 damage of the chosen type at the start of each of its turns. Creatures that start their turn Grappled by you also take this damage.",
    cost: 1,
    effects: [{ type: "GRANT_DAMAGE_TO_GRAPPLER", target: "chosen_damage_type", value: 1, userChoiceRequired: { prompt: "Choose a damage type: Corrosion, Piercing, or Poison" } }]
  },
  {
    id: "beastborn_natural_armor",
    name: "Natural Armor",
    description: "While not wearing Armor, you gain PDR.",
    cost: 2,
    prerequisites: ["beastborn_thick_skinned"],
    effects: [{ type: "GRANT_PDR", condition: "not_wearing_armor" }]
  },
  {
    id: "beastborn_hard_shell",
    name: "Hard Shell",
    description: "You have a large shell around your body for protection. Your AD increases by 1 (while you’re not wearing Armor), your Movement Speed decreases by 1, and you’re immune to being Flanked.",
    cost: 1,
    prerequisites: ["beastborn_thick_skinned"],
    effects: [{ type: "MODIFY_AD", value: 1, condition: "not_wearing_armor" }, { type: "MODIFY_SPEED", value: -5 }, { type: "IMMUNE_TO_FLANKING" }]
  },
  {
    id: "beastborn_shell_retreat",
    name: "Shell Retreat",
    description: "Your body has a shell that you can retreat into. You can spend 1 AP to retreat into or come back out of your shell. You gain +5 PD and AD, PDR, EDR and ADV on Might Saves. While in your shell, you’re Prone, you can’t move, you have DisADV on Agility Saves, and you can’t take Reactions.",
    cost: 1,
    prerequisites: ["beastborn_hard_shell"],
    effects: [{ type: "GRANT_ABILITY", value: "Retreat_Into_Shell_1AP" }]
  },
  {
    id: "beastborn_camouflage",
    name: "Camouflage",
    description: "You can change the color and pattern of your body. You have ADV on Stealth Checks while motionless.",
    cost: 2,
    effects: [{ type: "GRANT_ADV_ON_STEALTH_CHECKS_WHILE_MOTIONLESS" }]
  },
  {
    id: "beastborn_prowler",
    name: "Prowler",
    description: "You have ADV on Stealth Checks while in Darkness.",
    cost: 1,
    effects: [{ type: "GRANT_ADV_ON_STEALTH_CHECKS_WHILE_IN_DARKNESS" }]
  },
  {
    id: "beastborn_cold_resistance",
    name: "Cold Resistance",
    description: "You have Cold Resistance (Half) and Resistance to Exhaustion from cold temperatures.",
    cost: 2,
    effects: [{ type: "GRANT_RESISTANCE_HALF", target: "Cold" }, { type: "GRANT_RESISTANCE_TO_EXHAUSTION", condition: "cold_temperatures" }]
  },
  {
    id: "beastborn_fire_resistance",
    name: "Fire Resistance",
    description: "You have Fire Resistance (Half) and Resistance to Exhaustion from hot temperatures.",
    cost: 2,
    effects: [{ type: "GRANT_RESISTANCE_HALF", target: "Fire" }, { type: "GRANT_RESISTANCE_TO_EXHAUSTION", condition: "hot_temperatures" }]
  },
  {
    id: "beastborn_short_legged",
    name: "Short-Legged",
    description: "Your Speed decreases by 1 Space.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_SPEED", value: -5 }]
  },
  {
    id: "beastborn_small_sized",
    name: "Small-Sized",
    description: "Your Size is considered Small.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_SIZE", target: "Small" }]
  },
  {
    id: "beastborn_reckless",
    name: "Reckless",
    description: "Your PD decreases by 1.",
    cost: -1,
    isNegative: true,
    effects: [{ type: "MODIFY_PD", value: -1 }]
  },
  {
    id: "beastborn_natural_weapon",
    name: "Natural Weapon",
    description: "You have up to 2 Natural Weapons (claws, horns, fangs, tail, etc.) which you can use to make Unarmed Strikes that deal 1 Bludgeoning, Piercing, or Slashing damage (your choice upon gaining this Trait). You can perform Attack Maneuvers with your Natural Weapons.",
    cost: 1,
    effects: [{ type: "GRANT_NATURAL_WEAPON", value: 1, userChoiceRequired: { prompt: "Choose a damage type: Bludgeoning, Piercing, or Slashing" } }]
    // This trait can be chosen multiple times, but the interface doesn't directly support that.
    // The logic for handling multiple selections will need to be in the application.
  },
  {
    id: "beastborn_extended_natural_weapon",
    name: "Extended Natural Weapon",
    description: "Your Natural Weapon now has the Reach Property.",
    cost: 2,
    prerequisites: ["beastborn_natural_weapon"],
    effects: [{ type: "GRANT_PROPERTY_TO_NATURAL_WEAPON", target: "Reach" }]
  },
  {
    id: "beastborn_natural_projectile",
    name: "Natural Projectile",
    description: "You can use your Natural Weapon to make a Ranged Martial Attack with a Range of 10 Spaces. The Natural Weapon might produce a spine, barb, fluid, or other harmful projectile (your choice).",
    cost: 1,
    prerequisites: ["beastborn_natural_weapon"],
    effects: [{ type: "GRANT_ABILITY", value: "Natural_Projectile_Ranged_Attack" }]
  },
  {
    id: "beastborn_natural_weapon_passive",
    name: "Natural Weapon Passive",
    description: "You can choose 1 Weapon Style that fits your desired Natural Weapon. You can benefit from the chosen Weapon Style’s passive with your Natural Weapon.",
    cost: 1,
    prerequisites: ["beastborn_natural_weapon"],
    effects: [{ type: "GRANT_WEAPON_STYLE_PASSIVE_TO_NATURAL_WEAPON", target: "chosen_weapon_style", userChoiceRequired: { prompt: "Choose a Weapon Style" } }]
  },
  {
    id: "beastborn_rend",
    name: "Rend",
    description: "You can spend 1 AP when making an Attack Check with your Natural Weapon to force the target to make a Physical Save. Failure: Target begins Bleeding.",
    cost: 1,
    prerequisites: ["beastborn_natural_weapon"],
    effects: [{ type: "GRANT_ABILITY", value: "Rend_Bleeding_1AP" }]
  },
  {
    id: "beastborn_retractable_natural_weapon",
    name: "Retractable Natural Weapon",
    description: "Your Natural Weapon is able to be concealed or retracted and gains the Concealable Property (gain ADV on the first Attack Check you make in Combat).",
    cost: 1,
    prerequisites: ["beastborn_natural_weapon"],
    effects: [{ type: "GRANT_PROPERTY_TO_NATURAL_WEAPON", target: "Concealable" }]
  },
  {
    id: "beastborn_venomous_natural_weapon",
    name: "Venomous Natural Weapon",
    description: "When you Hit a creature with your Natural Weapon, they make a Physical Save against your Save DC. Failure: The target becomes Impaired until the start of your next turn.",
    cost: 1,
    prerequisites: ["beastborn_natural_weapon"],
    effects: [{ type: "GRANT_ABILITY", value: "Venomous_Natural_Weapon_Impaired" }]
  },
  {
    id: "beastborn_fast_reflexes",
    name: "Fast Reflexes",
    description: "You gain ADV on Initiative Checks and on the first Attack Check you make in Combat.",
    cost: 2,
    effects: [{ type: "GRANT_ADV_ON_INITIATIVE_CHECKS" }, { type: "GRANT_ADV_ON_FIRST_ATTACK_CHECK_IN_COMBAT" }]
  },
  {
    id: "beastborn_mimicry",
    name: "Mimicry",
    description: "You can mimic simple sounds that you’ve heard (such as a baby’s crying, the creak of a door, or single words) and repeat short 3 word phrases that sound identical to what you heard. A creature can make an Insight Check contested by your Trickery Check to determine if this sound is real.",
    cost: 1,
    effects: [{ type: "GRANT_ABILITY", value: "Mimic_Simple_Sounds_Short_Phrases" }]
  },
  {
    id: "beastborn_intimidating_shout",
    name: "Intimidating Shout",
    description: "Once per Combat, you can spend 1 AP to let out an Intimidating Shout. All creatures within 5 Spaces that can hear you must make a Charisma Save contested by your Attack Check. Failure: A target is Hindered on the next Attack Check or Spell Attack it makes before the start of your next turn.",
    cost: 2,
    effects: [{ type: "GRANT_ABILITY", value: "Intimidating_Shout_OncePerCombat_1AP" }]
  },
  {
    id: "beastborn_toxic_fortitude",
    name: "Toxic Fortitude",
    description: "You have Poison Resistance (Half) and ADV on Saves against being Poisoned.",
    cost: 2,
    effects: [{ type: "GRANT_RESISTANCE_HALF", target: "Poison" }, { type: "GRANT_ADV_ON_SAVE_VS_CONDITION", target: "Poisoned" }]
  },
  {
    id: "beastborn_shoot_webs",
    name: "Shoot Webs",
    description: "You can spend 1 AP to shoot web at a target within 5 Spaces. Make an Attack Check contested by the target’s Physical Save. Success: The target is Restrained by webbing and can spend 1 AP on their turn to attempt to escape (Martial Check vs your Save DC). The webbing can also be attacked and destroyed (PD 5, AD 10, 2 HP; Immunity to Bludgeoning, Poison, and Psychic damage).",
    cost: 2,
    effects: [{ type: "GRANT_ABILITY", value: "Shoot_Webs_1AP" }]
  }
];
export {
  traitsData as t
};
````

## File: .svelte-kit/output/server/entries/endpoints/api/character/progress/complete/_server.ts.js
````javascript
import { j as json } from "../../../../../../chunks/index2.js";
import { PrismaClient } from "@prisma/client";
import { c as classesData } from "../../../../../../chunks/classes.js";
import { t as traitsData } from "../../../../../../chunks/traits.js";
const prisma = new PrismaClient();
function validateFeatureChoices(classId, selectedChoicesJson) {
  const classData = classesData.find((c) => c.id === classId);
  if (!classData) throw new Error(`Invalid class ID: ${classId}`);
  const choices = JSON.parse(selectedChoicesJson || "{}");
  for (const requiredChoice of classData.featureChoicesLvl1 || []) {
    if (choices[requiredChoice.id] === void 0) {
      throw new Error(`Missing required choice for ${classData.name}: ${requiredChoice.prompt}`);
    }
    const validOptions = requiredChoice.options.map((o) => o.value);
    if (!validOptions.includes(choices[requiredChoice.id])) {
      throw new Error(`Invalid selected option for ${requiredChoice.id} in class ${classData.name}`);
    }
  }
}
function validateAttributeCapsAfterTraits(attributes, selectedTraitIdsJson) {
  const selectedTraitIds = JSON.parse(selectedTraitIdsJson || "[]");
  const traits = selectedTraitIds.map((id) => traitsData.find((t) => t.id === id)).filter((t) => t !== void 0);
  const finalAttributes = { ...attributes };
  for (const trait of traits) {
    const attrEffect = trait.effects?.find((e) => e.type === "MODIFY_ATTRIBUTE");
    if (attrEffect && attrEffect.target && typeof attrEffect.value === "number") {
      const attributeKey = `attribute_${attrEffect.target}`;
      if (attributeKey in finalAttributes) {
        finalAttributes[attributeKey] += attrEffect.value;
      }
    }
  }
  const ATTRIBUTE_MAX_L1 = 3;
  for (const [attrName, finalValue] of Object.entries(finalAttributes)) {
    if (finalValue > ATTRIBUTE_MAX_L1) {
      throw new Error(`Final attribute ${attrName.replace("attribute_", "")} exceeds Level 1 cap (+3) after applying traits.`);
    }
  }
}
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    if (!data.finalName || typeof data.finalName !== "string" || data.finalName.trim().length === 0) {
      return json({ error: "Character name is required." }, { status: 400 });
    }
    const attributes = {
      attribute_might: data.attribute_might,
      attribute_agility: data.attribute_agility,
      attribute_charisma: data.attribute_charisma,
      attribute_intelligence: data.attribute_intelligence
    };
    const totalPoints = Object.values(attributes).reduce((sum, v) => sum + (typeof v === "number" ? v : 0), 0);
    if (totalPoints !== 0) {
      return json({ error: "Attribute points must sum to 0 (point buy)." }, { status: 400 });
    }
    if (!data.ancestry1Id) {
      return json({ error: "At least one ancestry must be selected." }, { status: 400 });
    }
    if (data.ancestry2Id && data.ancestry1Id === data.ancestry2Id) {
      return json({ error: "Cannot select the same ancestry twice." }, { status: 400 });
    }
    try {
      const selectedTraitIds = JSON.parse(data.selectedTraitIds || "[]");
      if (!Array.isArray(selectedTraitIds)) throw new Error();
    } catch {
      return json({ error: "Invalid selectedTraitIds format." }, { status: 400 });
    }
    if (!data.classId || !classesData.find((c) => c.id === data.classId)) {
      return json({ error: "A valid class must be selected." }, { status: 400 });
    }
    try {
      validateFeatureChoices(data.classId, data.selectedFeatureChoices);
    } catch (err) {
      return json({ error: err.message }, { status: 400 });
    }
    try {
      validateAttributeCapsAfterTraits(attributes, data.selectedTraitIds);
    } catch (err) {
      return json({ error: err.message }, { status: 400 });
    }
    const result = await prisma.$transaction(async (tx) => {
      let character;
      if (data.id) {
        character = await tx.characterInProgress.update({
          where: { id: data.id },
          data: {
            ...data,
            updatedAt: /* @__PURE__ */ new Date()
          }
        });
      } else {
        character = await tx.characterInProgress.create({
          data: {
            ...data,
            createdAt: /* @__PURE__ */ new Date(),
            updatedAt: /* @__PURE__ */ new Date()
          }
        });
      }
      return character;
    });
    return json({ success: true, id: result.id });
  } catch (err) {
    return json({ error: err.message || "Unknown error" }, { status: 500 });
  }
};
export {
  POST
};
````

## File: .svelte-kit/output/server/entries/endpoints/api/character/progress/stageA/_server.ts.js
````javascript
import { e as error, j as json } from "../../../../../../chunks/index2.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const ATTRIBUTE_MIN = -2;
const ATTRIBUTE_MAX_L1 = 3;
const POINT_BUY_BUDGET = 12;
async function POST({ request }) {
  try {
    const { characterId, finalName, attribute_might, attribute_agility, attribute_charisma, attribute_intelligence } = await request.json();
    if (!finalName || typeof finalName !== "string" || finalName.trim().length === 0) {
      return error(400, { message: "Character name is required." });
    }
    const attributes = {
      might: attribute_might,
      agility: attribute_agility,
      charisma: attribute_charisma,
      intelligence: attribute_intelligence
    };
    for (const [name, value] of Object.entries(attributes)) {
      if (value < ATTRIBUTE_MIN || value > ATTRIBUTE_MAX_L1) {
        return error(400, { message: `Attribute ${name} is out of the allowed range (-2 to +3).` });
      }
    }
    const pointsSpent = attributes.might - ATTRIBUTE_MIN + (attributes.agility - ATTRIBUTE_MIN) + (attributes.charisma - ATTRIBUTE_MIN) + (attributes.intelligence - ATTRIBUTE_MIN);
    if (pointsSpent !== POINT_BUY_BUDGET) {
      return error(400, { message: `Total points allocated must be exactly ${POINT_BUY_BUDGET}. You allocated ${pointsSpent}.` });
    }
    let updatedCharacter;
    if (characterId) {
      updatedCharacter = await prisma.characterInProgress.update({
        where: { id: characterId },
        data: {
          finalName: finalName.trim(),
          // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent,
          // Store points spent for consistency, though backend validates
          level: 1,
          // Hardcoded to 1 for MVP
          combatMastery: 1,
          // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]),
          // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]),
          // Initialize selected feature choices
          currentStep: 1
          // Mark Stage A as complete
        }
      });
    } else {
      updatedCharacter = await prisma.characterInProgress.create({
        data: {
          finalName: finalName.trim(),
          // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent,
          level: 1,
          // Hardcoded to 1 for MVP
          combatMastery: 1,
          // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]),
          // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]),
          // Initialize selected feature choices
          currentStep: 1
          // Mark Stage A as complete
        }
      });
    }
    return json({ success: true, characterId: updatedCharacter.id });
  } catch (e) {
    console.error("Backend error saving Stage A data:", e);
    if (e instanceof Error) {
      return error(500, { message: `Internal server error: ${e.message}` });
    }
    return error(500, { message: "An unknown error occurred while saving attributes." });
  } finally {
    await prisma.$disconnect();
  }
}
export {
  POST
};
````

## File: .svelte-kit/output/server/entries/endpoints/api/character/progress/stageB/_server.ts.js
````javascript
import { j as json } from "../../../../../../chunks/index2.js";
import { PrismaClient } from "@prisma/client";
import { a as ancestriesData } from "../../../../../../chunks/ancestries.js";
import { t as traitsData } from "../../../../../../chunks/traits.js";
const prisma = new PrismaClient();
const POST = async ({ request }) => {
  const data = await request.json();
  if (!data.characterId) {
    return json({ success: false, message: "Character ID is required." }, { status: 400 });
  }
  if (!Array.isArray(data.selectedAncestries) || data.selectedAncestries.length === 0 || data.selectedAncestries.length > 2) {
    return json({ success: false, message: "You must select between 1 and 2 ancestries." }, { status: 400 });
  }
  for (const ancestryId of data.selectedAncestries) {
    const validAncestry = ancestriesData.find((a) => a.id === ancestryId);
    if (!validAncestry) {
      return json({ success: false, message: `Invalid ancestry ID: ${ancestryId}` }, { status: 400 });
    }
  }
  if (!Array.isArray(data.selectedTraits)) {
    return json({ success: false, message: "Selected traits data is invalid." }, { status: 400 });
  }
  if (data.selectedTraits.length > 0) {
    for (const traitId of data.selectedTraits) {
      const validTrait = traitsData.find((t) => t.id === traitId);
      if (!validTrait) {
        return json({ success: false, message: `Invalid trait ID: ${traitId}` }, { status: 400 });
      }
    }
    const selectedTraitObjects = data.selectedTraits.map((id) => traitsData.find((t) => t.id === id)).filter((t) => t !== void 0);
    const totalCost = selectedTraitObjects.reduce((sum, trait) => sum + trait.cost, 0);
    if (totalCost !== 5) {
      return json({ success: false, message: `Total ancestry points must equal 5, got: ${totalCost}` }, { status: 400 });
    }
    const minorTraits = selectedTraitObjects.filter((t) => t.isMinor);
    if (minorTraits.length > 1) {
      return json({ success: false, message: `Maximum of 1 minor trait allowed, got: ${minorTraits.length}` }, { status: 400 });
    }
    const pointsFromNegative = selectedTraitObjects.filter((t) => t.cost < 0).reduce((sum, t) => sum + Math.abs(t.cost), 0);
    if (pointsFromNegative > 2) {
      return json({ success: false, message: `Maximum of +2 points from negative traits allowed, got: ${pointsFromNegative}` }, { status: 400 });
    }
  }
  if (!data.attributes || typeof data.attributes !== "object") {
    return json({ success: false, message: "Attribute data is missing or invalid." }, { status: 400 });
  }
  const attributeNames = ["attribute_might", "attribute_agility", "attribute_charisma", "attribute_intelligence"];
  for (const attrName of attributeNames) {
    const attrValue = data.attributes[attrName];
    if (typeof attrValue !== "number" || attrValue < -2 || attrValue > 3) {
      return json({ success: false, message: `Invalid value for attribute ${attrName}: ${attrValue}. Must be between -2 and +3.` }, { status: 400 });
    }
  }
  const baseAttributeValue = -2;
  const expectedTotalPoints = 12;
  const actualTotalPoints = attributeNames.reduce((sum, attrName) => sum + (data.attributes[attrName] - baseAttributeValue), 0);
  if (actualTotalPoints !== expectedTotalPoints) {
    return json({ success: false, message: `Total attribute points mismatch. Expected ${expectedTotalPoints}, got ${actualTotalPoints}.` }, { status: 400 });
  }
  try {
    const character = await prisma.characterInProgress.findUnique({
      where: { id: data.characterId },
      select: {
        currentStep: true
        // Select other fields if needed for validation against previous stage data
      }
    });
    if (!character) {
      return json({ success: false, message: "Character not found." }, { status: 404 });
    }
    const updatedCharacter = await prisma.characterInProgress.update({
      where: { id: data.characterId },
      data: {
        ancestry1Id: data.selectedAncestries[0] || null,
        // Store first ancestry ID
        ancestry2Id: data.selectedAncestries[1] || null,
        // Store second ancestry ID (if exists)
        selectedTraitIds: JSON.stringify(data.selectedTraits),
        // Store trait IDs as JSON string
        // Update attributes if they were potentially modified in the helper panel
        attribute_might: data.attributes.attribute_might,
        attribute_agility: data.attributes.attribute_agility,
        attribute_charisma: data.attributes.attribute_charisma,
        attribute_intelligence: data.attributes.attribute_intelligence,
        // Corrected attribute name
        currentStep: 2
        // Mark Stage B as complete (using integer 2)
      }
    });
    return json({ success: true, character: updatedCharacter });
  } catch (error) {
    console.error("Error processing Stage B data:", error);
    return json({ success: false, message: "Failed to save Stage B data." }, { status: 500 });
  }
};
export {
  POST
};
````

## File: .svelte-kit/output/server/entries/fallbacks/error.svelte.js
````javascript
import { G as getContext, I as escape_html, D as pop, A as push } from "../../chunks/index.js";
import "clsx";
import { s as stores } from "../../chunks/client.js";
({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}
export {
  Error$1 as default
};
````

## File: .svelte-kit/output/server/entries/pages/_layout.svelte.js
````javascript
import { E as head, F as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>DC20 Character Creator</title>`;
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>`;
  });
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
````

## File: .svelte-kit/output/server/entries/pages/_page.svelte.js
````javascript
import "clsx";
function _page($$payload) {
  $$payload.out += `<h1>Welcome to SvelteKit</h1> <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>`;
}
export {
  _page as default
};
````

## File: .svelte-kit/output/server/entries/pages/character-creator/_page.svelte.js
````javascript
import { J as store_get, K as ensure_array_like, M as attr, N as attr_class, I as escape_html, O as maybe_selected, P as unsubscribe_stores, D as pop, A as push } from "../../../chunks/index.js";
import { c as characterInProgressStore, p as primeModifier, g as gritPoints, j as jumpDistance, a as provisionalSkillPoints, s as saveMasteries, m as maxHP, b as startingSP, d as startingMP, e as combatMastery, f as precisionDefense, h as areaDefense, i as initiative } from "../../../chunks/characterInProgressStore.js";
import { a as attributesData } from "../../../chunks/attributes.js";
import { a as ancestriesData } from "../../../chunks/ancestries.js";
import { c as classesData } from "../../../chunks/classes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let currentAttributes, pointsSpent, pointsRemaining, highestAttributeValue, tiedAttributes, displayedPrimeModifierAttribute, totalAncestryPointsAvailable, ancestryPointsSpent, ancestryPointsRemaining, selectedClass, allStagesValid;
  let characterName = "";
  const POINT_BUY_BUDGET = 12;
  const ATTRIBUTE_MIN = -2;
  const ATTRIBUTE_MAX_L1 = 3;
  let primeModifierAttributeUserChoice = null;
  let selectedAncestry1_ID = null;
  let selectedAncestry2_ID = null;
  let currentSelectedTraits = [];
  const ancestryPointsBudget = 5;
  let selectedClassId = null;
  let selectedFeatureChoices = {};
  currentAttributes = {
    might: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might,
    agility: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility,
    charisma: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma,
    intelligence: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence
  };
  pointsSpent = currentAttributes.might - ATTRIBUTE_MIN + (currentAttributes.agility - ATTRIBUTE_MIN) + (currentAttributes.charisma - ATTRIBUTE_MIN) + (currentAttributes.intelligence - ATTRIBUTE_MIN);
  pointsRemaining = POINT_BUY_BUDGET - pointsSpent;
  highestAttributeValue = Math.max(...Object.values(currentAttributes));
  tiedAttributes = Object.entries(currentAttributes).filter(([name, value]) => value === highestAttributeValue).map(([name, value]) => name);
  {
    if (tiedAttributes.length === 1) {
      primeModifierAttributeUserChoice = tiedAttributes[0];
    } else if (tiedAttributes.length > 1) {
      if (primeModifierAttributeUserChoice === null || !tiedAttributes.includes(primeModifierAttributeUserChoice)) {
        primeModifierAttributeUserChoice = null;
      }
    } else {
      primeModifierAttributeUserChoice = null;
    }
  }
  displayedPrimeModifierAttribute = tiedAttributes.length > 1 && primeModifierAttributeUserChoice !== null ? primeModifierAttributeUserChoice : store_get($$store_subs ??= {}, "$primeModifier", primeModifier).attribute;
  displayedPrimeModifierAttribute ? currentAttributes[displayedPrimeModifierAttribute] : store_get($$store_subs ??= {}, "$primeModifier", primeModifier).value;
  totalAncestryPointsAvailable = ancestryPointsBudget;
  ancestryPointsSpent = currentSelectedTraits.reduce((sum, trait) => sum + trait.cost, 0);
  ancestryPointsRemaining = totalAncestryPointsAvailable - ancestryPointsSpent;
  selectedClass = classesData.find((c) => c.id === selectedClassId);
  selectedClass?.featureChoicesLvl1?.every((choice) => selectedFeatureChoices && selectedFeatureChoices[choice.id] !== void 0) ?? true;
  allStagesValid = pointsRemaining === 0 && ancestryPointsRemaining === 0 && selectedClassId !== null;
  const each_array = ensure_array_like(attributesData);
  const each_array_2 = ensure_array_like(ancestriesData);
  const each_array_3 = ensure_array_like(ancestriesData);
  const each_array_7 = ensure_array_like(classesData);
  $$payload.out += `<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary"><h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Character Creation</h2> <div class="mb-8"><label for="characterName" class="block text-lg font-medium mb-2">Character Name</label> <input type="text" id="characterName"${attr("value", characterName)} class="w-full p-2 border rounded bg-dark-bg-primary text-light-text-primary border-dark-border" placeholder="Enter your character's name"/> <h3 class="text-lg font-medium mt-6 mb-2">Allocate Attribute Points (Point Buy)</h3> <p${attr_class("mb-4 text-light-text-secondary", void 0, { "text-magenta-error": pointsRemaining < 0 })}>Budget: ${escape_html(pointsRemaining)} / 12 Points Remaining</p> <div class="flex flex-col gap-4 mb-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let attribute = each_array[$$index];
    $$payload.out += `<div class="flex items-center gap-4 p-4 bg-dark-bg-primary rounded-md shadow-sm relative"><div class="flex items-center gap-2"><button class="p-2 h-8 w-8 flex items-center justify-center bg-magenta-error/70 hover:bg-magenta-error rounded-md text-lg"${attr("disabled", currentAttributes[attribute.id] <= ATTRIBUTE_MIN, true)}>-</button> <input${attr("id", `attribute-${attribute.id}`)} type="number" readonly${attr("value", currentAttributes[attribute.id])} class="w-12 text-center text-xl font-semibold bg-dark-bg-secondary rounded-md p-1 h-8"/> <button class="p-2 h-8 w-8 flex items-center justify-center bg-purple-primary/70 hover:bg-purple-primary rounded-md text-lg"${attr("disabled", currentAttributes[attribute.id] >= ATTRIBUTE_MAX_L1 || pointsRemaining <= 0, true)}>+</button></div> `;
    if (displayedPrimeModifierAttribute === attribute.name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="w-1 h-10 bg-yellow-accent rounded mr-3"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="flex flex-col min-w-[140px]"><label${attr("for", `attribute-${attribute.id}`)} class="text-xl font-medium text-light-text-primary leading-tight">${escape_html(attribute.name)}</label> <span class="text-xs text-light-text-secondary">${escape_html(attribute.description)}</span></div> `;
    if (attribute.id === "charisma") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">Grit: ${escape_html(store_get($$store_subs ??= {}, "$gritPoints", gritPoints))}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (attribute.id === "agility") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">Jump: ${escape_html(store_get($$store_subs ??= {}, "$jumpDistance", jumpDistance))}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (attribute.id === "intelligence") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">Skill Pts: ${escape_html(store_get($$store_subs ??= {}, "$provisionalSkillPoints", provisionalSkillPoints))}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <span class="ml-auto text-blue-info font-medium whitespace-nowrap">Save: ${escape_html((store_get($$store_subs ??= {}, "$saveMasteries", saveMasteries)[attribute.id] >= 0 ? "+" : "") + store_get($$store_subs ??= {}, "$saveMasteries", saveMasteries)[attribute.id])}</span></div>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (tiedAttributes.length > 1) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(tiedAttributes);
    $$payload.out += `<div class="my-4"><p class="mb-2 text-yellow-accent">Multiple attributes are tied for highest. Please select your Prime Modifier:</p> <div class="flex gap-4"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let attrId = each_array_1[$$index_1];
      $$payload.out += `<label><input type="radio" name="primeModifier"${attr("value", attrId)}${attr("checked", primeModifierAttributeUserChoice === attrId, true)} class="mr-1"/> ${escape_html(attributesData.find((a) => a.id === attrId)?.name || attrId)}</label>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mb-8"><h3 class="text-lg font-medium mb-2">Choose Your Ancestry (Up to 2)</h3> <div class="flex gap-4"><div class="flex-1"><label class="block text-sm font-medium mb-1" for="ancestry1">Ancestry 1</label> <select id="ancestry1" class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">`;
  $$payload.select_value = selectedAncestry1_ID;
  $$payload.out += `<option${attr("value", null)}${maybe_selected($$payload, null)}>Select an ancestry</option><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let ancestry = each_array_2[$$index_2];
    $$payload.out += `<option${attr("value", ancestry.id)}${maybe_selected($$payload, ancestry.id)}>${escape_html(ancestry.name)}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div class="flex-1"><label class="block text-sm font-medium mb-1" for="ancestry2">Ancestry 2</label> <select id="ancestry2" class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">`;
  $$payload.select_value = selectedAncestry2_ID;
  $$payload.out += `<option${attr("value", null)}${maybe_selected($$payload, null)}>None</option><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let ancestry = each_array_3[$$index_3];
    $$payload.out += `<option${attr("value", ancestry.id)}${maybe_selected($$payload, ancestry.id)}>${escape_html(ancestry.name)}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mb-8"><h3 class="text-lg font-medium mb-2">Class Selection</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`;
  for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
    let classObj = each_array_7[$$index_7];
    $$payload.out += `<label${attr_class("flex items-center p-3 border rounded cursor-pointer", void 0, {
      "border-yellow-accent": selectedClassId === classObj.id
    })}><input type="radio" name="class"${attr("value", classObj.id)}${attr("checked", selectedClassId === classObj.id, true)}/> <span class="ml-3 font-semibold">${escape_html(classObj.name)}</span></label>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (selectedClass) {
    $$payload.out += "<!--[-->";
    const each_array_8 = ensure_array_like(selectedClass.level1Features);
    $$payload.out += `<div class="mt-4"><h4 class="font-semibold mb-2">Level 1 Features</h4> <ul><!--[-->`;
    for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
      let feature = each_array_8[$$index_8];
      $$payload.out += `<li class="mb-1">${escape_html(feature.name)}: ${escape_html(feature.description)}</li>`;
    }
    $$payload.out += `<!--]--></ul> `;
    if (selectedClass.featureChoicesLvl1 && selectedClass.featureChoicesLvl1.length > 0) {
      $$payload.out += "<!--[-->";
      const each_array_9 = ensure_array_like(selectedClass.featureChoicesLvl1);
      $$payload.out += `<div class="mt-4"><h4 class="font-semibold mb-2">Feature Choices</h4> <!--[-->`;
      for (let $$index_10 = 0, $$length = each_array_9.length; $$index_10 < $$length; $$index_10++) {
        let choice = each_array_9[$$index_10];
        $$payload.out += `<div class="mb-2"><label class="block mb-1">${escape_html(choice.prompt)}</label> `;
        if (choice.type === "select_one") {
          $$payload.out += "<!--[-->";
          const each_array_10 = ensure_array_like(choice.options);
          $$payload.out += `<div class="flex gap-2"><!--[-->`;
          for (let $$index_9 = 0, $$length2 = each_array_10.length; $$index_9 < $$length2; $$index_9++) {
            let option = each_array_10[$$index_9];
            $$payload.out += `<label><input type="radio"${attr("name", choice.id)}${attr("value", option.value)}${attr("checked", selectedFeatureChoices[choice.id] === option.value, true)}/> ${escape_html(option.label)}</label>`;
          }
          $$payload.out += `<!--]--></div>`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--></div>`;
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mb-8"><h3 class="text-lg font-medium mb-2">Final Provisional Stats</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary"><p>HP = Class(${escape_html(selectedClass ? selectedClass.baseHpContribution : 8)}) + Might(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might)}) + Ancestry(0) = ${escape_html(store_get($$store_subs ??= {}, "$maxHP", maxHP))}</p> <p>SP = ${escape_html(store_get($$store_subs ??= {}, "$startingSP", startingSP))}</p> <p>MP = ${escape_html(store_get($$store_subs ??= {}, "$startingMP", startingMP))}</p> <p>PD = Base(8) + CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) + Intelligence(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence)}) + Bonuses(0) = ${escape_html(store_get($$store_subs ??= {}, "$precisionDefense", precisionDefense))}</p> <p>AD = Base(8) + CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Might(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might)}) + Charisma(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma)}) + Bonuses(0) = ${escape_html(store_get($$store_subs ??= {}, "$areaDefense", areaDefense))}</p> <p>Initiative = CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) = ${escape_html(store_get($$store_subs ??= {}, "$initiative", initiative))}</p> <p>Grit Points = Base(2) + Charisma(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma)}) = ${escape_html(store_get($$store_subs ??= {}, "$gritPoints", gritPoints))}</p> <p>Jump Distance = Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) (min 1) = ${escape_html(store_get($$store_subs ??= {}, "$jumpDistance", jumpDistance))}</p> <p>Base Skill Points = Base(5) + Intelligence(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence)}) = ${escape_html(store_get($$store_subs ??= {}, "$provisionalSkillPoints", provisionalSkillPoints))}</p></div></div> <div class="mt-8 text-right"><button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded"${attr("disabled", !allStagesValid, true)}>Save Character</button></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
````

## File: .svelte-kit/output/server/entries/pages/character-creator/stage-a/_page.svelte.js
````javascript
import { J as store_get, K as ensure_array_like, M as attr, N as attr_class, I as escape_html, P as unsubscribe_stores, D as pop, A as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { c as characterInProgressStore, p as primeModifier, g as gritPoints, j as jumpDistance, a as provisionalSkillPoints, s as saveMasteries, e as combatMastery, m as maxHP, f as precisionDefense, h as areaDefense, i as initiative } from "../../../../chunks/characterInProgressStore.js";
import { a as attributesData } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let currentAttributes, pointsSpent, pointsRemaining, highestAttributeValue, tiedAttributes, displayedPrimeModifierAttribute, displayedPrimeModifierValue;
  let characterName = "";
  const POINT_BUY_BUDGET = 12;
  const ATTRIBUTE_MIN = -2;
  const ATTRIBUTE_MAX_L1 = 3;
  let primeModifierAttributeUserChoice = null;
  currentAttributes = {
    might: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might,
    agility: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility,
    charisma: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma,
    intelligence: store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence
  };
  pointsSpent = currentAttributes.might - ATTRIBUTE_MIN + (currentAttributes.agility - ATTRIBUTE_MIN) + (currentAttributes.charisma - ATTRIBUTE_MIN) + (currentAttributes.intelligence - ATTRIBUTE_MIN);
  pointsRemaining = POINT_BUY_BUDGET - pointsSpent;
  highestAttributeValue = Math.max(...Object.values(currentAttributes));
  tiedAttributes = Object.entries(currentAttributes).filter(([name, value]) => value === highestAttributeValue).map(([name, value]) => name);
  {
    if (tiedAttributes.length === 1) {
      primeModifierAttributeUserChoice = tiedAttributes[0];
    } else if (tiedAttributes.length > 1) {
      if (primeModifierAttributeUserChoice === null || !tiedAttributes.includes(primeModifierAttributeUserChoice)) {
        primeModifierAttributeUserChoice = null;
      }
    } else {
      primeModifierAttributeUserChoice = null;
    }
  }
  displayedPrimeModifierAttribute = tiedAttributes.length > 1 && primeModifierAttributeUserChoice !== null ? primeModifierAttributeUserChoice : store_get($$store_subs ??= {}, "$primeModifier", primeModifier).attribute;
  displayedPrimeModifierValue = displayedPrimeModifierAttribute ? currentAttributes[displayedPrimeModifierAttribute] : store_get(
    $$store_subs ??= {},
    // Use currentAttributes for value
    "$primeModifier",
    primeModifier
  ).value;
  const each_array = ensure_array_like(attributesData);
  $$payload.out += `<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary"><h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Step 1: Core Attributes &amp; Foundational Stats</h2> <div class="mb-6"><label for="characterName" class="block text-lg font-medium mb-2">Character Name</label> <input type="text" id="characterName"${attr("value", characterName)} class="w-full p-2 border rounded bg-dark-bg-primary text-light-text-primary border-dark-border" placeholder="Enter your character's name"/></div> <div class="mb-6"><h3 class="text-lg font-medium mb-2">Allocate Attribute Points (Point Buy)</h3> <p${attr_class("mb-4 text-light-text-secondary", void 0, { "text-magenta-error": pointsRemaining < 0 })}>Budget: ${escape_html(pointsRemaining)} / 12 Points Remaining</p> <div class="flex flex-col gap-4 mb-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let attribute = each_array[$$index];
    $$payload.out += `<div class="flex items-center gap-4 p-4 bg-dark-bg-primary rounded-md shadow-sm relative"><div class="flex items-center gap-2"><button class="p-2 h-8 w-8 flex items-center justify-center bg-magenta-error/70 hover:bg-magenta-error rounded-md text-lg"${attr("disabled", currentAttributes[attribute.id] <= ATTRIBUTE_MIN, true)}>-</button> <input${attr("id", `attribute-${attribute.id}`)} type="number" readonly${attr("value", currentAttributes[attribute.id])} class="w-12 text-center text-xl font-semibold bg-dark-bg-secondary rounded-md p-1 h-8"/> <button class="p-2 h-8 w-8 flex items-center justify-center bg-purple-primary/70 hover:bg-purple-primary rounded-md text-lg"${attr("disabled", currentAttributes[attribute.id] >= ATTRIBUTE_MAX_L1 || pointsRemaining <= 0, true)}>+</button></div> `;
    if (displayedPrimeModifierAttribute === attribute.name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="w-1 h-10 bg-yellow-accent rounded mr-3"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="flex flex-col min-w-[140px]"><label${attr("for", `attribute-${attribute.id}`)} class="text-xl font-medium text-light-text-primary leading-tight">${escape_html(attribute.name)}</label> <span class="text-xs text-light-text-secondary">${escape_html(attribute.description)}</span></div> `;
    if (attribute.id === "charisma") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">Grit: ${escape_html(store_get($$store_subs ??= {}, "$gritPoints", gritPoints))}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (attribute.id === "agility") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">Jump: ${escape_html(store_get($$store_subs ??= {}, "$jumpDistance", jumpDistance))}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (attribute.id === "intelligence") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">Skill Pts: ${escape_html(store_get($$store_subs ??= {}, "$provisionalSkillPoints", provisionalSkillPoints))}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <span class="ml-auto text-blue-info font-medium whitespace-nowrap">Save: ${escape_html((store_get($$store_subs ??= {}, "$saveMasteries", saveMasteries)[attribute.id] >= 0 ? "+" : "") + store_get($$store_subs ??= {}, "$saveMasteries", saveMasteries)[attribute.id])}</span></div>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (tiedAttributes.length > 1) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(tiedAttributes);
    $$payload.out += `<div class="my-4"><p class="mb-2 text-yellow-accent">Multiple attributes are tied for highest. Please select your Prime Modifier:</p> <div class="flex gap-4"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let attrId = each_array_1[$$index_1];
      $$payload.out += `<label><input type="radio" name="primeModifier"${attr("value", attrId)}${attr("checked", primeModifierAttributeUserChoice === attrId, true)} class="mr-1"/> ${escape_html(attributesData.find((a) => a.id === attrId)?.name || attrId)}</label>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-purple-primary/20 rounded-lg text-center"><span class="text-lg text-light-text-primary">Level:</span> <span class="text-2xl font-bold text-yellow-accent">${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).level)}</span></div> <div class="p-4 bg-purple-primary/20 rounded-lg text-center"><span class="text-lg text-light-text-primary">Combat Mastery (CM):</span> <span class="text-2xl font-bold text-yellow-accent">${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}</span></div> <div class="p-4 bg-purple-primary/20 rounded-lg text-center"><span class="text-lg text-light-text-primary">Prime Modifier:</span> <span class="text-2xl font-bold text-yellow-accent">${escape_html(displayedPrimeModifierAttribute ? attributesData.find((a) => a.id === displayedPrimeModifierAttribute.toLowerCase())?.name || displayedPrimeModifierAttribute : "N/A")} (${escape_html(displayedPrimeModifierValue)})</span></div> <div class="p-4 bg-dark-bg-primary rounded-lg text-center"><span class="text-md text-light-text-primary">Base Skill Points (5 + Int Mod):</span> <span class="text-xl font-semibold text-blue-info">${escape_html(store_get($$store_subs ??= {}, "$provisionalSkillPoints", provisionalSkillPoints))}</span></div></div> <div class="mt-6"><h3 class="text-lg font-medium mb-3">Provisional Base Stats (Finalized after Class &amp; Equipment)</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary"><p>HP = Base(8) + Might(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might)}) + Ancestry(0) = ${escape_html(store_get($$store_subs ??= {}, "$maxHP", maxHP))}</p> <p>SP = Class SP</p> <p>MP = Class MP</p> <p>PD = Base(8) + CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) + Intelligence(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence)}) + Bonuses(0) = ${escape_html(store_get($$store_subs ??= {}, "$precisionDefense", precisionDefense))}</p> <p>AD = Base(8) + CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Might(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might)}) + Charisma(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma)}) + Bonuses(0) = ${escape_html(store_get($$store_subs ??= {}, "$areaDefense", areaDefense))}</p> <p>Initiative = CM(${escape_html(store_get($$store_subs ??= {}, "$combatMastery", combatMastery))}) + Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) = ${escape_html(store_get($$store_subs ??= {}, "$initiative", initiative))}</p> <p>Grit Points = Base(2) + Charisma(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma)}) = ${escape_html(store_get($$store_subs ??= {}, "$gritPoints", gritPoints))}</p> <p>Jump Distance = Agility(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}) (min 1) = ${escape_html(store_get($$store_subs ??= {}, "$jumpDistance", jumpDistance))}</p> <p>Base Skill Points = Base(5) + Intelligence(${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence)}) = ${escape_html(store_get($$store_subs ??= {}, "$provisionalSkillPoints", provisionalSkillPoints))}</p></div></div> <div class="mt-8 text-right"><button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded"${attr("disabled", pointsRemaining !== 0, true)}>Next Step</button></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
````

## File: .svelte-kit/output/server/entries/pages/character-creator/stage-b/_page.svelte.js
````javascript
import { M as attr, O as maybe_selected, K as ensure_array_like, I as escape_html, J as store_get, P as unsubscribe_stores, D as pop, A as push } from "../../../../chunks/index.js";
import { c as characterInProgressStore, p as primeModifier } from "../../../../chunks/characterInProgressStore.js";
import { a as ancestriesData } from "../../../../chunks/ancestries.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let totalAncestryPointsAvailable, ancestryPointsSpent, ancestryPointsRemaining;
  const ancestries = ancestriesData;
  let selectedAncestry1_ID = null;
  let selectedAncestry2_ID = null;
  let currentSelectedTraits = [];
  const ancestryPointsBudget = 5;
  totalAncestryPointsAvailable = ancestryPointsBudget;
  ancestryPointsSpent = currentSelectedTraits.reduce((sum, trait) => sum + trait.cost, 0);
  ancestryPointsRemaining = totalAncestryPointsAvailable - ancestryPointsSpent;
  $$payload.out += `<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary"><h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Step 2: Ancestry Choices</h2> <div class="mb-6"><h3 class="text-lg font-medium mb-2">Choose Your Ancestry (Up to 2)</h3>  <div class="flex gap-4"><div class="flex-1"><label class="block text-sm font-medium mb-1" for="ancestry1">Ancestry 1</label> <select id="ancestry1" class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">`;
  $$payload.select_value = selectedAncestry1_ID;
  $$payload.out += `<option${attr("value", null)}${maybe_selected($$payload, null)}>Select an ancestry</option>`;
  if (ancestries) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(ancestries);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let ancestry = each_array[$$index];
      $$payload.out += `<option${attr("value", ancestry.id)}${maybe_selected($$payload, ancestry.id)}>${escape_html(ancestry.name)}</option>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div class="flex-1"><label class="block text-sm font-medium mb-1" for="ancestry2">Ancestry 2</label> <select id="ancestry2" class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">`;
  $$payload.select_value = selectedAncestry2_ID;
  $$payload.out += `<option${attr("value", null)}${maybe_selected($$payload, null)}>None</option>`;
  if (ancestries) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(ancestries);
    $$payload.out += `<!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let ancestry = each_array_1[$$index_1];
      $$payload.out += `<option${attr("value", ancestry.id)}${maybe_selected($$payload, ancestry.id)}>${escape_html(ancestry.name)}</option>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div></div> <style lang="postcss">
    /* Apply dark background to select elements and options */
    select.bg-dark-bg-secondary {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */ --tw-text-opacity: 1; color: rgb(216 180 254 / var(--tw-text-opacity, 1)); /* Apply text color using @apply */
    }

    /* Attempt to style dropdown options - browser support varies */
    select.bg-dark-bg-secondary option {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */ --tw-text-opacity: 1; color: rgb(229 231 235 / var(--tw-text-opacity, 1)); /* Use light text for options */
    }
</style></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mb-6 p-4 bg-dark-bg-primary rounded-md shadow-sm"><h3 class="text-lg font-medium mb-2">Current Core Stats (Reflecting Ancestry Choices)</h3> <div class="grid grid-cols-2 gap-4"><p>Might: <span class="font-bold">${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_might)}</span></p> <p>Agility: <span class="font-bold">${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_agility)}</span></p> <p>Charisma: <span class="font-bold">${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_charisma)}</span></p> <p>Intellect: <span class="font-bold">${escape_html(store_get($$store_subs ??= {}, "$characterInProgressStore", characterInProgressStore).attribute_intelligence)}</span></p> <p class="col-span-2">Prime Modifier: <span class="font-bold text-yellow-accent">${escape_html(store_get($$store_subs ??= {}, "$primeModifier", primeModifier).attribute)} (${escape_html(store_get($$store_subs ??= {}, "$primeModifier", primeModifier).value >= 0 ? "+" : "")}${escape_html(store_get($$store_subs ??= {}, "$primeModifier", primeModifier).value)})</span></p></div></div>  `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mt-8 text-right"><button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"${attr("disabled", ancestryPointsRemaining !== 0 || currentSelectedTraits.length === 0, true)}>Next Step</button></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
````

## File: .svelte-kit/output/server/entries/pages/test-ui/_page.svelte.js
````javascript
import { R as spread_attributes, I as escape_html, J as store_get, P as unsubscribe_stores, D as pop, A as push } from "../../../chunks/index.js";
import "dequal";
import { d as derived, g as get, w as writable, r as readable } from "../../../chunks/index3.js";
import "clsx";
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
function disabledAttr(disabled) {
  return disabled ? true : void 0;
}
({
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function noop() {
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name2, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction(removeUndefined({
              ...result(...args2),
              [`data-melt-${name2}`]: "",
              action: action ?? noop
            }));
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction(removeUndefined({
          ...result,
          [`data-melt-${name2}`]: "",
          action: action ?? noop
        }));
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction(removeUndefined({
            ...result(...args2),
            [`data-melt-${name2}`]: "",
            action: action ?? noop
          }));
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction(removeUndefined({
        ...result,
        [`data-melt-${name2}`]: "",
        action: action ?? noop
      })));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name2 = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector(part));
  return {
    name: name2,
    attribute,
    selector,
    getEl
  };
}
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function addMeltEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  if (typeof handler === "function") {
    const handlerWithMelt = withMelt((_event) => handler(_event));
    events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
    return () => {
      events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
    };
  }
  return () => noop();
}
function dispatchMeltEvent(originalEvent) {
  const node = originalEvent.currentTarget;
  if (!isHTMLElement(node))
    return null;
  const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
    detail: {
      originalEvent
    },
    cancelable: true
  });
  node.dispatchEvent(customMeltEvent);
  return customMeltEvent;
}
function withMelt(handler) {
  return (event) => {
    const customEvent = dispatchMeltEvent(event);
    if (customEvent?.defaultPrevented)
      return;
    return handler(event);
  };
}
function withGet(store) {
  return {
    ...store,
    get: () => get(store)
  };
}
withGet.writable = function(initial) {
  const internal = writable(initial);
  let value = initial;
  return {
    subscribe: internal.subscribe,
    set(newValue) {
      internal.set(newValue);
      value = newValue;
    },
    update(updater) {
      const newValue = updater(value);
      internal.set(newValue);
      value = newValue;
    },
    get() {
      return value;
    }
  };
};
withGet.derived = function(stores, fn) {
  const subscribers = /* @__PURE__ */ new Map();
  const get2 = () => {
    const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
    return fn(values);
  };
  const subscribe = (subscriber) => {
    const unsubscribers = [];
    const storesArr = Array.isArray(stores) ? stores : [stores];
    storesArr.forEach((store) => {
      unsubscribers.push(store.subscribe(() => {
        subscriber(get2());
      }));
    });
    subscriber(get2());
    subscribers.set(subscriber, unsubscribers);
    return () => {
      const unsubscribers2 = subscribers.get(subscriber);
      if (unsubscribers2) {
        for (const unsubscribe of unsubscribers2) {
          unsubscribe();
        }
      }
      subscribers.delete(subscriber);
    };
  };
  return {
    get: get2,
    subscribe
  };
};
const overridable = (_store, onChange) => {
  const store = withGet(_store);
  const update = (updater, sideEffect) => {
    store.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set = (curr) => {
    update(() => curr);
  };
  return {
    ...store,
    update,
    set
  };
};
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
({
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0),
  type: readable(void 0)
});
const defaults$1 = {
  defaultOpen: false,
  disabled: false,
  forceVisible: false
};
const { name } = createElHelpers("collapsible");
function createCollapsible(props) {
  const withDefaults = { ...defaults$1, ...props };
  const options = toWritableStores(omit(withDefaults, "open", "defaultOpen", "onOpenChange"));
  const { disabled, forceVisible } = options;
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const root = makeElement(name(), {
    stores: [open, disabled],
    returned: ([$open, $disabled]) => ({
      "data-state": $open ? "open" : "closed",
      "data-disabled": disabledAttr($disabled)
    })
  });
  const trigger = makeElement(name("trigger"), {
    stores: [open, disabled],
    returned: ([$open, $disabled]) => ({
      "data-state": $open ? "open" : "closed",
      "data-disabled": disabledAttr($disabled),
      disabled: disabledAttr($disabled)
    }),
    action: (node) => {
      const unsub = addMeltEventListener(node, "click", () => {
        const disabled2 = node.dataset.disabled !== void 0;
        if (disabled2)
          return;
        open.update(($open) => !$open);
      });
      return {
        destroy: unsub
      };
    }
  });
  const isVisible = derived([open, forceVisible], ([$open, $forceVisible]) => $open || $forceVisible);
  const content = makeElement(name("content"), {
    stores: [isVisible, open, disabled],
    returned: ([$isVisible, $open, $disabled]) => ({
      "data-state": $open ? "open" : "closed",
      "data-disabled": disabledAttr($disabled),
      hidden: $isVisible ? void 0 : true,
      style: $isVisible ? void 0 : styleToString({ display: "none" })
    })
  });
  return {
    elements: {
      root,
      trigger,
      content
    },
    states: {
      open
    },
    options
  };
}
const defaults = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  ...omit(defaults, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const {
    elements: { root, content, trigger },
    states: { open }
  } = createCollapsible();
  $$payload.out += `<h1 class="text-2xl p-4 text-yellow-accent">UI Test Page</h1> <div class="bg-purple-primary w-24 h-24 m-4"></div> <button class="p-2 px-4 m-4 bg-orange-secondary text-light-text-primary rounded-lg font-semibold hover:bg-opacity-80">Test Styled Button</button> <div${spread_attributes(
    {
      ...store_get($$store_subs ??= {}, "$root", root),
      class: "mt-4 p-2 border border-purple-primary rounded"
    }
  )}><button${spread_attributes(
    {
      ...store_get($$store_subs ??= {}, "$trigger", trigger),
      class: "p-2 bg-purple-primary text-light-text-primary rounded w-full text-left"
    }
  )}>Collapsible Trigger (Click to ${escape_html(store_get($$store_subs ??= {}, "$open", open) ? "Close" : "Open")})</button> `;
  if (store_get($$store_subs ??= {}, "$open", open)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes(
      {
        ...store_get($$store_subs ??= {}, "$content", content),
        class: "p-2 mt-2 bg-dark-bg-secondary text-light-text-primary rounded"
      }
    )}>Collapsible Content - Now Visible!</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
````

## File: .svelte-kit/output/server/internal.js
````javascript
import { g, e, l, m, n, q, f, i, k, j } from "./chunks/internal.js";
export {
  g as get_hooks,
  e as options,
  l as set_assets,
  m as set_building,
  n as set_manifest,
  q as set_prerendering,
  f as set_private_env,
  i as set_public_env,
  k as set_read_implementation,
  j as set_safe_public_env
};
````

## File: .svelte-kit/output/server/manifest-full.js
````javascript
export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: null,
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/character/progress/complete",
				pattern: /^\/api\/character\/progress\/complete\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/character/progress/complete/_server.ts.js'))
			},
			{
				id: "/api/character/progress/stageA",
				pattern: /^\/api\/character\/progress\/stageA\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/character/progress/stageA/_server.ts.js'))
			},
			{
				id: "/api/character/progress/stageB",
				pattern: /^\/api\/character\/progress\/stageB\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/character/progress/stageB/_server.ts.js'))
			},
			{
				id: "/character-creator",
				pattern: /^\/character-creator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/character-creator/stage-a",
				pattern: /^\/character-creator\/stage-a\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/character-creator/stage-b",
				pattern: /^\/character-creator\/stage-b\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/test-ui",
				pattern: /^\/test-ui\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
````

## File: .svelte-kit/output/server/nodes/0.js
````javascript
export const index = 0;
export const imports = [];
export const stylesheets = [];
export const fonts = [];
````

## File: .svelte-kit/output/server/nodes/1.js
````javascript
export const index = 1;
export const imports = [];
export const stylesheets = [];
export const fonts = [];
````

## File: .svelte-kit/output/server/nodes/2.js
````javascript
export const index = 2;
export const imports = [];
export const stylesheets = [];
export const fonts = [];
````

## File: .svelte-kit/output/server/nodes/3.js
````javascript
export const index = 3;
export const imports = [];
export const stylesheets = [];
export const fonts = [];
````

## File: .svelte-kit/output/server/nodes/4.js
````javascript
export const index = 4;
export const imports = [];
export const stylesheets = [];
export const fonts = [];
````

## File: .svelte-kit/output/server/nodes/5.js
````javascript
export const index = 5;
export const imports = [];
export const stylesheets = [];
export const fonts = [];
````

## File: .svelte-kit/output/server/nodes/6.js
````javascript
export const index = 6;
export const imports = [];
export const stylesheets = [];
export const fonts = [];
````

## File: .svelte-kit/tsconfig.json
````json
{
	"compilerOptions": {
		"paths": {
			"$lib": [
				"../src/lib"
			],
			"$lib/*": [
				"../src/lib/*"
			]
		},
		"rootDirs": [
			"..",
			"./types"
		],
		"verbatimModuleSyntax": true,
		"isolatedModules": true,
		"lib": [
			"esnext",
			"DOM",
			"DOM.Iterable"
		],
		"moduleResolution": "bundler",
		"module": "esnext",
		"noEmit": true,
		"target": "esnext"
	},
	"include": [
		"ambient.d.ts",
		"non-ambient.d.ts",
		"./types/**/$types.d.ts",
		"../vite.config.js",
		"../vite.config.ts",
		"../src/**/*.js",
		"../src/**/*.ts",
		"../src/**/*.svelte",
		"../tests/**/*.js",
		"../tests/**/*.ts",
		"../tests/**/*.svelte"
	],
	"exclude": [
		"../node_modules/**",
		"../src/service-worker.js",
		"../src/service-worker/**/*.js",
		"../src/service-worker.ts",
		"../src/service-worker/**/*.ts",
		"../src/service-worker.d.ts",
		"../src/service-worker/**/*.d.ts"
	]
}
````

## File: docs/sveltekitOnVercel.md
````markdown
# SvelteKit on Vercel

SvelteKit is a frontend framework that enables you to build Svelte applications with modern techniques, such as Server-Side Rendering, automatic code splitting, and advanced routing.

You can deploy your SvelteKit projects to Vercel with zero configuration, enabling you to use [Preview Deployments](/docs/deployments/environments#preview-environment-pre-production), [Web Analytics](#web-analytics), [Serverless Functions](/docs/functions/serverless-functions), and more.

## [Get started with SvelteKit on Vercel](#get-started-with-sveltekit-on-vercel)

To get started with SvelteKit on Vercel:

*   If you already have a project with SvelteKit, install [Vercel CLI](/docs/cli) and run the `vercel` command from your project's root directory
*   Clone one of our SvelteKit example repos to your favorite git provider and deploy it on Vercel with the button below:

[![](https://assets.vercel.com/image/upload/v1689795055/docs-assets/static/topics/icons/svelte.svg)Deploy our SvelteKit template, or view a live example.](/templates/svelte/sveltekit-boilerplate)

[Deploy](/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fsveltekit-1&template=sveltekit-1)[Live Example](https://sveltekit-template.vercel.app/)

*   Or, choose a template from Vercel's marketplace:

Vercel deployments can [integrate with your git provider](/docs/git) to [generate preview URLs](/docs/deployments/environments#preview-environment-pre-production) for each pull request you make to your SvelteKit project.

## [Use Vercel features with Svelte](#use-vercel-features-with-svelte)

When you create a new SvelteKit project with `npm create svelte@latest`, it installs `adapter-auto` by default. This adapter detects that you're deploying on Vercel and installs the `@sveltejs/adapter-vercel` plugin for you at build time.

We recommend installing the `@sveltejs/adapter-vercel` package yourself. Doing so will ensure version stability, slightly speed up your CI process, and [allows you to configure default deployment options for all routes in your project](#configure-your-sveltekit-deployment).

The following instructions will guide you through adding the Vercel adapter to your SvelteKit project.

1.  ### [Install SvelteKit's Vercel adapter plugin](#install-sveltekit's-vercel-adapter-plugin)
    
    You can add [the Vercel adapter](https://kit.svelte.dev/docs/adapter-vercel) to your SvelteKit project by running the following command:
    
    pnpmyarnnpmbun
    
    ```
    pnpm i @sveltejs/adapter-vercel
    ```
    
2.  ### [Add the Vercel adapter to your Svelte config](#add-the-vercel-adapter-to-your-svelte-config)
    
    Add the Vercel adapter to your `svelte.config.js` file, [which should be at the root of your project directory](https://kit.svelte.dev/docs/configuration).
    
    You cannot use [TypeScript for your SvelteKit config file](https://github.com/sveltejs/kit/issues/2576).
    
    In your `svelte.config.js` file, import `adapter` from `@sveltejs/adapter-vercel`, and add your preferred options. The following example shows the default configuration, which uses the Node.js runtime (which run on Vercel Serverless Functions).
    
    ```
    import adapter from '@sveltejs/adapter-vercel';
     
    export default {
      kit: {
        adapter: adapter(),
      },
    };
    ```
    
    [Learn more about configuring your Vercel deployment in our configuration section below](#configure-your-sveltekit-deployment).
    

## [Configure your SvelteKit deployment](#configure-your-sveltekit-deployment)

You can configure how your SvelteKit project gets deployed to Vercel at the project-level and at the route-level.

Changes to the `config` object you define in `svelte.config.js` will affect the default settings for routes across your whole project. To override this, you can export a `config` object in any route file.

The following is an example of a `svelte.config.js` file that will deploy using server-side rendering in Vercel's Node.js 18.x serverless runtime:

```
import adapter from '@sveltejs/adapter-vercel';
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x',
    }),
  },
};
 
export default config;
```

You can also configure how individual routes deploy by exporting a `config` object. The following is an example of a route that will deploy on Vercel's Edge runtime:

```
import { PageServerLoad } from './$types';
 
export const config = {
  runtime: 'edge',
};
 
export const load = ({ cookies }): PageServerLoad<any> => {
  // Load function code here
};
```

[Learn about all the config options available in the SvelteKit docs](https://kit.svelte.dev/docs/adapter-vercel#deployment-configuration). You can also see the type definitions for config object properties in [the SvelteKit source code](https://github.com/sveltejs/kit/blob/master/packages/adapter-vercel/index.d.ts#L38).

### [Configuration options](#configuration-options)

SvelteKit's docs have [a comprehensive list of all config options available to you](https://kit.svelte.dev/docs/adapter-vercel#deployment-configuration). This section will cover a select few options which may be easier to use with more context.

#### [`split`](#split)

By default, your SvelteKit routes get bundled into one Function when you deploy your project to Vercel. This configuration typically reduces how often your users encounter [cold starts](/docs/infrastructure/compute#cold-and-hot-boots).

In most cases, there is no need to modify this option.

Setting `split: true` in your Svelte config will cause your SvelteKit project's routes to get split into separate Vercel Functions.

Splitting your Functions is not typically better than bundling them. You may want to consider setting `split: true` if you're experiencing either of the following issues:

*   You have exceeded the Function size limit for the runtime you're using. Batching too many routes into a single Function could cause you to exceed Function size limits for your Vercel account. See our [Function size limits](/docs/limits#serverless-function-size) to learn more.
*   Your app is experiencing abnormally long cold start times. Batching Serverless Functions into one Function will reduce how often users experience cold starts. It can also increase the latency they experience when a cold start is required, since larger functions tend to require more resources. This can result in slower responses to user requests that occur after your Function spins down.

#### [`regions`](#regions)

Choosing a region allows you to reduce latency for requests to functions. If you choose a Function region geographically near dependencies, or nearest to your visitor, you can reduce your Functions' latency.

By default, your Vercel Functions will be deployed in _Washington, D.C., USA_, or `iad1`. Adding a region ID to the `regions` array will deploy your Serverless Functions there. [See our Serverless Function regions docs to learn how to override this settings](/docs/functions/serverless-functions/regions#select-a-default-serverless-region).

## [Streaming](#streaming)

Vercel supports streaming API responses over time with SvelteKit, allowing you to render parts of the UI early, then render the rest as data becomes available. Doing so lets users interact with your app before the full page loads, improving their perception of your app's speed. Here's how it works:

*   SvelteKit enables you to use a `+page.server.ts` file to fetch data on the server, which you can access from a `+page.svelte` file located in the same folder
*   You fetch data in a [`load`](https://kit.svelte.dev/docs/load) function defined in `+page.server.ts`. This function returns an object
    *   Top-level properties that return a promise will resolve before the page renders
    *   Nested properties that return a promise [will stream](https://kit.svelte.dev/docs/load#streaming-with-promises)

The following example demonstrates a `load` function that will stream its response to the client. To simulate delayed data returned from a promise, it uses a `sleep` method.

```
function sleep(value: any, ms: number) {
  // Use this sleep function to simulate
  // a delayed API response.
  return new Promise((fulfill) => {
    setTimeout(() => {
      fulfill(value);
    }, ms);
  });
}
export function load(event): PageServerLoad<any> {
  // Get some location data about the visitor
  const ip = event.getClientAddress();
  const city = decodeURIComponent(
    event.request.headers.get('x-vercel-ip-city') ?? 'unknown',
  );
  return {
    topLevelExample: sleep({ data: "This won't be streamed" }, 2000)
    // Stream the location data to the client
    locationData: {
      details: sleep({ ip, city }, 1000),
    },
  };
}
```

You could then display this data by creating the following `+page.svelte` file in the same directory:

```
<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData;
</script>
 
<h1><span>Hello!</span></h1>
 
<div class="info">
  {#await data.locationData.details}
    <p>streaming delayed data from the server...</p>
  {:then details}
    <div>
      <p>City is {details.city}</p>
      <p>And IP is: {details.ip} </p>
    </div>
  {/await}
</div>
```

To summarize, Streaming with SvelteKit on Vercel:

*   Enables you to stream UI elements as data loads
*   Supports streaming through Vercel Functions
*   Improves perceived speed of your app

[Learn more about Streaming on Vercel](/docs/functions/streaming-functions).

## [Server-Side Rendering](#server-side-rendering)

Server-Side Rendering (SSR) allows you to render pages dynamically on the server. This is useful for pages where the rendered data needs to be unique on every request. For example, verifying authentication or checking the geolocation of an incoming request.

Vercel offers SSR that scales down resource consumption when traffic is low, and scales up with traffic surges. This protects your site from accruing costs during periods of no traffic or losing business during high-traffic periods.

SvelteKit projects are server-side rendered by default. You can configure individual routes to prerender with the `prerender` page option, or use the same option in your app's root `+layout.js` or `+layout.server.js` file to make all your routes prerendered by default.

While server-side rendered SvelteKit apps do support middleware, SvelteKit does not support URL rewrites from middleware.

[See the SvelteKit docs on prerendering to learn more](https://kit.svelte.dev/docs/page-options#prerender).

To summarize, SSR with SvelteKit on Vercel:

*   Scales to zero when not in use
*   Scales automatically with traffic increases
*   Has zero-configuration support for [`Cache-Control` headers](/docs/edge-network/caching), including `stale-while-revalidate`

[Learn more about SSR](https://kit.svelte.dev/docs/page-options#ssr)

## [Environment variables](#environment-variables)

Vercel provides a set of System Environment Variables that our platform automatically populates. For example, the `VERCEL_GIT_PROVIDER` variable exposes the Git provider that triggered your project's deployment on Vercel.

These environment variables will be available to your project automatically, and you can enable or disable them in your project settings on Vercel. [See our Environment Variables docs to learn how](/docs/environment-variables/system-environment-variables).

### [Use Vercel environment variables with SvelteKit](#use-vercel-environment-variables-with-sveltekit)

SvelteKit allows you to import environment variables, but separates them into different modules based on whether they're dynamic or static, and whether they're private or public. For example, the `'$env/static/private'` module exposes environment variables that don't change, and that you should not share publicly.

[System Environment Variables](/docs/environment-variables/system-environment-variables) are private and you should never expose them to the frontend client. This means you can only import them from `'$env/static/private'` or `'$env/dynamic/private'`.

The example below exposes `VERCEL_COMMIT_REF`, a variable that exposes the name of the branch associated with your project's deployment, to [a `load` function](https://kit.svelte.dev/docs/load) for a Svelte layout:

```
import { LayoutServerLoad } from './types';
import { VERCEL_COMMIT_REF } from '$env/static/private';
 
type DeploymentInfo = {
  deploymentGitBranch: string;
};
 
export function load(): LayoutServerLoad<DeploymentInfo> {
  return {
    deploymentGitBranch: 'Test',
  };
}
```

You could reference that variable in [a corresponding layout](https://kit.svelte.dev/docs/load#layout-data) as shown below:

```
<script>
  /** @type {import('./$types').LayoutData} */
  export let data;
</script>
 
<p>This staging environment was deployed from {data.deploymentGitBranch}.</p>
```

To summarize, the benefits of using Environment Variables with SvelteKit on Vercel include:

*   Access to vercel deployment information, dynamically or statically, with our preconfigured System Environment Variables
*   Access to automatically-configured environment variables provided by [integrations for your preferred services](/docs/environment-variables#integration-environment-variables)
*   Searching and filtering environment variables by name and environment in Vercel's dashboard

[Learn more about Environment Variables](/docs/environment-variables)

## [Incremental Static Regeneration (ISR)](#incremental-static-regeneration-isr)

Incremental Static Regeneration allows you to create or update content without redeploying your site. When you deploy a route with ISR, Vercel caches the page to serve it to visitors statically, and rebuilds it on a time interval of your choice. ISR has three main benefits for developers: better performance, improved security, and faster build times.

[See our ISR docs to learn more](/docs/incremental-static-regeneration).

To deploy a SvelteKit route with ISR:

*   Export a `config` object with an `isr` property. Its value will be the number of seconds to wait before revalidating
*   To enable on-demand revalidation, add the `bypassToken` property to the `config` object. Its value gets checked when `GET` or `HEAD` requests get sent to the route. If the request has a `x-prerender-revalidate` header with the same value as `bypassToken`, the cache will be revalidated immediately

The following example demonstrates a SvelteKit route that Vercel will deploy with ISR, revalidating the page every 60 seconds, with on-demand revalidation enabled:

```
export const config = {
  isr: {
    expiration: 60,
    bypassToken: 'REPLACE_ME_WITH_SECRET_VALUE',
  },
};
```

[Learn more about ISR with SvelteKit](https://kit.svelte.dev/docs/adapter-vercel#incremental-static-regeneration).

To summarize, the benefits of using ISR with SvelteKit on Vercel include:

*   Better performance with our global [Edge Network](/docs/edge-network)
*   Zero-downtime rollouts to previously statically generated pages
*   Framework-aware infrastructure enables global content updates in 300ms
*   Generated pages are both cached and persisted to durable storage

[Learn more about ISR](/docs/incremental-static-regeneration)

## [Skew Protection](#skew-protection)

New project deployments can lead to version skew. This can happen when your users are using your app and a new version gets deployed. Their deployment version requests assets from an older version. And those assets from the previous version got replaced. This can cause errors when those active users navigate or interact with your project.

SvelteKit has a skew protection solution. When it detects version skew, it triggers a hard reload of a page to sync to the latest version. This does mean the client-side state gets lost. With Vercel skew protection, client requests get routed to their original deployment. No client-side state gets lost. To enable it, visit the Advanced section of your project settings on Vercel.

[Learn more about skew protection with SvelteKit](https://kit.svelte.dev/docs/adapter-vercel#skew-protection).

To summarize, the benefits of using ISR with SvelteKit on Vercel include:

*   Mitigates the risk of your active users encountering version skew
*   Avoids hard reloads for current active users on your project

[Learn more about skew protection on Vercel](/docs/skew-protection).

## [Image Optimization](#image-optimization)

[Image Optimization](/docs/image-optimization) helps you achieve faster page loads by reducing the size of images and using modern image formats.

When deploying to Vercel, you can optimize your images on demand, keeping your build times fast while improving your page load performance and [Core Web Vitals](/docs/speed-insights/metrics#core-web-vitals-explained).

To use Image Optimization with SvelteKit on Vercel, use the [`@sveltejs/adapter-vercel`](#use-vercel-features-with-svelte) within your `svelte.config.ts` file.

```
import adapter from '@sveltejs/adapter-vercel';
 
export default {
  kit: {
    adapter({
      images: {
        sizes: [640, 828, 1200, 1920, 3840],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 300,
        domains: ['example-app.vercel.app'],
      }
    })
  }
};
```

This allows you to specify [configuration options](https://vercel.com/docs/build-output-api/v3/configuration#images) for Vercel's native image optimization API.

To use image optimization with SvelteKit, you have to construct your own `srcset` URLs. You can create a library function that will optimize `srcset` URLs in production for you like this:

```
import { dev } from '$app/environment';
 
export function optimize(src: string, widths = [640, 960, 1280], quality = 90) {
  if (dev) return src;
 
  return widths
    .slice()
    .sort((a, b) => a - b)
    .map((width, i) => {
      const url = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
      const descriptor = i < widths.length - 1 ? ` ${width}w` : '';
      return url + descriptor;
    })
    .join(', ');
}
```

Use an `img` or any other image component with an optimized `srcset` generated by the `optimize` function:

```
<script lang="ts">
  import { optimize } from '$lib/image';
  import type { Photo } from '$lib/types';
 
  export let photo: Photo;
</script>
 
<img
  class="absolute left-0 top-0 w-full h-full"
  srcset={optimize(photo.url)}
  alt={photo.description}
/>
```

To summarize, using Image Optimization with SvelteKit on Vercel:

*   Configure image optimization with `@sveltejs/adapter-vercel`
*   Optimize for production with a function that constructs optimized `srcset` for your images
*   Helps your team ensure great performance by default
*   Keeps your builds fast by optimizing images on-demand

[Learn more about Image Optimization](/docs/image-optimization)

## [Web Analytics](#web-analytics)

Vercel's Web Analytics features enable you to visualize and monitor your application's performance over time. The Analytics tab in your project's dashboard offers detailed insights into your website's visitors, with metrics like top pages, top referrers, and user demographics.

To use Web Analytics, navigate to the Analytics tab of your project dashboard on Vercel and select Enable in the modal that appears.

To track visitors and page views, we recommend first installing our `@vercel/analytics` package by running the terminal command below in the root directory of your SvelteKit project:

pnpmyarnnpmbun

```
pnpm i @vercel/analytics
```

In your SvelteKit project's main `+layout.svelte` file, add the following `<script>`:

With the above script added to your project, you'll be able to view detailed user insights in your dashboard on Vercel under the Analytics tab. [See our docs to learn more about the user metrics you can track with Vercel's Web Analytics](/docs/analytics).

Your project must be deployed on Vercel to take advantage of the Web Analytics feature. Work on making this feature more broadly available is in progress.

To summarize, using Web Analytics with SvelteKit on Vercel:

*   Enables you to track traffic and see your top-performing pages
*   Offers you detailed breakdowns of visitor demographics, including their OS, browser, geolocation, and more

[Learn more about Web Analytics](/docs/analytics)

## [Speed Insights](#speed-insights)

You can see data about your project's [Core Web Vitals](/docs/speed-insights#core-web-vitals-explained) performance in your dashboard on Vercel. Doing so will allow you to track your web application's loading speed, responsiveness, and visual stability so you can improve the user experience.

[See our Speed Insights docs to learn more](/docs/speed-insights).

To summarize, using Speed Insights with SvelteKit on Vercel:

*   Enables you to track traffic performance metrics, such as [First Contentful Paint](/docs/speed-insights#first-contentful-paint-fcp), or [First Input Delay](/docs/speed-insights#first-input-delay-fid)
*   Enables you to view performance metrics by page name and URL for more granular analysis
*   Shows you [a score for your app's performance](/docs/speed-insights#how-the-scores-are-determined) on each recorded metric, which you can use to track improvements or regressions

[Learn more about Speed Insights](/docs/speed-insights)

## [Draft Mode](#draft-mode)

[Draft Mode](/docs/draft-mode) enables you to view draft content from your [Headless CMS](/docs/solutions/cms) immediately, while still statically generating pages in production.

To use a SvelteKit route in Draft Mode, you must:

1.  Export a `config` object [that enables Incremental Static Regeneration](https://kit.svelte.dev/docs/adapter-vercel#incremental-static-regeneration) from the route's `+page.server` file:

```
import { BYPASS_TOKEN } from '$env/static/private';
 
export const config = {
  isr: {
    // Random token that can be provided to bypass the cached version of the page with a __prerender_bypass=<token> cookie. Allows rendering content at request time for this route.
    bypassToken: BYPASS_TOKEN,
 
    // Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
    // Setting the value to `false` means it will never expire.
    expiration: 60,
  },
};
```

2.  Send a `__prerender_bypass` cookie with the same value as `bypassToken` in your config.

To render the draft content, SvelteKit will check for `__prerender_bypass`. If its value matches the value of `bypassToken`, it will render content fetched at request time rather than prebuilt content.

We recommend using a cryptographically secure random number generator at build time as your `bypassToken` value. If a malicious actor guesses your `bypassToken`, they can view your pages in Draft Mode.

### [Draft Mode security](#draft-mode-security)

Deployments on Vercel automatically secure Draft Mode behind the same authentication used for Preview Comments. In order to enable or disable Draft Mode, the viewer must be logged in as a member of the [Team](/docs/teams-and-accounts). Once enabled, Vercel's Edge Network will bypass the ISR cache automatically and invoke the underlying [Serverless Function](/docs/functions/serverless-functions).

### [Enabling Draft Mode in Preview Deployments](#enabling-draft-mode-in-preview-deployments)

You and your team members can toggle Draft Mode in the Vercel Toolbar in [production](/docs/vercel-toolbar/in-production-and-localhost/add-to-production), [localhost](/docs/vercel-toolbar/in-production-and-localhost/add-to-localhost), and [Preview Deployments](/docs/deployments/environments#preview-environment-pre-production#comments). When you do so, the toolbar will become purple to indicate Draft Mode is active.

![The Vercel toolbar when Draft Mode is enabled.](/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1689795055%2Fdocs-assets%2Fstatic%2Fdocs%2Fworkflow-collaboration%2Fdraft-mode%2Fdraft-toolbar1-light.png&w=828&q=75)![The Vercel toolbar when Draft Mode is enabled.](/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1689795055%2Fdocs-assets%2Fstatic%2Fdocs%2Fworkflow-collaboration%2Fdraft-mode%2Fdraft-toolbar1-dark.png&w=828&q=75)

The Vercel toolbar when Draft Mode is enabled.

Users outside your Vercel team cannot toggle Draft Mode.

To summarize, the benefits of using Draft Mode with SvelteKit on Vercel include:

*   Easily server-render previews of static pages
*   Adds security measures to prevent malicious usage
*   Integrates with any headless provider of your choice
*   You can enable and disable Draft Mode in [the comments toolbar](/docs/comments/how-comments-work) on Preview Deployments

[Learn more about Draft Mode](/docs/draft-mode)

## [Edge Middleware](#edge-middleware)

Edge Middleware is useful for modifying responses before they're sent to a user. We recommend [using SvelteKit's server hooks](https://kit.svelte.dev/docs/hooks) to modify responses. Due to SvelteKit's client-side rendering, you cannot use Vercel's Edge Middleware with SvelteKit.

## [Rewrites](#rewrites)

Adding a [`vercel.json`](/docs/project-configuration) file to the root directory of your project enables you to rewrite your app's routes.

We do not recommend using `vercel.json` rewrites with SvelteKit.

Rewrites from `vercel.json` only apply to the Vercel proxy. At runtime, SvelteKit doesn't have access to the rewritten URL, which means it has no way of rendering the intended rewritten route.

## [More benefits](#more-benefits)

See [our Frameworks documentation page](/docs/frameworks) to learn about the benefits available to all frameworks when you deploy on Vercel.

## [More resources](#more-resources)

Learn more about deploying SvelteKit projects on Vercel with the following resources:

*   [Learn about the Build Output API](/docs/build-output-api/v3)
*   [SvelteKit's official docs](https://kit.svelte.dev/docs/adapter-vercel)

Last updated on May 23, 2025
````

## File: docs/viteOnVercel.md
````markdown
# Vite on Vercel

Vite is an opinionated build tool that aims to provide a faster and leaner development experience for modern web projects. Vite provides a dev server with rich feature enhancements such as pre-bundling NPM dependencies and hot module replacement, and a build command that bundles your code and outputs optimized static assets for production.

These features make Vite more desirable than out-of-the-box CLIs when building larger projects with frameworks for many developers.

Vite powers popular frameworks like [SvelteKit](/docs/frameworks/sveltekit), and is often used in large projects built with [Vue](/guides/deploying-vuejs-to-vercel), [Svelte](/docs/frameworks/sveltekit), [React](/docs/frameworks/create-react-app), [Preact](/guides/deploying-preact-with-vercel), [and more](https://github.com/vitejs/vite/tree/main/packages/create-vite).

## [Getting started](#getting-started)

To get started with Vite on Vercel:

*   If you already have a project with Vite, install [Vercel CLI](/docs/cli) and run the `vercel` command from your project's root directory
*   Clone one of our Vite example repos to your favorite git provider and deploy it on Vercel with the button below:

[![](https://assets.vercel.com/image/upload/v1689795055/docs-assets/static/topics/icons/vite.svg)Deploy our Vite template, or view a live example.](/templates/vue/vite-vue)

[Deploy](/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fvite&template=vite)[Live Example](https://vite-vue-template.vercel.app)

*   Or, choose a template from Vercel's marketplace:

Vercel deployments can [integrate with your git provider](/docs/git) to [generate preview URLs](/docs/deployments/environments#preview-environment-pre-production) for each pull request you make to your Vite project.

## [Using Vite community plugins](#using-vite-community-plugins)

Although Vite offers modern features like [SSR](#server-side-rendering-ssr) and [Serverless Functions](#serverless-functions) out of the box, implementing those features can sometimes require complex configuration steps. Because of this, many Vite users prefer to use [popular community plugins](https://github.com/vitejs/awesome-vite#readme).

Vite's plugins are based on [Rollup's plugin interface](https://rollupjs.org/javascript-api/), giving Vite users access to [many tools from the Rollup ecosystem](https://vite-rollup-plugins.patak.dev/) as well as the [Vite-specific ecosystem](https://github.com/vitejs/awesome-vite#readme).

We recommend using Vite plugins to configure your project when possible.

### [`vite-plugin-vercel`](#vite-plugin-vercel)

[`vite-plugin-vercel`](https://github.com/magne4000/vite-plugin-vercel#readme) is a popular community Vite plugin that implements [the Build Output API spec](/docs/build-output-api/v3). It enables your Vite apps to use the following Vercel features:

*   [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
*   [Serverless Functions](#serverless-functions)
*   [Incremental Static Regeneration](/docs/incremental-static-regeneration)
*   [Static Site Generation](/docs/build-output-api/v3/primitives#static-files)

When using the Vercel CLI, set the port as an environment variable. To allow Vite to access this, include the environment variable in your `vite.config` file:

```
import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';
 
export default defineConfig({
  server: {
    port: process.env.PORT as unknown as number,
  },
  plugins: [vercel()],
});
```

### [`vite-plugin-ssr`](#vite-plugin-ssr)

[`vite-plugin-ssr`](https://vite-plugin-ssr.com/) is another popular community Vite plugin that implements [the Build Output API spec](/docs/build-output-api/v3). It enables your Vite apps to do the following:

*   [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
*   [Serverless Functions](#serverless-functions)
*   [Static Site Generation](/docs/build-output-api/v3/primitives#static-files)

## [Environment Variables](#environment-variables)

Vercel provides a set of [System Environment Variables](/docs/environment-variables/system-environment-variables) that our platform automatically populates. For example, the `VERCEL_GIT_PROVIDER` variable exposes the Git provider that triggered your project's deployment on Vercel.

These environment variables will be available to your project automatically, and you can enable or disable them in your project settings on Vercel. See [our Environment Variables docs](/docs/environment-variables) to learn how.

To access Vercel's System Environment Variables in Vite during the build process, prefix the variable name with `VITE`. For example, `VITE_VERCEL_ENV` will return `preview`, `production`, or `development` depending on which environment the app is running in.

The following example demonstrates a Vite config file that sets `VITE_VERCEL_ENV` as a global constant available throughout the app:

```
export default defineConfig(() => {
  return {
    define: {
      __APP_ENV__: process.env.VITE_VERCEL_ENV,
    },
  };
});
```

If you want to read environment variables from a `.env` file, additional configuration is required. See [the Vite config docs](https://vitejs.dev/config/#using-environment-variables-in-config) to learn more.

To summarize, the benefits of using System Environment Variables with Vite on Vercel include:

*   Access to Vercel deployment information, dynamically or statically, with our preconfigured System Environment Variables
*   Access to automatically-configured environment variables provided by [integrations for your preferred services](/docs/environment-variables#integration-environment-variables)
*   Searching and filtering environment variables by name and environment in Vercel's dashboard

[Learn more about System Environment Variables](/docs/environment-variables/system-environment-variables)

## [Vercel Functions](#vercel-functions)

Vercel Functions scale up and down their resource consumption based on traffic demands. This scaling prevents them from failing during peak hours, but keeps them from running up high costs during periods of low activity.

If your project uses [a Vite community plugin](#using-vite-community-plugins), such as [`vite-plugin-ssr`](https://vite-plugin-ssr.com/), you should follow that plugin's documentation for using Vercel Functions.

If you're using a framework built on Vite, check that framework's official documentation or [our dedicated framework docs](/docs/frameworks). Some frameworks built on Vite, such as [SvelteKit](/docs/frameworks/sveltekit), support Functions natively. We recommend using that framework's method for implementing Functions.

If you're not using a framework or plugin that supports Vercel Functions, you can still use them in your project by creating routes in an `api` directory at the root of your project.

The following example demonstrates a basic Vercel Function defined in an `api` directory:

```
import type { VercelRequest, VercelResponse } from '@vercel/node';
 
export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
```

To summarize, Vercel Functions on Vercel:

*   Scales to zero when not in use
*   Scales automatically with traffic increases
*   Support standard [Web APIs](https://developer.mozilla.org/docs/Web/API), such as `URLPattern`, `Response`, and more

[Learn more about Vercel Functions](/docs/functions)

## [Server-Side Rendering (SSR)](#server-side-rendering-ssr)

Server-Side Rendering (SSR) allows you to render pages dynamically on the server. This is useful for pages where the rendered data needs to be unique on every request. For example, checking authentication or looking at the location of an incoming request.

Vite exposes [a low-level API for implementing SSR](https://vitejs.dev/guide/ssr.html#server-side-rendering), but in most cases, we recommend [using a Vite community plugin](#using-vite-community-plugins).

See [the SSR section of Vite's plugin repo](https://github.com/vitejs/awesome-vite#ssr) for a more comprehensive list of SSR plugins.

To summarize, SSR with Vite on Vercel:

*   Scales to zero when not in use
*   Scales automatically with traffic increases
*   Has zero-configuration support for [`Cache-Control`](/docs/edge-network/caching) headers, including `stale-while-revalidate`

[Learn more about SSR](https://vitejs.dev/guide/ssr.html)

## [Using Vite to make SPAs](#using-vite-to-make-spas)

If your Vite app is [configured to deploy as a Single Page Application (SPA)](https://vitejs.dev/config/shared-options.html#apptype), deep linking won't work out of the box.

To enable deep linking in SPA Vite apps, create a `vercel.json` file at the root of your project, and add the following code:

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

If [`cleanUrls`](/docs/project-configuration#cleanurls) is set to `true` in your project's `vercel.json`, do not include the file extension in the source or destination path. For example, `/index.html` would be `/`

Deploying your app in Multi-Page App mode is recommended for production builds.

Learn more about [Mutli-Page App mode](https://vitejs.dev/guide/build.html#multi-page-app) in the Vite docs.

## [More benefits](#more-benefits)

See [our Frameworks documentation page](/docs/frameworks) to learn about the benefits available to all frameworks when you deploy on Vercel.

## [More resources](#more-resources)

Learn more about deploying Vite projects on Vercel with the following resources:

*   [Explore Vite's template repo](https://github.com/vitejs/vite/tree/main/packages/create-vite)

Last updated on May 23, 2025
````

## File: memory-bank/productContext.md
````markdown
# Product Context

This document describes the purpose and intended functionality of the project from a product perspective.

## Purpose

- This project exists to provide DC20 players with a digital tool for creating Level 1 characters.
- It solves the problem of manually calculating stats and managing choices during the character creation process by providing a guided, automated workflow.

## How it Works

- Users navigate through a 6-stage wizard (A-Attributes, B-Ancestry, C-Class, D-Background, E-Review, F-Equipment). The MVP will implement stages A, B, and C.
- At each stage, users make choices (allocate points, select ancestries/traits, select class/features) via input fields, selections, and buttons.
- The UI provides real-time provisional feedback on how choices affect stats.
- Data is saved to the database after each completed stage, allowing users to resume later.
- Upon completing the final stage (F), the backend performs final calculations and saves the complete character data.
- A dedicated Character Page displays the finalized Level 1 character sheet data.

## User Experience Goals

- Provide a guided, intuitive, and easy-to-follow character creation process.
- Ensure a clean, modern, and visually appealing user interface with a primary dark mode theme.
- Offer real-time feedback and validation to help users understand the impact of their choices and adhere to rules.
- Allow users to save and resume their character creation progress.
- Present the final character sheet data in a clear, structured, and readable format.

## Features

- **Character Creation Wizard (Level 1 MVP: Stages A, B, C):**
    - Stage A: Attribute Point Buy allocation, Prime Modifier determination, foundational stat calculation (Save Masteries, Grit, Jump, Provisional Skill Points).
    - Stage B: Ancestry selection (1 or 2), Ancestry Point allocation for Traits, handling attribute cap overflows with reallocation helper.
    - Stage C: Class selection, Level 1 Class Feature choices (planned for MVP).
    - Visual-only breadcrumbs for progress indication.
    - Real-time frontend validation and provisional stat updates.
    - Data persistence to `CharacterInProgress` table after each stage.
- **Character Page Output:**
    - Displays finalized Level 1 character sheet data from the `CharacterSheetData` table.
    - Structured HTML format with dark mode styling.
- **Data Persistence:**
    - `CharacterInProgress` table for intermediate wizard data.
    - `CharacterSheetData` table for completed character data.
    - Basic resume functionality using browser `localStorage` to store the last edited character ID.
````

## File: memory-bank/projectbrief.md
````markdown
# Project Brief

This document serves as the foundational document for the project, outlining its core requirements, goals, and scope.

## Project Goals

- Create a Level 1 Character Creator for DC20.
- Implement a guided, multi-stage wizard for character creation.
- Display a finalized Level 1 character sheet.
- Persist character data during and after creation.

## Scope

- **Included:**
    - Level 1 Character Creation Wizard (Stages A, B, C).
    - Character Page Output displaying finalized Level 1 data.
    - Data persistence for in-progress and completed characters using Prisma and PostgreSQL.
    - Frontend UI using SvelteKit, Melt UI, and TailwindCSS.
    - Backend logic for validation and final calculations.
    - Basic resume creation functionality using browser localStorage.
- **Out of Scope for MVP:**
    - Wizard Stages D, E, F.
    - Character Level Up Wizard.
    - Custom Equipment creation.
    - Name Generator.
    - Advanced features like image generation, PDF output, user accounts, sharing characters.
    - Moving static rule data to the database.
    - Interactive breadcrumb navigation.
    - Light Mode theme.

## Key Requirements

- Implement Point Buy system for attributes (Stage A).
- Allow selection of 1 or 2 Ancestries and allocation of Ancestry Points for Traits (Stage B).
- Handle attribute cap overflows during trait selection with a reallocation helper (Stage B).
- Implement Class selection and feature choices for Level 1 (Stage C - planned).
- Store intermediate character data in `CharacterInProgress` table.
- Store final character data in `CharacterSheetData` table.
- Use SvelteKit Form Actions/API routes for backend interactions.
- Implement frontend validation and display provisional stats.
- Implement backend authoritative validation and final calculations.
- Style the application using TailwindCSS dark mode with a specific color palette and Inter font.

## Target Audience

- Players of the DC20 tabletop roleplaying game who want a digital tool to create Level 1 characters.

## Stakeholders

- DC20 players (users).
- Project developers/maintainers.

## Initial Thoughts/Notes

- The project follows a guided wizard flow, breaking down character creation into manageable steps.
- Emphasis on a clean, modern dark mode UI.
- Static rule data is initially hardcoded for simplicity in the MVP.
- Backend is the source of truth for final calculations and validation.
````

## File: postcss.config.js
````javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
````

## File: prisma/migrations/20250526210112_init/migration.sql
````sql
-- CreateTable
CREATE TABLE "CharacterInProgress" (
    "id" TEXT NOT NULL,
    "attribute_might" INTEGER NOT NULL DEFAULT -2,
    "attribute_agility" INTEGER NOT NULL DEFAULT -2,
    "attribute_charisma" INTEGER NOT NULL DEFAULT -2,
    "attribute_intelligence" INTEGER NOT NULL DEFAULT -2,
    "pointsSpent" INTEGER NOT NULL DEFAULT 0,
    "ancestry1Id" TEXT,
    "ancestry2Id" TEXT,
    "selectedTraitIds" TEXT NOT NULL,
    "ancestryPointsSpent" INTEGER NOT NULL DEFAULT 0,
    "classId" TEXT,
    "selectedFeatureChoices" TEXT NOT NULL,
    "finalName" TEXT,
    "finalPlayerName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterInProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterSheetData" (
    "id" TEXT NOT NULL,
    "characterInProgressId" TEXT NOT NULL,
    "finalName" TEXT NOT NULL,
    "finalPlayerName" TEXT,
    "finalLevel" INTEGER NOT NULL DEFAULT 1,
    "finalMight" INTEGER NOT NULL,
    "finalAgility" INTEGER NOT NULL,
    "finalCharisma" INTEGER NOT NULL,
    "finalIntelligence" INTEGER NOT NULL,
    "finalPrimeModifierValue" INTEGER NOT NULL,
    "finalPrimeModifierAttribute" TEXT NOT NULL,
    "finalCombatMastery" INTEGER NOT NULL DEFAULT 1,
    "finalSaveMasteryMight" INTEGER NOT NULL,
    "finalSaveMasterityAgility" INTEGER NOT NULL,
    "finalSaveMasteryCharisma" INTEGER NOT NULL,
    "finalSaveMasteryIntelligence" INTEGER NOT NULL,
    "finalHPMax" INTEGER NOT NULL,
    "finalSPMax" INTEGER NOT NULL,
    "finalMPMax" INTEGER NOT NULL,
    "finalPD" INTEGER NOT NULL,
    "finalAD" INTEGER NOT NULL,
    "finalPDR" TEXT,
    "finalEDR" TEXT,
    "finalMDR" TEXT,
    "finalSaveDC" INTEGER NOT NULL,
    "finalDeathThreshold" INTEGER NOT NULL,
    "finalMoveSpeed" INTEGER NOT NULL,
    "finalJumpDistance" INTEGER NOT NULL,
    "finalRestPoints" INTEGER NOT NULL,
    "finalGritPoints" INTEGER NOT NULL,
    "finalInitiativeBonus" INTEGER NOT NULL,
    "skillsJson" TEXT NOT NULL,
    "tradesJson" TEXT NOT NULL,
    "languagesJson" TEXT NOT NULL,
    "ancestry1Name" TEXT,
    "ancestry2Name" TEXT,
    "selectedTraitsJson" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "classFeaturesLvl1Json" TEXT NOT NULL,
    "equipmentJson" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterSheetData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CharacterSheetData_characterInProgressId_key" ON "CharacterSheetData"("characterInProgressId");

-- AddForeignKey
ALTER TABLE "CharacterSheetData" ADD CONSTRAINT "CharacterSheetData_characterInProgressId_fkey" FOREIGN KEY ("characterInProgressId") REFERENCES "CharacterInProgress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
````

## File: prisma/migrations/20250620112102_allow_next_in_stage_a/migration.sql
````sql
-- AlterTable
ALTER TABLE "CharacterInProgress" ADD COLUMN     "currentStep" INTEGER NOT NULL DEFAULT 1;
````

## File: prisma/migrations/migration_lock.toml
````toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"
````

## File: projectPlan/cleanVercelMigration.md
````markdown
# Clean Vercel Migration Plan for DC20 Character Creator

## Overview
This document outlines a systematic approach to migrate the DC20 Character Creator from the current problematic setup to a fresh SvelteKit project that will deploy successfully on Vercel.

## Current Project Analysis

### Project Structure
```
dc20/
├── src/
│   ├── lib/
│   │   ├── components/ui/          # UI components (button, input, label, radio-group)
│   │   ├── rulesdata/             # Game logic and data files
│   │   └── stores/                # Svelte stores
│   ├── routes/
│   │   ├── api/character/progress/ # API endpoints for character data
│   │   ├── character-creator/      # Character creation pages
│   │   └── test-ui/               # UI testing page
│   ├── app.css                    # Global styles
│   └── app.html                   # HTML template
├── prisma/
│   ├── schema.prisma              # Database schema
│   └── migrations/                # Database migrations
├── memory-bank/                   # Project documentation
├── projectPlan/                   # Planning documents
└── Configuration files (package.json, svelte.config.js, etc.)
```

### Key Dependencies
- **Framework**: SvelteKit with Vite
- **Database**: Prisma with PostgreSQL (Prisma Accelerate)
- **UI**: Custom components + Melt UI + Tailwind CSS
- **Deployment**: Vercel (currently failing)

### Current Issues
- Permission denied errors with `node_modules/.bin/` executables
- Build process failing on Vercel despite multiple configuration attempts
- Inconsistent adapter configuration

## Revised Migration Strategy with Incremental Testing

This revised strategy incorporates more frequent testing to ensure issues are caught early. This section supersedes the previous "Migration Strategy" and "Migration Checklist" for a more robust, phased approach.

### Phase 1: Baseline Verification
1.  Create the new SvelteKit skeleton project.
2.  Install `@sveltejs/adapter-vercel` and configure `svelte.config.js`.
3.  **Test Point 1:** Deploy this completely empty project to Vercel.
    *   **Goal:** Confirm the fundamental build process and Vercel adapter are working correctly before adding any code.

### Phase 2: Database Layer Verification
1.  Copy the `prisma` directory and `.env` file.
2.  Install Prisma dependencies and run `npx prisma generate`.
3.  Create a temporary `src/routes/api/db-test/+server.ts` endpoint that performs a simple database query.
4.  **Test Point 2:** Run `npm run dev` and hit the `/api/db-test` endpoint.
    *   **Goal:** Isolate and confirm that the application can successfully connect to and query the database.

### Phase 3: API Logic Verification
1.  Copy `src/lib/rulesdata` and `src/lib/stores`.
2.  Copy the entire `src/routes/api/` directory.
3.  **Test Point 3:** Run `npm run dev` and test each of the real API endpoints.
    *   **Goal:** Verify that all backend logic works correctly before introducing the UI.

### Phase 4: UI and Integration Verification
1.  Configure `tailwind.config.js` and copy `app.css`, `app.html`.
2.  Copy `src/lib/components` and `src/routes/test-ui`.
3.  **Test Point 4 (Component Rendering):** Run `npm run dev` and navigate to the `/test-ui` page.
    *   **Goal:** Confirm individual UI components render correctly.
4.  Copy the remaining pages (`character-creator`, etc.).
5.  **Test Point 5 (Full Local Integration):** Run `npm run dev` and perform a full end-to-end test locally.
    *   **Goal:** Ensure UI, API, and database work together.

### Phase 5: Final Production Verification
1.  **Test Point 6 (Local Production Build):** Run `npm run build` and `npm run preview`.
    *   **Goal:** Catch any production-only build issues.
2.  **Test Point 7 (Staging Deployment):** Deploy to a Vercel preview environment (`vercel`).
    *   **Goal:** Conduct a final end-to-end test on live Vercel infrastructure.
3.  **Final Step:** Deploy to production with `vercel --prod`.

## Git and Repository Strategy

This migration will follow a "clean repository" approach to ensure a completely fresh start, free from any legacy configuration issues.

1.  **New Directory:** The entire migration will take place in a **new, separate directory** named `dc20-clean`, located alongside the original `dc20` project. This isolates the work and keeps the original project safe as a backup.
2.  **New GitHub Repository:** Upon successful migration and testing, the `dc20-clean` project will be pushed to a **new GitHub repository**.
    *   **Action:** You will need to create a new, empty repository on GitHub.
    *   **Reasoning:** This provides the cleanest possible history and avoids complex, risky `git push --force` operations on the existing repository. The old repository can be archived for historical purposes.
3.  **Vercel Re-linking:** The existing Vercel project will need to be updated to point to the new GitHub repository.

This strategy is the safest and most effective way to achieve the "clean install" objective.

## Rollback Plan

If migration fails:
1. Keep original project intact
2. Use git to revert changes
3. Switch back to original Vercel deployment
4. Analyze what went wrong and retry specific phases

## File-by-File Migration Map

### Critical Files (Copy First)
1. `prisma/schema.prisma` → Database schema
2. `src/lib/rulesdata/` → Game logic
3. `src/routes/api/` → API endpoints
4. `src/lib/stores/` → Application state

### UI Files (Copy Second)
1. `src/lib/components/` → Reusable components
2. `src/routes/character-creator/` → Main application pages
3. `src/app.css` → Global styles
4. `tailwind.config.js` → Styling configuration

### Configuration Files (Copy Last)
1. `svelte.config.js` → Framework configuration
2. `vite.config.js` → Build configuration
3. `tsconfig.json` → TypeScript configuration
4. `postcss.config.js` → CSS processing

## Expected Timeline

- **Total Time**: 4-5 hours
- **Critical Path**: Database → API → UI → Testing
- **Parallel Tasks**: Can copy files while testing previous phases
- **Buffer Time**: Add 1 hour for unexpected issues

## Success Criteria

✅ **Deployment Success**: Project deploys without errors on Vercel
✅ **Functionality**: All character creator features work
✅ **Database**: All API endpoints connect to database successfully
✅ **UI**: All pages render correctly with proper styling
✅ **Performance**: Build times are reasonable (<5 minutes)

## Post-Migration Tasks

1. **Monitor**: Watch for any runtime errors in production
2. **Optimize**: Review bundle size and performance
3. **Document**: Update project documentation
4. **Cleanup**: Archive or delete old project after verification
5. **Team**: Update team with new repository/deployment URLs

## Notes

- Keep the old project as backup until new one is fully verified
- Test each phase thoroughly before moving to the next
- Document any deviations from this plan
- If any phase fails, troubleshoot before continuing

---

## Revised Migration Strategy with Incremental Testing

This revised strategy incorporates more frequent testing to ensure issues are caught early. This section supersedes the previous "Migration Strategy" and "Migration Checklist" for a more robust, phased approach.

### Phase 1: Baseline Verification
1.  Create the new SvelteKit skeleton project.
2.  Install `@sveltejs/adapter-vercel` and configure `svelte.config.js`.
3.  **Test Point 1:** Deploy this completely empty project to Vercel.
    *   **Goal:** Confirm the fundamental build process and Vercel adapter are working correctly before adding any code.

### Phase 2: Database Layer Verification
1.  Copy the `prisma` directory and `.env` file.
2.  Install Prisma dependencies and run `npx prisma generate`.
3.  Create a temporary `src/routes/api/db-test/+server.ts` endpoint that performs a simple database query.
4.  **Test Point 2:** Run `npm run dev` and hit the `/api/db-test` endpoint.
    *   **Goal:** Isolate and confirm that the application can successfully connect to and query the database.

### Phase 3: API Logic Verification
1.  Copy `src/lib/rulesdata` and `src/lib/stores`.
2.  Copy the entire `src/routes/api/` directory.
3.  **Test Point 3:** Run `npm run dev` and test each of the real API endpoints.
    *   **Goal:** Verify that all backend logic works correctly before introducing the UI.

### Phase 4: UI and Integration Verification
1.  Configure `tailwind.config.js` and copy `app.css`, `app.html`.
2.  Copy `src/lib/components` and `src/routes/test-ui`.
3.  **Test Point 4 (Component Rendering):** Run `npm run dev` and navigate to the `/test-ui` page.
    *   **Goal:** Confirm individual UI components render correctly.
4.  Copy the remaining pages (`character-creator`, etc.).
5.  **Test Point 5 (Full Local Integration):** Run `npm run dev` and perform a full end-to-end test locally.
    *   **Goal:** Ensure UI, API, and database work together.

### Phase 5: Final Production Verification
1.  **Test Point 6 (Local Production Build):** Run `npm run build` and `npm run preview`.
    *   **Goal:** Catch any production-only build issues.
2.  **Test Point 7 (Staging Deployment):** Deploy to a Vercel preview environment (`vercel`).
    *   **Goal:** Conduct a final end-to-end test on live Vercel infrastructure.
3.  **Final Step:** Deploy to production with `vercel --prod`.
````

## File: projectPlan/content.md
````markdown
# Plan: Populate Static Rule Data from DC20 Rulebook

This document tracks the steps to fully populate the static rule data files for the DC20 Character Creator MVP, using `projectPlan/DC20_Core_Rules_Beta_0_9_5_PDF_v1_0.pdf` as the source.

## I. Preparation

*   [x] **Read PDF Content**:
    *   Status: `Completed`
    *   Action: Use `read_file` to extract text from `projectPlan/DC20_Core_Rules_Beta_0_9_5_PDF_v1_0.pdf`.
    *   Notes:

## II. Rule Data File Updates

For each file, the process will be:
1.  Read current file content.
2.  Identify missing/placeholder information.
3.  Extract relevant data from the PDF.
4.  Propose changes (using `replace_in_file` or `write_to_file`).
5.  Apply changes upon approval.

*   [x] **Update `src/lib/rulesdata/attributes.ts`**:
    *   Status: `Completed`
    *   Task: Populate all attribute descriptions and verify derived stats formulas against the rulebook.
    *   Notes:

*   [x] **Update `src/lib/rulesdata/ancestries.ts`**:
    *   Status: `Completed`
    *   Task: Populate all ancestry descriptions, verify default/expanded trait IDs, and ensure alignment with rulebook details.
    *   Notes:

*   [x] **Update `src/lib/rulesdata/classes.ts` (and `src/lib/rulesdata/sorcerer.ts`)**:
    *   Status: `Completed`
    *   Notes: Barbarian, Sorcerer, Bard, Champion, Cleric, Commander, Druid, Hunter, Monk, Rogue, Spellblade, Warlock, and Wizard classes added/updated based on PDF. Sorcerer data merged into classes.ts.
    *   Task:
        *   Complete Barbarian class data in `classes.ts`.
        *   Review `sorcerer.ts` for completeness.
        *   Decide on merging `sorcerer.ts` into `classes.ts` or keeping separate, then implement.
        *   Add other core classes from the rulebook with their Lvl 1 features, benefits, and choices.
    *   Notes:

*   [x] **Update `src/lib/rulesdata/skills.ts`**:
    *   Status: `Completed`
    *   Notes: All skills from DC20 p.11-13 added with descriptions and attribute associations.
    *   Task: Add all remaining skills from the rulebook, ensuring correct attribute associations and descriptions.
    *   Notes:

*   [x] **Review and Update `src/lib/rulesdata/traits.ts`**:
    *   Status: `Completed`
    *   Notes: All traits from DC20 p.108-116 added/updated with descriptions, costs, effects, flags, and prerequisites.
    *   Task: Verify all listed traits against the rulebook for accuracy in cost, effects, descriptions, and flags (minor/negative). Add any missing traits.
    *   Notes:

*   [x] **Review and Update `src/lib/rulesdata/languages.ts`**:
    *   Status: `Completed`
    *   Notes: Language descriptions updated based on DC20 p.18.
    *   Task: Verify all listed languages against the rulebook for accuracy and completeness.
    *   Notes:

*   [x] **Review and Update `src/lib/rulesdata/trades.ts`**:
    *   Status: `Completed`
    *   Notes: Trade descriptions updated based on DC20 p.14-17.
    *   Task: Verify all listed trades against the rulebook for accuracy, including attribute associations, descriptions, and tools.
    *   Notes:

## III. Documentation Update

*   [ ] **Update Memory Bank Files**:
    *   Status: `In Progress`
    *   Task: Update `memory-bank/activeContext.md` and `memory-bank/progress.md` to reflect the completion of static rule data population.
    *   Notes:

---
**Last Updated:** {{DATE}}
````

## File: projectPlan/geminiTasks.md
````markdown
# DC20 Character Creator MVP - Planning Refinement Tasks

This document outlines tasks to refine existing planning documents (`mvp.md`, `stage1.md`, `stage2.md`) and detail the content of new files, ensuring consistency, detail for development, and accuracy against the DC20 Beta 0.9.5 rulebook.

## I. Refinements for `mvp.md`

*   [x] Clarify the MVP Wizard Scope: Detail the planned 6-stage re-ordered flow, explicitly stating the initial focus on Stages A (Attributes), B (Ancestry), and C (Class).
*   [x] Detail the fields for the `CharacterSheetData` Prisma model: Based on the required outputs for a Level 1 character sheet, list the specific fields, their intended data types, and purpose within the model.
*   [x] Specify the role of `src/lib/rulesdata/types.ts`: State that this file will define detailed TypeScript interfaces for static rule data. List the key interface names to be created: `IAttributeData`, `ITraitEffect`, `ITrait`, `IAncestry`, `IClassFeatureChoiceOption`, `IClassFeatureChoice`, `IClassFeature`, `IClassDefinition`, `ISkillData`, `ITradeData`, `ILanguageData`.

## II. Refinements for `stage1.md` (Stage A - Attributes)

*   [x] Clarify `getModifier(attributeScore)` logic: Explain that in DC20, the attribute score *is* the modifier. Detail how the function should handle null or undefined input values gracefully.
*   [x] Specify `L1_COMBAT_MASTERY` constant: Define the source and exact value for this constant, referencing the DC20 rulebook.
*   [x] Populate attribute descriptions: Add a task to copy the descriptions for the four core attributes directly from the DC20 Beta 0.9.5 rulebook (p. 9).
*   [x] Clarify "Points Spent" calculation for Point Buy: Detail the calculation, explaining that the total points available are 12, derived from a base of -2 for each of the four attributes (4 * -2 = -8 base, + 20 points to spend = 12 total).
*   [x] Clarify Save Mastery calculation: Explicitly state the formula: Save Mastery = Attribute Modifier + L1 Combat Mastery.
*   [x] Specify Level 1 attribute cap: Note the maximum attribute score allowed at Level 1 is +3, referencing DC20 Beta 0.9.5 rulebook (p. 10).

## III. Refinements for `stage2.md` (Stage B - Ancestry)

*   [x] Clarify usage of `attributesFromStageA`: Detail how the attribute scores selected in Stage A (stored in the Svelte store) are accessed and utilized within the logic and UI of Stage B.
*   [x] Specify Trait data sourcing: State that Trait data (name, cost, description, effects, flags) will be sourced from static rule data using the TypeScript interfaces defined in `src/lib/rulesdata/types.ts`.
*   [x] Detail Overflow Helper Panel attribute reduction logic: Explain the constraints on attribute reduction:
    *   The attribute currently overflowing cannot be reduced via the panel.
    *   No attribute can be reduced below its base value of -2.
*   [x] Detail UI feedback for Trait rule enforcement: Add tasks to specify how the UI should provide feedback to the user when they attempt actions that violate Trait rules, such as:
    *   Exceeding the Minor Trait limit.
    *   Exceeding the Negative Trait point gain limit.
    *   Exceeding the Ancestry Point budget.
*   [x] Ensure `handleTraitSelection` logic clarity: Explicitly state that if selecting a trait results in a rule violation (e.g., exceeding limits, causing an attribute overflow), the `openOverflowHelperPanel` function must be triggered.

## IV. Content Generation for `src/lib/rulesdata/types.ts`

*   [x] Define `IAttributeData` interface: Include fields for name, description, and any other relevant static data for attributes.
*   [x] Define `ITraitEffect` interface: Structure this to encode the effects of traits (e.g., attribute modifiers, skill bonuses, special abilities). Consider a flexible structure that can handle various effect types.
*   [x] Define `ITrait` interface: Include fields for name, cost (positive for negative traits, negative for positive traits), description, an array of `ITraitEffect`s, and flags (e.g., 'minor', 'negative').
*   [x] Define `IAncestry` interface: Include fields for name, description, base attribute modifiers, starting traits, ancestry points budget, and any other ancestry-specific static data.
*   [x] Define `IClassFeatureChoiceOption` interface: For class features that offer choices (e.g., skill proficiencies), define the structure for each option.
*   [x] Define `IClassFeatureChoice` interface: Define the structure for a set of choices within a class feature (e.g., number of options to choose, list of available options).
*   [x] Define `IClassFeature` interface: Include fields for name, description, an array of `ITraitEffect`s (for passive or active effects), and an optional array of `IClassFeatureChoice` for features requiring user selection.
*   [x] Define `IClassDefinition` interface: Include fields for name, description, prime attribute, hit die, starting proficiencies (skills, trades, languages, armor, weapons), Level 1 features (array of `IClassFeature`), and Level 1 choices (array of `IClassFeatureChoice`).
*   [x] Define `ISkillData`, `ITradeData`, `ILanguageData` interfaces: Define simple interfaces for static data related to skills, trades, and languages, including name and description.

## V. Initial Content Generation for `src/lib/rulesdata/*.ts`

*   [x] Populate `attributes.ts`: Create and export an array or object containing `IAttributeData` for the four core attributes (Might, Agility, Grit, Wit), sourcing descriptions from DC20 Beta 0.9.5 rulebook (p. 9).
*   [x] Populate `ancestries.ts`: Create and export an array or object containing `IAncestry` data for Human and Elf, including their base attribute modifiers, starting traits, and ancestry points budget, referencing DC20 Beta 0.9.5 rulebook.
*   [x] Populate `traits.ts`: Create and export an array or object containing `ITrait` data for Human and Elf default traits, plus a selection of Expanded Traits (both positive and negative) with encoded effects, referencing DC20 Beta 0.9.5 rulebook.
*   [x] Populate `classes.ts`: Create and export an array or object containing `IClassDefinition` data for Barbarian and Sorcerer, including their Level 1 benefits, features, and Level 1 choices, referencing DC20 Beta 0.9.5 rulebook.

## VI. Modifications for `prisma/schema.prisma`

*   [x] Update `CharacterInProgress` model: Add all necessary fields to store the state of Stages A, B, and C. Ensure correct Prisma types are used (e.g., `Int` for attributes, `String?` for JSON data). Set appropriate default values (e.g., attributes `@default(-2)`). Include fields for:
    *   Attribute scores (Might, Agility, Grit, Wit)
    *   Selected Ancestry ID
    *   Selected Trait IDs (array, potentially stored as JSON string)
    *   Selected Class ID
    *   Selected Class Feature choices (JSON string)
*   [x] Define `CharacterSheetData` model: Create this new model with fields corresponding to the final Level 1 character sheet output. Define the relation linking it back to the `CharacterInProgress` model. Include fields for:
    *   All final calculated stats (e.g., Save Masteries, Grit Points, Combat Mastery, Defense, Initiative, etc.)
    *   Selected Skills, Trades, Languages
    *   Selected Proficiencies (Armor, Weapons)
    *   Any other data required for the final sheet.

## VII. Structure Details for `src/lib/stores/characterInProgressStore.ts`

*   [x] Define initial state: Detail the initial state of the writable Svelte store (`characterInProgressStore`), ensuring it mirrors the default values defined in the `CharacterInProgress` Prisma model.
*   [x] List key derived stores: Identify and list the key derived stores that will be needed to reactively calculate values based on the core store state (e.g., `primeModifierValue`, `saveMasteries`, `gritPoints`, `ancestryPointsRemaining`, `traitPointsGained`, `minorTraitsSelected`).
*   [x] Define helper functions and constants: List necessary helper functions (like `getModifier`) and constants (like `L1_COMBAT_MASTERY`) that should be defined within or alongside the store logic for calculations.
````

## File: projectPlan/status.md
````markdown
# DC20 Character Creator - Project Status

## Current Status (May 27, 2025)

The project is in the planning and initial setup phase for the DC20 Character Creator MVP. The core requirements, scope, and technical approach are defined. Detailed plans for the first two stages of the wizard are documented.

### Completed Tasks

1. __Project Planning__:

   - Defined project scope, requirements, and architecture in memory bank documentation
   - Created detailed plans for Stage A (Attributes) and Stage B (Ancestry) of the character creation wizard
   - Established UI design principles and color palette

2. __Database Setup__:

   - Installed and configured PostgreSQL locally
   - Created `dc20-local` database
   - Set up environment variables in `.env` file
   - Generated Prisma client
   - Applied initial migration to create database schema

3. __Static Data Implementation__:

   - Defined TypeScript interfaces in `src/lib/rulesdata/types.ts`
   - Created initial rule data files for attributes, ancestries, traits, classes, skills, trades, and languages
   - Set up Svelte store structure in `src/lib/stores/characterInProgressStore.ts`

### Current Work

The project is now ready for frontend and backend implementation. The database is set up, and the static rule data is in place.

### Next Steps

1. __Frontend Implementation__:

   - Implement the Svelte component for Stage A (Attributes) based on `projectPlan/stage1.md`
   - Create UI components using Melt UI primitives styled with TailwindCSS
   - Implement the attribute point allocation system with real-time validation

2. __Backend Implementation__:

   - Create the SvelteKit Form Action for Stage A data persistence
   - Implement validation logic for attribute point allocation
   - Connect the frontend to the backend using the Prisma client

3. __Continue Development__:

   - Implement Stage B (Ancestry) components and logic
   - Implement the attribute overflow helper panel for trait selection
   - Detail and implement Stage C (Class)

## Project Context

The DC20 Character Creator is a web application designed to help players create Level 1 characters for the DC20 tabletop roleplaying game. The application follows a guided wizard approach, breaking down character creation into manageable steps.

### Key Features (MVP)

- Character Creation Wizard (Stages A, B, C)
- Point Buy system for attributes
- Ancestry selection and trait allocation
- Class selection and feature choices
- Data persistence using PostgreSQL
- Dark mode UI with a modern aesthetic

### Technology Stack

- __Frontend__: SvelteKit, Melt UI, TailwindCSS
- __Backend__: SvelteKit Form Actions/API Routes
- __Database__: PostgreSQL with Prisma ORM
- __State Management__: Svelte stores

### Architecture

The application follows a full-stack architecture using SvelteKit. Frontend components handle the user interface and client-side logic, while backend endpoints handle data persistence, validation, and final calculations. The database stores both in-progress character data and finalized character sheets.

## Resources

- Detailed planning documents in `projectPlan/` directory
- Memory bank documentation in `memory-bank/` directory
- Static rule data in `src/lib/rulesdata/` directory
- Database schema in `prisma/schema.prisma`


Here's an additional section about Prisma that you can add to your status.md file:

## Prisma Database Setup Details

### Completed Prisma Setup

- Installed Prisma dependencies:
  - `prisma` (v6.7.0) as a dev dependency
  - `@prisma/client` (v6.7.0) as a runtime dependency
- Created and configured `prisma/schema.prisma` with:
  - PostgreSQL database provider
  - `CharacterInProgress` and `CharacterSheetData` models
- Set up local PostgreSQL database:
  - Created `dc20-local` database
  - Configured connection string in `.env` file: `POSTGRES_URL="postgresql://postgres:123456789@localhost:5432/dc20-local"`
- Generated Prisma client: `npx prisma generate`
- Applied initial migration: `npx prisma migrate dev --name init`
- Database tables are now created and ready for use

### Using Prisma in the Application

To use Prisma in your SvelteKit application:

1. **Import the Prisma client**:
   ```typescript
   import { PrismaClient } from '@prisma/client'
   const prisma = new PrismaClient()
   ```

2. **Create records** (example for saving character progress):
   ```typescript
   // In a SvelteKit Form Action or API endpoint
   const character = await prisma.characterInProgress.create({
     data: {
       attribute_might: -1,
       attribute_agility: 0,
       attribute_charisma: 1,
       attribute_intelligence: 2,
       pointsSpent: 12,
       // other fields as needed
     }
   })
   ```

3. **Query records** (example for loading character progress):
   ```typescript
   const character = await prisma.characterInProgress.findUnique({
     where: { id: characterId }
   })
   ```

4. **Update records** (example for updating after a wizard step):
   ```typescript
   const updatedCharacter = await prisma.characterInProgress.update({
     where: { id: characterId },
     data: {
       ancestry1Id: selectedAncestryId,
       selectedTraitIds: JSON.stringify(selectedTraits),
       // other fields to update
     }
   })
   ```

### Prisma Utilities

- **Prisma Studio**: A visual database editor
  - Run with `npx prisma studio`
  - Allows viewing and editing database records through a web interface
  - Useful for debugging and manual data management

- **Schema Updates**: When you modify your Prisma schema
  - Run `npx prisma migrate dev --name descriptive_name` to create and apply a new migration
  - This keeps your database schema in sync with your code

### Next Steps for Prisma

- Implement database access in SvelteKit Form Actions/API Routes
- Create helper functions for common database operations
- Consider setting up a connection pool for production deployment
- Plan for database backup and recovery strategies
````

## File: projectPlan/tailwind.config.js
````javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'yellow-accent': '#FFBE0B',
        'orange-secondary': '#FB5607',
        'magenta-error': '#FF006E',
        'purple-primary': '#8338EC',
        'blue-info': '#3A86FF',
        // Define your dark background shades
        'dark-bg-primary': '#111827', // Example: Tailwind gray-900
        'dark-bg-secondary': '#1F2937', // Example: Tailwind gray-800
        // Define your light text shades
        'light-text-primary': '#E5E7EB', // Example: Tailwind gray-200
        'light-text-secondary': '#D1D5DB', // Example: Tailwind gray-300
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Make Inter the default sans-serif
      },
    },
  },
  // ... plugins
}
````

## File: repomix.config.json
````json
{
  "input": {
    "maxFileSize": 52428800
  },
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "files": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "copyToClipboard": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
````

## File: src/app.css
````css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
````

## File: src/app.html
````html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
````

## File: src/lib/components/ui/button/button.svelte
````
<script lang="ts">
  // Forward all props to the button element
  // This allows consumers to pass standard button attributes like 'type', 'disabled', 'onclick', etc.
  // and also custom attributes or actions.
  // Melt UI doesn't provide a specific 'Button' primitive with actions/context,
  // so this wrapper is mainly for styling and prop forwarding.
</script>

<!--
  This is the root button element.
  Apply base styling here using TailwindCSS classes.
  Consumers of this component can add additional classes via the 'class' prop,
  which will be merged by Svelte's {...$$restProps}.
-->
<button
  {...$$restProps}
  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-dark-bg-primary" // Example base styling
>
  <!-- Slot for the button content (text, icons, etc.) -->
  <slot />
</button>
````

## File: src/lib/components/ui/button/index.ts
````typescript
// This is a simple wrapper index for a Button component.
// Melt UI doesn't have a core 'Button' primitive with actions/context
// like RadioGroup, so this likely just re-exports a styled Svelte component.

import Root from './button.svelte';

export {
  Root,
};
````

## File: src/lib/components/ui/input/index.ts
````typescript
// This is a simple wrapper index for an Input component.
// Melt UI doesn't have a core 'Input' primitive with actions/context,
// so this likely just re-exports a styled Svelte component.

import Root from './input.svelte';

export {
  Root,
};
````

## File: src/lib/components/ui/input/input.svelte
````
<script lang="ts">
  // Forward all props to the input element.
  // This allows consumers to pass standard input attributes like 'type', 'value', 'disabled', 'placeholder', etc.
  // and also custom attributes or actions.
  // Melt UI doesn't provide a specific 'Input' primitive with actions/context,
  // so this wrapper is mainly for styling and prop forwarding.
</script>

<!--
  This is the root input element.
  Apply base styling here using TailwindCSS classes.
  Consumers of this component can add additional classes via the 'class' prop,
  which will be merged by Svelte's {...$$restProps}.
-->
<input
  {...$$restProps}
  class="flex h-10 w-full rounded-md border border-dark-bg-primary bg-dark-bg-secondary px-3 py-2 text-sm placeholder:text-light-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-offset-dark-bg-primary" // Example base styling
/>
````

## File: src/lib/components/ui/label/index.ts
````typescript
// This is a simple wrapper index for a Label component.
// Melt UI provides a Label primitive with actions/context,
// so this will re-export the Root and potentially other parts.

import { Label as LabelPrimitive } from '@melt-ui/svelte';
import Root from './label.svelte';

const getLabelContext = LabelPrimitive.getContext; // Export the context getter

export {
  Root,
  getLabelContext,
  // Add other Label parts if needed, e.g., LabelPrimitive.Helper
};
````

## File: src/lib/components/ui/label/label.svelte
````
<script lang="ts">
  import { getLabelContext } from './index.ts';

  // Get context data from the parent Label.Root
  const { root } = getLabelContext();

  // Forward props
  export let forId: string | undefined = undefined; // Use 'for' attribute

  // Add styling here using TailwindCSS classes
  // Example: class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
</script>

<!-- Apply the action to the label element -->
<label
  use:root
  for={forId}
  {...$$restProps}
  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" // Example base styling
>
  <!-- Slot for the label content -->
  <slot />
</label>
````

## File: src/lib/components/ui/radio-group/index.ts
````typescript
// This index file exports the wrapped RadioGroup components.

import Root from './radio-group-root.svelte';
import Item from './radio-group-item.svelte';

export {
  Root,
  Item,
};
````

## File: src/lib/components/ui/radio-group/radio-group-item.svelte
````
<script lang="ts">
  import { RadioGroup as RadioGroupPrimitive } from '@melt-ui/svelte';

  // Get context data from the parent RadioGroup.Root using getItemContext
  const { item } = RadioGroupPrimitive.getItemContext();

  // Forward props and actions
  export let value: string;
  export let disabled: boolean = false;

  // Add styling here using TailwindCSS classes
  // Example: class="flex items-center space-x-2"
</script>

<!-- Apply the action to the button element -->
<button
  use:item={{ value, disabled }}
  {...$$restProps}
  class="flex items-center space-x-2"
>
  // Example styling
  <!-- This is where the visual radio button element goes -->
  <!-- You would typically add a styled div/span here -->
  <div class="h-4 w-4 rounded-full border border-light-text-primary flex items-center justify-center">
      <div class="h-2 w-2 rounded-full bg-yellow-accent" use:item.indicator></div>
  </div>
  <!-- Content slot for the label -->
  <slot />
</button>
````

## File: src/lib/components/ui/radio-group/radio-group-root.svelte
````
<script lang="ts">
  import { RadioGroup as RadioGroupPrimitive } from '@melt-ui/svelte';

  // Create the Melt UI RadioGroup primitive and set context
  const { elements: { root }, states: { value }, update } = RadioGroupPrimitive.create({});

  // Forward props and actions
  export let bind: string | undefined = undefined; // Prop to bind the value

  // Update the primitive when the bound value changes
  $: if (bind !== undefined) {
    value.set(bind);
  }

  // Update the bound value when the primitive's value changes
  $: if ($value !== bind) {
    bind = $value;
  }

  // Add styling here using TailwindCSS classes
  // Example: class="flex flex-col space-y-2"
</script>

<!-- Apply the action to the div element -->
<div
  use:root
  {...$$restProps}
  class="flex flex-col space-y-2" // Example base styling
>
  <!-- Slot for the RadioGroup items -->
  <slot />
</div>
````

## File: src/lib/rulesdata/sorcerer.ts
````typescript
import { IClassDefinition } from './types';

// IClassDefinition for Sorcerer:
export const sorcererClass: IClassDefinition = {
  id: 'sorcerer',
  name: 'Sorcerer',
  description: '[Extract "Source of Power" for Sorcerer from DC20 p.149]',
  baseHpContribution: 8, // From class table p.149 Lvl 1 HP
  startingSP: 0,
  startingMP: 6, // From class table p.149 Lvl 1 MP
  combatTraining: ['Light Armor'], // From p.149 "Sorcerer Spellcasting Path"
  cantripsKnownLvl1: 2, // From class table p.149
  spellsKnownLvl1: 3,   // From class table p.149
  saveDCBase: 0, // Placeholder, need actual value from DC20
  deathThresholdBase: 0, // Placeholder, need actual value from DC20
  moveSpeedBase: 0, // Placeholder, need actual value from DC20
  restPointsBase: 0, // Placeholder, need actual value from DC20
  gritPointsBase: 0, // Placeholder, need actual value from DC20
  initiativeBonusBase: 0, // Placeholder, need actual value from DC20
  // No maneuvers/techniques for base Sorcerer L1
  level1Features: [
    {
      id: 'sorcerer_innate_power',
      name: 'Innate Power',
      level: 1,
      description: '[Summarize Innate Power from DC20 p.150: Choose Sorcerous Origin. Max MP +1. Once per Long Rest, use 1MP Spell Enhancement free (regain on Initiative roll).]',
      effects: [
          { type: 'MODIFY_MP_MAX', value: 1 },
          { type: 'GRANT_ABILITY', value: 'Free_1MP_Spell_Enhancement_Once_Per_Long_Rest' }
      ]
    },
    {
      id: 'sorcerer_overload_magic',
      name: 'Overload Magic',
      level: 1,
      description: '[Summarize Overload Magic from DC20 p.150: 2 AP for 1 min: +5 Spell Checks. Start & each turn: Attribute Save (your choice) vs own Save DC or gain Exhaustion. Ends early if Incapacitated/die/choose. Lose gained Exhaustion on Short Rest.]',
      effects: [{ type: 'GRANT_ABILITY', value: 'Overload_Magic_Mechanics_Bundle' }]
    },
    {
      id: 'sorcerer_sorcery_flavor',
      name: 'Sorcery (Flavor)',
      level: 1,
      description: '[DC20 p.150: "You learn the Sorcery Spell." (Sorcery Spell is on p.178)]',
      effects: [{ type: 'GRANT_SPELL_KNOWN', value: 'sorcery_cantrip_id' }]
    }
  ],
  featureChoicesLvl1: [
    {
      id: 'sorcerous_origin_choice', // Key for storing choice
      prompt: 'Choose your Sorcerous Origin (DC20 p.150):',
      type: 'select_one',
      options: [
        { value: 'intuitive_magic', label: 'Intuitive Magic', description: '[DC20 p.150: "You learn an additional Spell and Cantrip from your Sorcerer Spell List."]', effectsOnChoice: [{ type: 'GRANT_BONUS_SPELL_KNOWN' }, { type: 'GRANT_BONUS_CANTRIP_KNOWN'}] },
        { value: 'resilient_magic', label: 'Resilient Magic', description: '[DC20 p.150: "You gain Dazed Resistance."]', effectsOnChoice: [{ type: 'GRANT_CONDITION_RESISTANCE', target: 'Dazed'}] },
        { value: 'unstable_magic', label: 'Unstable Magic', description: '[DC20 p.150: "When you Critically Succeed or Fail on a Spell Check, roll on the Wild Magic Table..."]', effectsOnChoice: [{ type: 'ENABLE_WILD_MAGIC_TABLE_ON_CRIT_SPELL_CHECK'}] }
      ]
    },
    {
      id: 'sorcerer_spell_list_choice', // Key for storing choice
      prompt: 'Choose Your Sorcerer Spell List (DC20 p.149):',
      type: 'select_one',
      options: [
        { value: 'arcane', label: 'Arcane Spell List' },
        { value: 'divine', label: 'Divine Spell List' },
        { value: 'primal', label: 'Primal Spell List' }
      ]
    }
  ]
}
````

## File: src/routes/+page.svelte
````
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
````

## File: src/routes/api/character/progress/_backup_merge_stages_20250621/stageA+server.ts
````typescript
import { json, error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Constants for validation (should ideally be shared or sourced from rules data)
const ATTRIBUTE_MIN = -2;
const ATTRIBUTE_MAX_L1 = 3;
const POINT_BUY_BUDGET = 12;

export async function POST({ request }) {
  try {
    const { characterId, finalName, attribute_might, attribute_agility, attribute_charisma, attribute_intelligence } = await request.json();

    // Backend Validation
    if (!finalName || typeof finalName !== 'string' || finalName.trim().length === 0) {
        return error(400, { message: 'Character name is required.' });
    }
    // Optional: Add length constraints or character restrictions for finalName

    const attributes = {
      might: attribute_might,
      agility: attribute_agility,
      charisma: attribute_charisma,
      intelligence: attribute_intelligence,
    };

    // Validate attribute ranges
    for (const [name, value] of Object.entries(attributes)) {
      if (value < ATTRIBUTE_MIN || value > ATTRIBUTE_MAX_L1) {
        return error(400, { message: `Attribute ${name} is out of the allowed range (-2 to +3).` });
      }
    }

    // Validate total points spent
    const pointsSpent = (attributes.might - ATTRIBUTE_MIN) +
                        (attributes.agility - ATTRIBUTE_MIN) +
                        (attributes.charisma - ATTRIBUTE_MIN) +
                        (attributes.intelligence - ATTRIBUTE_MIN);

    if (pointsSpent !== POINT_BUY_BUDGET) {
      return error(400, { message: `Total points allocated must be exactly ${POINT_BUY_BUDGET}. You allocated ${pointsSpent}.` });
    }

    let updatedCharacter;

    if (characterId) {
      // Update existing character progress
      updatedCharacter = await prisma.characterInProgress.update({
        where: { id: characterId },
        data: {
          finalName: finalName.trim(), // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent, // Store points spent for consistency, though backend validates
          level: 1, // Hardcoded to 1 for MVP
          combatMastery: 1, // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]), // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]), // Initialize selected feature choices
          currentStep: 1, // Mark Stage A as complete
        },
      });
    } else {
      // Create new character progress (handles TD-002 for the first save)
      updatedCharacter = await prisma.characterInProgress.create({
        data: {
          finalName: finalName.trim(), // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent,
          level: 1, // Hardcoded to 1 for MVP
          combatMastery: 1, // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]), // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]), // Initialize selected feature choices
          currentStep: 1, // Mark Stage A as complete
        },
      });
      // Note: The frontend will need to update its store with this new ID
    }


    // Return success response with the character ID
    return json({ success: true, characterId: updatedCharacter.id });

  } catch (e) {
    console.error('Backend error saving Stage A data:', e);
    // Handle Prisma errors or other exceptions
    if (e instanceof Error) {
       return error(500, { message: `Internal server error: ${e.message}` });
    }
    return error(500, { message: 'An unknown error occurred while saving attributes.' });
  } finally {
    await prisma.$disconnect();
  }
}
````

## File: src/routes/api/character/progress/_backup_merge_stages_20250621/stageB+server.ts
````typescript
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';
import type { ITrait } from '$lib/rulesdata/types'; // Import ITrait type
import { ancestriesData as ancestries } from '$lib/rulesdata/ancestries';
import { traitsData as traits } from '$lib/rulesdata/traits';

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();

    // Assuming data contains:
    // characterId: string;
    // selectedAncestries: string[]; // Array of ancestry IDs (max 2)
    // selectedTraits: string[]; // Array of trait IDs
    // attributes: { [key: string]: number }; // Attributes after potential reallocation

    // 1. Validate characterId exists and corresponds to an in-progress character
    if (!data.characterId) {
        return json({ success: false, message: 'Character ID is required.' }, { status: 400 });
    }

    // 2. Validate selected ancestries (max 2)
    if (!Array.isArray(data.selectedAncestries) || data.selectedAncestries.length === 0 || data.selectedAncestries.length > 2) {
         return json({ success: false, message: 'You must select between 1 and 2 ancestries.' }, { status: 400 });
    }
    // Validate ancestry IDs
    for (const ancestryId of data.selectedAncestries) {
        const validAncestry = ancestries.find(a => a.id === ancestryId);
        if (!validAncestry) {
            return json({ success: false, message: `Invalid ancestry ID: ${ancestryId}` }, { status: 400 });
        }
    }

    // 3. Validate selected traits
    if (!Array.isArray(data.selectedTraits)) {
        return json({ success: false, message: 'Selected traits data is invalid.' }, { status: 400 });
    }
    // Validate trait IDs and rules
    if (data.selectedTraits.length > 0) {
        // Validate trait IDs exist
        for (const traitId of data.selectedTraits) {
            const validTrait = traits.find(t => t.id === traitId);
            if (!validTrait) {
                return json({ success: false, message: `Invalid trait ID: ${traitId}` }, { status: 400 });
            }
        }

        // Get full trait objects
        const selectedTraitObjects: ITrait[] = data.selectedTraits.map((id: string) => traits.find(t => t.id === id)).filter((t: ITrait | undefined): t is ITrait => t !== undefined);

        // Validate ancestry points budget
        const totalCost = selectedTraitObjects.reduce((sum: number, trait: ITrait) => sum + trait.cost, 0);
        if (totalCost !== 5) {
            return json({ success: false, message: `Total ancestry points must equal 5, got: ${totalCost}` }, { status: 400 });
        }

        // Validate minor trait limit
        const minorTraits = selectedTraitObjects.filter((t: ITrait) => t.isMinor);
        if (minorTraits.length > 1) {
            return json({ success: false, message: `Maximum of 1 minor trait allowed, got: ${minorTraits.length}` }, { status: 400 });
        }

        // Validate negative trait point gain limit
        const pointsFromNegative = selectedTraitObjects
            .filter((t: ITrait) => t.cost < 0)
            .reduce((sum: number, t: ITrait) => sum + Math.abs(t.cost), 0);
        if (pointsFromNegative > 2) {
            return json({ success: false, message: `Maximum of +2 points from negative traits allowed, got: ${pointsFromNegative}` }, { status: 400 });
        }
    }

    // 4. Validate attribute values after trait bonuses (within -2 and +3)
    // Assuming data.attributes is an object like { attribute_might: 1, ... }
    if (!data.attributes || typeof data.attributes !== 'object') {
         return json({ success: false, message: 'Attribute data is missing or invalid.' }, { status: 400 });
    }
    // Corrected attribute name to match schema
    const attributeNames = ['attribute_might', 'attribute_agility', 'attribute_charisma', 'attribute_intelligence'];
    for (const attrName of attributeNames) {
        const attrValue = data.attributes[attrName];
        if (typeof attrValue !== 'number' || attrValue < -2 || attrValue > 3) {
            return json({ success: false, message: `Invalid value for attribute ${attrName}: ${attrValue}. Must be between -2 and +3.` }, { status: 400 });
        }
    }

    // 5. Validate total attribute points (should still be 12 from Stage A base -2)
    // This check assumes the attributes passed in `data.attributes` are the final values after reallocation.
    // The base value for each attribute is -2, so 4 attributes have a base total of -8.
    // The total points allocated in Stage A is 20 (from 12 points + 8 base).
    // If attributes were reallocated in the helper panel, the sum should still reflect the original points + base.
    // Sum of (attributeValue - baseValue) should equal total points allocated.
    const baseAttributeValue = -2;
    const expectedTotalPoints = 12; // Total points allocated in Stage A
    const actualTotalPoints = attributeNames.reduce((sum, attrName) => sum + (data.attributes[attrName] - baseAttributeValue), 0);

    if (actualTotalPoints !== expectedTotalPoints) {
         return json({ success: false, message: `Total attribute points mismatch. Expected ${expectedTotalPoints}, got ${actualTotalPoints}.` }, { status: 400 });
    }


    try {
        // Fetch the existing character to ensure it's in the correct state (Stage A complete)
        const character = await prisma.characterInProgress.findUnique({
            where: { id: data.characterId },
            select: {
                currentStep: true,
                // Select other fields if needed for validation against previous stage data
            },
        });

        if (!character) {
            return json({ success: false, message: 'Character not found.' }, { status: 404 });
        }

        // Optional: Validate that the character is currently at the correct step (Stage A complete)
        // if (character.currentStep !== 1) { // Check against integer 1 for Stage A
        //      return json({ success: false, message: `Character is not in the correct stage. Current stage: ${character.currentStep}` }, { status: 400 });
        // }


        // Update the CharacterInProgress table with Stage B data
        const updatedCharacter = await prisma.characterInProgress.update({
            where: { id: data.characterId },
            data: {
                ancestry1Id: data.selectedAncestries[0] || null, // Store first ancestry ID
                ancestry2Id: data.selectedAncestries[1] || null, // Store second ancestry ID (if exists)
                selectedTraitIds: JSON.stringify(data.selectedTraits), // Store trait IDs as JSON string
                // Update attributes if they were potentially modified in the helper panel
                attribute_might: data.attributes.attribute_might,
                attribute_agility: data.attributes.attribute_agility,
                attribute_charisma: data.attributes.attribute_charisma,
                attribute_intelligence: data.attributes.attribute_intelligence, // Corrected attribute name
                currentStep: 2, // Mark Stage B as complete (using integer 2)
            },
        });

        // Return success response
        return json({ success: true, character: updatedCharacter });

    } catch (error) {
        console.error('Error processing Stage B data:', error);
        // Return appropriate error response
        return json({ success: false, message: 'Failed to save Stage B data.' }, { status: 500 });
    }
};

// TODO: Consider implementing a GET handler to fetch existing Stage B data if needed for resuming progress
// export const GET: RequestHandler = async ({ url }) => {
//     const characterId = url.searchParams.get('characterId');
//     if (!characterId) {
//         return json({ success: false, message: 'Character ID is required.' }, { status: 400 });
//     }
//     try {
//         const character = await prisma.characterInProgress.findUnique({
//             where: { id: characterId },
//             select: {
//                 selectedAncestries: true,
//                 selectedTraits: true,
//                 // Select other relevant fields
//             },
//         });
//         if (!character) {
//             return json({ success: false, message: 'Character not found.' }, { status: 404 });
//         }
//         return json({ success: true, character });
//     } catch (error) {
//         console.error('Error fetching Stage B data:', error);
//         return json({ success: false, message: 'Failed to fetch Stage B data.' }, { status: 500 });
//     }
// };
````

## File: src/routes/api/character/progress/complete/+server.ts
````typescript
// src/routes/api/character/progress/complete/+server.ts

import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import { classesData } from '$lib/rulesdata/classes';
import { traitsData } from '$lib/rulesdata/traits';
import type { RequestHandler } from './$types';

const prisma = new PrismaClient();

function validateFeatureChoices(classId: string, selectedChoicesJson: string) {
  const classData = classesData.find(c => c.id === classId);
  if (!classData) throw new Error(`Invalid class ID: ${classId}`);

  const choices = JSON.parse(selectedChoicesJson || '{}');

  for (const requiredChoice of classData.featureChoicesLvl1 || []) {
    if (choices[requiredChoice.id] === undefined) {
      throw new Error(`Missing required choice for ${classData.name}: ${requiredChoice.prompt}`);
    }
    const validOptions = requiredChoice.options.map(o => o.value);
    if (!validOptions.includes(choices[requiredChoice.id])) {
      throw new Error(`Invalid selected option for ${requiredChoice.id} in class ${classData.name}`);
    }
  }
}

function validateAttributeCapsAfterTraits(attributes: any, selectedTraitIdsJson: string) {
  const selectedTraitIds = JSON.parse(selectedTraitIdsJson || '[]');
  const traits = selectedTraitIds.map((id: string) => traitsData.find(t => t.id === id)).filter((t: any) => t !== undefined);

  const finalAttributes = { ...attributes };

  for (const trait of traits) {
    const attrEffect = trait.effects?.find((e: any) => e.type === 'MODIFY_ATTRIBUTE');
    if (attrEffect && attrEffect.target && typeof attrEffect.value === 'number') {
      const attributeKey = `attribute_${attrEffect.target}`;
      if (attributeKey in finalAttributes) {
        finalAttributes[attributeKey] += attrEffect.value;
      }
    }
  }

  const ATTRIBUTE_MAX_L1 = 3;
  for (const [attrName, finalValue] of Object.entries(finalAttributes)) {
    if (finalValue > ATTRIBUTE_MAX_L1) {
      throw new Error(`Final attribute ${attrName.replace('attribute_', '')} exceeds Level 1 cap (+3) after applying traits.`);
    }
  }
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.finalName || typeof data.finalName !== 'string' || data.finalName.trim().length === 0) {
      return json({ error: 'Character name is required.' }, { status: 400 });
    }

    // Validate attributes and point buy (Stage A)
    const attributes = {
      attribute_might: data.attribute_might,
      attribute_agility: data.attribute_agility,
      attribute_charisma: data.attribute_charisma,
      attribute_intelligence: data.attribute_intelligence
    };
    const totalPoints = Object.values(attributes).reduce((sum, v) => sum + (typeof v === 'number' ? v : 0), 0);
    if (totalPoints !== 0) {
      return json({ error: 'Attribute points must sum to 0 (point buy).' }, { status: 400 });
    }

    // Validate ancestry selections (Stage B)
    if (!data.ancestry1Id) {
      return json({ error: 'At least one ancestry must be selected.' }, { status: 400 });
    }
    if (data.ancestry2Id && data.ancestry1Id === data.ancestry2Id) {
      return json({ error: 'Cannot select the same ancestry twice.' }, { status: 400 });
    }

    // Validate selected trait IDs (Stage B)
    try {
      const selectedTraitIds = JSON.parse(data.selectedTraitIds || '[]');
      if (!Array.isArray(selectedTraitIds)) throw new Error();
      // Additional trait validation can be added here
    } catch {
      return json({ error: 'Invalid selectedTraitIds format.' }, { status: 400 });
    }

    // Validate class selection (Stage C)
    if (!data.classId || !classesData.find(c => c.id === data.classId)) {
      return json({ error: 'A valid class must be selected.' }, { status: 400 });
    }

    // Validate feature choices (Stage C)
    try {
      validateFeatureChoices(data.classId, data.selectedFeatureChoices);
    } catch (err: any) {
      return json({ error: err.message }, { status: 400 });
    }

    // Cross-stage validation: attribute caps after traits
    try {
      validateAttributeCapsAfterTraits(attributes, data.selectedTraitIds);
    } catch (err: any) {
      return json({ error: err.message }, { status: 400 });
    }

    // Save to DB in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Upsert CharacterInProgress by id if provided, else create new
      let character;
      if (data.id) {
        character = await tx.characterInProgress.update({
          where: { id: data.id },
          data: {
            ...data,
            updatedAt: new Date()
          }
        });
      } else {
        character = await tx.characterInProgress.create({
          data: {
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
      }
      return character;
    });

    return json({ success: true, id: result.id });
  } catch (err: any) {
    return json({ error: err.message || 'Unknown error' }, { status: 500 });
  }
};
````

## File: src/routes/api/character/progress/stageB/+server.ts
````typescript
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';
import type { ITrait } from '$lib/rulesdata/types'; // Import ITrait type
import { ancestriesData as ancestries } from '$lib/rulesdata/ancestries';
import { traitsData as traits } from '$lib/rulesdata/traits';

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();

    // Assuming data contains:
    // characterId: string;
    // selectedAncestries: string[]; // Array of ancestry IDs (max 2)
    // selectedTraits: string[]; // Array of trait IDs
    // attributes: { [key: string]: number }; // Attributes after potential reallocation

    // 1. Validate characterId exists and corresponds to an in-progress character
    if (!data.characterId) {
        return json({ success: false, message: 'Character ID is required.' }, { status: 400 });
    }

    // 2. Validate selected ancestries (max 2)
    if (!Array.isArray(data.selectedAncestries) || data.selectedAncestries.length === 0 || data.selectedAncestries.length > 2) {
         return json({ success: false, message: 'You must select between 1 and 2 ancestries.' }, { status: 400 });
    }
    // Validate ancestry IDs
    for (const ancestryId of data.selectedAncestries) {
        const validAncestry = ancestries.find(a => a.id === ancestryId);
        if (!validAncestry) {
            return json({ success: false, message: `Invalid ancestry ID: ${ancestryId}` }, { status: 400 });
        }
    }

    // 3. Validate selected traits
    if (!Array.isArray(data.selectedTraits)) {
        return json({ success: false, message: 'Selected traits data is invalid.' }, { status: 400 });
    }
    // Validate trait IDs and rules
    if (data.selectedTraits.length > 0) {
        // Validate trait IDs exist
        for (const traitId of data.selectedTraits) {
            const validTrait = traits.find(t => t.id === traitId);
            if (!validTrait) {
                return json({ success: false, message: `Invalid trait ID: ${traitId}` }, { status: 400 });
            }
        }

        // Get full trait objects
        const selectedTraitObjects: ITrait[] = data.selectedTraits.map((id: string) => traits.find(t => t.id === id)).filter((t: ITrait | undefined): t is ITrait => t !== undefined);

        // Validate ancestry points budget
        const totalCost = selectedTraitObjects.reduce((sum: number, trait: ITrait) => sum + trait.cost, 0);
        if (totalCost !== 5) {
            return json({ success: false, message: `Total ancestry points must equal 5, got: ${totalCost}` }, { status: 400 });
        }

        // Validate minor trait limit
        const minorTraits = selectedTraitObjects.filter((t: ITrait) => t.isMinor);
        if (minorTraits.length > 1) {
            return json({ success: false, message: `Maximum of 1 minor trait allowed, got: ${minorTraits.length}` }, { status: 400 });
        }

        // Validate negative trait point gain limit
        const pointsFromNegative = selectedTraitObjects
            .filter((t: ITrait) => t.cost < 0)
            .reduce((sum: number, t: ITrait) => sum + Math.abs(t.cost), 0);
        if (pointsFromNegative > 2) {
            return json({ success: false, message: `Maximum of +2 points from negative traits allowed, got: ${pointsFromNegative}` }, { status: 400 });
        }
    }

    // 4. Validate attribute values after trait bonuses (within -2 and +3)
    // Assuming data.attributes is an object like { attribute_might: 1, ... }
    if (!data.attributes || typeof data.attributes !== 'object') {
         return json({ success: false, message: 'Attribute data is missing or invalid.' }, { status: 400 });
    }
    // Corrected attribute name to match schema
    const attributeNames = ['attribute_might', 'attribute_agility', 'attribute_charisma', 'attribute_intelligence'];
    for (const attrName of attributeNames) {
        const attrValue = data.attributes[attrName];
        if (typeof attrValue !== 'number' || attrValue < -2 || attrValue > 3) {
            return json({ success: false, message: `Invalid value for attribute ${attrName}: ${attrValue}. Must be between -2 and +3.` }, { status: 400 });
        }
    }

    // 5. Validate total attribute points (should still be 12 from Stage A base -2)
    // This check assumes the attributes passed in `data.attributes` are the final values after reallocation.
    // The base value for each attribute is -2, so 4 attributes have a base total of -8.
    // The total points allocated in Stage A is 20 (from 12 points + 8 base).
    // If attributes were reallocated in the helper panel, the sum should still reflect the original points + base.
    // Sum of (attributeValue - baseValue) should equal total points allocated.
    const baseAttributeValue = -2;
    const expectedTotalPoints = 12; // Total points allocated in Stage A
    const actualTotalPoints = attributeNames.reduce((sum, attrName) => sum + (data.attributes[attrName] - baseAttributeValue), 0);

    if (actualTotalPoints !== expectedTotalPoints) {
         return json({ success: false, message: `Total attribute points mismatch. Expected ${expectedTotalPoints}, got ${actualTotalPoints}.` }, { status: 400 });
    }


    try {
        // Fetch the existing character to ensure it's in the correct state (Stage A complete)
        const character = await prisma.characterInProgress.findUnique({
            where: { id: data.characterId },
            select: {
                currentStep: true,
                // Select other fields if needed for validation against previous stage data
            },
        });

        if (!character) {
            return json({ success: false, message: 'Character not found.' }, { status: 404 });
        }

        // Optional: Validate that the character is currently at the correct step (Stage A complete)
        // if (character.currentStep !== 1) { // Check against integer 1 for Stage A
        //      return json({ success: false, message: `Character is not in the correct stage. Current stage: ${character.currentStep}` }, { status: 400 });
        // }


        // Update the CharacterInProgress table with Stage B data
        const updatedCharacter = await prisma.characterInProgress.update({
            where: { id: data.characterId },
            data: {
                ancestry1Id: data.selectedAncestries[0] || null, // Store first ancestry ID
                ancestry2Id: data.selectedAncestries[1] || null, // Store second ancestry ID (if exists)
                selectedTraitIds: JSON.stringify(data.selectedTraits), // Store trait IDs as JSON string
                // Update attributes if they were potentially modified in the helper panel
                attribute_might: data.attributes.attribute_might,
                attribute_agility: data.attributes.attribute_agility,
                attribute_charisma: data.attributes.attribute_charisma,
                attribute_intelligence: data.attributes.attribute_intelligence, // Corrected attribute name
                currentStep: 2, // Mark Stage B as complete (using integer 2)
            },
        });

        // Return success response
        return json({ success: true, character: updatedCharacter });

    } catch (error) {
        console.error('Error processing Stage B data:', error);
        // Return appropriate error response
        return json({ success: false, message: 'Failed to save Stage B data.' }, { status: 500 });
    }
};

// TODO: Consider implementing a GET handler to fetch existing Stage B data if needed for resuming progress
// export const GET: RequestHandler = async ({ url }) => {
//     const characterId = url.searchParams.get('characterId');
//     if (!characterId) {
//         return json({ success: false, message: 'Character ID is required.' }, { status: 400 });
//     }
//     try {
//         const character = await prisma.characterInProgress.findUnique({
//             where: { id: characterId },
//             select: {
//                 selectedAncestries: true,
//                 selectedTraits: true,
//                 // Select other relevant fields
//             },
//         });
//         if (!character) {
//             return json({ success: false, message: 'Character not found.' }, { status: 404 });
//         }
//         return json({ success: true, character });
//     } catch (error) {
//         console.error('Error fetching Stage B data:', error);
//         return json({ success: false, message: 'Failed to fetch Stage B data.' }, { status: 500 });
//     }
// };
````

## File: src/routes/character-creator/_backup_merge_stages_20250621/stage-a+page.svelte
````
<script lang="ts">
  import { writable, derived } from 'svelte/store';
  import { goto } from '$app/navigation'; // Import goto for navigation
  import { characterInProgressStore, primeModifier, saveMasteries, gritPoints, jumpDistance, provisionalSkillPoints, getModifier, L1_COMBAT_MASTERY, combatMastery, maxHP, areaDefense, precisionDefense, initiative } from '$lib/stores/characterInProgressStore';
  import { attributesData } from '$lib/rulesdata/attributes';
  // No Melt UI imports needed for standard HTML elements

  // Local state for character name
  let characterName: string = '';

  // Constants
  const POINT_BUY_BUDGET = 12;
  const ATTRIBUTE_MIN = -2;
  const ATTRIBUTE_MAX_L1 = 3; // Level 1 cap is +3

  // Reactive calculations based on the store
  $: currentAttributes = {
    might: $characterInProgressStore.attribute_might,
    agility: $characterInProgressStore.attribute_agility,
    charisma: $characterInProgressStore.attribute_charisma,
    intelligence: $characterInProgressStore.attribute_intelligence,
  };

  $: pointsSpent = (currentAttributes.might - ATTRIBUTE_MIN) +
                   (currentAttributes.agility - ATTRIBUTE_MIN) +
                   (currentAttributes.charisma - ATTRIBUTE_MIN) +
                   (currentAttributes.intelligence - ATTRIBUTE_MIN); // Corrected typo

  $: pointsRemaining = POINT_BUY_BUDGET - pointsSpent;

  // Local state for Prime Modifier tie-breaking UI
  let primeModifierAttributeUserChoice: string | null = null;

  // Determine if a tie exists for the highest attribute
  $: highestAttributeValue = Math.max(...Object.values(currentAttributes));
  $: tiedAttributes = Object.entries(currentAttributes)
      .filter(([name, value]) => value === highestAttributeValue)
      .map(([name, value]) => name); // Get names of tied attributes

  // Function to handle attribute changes
  function handleAttributeChange(attributeId: keyof typeof currentAttributes, delta: number) {
    const currentValue = currentAttributes[attributeId];
    const newValue = currentValue + delta;

    // Prevent going below min or above max
    if (newValue < ATTRIBUTE_MIN || newValue > ATTRIBUTE_MAX_L1) {
      return;
    }

    // Prevent spending more points than budget (only for increments)
    if (delta > 0 && pointsRemaining <= 0) {
       // Allow decrementing even if pointsRemaining is negative
       if (pointsRemaining === 0) return; // Prevent increment if exactly 0 points left
    }

    // Update the store
    characterInProgressStore.update(store => {
      // Map attributeId string ('might') to store key ('attribute_might')
      const storeKey = `attribute_${attributeId}` as keyof typeof store;
      if (storeKey in store) {
         (store[storeKey] as number) = newValue; // Type assertion needed for update
      }
      // Recalculate pointsSpent in the store? Or rely on derived?
      // Let's rely on derived for display, but maybe store pointsSpent for backend validation?
      // The schema has pointsSpent, so let's update it here.
      // This calculation should match the reactive $: pointsSpent above.
      store.pointsSpent = (store.attribute_might - ATTRIBUTE_MIN) +
                          (store.attribute_agility - ATTRIBUTE_MIN) +
                          (store.attribute_charisma - ATTRIBUTE_MIN) +
                          (store.attribute_intelligence - ATTRIBUTE_MIN);

      return store;
    });
  }

  // Function to handle submitting Stage A data
  async function handleSubmitStageA() {
    // Frontend validation
    if (!characterName.trim()) {
        alert('Please enter a character name.');
        return;
    }
    if (pointsRemaining !== 0) {
      alert(`You must allocate exactly ${POINT_BUY_BUDGET} points. Points remaining: ${pointsRemaining}`);
      return;
    }
    // Attribute cap validation is handled by handleAttributeChange

    // Prepare data to send to backend
    const stageAData = {
      characterId: $characterInProgressStore.id, // Pass the current ID (might be null for new)
      finalName: characterName.trim(), // Include character name
      attribute_might: $characterInProgressStore.attribute_might,
      attribute_agility: $characterInProgressStore.attribute_agility,
      attribute_charisma: $characterInProgressStore.attribute_charisma,
      attribute_intelligence: $characterInProgressStore.attribute_intelligence,
      // pointsSpent is calculated by backend for authoritative validation
    };

    try {
      // Use SvelteKit's fetch for API calls
      const response = await fetch('/api/character/progress/stageA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stageAData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Backend validation failed:', error);
        alert(`Failed to save attributes: ${error.message || response.statusText}`);
        return;
      }

      const result = await response.json();
      console.log('Stage A data saved successfully:', result);

      // Update store with potentially new character ID if it was created
      if (result.characterId && $characterInProgressStore.id === null) {
         characterInProgressStore.update(store => ({ ...store, id: result.characterId }));
         // TODO: Also save characterId to localStorage for resume functionality (TD-002 related)
      }

      // Navigate to the next stage (Stage B)
      goto('/character-creator/stage-b');

    } catch (error) {
      console.error('Error submitting Stage A data:', error);
      alert('An unexpected error occurred while saving attributes.');
    }
  }

  // Reactive statement to update user choice if tie is resolved or changes
  $: {
      if (tiedAttributes.length === 1) {
          // If tie is resolved to a single attribute, set user choice to that attribute
          primeModifierAttributeUserChoice = tiedAttributes[0];
      } else if (tiedAttributes.length > 1) {
          // If there's a tie, ensure user choice is one of the tied attributes
          if (primeModifierAttributeUserChoice === null || !tiedAttributes.includes(primeModifierAttributeUserChoice)) {
              // If no choice made yet, or previous choice is no longer tied, clear it
              primeModifierAttributeUserChoice = null; // Force user to choose
          }
      } else {
          // Should not happen with 4 attributes starting at -2, but handle defensively
          primeModifierAttributeUserChoice = null;
      }
  }

  // Derived store for the *displayed* Prime Modifier attribute, considering user choice on tie
  $: displayedPrimeModifierAttribute = tiedAttributes.length > 1 && primeModifierAttributeUserChoice !== null
      ? primeModifierAttributeUserChoice
      : $primeModifier.attribute; // Use store's default if no tie or no user choice yet

  // Derived store for the *displayed* Prime Modifier value, based on the displayed attribute
  $: displayedPrimeModifierValue = displayedPrimeModifierAttribute
      ? currentAttributes[displayedPrimeModifierAttribute as keyof typeof currentAttributes] // Use currentAttributes for value
      : $primeModifier.value; // Fallback to store's derived value if needed

</script>

<!-- UI Structure -->
<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary">
  <h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Step 1: Core Attributes & Foundational Stats</h2>

  <!-- Character Name Input -->
  <div class="mb-6">
    <label for="characterName" class="block text-lg font-medium mb-2">Character Name</label>
    <input
      type="text"
      id="characterName"
      bind:value={characterName}
      class="w-full p-2 border rounded bg-dark-bg-primary text-light-text-primary border-dark-border"
      placeholder="Enter your character's name"
    />
  </div>

  <!-- Point Buy Allocation Section -->
  <div class="mb-6">
    <h3 class="text-lg font-medium mb-2">Allocate Attribute Points (Point Buy)</h3>
    <p class="mb-4 text-light-text-secondary" class:text-magenta-error={pointsRemaining < 0}>
      Budget: {pointsRemaining} / {POINT_BUY_BUDGET} Points Remaining
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {#each attributesData as attribute (attribute.id)}
        <div class="p-4 bg-dark-bg-primary rounded-md shadow-sm relative flex flex-col justify-between"
             class:border-2={displayedPrimeModifierAttribute === attribute.name}
             class:border-yellow-accent={displayedPrimeModifierAttribute === attribute.name}>
          <!-- Top Section -->
          <div class="flex justify-between items-center mb-1">
            <!-- Using standard label -->
            <label for={`attribute-${attribute.id}`} class="text-xl font-medium text-light-text-primary">
              {attribute.name}
            </label>
            <!-- Save Mastery Display -->
            <span class="text-blue-info font-medium">
              Save: {($saveMasteries[attribute.id as keyof typeof $saveMasteries] >= 0 ? '+' : '') + $saveMasteries[attribute.id as keyof typeof $saveMasteries]}
              <!-- TODO: Add Tooltip for Save Mastery calculation -->
            </span>
          </div>
          <p class="text-sm text-light-text-secondary mb-2">{attribute.description}</p>

          <!-- Bottom Section - Input & Derived Stats -->
          <div class="flex items-center gap-2 mb-2">
            <!-- Using standard button -->
            <button class="p-2 h-8 w-8 flex items-center justify-center bg-magenta-error/70 hover:bg-magenta-error rounded-md text-lg"
                         on:click={() => handleAttributeChange(attribute.id as keyof typeof currentAttributes, -1)}
                         disabled={currentAttributes[attribute.id as keyof typeof currentAttributes] <= ATTRIBUTE_MIN}>-</button>
            <!-- Using standard input -->
            <input id={`attribute-${attribute.id}`}
                        type="number"
                        readonly
                        value={currentAttributes[attribute.id as keyof typeof currentAttributes]}
                        class="w-12 text-center text-xl font-semibold bg-dark-bg-secondary rounded-md p-1 h-8" />
            <!-- Using standard button -->
            <button class="p-2 h-8 w-8 flex items-center justify-center bg-purple-primary/70 hover:bg-purple-primary rounded-md text-lg"
                         on:click={() => handleAttributeChange(attribute.id as keyof typeof currentAttributes, 1)}
                         disabled={currentAttributes[attribute.id as keyof typeof currentAttributes] >= ATTRIBUTE_MAX_L1 || pointsRemaining <= 0}>+</button>
          </div>
          <!-- Integrated Derived Stats Display (Conditional) -->
          {#if attribute.id === 'charisma'}
            <span class="text-xs text-light-text-secondary">
              Grit: {$gritPoints}
              <!-- TODO: Add Tooltip -->
            </span>
          {/if}
          {#if attribute.id === 'agility'}
            <span class="text-xs text-light-text-secondary">
              Jump: {$jumpDistance}
              <!-- TODO: Add Tooltip -->
            </span>
          {/if}
          {#if attribute.id === 'intelligence'}
            <span class="text-xs text-light-text-secondary">
              Skill Pts (Base): {$provisionalSkillPoints}
              <!-- TODO: Add Tooltip -->
            </span>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Prime Modifier Tie-Breaker (Conditional UI) -->
    {#if tiedAttributes.length > 1}
      <div class="my-4">
        <p class="mb-2 text-yellow-accent">Multiple attributes are tied for highest. Please select your Prime Modifier:</p>
        <!-- Using standard radio group -->
        <div class="flex gap-4">
          {#each tiedAttributes as attrId}
            <label>
              <input type="radio" name="primeModifier" value={attrId} bind:group={primeModifierAttributeUserChoice} class="mr-1" />
              {attributesData.find(a => a.id === attrId)?.name || attrId}
            </label>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <!-- Key Calculated Stats Display -->
  <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-4 bg-purple-primary/20 rounded-lg text-center">
      <span class="text-lg text-light-text-primary">Level: </span>
      <span class="text-2xl font-bold text-yellow-accent">{$characterInProgressStore.level}</span>
      <!-- TODO: Add Tooltip -->
    </div>
    <div class="p-4 bg-purple-primary/20 rounded-lg text-center">
      <span class="text-lg text-light-text-primary">Combat Mastery (CM): </span>
      <span class="text-2xl font-bold text-yellow-accent">{$combatMastery}</span>
      <!-- TODO: Add Tooltip -->
    </div>
    <div class="p-4 bg-purple-primary/20 rounded-lg text-center">
      <span class="text-lg text-light-text-primary">Prime Modifier: </span>
      <span class="text-2xl font-bold text-yellow-accent">
        {displayedPrimeModifierAttribute ? attributesData.find(a => a.id === displayedPrimeModifierAttribute.toLowerCase())?.name || displayedPrimeModifierAttribute : 'N/A'} ({displayedPrimeModifierValue})
      </span>
      <!-- TODO: Add Tooltip -->
    </div>
    <div class="p-4 bg-dark-bg-primary rounded-lg text-center">
      <span class="text-md text-light-text-primary">Base Skill Points (5 + Int Mod): </span>
      <span class="text-xl font-semibold text-blue-info">{$provisionalSkillPoints}</span>
      <!-- TODO: Add Tooltip -->
    </div>
     <!-- TODO: Add Grit Points and Jump Distance cards here if desired, or keep them integrated -->
  </div>

  <!-- Provisional Formulas Display -->
  <div class="mt-6">
    <h3 class="text-lg font-medium mb-3">Provisional Base Stats (Finalized after Class & Equipment)</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary">
      <!-- Display calculated stats with transparent formulas -->
      <p>HP = Base(8) + Might({$characterInProgressStore.attribute_might}) + Ancestry(0) = {$maxHP}</p>
      <p>SP = Class SP</p>
      <p>MP = Class MP</p>
      <p>PD = Base(8) + CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) + Intelligence({$characterInProgressStore.attribute_intelligence}) + Bonuses(0) = {$precisionDefense}</p>
      <p>AD = Base(8) + CM({$combatMastery}) + Might({$characterInProgressStore.attribute_might}) + Charisma({$characterInProgressStore.attribute_charisma}) + Bonuses(0) = {$areaDefense}</p>
      <p>Initiative = CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) = {$initiative}</p>
      <p>Grit Points = Base(2) + Charisma({$characterInProgressStore.attribute_charisma}) = {$gritPoints}</p>
      <p>Jump Distance = Agility({$characterInProgressStore.attribute_agility}) (min 1) = {$jumpDistance}</p>
      <p>Base Skill Points = Base(5) + Intelligence({$characterInProgressStore.attribute_intelligence}) = {$provisionalSkillPoints}</p>
    </div>
  </div>

  <!-- Navigation Button -->
  <div class="mt-8 text-right">
      <!-- Using standard button -->
      <button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded"
                   on:click={handleSubmitStageA}
                   disabled={pointsRemaining !== 0}>
          Next Step
      </button>
  </div>
</div>
````

## File: src/routes/character-creator/_backup_merge_stages_20250621/stage-b+page.svelte
````
<script lang="ts">
    import { characterInProgressStore, primeModifier } from '$lib/stores/characterInProgressStore';
    import type { IAncestry, ITrait } from '$lib/rulesdata/types';
    import { ancestriesData } from '$lib/rulesdata/ancestries';
    import { traitsData as traits } from '$lib/rulesdata/traits'; // Assuming traits are in a separate file

    const ancestries = ancestriesData; // Assign to a local variable for consistency

    // II. B. Internal State (Reactive Svelte Variables):
    let selectedAncestry1_ID: string | null = null;
    let selectedAncestry2_ID: string | null = null;
    let availableTraitsForSelection: ITrait[] = []; // Reactive/Derived Array
    let currentSelectedTraits: ITrait[] = []; // Array of Trait Objects
    const ancestryPointsBudget: number = 5;
    // Removed pointsFromNegativeTraits as it's no longer needed for total budget calculation
    $: totalAncestryPointsAvailable = ancestryPointsBudget; // Always 5
    $: ancestryPointsSpent = currentSelectedTraits.reduce((sum, trait) => sum + trait.cost, 0); // Reactive/Derived Number
    $: ancestryPointsRemaining = totalAncestryPointsAvailable - ancestryPointsSpent; // Reactive/Derived Number

    let showOverflowHelperPanel: boolean = false; // Boolean (default: false)
    let overflowTrait: ITrait | null = null; // Object | null (the trait causing the overflow)
    let overflowAttributeName: 'attribute_might' | 'attribute_agility' | 'attribute_charisma' | 'attribute_intelligence' | null = null; // String | null (e.g., 'attribute_might')
    let overflowAmount: number = 0; // Number (how many points attribute would go over cap)
    // Use a more specific type for temp attributes, or copy only relevant ones
    let tempAttributesForReallocation: {
        attribute_might: number;
        attribute_agility: number;
        attribute_charisma: number;
        attribute_intelligence: number;
    } = { attribute_might: -2, attribute_agility: -2, attribute_charisma: -2, attribute_intelligence: -2 }; // Initialize with base values
    let pointsFreedInPanel: number = 0; // Number (tracks how many points user has reduced in panel)

    // II. D. Functions & Logic:
    function getAncestryName(id: string): string {
        const ancestry = ancestries.find(a => a.id === id);
        return ancestry ? ancestry.name : 'Unknown Ancestry';
    }

    // Corrected parameter type to match the keys of tempAttributesForReallocation
    function reduceAttributeInPanel(attributeName: keyof typeof tempAttributesForReallocation): void {
        // Check if we can reduce this attribute and haven't reached our goal yet
        if (tempAttributesForReallocation[attributeName] > -2 && pointsFreedInPanel < overflowAmount) {
            // Don't reduce the attribute that's being increased by the trait
            if (attributeName !== overflowAttributeName) {
                tempAttributesForReallocation[attributeName]--;
                pointsFreedInPanel++;
            }
        }
    }

    // Function to check if selecting a trait would cause an attribute overflow
    function checkAttributeOverflow(trait: ITrait): { willOverflow: boolean; attributeName: 'attribute_might' | 'attribute_agility' | 'attribute_charisma' | 'attribute_intelligence' | null; overflowAmount: number } {
        const attributeEffect = trait.effects?.find(effect => effect.type === 'MODIFY_ATTRIBUTE');

        if (attributeEffect && attributeEffect.target && typeof attributeEffect.value === 'number' && attributeEffect.value > 0) {
            const storeAttributeName = `attribute_${attributeEffect.target}` as 'attribute_might' | 'attribute_agility' | 'attribute_charisma' | 'attribute_intelligence';

            if (['attribute_might', 'attribute_agility', 'attribute_charisma', 'attribute_intelligence'].includes(storeAttributeName)) {
                const currentAttributeValue = $characterInProgressStore?.[storeAttributeName] ?? -2;
                const potentialNewValue = currentAttributeValue + attributeEffect.value;
                const level1Cap = 3;

                if (potentialNewValue > level1Cap) {
                    return {
                        willOverflow: true,
                        attributeName: storeAttributeName,
                        overflowAmount: potentialNewValue - level1Cap
                    };
                }
            } else {
                 console.warn(`Trait ${trait.id} effect targets unknown or non-primary attribute: ${attributeEffect.target}`);
            }
        }
        return { willOverflow: false, attributeName: null, overflowAmount: 0 };
    }


    function handleTraitSelection(trait: ITrait): void {
        const traitIndex = currentSelectedTraits.findIndex(t => t.id === trait.id);

        if (traitIndex > -1) {
            // Trait is currently selected, so deselect it
            currentSelectedTraits = currentSelectedTraits.filter(t => t.id !== trait.id);
            // Reactive variables will handle points recalculation
        } else {
            // Trait is not selected, try to select it

            // Check if adding this trait violates point budget
            if (trait.cost > 0 && ancestryPointsRemaining < trait.cost) {
                // Add UI feedback here (will implement below)
                console.warn(`Cannot select trait ${trait.name}: Not enough Ancestry Points.`);
                return; // Prevent selection
            }

            // Check for Minor Trait limit (max 1)
            const minorTraitsSelected = currentSelectedTraits.filter(t => t.isMinor).length;
            if (trait.isMinor && minorTraitsSelected >= 1) {
                // Add UI feedback here (will implement below)
                console.warn("You can only select one Minor Trait.");
                return; // Prevent selection
            }

            // Check for Negative Trait point gain limit (max +2)
            if (trait.cost < 0) {
                const potentialPointsFromNegative = currentSelectedTraits
                    .filter(t => t.cost < 0)
                    .reduce((sum, t) => sum + Math.abs(t.cost), 0) + Math.abs(trait.cost);

                if (potentialPointsFromNegative > 2) {
                    // Add UI feedback here (will implement below)
                    console.warn("You can only gain a maximum of +2 points from Negative Traits.");
                    return; // Prevent selection
                }
            }

            // Check for attribute overflow
            const overflowCheck = checkAttributeOverflow(trait);
            if (overflowCheck.willOverflow) {
                // Set up overflow panel
                overflowTrait = trait;
                overflowAttributeName = overflowCheck.attributeName;
                overflowAmount = overflowCheck.overflowAmount;

                // Copy attribute values for reallocation
                tempAttributesForReallocation = {
                    attribute_might: $characterInProgressStore?.attribute_might ?? -2,
                    attribute_agility: $characterInProgressStore?.attribute_agility ?? -2,
                    attribute_charisma: $characterInProgressStore?.attribute_charisma ?? -2,
                    attribute_intelligence: $characterInProgressStore?.attribute_intelligence ?? -2,
                };

                pointsFreedInPanel = 0;
                showOverflowHelperPanel = true;
                return;
            }

            // If all checks pass, add the trait
            currentSelectedTraits = [...currentSelectedTraits, trait];
        }
    }

    function openOverflowHelperPanel(trait: ITrait): void {
        // This function is now primarily called by handleTraitSelection
        // Its logic has been moved into checkAttributeOverflow and handleTraitSelection
        // We keep it as a placeholder or potentially for direct calls if needed elsewhere
        console.warn("openOverflowHelperPanel called directly - logic is now in handleTraitSelection and checkAttributeOverflow");
        // The state variables (overflowTrait, etc.) are set in handleTraitSelection before calling this.
        // showOverflowHelperPanel = true; // This is set in handleTraitSelection
    }

    function closeOverflowHelperPanel(): void {
        // TODO: Implement logic to close panel
        showOverflowHelperPanel = false;
        overflowTrait = null; // Clear overflow state
        overflowAttributeName = null;
        overflowAmount = 0;
        pointsFreedInPanel = 0;
        // TODO: Decide if tempAttributesForReallocation should be reset or kept for review
    }

    function confirmAttributeReallocationAndSelectTrait(): void {
        if (overflowTrait && overflowAttributeName && pointsFreedInPanel === overflowAmount) {
            // Apply the attribute changes to the store
            characterInProgressStore.update(store => {
                return {
                    ...store,
                    attribute_might: tempAttributesForReallocation.attribute_might,
                    attribute_agility: tempAttributesForReallocation.attribute_agility,
                    attribute_charisma: tempAttributesForReallocation.attribute_charisma,
                    attribute_intelligence: tempAttributesForReallocation.attribute_intelligence
                };
            });

            // Add the overflow trait to selected traits
            currentSelectedTraits = [...currentSelectedTraits, overflowTrait];

            // Close panel and reset state
            closeOverflowHelperPanel();
        } else {
            console.warn("Attempted to confirm reallocation without resolving overflow.");
        }
    }

    interface TraitsByAncestry {
        ancestry: IAncestry;
        traits: ITrait[];
    }
    let availableTraitsByAncestry: TraitsByAncestry[] = []; // Reactive/Derived Array

    $: {
        // Calculate availableTraitsByAncestry based on selectedAncestry1_ID and selectedAncestry2_ID
        availableTraitsByAncestry = [];

        // Ensure ancestries data is loaded before processing
        if (ancestries && (selectedAncestry1_ID !== null || selectedAncestry2_ID !== null)) {
            const selectedAncestry1 = ancestries.find(a => a.id === selectedAncestry1_ID);
            const selectedAncestry2 = ancestries.find(a => a.id === selectedAncestry2_ID);

            if (selectedAncestry1) {
                const traits1 = [...(selectedAncestry1.defaultTraitIds || []), ...(selectedAncestry1.expandedTraitIds || [])]
                    .map(traitId => traits.find(t => t.id === traitId))
                    .filter((t): t is ITrait => t !== undefined);
                availableTraitsByAncestry = [...availableTraitsByAncestry, { ancestry: selectedAncestry1, traits: traits1 }];
            }

            // Add second ancestry traits only if different from the first
            if (selectedAncestry2 && selectedAncestry2_ID !== selectedAncestry1_ID) {
                 const traits2 = [...(selectedAncestry2.defaultTraitIds || []), ...(selectedAncestry2.expandedTraitIds || [])]
                    .map(traitId => traits.find(t => t.id === traitId))
                    .filter((t): t is ITrait => t !== undefined);
                availableTraitsByAncestry = [...availableTraitsByAncestry, { ancestry: selectedAncestry2, traits: traits2 }];
            }
        }

        // The calculation for pointsFromNegativeTraits is now done locally within handleTraitSelection
        // The enforcement of the max +2 point gain from Negative Traits is also handled there.

        // TODO: Implement logic to enforce other trait rules (max 2 ancestries, 1 Minor Trait, max +2 points from Negative Traits, total 5 points used)
        // This will likely involve checks within handleTraitSelection and potentially disabling UI elements
    }

    // TODO: Implement UI Feedback for Trait Rules (disable selections, messages)

</script>

<!-- 1. Main Container & Stage Title: -->
<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary">
    <h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Step 2: Ancestry Choices</h2>

    <!-- 2. Ancestry Selection Section: -->
    <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">Choose Your Ancestry (Up to 2)</h3>
        <!-- TODO: Implement Ancestry Selection using Melt UI Select or custom SelectionCards -->
        <!-- Using standard select for now due to Melt UI SSR issues -->
        <div class="flex gap-4">
            <div class="flex-1">
                <!-- Fixed A11y warning by associating label with input -->
                <label class="block text-sm font-medium mb-1" for="ancestry1">Ancestry 1</label>
                <select id="ancestry1" bind:value={selectedAncestry1_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
                    <option value={null}>Select an ancestry</option>
                    {#if ancestries}
                        {#each ancestries as ancestry}
                            <option value={ancestry.id}>{ancestry.name}</option>
                        {/each}
                    {/if}
                </select>
            </div>
            <div class="flex-1">
                <!-- Fixed A11y warning by associating label with input -->
                <label class="block text-sm font-medium mb-1" for="ancestry2">Ancestry 2</label>
                 <select id="ancestry2" bind:value={selectedAncestry2_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
                    <option value={null}>None</option>
                    {#if ancestries}
                        {#each ancestries as ancestry}
                            <option value={ancestry.id}>{ancestry.name}</option>
                        {/each}
                    {/if}
                </select>
    </div>
</div>

<style lang="postcss">
    /* Apply dark background to select elements and options */
    select.bg-dark-bg-secondary {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */
        @apply text-purple-300; /* Apply text color using @apply */
    }

    /* Attempt to style dropdown options - browser support varies */
    select.bg-dark-bg-secondary option {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */
        @apply text-light-text-primary; /* Use light text for options */
    }
</style>
    </div>

    {#if selectedAncestry1_ID}
        <!-- 3. Ancestry Points & Trait Allocation Section: -->
        <div class="mb-6">
            <h3 class="text-lg font-medium mb-2">Ancestry Traits</h3>
            <p class="mb-4 text-light-text-secondary">Ancestry Points: <span class="font-bold">{ancestryPointsRemaining}</span> / {totalAncestryPointsAvailable} Remaining</p>

            <!-- Conditional Trait Listing for selected ancestries -->
            {#if availableTraitsByAncestry.length > 0}
                {#each availableTraitsByAncestry as ancestryGroup}
                    <h4 class="text-lg font-semibold mt-4 mb-2">{ancestryGroup.ancestry.name} Traits</h4>
                    {#if ancestryGroup.traits.length > 0}
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {#each ancestryGroup.traits as trait}
                                <li class="flex items-center justify-between p-3 my-1 rounded border border-dark-border dark:hover:bg-dark-bg-primary transition-colors duration-200">
                                    <!-- Add disabled state based on rules -->
                                    <input type="checkbox" on:change={() => handleTraitSelection(trait)} checked={currentSelectedTraits.some(t => t.id === trait.id)} disabled={
                                        // Disable if not enough points and not a negative trait
                                        (trait.cost > 0 && ancestryPointsRemaining < trait.cost && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                                        // Disable if Minor Trait limit reached and this is a Minor Trait
                                        (trait.isMinor && currentSelectedTraits.filter(t => t.isMinor).length >= 1 && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                                        // Disable if Negative Trait point gain limit reached and this is a Negative Trait
                                        (trait.cost < 0 && currentSelectedTraits.filter(t => t.cost < 0).reduce((sum, t) => sum + Math.abs(t.cost), 0) >= 2 && !currentSelectedTraits.some(t => t.id === trait.id))
                                    } class="form-checkbox h-5 w-5 text-purple-primary rounded focus:ring-purple-primary dark:bg-dark-bg-secondary dark:border-dark-border" />
                                    <span class="font-medium flex-1 ml-3 {currentSelectedTraits.some(t => t.id === trait.id) ? 'text-yellow-accent' : ''}">
                                        {trait.name} (Cost: {trait.cost})
                                    </span>
                                    <!-- TODO: Add Tooltip for description -->
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p>No traits available for {ancestryGroup.ancestry.name}.</p>
                    {/if}
                {/each}
            {:else}
                <p>Select one or two ancestries to see available traits.</p>
            {/if}
        </div>

        <!-- 4. Chosen Traits Summary: -->
        <div class="mt-4 p-4 bg-dark-bg-primary rounded-md shadow-sm mb-6">
        <h3 class="text-lg font-medium mb-2">Selected Traits</h3>
        {#each currentSelectedTraits as trait}
            <p class="text-light-text-primary">{trait.name} (Cost: {trait.cost}){trait.sourceAncestryId && ancestries.find(a => a.id === trait.sourceAncestryId) ? ' from ' + getAncestryName(trait.sourceAncestryId) : ''}</p>
        {/each}
    </div>
    {/if}

    <!-- 5. Read-Only Display of Updated Stage A Stats: -->
    <div class="mb-6 p-4 bg-dark-bg-primary rounded-md shadow-sm">
        <h3 class="text-lg font-medium mb-2">Current Core Stats (Reflecting Ancestry Choices)</h3>
        <!-- Display stats from $characterInProgressStore.attributesFromStageA and derived stats -->
        <div class="grid grid-cols-2 gap-4">
            <p>Might: <span class="font-bold">{$characterInProgressStore.attribute_might}</span></p>
            <p>Agility: <span class="font-bold">{$characterInProgressStore.attribute_agility}</span></p>
            <p>Charisma: <span class="font-bold">{$characterInProgressStore.attribute_charisma}</span></p>
            <p>Intellect: <span class="font-bold">{$characterInProgressStore.attribute_intelligence}</span></p>
            <!-- Display derived stats -->
            <p class="col-span-2">Prime Modifier: <span class="font-bold text-yellow-accent">{$primeModifier.attribute} ({$primeModifier.value >= 0 ? '+' : ''}{$primeModifier.value})</span></p>
        </div>
    </div>

    <!-- 6. Overflow Helper Panel (Melt UI Dialog): -->
    <!-- Using a simple div for now due to Melt UI SSR issues -->
    {#if showOverflowHelperPanel}
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div class="bg-dark-bg-secondary p-6 rounded-lg shadow-xl w-full max-w-md text-light-text-primary">
                <h3 class="text-lg font-bold mb-2">Attribute Cap Reached for '{overflowTrait?.name}'</h3>
                <!-- Corrected display to use overflowAmount directly -->
                <p class="mb-4">Selecting '{overflowTrait?.name}' will increase '{overflowAttributeName?.replace('attribute_', '')}' by +{overflowAmount}, exceeding the Level 1 cap of +3. You have {overflowAmount} point(s) to free up by reducing other attributes.</p>

                <!-- Attribute Reduction Section within Panel: -->
                <div>
                    <h4 class="text-md font-semibold mb-2">Reduce Attributes:</h4>
                    <!-- TODO: Implement attribute reduction controls -->
                    {#each ['attribute_might', 'attribute_agility', 'attribute_charisma', 'attribute_intelligence'] as attrName: keyof typeof tempAttributesForReallocation}
                        {#if attrName !== overflowAttributeName}
                            <div class="flex items-center justify-between mb-2">
                                <!-- Changed label to span as it's not associated with a form control -->
                                <span>{attrName.replace('attribute_', '')}: {tempAttributesForReallocation[attrName as keyof typeof tempAttributesForReallocation]}</span>
                                <button on:click={() => reduceAttributeInPanel(attrName as keyof typeof tempAttributesForReallocation)} disabled={ (tempAttributesForReallocation[attrName as keyof typeof tempAttributesForReallocation] ?? -2) <= -2 || pointsFreedInPanel >= overflowAmount } class="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">-</button>
                            </div>
                        {/if}
                    {/each}
                </div>

                <p class="mt-4">Points Freed: {pointsFreedInPanel} / {overflowAmount}</p>

                <!-- Panel Actions: -->
                <div class="flex justify-end gap-3 mt-4">
                    <button on:click={closeOverflowHelperPanel} class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Cancel Trait</button>
                    <button on:click={confirmAttributeReallocationAndSelectTrait} disabled={pointsFreedInPanel !== overflowAmount} class="bg-purple-primary hover:bg-purple-primary/80 text-white px-4 py-2 rounded">Apply & Select Trait</button>
                </div>
            </div>
        </div>
    {/if}

    <!-- Next Button -->
    <div class="mt-8 text-right">
        <button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed" disabled={ancestryPointsRemaining !== 0 || currentSelectedTraits.length === 0}>
            Next Step
        </button>
    </div>
</div>
````

## File: tailwind.config.js
````javascript
// tailwind.config.js
import typography from '@tailwindcss/typography'; // Import the typography plugin

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}"], // Ensure content is defined
  theme: {
    extend: {
      colors: {
        'yellow-accent': '#FFBE0B',
        'orange-secondary': '#FB5607',
        'magenta-error': '#FF006E',
        'purple-primary': '#8338EC',
        'blue-info': '#3A86FF',
        // Define your dark background shades
        'dark-bg-primary': '#111827', // Example: Tailwind gray-900
        'dark-bg-secondary': '#1F2937', // Example: Tailwind gray-800
        // Define your light text shades
        'light-text-primary': '#E5E7EB', // Example: Tailwind gray-200
        'light-text-secondary': '#D1D5DB', // Example: Tailwind gray-300
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Make Inter the default sans-serif
      },
    },
  },
  plugins: [typography], // Use the imported plugin
};
````

## File: tsconfig.json
````json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "moduleResolution": "bundler"
    // baseUrl and paths have been removed as per SvelteKit's recommendation
  }
}
````

## File: vite.config.js
````javascript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});
````

## File: .svelte-kit/generated/client/nodes/0.js
````javascript
export { default as component } from "../../../../src/routes/+layout.svelte";
````

## File: .svelte-kit/generated/client/nodes/5.js
````javascript
export { default as component } from "../../../../src/routes/character-creator/stage-b/+page.svelte";
````

## File: .svelte-kit/output/server/chunks/internal.js
````javascript
import { H as HYDRATION_ERROR, g as get_next_sibling, d as define_property, s as set_active_reaction, a as set_active_effect, i as is_array, b as active_effect, c as active_reaction, e as init_operations, f as get_first_child, h as HYDRATION_START, j as HYDRATION_END, k as hydration_failed, l as clear_text_content, m as array_from, n as component_root, o as is_passive_event, p as create_text, q as branch, r as push, t as component_context, u as pop, v as set, L as LEGACY_PROPS, w as get, x as flushSync, y as mutable_source, z as render, A as push$1, C as setContext, D as pop$1 } from "./index.js";
import "clsx";
let base = "";
let assets = base;
const app_dir = "_app";
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function hydration_mismatch(location) {
  {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
let hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
let hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
const all_registered_events = /* @__PURE__ */ new Set();
const root_event_handles = /* @__PURE__ */ new Set();
function handle_event_propagation(event) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event.type;
  var path = event.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  var path_idx = 0;
  var handled_at = event.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  if (current_target === handler_element) return;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event.target === current_target)) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event, ...data]);
          } else {
            delegated.call(current_target, event);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event.__root = handler_element;
    delete event.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function assign_nodes(start, end) {
  var effect = (
    /** @type {Effect} */
    active_effect
  );
  if (effect.nodes_start === null) {
    effect.nodes_start = start;
    effect.nodes_end = end;
  }
}
function mount(component, options2) {
  return _mount(component, options2);
}
function hydrate(component, options2) {
  init_operations();
  options2.intro = options2.intro ?? false;
  const target = options2.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component, { ...options2, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error === HYDRATION_ERROR) {
      if (options2.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component, options2);
    }
    throw error;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
const document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context) {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      component = Component(anchor_node, props) || {};
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context) {
        pop();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component, unmount2);
  return component;
}
let mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component, options2) {
  const fn = mounted_components.get(component);
  if (fn) {
    mounted_components.delete(component);
    return fn(options2);
  }
  return Promise.resolve();
}
function asClassComponent$1(component) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component,
        ...options2
      });
    }
  };
}
class Svelte4Component {
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options2) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key, value) => {
      var s = mutable_source(value, false, false);
      sources.set(key, s);
      return s;
    };
    const props = new Proxy(
      { ...options2.props || {}, $$events: {} },
      {
        get(target, prop) {
          return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
        },
        has(target, prop) {
          if (prop === LEGACY_PROPS) return true;
          get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
          return Reflect.has(target, prop);
        },
        set(target, prop, value) {
          set(sources.get(prop) ?? add_source(prop, value), value);
          return Reflect.set(target, prop, value);
        }
      }
    );
    this.#instance = (options2.hydrate ? hydrate : mount)(options2.component, {
      target: options2.target,
      anchor: options2.anchor,
      props,
      context: options2.context,
      intro: options2.intro ?? false,
      recover: options2.recover
    });
    if (!options2?.props?.$$host || options2.sync === false) {
      flushSync();
    }
    this.#events = props.$$events;
    for (const key of Object.keys(this.#instance)) {
      if (key === "$set" || key === "$destroy" || key === "$on") continue;
      define_property(this, key, {
        get() {
          return this.#instance[key];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next) => {
      Object.assign(props, next);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    this.#events[event] = this.#events[event] || [];
    const cb = (...args) => callback.call(this, ...args);
    this.#events[event].push(cb);
    return () => {
      this.#events[event] = this.#events[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
}
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
function asClassComponent(component) {
  const component_constructor = asClassComponent$1(component);
  const _render = (props, { context } = {}) => {
    const result = render(component, { props, context });
    return {
      css: { code: "", map: null },
      head: result.head,
      html: result.body
    };
  };
  component_constructor.render = _render;
  return component_constructor;
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
function Root($$payload, $$props) {
  push$1();
  let {
    stores,
    page,
    constructors,
    components = [],
    form,
    data_0 = null,
    data_1 = null
  } = $$props;
  {
    setContext("__svelte__", stores);
  }
  {
    stores.page.set(page);
  }
  const Pyramid_1 = constructors[1];
  if (constructors[1]) {
    $$payload.out += "<!--[-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, {
      data: data_0,
      form,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Pyramid_1($$payload2, { data: data_1, form });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, { data: data_0, form });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop$1();
}
const root = asClassComponent(Root);
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\r\n<html lang="en">\r\n	<head>\r\n		<meta charset="utf-8" />\r\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\r\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\r\n		' + head + '\r\n	</head>\r\n	<body data-sveltekit-preload-data="hover">\r\n		<div style="display: contents">' + body + "</div>\r\n	</body>\r\n</html>\r\n",
    error: ({ status, message }) => '<!doctype html>\r\n<html lang="en">\r\n	<head>\r\n		<meta charset="utf-8" />\r\n		<title>' + message + `</title>\r
\r
		<style>\r
			body {\r
				--bg: white;\r
				--fg: #222;\r
				--divider: #ccc;\r
				background: var(--bg);\r
				color: var(--fg);\r
				font-family:\r
					system-ui,\r
					-apple-system,\r
					BlinkMacSystemFont,\r
					'Segoe UI',\r
					Roboto,\r
					Oxygen,\r
					Ubuntu,\r
					Cantarell,\r
					'Open Sans',\r
					'Helvetica Neue',\r
					sans-serif;\r
				display: flex;\r
				align-items: center;\r
				justify-content: center;\r
				height: 100vh;\r
				margin: 0;\r
			}\r
\r
			.error {\r
				display: flex;\r
				align-items: center;\r
				max-width: 32rem;\r
				margin: 0 1rem;\r
			}\r
\r
			.status {\r
				font-weight: 200;\r
				font-size: 3rem;\r
				line-height: 1;\r
				position: relative;\r
				top: -0.05rem;\r
			}\r
\r
			.message {\r
				border-left: 1px solid var(--divider);\r
				padding: 0 0 0 1rem;\r
				margin: 0 0 0 1rem;\r
				min-height: 2.5rem;\r
				display: flex;\r
				align-items: center;\r
			}\r
\r
			.message h1 {\r
				font-weight: 400;\r
				font-size: 1em;\r
				margin: 0;\r
			}\r
\r
			@media (prefers-color-scheme: dark) {\r
				body {\r
					--bg: #222;\r
					--fg: #ddd;\r
					--divider: #666;\r
				}\r
			}\r
		</style>\r
	</head>\r
	<body>\r
		<div class="error">\r
			<span class="status">` + status + '</span>\r\n			<div class="message">\r\n				<h1>' + message + "</h1>\r\n			</div>\r\n		</div>\r\n	</body>\r\n</html>\r\n"
  },
  version_hash: "bacgpi"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let init;
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    init,
    reroute,
    transport
  };
}
export {
  assets as a,
  base as b,
  app_dir as c,
  read_implementation as d,
  options as e,
  set_private_env as f,
  get_hooks as g,
  prerendering as h,
  set_public_env as i,
  set_safe_public_env as j,
  set_read_implementation as k,
  set_assets as l,
  set_building as m,
  set_manifest as n,
  override as o,
  public_env as p,
  set_prerendering as q,
  reset as r,
  safe_public_env as s
};
````

## File: .svelte-kit/output/server/index.js
````javascript
import { B as BROWSER } from "./chunks/index.js";
import { a as assets, b as base, c as app_dir, p as public_env, s as safe_public_env, o as override, r as reset, d as read_implementation, e as options, g as get_hooks, f as set_private_env, h as prerendering, i as set_public_env, j as set_safe_public_env, k as set_read_implementation } from "./chunks/internal.js";
import { H as HttpError, S as SvelteKitError, j as json, t as text, R as Redirect, A as ActionFailure } from "./chunks/index2.js";
import * as devalue from "devalue";
import { m as make_trackable, d as disable_search, a as decode_params, v as validate_layout_server_exports, b as validate_layout_exports, c as validate_page_server_exports, e as validate_page_exports, n as normalize_path, r as resolve, f as decode_pathname, g as validate_server_exports } from "./chunks/exports.js";
import { r as readable, w as writable } from "./chunks/index3.js";
import { parse, serialize } from "cookie";
import * as set_cookie_parser from "set-cookie-parser";
const SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
const ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
const PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
let request_event = null;
let als;
import("node:async_hooks").then((hooks) => als = new hooks.AsyncLocalStorage()).catch(() => {
});
function with_event(event, fn) {
  try {
    request_event = event;
    return als ? als.run(event, fn) : fn();
  } finally {
    request_event = null;
  }
}
const DATA_SUFFIX = "/__data.json";
const HTML_DATA_SUFFIX = ".html__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
const ROUTE_SUFFIX = "/__route.js";
function has_resolution_suffix(pathname) {
  return pathname.endsWith(ROUTE_SUFFIX);
}
function add_resolution_suffix(pathname) {
  return pathname.replace(/\/$/, "") + ROUTE_SUFFIX;
}
function strip_resolution_suffix(pathname) {
  return pathname.slice(0, -ROUTE_SUFFIX.length);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error) {
  return (
    /** @type {import('../runtime/control.js').Redirect | HttpError | SvelteKitError | Error} */
    error
  );
}
function get_status(error) {
  return error instanceof HttpError || error instanceof SvelteKitError ? error.status : 500;
}
function get_message(error) {
  return error instanceof SvelteKitError ? error.text : "Internal Error";
}
const escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
  // Svelte also escapes < because the escape function could be called inside a `noscript` there
  // https://github.com/sveltejs/svelte/security/advisories/GHSA-8266-84wp-wv5c
  // However, that doesn't apply in SvelteKit
};
const escape_html_dict = {
  "&": "&amp;",
  "<": "&lt;"
};
const surrogates = (
  // high surrogate without paired low surrogate
  "[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]"
);
const escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|` + surrogates,
  "g"
);
const escape_html_regex = new RegExp(
  `[${Object.keys(escape_html_dict).join("")}]|` + surrogates,
  "g"
);
function escape_html(str, is_attr) {
  const dict = is_attr ? escape_html_attr_dict : escape_html_dict;
  const escaped_str = str.replace(is_attr ? escape_html_attr_regex : escape_html_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return escaped_str;
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod) allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page = options2.templates.error({ status, message: escape_html(message) });
  return text(page, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error) {
  error = error instanceof HttpError ? error : coalesce_to_error(error);
  const status = get_status(error);
  const body2 = await handle_error_and_jsonify(event, options2, error);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body2, {
      status
    });
  }
  return static_error_page(options2, status, body2.message);
}
async function handle_error_and_jsonify(event, options2, error) {
  if (error instanceof HttpError) {
    return error.body;
  }
  const status = get_status(error);
  const message = get_message(error);
  return await with_event(
    event,
    () => options2.hooks.handleError({ error, event, status, message })
  ) ?? { message };
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error) {
  if (error.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error.message} (${error.path})`;
  }
  if (error.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error.message;
}
function serialize_uses(node) {
  const uses = {};
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.dependencies = Array.from(node.uses.dependencies);
  }
  if (node.uses && node.uses.search_params.size > 0) {
    uses.search_params = Array.from(node.uses.search_params);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.params = Array.from(node.uses.params);
  }
  if (node.uses?.parent) uses.parent = 1;
  if (node.uses?.route) uses.route = 1;
  if (node.uses?.url) uses.url = 1;
  return uses;
}
function has_prerendered_path(manifest, pathname) {
  return manifest._.prerendered_routes.has(pathname) || pathname.at(-1) === "/" && manifest._.prerendered_routes.has(pathname.slice(0, -1));
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && !mod.HEAD && mod.GET) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !state.prerendering.inside_reroute && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await with_event(
      event,
      () => handler(
        /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
        event
      )
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering && (!state.prerendering.inside_reroute || prerender)) {
      const cloned = new Response(response.clone().body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      cloned.headers.set("x-sveltekit-prerender", String(prerender));
      if (state.prerendering.inside_reroute && prerender) {
        cloned.headers.set(
          "x-sveltekit-routeid",
          encodeURI(
            /** @type {string} */
            event.route.id
          )
        );
        state.prerendering.dependencies.set(event.url.pathname, { response: cloned, body: null });
      } else {
        return cloned;
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server) {
  const actions = server?.actions;
  if (!actions) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      `POST method not allowed. No form actions exist for ${"this page"}`
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: get_status(err)
      }
    );
  }
}
function check_incorrect_fail_use(error) {
  return error instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server) {
  const actions = server?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data — received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return with_event(event, () => action(event));
}
function validate_action_return(data) {
  if (data instanceof Redirect) {
    throw new Error("Cannot `return redirect(...)` — use `redirect(...)` instead");
  }
  if (data instanceof HttpError) {
    throw new Error("Cannot `return error(...)` — use `error(...)` or `return fail(...)` instead");
  }
}
function uneval_action_response(data, route_id, transport) {
  const replacer = (thing) => {
    for (const key2 in transport) {
      const encoded = transport[key2].encode(thing);
      if (encoded) {
        return `app.decode('${key2}', ${devalue.uneval(encoded, replacer)})`;
      }
    }
  };
  return try_serialize(data, (value) => devalue.uneval(value, replacer), route_id);
}
function stringify_action_response(data, route_id, transport) {
  const encoders = Object.fromEntries(
    Object.entries(transport).map(([key2, value]) => [key2, value.encode])
  );
  return try_serialize(data, (value) => devalue.stringify(value, encoders), route_id);
}
function try_serialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error = (
      /** @type {any} */
      e
    );
    if (data instanceof Response) {
      throw new Error(
        `Data returned from action inside ${route_id} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`
      );
    }
    if ("path" in error) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error.message}`;
      if (error.path !== "") message += ` (data.${error.path})`;
      throw new Error(message);
    }
    throw error;
  }
}
function validate_depends(route_id, dep) {
  const match = /^(moz-icon|view-source|jar):/.exec(dep);
  if (match) {
    console.warn(
      `${route_id}: Calling \`depends('${dep}')\` will throw an error in Firefox because \`${match[1]}\` is a special URI scheme`
    );
  }
}
const INVALIDATED_PARAM = "x-sveltekit-invalidated";
const TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function b64_encode(buffer) {
  if (globalThis.Buffer) {
    return Buffer.from(buffer).toString("base64");
  }
  const little_endian = new Uint8Array(new Uint16Array([1]).buffer)[0] > 0;
  return btoa(
    new TextDecoder(little_endian ? "utf-16le" : "utf-16be").decode(
      new Uint16Array(new Uint8Array(buffer))
    )
  );
}
function get_relative_path(from, to) {
  const from_parts = from.split(/[/\\]/);
  const to_parts = to.split(/[/\\]/);
  from_parts.pop();
  while (from_parts[0] === to_parts[0]) {
    from_parts.shift();
    to_parts.shift();
  }
  let i = from_parts.length;
  while (i--) from_parts[i] = "..";
  return from_parts.concat(to_parts).join("/");
}
async function load_server_data({ event, state, node, parent }) {
  if (!node?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const load = node.server.load;
  const slash = node.server.trailingSlash;
  if (!load) {
    return { type: "data", data: null, uses, slash };
  }
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state.prerendering) {
    disable_search(url);
  }
  let done = false;
  const result = await with_event(
    event,
    () => load.call(null, {
      ...event,
      fetch: (info, init2) => {
        const url2 = new URL(info instanceof Request ? info.url : info, event.url);
        if (BROWSER && done && !uses.dependencies.has(url2.href)) ;
        return event.fetch(info, init2);
      },
      /** @param {string[]} deps */
      depends: (...deps) => {
        for (const dep of deps) {
          const { href } = new URL(dep, event.url);
          if (BROWSER) ;
          uses.dependencies.add(href);
        }
      },
      params: new Proxy(event.params, {
        get: (target, key2) => {
          if (BROWSER && done && typeof key2 === "string" && !uses.params.has(key2)) ;
          if (is_tracking) {
            uses.params.add(key2);
          }
          return target[
            /** @type {string} */
            key2
          ];
        }
      }),
      parent: async () => {
        if (BROWSER && done && !uses.parent) ;
        if (is_tracking) {
          uses.parent = true;
        }
        return parent();
      },
      route: new Proxy(event.route, {
        get: (target, key2) => {
          if (BROWSER && done && typeof key2 === "string" && !uses.route) ;
          if (is_tracking) {
            uses.route = true;
          }
          return target[
            /** @type {'id'} */
            key2
          ];
        }
      }),
      url,
      untrack(fn) {
        is_tracking = false;
        try {
          return fn();
        } finally {
          is_tracking = true;
        }
      }
    })
  );
  done = true;
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent,
    untrack: (fn) => fn()
  });
  return result ?? null;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  const universal_fetch = async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else if (url.protocol === "https:" || url.protocol === "http:") {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body2, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body2,
            response: response2,
            is_b64
          });
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(b64_encode(buffer), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body2 = await response2.text();
          if (!body2 || typeof body2 === "string") {
            await push_fetched(body2, false);
          }
          if (dependency) {
            dependency.body = body2;
          }
          return body2;
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" — it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i) hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i) hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
const replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering2 = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers2[key2] = value;
    }
    if (key2 === "cache-control") cache_control = value;
    else if (key2 === "age") age = value;
    else if (key2 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url="${escape_html(fetched.url, true)}"`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering2 && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
const s = JSON.stringify;
const encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
const init = new Uint32Array(8);
const key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
const array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
const quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
const crypto_pattern = /^(nonce|sha\d\d\d)-/;
class BaseProvider {
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #script_src_needs_csp;
  /** @type {boolean} */
  #script_src_elem_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {boolean} */
  #style_src_needs_csp;
  /** @type {boolean} */
  #style_src_attr_needs_csp;
  /** @type {boolean} */
  #style_src_elem_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {import('types').Csp.Source[]} */
  #script_src;
  /** @type {import('types').Csp.Source[]} */
  #script_src_elem;
  /** @type {import('types').Csp.Source[]} */
  #style_src;
  /** @type {import('types').Csp.Source[]} */
  #style_src_attr;
  /** @type {import('types').Csp.Source[]} */
  #style_src_elem;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d = this.#directives;
    this.#script_src = [];
    this.#script_src_elem = [];
    this.#style_src = [];
    this.#style_src_attr = [];
    this.#style_src_elem = [];
    const effective_script_src = d["script-src"] || d["default-src"];
    const script_src_elem = d["script-src-elem"];
    const effective_style_src = d["style-src"] || d["default-src"];
    const style_src_attr = d["style-src-attr"];
    const style_src_elem = d["style-src-elem"];
    const needs_csp = (directive) => !!directive && !directive.some((value) => value === "unsafe-inline");
    this.#script_src_needs_csp = needs_csp(effective_script_src);
    this.#script_src_elem_needs_csp = needs_csp(script_src_elem);
    this.#style_src_needs_csp = needs_csp(effective_style_src);
    this.#style_src_attr_needs_csp = needs_csp(style_src_attr);
    this.#style_src_elem_needs_csp = needs_csp(style_src_elem);
    this.#script_needs_csp = this.#script_src_needs_csp || this.#script_src_elem_needs_csp;
    this.#style_needs_csp = this.#style_src_needs_csp || this.#style_src_attr_needs_csp || this.#style_src_elem_needs_csp;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  /** @param {string} content */
  add_script(content) {
    if (!this.#script_needs_csp) return;
    const source = this.#use_hashes ? `sha256-${sha256(content)}` : `nonce-${this.#nonce}`;
    if (this.#script_src_needs_csp) {
      this.#script_src.push(source);
    }
    if (this.#script_src_elem_needs_csp) {
      this.#script_src_elem.push(source);
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (!this.#style_needs_csp) return;
    const source = this.#use_hashes ? `sha256-${sha256(content)}` : `nonce-${this.#nonce}`;
    if (this.#style_src_needs_csp) {
      this.#style_src.push(source);
    }
    if (this.#style_src_attr_needs_csp) {
      this.#style_src_attr.push(source);
    }
    if (this.#style_src_elem_needs_csp) {
      const sha256_empty_comment_hash = "sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d = this.#directives;
      if (d["style-src-elem"] && !d["style-src-elem"].includes(sha256_empty_comment_hash) && !this.#style_src_elem.includes(sha256_empty_comment_hash)) {
        this.#style_src_elem.push(sha256_empty_comment_hash);
      }
      if (source !== sha256_empty_comment_hash) {
        this.#style_src_elem.push(source);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#style_src_attr.length > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...this.#style_src_attr
      ];
    }
    if (this.#style_src_elem.length > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...this.#style_src_elem
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    if (this.#script_src_elem.length > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...this.#script_src_elem
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
}
class CspProvider extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content="${escape_html(content, true)}">`;
  }
}
class CspReportOnlyProvider extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
}
class Csp {
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
}
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done) deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
function generate_route_object(route, url, manifest) {
  const { errors, layouts, leaf } = route;
  const nodes = [...errors, ...layouts.map((l) => l?.[1]), leaf[1]].filter((n) => typeof n === "number").map((n) => `'${n}': () => ${create_client_import(manifest._.client.nodes?.[n], url)}`).join(",\n		");
  return [
    `{
	id: ${s(route.id)}`,
    `errors: ${s(route.errors)}`,
    `layouts: ${s(route.layouts)}`,
    `leaf: ${s(route.leaf)}`,
    `nodes: {
		${nodes}
	}
}`
  ].join(",\n	");
}
function create_client_import(import_path, url) {
  if (!import_path) return "Promise.resolve({})";
  if (import_path[0] === "/") {
    return `import('${import_path}')`;
  }
  if (assets !== "") {
    return `import('${assets}/${import_path}')`;
  }
  let path = get_relative_path(url.pathname, `${base}/${import_path}`);
  if (path[0] !== ".") path = `./${path}`;
  return `import('${path}')`;
}
async function resolve_route(resolved_path, url, manifest) {
  if (!manifest._.client.routes) {
    return text("Server-side route resolution disabled", { status: 400 });
  }
  let route = null;
  let params = {};
  const matchers = await manifest._.matchers();
  for (const candidate of manifest._.client.routes) {
    const match = candidate.pattern.exec(resolved_path);
    if (!match) continue;
    const matched = exec(match, candidate.params, matchers);
    if (matched) {
      route = candidate;
      params = decode_params(matched);
      break;
    }
  }
  return create_server_routing_response(route, params, url, manifest).response;
}
function create_server_routing_response(route, params, url, manifest) {
  const headers2 = new Headers({
    "content-type": "application/javascript; charset=utf-8"
  });
  if (route) {
    const csr_route = generate_route_object(route, url, manifest);
    const body2 = `${create_css_import(route, url, manifest)}
export const route = ${csr_route}; export const params = ${JSON.stringify(params)};`;
    return { response: text(body2, { headers: headers2 }), body: body2 };
  } else {
    return { response: text("", { headers: headers2 }), body: "" };
  }
}
function create_css_import(route, url, manifest) {
  const { errors, layouts, leaf } = route;
  let css = "";
  for (const node of [...errors, ...layouts.map((l) => l?.[1]), leaf[1]]) {
    if (typeof node !== "number") continue;
    const node_css = manifest._.client.css?.[node];
    for (const css_path of node_css ?? []) {
      css += `'${assets || base}/${css_path}',`;
    }
  }
  if (!css) return "";
  return `${create_client_import(
    /** @type {string} */
    manifest._.client.start,
    url
  )}.then(x => x.load_css([${css}]));`;
}
const updated = {
  ...readable(false),
  check: () => false
};
const encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest,
  state,
  page_config,
  status,
  error = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest._;
  const modulepreloads = new Set(client.imports);
  const stylesheets = new Set(client.stylesheets);
  const fonts = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  {
    if (!state.prerendering?.fallback) {
      const segments = event.url.pathname.slice(base.length).split("/").slice(2);
      base$1 = segments.map(() => "..").join("/") || ".";
      base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
      if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
        assets$1 = base$1;
      }
    } else if (options2.hash_routing) {
      base_expression = "new URL('.', location).pathname.slice(0, -1)";
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(
        branch.map(({ node }) => {
          if (!node.component) {
            throw new Error(`Missing +page.svelte component for route ${event.route.id}`);
          }
          return node.component();
        })
      ),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    override({ base: base$1, assets: assets$1 });
    const render_opts = {
      context: /* @__PURE__ */ new Map([
        [
          "__request__",
          {
            page: props.page
          }
        ]
      ])
    };
    {
      try {
        rendered = options2.root.render(props, render_opts);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports) modulepreloads.add(url);
      for (const url of node.stylesheets) stylesheets.add(url);
      for (const url of node.fonts) fonts.add(url);
      if (node.inline_styles && !client.inline) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body2 = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  const style = client.inline ? client.inline?.style : Array.from(inline_styles.values()).join("\n");
  if (style) {
    const attributes = [];
    if (csp.style_needs_nonce) attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(style);
    head += `
	<style${attributes.join("")}>${style}</style>`;
  }
  for (const dep of stylesheets) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    csp,
    global
  );
  if (page_config.ssr && page_config.csr) {
    body2 += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const route = manifest._.client.routes?.find((r) => r.id === event.route.id) ?? null;
    if (client.uses_env_dynamic_public && state.prerendering) {
      modulepreloads.add(`${app_dir}/env.js`);
    }
    if (!client.inline) {
      const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
        (path) => resolve_opts.preload({ type: "js", path })
      );
      for (const path of included_modulepreloads) {
        link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (options2.preload_strategy !== "modulepreload") {
          head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
        } else if (state.prerendering) {
          head += `
		<link rel="modulepreload" href="${path}">`;
        }
      }
    }
    if (manifest._.client.routes && state.prerendering && !state.prerendering.fallback) {
      const pathname = add_resolution_suffix(event.url.pathname);
      state.prerendering.dependencies.set(
        pathname,
        create_server_routing_response(route, event.params, new URL(pathname, event.url), manifest)
      );
    }
    const blocks = [];
    const load_env_eagerly = client.uses_env_dynamic_public && state.prerendering;
    const properties = [`base: ${base_expression}`];
    if (assets) {
      properties.push(`assets: ${s(assets)}`);
    }
    if (client.uses_env_dynamic_public) {
      properties.push(`env: ${load_env_eagerly ? "null" : s(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const try_to_resolve = () => {
								if (!deferred.has(id)) {
									setTimeout(try_to_resolve, 0);
									return;
								}
								const { fulfil, reject } = deferred.get(id);
								deferred.delete(id);
								if (error) reject(error);
								else fulfil(data);
							}
							try_to_resolve();
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        );
      }
      if (error) {
        serialized.error = devalue.uneval(error);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        `data: ${data}`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (manifest._.client.routes) {
        if (route) {
          const stringified = generate_route_object(route, event.url, manifest).replaceAll(
            "\n",
            "\n							"
          );
          hydrate.push(`params: ${devalue.uneval(event.params)}`, `server_route: ${stringified}`);
        }
      } else if (options2.embedded) {
        hydrate.push(`params: ${devalue.uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate.join(`,
${indent}	`)}
${indent}}`);
    }
    const boot = client.inline ? `${client.inline.script}

					__sveltekit_${options2.version_hash}.app.start(${args.join(", ")});` : client.app ? `Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(app, ${args.join(", ")});
					});` : `import(${s(prefixed(client.start))}).then((app) => {
						app.start(${args.join(", ")})
					});`;
    if (load_env_eagerly) {
      blocks.push(`import(${s(`${base$1}/${app_dir}/env.js`)}).then(({ env }) => {
						${global}.env = env;

						${boot.replace(/\n/g, "\n	")}
					});`);
    } else {
      blocks.push(boot);
    }
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body2 += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers2.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body: body2,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: safe_public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: headers2
    }
  );
}
function get_data(event, options2, nodes, csp, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error) => ({
          error: await handle_error_and_jsonify(event, options2, error)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error }) => {
          count -= 1;
          let str;
          try {
            str = devalue.uneval({ id, data, error }, replacer);
          } catch {
            error = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = devalue.uneval({ id, data, error }, replacer);
          }
          const nonce = csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : "";
          push(`<script${nonce}>${global}.resolve(${str})<\/script>
`);
          if (count === 0) done();
        }
      );
      return `${global}.defer(${id})`;
    } else {
      for (const key2 in options2.hooks.transport) {
        const encoded = options2.hooks.transport[key2].encode(thing);
        if (encoded) {
          return `app.decode('${key2}', ${devalue.uneval(encoded, replacer)})`;
        }
      }
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      const payload = { type: "data", data: node.data, uses: serialize_uses(node) };
      if (node.slash) payload.slash = node.slash;
      return devalue.uneval(payload, replacer);
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    e.path = e.path.slice(1);
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
class PageNodes {
  data;
  /**
   * @param {Array<import('types').SSRNode | undefined>} nodes
   */
  constructor(nodes) {
    this.data = nodes;
  }
  layouts() {
    return this.data.slice(0, -1);
  }
  page() {
    return this.data.at(-1);
  }
  validate() {
    for (const layout of this.layouts()) {
      if (layout) {
        validate_layout_server_exports(
          layout.server,
          /** @type {string} */
          layout.server_id
        );
        validate_layout_exports(
          layout.universal,
          /** @type {string} */
          layout.universal_id
        );
      }
    }
    const page = this.page();
    if (page) {
      validate_page_server_exports(
        page.server,
        /** @type {string} */
        page.server_id
      );
      validate_page_exports(
        page.universal,
        /** @type {string} */
        page.universal_id
      );
    }
  }
  /**
   * @template {'prerender' | 'ssr' | 'csr' | 'trailingSlash'} Option
   * @param {Option} option
   * @returns {Value | undefined}
   */
  #get_option(option) {
    return this.data.reduce(
      (value, node) => {
        return node?.universal?.[option] ?? node?.server?.[option] ?? value;
      },
      /** @type {Value | undefined} */
      void 0
    );
  }
  csr() {
    return this.#get_option("csr") ?? true;
  }
  ssr() {
    return this.#get_option("ssr") ?? true;
  }
  prerender() {
    return this.#get_option("prerender") ?? false;
  }
  trailing_slash() {
    return this.#get_option("trailingSlash") ?? "never";
  }
  get_config() {
    let current = {};
    for (const node of this.data) {
      if (!node?.universal?.config && !node?.server?.config) continue;
      current = {
        ...current,
        // TODO: should we override the server config value with the universal value similar to other page options?
        ...node?.universal?.config,
        ...node?.server?.config
      };
    }
    return Object.keys(current).length ? current : void 0;
  }
  should_prerender_data() {
    return this.data.some(
      // prerender in case of trailingSlash because the client retrieves that value from the server
      (node) => node?.server?.load || node?.server?.trailingSlash !== void 0
    );
  }
}
async function respond_with_error({
  event,
  options: options2,
  manifest,
  state,
  status,
  error,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error.message
    );
  }
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest._.nodes[0]();
    const nodes = new PageNodes([default_layout]);
    const ssr = nodes.ssr();
    const csr = nodes.csr();
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest,
      state,
      page_config: {
        ssr,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      get_status(e),
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
const encoder = new TextEncoder();
async function render_data(event, route, options2, manifest, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error) => {
          if (error instanceof Redirect) {
            throw error;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error),
              status: error instanceof HttpError || error instanceof SvelteKitError ? error.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e) {
    const error = normalize_error(e);
    if (error instanceof Redirect) {
      return redirect_json_response(error);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    ...Object.fromEntries(
      Object.entries(options2.hooks.transport).map(([key2, value]) => [key2, value.encode])
    ),
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = devalue.stringify(value, reducers);
            } catch {
              const error = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = devalue.stringify(error, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0) done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${devalue.stringify(node.data, reducers)},"uses":${JSON.stringify(
        serialize_uses(node)
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    e.path = "data" + e.path;
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
const MAX_DEPTH = 10;
async function render_page(event, page, options2, manifest, state, nodes, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest._.nodes[page.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.page()
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender = nodes.prerender();
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const should_prerender_data = nodes.should_prerender_data();
    const data_pathname = add_data_suffix(event.url.pathname);
    const fetched = [];
    const ssr = nodes.ssr();
    const csr = nodes.csr();
    if (ssr === false && !(state.prerendering && should_prerender_data)) {
      if (BROWSER && action_result && !event.request.headers.has("x-sveltekit-action")) ;
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr
        },
        status,
        error: null,
        event,
        options: options2,
        manifest,
        state,
        resolve_opts
      });
    }
    const branch = [];
    let load_error = null;
    const server_promises = nodes.data.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.data.map((node, i) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises) p.catch(() => {
    });
    for (const p of load_promises) p.catch(() => {
    });
    for (let i = 0; i < nodes.data.length; i += 1) {
      const node = nodes.data[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body2 = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body2),
                body: body2
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page.errors[i]) {
              const index = (
                /** @type {number} */
                page.errors[i]
              );
              const node2 = await manifest._.nodes[index]();
              let j = i;
              while (!branch[j]) j -= 1;
              const layouts = compact(branch.slice(0, j + 1));
              const nodes2 = new PageNodes(layouts.map((layout) => layout.node));
              return await render_response({
                event,
                options: options2,
                manifest,
                state,
                resolve_opts,
                page_config: {
                  ssr: nodes2.ssr(),
                  csr: nodes2.csr()
                },
                status: status2,
                error,
                branch: layouts.concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest,
      state,
      resolve_opts,
      page_config: {
        csr,
        ssr
      },
      status,
      error: null,
      branch: ssr === false ? [] : compact(branch),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
const INVALID_COOKIE_CHARACTER_REGEX = /[\x00-\x1F\x7F()<>@,;:"/[\]?={} \t]/;
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
function get_cookies(request, url) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = parse(header, { decode: (value) => value });
  let normalized_url;
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const req_cookies = parse(header, { decode: opts?.decode });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    getAll(opts) {
      const cookies2 = parse(header, { decode: opts?.decode });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name, value, options2) {
      const illegal_characters = name.match(INVALID_COOKIE_CHARACTER_REGEX);
      if (illegal_characters) {
        console.warn(
          `The cookie name "${name}" will be invalid in SvelteKit 3.0 as it contains ${illegal_characters.join(
            " and "
          )}. See RFC 2616 for more details https://datatracker.ietf.org/doc/html/rfc2616#section-2.2`
        );
      }
      validate_options(options2);
      set_internal(name, value, { ...defaults, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name, options2) {
      validate_options(options2);
      cookies.set(name, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        if (!normalized_url) {
          throw new Error("Cannot serialize cookies until after the route is determined");
        }
        path = resolve(normalized_url, path);
      }
      return serialize(name, value, { ...defaults, ...options2, path });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder2 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = parse(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  const internal_queue = [];
  function set_internal(name, value, options2) {
    if (!normalized_url) {
      internal_queue.push(() => set_internal(name, value, options2));
      return;
    }
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    new_cookies[name] = { name, value, options: { ...options2, path } };
  }
  function set_trailing_slash(trailing_slash) {
    normalized_url = normalize_path(url.pathname, trailing_slash);
    internal_queue.forEach((fn) => fn());
  }
  return { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash };
}
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", serialize(name, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix(options2.path);
      headers2.append("set-cookie", serialize(name, value, { ...options2, path }));
    }
  }
}
function create_fetch({ event, options: options2, manifest, state, get_cookie_header, set_internal }) {
  const server_fetch = async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest.assets.has(filename) || filename in manifest._.server_assets;
        const is_asset_html = manifest.assets.has(filename_html) || filename_html in manifest._.server_assets;
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else if (read_implementation && file in manifest._.server_assets) {
            const length = manifest._.server_assets[file];
            const type = manifest.mimeTypes[file.slice(file.lastIndexOf("."))];
            return new Response(read_implementation(file), {
              headers: {
                "Content-Length": "" + length,
                "Content-Type": type
              }
            });
          }
          return await fetch(request);
        }
        if (has_prerendered_path(manifest, base + decoded)) {
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await internal_fetch(request, options2, manifest, state);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str, {
              decodeValues: false
            });
            const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
            set_internal(name, value, {
              path,
              encode: (value2) => value2,
              .../** @type {import('cookie').CookieSerializeOptions} */
              options3
            });
          }
        }
        return response;
      }
    });
  };
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
async function internal_fetch(request, options2, manifest, state) {
  if (request.signal) {
    if (request.signal.aborted) {
      throw new DOMException("The operation was aborted.", "AbortError");
    }
    let remove_abort_listener = () => {
    };
    const abort_promise = new Promise((_, reject) => {
      const on_abort = () => {
        reject(new DOMException("The operation was aborted.", "AbortError"));
      };
      request.signal.addEventListener("abort", on_abort, { once: true });
      remove_abort_listener = () => request.signal.removeEventListener("abort", on_abort);
    });
    const result = await Promise.race([
      respond(request, options2, manifest, {
        ...state,
        depth: state.depth + 1
      }),
      abort_promise
    ]);
    remove_abort_listener();
    return result;
  } else {
    return await respond(request, options2, manifest, {
      ...state,
      depth: state.depth + 1
    });
  }
}
let body;
let etag;
let headers;
function get_public_env(request) {
  body ??= `export const env=${JSON.stringify(public_env)}`;
  etag ??= `W/${Date.now()}`;
  headers ??= new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  });
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  return new Response(body, { headers });
}
const default_transform = ({ html }) => html;
const default_filter = () => false;
const default_preload = ({ type }) => type === "js" || type === "css";
const page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
const allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
let warned_on_devtools_json_request = false;
async function respond(request, options2, manifest, state) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = new HttpError(
        403,
        `Cross-site ${request.method} form submissions are forbidden`
      );
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  if (options2.hash_routing && url.pathname !== base + "/" && url.pathname !== "/[fallback]") {
    return text("Not found", { status: 404 });
  }
  let invalidated_data_nodes;
  const is_route_resolution_request = has_resolution_suffix(url.pathname);
  const is_data_request = has_data_suffix(url.pathname);
  if (is_route_resolution_request) {
    url.pathname = strip_resolution_suffix(url.pathname);
  } else if (is_data_request) {
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  const headers2 = {};
  const { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash } = get_cookies(
    request,
    url
  );
  const event = {
    cookies,
    // @ts-expect-error `fetch` needs to be created after the `event` itself
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params: {},
    platform: state.platform,
    request,
    route: { id: null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers2[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state.depth > 0
  };
  event.fetch = create_fetch({
    event,
    options: options2,
    manifest,
    state,
    get_cookie_header,
    set_internal
  });
  if (state.emulator?.platform) {
    event.platform = await state.emulator.platform({
      config: {},
      prerender: !!state.prerendering?.fallback
    });
  }
  let resolved_path;
  const prerendering_reroute_state = state.prerendering?.inside_reroute;
  try {
    if (state.prerendering) state.prerendering.inside_reroute = true;
    resolved_path = await options2.hooks.reroute({ url: new URL(url), fetch: event.fetch }) ?? url.pathname;
  } catch {
    return text("Internal Server Error", {
      status: 500
    });
  } finally {
    if (state.prerendering) state.prerendering.inside_reroute = prerendering_reroute_state;
  }
  try {
    resolved_path = decode_pathname(resolved_path);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  if (resolved_path !== url.pathname && !state.prerendering?.fallback && has_prerendered_path(manifest, resolved_path)) {
    const url2 = new URL(request.url);
    url2.pathname = is_data_request ? add_data_suffix(resolved_path) : is_route_resolution_request ? add_resolution_suffix(resolved_path) : resolved_path;
    const response = await fetch(url2, request);
    const headers22 = new Headers(response.headers);
    if (headers22.has("content-encoding")) {
      headers22.delete("content-encoding");
      headers22.delete("content-length");
    }
    return new Response(response.body, {
      headers: headers22,
      status: response.status,
      statusText: response.statusText
    });
  }
  let route = null;
  if (base && !state.prerendering?.fallback) {
    if (!resolved_path.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    resolved_path = resolved_path.slice(base.length) || "/";
  }
  if (is_route_resolution_request) {
    return resolve_route(resolved_path, new URL(request.url), manifest);
  }
  if (resolved_path === `/${app_dir}/env.js`) {
    return get_public_env(request);
  }
  if (resolved_path.startsWith(`/${app_dir}`)) {
    const headers22 = new Headers();
    headers22.set("cache-control", "public, max-age=0, must-revalidate");
    return text("Not found", { status: 404, headers: headers22 });
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest._.matchers();
    for (const candidate of manifest._.routes) {
      const match = candidate.pattern.exec(resolved_path);
      if (!match) continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        event.route = { id: route.id };
        event.params = decode_params(matched);
        break;
      }
    }
  }
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  let trailing_slash = "never";
  try {
    const page_nodes = route?.page ? new PageNodes(await load_page_nodes(route.page, manifest)) : void 0;
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (page_nodes) {
        if (BROWSER) ;
        trailing_slash = page_nodes.trailing_slash();
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash ?? "never";
        if (BROWSER) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash);
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state.before_handle || state.emulator?.platform) {
        let config = {};
        let prerender = false;
        if (route.endpoint) {
          const node = await route.endpoint();
          config = node.config ?? config;
          prerender = node.prerender ?? prerender;
        } else if (page_nodes) {
          config = page_nodes.get_config() ?? config;
          prerender = page_nodes.prerender();
        }
        if (state.before_handle) {
          state.before_handle(event, config, prerender);
        }
        if (state.emulator?.platform) {
          event.platform = await state.emulator.platform({ config, prerender });
        }
      }
    }
    set_trailing_slash(trailing_slash);
    if (state.prerendering && !state.prerendering.fallback && !state.prerendering.inside_reroute) {
      disable_search(url);
    }
    const response = await with_event(
      event,
      () => options2.hooks.handle({
        event,
        resolve: (event2, opts) => (
          // counter-intuitively, we need to clear the event, so that it's not
          // e.g. accessible when loading modules needed to handle the request
          with_event(
            null,
            () => resolve2(event2, page_nodes, opts).then((response2) => {
              for (const key2 in headers2) {
                const value = headers2[key2];
                response2.headers.set(
                  key2,
                  /** @type {string} */
                  value
                );
              }
              add_cookies_to_headers(response2.headers, Object.values(new_cookies));
              if (state.prerendering && event2.route.id !== null) {
                response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
              }
              return response2;
            })
          )
        )
      })
    );
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value) headers22.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : route?.page && is_action_json_request(event) ? action_json_redirect(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(new_cookies));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve2(event2, page_nodes, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (options2.hash_routing || state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest,
            state,
            invalidated_data_nodes,
            trailing_slash
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          if (!page_nodes) {
            throw new Error("page_nodes not found. This should never happen");
          } else if (page_methods.has(method)) {
            response = await render_page(
              event2,
              route.page,
              options2,
              manifest,
              state,
              page_nodes,
              resolve_opts
            );
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("Route is neither page nor endpoint. This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state.error && event2.isSubRequest) {
        const headers22 = new Headers(request.headers);
        headers22.set("x-sveltekit-error", "true");
        return await fetch(request, { headers: headers22 });
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        if (BROWSER && event2.url.pathname === "/.well-known/appspecific/com.chrome.devtools.json") ;
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest,
          state,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function load_page_nodes(page, manifest) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page.layouts.map((n) => n == void 0 ? n : manifest._.nodes[n]()),
    manifest._.nodes[page.leaf]()
  ]);
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
function set_app(value) {
}
const prerender_env_handler = {
  get({ type }, prop) {
    throw new Error(
      `Cannot read values from $env/dynamic/${type} while prerendering (attempted to read env.${prop.toString()}). Use $env/static/${type} instead`
    );
  }
};
let init_promise;
class Server {
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('@sveltejs/kit').SSRManifest} */
  #manifest;
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest) {
    this.#options = options;
    this.#manifest = manifest;
  }
  /**
   * @param {{
   *   env: Record<string, string>;
   *   read?: (file: string) => ReadableStream;
   * }} opts
   */
  async init({ env, read }) {
    const prefixes = {
      public_prefix: this.#options.env_public_prefix,
      private_prefix: this.#options.env_private_prefix
    };
    const private_env = filter_private_env(env, prefixes);
    const public_env2 = filter_public_env(env, prefixes);
    set_private_env(
      prerendering ? new Proxy({ type: "private" }, prerender_env_handler) : private_env
    );
    set_public_env(
      prerendering ? new Proxy({ type: "public" }, prerender_env_handler) : public_env2
    );
    set_safe_public_env(public_env2);
    if (read) {
      set_read_implementation(read);
    }
    await (init_promise ??= (async () => {
      try {
        const module = await get_hooks();
        this.#options.hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ status, error }) => console.error(status === 404 && /** @type {Error} */
          error?.message || error)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          reroute: module.reroute || (() => {
          }),
          transport: module.transport || {}
        };
        set_app({
          decoders: module.transport ? Object.fromEntries(Object.entries(module.transport).map(([k, v]) => [k, v.decode])) : {}
        });
        if (module.init) {
          await module.init();
        }
      } catch (error) {
        {
          throw error;
        }
      }
    })());
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
}
export {
  Server
};
````

## File: memory-bank/systemPatterns.md
````markdown
# System Patterns

This document outlines the system architecture, key technical decisions, and design patterns used in the project.

## Architecture

- The project follows a full-stack architecture using SvelteKit.
- Frontend: Svelte components handle the user interface and client-side logic.
- Backend: SvelteKit endpoints (Form Actions or API Routes) handle data persistence, validation, and final calculations.
- Database: PostgreSQL is used for data storage, accessed via Prisma ORM.

## Design Patterns

- **Component-Based Architecture:** The frontend is built using reusable Svelte components (e.g., `SelectionCard`, `PointAllocator`).
- **State Management:** A single writable Svelte store (`characterInProgressStore`) is used to manage the character creation data on the frontend. Derived stores are used for calculated UI values.
- **Backend Validation:** Backend endpoints are responsible for authoritative validation of user input and final calculations, ensuring data integrity.

## Technical Decisions

- **SvelteKit:** Chosen for its full-stack capabilities, allowing for a unified development experience.
- **Melt UI:** Selected for providing accessible, unstyled UI primitives that can be easily styled with TailwindCSS. Requires the `@melt-ui/pp` preprocessor to be configured in `svelte.config.js` for its `use:melt` action to function correctly.
- **TailwindCSS:** Chosen for its utility-first approach to styling, enabling rapid UI development and consistency with the dark mode theme.
- **Prisma:** Selected as the ORM for its ease of use and type safety with TypeScript.
- **Static Rule Data:** Initially stored as TypeScript objects/arrays for simplicity and faster iteration during the MVP phase.

## Component Relationships

- The main wizard component manages the current stage and renders the appropriate stage component (e.g., `StageA_Attributes.svelte`, `StageB_Ancestry.svelte`).
- Stage components interact with the `characterInProgressStore` to read and update character data.
- UI components (Melt UI primitives, custom components) are used within stage components to build the user interface.
- Frontend components communicate with backend endpoints via SvelteKit Form Actions or API Routes to persist data.

## Critical Implementation Paths

- The character creation wizard flow (Stages A -> B -> C).
- Data persistence after each wizard stage.
- Backend validation and final calculation process.
- Displaying the finalized character sheet.
````

## File: memory-bank/techContext.md
````markdown
# Technical Context

This document details the technologies, development setup, and technical constraints of the project.

## Technologies Used

- **Framework:** SvelteKit (Full-stack JavaScript/TypeScript)
- **UI Primitives:** Melt UI (`@melt-ui/svelte`)
    - Preprocessor: `@melt-ui/pp`
- **Styling:** TailwindCSS
- **ORM & Migrations:** Prisma
- **Database:** PostgreSQL (hosted on Render Free tier)
- **Frontend State Management:** Svelte stores (writable and derived)
- **Rule Data Storage:** TypeScript objects/arrays (initially hardcoded in `src/lib/rulesdata/`)

## Development Setup

- Requires Node.js and npm.
- SvelteKit project initialized manually by installing core dependencies (`@sveltejs/kit`, `@sveltejs/adapter-auto`, `@sveltejs/vite-plugin-svelte`, `vite`), creating configuration files (`svelte.config.js`, `vite.config.js`, `src/app.html`), and updating `package.json` (e.g., `"type": "module"`, scripts).
- TailwindCSS setup integrated using `npx svelte-add@latest tailwindcss`, which configured `tailwind.config.js`, `postcss.config.js`, and `src/app.css`. Core Tailwind dependencies (`tailwindcss`, `postcss`, `autoprefixer`) installed.
- Melt UI preprocessor (`@melt-ui/pp`) configured in `svelte.config.js` by importing `preprocessMeltUI` and adding it to the `preprocess` array (e.g., `preprocess: sequence([vitePreprocess(), preprocessMeltUI()])`).
- Prisma CLI for database migrations.

## Technical Constraints

- Render Free tier database limitations (e.g., connection limits, sleep times).
- Initial static rule data is hardcoded, requiring code changes for rule updates.
- Level 1 attribute cap of +3.
- Ancestry Point allocation rules (5 points, 1 Minor Trait limit, +2 points max from Negative Traits).

## Dependencies

- **SvelteKit Core:** `@sveltejs/kit`, `@sveltejs/adapter-auto`, `@sveltejs/vite-plugin-svelte`, `vite`
- **UI Primitives:** `@melt-ui/svelte`
- **Melt UI Preprocessor:** `@melt-ui/pp`
- **Styling (TailwindCSS):** `tailwindcss`, `postcss`, `autoprefixer`
- **ORM & Database:** `prisma`, `@prisma/client`, `pg` (PostgreSQL driver - to be confirmed when DB work starts)
- **Svelte Core:** `svelte`

## Tool Usage Patterns

- Using Prisma CLI for schema definition and migrations.
- Using TailwindCSS for styling components.
- Using SvelteKit's built-in features for routing, API endpoints (Form Actions), and server-side logic.
- Using Melt UI primitives for building accessible UI components.
- Configuring and utilizing the Melt UI preprocessor (`@melt-ui/pp`) in `svelte.config.js` to enable `use:melt` action.
````

## File: projectPlan/merge-character-stages-plan.md
````markdown
# Plan: Merge Character Creation Stages (A, B, C) into a Single Page

## Objective

Merge the existing Stage A (Attributes) and Stage B (Ancestry) components, and integrate the planned Stage C (Class) selection, into a single, long-form page for character creation. This will provide users with a unified view and real-time feedback across all initial character choices.

## Requirements

- **Single Page:** All content for Stages A, B, and C will reside on one Svelte page.
- **Long Form Layout:** Sections will be stacked vertically with clear headers. No accordions or tabs are required.
- **Unified State:** Continue using the `characterInProgressStore` to manage all character data.
- **Real-time Updates:** Derived stats should update dynamically as attributes, ancestry, and class are selected.
- **Single API Endpoint:** A new backend endpoint will handle saving all data for the merged stages in one request.
- **Comprehensive Validation:** Backend and frontend validation must ensure all required fields are complete and rules are followed across all stages before saving.
- **No Dedicated Mobile UX:** Mobile responsiveness is not a primary concern for this task.

## Implementation Plan

### 1. File Structure Changes

- Create a new Svelte page component: `src/routes/character-creator/+page.svelte`. This will be the main merged page.
- The existing `src/routes/character-creator/stage-a/+page.svelte` and `src/routes/character-creator/stage-b/+page.svelte` files can be kept temporarily as references but will no longer be directly routed to.
- Create a new backend API endpoint file: `src/routes/api/character/progress/complete/+server.ts`.
- The existing `src/routes/api/character/progress/stageA/+server.ts` and `src/routes/api/character/progress/stageB/+server.ts` files will become obsolete and can be removed or archived after the new endpoint is functional.

### 2. Component Implementation (`src/routes/character-creator/+page.svelte`)

- **Import necessary stores and data:** Import `characterInProgressStore`, derived stats (`maxHP`, `areaDefense`, `precisionDefense`, `initiative`, `gritPoints`, `jumpDistance`, `provisionalSkillPoints`, `startingSP`, `startingMP`), `attributesData`, `ancestriesData`, `traitsData`, and `classesData`.
- **Combine HTML Structure:**
    - Copy the HTML structure from `src/routes/character-creator/stage-a/+page.svelte` for the Character Name and Attribute Allocation sections.
    - Copy the HTML structure from `src/routes/character-creator/stage-b/+page.svelte` for the Ancestry Selection and Trait Allocation sections.
    - Add a new section for **Class Selection**. This will involve:
        - Displaying available classes (using `classesData`).
        - Allowing the user to select one class (e.g., using radio buttons or a select dropdown).
        - Conditionally displaying Class Features (`level1Features`) and implementing UI for any required Feature Choices (`featureChoicesLvl1`) based on the selected class. This will require logic to render different input types (e.g., radio buttons for `select_one`).
    - Add a section to display **Final Provisional Stats** (HP, SP, MP, Defenses, Saves, etc.) based on the combined effects of Attributes, Ancestry Traits, and Class. This will leverage the existing and newly added derived stores.
- **Combine Svelte Script Logic:**
    - Merge the script sections from Stage A and Stage B.
    - Adapt the `handleAttributeChange` and `handleTraitSelection` functions to work within the single component.
    - Implement logic for Class Selection:
        - Update the `characterInProgressStore` with the selected `classId`.
        - Implement a `handleFeatureChoice` function to update the `selectedFeatureChoices` in the store (as a JSON string).
    - Ensure all reactive declarations (`$:`) and derived stores function correctly with the combined state.
    - Implement a single `handleSubmitCharacter` function that gathers all data from the store and sends it to the new `/api/character/progress/complete` endpoint.
- **Combine Styling:** Merge the CSS from both pages, resolving any conflicts.

### 3. State Management (`src/lib/stores/characterInProgressStore.ts`)

- The existing `characterInProgressStore` and derived stores are well-suited.
- **Add/Modify Derived Stores:**
    - Add `startingSP` derived store based on selected class's `startingSP`.
    - Add `startingMP` derived store based on selected class's `startingMP`.
    - Modify `maxHP` derived store to include the selected class's `baseHpContribution`.

    ```typescript
    // Derived store for Starting SP (from class)
    export const startingSP = derived(
      characterInProgressStore,
      ($store) => {
        if (!$store.classId) return 0;
        const classData = classesData.find(c => c.id === $store.classId); // Assuming classesData is imported
        return classData?.startingSP ?? 0;
      }
    );

    // Derived store for Starting MP (from class)
    export const startingMP = derived(
      characterInProgressStore,
      ($store) => {
        if (!$store.classId) return 0;
        const classData = classesData.find(c => c.id === $store.classId); // Assuming classesData is imported
        return classData?.startingMP ?? 0;
      }
    );

    // Update maxHP to include class base HP
    export const maxHP = derived(
      characterInProgressStore,
      ($store) => {
        const classData = classesData.find(c => c.id === $store.classId); // Assuming classesData is imported
        const classHP = classData?.baseHpContribution ?? 8; // fallback to 8 if no class selected
        const mightModifier = getModifier($store.attribute_might);
        const ancestryHP = 0; // MVP assumption - update when Ancestry HP is implemented
        return classHP + mightModifier + ancestryHP;
      }
    );
    ```

### 4. API Design (`src/routes/api/character/progress/complete/+server.ts`)

- Create a new POST endpoint.
- It should receive the complete character data object from the frontend (including character name, attributes, ancestry IDs, selected trait IDs, class ID, selected feature choices).
- Implement comprehensive backend validation:
    - Validate character name.
    - Validate attribute values and point buy total (existing Stage A logic).
    - Validate ancestry selections (up to 2, valid IDs).
    - Validate selected trait IDs against the chosen ancestries and point budget (existing Stage B logic).
    - Validate class selection (valid ID).
    - **Validate selected feature choices against the chosen class definition:** Ensure all required choices for the selected class are present and the selected values are valid options.
    - **Validate cross-stage dependencies:** E.g., ensure attribute caps are not exceeded after applying ancestry trait bonuses.

    ```typescript
    // Example backend validation for feature choices
    function validateFeatureChoices(classId: string, selectedChoicesJson: string) {
      const classData = classesData.find(c => c.id === classId); // Assuming classesData is imported
      if (!classData) throw new Error(`Invalid class ID: ${classId}`);

      const choices = JSON.parse(selectedChoicesJson || '{}');
      
      for (const requiredChoice of classData.featureChoicesLvl1) {
        if (choices[requiredChoice.id] === undefined) { // Check if choice was made
          throw new Error(`Missing required choice for ${classData.name}: ${requiredChoice.prompt}`);
        }
        // Validate selected value is one of the allowed options
        const validOptions = requiredChoice.options.map(o => o.value);
        if (!validOptions.includes(choices[requiredChoice.id])) {
          throw new Error(`Invalid selected option for ${requiredChoice.id} in class ${classData.name}`);
        }
      }
    }

    // Example backend cross-validation for attribute caps after traits
    function validateAttributeCapsAfterTraits(attributes, selectedTraitIdsJson: string) {
      const selectedTraitIds = JSON.parse(selectedTraitIdsJson || '[]');
      const traits = selectedTraitIds.map(id => traitsData.find(t => t.id === id)).filter(t => t !== undefined); // Assuming traitsData is imported
      
      const finalAttributes = { ...attributes }; // Start with base attributes

      for (const trait of traits) {
        const attrEffect = trait.effects?.find(e => e.type === 'MODIFY_ATTRIBUTE');
        if (attrEffect && attrEffect.target && typeof attrEffect.value === 'number') {
          const attributeKey = `attribute_${attrEffect.target}` as keyof typeof finalAttributes;
          if (attributeKey in finalAttributes) {
             finalAttributes[attributeKey] += attrEffect.value;
          }
        }
      }

      // Check against Level 1 cap (+3)
      const ATTRIBUTE_MAX_L1 = 3;
      for (const [attrName, finalValue] of Object.entries(finalAttributes)) {
        if (finalValue > ATTRIBUTE_MAX_L1) {
          throw new Error(`Final attribute ${attrName.replace('attribute_', '')} exceeds Level 1 cap (+3) after applying traits.`);
        }
      }
    }
    ```

- Use a Prisma transaction to either save all data or roll back if any validation fails or a database error occurs.
- Update the `CharacterInProgress` record in the database with all the collected data.
- Return a success response with the character ID or detailed error messages on failure.

### 5. Validation Strategy

- **Frontend Validation:** Provide immediate feedback to the user as they make choices (e.g., point budget remaining, trait selection rules, attribute overflow, required feature choices). Disable the submit button until all sections are valid.
    ```typescript
    // Example frontend check for overall form validity
    $: allStagesValid = 
      pointsRemaining === 0 && // Stage A complete
      ancestryPointsRemaining === 0 && // Stage B complete
      $characterInProgressStore.classId !== null && // Stage C class selected
      allRequiredFeatureChoicesMade; // Stage C choices complete

    // Check if all required feature choices for the selected class have been made
    $: allRequiredFeatureChoicesMade = selectedClass?.featureChoicesLvl1?.every(
      choice => $characterInProgressStore.selectedFeatureChoices && JSON.parse($characterInProgressStore.selectedFeatureChoices)[choice.id] !== undefined
    ) ?? true; // If no class or no choices required, consider valid
    ```
- **Backend Validation:** Implement robust validation in the `/api/character/progress/complete` endpoint as the authoritative source of truth before saving to the database.

### 6. Migration Steps (Corrected Order)

1. **Backup:** ✅ Create backups of `src/routes/character-creator/stage-a/+page.svelte`, `src/routes/character-creator/stage-b/+page.svelte`, `src/routes/api/character/progress/stageA/+server.ts`, and `src/routes/api/character/progress/stageB/+server.ts`.
2. **Update Derived Stores:** ✅ Modify `src/lib/stores/characterInProgressStore.ts` to add/update derived stores for `startingSP`, `startingMP`, and `maxHP` to incorporate class data.
3. **Create New API Endpoint:** ✅ Create `src/routes/api/character/progress/complete/+server.ts` and implement the backend logic for receiving, validating (including new cross-stage and feature choice validation), and saving all data in a transaction.
4. **Create Merged Component:** ✅ Create `src/routes/character-creator/+page.svelte`. Copy the relevant HTML and Svelte script logic from the old stage files and add the new sections for Class Selection and Final Provisional Stats. Implement the frontend validation logic.
5. **Test Incrementally:** Test the merged page locally as you build it, verifying each section works and interacts correctly.
6. **Update Routing:** Modify SvelteKit routing to point `/character-creator` to the new merged page.
7. **Test Thoroughly:** Conduct comprehensive testing as outlined in the Testing Strategy.
8. **Cleanup:** Once confident the new page works, remove or archive the old stage files and API endpoints.

### 7. Testing Strategy (Detailed)

- **Unit Tests:** (If applicable) Test individual functions for attribute changes, trait selection rules, class selection logic, and feature choice handling.
- **Component Tests:** Test the merged Svelte component to ensure UI elements are displayed correctly, interactions work, frontend validation is active, and derived stats update dynamically.
- **API Tests:** Test the `/api/character/progress/complete` endpoint with various valid and invalid data payloads to ensure backend validation (including cross-stage and feature choice validation) and saving work correctly.
- **End-to-End Tests:** Manually or automatically go through the entire character creation process on the merged page to ensure a character can be successfully created and saved. Verify the saved data in the database.
- **Specific Test Cases:**
    - Create a character with minimum/maximum attributes.
    - Select one ancestry, select traits within the point budget.
    - Select two different ancestries, select traits within the point budget.
    - Attempt to select a trait that exceeds the ancestry point budget (should be prevented).
    - Select a trait that triggers the attribute overflow helper, successfully reallocate points, and select the trait.
    - Select a trait that triggers the attribute overflow helper, attempt to confirm without freeing enough points (should be prevented).
    - Select each of the 13 classes.
    - For classes with feature choices (e.g., Sorcerer), select each available option and verify it's saved correctly.
    - Attempt to submit the form with missing required feature choices (should be prevented by validation).
    - Attempt to submit the form with invalid data (e.g., attribute out of range, too many ancestry points spent) and verify backend validation errors are returned.
    - Verify that HP, SP, MP, and other provisional stats update correctly based on selected attributes, ancestry traits, and class.

This updated plan incorporates the detailed technical steps and corrected migration order based on our discussion.
````

## File: projectPlan/mvp.md
````markdown
# Project: DC20 Level 1 Character Creator MVP

## I. Core Technologies
*   **Framework:** SvelteKit (Full-stack JavaScript/TypeScript)
*   **UI Primitives:** Melt UI (Primary)
*   **Styling:** TailwindCSS
*   **Fallback/Alternative UI:** `shadcn-svelte` (using Bits UI) / Bits UI directly, if needed for specific components or faster styling.
*   **ORM & Migrations:** Prisma
*   **Database:** Render Free PostgreSQL

## II. UI Design & Aesthetics
*   **Theme:** Dark Mode (Primary)
*   **Style:** Modern and Clean
*   **Primary Color Palette (Chosen):**
    *   `#FFBE0B` (Yellow - Accent, Highlights, Positive Feedback)
    *   `#FB5607` (Orange - Secondary Accent, Warnings)
    *   `#FF006E` (Magenta/Rose - Energetic Accent, Errors, Negative Feedback)
    *   `#8338EC` (Purple - Primary Action, Links, Key UI Elements)
    *   `#3A86FF` (Blue - Informational, Secondary Actions)
    *   *Dark Backgrounds:* Various shades of very dark gray/near-black (e.g., `#111827`, `#1F2937`, `#0D1117` from Tailwind's gray scale or custom)
    *   *Text Colors:* Light grays/off-whites for readability on dark backgrounds (e.g., `#E5E7EB`, `#D1D5DB`).
*   **Primary Font:** Inter (Variable font, allowing for different weights from a single family). Configured in Tailwind.
*   **Alternative Color Palettes (For Future Reference):**
    *   `https://coolors.co/palette/f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1`
    *   `https://coolors.co/palette/007f5f-2b9348-55a630-80b918-aacc00-bfd200-d4d700-dddf00-eeef20-ffff3f`
    *   `https://coolors.co/03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08`
    *   `https://coolors.co/7400b8-6930c3-5e60ce-5390d9-4ea8de-48bfe3-56cfe1-64dfdf-72efdd-80ffdb`
    *   `https://coolors.co/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0`

## III. MVP Feature Scope
1.  **Character Creation Wizard (Level 1 Only):**
    *   Guided, 6-stage UI implementing the initial stages (A-Attributes, B-Ancestry, C-Class) of the re-ordered flow (A-Attributes, B-Ancestry, C-Class, D-Background, E-Review, F-Equipment). These stages incorporate decision points from DC20's original 10 steps for Level 1.
    *   Visual-only breadcrumbs indicating progress through the re-ordered stages.
    *   Input fields, selections, point allocation with real-time validation for Level 1 constraints.
    *   Dynamic *provisional* updates of relevant stats on the frontend as choices are made.
    *   Data for the current creation process saved to the database (`CharacterInProgress` table) after each wizard step is completed by the user.
2.  **Character Page Output:**
    *   Upon completion of the wizard, all character data is finalized, calculated on the backend, and stored in a `CharacterSheetData` table.
    *   A dedicated page displays this finalized Level 1 character sheet data in a structured, readable HTML format, styled according to the dark mode, modern & clean aesthetic.
3.  **Data Persistence:**
    *   `CharacterInProgress` table: Stores intermediate data as the user moves through the wizard.
    *   `CharacterSheetData` table: Stores the final, calculated data for a completed Level 1 character.

## IV. Data Modeling (Prisma Schema)
*   **`CharacterInProgress` Table:**
    *   `id`: String `@id @default(uuid())`
    *   `characterName`: String?
    *   `currentWizardStage`: String `@default("A")` (e.g., "A", "B", "C" for re-ordered stages)
    *   `createdAt`: DateTime `@default(now())`
    *   `updatedAt`: DateTime `@updatedAt`
    *   **Stage A Data:**
        *   `attribute_might`: Int `@default(-2)`
        *   `attribute_agility`: Int `@default(-2)`
        *   `attribute_charisma`: Int `@default(-2)`
        *   `attribute_intelligence`: Int `@default(-2)`
        *   `primeModifierAttributeChoice`: String? // Stores "Might", "Agility", etc. if there's a tie.
    *   **Stage B Data:**
        *   `selectedAncestry1Id`: String?
        *   `selectedAncestry2Id`: String?
        *   `selectedAncestryTraitsJson`: String? // JSON string: `[{ "traitId": "human_resolve", "sourceAncestryId": "human" }, ...]`
    *   **Stage C Data:**
        *   `selectedClassId`: String?
        *   `classFeatureChoicesLvl1Json`: String? // JSON string: `{ "sorcerousOrigin": "intuitive_magic" }`
    *   *(Fields for Stage D, E, F to be added as those stages are detailed)*
*   **`CharacterSheetData` Table:**
    *   `id`: String `@id @default(uuid())`
    *   `characterInProgressId`: String @unique // Links to the completed CharacterInProgress
    *   `characterInProgress`: CharacterInProgress @relation(fields: [characterInProgressId], references: [id])
    *   **Final Output Fields (Level 1 Character Sheet):**
        *   `finalName: String`
        *   `finalPlayerName: String?`
        *   `finalLevel: Int @default(1)`
        *   `finalMight: Int`
        *   `finalAgility: Int`
        *   `finalCharisma: Int`
        *   `finalIntelligence: Int`
        *   `finalPrimeModifierValue: Int`
        *   `finalPrimeModifierAttribute: String`
        *   `finalCombatMastery: Int @default(1)`
        *   `finalSaveMasteryMight: Int`
        *   `finalSaveMasteryAgility: Int`
        *   `finalSaveMasteryCharisma: Int`
        *   `finalSaveMasteryIntelligence: Int`
        *   `finalHPMax: Int`
        *   `finalSPMax: Int`
        *   `finalMPMax: Int`
        *   `finalPD: Int`
        *   `finalAD: Int`
        *   `finalPDR: String?`
        *   `finalEDR: String?`
        *   `finalMDR: String?`
        *   `finalSaveDC: Int`
        *   `finalDeathThreshold: Int`
        *   `finalMoveSpeed: Int`
        *   `finalJumpDistance: Int`
        *   `finalRestPoints: Int`
        *   `finalGritPoints: Int`
        *   `finalInitiativeBonus: Int`
        *   `skillsJson: String` // `[{ id: 'athletics', name: 'Athletics', masteryLevel: 'Novice', bonus: 2, attribute: 'Might' }, ...]`
        *   `tradesJson: String` // `[{ id: 'alchemy', name: 'Alchemy', masteryLevel: 'Novice', bonus: 2, attribute: 'Intelligence' }, ...]`
        *   `languagesJson: String` // `[{ id: 'common', name: 'Common', fluency: 'Fluent' }, ...]`
        *   `ancestry1Name: String?`
        *   `ancestry2Name: String?`
        *   `selectedTraitsJson: String` // `[{ id: 'human_resolve', name: 'Human Resolve', cost: 1, description: '...', sourceAncestryName: 'Human' }, ...]`
        *   `className: String`
        *   `classFeaturesLvl1Json: String` // `[{ name: 'Rage', description: '...' }, { name: 'Sorcerous Origin', choice: 'Intuitive Magic', description: '...'}]`
        *   `equipmentJson: String` // `[{ name: 'Longsword', type: 'Weapon', ... }, ...]`
    *   `createdAt`: DateTime `@default(now())`
    *   `updatedAt`: DateTime `@updatedAt`
*   **Static Rule Data:**
    *   Initially embedded as TypeScript objects/arrays within the SvelteKit application (e.g., in `src/lib/rulesdata/`). TypeScript interfaces (e.g., `IAncestry`, `ITrait`, `IClass`) will define the structure. Effect encoding standardized (e.g., `effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'Might', value: 1 }]`).

## V. Key Backend Logic (SvelteKit Form Actions / API Routes)
*   One SvelteKit Form Action per wizard stage (e.g., `/wizard/stageA`, `/wizard/stageB`, etc.) to save/update `CharacterInProgress` data.
*   Endpoint/Form Action to finalize character creation:
    *   Takes `CharacterInProgress.id`.
    *   Performs all final calculations based on stored choices and embedded rule data.
    *   Validates all rules and constraints.
    *   Creates a new `CharacterSheetData` record.
*   Endpoint to fetch `CharacterSheetData` for display.
*   Backend re-validates all inputs for each stage. Final authoritative calculations for `CharacterSheetData` happen on the backend.

## VI. Key Frontend Logic & UI Implementation (SvelteKit with Melt UI & TailwindCSS)
*   **Wizard Structure:** A main Svelte component managing the current stage, with child components for each re-ordered stage (A, B, C initially).
*   **State Management:** A single, comprehensive writable Svelte store (`characterInProgressStore`) mirroring `CharacterInProgress` model plus transient UI state. Derived stores for calculated UI values.
*   **UI Components (Built using Melt UI primitives & styled with TailwindCSS):**
    *   Core Melt Primitives: `Button`, `Label`, `Input`, `Select`, `RadioGroup`, `Checkbox`, `Dialog`, `Tooltip`, `Progress`.
    *   Custom Composite Components: `WizardLayout.svelte`, `Breadcrumbs.svelte` (visual-only for MVP), `StageContainer.svelte`, `PointAllocator.svelte`, `StatDisplay.svelte` (for snapshot panel), `SelectionCard.svelte`.
*   **Styling:** TailwindCSS. Configuration includes chosen color palette and Inter font family. `darkMode: 'class'` with default to dark.
*   **Accessibility:** Leverage Melt UI's built-in features.
*   **Validation:** Real-time frontend validation with inline error messages next to problematic fields. Backend errors handled via SvelteKit Form Action responses.
*   **Character Sheet Display:** A dedicated Svelte route/page rendering `CharacterSheetData`.

## VII. Specific Planning Decisions (from Checklist)
*   **Complex Selections (Traits, Features):** Stored as JSON strings in `CharacterInProgress` for MVP.
*   **Static Rule Data Storage:** Hardcoded TypeScript objects/arrays in `src/lib/rulesdata/` for MVP.
*   **Svelte Store:** Single `characterInProgressStore` (writable), with extensive use of derived stores.
*   **Backend API:** One SvelteKit Form Action per wizard stage.
*   **Calculations:** Frontend for provisional UI display; backend for authoritative validation and final `CharacterSheetData` calculation.
*   **Error Handling:** Inline frontend messages; SvelteKit Form Action error patterns for backend errors.
*   **Resume Creation (MVP):** Use browser `localStorage` to store the `id` of the last edited `CharacterInProgress` record for basic resume functionality.
*   **Reusable Components:** Focus on `SelectionCard.svelte`, `PointAllocator.svelte`, `CharacterSnapshotPanel.svelte`.
*   **Tailwind Dark Mode:** `darkMode: 'class'`, default to dark.

## VIII. Post-MVP Considerations (Out of Scope for Initial Build)
*   Stages D (Background), E (Review), F (Equipment) of the wizard.
*   Character Level Up Wizard
*   Create Custom Equipment
*   Name Generator
*   Character Image & Token Generator (beyond simple upload)
*   PDF Output / Advanced Character Sheet Styling
*   User Accounts & Authentication
*   Sharing Characters
*   Moving Static Rule Data to Database
*   Interactive breadcrumb navigation (allowing edits to previous steps with full recalculation).
*   Light Mode Theme & UI Theme Toggle.
*   Different font classes for UI/Title.

## Appendix: Static Rule Data Definition
Detailed TypeScript interfaces for static rule data will be defined in `src/lib/rulesdata/types.ts`. Key interfaces include:

*   `IAttributeData { id: 'might' | 'agility' | 'charisma' | 'intelligence'; name: string; description: string; derivedStats?: Array<{ statName: string; formula: string; }>; }`
*   `ITraitEffect { type: string; target?: string; value?: any; condition?: string; userChoiceRequired?: { prompt: string; options?: string[] }; descriptionOverride?: string; }`
*   `ITrait { id: string; name: string; description: string; cost: number; isMinor?: boolean; isNegative?: boolean; effects?: ITraitEffect[]; prerequisites?: any[]; }`
*   `IAncestry { id: string; name: string; description: string; defaultTraitIds?: string[]; expandedTraitIds: string[]; }`
*   `IClassFeatureChoiceOption { value: string; label: string; description?: string; }`
*   `IClassFeatureChoice { id: string; prompt: string; type: 'select_one' | 'select_multiple'; maxSelections?: number; options: IClassFeatureChoiceOption[]; effectsOnChoice?: { [choiceValue: string]: ITraitEffect[] }; }`
*   `IClassFeature { id: string; name: string; description: string; level: number; effects?: ITraitEffect[]; }`
*   `IClassDefinition { id: string; name: string; ... baseHpContribution: number; startingSP: number; startingMP: number; skillPointGrantLvl1?: number; ... level1Features: IClassFeature[]; featureChoicesLvl1?: IClassFeatureChoice[]; ... }`
*   `ISkillData { id: string; name: string; attributeAssociation: string; description: string; }`
*   `ITradeData { id: string; name: string; attributeAssociation: string; description: string; tools?: string; }`
*   `ILanguageData { id: string; name: string; type: string; }`
````

## File: projectPlan/stage1.md
````markdown
# AI Generation Guide: Character Creator - Stage A (Attributes, Prime Modifier, Foundational Stats - Point Buy)

## I. Overall Stage Objective
Create a Svelte component (e.g., `StageA_Attributes.svelte`) that allows the user to:
1.  Allocate 12 attribute points using the Point Buy method (starting from -2 in each of Might, Agility, Charisma, Intelligence) for Level 1 characters (max +3 per attribute).
2.  View the automatically calculated Prime Modifier (with a user choice for ties).
3.  View the automatically calculated Save Mastery bonus for each attribute.
4.  View the automatically calculated Grit Points, Jump Distance, and provisional Skill Point total.
5.  View provisional formulas/known components for Health, SP, MP, PD, AD.
6.  Persist these choices to a Svelte store and, upon proceeding, save to the `CharacterInProgress` table via a backend API call.

## II. Svelte Component: `StageA_Attributes.svelte`

### A. Props:
*   `characterInProgressStore`: Writable Svelte store holding the current character creation data.

### B. Internal State (Reactive Svelte Variables):
*   `pointBuyBudget`: Number (constant: 12)
*   `attributes`: Object (e.g., `{ Might: -2, Agility: -2, Charisma: -2, Intelligence: -2 }`) - *User modifies these values.*
*   `pointsSpent`: Reactive/Derived Number (`$: pointsSpent = calculatePointsSpent(attributes)`)
*   `pointsRemaining`: Reactive/Derived Number (`$: pointsRemaining = pointBuyBudget - pointsSpent`)
*   `primeModifierAttribute`: String (Might, Agility, Charisma, or Intelligence - user choice if tie)
*   `primeModifierValue`: Reactive/Derived Number (`$: primeModifierValue = attributes[primeModifierAttribute]`)
*   `saveMasteries`: Reactive/Derived Object (`$: saveMasteries = calculateSaveMasteries(attributes, L1_COMBAT_MASTERY)`)
*   `gritPoints`: Reactive/Derived Number (`$: gritPoints = 2 + getModifier(attributes.Charisma)`)
*   `jumpDistance`: Reactive/Derived Number (`$: jumpDistance = attributes.Agility < 1 ? 1 : attributes.Agility`)
*   `provisionalSkillPoints`: Reactive/Derived Number (`$: provisionalSkillPoints = 5 + getModifier(attributes.Intelligence)`)
*   `L1_COMBAT_MASTERY`: Number (constant: 1) - *Sourced from global static rule data (DC20 p.22).*

### C. UI Structure & Components (Melt UI + TailwindCSS):

**1. Main Container (`div`):**
    *   Tailwind: `p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary`

**2. Stage Title (`h2`):**
    *   Text: "Step 1: Core Attributes & Foundational Stats"
    *   Tailwind: `text-2xl font-semibold mb-6 text-yellow-accent` (using Inter font)

**3. Point Buy Allocation Section (`div` section):**
    *   Title (`h3`): "Allocate Attribute Points (Point Buy)" (Tailwind: `text-lg font-medium mb-2`)
    *   Budget Display (`p`): "Budget: {pointsRemaining} / 12 Points Remaining" (Tailwind: `mb-4 text-light-text-secondary`)
        *   Dynamically change text color to `magenta-error` if `pointsRemaining < 0`.
    *   Layout: CSS Grid (`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6`)
    *   **For each of the 4 attributes (Might, Agility, Charisma, Intelligence):**
        *   Attribute Card (`div`):
            *   Tailwind: `p-4 bg-dark-bg-primary rounded-md shadow-sm relative flex flex-col justify-between`
            *   Dynamic Tailwind class if this attribute is the `primeModifierAttribute`: `border-2 border-yellow-accent`
        *   **Top Section:**
            *   Attribute Name & Save Mastery (`div`):
                *   Tailwind: `flex justify-between items-center mb-1`
                *   Name (Melt UI `Label` for the input): e.g., "Might" (Tailwind: `text-xl font-medium text-light-text-primary`)
                *   Save Mastery (`span`): e.g., "Save: +{saveMasteries.Might}" (Tailwind: `text-blue-info font-medium`)
            *   Attribute Description (`p`):
                *   Text: "Your Strength of Body." (Might)
                *   Text: "Your Balance, Nimbleness, and Dexterity." (Agility)
                *   Text: "Your Charm, Presence, Persuasiveness, and Force of Will." (Charisma)
                *   Text: "Your Reasoning, Understanding, and Wisdom." (Intelligence)
                *   Tailwind: `text-sm text-light-text-secondary mb-2`
        *   **Bottom Section - Input & Derived Stats:**
            *   Point Buy Input Control (`div`):
                *   Tailwind: `flex items-center gap-2 mb-2`
                *   Melt UI `Button` (for "-"): Tailwind: `p-2 h-8 w-8 flex items-center justify-center bg-magenta-error/70 hover:bg-magenta-error rounded-md text-lg`
                *   Melt UI `Input` (type="number", readonly): Displays current `attributes.Might`. Tailwind: `w-12 text-center text-xl font-semibold bg-dark-bg-secondary rounded-md p-1 h-8`
                *   Melt UI `Button` (for "+"): Tailwind: `p-2 h-8 w-8 flex items-center justify-center bg-purple-primary/70 hover:bg-purple-primary rounded-md text-lg`
            *   **Integrated Derived Stats Display (Conditional on attribute):**
                *   If Charisma: `span` "Grit: {gritPoints}" (Tailwind: `text-xs text-light-text-secondary`)
                *   If Agility: `span` "Jump: {jumpDistance}" (Tailwind: `text-xs text-light-text-secondary`)
                *   If Intelligence: `span` "Skill Pts (Base): {provisionalSkillPoints}" (Tailwind: `text-xs text-light-text-secondary`)
    *   **Prime Modifier Tie-Breaker (Conditional UI):**
        *   If a tie for highest attribute occurs:
            *   Message (`p`): "Multiple attributes are tied for highest. Please select your Prime Modifier:" (Tailwind: `my-4 text-yellow-accent`)
            *   Melt UI `RadioGroup` (`<RadioGroup.Root bind:value={$primeModifierAttribute}>`):
                *   Tailwind: `flex gap-4`
                *   `RadioGroup.Item` for each tied attribute, styled.

**4. Key Calculated Stats Display (`div` section):**
    *   Tailwind: `mt-6 grid grid-cols-1 md:grid-cols-2 gap-4`
    *   Prime Modifier Card (`div`):
        *   Tailwind: `p-4 bg-purple-primary/20 rounded-lg text-center`
        *   Label (`span`): "Prime Modifier: " (Tailwind: `text-lg text-light-text-primary`)
        *   Value (`span`): "{primeModifierValue}" (Tailwind: `text-2xl font-bold text-yellow-accent`)
    *   Provisional Skill Points Card (`div`):
        *   Tailwind: `p-4 bg-dark-bg-primary rounded-lg text-center`
        *   Label (`span`): "Base Skill Points (5 + Int Mod): " (Tailwind: `text-md text-light-text-primary`)
        *   Value (`span`): "{provisionalSkillPoints}" (Tailwind: `text-xl font-semibold text-blue-info`)

**5. Provisional Formulas Display (`div` section):**
    *   Title (`h3`): "Provisional Base Stats (Finalized after Class & Equipment)" (Tailwind: `text-lg font-medium mt-6 mb-3`)
    *   Layout: Tailwind: `grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary`
    *   `p`: "Health Points = Class HP + Might ({attributes.Might}) + Ancestry HP"
    *   `p`: "Stamina Points = Class SP"
    *   `p`: "Mana Points = Class MP"
    *   `p`: "Precision Defense (PD) = 8 + CM(+1) + Agility ({attributes.Agility}) + Intelligence ({attributes.Intelligence}) + Equip Bonuses"
    *   `p`: "Area Defense (AD) = 8 + CM(+1) + Might ({attributes.Might}) + Charisma ({attributes.Charisma}) + Equip Bonuses"

### D. Functions & Logic:
*   `getModifier(attributeScore)`: Helper function to get an attribute's modifier. In DC20, the attribute score itself (e.g., +2, -1, 0) is directly used as the modifier. This function should `return attributeScore;`. It handles `null` or `undefined` scores by returning `0`.
*   `calculatePointsSpent(attributes)`:
    *   Calculates total points spent. Each attribute starts at -2. Each +1 increase costs 1 point. Total budget is 12 points. Formula: `sum(current_attr_value - (-2))` should equal 12 when done.
*   `calculateSaveMasteries(attributes, combatMastery)`:
    *   Calculates Save Mastery for each attribute. Formula: `attributeScore + combatMastery`. Combat Mastery (CM) at Level 1 is +1 (DC20, p.22).
*   Event handlers for attribute +/- buttons:
    *   Increment/decrement the specific attribute.
    *   Ensure attribute value stays within -2 and +3 (Level 1 limit). The Level 1 attribute cap is +3.
    *   Update `characterInProgressStore`.
*   Logic to determine `primeModifierAttribute`:
    *   Find the highest attribute(s).
    *   If one is highest, set it.
    *   If multiple are tied, enable the tie-breaker UI and use the user's selection.
*   Validation logic:
    *   `pointsRemaining` cannot be negative when user tries to advance (or disable increment buttons if budget met).
    *   Ensure no attribute exceeds the Level 1 cap of +3.
*   Function to persist current state to `characterInProgressStore` and call backend API on "Next Step".

### E. Styling Notes (TailwindCSS):
*   Use Inter font with appropriate weights.
*   Adhere to the chosen dark mode color palette.
*   Ensure clear visual hierarchy and readability.
*   Tooltips (Melt UI `Tooltip`) next to calculated values (Prime Modifier, Save Masteries, Grit, Jump, Skill Pts) explaining their calculation formula briefly (e.g., "Prime: Highest Attribute", "Save: Attribute + Combat Mastery (+1)").

## VI. Backend API Endpoint (`/api/character/progress/stageA` - SvelteKit Form Action or API Route)
*   Accepts: `attributes` object from the frontend.
*   Validates:
    *   Each attribute is between -2 and +3.
    *   Total points spent from a -2 base for all attributes equals 12.
*   Action: Saves the validated `attributes` to the `CharacterInProgress` table using Prisma.
*   Returns: Success/error response.

---
````

## File: projectPlan/stage2.md
````markdown
# AI Generation Guide: Character Creator - Stage B (Ancestry Choices with Overflow Helper Panel)

## I. Overall Stage Objective
Create a Svelte component (e.g., `StageB_Ancestry.svelte`) that allows the user to:
1.  Select 1 or 2 Ancestries.
2.  Allocate 5 Ancestry Points for Traits from the chosen Ancestry/Ancestries, respecting rules (Minor Trait limit, Negative Trait point gain).
3.  If an Ancestry Trait would cause an attribute (set in Stage A) to exceed its Level 1 cap (+3), present a Helper Panel to allow the user to reduce other attributes to make room.
4.  View chosen traits and the impact on Ancestry Points.
5.  View the (read-only but dynamically updated) stats from Stage A, reflecting any changes made due to trait selections or reallocations via the Helper Panel.
6.  Persist these choices to a Svelte store and, upon proceeding, save to the `CharacterInProgress` table.

## II. Svelte Component: `StageB_Ancestry.svelte`

### A. Props:
*   `characterInProgressStore`: Writable Svelte store (holds `attributesFromStageA`, `selectedAncestries`, `selectedTraits`, `ancestryPointsAvailable`, etc.). Attribute values (e.g., `$characterInProgressStore.attribute_might`) set in Stage A are accessed from this store for display and overflow calculations.

### B. Internal State (Reactive Svelte Variables):
*   `selectedAncestry1_ID`: String | null
*   `selectedAncestry2_ID`: String | null
*   `availableTraitsForSelection`: Reactive/Derived Array (based on selected ancestries)
*   `currentSelectedTraits`: Array of Trait Objects (e.g., `[{ id: 'human_resolve', cost: 1, name: 'Human Resolve', ...}, ...]`)
*   `ancestryPointsBudget`: Number (constant: 5)
*   `pointsFromNegativeTraits`: Reactive/Derived Number
*   `totalAncestryPointsAvailable`: Reactive/Derived Number (`$: ancestryPointsBudget + pointsFromNegativeTraits`)
*   `ancestryPointsSpent`: Reactive/Derived Number
*   `ancestryPointsRemaining`: Reactive/Derived Number (`$: totalAncestryPointsAvailable - ancestryPointsSpent`)
*   `showOverflowHelperPanel`: Boolean (default: false)
*   `overflowTrait`: Object | null (the trait causing the overflow)
*   `overflowAttributeName`: String | null
*   `overflowAmount`: Number (how many points attribute would go over cap)
*   `tempAttributesForReallocation`: Object (copy of current `attributesFromStageA` for use in panel)
*   `pointsFreedInPanel`: Number (tracks how many points user has reduced in panel)

### C. UI Structure & Components (Melt UI + TailwindCSS):

**1. Main Container & Stage Title:** (Similar to Stage A)
    *   Title (`h2`): "Step 2: Ancestry Choices"

**2. Ancestry Selection Section (`div`):**
    *   Title (`h3`): "Choose Your Ancestry (Up to 2)"
    *   Two Melt UI `Select` components (or custom `SelectionCard`s):
        *   For "Ancestry 1" (bind to `selectedAncestry1_ID`)
        *   For "Ancestry 2" (bind to `selectedAncestry2_ID`, with a "None" option).
        *   Populated from static rule data. Styled with Tailwind.

**3. Ancestry Points & Trait Allocation Section (`div`):**
    *   Budget Display (`p`): "Ancestry Points: {ancestryPointsRemaining} / {totalAncestryPointsAvailable} Remaining"
    *   **Conditional Trait Listing (for Ancestry 1 and Ancestry 2 if selected):**
        *   For each selected ancestry:
            *   Subtitle (`h4`): "[Ancestry Name] Traits"
            *   List (`ul`) of its available traits:
                *   Each trait item (`li` - Tailwind: `flex items-center justify-between p-2 my-1 rounded dark:hover:bg-dark-bg-primary`):
                    *   Melt UI `Checkbox` (or `Toggle`) for selection (bind checked state to logic that updates `currentSelectedTraits` and points).
                    *   Label: Trait Name (Cost: X) - (Tailwind: `font-medium`). Dynamic class if selected (`text-yellow-accent`).
                    *   Melt UI `Tooltip` (on hover/focus on trait name): Shows full trait description.
                    *   *If selecting this trait would cause an overflow AND the Helper Panel isn't already open for it, clicking it should trigger `openOverflowHelperPanel(trait)` instead of direct selection.*
    *   *Trait listings (name, cost, description, effects, Minor/Negative flags) are populated from static rule data, using `IAncestry` and `ITrait` TypeScript interfaces.*

**2. Ancestry Selection Section (`div`):**
    *   Title (`h3`): "Choose Your Ancestry (Up to 2)"
    *   Two Melt UI `Select` components (or custom `SelectionCard`s):
        *   For "Ancestry 1" (bind to `selectedAncestry1_ID`)
        *   For "Ancestry 2" (bind to `selectedAncestry2_ID`, with a "None" option).
        *   Populated from static rule data. Styled with Tailwind.

**3. Ancestry Points & Trait Allocation Section (`div`):**
    *   Budget Display (`p`): "Ancestry Points: {ancestryPointsRemaining} / {totalAncestryPointsAvailable} Remaining"
    *   **Conditional Trait Listing (for Ancestry 1 and Ancestry 2 if selected):**
        *   For each selected ancestry:
            *   Subtitle (`h4`): "[Ancestry Name] Traits"
            *   List (`ul`) of its available traits:
                *   Each trait item (`li` - Tailwind: `flex items-center justify-between p-2 my-1 rounded dark:hover:bg-dark-bg-primary`):
                    *   Melt UI `Checkbox` (or `Toggle`) for selection (bind checked state to logic that updates `currentSelectedTraits` and points).
                    *   Label: Trait Name (Cost: X) - (Tailwind: `font-medium`). Dynamic class if selected (`text-yellow-accent`).
                    *   Melt UI `Tooltip` (on hover/focus on trait name): Shows full trait description.
                    *   *If selecting this trait would cause an overflow AND the Helper Panel isn't already open for it, clicking it should trigger `openOverflowHelperPanel(trait)` instead of direct selection.*

**4. Chosen Traits Summary (`div`):**
    *   Title (`h3`): "Selected Traits"
    *   List (`ul`) of `currentSelectedTraits`, showing name, cost, and source ancestry.
    *   Tailwind: `mt-4 p-3 bg-dark-bg-primary rounded-md`

**5. Read-Only Display of Updated Stage A Stats (`div` - crucial for feedback):**
    *   Title (`h3`): "Current Core Stats (Reflecting Ancestry Choices)"
    *   Display Might, Agility, Cha, Int (from `$characterInProgressStore.attributesFromStageA`, which gets updated by Helper Panel).
    *   Display Prime Modifier, Save Masteries, Grit, Jump, Provisional Skill Points (all derived from updated attributes).
    *   Highlight the Prime Modifier attribute.

**6. Overflow Helper Panel (Melt UI `Dialog` - `Dialog.Root bind:open={$showOverflowHelperPanel}`):**
    *   Melt UI `Dialog.Trigger` (not explicitly needed if opened programmatically).
    *   Melt UI `Dialog.Portal` -> `Dialog.Overlay` (styled with Tailwind for dark semi-transparent bg) -> `Dialog.Content`
    *   **`Dialog.Content` Styling (Tailwind):** `bg-dark-bg-secondary p-6 rounded-lg shadow-xl w-full max-w-md text-light-text-primary`
    *   `Dialog.Title`: "Attribute Cap Reached for '{overflowTrait.name}'"
    *   `Dialog.Description` (`p`): "Selecting '{overflowTrait.name}' will increase '{overflowAttributeName}' by +{overflowTrait.attributeBonusValue}, exceeding the Level 1 cap of +3. You have {overflowAmount} point(s) to free up by reducing other attributes."
    *   **Attribute Reduction Section within Panel:**
        *   The panel allows reducing any attribute *except* the one `overflowAttributeName` (that the `overflowTrait` is trying to increase). Attributes cannot be reduced below -2.
        *   For each of the 4 attributes (displaying values from `tempAttributesForReallocation`):
            *   Label: Attribute Name: [Current Value in Panel]
            *   Melt UI `Button` ("-"):
                *   Disabled if attribute is `overflowAttributeName` or if its value in `tempAttributesForReallocation` is already -2.
                *   Action: Decrements the attribute in `tempAttributesForReallocation`, increments `pointsFreedInPanel`.
            *   *(No "+" button in this panel, only reduction is allowed)*
    *   Display (`p`): "Points Freed: {pointsFreedInPanel} / {overflowAmount}"
    *   **Panel Actions (`div` - Tailwind: `flex justify-end gap-3 mt-4`):**
        *   Melt UI `Button` ("Cancel Trait"):
            *   Action: `closeOverflowHelperPanel()`.
            *   Tailwind: `bg-gray-500 hover:bg-gray-600 ...`
        *   Melt UI `Button` ("Apply & Select Trait"):
            *   Disabled if `pointsFreedInPanel !== overflowAmount`.
            *   Action: `confirmAttributeReallocationAndSelectTrait()`.
            *   Tailwind: `bg-purple-primary hover:bg-purple-primary/80 ...`

### D. Functions & Logic:
*   `handleTraitSelection(trait)`:
    *   Checks for attribute overflow if trait modifies an attribute.
    *   If overflow: `openOverflowHelperPanel(trait)`. *Clicking a problematic trait triggers this instead of direct selection and point deduction.*
    *   Else: Toggles trait in `currentSelectedTraits`, updates point counts, checks Minor/Negative Trait limits.
*   `openOverflowHelperPanel(trait)`:
    *   Sets `overflowTrait`, `overflowAttributeName`, `overflowAmount`.
    *   Copies current `attributesFromStageA` to `tempAttributesForReallocation`.
    *   Resets `pointsFreedInPanel`.
    *   Sets `showOverflowHelperPanel = true`.
*   `closeOverflowHelperPanel()`:
    *   Sets `showOverflowHelperPanel = false`.
    *   Resets `overflowTrait`, `tempAttributesForReallocation`, `pointsFreedInPanel`.
*   `confirmAttributeReallocationAndSelectTrait()`:
    *   Updates the main `$characterInProgressStore.attributesFromStageA` with values from `tempAttributesForReallocation`.
    *   Adds `overflowTrait` to `currentSelectedTraits` and updates point counts.
    *   `closeOverflowHelperPanel()`.
*   Logic to enforce: Max 2 ancestries, 1 Minor Trait, max +2 points gain from Negative Traits, total Ancestry Points spent = 5 (after accounting for negative traits).
*   All choices and final attribute adjustments persisted to `characterInProgressStore` and then to backend.
*   **UI Feedback for Trait Rules:**
    *   When a Minor Trait is selected, disable selection of other Minor Traits and provide a tooltip/message.
    *   When selecting Negative Traits, `totalAncestryPointsAvailable` display updates. If the +2 point gain limit from Negative Traits is reached, disable further Negative Trait selection and message the user.
    *   Disable trait selection if `ancestryPointsRemaining` would be negative (unless it's a negative trait resolving this).

### E. Styling Notes (TailwindCSS):
*   Dark mode theme, Inter font, chosen color palette.
*   Clear visual distinction for selected ancestries and traits (`text-yellow-accent`, borders).
*   Helper Panel (Dialog) should feel like a focused, temporary interruption.

## VI. Backend API Endpoint (`/api/character/progress/stageB` - SvelteKit Form Action or API Route)
*   Accepts: `characterInProgressStore` data (including potentially modified `attributesFromStageA`, `selectedAncestries`, `selectedTraits`).
*   Validates:
    *   All attribute values are still within -2 and +3.
    *   Total points spent on attributes (from -2 base) still equals 12.
    *   Ancestry Point rules (total 5 points used, Minor Trait limit, Negative Trait limit).
*   Action: Saves/updates the relevant fields in the `CharacterInProgress` table using Prisma.
*   Returns: Success/error response.

---
````

## File: projectPlan/stage3.md
````markdown
# AI Generation Guide: Character Creator - Stage C (Class Selection)

## I. Overall Stage Objective
Create a Svelte component (e.g., `StageC_Class.svelte`) that allows the user to:
1.  Browse and select a Character Class from a list of options.
2.  View a detailed description, Level 1 features, and specific Level 1 benefits (HP, SP/MP, skill/trade points, starting known abilities) for the selected class.
3.  Make any necessary Level 1 feature choices specific to the selected class.
4.  See the `CharacterSnapshotPanel` update with finalized HP, SP, MP, and adjusted skill/trade point pools based on the class selection.
5.  Persist these choices to a Svelte store and, upon proceeding, save to the `CharacterInProgress` table via a backend API call.

## II. Svelte Component: `StageC_Class.svelte`

### A. Props:
*   `characterInProgressStore`: Writable Svelte store (holds `attributesFromStageA`, `selectedAncestries`, `selectedTraits`, `selectedClassID`, `classFeatureChoicesLvl1`, etc.).
*   `staticRuleData`: Object containing all class definitions, features, Lvl 1 benefits, etc.

### B. Internal State (Reactive Svelte Variables):
*   `selectedClassID`: String | null (bound to the Svelte store)
*   `currentFeatureChoices`: Object (e.g., `{ sorcererOrigin: null, clericDomain1: null }` - specific to class, bound to Svelte store)
*   `derivedSelectedClassData`: Reactive/Derived Object (`$: derivedSelectedClassData = $staticRuleData.classes.find(c => c.id === $selectedClassID)`)

### C. UI Structure & Components (Melt UI + TailwindCSS):

**1. Main Container & Stage Title:**
    *   Container (`div`): Tailwind: `p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary`
    *   Title (`h2`): "Step 3: Choose Your Class" (Tailwind: `text-2xl font-semibold mb-6 text-yellow-accent`)

**2. Class Selection Area (`div`):**
    *   Layout: CSS Grid (`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8`)
    *   **For each Class in `staticRuleData.classes`:**
        *   **`SelectionCard.svelte` Component (or custom styled `div` with Melt UI `Toggle` behavior):**
            *   Props: `classData`, `isSelected`, `onSelect`.
            *   Displays: Class Name (`h4 text-lg font-medium text-yellow-accent`), Short Description (`p text-xs text-light-text-secondary`).
            *   Tailwind: `p-4 border rounded-lg cursor-pointer transition-all dark:border-gray-700 dark:hover:bg-dark-bg-primary ui-selected:bg-purple-primary/30 ui-selected:border-purple-primary ui-selected:ring-2 ui-selected:ring-purple-primary`
            *   On click: calls `onSelect(classData.id)`.

**3. Selected Class Details Area (`div` - Conditional: `{#if $selectedClassID}`):**
    *   Tailwind: `mt-6 p-4 bg-dark-bg-primary rounded-lg`
    *   Selected Class Name (`h3`): `{$derivedSelectedClassData.name}` (Tailwind: `text-xl font-bold text-yellow-accent mb-2`)
    *   Full Description (`p`): `{$derivedSelectedClassData.fullDescription}` (Tailwind: `mb-4 text-light-text-primary leading-relaxed`)

    *   **Level 1 Class Features (`div`):**
        *   Title (`h4`): "Level 1 Features" (Tailwind: `text-lg font-medium mb-3 text-blue-info`)
        *   List (`ul`):
            *   For each feature in `$derivedSelectedClassData.level1Features`:
                *   Item (`li` - Tailwind: `mb-3 p-3 bg-dark-bg-secondary rounded`):
                    *   Feature Name (`strong`): `{feature.name}` (Tailwind: `text-light-text-primary`)
                    *   Feature Description (`p`): `{feature.description}` (Tailwind: `text-sm text-light-text-secondary mt-1`)
                    *   Melt UI `Tooltip` for any complex terms.

    *   **Level 1 Feature Choices (Conditional - `{#if $derivedSelectedClassData.featureChoicesLvl1 && $derivedSelectedClassData.featureChoicesLvl1.length > 0}`):**
        *   Title (`h4`): "Feature Choices" (Tailwind: `text-lg font-medium my-3 text-blue-info`)
        *   For each choice definition in `$derivedSelectedClassData.featureChoicesLvl1`:
            *   Label (Melt UI `Label`): `{choice.prompt}` (Tailwind: `block mb-1 font-medium`)
            *   If single select (e.g., Sorcerer Origin):
                *   Melt UI `Select` (`<Select.Root bind:value={$currentFeatureChoices[choice.id]}>`):
                    *   Styled `Select.Trigger` and `Select.Content` with `Select.Item` for each option.
            *   If multi-select (e.g., Cleric Domains - limit to 2):
                *   Group of Melt UI `Checkbox` components, each with a `Label`.
                *   Logic to enforce selection limits.

    *   **Level 1 Class Benefits Summary (`div`):**
        *   Title (`h4`): "Level 1 Benefits" (Tailwind: `text-lg font-medium my-3 text-blue-info`)
        *   Layout: Grid or flex list.
        *   `p`: "Base HP Increase: +{$derivedSelectedClassData.baseHpBonus}"
        *   `p`: "Starting Stamina Points: {$derivedSelectedClassData.startingSP}"
        *   `p`: "Starting Mana Points: {$derivedSelectedClassData.startingMP}"
        *   `p`: "Skill Points Granted: +{$derivedSelectedClassData.skillPointGrantLvl1 || 0}"
        *   `p`: "Trade Points Granted: +{$derivedSelectedClassData.tradePointGrantLvl1 || 0}"
        *   `p`: "Combat Training: {$derivedSelectedClassData.combatTraining.join(', ')}"
        *   `p`: "Starting Cantrips Known: {$derivedSelectedClassData.cantripsKnownLvl1 || 0}" (list if specific)
        *   `p`: "Starting Spells Known: {$derivedSelectedClassData.spellsKnownLvl1 || 0}" (list if specific)
        *   `p`: "Starting Maneuvers Known: {$derivedSelectedClassData.maneuversKnownLvl1 || 0}" (list if specific)
        *   `p`: "Starting Techniques Known: {$derivedSelectedClassData.techniquesKnownLvl1 || 0}" (list if specific)

**4. Character Snapshot Panel (`CharacterSnapshot.svelte` - Reusable Component):**
    *   Props: `characterDataStore` (the main store from `StageC_Class.svelte`).
    *   Displays: Attributes, Prime Mod, Saves, Grit, Jump, **Final HP, Final SP, Final MP**, Provisional PD, Provisional AD, **Updated Skill/Trade Point Totals.**
    *   Tailwind: Positioned consistently, perhaps in a sidebar or a distinct section on the page. Values should reactively update when class is selected or feature choices are made that impact these stats.

### D. Functions & Logic:
*   `selectClass(classId)`:
    *   Updates `$characterInProgressStore.selectedClassID = classId`.
    *   Resets `$characterInProgressStore.classFeatureChoicesLvl1` to defaults for the new class.
    *   Triggers recalculation of HP, SP, MP, and skill/trade point pools in the main store, which the Snapshot Panel listens to.
*   Event handlers for feature choice inputs (updates `$characterInProgressStore.classFeatureChoicesLvl1`).
*   Validation: Ensure all required Level 1 feature choices are made before allowing "Next Step".
*   Function to persist current state to `characterInProgressStore` and call backend API.

### E. Static Rule Data Structure (Example Snippet for `staticRuleData.classes`):
```typescript
// Example for a class object
{
  id: 'sorcerer',
  name: 'Sorcerer',
  shortDescription: 'Channels raw magic from within.',
  fullDescription: 'Sorcerers tap into the raw magic in their own bodies...',
  baseHpBonus: 0, // Added to (Might + Ancestry HP + Class Table HP progression)
  startingSP: 0,
  startingMP: 6, // From Class Table
  skillPointGrantLvl1: 0, // Additional points beyond background
  tradePointGrantLvl1: 0,
  combatTraining: ['Light Armor'],
  cantripsKnownLvl1: 2, // From Class Table
  spellsKnownLvl1: 3,   // From Class Table
  level1Features: [
    { name: 'Innate Power', description: 'Choose a Sorcerous Origin...' },
    { name: 'Overload Magic', description: 'You can spend 2 AP to channel raw energy...' },
    { name: 'Sorcery (Flavor)', description: 'You learn the Sorcery Spell.' }
  ],
  featureChoicesLvl1: [
    {
      id: 'sorcerousOrigin', // Key for store
      prompt: 'Choose your Sorcerous Origin:',
      type: 'select', // 'select' or 'multiselect'
      options: [
        { value: 'intuitive_magic', label: 'Intuitive Magic' },
        { value: 'resilient_magic', label: 'Resilient Magic' },
        { value: 'unstable_magic', label: 'Unstable Magic' }
      ]
    }
  ],
  // ... other class specific data like spell list access
}
````

## File: src/lib/rulesdata/languages.ts
````typescript
import type { ILanguageData } from './types';

export const languagesData: ILanguageData[] = [
  {
    id: 'common',
    name: 'Common',
    type: 'standard', // From DC20 p.18
    description: 'Common is the most simple and universal language in the world. All Player Characters start Fluent in Common.'
  },
  {
    id: 'elvish',
    name: 'Elvish',
    type: 'standard', // From DC20 p.18
    description: 'Elvish is a fluid and melodic language spoken by Elves. Typical Speakers: Elves.'
  },
  {
    id: 'draconic',
    name: 'Draconic',
    type: 'exotic', // From DC20 p.18
    description: 'Draconic is a harsh, guttural language spoken by Dragons and Dragonkin. Typical Speakers: Dragons, Dragonkin.'
  },
  {
    id: 'dwarvish',
    name: 'Dwarvish',
    type: 'standard', // From DC20 p.18
    description: 'Dwarvish is a language of hard consonants and guttural sounds, spoken by Dwarves. Typical Speakers: Dwarves.'
  },
  {
    id: 'gnomish',
    name: 'Gnomish',
    type: 'standard', // From DC20 p.18
    description: 'Gnomish is a language filled with trills and clicks, spoken by Gnomes. Typical Speakers: Gnomes.'
  },
  {
    id: 'goblin',
    name: 'Goblin',
    type: 'standard', // From DC20 p.18
    description: 'Goblin is a rough and simple language spoken by Goblins, Hobgoblins, and Bugbears. Typical Speakers: Goblins, Hobgoblins, Bugbears.'
  },
  {
    id: 'halfling',
    name: 'Halfling',
    type: 'standard', // From DC20 p.18
    description: 'Halfling is a soft and gentle language spoken by Halflings. Typical Speakers: Halflings.'
  },
  {
    id: 'orcish',
    name: 'Orcish',
    type: 'standard', // From DC20 p.18
    description: 'Orcish is a brutal and harsh language spoken by Orcs. Typical Speakers: Orcs.'
  },
  {
    id: 'primordial',
    name: 'Primordial',
    type: 'exotic', // From DC20 p.18
    description: 'Primordial is the language of Elementals. Typical Speakers: Elementals.'
  },
  {
    id: 'celestial',
    name: 'Celestial',
    type: 'exotic', // From DC20 p.18
    description: 'Celestial is the language of Celestials. Typical Speakers: Celestials.'
  },
  {
    id: 'abyssal',
    name: 'Abyssal',
    type: 'exotic', // From DC20 p.18
    description: 'Abyssal is the language of Demons. Typical Speakers: Demons.'
  },
  {
    id: 'infernal',
    name: 'Infernal',
    type: 'exotic', // From DC20 p.18
    description: 'Infernal is the language of Devils. Typical Speakers: Devils.'
  },
  {
    id: 'undercommon',
    name: 'Undercommon',
    type: 'exotic', // From DC20 p.18
    description: 'Undercommon is a language spoken by inhabitants of the Underdark, such as Drow. Typical Speakers: Drow, Underdark inhabitants.'
  }
];
````

## File: src/lib/rulesdata/skills.ts
````typescript
import type { ISkillData } from './types';

export const skillsData: ISkillData[] = [
  {
    id: 'athletics',
    name: 'Athletics',
    attributeAssociation: 'might',
    description: 'Athletics covers activities that involve physical prowess, such as climbing, swimming, and jumping in difficult circumstances, or participating in a Grapple.'
  },
  {
    id: 'intimidation',
    name: 'Intimidation',
    attributeAssociation: 'might',
    description: 'Intimidation covers attempts to influence a creature’s behavior using threats, hostile actions, and physical violence.'
  },
  {
    id: 'acrobatics',
    name: 'Acrobatics',
    attributeAssociation: 'agility',
    description: 'Acrobatics covers activities that require flexibility, nimbleness, and balance.'
  },
  {
    id: 'trickery',
    name: 'Trickery',
    attributeAssociation: 'agility',
    description: 'Trickery covers non-verbal means of deceiving others, such as pickpocketing things, concealing an object on your person, or other forms of physical deception.'
  },
  {
    id: 'stealth',
    name: 'Stealth',
    attributeAssociation: 'agility',
    description: 'Stealth covers attempts to avoid being seen or heard by other creatures, such as sneaking about or hiding behind cover.'
  },
  {
    id: 'animal',
    name: 'Animal',
    attributeAssociation: 'charisma',
    description: 'Animal covers interactions such as corralling, training, calming, and gauging the intention of Beasts.'
  },
  {
    id: 'insight',
    name: 'Insight',
    attributeAssociation: 'charisma',
    description: 'Insight governs your ability to discern intentions. This could be from observing a creature’s body language, facial cues, and mannerisms. Alternatively, Insight can represent a gut feeling or intuition about a situation.'
  },
  {
    id: 'influence',
    name: 'Influence',
    attributeAssociation: 'charisma',
    description: 'Influence covers your attempts to manipulate a creature’s behavior using compelling arguments based on truth, half-truths, lies, or some combination in between.'
  },
  {
    id: 'investigation',
    name: 'Investigation',
    attributeAssociation: 'intelligence',
    description: 'Investigation covers using your senses to search for and discover things that are not readily observable. You look for clues and then make deductions on those clues to try and discern the locations of things or how they work (finding hidden objects, secret doors, or weak points in structures). It also covers the process of researching information through various texts.'
  },
  {
    id: 'medicine',
    name: 'Medicine',
    attributeAssociation: 'intelligence',
    description: 'Medicine covers activities that involve medical knowledge and application, such as treating a wounded creature, diagnosing an illness, or identifying a cure to an ailment.'
  },
  {
    id: 'survival',
    name: 'Survival',
    attributeAssociation: 'intelligence',
    description: 'Survival covers the activities required to survive in the wilderness, such as tracking quarry, foraging for food and water, and navigating through uncharted territory.'
  },
  {
    id: 'awareness',
    name: 'Awareness',
    attributeAssociation: 'prime', // Uses Prime Modifier
    description: 'Awareness governs your ability to detect the presence of other creatures or objects using your sight, hearing, smell, or other senses.'
  },
];
````

## File: src/lib/rulesdata/trades.ts
````typescript
import { ITradeData } from './types';

export const tradesData: ITradeData[] = [
  {
    id: 'alchemy',
    name: 'Alchemy',
    attributeAssociation: 'intelligence',
    description: 'Alchemy is the practice of creating something by combining or changing other things. This includes creating potions, poisons, and other alchemical substances.',
    tools: 'Alchemist’s Supplies'
  },
  {
    id: 'history',
    name: 'History',
    attributeAssociation: 'intelligence',
    description: 'History is the study of past events, ancient lore, and how civilizations have shaped the present. This includes recalling information about historical figures, events, and cultures.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'arcana',
    name: 'Arcana',
    attributeAssociation: 'intelligence',
    description: 'Arcana is the study of magic, its history, theories, and the planes of existence. This includes recalling information about spells, magical creatures, and magical phenomena.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'architecture',
    name: 'Architecture',
    attributeAssociation: 'intelligence',
    description: 'Architecture is the knowledge of building design, construction, and structural integrity. This includes understanding how buildings are constructed, identifying weak points, and designing structures.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'blacksmithing',
    name: 'Blacksmithing',
    attributeAssociation: 'might',
    description: 'Blacksmithing is the crafting and repairing of metal objects, including weapons and armor. This includes working with forges, hammers, and other tools to shape metal.',
    tools: 'Smith’s Tools'
  },
  {
    id: 'brewing',
    name: 'Brewing',
    attributeAssociation: 'intelligence',
    description: 'Brewing is the art of creating beverages through fermentation, such as beer, wine, and spirits. This includes understanding the process of fermentation and using brewing equipment.',
    tools: 'Brewer’s Supplies'
  },
  {
    id: 'calligraphy',
    name: 'Calligraphy',
    attributeAssociation: 'agility',
    description: 'Calligraphy is the art of decorative handwriting and lettering. This includes using various pens, inks, and techniques to create visually appealing text.',
    tools: 'Calligrapher’s Supplies'
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    attributeAssociation: 'might',
    description: 'Carpentry is the crafting and repairing of wooden objects and structures. This includes working with wood, saws, hammers, and other tools to build and repair.',
    tools: 'Carpenter’s Tools'
  },
  {
    id: 'cartography',
    name: 'Cartography',
    attributeAssociation: 'intelligence',
    description: 'Cartography is the art and science of mapmaking. This includes creating maps, reading maps, and navigating using maps.',
    tools: 'Cartographer’s Tools'
  },
  {
    id: 'cobbling',
    name: 'Cobbling',
    attributeAssociation: 'agility',
    description: 'Cobbling is the crafting and repairing of footwear. This includes working with leather, thread, and tools to create and repair shoes and boots.',
    tools: 'Cobbler’s Tools'
  },
  {
    id: 'cooking',
    name: 'Cooking',
    attributeAssociation: 'intelligence',
    description: 'Cooking is the preparation of food for consumption. This includes understanding ingredients, recipes, and cooking techniques.',
    tools: 'Cook’s Utensils'
  },
  {
    id: 'deciphering',
    name: 'Deciphering',
    attributeAssociation: 'intelligence',
    description: 'Deciphering is the understanding of coded messages, ancient scripts, or hidden meanings. This includes analyzing patterns, symbols, and languages to uncover hidden information.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'disguise',
    name: 'Disguise',
    attributeAssociation: 'charisma',
    description: 'Disguise is the altering of one’s appearance to resemble someone else or a different type of person. This includes using makeup, costumes, and props to change appearance.',
    tools: 'Disguise Kit'
  },
  {
    id: 'forgery',
    name: 'Forgery',
    attributeAssociation: 'agility',
    description: 'Forgery is the creating of convincing copies of documents, signatures, or objects. This includes replicating details and materials to create fakes.',
    tools: 'Forgery Kit'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    attributeAssociation: 'charisma',
    description: 'Gaming is the proficiency in various games of chance or skill. This includes understanding rules, strategies, and playing games.',
    tools: 'Gaming Set'
  },
  {
    id: 'herbalism',
    name: 'Herbalism',
    attributeAssociation: 'intelligence',
    description: 'Herbalism is the knowledge of plants, their properties, and uses. This includes identifying plants, preparing herbal remedies, and understanding plant effects.',
    tools: 'Herbalism Kit'
  },
  {
    id: 'jeweler',
    name: 'Jeweler',
    attributeAssociation: 'agility',
    description: 'Jeweler is the crafting and repairing of jewelry. This includes working with precious metals, gems, and tools to create and repair jewelry.',
    tools: 'Jeweler’s Tools'
  },
  {
    id: 'leatherworking',
    name: 'Leatherworking',
    attributeAssociation: 'agility',
    description: 'Leatherworking is the crafting and repairing of leather goods. This includes working with leather, tools, and techniques to create and repair items.',
    tools: 'Leatherworker’s Tools'
  },
  {
    id: 'linguistics',
    name: 'Linguistics',
    attributeAssociation: 'intelligence',
    description: 'Linguistics is the study of languages, their structure, and origins. This includes understanding grammar, syntax, and the history of languages.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'masonry',
    name: 'Masonry',
    attributeAssociation: 'might',
    description: 'Masonry is the working with stone to build structures or objects. This includes cutting, shaping, and laying stone to create buildings and other structures.',
    tools: 'Mason’s Tools'
  },
  {
    id: 'medicine',
    name: 'Medicine',
    attributeAssociation: 'intelligence',
    description: 'Medicine is the knowledge and practice of healing injuries and treating diseases. This includes diagnosing ailments, administering treatments, and understanding medical procedures.',
    tools: 'Healer’s Kit'
  },
  {
    id: 'music',
    name: 'Music',
    attributeAssociation: 'charisma',
    description: 'Music is the performance of music using instruments or voice. This includes playing instruments, singing, and understanding musical theory.',
    tools: 'Musical Instrument'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    attributeAssociation: 'intelligence',
    description: 'Navigation is the determining of one’s position and plotting a course. This includes using maps, compasses, and celestial bodies to navigate.',
    tools: 'Navigator’s Tools'
  },
  {
    id: 'painting',
    name: 'Painting',
    attributeAssociation: 'agility',
    description: 'Painting is the creating of art using paints. This includes using various paints, brushes, and techniques to create visual art.',
    tools: 'Painter’s Supplies'
  },
  {
    id: 'poisoner',
    name: 'Poisoner',
    attributeAssociation: 'intelligence',
    description: 'Poisoner is the knowledge and creation of poisons. This includes identifying poisonous substances, preparing poisons, and understanding their effects.',
    tools: 'Poisoner’s Kit'
  },
  {
    id: 'pottery',
    name: 'Pottery',
    attributeAssociation: 'agility',
    description: 'Pottery is the crafting of objects from clay. This includes shaping, firing, and glazing clay to create various objects.',
    tools: 'Potter’s Tools'
  },
  {
    id: 'religion',
    name: 'Religion',
    attributeAssociation: 'intelligence',
    description: 'Religion is the knowledge of deities, religious practices, and holy texts. This includes understanding religious beliefs, rituals, and scriptures.',
    tools: undefined // Knowledge trade
  },
  {
    id: 'sculpting',
    name: 'Sculpting',
    attributeAssociation: 'might',
    description: 'Sculpting is the creating of three-dimensional art from various materials. This includes shaping materials like stone, wood, or clay to create sculptures.',
    tools: 'Sculptor’s Tools'
  },
  {
    id: 'smithing',
    name: 'Smithing',
    attributeAssociation: 'might',
    description: 'Smithing is the general knowledge of working with metals. This includes understanding different metals, their properties, and basic metalworking techniques.',
    tools: 'Smith’s Tools' // Often overlaps with Blacksmithing, but can be broader
  },
  {
    id: 'survival',
    name: 'Survival',
    attributeAssociation: 'intelligence',
    description: 'Survival is the knowledge and skills needed to survive in the wilderness. This includes tracking, foraging, shelter building, and navigating in natural environments.',
    tools: undefined // Knowledge trade, though often associated with tools like a hunting trap or fishing tackle
  },
  {
    id: 'tailoring',
    name: 'Tailoring',
    attributeAssociation: 'agility',
    description: 'Tailoring is the crafting and repairing of clothing and textiles. This includes working with fabric, needles, and thread to create and repair garments.',
    tools: 'Weaver’s Tools' // Or Tailor's Tools, depending on specific terminology
  },
  {
    id: 'thieves',
    name: 'Thieves’',
    attributeAssociation: 'agility',
    description: 'Thieves’ is the knowledge and skills related to thievery, including lockpicking and disarming traps. This includes understanding security measures and using specialized tools.',
    tools: 'Thieves’ Tools'
  },
  {
    id: 'vehicles_land',
    name: 'Vehicles (Land)',
    attributeAssociation: 'agility',
    description: 'Vehicles (Land) is the proficiency in operating land-based vehicles. This includes riding horses, driving carts, and operating other land vehicles.',
    tools: undefined // Proficiency, not tool-based
  },
  {
    id: 'vehicles_water',
    name: 'Vehicles (Water)',
    attributeAssociation: 'agility',
    description: 'Vehicles (Water) is the proficiency in operating water-based vehicles. This includes sailing boats, piloting ships, and operating other water vehicles.',
    tools: undefined // Proficiency, not tool-based
  },
  {
    id: 'woodcarving',
    name: 'Woodcarving',
    attributeAssociation: 'agility',
    description: 'Woodcarving is the creating of art or objects from wood. This includes shaping wood using knives, chisels, and other tools.',
    tools: 'Woodcarver’s Tools'
  }
];
````

## File: src/routes/+layout.svelte
````
<script>import "../app.css";</script>

<svelte:head>
  <title>DC20 Character Creator</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</svelte:head>

<slot></slot>
````

## File: src/routes/character-creator/+page.svelte
````
<script lang="ts">
  import { onMount } from 'svelte';
  import { characterInProgressStore, primeModifier, saveMasteries, gritPoints, jumpDistance, provisionalSkillPoints, getModifier, L1_COMBAT_MASTERY, combatMastery, maxHP, areaDefense, precisionDefense, initiative, startingSP, startingMP } from '$lib/stores/characterInProgressStore';
  import { attributesData } from '$lib/rulesdata/attributes';
  import { ancestriesData } from '$lib/rulesdata/ancestries';
  import { traitsData as traits } from '$lib/rulesdata/traits';
  import { classesData } from '$lib/rulesdata/classes';

  // --- Local State ---
  // Character Name
  let characterName: string = '';

  // Attribute Allocation
  const POINT_BUY_BUDGET = 12;
  const ATTRIBUTE_MIN = -2;
  const ATTRIBUTE_MAX_L1 = 3;

  $: currentAttributes = {
    might: $characterInProgressStore.attribute_might,
    agility: $characterInProgressStore.attribute_agility,
    charisma: $characterInProgressStore.attribute_charisma,
    intelligence: $characterInProgressStore.attribute_intelligence,
  };
  $: pointsSpent = (currentAttributes.might - ATTRIBUTE_MIN) +
                   (currentAttributes.agility - ATTRIBUTE_MIN) +
                   (currentAttributes.charisma - ATTRIBUTE_MIN) +
                   (currentAttributes.intelligence - ATTRIBUTE_MIN);
  $: pointsRemaining = POINT_BUY_BUDGET - pointsSpent;

  // Prime Modifier Tie-Breaker
  let primeModifierAttributeUserChoice: string | null = null;
  $: highestAttributeValue = Math.max(...Object.values(currentAttributes));
  $: tiedAttributes = Object.entries(currentAttributes)
      .filter(([name, value]) => value === highestAttributeValue)
      .map(([name, value]) => name);

  $: {
      if (tiedAttributes.length === 1) {
          primeModifierAttributeUserChoice = tiedAttributes[0];
      } else if (tiedAttributes.length > 1) {
          if (primeModifierAttributeUserChoice === null || !tiedAttributes.includes(primeModifierAttributeUserChoice)) {
              primeModifierAttributeUserChoice = null;
          }
      } else {
          primeModifierAttributeUserChoice = null;
      }
  }
  $: displayedPrimeModifierAttribute = tiedAttributes.length > 1 && primeModifierAttributeUserChoice !== null
      ? primeModifierAttributeUserChoice
      : $primeModifier.attribute;
  $: displayedPrimeModifierValue = displayedPrimeModifierAttribute
      ? currentAttributes[displayedPrimeModifierAttribute as keyof typeof currentAttributes]
      : $primeModifier.value;

  // --- Ancestry & Trait Selection ---
  let selectedAncestry1_ID: string | null = null;
  let selectedAncestry2_ID: string | null = null;
  let currentSelectedTraits: any[] = [];
  const ancestryPointsBudget: number = 5;
  $: totalAncestryPointsAvailable = ancestryPointsBudget;
  $: ancestryPointsSpent = currentSelectedTraits.reduce((sum, trait) => sum + trait.cost, 0);
  $: ancestryPointsRemaining = totalAncestryPointsAvailable - ancestryPointsSpent;

  // --- Class Selection ---
  let selectedClassId: string | null = null;
  let selectedFeatureChoices: Record<string, any> = {};

  $: selectedClass = classesData.find(c => c.id === selectedClassId);

  // --- Validation ---
  $: allRequiredFeatureChoicesMade = selectedClass?.featureChoicesLvl1?.every(
    choice => selectedFeatureChoices && selectedFeatureChoices[choice.id] !== undefined
  ) ?? true;

  $: allStagesValid =
    pointsRemaining === 0 &&
    ancestryPointsRemaining === 0 &&
    selectedClassId !== null &&
    allRequiredFeatureChoicesMade;

  // --- Handlers ---
  function handleAttributeChange(attributeId: keyof typeof currentAttributes, delta: number) {
    const currentValue = currentAttributes[attributeId];
    const newValue = currentValue + delta;
    if (newValue < ATTRIBUTE_MIN || newValue > ATTRIBUTE_MAX_L1) return;
    if (delta > 0 && pointsRemaining <= 0) {
      if (pointsRemaining === 0) return;
    }
    characterInProgressStore.update(store => {
      const storeKey = `attribute_${attributeId}` as keyof typeof store;
      if (storeKey in store) {
         (store[storeKey] as number) = newValue;
      }
      store.pointsSpent = (store.attribute_might - ATTRIBUTE_MIN) +
                          (store.attribute_agility - ATTRIBUTE_MIN) +
                          (store.attribute_charisma - ATTRIBUTE_MIN) +
                          (store.attribute_intelligence - ATTRIBUTE_MIN);
      return store;
    });
  }

  function handleTraitSelection(trait: any): void {
    const traitIndex = currentSelectedTraits.findIndex(t => t.id === trait.id);
    if (traitIndex > -1) {
      currentSelectedTraits = currentSelectedTraits.filter(t => t.id !== trait.id);
    } else {
      if (trait.cost > 0 && ancestryPointsRemaining < trait.cost) return;
      const minorTraitsSelected = currentSelectedTraits.filter(t => t.isMinor).length;
      if (trait.isMinor && minorTraitsSelected >= 1) return;
      if (trait.cost < 0) {
        const potentialPointsFromNegative = currentSelectedTraits
          .filter(t => t.cost < 0)
          .reduce((sum, t) => sum + Math.abs(t.cost), 0) + Math.abs(trait.cost);
        if (potentialPointsFromNegative > 2) return;
      }
      currentSelectedTraits = [...currentSelectedTraits, trait];
    }
  }

  function handleClassSelection(classId: string) {
    selectedClassId = classId;
    selectedFeatureChoices = {};
    characterInProgressStore.update(store => ({ ...store, classId }));
  }

  function handleFeatureChoice(choiceId: string, value: any) {
    selectedFeatureChoices = { ...selectedFeatureChoices, [choiceId]: value };
    characterInProgressStore.update(store => ({
      ...store,
      selectedFeatureChoices: JSON.stringify(selectedFeatureChoices)
    }));
  }

  async function handleSubmitCharacter() {
    if (!allStagesValid) {
      alert('Please complete all sections and resolve validation errors.');
      return;
    }
    characterInProgressStore.update(store => ({
      ...store,
      finalName: characterName.trim(),
      ancestry1Id: selectedAncestry1_ID,
      ancestry2Id: selectedAncestry2_ID,
      selectedTraitIds: JSON.stringify(currentSelectedTraits.map(t => t.id)),
      classId: selectedClassId,
      selectedFeatureChoices: JSON.stringify(selectedFeatureChoices)
    }));
    const $store = $characterInProgressStore;
    const payload = {
      ...$store,
      finalName: characterName.trim(),
      ancestry1Id: selectedAncestry1_ID,
      ancestry2Id: selectedAncestry2_ID,
      selectedTraitIds: JSON.stringify(currentSelectedTraits.map(t => t.id)),
      classId: selectedClassId,
      selectedFeatureChoices: JSON.stringify(selectedFeatureChoices)
    };
    try {
      const response = await fetch('/api/character/progress/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        alert(result.error || 'Failed to save character.');
        return;
      }
      alert('Character saved successfully!');
      // Optionally redirect or reset form
    } catch (err) {
      alert('Unexpected error saving character.');
    }
  }

  // --- Ancestry Trait Calculation ---
  import type { IAncestry, ITrait } from '$lib/rulesdata/types';
  // Explicitly type availableTraitsByAncestry to avoid Svelte/TS never[] errors
  let availableTraitsByAncestry: { ancestry: IAncestry; traits: ITrait[] }[] = [];
  $: {
    availableTraitsByAncestry = [];
    if (ancestriesData && (selectedAncestry1_ID !== null || selectedAncestry2_ID !== null)) {
      const selectedAncestry1 = ancestriesData.find(a => a.id === selectedAncestry1_ID);
      const selectedAncestry2 = ancestriesData.find(a => a.id === selectedAncestry2_ID);
      if (selectedAncestry1) {
        const traits1 = [...(selectedAncestry1.defaultTraitIds || []), ...(selectedAncestry1.expandedTraitIds || [])]
          .map(traitId => traits.find(t => t.id === traitId))
          .filter((t): t is ITrait => t !== undefined);
        availableTraitsByAncestry = [...availableTraitsByAncestry, { ancestry: selectedAncestry1, traits: traits1 }];
      }
      if (selectedAncestry2 && selectedAncestry2_ID !== selectedAncestry1_ID) {
        const traits2 = [...(selectedAncestry2.defaultTraitIds || []), ...(selectedAncestry2.expandedTraitIds || [])]
          .map(traitId => traits.find(t => t.id === traitId))
          .filter((t): t is ITrait => t !== undefined);
        availableTraitsByAncestry = [...availableTraitsByAncestry, { ancestry: selectedAncestry2, traits: traits2 }];
      }
    }
  }
</script>

<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary">
  <h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Character Creation</h2>

  <!-- Step 1: Character Name & Attributes -->
  <div class="mb-8">
    <label for="characterName" class="block text-lg font-medium mb-2">Character Name</label>
    <input
      type="text"
      id="characterName"
      bind:value={characterName}
      class="w-full p-2 border rounded bg-dark-bg-primary text-light-text-primary border-dark-border"
      placeholder="Enter your character's name"
    />
    <h3 class="text-lg font-medium mt-6 mb-2">Allocate Attribute Points (Point Buy)</h3>
    <p class="mb-4 text-light-text-secondary" class:text-magenta-error={pointsRemaining < 0}>
      Budget: {pointsRemaining} / {POINT_BUY_BUDGET} Points Remaining
    </p>
    <div class="flex flex-col gap-4 mb-6">
      {#each attributesData as attribute (attribute.id)}
        <div
          class="flex items-center gap-4 p-4 bg-dark-bg-primary rounded-md shadow-sm relative"
        >
          <!-- Controls (leftmost) -->
          <div class="flex items-center gap-2">
            <button
              class="p-2 h-8 w-8 flex items-center justify-center bg-magenta-error/70 hover:bg-magenta-error rounded-md text-lg"
              on:click={() => handleAttributeChange(attribute.id as keyof typeof currentAttributes, -1)}
              disabled={currentAttributes[attribute.id as keyof typeof currentAttributes] <= ATTRIBUTE_MIN}
            >-</button>
            <input
              id={`attribute-${attribute.id}`}
              type="number"
              readonly
              value={currentAttributes[attribute.id as keyof typeof currentAttributes]}
              class="w-12 text-center text-xl font-semibold bg-dark-bg-secondary rounded-md p-1 h-8"
            />
            <button
              class="p-2 h-8 w-8 flex items-center justify-center bg-purple-primary/70 hover:bg-purple-primary rounded-md text-lg"
              on:click={() => handleAttributeChange(attribute.id as keyof typeof currentAttributes, 1)}
              disabled={currentAttributes[attribute.id as keyof typeof currentAttributes] >= ATTRIBUTE_MAX_L1 || pointsRemaining <= 0}
            >+</button>
          </div>
          <!-- Yellow marker (if prime) -->
          {#if displayedPrimeModifierAttribute === attribute.name}
            <div class="w-1 h-10 bg-yellow-accent rounded mr-3"></div>
          {/if}
          <!-- Name & Description -->
          <div class="flex flex-col min-w-[140px]">
            <label for={`attribute-${attribute.id}`} class="text-xl font-medium text-light-text-primary leading-tight">
              {attribute.name}
            </label>
            <span class="text-xs text-light-text-secondary">{attribute.description}</span>
          </div>

          <!-- Derived Stat (if any) -->
          {#if attribute.id === 'charisma'}
            <span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">
              Grit: {$gritPoints}
            </span>
          {/if}
          {#if attribute.id === 'agility'}
            <span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">
              Jump: {$jumpDistance}
            </span>
          {/if}
          {#if attribute.id === 'intelligence'}
            <span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">
              Skill Pts: {$provisionalSkillPoints}
            </span>
          {/if}

          <!-- Save Bonus (far right) -->
          <span class="ml-auto text-blue-info font-medium whitespace-nowrap">
            Save: {($saveMasteries[attribute.id as keyof typeof $saveMasteries] >= 0 ? '+' : '') + $saveMasteries[attribute.id as keyof typeof $saveMasteries]}
          </span>
        </div>
      {/each}
    </div>
    {#if tiedAttributes.length > 1}
      <div class="my-4">
        <p class="mb-2 text-yellow-accent">Multiple attributes are tied for highest. Please select your Prime Modifier:</p>
        <div class="flex gap-4">
          {#each tiedAttributes as attrId}
            <label>
              <input type="radio" name="primeModifier" value={attrId} bind:group={primeModifierAttributeUserChoice} class="mr-1" />
              {attributesData.find(a => a.id === attrId)?.name || attrId}
            </label>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <!-- Step 2: Ancestry & Trait Selection -->
  <div class="mb-8">
    <h3 class="text-lg font-medium mb-2">Choose Your Ancestry (Up to 2)</h3>
    <div class="flex gap-4">
      <div class="flex-1">
        <label class="block text-sm font-medium mb-1" for="ancestry1">Ancestry 1</label>
        <select id="ancestry1" bind:value={selectedAncestry1_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
          <option value={null}>Select an ancestry</option>
          {#each ancestriesData as ancestry}
            <option value={ancestry.id}>{ancestry.name}</option>
          {/each}
        </select>
      </div>
      <div class="flex-1">
        <label class="block text-sm font-medium mb-1" for="ancestry2">Ancestry 2</label>
        <select id="ancestry2" bind:value={selectedAncestry2_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
          <option value={null}>None</option>
          {#each ancestriesData as ancestry}
            <option value={ancestry.id}>{ancestry.name}</option>
          {/each}
        </select>
      </div>
    </div>
    {#if selectedAncestry1_ID}
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">Ancestry Traits</h3>
        <p class="mb-4 text-light-text-secondary">Ancestry Points: <span class="font-bold">{ancestryPointsRemaining}</span> / {totalAncestryPointsAvailable} Remaining</p>
        {#if availableTraitsByAncestry.length > 0}
          {#each availableTraitsByAncestry as ancestryGroup}
            <h4 class="text-lg font-semibold mt-4 mb-2">{ancestryGroup.ancestry.name} Traits</h4>
            {#if ancestryGroup.traits.length > 0}
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each ancestryGroup.traits as trait}
                  <li class="flex items-center justify-between p-3 my-1 rounded border border-dark-border dark:hover:bg-dark-bg-primary transition-colors duration-200">
                    <input type="checkbox" on:change={() => handleTraitSelection(trait)} checked={currentSelectedTraits.some(t => t.id === trait.id)} disabled={
                      (trait.cost > 0 && ancestryPointsRemaining < trait.cost && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                      (trait.isMinor && currentSelectedTraits.filter(t => t.isMinor).length >= 1 && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                      (trait.cost < 0 && currentSelectedTraits.filter(t => t.cost < 0).reduce((sum, t) => sum + Math.abs(t.cost), 0) >= 2 && !currentSelectedTraits.some(t => t.id === trait.id))
                    } class="form-checkbox h-5 w-5 text-purple-primary rounded focus:ring-purple-primary dark:bg-dark-bg-secondary dark:border-dark-border" />
                    <span class="font-medium flex-1 ml-3 {currentSelectedTraits.some(t => t.id === trait.id) ? 'text-yellow-accent' : ''}">
                      {trait.name} (Cost: {trait.cost})
                    </span>
                  </li>
                {/each}
              </ul>
            {:else}
              <p>No traits available for {ancestryGroup.ancestry.name}.</p>
            {/if}
          {/each}
        {:else}
          <p>Select one or two ancestries to see available traits.</p>
        {/if}
      </div>
      <div class="mt-4 p-4 bg-dark-bg-primary rounded-md shadow-sm mb-6">
        <h3 class="text-lg font-medium mb-2">Selected Traits</h3>
        {#each currentSelectedTraits as trait}
          <p class="text-light-text-primary">{trait.name} (Cost: {trait.cost})</p>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Step 3: Class Selection -->
  <div class="mb-8">
    <h3 class="text-lg font-medium mb-2">Class Selection</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each classesData as classObj}
        <label class="flex items-center p-3 border rounded cursor-pointer" class:border-yellow-accent={selectedClassId === classObj.id}>
          <input type="radio" name="class" value={classObj.id} bind:group={selectedClassId} on:change={() => handleClassSelection(classObj.id)} />
          <span class="ml-3 font-semibold">{classObj.name}</span>
        </label>
      {/each}
    </div>
    {#if selectedClass}
      <div class="mt-4">
        <h4 class="font-semibold mb-2">Level 1 Features</h4>
        <ul>
          {#each selectedClass.level1Features as feature}
            <li class="mb-1">{feature.name}: {feature.description}</li>
          {/each}
        </ul>
        {#if selectedClass.featureChoicesLvl1 && selectedClass.featureChoicesLvl1.length > 0}
          <div class="mt-4">
            <h4 class="font-semibold mb-2">Feature Choices</h4>
            {#each selectedClass.featureChoicesLvl1 as choice}
              <div class="mb-2">
                <label class="block mb-1">{choice.prompt}</label>
                {#if choice.type === 'select_one'}
                  <div class="flex gap-2">
                    {#each choice.options as option}
                      <label>
                        <input type="radio" name={choice.id} value={option.value} checked={selectedFeatureChoices[choice.id] === option.value} on:change={() => handleFeatureChoice(choice.id, option.value)} />
                        {option.label}
                      </label>
                    {/each}
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>

  <!-- Step 4: Final Provisional Stats -->
  <div class="mb-8">
    <h3 class="text-lg font-medium mb-2">Final Provisional Stats</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary">
      <p>HP = Class({selectedClass ? selectedClass.baseHpContribution : 8}) + Might({$characterInProgressStore.attribute_might}) + Ancestry(0) = {$maxHP}</p>
      <p>SP = { $startingSP }</p>
      <p>MP = { $startingMP }</p>
      <p>PD = Base(8) + CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) + Intelligence({$characterInProgressStore.attribute_intelligence}) + Bonuses(0) = {$precisionDefense}</p>
      <p>AD = Base(8) + CM({$combatMastery}) + Might({$characterInProgressStore.attribute_might}) + Charisma({$characterInProgressStore.attribute_charisma}) + Bonuses(0) = {$areaDefense}</p>
      <p>Initiative = CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) = {$initiative}</p>
      <p>Grit Points = Base(2) + Charisma({$characterInProgressStore.attribute_charisma}) = {$gritPoints}</p>
      <p>Jump Distance = Agility({$characterInProgressStore.attribute_agility}) (min 1) = {$jumpDistance}</p>
      <p>Base Skill Points = Base(5) + Intelligence({$characterInProgressStore.attribute_intelligence}) = {$provisionalSkillPoints}</p>
    </div>
  </div>

  <!-- Submit Button -->
  <div class="mt-8 text-right">
    <button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded"
      on:click={handleSubmitCharacter}
      disabled={!allStagesValid}>
      Save Character
    </button>
  </div>
</div>
````

## File: .svelte-kit/generated/client/nodes/3.js
````javascript
export { default as component } from "../../../../src/routes/character-creator/+page.svelte";
````

## File: .svelte-kit/generated/client/nodes/4.js
````javascript
export { default as component } from "../../../../src/routes/character-creator/stage-a/+page.svelte";
````

## File: memory-bank/activeContext.md
````markdown
# Active Context

This document tracks the current work focus, recent changes, and next steps for the project.

## Current Work Focus

With the foundational UI setup (Stage 0) complete, the current focus is on implementing Stage A (Attributes) of the Character Creation Wizard. This involves building the Svelte component for attribute allocation and the corresponding backend logic for data handling.

## Recent Changes

**Stage 0 (Foundation and UI Setup) Completed:**
- Successfully initialized the SvelteKit project manually within the existing directory structure.
- Integrated TailwindCSS using `npx svelte-add@latest tailwindcss` and installed necessary dependencies (`tailwindcss`, `postcss`, `autoprefixer`).
- Applied the custom Tailwind theme from `projectPlan/tailwind.config.js` and verified its application on a test page.
- Set up and verified the Inter font using Google Fonts.
- Installed Melt UI (`@melt-ui/svelte`) and its preprocessor (`@melt-ui/pp`).
- Configured the Melt UI preprocessor (`preprocessMeltUI`) in `svelte.config.js`, resolving initial setup issues and verifying its functionality with a test collapsible component.
- Updated `projectPlan/stage0.md` to accurately reflect all setup steps, including the Melt UI preprocessor configuration.

The static rule data files (`src/lib/rulesdata/*.ts`) have been populated with detailed information for attributes, ancestries, classes, skills, traits, languages, and trades based on the DC20 Beta 0.9.5 rulebook. This completes a major step in preparing the necessary data for the Character Creation Wizard.

The memory bank documentation has also been updated based on the detailed planning documents found in the `projectPlan/` directory (`mvp.md`, `stage1.md`, `stage2.md`). This includes:
- Defining the specific scope and features for the MVP (Stages A, B, C).
- Detailing the required UI components, internal state, functions, and logic for Stage A (Attributes) and Stage B (Ancestry).
- Outlining the backend API endpoints/Form Actions needed for stages A and B, including validation requirements.
- Incorporating details about the chosen technologies (SvelteKit, Melt UI, TailwindCSS, Prisma, PostgreSQL) and their usage patterns.
- Documenting the data models (`CharacterInProgress`, `CharacterSheetData`) and initial static rule data structure.
- Clarifying specific planning decisions like state management approach, calculation responsibilities (frontend provisional, backend authoritative), error handling, and basic resume functionality.

## Next Steps

1.  Implement the Svelte component and logic for Stage A (Attributes) based on `projectPlan/stage1.md`.
2.  Implement the backend endpoint/Form Action for Stage A data persistence and validation.
3.  Implement the frontend Svelte component and logic for Stage B (Ancestry) based on `projectPlan/stage2.md`, including the attribute overflow helper panel.
4.  Implement the backend endpoint/Form Action for Stage B data persistence and validation.
5.  Implement the Svelte component and logic for Stage C (Class) based on `projectPlan/stage3.md` (once detailed).
6.  Implement the backend endpoint/Form Action for Stage C data persistence and validation.
7.  Implement the final character calculation and `CharacterSheetData` creation logic on the backend.
8.  Implement the Character Page component to display the finalized character sheet.
9.  Implement the basic resume functionality using browser `localStorage`.

## Active Decisions and Considerations

- Using Melt UI primitives for accessible UI components, styled with TailwindCSS. This requires configuring the `@melt-ui/pp` preprocessor in `svelte.config.js`.
- Implementing a dark mode first theme.
- Storing static rule data in TypeScript files (`src/lib/rulesdata/`) for the MVP.
- Utilizing a single writable Svelte store (`characterInProgressStore`) for frontend state management, with derived stores for calculated values.
- Backend is the source of truth for all final calculations and validation.
- Handling the specific logic for attribute point allocation (Point Buy) and Ancestry Point allocation (including negative traits and attribute cap overflows).

## Important Patterns and Preferences

- Component-based development for the frontend.
- Clear separation of concerns between frontend UI/provisional logic and backend validation/authoritative calculation.
- Adherence to the defined dark mode color palette and Inter font.
- Using SvelteKit Form Actions for wizard stage data submission.

## Learnings and Project Insights

The completion of Stage 0 highlighted the importance of verifying each foundational UI layer. Troubleshooting the Melt UI setup revealed the necessity of its preprocessor (`@melt-ui/pp`) and the correct import/configuration syntax in `svelte.config.js`, a crucial detail not present in the initial plan. This underscores the value of iterative testing even for setup tasks.

The detailed planning documents have provided a solid foundation and clear steps for the MVP implementation. The complexity of handling attribute cap overflows during trait selection in Stage B highlights the need for careful state management and validation logic on both the frontend and backend. The structure of the static rule data in TypeScript is defined, which will guide the implementation of data loading and lookups.
````

## File: projectPlan/techDesignDebt.md
````markdown
# Technical Design Debt Log

This document tracks technical decisions made for expediency, due to current limitations, or for future refinement, along with plans for improvements.

## Entry Structure

Each entry should ideally cover:

*   **Issue ID:** A unique identifier (e.g., TD-001).
*   **Date Identified:** When the issue was logged.
*   **Area/Component:** The part of the system affected.
*   **Issue Description:** A clear explanation of the technical debt or area for future improvement.
*   **Current Approach/Decision:** The temporary solution or decision made.
*   **Rationale for Current Approach:** Why this approach was chosen (e.g., MVP scope, time constraints, complexity).
*   **Identified Limitations/Impact:** Downsides, potential problems, or impact of the current approach.
*   **Proposed Future Solution/Refinement:** How the issue should ideally be addressed or improved.
*   **Priority:** (Optional) Suggested priority (e.g., Low, Medium, High).
*   **Status:** (Optional) e.g., Open, In Progress, Resolved.

---

## Logged Items

### TD-001: Prime Modifier Tie-Breaking Logic and Persistence
*   **Date Identified:** 2025-06-19
*   **Area/Component:** Stage A Attributes UI (`StageA_Attributes.svelte`), Character Store (`characterInProgressStore.ts`), Backend API for Stage A.
*   **Issue Description:** The `primeModifier` derived store in `characterInProgressStore.ts` currently defaults to selecting the first attribute in its internal list in the event of a tie for the highest attribute score. The UI for Stage A needs to allow the user to explicitly choose their Prime Modifier in such a tie. This explicit user choice is not currently planned to be persisted centrally in the store or database, nor systematically used by the derived store for calculations beyond the immediate display context of Stage A.
*   **Current Approach/Decision:**
    *   The `StageA_Attributes.svelte` component will manage a local Svelte variable (e.g., `primeModifierAttributeUserChoice`) to capture the user's selection from a `RadioGroup` when a tie occurs.
    *   This local choice will be used for display purposes within the Stage A component to show the user-selected Prime Modifier attribute and its value.
    *   The backend API for Stage A will save the core attribute scores. It will not explicitly store which attribute was chosen as prime in the event of a tie. The `primeModifierValue` is derived from the highest score, which is implicitly saved.
    *   The existing `primeModifier` derived store in `characterInProgressStore.ts` will continue its default behavior (picking the first highest attribute found) for any potential downstream calculations outside the Stage A UI context where the user's explicit choice is directly handled by the component.
*   **Rationale for Current Approach:**
    *   Simplifies the initial implementation for the Stage A MVP, focusing on core attribute allocation.
    *   Avoids immediate modifications to the `characterInProgressStore` structure and its existing derived logic, which already handles several calculations.
    *   The primary impact of the Prime Modifier (the value itself and its use in Save Masteries) can be correctly handled at the UI level for Stage A using the local user choice.
*   **Identified Limitations/Impact:**
    *   The user's explicit choice of Prime Modifier during a tie is not centrally persisted in the Svelte store or the database.
    *   If future application features or calculations (e.g., in later character creation stages, or for class abilities that depend on *which* attribute is prime) rely solely on the current `primeModifier` derived store, they might use an arbitrary selection in tie-break scenarios, not reflecting the user's actual choice. This could lead to data inconsistency or incorrect character behavior in specific edge cases.
*   **Proposed Future Solution/Refinement:**
    1.  **Store Enhancement:** Add a new field to the `CharacterInProgressStoreData` interface and `initialCharacterInProgressState` in `characterInProgressStore.ts` (e.g., `userSelectedPrimeAttribute: string | null`).
    2.  **UI Integration:** When the user makes a choice in the tie-breaker UI in `StageA_Attributes.svelte`, update this new `userSelectedPrimeAttribute` field in the store.
    3.  **Derived Logic Update:** Modify the `primeModifier` derived store in `characterInProgressStore.ts` to prioritize `userSelectedPrimeAttribute` if it's set and a tie exists among the highest attributes.
    4.  **Persistence:** Update the backend API for Stage A (and potentially the Prisma schema for `CharacterInProgress`) to save this `userSelectedPrimeAttribute` choice.
    5.  **Consistency:** Ensure all downstream calculations and displays correctly use the persisted user choice for the Prime Modifier attribute.
*   **Priority:** Medium (Potential for specific character build inaccuracies if not addressed before features relying on precise prime attribute choice are implemented).
*   **Status:** Open

---

### TD-002: Character ID Management for CharacterInProgress
*   **Date Identified:** 2025-06-19
*   **Area/Component:** Character Creation Wizard (overall flow), Stage A Backend API, `characterInProgressStore.ts`.
*   **Issue Description:** The precise mechanism for creating a new `CharacterInProgress` record and retrieving/managing its `id` for new characters versus resuming existing characters is not fully defined. The `characterInProgressStore` initializes its `id` field to `null`. Backend APIs for saving stage progress (like Stage A's) will need a robust way to handle `create` operations for new characters versus `update` operations for existing ones.
*   **Current Approach/Decision (to be solidified during Stage A implementation):**
    *   The `handleSubmitStageA` function in `StageA_Attributes.svelte` will need to pass the current `characterId` from the store if it exists.
    *   If no `characterId` exists (i.e., it's a new character), the backend API for Stage A might attempt an `upsert` operation (create if ID is null/not found, update otherwise), or the frontend will be responsible for an initial "create" call to a dedicated endpoint (or the Stage A endpoint itself handles creation if no ID is passed). The backend, upon creation, would return the new ID for the frontend store to update.
    *   Basic resume functionality (mentioned in `productContext.md`) will likely involve storing the last used `characterId` in `localStorage` and loading it into the store on app initialization.
*   **Rationale for Current Approach:** Defers the implementation of a fully dedicated "start new character" flow to allow focus on Stage A's core logic. An `upsert` or conditional create/update in the Stage A backend can handle the initial record creation.
*   **Identified Limitations/Impact:**
    *   Could lead to slightly more complex logic within each stage's save handler on the backend if each has to manage create vs. update.
    *   Requires careful coordination between frontend (passing ID or lack thereof) and backend (interpreting and acting on the ID).
    *   Less clean than a dedicated "create" endpoint that solely handles new character initialization.
*   **Proposed Future Solution/Refinement:**
    1.  Implement a dedicated API endpoint (e.g., `/api/character/new`) that specifically handles the creation of a new `CharacterInProgress` record.
    2.  This endpoint would generate a UUID, create the record with default initial values, and return the new `id`.
    3.  The frontend, upon starting a new character creation process, would call this endpoint first.
    4.  The returned `id` would be stored in `characterInProgressStore.id` and potentially in `localStorage` to facilitate resume functionality.
    5.  Subsequent stage-saving APIs (like Stage A's) would then always expect a valid `characterId` and perform `update` operations.
*   **Priority:** Medium (Essential for robust save/resume functionality).
*   **Status:** Open

---

### TD-003: Attribute Structure in Svelte Store vs. Component Plan
*   **Date Identified:** 2025-06-19
*   **Area/Component:** `characterInProgressStore.ts`, `StageA_Attributes.svelte`.
*   **Issue Description:** The `characterInProgressStore.ts` uses a flat structure for attribute storage (e.g., `attribute_might: -2`). The initial plan for `StageA_Attributes.svelte` (in `projectPlan/stage1.md`) described using a nested object for attributes within the component's state (e.g., `attributes: { Might: -2, Agility: -2, ... }`).
*   **Current Approach/Decision:** The `StageA_Attributes.svelte` component will adapt to the store's flat structure for reading and writing attributes. This means directly accessing `$characterInProgressStore.attribute_might`, etc.
*   **Rationale for Current Approach:** Simplifies interaction with the existing store structure and avoids unnecessary mapping layers within the component for this specific aspect. The store's flat structure aligns directly with the Prisma model.
*   **Identified Limitations/Impact:** Minor. If a nested `attributes` object was strongly preferred for internal component logic or for passing to sub-components, this direct adaptation means that preference isn't met. However, it's functionally equivalent.
*   **Proposed Future Solution/Refinement:** This is a very minor issue. If a compelling reason arises for a nested `attributes` object within the store itself or for broader component usage, the store could be refactored. For now, the current approach is acceptable.
*   **Priority:** Very Low.
*   **Status:** Open (For awareness).

---

### TD-004: Save Masteries Calculation Documentation Alignment
*   **Date Identified:** 2025-06-19
*   **Area/Component:** `characterInProgressStore.ts` (derived store `saveMasteries`), `projectPlan/stage1.md` (description of `calculateSaveMasteries` function).
*   **Issue Description:** The `saveMasteries` derived store in `characterInProgressStore.ts` implements a calculation: `L1_COMBAT_MASTERY + (primeModAttribute === 'Might' ? primeModValue : getModifier($store.attribute_might))`. This is more nuanced and likely more rule-accurate (especially if an attribute *is* the prime modifier) than the simpler formula `attributeScore + combatMastery` described for the `calculateSaveMasteries` helper function in `projectPlan/stage1.md`.
*   **Current Approach/Decision:** The `StageA_Attributes.svelte` component will directly use the `saveMasteries` derived store from `characterInProgressStore.ts` for displaying save mastery values. The component will not implement its own `calculateSaveMasteries` function as originally planned in `stage1.md` if the store provides the necessary derived values.
*   **Rationale for Current Approach:** Utilizes existing, more accurate logic in the central store, promoting consistency and reducing redundant calculations in the component.
*   **Identified Limitations/Impact:** None, as the component will use the more accurate derived store. The "debt" is purely a documentation/plan alignment.
*   **Proposed Future Solution/Refinement:** Ensure that `projectPlan/stage1.md` (and any other relevant planning documents) are updated to reflect that `saveMasteries` will be consumed from the derived store, and its calculation method is the one implemented in the store. This is primarily a documentation cleanup task.
*   **Priority:** Very Low (Documentation/Alignment).
*   **Status:** Open (For awareness/documentation update).

---

### TD-005: Melt UI SSR Compatibility Issue with Wrapped Components
*   **Date Identified:** 2025-06-19
*   **Area/Component:** Melt UI Wrapper Components (`src/lib/components/ui/`), SvelteKit SSR.
*   **Issue Description:** Attempting to wrap Melt UI primitives (specifically `RadioGroupPrimitive`) in custom Svelte components and import them via `$lib/components/ui/` paths results in a `TypeError: Cannot read properties of undefined (reading 'Root')` during SvelteKit's server-side rendering (SSR). This indicates that the Melt UI primitive object is `undefined` in the SSR environment when accessed at the module level within the wrapper component's script or index file.
*   **Current Approach/Decision:** Defer full Melt UI integration for components exhibiting this SSR issue (like RadioGroup). Implement the UI for Stage A using standard HTML elements (`<button>`, `<input>`, `<label>`, `<input type="radio">`) and Svelte reactivity, applying styling directly via TailwindCSS classes.
*   **Rationale for Current Approach:** Allows progress on the core character creation functionality (Stage A UI and backend) without being blocked by the Melt UI SSR compatibility issue. Provides a functional UI using standard web technologies.
*   **Identified Limitations/Impact:**
    *   Does not leverage Melt UI's accessibility features and primitive logic for the affected components in the initial implementation.
    *   Requires manual implementation of behaviors that Melt UI primitives would normally provide (e.g., keyboard navigation, ARIA attributes for radio groups).
    *   The UI components in `src/lib/components/ui/` that were intended as wrappers for Melt UI primitives are currently incomplete or non-functional due to this issue.
    *   This issue was initially logged as TD-006 and TD-007 by the user.
*   **Proposed Future Solution/Refinement:**
    1.  Investigate the root cause of the Melt UI SSR issue in the SvelteKit environment. This may involve consulting Melt UI documentation, community forums, or experimenting with different import/initialization patterns for SSR.
    2.  Once a solution or workaround is found, refactor the affected UI wrapper components (`src/lib/components/ui/`) to correctly integrate the Melt UI primitives in an SSR-compatible manner.
    3.  Update the Stage A Svelte component (and any future components) to use the refactored Melt UI wrapper components.
    4.  Ensure accessibility features provided by Melt UI are correctly implemented in the wrappers.
*   **Priority:** Medium (Impacts accessibility and consistency of UI component library usage).
*   **Status:** Open

---

### TD-006: Persistent Environmental/TypeScript Errors
*   **Date Identified:** 2025-06-20
*   **Area/Component:** SvelteKit Development Environment, `src/routes/character-creator/stage-b/+page.svelte`, `src/lib/stores/characterInProgressStore.ts`.
*   **Issue Description:** Encountered persistent TypeScript errors (initially logged by the user as TD-006 and TD-007) that seemed related to tooling or environment setup, including issues with Svelte file indexing, `./$types` imports, and implicit `any` types. Additional TypeScript errors related to template syntax and store initialization were also encountered during troubleshooting. These errors prevented successful file modifications using `replace_in_file`.
*   **Current Approach/Decision:** Performed a comprehensive environment reset (deleted `.svelte-kit`, `node_modules`, `package-lock.json`, reinstalled dependencies, and restarted the dev server). Addressed specific syntax errors in the Svelte template and type errors in the component script and store related to indexing and store initialization by modifying the code directly.
*   **Rationale for Current Approach:** Necessary steps to resolve environmental and code-level issues blocking development progress. The environment reset is a standard troubleshooting step for tooling-related problems in SvelteKit. Code modifications were required to fix specific syntax and type mismatches identified by the TypeScript compiler.
*   **Identified Limitations/Impact:** The root cause of the initial environmental/tooling errors (TD-006, TD-007) is not definitively known, although the environment reset and type regeneration likely cleared any corrupted build artifacts or caches. The specific template syntax and type issues were addressed, but similar issues could arise if complex TypeScript/template interactions are not carefully managed.
*   **Proposed Future Solution/Refinement:** Monitor the development environment for the recurrence of similar persistent errors. If they reappear, further investigation into the SvelteKit build process, TypeScript configuration, and potential interactions with other dependencies may be required. Ensure careful attention to TypeScript compatibility when writing Svelte template logic.
*   **Priority:** High (Initially blocked development).
*   **Status:** Resolved.
````

## File: src/lib/rulesdata/traits.ts
````typescript
import type { ITrait } from './types';

export const traitsData: ITrait[] = [
  // Human Traits (p. 108)
  {
    id: 'human_attribute_increase',
    name: 'Attribute Increase',
    description: 'Choose an Attribute. The chosen Attribute increases by 1 (up to the Attribute Limit).',
    cost: 2,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'any_attribute_choice', value: 1, userChoiceRequired: { prompt: "Choose an Attribute to increase by 1" } }]
  },
  {
    id: 'human_skill_expertise',
    name: 'Skill Expertise',
    description: 'Choose a Skill. Your Mastery Cap and Mastery Level in the chosen Skill both increase by 1. You can only benefit from 1 Feature that increases your Skill Mastery Limit at a time.',
    cost: 2,
    effects: [{ type: 'GRANT_SKILL_EXPERTISE', value: { skillId: 'any_skill_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a skill for Expertise" } }]
  },
  {
    id: 'human_resolve',
    name: 'Human Resolve',
    description: 'Your Death’s Door Threshold value is expanded by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_DEATH_THRESHOLD_MODIFIER', value: 1 }]
  },
  {
    id: 'human_undying',
    name: 'Undying',
    description: 'You have ADV on Saves against the Doomed Condition.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Doomed' }]
  },
  {
    id: 'human_trade_expertise',
    name: 'Trade Expertise',
    description: 'Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1. You can only benefit from 1 Feature that increases your Trade Mastery Limit at a time.',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: 'human_determination',
    name: 'Human Determination',
    description: 'Once per Combat, you can give yourself ADV on an Attack Check or Spell Check while Bloodied.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_CHECK_WHILE_BLOODIED', target: 'Attack_or_Spell_Check', condition: 'bloodied' }]
  },
  {
    id: 'human_unbreakable',
    name: 'Unbreakable',
    description: 'You have ADV on Death Saves.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE', target: 'Death_Save' }]
  },
  {
    id: 'human_attribute_decrease',
    name: 'Attribute Decrease',
    description: 'Choose an Attribute. You decrease the chosen Attribute by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'any_attribute_choice', value: -1, userChoiceRequired: { prompt: "Choose an Attribute to decrease by 1" } }]
  },

  // Elf Traits (p. 108)
  {
    id: 'elf_elven_will',
    name: 'Elven Will',
    description: 'You have ADV on Checks and Saves against being Charmed and put to Sleep.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Charmed' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Sleep_Magic' }]
  },
  {
    id: 'elf_nimble',
    name: 'Nimble',
    description: 'When you take the Dodge Action, you instead gain the benefits of the Full Dodge Action.',
    cost: 2,
    effects: [{ type: 'MODIFY_ACTION_BENEFIT', target: 'Dodge_Action', value: 'Full_Dodge_Benefit' }]
  },
  {
    id: 'elf_agile_explorer',
    name: 'Agile Explorer',
    description: 'You’re not affected by Difficult Terrain.',
    cost: 2,
    effects: [{ type: 'IGNORE_DIFFICULT_TERRAIN' }]
  },
  {
    id: 'elf_discerning_sight',
    name: 'Discerning Sight',
    description: 'You have ADV on Checks and Saves made to discern through visual illusions.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS_SAVES_VS_ILLUSION_VISUAL' }]
  },
  {
    id: 'elf_quick_reactions',
    name: 'Quick Reactions',
    description: 'While you aren’t wearing Armor, you gain +1 PD.',
    cost: 1,
    effects: [{ type: 'MODIFY_PD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'elf_peerless_sight',
    name: 'Peerless Sight',
    description: 'You don’t have DisADV as a result of making an Attack with a Weapon at Long Range',
    cost: 1,
    effects: [{ type: 'IGNORE_DISADV_ON_RANGED_ATTACK_AT_LONG_RANGE' }]
  },
  {
    id: 'elf_climb_speed',
    name: 'Climb Speed',
    description: 'You gain a Climb Speed equal to your Movement Speed.',
    cost: 1,
    effects: [{ type: 'GRANT_CLIMB_SPEED_EQUAL_TO_SPEED' }]
  },
  {
    id: 'elf_speed_increase',
    name: 'Speed Increase',
    description: 'Your Speed increases by 1 Space.',
    cost: 2,
    effects: [{ type: 'MODIFY_SPEED', value: 5 }] // 1 Space = 5 feet
  },
  {
    id: 'elf_trade_expertise_elf',
    name: 'Trade Expertise (Elf)',
    description: 'Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1. You can only benefit from 1 Feature that increases your Trade Mastery Limit at a time.',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: 'elf_plant_knowledge',
    name: 'Plant Knowledge',
    description: 'While within forests, jungles, and swamps, you have ADV on Survival Checks. Additionally, you have ADV on Nature Checks made to recall information about plants.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_SURVIVAL_CHECKS_IN_ENVIRONMENTS', target: 'forests_jungles_swamps' }, { type: 'GRANT_ADV_ON_NATURE_CHECKS_ABOUT_PLANTS' }]
  },
  {
    id: 'elf_brittle',
    name: 'Brittle',
    description: 'Your AD decreases by 1.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_AD', value: -1 }]
  },
  {
    id: 'elf_frail',
    name: 'Frail',
    description: 'Your HP maximum decreases by 2.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: -2 }]
  },
  {
    id: 'elf_might_decrease',
    name: 'Might Decrease',
    description: 'Your Might decreases by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'might', value: -1 }]
  },

  // Dwarf Traits (p. 109)
  {
    id: 'dwarf_tough',
    name: 'Tough',
    description: 'Your HP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: 1 }]
  },
  {
    id: 'dwarf_toxic_fortitude',
    name: 'Toxic Fortitude',
    description: 'You have Poison Resistance (Half) and ADV on Saves against being Poisoned.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Poison' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Poisoned' }]
  },
  {
    id: 'dwarf_physically_sturdy',
    name: 'Physically Sturdy',
    description: 'You have ADV on Saves against being Impaired, Deafened, or Petrified.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Impaired' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Deafened' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Petrified' }]
  },
  {
    id: 'dwarf_iron_stomach',
    name: 'Iron Stomach',
    description: 'You have ADV on Saves against effects that come from consuming food or liquids.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_EFFECT_FROM_CONSUMING' }]
  },
  {
    id: 'dwarf_thick_skinned',
    name: 'Thick-Skinned',
    description: 'While you aren’t wearing Armor, you gain +1 AD.',
    cost: 1,
    effects: [{ type: 'MODIFY_AD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'dwarf_natural_combatant',
    name: 'Natural Combatant',
    description: 'You gain Combat Training with Heavy Armor and All Shields.',
    cost: 1,
    effects: [{ type: 'GRANT_COMBAT_TRAINING', target: 'Heavy_Armor' }, { type: 'GRANT_COMBAT_TRAINING', target: 'All_Shields' }]
  },
  {
    id: 'dwarf_stone_blood',
    name: 'Stone Blood',
    description: 'You have ADV on Saves against Bleeding. Additionally, you can spend 1 AP to end the Bleeding Condition on yourself.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Bleeding' }, { type: 'GRANT_ABILITY', value: 'End_Bleeding_Self_1AP' }]
  },
  {
    id: 'dwarf_minor_tremorsense',
    name: 'Minor Tremorsense',
    description: 'You have Tremorsense 3 Spaces.',
    cost: 1,
    effects: [{ type: 'GRANT_TREMORSENSE', value: 3 }]
  },
  {
    id: 'dwarf_stubborn',
    name: 'Stubborn',
    description: 'You have ADV on Saves against being Taunted and against being forcibly moved.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Taunted' }, { type: 'GRANT_ADV_ON_SAVE_VS_FORCED_MOVEMENT' }]
  },
  {
    id: 'dwarf_trade_expertise',
    name: 'Trade Expertise',
    description: 'Choose a Crafting or Services Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_crafting_or_services_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Crafting or Services Trade for Expertise" } }]
  },
  {
    id: 'dwarf_earthen_knowledge',
    name: 'Earthen Knowledge',
    description: 'While within mountainous and subterranean environments, you have ADV on Survival Checks. Additionally, you have ADV on Nature Checks made to recall information about rocks, soil, crystals, and gems.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SURVIVAL_CHECKS_IN_ENVIRONMENTS', target: 'mountainous_and_subterranean' }, { type: 'GRANT_ADV_ON_NATURE_CHECKS_ABOUT_ROCKS_SOIL_CRYSTALS_GEMS' }]
  },
  {
    id: 'dwarf_charisma_attribute_decrease',
    name: 'Charisma Attribute Decrease',
    description: 'You decrease your Charisma by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'charisma', value: -1 }]
  },
  {
    id: 'dwarf_short_legged',
    name: 'Short-Legged',
    description: 'Your Speed decreases by 1 Space.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SPEED', value: -5 }]
  },

  // Halfling Traits (p. 109)
  {
    id: 'halfling_small_sized',
    name: 'Small-Sized',
    description: 'Your Size is considered Small.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SIZE', target: 'Small' }]
  },
  {
    id: 'halfling_elusive',
    name: 'Elusive',
    description: 'When you take the Disengage Action, you instead gain the benefits of the Full Disengage Action.',
    cost: 2,
    effects: [{ type: 'MODIFY_ACTION_BENEFIT', target: 'Disengage_Action', value: 'Full_Disengage_Action' }]
  },
  {
    id: 'halfling_bravery',
    name: 'Halfling Bravery',
    description: 'You have ADV on Saves against being Intimidated, Rattled, or Frightened',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Intimidated' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Rattled' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Frightened' }]
  },
  {
    id: 'halfling_endurance',
    name: 'Halfling Endurance',
    description: 'You have Exhaustion Resistance.',
    cost: 1,
    effects: [{ type: 'GRANT_CONDITION_RESISTANCE', target: 'Exhaustion' }]
  },
  {
    id: 'halfling_deft_footwork',
    name: 'Deft Footwork',
    description: 'You can move through the space of a hostile creature 1 size larger than you as if it were Difficult Terrain.',
    cost: 1,
    effects: [{ type: 'IGNORE_DIFFICULT_TERRAIN_WHEN_MOVING_THROUGH_SPACE_OF_LARGER_HOSTILE' }]
  },
  {
    id: 'halfling_beast_whisperer',
    name: 'Beast Whisperer',
    description: 'You can speak to Beasts in a limited manner. They can understand the meanings of simple words, concepts, or states of emotion. You don’t have a special ability to understand them in return.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_LIMITED_COMMUNICATION_WITH_BEASTS' }]
  },
  {
    id: 'halfling_beast_insight',
    name: 'Beast Insight',
    description: 'You can understand Beasts in a limited manner. You can understand the meaning of their noises and behaviors, though they have no special ability to understand you in return.',
    cost: 1,
    effects: [{ type: 'GRANT_LIMITED_UNDERSTANDING_OF_BEASTS' }]
  },
  {
    id: 'halfling_burst_of_bravery',
    name: 'Burst of Bravery',
    description: 'Once per Combat, you can end the Intimidated, Rattled, or Frightened Condition on yourself for free at any time.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'End_Intimidated_Rattled_Frightened_Self_OncePerCombat' }]
  },
  {
    id: 'halfling_trade_expertise',
    name: 'Trade Expertise',
    description: 'Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Trade for Expertise" } }]
  },
  {
    id: 'halfling_critter_knowledge',
    name: 'Critter Knowledge',
    description: 'You have ADV on Nature, Survival, and Animal Checks involving Small size creatures and smaller.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS_INVOLVING_SMALL_CREATURES', target: 'Nature_Survival_Animal_Checks' }]
  },
  {
    id: 'halfling_brittle',
    name: 'Brittle',
    description: 'Your AD decreases by 1.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_AD', value: -1 }]
  },
  {
    id: 'halfling_intelligence_attribute_decrease',
    name: 'Intelligence Attribute Decrease',
    description: 'You decrease your Intelligence by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'intelligence', value: -1 }]
  },
  {
    id: 'halfling_short_legged',
    name: 'Short-Legged',
    description: 'Your Speed decreases by 1 Space.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SPEED', value: -5 }]
  },

  // Gnome Traits (p. 110)
  {
    id: 'gnome_small_sized',
    name: 'Small-Sized',
    description: 'Your Size is considered Small.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SIZE', target: 'Small' }]
  },
  {
    id: 'gnome_escape_artist',
    name: 'Escape Artist',
    description: 'You have ADV on Checks and Saves to avoid or escape being Grappled or Restrained.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS_SAVES_TO_AVOID_ESCAPE', target: 'Grappled_or_Restrained' }]
  },
  {
    id: 'gnome_magnified_vision',
    name: 'Magnified Vision',
    description: 'You have ADV on Investigation Checks made on something you’re holding or touching.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_INVESTIGATION_CHECKS_ON_HELD_TOUCHED' }]
  },
  {
    id: 'gnome_mental_clarity',
    name: 'Mental Clarity',
    description: 'You have ADV on Saves against being Dazed or Stunned.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Dazed' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Stunned' }]
  },
  {
    id: 'gnome_strong_minded',
    name: 'Strong-Minded',
    description: 'You gain Psychic Resistance (1).',
    cost: 1,
    effects: [{ type: 'GRANT_RESISTANCE_STATIC', target: 'Psychic', value: 1 }]
  },
  {
    id: 'gnome_predict_weather',
    name: 'Predict Weather',
    description: 'You can naturally tell what the weather is going to be in the next hour in the area within 1 mile of you. You don’t have DisADV on Checks or Saves as a result of naturally occurring weather.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ABILITY', value: 'Predict_Weather_1Mile_1Hour' }, { type: 'IGNORE_DISADV_FROM_NATURAL_WEATHER' }]
  },
  {
    id: 'gnome_mana_increase',
    name: 'Mana Increase',
    description: 'Your MP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_MP_MAX', value: 1 }]
  },
  {
    id: 'gnome_trapper',
    name: 'Trapper',
    description: 'You have ADV on Investigation Checks to spot Traps and on Trickery Checks to Hide Traps.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_INVESTIGATION_CHECKS_TO_SPOT_TRAPS' }, { type: 'GRANT_ADV_ON_TRICKERY_CHECKS_TO_HIDE_TRAPS' }]
  },
  {
    id: 'gnome_lightning_insulation',
    name: 'Lightning Insulation',
    description: 'You have Lightning Resistance (Half) and can’t be struck by natural lightning.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Lightning' }, { type: 'IMMUNE_TO_NATURAL_LIGHTNING' }]
  },
  {
    id: 'gnome_trade_expertise',
    name: 'Trade Expertise',
    description: 'Choose a Crafting or Subterfuge Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.',
    cost: 1,
    effects: [{ type: 'GRANT_TRADE_EXPERTISE', value: { tradeId: 'any_crafting_or_subterfuge_trade_choice', capIncrease: 1, levelIncrease: 1 }, userChoiceRequired: { prompt: "Choose a Crafting or Subterfuge Trade for Expertise" } }]
  },
  {
    id: 'gnome_storm_knowledge',
    name: 'Storm Knowledge',
    description: 'While within rainy, snowy, or stormy environments, you have ADV on Survival Checks. Additionally, you have ADV on Knowledge Checks made to recall information about rain, snow, and storms.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SURVIVAL_CHECKS_IN_ENVIRONMENTS', target: 'rainy_snowy_stormy' }, { type: 'GRANT_ADV_ON_KNOWLEDGE_CHECKS_ABOUT_RAIN_SNOW_STORMS' }]
  },
  {
    id: 'gnome_agility_attribute_decrease',
    name: 'Agility Decrease',
    description: 'You decrease your Agility by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'agility', value: -1 }]
  },
  {
    id: 'gnome_short_legged',
    name: 'Short-Legged',
    description: 'Your Speed decreases by 1 Space.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SPEED', value: -5 }]
  },

  // Orc Traits (p. 110)
  {
    id: 'orc_cursed_mind',
    name: 'Cursed Mind',
    description: 'You gain Psychic Vulnerability (1).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'GRANT_VULNERABILITY_STATIC', target: 'Psychic', value: 1 }]
  },
  {
    id: 'orc_rush',
    name: 'Orc Rush',
    description: 'Once per Combat when you willingly move toward an enemy, you can spend 1 AP to gain Temp HP equal to your Prime Modifier.',
    cost: 2,
    effects: [{ type: 'GRANT_TEMP_HP_ONCE_PER_COMBAT_WHEN_MOVE_TOWARD_ENEMY', value: 'Prime_Modifier' }]
  },
  {
    id: 'orc_brutal_strikes',
    name: 'Brutal Strikes',
    description: 'You deal +1 damage when you score a Brutal or Critical Hit with a Melee Weapon or Unarmed Strike.',
    cost: 2,
    effects: [{ type: 'MODIFY_DAMAGE_ON_HIT', target: 'Melee_Martial_Attack', value: 1, condition: 'Brutal_or_Critical_Hit' }]
  },
  {
    id: 'orc_tough',
    name: 'Tough',
    description: 'Your HP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: 1 }]
  },
  {
    id: 'orc_orcish_resolve',
    name: 'Orcish Resolve',
    description: 'You gain 1 additional AP while on Death’s Door.',
    cost: 1,
    effects: [{ type: 'MODIFY_AP_WHILE_DEATHS_DOOR', value: 1 }]
  },
  {
    id: 'orc_already_cursed',
    name: 'Already Cursed',
    description: 'You have ADV on Saves against Curses.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Curses' }]
  },
  {
    id: 'orc_intimidating_shout',
    name: 'Intimidating Shout',
    description: 'Once per Combat, you can spend 1 AP to let out an Intimidating Shout. All creatures within 5 Spaces that can hear you must make a Charisma Save contested by your Attack Check. Failure: A target is Hindered on the next Attack Check or Spell Attack it makes before the start of your next turn.',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Intimidating_Shout_OncePerCombat_1AP' }]
  },
  {
    id: 'orc_dash',
    name: 'Orc Dash',
    description: 'Once per Combat you can use your Minor Action to move, as long as that movement is towards an enemy.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Move_As_Minor_Action_OncePerCombat_Toward_Enemy' }]
  },
  {
    id: 'orc_finishing_blow',
    name: 'Finishing Blow',
    description: 'You deal +1 damage to creatures who are Well-Bloodied.',
    cost: 1,
    effects: [{ type: 'MODIFY_DAMAGE_ON_HIT', target: 'Martial_Attacks', value: 1, condition: 'Well_Bloodied' }]
  },
  {
    id: 'orc_imposing_presence',
    name: 'Imposing Presence',
    description: 'Once per Combat when a creature makes an Attack against you, you can force them to make a Charisma Save. Save Failure: They must choose a new target for the Attack. If there are no other targets, then the Attack is wasted.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Force_New_Target_OncePerCombat_Reaction' }]
  },
  {
    id: 'orc_provocation',
    name: 'Provocation',
    description: 'You have DisADV on Checks and Saves against being Taunted.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'GRANT_DISADV_ON_CHECKS_SAVES_VS_CONDITION', target: 'Taunted' }]
  },
  {
    id: 'orc_reckless',
    name: 'Reckless',
    description: 'Your PD decreases by 1.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_PD', value: -1 }]
  },

  // Dragonborn Traits (p. 111)
  {
    id: 'dragonborn_darkvision',
    name: 'Darkvision',
    description: 'You have Darkvision 10 Spaces.',
    cost: 1,
    effects: [{ type: 'GRANT_DARKVISION', value: 10 }]
  },
  {
    id: 'dragonborn_draconic_resistance',
    name: 'Draconic Resistance',
    description: 'You gain Resistance (Half) to your Draconic damage type.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Draconic_damage_type' }]
  },
  {
    id: 'dragonborn_draconic_breath_weapon',
    name: 'Draconic Breath Weapon',
    description: 'You gain a Breath Weapon that you can use by spending 2 AP to exhale destructive power in an Area or Focused against a specific target. You can use this ability once per Long Rest, and regain the ability to use it again when you roll for Initiative.',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Draconic_Breath_Weapon_OncePerLongRest_RegainOnInitiative' }]
  },
  {
    id: 'dragonborn_reptilian_superiority',
    name: 'Reptilian Superiority',
    description: 'You have ADV on Intimidation Checks against reptilian creatures of Medium Size and smaller (not including other Dragonborn).',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ADV_ON_INTIMIDATION_CHECKS_VS_REPTILIAN_MEDIUM_SMALL' }]
  },
  {
    id: 'dragonborn_mana_increase',
    name: 'Mana Increase',
    description: 'Your MP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_MP_MAX', value: 1 }]
  },
  {
    id: 'dragonborn_thick_skinned',
    name: 'Thick-Skinned',
    description: 'While you aren’t wearing Armor, you gain +1 AD.',
    cost: 1,
    effects: [{ type: 'MODIFY_AD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'dragonborn_second_breath',
    name: 'Second Breath',
    description: 'You can now use your Draconic Breath Weapon twice per Combat. Additionally, whenever you use your Draconic Breath Weapon, you can spend 2 uses to increase the damage by 2 if its an Area, or by 4 if its Focused.',
    cost: 1,
    prerequisites: ['dragonborn_draconic_breath_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Draconic_Breath_Weapon_TwicePerCombat' }, { type: 'GRANT_ABILITY', value: 'Draconic_Breath_Weapon_Enhanced_Damage_Spend_Uses' }]
  },
  {
    id: 'dragonborn_concussive_breath',
    name: 'Concussive Breath',
    description: 'When you use your Draconic Breath Weapon, you can force all targets to make a Physical Save. Save Failure: The target is pushed 1 Space away +1 additional Space for every 5 it fails its Save by.',
    cost: 1,
    prerequisites: ['dragonborn_draconic_breath_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Draconic_Breath_Weapon_Concussive_Push' }]
  },
  {
    id: 'dragonborn_draconic_affinity',
    name: 'Draconic Affinity',
    description: 'When you take damage of the same type as your Draconic damage, your next Draconic Breath Weapon deals +1 bonus damage.',
    cost: 1,
    effects: [{ type: 'MODIFY_DAMAGE_ON_NEXT_DRACONIC_BREATH_WEAPON', value: 1, condition: 'take_same_type_damage' }]
  },
  {
    id: 'dragonborn_dying_breath',
    name: 'Dying Breath',
    description: 'Once per Combat when you enter Death’s Door, you regain a use of your Draconic Breath Weapon and can immediately use it as a Reaction for free (0 AP).',
    cost: 1,
    prerequisites: ['dragonborn_draconic_breath_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Draconic_Breath_Weapon_Reaction_On_Deaths_Door' }]
  },
  {
    id: 'dragonborn_draconic_ward',
    name: 'Draconic Ward',
    description: 'Once per Combat when you enter Death’s Door, you gain 2 Temp HP. Whenever you’re Hit by a Melee Attack while you have this Temp HP, your Attacker takes 1 Draconic damage.',
    cost: 1,
    effects: [{ type: 'GRANT_TEMP_HP_ONCE_PER_COMBAT_ON_DEATHS_DOOR', value: 2 }, { type: 'GRANT_DAMAGE_ON_MELEE_HIT_WHILE_TEMP_HP', target: 'Draconic_damage_type', value: 1 }]
  },
  {
    id: 'dragonborn_draconic_protection',
    name: 'Draconic Protection',
    description: 'Once per Combat, when an ally within 20 Spaces is on Death’s Door, you begin to surge with an ancient power. While they remain on Death’s Door their PD and AD increases by 5 until Combat ends.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Increase_PD_AD_Ally_On_Deaths_Door' }]
  },
  {
    id: 'dragonborn_glide_speed',
    name: 'Glide Speed',
    description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.',
    cost: 2,
    effects: [{ type: 'GRANT_GLIDE_SPEED' }]
  },
  {
    id: 'dragonborn_guardians_bond',
    name: 'Guardian’s Bond',
    description: 'Once per Combat when an ally enters Death’s Door within 20 Spaces of you, you take an amount of True damage equal to your Prime Modifier.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'TAKE_TRUE_DAMAGE_ONCE_PER_COMBAT_WHEN_ALLY_DEATHS_DOOR', value: 'Prime_Modifier' }]
  },

  // Giantborn Traits (p. 112)
  {
    id: 'giantborn_tough',
    name: 'Tough',
    description: 'Your HP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: 1 }]
  },
  {
    id: 'giantborn_powerful_build',
    name: 'Powerful Build',
    description: 'You increase by 1 Size, but you occupy the Space of a creature 1 Size smaller.',
    cost: 2,
    effects: [{ type: 'MODIFY_SIZE', target: 'Large' }, { type: 'MODIFY_SPACE_OCCUPIED', target: '1_Size_Smaller' }]
  },
  {
    id: 'giantborn_unstoppable',
    name: 'Unstoppable',
    description: 'You have ADV on Saves against being Slowed or Stunned.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Slowed' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Stunned' }]
  },
  {
    id: 'giantborn_giants_resolve',
    name: 'Giant’s Resolve',
    description: 'While on Death’s Door, you reduce all damage taken by 1.',
    cost: 1,
    effects: [{ type: 'REDUCE_DAMAGE_TAKEN', value: 1, condition: 'deaths_door' }]
  },
  {
    id: 'giantborn_unyielding_movement',
    name: 'Unyielding Movement',
    description: 'You’re immune to being Slowed 2 (or higher).',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'IMMUNE_TO_SLOWED_2_OR_HIGHER' }]
  },
  {
    id: 'giantborn_giants_fortitude',
    name: 'Giant’s Fortitude',
    description: 'You also gain the benefits of your Giant’s Resolve Trait while Well-Bloodied.',
    cost: 2,
    prerequisites: ['giantborn_giants_resolve'],
    effects: [{ type: 'GRANT_BENEFIT_WHILE_WELL_BLOODIED', target: 'giantborn_giants_resolve' }]
  },
  {
    id: 'giantborn_strong_body',
    name: 'Strong Body',
    description: 'Once per Combat when you take damage from an Attack, you can reduce the damage taken by an amount equal to your Might or Agility (your choice).',
    cost: 2,
    effects: [{ type: 'REDUCE_DAMAGE_TAKEN_ONCE_PER_COMBAT', value: 'Might_or_Agility' }]
  },
  {
    id: 'giantborn_mighty_hurl',
    name: 'Mighty Hurl',
    description: 'You throw creatures 1 Space farther than normal, and objects (including Weapons) 5 Spaces farther than normal.',
    cost: 1,
    effects: [{ type: 'MODIFY_THROW_DISTANCE_CREATURES', value: 1 }, { type: 'MODIFY_THROW_DISTANCE_OBJECTS', value: 5 }]
  },
  {
    id: 'giantborn_titanic_toss',
    name: 'Titanic Toss',
    description: 'You have ADV on Checks made to throw creatures. Additionally, you don’t have DisADV as a result of making an Attack with a Weapon with the Toss or Thrown Property at Long Range.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_CHECKS', target: 'Throw_Creatures' }, { type: 'IGNORE_DISADV_ON_RANGED_ATTACK_WITH_TOSS_THROWN_AT_LONG_RANGE' }]
  },
  {
    id: 'giantborn_mighty_leap',
    name: 'Mighty Leap',
    description: 'You can use your Might instead of Agility to determine your Jump Distance and the damage you take from Falling.',
    cost: 1,
    effects: [{ type: 'USE_ATTRIBUTE_FOR_JUMP_DISTANCE_FALLING_DAMAGE', target: 'Might' }]
  },
  {
    id: 'giantborn_brute',
    name: 'Brute',
    description: 'Once per Combat, you can take the Shove or Grapple Action as a Minor Action.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Shove_or_Grapple_As_Minor_Action_OncePerCombat' }]
  },
  {
    id: 'giantborn_heavy_riser',
    name: 'Heavy Riser',
    description: 'You have to spend 4 Spaces of movement to stand up from Prone.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_MOVEMENT_TO_STAND_UP', value: 4 }]
  },
  {
    id: 'giantborn_clumsiness',
    name: 'Clumsiness',
    description: 'You have DisADV on Agility Checks.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'GRANT_DISADV_ON_CHECKS', target: 'Agility_Checks' }]
  },
  {
    id: 'giantborn_intelligence_attribute_decrease',
    name: 'Intelligence Decrease',
    description: 'You decrease your Intelligence by 1 (to a minimum of -2).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_ATTRIBUTE', target: 'intelligence', value: -1 }]
  },

  // Angelborn Traits (p. 113)
  {
    id: 'angelborn_radiant_resistance',
    name: 'Radiant Resistance',
    description: 'You have Resistance (Half) to Radiant damage.',
    cost: 1,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Radiant' }]
  },
  {
    id: 'angelborn_celestial_magic',
    name: 'Celestial Magic',
    description: 'You learn 1 Spell of your choice from the Divine Spell List (Holy & Restoration during the Beta). Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum of 0 MP). The Spells total MP cost (before all reductions) still can’t exceed your Mana Spend Limit.',
    cost: 2,
    effects: [{ type: 'GRANT_SPELL_FROM_LIST', target: 'Divine_Spell_List' }, { type: 'REDUCE_MP_COST_ONCE_PER_LONG_REST', value: 1 }]
  },
  {
    id: 'angelborn_healing_touch',
    name: 'Healing Touch',
    description: 'Once per Combat, you can spend 1 AP to touch a creature and Heal it. Make a DC 10 Spell Check. Success: You can restore up to 2 HP to the target. Success (each 5): +1 HP. Failure: You only restore 2 HP.',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Healing_Touch_OncePerCombat_1AP' }]
  },
  {
    id: 'angelborn_divine_glow',
    name: 'Divine Glow',
    description: 'Your body can emit a Bright Light in a 5 Space radius around you at will.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ABILITY', value: 'Emit_Bright_Light_5Space_Radius_AtWill' }]
  },
  {
    id: 'angelborn_mana_increase',
    name: 'Mana Increase',
    description: 'Your MP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_MP_MAX', value: 1 }]
  },
  {
    id: 'angelborn_celestial_clarity',
    name: 'Celestial Clarity',
    description: 'You have ADV on Saves against being Blinded or Deafened.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Blinded' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Deafened' }]
  },
  {
    id: 'angelborn_angelic_insight',
    name: 'Angelic Insight',
    description: 'Once per Long Rest you can grant yourself ADV on an Insight Check to see if someone is lying.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_INSIGHT_CHECK_ONCE_PER_LONG_REST', condition: 'see_if_lying' }]
  },
  {
    id: 'angelborn_gift_of_the_angels',
    name: 'Gift of the Angels',
    description: 'Once per Combat you can spend 1 AP and 1 MP and touch a creature to heal them over time. The creature recovers 1 HP at the start of each of their turns for 1 minute (5 Rounds).',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Heal_Over_Time_OncePerCombat_1AP_1MP' }]
  },
  {
    id: 'angelborn_blinding_light',
    name: 'Blinding Light',
    description: 'Once per Combat, you can spend 1 AP to choose a creature within 5 Spaces and make a Spell Check contested by its Physical Save. Success: The target is Blinded until the end of your next turn.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Blind_Target_OncePerCombat_1AP' }]
  },
  {
    id: 'angelborn_glide_speed',
    name: 'Glide Speed',
    description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.',
    cost: 2,
    effects: [{ type: 'GRANT_GLIDE_SPEED' }]
  },
  {
    id: 'angelborn_pacifist',
    name: 'Pacifist',
    description: 'Your divine call is to put others before yourself and resist doing harm. You suffer a -1 penalty to all Checks and Saves made during the first round of Combat.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'PENALTY_ON_CHECKS_SAVES_FIRST_ROUND_OF_COMBAT', value: -1 }]
  },
  {
    id: 'angelborn_umbral_weakness',
    name: 'Umbral Weakness',
    description: 'You have Umbral Vulnerability (1).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'GRANT_VULNERABILITY_STATIC', target: 'Umbral', value: 1 }]
  },

  // Fiendborn Traits (p. 114)
  {
    id: 'fiendborn_fiendish_resistance',
    name: 'Fiendish Resistance',
    description: 'You gain Resistance (Half) to your Fiendish damage type.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Fiendish_damage_type' }]
  },
  {
    id: 'fiendborn_fiendish_magic',
    name: 'Fiendish Magic',
    description: 'You learn 1 Spell of your choice from the Arcane Spell List from the Destruction or Enchantment Spell Schools. If the Spell deals damage, it must be the same damage type as your Fiendish damage. Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum of 0 MP). The Spells total MP cost (before all reductions) still can’t exceed your Mana Spend Limit.',
    cost: 2,
    effects: [{ type: 'GRANT_SPELL_FROM_LIST_SCHOOLS', target: 'Arcane_Spell_List', schools: ['Destruction', 'Enchantment'] }, { type: 'REDUCE_MP_COST_ONCE_PER_LONG_REST', value: 1, condition: 'spell_damage_type_matches_fiendish' }]
  },
  {
    id: 'fiendborn_darkvision',
    name: 'Darkvision',
    description: 'You have a Darkvision of 10 Spaces.',
    cost: 1,
    effects: [{ type: 'GRANT_DARKVISION', value: 10 }]
  },
  {
    id: 'fiendborn_lights_bane',
    name: 'Light’s Bane',
    description: 'You can spend 1 AP to snuff out a mundane light source within 5 Spaces of you.',
    cost: 0,
    isMinor: true,
    effects: [{ type: 'GRANT_ABILITY', value: 'Snuff_Out_Mundane_Light_Source_1AP' }]
  },
  {
    id: 'fiendborn_mana_increase',
    name: 'Mana Increase',
    description: 'Your MP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_MP_MAX', value: 1 }]
  },
  {
    id: 'fiendborn_silver_tongued',
    name: 'Silver-Tongued',
    description: 'Once per Long Rest you can grant yourself ADV on an Influence Check when trying to deceive someone.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_INFLUENCE_CHECK_ONCE_PER_LONG_REST', condition: 'trying_to_deceive' }]
  },
  {
    id: 'fiendborn_fiendish_aura',
    name: 'Fiendish Aura',
    description: 'You learn the Sorcery Cantrip, but you must choose the type of energy that’s the same as your Fiendish Origin.',
    cost: 1,
    effects: [{ type: 'GRANT_SPELL_KNOWN', value: 'Sorcery_Cantrip' }, { type: 'SET_SORCERY_ENERGY_TYPE', target: 'Fiendish_Origin' }]
  },
  {
    id: 'fiendborn_superior_darkvision',
    name: 'Superior Darkvision',
    description: 'Your Darkvision increases to 20 Spaces.',
    cost: 1,
    prerequisites: ['fiendborn_darkvision'],
    effects: [{ type: 'MODIFY_DARKVISION', value: 20 }]
  },
  {
    id: 'fiendborn_infernal_bravery',
    name: 'Infernal Bravery',
    description: 'You have ADV on Saves against being Intimidated.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Intimidated' }]
  },
  {
    id: 'fiendborn_intimidator',
    name: 'Intimidator',
    description: 'Once per Combat you can take the Intimidate Action as a Minor Action.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Intimidate_As_Minor_Action_OncePerCombat' }]
  },
  {
    id: 'fiendborn_charming_gaze',
    name: 'Charming Gaze',
    description: 'You can spend 1 AP to gaze upon a creature you can see within 10 Spaces that can also see you. Make a Spell Check contested by the target’s Repeated Charisma Save. Success: The creature becomes Charmed by you for 1 minute. You can use this ability once per Long Rest, and when you roll for Initiative, or meet some other unique criteria at the GM’s discretion, this ability recharges.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Charm_Target_OncePerLongRest_1AP' }]
  },
  {
    id: 'fiendborn_glide_speed',
    name: 'Glide Speed',
    description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.',
    cost: 2,
    effects: [{ type: 'GRANT_GLIDE_SPEED' }]
  },
  {
    id: 'fiendborn_radiant_weakness',
    name: 'Radiant Weakness',
    description: 'You have Radiant Vulnerability (1).',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'GRANT_VULNERABILITY_STATIC', target: 'Radiant', value: 1 }]
  },
  {
    id: 'fiendborn_divine_dampening',
    name: 'Divine Dampening',
    description: 'You recover 1 less HP when healed from divine sources.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'REDUCE_HP_REGAINED_FROM_DIVINE_SOURCES', value: 1 }]
  },

  // Beastborn Traits (p. 115-116)
  {
    id: 'beastborn_darkvision',
    name: 'Darkvision',
    description: 'You have Darkvision 10 Spaces.',
    cost: 1,
    effects: [{ type: 'GRANT_DARKVISION', value: 10 }]
  },
  {
    id: 'beastborn_echolocation',
    name: 'Echolocation',
    description: 'You can spend 1 AP to roar, scream, or screech to gain Blindsight in a 10 Spaces radius that lasts until the start of your next turn. The sound can be heard from up to 100 Spaces away. You gain no benefit from this Trait in an area of Silence.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Echolocation_1AP_10Space_1Round' }]
  },
  {
    id: 'beastborn_keen_sense',
    name: 'Keen Sense',
    description: 'Choose 1 of the following senses: hearing, sight, or smell. You make Awareness Checks with ADV using the chosen sense.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_AWARENESS_CHECKS_USING_SENSE', target: 'chosen_sense', userChoiceRequired: { prompt: "Choose a sense: hearing, sight, or smell" } }],
    // This trait can be chosen multiple times, but the interface doesn't directly support that.
    // The logic for handling multiple selections will need to be in the application.
  },
  {
    id: 'beastborn_sunlight_sensitivity',
    name: 'Sunlight Sensitivity',
    description: 'While you or your target is in sunlight, you have DisADV on Attacks and Awareness Checks that rely on sight.',
    cost: -2,
    isNegative: true,
    effects: [{ type: 'GRANT_DISADV_ON_ATTACKS_AWARENESS_CHECKS_IN_SUNLIGHT' }]
  },
  {
    id: 'beastborn_quick_reactions',
    name: 'Quick Reactions',
    description: 'While you aren’t wearing Armor, you gain +1 PD.',
    cost: 1,
    effects: [{ type: 'MODIFY_PD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'beastborn_climb_speed',
    name: 'Climb Speed',
    description: 'You gain a Climb Speed equal to your Ground Speed.',
    cost: 1,
    effects: [{ type: 'GRANT_CLIMB_SPEED_EQUAL_TO_SPEED' }]
  },
  {
    id: 'beastborn_spider_climb',
    name: 'Spider Climb',
    description: 'You can walk without falling on the ceiling and vertical surfaces normally without needing to Climb.',
    cost: 1,
    prerequisites: ['beastborn_climb_speed'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Walk_On_Vertical_Surfaces_Ceilings' }]
  },
  {
    id: 'beastborn_web_walk',
    name: 'Web Walk',
    description: 'You can walk along and through webs unimpeded. Additionally, you know the location of any creature that’s in contact with the same web.',
    cost: 1,
    effects: [{ type: 'IGNORE_DIFFICULT_TERRAIN_FROM_WEBS' }, { type: 'KNOW_LOCATION_OF_CREATURES_IN_CONTACT_WITH_WEB' }]
  },
  {
    id: 'beastborn_water_breathing',
    name: 'Water Breathing',
    description: 'You can breathe underwater.',
    cost: 1,
    effects: [{ type: 'GRANT_WATER_BREATHING' }]
  },
  {
    id: 'beastborn_swim_speed',
    name: 'Swim Speed',
    description: 'You gain a Swim Speed equal to your Ground Speed. Additionally, your Breath Duration increases by 3.',
    cost: 1,
    effects: [{ type: 'GRANT_SWIM_SPEED_EQUAL_TO_SPEED' }, { type: 'MODIFY_BREATH_DURATION', value: 3 }]
  },
  {
    id: 'beastborn_speed_increase',
    name: 'Speed Increase',
    description: 'Your Speed increases by 1 Space.',
    cost: 2,
    effects: [{ type: 'MODIFY_SPEED', value: 5 }],
    // This trait can be chosen up to 5 times, but the interface doesn't directly support that.
    // The logic for handling multiple selections will need to be in the application.
  },
  {
    id: 'beastborn_sprint',
    name: 'Sprint',
    description: 'You can use your Minor Action to take the Move Action. Once you use this Trait, you can’t use it again until you take a turn without taking the Move Action.',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Move_As_Minor_Action_OncePerTurn_NoMoveAction' }]
  },
  {
    id: 'beastborn_charge',
    name: 'Charge',
    description: 'If you move at least 2 Spaces in a straight line before making a Melee Attack, the damage of the Attack increases by 1.',
    cost: 2,
    effects: [{ type: 'MODIFY_DAMAGE_ON_MELEE_ATTACK', value: 1, condition: 'move_2_spaces_straight_before' }]
  },
  {
    id: 'beastborn_burrow_speed',
    name: 'Burrow Speed',
    description: 'You gain a Burrow Speed equal to half your Movement Speed.',
    cost: 2,
    effects: [{ type: 'GRANT_BURROW_SPEED_HALF_SPEED' }]
  },
  {
    id: 'beastborn_jumper',
    name: 'Jumper',
    description: 'Your Jump Distance increases by 2, and you can take the Jump Action as a Minor Action.',
    cost: 1,
    effects: [{ type: 'MODIFY_JUMP_DISTANCE', value: 2 }, { type: 'GRANT_ABILITY', value: 'Jump_As_Minor_Action' }]
  },
  {
    id: 'beastborn_strong_jumper',
    name: 'Strong Jumper',
    description: 'You no longer need to move 2 Spaces before performing a Running Jump, and you take 0 damage from Controlled Falling 5 Spaces or less.',
    cost: 1,
    effects: [{ type: 'IGNORE_2_SPACES_MOVEMENT_FOR_RUNNING_JUMP' }, { type: 'IGNORE_FALLING_DAMAGE_5_SPACES_OR_LESS' }]
  },
  {
    id: 'beastborn_glide_speed',
    name: 'Glide Speed',
    description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren’t Incapacitated, you gain the following benefits while in the air: Controlled Falling: You suffer no damage from Controlled Falling. Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces. Glide Speed: You can use your movement to glide horizontally.',
    cost: 2,
    effects: [{ type: 'GRANT_GLIDE_SPEED' }]
  },
  {
    id: 'beastborn_limited_flight',
    name: 'Limited Flight',
    description: 'You have a set of wings that grant you limited flight. Provided you aren’t Incapacitated, you gain the following benefits: Vertical Ascent: You can spend 2 Spaces of movement to ascend 1 Space vertically. Hover: When you end your turn in the air, you maintain your altitude.',
    cost: 2,
    prerequisites: ['beastborn_glide_speed'],
    effects: [{ type: 'GRANT_LIMITED_FLIGHT' }]
  },
  {
    id: 'beastborn_full_flight',
    name: 'Full Flight',
    description: 'You have a Fly Speed equal to your Ground Speed.',
    cost: 2,
    prerequisites: ['beastborn_limited_flight'],
    effects: [{ type: 'GRANT_FLY_SPEED_EQUAL_TO_SPEED' }]
  },
  {
    id: 'beastborn_flyby',
    name: 'Flyby',
    description: 'You don’t provoke Opportunity Attacks when you Fly out of an enemy’s reach.',
    cost: 1,
    prerequisites: ['beastborn_limited_flight'],
    effects: [{ type: 'IGNORE_OPPORTUNITY_ATTACKS_WHEN_FLY_OUT_OF_REACH' }]
  },
  {
    id: 'beastborn_stealth_feathers',
    name: 'Stealth Feathers',
    description: 'You have ADV on Stealth Checks while Flying.',
    cost: 2,
    prerequisites: ['beastborn_limited_flight'],
    effects: [{ type: 'GRANT_ADV_ON_STEALTH_CHECKS_WHILE_FLYING' }]
  },
  {
    id: 'beastborn_winged_arms',
    name: 'Winged Arms',
    description: 'Your arms are also your wings. Anytime you use a Glide Speed or Flying Speed, you can’t hold anything in your hands.',
    cost: -1,
    isNegative: true,
    prerequisites: ['beastborn_limited_flight'], // Assuming Limited Flight or Full Flight
    effects: [{ type: 'PENALTY_CANT_HOLD_WHILE_FLYING' }]
  },
  {
    id: 'beastborn_tough',
    name: 'Tough',
    description: 'Your HP maximum increases by 1.',
    cost: 1,
    effects: [{ type: 'MODIFY_HP_MAX_STATIC', value: 1 }]
  },
  {
    id: 'beastborn_thick_skinned',
    name: 'Thick-Skinned',
    description: 'While you aren’t wearing Armor, you gain +1 AD.',
    cost: 1,
    effects: [{ type: 'MODIFY_AD', value: 1, condition: 'not_wearing_armor' }]
  },
  {
    id: 'beastborn_powerful_build',
    name: 'Powerful Build',
    description: 'You increase by 1 Size, but you occupy the Space of a creature 1 Size smaller.',
    cost: 2,
    effects: [{ type: 'MODIFY_SIZE', target: 'Large' }, { type: 'MODIFY_SPACE_OCCUPIED', target: '1_Size_Smaller' }]
  },
  {
    id: 'beastborn_long_limbed',
    name: 'Long-Limbed',
    description: 'When you make a Melee Martial Attack, your reach is 1 Space greater than normal.',
    cost: 3,
    effects: [{ type: 'MODIFY_MELEE_REACH', value: 1 }]
  },
  {
    id: 'beastborn_secondary_arms',
    name: 'Secondary Arms',
    description: 'You have 2 slightly smaller secondary arms below your primary pair of arms. They function just like your primary arms, but they can’t wield Weapons with the Heavy Property or Shields.',
    cost: 1,
    effects: [{ type: 'GRANT_SECONDARY_ARMS' }]
  },
  {
    id: 'beastborn_prehensile_appendage',
    name: 'Prehensile Appendage',
    description: 'You have a prehensile tail or trunk that has a reach of 1 Space and can lift up an amount of pounds equal to your Might times 5 (or half as many kilograms). You can use it to lift, hold, or drop objects, and to push, pull, or grapple creatures. It can’t wield Weapons or Shields, you can’t use tools with it that require manual precision, and you can’t use it in place of Somatic Components for Spells.',
    cost: 1,
    effects: [{ type: 'GRANT_PREHENSILE_APPENDAGE' }]
  },
  {
    id: 'beastborn_hazardous_hide',
    name: 'Hazardous Hide',
    description: 'You have spikes, retractable barbs, poisonous skin, or some other form of defense mechanism to keep creatures from touching you. Choose 1 of the following damage types: Corrosion, Piercing, or Poison. While you are physically Grappled, your Grappler takes 1 damage of the chosen type at the start of each of its turns. Creatures that start their turn Grappled by you also take this damage.',
    cost: 1,
    effects: [{ type: 'GRANT_DAMAGE_TO_GRAPPLER', target: 'chosen_damage_type', value: 1, userChoiceRequired: { prompt: "Choose a damage type: Corrosion, Piercing, or Poison" } }]
  },
  {
    id: 'beastborn_natural_armor',
    name: 'Natural Armor',
    description: 'While not wearing Armor, you gain PDR.',
    cost: 2,
    prerequisites: ['beastborn_thick_skinned'],
    effects: [{ type: 'GRANT_PDR', condition: 'not_wearing_armor' }]
  },
  {
    id: 'beastborn_hard_shell',
    name: 'Hard Shell',
    description: 'You have a large shell around your body for protection. Your AD increases by 1 (while you’re not wearing Armor), your Movement Speed decreases by 1, and you’re immune to being Flanked.',
    cost: 1,
    prerequisites: ['beastborn_thick_skinned'],
    effects: [{ type: 'MODIFY_AD', value: 1, condition: 'not_wearing_armor' }, { type: 'MODIFY_SPEED', value: -5 }, { type: 'IMMUNE_TO_FLANKING' }]
  },
  {
    id: 'beastborn_shell_retreat',
    name: 'Shell Retreat',
    description: 'Your body has a shell that you can retreat into. You can spend 1 AP to retreat into or come back out of your shell. You gain +5 PD and AD, PDR, EDR and ADV on Might Saves. While in your shell, you’re Prone, you can’t move, you have DisADV on Agility Saves, and you can’t take Reactions.',
    cost: 1,
    prerequisites: ['beastborn_hard_shell'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Retreat_Into_Shell_1AP' }]
  },
  {
    id: 'beastborn_camouflage',
    name: 'Camouflage',
    description: 'You can change the color and pattern of your body. You have ADV on Stealth Checks while motionless.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_STEALTH_CHECKS_WHILE_MOTIONLESS' }]
  },
  {
    id: 'beastborn_prowler',
    name: 'Prowler',
    description: 'You have ADV on Stealth Checks while in Darkness.',
    cost: 1,
    effects: [{ type: 'GRANT_ADV_ON_STEALTH_CHECKS_WHILE_IN_DARKNESS' }]
  },
  {
    id: 'beastborn_cold_resistance',
    name: 'Cold Resistance',
    description: 'You have Cold Resistance (Half) and Resistance to Exhaustion from cold temperatures.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Cold' }, { type: 'GRANT_RESISTANCE_TO_EXHAUSTION', condition: 'cold_temperatures' }]
  },
  {
    id: 'beastborn_fire_resistance',
    name: 'Fire Resistance',
    description: 'You have Fire Resistance (Half) and Resistance to Exhaustion from hot temperatures.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Fire' }, { type: 'GRANT_RESISTANCE_TO_EXHAUSTION', condition: 'hot_temperatures' }]
  },
  {
    id: 'beastborn_short_legged',
    name: 'Short-Legged',
    description: 'Your Speed decreases by 1 Space.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SPEED', value: -5 }]
  },
  {
    id: 'beastborn_small_sized',
    name: 'Small-Sized',
    description: 'Your Size is considered Small.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_SIZE', target: 'Small' }]
  },
  {
    id: 'beastborn_reckless',
    name: 'Reckless',
    description: 'Your PD decreases by 1.',
    cost: -1,
    isNegative: true,
    effects: [{ type: 'MODIFY_PD', value: -1 }]
  },
  {
    id: 'beastborn_natural_weapon',
    name: 'Natural Weapon',
    description: 'You have up to 2 Natural Weapons (claws, horns, fangs, tail, etc.) which you can use to make Unarmed Strikes that deal 1 Bludgeoning, Piercing, or Slashing damage (your choice upon gaining this Trait). You can perform Attack Maneuvers with your Natural Weapons.',
    cost: 1,
    effects: [{ type: 'GRANT_NATURAL_WEAPON', value: 1, userChoiceRequired: { prompt: "Choose a damage type: Bludgeoning, Piercing, or Slashing" } }],
    // This trait can be chosen multiple times, but the interface doesn't directly support that.
    // The logic for handling multiple selections will need to be in the application.
  },
  {
    id: 'beastborn_extended_natural_weapon',
    name: 'Extended Natural Weapon',
    description: 'Your Natural Weapon now has the Reach Property.',
    cost: 2,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_PROPERTY_TO_NATURAL_WEAPON', target: 'Reach' }]
  },
  {
    id: 'beastborn_natural_projectile',
    name: 'Natural Projectile',
    description: 'You can use your Natural Weapon to make a Ranged Martial Attack with a Range of 10 Spaces. The Natural Weapon might produce a spine, barb, fluid, or other harmful projectile (your choice).',
    cost: 1,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Natural_Projectile_Ranged_Attack' }]
  },
  {
    id: 'beastborn_natural_weapon_passive',
    name: 'Natural Weapon Passive',
    description: 'You can choose 1 Weapon Style that fits your desired Natural Weapon. You can benefit from the chosen Weapon Style’s passive with your Natural Weapon.',
    cost: 1,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_WEAPON_STYLE_PASSIVE_TO_NATURAL_WEAPON', target: 'chosen_weapon_style', userChoiceRequired: { prompt: "Choose a Weapon Style" } }]
  },
  {
    id: 'beastborn_rend',
    name: 'Rend',
    description: 'You can spend 1 AP when making an Attack Check with your Natural Weapon to force the target to make a Physical Save. Failure: Target begins Bleeding.',
    cost: 1,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Rend_Bleeding_1AP' }]
  },
  {
    id: 'beastborn_retractable_natural_weapon',
    name: 'Retractable Natural Weapon',
    description: 'Your Natural Weapon is able to be concealed or retracted and gains the Concealable Property (gain ADV on the first Attack Check you make in Combat).',
    cost: 1,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_PROPERTY_TO_NATURAL_WEAPON', target: 'Concealable' }]
  },
  {
    id: 'beastborn_venomous_natural_weapon',
    name: 'Venomous Natural Weapon',
    description: 'When you Hit a creature with your Natural Weapon, they make a Physical Save against your Save DC. Failure: The target becomes Impaired until the start of your next turn.',
    cost: 1,
    prerequisites: ['beastborn_natural_weapon'],
    effects: [{ type: 'GRANT_ABILITY', value: 'Venomous_Natural_Weapon_Impaired' }]
  },
  {
    id: 'beastborn_fast_reflexes',
    name: 'Fast Reflexes',
    description: 'You gain ADV on Initiative Checks and on the first Attack Check you make in Combat.',
    cost: 2,
    effects: [{ type: 'GRANT_ADV_ON_INITIATIVE_CHECKS' }, { type: 'GRANT_ADV_ON_FIRST_ATTACK_CHECK_IN_COMBAT' }]
  },
  {
    id: 'beastborn_mimicry',
    name: 'Mimicry',
    description: 'You can mimic simple sounds that you’ve heard (such as a baby’s crying, the creak of a door, or single words) and repeat short 3 word phrases that sound identical to what you heard. A creature can make an Insight Check contested by your Trickery Check to determine if this sound is real.',
    cost: 1,
    effects: [{ type: 'GRANT_ABILITY', value: 'Mimic_Simple_Sounds_Short_Phrases' }]
  },
  {
    id: 'beastborn_intimidating_shout',
    name: 'Intimidating Shout',
    description: 'Once per Combat, you can spend 1 AP to let out an Intimidating Shout. All creatures within 5 Spaces that can hear you must make a Charisma Save contested by your Attack Check. Failure: A target is Hindered on the next Attack Check or Spell Attack it makes before the start of your next turn.',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Intimidating_Shout_OncePerCombat_1AP' }]
  },
  {
    id: 'beastborn_toxic_fortitude',
    name: 'Toxic Fortitude',
    description: 'You have Poison Resistance (Half) and ADV on Saves against being Poisoned.',
    cost: 2,
    effects: [{ type: 'GRANT_RESISTANCE_HALF', target: 'Poison' }, { type: 'GRANT_ADV_ON_SAVE_VS_CONDITION', target: 'Poisoned' }]
  },
  {
    id: 'beastborn_shoot_webs',
    name: 'Shoot Webs',
    description: 'You can spend 1 AP to shoot web at a target within 5 Spaces. Make an Attack Check contested by the target’s Physical Save. Success: The target is Restrained by webbing and can spend 1 AP on their turn to attempt to escape (Martial Check vs your Save DC). The webbing can also be attacked and destroyed (PD 5, AD 10, 2 HP; Immunity to Bludgeoning, Poison, and Psychic damage).',
    cost: 2,
    effects: [{ type: 'GRANT_ABILITY', value: 'Shoot_Webs_1AP' }]
  },
];
````

## File: src/routes/test-ui/+page.svelte
````
<h1 class="text-2xl p-4 text-yellow-accent">UI Test Page</h1>
<div class="bg-purple-primary w-24 h-24 m-4"></div>

<button
  class="p-2 px-4 m-4 bg-orange-secondary text-light-text-primary rounded-lg font-semibold hover:bg-opacity-80"
  on:click={() => alert('Styled HTML button works!')}>
  Test Styled Button
</button>

<script lang="ts">
  import { createCollapsible, melt } from '@melt-ui/svelte';
  const {
    elements: { root, content, trigger },
    states: { open },
  } = createCollapsible();
</script>

<div use:melt={$root} class="mt-4 p-2 border border-purple-primary rounded">
  <button use:melt={$trigger} class="p-2 bg-purple-primary text-light-text-primary rounded w-full text-left">
    Collapsible Trigger (Click to {$open ? 'Close' : 'Open'})
  </button>
  {#if $open}
    <div use:melt={$content} class="p-2 mt-2 bg-dark-bg-secondary text-light-text-primary rounded">
      Collapsible Content - Now Visible!
    </div>
  {/if}
</div>
````

## File: .svelte-kit/ambient.d.ts
````typescript
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DATABASE_URL: string;
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const ChocolateyInstall: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const COLOR: string;
	export const COLORTERM: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const DriverData: string;
	export const EDITOR: string;
	export const EFC_10904: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const GIT_ASKPASS: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const IGCCSVC_DB: string;
	export const INIT_CWD: string;
	export const LANG: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_node_gyp: string;
	export const npm_config_noproxy: string;
	export const npm_config_npm_version: string;
	export const npm_config_prefix: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OneDrive: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const SESSIONNAME: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMP: string;
	export const USERDNSDOMAIN: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_INJECTION: string;
	export const WebStorm: string;
	export const windir: string;
	export const ZES_ENABLE_SYSMAN: string;
	export const __PSLockDownPolicy: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DATABASE_URL: string;
		ALLUSERSPROFILE: string;
		APPDATA: string;
		ChocolateyInstall: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		COLOR: string;
		COLORTERM: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		DriverData: string;
		EDITOR: string;
		EFC_10904: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		GIT_ASKPASS: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		IGCCSVC_DB: string;
		INIT_CWD: string;
		LANG: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		NODE: string;
		NODE_ENV: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_node_gyp: string;
		npm_config_noproxy: string;
		npm_config_npm_version: string;
		npm_config_prefix: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		NUMBER_OF_PROCESSORS: string;
		OneDrive: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		SESSIONNAME: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TMP: string;
		USERDNSDOMAIN: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_INJECTION: string;
		WebStorm: string;
		windir: string;
		ZES_ENABLE_SYSMAN: string;
		__PSLockDownPolicy: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
````

## File: memory-bank/progress.md
````markdown
# Progress

This document summarizes the current status of the project, including what has been completed, what remains, and any known issues.

## What Works

- **Stage 0 (Foundation and UI Setup) Completed:**
    - Functional SvelteKit project initialized and configured.
    - TailwindCSS installed and configured with the project's custom theme, verified.
    - The Inter font loaded and applied.
    - Melt UI (`@melt-ui/svelte`) installed, and its preprocessor (`@melt-ui/pp`) correctly configured.
    - `projectPlan/stage0.md` updated.
- The memory bank documentation has been successfully updated to reflect the project plan detailed in the `projectPlan/` directory.
- The core technologies, UI design principles, MVP feature scope, data modeling (Prisma schema), key backend logic, key frontend logic, and specific planning decisions for the Level 1 Character Creator MVP have been documented.
- Detailed plans for Stage A (Attributes) and Stage B (Ancestry) of the character creation wizard have been incorporated into the documentation.
- Static rule data in TypeScript files (`src/lib/rulesdata/`) has been implemented based on the DC20 Beta 0.9.5 rulebook.

## What's Left to Build

- Implement the frontend Svelte component and logic for Stage A (Attributes).
- Implement the backend endpoint/Form Action for Stage A data persistence and validation.
- Implement the frontend Svelte component and logic for Stage B (Ancestry), including the attribute overflow helper panel.
- Implement the backend endpoint/Form Action for Stage B data persistence and validation.
- Detail and implement Stage C (Class) of the character creation wizard.
- Implement the backend logic for final character calculation and `CharacterSheetData` creation.
- Implement the frontend component for displaying the finalized character sheet.
- Implement the basic resume functionality using browser `localStorage`.

## Current Status

The project has successfully completed Stage 0 (Foundation and UI Setup). The SvelteKit application has a stable and verified UI foundation, including TailwindCSS with the custom theme, the Inter font, and a working Melt UI installation with its preprocessor. The core requirements, scope, and technical approach are defined. Detailed plans for the first two wizard stages (A and B) are documented. The next steps involve translating these plans into code, starting with the implementation of Stage A (Attributes).

## Known Issues

- Stage C of the character creation wizard is not yet detailed in the planning documents.
- The attribute overflow helper panel logic in Stage B requires careful implementation and testing to ensure correct attribute reallocation and validation.

## Evolution of Project Decisions

- The SvelteKit project was initialized manually to work within the existing project structure.
- The necessity of installing and configuring the `@melt-ui/pp` preprocessor for Melt UI was identified and implemented during Stage 0.
- The decision to initially store static rule data in TypeScript files was made for simplicity during the MVP phase, with a potential future plan to move it to the database.
- The character creation wizard stages were re-ordered from the original DC20 steps to A-Attributes, B-Ancestry, C-Class, D-Background, E-Review, F-Equipment for a more streamlined digital workflow.
- A specific dark mode color palette and font (Inter) have been chosen for the UI aesthetics.
````

## File: src/lib/rulesdata/ancestries.ts
````typescript
// src/lib/rulesdata/ancestries.ts

import type { IAncestry } from './types';

export const ancestriesData: IAncestry[] = [
  {
    id: 'human',
    name: 'Human',
    description: 'Humans are the most common ancestry in the world, known for their adaptability and resilience.',
    defaultTraitIds: ['human_attribute_increase', 'human_skill_expertise', 'human_resolve', 'human_undying'],
    expandedTraitIds: ['human_trade_expertise', 'human_determination', 'human_unbreakable', 'human_attribute_decrease'],
  },
  {
    id: 'elf',
    name: 'Elf',
    description: 'Elves are graceful and long-lived beings with a deep connection to nature.',
    defaultTraitIds: ['elf_elven_will', 'elf_nimble', 'elf_agile_explorer', 'elf_discerning_sight'],
    expandedTraitIds: ['elf_quick_reactions', 'elf_peerless_sight', 'elf_climb_speed', 'elf_speed_increase', 'elf_trade_expertise_elf', 'elf_plant_knowledge', 'elf_brittle', 'elf_frail', 'elf_might_decrease'],
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    description: 'Dwarves are a stout and resilient folk, known for their craftsmanship and deep connection to the earth.',
    defaultTraitIds: ['dwarf_tough', 'dwarf_toxic_fortitude', 'dwarf_physically_sturdy', 'dwarf_iron_stomach'],
    expandedTraitIds: ['dwarf_thick_skinned', 'dwarf_natural_combatant', 'dwarf_stone_blood', 'dwarf_minor_tremorsense', 'dwarf_stubborn', 'dwarf_trade_expertise', 'dwarf_earthen_knowledge', 'dwarf_charisma_attribute_decrease', 'dwarf_short_legged'],
  },
  {
    id: 'halfling',
    name: 'Halfling',
    description: 'Halflings are a small and nimble folk, known for their bravery and love of comfort.',
    defaultTraitIds: ['halfling_small_sized', 'halfling_elusive', 'halfling_bravery', 'halfling_endurance', 'halfling_deft_footwork', 'halfling_beast_whisperer'],
    expandedTraitIds: ['halfling_beast_insight', 'halfling_burst_of_bravery', 'halfling_trade_expertise', 'halfling_critter_knowledge', 'halfling_brittle', 'halfling_intelligence_attribute_decrease', 'halfling_short_legged'],
  },
  {
    id: 'gnome',
    name: 'Gnome',
    description: 'Gnomes are small and energetic folk, known for their inventiveness and connection to the feywild.',
    defaultTraitIds: ['gnome_small_sized', 'gnome_escape_artist', 'gnome_magnified_vision', 'gnome_mental_clarity', 'gnome_strong_minded', 'gnome_predict_weather'],
    expandedTraitIds: ['gnome_mana_increase', 'gnome_trapper', 'gnome_lightning_insulation', 'gnome_trade_expertise', 'gnome_storm_knowledge', 'gnome_agility_attribute_decrease', 'gnome_short_legged'],
  },
  {
    id: 'orc',
    name: 'Orc',
    description: 'Orcs are a strong and fierce folk, known for their martial prowess and intimidating presence.',
    defaultTraitIds: ['orc_cursed_mind', 'orc_rush', 'orc_brutal_strikes', 'orc_tough', 'orc_orcish_resolve', 'orc_already_cursed'],
    expandedTraitIds: ['orc_intimidating_shout', 'orc_dash', 'orc_finishing_blow', 'orc_imposing_presence', 'orc_provocation', 'orc_reckless'],
  },
  {
    id: 'dragonborn',
    name: 'Dragonborn',
    description: 'Dragonborn are a proud and powerful folk, who trace their lineage back to dragons.',
    defaultTraitIds: ['dragonborn_darkvision', 'dragonborn_draconic_resistance', 'dragonborn_draconic_breath_weapon', 'dragonborn_reptilian_superiority'],
    expandedTraitIds: ['dragonborn_mana_increase', 'dragonborn_thick_skinned', 'dragonborn_second_breath', 'dragonborn_concussive_breath', 'dragonborn_draconic_affinity', 'dragonborn_dying_breath', 'dragonborn_draconic_ward', 'dragonborn_draconic_protection', 'dragonborn_glide_speed', 'dragonborn_guardians_bond'],
    origin: { // Draconic Origin
      prompt: 'Choose a Draconic Origin:',
      options: ['cold', 'corrosion', 'fire', 'lightning', 'poison', 'sonic', 'psychic', 'radiant', 'umbral'],
    },
  },
  {
    id: 'giantborn',
    name: 'Giantborn',
    description: 'Giantborn are a large and powerful folk, who trace their lineage back to giants.',
    defaultTraitIds: ['giantborn_tough', 'giantborn_powerful_build', 'giantborn_unstoppable', 'giantborn_giants_resolve', 'giantborn_unyielding_movement'],
    expandedTraitIds: ['giantborn_giants_fortitude', 'giantborn_strong_body', 'giantborn_mighty_hurl', 'giantborn_titanic_toss', 'giantborn_mighty_leap', 'giantborn_brute', 'giantborn_heavy_riser', 'giantborn_clumsiness', 'giantborn_intelligence_attribute_decrease'],
  },
  {
    id: 'angelborn',
    name: 'Angelborn',
    description: 'Angelborn are a celestial folk, known for their grace and divine connection.',
    defaultTraitIds: ['angelborn_radiant_resistance', 'angelborn_celestial_magic', 'angelborn_healing_touch', 'angelborn_divine_glow'],
    expandedTraitIds: ['angelborn_mana_increase', 'angelborn_celestial_clarity', 'angelborn_angelic_insight', 'angelborn_gift_of_the_angels', 'angelborn_blinding_light', 'angelborn_glide_speed', 'angelborn_pacifist', 'angelborn_umbral_weakness'],
    variantTraits: [ // Fallen Angelborn
      { id: 'angelborn_fallen', name: 'Fallen', cost: 0, description: 'You can now spend your Ancestry Points on Fiendborn Traits.' }
    ],
  },
  {
    id: 'fiendborn',
    name: 'Fiendborn',
    description: 'Fiendborn are a fiendish folk, known for their cunning and infernal connection.',
    defaultTraitIds: ['fiendborn_fiendish_resistance', 'fiendborn_fiendish_magic', 'fiendborn_darkvision', 'fiendborn_lights_bane'],
    expandedTraitIds: ['fiendborn_mana_increase', 'fiendborn_silver_tongued', 'fiendborn_fiendish_aura', 'fiendborn_superior_darkvision', 'fiendborn_infernal_bravery', 'fiendborn_intimidator', 'fiendborn_charming_gaze', 'fiendborn_glide_speed', 'fiendborn_radiant_weakness', 'fiendborn_divine_dampening'],
    origin: { // Fiendish Origin
      prompt: 'Choose a Fiendish Origin:',
      options: ['cold', 'corrosion', 'fire', 'poison', 'umbral'],
    },
    variantTraits: [ // Fiendborn Redemption
      { id: 'fiendborn_redeemed', name: 'Redeemed', cost: 0, description: 'You can now spend your Ancestry Points on Angelborn Traits.' }
    ],
  },
  {
    id: 'beastborn',
    name: 'Beastborn',
    description: 'Beastborn are a diverse folk, who take on the characteristics of various beasts.',
    defaultTraitIds: [], // Beastborn has no Default Traits
    expandedTraitIds: [ // Listed under Beast Traits sections in PDF
      // Senses
      'beastborn_darkvision', 'beastborn_echolocation', 'beastborn_keen_sense', 'beastborn_sunlight_sensitivity',
      // Mobility
      'beastborn_quick_reactions', 'beastborn_climb_speed', 'beastborn_spider_climb', 'beastborn_web_walk', 'beastborn_water_breathing', 'beastborn_swim_speed', 'beastborn_speed_increase', 'beastborn_sprint', 'beastborn_charge', 'beastborn_burrow_speed',
      // Jumping
      'beastborn_jumper', 'beastborn_strong_jumper',
      // Flying
      'beastborn_glide_speed', 'beastborn_limited_flight', 'beastborn_full_flight', 'beastborn_flyby', 'beastborn_stealth_feathers', 'beastborn_winged_arms',
      // Body
      'beastborn_tough', 'beastborn_thick_skinned', 'beastborn_powerful_build', 'beastborn_long_limbed', 'beastborn_secondary_arms', 'beastborn_prehensile_appendage', 'beastborn_hazardous_hide', 'beastborn_natural_armor', 'beastborn_hard_shell', 'beastborn_shell_retreat', 'beastborn_camouflage', 'beastborn_prowler', 'beastborn_cold_resistance', 'beastborn_fire_resistance', 'beastborn_short_legged', 'beastborn_small_sized', 'beastborn_reckless',
      // Natural Weapons
      'beastborn_natural_weapon', 'beastborn_extended_natural_weapon', 'beastborn_natural_projectile', 'beastborn_natural_weapon_passive', 'beastborn_rend', 'beastborn_retractable_natural_weapon', 'beastborn_venomous_natural_weapon',
      // Miscellaneous
      'beastborn_fast_reflexes', 'beastborn_mimicry', 'beastborn_intimidating_shout', 'beastborn_toxic_fortitude', 'beastborn_shoot_webs',
    ],
    origin: { // Beastborn Origin
      prompt: 'Choose a type of Beast you are modeled after:',
      options: [], // Options are open-ended, based on GM/player choice
    },
  },
];
````

## File: src/lib/rulesdata/attributes.ts
````typescript
// src/lib/rulesdata/attributes.ts

import type { IAttributeData } from './types';
// To be placed in: src/lib/rulesdata/attributes.ts
export const attributesData: IAttributeData[] = [
// TODO: Replace bracketed placeholders with accurate information from the DC20 Beta 0.9.5 rulebook.
{
  id: 'might',
  name: 'Might',
  description: 'Your Strength of Body.',
  derivedStats: [ // Examples, verify/adjust based on actual rules for each attribute
    { statName: 'AD (area defense)', formula: '8 + CM + Might + Charisma + Bonuses' },
    { statName: 'Max HP', formula: 'Class HP + Might + Ancestry HP' }
  ]
},
{
  id: 'agility',
  name: 'Agility',
  description: 'Your Balance, Nimbleness, and Dexterity.',
  derivedStats: [
    { statName: 'PD (precision defense)', formula: '8 + CM + Agility + Intelligence + Bonuses' },
    { statName: 'Jump Distance', formula: 'Agility (min 1)' },
    { statName: 'Initiative', formula: 'CM + Agility' }
  ]
},
{
  id: 'charisma',
  name: 'Charisma',
  description: 'Your Charm, Presence, Persuasiveness, and Force of Will.',
  derivedStats: [
    { statName: 'Grit Points', formula: '2 + Charisma' }
  ]
},
{
  id: 'intelligence',
  name: 'Intelligence',
  description: 'Your Reasoning, Understanding, and Wisdom.',
  derivedStats: [
    { statName: 'Base Skill Points', formula: '5 + Intelligence' }
  ]
}
];
````

## File: src/lib/rulesdata/types.ts
````typescript
// src/lib/rulesdata/types.ts

// Interface for Attribute Data
export interface IAttributeData {
  id: 'might' | 'agility' | 'charisma' | 'intelligence';
  name: string;
  description: string;
  derivedStats?: Array<{ statName: string; formula: string; }>;
}

// Interface for Trait Effects
export interface ITraitEffect {
  type: string; // e.g., 'MODIFY_ATTRIBUTE', 'GRANT_SKILL_EXPERTISE', 'GRANT_FEATURE'
  target?: string; // e.g., attribute ID ('might'), skill ID ('athletics'), feature ID ('rage')
  value?: any; // e.g., number for attribute modification, object for skill expertise details
  condition?: string; // Optional condition for the effect to apply
  userChoiceRequired?: { // Details if the user needs to make a choice for this effect
    prompt: string; // Prompt shown to the user
    options?: string[]; // Optional list of specific options (e.g., skill IDs, attribute IDs)
  };
  descriptionOverride?: string; // Optional override for how this effect is described
  subFeature?: string; // Optional sub-feature identifier for complex effects
  schools?: string[]; // Optional list of spell schools associated with the effect
}

// Interface for Traits
export interface ITrait {
  id: string;
  name: string;
  description: string;
  cost: number; // Ancestry points cost
  isMinor?: boolean; // True if this is a Minor Trait
  isNegative?: boolean; // True if this is a Negative Trait (grants points)
  effects?: ITraitEffect[]; // Array of effects the trait grants
  prerequisites?: any[]; // Optional prerequisites for taking this trait
  sourceAncestryId?: string; // ID of the ancestry this trait belongs to (for combined lists)
}

// Interface for Ancestries
export interface IAncestry {
  id: string;
  name: string;
  description: string;
  defaultTraitIds?: string[]; // Traits automatically granted
  expandedTraitIds: string[]; // Traits available for selection
  origin?: { // Optional origin property for ancestries with specific origins (e.g., Dragonborn, Fiendborn, Beastborn)
    prompt: string; // Prompt shown to the user for choosing an origin
    options?: string[]; // Optional list of specific options for the origin
  };
  variantTraits?: ITrait[]; // Optional list of variant traits (e.g., Fallen Angelborn, Redeemed Fiendborn)
}

// Interface for Class Feature Choice Options
export interface IClassFeatureChoiceOption {
  value: string; // Internal value for the choice
  label: string; // Display label for the choice
  description?: string; // Optional description for the choice
  effectsOnChoice?: ITraitEffect[]; // Effects granted if this option is chosen
}

// Interface for Class Feature Choices
export interface IClassFeatureChoice {
  id: string; // Internal ID for the choice (e.g., 'sorcerousOrigin')
  prompt: string; // Prompt shown to the user
  type: 'select_one' | 'select_multiple'; // Type of selection
  maxSelections?: number; // Max number of options if type is 'select_multiple'
  options: IClassFeatureChoiceOption[]; // Available options for the choice
}

// Interface for Class Features
export interface IClassFeature {
  id: string;
  name: string;
  description: string;
  level: number; // Level at which the feature is gained
  effects?: ITraitEffect[]; // Effects granted by the feature
}

// Interface for Class Definitions
export interface IClassDefinition {
  id: string;
  name: string;
  description: string;
  // Base stats granted by the class at Level 1
  baseHpContribution: number;
  startingSP: number;
  startingMP: number;
  skillPointGrantLvl1?: number; // Additional skill points granted at Lvl 1 (beyond Int mod)
  tradePointGrantLvl1?: number; // Additional trade points granted at Lvl 1 (beyond Int mod)
  combatTraining?: string[]; // Array of combat training proficiencies (e.g., 'Weapons', 'All Armor')
  maneuversKnownLvl1?: string | number; // Maneuvers known at Level 1 (can be 'All Attack' or a number)
  techniquesKnownLvl1?: number; // Techniques known at Level 1
  saveDCBase: number;
  deathThresholdBase: number;
  moveSpeedBase: number;
  restPointsBase: number;
  gritPointsBase: number; // Base grit points (before Charisma mod)
  initiativeBonusBase: number; // Base initiative bonus (before Agility mod)
  // Add cantripsKnownLvl1, spellsKnownLvl1 if applicable (not for Barbarian L1)
  cantripsKnownLvl1?: number;
  spellsKnownLvl1?: number;

  level1Features: IClassFeature[]; // Features gained at Level 1
  featureChoicesLvl1?: IClassFeatureChoice[]; // Choices available for features at Level 1
  // ... other level-specific data to be added later
}

// Interface for Skill Data
export interface ISkillData {
  id: string;
  name: string;
  attributeAssociation: 'might' | 'agility' | 'charisma' | 'intelligence' | 'prime'; // Associated attribute
  description: string;
}

// Interface for Trade Data
export interface ITradeData {
  id: string;
  name: string;
  attributeAssociation: 'might' | 'agility' | 'charisma' | 'intelligence'; // Associated attribute
  description: string;
  tools?: string; // Required tools for the trade
}

// Interface for Language Data
export interface ILanguageData {
  id: string;
  name: string;
  type: 'standard' | 'exotic'; // Type of language
  description: string;
}
````

## File: src/routes/api/character/progress/stageA/+server.ts
````typescript
import { json, error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Constants for validation (should ideally be shared or sourced from rules data)
const ATTRIBUTE_MIN = -2;
const ATTRIBUTE_MAX_L1 = 3;
const POINT_BUY_BUDGET = 12;

export async function POST({ request }) {
  try {
    const { characterId, finalName, attribute_might, attribute_agility, attribute_charisma, attribute_intelligence } = await request.json();

    // Backend Validation
    if (!finalName || typeof finalName !== 'string' || finalName.trim().length === 0) {
        return error(400, { message: 'Character name is required.' });
    }
    // Optional: Add length constraints or character restrictions for finalName

    const attributes = {
      might: attribute_might,
      agility: attribute_agility,
      charisma: attribute_charisma,
      intelligence: attribute_intelligence,
    };

    // Validate attribute ranges
    for (const [name, value] of Object.entries(attributes)) {
      if (value < ATTRIBUTE_MIN || value > ATTRIBUTE_MAX_L1) {
        return error(400, { message: `Attribute ${name} is out of the allowed range (-2 to +3).` });
      }
    }

    // Validate total points spent
    const pointsSpent = (attributes.might - ATTRIBUTE_MIN) +
                        (attributes.agility - ATTRIBUTE_MIN) +
                        (attributes.charisma - ATTRIBUTE_MIN) +
                        (attributes.intelligence - ATTRIBUTE_MIN);

    if (pointsSpent !== POINT_BUY_BUDGET) {
      return error(400, { message: `Total points allocated must be exactly ${POINT_BUY_BUDGET}. You allocated ${pointsSpent}.` });
    }

    let updatedCharacter;

    if (characterId) {
      // Update existing character progress
      updatedCharacter = await prisma.characterInProgress.update({
        where: { id: characterId },
        data: {
          finalName: finalName.trim(), // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent, // Store points spent for consistency, though backend validates
          level: 1, // Hardcoded to 1 for MVP
          combatMastery: 1, // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]), // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]), // Initialize selected feature choices
          currentStep: 1, // Mark Stage A as complete
        },
      });
    } else {
      // Create new character progress (handles TD-002 for the first save)
      updatedCharacter = await prisma.characterInProgress.create({
        data: {
          finalName: finalName.trim(), // Save character name
          attribute_might,
          attribute_agility,
          attribute_charisma,
          attribute_intelligence,
          pointsSpent,
          level: 1, // Hardcoded to 1 for MVP
          combatMastery: 1, // Calculated as half level rounded up (1 for Level 1)
          selectedTraitIds: JSON.stringify([]), // Initialize selected traits for Stage B
          selectedFeatureChoices: JSON.stringify([]), // Initialize selected feature choices
          currentStep: 1, // Mark Stage A as complete
        },
      });
      // Note: The frontend will need to update its store with this new ID
    }


    // Return success response with the character ID
    return json({ success: true, characterId: updatedCharacter.id });

  } catch (e) {
    console.error('Backend error saving Stage A data:', e);
    // Handle Prisma errors or other exceptions
    if (e instanceof Error) {
       return error(500, { message: `Internal server error: ${e.message}` });
    }
    return error(500, { message: 'An unknown error occurred while saving attributes.' });
  } finally {
    await prisma.$disconnect();
  }
}
````

## File: vercel.json
````json
{
  "framework": "sveltekit",
  "buildCommand": null
}
````

## File: .svelte-kit/generated/client/app.js
````javascript
export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/character-creator": [3],
		"/character-creator/stage-a": [4],
		"/character-creator/stage-b": [5],
		"/test-ui": [6]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';
````

## File: prisma/schema.prisma
````
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "debian-openssl-1.1.x"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Model to store the character creation progress
model CharacterInProgress {
  id                   String @id @default(uuid())
  // Stage A: Attributes
  attribute_might      Int    @default(-2)
  attribute_agility    Int    @default(-2)
  attribute_charisma   Int    @default(-2)
  attribute_intelligence Int  @default(-2)
  pointsSpent          Int    @default(0) // Points spent in point buy
  currentStep          Int    @default(1) // Current stage in the wizard (1 = Stage A, 2 = Stage B, etc.)

  // Core Stats
  level                Int    @default(1)
  combatMastery        Int    @default(1) // Calculated as half level rounded up

  // Stage B: Ancestry
  ancestry1Id          String? // ID of the first ancestry
  ancestry2Id          String? // ID of the second ancestry (for mixed ancestry)
  selectedTraitIds     String // JSON string of selected trait IDs
  ancestryPointsSpent  Int    @default(0) // Points spent on traits

  // Stage C: Class
  classId              String? // ID of the selected class
  selectedFeatureChoices String // JSON string of selected feature choice IDs/values

  // Stage D: Skills (MVP Scope)
  // Will add skill selection fields here later

  // Stage E: Equipment (MVP Scope)
  // Will add equipment selection fields here later

  // Stage F: Details (MVP Scope)
  finalName            String?
  finalPlayerName      String?

  // Link to the final character sheet data (once creation is complete)
  finalCharacterSheet  CharacterSheetData?

  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
}

// Model to store the final calculated character sheet data
model CharacterSheetData {
  id                   String @id @default(uuid())
  characterInProgressId String @unique // Link back to the progress record
  characterInProgress  CharacterInProgress @relation(fields: [characterInProgressId], references: [id])

  // Final Calculated Stats (based on MVP mvp.md Section IV)
  finalName            String
  finalPlayerName      String?
  finalLevel           Int    @default(1)

  finalMight           Int
  finalAgility         Int
  finalCharisma        Int
  finalIntelligence    Int

  finalPrimeModifierValue Int
  finalPrimeModifierAttribute String

  finalCombatMastery   Int    @default(1)

  finalSaveMasteryMight Int
  finalSaveMasterityAgility Int
  finalSaveMasteryCharisma Int
  finalSaveMasteryIntelligence Int

  finalHPMax           Int
  finalSPMax           Int
  finalMPMax           Int

  finalPD              Int
  finalAD              Int

  finalPDR             String?
  finalEDR             String?
  finalMDR             String?

  finalSaveDC          Int
  finalDeathThreshold  Int
  finalMoveSpeed       Int
  finalJumpDistance    Int
  finalRestPoints      Int
  finalGritPoints      Int
  finalInitiativeBonus Int

  skillsJson           String // JSON string of skill data
  tradesJson           String // JSON string of trade data
  languagesJson        String // JSON string of language data

  ancestry1Name        String?
  ancestry2Name        String?
  selectedTraitsJson   String // JSON string of selected traits

  className            String
  classFeaturesLvl1Json String // JSON string of Lvl 1 class features

  equipmentJson        String // JSON string of equipment

  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
}
````

## File: src/lib/rulesdata/classes.ts
````typescript
import type { IClassDefinition } from './types.js';

// IClassDefinition for Barbarian:
export const barbarianClass: IClassDefinition = {
  id: 'barbarian',
  name: 'Barbarian',
  description: 'Barbarians charge into battle with reckless abandon, ignoring their own safety as they brush off damage and deal even more in return. They trade defense for more offense and let out blood-crazed battle cries.',
  baseHpContribution: 9, // From class table p.118
  startingSP: 1, // From class table p.118
  startingMP: 0,
  skillPointGrantLvl1: 0,
  tradePointGrantLvl1: 0,
  combatTraining: ['Weapons', 'All Armor', 'All Shields'], // From p.118 "Barbarian Martial Path"
  maneuversKnownLvl1: 'All Attack', // From p.118 "Maneuvers Known" - "All Attack"
  techniquesKnownLvl1: 0, // From p.118 "Techniques Known" - 0
  saveDCBase: 8, // From p.118 "Save DC" - 8
  deathThresholdBase: 10, // From p.118 "Death Threshold" - 10
  moveSpeedBase: 30, // From p.118 "Move Speed" - 30
  restPointsBase: 4, // From p.118 "Rest Points" - 4
  gritPointsBase: 2, // From p.118 "Grit Points" - 2
  initiativeBonusBase: 0, // From p.118 "Initiative Bonus" - 0
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'barbarian_rage',
      name: 'Rage',
      level: 1,
      description: 'During Combat, you can spend 1 AP and 1 SP to enter a Rage for 1 minute. For the duration, you’re subjected to the following effects: You deal +1 damage on Melee Martial Attacks. You have ADV on Might Saves. Your PD decreases by 5. You gain Resistance (Half) to Elemental and Physical damage. Ending Early: Your Rage ends early if you fall Unconscious, die, or you choose to end it for free on your turn.',
      effects: [
          { type: 'GRANT_ABILITY', value: 'Rage_Mechanics_Bundle' } // Complex ability
      ]
    },
    {
      id: 'barbarian_berserker',
      name: 'Berserker',
      level: 1,
      description: 'Your primal savagery grants you the following benefits: Charge: When you make a Melee Martial Attack on your turn, you can move up to 2 Spaces immediately before making the Attack. Berserker Defense: While you aren’t wearing Armor you gain +2 AD. Fast Movement: You gain +1 Speed while not wearing Armor. Mighty Leap: You can use your Might instead of Agility to determine your Jump Distance and the damage you take from Falling.',
      effects: [
        { type: 'GRANT_ABILITY', subFeature: 'Charge', descriptionOverride: 'Move 2 Spaces before Melee Martial Attack.' },
        { type: 'GRANT_PASSIVE', subFeature: 'Berserker_Defense', descriptionOverride: '+2 AD when not wearing Armor.' },
        { type: 'GRANT_PASSIVE', subFeature: 'Fast_Movement', descriptionOverride: '+1 Speed when not wearing Armor.' },
        { type: 'GRANT_PASSIVE', subFeature: 'Mighty_Leap', descriptionOverride: 'Use Might for Jump Distance & Falling Damage calc.' }
      ]
    },
    {
      id: 'barbarian_shattering_force',
      name: 'Shattering Force (Flavor)',
      level: 1,
      description: 'When you Hit a structure or mundane object with a Melee Attack, it’s considered a Critical Hit.',
      effects: [{ type: 'FLAVOR_MECHANIC_NOTE', value: 'Melee attacks vs objects/structures are Critical Hits.' }]
    }
  ],
  featureChoicesLvl1: [] // No explicit user choices for L1 features for Barbarian
};

// IClassDefinition for Sorcerer:
export const sorcererClass: IClassDefinition = {
  id: 'sorcerer',
  name: 'Sorcerer',
  description: 'Sorcerers tap into the raw magic in their own bodies as a conduit to harness, manipulate, and sculpt magic with wild resolve. They can overload themselves and even cast Spells without Mana, pushing the limits of magic and their own bodies.',
  baseHpContribution: 8, // From class table p.149 Lvl 1 HP
  startingSP: 0,
  startingMP: 6, // From class table p.149 Lvl 1 MP
  skillPointGrantLvl1: 0, // From class table p.149
  tradePointGrantLvl1: 0, // From class table p.149
  combatTraining: ['Light Armor'], // From p.149 "Sorcerer Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.149
  techniquesKnownLvl1: 0, // From class table p.149
  cantripsKnownLvl1: 2, // From class table p.149
  spellsKnownLvl1: 3,   // From class table p.149
  saveDCBase: 8, // From p.149 "Save DC" - 8
  deathThresholdBase: 10, // From p.149 "Death Threshold" - 10
  moveSpeedBase: 30, // From p.149 "Move Speed" - 30
  restPointsBase: 4, // From p.149 "Rest Points" - 4
  gritPointsBase: 2, // From p.149 "Grit Points" - 2
  initiativeBonusBase: 0, // From p.149 "Initiative Bonus" - 0
  level1Features: [
    {
      id: 'sorcerer_innate_power',
      name: 'Innate Power',
      level: 1,
      description: 'Choose a Sorcerous Origin that grants you a benefit: Intuitive Magic, Resilient Magic, or Unstable Magic. Additionally, you gain the following benefits: Your Maximum MP increases by 1. Once per Long Rest, you can use a 1 MP Spell Enhancement without spending any MP (up to your Mana Spend Limit). You regain the ability to use this benefit when you roll for Initiative.',
      effects: [
          { type: 'MODIFY_MP_MAX', value: 1 },
          { type: 'GRANT_ABILITY', value: 'Free_1MP_Spell_Enhancement_Once_Per_Long_Rest' }
      ]
    },
    {
      id: 'sorcerer_overload_magic',
      name: 'Overload Magic',
      level: 1,
      description: 'You can spend 2 AP in Combat to channel raw magical energy for 1 minute, or until you become Incapacitated, die, or choose to end it early at any time for free. For the duration, your magic is overloaded and you’re subjected to the following effects: You gain +5 to all Spell Checks you make. You must immediately make an Attribute Save (your choice) against your Save DC upon using this Feature, and again at the start of each of your turns. Failure: You gain Exhaustion. You lose any Exhaustion gained in this way when you complete a Short Rest.',
      effects: [{ type: 'GRANT_ABILITY', value: 'Overload_Magic_Mechanics_Bundle' }]
    },
    {
      id: 'sorcerer_sorcery_flavor',
      name: 'Sorcery (Flavor)',
      level: 1,
      description: 'You learn the Sorcery Spell.',
      effects: [{ type: 'GRANT_SPELL_KNOWN', value: 'sorcery_cantrip_id' }]
    }
  ],
  featureChoicesLvl1: [
    {
      id: 'sorcerous_origin_choice', // Key for storing choice
      prompt: 'Choose your Sorcerous Origin (DC20 p.150):',
      type: 'select_one',
      options: [
        { value: 'intuitive_magic', label: 'Intuitive Magic', description: 'You learn an additional Spell and Cantrip from your Sorcerer Spell List.', effectsOnChoice: [{ type: 'GRANT_BONUS_SPELL_KNOWN' }, { type: 'GRANT_BONUS_CANTRIP_KNOWN'}] },
        { value: 'resilient_magic', label: 'Resilient Magic', description: 'You gain Dazed Resistance.', effectsOnChoice: [{ type: 'GRANT_CONDITION_RESISTANCE', target: 'Dazed'}] },
        { value: 'unstable_magic', label: 'Unstable Magic', description: 'When you Critically Succeed or Fail on a Spell Check, roll on the Wild Magic Table...', effectsOnChoice: [{ type: 'ENABLE_WILD_MAGIC_TABLE_ON_CRIT_SPELL_CHECK'}] }
      ]
    },
    {
      id: 'sorcerer_spell_list_choice', // Key for storing choice
      prompt: 'Choose Your Sorcerer Spell List (DC20 p.149):',
      type: 'select_one',
      options: [
        { value: 'arcane', label: 'Arcane Spell List' },
        { value: 'divine', label: 'Divine Spell List' },
        { value: 'primal', label: 'Primal Spell List' }
      ]
    }
  ]
};

// IClassDefinition for Bard:
export const bardClass: IClassDefinition = {
  id: 'bard',
  name: 'Bard',
  description: 'Bards utilize artistic expression through various forms to connect with the emotions and heart of magic. This includes a wide range of mediums such as musical instruments, singing, dancing, drawing, painting, sculpting, poetry, storytelling, inspirational speech, and more. They are great at bringing the best out in those around them through both helping and performing, showcasing high proficiency across multiple disciplines. Bards are remarkably flexible and adaptable spellcasters, capable of tapping into a wide array of magical abilities with the appropriate artistic expression.',
  baseHpContribution: 8, // From class table p.121
  startingSP: 0, // From class table p.121
  startingMP: 6, // From class table p.121
  skillPointGrantLvl1: 2, // From class table p.121
  tradePointGrantLvl1: 3, // From class table p.121
  combatTraining: ['Light Armor', 'Light Shields'], // From p.121 "Bard Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.121
  techniquesKnownLvl1: 0, // From class table p.121
  saveDCBase: 8, // General for Spellcasters
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 2, // From class table p.121
  spellsKnownLvl1: 3,   // From class table p.121
  level1Features: [
    {
      id: 'bard_font_of_inspiration',
      name: 'Font of Inspiration',
      level: 1,
      description: 'You are an ever present source of aid for your allies. You gain the following benefits: Ranged Help Attack: The range of your Help Action when aiding an Attack increases to 10 Spaces. Help Reaction: When a creature you can see makes a Check, you can take the Help Action as a Reaction to aid them with their Check, provided you’re within range to do so.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'bard_remarkable_repertoire',
      name: 'Remarkable Repertoire',
      level: 1,
      description: 'You’ve picked up a few tricks along your travels, granting you the following benefits: Jack of All Trades: You gain 2 Skill Points. Magical Secrets: You learn any 2 Spells of your choice from any Spell List. Magical Expression: You learn to express your art in a unique manner, granting you the ability to alter how you cast Spells. Choose the manner of your expression: Visual or Auditory.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'bard_crowd_pleaser',
      name: 'Crowd Pleaser (Flavor Feature)',
      level: 1,
      description: 'When you spend at least 5 minutes performing an Artistry Trade for one or more people who are actively watching or listening to your performance, you can make an Artistry Trade Check Contested by the targets’ Charisma Save. Success: You gain ADV on Charisma Checks against the target for 1 hour or until you become hostile. Creatures have ADV on the Save if they’re considered hostile toward you.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Bard on p.122
};

// IClassDefinition for Champion:
export const championClass: IClassDefinition = {
  id: 'champion',
  name: 'Champion',
  description: 'Champions are weapon and armor specialists that push themselves to the limit in combat. They are able to master a wide variety of weapon types and learn their enemies as they fight them.',
  baseHpContribution: 9, // From class table p.124
  startingSP: 1, // From class table p.124
  startingMP: 0,
  skillPointGrantLvl1: 0, // From class table p.124
  tradePointGrantLvl1: 0, // From class table p.124
  combatTraining: ['Weapons', 'All Armors', 'All Shields'], // From p.124 "Champion Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.124
  techniquesKnownLvl1: 0, // From class table p.124
  saveDCBase: 8, // General for Martial Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'champion_master_at_arms',
      name: 'Master-at-Arms',
      level: 1,
      description: 'Your training in warfare has granted you greater offense, defense, and movement. Weapon Master: At the start of each of your turns, you can freely swap any Weapon you’re currently wielding in each hand for any other Weapon without provoking Opportunity Attacks. Maneuver Master: You learn 2 Maneuvers of your choice. Technique Master: You learn 1 Technique of your choice. Once per Combat, when you perform a Technique you can reduce its SP cost by 1.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'champion_fighting_spirit',
      name: 'Fighting Spirit',
      level: 1,
      description: 'You stand ready for Combat at any moment, granting you the following benefits: Combat Readiness: At the start of your first turn in Combat, you gain one of the following benefits: Brace: You gain the benefits of the Dodge Action and ADV on the next Save you make until the end of Combat. Advance: You gain the benefits of the Move Action and ADV on the next Physical Check you make until the end of Combat. Second Wind: Once per Combat when you start your turn Bloodied, you can regain 2 HP and 1 SP.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'champion_know_your_enemy',
      name: 'Know Your Enemy (Flavor Feature)',
      level: 1,
      description: 'You can spend 1 minute observing or interacting with a creature out of Combat (or spend 1 AP in Combat) to learn information about its physical capabilities compared to your own. Choose one of the following stats of the creature to assess: Might, Agility, PD, AD, and HP. Make a DC 10 Knowledge or Insight Check (your choice). Success: You learn if the chosen stat is higher, lower, or the same as yours.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Champion on p.125
};

// IClassDefinition for Cleric:
export const clericClass: IClassDefinition = {
  id: 'cleric',
  name: 'Cleric',
  description: 'Clerics can reach out and call upon the power of a deity to aid them in battle and to support them and their allies. Clerics can range from a knowledgeable priest, to a knight in holy armor. They reach out to heir deity to empower their magic in ways mortals normally cannot.',
  baseHpContribution: 8, // From class table p.127
  startingSP: 0, // From class table p.127
  startingMP: 6, // From class table p.127
  skillPointGrantLvl1: 2, // From class table p.127
  tradePointGrantLvl1: 3, // From class table p.127
  combatTraining: ['Light Armor', 'Light Shields'], // From p.127 "Cleric Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.127
  techniquesKnownLvl1: 0, // From class table p.127
  saveDCBase: 8, // General for Spellcasters
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 2, // From class table p.127
  spellsKnownLvl1: 3,   // From class table p.127
  level1Features: [
    {
      id: 'cleric_cleric_order',
      name: 'Cleric Order',
      level: 1,
      description: 'Your connection to your deity grants you the following benefits: Divine Damage: Choose an Elemental or Mystical damage type. The chosen damage type becomes your Divine Damage which is used for some Cleric Features. Divine Domain: You gain the benefits of 2 Divine Domains of your choice.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'cleric_divine_blessing',
      name: 'Divine Blessing',
      level: 1,
      description: 'You can spend 1 AP to say a prayer and petition your deity for their divine blessing. Choose 1 of the blessings listed below. Each blessing has a listed MP cost that you must spend to gain the blessing. Once during the next minute, you can apply the blessing to a Spell you cast. If your Spell targets more than 1 creature, the blessing only applies to 1 target of your choice. Unused Blessing: You can only have 1 blessing at a time. If you petition your deity for a blessing while you already have a blessing, the first blessing immediately ends without granting any benefit. If the blessing ends without granting any benefit, you regain the MP spent to gain the blessing.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'cleric_divine_omen',
      name: 'Divine Omen (Flavor Feature)',
      level: 1,
      description: 'Once per Long Rest, you can spend 10 minutes to commune with your Deity. Question: You can ask them 1 question, which must be posed in a way that could be answered with a yes or no. Response: The deity responds to the best of their knowledge and intentions in one of the following responses: Yes, No, or Unclear. Communing Again: If you commune with your deity more than once per Long Rest, you must make a DC 15 Spell Check. Failure: You receive no answer. Each time you commune again before you complete a Long Rest, the DC increases by 5.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Cleric on p.128
};

// IClassDefinition for Commander:
export const commanderClass: IClassDefinition = {
  id: 'commander',
  name: 'Commander',
  description: 'Commanders are the leaders of the battlefield, inspiring their allies and leading them to victory. They can command their allies to attack or move around the battlefield, and are even able to “heal” allies by making them dig deep within themselves to push forward in combat.',
  baseHpContribution: 9, // From class table p.131
  startingSP: 1, // From class table p.131
  startingMP: 0,
  skillPointGrantLvl1: 0, // From class table p.131
  tradePointGrantLvl1: 0, // From class table p.131
  combatTraining: ['Weapons', 'All Armor', 'All Shields'], // From p.131 "Commander Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.131
  techniquesKnownLvl1: 0, // From class table p.131
  saveDCBase: 8, // General for Martial Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'commander_inspiring_presence',
      name: 'Inspiring Presence',
      level: 1,
      description: 'Whenever you spend SP while in Combat, you can restore an amount of HP equal to the SP spent. Choose any creatures within 5 Spaces that can see or hear you, and divide the HP among them.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'commander_commanders_call',
      name: 'Commander’s Call',
      level: 1,
      description: 'You can spend 1 AP and 1 SP to command a willing creature that you can see within 5 Spaces that can also see or hear you. The chosen creature can immediately take 1 of the following Actions of your choice as a Reaction for free. You can only use each of the following commands once on each of your turns: Attack: The creature makes an Attack with ADV. They can’t spend any resources on this Attack, such as AP, SP, or MP. Dodge: The creature takes the Full Dodge Action. Move: The creature moves up to their Speed without provoking Opportunity Attacks.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'commander_natural_leader',
      name: 'Natural Leader (Flavor Feature)',
      level: 1,
      description: 'You have ADV on Checks made to convince creatures that you are an authority figure. Additionally, you have ADV on the first Charisma Check made to interact with non-hostile members of military groups (such as soldiers, guards, etc.).',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Commander on p.132
};

// IClassDefinition for Druid:
export const druidClass: IClassDefinition = {
  id: 'druid',
  name: 'Druid',
  description: 'Druids tap into the power of nature, drawing upon the energies that flow through the world and creatures around them. and connect to plants, animals, and the plane itself. They can channel both the restorative and destructive forces of nature and shapeshift into wild beasts.',
  baseHpContribution: 8, // From class table p.134
  startingSP: 0, // From class table p.134
  startingMP: 6, // From class table p.134
  skillPointGrantLvl1: 2, // From class table p.134
  tradePointGrantLvl1: 3, // From class table p.134
  combatTraining: ['Light Armor'], // From p.134 "Druid Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.134
  techniquesKnownLvl1: 0, // From class table p.134
  saveDCBase: 8, // General for Spellcasters
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 2, // From class table p.134
  spellsKnownLvl1: 3,   // From class table p.134
  level1Features: [
    {
      id: 'druid_druid_domain',
      name: 'Druid Domain',
      level: 1,
      description: 'You can spend 1 AP and 1 MP to create your own Druid Domain that includes small plant life, sand, shallow water, or other naturally occurring features. You create up to 8 Domain Spaces along the ground or walls. The first Domain Space must be within 1 Space of you, and each additional Domain Space must be adjacent to another Domain Space. If you use this Feature again, the first Domain Space of it must be within 1 Space of you or another Domain Space. Domain Spaces: The area is considered to be Difficult Terrain for creatures of your choice, and when you cast a Spell, you can do so as if you were standing in any Space within your Domain. Losing Domain Spaces: A Domain Space also disappears if you end your turn farther than 15 Spaces away from it or you die. Domain Actions: While you have Domain Spaces, you can take any of the following Domain Actions: Nature’s Grasp, Move Creature, Move Object, Wild Growth.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'druid_wild_form',
      name: 'Wild Form',
      level: 1,
      description: 'You can spend 1 AP and 1 MP to transform into a Wild Form of your choice. You can spend 1 AP on your turn to shift back and forth between your True Form and any Wild Forms you currently have available. Once per Long Rest, you can transform without spending MP or using MP enhancements. True Form: When you transform from your Wild Form to your True Form, your statistics return to normal. You immediately revert to your True Form when your Wild Form HP is reduced to 0 or you die. Wild Form: When you transform into a Wild Form, you gain the Wild Form’s current Wild Form HP (see Wild Form HP below), retaining any HP losses. Duration: Each Wild Form remains available until its Wild Form HP is reduced to 0 or you complete a Long Rest. Multiple Forms: You can have multiple Wild Forms available at a time which have their own Wild Form HP and Traits. Equipment: Your equipment falls to the ground or merges into your Wild Form (your choice for each item). You gain the benefits of Magic Items merged with your Wild Form, but you can’t activate them or spend their charges. Statistics: While in your Wild Form, you’re subjected to the following changes (unless otherwise stated): Stat Block: You use the Wild Form Stat Block below to determine your statistics. Identity: You maintain your personality, intellect, and ability to speak. Wild Form HP: You gain a secondary pool of Wild Form Health Points, which is 3 with a maximum of 3. Damage and healing effects target your Wild Form HP before your True Form HP, and any excess damage or healing carries over to your own HP. Natural Weapon: You have Natural Weapons (claws, horns, fangs, etc.) which you can use to make Unarmed Strikes that deal 1 Bludgeoning, Piercing, or Slashing damage (your choice when you use this Feature). Features & Talents: You don’t benefit from Talents or Class Features, except Druid Class Features, Subclass Features, and Talents. Additionally, you can’t cast Spells or perform Techniques. Traits: You don’t benefit from your Ancestry Traits, but you gain 3 Trait Points to spend on Beast Traits or Wild Form Traits of your choice. You can’t select negative Beast Traits. When you use this Feature, you can spend additional MP (up to your Mana Spend Limit) to gain 2 additional Trait Points per MP spent.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'druid_wild_speech',
      name: 'Wild Speech (Flavor Feature)',
      level: 1,
      description: 'You learn the Druidcraft Cantrip and can choose 1 of the following options: Animals: You can understand and speak with Beasts in a limited manner. You can understand the meaning of their movements, sounds, and behaviors, and they can understand the meanings of simple words, concepts, and emotions. Plants: You can understand and speak with Plants in a limited manner. You can understand the meaning of their swaying, folding, unfolding of their leaves and flowers, and they can understand the meanings of simple words, concepts, and emotions. Weather: You can reach out to nature and cast the Commune with Nature Spell as a Ritual once per Long Rest.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Druid on p.135
};

// IClassDefinition for Hunter:
export const hunterClass: IClassDefinition = {
  id: 'hunter',
  name: 'Hunter',
  description: 'Hunters are master survivalists and natural explorers. They mark their targets to better track them and take them down, using their mastery over terrain, traps, and weapons to their advantage.',
  baseHpContribution: 9, // From class table p.139
  startingSP: 1, // From class table p.139
  startingMP: 0,
  skillPointGrantLvl1: 0, // From class table p.139
  tradePointGrantLvl1: 0, // From class table p.139
  combatTraining: ['Weapons', 'Light Armor', 'Light Shields'], // From p.139 "Hunter Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.139
  techniquesKnownLvl1: 0, // From class table p.139
  saveDCBase: 8, // General for Martial Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'hunter_hunters_mark',
      name: 'Hunter’s Mark',
      level: 1,
      description: 'You can spend 1 AP and 1 SP to focus on and mark a creature you can see within 15 Spaces as your quarry. Alternatively, you can mark a creature by studying its tracks for at least 1 minute. While a creature is marked, you gain the following benefits: You have ADV on Awareness and Survival Checks made to find the target. The first Martial Attack against your target on your turn has ADV and ignores PDR. When you score a Heavy or Critical Hit against the target, you automatically grant a d8 Help Die to the next Attack made against the target before the start of your next turn. The target is marked as long as it’s on the same Plane of Existence as you, and vanishes early if you complete a Long Rest, fall Unconscious, or use this Feature again to mark another creature.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'hunter_favored_terrain',
      name: 'Favored Terrain',
      level: 1,
      description: 'You are particularly familiar with two types of environments and are adept at the skills unique to the region. Choose 2 types of Favored Terrain listed below. Coast, Desert, Forest, Grassland, Jungle, Mountain, Swamp, Tundra, Subterranean, Urban. Additionally, while you’re in one of your Favored Terrains, you have ADV on Stealth and Survival Checks and can’t be Surprised.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'hunter_bestiary',
      name: 'Bestiary (Flavor Feature)',
      level: 1,
      description: 'You have developed a trove of knowledge hunting creatures which you’ve recorded in your Bestiary. Your Bestiary can take the form of a book, a memory vault within your mind, or some other representation of your choice. You have ADV on Checks made to learn or recall information about any creature recorded in your Bestiary. Starting Entries: Choose a Creature Type: Aberration, Beast, Celestial, Construct, Dragon, Elemental, Fey, Fiend, Giant, Humanoid, Monstrosity, Ooze, Plant, or Undead. Your Bestiary includes prerecorded notes about various creatures of the chosen type. Making New Entries: You can spend 10 minutes of Light Activity recording information into your Bestiary about a specific creature you have slain within the last 24 hours.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Hunter on p.139
};

// IClassDefinition for Monk:
export const monkClass: IClassDefinition = {
  id: 'monk',
  name: 'Monk',
  description: 'Monks are master martial artists that perfect their mind and bodies utilizing the ebb and flow of their inner energy. They use their body as a weapon and can enter into different stances that drastically change their combat abilities.',
  baseHpContribution: 9, // From class table p.143
  startingSP: 1, // From class table p.143
  startingMP: 0,
  skillPointGrantLvl1: 0, // From class table p.143
  tradePointGrantLvl1: 0, // From class table p.143
  combatTraining: ['Weapons', 'Light Armor'], // From p.143 "Monk Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.143
  techniquesKnownLvl1: 0, // From class table p.143
  saveDCBase: 8, // General for Martial Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'monk_monk_training',
      name: 'Monk Training',
      level: 1,
      description: 'Your martial arts training grants you greater offense, defense, and movement. Iron Palm: Your limbs are considered Natural Weapons with the Impact Property that deal 1 Bludgeoning damage. Patient Defense: While you aren’t wearing Armor you gain +2 PD. Step of the Wind: While you aren’t wearing Armor, you gain the following benefits: You gain +1 Speed and Jump Distance. You can move a number of Spaces up to your Speed along vertical surfaces and across liquids without falling during your move. You can use your Prime Modifier instead of Agility to determine your Jump Distance and the damage you take from Falling.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'monk_monk_stance',
      name: 'Monk Stance',
      level: 1,
      description: 'You learn 2 Monk Stances from the list below. Entering & Exiting: In Combat, at the start of each of your turns you can freely enter or swap into one of your Monk Stances. You can also spend 1 SP on your turn to swap to a different stance. You can end your Stance at any moment for free. You can only be in 1 Monk Stance at a time. Bear Stance, Bull Stance, Cobra Stance, Gazelle Stance, Mantis Stance, Mongoose Stance, Scorpion Stance, Turtle Stance, Wolf Stance.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'monk_meditation',
      name: 'Meditation (Flavor Feature)',
      level: 1,
      description: 'You can enter a state of meditation during a Short Rest (1 hour) or longer. Choose 1 Charisma or Intelligence Skill. When you complete the Rest, your Skill Mastery level increases by 1 (up to your Skill Mastery Cap) for the chosen Skill until you complete another Short or longer Rest. While meditating, you remain alert to danger.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Monk on p.144
};

// IClassDefinition for Rogue:
export const rogueClass: IClassDefinition = {
  id: 'rogue',
  name: 'Rogue',
  description: 'Rogues are skilled, evasive, and cunning. They impose conditions onto enemies, then exploit those weaknesses to inflict even more harm.',
  baseHpContribution: 9, // From class table p.146
  startingSP: 1, // From class table p.146
  startingMP: 0,
  skillPointGrantLvl1: 0, // From class table p.146
  tradePointGrantLvl1: 0, // From class table p.146
  combatTraining: ['Weapons', 'Light Armor', 'Light Shields'], // From p.146 "Rogue Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.146
  techniquesKnownLvl1: 0, // From class table p.146
  saveDCBase: 8, // General for Martial Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 0,
  spellsKnownLvl1: 0,
  level1Features: [
    {
      id: 'rogue_debilitating_strike',
      name: 'Debilitating Strike',
      level: 1,
      description: 'When you make an Attack with a Weapon, you can spend 1 SP to force the target to make a Physical Save against your Save DC. Save Failure: Until the start of your next turn, the target suffers 1 of the following effects of your choice: Deafened, Exposed, Hindered, or Slowed 2. A target can’t be affected by the same option more than once at a time.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'rogue_roguish_finesse',
      name: 'Roguish Finesse',
      level: 1,
      description: 'Cunning Action: You gain movement equal to half your Speed when you take the Disengage, Feint, or Hide Actions. You can use this movement immediately before or after you take the Action. Skill Expertise: Your Skill Mastery Limit increases by 1, up to Grandmaster (+10). A Skill can only benefit from one increase to its Mastery limit. Multi-Skilled: You gain 1 Skill Point.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'rogue_cypher_speech',
      name: 'Cypher Speech (Flavor Feature)',
      level: 1,
      description: 'You become Fluent in a Mortal Language of your choice. Additionally, you understand how to speak in code with a specific demographic of your choice (such as upper society, lower society, a faction, etc.). Your coded messages can be concealed in normal conversation and written communications. This allows you to leave simple messages such as “Safety”, “Threat”, or “Wealth”, or mark the location of a cache, a secret passageway, a safehouse, or an area of danger.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Rogue on p.147
};

// IClassDefinition for Spellblade:
export const spellbladeClass: IClassDefinition = {
  id: 'spellblade',
  name: 'Spellblade',
  description: 'Spellblades combine their combat prowess with their ability to harness and channel magic into weapons. They can form a bond with a weapon to imbue it with damage, call it back to them, and more. Spellblades can learn a wide range of disciplines depending on their unique combination of martial and spellcasting prowess. They even gain the ability to cast spells through their weapons.',
  baseHpContribution: 9, // From class table p.153
  startingSP: 1, // From class table p.153
  startingMP: 3, // From class table p.153
  skillPointGrantLvl1: 0, // From class table p.153
  tradePointGrantLvl1: 0, // From class table p.153
  combatTraining: ['Weapons', 'Light Armor', 'Light Shields'], // From p.153 "Spellblade Martial Path"
  maneuversKnownLvl1: 'All Attack', // From class table p.153
  techniquesKnownLvl1: 0, // From class table p.153
  saveDCBase: 8, // General for Hybrid Classes
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 1, // From class table p.153
  spellsKnownLvl1: 1,   // From class table p.153
  level1Features: [
    {
      id: 'spellblade_bound_weapon',
      name: 'Bound Weapon',
      level: 1,
      description: 'During a Quick Rest, you can magically bond with 1 Weapon and choose an Elemental or Mystical damage type to become your Bound Damage type. This bond lasts until you end it for free or use this feature again. Your Bound Weapon gains the following properties: Smite, Illuminate, Recall. Ending Early: Your bond with the Weapon ends early if you use this Feature again, or you choose to end it for free.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'spellblade_spellblade_disciplines',
      name: 'Spellblade Disciplines',
      level: 1,
      description: 'You learn 2 Spellblade Disciplines from the list below. Magus, Warrior, Acolyte, Hex Warrior, Spell Breaker, Spell Warder, Blink Blade.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'spellblade_sense_magic',
      name: 'Sense Magic (Flavor Feature)',
      level: 1,
      description: 'You can spend 1 minute focusing your mind to detect the following creature types within 20 Spaces: Aberration, Celestial, Elemental, Fey, Fiend, or Undead. Make a Spell Check against each creature’s Mental Save. Check Success: You learn the target’s creature type and know its location until the end of your next turn. Check Failure: You learn nothing and can’t use this Feature against the target again until you complete a Long Rest.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Spellblade on p.154
};

// IClassDefinition for Warlock:
export const warlockClass: IClassDefinition = {
  id: 'warlock',
  name: 'Warlock',
  description: 'Warlocks make a pact with a powerful entity that grants them magic. Their body and soul are a part of this contract and as such, they can tap into their own life force to enhance and amplify their magic and capabilities as well as drain the life force of other living creatures. They also choose a type of pact to be made that grants more powers.',
  baseHpContribution: 9, // From class table p.158
  startingSP: 0, // From class table p.158
  startingMP: 6, // From class table p.158
  skillPointGrantLvl1: 0, // From class table p.158
  tradePointGrantLvl1: 0, // From class table p.158
  combatTraining: ['Light Armor'], // From p.158 "Warlock Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.158
  techniquesKnownLvl1: 0, // From class table p.158
  saveDCBase: 8, // General for Spellcasters
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 2, // From class table p.158
  spellsKnownLvl1: 3,   // From class table p.158
  level1Features: [
    {
      id: 'warlock_warlock_contract',
      name: 'Warlock Contract',
      level: 1,
      description: 'You have a binding agreement with your patron that allows you to make sacrifices in exchange for boons. Hasty Bargain: Once per turn when you make a Check, you can spend 1 HP to gain ADV on the Check. Desperate Bargain: Once per Combat, you can spend 1 AP to regain an amount of HP equal to your Prime Modifier. When you do, you become Exposed until the end of your next turn.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'warlock_pact_boon',
      name: 'Pact Boon',
      level: 1,
      description: 'You gain a Pact Boon from your Patron. Choose 1 of the following options: Weapon, Armor, Cantrip, or Familiar.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'warlock_beseech_patron',
      name: 'Beseech Patron (Flavor Feature)',
      level: 1,
      description: 'During a Long Rest, while sleeping or meditating, you can access an Inner Sanctum within your mind. Its appearance is influenced by your psyche and is subject to change. While inside your Inner Sanctum, you can attempt to contact your Patron. If they choose to respond, they enter your mind and you might possibly be able to see or hear them. While connected to your Patron in this way, you’re aware of your surroundings but you can’t take actions or move. Your Patron chooses when to end the connection, or you can make a Mental Save against your own Save DC to force the connection to end.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Warlock on p.159
};

// IClassDefinition for Wizard:
export const wizardClass: IClassDefinition = {
  id: 'wizard',
  name: 'Wizard',
  description: 'Wizards learn to master each of the Spell Schools to control them in a structured and efficient way. They utilize sigils on the ground to enhance certain types of magic while they push spells to their limits.',
  baseHpContribution: 8, // From class table p.162
  startingSP: 0, // From class table p.162
  startingMP: 6, // From class table p.162
  skillPointGrantLvl1: 2, // From class table p.162
  tradePointGrantLvl1: 3, // From class table p.162
  combatTraining: ['Light Armor'], // From p.162 "Wizard Spellcasting Path"
  maneuversKnownLvl1: 0, // From class table p.162
  techniquesKnownLvl1: 0, // From class table p.162
  saveDCBase: 8, // General for Spellcasters
  deathThresholdBase: 10, // General
  moveSpeedBase: 30, // General
  restPointsBase: 4, // General
  gritPointsBase: 2, // General
  initiativeBonusBase: 0, // General
  cantripsKnownLvl1: 2, // From class table p.162
  spellsKnownLvl1: 3,   // From class table p.162
  level1Features: [
    {
      id: 'wizard_spell_school_initiate',
      name: 'Spell School Initiate',
      level: 1,
      description: 'You’ve completed training in a specialized School of Magic. Choose a Spell School. You gain the following benefits: School Magic: You learn 1 Arcane Cantrip and 1 Arcane Spell from this Spell School. Signature School: When you cast a Spell from the chosen School, you can reduce its MP cost by 1. Its total MP cost before the reduction still can’t exceed your Mana Spend Limit. You can use this Feature once per Long Rest, but regain the ability to use it again when you roll for Initiative.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'wizard_arcane_sigil',
      name: 'Arcane Sigil',
      level: 1,
      description: 'You can spend 1 AP and 1 MP to create a 1 Space diameter Arcane Sigil on the ground beneath you that lasts for 1 minute. When you create an Arcane Sigil choose 1 Spell School (Enchantment, Necromancy, Protection, etc.) or 1 Spell Tag (Fire, Cold, Teleportation, etc.). The Arcane Sigil radiates magic of the chosen type. Using a Sigil: While a creature is within the area of your Arcane Sigil, it has ADV on Spell Checks to cast or produce the effects of Spells with the chosen Spell School or Spell Tag. Moving a Sigil: You can spend 1 AP to teleport one of your Sigils within 10 spaces to your current space, but multiple Sigils can’t coexist in the same Space.',
      effects: [] // Complex effects, likely handled in logic
    },
    {
      id: 'wizard_ritual_caster',
      name: 'Ritual Caster (Flavor Feature)',
      level: 1,
      description: 'You learn 1 Arcane Spell with the Ritual Spell Tag each time you gain a Wizard Class Feature (including this one). You can only gain this benefit once per Level. Additionally, when you encounter an Arcane Spell with the Ritual Spell Tag in a form you can study (such as a spellbook, a spell scroll, or from an instructor), you can spend a number of hours equal to the Spell’s base MP cost to learn it. You can only cast Spells you learn with this feature as Rituals, unless you learned it from another source.',
      effects: [] // Flavor/narrative effect
    }
  ],
  featureChoicesLvl1: [] // No explicit Lvl 1 feature choices listed for Wizard on p.163
};


export const classesData: IClassDefinition[] = [
  barbarianClass,
  sorcererClass,
  bardClass,
  championClass,
  clericClass,
  commanderClass,
  druidClass,
  hunterClass,
  monkClass,
  rogueClass,
  spellbladeClass,
  warlockClass,
  wizardClass,
  // Add other classes here as they are populated
];
````

## File: src/lib/stores/characterInProgressStore.ts
````typescript
// src/lib/stores/characterInProgressStore.ts

import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { CharacterInProgress } from '@prisma/client'; // Assuming Prisma client is generated
import { classesData } from '../rulesdata/classes';

// Define the shape of the data stored in the characterInProgressStore
// This should mirror the CharacterInProgress Prisma model, plus any UI state
interface CharacterInProgressStoreData extends CharacterInProgress {
  // Add any UI-specific state here if needed, e.g., current step in wizard
  currentStep: number;
  // Add temporary state for trait selection overflow
  overflowTraitId: string | null;
  overflowAttributeName: string | null;
  // Add Level and Combat Mastery
  level: number;
  combatMastery: number; // Derived, but included in interface for clarity
}

// Initial state for the store, matching Prisma defaults and adding UI state
const initialCharacterInProgressState: CharacterInProgressStoreData = {
  id: '', // Will be set when a new character is started/loaded
  attribute_might: -2,
  attribute_agility: -2,
  attribute_charisma: -2,
  attribute_intelligence: -2,
  pointsSpent: 0,

  // Core Stats
  level: 1, // Default to Level 1 for MVP
  combatMastery: 1, // Calculated: Math.ceil(level / 2)

  ancestry1Id: null,
  ancestry2Id: null,
  selectedTraitIds: '', // JSON string of selected trait IDs
  ancestryPointsSpent: 0,

  classId: null,
  selectedFeatureChoices: '', // JSON string of selected feature choice IDs/values

  // Skills, Equipment, Details fields will be added/updated later
  finalName: null,
  finalPlayerName: null,

  createdAt: new Date(), // Placeholder, will be set by DB
  updatedAt: new Date(), // Placeholder, will be set by DB

  // UI State
  currentStep: 1, // Start at Stage A (Attributes)
  overflowTraitId: null,
  overflowAttributeName: null,
};

// Create the writable store
export const characterInProgressStore: Writable<CharacterInProgressStoreData> = writable(initialCharacterInProgressState);

// Helper function to get an attribute's modifier
// In DC20, the attribute score itself is the modifier.
// Handles null or undefined scores by returning 0.
export function getModifier(attributeScore: number | null | undefined): number {
  return attributeScore ?? 0;
}

// Constant for Level 1 Combat Mastery (DC20 p.22)
export const L1_COMBAT_MASTERY = 1; // Keep for reference, but use derived store

// --- Derived Stores ---

// Derived store for Combat Mastery (half level rounded up)
export const combatMastery = derived(
  characterInProgressStore,
  ($store) => {
    return Math.ceil(($store.level ?? 1) / 2); // Default to level 1 if store.level is null/undefined
  }
);

// Derived store for the Prime Modifier Value and Attribute
export const primeModifier = derived(
  characterInProgressStore,
  ($store) => {
    const attributes = [
      { name: 'Might', value: $store.attribute_might },
      { name: 'Agility', value: $store.attribute_agility },
      { name: 'Charisma', value: $store.attribute_charisma },
      { name: 'Intelligence', value: $store.attribute_intelligence },
    ];

    // Find the highest attribute score
    let highestAttribute = attributes[0];
    for (let i = 1; i < attributes.length; i++) {
      if (attributes[i].value > highestAttribute.value) {
        highestAttribute = attributes[i];
      }
    }

    // Handle ties: If there's a tie, the player chooses.
    // For now, we'll just pick the first one in case of a tie.
    // A more complex implementation might require user input on tie-breaking.
    // Add a defensive check for highestAttribute
    if (!highestAttribute) {
        console.error("Error calculating primeModifier: highestAttribute is undefined.");
        return { value: 0, attribute: 'Unknown' }; // Return a default safe value
    }

    const primeModifierValue = highestAttribute.value;
    const primeModifierAttribute = highestAttribute.name;

    return { value: primeModifierValue, attribute: primeModifierAttribute };
  }
);

// Derived store for Save Masteries (DC20 p.22)
export const saveMasteries = derived(
  [characterInProgressStore, primeModifier, combatMastery],
  ([$store, $primeModifier, $combatMastery]) => {
    const primeModValue = $primeModifier.value;
    const primeModAttribute = $primeModifier.attribute;

    // Save Mastery = Combat Mastery + Attribute Modifier
    // If the attribute is the Prime Modifier, use the Prime Modifier value.
    // Otherwise, use the attribute's own modifier (which is the score itself).
    // Use the derived combatMastery store
    const currentCombatMastery = $combatMastery;

    return {
      might: currentCombatMastery + (primeModAttribute === 'Might' ? primeModValue : getModifier($store.attribute_might)),
      agility: currentCombatMastery + (primeModAttribute === 'Agility' ? primeModValue : getModifier($store.attribute_agility)),
      charisma: currentCombatMastery + (primeModAttribute === 'Charisma' ? primeModValue : getModifier($store.attribute_charisma)),
      intelligence: currentCombatMastery + (primeModAttribute === 'Intelligence' ? primeModValue : getModifier($store.attribute_intelligence)),
    };
  }
);

// Derived store for Grit Points (Base + Charisma Modifier)
export const gritPoints = derived(
  characterInProgressStore,
  ($store) => {
    // Assuming base Grit Points are defined in class data, but for now use a placeholder
    const baseGrit = 2; // Placeholder, should come from class data
    return baseGrit + getModifier($store.attribute_charisma);
  }
);

// Derived store for Jump Distance (Agility Modifier, min 1)
export const jumpDistance = derived(
  characterInProgressStore,
  ($store) => {
    const agilityModifier = getModifier($store.attribute_agility);
    return agilityModifier < 1 ? 1 : agilityModifier;
  }
);

/**
 * Derived store for Starting SP (from class)
 */
export const startingSP = derived(
  characterInProgressStore,
  ($store) => {
    if (!$store.classId) return 0;
    const classData = classesData.find(c => c.id === $store.classId);
    return classData?.startingSP ?? 0;
  }
);

/**
 * Derived store for Starting MP (from class)
 */
export const startingMP = derived(
  characterInProgressStore,
  ($store) => {
    if (!$store.classId) return 0;
    const classData = classesData.find(c => c.id === $store.classId);
    return classData?.startingMP ?? 0;
  }
);

// Derived store for Provisional Skill Points (5 + Intelligence Modifier + Class Bonus)
export const provisionalSkillPoints = derived(
  characterInProgressStore,
  ($store) => {
    const intelligenceModifier = getModifier($store.attribute_intelligence);
    // Assuming class data is available to get skillPointGrantLvl1
    // For now, use a placeholder of 0 if classId is not set
    const classSkillBonus = 0; // Placeholder, should come from class data based on $store.classId
    return 5 + intelligenceModifier + classSkillBonus;
  }
);

// Derived store for Ancestry Points Remaining (Base 4 + Negative Traits - Spent)
export const ancestryPointsRemaining = derived(
  characterInProgressStore,
  ($store) => {
    const basePoints = 4; // DC20 p.16
    // Need to access traitsData to calculate points from negative traits
    // For now, this calculation is incomplete without access to traitsData
    const pointsFromNegativeTraits = 0; // Placeholder
    return basePoints + pointsFromNegativeTraits - $store.ancestryPointsSpent;
  }
);

/**
 * Derived store for Max HP (Class HP + Might Modifier + Ancestry HP)
 * Uses selected class's baseHpContribution, defaults to 8 if not set.
 */
export const maxHP = derived(
  characterInProgressStore,
  ($store) => {
    const classData = classesData.find(c => c.id === $store.classId);
    const classHP = classData?.baseHpContribution ?? 8;
    const mightModifier = getModifier($store.attribute_might);
    const ancestryHP = 0; // Assuming 0 for MVP until Ancestry HP is implemented
    return classHP + mightModifier + ancestryHP;
  }
);

// Derived store for Area Defense (8 + CM + Might Modifier + Charisma Modifier + Bonuses)
export const areaDefense = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const mightModifier = getModifier($store.attribute_might);
    const charismaModifier = getModifier($store.attribute_charisma);
    const bonuses = 0; // Assuming 0 for MVP until bonuses are implemented
    return 8 + $combatMastery + mightModifier + charismaModifier + bonuses;
  }
);

// Derived store for Precision Defense (8 + CM + Agility Modifier + Intelligence Modifier + Bonuses)
export const precisionDefense = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const agilityModifier = getModifier($store.attribute_agility);
    const intelligenceModifier = getModifier($store.attribute_intelligence);
    const bonuses = 0; // Assuming 0 for MVP until bonuses are implemented
    return 8 + $combatMastery + agilityModifier + intelligenceModifier + bonuses;
  }
);

// Derived store for Initiative (CM + Agility Modifier)
export const initiative = derived(
  [characterInProgressStore, combatMastery],
  ([$store, $combatMastery]) => {
    const agilityModifier = getModifier($store.attribute_agility);
    return $combatMastery + agilityModifier;
  }
);
````

## File: src/routes/character-creator/stage-a/+page.svelte
````
<script lang="ts">
  import { writable, derived } from 'svelte/store';
  import { goto } from '$app/navigation'; // Import goto for navigation
  import { characterInProgressStore, primeModifier, saveMasteries, gritPoints, jumpDistance, provisionalSkillPoints, getModifier, L1_COMBAT_MASTERY, combatMastery, maxHP, areaDefense, precisionDefense, initiative } from '$lib/stores/characterInProgressStore';
  import { attributesData } from '$lib/rulesdata/attributes';
  // No Melt UI imports needed for standard HTML elements

  // Local state for character name
  let characterName: string = '';

  // Constants
  const POINT_BUY_BUDGET = 12;
  const ATTRIBUTE_MIN = -2;
  const ATTRIBUTE_MAX_L1 = 3; // Level 1 cap is +3

  // Reactive calculations based on the store
  $: currentAttributes = {
    might: $characterInProgressStore.attribute_might,
    agility: $characterInProgressStore.attribute_agility,
    charisma: $characterInProgressStore.attribute_charisma,
    intelligence: $characterInProgressStore.attribute_intelligence,
  };

  $: pointsSpent = (currentAttributes.might - ATTRIBUTE_MIN) +
                   (currentAttributes.agility - ATTRIBUTE_MIN) +
                   (currentAttributes.charisma - ATTRIBUTE_MIN) +
                   (currentAttributes.intelligence - ATTRIBUTE_MIN); // Corrected typo

  $: pointsRemaining = POINT_BUY_BUDGET - pointsSpent;

  // Local state for Prime Modifier tie-breaking UI
  let primeModifierAttributeUserChoice: string | null = null;

  // Determine if a tie exists for the highest attribute
  $: highestAttributeValue = Math.max(...Object.values(currentAttributes));
  $: tiedAttributes = Object.entries(currentAttributes)
      .filter(([name, value]) => value === highestAttributeValue)
      .map(([name, value]) => name); // Get names of tied attributes

  // Function to handle attribute changes
  function handleAttributeChange(attributeId: keyof typeof currentAttributes, delta: number) {
    const currentValue = currentAttributes[attributeId];
    const newValue = currentValue + delta;

    // Prevent going below min or above max
    if (newValue < ATTRIBUTE_MIN || newValue > ATTRIBUTE_MAX_L1) {
      return;
    }

    // Prevent spending more points than budget (only for increments)
    if (delta > 0 && pointsRemaining <= 0) {
       // Allow decrementing even if pointsRemaining is negative
       if (pointsRemaining === 0) return; // Prevent increment if exactly 0 points left
    }

    // Update the store
    characterInProgressStore.update(store => {
      // Map attributeId string ('might') to store key ('attribute_might')
      const storeKey = `attribute_${attributeId}` as keyof typeof store;
      if (storeKey in store) {
         (store[storeKey] as number) = newValue; // Type assertion needed for update
      }
      // Recalculate pointsSpent in the store? Or rely on derived?
      // Let's rely on derived for display, but maybe store pointsSpent for backend validation?
      // The schema has pointsSpent, so let's update it here.
      // This calculation should match the reactive $: pointsSpent above.
      store.pointsSpent = (store.attribute_might - ATTRIBUTE_MIN) +
                          (store.attribute_agility - ATTRIBUTE_MIN) +
                          (store.attribute_charisma - ATTRIBUTE_MIN) +
                          (store.attribute_intelligence - ATTRIBUTE_MIN);

      return store;
    });
  }

  // Function to handle submitting Stage A data
  async function handleSubmitStageA() {
    // Frontend validation
    if (!characterName.trim()) {
        alert('Please enter a character name.');
        return;
    }
    if (pointsRemaining !== 0) {
      alert(`You must allocate exactly ${POINT_BUY_BUDGET} points. Points remaining: ${pointsRemaining}`);
      return;
    }
    // Attribute cap validation is handled by handleAttributeChange

    // Prepare data to send to backend
    const stageAData = {
      characterId: $characterInProgressStore.id, // Pass the current ID (might be null for new)
      finalName: characterName.trim(), // Include character name
      attribute_might: $characterInProgressStore.attribute_might,
      attribute_agility: $characterInProgressStore.attribute_agility,
      attribute_charisma: $characterInProgressStore.attribute_charisma,
      attribute_intelligence: $characterInProgressStore.attribute_intelligence,
      // pointsSpent is calculated by backend for authoritative validation
    };

    try {
      // Use SvelteKit's fetch for API calls
      const response = await fetch('/api/character/progress/stageA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stageAData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Backend validation failed:', error);
        alert(`Failed to save attributes: ${error.message || response.statusText}`);
        return;
      }

      const result = await response.json();
      console.log('Stage A data saved successfully:', result);

      // Update store with potentially new character ID if it was created
      if (result.characterId && $characterInProgressStore.id === null) {
         characterInProgressStore.update(store => ({ ...store, id: result.characterId }));
         // TODO: Also save characterId to localStorage for resume functionality (TD-002 related)
      }

      // Navigate to the next stage (Stage B)
      goto('/character-creator/stage-b');

    } catch (error) {
      console.error('Error submitting Stage A data:', error);
      alert('An unexpected error occurred while saving attributes.');
    }
  }

  // Reactive statement to update user choice if tie is resolved or changes
  $: {
      if (tiedAttributes.length === 1) {
          // If tie is resolved to a single attribute, set user choice to that attribute
          primeModifierAttributeUserChoice = tiedAttributes[0];
      } else if (tiedAttributes.length > 1) {
          // If there's a tie, ensure user choice is one of the tied attributes
          if (primeModifierAttributeUserChoice === null || !tiedAttributes.includes(primeModifierAttributeUserChoice)) {
              // If no choice made yet, or previous choice is no longer tied, clear it
              primeModifierAttributeUserChoice = null; // Force user to choose
          }
      } else {
          // Should not happen with 4 attributes starting at -2, but handle defensively
          primeModifierAttributeUserChoice = null;
      }
  }

  // Derived store for the *displayed* Prime Modifier attribute, considering user choice on tie
  $: displayedPrimeModifierAttribute = tiedAttributes.length > 1 && primeModifierAttributeUserChoice !== null
      ? primeModifierAttributeUserChoice
      : $primeModifier.attribute; // Use store's default if no tie or no user choice yet

  // Derived store for the *displayed* Prime Modifier value, based on the displayed attribute
  $: displayedPrimeModifierValue = displayedPrimeModifierAttribute
      ? currentAttributes[displayedPrimeModifierAttribute as keyof typeof currentAttributes] // Use currentAttributes for value
      : $primeModifier.value; // Fallback to store's derived value if needed

</script>

<!-- UI Structure -->
<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary">
  <h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Step 1: Core Attributes & Foundational Stats</h2>

  <!-- Character Name Input -->
  <div class="mb-6">
    <label for="characterName" class="block text-lg font-medium mb-2">Character Name</label>
    <input
      type="text"
      id="characterName"
      bind:value={characterName}
      class="w-full p-2 border rounded bg-dark-bg-primary text-light-text-primary border-dark-border"
      placeholder="Enter your character's name"
    />
  </div>

  <!-- Point Buy Allocation Section -->
  <div class="mb-6">
    <h3 class="text-lg font-medium mb-2">Allocate Attribute Points (Point Buy)</h3>
    <p class="mb-4 text-light-text-secondary" class:text-magenta-error={pointsRemaining < 0}>
      Budget: {pointsRemaining} / {POINT_BUY_BUDGET} Points Remaining
    </p>

    <div class="flex flex-col gap-4 mb-6">
      {#each attributesData as attribute (attribute.id)}
        <div
          class="flex items-center gap-4 p-4 bg-dark-bg-primary rounded-md shadow-sm relative"
        >
          <!-- Controls (leftmost) -->
          <div class="flex items-center gap-2">
            <button
              class="p-2 h-8 w-8 flex items-center justify-center bg-magenta-error/70 hover:bg-magenta-error rounded-md text-lg"
              on:click={() => handleAttributeChange(attribute.id as keyof typeof currentAttributes, -1)}
              disabled={currentAttributes[attribute.id as keyof typeof currentAttributes] <= ATTRIBUTE_MIN}
            >-</button>
            <input
              id={`attribute-${attribute.id}`}
              type="number"
              readonly
              value={currentAttributes[attribute.id as keyof typeof currentAttributes]}
              class="w-12 text-center text-xl font-semibold bg-dark-bg-secondary rounded-md p-1 h-8"
            />
            <button
              class="p-2 h-8 w-8 flex items-center justify-center bg-purple-primary/70 hover:bg-purple-primary rounded-md text-lg"
              on:click={() => handleAttributeChange(attribute.id as keyof typeof currentAttributes, 1)}
              disabled={currentAttributes[attribute.id as keyof typeof currentAttributes] >= ATTRIBUTE_MAX_L1 || pointsRemaining <= 0}
            >+</button>
          </div>
          <!-- Yellow marker (if prime) -->
          {#if displayedPrimeModifierAttribute === attribute.name}
            <div class="w-1 h-10 bg-yellow-accent rounded mr-3"></div>
          {/if}
          <!-- Name & Description -->
          <div class="flex flex-col min-w-[140px]">
            <label for={`attribute-${attribute.id}`} class="text-xl font-medium text-light-text-primary leading-tight">
              {attribute.name}
            </label>
            <span class="text-xs text-light-text-secondary">{attribute.description}</span>
          </div>

          <!-- Derived Stat (if any) -->
          {#if attribute.id === 'charisma'}
            <span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">
              Grit: {$gritPoints}
            </span>
          {/if}
          {#if attribute.id === 'agility'}
            <span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">
              Jump: {$jumpDistance}
            </span>
          {/if}
          {#if attribute.id === 'intelligence'}
            <span class="ml-4 text-xs text-light-text-secondary whitespace-nowrap">
              Skill Pts: {$provisionalSkillPoints}
            </span>
          {/if}

          <!-- Save Bonus (far right) -->
          <span class="ml-auto text-blue-info font-medium whitespace-nowrap">
            Save: {($saveMasteries[attribute.id as keyof typeof $saveMasteries] >= 0 ? '+' : '') + $saveMasteries[attribute.id as keyof typeof $saveMasteries]}
          </span>
        </div>
      {/each}
    </div>

    <!-- Prime Modifier Tie-Breaker (Conditional UI) -->
    {#if tiedAttributes.length > 1}
      <div class="my-4">
        <p class="mb-2 text-yellow-accent">Multiple attributes are tied for highest. Please select your Prime Modifier:</p>
        <!-- Using standard radio group -->
        <div class="flex gap-4">
          {#each tiedAttributes as attrId}
            <label>
              <input type="radio" name="primeModifier" value={attrId} bind:group={primeModifierAttributeUserChoice} class="mr-1" />
              {attributesData.find(a => a.id === attrId)?.name || attrId}
            </label>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <!-- Key Calculated Stats Display -->
  <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-4 bg-purple-primary/20 rounded-lg text-center">
      <span class="text-lg text-light-text-primary">Level: </span>
      <span class="text-2xl font-bold text-yellow-accent">{$characterInProgressStore.level}</span>
      <!-- TODO: Add Tooltip -->
    </div>
    <div class="p-4 bg-purple-primary/20 rounded-lg text-center">
      <span class="text-lg text-light-text-primary">Combat Mastery (CM): </span>
      <span class="text-2xl font-bold text-yellow-accent">{$combatMastery}</span>
      <!-- TODO: Add Tooltip -->
    </div>
    <div class="p-4 bg-purple-primary/20 rounded-lg text-center">
      <span class="text-lg text-light-text-primary">Prime Modifier: </span>
      <span class="text-2xl font-bold text-yellow-accent">
        {displayedPrimeModifierAttribute ? attributesData.find(a => a.id === displayedPrimeModifierAttribute.toLowerCase())?.name || displayedPrimeModifierAttribute : 'N/A'} ({displayedPrimeModifierValue})
      </span>
      <!-- TODO: Add Tooltip -->
    </div>
    <div class="p-4 bg-dark-bg-primary rounded-lg text-center">
      <span class="text-md text-light-text-primary">Base Skill Points (5 + Int Mod): </span>
      <span class="text-xl font-semibold text-blue-info">{$provisionalSkillPoints}</span>
      <!-- TODO: Add Tooltip -->
    </div>
     <!-- TODO: Add Grit Points and Jump Distance cards here if desired, or keep them integrated -->
  </div>

  <!-- Provisional Formulas Display -->
  <div class="mt-6">
    <h3 class="text-lg font-medium mb-3">Provisional Base Stats (Finalized after Class & Equipment)</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-light-text-secondary">
      <!-- Display calculated stats with transparent formulas -->
      <p>HP = Base(8) + Might({$characterInProgressStore.attribute_might}) + Ancestry(0) = {$maxHP}</p>
      <p>SP = Class SP</p>
      <p>MP = Class MP</p>
      <p>PD = Base(8) + CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) + Intelligence({$characterInProgressStore.attribute_intelligence}) + Bonuses(0) = {$precisionDefense}</p>
      <p>AD = Base(8) + CM({$combatMastery}) + Might({$characterInProgressStore.attribute_might}) + Charisma({$characterInProgressStore.attribute_charisma}) + Bonuses(0) = {$areaDefense}</p>
      <p>Initiative = CM({$combatMastery}) + Agility({$characterInProgressStore.attribute_agility}) = {$initiative}</p>
      <p>Grit Points = Base(2) + Charisma({$characterInProgressStore.attribute_charisma}) = {$gritPoints}</p>
      <p>Jump Distance = Agility({$characterInProgressStore.attribute_agility}) (min 1) = {$jumpDistance}</p>
      <p>Base Skill Points = Base(5) + Intelligence({$characterInProgressStore.attribute_intelligence}) = {$provisionalSkillPoints}</p>
    </div>
  </div>

  <!-- Navigation Button -->
  <div class="mt-8 text-right">
      <!-- Using standard button -->
      <button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded"
                   on:click={handleSubmitStageA}
                   disabled={pointsRemaining !== 0}>
          Next Step
      </button>
  </div>
</div>
````

## File: src/routes/character-creator/stage-b/+page.svelte
````
<script lang="ts">
    import { characterInProgressStore, primeModifier } from '$lib/stores/characterInProgressStore';
    import type { IAncestry, ITrait } from '$lib/rulesdata/types';
    import { ancestriesData } from '$lib/rulesdata/ancestries';
    import { traitsData as traits } from '$lib/rulesdata/traits'; // Assuming traits are in a separate file

    const ancestries = ancestriesData; // Assign to a local variable for consistency

    // II. B. Internal State (Reactive Svelte Variables):
    let selectedAncestry1_ID: string | null = null;
    let selectedAncestry2_ID: string | null = null;
    let availableTraitsForSelection: ITrait[] = []; // Reactive/Derived Array
    let currentSelectedTraits: ITrait[] = []; // Array of Trait Objects
    const ancestryPointsBudget: number = 5;
    // Removed pointsFromNegativeTraits as it's no longer needed for total budget calculation
    $: totalAncestryPointsAvailable = ancestryPointsBudget; // Always 5
    $: ancestryPointsSpent = currentSelectedTraits.reduce((sum, trait) => sum + trait.cost, 0); // Reactive/Derived Number
    $: ancestryPointsRemaining = totalAncestryPointsAvailable - ancestryPointsSpent; // Reactive/Derived Number

    let showOverflowHelperPanel: boolean = false; // Boolean (default: false)
    let overflowTrait: ITrait | null = null; // Object | null (the trait causing the overflow)
    let overflowAttributeName: 'attribute_might' | 'attribute_agility' | 'attribute_charisma' | 'attribute_intelligence' | null = null; // String | null (e.g., 'attribute_might')
    let overflowAmount: number = 0; // Number (how many points attribute would go over cap)
    // Use a more specific type for temp attributes, or copy only relevant ones
    let tempAttributesForReallocation: {
        attribute_might: number;
        attribute_agility: number;
        attribute_charisma: number;
        attribute_intelligence: number;
    } = { attribute_might: -2, attribute_agility: -2, attribute_charisma: -2, attribute_intelligence: -2 }; // Initialize with base values
    let pointsFreedInPanel: number = 0; // Number (tracks how many points user has reduced in panel)

    // II. D. Functions & Logic:
    function getAncestryName(id: string): string {
        const ancestry = ancestries.find(a => a.id === id);
        return ancestry ? ancestry.name : 'Unknown Ancestry';
    }

    // Corrected parameter type to match the keys of tempAttributesForReallocation
    function reduceAttributeInPanel(attributeName: keyof typeof tempAttributesForReallocation): void {
        // Check if we can reduce this attribute and haven't reached our goal yet
        if (tempAttributesForReallocation[attributeName] > -2 && pointsFreedInPanel < overflowAmount) {
            // Don't reduce the attribute that's being increased by the trait
            if (attributeName !== overflowAttributeName) {
                tempAttributesForReallocation[attributeName]--;
                pointsFreedInPanel++;
            }
        }
    }

    // Function to check if selecting a trait would cause an attribute overflow
    function checkAttributeOverflow(trait: ITrait): { willOverflow: boolean; attributeName: 'attribute_might' | 'attribute_agility' | 'attribute_charisma' | 'attribute_intelligence' | null; overflowAmount: number } {
        const attributeEffect = trait.effects?.find(effect => effect.type === 'MODIFY_ATTRIBUTE');

        if (attributeEffect && attributeEffect.target && typeof attributeEffect.value === 'number' && attributeEffect.value > 0) {
            const storeAttributeName = `attribute_${attributeEffect.target}` as 'attribute_might' | 'attribute_agility' | 'attribute_charisma' | 'attribute_intelligence';

            if (['attribute_might', 'attribute_agility', 'attribute_charisma', 'attribute_intelligence'].includes(storeAttributeName)) {
                const currentAttributeValue = $characterInProgressStore?.[storeAttributeName] ?? -2;
                const potentialNewValue = currentAttributeValue + attributeEffect.value;
                const level1Cap = 3;

                if (potentialNewValue > level1Cap) {
                    return {
                        willOverflow: true,
                        attributeName: storeAttributeName,
                        overflowAmount: potentialNewValue - level1Cap
                    };
                }
            } else {
                 console.warn(`Trait ${trait.id} effect targets unknown or non-primary attribute: ${attributeEffect.target}`);
            }
        }
        return { willOverflow: false, attributeName: null, overflowAmount: 0 };
    }


    function handleTraitSelection(trait: ITrait): void {
        const traitIndex = currentSelectedTraits.findIndex(t => t.id === trait.id);

        if (traitIndex > -1) {
            // Trait is currently selected, so deselect it
            currentSelectedTraits = currentSelectedTraits.filter(t => t.id !== trait.id);
            // Reactive variables will handle points recalculation
        } else {
            // Trait is not selected, try to select it

            // Check if adding this trait violates point budget
            if (trait.cost > 0 && ancestryPointsRemaining < trait.cost) {
                // Add UI feedback here (will implement below)
                console.warn(`Cannot select trait ${trait.name}: Not enough Ancestry Points.`);
                return; // Prevent selection
            }

            // Check for Minor Trait limit (max 1)
            const minorTraitsSelected = currentSelectedTraits.filter(t => t.isMinor).length;
            if (trait.isMinor && minorTraitsSelected >= 1) {
                // Add UI feedback here (will implement below)
                console.warn("You can only select one Minor Trait.");
                return; // Prevent selection
            }

            // Check for Negative Trait point gain limit (max +2)
            if (trait.cost < 0) {
                const potentialPointsFromNegative = currentSelectedTraits
                    .filter(t => t.cost < 0)
                    .reduce((sum, t) => sum + Math.abs(t.cost), 0) + Math.abs(trait.cost);

                if (potentialPointsFromNegative > 2) {
                    // Add UI feedback here (will implement below)
                    console.warn("You can only gain a maximum of +2 points from Negative Traits.");
                    return; // Prevent selection
                }
            }

            // Check for attribute overflow
            const overflowCheck = checkAttributeOverflow(trait);
            if (overflowCheck.willOverflow) {
                // Set up overflow panel
                overflowTrait = trait;
                overflowAttributeName = overflowCheck.attributeName;
                overflowAmount = overflowCheck.overflowAmount;

                // Copy attribute values for reallocation
                tempAttributesForReallocation = {
                    attribute_might: $characterInProgressStore?.attribute_might ?? -2,
                    attribute_agility: $characterInProgressStore?.attribute_agility ?? -2,
                    attribute_charisma: $characterInProgressStore?.attribute_charisma ?? -2,
                    attribute_intelligence: $characterInProgressStore?.attribute_intelligence ?? -2,
                };

                pointsFreedInPanel = 0;
                showOverflowHelperPanel = true;
                return;
            }

            // If all checks pass, add the trait
            currentSelectedTraits = [...currentSelectedTraits, trait];
        }
    }

    function openOverflowHelperPanel(trait: ITrait): void {
        // This function is now primarily called by handleTraitSelection
        // Its logic has been moved into checkAttributeOverflow and handleTraitSelection
        // We keep it as a placeholder or potentially for direct calls if needed elsewhere
        console.warn("openOverflowHelperPanel called directly - logic is now in handleTraitSelection and checkAttributeOverflow");
        // The state variables (overflowTrait, etc.) are set in handleTraitSelection before calling this.
        // showOverflowHelperPanel = true; // This is set in handleTraitSelection
    }

    function closeOverflowHelperPanel(): void {
        // TODO: Implement logic to close panel
        showOverflowHelperPanel = false;
        overflowTrait = null; // Clear overflow state
        overflowAttributeName = null;
        overflowAmount = 0;
        pointsFreedInPanel = 0;
        // TODO: Decide if tempAttributesForReallocation should be reset or kept for review
    }

    function confirmAttributeReallocationAndSelectTrait(): void {
        if (overflowTrait && overflowAttributeName && pointsFreedInPanel === overflowAmount) {
            // Apply the attribute changes to the store
            characterInProgressStore.update(store => {
                return {
                    ...store,
                    attribute_might: tempAttributesForReallocation.attribute_might,
                    attribute_agility: tempAttributesForReallocation.attribute_agility,
                    attribute_charisma: tempAttributesForReallocation.attribute_charisma,
                    attribute_intelligence: tempAttributesForReallocation.attribute_intelligence
                };
            });

            // Add the overflow trait to selected traits
            currentSelectedTraits = [...currentSelectedTraits, overflowTrait];

            // Close panel and reset state
            closeOverflowHelperPanel();
        } else {
            console.warn("Attempted to confirm reallocation without resolving overflow.");
        }
    }

    interface TraitsByAncestry {
        ancestry: IAncestry;
        traits: ITrait[];
    }
    let availableTraitsByAncestry: TraitsByAncestry[] = []; // Reactive/Derived Array

    $: {
        // Calculate availableTraitsByAncestry based on selectedAncestry1_ID and selectedAncestry2_ID
        availableTraitsByAncestry = [];

        // Ensure ancestries data is loaded before processing
        if (ancestries && (selectedAncestry1_ID !== null || selectedAncestry2_ID !== null)) {
            const selectedAncestry1 = ancestries.find(a => a.id === selectedAncestry1_ID);
            const selectedAncestry2 = ancestries.find(a => a.id === selectedAncestry2_ID);

            if (selectedAncestry1) {
                const traits1 = [...(selectedAncestry1.defaultTraitIds || []), ...(selectedAncestry1.expandedTraitIds || [])]
                    .map(traitId => traits.find(t => t.id === traitId))
                    .filter((t): t is ITrait => t !== undefined);
                availableTraitsByAncestry = [...availableTraitsByAncestry, { ancestry: selectedAncestry1, traits: traits1 }];
            }

            // Add second ancestry traits only if different from the first
            if (selectedAncestry2 && selectedAncestry2_ID !== selectedAncestry1_ID) {
                 const traits2 = [...(selectedAncestry2.defaultTraitIds || []), ...(selectedAncestry2.expandedTraitIds || [])]
                    .map(traitId => traits.find(t => t.id === traitId))
                    .filter((t): t is ITrait => t !== undefined);
                availableTraitsByAncestry = [...availableTraitsByAncestry, { ancestry: selectedAncestry2, traits: traits2 }];
            }
        }

        // The calculation for pointsFromNegativeTraits is now done locally within handleTraitSelection
        // The enforcement of the max +2 point gain from Negative Traits is also handled there.

        // TODO: Implement logic to enforce other trait rules (max 2 ancestries, 1 Minor Trait, max +2 points from Negative Traits, total 5 points used)
        // This will likely involve checks within handleTraitSelection and potentially disabling UI elements
    }

    // TODO: Implement UI Feedback for Trait Rules (disable selections, messages)

</script>

<!-- 1. Main Container & Stage Title: -->
<div class="p-6 md:p-8 bg-dark-bg-secondary rounded-lg shadow-xl text-light-text-primary">
    <h2 class="text-2xl font-semibold mb-6 text-yellow-accent">Step 2: Ancestry Choices</h2>

    <!-- 2. Ancestry Selection Section: -->
    <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">Choose Your Ancestry (Up to 2)</h3>
        <!-- TODO: Implement Ancestry Selection using Melt UI Select or custom SelectionCards -->
        <!-- Using standard select for now due to Melt UI SSR issues -->
        <div class="flex gap-4">
            <div class="flex-1">
                <!-- Fixed A11y warning by associating label with input -->
                <label class="block text-sm font-medium mb-1" for="ancestry1">Ancestry 1</label>
                <select id="ancestry1" bind:value={selectedAncestry1_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
                    <option value={null}>Select an ancestry</option>
                    {#if ancestries}
                        {#each ancestries as ancestry}
                            <option value={ancestry.id}>{ancestry.name}</option>
                        {/each}
                    {/if}
                </select>
            </div>
            <div class="flex-1">
                <!-- Fixed A11y warning by associating label with input -->
                <label class="block text-sm font-medium mb-1" for="ancestry2">Ancestry 2</label>
                 <select id="ancestry2" bind:value={selectedAncestry2_ID} class="p-2 border rounded w-full bg-dark-bg-secondary text-light-text-primary dark:border-dark-border text-purple-300">
                    <option value={null}>None</option>
                    {#if ancestries}
                        {#each ancestries as ancestry}
                            <option value={ancestry.id}>{ancestry.name}</option>
                        {/each}
                    {/if}
                </select>
    </div>
</div>

<style lang="postcss">
    /* Apply dark background to select elements and options */
    select.bg-dark-bg-secondary {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */
        @apply text-purple-300; /* Apply text color using @apply */
    }

    /* Attempt to style dropdown options - browser support varies */
    select.bg-dark-bg-secondary option {
        /* Avoid @apply to prevent circular dependency error during SSR */
        background-color: #1f2937; /* Using a placeholder dark grey color */
        @apply text-light-text-primary; /* Use light text for options */
    }
</style>
    </div>

    {#if selectedAncestry1_ID}
        <!-- 3. Ancestry Points & Trait Allocation Section: -->
        <div class="mb-6">
            <h3 class="text-lg font-medium mb-2">Ancestry Traits</h3>
            <p class="mb-4 text-light-text-secondary">Ancestry Points: <span class="font-bold">{ancestryPointsRemaining}</span> / {totalAncestryPointsAvailable} Remaining</p>

            <!-- Conditional Trait Listing for selected ancestries -->
            {#if availableTraitsByAncestry.length > 0}
                {#each availableTraitsByAncestry as ancestryGroup}
                    <h4 class="text-lg font-semibold mt-4 mb-2">{ancestryGroup.ancestry.name} Traits</h4>
                    {#if ancestryGroup.traits.length > 0}
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {#each ancestryGroup.traits as trait}
                                <li class="flex items-center justify-between p-3 my-1 rounded border border-dark-border dark:hover:bg-dark-bg-primary transition-colors duration-200">
                                    <!-- Add disabled state based on rules -->
                                    <input type="checkbox" on:change={() => handleTraitSelection(trait)} checked={currentSelectedTraits.some(t => t.id === trait.id)} disabled={
                                        // Disable if not enough points and not a negative trait
                                        (trait.cost > 0 && ancestryPointsRemaining < trait.cost && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                                        // Disable if Minor Trait limit reached and this is a Minor Trait
                                        (trait.isMinor && currentSelectedTraits.filter(t => t.isMinor).length >= 1 && !currentSelectedTraits.some(t => t.id === trait.id)) ||
                                        // Disable if Negative Trait point gain limit reached and this is a Negative Trait
                                        (trait.cost < 0 && currentSelectedTraits.filter(t => t.cost < 0).reduce((sum, t) => sum + Math.abs(t.cost), 0) >= 2 && !currentSelectedTraits.some(t => t.id === trait.id))
                                    } class="form-checkbox h-5 w-5 text-purple-primary rounded focus:ring-purple-primary dark:bg-dark-bg-secondary dark:border-dark-border" />
                                    <span class="font-medium flex-1 ml-3 {currentSelectedTraits.some(t => t.id === trait.id) ? 'text-yellow-accent' : ''}">
                                        {trait.name} (Cost: {trait.cost})
                                    </span>
                                    <!-- TODO: Add Tooltip for description -->
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p>No traits available for {ancestryGroup.ancestry.name}.</p>
                    {/if}
                {/each}
            {:else}
                <p>Select one or two ancestries to see available traits.</p>
            {/if}
        </div>

        <!-- 4. Chosen Traits Summary: -->
        <div class="mt-4 p-4 bg-dark-bg-primary rounded-md shadow-sm mb-6">
        <h3 class="text-lg font-medium mb-2">Selected Traits</h3>
        {#each currentSelectedTraits as trait}
            <p class="text-light-text-primary">{trait.name} (Cost: {trait.cost}){trait.sourceAncestryId && ancestries.find(a => a.id === trait.sourceAncestryId) ? ' from ' + getAncestryName(trait.sourceAncestryId) : ''}</p>
        {/each}
    </div>
    {/if}

    <!-- 5. Read-Only Display of Updated Stage A Stats: -->
    <div class="mb-6 p-4 bg-dark-bg-primary rounded-md shadow-sm">
        <h3 class="text-lg font-medium mb-2">Current Core Stats (Reflecting Ancestry Choices)</h3>
        <!-- Display stats from $characterInProgressStore.attributesFromStageA and derived stats -->
        <div class="grid grid-cols-2 gap-4">
            <p>Might: <span class="font-bold">{$characterInProgressStore.attribute_might}</span></p>
            <p>Agility: <span class="font-bold">{$characterInProgressStore.attribute_agility}</span></p>
            <p>Charisma: <span class="font-bold">{$characterInProgressStore.attribute_charisma}</span></p>
            <p>Intellect: <span class="font-bold">{$characterInProgressStore.attribute_intelligence}</span></p>
            <!-- Display derived stats -->
            <p class="col-span-2">Prime Modifier: <span class="font-bold text-yellow-accent">{$primeModifier.attribute} ({$primeModifier.value >= 0 ? '+' : ''}{$primeModifier.value})</span></p>
        </div>
    </div>

    <!-- 6. Overflow Helper Panel (Melt UI Dialog): -->
    <!-- Using a simple div for now due to Melt UI SSR issues -->
    {#if showOverflowHelperPanel}
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div class="bg-dark-bg-secondary p-6 rounded-lg shadow-xl w-full max-w-md text-light-text-primary">
                <h3 class="text-lg font-bold mb-2">Attribute Cap Reached for '{overflowTrait?.name}'</h3>
                <!-- Corrected display to use overflowAmount directly -->
                <p class="mb-4">Selecting '{overflowTrait?.name}' will increase '{overflowAttributeName?.replace('attribute_', '')}' by +{overflowAmount}, exceeding the Level 1 cap of +3. You have {overflowAmount} point(s) to free up by reducing other attributes.</p>

                <!-- Attribute Reduction Section within Panel: -->
                <div>
                    <h4 class="text-md font-semibold mb-2">Reduce Attributes:</h4>
                    <!-- TODO: Implement attribute reduction controls -->
                    {#each ['attribute_might', 'attribute_agility', 'attribute_charisma', 'attribute_intelligence'] as attrName: keyof typeof tempAttributesForReallocation}
                        {#if attrName !== overflowAttributeName}
                            <div class="flex items-center justify-between mb-2">
                                <!-- Changed label to span as it's not associated with a form control -->
                                <span>{attrName.replace('attribute_', '')}: {tempAttributesForReallocation[attrName as keyof typeof tempAttributesForReallocation]}</span>
                                <button on:click={() => reduceAttributeInPanel(attrName as keyof typeof tempAttributesForReallocation)} disabled={ (tempAttributesForReallocation[attrName as keyof typeof tempAttributesForReallocation] ?? -2) <= -2 || pointsFreedInPanel >= overflowAmount } class="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">-</button>
                            </div>
                        {/if}
                    {/each}
                </div>

                <p class="mt-4">Points Freed: {pointsFreedInPanel} / {overflowAmount}</p>

                <!-- Panel Actions: -->
                <div class="flex justify-end gap-3 mt-4">
                    <button on:click={closeOverflowHelperPanel} class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Cancel Trait</button>
                    <button on:click={confirmAttributeReallocationAndSelectTrait} disabled={pointsFreedInPanel !== overflowAmount} class="bg-purple-primary hover:bg-purple-primary/80 text-white px-4 py-2 rounded">Apply & Select Trait</button>
                </div>
            </div>
        </div>
    {/if}

    <!-- Next Button -->
    <div class="mt-8 text-right">
        <button class="bg-yellow-accent hover:bg-yellow-accent/90 text-dark-bg-primary font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed" disabled={ancestryPointsRemaining !== 0 || currentSelectedTraits.length === 0}>
            Next Step
        </button>
    </div>
</div>
````

## File: svelte.config.js
````javascript
import adapter from '@sveltejs/adapter-vercel';
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
````

## File: projectPlan/stage0.md
````markdown
# AI Generation Guide: Character Creator - Stage 0 (Foundation and UI Setup)

## I. Overall Stage Objective
To establish a stable, working, and verifiable foundation for the SvelteKit application. This involves initializing the project, installing all core UI dependencies (TailwindCSS, Melt UI), and confirming that they work together correctly through a simple, testable example. This stage must be completed before any character creation logic or components from `stage1.md` are implemented.

## II. Rationale
Previous development iterations have shown that jumping directly into complex component logic (Stage A) without first validating the foundational UI stack is risky and can lead to failure. This "Stage 0" de-risks the entire frontend development process by breaking down the setup into atomized, verifiable steps. The goal is to build confidence and momentum with small, incremental wins, ensuring that the toolchain is not a blocker. We will build upon a proven and working installation.

## III. Step-by-Step Implementation Plan

### Step 1: Initialize the SvelteKit Project
The SvelteKit project was initialized directly within the existing `c:/Prog/dc20` directory, rather than creating a new subdirectory using `npm create svelte@latest`.

The initialization was performed manually by:
1.  Installing core SvelteKit-related dependencies (`@sveltejs/kit`, `@sveltejs/adapter-auto`, `@sveltejs/vite-plugin-svelte`, `vite`) as development dependencies via `npm install --save-dev`.
2.  Creating the standard SvelteKit configuration files: `svelte.config.js` and `vite.config.js`.
3.  Creating essential SvelteKit application files: `src/app.html` and `src/routes/+page.svelte`.
4.  Updating the `package.json` file to include `"type": "module"` for correct ES module handling and adding the necessary `dev` and `build` scripts.

This manual setup inherently provides TypeScript support as SvelteKit is configured for it. However, options like ESLint and Prettier, which would typically be selectable via `npm create svelte@latest`, were not explicitly configured during this manual process.

**Verification:** The development server was successfully started using `npm run dev`, confirming that the basic SvelteKit skeleton is functional and accessible at `http://localhost:5173`.

### Step 2: Add and Configure TailwindCSS
Next, we integrate our styling engine. We will use the `svelte-add` utility for a seamless installation.

1.  **Run the TailwindCSS adder:**
    ```bash
    npx svelte-add@latest tailwindcss
    ```
    This command will automatically create `tailwind.config.js`, `postcss.config.js`, and import the necessary CSS into a new `src/app.css` file, which it then links in `src/routes/+layout.svelte`.

2.  **Install the new dependencies:**
    ```bash
    npm install
    ```

3.  **Create a test page:** Create a new file at `src/routes/test-ui/+page.svelte`.

4.  **Verification:** Add a simple, styled element to `src/routes/test-ui/+page.svelte`:
    ```svelte
    <!-- src/routes/test-ui/+page.svelte -->
    <h1 class="text-2xl p-4">UI Test Page</h1>
    <div class="bg-blue-500 w-24 h-24 m-4"></div>
    ```
    Run `npm run dev` and navigate to `http://localhost:5173/test-ui`. You should see a blue square. This confirms TailwindCSS is working.

### Step 3: Integrate Custom Tailwind Theme
Now, apply our project's specific design system.

1.  **Update `tailwind.config.js`:** Open `projectPlan/tailwind.config.js` and copy its entire contents. Paste it into the `tailwind.config.js` file at the root of your new project, replacing the default content.

2.  **Verification:** Modify the test page to use a color from our custom theme.
    ```svelte
    <!-- src/routes/test-ui/+page.svelte -->
    <h1 class="text-2xl p-4 text-yellow-accent">UI Test Page</h1>
    <div class="bg-purple-primary w-24 h-24 m-4"></div>
    ```
    The square on the test page should now be the project's primary purple color, and the title should be the accent yellow. This confirms the custom configuration is loaded.

### Step 4: Set Up the Inter Font
The theme specifies the 'Inter' font, but we need to load it.

1.  **Add the font link:** Open `src/routes/+layout.svelte`. Inside the `<svelte:head>` section, add the link to Google Fonts.
    ```svelte
    <!-- src/routes/+layout.svelte -->
    <svelte:head>
      <title>DC20 Character Creator</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    </svelte:head>

    <slot />
    ```

2.  **Verification:** The text on the test page should now render using the Inter font. You can confirm this using your browser's developer tools by inspecting the `<h1>` element and checking its `font-family` CSS property.

### Step 5: Install and Verify Melt UI
Finally, let's install the UI primitives library, set up its preprocessor, and verify the UI foundation.

1.  **Install the package:**
    ```bash
    npm install @melt-ui/svelte @melt-ui/pp
    ```

2.  **Set up the Preprocessor:**
    *   Open `svelte.config.js`.
    *   Import the preprocessor: `import { preprocessMeltUI } from '@melt-ui/pp';`
    *   Ensure `sequence` is imported from `@sveltejs/kit/hooks`: `import { sequence } from '@sveltejs/kit/hooks';`
    *   Add `preprocessMeltUI()` to the `preprocess` array, typically within `sequence()` if other preprocessors are present:
        ```javascript
        preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
        ```
    *   Restart the development server for the configuration changes to take effect.

3.  **Verification:** We will verify that Melt UI has been installed and its preprocessor is working correctly, and that our styling setup works with Melt UI components. We will add a simple, functional, and styled Melt UI collapsible component to our test page.
    ```svelte
    <!-- src/routes/test-ui/+page.svelte -->
    <h1 class="text-2xl p-4 text-yellow-accent">UI Test Page</h1>
    <div class="bg-purple-primary w-24 h-24 m-4"></div>

    <button
      class="p-2 px-4 m-4 bg-orange-secondary text-light-text-primary rounded-lg font-semibold hover:bg-opacity-80"
      on:click={() => alert('Styled HTML button works!')}>
      Test Styled Button
    </button>

    <script lang="ts">
      import { createCollapsible, melt } from '@melt-ui/svelte';
      const {
        elements: { root, content, trigger },
        states: { open },
      } = createCollapsible();
    </script>

    <div use:melt={$root} class="mt-4 p-2 border border-purple-primary rounded">
      <button use:melt={$trigger} class="p-2 bg-purple-primary text-light-text-primary rounded w-full text-left">
        Collapsible Trigger (Click to {$open ? 'Close' : 'Open'})
      </button>
      {#if $open}
        <div use:melt={$content} class="p-2 mt-2 bg-dark-bg-secondary text-light-text-primary rounded">
          Collapsible Content - Now Visible!
        </div>
      {/if}
    </div>
    ```
    Navigate to the `/test-ui` page. You should see the styled HTML button and a new, styled collapsible component. Clicking the "Collapsible Trigger" should toggle the visibility of the styled "Collapsible Content". This proves that Melt UI is installed, its preprocessor is active, and its components can be styled correctly with our TailwindCSS theme, confirming the UI foundation is solid.

## IV. Stage Outcome
Upon successful completion of all steps, we will have:
1.  A functional SvelteKit project.
2.  TailwindCSS installed and configured with our project's custom theme.
3.  The Inter font loaded and applied.
4.  Melt UI installed, its preprocessor configured, and the overall UI foundation verified.

The project is now in a known-good state. The foundational UI layer is proven. We can now proceed with confidence to implement the application logic and components described in `projectPlan/stage1.md`.

The project is now in a known-good state. The foundational UI layer is proven. We can now proceed with confidence to implement the application logic and components described in `projectPlan/stage1.md`.
````

## File: package.json
````json
{
  "type": "module",
  "devDependencies": {
    "@melt-ui/pp": "^0.3.2",
    "@sveltejs/adapter-auto": "^6.0.1",
    "@sveltejs/adapter-node": "^5.2.12",
    "@sveltejs/kit": "^2.21.5",
    "@sveltejs/vite-plugin-svelte": "^5.1.0",
    "@tailwindcss/typography": "^0.5.14",
    "autoprefixer": "^10.4.20",
    "prisma": "^6.10.1",
    "svelte": "^5.28.2",
    "tailwindcss": "^3.4.9",
    "vite": "^6.3.5"
  },
  "scripts": {
    "dev": "vite dev",
    "build": "vite build"
  },
  "dependencies": {
    "@melt-ui/svelte": "^0.86.6",
    "@prisma/client": "^6.10.1",
    "@sveltejs/adapter-vercel": "^5.7.2"
  }
}
````

## File: .svelte-kit/generated/server/internal.js
````javascript
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body data-sveltekit-preload-data=\"hover\">\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<title>" + message + "</title>\r\n\r\n\t\t<style>\r\n\t\t\tbody {\r\n\t\t\t\t--bg: white;\r\n\t\t\t\t--fg: #222;\r\n\t\t\t\t--divider: #ccc;\r\n\t\t\t\tbackground: var(--bg);\r\n\t\t\t\tcolor: var(--fg);\r\n\t\t\t\tfont-family:\r\n\t\t\t\t\tsystem-ui,\r\n\t\t\t\t\t-apple-system,\r\n\t\t\t\t\tBlinkMacSystemFont,\r\n\t\t\t\t\t'Segoe UI',\r\n\t\t\t\t\tRoboto,\r\n\t\t\t\t\tOxygen,\r\n\t\t\t\t\tUbuntu,\r\n\t\t\t\t\tCantarell,\r\n\t\t\t\t\t'Open Sans',\r\n\t\t\t\t\t'Helvetica Neue',\r\n\t\t\t\t\tsans-serif;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\theight: 100vh;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.error {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tmax-width: 32rem;\r\n\t\t\t\tmargin: 0 1rem;\r\n\t\t\t}\r\n\r\n\t\t\t.status {\r\n\t\t\t\tfont-weight: 200;\r\n\t\t\t\tfont-size: 3rem;\r\n\t\t\t\tline-height: 1;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\ttop: -0.05rem;\r\n\t\t\t}\r\n\r\n\t\t\t.message {\r\n\t\t\t\tborder-left: 1px solid var(--divider);\r\n\t\t\t\tpadding: 0 0 0 1rem;\r\n\t\t\t\tmargin: 0 0 0 1rem;\r\n\t\t\t\tmin-height: 2.5rem;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\r\n\t\t\t.message h1 {\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t@media (prefers-color-scheme: dark) {\r\n\t\t\t\tbody {\r\n\t\t\t\t\t--bg: #222;\r\n\t\t\t\t\t--fg: #ddd;\r\n\t\t\t\t\t--divider: #666;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"error\">\r\n\t\t\t<span class=\"status\">" + status + "</span>\r\n\t\t\t<div class=\"message\">\r\n\t\t\t\t<h1>" + message + "</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</body>\r\n</html>\r\n"
	},
	version_hash: "bacgpi"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
````
