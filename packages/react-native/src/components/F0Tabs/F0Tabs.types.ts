import type { Dispatch } from "react"

/**
 * A single tab item passed to `F0Tabs`.
 * Mirrors the web `TabItem` type (minus `href` and `DataAttributes`).
 */
export type F0TabItem = {
  id: string
  label: string
  /** Accepted for API parity with web `index` prop; currently not used for sorting in React Native. */
  index?: boolean
  /** Visual variant for the tab label. Accepted for API parity; `"upsell"` is not visually distinct in v1. */
  variant?: "default" | "upsell"
  /** When `true`, this tab becomes non-interactive and renders with disabled visual treatment. */
  disabled?: boolean
  /** Optional callback invoked when this tab is pressed, in addition to the tab state change. */
  onPress?: () => void
}

export const F0_TABS_CONTENT_INSETS = ["sm", "md", "lg", "xl", "none"] as const

export type F0TabsContentInset = (typeof F0_TABS_CONTENT_INSETS)[number]

/**
 * Props for `F0Tabs`.
 * Mirrors the web `TabsProps` exactly.
 *
 * - Primary (`secondary=false`): animated pill background + sliding underline below the active tab.
 * - Secondary (`secondary=true`): animated pill background only, no underline.
 */
export interface F0TabsProps {
  tabs: F0TabItem[]
  /** Controlled active tab id. When provided the component is in controlled mode. */
  activeTabId?: string
  /** Called with the new tab id when a tab is pressed. Mirrors the web `setActiveTabId` prop. */
  setActiveTabId?: Dispatch<string>
  /** When `true`, uses the secondary visual style (pill only, no underline). */
  secondary?: boolean
  /** When `true`, all tabs become non-interactive and render with disabled visual treatment. */
  disabled?: boolean
  /** When `true`, distributes tabs evenly across all available width. */
  fullWidth?: boolean
  /** Separator inset mode: `"full"` spans edge to edge, `"content"` aligns with tab content. */
  separatorInset?: "full" | "content"
  /** Separator width mode: `"tabs"` matches tabs content width, `"container"` fills available tabs container width. */
  separatorWidth?: "tabs" | "container"
  /** Horizontal inset token for tab content and `separatorInset="content"`. */
  contentInset?: F0TabsContentInset
  /** When `true`, renders only the first tab as plain text (no interaction, no indicator). */
  embedded?: boolean
}
