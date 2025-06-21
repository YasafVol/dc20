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
