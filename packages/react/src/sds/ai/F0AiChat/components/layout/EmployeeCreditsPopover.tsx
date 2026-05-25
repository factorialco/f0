import { motion } from "motion/react"
import { useCallback, useState } from "react"

import { F0AvatarCompany } from "@/components/avatars/F0AvatarCompany"
import { ButtonInternal } from "@/components/F0Button/internal"
import { Sliders } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import type { EmployeeCreditsUsage } from "../../types"

import { useAiChat } from "../../providers/AiChatStateProvider"

const CREDITS_GRADIENT =
  "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)"

/**
 * Employee-only credits popover.
 *
 * Rendered when the host passes `employeeCredits` to the AI provider.
 * Mutually exclusive with the classic {@link CreditsPopover}: when both
 * `credits` and `employeeCredits` are provided, this one wins.
 *
 * No company-level section, no upgrade CTA — just the logged-in employee's
 * monthly allocation. Hosts opt in by passing `employeeCredits` only for
 * employees who have a per-employee monthly allocation configured.
 */
export function EmployeeCreditsPopover() {
  const { employeeCredits } = useAiChat()
  const i18n = useI18n()
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState<EmployeeCreditsUsage | null>(null)

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen)
      if (isOpen && employeeCredits?.fetchUsage) {
        setLoading(true)
        setError(false)
        employeeCredits
          .fetchUsage()
          .then((result: EmployeeCreditsUsage) => {
            setData(result)
            setError(false)
          })
          .catch(() => {
            setError(true)
          })
          .finally(() => {
            setLoading(false)
          })
      }
    },
    [employeeCredits]
  )

  if (!employeeCredits) return null

  const hasHeader = !!employeeCredits.companyName
  const percentage =
    data && data.total > 0
      ? Math.min(100, Math.round((data.used / data.total) * 100))
      : 0
  const remaining = data ? Math.max(0, data.total - data.used) : 0

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <ButtonInternal
          variant="ghost"
          hideLabel
          label={i18n.t("ai.credits.title")}
          icon={Sliders}
          pressed={open}
        />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        alignOffset={-68}
        sideOffset={4}
        className="flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3"
      >
        {hasHeader && (
          <div className="flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground">
            <F0AvatarCompany
              name={employeeCredits.companyName ?? ""}
              src={employeeCredits.companyLogoUrl}
              size="lg"
            />
            <div className="flex min-w-0 flex-col">
              <OneEllipsis tag="span" className="font-medium">
                {employeeCredits.companyName ?? ""}
              </OneEllipsis>
              {employeeCredits.planName && (
                <OneEllipsis
                  tag="span"
                  className="text-sm font-medium text-f1-foreground-secondary"
                >
                  {employeeCredits.planName}
                </OneEllipsis>
              )}
            </div>
          </div>
        )}
        <div className="flex flex-col rounded border border-solid border-f1-border-secondary">
          <div className="flex flex-col gap-2 p-3">
            {loading && (
              <div
                className="flex flex-col gap-2"
                aria-busy="true"
                aria-live="polite"
              >
                <div className="flex justify-between">
                  <div className="h-5 w-16 animate-pulse rounded bg-f1-background-secondary" />
                  <div className="h-5 w-20 animate-pulse rounded bg-f1-background-secondary" />
                </div>
                <div className="h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" />
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" />
                  <div className="h-3 w-28 animate-pulse rounded bg-f1-background-secondary" />
                </div>
              </div>
            )}
            {error && (
              <span className="text-sm text-f1-foreground-secondary">
                {i18n.t("ai.credits.creditsError")}
              </span>
            )}
            {!loading && !error && data && (
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-base font-medium text-f1-foreground">
                    {i18n.t("ai.credits.employeeCredits")}
                  </span>
                  <span className="font-medium text-f1-foreground-secondary">
                    {i18n.t("ai.credits.creditsLeft", {
                      total: remaining.toLocaleString(),
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        width: `${percentage}%`,
                        backgroundImage: CREDITS_GRADIENT,
                        backgroundSize: "300% 100%",
                      }}
                      animate={
                        reduceMotion
                          ? undefined
                          : { backgroundPosition: ["0% 0%", "100% 0%"] }
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 4,
                        ease: "linear",
                        repeat: reduceMotion ? 0 : Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-f1-border" />
                  <span className="text-sm tabular-nums text-f1-foreground-secondary">
                    {i18n.t("ai.credits.monthlyCredits")}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
