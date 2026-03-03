import type { ComponentType } from "react"

import type { ValueDisplayEditorProps } from "./types"
import { TextEditor } from "./types/text"

/**
 * Maps each editable value-display type to the value type its editor operates on.
 * Extend this when adding a new editor (e.g. `date: Date`, `select: string`).
 */
type ValueDisplayEditorValueMap = {
  text: string
}

/**
 * Registry that maps value-display types to their editable cell components.
 * Not every type needs an editor — only types with editing support are registered here.
 *
 * To add a new editable type:
 *  1. Add its value type to `ValueDisplayEditorValueMap` above
 *  2. Create the editor component in `types/<type>/<type>-editor.tsx`
 *  3. Export it from `types/<type>/index.tsx`
 *  4. Register it here
 */
export const valueDisplayEditors: {
  [K in keyof ValueDisplayEditorValueMap]: ComponentType<
    ValueDisplayEditorProps<ValueDisplayEditorValueMap[K]>
  >
} = {
  text: TextEditor,
}

export type EditableValueDisplayType = keyof typeof valueDisplayEditors
