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
