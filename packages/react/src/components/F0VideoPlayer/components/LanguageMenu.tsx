import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Check } from "@/icons/app"
import { type LanguageOption, languageLabel } from "@/lib/localized"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

export interface LanguageMenuProps {
  /** Active locale. */
  value: string
  options: LanguageOption[]
  onChange: (locale: string) => void
  /** Portal target (the player wrapper), so the menu survives fullscreen. */
  containerRef: React.RefObject<HTMLElement | null>
}

/**
 * Language selector for the video's localized text tracks and described source.
 * Trigger shows the active language's short code; the menu lists full language
 * names. Mirrors PlaybackRateMenu (f0 Popover, roving focus, fullscreen-safe).
 */
export function LanguageMenu({
  value,
  options,
  onChange,
  containerRef,
}: LanguageMenuProps) {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  const active = options.find((o) => o.locale === value)

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>(
        '[role="menuitemradio"]'
      )
    )
    if (items.length === 0) return
    const current = items.indexOf(document.activeElement as HTMLButtonElement)
    let next: number
    switch (event.key) {
      case "ArrowDown":
        next = current < 0 ? 0 : (current + 1) % items.length
        break
      case "ArrowUp":
        next = current <= 0 ? items.length - 1 : current - 1
        break
      case "Home":
        next = 0
        break
      case "End":
        next = items.length - 1
        break
      default:
        return
    }
    event.preventDefault()
    items[next]?.focus()
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <F0Button
          variant="ghost"
          size="sm"
          label={active ? languageLabel(active) : value}
          tooltip={t("videoPlayer.language")}
        />
      </PopoverTrigger>
      <PopoverContent
        container={containerRef.current}
        side="top"
        align="end"
        sideOffset={8}
        className={cn(
          "flex w-auto min-w-[8rem] flex-col gap-0.5 rounded-md border",
          "border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"
        )}
        role="menu"
        aria-label={t("videoPlayer.language")}
        onKeyDown={handleMenuKeyDown}
      >
        {options.map((option) => {
          const isActive = option.locale === value
          return (
            <button
              key={option.locale}
              type="button"
              role="menuitemradio"
              aria-checked={isActive}
              className={cn(
                "relative flex items-center rounded-xs py-1.5 pl-8 pr-3",
                "cursor-pointer border-none bg-transparent text-left text-sm font-medium",
                "text-f1-foreground transition-colors hover:bg-f1-background-secondary",
                "focus-visible:bg-f1-background-secondary focus-visible:outline-none",
                "[&_svg]:h-3.5 [&_svg]:w-3.5"
              )}
              onClick={() => {
                onChange(option.locale)
                setOpen(false)
              }}
            >
              {isActive && (
                <span className="absolute left-2.5 inline-flex items-center">
                  <Check />
                </span>
              )}
              {languageLabel(option)}
            </button>
          )
        })}
      </PopoverContent>
    </Popover>
  )
}
