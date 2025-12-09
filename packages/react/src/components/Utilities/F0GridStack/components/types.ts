// Import gridstack to ensure original types are loaded before augmentation
import type {} from "gridstack"

declare module "gridstack" {
  // Augment GridStackWidget interface - only add our custom properties
  // TypeScript will merge these with the original interface
  interface GridStackWidget {
    id?: string
    allowedSizes?: Array<{ w: number; h: number }>
    meta?: Record<string, unknown>
  }

  // Augment GridStackNode interface - only add our custom property
  interface GridStackNode {
    allowedSizes?: Array<{ w: number; h: number }>
  }
}
