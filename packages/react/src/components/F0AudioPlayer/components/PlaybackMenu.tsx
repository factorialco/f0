import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { CheckCircle, Ellipsis } from "@/icons/app"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import type { AudioPlayerMenuAction } from "../types"

interface PlaybackMenuProps {
  playbackRate: number
  playbackRates: number[]
  onRateChange: (rate: number) => void
  disabled?: boolean
  extraItems?: AudioPlayerMenuAction[]
}

export const PlaybackMenu = ({
  playbackRate,
  playbackRates,
  onRateChange,
  disabled,
  extraItems = [],
}: PlaybackMenuProps) => {
  const showSpeed = playbackRates.length > 0

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <F0Button
          variant="ghost"
          size="sm"
          icon={Ellipsis}
          label="Recording options"
          hideLabel
          disabled={disabled}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex min-w-44 flex-col gap-0.5"
      >
        {showSpeed && (
          <>
            <DropdownMenuLabel className="text-f1-foreground-secondary">
              Playback speed
            </DropdownMenuLabel>
            {playbackRates.map((rate) => {
              const selected = rate === playbackRate
              return (
                <DropdownMenuItem
                  key={rate}
                  onSelect={() => onRateChange(rate)}
                  className={cn(
                    "justify-between gap-3 px-3 text-sm text-f1-foreground",
                    selected &&
                      "before:absolute before:inset-x-1 before:inset-y-0 before:rounded before:bg-f1-background-selected-bold/10 before:content-[''] dark:before:bg-f1-background-selected-bold/20"
                  )}
                >
                  <span className="relative">{rate}x</span>
                  {selected && (
                    <span className="relative flex text-f1-icon-selected">
                      <F0Icon icon={CheckCircle} size="md" />
                    </span>
                  )}
                </DropdownMenuItem>
              )
            })}
          </>
        )}
        {extraItems.length > 0 && (
          <>
            {showSpeed && <DropdownMenuSeparator />}
            {extraItems.map((action, index) => (
              <DropdownMenuItem
                key={index}
                onSelect={() => action.onClick?.()}
                className={cn(
                  "gap-2 px-3 text-sm",
                  action.critical
                    ? "text-f1-foreground-critical"
                    : "text-f1-foreground"
                )}
              >
                {action.icon && (
                  <span
                    className={cn(
                      "relative flex",
                      action.critical ? "text-f1-icon-critical" : "text-f1-icon"
                    )}
                  >
                    <F0Icon icon={action.icon} size="md" />
                  </span>
                )}
                <span className="relative">{action.label}</span>
              </DropdownMenuItem>
            ))}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
