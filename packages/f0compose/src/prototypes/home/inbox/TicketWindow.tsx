import {
  F0AvatarPerson,
  F0Button,
  F0TagStatus,
  type StatusVariant,
} from "@factorialco/f0-react"
import { useState } from "react"

import { avatarFor } from "@/fixtures/helpers"

import type { TicketPriority, TicketStatus } from "./tickets"

import { PRIORITY_LABELS, STATUS_LABELS, ticketFor } from "./tickets"

/**
 * The detail behind an inbox row (Figma 2725:444787 maximized, 2725:447260
 * docked). Measured off the frame: sections are full-bleed with 20px of
 * horizontal inset and a 12px top, section labels are 24px tall, and the
 * details table runs 44px rows with a 160px label column starting at x=12
 * and its value at x=180.
 *
 * The panel chrome — header, the dock/expand toggle, close — comes from
 * the window stack, so this is only the body.
 */

/**
 * Both of these are f0's `F0TagStatus`, not hand-rolled pills (per Oskar).
 * Sampled off the frame to confirm: the "Open" pill is #eef4fe — f0's
 * `background-info` — and "Critical" is #ffeeed, its `background-critical`.
 * The first pass painted them on `background-secondary` with a coloured
 * dot, which is grey where the design is tinted.
 *
 * "Time remaining" is NOT one of these: the frame leaves that row white
 * behind the text, so it stays coloured text.
 */
const STATUS_VARIANT: Record<TicketStatus, StatusVariant> = {
  open: "info",
  "in-progress": "warning",
  blocked: "critical",
}

const PRIORITY_VARIANT: Record<TicketPriority, StatusVariant> = {
  critical: "critical",
  high: "warning",
  medium: "info",
  low: "neutral",
}

/** Label + value, the frame's 44px row with its 160px label column. */
function Row({
  label,
  children,
  last,
}: {
  label: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <div
      className={`flex min-h-11 items-center px-3 ${
        last ? "" : "border-0 border-b border-solid border-f1-border-secondary"
      }`}
    >
      <span className="w-40 shrink-0 truncate text-base text-f1-foreground-secondary">
        {label}
      </span>
      <div className="flex min-w-0 flex-1 items-center gap-2 text-base text-f1-foreground">
        {children}
      </div>
    </div>
  )
}

function Section({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-3 px-5 py-3">
      <h3 className="text-lg font-semibold text-f1-foreground">{label}</h3>
      {children}
    </section>
  )
}

export function TicketWindow({
  taskId,
  title,
}: {
  taskId: string
  title: string
}) {
  const detail = ticketFor(taskId)
  const [comment, setComment] = useState("")
  return (
    <div className="home-window-scroll min-h-0 flex-1 overflow-auto">
      {/* Header block: title then the status/reference chips. */}
      <div className="flex flex-col gap-3 px-5 pb-1 pt-3">
        <h2 className="text-xl font-semibold text-f1-foreground">{title}</h2>
        <div className="flex flex-wrap items-center gap-3">
          <F0TagStatus
            text={STATUS_LABELS[detail.status]}
            variant={STATUS_VARIANT[detail.status]}
          />
          <span className="flex h-8 items-center gap-2 text-base">
            <span className="text-f1-foreground-secondary">ID</span>
            <span className="font-medium text-f1-foreground">
              {detail.reference}
            </span>
          </span>
        </div>
      </div>

      <div className="px-5 py-3">
        <div className="overflow-hidden rounded-md border border-solid border-f1-border-secondary">
          <Row label="Priority">
            <F0TagStatus
              text={PRIORITY_LABELS[detail.priority]}
              variant={PRIORITY_VARIANT[detail.priority]}
            />
          </Row>
          <Row label="Assignee team">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-[6px] bg-f1-background-promote-bold text-sm font-medium text-f1-foreground-inverse">
              {detail.teamInitial}
            </span>
            <span className="truncate">{detail.team}</span>
          </Row>
          <Row label="Assignee">
            {/* The frame shows a bare dash when nobody owns it yet. */}
            <span className="text-f1-foreground-secondary">
              {detail.assignee ?? "-"}
            </span>
          </Row>
          <Row label="Category">{detail.category}</Row>
          <Row label="Requested by">
            <F0AvatarPerson
              firstName={detail.requestedBy.split(" ")[0]}
              lastName={detail.requestedBy.split(" ").slice(1).join(" ")}
              src={avatarFor(detail.requestedBySeed)}
              size="xs"
            />
            <span className="truncate">{detail.requestedBy}</span>
          </Row>
          <Row label="Created on">{detail.createdOn}</Row>
          <Row label="Time remaining" last>
            <span
              className={
                detail.overdue ? "text-f1-foreground-critical" : undefined
              }
            >
              {detail.timeRemaining}
            </span>
          </Row>
        </div>
      </div>

      <Section label="Description">
        <p className="text-base text-f1-foreground">{detail.description}</p>
      </Section>

      <Section label="Attachments">
        <div className="flex flex-col items-center gap-3 rounded-md border border-dashed border-f1-border px-5 py-10">
          <F0Button variant="outline" size="md" label="Upload file" />
          <span className="text-base text-f1-foreground-secondary">
            Drag and drop documents
          </span>
        </div>
      </Section>

      <Section label="Comments">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          aria-label={`Comment on ${title}`}
          placeholder="Write a comment…"
          className="w-full resize-none rounded-md border border-solid border-f1-border bg-f1-background p-3 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
        />
      </Section>
    </div>
  )
}
