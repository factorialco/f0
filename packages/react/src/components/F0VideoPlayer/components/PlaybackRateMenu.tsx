import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Check } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { PlaybackRate, formatPlaybackRate, playbackRates } from "../utils"

export interface PlaybackRateMenuProps {
  value: PlaybackRate
  onChange: (rate: PlaybackRate) => void
  /**
   * Element the menu portals into. Set to the player wrapper so the menu stays
   * inside the fullscreened element (Radix portals to `document.body` by
   * default, which is outside the fullscreen target).
   */
  containerRef: React.RefObject<HTMLElement | null>
}

/** Playback-speed menu: F0Button trigger + f0 Popover content, fullscreen-safe. */
export function PlaybackRateMenu({
  value,
  onChange,
  containerRef,
}: PlaybackRateMenuProps) {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  // Roving focus so the menu honours its `role="menu"` contract (Radix Popover
  // gives Tab + Escape, but not Arrow/Home/End navigation between items).
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
          label={formatPlaybackRate(value)}
          aria-label={t("videoPlayer.playbackSpeed", {
            rate: formatPlaybackRate(value),
          })}
        />
      </PopoverTrigger>
      <PopoverContent
        container={containerRef.current}
        side="top"
        align="end"
        sideOffset={8}
        className={cn(
          "flex w-auto min-w-[7rem] flex-col gap-0.5 rounded-md border",
          "border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"
        )}
        role="menu"
        aria-label={t("videoPlayer.playbackSpeedLabel")}
        onKeyDown={handleMenuKeyDown}
      >
        {playbackRates.map((rate) => {
          const isActive = rate === value
          return (
            <button
              key={rate}
              type="button"
              role="menuitemradio"
              aria-checked={isActive}
              className={cn(
                "relative flex items-center rounded-xs py-1.5 pl-8 pr-3",
                "cursor-pointer border-none bg-transparent text-left text-sm font-medium tabular-nums",
                "text-f1-foreground transition-colors hover:bg-f1-background-secondary",
                "focus-visible:bg-f1-background-secondary focus-visible:outline-none",
                "[&_svg]:h-3.5 [&_svg]:w-3.5"
              )}
              onClick={() => {
                onChange(rate)
                setOpen(false)
              }}
            >
              {isActive && (
                <span className="absolute left-2.5 inline-flex items-center">
                  <Check />
                </span>
              )}
              {formatPlaybackRate(rate)}
            </button>
          )
        })}
      </PopoverContent>
    </Popover>
  )
}
