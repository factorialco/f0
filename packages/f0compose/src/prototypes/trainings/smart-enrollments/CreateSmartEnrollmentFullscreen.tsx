import { useState, useRef, useEffect, useCallback } from "react"
import {
  F0Text,
  F0Heading,
  F0Button,
  F0Alert,
  F0AvatarList,
  CardSelectableContainer,
} from "@factorialco/f0-react"
import { createPortal } from "react-dom"

import type { NewSmartEnrollment } from "./CreateSmartEnrollmentDialog"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RuleType = "continuous" | "one-time"

interface AudienceState {
  name: string
  description: string
  criteria: CriterionSelection[]
  whitelist: string[]
  blacklist: string[]
}

interface ContentState {
  courses: string[]
  groupManagement: "ongoing" | "cohorts"
  triggerMode: "immediate" | "delayed"
  delay: { value: number; unit: "days" | "weeks" | "months" }
}

interface ReviewState {
  retroactivity: "future_only" | "current_and_future"
}

interface OneshotSetupState {
  name: string
  description: string
  criteria: CriterionSelection[]
  whitelist: string[]
  blacklist: string[]
  courses: string[]
  schedule: "now" | "later"
}

interface CriterionSelection {
  type: string
  value: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onCreate: (enrollment: NewSmartEnrollment) => void
  ruleType: RuleType
}

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

const criteriaDropdownOptions: Record<string, { value: string; label: string; subtitle: string }[]> = {
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

const courseOptions = [
  { value: "onboarding-101", label: "Onboarding 101" },
  { value: "compliance-2026", label: "Compliance 2026" },
  { value: "leadership-fundamentals", label: "Leadership Fundamentals" },
  { value: "security-awareness", label: "Security Awareness" },
  { value: "dei-training", label: "DEI Training" },
  { value: "security-101", label: "Security 101" },
  { value: "code-architecture", label: "Code Architecture" },
]

const MATCHING_EMPLOYEES = 12

// ---------------------------------------------------------------------------
// Portal Dropdown
// ---------------------------------------------------------------------------

function ChipDropdown({ anchorRef, onClose, children }: { anchorRef: React.RefObject<HTMLDivElement | null>; onClose: () => void; children: React.ReactNode }) {
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
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) && anchorRef.current && !anchorRef.current.contains(e.target as Node)) {
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
    <div ref={dropdownRef} className="fixed z-[9999] min-w-[220px] rounded-lg border border-solid border-f1-border-secondary bg-f1-background py-1 shadow-lg" style={{ top: pos.top, left: pos.left, transform: "translateY(-100%)" }}>
      {children}
    </div>,
    document.body
  )
}

// ---------------------------------------------------------------------------
// Employee Selector
// ---------------------------------------------------------------------------

function EmployeeSelector({ selected, onChange, placeholder }: { selected: string[]; onChange: (value: string[]) => void; placeholder: string }) {
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = employeeList.filter((emp) => emp.label.toLowerCase().includes(search.toLowerCase()) || emp.subtitle.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <div className={`flex min-h-[38px] flex-wrap items-center gap-1 rounded-md border border-solid px-2 py-1.5 ${isOpen ? "border-f1-border-selected-bold" : "border-f1-border-secondary"} bg-f1-background`} onClick={() => setIsOpen(true)}>
        {selected.map((id) => {
          const emp = employeeList.find((e) => e.value === id)
          return (
            <span key={id} className="inline-flex items-center gap-1 rounded-full border border-solid border-f1-border bg-f1-background-tertiary px-2 py-0.5 text-xs text-f1-foreground">
              {emp?.label}
              <button onClick={(e) => { e.stopPropagation(); onChange(selected.filter((v) => v !== id)) }} className="text-f1-foreground-disabled hover:text-f1-foreground">×</button>
            </span>
          )
        })}
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onFocus={() => setIsOpen(true)} placeholder={selected.length === 0 ? placeholder : ""} className="min-w-[100px] flex-1 border-none bg-transparent text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none" />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 max-h-[200px] w-full overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background py-1 shadow-lg">
          {filtered.map((emp) => {
            const isChecked = selected.includes(emp.value)
            return (
              <button key={emp.value} onClick={() => onChange(isChecked ? selected.filter((v) => v !== emp.value) : [...selected, emp.value])} className={`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-f1-background-hover ${isChecked ? "bg-f1-background-hover" : ""}`}>
                <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border border-solid text-[10px] ${isChecked ? "border-f1-border-selected-bold bg-f1-background-selected-bold text-f1-foreground-inverse" : "border-f1-border-secondary bg-f1-background"}`}>{isChecked && "✓"}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-f1-foreground">{emp.label}</span>
                  <span className="text-xs text-f1-foreground-secondary">{emp.subtitle}</span>
                </div>
              </button>
            )
          })}
          {filtered.length === 0 && <div className="px-3 py-3 text-center text-sm text-f1-foreground-secondary">No employees found</div>}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Course Selector
// ---------------------------------------------------------------------------

function CourseSelector({ selected, onChange }: { selected: string[]; onChange: (value: string[]) => void }) {
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = courseOptions.filter((c) => !selected.includes(c.value) && c.label.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <div className={`flex min-h-[38px] flex-wrap items-center gap-1 rounded-md border border-solid px-2 py-1.5 ${isOpen ? "border-f1-border-selected-bold" : "border-f1-border-secondary"} bg-f1-background`} onClick={() => setIsOpen(true)}>
        {selected.map((id) => {
          const course = courseOptions.find((t) => t.value === id)
          return (
            <span key={id} className="inline-flex items-center gap-1 rounded-full border border-solid border-f1-border bg-f1-background-tertiary px-2 py-0.5 text-xs text-f1-foreground">
              {course?.label}
              <button onClick={(e) => { e.stopPropagation(); onChange(selected.filter((v) => v !== id)) }} className="text-f1-foreground-disabled hover:text-f1-foreground">×</button>
            </span>
          )
        })}
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onFocus={() => setIsOpen(true)} placeholder={selected.length === 0 ? "Search and select courses..." : ""} className="min-w-[120px] flex-1 border-none bg-transparent text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none" />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 max-h-[200px] w-full overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background py-1 shadow-lg">
          {filtered.map((course) => (
            <button key={course.value} onClick={() => { onChange([...selected, course.value]); setSearch("") }} className="flex w-full items-center px-3 py-2 text-left text-sm text-f1-foreground hover:bg-f1-background-hover">{course.label}</button>
          ))}
          {filtered.length === 0 && <div className="px-3 py-3 text-center text-sm text-f1-foreground-secondary">{search ? "No courses found" : "All courses selected"}</div>}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Criteria Selector (shared)
// ---------------------------------------------------------------------------

function CriteriaSelector({ criteria, onChange }: { criteria: CriterionSelection[]; onChange: (criteria: CriterionSelection[]) => void }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [employeeSearch, setEmployeeSearch] = useState("")
  const chipRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const handleCloseDropdown = useCallback(() => setOpenDropdown(null), [])

  const filteredEmployees = employeeList.filter((emp) => emp.label.toLowerCase().includes(employeeSearch.toLowerCase()) || emp.subtitle.toLowerCase().includes(employeeSearch.toLowerCase()))
  const selectedByName = criteria.filter((c) => c.type === "by-name").map((c) => c.value)

  return (
    <div className="flex flex-col gap-3">
      {/* Token container */}
      <div className="flex min-h-[42px] flex-wrap items-center gap-1.5 rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2">
        {criteria.length === 0 && <span className="text-sm text-f1-foreground-secondary">Select criteria below...</span>}
        {criteria.map((c, idx) => {
          const optionLabel = c.type === "by-name" ? employeeList.find((e) => e.value === c.value)?.label : criteriaDropdownOptions[c.type]?.find((o) => o.value === c.value)?.label
          return (
            <span key={`${c.type}-${c.value}-${idx}`} className="inline-flex items-center gap-1 rounded-full border border-solid border-f1-border-selected-bold bg-f1-background-selected-secondary px-2.5 py-0.5 text-xs text-f1-foreground-selected">
              <span className="font-medium">{criteriaOptions.find((o) => o.value === c.type)?.label}:</span>
              {optionLabel}
              <button onClick={() => onChange(criteria.filter((_, i) => i !== idx))} className="ml-0.5 text-f1-foreground-selected hover:text-f1-foreground">×</button>
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
              <button onClick={() => setOpenDropdown(isOpen ? null : option.value)} className={`inline-flex items-center gap-1 rounded-full border border-solid px-3 py-1.5 text-sm transition-colors ${count > 0 ? "border-f1-border-selected-bold bg-f1-background-selected-secondary text-f1-foreground-selected" : "border-f1-border bg-f1-background text-f1-foreground hover:bg-f1-background-hover"}`}>
                {count > 0 && <span className="flex h-4 w-4 items-center justify-center rounded-full bg-f1-background-selected-bold text-[10px] text-f1-foreground-inverse">{count}</span>}
                {option.label}
                <span className="text-xs text-f1-foreground-disabled">▾</span>
              </button>

              {isOpen && !isByName && (
                <ChipDropdown anchorRef={{ current: chipRefs.current[option.value] ?? null }} onClose={handleCloseDropdown}>
                  {criteriaDropdownOptions[option.value]?.map((item) => {
                    const isSelected = criteria.some((c) => c.type === option.value && c.value === item.value)
                    return (
                      <button key={item.value} onClick={() => { if (isSelected) { onChange(criteria.filter((c) => !(c.type === option.value && c.value === item.value))) } else { onChange([...criteria, { type: option.value, value: item.value }]) } }} className={`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-f1-background-hover ${isSelected ? "bg-f1-background-hover" : ""}`}>
                        <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border border-solid text-[10px] ${isSelected ? "border-f1-border-selected-bold bg-f1-background-selected-bold text-f1-foreground-inverse" : "border-f1-border-secondary bg-f1-background"}`}>{isSelected && "✓"}</span>
                        <div className="flex flex-col"><span className="text-sm font-medium text-f1-foreground">{item.label}</span><span className="text-xs text-f1-foreground-secondary">{item.subtitle}</span></div>
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
                      <button onClick={() => onChange(criteria.filter((c) => c.type !== "by-name"))} className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-f1-foreground-secondary hover:bg-f1-background-hover">Clear all ({selectedByName.length})</button>
                    )}
                    <div className="max-h-[200px] overflow-y-auto">
                      {filteredEmployees.map((emp) => {
                        const isChecked = selectedByName.includes(emp.value)
                        return (
                          <button key={emp.value} onClick={() => { if (isChecked) { onChange(criteria.filter((c) => !(c.type === "by-name" && c.value === emp.value))) } else { onChange([...criteria, { type: "by-name", value: emp.value }]) } }} className={`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-f1-background-hover ${isChecked ? "bg-f1-background-hover" : ""}`}>
                            <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border border-solid text-[10px] ${isChecked ? "border-f1-border-selected-bold bg-f1-background-selected-bold text-f1-foreground-inverse" : "border-f1-border-secondary bg-f1-background"}`}>{isChecked && "✓"}</span>
                            <div className="flex flex-col"><span className="text-sm font-medium text-f1-foreground">{emp.label}</span><span className="text-xs text-f1-foreground-secondary">{emp.subtitle}</span></div>
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
    </div>
  )
}

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------

export function CreateSmartEnrollmentFullscreen({ isOpen, onClose, onCreate, ruleType }: Props) {
  if (!isOpen) return null

  if (ruleType === "continuous") {
    return <ContinuousFlow onClose={onClose} onCreate={onCreate} />
  }
  return <OneshotFlow onClose={onClose} onCreate={onCreate} />
}

// ===========================================================================
// ROUTE A: Continuous Automation (3 steps: Audience → Content → Review)
// ===========================================================================

type ContinuousStep = "audience" | "content" | "review"

const continuousSteps: { id: ContinuousStep; label: string; num: number }[] = [
  { id: "audience", label: "Audience", num: 1 },
  { id: "content", label: "Content", num: 2 },
  { id: "review", label: "Review", num: 3 },
]

function ContinuousFlow({ onClose, onCreate }: { onClose: () => void; onCreate: (e: NewSmartEnrollment) => void }) {
  const [step, setStep] = useState<ContinuousStep>("audience")
  const [audience, setAudience] = useState<AudienceState>({ name: "", description: "", criteria: [], whitelist: [], blacklist: [] })
  const [content, setContent] = useState<ContentState>({ courses: [], groupManagement: "ongoing", triggerMode: "immediate", delay: { value: 2, unit: "weeks" } })
  const [review, setReview] = useState<ReviewState>({ retroactivity: "current_and_future" })

  const netCount = MATCHING_EMPLOYEES + audience.whitelist.length - audience.blacklist.length
  const canAdvanceAudience = audience.name.trim() !== "" && (audience.criteria.length > 0 || audience.whitelist.length > 0)
  const canAdvanceContent = content.courses.length > 0

  const handleCreate = () => {
    onCreate({
      step1: audience,
      step2: { ...content, distribution: "parallel" },
      step3: review,
    })
  }

  const stepIndex = continuousSteps.findIndex((s) => s.id === step)

  return createPortal(
    <div className="fixed inset-0 z-[9000] flex bg-f1-background">
      {/* Left sidebar */}
      <div className="flex w-[220px] flex-col border-r border-solid border-f1-border-secondary bg-f1-background-secondary">
        <div className="flex items-center gap-2 border-b border-solid border-f1-border-secondary px-4 py-4">
          <button onClick={onClose} className="flex h-7 w-7 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-hover hover:text-f1-foreground">←</button>
          <F0Text variant="label" content="Continuous Rule" />
        </div>
        <div className="flex flex-1 flex-col gap-1 px-3 py-4">
          {continuousSteps.map((s) => {
            const isActive = step === s.id
            const idx = continuousSteps.findIndex((x) => x.id === s.id)
            const isCompleted = idx < stepIndex
            const isClickable = isCompleted || (s.id === "content" && canAdvanceAudience) || (s.id === "review" && canAdvanceAudience && canAdvanceContent)
            return (
              <button key={s.id} onClick={() => { if (isClickable || isActive) setStep(s.id) }} disabled={!isClickable && !isActive} className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors ${isActive ? "bg-f1-background font-medium text-f1-foreground" : isClickable ? "text-f1-foreground-secondary hover:bg-f1-background-hover" : "text-f1-foreground-disabled"}`}>
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${isCompleted ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : isActive ? "border border-solid border-f1-border-selected-bold text-f1-foreground-selected" : "border border-solid border-f1-border-secondary text-f1-foreground-secondary"}`}>{isCompleted ? "✓" : s.num}</span>
                {s.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Canvas */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-solid border-f1-border-secondary px-6 py-4">
          <F0Heading variant="heading" content={audience.name || "New Continuous Rule"} />
          <div className="flex items-center gap-2">
            {stepIndex > 0 && <F0Button label="Back" variant="outline" onClick={() => setStep(continuousSteps[stepIndex - 1]!.id)} />}
            {step !== "review" ? (
              <F0Button label="Next" onClick={() => setStep(continuousSteps[stepIndex + 1]!.id)} disabled={step === "audience" ? !canAdvanceAudience : !canAdvanceContent} />
            ) : (
              <F0Button label="Activate Smart Enrollment" onClick={handleCreate} disabled={!canAdvanceAudience || !canAdvanceContent} />
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-10 py-8">
          <div className="mx-auto max-w-[640px]">
            {step === "audience" && <ContinuousAudienceStep state={audience} onChange={setAudience} netCount={netCount} />}
            {step === "content" && <ContinuousContentStep state={content} onChange={setContent} />}
            {step === "review" && <ContinuousReviewStep state={review} onChange={setReview} audience={audience} courses={content.courses} netCount={netCount} />}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

// --- Continuous: Audience Step ---

function ContinuousAudienceStep({ state, onChange, netCount }: { state: AudienceState; onChange: React.Dispatch<React.SetStateAction<AudienceState>>; netCount: number }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Who should be enrolled?" />
        <F0Text variant="description" content="Define the audience for this continuous enrollment rule." />
      </div>

      {/* Name & Description */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <F0Text variant="label" content="Rule name" />
          <input type="text" value={state.name} onChange={(e) => onChange((s) => ({ ...s, name: e.target.value }))} placeholder="e.g. Onboarding Técnico - Engineers" className="rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-selected-bold focus:outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <F0Text variant="label" content="Description (optional)" />
          <textarea value={state.description} onChange={(e) => onChange((s) => ({ ...s, description: e.target.value }))} placeholder="Give context to other admins" rows={2} className="rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-selected-bold focus:outline-none" />
        </div>
      </div>

      {/* Criteria */}
      <div className="flex flex-col gap-3">
        <F0Text variant="label" content="Automatic criteria" />
        <F0Text variant="description" content="Employees matching these criteria will be enrolled automatically." />
        <CriteriaSelector criteria={state.criteria} onChange={(c) => onChange((s) => ({ ...s, criteria: c }))} />
        {state.criteria.length > 0 && (
          <div className="flex items-center gap-2">
            <F0AvatarList type="person" size="xs" avatars={[{ firstName: "A", lastName: "B" }, { firstName: "C", lastName: "D" }, { firstName: "E", lastName: "F" }]} remainingCount={Math.max(0, MATCHING_EMPLOYEES - 3)} />
            <F0Text variant="small" content={`${MATCHING_EMPLOYEES} employees match this rule`} />
          </div>
        )}
      </div>

      {/* Exceptions */}
      <div className="rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary p-4">
        <div className="mb-3 flex flex-col gap-0.5">
          <F0Text variant="label" content="Manual exceptions" />
          <F0Text variant="description" content="Override the automatic rule for specific employees." />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <F0Text variant="small" content="Always include (optional)" />
            <EmployeeSelector selected={state.whitelist} onChange={(v) => onChange((s) => ({ ...s, whitelist: v }))} placeholder="Search employees to always include..." />
          </div>
          <div className="flex flex-col gap-1.5">
            <F0Text variant="small" content="Always exclude (optional)" />
            <EmployeeSelector selected={state.blacklist} onChange={(v) => onChange((s) => ({ ...s, blacklist: v }))} placeholder="Search employees to always exclude..." />
          </div>
        </div>
      </div>

      {/* Net count */}
      {(state.criteria.length > 0 || state.whitelist.length > 0) && (
        <div className="flex items-center gap-3 rounded-lg border border-solid border-f1-border bg-f1-background p-3">
          <F0AvatarList type="person" size="sm" avatars={[{ firstName: "Ana", lastName: "G" }, { firstName: "Marc", lastName: "L" }, { firstName: "Laia", lastName: "P" }]} remainingCount={Math.max(0, netCount - 3)} />
          <div className="flex flex-col">
            <F0Text variant="body" content={`${netCount} employees will be enrolled`} />
            <F0Text variant="small" content={`${MATCHING_EMPLOYEES} by criteria${state.whitelist.length > 0 ? ` + ${state.whitelist.length} included` : ""}${state.blacklist.length > 0 ? ` − ${state.blacklist.length} excluded` : ""}`} />
          </div>
        </div>
      )}
    </div>
  )
}

// --- Continuous: Content Step ---

function ContinuousContentStep({ state, onChange }: { state: ContentState; onChange: React.Dispatch<React.SetStateAction<ContentState>> }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="What and how?" />
        <F0Text variant="description" content="Select courses and configure delivery." />
      </div>

      {/* Course selector */}
      <div className="flex flex-col gap-2">
        <F0Text variant="label" content="Courses to assign" />
        <CourseSelector selected={state.courses} onChange={(v) => onChange((s) => ({ ...s, courses: v }))} />
      </div>

      {/* Group management */}
      <div className="flex flex-col gap-2">
        <F0Text variant="label" content="Group management" />
        <CardSelectableContainer
          label="Group management"
          value={state.groupManagement}
          onChange={(v) => { if (v) onChange((s) => ({ ...s, groupManagement: v as "ongoing" | "cohorts" })) }}
          items={[
            { value: "ongoing" as const, title: "Ongoing / Self-paced", description: "A dedicated continuous group is created for this rule in each course." },
            { value: "cohorts" as const, title: "Create new cohorts", description: "A new group is created for every batch of employees that match." },
          ]}
        />
      </div>

      {/* Timing */}
      <div className="flex flex-col gap-2">
        <F0Text variant="label" content="When should the enrollment trigger?" />
        <CardSelectableContainer
          label="Timing"
          value={state.triggerMode}
          onChange={(v) => { if (v) onChange((s) => ({ ...s, triggerMode: v as "immediate" | "delayed" })) }}
          items={[
            { value: "immediate" as const, title: "Immediately", description: "The same day the employee matches the criteria." },
            { value: "delayed" as const, title: "With delay", description: "Assign after a defined period." },
          ]}
        />
        {state.triggerMode === "delayed" && (
          <div className="mt-2 flex items-center gap-2 rounded-md border border-solid border-f1-border-secondary bg-f1-background-secondary px-3 py-2.5">
            <span className="text-sm text-f1-foreground">Assign</span>
            <input type="number" min={1} value={state.delay.value} onChange={(e) => onChange((s) => ({ ...s, delay: { ...s.delay, value: Number(e.target.value) } }))} className="w-16 rounded-md border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 text-sm text-f1-foreground focus:border-f1-border-selected-bold focus:outline-none" />
            <select value={state.delay.unit} onChange={(e) => onChange((s) => ({ ...s, delay: { ...s.delay, unit: e.target.value as "days" | "weeks" | "months" } }))} className="rounded-md border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 text-sm text-f1-foreground focus:border-f1-border-selected-bold focus:outline-none">
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </select>
            <span className="text-sm text-f1-foreground">after matching criteria</span>
          </div>
        )}
      </div>
    </div>
  )
}

// --- Continuous: Review Step ---

function ContinuousReviewStep({ state, onChange, audience, courses, netCount }: { state: ReviewState; onChange: React.Dispatch<React.SetStateAction<ReviewState>>; audience: AudienceState; courses: string[]; netCount: number }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Review and launch" />
        <F0Text variant="description" content="Choose how to activate the rule." />
      </div>

      <div className="flex flex-col gap-2">
        <F0Text variant="label" content={`Currently ${netCount} employees match. What do you want to do?`} />
        <CardSelectableContainer
          label="Retroactivity"
          value={state.retroactivity}
          onChange={(v) => { if (v) onChange((s) => ({ ...s, retroactivity: v as "future_only" | "current_and_future" })) }}
          items={[
            { value: "future_only" as const, title: "Apply only to future employees", description: `The ${netCount} current employees are ignored; only new employees matching from tomorrow onwards will be enrolled.` },
            { value: "current_and_future" as const, title: "Apply to current and future employees", description: `Enroll the ${netCount} current employees today and any future matches.` },
          ]}
        />
      </div>

      <F0Alert
        variant="info"
        title="Summary"
        description={`Rule "${audience.name}" will ${state.retroactivity === "current_and_future" ? `enroll ${netCount} employees today and continue enrolling future matches` : "only enroll future employees matching the criteria"}. They will receive ${courses.length} course${courses.length > 1 ? "s" : ""}.`}
      />
    </div>
  )
}

// ===========================================================================
// ROUTE B: One-time Enrollment (2 steps: Setup → Review)
// ===========================================================================

type OneshotStep = "setup" | "review"

const oneshotSteps: { id: OneshotStep; label: string; num: number }[] = [
  { id: "setup", label: "Setup", num: 1 },
  { id: "review", label: "Review", num: 2 },
]

function OneshotFlow({ onClose, onCreate }: { onClose: () => void; onCreate: (e: NewSmartEnrollment) => void }) {
  const [step, setStep] = useState<OneshotStep>("setup")
  const [state, setState] = useState<OneshotSetupState>({ name: "", description: "", criteria: [], whitelist: [], blacklist: [], courses: [], schedule: "now" })

  const netCount = MATCHING_EMPLOYEES + state.whitelist.length - state.blacklist.length
  const canAdvance = state.name.trim() !== "" && (state.criteria.length > 0 || state.whitelist.length > 0) && state.courses.length > 0

  const handleCreate = () => {
    onCreate({
      step1: { name: state.name, description: state.description, criteria: state.criteria, whitelist: state.whitelist, blacklist: state.blacklist },
      step2: { courses: state.courses, groupManagement: "ongoing", distribution: "parallel", triggerMode: "immediate", delay: { value: 0, unit: "days" } },
      step3: { retroactivity: "current_and_future" },
    })
  }

  const stepIndex = oneshotSteps.findIndex((s) => s.id === step)

  return createPortal(
    <div className="fixed inset-0 z-[9000] flex bg-f1-background">
      {/* Left sidebar */}
      <div className="flex w-[220px] flex-col border-r border-solid border-f1-border-secondary bg-f1-background-secondary">
        <div className="flex items-center gap-2 border-b border-solid border-f1-border-secondary px-4 py-4">
          <button onClick={onClose} className="flex h-7 w-7 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-hover hover:text-f1-foreground">←</button>
          <F0Text variant="label" content="One-time Rule" />
        </div>
        <div className="flex flex-1 flex-col gap-1 px-3 py-4">
          {oneshotSteps.map((s) => {
            const isActive = step === s.id
            const idx = oneshotSteps.findIndex((x) => x.id === s.id)
            const isCompleted = idx < stepIndex
            const isClickable = isCompleted || (s.id === "review" && canAdvance)
            return (
              <button key={s.id} onClick={() => { if (isClickable || isActive) setStep(s.id) }} disabled={!isClickable && !isActive} className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors ${isActive ? "bg-f1-background font-medium text-f1-foreground" : isClickable ? "text-f1-foreground-secondary hover:bg-f1-background-hover" : "text-f1-foreground-disabled"}`}>
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${isCompleted ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : isActive ? "border border-solid border-f1-border-selected-bold text-f1-foreground-selected" : "border border-solid border-f1-border-secondary text-f1-foreground-secondary"}`}>{isCompleted ? "✓" : s.num}</span>
                {s.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Canvas */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-solid border-f1-border-secondary px-6 py-4">
          <F0Heading variant="heading" content={state.name || "New One-time Enrollment"} />
          <div className="flex items-center gap-2">
            {stepIndex > 0 && <F0Button label="Back" variant="outline" onClick={() => setStep("setup")} />}
            {step === "setup" ? (
              <F0Button label="Next" onClick={() => setStep("review")} disabled={!canAdvance} />
            ) : (
              <F0Button label={state.schedule === "now" ? `Enroll ${netCount} employees now` : "Schedule enrollment"} onClick={handleCreate} disabled={!canAdvance} />
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-10 py-8">
          <div className="mx-auto max-w-[640px]">
            {step === "setup" && <OneshotSetupStep state={state} onChange={setState} netCount={netCount} />}
            {step === "review" && <OneshotReviewStep state={state} netCount={netCount} />}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

// --- Oneshot: Setup Step (all-in-one) ---

function OneshotSetupStep({ state, onChange, netCount }: { state: OneshotSetupState; onChange: React.Dispatch<React.SetStateAction<OneshotSetupState>>; netCount: number }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Set up one-time enrollment" />
        <F0Text variant="description" content="Configure who gets enrolled and in what courses. This action runs once." />
      </div>

      {/* Name & Description */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <F0Text variant="label" content="Name" />
          <input type="text" value={state.name} onChange={(e) => onChange((s) => ({ ...s, name: e.target.value }))} placeholder="e.g. Q2 Compliance Batch" className="rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-selected-bold focus:outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <F0Text variant="label" content="Description (optional)" />
          <textarea value={state.description} onChange={(e) => onChange((s) => ({ ...s, description: e.target.value }))} placeholder="Reason for this batch enrollment" rows={2} className="rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-selected-bold focus:outline-none" />
        </div>
      </div>

      {/* Criteria */}
      <div className="flex flex-col gap-3">
        <F0Text variant="label" content="Who to enroll" />
        <F0Text variant="description" content="Select criteria to find employees." />
        <CriteriaSelector criteria={state.criteria} onChange={(c) => onChange((s) => ({ ...s, criteria: c }))} />
        {state.criteria.length > 0 && (
          <div className="flex items-center gap-2">
            <F0AvatarList type="person" size="xs" avatars={[{ firstName: "A", lastName: "B" }, { firstName: "C", lastName: "D" }, { firstName: "E", lastName: "F" }]} remainingCount={Math.max(0, MATCHING_EMPLOYEES - 3)} />
            <F0Text variant="small" content={`${MATCHING_EMPLOYEES} employees match this criteria today`} />
          </div>
        )}
      </div>

      {/* Exceptions */}
      <div className="rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary p-4">
        <div className="mb-3 flex flex-col gap-0.5">
          <F0Text variant="label" content="Manual exceptions" />
          <F0Text variant="description" content="Override for specific employees." />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <F0Text variant="small" content="Always include" />
            <EmployeeSelector selected={state.whitelist} onChange={(v) => onChange((s) => ({ ...s, whitelist: v }))} placeholder="Search employees to include..." />
          </div>
          <div className="flex flex-col gap-1.5">
            <F0Text variant="small" content="Always exclude" />
            <EmployeeSelector selected={state.blacklist} onChange={(v) => onChange((s) => ({ ...s, blacklist: v }))} placeholder="Search employees to exclude..." />
          </div>
        </div>
      </div>

      {/* Net count */}
      {(state.criteria.length > 0 || state.whitelist.length > 0) && (
        <div className="flex items-center gap-3 rounded-lg border border-solid border-f1-border bg-f1-background p-3">
          <F0AvatarList type="person" size="sm" avatars={[{ firstName: "Ana", lastName: "G" }, { firstName: "Marc", lastName: "L" }, { firstName: "Laia", lastName: "P" }]} remainingCount={Math.max(0, netCount - 3)} />
          <F0Text variant="body" content={`${netCount} employees will be enrolled`} />
        </div>
      )}

      {/* Courses */}
      <div className="flex flex-col gap-2">
        <F0Text variant="label" content="Courses to assign" />
        <CourseSelector selected={state.courses} onChange={(v) => onChange((s) => ({ ...s, courses: v }))} />
      </div>

      {/* Schedule */}
      <div className="flex flex-col gap-2">
        <F0Text variant="label" content="When to run" />
        <CardSelectableContainer
          label="Schedule"
          value={state.schedule}
          onChange={(v) => { if (v) onChange((s) => ({ ...s, schedule: v as "now" | "later" })) }}
          items={[
            { value: "now" as const, title: "Run now", description: "Enroll all matching employees immediately." },
            { value: "later" as const, title: "Schedule launch", description: "Pick a date to execute this enrollment." },
          ]}
        />
      </div>
    </div>
  )
}

// --- Oneshot: Review Step ---

function OneshotReviewStep({ state, netCount }: { state: OneshotSetupState; netCount: number }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Review" />
        <F0Text variant="description" content="Confirm this one-time enrollment action." />
      </div>

      <F0Alert
        variant="info"
        title="One-time enrollment"
        description={`You are about to enroll ${netCount} employees in ${state.courses.length} course${state.courses.length > 1 ? "s" : ""} ${state.schedule === "now" ? "today" : "on the scheduled date"}. This action will execute only once and will not enroll anyone in the future.`}
      />

      <div className="flex flex-col gap-3 rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary p-4">
        <div className="flex flex-col gap-2">
          <DetailRow label="Name" value={state.name} />
          <DetailRow label="Employees" value={`${netCount} matching`} />
          <DetailRow label="Courses" value={state.courses.map((id) => courseOptions.find((c) => c.value === id)?.label ?? id).join(", ")} />
          <DetailRow label="Schedule" value={state.schedule === "now" ? "Immediate" : "Scheduled"} />
        </div>
      </div>
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-solid border-f1-border-secondary pb-2 last:border-b-0 last:pb-0">
      <F0Text variant="label" content={label} />
      <F0Text variant="body" content={value} />
    </div>
  )
}
