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
