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
- The recommended way to start a new SvelteKit project is using `npm create svelte@latest my-app`.
- For reference, the source for `create-svelte` can be found here: https://github.com/sveltejs/kit/tree/main/packages/create-svelte
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
