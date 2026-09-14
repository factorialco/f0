// The empty import makes this file a module, so the block below augments
// gridstack's types instead of replacing them.
// oxlint-disable-next-line import/no-empty-named-blocks
import type {} from "gridstack"

declare module "gridstack" {
  // Augment GridStackWidget interface - only add our custom properties
  // TypeScript will merge these with the original interface
  interface GridStackWidget {
    id?: string
    allowedSizes?: { w: number; h: number }[]
    meta?: Record<string, unknown>
  }

  // Augment GridStackNode interface - only add our custom property
  interface GridStackNode {
    allowedSizes?: { w: number; h: number }[]
  }
}
