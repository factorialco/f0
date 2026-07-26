import type { F0AudienceEntity } from "@/experimental/Forms/Fields/F0AudienceSelector"
import type { WithDataTestIdProps } from "@/lib/data-testid"

export type F0AudienceMember = {
  id: string
  firstName: string
  lastName: string
  /** Avatar image url */
  src?: string
  /** Secondary line, e.g. the job title */
  subtitle?: string
}

export type F0AudienceListItemProps = {
  entity: F0AudienceEntity
  /** Appends the localized "(You)" suffix to the name */
  isYou?: boolean
  /**
   * Renders a warning chip next to the name with this text as its tooltip —
   * e.g. "Outside your reporting line". The copy is consumer-provided.
   */
  warning?: string
  /** Right-aligned slot: a role dropdown, a static role label, a pending tag… */
  right?: React.ReactNode
  /**
   * Group kinds only: presence makes the row expandable. Members are fetched
   * lazily ONCE on first expand and cached for the lifetime of the row.
   */
  members?: {
    fetch: () => Promise<F0AudienceMember[]>
    /** Trailing note, e.g. "New members in this group automatically gain access." */
    note?: string
  }
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
} & WithDataTestIdProps
