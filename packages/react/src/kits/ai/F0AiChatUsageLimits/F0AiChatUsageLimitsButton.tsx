import { useCallback, useRef, useState } from "react"
import { F0Icon } from "@/components/F0Icon"
import ChevronRight from "@/icons/app/ChevronRight"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { UsageRing } from "./components/UsageRing"
import { UsageRow } from "./components/UsageRow"
import type { F0AiChatUsageLimitsButtonProps } from "./types"

const clampPercentage = (value: number) =>
  Math.min(100, Math.max(0, Math.round(value)))

const UsageSkeleton = () => (
  <div className="flex flex-col gap-2" aria-busy="true" aria-live="polite">
    <div className="flex justify-between">
      <div className="h-5 w-28 animate-pulse rounded bg-f1-background-secondary" />
      <div className="h-5 w-16 animate-pulse rounded bg-f1-background-secondary" />
    </div>
    <div className="h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" />
  </div>
)

/**
 * Headless usage-limits popover with its ring trigger. `F0AiChatTextArea`
 * renders it from its `usageLimits` prop.
 */
export const F0AiChatUsageLimitsButton = ({
  usage,
  error = false,
  onOpenChange,
  trigger,
  side = "top",
}: F0AiChatUsageLimitsButtonProps) => {
  const i18n = useI18n()
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen)
      onOpenChange?.(isOpen)
    },
    [onOpenChange]
  )

  const personal = usage ? clampPercentage(usage.usedPercentage) : 0
  const unlimited = usage?.unlimited ?? false
  const ringTone = unlimited
    ? "unlimited"
    : personal >= 100
      ? "exhausted"
      : "default"
  const sections = usage?.sections ?? []
  const hasCompanySection = !!usage?.onSeeCompany || sections.length > 0
  const title = i18n.t("ai.usageLimits.title")
  const triggerValue = unlimited
    ? i18n.t("ai.usageLimits.unlimited")
    : i18n.t("ai.usageLimits.used", { percentage: personal })
  const triggerLabel = usage ? `${title}: ${triggerValue}` : title

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        {trigger ?? (
          <button
            type="button"
            aria-expanded={open}
            aria-haspopup="dialog"
            className={cn(
              "flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-transparent p-0",
              "hover:bg-f1-background-secondary",
              open && "bg-f1-background-secondary",
              focusRing()
            )}
          >
            <UsageRing percentage={personal} tone={ringTone} />
            <span className="sr-only">{triggerLabel}</span>
          </button>
        )}
      </PopoverTrigger>
      <PopoverContent
        ref={contentRef}
        side={side}
        align="end"
        sideOffset={8}
        collisionPadding={12}
        tabIndex={-1}
        // Radix would focus the first tabbable child, painting a focus ring on
        // "Your company" after a mouse click.
        onOpenAutoFocus={(event) => {
          event.preventDefault()
          contentRef.current?.focus()
        }}
        className="flex w-[328px] flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary p-0 shadow-md"
      >
        <div className="p-4">
          {error ? (
            <span className="text-sm text-f1-foreground-secondary">
              {i18n.t("ai.usageLimits.error")}
            </span>
          ) : !usage ? (
            <UsageSkeleton />
          ) : (
            <UsageRow
              label={title}
              description={usage.description}
              percentage={personal}
              unlimited={unlimited}
            />
          )}
        </div>
        {usage && hasCompanySection ? (
          <div className="flex flex-col border-0 border-t border-solid border-f1-border-secondary p-2">
            {usage.onSeeCompany ? (
              <button
                type="button"
                onClick={usage.onSeeCompany}
                className={cn(
                  "flex w-full items-center gap-2 rounded bg-transparent p-2 text-left text-base font-medium text-f1-foreground-tertiary",
                  "hover:bg-f1-background-secondary hover:text-f1-foreground-secondary",
                  focusRing()
                )}
              >
                <span className="min-w-0 flex-1 truncate">
                  {i18n.t("ai.usageLimits.yourCompany")}
                </span>
                <F0Icon icon={ChevronRight} size="md" color="default" />
              </button>
            ) : null}
            {sections.map((section) => (
              <div key={section.id} className="p-2">
                <UsageRow
                  label={section.label}
                  description={section.description}
                  percentage={clampPercentage(section.usedPercentage)}
                  unlimited={section.unlimited}
                />
              </div>
            ))}
          </div>
        ) : null}
      </PopoverContent>
    </Popover>
  )
}
