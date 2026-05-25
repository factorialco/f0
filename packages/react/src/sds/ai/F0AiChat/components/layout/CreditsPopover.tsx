import { motion } from "motion/react"
import { useCallback, useState } from "react"

import { F0AvatarCompany } from "@/components/avatars/F0AvatarCompany"
import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { Sliders, Upsell } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import type { CreditsUsage } from "../../types"

import { useAiChat } from "../../providers/AiChatStateProvider"

const CREDITS_GRADIENT =
  "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)"

type CreditsSectionProps = {
  label: string
  used: number
  total: number
  monthlyLabel: string
  creditsLeftLabel: string
  reduceMotion: boolean
}

function CreditsSection({
  label,
  used,
  total,
  monthlyLabel,
  creditsLeftLabel,
  reduceMotion,
}: CreditsSectionProps) {
  const percentage =
    total > 0 ? Math.min(100, Math.round((used / total) * 100)) : 0

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="text-base font-medium text-f1-foreground">
          {label}
        </span>
        <span className="font-medium text-f1-foreground-secondary">
          {creditsLeftLabel}
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
          {monthlyLabel}
        </span>
      </div>
    </div>
  )
}

export function CreditsPopover() {
  const { credits } = useAiChat()
  const i18n = useI18n()
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState<CreditsUsage | null>(null)

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen)
      if (isOpen && credits?.fetchUsage) {
        setLoading(true)
        setError(false)
        credits
          .fetchUsage()
          .then((result) => {
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
    [credits]
  )

  if (!credits) return null

  const hasHeader = credits.companyName
  const showCompanySection = credits.canViewCompanyCredits !== false

  const monthlyLabel = i18n.t("ai.credits.monthlyCredits")

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
              name={credits.companyName ?? ""}
              src={credits.companyLogoUrl}
              size="lg"
            />
            <div className="flex min-w-0 flex-col">
              <OneEllipsis tag="span" className="font-medium">
                {credits.companyName ?? ""}
              </OneEllipsis>
              {credits.planName && (
                <OneEllipsis
                  tag="span"
                  className="text-sm font-medium text-f1-foreground-secondary"
                >
                  {credits.planName}
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
              <>
                {showCompanySection && (
                  <CreditsSection
                    label={i18n.t("ai.credits.companyCredits")}
                    used={data.used}
                    total={data.total}
                    monthlyLabel={monthlyLabel}
                    creditsLeftLabel={i18n.t("ai.credits.creditsLeft", {
                      total: Math.max(
                        0,
                        data.total - data.used
                      ).toLocaleString(),
                    })}
                    reduceMotion={reduceMotion}
                  />
                )}
              </>
            )}
          </div>
          {credits.upgradePlanUrl && showCompanySection && (
            <div className="flex items-center justify-between border-0 border-t border-solid border-f1-border-secondary p-3">
              <span>{i18n.t("ai.credits.needMoreCredits")}</span>
              <F0Button
                variant="outlinePromote"
                href={credits.upgradePlanUrl}
                label={i18n.t("ai.credits.upgradePlan")}
                icon={Upsell}
              />
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
