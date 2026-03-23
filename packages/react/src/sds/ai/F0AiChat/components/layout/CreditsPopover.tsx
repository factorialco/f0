import { motion } from "motion/react"
import { useCallback, useState } from "react"

import { F0AvatarCompany } from "@/components/avatars/F0AvatarCompany"
import { ButtonInternal } from "@/components/F0Button/internal"
import { OneEllipsis } from "@/components/OneEllipsis"
import { Sliders } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Action } from "@/ui/Action"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import type { CreditsUsage } from "../../types"

import { useAiChat } from "../../providers/AiChatStateProvider"

export function CreditsPopover() {
  const { credits } = useAiChat()
  const i18n = useI18n()
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

  const percentage = data
    ? Math.min(100, Math.round((data.used / data.total) * 100))
    : 0

  const hasHeader = credits.companyName

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
          <div className="flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg text-f1-foreground transition-colors">
            <F0AvatarCompany
              name={credits.companyName ?? ""}
              src={credits.companyLogoUrl}
              size="lg"
            />
            <div className="flex flex-col">
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
              <div className="flex flex-col gap-2">
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
                <div className="flex justify-between">
                  <span className="text-base font-medium text-f1-foreground">
                    {i18n.t("ai.credits.title")}
                  </span>
                  <span className="font-medium text-f1-foreground-secondary">
                    {i18n.t("ai.credits.creditsLeft", {
                      total: (data.total - data.used).toLocaleString(),
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        width: `${percentage}%`,
                        backgroundImage:
                          "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)",
                        backgroundSize: "300% 100%",
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 0%"],
                      }}
                      transition={{
                        duration: 4,
                        ease: "linear",
                        repeat: Infinity,
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
              </>
            )}
          </div>
          {credits.upgradePlanUrl && (
            <div className="flex items-center justify-between border-0 border-t border-solid border-f1-border-secondary p-3">
              <span>{i18n.t("ai.credits.needMoreCredits")}</span>
              <Action variant="outline" href={credits.upgradePlanUrl}>
                {i18n.t("ai.credits.upgradePlan")}
              </Action>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
