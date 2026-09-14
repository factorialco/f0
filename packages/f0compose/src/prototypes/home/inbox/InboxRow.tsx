import { F0AvatarPerson, F0Checkbox } from "@factorialco/f0-react"
import { useState } from "react"

import { avatarFor } from "@/fixtures/helpers"

import type { InboxTask } from "./inboxTasks"

import { requestChat } from "../comms/chatStore"

/**
 * A row in the Inbox (Figma 2621:28151). Measured off the frame at its
 * 419px width: the row is 66 tall, the 20px selector sits at x=12, the
 * 32px avatar (with its 16px module badge) at x=44, and the text column at
 * x=88. Title and subtitle are BOTH 14/20 — the subtitle is separated by
 * colour, not size.
 *
 * Rows are divided by an edge-to-edge hairline, so the padding lives on
 * the row rather than on the list.
 *
 * Lifted out of HomeNav on 2026-09-14, when the Inbox gained a canvas
 * screen: the panel list and the full-width list are the same rows, and a
 * second copy would have been the `CalGroup` fork all over again.
 */
export function InboxRow({
  item,
  active,
}: {
  item: InboxTask
  active: boolean
}) {
  const [done, setDone] = useState(false)
  return (
    <div
      className={`flex h-[66px] w-full items-center gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 ${
        active ? "bg-f1-background-secondary" : ""
      }`}
    >
      <F0Checkbox
        checked={done}
        onCheckedChange={setDone}
        title={done ? `Reopen "${item.title}"` : `Complete "${item.title}"`}
        hideLabel
      />
      <div className="shrink-0">
        <F0AvatarPerson
          firstName={item.avatarSeed}
          lastName="."
          src={avatarFor(item.avatarSeed)}
          size="md"
          badge={{ type: "module", module: item.module }}
        />
      </div>
      {/* The row body opens the ticket; the checkbox beside it stays its
          own control, so ticking one off never opens it. */}
      <button
        onClick={() => requestChat(`ticket:${item.id}`)}
        className={`flex min-w-0 flex-1 cursor-pointer flex-col items-start text-left ${
          done ? "opacity-50" : ""
        }`}
      >
        <span className="w-full truncate text-base font-medium text-f1-foreground">
          {item.title}
        </span>
        <span className="w-full truncate text-base text-f1-foreground-secondary">
          {item.meta}
        </span>
      </button>
    </div>
  )
}
