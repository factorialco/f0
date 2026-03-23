import { motion } from "motion/react"
import { useCallback, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { ExternalLink, Sliders } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Action } from "@/ui/Action"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import type { CreditsUsage } from "../../types"
import { useAiChat } from "../../providers/AiChatStateProvider"

export function CreditsPopover() {
  const { fetchCreditsUsage, upgradePlanUrl } = useAiChat()
  const i18n = useI18n()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState<CreditsUsage | null>(null)

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen)
      if (isOpen && fetchCreditsUsage) {
        setLoading(true)
        setError(false)
        fetchCreditsUsage()
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
    [fetchCreditsUsage]
  )

  if (!fetchCreditsUsage) return null

  const percentage = data ? Math.round((data.used / data.total) * 100) : 0

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <ButtonInternal
          variant="ghost"
          hideLabel
          label={i18n.t("ai.credits")}
          icon={Sliders}
          pressed={open}
        />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        sideOffset={8}
        className="w-80 border border-solid border-f1-border-secondary rounded-md"
      >
        <div className="flex flex-col gap-2">
          <span className="text-f1-foreground text-base font-medium">
            {i18n.t("ai.credits")}
          </span>
          {loading && (
            <div className="flex flex-col gap-2">
              <div className="bg-f1-background-secondary h-3 w-full animate-pulse rounded-full" />
              <div className="bg-f1-background-secondary h-[16px] w-24 animate-pulse rounded" />
            </div>
          )}
          {error && (
            <span className="text-f1-foreground-secondary text-sm">
              {i18n.t("ai.creditsError")}
            </span>
          )}
          {!loading && !error && data && (
            <>
              <div className="flex items-center gap-2">
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-f1-background-secondary">
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
              <div className="flex items-center justify-between">
                <span className="text-f1-foreground-secondary text-sm tabular-nums">
                  {data.used.toLocaleString()} / {data.total.toLocaleString()}{" "}
                  {i18n.t("ai.creditsUsed")}
                </span>
              </div>
            </>
          )}
          {upgradePlanUrl && (
            <div className="flex justify-end">
              <Action
                variant="outline"
                href={upgradePlanUrl}
                target="_blank"
                rel="noopener noreferrer"
                append={<F0Icon icon={ExternalLink} size="sm" />}
              >
                {i18n.t("ai.upgradePlan")}
              </Action>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
