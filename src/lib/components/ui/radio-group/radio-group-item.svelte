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
