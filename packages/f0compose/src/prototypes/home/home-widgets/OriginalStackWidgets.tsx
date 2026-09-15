import type { ReactNode } from "react"

import {
  F0AvatarFile,
  F0AvatarDate,
  F0AvatarIcon,
  F0Box,
  F0Heading,
  F0TagStatus,
  F0Text,
  type IconType,
} from "@factorialco/f0-react"
import {
  File,
  Handshake,
  Phone,
  SearchPerson,
  Video,
} from "@factorialco/f0-react/icons/app"

import { recordFor, type WidgetRecord } from "./catalog"
import { documentRecords } from "./documents"
import { candidates, phaseLabel, type RecruitmentPhase } from "./recruitment"
import { upcomingShifts } from "./shifts"

/**
 * f0's own widget-row geometry, copied from `WidgetAvatarsListItem`
 * (`rounded-md border border-transparent p-2 gap-2.5`, a one-line title
 * over a secondary subtitle) so these rows measure the same as the
 * production widgets (Angel, 2026-09-15). The avatars differ per widget
 * (icon, file, date), which is why the f0 component itself cannot be used
 * here: it only takes person avatars.
 */
function ReferenceRow({
  avatar,
  title,
  subtitle,
  end,
}: {
  avatar: ReactNode
  title: string
  subtitle: string
  end?: ReactNode
}) {
  return (
    <div className="flex flex-row items-center gap-2.5 rounded-md border border-solid border-transparent p-2 text-f1-foreground">
      {avatar}
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="line-clamp-1 font-medium">{title}</p>
        <p className="line-clamp-1 text-f1-foreground-secondary">{subtitle}</p>
      </div>
      {end}
    </div>
  )
}

function PersonalSummary({ record }: { record: WidgetRecord }) {
  return (
    <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
      <F0Heading content={record.value} variant="heading-large" as="h3" />
      <F0Text content={record.caption} variant="description" />
      <F0TagStatus text={record.status} variant="neutral" />
      {record.rows.map((row) => (
        <F0Box key={row.title} display="flex" flexDirection="column" gap="sm">
          <F0Text content={row.title} variant="label" />
          <F0Text content={row.detail} variant="description" />
        </F0Box>
      ))}
    </F0Box>
  )
}
export function PayslipWindow() {
  const record = recordFor("My payslip")
  return record ? <PersonalSummary record={record} /> : null
}
export function HolidaysWindow() {
  const record = recordFor("My time off")
  return record ? <PersonalSummary record={record} /> : null
}
const PHASE_ICON: Record<RecruitmentPhase, IconType> = {
  applied: SearchPerson,
  screening: Phone,
  interview: Video,
  assessment: File,
  offer: Handshake,
}
export function RecruitmentWindow({
  limit,
  candidateId,
}: { limit?: number; candidateId?: string } = {}) {
  return (
    <div className="flex flex-col px-1 pb-2">
      {candidates
        .filter((c) => !candidateId || c.id === candidateId)
        .slice(0, limit)
        .map((c) => (
          <ReferenceRow
            key={c.id}
            avatar={<F0AvatarIcon icon={PHASE_ICON[c.phase]} size="lg" />}
            title={c.name}
            subtitle={phaseLabel(c.phase)}
            end={
              <F0TagStatus text={c.status.text} variant={c.status.variant} />
            }
          />
        ))}
    </div>
  )
}
export function DocumentsWindow() {
  return (
    <div className="flex flex-col px-1 pb-2">
      {documentRecords.map((d) => (
        <ReferenceRow
          key={d.id}
          avatar={
            <F0AvatarFile file={{ name: d.name, type: d.fileType }} size="lg" />
          }
          title={d.name}
          subtitle={`${d.action} · ${d.when}`}
        />
      ))}
    </div>
  )
}

export function ShiftsWindow() {
  return (
    <div className="flex flex-col px-1 pb-2">
      {upcomingShifts.map((shift) => (
        <ReferenceRow
          key={shift.id}
          avatar={<F0AvatarDate date={shift.date} />}
          title={`${shift.day} · ${shift.startTime}–${shift.endTime}`}
          subtitle={`${shift.workplace} · Break ${shift.plannedBreak}`}
        />
      ))}
    </div>
  )
}
