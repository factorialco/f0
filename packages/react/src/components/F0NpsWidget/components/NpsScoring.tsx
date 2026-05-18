import { F0Text } from "@/components/F0Text"
import { cn, focusRing } from "@/lib/utils"
import { useI18n } from "@/lib/providers/i18n"
import { actionVariants } from "@/ui/Action/variants"

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
                "relative aspect-square flex-1 rounded transition-colors",
                focusRing(),
                actionVariants({ variant: isSelected ? "selected" : "outline" })
              )}
            >
              <span className="main flex items-center justify-center">
                {score}
              </span>
            </button>
          )
        })}
      </div>
      <div className="flex justify-between">
        <F0Text variant="small" content={t.npsWidget.notLikely} />
        <F0Text variant="small" content={t.npsWidget.veryLikely} />
      </div>
    </div>
  )
}
