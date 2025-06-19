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
