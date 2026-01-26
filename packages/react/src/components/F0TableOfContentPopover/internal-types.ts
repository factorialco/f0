import {
  TOCItem,
  TOCProps,
} from "../../experimental/Navigation/F0TableOfContent"

export type PopupSize = "sm" | "md" | "lg"
export type TableOfContentPopoverVariant = "dark" | "light"

export interface F0TableOfContentPopoverProps extends Omit<
  TOCProps,
  "sortable" | "onReorder" | "showSearchBox" | "title" | "hideChildrenCounter"
> {
  /** Optional title displayed at the top of the menu popup */
  title?: string
  /** Alignment of the collapsed bars (left or right) */
  barsAlign?: "left" | "right"
  /** Whether sections can be collapsed/expanded */
  collapsible?: boolean
  /** Show the count of children items next to parent items */
  showChildrenCounter?: boolean
  /** Maximum height of the popup: sm (max 240px), md (max 400px), lg (max 600px). Content auto-adjusts within limit. */
  size?: PopupSize
  /** Visual variant: "dark" for light backgrounds (default), "light" for dark backgrounds */
  variant?: TableOfContentPopoverVariant
}

export type { TOCItem as TableOfContentPopoverItem }
