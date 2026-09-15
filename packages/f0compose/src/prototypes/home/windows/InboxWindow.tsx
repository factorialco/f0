import type { ModuleId } from "@factorialco/f0-react"

import { WidgetInboxList } from "@factorialco/f0-react/dist/experimental"

/**
 * The Inbox widget, rendered by f0's OWN `WidgetInboxList` (Angel,
 * 2026-09-15: the hand-copied rows had drifted from production's
 * paddings). Production's Inbox spec feeds the same list, so the module
 * avatar, the title/subtitle pair and the row padding are production's.
 */
type InboxTask = {
  id: string
  title: string
  subtitle: string
  module: ModuleId
}

const inboxTasks: InboxTask[] = [
  {
    id: "pending-issues",
    title: "Manage pending issues",
    subtitle: "Due 15 May",
    module: "tasks",
  },
  {
    id: "climate-survey",
    title: 'Take the "Employee Climate Survey"',
    subtitle: "Due 15 May",
    module: "engagement",
  },
  {
    id: "contract-ending",
    title: "Example contract x will end in less than a week",
    subtitle: "Due 15 May",
    module: "documents",
  },
  {
    id: "performance-review",
    title: "Complete the performance review",
    subtitle: "Due 15 May",
    module: "performance",
  },
]

export function InboxWindow() {
  return (
    <div className="px-1 pb-2">
      <WidgetInboxList items={inboxTasks} showAllItems />
    </div>
  )
}
