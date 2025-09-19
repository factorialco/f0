export type SortingsDefinition = Record<
  string,
  {
    label: string
  }
>

export type SortOrder = "asc" | "desc"

export type SortingsState<Definition extends SortingsDefinition> = {
  field: keyof Definition
  order: SortOrder
} | null

/**
 * Type helper to extract keys from a SortingsDefinition
 */
export type SortingKey<Definition extends SortingsDefinition> =
  Definition extends readonly string[] ? Definition[number] : keyof Definition

/**
 * Type helper to create a multiple sortings state (the main sorting and the grouping sorting)
 */
export type SortingsStateMultiple = {
  field: string
  order: "asc" | "desc"
}[]
