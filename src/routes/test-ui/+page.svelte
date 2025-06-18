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
