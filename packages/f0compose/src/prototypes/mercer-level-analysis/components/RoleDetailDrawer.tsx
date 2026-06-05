/**
 * Right-side role detail drawer (skeleton reproduction of the real screen).
 *
 * Role-centric: header = role title + family/function, then a level selector,
 * then the selected level's detail:
 *   - Level badge + salary range
 *   - Working conditions (one row)
 *   - Salaries by location — with the NEW "Analyze" button next to the heading
 *   - Competencies (chips)
 *   - Devices (chips)
 *
 * The Analyze button benchmarks ALL the role's levels against Mercer.
 */
import {
  F0Button,
  F0ChipList,
  F0Heading,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { Ai } from "@factorialco/f0-react/icons/app"

import {
  formatFull,
  type CatalogRole,
  type LevelDetail,
} from "../shared/analysisData"

type Props = {
  role: CatalogRole
  detail: LevelDetail
  levelIds: string[]
  selectedLevel: string
  onSelectLevel: (level: string) => void
  onAnalyze?: () => void
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="border-b border-f1-border-secondary pb-1">
      <F0Text content={text} variant="label" />
    </div>
  )
}

export function RoleDetailDrawer({
  role,
  detail,
  levelIds,
  selectedLevel,
  onSelectLevel,
  onAnalyze,
}: Props) {
  return (
    <div className="flex h-full w-[360px] min-w-0 shrink-0 flex-col rounded-xl border border-f1-border bg-f1-background">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-f1-border-secondary p-5">
        <div className="flex flex-col gap-1">
          <F0Heading content={role.title} variant="heading" as="h3" />
          <F0Text
            content={`${role.function} · ${role.family}`}
            variant="description"
          />
        </div>
        {/* Level selector */}
        <div className="flex flex-wrap gap-1">
          {levelIds.map((lvl) => {
            const active = lvl === selectedLevel
            return (
              <button
                key={lvl}
                type="button"
                onClick={() => onSelectLevel(lvl)}
                aria-pressed={active}
                className={[
                  "rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
                  active
                    ? "border-f1-border-selected bg-f1-background-selected text-f1-foreground"
                    : "border-f1-border-secondary bg-f1-background text-f1-foreground-secondary hover:bg-f1-background-hover",
                ].join(" ")}
              >
                {lvl}
              </button>
            )
          })}
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex min-w-0 flex-1 flex-col gap-6 overflow-y-auto p-5">
        {/* Level badge + salary range */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <F0Heading content={detail.level} variant="heading" as="h4" />
            <F0TagStatus text={detail.badge} variant="info" />
          </div>
          <F0Text content={detail.description} variant="description" />
          <F0Text
            content={`${formatFull(detail.salaryMin)} – ${formatFull(detail.salaryMax)}`}
            variant="body"
          />
        </div>

        {/* Working conditions */}
        <div className="flex flex-col gap-2">
          <SectionLabel text="Working conditions" />
          <F0Text content={detail.workingConditions} variant="body" />
        </div>

        {/* Salaries — heading + Analyze button */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 border-b border-f1-border-secondary pb-1">
            <F0Text content="Salaries" variant="label" />
            {onAnalyze && (
              <F0Button
                label="Analyze"
                variant="default"
                icon={Ai}
                onClick={onAnalyze}
              />
            )}
          </div>
          <div className="flex flex-col gap-1">
            {detail.salariesByLocation.map((loc) => (
              <div
                key={loc.location}
                className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 hover:bg-f1-background-hover"
              >
                <F0Text content={loc.location} variant="body" />
                <F0Text
                  content={`${formatFull(loc.min)} – ${formatFull(loc.max)}`}
                  variant="small"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Competencies */}
        <div className="flex flex-col gap-2">
          <SectionLabel text="Competencies" />
          <F0ChipList
            chips={detail.competencies.map((c) => ({ label: c }))}
            max={detail.competencies.length}
            layout="fill"
          />
        </div>

        {/* Devices */}
        <div className="flex flex-col gap-2">
          <SectionLabel text="Devices" />
          <F0ChipList
            chips={detail.devices.map((d) => ({ label: d }))}
            max={detail.devices.length}
            layout="fill"
          />
        </div>
      </div>
    </div>
  )
}
