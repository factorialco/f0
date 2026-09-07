import { createContext } from "react"

/**
 * The option the field's arrows are on, for a select whose trigger is the
 * search field. Rows read it instead of holding focus: the caret stays in
 * the field, and hovering a row makes it active the same way the arrows do.
 */
export const ActiveOptionContext = createContext<{
  value: string | undefined
  setActive: (value: string) => void
} | null>(null)
