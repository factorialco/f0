import { F0Button, F0Text } from "@factorialco/f0-react"

import type { SignalPolicy } from "../shared/types"

type Props = {
  policies: SignalPolicy[]
  activePolicyId: string
  onSelect: (id: string) => void
}

/**
 * Compact policy switcher rendered above the page body. Lets a manager flip
 * between weighting templates (Default / Engineering / Sales / Operations).
 *
 * In production this would live in Settings; we surface it inline so PMs can
 * see how the composite score reacts to weighting in real time.
 */
export function PolicyBar({ policies, activePolicyId, onSelect }: Props) {
  const active = policies.find((p) => p.id === activePolicyId) ?? policies[0]
  return (
    <div className="border-f1-border-secondary bg-f1-background-secondary flex flex-col gap-2 rounded-lg border p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <F0Text content="Scoring policy" variant="label" />
          <F0Text content={active.description} variant="description" />
        </div>
        <div className="flex flex-wrap gap-2">
          {policies.map((p) => (
            <F0Button
              key={p.id}
              size="sm"
              variant={p.id === activePolicyId ? "default" : "outline"}
              label={p.name}
              onClick={() => onSelect(p.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
