import { ReactNode, useLayoutEffect, useRef } from "react"

type ExpandedContentRowProps = {
  id: string
  toggleId: string
  children: ReactNode
}

/**
 * Deliberately larger than any real column count. A cell's span is clamped to
 * the columns that actually exist, and counting them here does not survive
 * contact with this table: a cell spanning the exact count still stops at the
 * first column — as F0's own full-width rows (the sticky sentinel, the add-row
 * footer) do today. Over-spanning fills the row exactly, with no overflow.
 */
const SPAN_EVERY_COLUMN = 1000

/**
 * A row's expanded content, as a full-width row of its own.
 *
 * Deliberately one cell spanning every column: `frozenColumns` pins individual
 * cells, and a single spanning cell cannot be pinned in part, so the panel
 * scrolls with the table body rather than being cut at the frozen boundary.
 */
export const ExpandedContentRow = ({
  id,
  toggleId,
  children,
}: ExpandedContentRowProps) => {
  const contentRef = useRef<HTMLTableCellElement>(null)

  // The panel can close itself through `context.collapse` — including from the
  // control that currently holds focus. Without this, focus falls to <body>.
  useLayoutEffect(
    () => () => {
      if (contentRef.current?.contains(document.activeElement)) {
        document.getElementById(toggleId)?.focus()
      }
    },
    [toggleId]
  )

  return (
    <tr data-expanded-content="true" className="border-none">
      <td
        id={id}
        ref={contentRef}
        colSpan={SPAN_EVERY_COLUMN}
        className="p-0 align-top"
      >
        {children}
      </td>
    </tr>
  )
}
