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