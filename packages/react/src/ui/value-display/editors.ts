import type { ComponentType } from "react"

import type { ValueDisplayRendererType } from "./renderers"
import type { ValueDisplayEditorProps } from "./types"
import { TextEditor } from "./types/text"

/**
 * Registry that maps value-display types to their editable cell components.
 * Not every type needs an editor — only types with editing support are registered here.
 *
 * To add a new editable type:
 *  1. Create the editor component in `types/<type>/<type>-editor.tsx`
 *  2. Export it from `types/<type>/index.tsx`
 *  3. Register it here
 */
export const valueDisplayEditors = {
  text: TextEditor,
} as const satisfies Partial<
  Record<
    ValueDisplayRendererType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- V is invariant in ValueDisplayEditorProps (covariant in value, contravariant in onChange), so no concrete type can serve as a universal supertype here.
    ComponentType<ValueDisplayEditorProps<any>>
  >
>

export type EditableValueDisplayType = keyof typeof valueDisplayEditors
