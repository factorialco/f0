import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

type UsageRowProps = {
  /** Already-localized row label. */
  label: string
  /** 0–100, already clamped by the caller. */
  percentage: number
}

/**
 * Label + "N% used" + a bar. The bar turns red once the allowance is gone so
 * the exhausted state reads at a glance, matching the ring trigger.
 */
export const UsageRow = ({ label, percentage }: UsageRowProps) => {
  const i18n = useI18n()
  const exhausted = percentage >= 100

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <span className="min-w-0 truncate text-base font-medium text-f1-foreground">
          {label}
        </span>
        <span className="shrink-0 font-medium tabular-nums text-f1-foreground-secondary">
          {i18n.t("ai.usageLimits.used", { percentage })}
        </span>
      </div>
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
              : "bg-f1-background-accent-bold"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
