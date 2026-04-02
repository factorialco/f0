export type SummaryType = "sum"

export type SummariesDefinition = Record<
  string,
  {
    type: SummaryType
  }
>

/**
 * Type helper to extract keys from a SummaryDefinition
 */
export type SummaryKey<Definition extends SummariesDefinition> =
  Definition extends readonly string[] ? Definition[number] : keyof Definition
