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
