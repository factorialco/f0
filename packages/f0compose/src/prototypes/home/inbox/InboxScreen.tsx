import { useSearchParams } from "react-router-dom"

import { taskTitle } from "./inboxTasks"
import { TicketWindow } from "./TicketWindow"

/**
 * The Inbox canvas: the item you picked, or a line telling you to pick
 * one (Angel, 2026-09-14 — the rows are the second level, and clicking
 * one "should replace the empty state with whatever you opened"). No
 * illustration and no actions: there is nothing to do here that the list
 * beside it does not already offer.
 */
export function InboxScreen() {
  const [searchParams] = useSearchParams()
  const item = searchParams.get("item")
  if (item)
    return (
      <div className="flex h-full w-full min-w-0 flex-col">
        <TicketWindow taskId={item} title={taskTitle(item)} />
      </div>
    )
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center p-6">
      <p className="text-base text-f1-foreground-secondary">
        Select an item to read it.
      </p>
    </div>
  )
}
