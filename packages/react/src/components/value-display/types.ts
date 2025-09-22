export type ValueDisplayVisualizationType =
  | "table"
  | "card"
  | "list"
  // & {} avoids the type widening to string and let the IDE do the autocomplete of the fixed values
  | (string & {})
