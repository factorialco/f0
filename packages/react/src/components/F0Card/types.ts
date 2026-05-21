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
}

type CardAlertNonDismissible = CardAlertBase & {
  dismissible?: false
  onDismiss?: never
}

export type CardAlertProps = CardAlertDismissible | CardAlertNonDismissible

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
