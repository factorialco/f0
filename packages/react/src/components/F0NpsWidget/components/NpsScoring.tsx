import { useI18n } from "@/lib/providers/i18n"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"
import { cn, focusRing } from "@/lib/utils"

const SCORES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

interface NpsScoringProps {
  value: number | undefined
  onChange: (score: number) => void
}

export function NpsScoring({ value, onChange }: NpsScoringProps) {
  const t = useI18n()
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between gap-1">
        {SCORES.map((score) => {
          const isSelected = value === score
          return (
            <button
              key={score}
              type="button"
              onClick={() => onChange(score)}
              aria-label={String(score)}
              aria-pressed={isSelected}
              className={cn(
                "relative h-9 w-9 shrink-0 text-sm font-medium transition-colors",
                focusRing(),
                buttonSizeVariants({ size: "md" }),
                actionVariants({ variant: isSelected ? "selected" : "outline" })
              )}
            >
              {score}
            </button>
          )
        })}
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-f1-foreground-secondary">
          {t.npsWidget.notLikely}
        </span>
        <span className="text-xs text-f1-foreground-secondary">
          {t.npsWidget.veryLikely}
        </span>
      </div>
    </div>
  )
}
