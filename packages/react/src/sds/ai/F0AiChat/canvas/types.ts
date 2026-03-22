import type { ReactNode } from "react"

import type { CanvasContentBase } from "../types"

/**
 * Contract for a canvas entity type.
 *
 * Each entity (dashboard, survey, goal, job-posting…) implements this
 * interface and is added to the `canvasEntities` record in `registry.ts`.
 *
 * To add a new entity type:
 * 1. Create a folder in `canvas/entities/<your-entity>/`
 * 2. Define a type extending `CanvasContentBase` in `types.ts`
 * 3. Implement and export `CanvasEntityDefinition` in `index.tsx`
 * 4. Add the entity to the record in `canvas/registry.ts`
 */
export type CanvasEntityDefinition<
  T extends CanvasContentBase = CanvasContentBase,
> = {
  /** Must match the `type` discriminant on the content object */
  type: T["type"]
  /** Renders the main body of the canvas panel */
  renderContent: (props: { content: T; refreshKey: number }) => ReactNode
  /** Renders the full header (title, actions, close button) */
  renderHeader: (props: { content: T; onClose: () => void }) => ReactNode
  /**
   * Optional wrapper providing entity-scoped context around
   * both header and body (e.g. shared edit-mode state).
   */
  wrapper?: (props: { content: T; children: ReactNode }) => ReactNode
}
