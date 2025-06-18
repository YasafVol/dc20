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
Finally, let's install the UI primitives library and verify the UI foundation.

1.  **Install the package:**
    ```bash
    npm install @melt-ui/svelte
    ```
    *(Note: While Melt UI provides builders for complex components, a dedicated `createButton` builder for simple buttons does not appear to be available in the current version. We will verify Melt UI's installation and the overall UI foundation using a standard HTML button styled with Tailwind.)*

2.  **Verification:** We will verify that Melt UI has been installed (available for use with its other builders later) and that our styling setup works correctly with standard interactive elements. We will add a simple, functional, and styled HTML button to our test page.
    ```svelte
    <!-- src/routes/test-ui/+page.svelte -->
    <h1 class="text-2xl p-4 text-yellow-accent">UI Test Page</h1>
    <div class="bg-purple-primary w-24 h-24 m-4"></div>

    <button
      class="p-2 px-4 m-4 bg-orange-secondary text-light-text-primary rounded-lg font-semibold hover:bg-opacity-80"
      on:click={() => alert('Styled HTML button works!')}>
      Test Styled Button
    </button>
    ```
    Navigate to the `/test-ui` page. You should see a styled orange button. Clicking it should trigger an alert. This proves that Melt UI is installed and that standard HTML elements can be styled correctly with our TailwindCSS theme, confirming the UI foundation is solid.

## IV. Stage Outcome
Upon successful completion of all steps, we will have:
1.  A functional SvelteKit project.
2.  TailwindCSS installed and configured with our project's custom theme.
3.  The Inter font loaded and applied.
4.  Melt UI installed and the overall UI foundation verified.

The project is now in a known-good state. The foundational UI layer is proven. We can now proceed with confidence to implement the application logic and components described in `projectPlan/stage1.md`.
