import { F0Button } from "@factorialco/f0-react"
import { AlertCircleLine, Cross } from "@factorialco/f0-react/icons/app"

type OverlapGroup = {
  category: string
  apps: string[]
  monthlyCost: number
}

type Props = {
  groups: OverlapGroup[]
  onViewAnalysis: (group: OverlapGroup) => void
  onDismiss: () => void
}

export function OverlapBanner({ groups, onViewAnalysis, onDismiss }: Props) {
  if (groups.length === 0) return null

  const top = groups[0]

  return (
    <div className="mb-4 flex items-start justify-between rounded-lg border border-f1-border-warning bg-f1-background-warning-secondary px-4 py-3">
      <div className="flex items-start gap-3">
        <AlertCircleLine className="mt-0.5 h-4 w-4 shrink-0 text-f1-foreground-warning" />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-f1-foreground">
            Potential overlap detected
          </span>
          <span className="text-sm text-f1-foreground-secondary">
            You have {top.apps.length} active {top.category} tools:{" "}
            <span className="font-medium">{top.apps.join(" · ")}</span>
          </span>
          <span className="text-sm text-f1-foreground-secondary">
            Combined cost:{" "}
            <span className="font-medium">
              €{top.monthlyCost.toLocaleString()}/mo
            </span>
          </span>
          <div className="mt-2">
            <F0Button
              label="View analysis"
              size="sm"
              onClick={() => onViewAnalysis(top)}
            />
          </div>
        </div>
      </div>
      <button
        onClick={onDismiss}
        className="ml-4 shrink-0 text-f1-foreground-secondary hover:text-f1-foreground"
        aria-label="Dismiss"
      >
        <Cross className="h-4 w-4" />
      </button>
    </div>
  )
}
