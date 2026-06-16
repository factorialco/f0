import { useState, useRef, useEffect, useCallback } from "react"
import {
  F0Text,
  F0Heading,
  F0Dialog,
  F0Alert,
  F0TagDot,
  CardSelectableContainer,
} from "@factorialco/f0-react"
import { createPortal } from "react-dom"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Step1State {
  name: string
  description: string
  criteria: CriterionSelection[]
  whitelist: string[]
  blacklist: string[]
}

interface Step2State {
  courses: string[]
  groupManagement: "ongoing" | "cohorts"
  distribution: "parallel" | "sequential"
  delay: { value: number; unit: "days" | "weeks" | "months" }
  triggerMode: "immediate" | "delayed"
}

interface Step3State {
  retroactivity: "future_only" | "current_and_future"
}

interface CriterionSelection {
  type: string
  value: string
}

export interface NewSmartEnrollment {
  step1: Step1State
  step2: Step2State
  step3: Step3State
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onCreate: (enrollment: NewSmartEnrollment) => void
  ruleType?: RuleType
}

type RuleType = "continuous" | "one-time"

// ---------------------------------------------------------------------------
// Mock Data
// ---------------------------------------------------------------------------

const criteriaOptions = [
  { value: "workplace", label: "Workplace" },
  { value: "role", label: "Role" },
  { value: "managed-by", label: "Managed by" },
  { value: "by-name", label: "By name" },
  { value: "other", label: "Other" },
]

const criteriaDropdownOptions: Record<
  string,
  { value: string; label: string; subtitle: string }[]
> = {
  workplace: [
    { value: "barcelona", label: "Barcelona", subtitle: "Office / City" },
    { value: "madrid", label: "Madrid", subtitle: "Office / City" },
    { value: "london", label: "London", subtitle: "Office / City" },
    { value: "remote", label: "Remote", subtitle: "Location-Related" },
  ],
  role: [
    { value: "engineer", label: "Engineer", subtitle: "Engineering" },
    { value: "designer", label: "Designer", subtitle: "Design" },
    { value: "product-manager", label: "Product Manager", subtitle: "Product" },
    { value: "customer-support", label: "Customer Support Agent", subtitle: "Support" },
  ],
  "managed-by": [
    { value: "alice-johnson", label: "Alice Johnson", subtitle: "Direct Manager" },
    { value: "bob-smith", label: "Bob Smith", subtitle: "Direct Manager" },
    { value: "vp-product", label: "VP of Product", subtitle: "Reporting Line" },
  ],
  other: [
    { value: "new-hires", label: "New hires (< 3 months)", subtitle: "Tenure" },
    { value: "full-time", label: "Full-time employees", subtitle: "Contract type" },
    { value: "probation", label: "On probation", subtitle: "Status" },
  ],
}

const employeeList = [
  { value: "emp-1", label: "Ana García", subtitle: "Engineering" },
  { value: "emp-2", label: "Carlos López", subtitle: "Design" },
  { value: "emp-3", label: "María Torres", subtitle: "Product" },
  { value: "emp-4", label: "Pablo Ruiz", subtitle: "Engineering" },
  { value: "emp-5", label: "Lucía Fernández", subtitle: "Support" },
  { value: "emp-6", label: "Javier Martín", subtitle: "Engineering" },
  { value: "emp-7", label: "Elena Sánchez", subtitle: "Design" },
  { value: "emp-8", label: "David Moreno", subtitle: "Product" },
  { value: "emp-9", label: "Sara Jiménez", subtitle: "Sales" },
  { value: "emp-10", label: "Andrés Navarro", subtitle: "Engineering" },
  { value: "emp-11", label: "Laura Romero", subtitle: "HR" },
  { value: "emp-12", label: "Miguel Díaz", subtitle: "Finance" },
]

const MATCHING_EMPLOYEES = 12

// ---------------------------------------------------------------------------
// Portal Dropdown
// ---------------------------------------------------------------------------

function ChipDropdown({
  anchorRef,
  onClose,
  children,
}: {
  anchorRef: React.RefObject<HTMLDivElement | null>
  onClose: () => void
  children: React.ReactNode
}) {
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect()
      setPos({ top: rect.top - 4, left: rect.left })
    }
  }, [anchorRef])

  useEffect(() => {
    const timer = setTimeout(() => {
      const handleClick = (e: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target as Node) &&
          anchorRef.current &&
          !anchorRef.current.contains(e.target as Node)
        ) {
          onClose()
        }
      }
      document.addEventListener("click", handleClick)
      cleanup = () => document.removeEventListener("click", handleClick)
    }, 0)
    let cleanup: (() => void) | undefined
    return () => { clearTimeout(timer); cleanup?.() }
  }, [anchorRef, onClose])

  return createPortal(
    <div
      ref={dropdownRef}
      className="fixed z-[9999] min-w-[220px] rounded-lg border border-solid border-f1-border-secondary bg-f1-background py-1 shadow-lg"
      style={{ top: pos.top, left: pos.left, transform: "translateY(-100%)" }}
    >
      {children}
    </div>,
    document.body
  )
}

// ---------------------------------------------------------------------------
// Employee Selector
// ---------------------------------------------------------------------------

function EmployeeSelector({
  selected,
  onChange,
  placeholder,
}: {
  selected: string[]
  onChange: (value: string[]) => void
  placeholder: string
}) {
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = employeeList.filter(
    (emp) =>
      emp.label.toLowerCase().includes(search.toLowerCase()) ||
      emp.subtitle.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`flex min-h-[38px] flex-wrap items-center gap-1 rounded-md border border-solid px-2 py-1.5 ${
          isOpen ? "border-f1-border-selected-bold" : "border-f1-border-secondary"
        } bg-f1-background`}
        onClick={() => setIsOpen(true)}
      >
        {selected.map((id) => {
          const emp = employeeList.find((e) => e.value === id)
          return (
            <span key={id} className="inline-flex items-center gap-1 rounded-full border border-solid border-f1-border bg-f1-background-tertiary px-2 py-0.5 text-xs text-f1-foreground">
              {emp?.label}
              <button onClick={(e) => { e.stopPropagation(); onChange(selected.filter((v) => v !== id)) }} className="text-f1-foreground-disabled hover:text-f1-foreground">×</button>
            </span>
          )
        })}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={selected.length === 0 ? placeholder : ""}
          className="min-w-[100px] flex-1 border-none bg-transparent text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none"
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 max-h-[200px] w-full overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background py-1 shadow-lg">
          {filtered.map((emp) => {
            const isChecked = selected.includes(emp.value)
            return (
              <button
                key={emp.value}
                onClick={() => onChange(isChecked ? selected.filter((v) => v !== emp.value) : [...selected, emp.value])}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-f1-background-hover ${isChecked ? "bg-f1-background-hover" : ""}`}
              >
                <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border border-solid text-[10px] ${isChecked ? "border-f1-border-selected-bold bg-f1-background-selected-bold text-f1-foreground-inverse" : "border-f1-border-secondary bg-f1-background"}`}>
                  {isChecked && "✓"}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-f1-foreground">{emp.label}</span>
                  <span className="text-xs text-f1-foreground-secondary">{emp.subtitle}</span>
                </div>
              </button>
            )
          })}
          {filtered.length === 0 && (
            <div className="px-3 py-3 text-center text-sm text-f1-foreground-secondary">No employees found</div>
          )}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main Dialog (5-step wizard)
// ---------------------------------------------------------------------------

export function CreateSmartEnrollmentDialog({ isOpen, onClose, onCreate, ruleType }: Props) {
  const [step, setStep] = useState(1)

  const isDynamic = ruleType === "continuous"
  const stepLabels = isDynamic
    ? ["Name", "Who", "Courses", "Existing people", "Confirm"]
    : ["Name", "Who", "Courses", "Confirm"]
  const totalSteps = stepLabels.length

  const [identity, setIdentity] = useState({ name: "", description: "" })
  const [criteria, setCriteria] = useState<CriterionSelection[]>([])
  const [whitelist, setWhitelist] = useState<string[]>([])
  const [blacklist, setBlacklist] = useState<string[]>([])
  const [courses, setCourses] = useState<string[]>([])
  const [groupManagement, setGroupManagement] = useState<"ongoing" | "cohorts">("ongoing")
  const [triggerMode, setTriggerMode] = useState<"immediate" | "delayed">("immediate")
  const [delay, setDelay] = useState<{ value: number; unit: "days" | "weeks" | "months" }>({ value: 2, unit: "weeks" })
  const [retroactivity, setRetroactivity] = useState<"future_only" | "current_and_future">("current_and_future")

  const resetForm = () => {
    setStep(1)
    setIdentity({ name: "", description: "" })
    setCriteria([])
    setWhitelist([])
    setBlacklist([])
    setCourses([])
    setGroupManagement("ongoing")
    setTriggerMode("immediate")
    setDelay({ value: 2, unit: "weeks" })
    setRetroactivity("current_and_future")
  }

  const handleClose = () => { resetForm(); onClose() }

  const handleCreate = () => {
    onCreate({
      step1: { name: identity.name, description: identity.description, criteria, whitelist, blacklist },
      step2: { courses, groupManagement, distribution: "parallel", delay, triggerMode },
      step3: { retroactivity },
    })
    resetForm()
  }

  const netCount = MATCHING_EMPLOYEES + whitelist.length - blacklist.length

  // Validation per step
  const canAdvance: Record<number, boolean> = isDynamic
    ? { 1: identity.name.trim() !== "", 2: true, 3: courses.length > 0, 4: true, 5: true }
    : { 1: identity.name.trim() !== "", 2: true, 3: courses.length > 0, 4: true }

  const primaryAction =
    step === totalSteps
      ? { label: isDynamic ? "Activate rule ↗" : "Enroll now ↗", onClick: handleCreate }
      : { label: "Continue →", onClick: () => setStep(step + 1), disabled: !canAdvance[step] }

  const secondaryAction =
    step === 1
      ? undefined
      : { label: "Back", onClick: () => setStep(step - 1) }

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={handleClose}
      width="xl"
      title="New enrollment"
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      disableContentPadding
    >
      <div className="flex h-[58vh] flex-1 flex-row">
        {/* Left sidebar — step navigation */}
        <nav className="flex w-1/3 shrink-0 flex-col overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-3">
          {/* Sidebar header */}
          <div className="mb-4 flex flex-col gap-1.5 px-3 pt-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-f1-foreground-secondary">New enrollment</span>
            <span className="inline-flex w-fit rounded-md border border-solid border-f1-border-secondary px-2 py-0.5 text-xs font-medium text-f1-foreground">
              {isDynamic ? "Dynamic rule" : "One-shot"}
            </span>
          </div>
          {/* Steps */}
          <div className="flex flex-col gap-1.5">
          {stepLabels.map((label, index) => {
            const stepNum = index + 1
            const isActive = stepNum === step
            const isCompleted = stepNum < step
            return (
              <button
                key={label}
                type="button"
                onClick={() => { if (isCompleted || isActive) setStep(stepNum) }}
                disabled={!isCompleted && !isActive}
                className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-left transition-colors ${
                  isActive
                    ? "bg-f1-background-selected"
                    : isCompleted
                      ? "cursor-pointer hover:bg-f1-background-secondary-hover"
                      : "cursor-default opacity-60"
                }`}
              >
                {/* Step indicator */}
                {isCompleted ? (
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-f1-background-secondary text-xs text-f1-foreground-secondary">
                    ✓
                  </span>
                ) : (
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                    isActive
                      ? "bg-f1-background-selected-bold text-f1-foreground-inverse"
                      : "bg-f1-background-tertiary text-f1-foreground-secondary"
                  }`}>
                    {stepNum}
                  </span>
                )}
                <span className={`text-sm font-medium ${
                  isActive ? "text-f1-foreground" : isCompleted ? "text-f1-foreground-secondary" : "text-f1-foreground"
                }`}>
                  {label}
                </span>
              </button>
            )
          })}
          </div>
        </nav>

        {/* Right content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {step === 1 && <WizardStep1 identity={identity} setIdentity={setIdentity} isDynamic={isDynamic} />}
          {step === 2 && <WizardStep2 criteria={criteria} setCriteria={setCriteria} whitelist={whitelist} setWhitelist={setWhitelist} blacklist={blacklist} setBlacklist={setBlacklist} netCount={netCount} isDynamic={isDynamic} />}
          {step === 3 && <WizardStep3Courses courses={courses} setCourses={setCourses} isDynamic={isDynamic} netCount={netCount} />}
          {isDynamic && step === 4 && <WizardStep4Existing retroactivity={retroactivity} setRetroactivity={setRetroactivity} />}
          {isDynamic && step === 5 && <WizardStep5Confirm netCount={netCount} identity={identity} criteria={criteria} courses={courses} retroactivity={retroactivity} isDynamic={true} />}
          {!isDynamic && step === 4 && <WizardStep5Confirm netCount={netCount} identity={identity} criteria={criteria} courses={courses} retroactivity="future_only" isDynamic={false} />}
        </div>
      </div>
    </F0Dialog>
  )
}

// ---------------------------------------------------------------------------
// Step 1: Identity
// ---------------------------------------------------------------------------

function WizardStep1({
  identity,
  setIdentity,
  isDynamic,
}: {
  identity: { name: string; description: string }
  setIdentity: React.Dispatch<React.SetStateAction<{ name: string; description: string }>>
  isDynamic: boolean
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content={isDynamic ? "Name your rule" : "Name this assignment"} />
        <F0Text variant="description" content={isDynamic ? "Give it a clear name so you can find it easily in the Enrollments list." : "Give it a clear name so you can find it in the Enrollments history."} />
      </div>
      <div className="flex flex-col gap-2">
        <F0Text variant="label" content="Name" />
        <input
          type="text"
          value={identity.name}
          onChange={(e) => setIdentity((s) => ({ ...s, name: e.target.value }))}
          placeholder={isDynamic ? "e.g. Onboarding Engineers - Barcelona" : "e.g. Compliance audit Q2 — Sales"}
          className="rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-selected-bold focus:outline-none"
        />
        {!isDynamic && (
          <F0Alert variant="info" title="This is a one-time assignment. It won't repeat automatically for new people." description="" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <F0Text variant="label" content="Description (optional)" />
        <textarea
          value={identity.description}
          onChange={(e) => setIdentity((s) => ({ ...s, description: e.target.value }))}
          placeholder="Optional description for other admins"
          rows={3}
          className="rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-selected-bold focus:outline-none"
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 2: Criteria
// ---------------------------------------------------------------------------

function WizardStep2({
  criteria,
  setCriteria,
  whitelist,
  setWhitelist,
  blacklist,
  setBlacklist,
  netCount,
  isDynamic,
}: {
  criteria: CriterionSelection[]
  setCriteria: React.Dispatch<React.SetStateAction<CriterionSelection[]>>
  whitelist: string[]
  setWhitelist: React.Dispatch<React.SetStateAction<string[]>>
  blacklist: string[]
  setBlacklist: React.Dispatch<React.SetStateAction<string[]>>
  netCount: number
  isDynamic: boolean
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [employeeSearch, setEmployeeSearch] = useState("")
  const chipRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const handleCloseDropdown = useCallback(() => setOpenDropdown(null), [])

  const filteredEmployees = employeeList.filter(
    (emp) =>
      emp.label.toLowerCase().includes(employeeSearch.toLowerCase()) ||
      emp.subtitle.toLowerCase().includes(employeeSearch.toLowerCase())
  )
  const selectedByName = criteria.filter((c) => c.type === "by-name").map((c) => c.value)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content={isDynamic ? "Who does this rule apply to?" : "Who do you want to enroll?"} />
        <F0Text variant="description" content={isDynamic ? "Add group criteria or individual people. The rule will enroll anyone who matches." : "These people will be enrolled right now, when you confirm. This won't repeat for future hires."} />
      </div>

      {/* Criteria label */}
      <span className="text-[10px] font-semibold uppercase tracking-wider text-f1-foreground-secondary">Criteria</span>

      {/* Token container */}
      <div className="flex min-h-[42px] flex-wrap items-center gap-1.5 rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2">
        {criteria.length === 0 && (
          <span className="text-sm text-f1-foreground-secondary">Select criteria below...</span>
        )}
        {criteria.map((c, idx) => {
          const optionLabel = c.type === "by-name"
            ? employeeList.find((e) => e.value === c.value)?.label
            : criteriaDropdownOptions[c.type]?.find((o) => o.value === c.value)?.label
          return (
            <span key={`${c.type}-${c.value}-${idx}`} className="inline-flex items-center gap-1 rounded-full border border-solid border-f1-border-selected-bold bg-f1-background-selected-secondary px-2.5 py-0.5 text-xs text-f1-foreground-selected">
              <span className="font-medium">{criteriaOptions.find((o) => o.value === c.type)?.label}:</span>
              {optionLabel}
              <button onClick={() => setCriteria((s) => s.filter((_, i) => i !== idx))} className="ml-0.5 text-f1-foreground-selected hover:text-f1-foreground">×</button>
            </span>
          )
        })}
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2">
        {criteriaOptions.map((option) => {
          const isOpen = openDropdown === option.value
          const isByName = option.value === "by-name"
          const count = criteria.filter((c) => c.type === option.value).length
          return (
            <div key={option.value} className="relative" ref={(el) => { chipRefs.current[option.value] = el }}>
              <button
                onClick={() => setOpenDropdown(isOpen ? null : option.value)}
                className={`inline-flex items-center gap-1 rounded-full border border-solid px-3 py-1.5 text-sm transition-colors ${
                  count > 0
                    ? "border-f1-border-selected-bold bg-f1-background-selected-secondary text-f1-foreground-selected"
                    : "border-f1-border bg-f1-background text-f1-foreground hover:bg-f1-background-hover"
                }`}
              >
                {count > 0 && <span className="flex h-4 w-4 items-center justify-center rounded-full bg-f1-background-selected-bold text-[10px] text-f1-foreground-inverse">{count}</span>}
                {option.label}
                <span className="text-xs text-f1-foreground-disabled">▾</span>
              </button>

              {isOpen && !isByName && (
                <ChipDropdown anchorRef={{ current: chipRefs.current[option.value] ?? null }} onClose={handleCloseDropdown}>
                  {criteriaDropdownOptions[option.value]?.map((item) => {
                    const sel = criteria.some((c) => c.type === option.value && c.value === item.value)
                    return (
                      <button
                        key={item.value}
                        onClick={() => {
                          if (sel) setCriteria((s) => s.filter((c) => !(c.type === option.value && c.value === item.value)))
                          else setCriteria((s) => [...s, { type: option.value, value: item.value }])
                        }}
                        className={`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-f1-background-hover ${sel ? "bg-f1-background-hover" : ""}`}
                      >
                        <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border border-solid text-[10px] ${sel ? "border-f1-border-selected-bold bg-f1-background-selected-bold text-f1-foreground-inverse" : "border-f1-border-secondary bg-f1-background"}`}>{sel && "✓"}</span>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-f1-foreground">{item.label}</span>
                          <span className="text-xs text-f1-foreground-secondary">{item.subtitle}</span>
                        </div>
                      </button>
                    )
                  })}
                </ChipDropdown>
              )}

              {isOpen && isByName && (
                <ChipDropdown anchorRef={{ current: chipRefs.current[option.value] ?? null }} onClose={handleCloseDropdown}>
                  <div className="flex flex-col">
                    <div className="px-3 py-2">
                      <input type="text" value={employeeSearch} onChange={(e) => setEmployeeSearch(e.target.value)} placeholder="Search employees..." autoFocus className="w-full rounded-md border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-selected-bold focus:outline-none" />
                    </div>
                    {selectedByName.length > 0 && (
                      <button onClick={() => setCriteria((s) => s.filter((c) => c.type !== "by-name"))} className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-f1-foreground-secondary hover:bg-f1-background-hover">Clear all ({selectedByName.length})</button>
                    )}
                    <div className="max-h-[200px] overflow-y-auto">
                      {filteredEmployees.map((emp) => {
                        const isChecked = selectedByName.includes(emp.value)
                        return (
                          <button
                            key={emp.value}
                            onClick={() => {
                              if (isChecked) setCriteria((s) => s.filter((c) => !(c.type === "by-name" && c.value === emp.value)))
                              else setCriteria((s) => [...s, { type: "by-name", value: emp.value }])
                            }}
                            className={`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-f1-background-hover ${isChecked ? "bg-f1-background-hover" : ""}`}
                          >
                            <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border border-solid text-[10px] ${isChecked ? "border-f1-border-selected-bold bg-f1-background-selected-bold text-f1-foreground-inverse" : "border-f1-border-secondary bg-f1-background"}`}>{isChecked && "✓"}</span>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-f1-foreground">{emp.label}</span>
                              <span className="text-xs text-f1-foreground-secondary">{emp.subtitle}</span>
                            </div>
                          </button>
                        )
                      })}
                      {filteredEmployees.length === 0 && <div className="px-3 py-3 text-center text-sm text-f1-foreground-secondary">No employees found</div>}
                    </div>
                  </div>
                </ChipDropdown>
              )}
            </div>
          )
        })}
      </div>

      {/* Suggestions */}
      {criteria.length === 0 && (
        <div className="flex flex-col gap-0">
          <button onClick={() => setCriteria((s) => [...s, { type: "role", value: "customer-support" }])} className="flex items-center gap-2 rounded-md px-1 py-2 text-left text-sm text-f1-foreground hover:bg-f1-background-hover">
            <span className="text-f1-foreground-disabled">👥</span><span className="font-medium">People with role Customer Support Agent</span>
          </button>
          <button onClick={() => setCriteria((s) => [...s, { type: "other", value: "new-hires" }])} className="flex items-center gap-2 rounded-md px-1 py-2 text-left text-sm text-f1-foreground hover:bg-f1-background-hover">
            <span className="text-f1-foreground-disabled">🔗</span><span className="font-medium">People who joined in the last 3 months</span>
          </button>
          <button onClick={() => setCriteria((s) => [...s, { type: "workplace", value: "barcelona" }])} className="flex items-center gap-2 rounded-md px-1 py-2 text-left text-sm text-f1-foreground hover:bg-f1-background-hover">
            <span className="text-f1-foreground-disabled">🔗</span><span className="font-medium">People in workplace Barcelona</span>
          </button>
        </div>
      )}

      {/* Match feedback */}
      {criteria.length > 0 && (
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="h-6 w-6 rounded-full border-2 border-solid border-f1-background bg-f1-background-tertiary" />
            <div className="h-6 w-6 rounded-full border-2 border-solid border-f1-background bg-f1-background-tertiary" />
            <div className="h-6 w-6 rounded-full border-2 border-solid border-f1-background bg-f1-background-tertiary" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-solid border-f1-background bg-f1-background-tertiary text-[9px] text-f1-foreground-secondary">+{MATCHING_EMPLOYEES - 3}</div>
          </div>
          <span className="text-sm text-f1-foreground-secondary">{MATCHING_EMPLOYEES} employees match this criteria</span>
        </div>
      )}

      {/* Separator */}
      <div className="border-t border-solid border-f1-border-secondary" />

      {isDynamic ? (
        <>
          {/* Exceptions (dynamic rule) */}
          <div className="flex flex-col gap-1">
            <F0Text variant="label" content="Exceptions" />
            <F0Text variant="description" content="Override the automatic rule for specific employees." />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <F0Text variant="small" content="Always include (optional)" />
              <EmployeeSelector selected={whitelist} onChange={setWhitelist} placeholder="Search employees to always include..." />
            </div>
            <div className="flex flex-col gap-1.5">
              <F0Text variant="small" content="Always exclude (optional)" />
              <EmployeeSelector selected={blacklist} onChange={setBlacklist} placeholder="Search employees to always exclude..." />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Individual people (one-shot) */}
          <span className="text-[10px] font-semibold uppercase tracking-wider text-f1-foreground-secondary">Individual people</span>
          <EmployeeSelector selected={whitelist} onChange={setWhitelist} placeholder="Search by name..." />
        </>
      )}

      {/* Net balance */}
      <div className="flex items-center gap-3 rounded-lg border border-solid border-f1-border bg-f1-background-secondary p-3">
        <div className="flex -space-x-2">
          <div className="h-6 w-6 rounded-full border-2 border-solid border-f1-background bg-f1-background-tertiary" />
          <div className="h-6 w-6 rounded-full border-2 border-solid border-f1-background bg-f1-background-tertiary" />
          <div className="h-6 w-6 rounded-full border-2 border-solid border-f1-background bg-f1-background-tertiary" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-f1-foreground">{netCount} people will be enrolled{!isDynamic ? " now" : ""}</span>
          <span className="text-xs text-f1-foreground-secondary">
            {MATCHING_EMPLOYEES} by criteria{whitelist.length > 0 ? ` + ${whitelist.length} individual${whitelist.length > 1 ? "s" : ""}` : ""}{blacklist.length > 0 ? ` − ${blacklist.length} excluded` : ""}
          </span>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 3: Courses (new design with cards)
// ---------------------------------------------------------------------------

const courseDetailOptions = [
  { value: "onboarding-101", label: "Onboarding General", subtitle: "Self-paced · Enrolled directly, no group needed", status: "Ready", statusVariant: "viridian" as const },
  { value: "compliance-2026", label: "GDPR Europa", subtitle: "Next group available: June 2026 · Auto-assigned", status: "Ready", statusVariant: "viridian" as const },
  { value: "leadership-fundamentals", label: "Intercultural Communication", subtitle: "No future group — people will be waitlisted until you create one", status: "Action needed", statusVariant: "camel" as const },
  { value: "security-awareness", label: "Security Awareness", subtitle: "Self-paced · Always open", status: "Ready", statusVariant: "viridian" as const },
  { value: "dei-training", label: "DEI Training", subtitle: "Group: Q3 2026 · Auto-assigned", status: "Ready", statusVariant: "viridian" as const },
  { value: "security-101", label: "Security 101", subtitle: "Self-paced · Enrolled directly", status: "Ready", statusVariant: "viridian" as const },
  { value: "code-architecture", label: "Code Architecture", subtitle: "Instructor-led · Next cohort Sept 2026", status: "Ready", statusVariant: "viridian" as const },
]

function WizardStep3Courses({
  courses,
  setCourses,
  isDynamic,
  netCount,
}: {
  courses: string[]
  setCourses: React.Dispatch<React.SetStateAction<string[]>>
  isDynamic: boolean
  netCount: number
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [courseSearch, setCourseSearch] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  const availableCourses = courseDetailOptions.filter(
    (c) => !courses.includes(c.value) && c.label.toLowerCase().includes(courseSearch.toLowerCase())
  )
  const selectedCourses = courses.map((id) => courseDetailOptions.find((c) => c.value === id)).filter(Boolean)
  const hasActionNeeded = selectedCourses.some((c) => c?.status === "Action needed")

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setDropdownOpen(false)
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Which courses?" />
        <F0Text variant="description" content={isDynamic
          ? "Select the trainings to enroll people into. Assignment logic (group, self-paced, waitlist) is inherited from each course's settings — no extra configuration needed here."
          : `${netCount} people will be enrolled in these courses immediately when you confirm.`
        } />
      </div>

      {/* Search and select */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-f1-foreground-secondary">Search and select</span>
        <div ref={containerRef} className="relative">
          <div
            className={`flex min-h-[42px] flex-wrap items-center gap-1.5 rounded-lg border border-solid px-3 py-2 ${
              dropdownOpen ? "border-f1-border-selected-bold" : "border-f1-border-secondary"
            } bg-f1-background`}
            onClick={() => setDropdownOpen(true)}
          >
            {courses.map((id) => {
              const course = courseDetailOptions.find((c) => c.value === id)
              if (!course) return null
              return (
                <span key={id} className="inline-flex items-center gap-1.5 rounded-full border border-solid border-f1-border bg-f1-background-tertiary px-2.5 py-1 text-xs text-f1-foreground">
                  📄 {course.label}
                  <button onClick={(e) => { e.stopPropagation(); setCourses((s) => s.filter((v) => v !== id)) }} className="text-f1-foreground-secondary hover:text-f1-foreground">×</button>
                </span>
              )
            })}
            <input
              type="text"
              value={courseSearch}
              onChange={(e) => setCourseSearch(e.target.value)}
              onFocus={() => setDropdownOpen(true)}
              placeholder={courses.length === 0 ? "Search courses..." : "Search courses..."}
              className="min-w-[100px] flex-1 border-none bg-transparent text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none"
            />
          </div>
          {dropdownOpen && availableCourses.length > 0 && (
            <div className="absolute left-0 top-full z-50 mt-1 max-h-[200px] w-full overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background py-1 shadow-lg">
              {availableCourses.map((course) => (
                <button
                  key={course.value}
                  onClick={() => { setCourses((s) => [...s, course.value]); setCourseSearch("") }}
                  className="flex w-full flex-col gap-0.5 px-3 py-2 text-left hover:bg-f1-background-hover"
                >
                  <span className="text-sm font-medium text-f1-foreground">{course.label}</span>
                  <span className="text-xs text-f1-foreground-secondary">{course.subtitle}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Selected courses list */}
      {selectedCourses.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-f1-foreground-secondary">Selected — {selectedCourses.length} course{selectedCourses.length > 1 ? "s" : ""}</span>
          <div className="flex flex-col gap-2">
            {selectedCourses.map((course) => {
              if (!course) return null
              const isWarning = course.status === "Action needed"
              return (
                <div
                  key={course.value}
                  className={`flex items-center gap-3 rounded-lg border border-solid p-4 ${
                    isWarning ? "border-f1-border-warning bg-f1-background-warning" : "border-f1-border-secondary bg-f1-background"
                  }`}
                >
                  <span className="text-base text-f1-foreground-secondary">📄</span>
                  <div className="flex flex-1 flex-col gap-0.5">
                    <span className="text-sm font-medium text-f1-foreground">{course.label}</span>
                    <span className={`text-xs ${isWarning ? "text-f1-foreground-warning" : "text-f1-foreground-secondary"}`}>{course.subtitle}</span>
                  </div>
                  <F0TagDot text={course.status} color={course.statusVariant} />
                  <button
                    onClick={() => setCourses((s) => s.filter((v) => v !== course.value))}
                    className="text-f1-foreground-secondary hover:text-f1-foreground"
                  >
                    ×
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Warning for action needed courses */}
      {hasActionNeeded && (
        <F0Alert
          variant="warning"
          title="Intercultural Communication has no future group. People will be waitlisted until you create one."
          description=""
        />
      )}

      {/* Info alert */}
      <F0Alert
        variant="info"
        title="Assignment logic is configured per course. To change how people are assigned to groups, go to the course settings."
        description=""
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 4: Existing people
// ---------------------------------------------------------------------------

const existingPeople = ["María Torres", "Pedro Gomes", "Lucie Fontaine", "Marc Dubois"]
const EXISTING_COUNT = 8

function WizardStep4Existing({
  retroactivity,
  setRetroactivity,
}: {
  retroactivity: "future_only" | "current_and_future"
  setRetroactivity: React.Dispatch<React.SetStateAction<"future_only" | "current_and_future">>
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Apply to existing people?" />
        <F0Text variant="description" content="This rule will automatically enroll anyone who matches the criteria from now on. But there are already people in your company who match — decide what to do with them." />
      </div>

      {/* People card */}
      <div className="rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary p-4">
        <span className="text-sm font-medium text-f1-foreground">{EXISTING_COUNT} people already match and haven&apos;t completed all courses</span>
        <div className="mt-3 flex flex-wrap gap-2">
          {existingPeople.map((name) => (
            <span key={name} className="inline-flex items-center gap-1.5 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2.5 py-1 text-xs text-f1-foreground">
              <span className="text-f1-foreground-secondary">👤</span>
              {name}
            </span>
          ))}
          <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs text-f1-foreground-secondary">+{EXISTING_COUNT - existingPeople.length} more</span>
        </div>
      </div>

      {/* Radio cards */}
      <CardSelectableContainer
        label="Retroactivity"
        value={retroactivity}
        onChange={(v) => { if (v) setRetroactivity(v as "future_only" | "current_and_future") }}
        items={[
          {
            value: "future_only" as const,
            title: "New hires only — recommended",
            description: `The ${EXISTING_COUNT} existing people won't be enrolled now. The rule only applies to people who join or change roles from this moment on.`,
          },
          {
            value: "current_and_future" as const,
            title: `Enroll the ${EXISTING_COUNT} too`,
            description: "They'll be enrolled in the selected courses right away, following each course's assignment logic. People who already completed a course won't be re-enrolled.",
          },
        ]}
      />

      {/* Contextual alert */}
      {retroactivity === "current_and_future" && (
        <F0Alert
          variant="info"
          title={`These ${EXISTING_COUNT} people will receive a notification when the rule is activated. You can change this later without deleting the rule.`}
          description=""
        />
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 5: Confirm
// ---------------------------------------------------------------------------

function WizardStep5Confirm({
  netCount,
  identity: _identity,
  criteria,
  courses,
  retroactivity,
  isDynamic,
}: {
  netCount: number
  identity: { name: string; description: string }
  criteria: CriterionSelection[]
  courses: string[]
  retroactivity: "future_only" | "current_and_future"
  isDynamic: boolean
}) {
  const groupCriteria = criteria.filter((c) => c.type !== "by-name")
  const individualCriteria = criteria.filter((c) => c.type === "by-name")
  const selectedCourses = courses.map((id) => courseDetailOptions.find((c) => c.value === id)).filter(Boolean)
  const hasActionNeeded = selectedCourses.some((c) => c?.status === "Action needed")

  const groupLabels = groupCriteria.map((c) => {
    const item = criteriaDropdownOptions[c.type]?.find((o) => o.value === c.value)
    const typeLabel = criteriaOptions.find((o) => o.value === c.type)?.label ?? c.type
    return `${typeLabel} · ${item?.label ?? c.value}`
  })

  const individualLabels = individualCriteria.map((c) => employeeList.find((e) => e.value === c.value)?.label ?? c.value)

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content={isDynamic ? "Review and activate" : "Confirm assignment"} />
        <F0Text variant="description" content={isDynamic ? "Check everything before activating the rule." : "This action will execute immediately. It cannot be undone."} />
      </div>

      {/* Summary text */}
      <div className="rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary p-4">
        {isDynamic ? (
          <F0Text variant="body" content={`Dynamic rule. All employees from ${groupLabels.join(" + ") || "selected criteria"}${individualLabels.length > 0 ? `, plus ${individualLabels.join(" and ")}` : ""}, will be automatically enrolled in ${courses.length} courses. ${retroactivity === "future_only" ? `New hires only — ${EXISTING_COUNT} existing people won't be enrolled now.` : `Including ${EXISTING_COUNT} existing people.`}`} />
        ) : (
          <F0Text variant="body" content={`${netCount} people from the ${groupLabels[0] ?? "selected criteria"} will be enrolled in ${courses.length} course${courses.length > 1 ? "s" : ""} right now. People who already completed a course won't be re-enrolled.`} />
        )}
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center gap-1 rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary p-4">
          <span className="text-2xl font-bold text-f1-foreground">{netCount}</span>
          <span className="text-xs text-f1-foreground-secondary">{isDynamic ? "People covered" : "People enrolled"}</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary p-4">
          <span className="text-2xl font-bold text-f1-foreground">{courses.length}</span>
          <span className="text-xs text-f1-foreground-secondary">Courses</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary p-4">
          <span className="text-2xl font-bold text-f1-foreground">{isDynamic ? (retroactivity === "future_only" ? EXISTING_COUNT : 0) : 0}</span>
          <span className="text-xs text-f1-foreground-secondary">{isDynamic ? "Existing, not enrolled" : "Already completed"}</span>
        </div>
      </div>

      {/* Audience (dynamic only) */}
      {isDynamic && (
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-f1-foreground-secondary">Audience</span>
          {groupLabels.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {groupLabels.map((label) => (
                <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2.5 py-1 text-xs text-f1-foreground">
                  📋 {label}
                </span>
              ))}
            </div>
          )}
          {individualLabels.length > 0 && (
            <div className="flex flex-col gap-1">
              <span className="text-xs text-f1-foreground-secondary">Individuals</span>
              <div className="flex flex-wrap gap-2">
                {individualLabels.map((name) => (
                  <span key={name} className="inline-flex items-center gap-1.5 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2.5 py-1 text-xs text-f1-foreground">
                    👤 {name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Courses table */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-f1-foreground-secondary">Courses</span>
        <div className="overflow-hidden rounded-lg border border-solid border-f1-border-secondary">
          {selectedCourses.map((course) => {
            if (!course) return null
            return (
              <div key={course.value} className="flex items-center justify-between border-b border-solid border-f1-border-secondary px-4 py-3 last:border-b-0">
                <span className="text-sm text-f1-foreground">{course.label}</span>
                <F0TagDot text={isDynamic ? course.status : `${course.subtitle.split("·")[0]?.trim() ?? ""} · ${course.status}`} color={course.statusVariant} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Warning (dynamic) */}
      {isDynamic && hasActionNeeded && (
        <F0Alert
          variant="warning"
          title="Intercultural Communication has no future group. People will be waitlisted until you create one."
          description=""
        />
      )}

      {/* Info (one-shot) */}
      {!isDynamic && (
        <F0Alert
          variant="info"
          title="This assignment will be saved in Enrollments history but won't create an active rule."
          description=""
        />
      )}
    </div>
  )
}
