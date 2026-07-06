import { F0Button, F0TagStatus } from "@factorialco/f0-react"
import { Delete } from "@factorialco/f0-react/icons/app"

import {
  type CustomRule,
  IS_CROSS_CUTTING,
  LEVEL_DEPTH,
  LEVEL_LABEL,
  type RuleLevel,
} from "./allowanceRuleModel"

// ─────────────────────────────────────────────────────────────────────────────
// RulesTree — the level-tiered projection (D5 write-back target).
//
// The Base (the prose summary above) is the foundation. Rules One confirms are
// rendered here as a depth-tiered, plain-language list: row order = evaluation
// order, indentation = scope depth (the chain of labels down the indent IS the
// condition), a 2px left rail marks each row (info-colored for cross-cutting
// peers), and a narrower rule that overrides a broader one is tagged Exception.
// ─────────────────────────────────────────────────────────────────────────────

// Evaluation order: Common floor → Country/Contract/Role nesting → cross-cutting
// (tenure / role filters, "across every country") → (rounding would run last).
const LEVEL_ORDER: Record<RuleLevel, number> = {
  common: 0,
  country: 1,
  contract: 2,
  role: 3,
  "tenure-filter": 4,
  "role-filter": 5,
}

export function RulesTree({
  rules,
  onDelete,
}: {
  rules: CustomRule[]
  onDelete: (id: string) => void
}) {
  if (rules.length === 0) return null

  const ordered = [...rules].sort(
    (a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]
  )

  return (
    <div className="flex flex-col gap-2 pt-1">
      <span className="text-xs font-semibold uppercase tracking-wide text-f1-foreground-secondary">
        Rules on top of the base
      </span>
      <div className="flex flex-col gap-2">
        {ordered.map((rule) => (
          <RuleRow key={rule.id} rule={rule} onDelete={() => onDelete(rule.id)} />
        ))}
      </div>
    </div>
  )
}

function RuleRow({ rule, onDelete }: { rule: CustomRule; onDelete: () => void }) {
  const depth = LEVEL_DEPTH[rule.level]
  const crossCutting = IS_CROSS_CUTTING[rule.level]

  return (
    <div className="flex items-stretch" style={{ marginLeft: depth * 20 }}>
      {/* 2px scope rail — info-colored for cross-cutting peers. */}
      <div
        className={`w-0.5 shrink-0 rounded-full ${
          crossCutting ? "bg-f1-foreground-info" : "bg-f1-border"
        }`}
        aria-hidden
      />
      <div className="flex flex-1 items-start justify-between gap-3 py-1 pl-3">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <F0TagStatus
              text={LEVEL_LABEL[rule.level]}
              variant={crossCutting ? "info" : "neutral"}
            />
            {rule.isException ? (
              <F0TagStatus text="Exception" variant="warning" />
            ) : null}
            <span className="text-sm font-semibold text-f1-foreground">
              {rule.title}
            </span>
          </div>
          <span className="text-sm leading-relaxed text-f1-foreground-secondary">
            {rule.summary}
          </span>
          {rule.placementNote ? (
            <span className="text-xs text-f1-foreground-secondary">
              {rule.placementNote}
            </span>
          ) : null}
        </div>
        <F0Button
          label="Delete rule"
          hideLabel
          variant="ghost"
          icon={Delete}
          onClick={onDelete}
        />
      </div>
    </div>
  )
}
