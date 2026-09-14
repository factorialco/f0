import { OneEmptyState } from "@factorialco/f0-react"

/**
 * The Inbox canvas is a WAITING state, not a second list (Angel,
 * 2026-09-14: "el contenido del inbox es otra vez una lista de cosas,
 * eso no tiene sentido"). The rows live in the second-level panel; this
 * side holds whatever you pick from it, and says so until you do.
 *
 * No actions: there is nothing to do here that the panel does not already
 * offer, and a button would only be a second way to do it.
 */
export function InboxScreen() {
  return (
    <div className="flex h-full w-full flex-1 flex-col p-6">
      <OneEmptyState
        emoji="📥"
        title="Nothing open"
        description="Select a message from the list to review it here."
      />
    </div>
  )
}
