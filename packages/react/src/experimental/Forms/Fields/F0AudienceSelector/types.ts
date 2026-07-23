import type { InputFieldProps } from "@/components/F0InputField"
import type {
  DataAdapter,
  FiltersDefinition,
  RecordType,
} from "@/hooks/datasource"
import type { WithDataTestIdProps } from "@/lib/data-testid"

/**
 * The kinds of entities an audience can be built from: a person or an atomic
 * group of people. Group kinds mirror the Sharing v2 grantee vocabulary of the
 * Resource Registry so selections map losslessly onto share grantees.
 */
export const audienceEntityKinds = [
  "individual",
  "team",
  "legal_entity",
  "workplace",
  "role",
  "permission_group",
  "everyone",
] as const

export type AudienceEntityKind = (typeof audienceEntityKinds)[number]

export type AudienceGroupKind = Exclude<AudienceEntityKind, "individual">

export type F0AudienceIndividual = {
  kind: "individual"
  id: string
  name: string
  firstName: string
  lastName: string
  /** Avatar image url */
  src?: string
  /** Secondary line in the option row, e.g. the job title */
  subtitle?: string
}

export type F0AudienceGroup = {
  kind: AudienceGroupKind
  id: string
  name: string
  /** When provided, renders the localized "{{count}} people · {{kind}}" subtitle */
  memberCount?: number
}

/**
 * An atomic selectable entity: a person or a group of people. Identity is
 * COMPOSITE (kind + id) — ids may collide across kinds. Groups are selected
 * atomically (a team chip), never expanded into their members.
 */
export type F0AudienceEntity = F0AudienceIndividual | F0AudienceGroup

export type F0AudienceOption = {
  entity: F0AudienceEntity
  /**
   * When set, the option renders disabled (not selectable) and this text
   * REPLACES the subtitle — e.g. "Already has access", "That's you".
   * The copy is domain knowledge, so it is always consumer-provided.
   */
  disabledReason?: string
}

/** Composite selection key, exported for consumer-side dedupe and lookups */
export const audienceEntityKey = (
  entity: Pick<F0AudienceEntity, "kind" | "id">
): string => `${entity.kind}:${entity.id}`

/**
 * Narrowed datasource contract: async fetching plus search behavior only.
 * `fetchData` receives the DEBOUNCED query in `options.search` and must return
 * ONE flat list with all kinds interleaved — ranking is owned by the
 * consumer/backend, the component renders records in the given order.
 * It is never called with an empty query (the `suggestions` prop covers that
 * state). Pagination: `infinite-scroll` or `no-pagination` only.
 */
export type F0AudienceSelectorSource<R extends RecordType = RecordType> = {
  dataAdapter: DataAdapter<R, FiltersDefinition>
  search?: {
    /** Debounce applied to the query before fetching @default 300 */
    debounceTime?: number
  }
}

export type F0AudienceSelectorProps<R extends RecordType = RecordType> = {
  source: F0AudienceSelectorSource<R>
  /** Maps a fetched record to the entity contract (mirrors F0Select's `mapOptions`) */
  mapEntity: (item: R) => F0AudienceOption

  /**
   * Selected entities, rendered as removable chips inside the field in
   * insertion order (controlled). Entities are self-contained so chips can
   * survive query clearing without any id lookup.
   */
  value: F0AudienceEntity[]
  onChange: (value: F0AudienceEntity[]) => void

  /**
   * Shown while the query is empty (e.g. direct reports and their team).
   * Without suggestions, an empty query renders the "Start typing to search"
   * empty state — the data adapter is never called with an empty query.
   */
  suggestions?: F0AudienceOption[]

  /**
   * Rendered right-aligned inside the field, only while at least one entity
   * is selected — intended for a batch role dropdown. A slot rather than a
   * curated prop: role semantics belong to the consumer.
   */
  trailing?: React.ReactNode

  /**
   * Warning alert below the field, hidden while the dropdown is open — e.g.
   * "Sharing outside your reporting line". The computation is consumer-side.
   */
  warning?: {
    title: string
    description?: string
  }

  onOpenChange?: (open: boolean) => void
  /** Overrides the localized "No matches found" empty state */
  searchEmptyMessage?: string
} & Pick<
  InputFieldProps<string>,
  "label" | "hideLabel" | "placeholder" | "disabled" | "loading" | "error"
> &
  WithDataTestIdProps
