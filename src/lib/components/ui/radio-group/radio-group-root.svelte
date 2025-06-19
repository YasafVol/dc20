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
