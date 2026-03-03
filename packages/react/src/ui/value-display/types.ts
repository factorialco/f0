import { TranslationsType } from "@/lib/providers/i18n/i18n-provider-defaults"

export type ValueDisplayVisualizationType =
  | "table"
  | "card"
  | "list"
  // & {} avoids the type widening to string and let the IDE do the autocomplete of the fixed values
  | (string & {})

export type ValueDisplayRendererContext = {
  visualization: ValueDisplayVisualizationType
  i18n: TranslationsType
}

/**
 * Props contract that every editable value-display component must implement.
 * The generic `V` allows type-specific editors (e.g. `string` for text, `Date` for date pickers).
 */
export type ValueDisplayEditorProps<V = string> = {
  label: string
  value: V
  align?: "left" | "right"
  error?: string
  loading?: boolean
  onChange: (value: V) => void
}
