import { F0Text } from "@factorialco/f0-react"

import { requestWindow } from "./one/conversationStore"

/**
 * A canvas section header with an optional "View all (n)" link on the
 * right (Figma 2621:22725, added by Oskar 2026-08-31).
 *
 * Shared by both profiles: the admin "Needs you" queue and the employee
 * "For you" list are the same shape, and the link goes to the same place
 * — the Inbox widget, which is where ALL the tasks live. The canvas lists
 * only the top few, so without this there was no route to the rest.
 *
 * The link matches the label's type (12px medium, secondary) rather than
 * shouting as a button: it is a quiet way out of a bounded list.
 */
export function SectionHeader({
  title,
  viewAllCount,
}: {
  title: string
  viewAllCount?: number
}) {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <F0Text content={title} variant="label" />
      {viewAllCount !== undefined && (
        <button
          onClick={() => requestWindow("inbox")}
          // `text-base` (14px in f0's theme) + leading-5 matches F0Text's
          // label metrics exactly, so the link sits on the label's baseline
          // instead of 2px above it. Secondary colour keeps it the quieter
          // half of the row.
          className="f0c-ease-hover shrink-0 cursor-pointer text-base font-medium leading-5 text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground"
        >
          View all ({viewAllCount})
        </button>
      )}
    </div>
  )
}
