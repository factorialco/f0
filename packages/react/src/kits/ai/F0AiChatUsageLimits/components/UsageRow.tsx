import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

type UsageRowProps = {
  label: string
  description?: string
  percentage: number
  unlimited?: boolean
}

export const UsageRow = ({
  label,
  description,
  percentage,
  unlimited = false,
}: UsageRowProps) => {
  const i18n = useI18n()
  const exhausted = !unlimited && percentage >= 100

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <span className="min-w-0 truncate text-base font-medium text-f1-foreground">
          {label}
        </span>
        <span className="shrink-0 font-normal tabular-nums text-f1-foreground-secondary">
          {unlimited
            ? i18n.t("ai.usageLimits.unlimited")
            : i18n.t("ai.usageLimits.used", { percentage })}
        </span>
      </div>
      {unlimited ? (
        <div
          role="img"
          aria-label={i18n.t("ai.usageLimits.unlimited")}
          className="h-2 w-full rounded-full bg-f1-border"
        />
      ) : (
        <div
          role="progressbar"
          aria-label={label}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
          className="relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary"
        >
          <div
            className={cn(
              "h-full rounded-full transition-[width] duration-300 ease-out motion-reduce:transition-none",
              exhausted
                ? "bg-f1-background-critical-bold"
                : "bg-f1-background-info-bold"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
      {description ? (
        <span className="truncate text-base text-f1-foreground-secondary">
          {description}
        </span>
      ) : null}
    </div>
  )
}
