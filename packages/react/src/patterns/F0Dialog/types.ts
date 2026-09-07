import { IconType } from "@/components/F0Icon"
import { NavigationProps } from "@/experimental/Navigation/Header/PageNavigation"

export const dialogPositions = [
  "center",
  "left",
  "right",
  "fullscreen",
] as const
export type DialogPosition = (typeof dialogPositions)[number]

export const dialogWidths = ["sm", "md", "lg", "xl"] as const
export type DialogWidth = (typeof dialogWidths)[number]

/**
 * A FOOTER ACTION IS A ROUTE OR A HANDLER.
 *
 * `href` makes the button a real link — cmd/middle-clickable, openable in a new
 * tab, routed through the app's link provider — which is what an action that
 * LEAVES the dialog should be: "Go to post", "Open in Contracts". `onClick` is
 * for the ones that act on what the dialog is showing and stay put.
 *
 * Both together is a link that also reports the press (analytics, closing the
 * dialog behind it). The same shape `DialogControls`' resource `url` already
 * takes, for the same reason.
 */
type F0DialogActionTarget =
  | { href: string; onClick?: () => void }
  | { href?: never; onClick: () => void }

export type F0DialogPrimaryAction = {
  label: string
  icon?: IconType
  iconPosition?: "left" | "right"
  disabled?: boolean
  loading?: boolean
} & F0DialogActionTarget

export type F0DialogSecondaryAction = {
  label: string
  icon?: IconType
  iconPosition?: "left" | "right"
  disabled?: boolean
  loading?: boolean
} & F0DialogActionTarget

// Shared base for action items used in multi-action dropdowns.
// Note: disabled/loading on items are reserved for future use —
// F0ButtonDropdown does not yet support per-item disabled/loading states.
type F0DialogActionItem = {
  value: string
  label: string
  icon?: IconType
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export type F0DialogPrimaryActionItem = F0DialogActionItem
export type F0DialogSecondaryActionItem = F0DialogActionItem

export type F0DialogActionsProps = {
  primaryAction?: F0DialogPrimaryAction | F0DialogPrimaryActionItem[]
  secondaryAction?: F0DialogSecondaryAction | F0DialogSecondaryActionItem[]
}

export type DialogControls =
  | {
      kind: "resource"
      /**
       * "Open detail" affordance. Provide `url` to render a link to the
       * resource's full-page view (routed through the app's `LinkProvider`,
       * so it is cmd/middle-clickable) — typically the active item's
       * `itemUrl` from `useDataCollectionItemNavigation`. Provide `onClick`
       * for imperative expansion. `url` wins when both are set.
       */
      expand?: { label: string; url?: string; onClick?: () => void }
      navigation?: NavigationProps
    }
  | {
      kind: "back"
      label: string
      onClick: () => void
    }
