/** Internal job catalog role */
export type MappingStatus = "unmapped" | "suggested" | "confirmed"

export type InternalRole = {
  id: string
  title: string
  function: string
  family: string
  level: string
  status: MappingStatus
  suggestedMercerCode?: string
  confirmedMercerCode?: string
  confidence?: number
}

/** Mercer role from the purchased catalog */
export type MercerRole = {
  code: string
  title: string
  family: string
  level: string
  description: string
}

/** Suggested mapping entry (keyed by internal role id) */
export type SuggestedMapping = {
  mercerCode: string
  confidence: number
}

export type SuggestedMappings = Record<string, SuggestedMapping>
