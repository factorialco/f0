import { useMemo, useState } from "react"
import {
  F0Alert,
  F0Box,
  F0Card,
  F0Checkbox,
  F0Dialog,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import { Input } from "@factorialco/f0-react/dist/experimental"

import {
  trainingSessions,
  type TrainingClass,
  type TrainingSession,
  type TrainingSessionMode,
} from "@/fixtures"

// Mirrors upstream NewSessionModal at
// `modules/trainings/pages/Trainings/Revamp/TrainingDetail/Detail/Classes/Detail/SessionsTab/NewSessionModal/`,
// which is a single Modal wrapping EventBox (NOT a wizard). Field order, labels
// and conditional behaviour match
// `modules/trainings/components/Revamp/NewClassWizard/EventDataStep/EventBox/`
// verbatim, with labels taken from `frontend/src/translations/en.json`
// (key prefix `trainings.trainings_revamp.training_class.class_wizard.event_data_step.event_box`).
//
// Upstream EventBox field order:
//   1. Type (Scheduled | Self-paced)
//   2. Name (mandatory)
//   3. Scheduled  → Date, Starts at, Ends at, Hours, Minutes, Modality, Frequency, Due date (if recurrent)
//      Self-paced → Start date, End date, Hours, Minutes, Modality
//   4. Meeting link, Location  (row; conditional readonly per modality)
//   5. Reminders card  (toggle + per-reminder name/timeframe/content)
//   6. Send calendar invites  (scheduled only)

// ── Upstream-aligned literal types ──────────────────────────────────────────

type UpstreamSchedule = "scheduled" | "selfpaced"
type UpstreamModality = "inperson" | "online" | "mixed"
type UpstreamFrequency =
  | "__UNDEFINED__"
  | "daily"
  | "weekly"
  | "monthly"
type UpstreamTimeframe =
  | "oneday"
  | "twodays"
  | "threedays"
  | "onehour"
  | "oneweek"
  | "custom"

type ReminderDraft = {
  name: string
  content: string
  timeframe: UpstreamTimeframe
  scheduledAt?: string
  scheduledAtHour?: string
}

type SessionDraft = {
  name: string
  schedule: UpstreamSchedule
  modality: UpstreamModality
  // Scheduled fields
  startDate: string // yyyy-mm-dd
  startsAtHour: string // HH:mm
  endsAtHour: string // HH:mm
  hours: number
  minutes: number
  recurrent: boolean
  frequency: UpstreamFrequency
  dueDate: string // yyyy-mm-dd
  // Self-paced fields share startDate + dueDate
  // Where
  link: string
  location: string
  // Reminders + invites
  reminders: ReminderDraft[]
  sendCalendarInvites: boolean
}

type Props = {
  trainingId: string
  klass: TrainingClass
  /** When provided, the dialog pre-fills with this session for editing. */
  session?: TrainingSession | null
  isOpen: boolean
  onClose: () => void
  onSaved: (session: TrainingSession) => void
}

// ── Upstream-aligned i18n strings (verbatim from en.json) ───────────────────

const t = {
  modal_title: "Create session",
  cancel: "Cancel",
  save: "Save",
  // event_box.type
  type_title: "Type",
  type_scheduled: "Scheduled",
  type_self_paced: "Self-paced",
  // event_box fields
  name: "Name",
  date_label: "Date",
  starts: "Starts at",
  ends: "Ends at",
  hours: "Hours",
  minutes: "Minutes",
  start_date: "Start date",
  end_date: "End date",
  due_date: "Due date",
  due_date_error: "End date must be the same as or later than the start date",
  link_title: "Meeting link",
  location_title: "Location",
  reminder_title: "Reminders",
  // modality.options
  modality_label: "Modality",
  modality_hybrid: "Hybrid",
  modality_online: "Virtual",
  modality_onsite: "On site",
  // frequency
  freq_title: "Frequency",
  freq_default: "Does not repeat",
  freq_daily: "Daily",
  freq_monthly: "Monthly",
  freq_weekly_prefix: "Weekly on ",
  // timeframe_options
  tf_one_day: "1 day before",
  tf_two_days: "2 days before",
  tf_three_days: "3 days before",
  tf_one_hour: "1 hour before",
  tf_one_week: "1 week before",
  tf_custom: "Custom",
  // new_session_modal.reminders
  add_reminder: "Add reminder",
  reminders_description:
    "Schedule a reminder to be sent to all assigned employees before the session.",
  reminders_time: "Time",
  reminder_name: "Name",
  reminder_content: "Content",
  // new_session_modal.calendar_invites
  calendar_title: "Send calendar invites",
  calendar_synced_description:
    "Invites will be sent from your connected calendar.",
} as const

// ── Option lists ────────────────────────────────────────────────────────────

const scheduleOptions: { value: UpstreamSchedule; label: string }[] = [
  { value: "scheduled", label: t.type_scheduled },
  { value: "selfpaced", label: t.type_self_paced },
]

// Upstream order: hybrid, inperson, online (see useModalities.ts).
const modalityOptions: { value: UpstreamModality; label: string }[] = [
  { value: "mixed", label: t.modality_hybrid },
  { value: "inperson", label: t.modality_onsite },
  { value: "online", label: t.modality_online },
]

const reminderTimeframeOptions: {
  value: UpstreamTimeframe
  label: string
}[] = [
  { value: "oneday", label: t.tf_one_day },
  { value: "twodays", label: t.tf_two_days },
  { value: "threedays", label: t.tf_three_days },
  { value: "onehour", label: t.tf_one_hour },
  { value: "oneweek", label: t.tf_one_week },
  { value: "custom", label: t.tf_custom },
]

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const

function frequencyOptions(
  startDate: string
): { value: UpstreamFrequency; label: string }[] {
  const base: { value: UpstreamFrequency; label: string }[] = [
    { value: "__UNDEFINED__", label: t.freq_default },
  ]
  if (!startDate) return base
  const d = new Date(`${startDate}T00:00:00`)
  const dayName = Number.isNaN(d.getTime())
    ? ""
    : (WEEKDAYS[d.getDay()] ?? "")
  return [
    ...base,
    {
      value: "weekly",
      label: `${t.freq_weekly_prefix}${dayName}`,
    },
    { value: "daily", label: t.freq_daily },
    { value: "monthly", label: t.freq_monthly },
  ]
}

// ── Mode mapping between upstream and fixture types ─────────────────────────

const upstreamModalityToFixture: Record<UpstreamModality, TrainingSessionMode> =
  {
    inperson: "in_person",
    online: "online",
    mixed: "hybrid",
  }

const fixtureModeToUpstream: Record<TrainingSessionMode, UpstreamModality> = {
  in_person: "inperson",
  online: "online",
  hybrid: "mixed",
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function isoToDateInput(iso: string | null | undefined): string {
  if (!iso) return ""
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ""
  return d.toISOString().slice(0, 10)
}

function isoToTimeInput(iso: string | null | undefined): string {
  if (!iso) return ""
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ""
  return d.toISOString().slice(11, 16)
}

function calculateDuration(
  startHHmm: string,
  endHHmm: string
): { hours: number; minutes: number } {
  const [sh, sm] = startHHmm.split(":").map((n) => Number(n) || 0)
  const [eh, em] = endHHmm.split(":").map((n) => Number(n) || 0)
  const total = eh * 60 + em - (sh * 60 + sm)
  if (total <= 0) return { hours: 0, minutes: 0 }
  return { hours: Math.floor(total / 60), minutes: total % 60 }
}

function combineDateTime(dateYmd: string, hhmm: string): string {
  if (!dateYmd) return new Date().toISOString()
  const time = hhmm || "00:00"
  const d = new Date(`${dateYmd}T${time}:00`)
  if (Number.isNaN(d.getTime())) return new Date().toISOString()
  return d.toISOString()
}

function buildDefaults(session: TrainingSession | null | undefined): SessionDraft {
  if (session) {
    return {
      name: session.title,
      schedule: "scheduled",
      modality: fixtureModeToUpstream[session.mode],
      startDate: isoToDateInput(session.startsAt),
      startsAtHour: isoToTimeInput(session.startsAt),
      endsAtHour: isoToTimeInput(session.endsAt),
      hours: Math.floor(session.durationMinutes / 60),
      minutes: session.durationMinutes % 60,
      recurrent: false,
      frequency: "__UNDEFINED__",
      dueDate: "",
      link: session.onlineLink ?? "",
      location: session.location ?? "",
      reminders: [],
      sendCalendarInvites: session.hasCalendarInvite,
    }
  }
  return {
    name: "",
    schedule: "scheduled",
    modality: "mixed",
    startDate: "",
    startsAtHour: "",
    endsAtHour: "",
    hours: 0,
    minutes: 0,
    recurrent: false,
    frequency: "__UNDEFINED__",
    dueDate: "",
    link: "",
    location: "",
    reminders: [],
    sendCalendarInvites: false,
  }
}

// ── Sub-component: ReminderCard ─────────────────────────────────────────────

type ReminderCardProps = {
  open: boolean
  setOpen: (v: boolean) => void
  reminders: ReminderDraft[]
  onAdd: (reminder: ReminderDraft) => void
  onDelete: (index: number) => void
  hasStartsAt: boolean
}

function ReminderCard({
  open,
  setOpen,
  reminders,
  onAdd,
  onDelete,
  hasStartsAt,
}: ReminderCardProps) {
  const [creating, setCreating] = useState<boolean>(reminders.length === 0)
  const [draft, setDraft] = useState<ReminderDraft>({
    name: "",
    content: "",
    timeframe: "oneday",
  })

  const expanded = open || reminders.length > 0
  const canSave = draft.name.trim().length > 0 && Boolean(draft.timeframe)

  return (
    <F0Card>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <F0Heading as="h3" variant="heading" content={t.add_reminder} />
          <F0Checkbox
            title={t.add_reminder}
            hideLabel
            checked={expanded}
            disabled={!hasStartsAt}
            onCheckedChange={(checked) => {
              setOpen(checked)
              if (checked) setCreating(true)
            }}
          />
        </div>
        <F0Text variant="body" content={t.reminders_description} />

        {expanded && (
          <div className="flex flex-col gap-3 pt-2">
            {reminders.map((r, idx) => (
              <div
                key={`${r.name}-${idx}`}
                className="flex items-center justify-between rounded-md border border-f1-border-secondary p-2"
              >
                <div className="flex flex-col">
                  <F0Text variant="label" content={r.name} />
                  <F0Text
                    variant="description"
                    content={
                      reminderTimeframeOptions.find(
                        (o) => o.value === r.timeframe
                      )?.label ?? r.timeframe
                    }
                  />
                </div>
                <button
                  type="button"
                  onClick={() => onDelete(idx)}
                  className="rounded-md px-2 py-1 text-sm text-f1-foreground-critical hover:bg-f1-background-hover"
                >
                  Remove
                </button>
              </div>
            ))}

            {creating || reminders.length === 0 ? (
              <div className="flex flex-col gap-3">
                <F0Select<UpstreamTimeframe>
                  label={t.reminders_time}
                  value={draft.timeframe}
                  options={reminderTimeframeOptions}
                  onChange={(v: UpstreamTimeframe) =>
                    setDraft({ ...draft, timeframe: v })
                  }
                />
                <Input
                  label={t.reminder_name}
                  value={draft.name}
                  onChange={(v) => setDraft({ ...draft, name: v ?? "" })}
                />
                {draft.timeframe === "custom" && (
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label={t.date_label}
                      type="date"
                      value={draft.scheduledAt ?? ""}
                      onChange={(v) =>
                        setDraft({ ...draft, scheduledAt: v ?? "" })
                      }
                    />
                    <Input
                      label={t.reminders_time}
                      type="time"
                      value={draft.scheduledAtHour ?? ""}
                      onChange={(v) =>
                        setDraft({ ...draft, scheduledAtHour: v ?? "" })
                      }
                    />
                  </div>
                )}
                <Input
                  label={t.reminder_content}
                  value={draft.content}
                  onChange={(v) => setDraft({ ...draft, content: v ?? "" })}
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (reminders.length > 0) setCreating(false)
                      else setOpen(false)
                    }}
                    className="rounded-md border border-f1-border-secondary px-3 py-1.5 text-sm hover:bg-f1-background-hover"
                  >
                    {t.cancel}
                  </button>
                  <button
                    type="button"
                    disabled={!canSave}
                    onClick={() => {
                      onAdd(draft)
                      setDraft({
                        name: "",
                        content: "",
                        timeframe: "oneday",
                      })
                      setCreating(false)
                    }}
                    className="rounded-md bg-f1-background-bold px-3 py-1.5 text-sm text-f1-foreground-inverse hover:bg-f1-background-bold-hover disabled:opacity-50"
                  >
                    {t.save}
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setCreating(true)}
                className="self-start rounded-md border border-f1-border-secondary px-3 py-1.5 text-sm hover:bg-f1-background-hover"
              >
                + {t.add_reminder}
              </button>
            )}
          </div>
        )}
      </div>
    </F0Card>
  )
}

// ── Sub-component: CalendarInvitesCard ──────────────────────────────────────

type CalendarInvitesCardProps = {
  value: boolean
  onChange: (v: boolean) => void
}

function CalendarInvitesCard({ value, onChange }: CalendarInvitesCardProps) {
  return (
    <F0Card>
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="flex flex-col">
          <F0Heading as="h3" variant="heading" content={t.calendar_title} />
          <F0Text
            variant="body"
            content={t.calendar_synced_description}
          />
        </div>
        <F0Checkbox
          title={t.calendar_title}
          hideLabel
          checked={value}
          onCheckedChange={onChange}
        />
      </div>
    </F0Card>
  )
}

// ── Main: SessionWizard (Modal) ─────────────────────────────────────────────

export function SessionWizard({
  trainingId,
  klass,
  session,
  isOpen,
  onClose,
  onSaved,
}: Props) {
  const [data, setData] = useState<SessionDraft>(() => buildDefaults(session))
  const [reminderOpen, setReminderOpen] = useState<boolean>(false)

  const errorLink = useMemo(() => {
    if (!data.link) return undefined
    try {
      const u = new URL(data.link)
      if (u.protocol !== "http:" && u.protocol !== "https:") {
        return "Enter a valid URL"
      }
      return undefined
    } catch {
      return "Enter a valid URL"
    }
  }, [data.link])

  const dueDateError = useMemo(() => {
    if (data.schedule !== "selfpaced") return undefined
    if (!data.startDate || !data.dueDate) return undefined
    return data.dueDate < data.startDate ? t.due_date_error : undefined
  }, [data.schedule, data.startDate, data.dueDate])

  const isValid = useMemo(() => {
    if (!data.name || errorLink) return false
    if (data.schedule === "scheduled") {
      const hasTimes = Boolean(data.startsAtHour && data.endsAtHour)
      const recurrentValid = Boolean(data.dueDate) === data.recurrent
      return (
        Boolean(data.startDate) &&
        hasTimes &&
        data.hours * 60 + data.minutes > 0 &&
        recurrentValid
      )
    }
    return !dueDateError
  }, [
    data.dueDate,
    data.endsAtHour,
    data.hours,
    data.minutes,
    data.name,
    data.recurrent,
    data.schedule,
    data.startDate,
    data.startsAtHour,
    dueDateError,
    errorLink,
  ])

  const handleScheduleChange = (value: UpstreamSchedule) => {
    setData({
      ...data,
      schedule: value,
      startDate: "",
      startsAtHour: "",
      endsAtHour: "",
      hours: 0,
      minutes: 0,
      dueDate: "",
      recurrent: false,
      frequency: "__UNDEFINED__",
    })
  }

  const handleTimeChange = (field: "startsAtHour" | "endsAtHour", v: string) => {
    const next = { ...data, [field]: v }
    if (next.startsAtHour && next.endsAtHour) {
      const { hours, minutes } = calculateDuration(
        next.startsAtHour,
        next.endsAtHour
      )
      next.hours = hours
      next.minutes = minutes
    }
    setData(next)
  }

  const handleModalityChange = (value: UpstreamModality) => {
    const next: SessionDraft = { ...data, modality: value }
    if (value === "inperson") next.link = ""
    else if (value === "online") next.location = ""
    setData(next)
  }

  const handleFrequencyChange = (value: UpstreamFrequency) => {
    if (value === "__UNDEFINED__") {
      setData({
        ...data,
        frequency: "__UNDEFINED__",
        recurrent: false,
        dueDate: "",
      })
    } else {
      setData({ ...data, frequency: value, recurrent: true })
    }
  }

  const handleSave = () => {
    if (!isValid) return
    const startIso = combineDateTime(
      data.startDate,
      data.startsAtHour || "00:00"
    )
    const endIso =
      data.schedule === "scheduled"
        ? combineDateTime(data.startDate, data.endsAtHour || "00:00")
        : combineDateTime(data.dueDate || data.startDate, "00:00")
    const durationMinutes = data.hours * 60 + data.minutes
    const mode = upstreamModalityToFixture[data.modality]

    if (session) {
      const idx = trainingSessions.findIndex((s) => s.id === session.id)
      if (idx >= 0) {
        const next: TrainingSession = {
          ...session,
          title: data.name.trim() || session.title,
          startsAt: startIso,
          endsAt: endIso,
          durationMinutes: durationMinutes || session.durationMinutes,
          mode,
          location: data.location || null,
          onlineLink: data.link || null,
          hasCalendarInvite: data.sendCalendarInvites,
          hasReminder: data.reminders.length > 0,
        }
        trainingSessions[idx] = next
        onSaved(next)
      }
      return
    }

    const next: TrainingSession = {
      id: `session-${Date.now()}`,
      classId: klass.id,
      trainingId,
      title: data.name.trim() || "Untitled session",
      startsAt: startIso,
      endsAt: endIso,
      durationMinutes: durationMinutes || 60,
      mode,
      location: data.location || null,
      onlineLink: data.link || null,
      status: "scheduled",
      attendedCount: 0,
      totalCount: klass.participantCount,
      instructorIds: [],
      hasCalendarInvite: data.sendCalendarInvites,
      hasReminder: data.reminders.length > 0,
      notes: null,
    }
    trainingSessions.push(next)
    onSaved(next)
  }

  const freqOpts = frequencyOptions(data.startDate)

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      position="center"
      width="md"
      title={t.modal_title}
      primaryAction={{
        label: t.save,
        onClick: handleSave,
        disabled: !isValid,
      }}
      secondaryAction={{ label: t.cancel, onClick: onClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="lg">
        {/* 1. Type */}
        <F0Select<UpstreamSchedule>
          label={t.type_title}
          value={data.schedule}
          options={scheduleOptions}
          onChange={(v: UpstreamSchedule) => handleScheduleChange(v)}
        />

        {/* 2. Name */}
        <Input
          label={t.name}
          value={data.name}
          onChange={(v) => setData({ ...data, name: v ?? "" })}
          maxLength={255}
        />

        {/* 3a. Scheduled date/time block */}
        {data.schedule === "scheduled" && (
          <>
            <div className="grid grid-cols-3 gap-3">
              <Input
                label={t.date_label}
                type="date"
                value={data.startDate}
                onChange={(v) => setData({ ...data, startDate: v ?? "" })}
              />
              <Input
                label={t.starts}
                type="time"
                value={data.startsAtHour}
                onChange={(v) => handleTimeChange("startsAtHour", v ?? "")}
              />
              <Input
                label={t.ends}
                type="time"
                value={data.endsAtHour}
                onChange={(v) => handleTimeChange("endsAtHour", v ?? "")}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input
                label={t.hours}
                type="number"
                value={String(data.hours)}
                onChange={(v) =>
                  setData({ ...data, hours: Number(v) || 0 })
                }
              />
              <Input
                label={t.minutes}
                type="number"
                value={String(data.minutes)}
                onChange={(v) =>
                  setData({ ...data, minutes: Number(v) || 0 })
                }
              />
            </div>
          </>
        )}

        {/* 3b. Self-paced date block */}
        {data.schedule === "selfpaced" && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <Input
                label={t.start_date}
                type="date"
                value={data.startDate}
                onChange={(v) => setData({ ...data, startDate: v ?? "" })}
              />
              <Input
                label={t.end_date}
                type="date"
                value={data.dueDate}
                onChange={(v) => setData({ ...data, dueDate: v ?? "" })}
                error={dueDateError}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input
                label={t.hours}
                type="number"
                value={String(data.hours)}
                onChange={(v) =>
                  setData({ ...data, hours: Number(v) || 0 })
                }
              />
              <Input
                label={t.minutes}
                type="number"
                value={String(data.minutes)}
                onChange={(v) =>
                  setData({ ...data, minutes: Number(v) || 0 })
                }
              />
            </div>
          </>
        )}

        {/* 4. Modality */}
        <F0Select<UpstreamModality>
          label={t.modality_label}
          value={data.modality}
          options={modalityOptions}
          onChange={(v: UpstreamModality) => handleModalityChange(v)}
        />

        {/* 5. Frequency + Due date (scheduled only) */}
        {data.schedule === "scheduled" && (
          <>
            <F0Select<UpstreamFrequency>
              label={t.freq_title}
              value={data.frequency}
              options={freqOpts}
              onChange={(v: UpstreamFrequency) => handleFrequencyChange(v)}
            />
            {data.recurrent && data.startDate && (
              <Input
                label={t.due_date}
                type="date"
                value={data.dueDate}
                onChange={(v) => setData({ ...data, dueDate: v ?? "" })}
              />
            )}
          </>
        )}

        {/* 6. Link + Location row */}
        <div className="grid grid-cols-2 gap-3">
          <Input
            label={t.link_title}
            value={data.link}
            onChange={(v) => setData({ ...data, link: v ?? "" })}
            error={errorLink}
            disabled={data.modality === "inperson"}
          />
          <Input
            label={t.location_title}
            value={data.location}
            onChange={(v) => setData({ ...data, location: v ?? "" })}
            disabled={data.modality === "online"}
            maxLength={255}
          />
        </div>

        {/* 7. Reminders card */}
        <div className="flex flex-col gap-2">
          <F0Heading as="h3" variant="heading" content={t.reminder_title} />
          <ReminderCard
            open={reminderOpen}
            setOpen={setReminderOpen}
            reminders={data.reminders}
            onAdd={(r) =>
              setData({ ...data, reminders: [...data.reminders, r] })
            }
            onDelete={(idx) =>
              setData({
                ...data,
                reminders: data.reminders.filter((_, i) => i !== idx),
              })
            }
            hasStartsAt={Boolean(data.startDate && data.startsAtHour)}
          />
        </div>

        {/* 8. Calendar invites (scheduled only) */}
        {data.schedule === "scheduled" && (
          <CalendarInvitesCard
            value={data.sendCalendarInvites}
            onChange={(v) => setData({ ...data, sendCalendarInvites: v })}
          />
        )}

        {/* Validation hint for due date in self-paced */}
        {dueDateError && (
          <F0Alert
            variant="critical"
            title={t.due_date_error}
            description={dueDateError}
          />
        )}
      </F0Box>
    </F0Dialog>
  )
}
