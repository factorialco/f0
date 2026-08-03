import { F0AvatarPerson, F0Icon } from "@factorialco/f0-react"
import type { ModuleId } from "@factorialco/f0-react"
import { CalendarArrowRight } from "@factorialco/f0-react/icons/app"

import { avatarFor } from "@/fixtures/helpers"

type InboxTask = {
  id: string
  text: string
  module: ModuleId
  avatarSeed: string
  date: string
}

// Matches the Inbox window from the "Home - Vision" Figma file
// (node 1044:8164): person avatar with a module badge, task text,
// and a due-date tag.
const inboxTasks: InboxTask[] = [
  {
    id: "pending-issues",
    text: "Manage pending issues",
    module: "tasks",
    avatarSeed: "inbox-1",
    date: "15/05/2025",
  },
  {
    id: "climate-survey",
    text: 'Take the "Employee Climate Survey"',
    module: "engagement",
    avatarSeed: "inbox-2",
    date: "15/05/2025",
  },
  {
    id: "contract-ending",
    text: "Example contract x will end in less than a week.",
    module: "documents",
    avatarSeed: "inbox-3",
    date: "15/05/2025",
  },
  {
    id: "performance-review",
    text: "Complete the performance review",
    module: "performance",
    avatarSeed: "inbox-4",
    date: "15/05/2025",
  },
]

function DateTag({ date }: { date: string }) {
  return (
    <span className="flex shrink-0 items-center gap-0.5 rounded-full border border-solid border-f1-border-secondary py-0.5 pl-1.5 pr-2">
      <F0Icon icon={CalendarArrowRight} size="sm" color="secondary" />
      <span className="text-base font-medium text-f1-foreground">{date}</span>
    </span>
  )
}

export function InboxWindow() {
  return (
    <div className="flex flex-col gap-5 px-3 pb-3 pt-1">
      {inboxTasks.map((task) => (
        <div key={task.id} className="flex w-full items-center gap-2">
          <F0AvatarPerson
            firstName={task.avatarSeed}
            lastName="."
            src={avatarFor(task.avatarSeed)}
            size="lg"
            badge={{ type: "module", module: task.module }}
          />
          <span className="min-w-0 flex-1 truncate text-base font-medium text-f1-foreground">
            {task.text}
          </span>
          <DateTag date={task.date} />
        </div>
      ))}
    </div>
  )
}
