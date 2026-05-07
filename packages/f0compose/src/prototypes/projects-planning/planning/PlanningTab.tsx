import { F0Text } from "@factorialco/f0-react"

import {
  type Allocation,
  allocations,
  type Project,
  projects,
  timelineDays,
} from "../shared/data"

/**
 * Allocation pill — colored chip with hours, optional overbooked alert dot.
 * Pixel-precise grid layout requires raw <div> escape hatch (per f0-design
 * "className when an f0 component doesn't expose the prop you need" —
 * F0Box doesn't accept arbitrary widths or absolute positions).
 */
function AllocationCell({ alloc }: { alloc: Allocation }) {
  const widthClass =
    alloc.span === 5
      ? "w-[472px]"
      : alloc.span === 3
        ? "w-[280px]"
        : "w-[88px]"

  if (alloc.kind === "absence") {
    return (
      <div
        className={`${widthClass} flex h-9 items-center justify-center rounded-sm bg-f1-background-warning`}
      >
        <F0Text content={alloc.label ?? `${alloc.hours}h`} variant="small" />
      </div>
    )
  }

  if (alloc.kind === "overbooked") {
    return (
      <div
        className={`${widthClass} relative flex h-9 items-center justify-center rounded-sm bg-f1-background-selected-bold-hover`}
      >
        <F0Text content={alloc.label ?? `${alloc.hours}h`} variant="small" />
        <span
          className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-f1-background-critical-bold"
          aria-label="Overbooked"
        />
      </div>
    )
  }

  return (
    <div
      className={`${widthClass} flex h-9 items-center justify-center rounded-sm bg-f1-background-selected`}
    >
      <F0Text content={alloc.label ?? `${alloc.hours}h`} variant="small" />
    </div>
  )
}

function DaysHeader() {
  return (
    <div className="flex border-b border-solid border-f1-border-secondary bg-f1-background-secondary pl-[280px]">
      {timelineDays.map((d, i) => (
        <div
          key={i}
          className={`flex w-[96px] shrink-0 items-center px-2 py-2 ${
            d.weekend ? "bg-f1-background-secondary" : ""
          }`}
        >
          <F0Text
            content={d.label.toUpperCase()}
            variant={d.weekend ? "description" : "label"}
          />
        </div>
      ))}
    </div>
  )
}

function ProjectRow({
  project,
  onOpenProject,
}: {
  project: Project
  onOpenProject: (id: string) => void
}) {
  const projectAllocations = allocations.filter(
    (a) => a.projectId === project.id
  )
  return (
    <div className="flex min-h-20 border-b border-solid border-f1-border-secondary">
      {/* Name column */}
      <button
        type="button"
        onClick={() => onOpenProject(project.id)}
        className="flex w-[280px] shrink-0 items-start gap-2 border-r border-solid border-f1-border-secondary bg-f1-background p-3 text-left hover:bg-f1-background-hover"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-f1-background-secondary">
          <F0Text content={project.code} variant="label" />
        </div>
        <div className="flex flex-col gap-1">
          <F0Text content={project.name} variant="body" />
          {project.client ? (
            <F0Text content={project.client} variant="description" />
          ) : null}
          <F0Text
            content={`${project.trackedHours}h / ${project.plannedHours}h`}
            variant="description"
          />
        </div>
      </button>

      {/* Days grid + allocations layer */}
      <div className="relative flex">
        {timelineDays.map((d, i) => (
          <div
            key={i}
            className={`w-[96px] shrink-0 border-r border-solid border-f1-border-secondary ${
              d.weekend ? "bg-f1-background-secondary" : ""
            }`}
          />
        ))}
        <div className="absolute inset-0">
          {projectAllocations.map((a, idx) => (
            <div
              key={idx}
              className={`absolute ${dayLeftClass(a.dayIndex)} ${
                idx % 2 === 0 ? "top-1" : "top-[44px]"
              }`}
            >
              <AllocationCell alloc={a} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Pre-computed left-offset classes for the 16 day columns. Tailwind needs
 * complete class strings at build time, so we can't use template strings
 * with arbitrary multiplication.
 */
function dayLeftClass(dayIndex: number): string {
  const map: Record<number, string> = {
    0: "left-1",
    1: "left-[100px]",
    2: "left-[196px]",
    3: "left-[292px]",
    4: "left-[388px]",
    5: "left-[484px]",
    6: "left-[580px]",
    7: "left-[676px]",
    8: "left-[772px]",
    9: "left-[868px]",
    10: "left-[964px]",
    11: "left-[1060px]",
    12: "left-[1156px]",
    13: "left-[1252px]",
    14: "left-[1348px]",
    15: "left-[1444px]",
  }
  return map[dayIndex] ?? "left-1"
}

function Legend() {
  return (
    <div className="flex items-center gap-6 border-t border-solid border-f1-border-secondary px-4 py-3">
      <F0Text content="Leyenda" variant="description" />
      <div className="flex items-center gap-2">
        <span className="h-4 w-4 rounded-sm bg-f1-background-warning" />
        <F0Text content="Ausencias" variant="small" />
      </div>
      <div className="flex items-center gap-2">
        <span className="h-4 w-4 rounded-sm bg-f1-background-selected" />
        <F0Text content="Total de horas asignadas" variant="small" />
      </div>
      <div className="flex items-center gap-2">
        <span className="h-4 w-4 rounded-full border border-solid border-f1-border-secondary" />
        <F0Text content="Horas detalladas por proyecto" variant="small" />
      </div>
    </div>
  )
}

/**
 * Planning timeline — Gantt-like view of projects (rows) × days (columns),
 * with absolutely positioned allocation pills. Mirrors the production
 * "Planificación" tab.
 */
export function PlanningTab({
  onOpenProject,
}: {
  onOpenProject: (id: string) => void
}) {
  return (
    <div className="overflow-x-auto rounded-md border border-solid border-f1-border-secondary">
      <DaysHeader />
      <div className="flex flex-col">
        {projects.map((p) => (
          <ProjectRow key={p.id} project={p} onOpenProject={onOpenProject} />
        ))}
      </div>
      <Legend />
    </div>
  )
}
