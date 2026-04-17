import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

import type { DetailsItemContent } from "@/experimental/Lists/DetailsItem"

export interface FormCardValueFormatterEntry<T = unknown> {
  /** Scope to a specific form. Omit to apply to all forms. */
  formName?: string
  /** Scope to a specific custom field name. Omit to apply to all fields. */
  customFieldName?: string
  /** Format function. Return `undefined` to fall back to built-in formatting. */
  format: (
    value: T,
    meta: { key: string; fieldType?: string; customFieldName?: string }
  ) => DetailsItemContent | DetailsItemContent[] | undefined
}

type SetFormCardValueFormatter = <T = unknown>(
  entry: FormCardValueFormatterEntry<T>
) => void

interface FormCardValueFormatterContextValue {
  formatters: FormCardValueFormatterEntry[]
  setFormCardValueFormatter: SetFormCardValueFormatter
}

const FormCardValueFormatterContext =
  createContext<FormCardValueFormatterContextValue | null>(null)

export function FormCardValueFormatterProvider({
  children,
}: {
  children: ReactNode
}) {
  const [version, setVersion] = useState(0)
  const formattersRef = useRef<FormCardValueFormatterEntry[]>([])

  const setFormCardValueFormatter = useCallback(
    <T = unknown>(entry: FormCardValueFormatterEntry<T>) => {
      const entries = formattersRef.current
      const idx = entries.findIndex(
        (e) =>
          e.formName === entry.formName &&
          e.customFieldName === entry.customFieldName
      )
      const typed = entry as FormCardValueFormatterEntry
      if (idx >= 0) {
        entries[idx] = typed
      } else {
        entries.push(typed)
      }
      setVersion((v) => v + 1)
    },
    []
  )

  const value = useMemo(
    () => ({
      formatters: formattersRef.current,
      setFormCardValueFormatter,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setFormCardValueFormatter, version]
  )

  return (
    <FormCardValueFormatterContext.Provider value={value}>
      {children}
    </FormCardValueFormatterContext.Provider>
  )
}

/**
 * Returns a resolved formatter for the given `formName`.
 * Matches registered formatters by specificity:
 *   formName + customFieldName > formName only > customFieldName only > global
 * Returns `null` when no provider is present or no formatters are registered.
 */
export function useFormCardValueFormatter(
  formName: string
):
  | ((
      key: string,
      value: unknown,
      meta: { fieldType?: string; customFieldName?: string }
    ) => DetailsItemContent | DetailsItemContent[] | undefined)
  | null {
  const context = useContext(FormCardValueFormatterContext)
  const formatters = context?.formatters

  return useMemo(() => {
    if (!formatters || formatters.length === 0) return null

    return (
      key: string,
      value: unknown,
      meta: { fieldType?: string; customFieldName?: string }
    ) => {
      let bestMatch: FormCardValueFormatterEntry | undefined
      let bestScore = -1

      for (const entry of formatters) {
        const formMatch =
          entry.formName === undefined || entry.formName === formName
        const fieldMatch =
          entry.customFieldName === undefined ||
          entry.customFieldName === meta.customFieldName

        if (!formMatch || !fieldMatch) continue

        // Score: +2 for formName match, +1 for customFieldName match
        let score = 0
        if (entry.formName !== undefined) score += 2
        if (entry.customFieldName !== undefined) score += 1

        if (score > bestScore) {
          bestScore = score
          bestMatch = entry
        }
      }

      if (!bestMatch) return undefined
      return bestMatch.format(value, { key, ...meta })
    }
  }, [formatters, formName])
}

/**
 * Returns a setter to register value formatters used by FormCard.
 *
 * ```ts
 * const setFormatter = useSetFormCardValueFormatter()
 *
 * // Global formatter (all forms, all fields)
 * setFormatter({ format: (value) => ({ type: "item", text: String(value) }) })
 *
 * // Scoped to a form
 * setFormatter({ formName: "create-task", format: (value) => ... })
 *
 * // Scoped to a custom field name (across all forms)
 * setFormatter({ customFieldName: "assignees_selector", format: (value) => ... })
 *
 * // Scoped to both
 * setFormatter({ formName: "create-task", customFieldName: "assignees_selector", format: (value) => ... })
 * ```
 */
export function useSetFormCardValueFormatter(): SetFormCardValueFormatter {
  const context = useContext(FormCardValueFormatterContext)
  if (!context) {
    throw new Error(
      "useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider"
    )
  }
  return context.setFormCardValueFormatter
}
