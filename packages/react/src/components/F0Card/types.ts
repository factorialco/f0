import { IconType } from "@/components/F0Icon"
import { valueDisplayRenderers } from "@/ui/value-display"

import { CardPropertyType } from "./components/CardMetadata"

export const cardAlertVariants = [
  "info",
  "warning",
  "critical",
  "positive",
] as const

export type CardAlertVariant = (typeof cardAlertVariants)[number]

interface CardAlertBase {
  /**
   * The visual variant of the alert, which determines the color scheme and default icon.
   */
  variant: CardAlertVariant
  /**
   * The title text displayed in the alert banner.
   */
  title: string
  /**
   * Optional custom icon. When omitted, defaults to the icon that best represents the variant.
   */
  icon?: IconType
  /**
   * Controls whether the alert is visible. Defaults to true.
   * Use this together with onDismiss for controlled dismiss behaviour:
   *   alert={{ ..., visible, dismissible: true, onDismiss: () => setVisible(false) }}
   */
  visible?: boolean
}

type CardAlertDismissible = CardAlertBase & {
  /** Renders a dismiss (×) button. Requires onDismiss. */
  dismissible: true
  /**
   * Called when the dismiss (×) button is clicked.
   * The consumer is responsible for hiding the alert (e.g. by setting visible: false).
   */
  onDismiss: () => void
  action?: never
}

/**
 * An optional action button rendered in the alert header.
 * Mutually exclusive with `dismissible` — only one can be shown at a time.
 * Supply either `onClick` (handler) or `href` (navigation link), not both.
 */
export type CardAlertAction = {
  /** Label text for the action button. */
  label: string
  /** Whether the action button is disabled. */
  disabled?: boolean
} & (
  | {
      /** Called when the action button is clicked. */
      onClick: () => void
      href?: never
    }
  | {
      /** URL to navigate to when the action button is clicked. */
      href: string
      onClick?: never
    }
)

type CardAlertWithAction = CardAlertBase & {
  dismissible?: never
  onDismiss?: never
  /** Action button rendered in the alert header. Mutually exclusive with `dismissible`. */
  action: CardAlertAction
}

type CardAlertNonDismissible = CardAlertBase & {
  dismissible?: false
  onDismiss?: never
  action?: never
}

export type CardAlertProps =
  | CardAlertDismissible
  | CardAlertWithAction
  | CardAlertNonDismissible

/**
 * Card metadata property renderers.
 * Each metadata item consists of an icon and a property with its data.
 */
export type CardMetadataProperty = {
  [K in CardPropertyType]: {
    type: K
    label: string
    value: Parameters<(typeof valueDisplayRenderers)[K]>[0]
  }
}[CardPropertyType]

export type CardMetadata =
  | {
      icon: IconType
      property: Exclude<CardMetadataProperty, { type: "file" }>
    }
  | {
      property: Extract<CardMetadataProperty, { type: "file" }>
    }

/**
 * Bookmark (save) toggle rendered as an icon button in the card's options overlay.
 * Shows an outline bookmark icon when not bookmarked and a filled one when bookmarked,
 * giving an at-a-glance indication of the saved state.
 */
export interface CardBookmark {
  /**
   * Whether the card is currently bookmarked (saved).
   * Controls the filled vs. outline icon and keeps the toggle visible while active.
   */
  bookmarked: boolean
  /**
   * Called with the next bookmarked state when the user toggles the bookmark.
   */
  onBookmarkChange: (bookmarked: boolean) => void
  /**
   * Accessible label for the toggle button (e.g. "Save product").
   * Falls back to the card `title` when omitted.
   */
  label?: string
}
