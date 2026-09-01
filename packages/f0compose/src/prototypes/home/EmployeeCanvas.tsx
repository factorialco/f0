import { F0Icon, IconType, ModuleId } from "@factorialco/f0-react"
import {
  ChevronRight,
  FileSigned,
  Messages,
  Money,
  PalmTree,
  Schedule,
  Wallet,
} from "@factorialco/f0-react/icons/app"

import { INBOX_TOTAL } from "./fixtures"
import { SectionHeader } from "./SectionHeader"

/**
 * The employee Home canvas (Figma 2694:55469, per Oskar 2026-08-31).
 *
 * Same 712px column and the same greeting as the admin view, but the
 * Needs-you approval queue is replaced by two blocks: "For you" — the
 * couple of things waiting on YOU — and a "Quick actions" grid of the
 * self-service jobs an employee actually opens Home to do.
 *
 * The rows reuse the Needs-you row shape (48px, 10px radius, tertiary
 * fill, bare 20px icon, chevron) so the two profiles feel like one
 * product; only the content model differs.
 */

export type ForYouItem = {
  id: string
  icon: IconType
  title: string
  meta?: string
  /** Same pair the admin tasks carry — the Inbox nav renders these rows
   *  with an avatar and a module badge. See NeedsYouTask in fixtures. */
  avatarSeed: string
  module: ModuleId
}

export const FOR_YOU: ForYouItem[] = [
  {
    id: "contract-addendum",
    avatarSeed: "marta-ibanez",
    module: "my_documents",
    icon: FileSigned,
    title: "Sign your contract addendum",
    meta: "due Friday",
  },
  {
    // A colleague's proposal arrives as a chat — f0 has no icon literally
    // named "chats", and `Messages` (the plural bubbles) is the one the
    // Comms rail section already uses for that concept.
    id: "shift-swap",
    avatarSeed: "pablo-n",
    module: "shifts",
    icon: Messages,
    title: "Pablo proposes changing your Saturday shift",
  },
]

type QuickAction = { id: string; icon: IconType; label: string }

const QUICK_ACTIONS: QuickAction[] = [
  { id: "time-off", icon: PalmTree, label: "Request time off" },
  { id: "payslip", icon: Money, label: "View my payslip" },
  { id: "shift", icon: Schedule, label: "My shift" },
  { id: "expenses", icon: Wallet, label: "Submit an expense" },
]

function ForYouRow({ item }: { item: ForYouItem }) {
  return (
    <button
      className="f0c-pressable flex w-full cursor-pointer items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 text-left hover:bg-f1-background-secondary"
      aria-label={item.title}
    >
      <F0Icon icon={item.icon} size="md" color="secondary" />
      <span className="flex min-w-0 flex-1 items-center gap-2">
        <span className="shrink-0 text-base font-medium text-f1-foreground">
          {item.title}
        </span>
        {item.meta && (
          <span className="min-w-0 flex-1 truncate text-base text-f1-foreground-secondary">
            {item.meta}
          </span>
        )}
      </span>
      <F0Icon icon={ChevronRight} size="md" color="secondary" />
    </button>
  )
}

function QuickActionCard({ action }: { action: QuickAction }) {
  return (
    <button
      className="f0c-pressable flex cursor-pointer flex-col items-start gap-3 rounded-[10px] bg-f1-background-tertiary p-3 text-left hover:bg-f1-background-secondary"
      aria-label={action.label}
    >
      <F0Icon icon={action.icon} size="md" color="secondary" />
      <span className="truncate text-base font-medium text-f1-foreground">
        {action.label}
      </span>
    </button>
  )
}

export function EmployeeCanvas() {
  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <SectionHeader title="For you" viewAllCount={INBOX_TOTAL} />
        <div className="flex w-full flex-col gap-2">
          {FOR_YOU.map((item) => (
            <ForYouRow key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <SectionHeader title="Quick actions" />
        {/* 2×2 in the frame; single column when the canvas is at its floor
            so the labels never truncate. */}
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
          {QUICK_ACTIONS.map((action) => (
            <QuickActionCard key={action.id} action={action} />
          ))}
        </div>
      </div>
    </>
  )
}
