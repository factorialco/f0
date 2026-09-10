import { upcomingShifts } from "./shifts"
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
import type { ReactNode } from "react"
import { recordFor, type WidgetRecord } from "./catalog"
import {
  candidates,
  phaseLabel,
  type RecruitmentPhase,
} from "./recruitment"
import { documentRecords } from "./documents"

// PR #48 WidgetListItem's static row composition. The existing WindowStack owns
// the outer widget, title, resizing and close controls; no nested card or chat.
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
    <F0Box display="flex" alignItems="center" gap="md" paddingY="sm">
      {avatar}
      <F0Box grow minWidth="0" display="flex" flexDirection="column">
        <F0Text content={title} variant="label" ellipsis />
        <F0Text content={subtitle} variant="description" ellipsis />
      </F0Box>
      {end}
    </F0Box>
  )
}

function PersonalSummary({ record }: { record: WidgetRecord }) {
  return (
    <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
      <F0Heading content={record.value} variant="heading-large" as="h3" />
      <F0Text content={record.caption} variant="description" />
      <F0TagStatus text={record.status} variant="neutral" />
      {record.rows.map((row) => (
        <F0Box
          key={row.title}
          display="flex"
          flexDirection="column"
          gap="sm"
        >
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
    <F0Box padding="lg" display="flex" flexDirection="column" gap="sm">
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
              <F0TagStatus
                text={c.status.text}
                variant={c.status.variant}
              />
            }
          />
        ))}
    </F0Box>
  )
}
export function DocumentsWindow() {
  return (
    <F0Box padding="lg" display="flex" flexDirection="column" gap="sm">
      {documentRecords.map((d) => (
        <ReferenceRow
          key={d.id}
          avatar={
            <F0AvatarFile
              file={{ name: d.name, type: d.fileType }}
              size="lg"
            />
          }
          title={d.name}
          subtitle={`${d.action} · ${d.when}`}
        />
      ))}
    </F0Box>
  )
}

export function ShiftsWindow() {
  return (
    <F0Box padding="lg" display="flex" flexDirection="column" gap="sm">
      {upcomingShifts.map((shift) => (
        <ReferenceRow
          key={shift.id}
          avatar={<F0AvatarDate date={shift.date} />}
          title={`${shift.day} · ${shift.startTime}–${shift.endTime}`}
          subtitle={`${shift.workplace} · Break ${shift.plannedBreak}`}
        />
      ))}
    </F0Box>
  )
}
