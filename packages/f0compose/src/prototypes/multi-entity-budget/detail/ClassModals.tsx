import {
  F0Box,
  F0Button,
  F0Card,
  F0Checkbox,
  F0Dialog,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import { Input, Textarea } from "@factorialco/f0-react/dist/experimental"
import { useEffect, useState } from "react"

import type { TrainingClass, TrainingSession } from "@/fixtures"
import { attendancesForSession, type AttendanceStatus } from "@/fixtures"

import { SessionWizard } from "./SessionWizard"

const ATTENDANCE_STATUS_LABEL: Record<AttendanceStatus, string> = {
  attended: "Completed",
  pending: "Not started",
  excused: "Excused",
  missed: "Absent",
}

const ATTENDANCE_FILTER_OPTIONS: { value: AttendanceStatus | "all"; label: string }[] = [
  { value: "all", label: "All statuses" },
  { value: "attended", label: "Completed" },
  { value: "pending", label: "Not started" },
  { value: "missed", label: "Absent" },
  { value: "excused", label: "Excused" },
]

const ATTENDANCE_STATUS_VARIANT: Record<
  AttendanceStatus,
  "positive" | "warning" | "neutral" | "critical"
> = {
  attended: "positive",
  pending: "warning",
  excused: "neutral",
  missed: "critical",
}

export type ClassAction =
  | "new-session"
  | "edit-session"
  | "cancel-session"
  | "edit-class"
  | "class-settings"
  | "delete-class"
  | "duplicate-class"
  | "add-participants"
  | "attendance-sidepanel"
  | "issue-certificates"
  | null

type Props = {
  action: ClassAction
  trainingId: string
  klass: TrainingClass
  session: TrainingSession | null
  onClose: () => void
}

const TITLES: Record<Exclude<ClassAction, null>, string> = {
  "new-session": "Schedule new session",
  "edit-session": "Edit session",
  "cancel-session": "Cancel session",
  "edit-class": "Edit group",
  "class-settings": "Group settings",
  "delete-class": "Delete group",
  "duplicate-class": "Duplicate group",
  "add-participants": "Add participants to group",
  "attendance-sidepanel": "Attendance details",
  "issue-certificates": "Issue certificates",
}

const PRIMARY_LABEL: Record<Exclude<ClassAction, null>, string> = {
  "new-session": "Schedule session",
  "edit-session": "Save changes",
  "cancel-session": "Cancel session",
  "edit-class": "Save changes",
  "class-settings": "Save settings",
  "delete-class": "Delete group",
  "duplicate-class": "Duplicate group",
  "add-participants": "Add to group",
  "attendance-sidepanel": "Close",
  "issue-certificates": "Issue certificates",
}

export function ClassModals({
  action,
  trainingId,
  klass,
  session,
  onClose,
}: Props) {
  const [groupName, setGroupName] = useState(klass.name)
  const [classDescription, setClassDescription] = useState("")
  const [duplicateName, setDuplicateName] = useState(`${klass.name} (copy)`)
  const [classStartDate, setClassStartDate] = useState(klass.startDate ?? "")
  const [classEndDate, setClassEndDate] = useState(klass.endDate ?? "")
  const [duplicateStartDate, setDuplicateStartDate] = useState("")
  const [duplicateEndDate, setDuplicateEndDate] = useState("")
  const [duplicateCosts, setDuplicateCosts] = useState(false)
  const [duplicateMaterials, setDuplicateMaterials] = useState(false)
  const [participantSearch, setParticipantSearch] = useState("")
  const [trackAttendance, setTrackAttendance] = useState(true)
  const [autoComplete, setAutoComplete] = useState(true)
  const [allowSelfMark, setAllowSelfMark] = useState(false)
  const [requireApproval, setRequireApproval] = useState(false)
  const [duplicateSessions, setDuplicateSessions] = useState(true)
  const [duplicateParticipants, setDuplicateParticipants] = useState(false)
  const [attendanceTab, setAttendanceTab] = useState<"details" | "attendance">(
    "details"
  )
  const [attendanceFilter, setAttendanceFilter] = useState<
    AttendanceStatus | "all"
  >("all")
  const [attendanceSearch, setAttendanceSearch] = useState("")
  const [selectedAttendees, setSelectedAttendees] = useState<Set<string>>(
    new Set()
  )

  useEffect(() => {
    if (!action) return
    setGroupName(klass.name)
    setClassDescription("")
    setDuplicateName(`${klass.name} (copy)`)
    setClassStartDate(klass.startDate ?? "")
    setClassEndDate(klass.endDate ?? "")
    setDuplicateStartDate("")
    setDuplicateEndDate("")
    setDuplicateCosts(false)
    setDuplicateMaterials(false)
    setDuplicateSessions(true)
    setDuplicateParticipants(false)
    setParticipantSearch("")
    setAttendanceTab("details")
    setAttendanceFilter("all")
    setAttendanceSearch("")
    setSelectedAttendees(new Set())
  }, [action, session, klass])

  if (!action) return null

  // Session create/edit lives in its own canonical F0WizardForm.
  if (action === "new-session" || action === "edit-session") {
    return (
      <SessionWizard
        trainingId={trainingId}
        klass={klass}
        session={action === "edit-session" ? session : null}
        isOpen
        onClose={onClose}
        onSaved={() => onClose()}
      />
    )
  }

  const isCritical = action === "cancel-session" || action === "delete-class"
  const isWide = action === "attendance-sidepanel"

  return (
    <F0Dialog
      open={action !== null}
      onOpenChange={(o: boolean) => {
        if (!o) onClose()
      }}
      width={isWide ? "lg" : "md"}
      title={TITLES[action]}
      description={`${klass.name}${session ? ` · ${session.title}` : ""}`}
      primaryAction={{
        label: PRIMARY_LABEL[action],
        onClick: onClose,
        variant: isCritical ? "critical" : "default",
      }}
      secondaryAction={
        action === "attendance-sidepanel"
          ? undefined
          : { label: "Cancel", onClick: onClose }
      }
    >
      <F0Box display="flex" flexDirection="column" gap="md">
        {action === "cancel-session" && (
          <F0Text
            content="Cancelling notifies all participants and removes the calendar invite. The session record is kept for reporting."
            variant="body"
          />
        )}

        {action === "edit-class" && (
          <>
            <Input
              label="Group name"
              value={groupName}
              onChange={(v) => setGroupName(v ?? "")}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Start date"
                type="date"
                value={classStartDate}
                onChange={(v) => setClassStartDate(v ?? "")}
              />
              <Input
                label="End date"
                type="date"
                value={classEndDate}
                onChange={(v) => setClassEndDate(v ?? "")}
              />
            </div>
            <Textarea
              label="Description"
              value={classDescription}
              onChange={(v) => setClassDescription(v ?? "")}
              rows={4}
            />
          </>
        )}

        {action === "class-settings" && (
          <>
            <F0Checkbox
              checked={trackAttendance}
              onCheckedChange={(c) => setTrackAttendance(c === true)}
              title="Track attendance per session"
            />
            <F0Checkbox
              checked={autoComplete}
              onCheckedChange={(c) => setAutoComplete(c === true)}
              title="Auto-mark participants as completed when all sessions attended"
            />
            <F0Checkbox
              checked={allowSelfMark}
              onCheckedChange={(c) => setAllowSelfMark(c === true)}
              title="Allow self-marking attendance"
            />
            <F0Checkbox
              checked={requireApproval}
              onCheckedChange={(c) => setRequireApproval(c === true)}
              title="Require manager approval to join"
            />
          </>
        )}

        {action === "delete-class" && (
          <>
            <F0Text
              content="Deleting this group also removes all its sessions and attendance records. Participant progress at the training level is preserved. This cannot be undone."
              variant="body"
            />
            <F0Box
              background="secondary"
              padding="md"
              borderRadius="md"
              display="flex"
              flexDirection="column"
            >
              <F0Text
                variant="label"
                content="All attendance, calendar invites, and reminders linked to this group will be permanently removed."
              />
            </F0Box>
          </>
        )}

        {action === "duplicate-class" && (
          <>
            <Input
              label="New group name"
              value={duplicateName}
              onChange={(v) => setDuplicateName(v ?? "")}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Start date"
                type="date"
                value={duplicateStartDate}
                onChange={(v) => setDuplicateStartDate(v ?? "")}
              />
              <Input
                label="End date"
                type="date"
                value={duplicateEndDate}
                onChange={(v) => setDuplicateEndDate(v ?? "")}
              />
            </div>
            <F0Checkbox
              checked={duplicateSessions}
              disabled
              onCheckedChange={(c) => setDuplicateSessions(c === true)}
              title="Duplicate sessions (without attendance)"
            />
            <F0Checkbox
              checked={duplicateParticipants}
              onCheckedChange={(c) => setDuplicateParticipants(c === true)}
              title="Duplicate participants"
            />
            <F0Checkbox
              checked={duplicateCosts}
              onCheckedChange={(c) => setDuplicateCosts(c === true)}
              title="Duplicate costs"
            />
            <F0Checkbox
              checked={duplicateMaterials}
              onCheckedChange={(c) => setDuplicateMaterials(c === true)}
              title="Duplicate materials"
            />
          </>
        )}

        {action === "add-participants" && (
          <>
            <Input
              label="Search"
              value={participantSearch}
              onChange={(v) => setParticipantSearch(v ?? "")}
              placeholder="Search employees, groups, filters…"
            />
            <F0Text
              content="Only employees already enrolled in this training are available."
              variant="small"
            />
          </>
        )}

        {action === "attendance-sidepanel" &&
          session &&
          (() => {
            const allAttendances = attendancesForSession(session.id)
            const filtered = allAttendances.filter((a) => {
              if (attendanceFilter !== "all" && a.status !== attendanceFilter)
                return false
              if (
                attendanceSearch &&
                !a.employeeName
                  .toLowerCase()
                  .includes(attendanceSearch.toLowerCase())
              )
                return false
              return true
            })
            const allChecked =
              filtered.length > 0 &&
              filtered.every((a) => selectedAttendees.has(a.employeeId))

            const toggleAll = () => {
              if (allChecked) {
                setSelectedAttendees(new Set())
              } else {
                setSelectedAttendees(
                  new Set(filtered.map((a) => a.employeeId))
                )
              }
            }

            const toggleOne = (employeeId: string) => {
              setSelectedAttendees((prev) => {
                const next = new Set(prev)
                if (next.has(employeeId)) next.delete(employeeId)
                else next.add(employeeId)
                return next
              })
            }

            const bulkSet = (_status: AttendanceStatus) => {
              setSelectedAttendees(new Set())
            }

            return (
              <F0Box display="flex" flexDirection="column" gap="md">
                <div className="flex gap-4 border-b border-f1-border-secondary">
                  {(["details", "attendance"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setAttendanceTab(t)}
                      className={`-mb-px border-b-2 px-1 py-2 text-sm capitalize ${
                        attendanceTab === t
                          ? "border-f1-foreground-bold font-semibold text-f1-foreground"
                          : "border-transparent font-medium text-f1-foreground-secondary"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {attendanceTab === "details" && (
                  <F0Box display="flex" flexDirection="column" gap="md">
                    <div className="grid grid-cols-2 gap-3">
                      <Detail label="Type">
                        <span className="inline-flex items-center gap-1 rounded-sm bg-f1-background-info px-2 py-0.5 text-xs font-medium text-f1-foreground-info">
                          ● Scheduled
                        </span>
                      </Detail>
                      <Detail label="Modality">
                        <F0Text
                          content={
                            session.mode === "in_person"
                              ? "👤 In person"
                              : session.mode === "online"
                                ? "🖥️ Online"
                                : "💼 Hybrid"
                          }
                          variant="label"
                        />
                      </Detail>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Detail label="Date">
                        <F0Text
                          content={new Date(session.startsAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                          variant="label"
                        />
                      </Detail>
                      <Detail label="Hour">
                        <F0Text
                          content={`${new Date(session.startsAt).toLocaleTimeString(
                            "en-GB",
                            { hour: "2-digit", minute: "2-digit" }
                          )} · ${Math.floor(session.durationMinutes / 60)}h${
                            session.durationMinutes % 60 > 0
                              ? ` ${session.durationMinutes % 60}min`
                              : ""
                          }`}
                          variant="label"
                        />
                      </Detail>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Detail label="Location">
                        <F0Text
                          content={session.location ?? "—"}
                          variant="label"
                        />
                      </Detail>
                      <Detail label="Link">
                        {session.onlineLink ? (
                          <a
                            href={session.onlineLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-f1-foreground-info underline"
                          >
                            Open
                          </a>
                        ) : (
                          <F0Text content="—" variant="body" />
                        )}
                      </Detail>
                    </div>

                    <F0Card title="Calendar invite">
                      <div className="flex flex-col gap-2 p-4">
                        <F0Text
                          content={
                            session.hasCalendarInvite
                              ? "Sent to all participants"
                              : "No invites sent yet"
                          }
                          variant="small"
                        />
                        <F0Text
                          content={`✉️ ${
                            session.hasCalendarInvite
                              ? "hellen@factorial.co"
                              : "—"
                          }`}
                          variant="body"
                        />
                      </div>
                    </F0Card>

                    <F0Card title="Reminders">
                      <div className="flex flex-col gap-2 p-4">
                        {session.hasReminder ? (
                          <>
                            <F0Text
                              content="🔔 24h before the session"
                              variant="body"
                            />
                            <F0Text
                              content="🔔 1h before the session"
                              variant="body"
                            />
                          </>
                        ) : (
                          <F0Text
                            content="🔔 No reminders configured"
                            variant="small"
                          />
                        )}
                      </div>
                    </F0Card>
                  </F0Box>
                )}

                {attendanceTab === "attendance" && (
                  <F0Box display="flex" flexDirection="column" gap="md">
                    <F0Heading
                      content={`${allAttendances.length} participants`}
                      variant="heading"
                      as="h3"
                    />

                    <div className="grid grid-cols-[2fr_1fr] gap-2">
                      <Input
                        label="Search by name"
                        hideLabel
                        type="search"
                        placeholder="Search by name…"
                        value={attendanceSearch}
                        onChange={(v) => setAttendanceSearch(v ?? "")}
                      />
                      <F0Select
                        label="Filter status"
                        hideLabel
                        value={attendanceFilter}
                        onChange={(v: AttendanceStatus | "all") =>
                          setAttendanceFilter(v)
                        }
                        options={ATTENDANCE_FILTER_OPTIONS}
                      />
                    </div>

                    {selectedAttendees.size > 0 && (
                      <div className="flex flex-wrap items-center gap-2 rounded-md bg-f1-background-info px-3 py-2">
                        <F0Text
                          content={`${selectedAttendees.size} selected`}
                          variant="small"
                        />
                        <F0Button
                          label="Mark completed"
                          variant="outline"
                          size="sm"
                          onClick={() => bulkSet("attended")}
                        />
                        <F0Button
                          label="Mark not started"
                          variant="outline"
                          size="sm"
                          onClick={() => bulkSet("pending")}
                        />
                        <F0Button
                          label="Mark absent"
                          variant="outline"
                          size="sm"
                          onClick={() => bulkSet("missed")}
                        />
                        <F0Button
                          label="Mark excused"
                          variant="outline"
                          size="sm"
                          onClick={() => bulkSet("excused")}
                        />
                      </div>
                    )}

                    <div className="overflow-hidden rounded-md border border-f1-border-secondary">
                      <div className="grid grid-cols-[32px_1fr_110px_90px] gap-2 bg-f1-background-secondary px-3 py-2 text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary">
                        <F0Checkbox
                          checked={allChecked}
                          onCheckedChange={() => toggleAll()}
                          title="Select all"
                          hideLabel
                        />
                        <span>Name</span>
                        <span>Attendance</span>
                        <span className="text-right">Hours</span>
                      </div>
                      {filtered.length === 0 ? (
                        <div className="p-4 text-center">
                          <F0Text
                            content="No participants match your filters."
                            variant="small"
                          />
                        </div>
                      ) : (
                        filtered.map((a) => {
                          const variant = ATTENDANCE_STATUS_VARIANT[a.status]
                          return (
                            <div
                              key={a.employeeId}
                              className="grid grid-cols-[32px_1fr_110px_90px] items-center gap-2 border-t border-f1-border-secondary px-3 py-2"
                            >
                              <F0Checkbox
                                checked={selectedAttendees.has(a.employeeId)}
                                onCheckedChange={() => toggleOne(a.employeeId)}
                                title={`Select ${a.employeeName}`}
                                hideLabel
                              />
                              <F0Text content={a.employeeName} variant="body" />
                              <span
                                className="inline-flex w-fit items-center rounded-sm px-2 py-0.5 text-xs font-medium"
                                style={{
                                  background: `var(--f1-background-${variant})`,
                                  color: `var(--f1-foreground-${variant})`,
                                }}
                              >
                                {ATTENDANCE_STATUS_LABEL[a.status]}
                              </span>
                              <span className="text-right text-xs text-f1-foreground-secondary">
                                {a.status === "attended"
                                  ? `${Math.floor(session.durationMinutes / 60)}h`
                                  : "—"}
                              </span>
                            </div>
                          )
                        })
                      )}
                    </div>
                  </F0Box>
                )}
              </F0Box>
            )
          })()}

        {action === "issue-certificates" && (
          <F0Text
            content="Generate certificates for all participants who completed every session in this group. Certificates are stored in each employee's personal documents."
            variant="body"
          />
        )}
      </F0Box>
    </F0Dialog>
  )
}

function Detail({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs uppercase tracking-wide text-f1-foreground-secondary">
        {label}
      </span>
      <div>{children}</div>
    </div>
  )
}
