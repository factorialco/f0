import { type ReactNode, useMemo, useState } from "react"
import {
  CardSelectableContainer,
  F0Alert,
  F0AvatarIcon,
  F0AvatarList,
  F0AvatarPerson,
  F0Box,
  F0Button,
  F0Heading,
  F0Icon,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import { Input, Textarea } from "@factorialco/f0-react/dist/experimental"
import { Add, AlertCircle, CheckCircle, Delete, Image } from "@factorialco/f0-react/icons/app"
const employees: { id: string; firstName: string; lastName: string }[] = [
  { id: "e1", firstName: "Laura", lastName: "Martinez" },
  { id: "e2", firstName: "Marc", lastName: "Vidal" },
  { id: "e3", firstName: "Ana", lastName: "Ruiz" },
]
import { strings } from "./state"
import { CourseSettingsNav } from "./CourseSettingsNav"
import { ToggleCard } from "./SettingsSection"
import { SettingsToast } from "./SettingsToast"
import { useSettingsToast } from "./useSettingsToast"
import {
  axisOptions,
  collaboratorCandidateOptions,
  collaboratorRoleOptions,
  competencyOptions,
  enrollmentCriteriaOptions,
  enrollmentEnrolled,
  enrollmentGroupOptions,
  enrollmentMatchCount,
  enrollmentNotEnrolled,
  initialCollaborators,
  type Collaborator,
  fundaeProfileOptions,
  settingsDefaults,
  tagOptions,
  typeOptions,
  validityOptions,
  workflowOptions,
} from "./settingsMocks"

/** The knowledge-test minimum the admin currently has typed. The save dialog
 *  reads it when it opens so every number on screen comes from the same value. */
// 70 = the new minimum already applied, which is what the group page shows when
// opened on its own. Rendering the settings section overwrites it with the value
// in the field, so the save dialog always reflects what the admin just typed.
/** Shared with the prototype so the save dialog can say WHICH criteria changed —
 *  the "why" is the combination, not the knowledge test alone. */
/** Exactly what the screen shows when it loads. If the baseline said LMS was not
 *  required while the toggle showed it on, every save carried a phantom tightening
 *  the admin never made — and people could be "completed" without meeting it. */
export const COMPLETION_BASELINE = {
  modules: true,
  quizMinimum: 80,
  attendance: true,
  attendanceMinimum: 75,
  knowledge: true,
  knowledgeMinimum: 50,
}

export const completionDraft = { ...COMPLETION_BASELINE }

export type CompletionChange = { label: string; from: string; to: string }

/** What the admin actually changed, in the product's own words. */
export function changedCriteria(): CompletionChange[] {
  const out: CompletionChange[] = []
  if (completionDraft.modules !== COMPLETION_BASELINE.modules) {
    out.push({
      label: "Complete all LMS modules",
      from: COMPLETION_BASELINE.modules ? "required" : "not required",
      to: completionDraft.modules ? "required" : "not required",
    })
  }
  if (completionDraft.quizMinimum !== COMPLETION_BASELINE.quizMinimum) {
    out.push({ label: "Minimum quiz score", from: `${COMPLETION_BASELINE.quizMinimum}%`, to: `${completionDraft.quizMinimum}%` })
  }
  if (completionDraft.attendance !== COMPLETION_BASELINE.attendance) {
    out.push({
      label: "Attend sessions",
      from: COMPLETION_BASELINE.attendance ? "required" : "not required",
      to: completionDraft.attendance ? "required" : "not required",
    })
  }
  if (completionDraft.knowledge !== COMPLETION_BASELINE.knowledge) {
    out.push({
      label: "Pass the knowledge test",
      from: COMPLETION_BASELINE.knowledge ? "required" : "not required",
      to: completionDraft.knowledge ? "required" : "not required",
    })
  }
  if (completionDraft.attendance && completionDraft.attendanceMinimum !== COMPLETION_BASELINE.attendanceMinimum) {
    out.push({ label: "Minimum attendance", from: `${COMPLETION_BASELINE.attendanceMinimum}%`, to: `${completionDraft.attendanceMinimum}%` })
  }
  if (completionDraft.knowledge && completionDraft.knowledgeMinimum !== COMPLETION_BASELINE.knowledgeMinimum) {
    out.push({ label: "Minimum score to pass", from: `${COMPLETION_BASELINE.knowledgeMinimum}%`, to: `${completionDraft.knowledgeMinimum}%` })
  }
  return out
}

const s = strings.settings
const ts = strings.trainingSettings

type Option = { value: string; label: string }

// Autosave toast copy — reuse the module's autosave strings; always name the specific setting.
const savedToggle = (title: string, on: boolean) => (on ? ts.toastEnabled(title) : ts.toastDisabled(title))
const savedField = (label: string) => `${label} updated`

// ---- Field primitives (F0 only — the same building blocks as the module) -----

/** Label + hint + single-line text input. `onCommit` fires on blur (autosave), not per keystroke. */
function TextField({
  label,
  hint,
  value,
  onChange,
  onCommit,
  placeholder,
}: {
  label: string
  hint?: string
  value: string
  onChange: (v: string) => void
  onCommit?: () => void
  placeholder?: string
}) {
  return <Input label={label} hint={hint} value={value} onChange={onChange} onBlur={onCommit} placeholder={placeholder} />
}

/** Label + hint + multi-line text area. `onCommit` fires on blur (autosave), not per keystroke. */
function AreaField({
  label,
  hint,
  value,
  onChange,
  onCommit,
}: {
  label: string
  hint?: string
  value: string
  onChange: (v: string) => void
  onCommit?: () => void
}) {
  return <Textarea label={label} hint={hint} value={value} onChange={onChange} onBlur={onCommit} rows={2} />
}

/** Label + hint + single-choice dropdown. */
function SelectField({
  label,
  hint,
  options,
  value,
  onChange,
  placeholder,
  showSearchBox,
}: {
  label: string
  hint?: string
  options: Option[]
  value: string | undefined
  onChange: (v: string) => void
  placeholder?: string
  showSearchBox?: boolean
}) {
  return (
    <F0Select
      label={label}
      hint={hint}
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={(v: string) => onChange(v)}
      showSearchBox={showSearchBox}
    />
  )
}

/** Label + hint + multi-choice dropdown (renders selected values as chips). */
function MultiSelectField({
  label,
  hint,
  hideLabel,
  options,
  value,
  onChange,
  placeholder,
}: {
  label: string
  hint?: string
  hideLabel?: boolean
  options: Option[]
  value: string[]
  onChange: (v: string[]) => void
  placeholder?: string
}) {
  return (
    <F0Select
      label={label}
      hideLabel={hideLabel}
      hint={hint}
      placeholder={placeholder}
      options={options}
      value={value}
      multiple
      showSearchBox
      onChange={(v: string[]) => onChange(v)}
    />
  )
}

/**
 * A bordered card that groups a `ToggleCard` with the fields it reveals: the
 * toggle sits on top (borderless), the revealed fields drop into a subtle panel
 * below — mirrors production's "enable + configure" settings blocks.
 */
function ExpandableCard({
  title,
  description,
  checked,
  onChange,
  children,
  flush,
}: {
  title: string
  description: string
  checked: boolean
  onChange: (v: boolean) => void
  children?: React.ReactNode
  /** Renders the revealed area without padding/gap — for content that manages its
   *  own rows and full-width dividers (nested toggles, à la SettingsFactorialOne). */
  flush?: boolean
}) {
  return (
    <F0Box
      border="default"
      borderColor="secondary"
      borderRadius="lg"
      maxWidth="200"
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <ToggleCard title={title} description={description} checked={checked} onChange={onChange} listMode />
      {checked && children && (
        <F0Box
          borderTop="default"
          borderColor="secondary"
          paddingX={flush ? undefined : "lg"}
          paddingY={flush ? undefined : "lg"}
          gap={flush ? undefined : "lg"}
          display="flex"
          flexDirection="column"
        >
          {children}
        </F0Box>
      )}
    </F0Box>
  )
}

/** Thumbnail upload — drop area standing in for production's image uploader. */
function ThumbnailField() {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text variant="label" content={s.thumbLabel} />
      <F0Text variant="description" content={s.thumbDesc} />
      <F0Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="xs"
        border="default"
        borderStyle="dashed"
        borderColor="secondary"
        borderRadius="lg"
        paddingY="xl"
        paddingX="lg"
      >
        <F0AvatarIcon avatar={{ type: "icon", icon: Image }} size="md" />
        <F0Text variant="description" content={s.thumbPh} align="center" />
      </F0Box>
    </F0Box>
  )
}

/** Sample of people matching the criteria — real mock employees (initials). */
const matchPeople = employees.slice(0, enrollmentMatchCount).map((e) => {
  const [firstName, ...rest] = `${e.firstName} ${e.lastName}`.split(" ")
  return { firstName, lastName: rest.join(" ") }
})

/** How many employees match the criteria, and how many are already enrolled. */
function MatchPreview() {
  return (
    <F0Box border="default" borderColor="secondary" borderRadius="lg" display="flex" flexDirection="column">
      <F0Box paddingX="lg" paddingY="md" display="flex" flexDirection="row" alignItems="center" gap="md">
        <F0AvatarList type="person" size="sm" max={4} avatars={matchPeople} />
        <F0Text variant="label" content={`${enrollmentMatchCount} ${s.enrMatchSuffix}`} />
      </F0Box>
      <F0Box borderTop="default" borderColor="secondary" paddingX="lg" paddingY="md">
        <F0Text variant="description" content={s.enrMatchBreakdown(enrollmentMatchCount, enrollmentEnrolled, enrollmentNotEnrolled)} />
      </F0Box>
    </F0Box>
  )
}

/** Two-unit (hours / minutes) duration display. `onCommit` fires on blur (autosave). */
function DurationField({
  hours,
  minutes,
  onChange,
  onCommit,
}: {
  hours: string
  minutes: string
  onChange: (h: string, m: string) => void
  onCommit?: () => void
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text variant="label" content={s.durationLabel} />
      <F0Box display="flex" flexDirection="row" gap="md">
        <Input label="Hours" value={hours} onChange={(v) => onChange(v, minutes)} onBlur={onCommit} />
        <Input label="Minutes" value={minutes} onChange={(v) => onChange(hours, v)} onBlur={onCommit} />
      </F0Box>
    </F0Box>
  )
}

// ---- Section bodies (local state; instant-save toast, no save bar) -----------

function BasicSection({ onSaved }: { onSaved: (msg: string) => void }) {
  const d = settingsDefaults.basic
  const [name, setName] = useState(d.name)
  const [objectives, setObjectives] = useState(d.objectives)
  const [description, setDescription] = useState(d.description)
  const [competencyIds, setCompetencyIds] = useState<string[]>(d.competencyIds)
  const [hours, setHours] = useState("20")
  const [minutes, setMinutes] = useState("0")
  const [isMandatory, setIsMandatory] = useState(d.isMandatory)
  const [validityEnabled, setValidityEnabled] = useState(d.validityEnabled)
  const [validFor, setValidFor] = useState<string | undefined>(d.validFor)

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl" maxWidth="180">
      <TextField label={s.nameLabel} hint={s.nameDesc} value={name} onChange={setName} onCommit={() => onSaved(savedField(s.nameLabel))} placeholder={s.namePh} />
      <ThumbnailField />
      <AreaField label={s.objLabel} hint={s.objDesc} value={objectives} onChange={setObjectives} onCommit={() => onSaved(savedField(s.objLabel))} />
      <AreaField label={s.descLabel} hint={s.descDesc} value={description} onChange={setDescription} onCommit={() => onSaved(savedField(s.descLabel))} />
      <MultiSelectField label={s.compLabel} hint={s.compDesc} placeholder={s.compPh} options={competencyOptions} value={competencyIds} onChange={(v) => { setCompetencyIds(v); onSaved(savedField(s.compLabel)) }} />
      <DurationField hours={hours} minutes={minutes} onChange={(h, m) => { setHours(h); setMinutes(m) }} onCommit={() => onSaved(savedField(s.durationLabel))} />
      <ToggleCard title={s.mandatoryTitle} description={s.mandatoryDesc} checked={isMandatory} onChange={(v) => { setIsMandatory(v); onSaved(savedToggle(s.mandatoryTitle, v)) }} />
      <ExpandableCard title={s.validityTitle} description={s.validityDesc} checked={validityEnabled} onChange={(v) => { setValidityEnabled(v); onSaved(savedToggle(s.validityTitle, v)) }}>
        <SelectField label={s.validityLabel} placeholder={s.selectPh} options={validityOptions} value={validFor} onChange={(v) => { setValidFor(v); onSaved(savedField(s.validityLabel)) }} />
      </ExpandableCard>
    </F0Box>
  )
}

function AdminSection({ onSaved }: { onSaved: (msg: string) => void }) {
  const d = settingsDefaults.internal
  const [year, setYear] = useState(String(d.year))
  const [code, setCode] = useState(d.code)
  const [type, setType] = useState<string | undefined>(d.type)
  const [tagIds, setTagIds] = useState<string[]>(d.tagIds)
  const [axeIds, setAxeIds] = useState<string[]>(d.axeIds)
  const [fundaeEnabled, setFundaeEnabled] = useState(d.fundaeEnabled)
  const [fundaeCode, setFundaeCode] = useState(d.fundaeCode)
  const [fundaeProfile, setFundaeProfile] = useState<string | undefined>(d.fundaeProfile)
  const [fundaeFile, setFundaeFile] = useState(d.fundaeFile)
  const [workflowEnabled, setWorkflowEnabled] = useState(d.workflowEnabled)
  const [workflowId, setWorkflowId] = useState<string | undefined>(d.workflowId)

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl" maxWidth="180">
      <TextField label={s.yearLabel} value={year} onChange={setYear} onCommit={() => onSaved(savedField(s.yearLabel))} />
      <TextField label={s.codeLabel} hint={s.codeDesc} value={code} onChange={setCode} onCommit={() => onSaved(savedField(s.codeLabel))} />
      <SelectField label={s.typeLabel} options={typeOptions} value={type} onChange={(v) => { setType(v); onSaved(savedField(s.typeLabel)) }} />
      <MultiSelectField label={s.tagsLabel} hint={s.tagsDesc} placeholder={s.tagsPh} options={tagOptions} value={tagIds} onChange={(v) => { setTagIds(v); onSaved(savedField(s.tagsLabel)) }} />
      <MultiSelectField label={s.axesLabel} hint={s.axesDesc} placeholder={s.axesPh} options={axisOptions} value={axeIds} onChange={(v) => { setAxeIds(v); onSaved(savedField(s.axesLabel)) }} />
      <ExpandableCard title={s.fundaeTitle} description={s.fundaeDesc} checked={fundaeEnabled} onChange={(v) => { setFundaeEnabled(v); onSaved(savedToggle(s.fundaeTitle, v)) }}>
        <F0Alert variant="info" title={s.fundaeCalloutTitle} description={s.fundaeCalloutDesc} />
        <TextField label={s.fundaeCodeLabel} hint={s.fundaeCodeDesc} value={fundaeCode} onChange={setFundaeCode} onCommit={() => onSaved(savedField(s.fundaeCodeLabel))} placeholder="00001" />
        <SelectField label={s.fundaeProfileLabel} hint={s.fundaeProfileDesc} placeholder={s.selectPh} options={fundaeProfileOptions} value={fundaeProfile} onChange={(v) => { setFundaeProfile(v); onSaved(savedField(s.fundaeProfileLabel)) }} />
        <TextField label={s.fundaeFileLabel} hint={s.fundaeFileDesc} value={fundaeFile} onChange={setFundaeFile} onCommit={() => onSaved(savedField(s.fundaeFileLabel))} />
      </ExpandableCard>
      <ExpandableCard title={s.workflowTitle} description={s.workflowDesc} checked={workflowEnabled} onChange={(v) => { setWorkflowEnabled(v); onSaved(savedToggle(s.workflowTitle, v)) }}>
        <SelectField label={s.workflowSelectLabel} placeholder={s.selectPh} options={workflowOptions} value={workflowId} onChange={(v) => { setWorkflowId(v); onSaved(savedField(s.workflowSelectLabel)) }} />
      </ExpandableCard>
    </F0Box>
  )
}

export function CompletionSection({ onSaved }: { onSaved: (msg: string) => void }) {
  const d = settingsDefaults.completion
  // Everything already on: the demo starts from a course that is fully
  // configured, so the only thing to touch is the knowledge test score.
  const [moduleCompleted, setModuleCompleted] = useState(true)
  const [moduleScore, setModuleScore] = useState(String(d.moduleScore))
  const [watchFull, setWatchFull] = useState(true)
  const [attendance, setAttendance] = useState(true)
  const [attendancePercentage, setAttendancePercentage] = useState(String(d.attendancePercentage))
  const [knowledgeTest, setKnowledgeTest] = useState(true)
  const [knowledgeScore, setKnowledgeScore] = useState(String(d.knowledgeScore))

  // Publish what the admin has typed so the save dialog can name which criteria
  // changed — the "why" is the combination, and it lives in one place.
  completionDraft.modules = moduleCompleted
  completionDraft.attendance = attendance
  completionDraft.knowledge = knowledgeTest
  completionDraft.quizMinimum = Number(moduleScore || 0)
  completionDraft.attendanceMinimum = Number(attendancePercentage || 0)
  completionDraft.knowledgeMinimum = Number(knowledgeScore || 0)

  // Added by the Quizzes & KT initiative: 25 people already finished this
  // course under the current requirements. Making a requirement stricter would
  // re-grade them, so the warning shows up in the card being changed — not only
  // in the confirmation dialog at the end.
  // The 25 people who already finished, with their real scores, so the warning
  // is a function of what the admin types instead of a number nailed next to an
  // editable field.
  // Same 25 people the save dialog counts: exactly 6 sit below the default 70,
  // so the number here and the number there can never disagree.
  const FINISHED_SCORES = [
    48, 55, 62, 66, 68, 69, 70, 72, 74, 75, 78, 80, 82, 84, 85, 86, 88, 90, 91, 92, 94, 95, 96, 98, 100,
  ]
  completionDraft.knowledgeMinimum = Number(knowledgeScore || 0)
  completionDraft.modules = moduleCompleted
  completionDraft.attendance = attendance
  completionDraft.knowledge = knowledgeTest
  completionDraft.quizMinimum = Number(moduleScore || 0)
  completionDraft.attendanceMinimum = Number(attendancePercentage || 0)
  const failingAtScore = FINISHED_SCORES.filter((s) => s < Number(knowledgeScore || 0)).length
  const ktChanged = Number(knowledgeScore || 0) !== d.knowledgeScore
  const ktStricter = knowledgeTest && ktChanged && failingAtScore > 0
  const attendanceStricter =
    attendance && Number(attendancePercentage) > d.attendancePercentage

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl" maxWidth="180">
      <ExpandableCard flush title={s.cModulesTitle} description={s.cModulesDesc} checked={moduleCompleted} onChange={(v) => { setModuleCompleted(v); onSaved(savedToggle(s.cModulesTitle, v)) }}>
        <ToggleCard listMode title={s.cWatchFullTitle} description={s.cWatchFullDesc} checked={watchFull} onChange={(v) => { setWatchFull(v); onSaved(savedToggle(s.cWatchFullTitle, v)) }} />
        <F0Box borderTop="default" borderColor="secondary" />
        <F0Box paddingX="lg" paddingY="md" display="flex" flexDirection="column">
          <TextField label={s.cModulesScoreTitle} hint={s.cModulesScoreDesc} value={moduleScore} onChange={setModuleScore} onCommit={() => onSaved(savedField(s.cModulesScoreTitle))} />
        </F0Box>
      </ExpandableCard>
      <ExpandableCard title={s.cAttendanceTitle} description={s.cAttendanceDesc} checked={attendance} onChange={(v) => { setAttendance(v); onSaved(savedToggle(s.cAttendanceTitle, v)) }}>
        <TextField label={s.cAttendanceFieldTitle} hint={s.cAttendanceFieldDesc} value={attendancePercentage} onChange={setAttendancePercentage} onCommit={() => onSaved(savedField(s.cAttendanceFieldTitle))} />
      </ExpandableCard>
      <ExpandableCard title={s.cKnowledgeTitle} description={s.cKnowledgeDesc} checked={knowledgeTest} onChange={(v) => { setKnowledgeTest(v); onSaved(savedToggle(s.cKnowledgeTitle, v)) }}>
        <TextField label={s.cKnowledgeScoreTitle} hint={s.cKnowledgeScoreDesc} value={knowledgeScore} onChange={setKnowledgeScore} onCommit={() => onSaved(savedField(s.cKnowledgeScoreTitle))} />
      </ExpandableCard>
      {/* The revamp's "Recalculate participant statuses" info banner was here.
          Removed: with the RFC it is false — saving changes nobody's status, and
          a re-check is per group, not "all the participants in the course". The
          truthful version is the contextual warning inside the card you change. */}
    </F0Box>
  )
}

function EnrollmentSection({ onSaved }: { onSaved: (msg: string) => void }) {
  const d = settingsDefaults.enrollment
  const [automatic, setAutomatic] = useState(d.automatic)
  const [criteriaIds, setCriteriaIds] = useState<string[]>(d.criteriaIds)
  const [placement, setPlacement] = useState<"group" | "later">(d.placement)
  const [groupId, setGroupId] = useState<string | undefined>(d.groupId)

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl" maxWidth="180">
      <ExpandableCard title={s.enrToggleTitle} description={s.enrToggleDesc} checked={automatic} onChange={(v) => { setAutomatic(v); onSaved(savedToggle(s.enrToggleTitle, v)) }}>
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text variant="label" content={s.enrCriteriaLabel} />
          <F0Text variant="description" content={s.enrCriteriaDesc} />
          <MultiSelectField hideLabel label={s.enrCriteriaLabel} placeholder={s.enrCriteriaPh} options={enrollmentCriteriaOptions} value={criteriaIds} onChange={(v) => { setCriteriaIds(v); onSaved(savedField(s.enrCriteriaLabel)) }} />
        </F0Box>
        <MatchPreview />
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text variant="label" content={s.enrWhereLabel} />
            <F0Text variant="description" content={s.enrWhereDesc} />
          </F0Box>
          <CardSelectableContainer
            grouped
            label={s.enrWhereLabel}
            value={placement}
            onChange={(v) => { if (v) { setPlacement(v); onSaved(v === "group" ? `${s.enrGroupTitle} selected` : `${s.enrLaterTitle} selected`) } }}
            items={[
              {
                value: "group",
                title: s.enrGroupTitle,
                description: s.enrGroupDesc,
                selectedContent: (
                  <SelectField label={s.enrGroupSelectLabel} hint={s.enrGroupSelectHint} placeholder={s.selectPh} options={enrollmentGroupOptions} value={groupId} onChange={(v) => { setGroupId(v); onSaved(savedField(s.enrGroupSelectLabel)) }} />
                ),
              },
              { value: "later", title: s.enrLaterTitle, description: s.enrLaterDesc },
            ]}
          />
        </F0Box>
      </ExpandableCard>
    </F0Box>
  )
}

/** One row in the "Collaborators with access" list. */
function CollaboratorRow({
  person,
  onChangeRole,
  onRemove,
  listMode,
}: {
  person: Collaborator
  onChangeRole: (role: string) => void
  onRemove: () => void
  listMode?: boolean
}) {
  const isOwner = person.role === "owner"
  return (
    <F0Box
      borderTop={listMode ? "default" : undefined}
      borderColor="secondary"
      paddingX="lg"
      paddingY="md"
      display="flex"
      flexDirection="row"
      justifyContent="between"
      alignItems="center"
      gap="md"
    >
      <F0Box display="flex" flexDirection="row" alignItems="center" gap="md" minWidth="0">
        <F0AvatarPerson
          firstName={person.name.split(" ")[0]}
          lastName={person.name.split(" ").slice(1).join(" ")}
          size="sm"
        />
        <F0Box display="flex" flexDirection="column" gap="xs" minWidth="0">
          <F0Text variant="label" content={person.name} />
          {person.subtitle && <F0Text variant="description" content={person.subtitle} />}
        </F0Box>
      </F0Box>
      {isOwner ? (
        <F0Text variant="body" content={s.collabOwner} />
      ) : (
        <F0Box display="flex" flexDirection="row" alignItems="center" gap="sm">
          <F0Select
            label={s.collabListTitle}
            hideLabel
            options={collaboratorRoleOptions}
            value={person.role}
            onChange={(v: string) => onChangeRole(v)}
          />
          <F0Button label={s.collabRemove} hideLabel icon={Delete} variant="outline" onClick={onRemove} />
        </F0Box>
      )}
    </F0Box>
  )
}

function CollaboratorsSection({ onSaved }: { onSaved: (msg: string) => void }) {
  const [people, setPeople] = useState<Collaborator[]>(initialCollaborators)
  const [toAdd, setToAdd] = useState<string[]>([])
  const [addRole, setAddRole] = useState<string>("editor")

  const candidates = useMemo(
    () => collaboratorCandidateOptions.filter((o) => !people.some((p) => p.id === o.value)),
    [people]
  )
  const roleLabel = (role: string) => collaboratorRoleOptions.find((o) => o.value === role)?.label ?? role

  const add = () => {
    if (toAdd.length === 0) return
    const added: Collaborator[] = toAdd.map((v) => ({
      id: v,
      name: collaboratorCandidateOptions.find((o) => o.value === v)?.label ?? v,
      subtitle: "",
      role: addRole === "viewer" ? "viewer" : "editor",
    }))
    setPeople((prev) => [...prev, ...added])
    setToAdd([])
    const who = added.length === 1 ? added[0].name : `${added.length} collaborators`
    onSaved(`${who} added as ${roleLabel(addRole)}`)
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl" maxWidth="200">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <F0Text variant="label" content={s.collabAddTitle} />
        <F0Box display="flex" flexDirection="row" gap="sm" alignItems="end">
          <F0Box grow minWidth="0">
            <F0Select
              label={s.collabAddTitle}
              hideLabel
              placeholder={s.collabSearchPh}
              options={candidates}
              value={toAdd}
              multiple
              showSearchBox
              onChange={(v: string[]) => setToAdd(v)}
            />
          </F0Box>
          <F0Select
            label={s.collabAddTitle}
            hideLabel
            options={collaboratorRoleOptions}
            value={addRole}
            onChange={(v: string) => setAddRole(v)}
          />
          <F0Button label={s.collabAdd} icon={Add} variant="outline" onClick={add} disabled={toAdd.length === 0} />
        </F0Box>
      </F0Box>

      <F0Box display="flex" flexDirection="column" gap="sm">
        <F0Text variant="label" content={s.collabListTitle} />
        <F0Box border="default" borderColor="secondary" borderRadius="lg" display="flex" flexDirection="column">
          {people.map((p, i) => (
            <CollaboratorRow
              key={p.id}
              person={p}
              listMode={i > 0}
              onChangeRole={(role) => { setPeople((prev) => prev.map((x) => (x.id === p.id ? { ...x, role: role === "viewer" ? "viewer" : "editor" } : x))); onSaved(`${p.name} set to ${roleLabel(role)}`) }}
              onRemove={() => { setPeople((prev) => prev.filter((x) => x.id !== p.id)); onSaved(`${p.name} removed`) }}
            />
          ))}
        </F0Box>
      </F0Box>
    </F0Box>
  )
}

// ---- Section registry + page -------------------------------------------------

const SECTIONS = {
  basic: { title: s.secBasic, description: s.basicDesc, Body: BasicSection },
  internal: { title: s.secInternal, description: s.internalDesc, Body: AdminSection },
  completion: { title: s.secCompletion, description: s.completionDesc, Body: CompletionSection },
  enrollment: { title: s.enrTitle, description: s.enrDesc, Body: EnrollmentSection },
  collaborators: { title: s.secCollaborators, description: s.collabDesc, Body: CollaboratorsSection },
} as const

export type SettingsSection = keyof typeof SECTIONS

/**
 * A single Settings section — the new Factorial settings look&feel: a
 * `heading-large` title + description, then the section's controls built from
 * the SAME components as the module `Settings › Training` (`ToggleCard`, F0
 * inputs). Changes save instantly with a toast (no legacy save bar).
 */
export function SettingsSectionPage({ section }: { section: SettingsSection }) {
  const cfg = SECTIONS[section]
  const Body = cfg.Body
  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <F0Heading variant="heading-large" as="h1" content={cfg.title} />
        <F0Text variant="description" content={cfg.description} />
      </F0Box>
      {/* Manual save: edits are local; nothing persists until "Save" in the
          footer. onSaved is a no-op now (autosave removed, kept for later). */}
      <Body onSaved={() => {}} />
    </F0Box>
  )
}

/**
 * Course **Settings** — reworked with the new Factorial settings look&feel (as
 * in the module's `Settings › Training`): a LEFT side-panel rail
 * (`CourseSettingsNav`) in its own bordered column + the active section in the
 * padded content area. Mirrors the module `SettingsLayout` structure.
 */
export function CourseSettingsLayout({
  children,
  active = "completion",
  onSelect = () => {},
  onSave,
  saved,
}: {
  children: ReactNode
  saved?: boolean
  active?: SettingsSection
  onSelect?: (id: string) => void
  onSave?: () => void
}) {
  const { message, show, dismiss } = useSettingsToast()
  return (
    <F0Box
      display="flex"
      flexDirection="row"
      height="full"
      borderTop="default"
      borderColor="secondary"
    >
      <F0Box maxWidth="80" height="full" paddingTop="md" borderRight="default" borderColor="secondary">
        <CourseSettingsNav active={active} onSelect={onSelect} />
      </F0Box>
      {/* Content column fills the viewport height: the content area scrolls on its
          own so the manual-save footer stays pinned to the bottom, and the rail
          divider spans full height. Content is capped at 712px and centered. */}
      <F0Box grow minWidth="0" height="full" display="flex" flexDirection="column">
        <F0Box grow minHeight="0" overflow="auto" padding="xl">
          <div style={{ maxWidth: 712, marginInline: "auto" }}>
            {children}
          </div>
        </F0Box>
        <F0Box borderTop="default" borderColor="secondary" paddingY="lg" paddingX="xl">
          <div style={{ maxWidth: 712, marginInline: "auto" }}>
            <F0Box display="flex" flexDirection="row" alignItems="center" justifyContent="between" gap="lg">
              <F0Box display="flex" flexDirection="row" alignItems="center" gap="sm">
                <F0Icon icon={saved ? CheckCircle : AlertCircle} size="sm" />
                <F0Text variant="body" content={saved ? "All changes saved" : s.saveFooterMsg} />
              </F0Box>
              <F0Button variant="outline" label={s.saveFooterCta} onClick={() => (onSave ? onSave() : show(s.savedConfirm))} />
            </F0Box>
          </div>
        </F0Box>
      </F0Box>
      {message && <SettingsToast message={message} onDismiss={dismiss} />}
    </F0Box>
  )
}
