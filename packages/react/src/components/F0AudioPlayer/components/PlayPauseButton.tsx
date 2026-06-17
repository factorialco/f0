import { SolidPause, SolidPlay } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { F0AudioPlayerSize } from "../types"

interface PlayPauseButtonProps {
  isPlaying: boolean
  disabled?: boolean
  size?: F0AudioPlayerSize
  onToggle: () => void
}

export const PlayPauseButton = ({
  isPlaying,
  disabled,
  size = "md",
  onToggle,
}: PlayPauseButtonProps) => {
  const i18n = useI18n()
  const Icon = isPlaying ? SolidPause : SolidPlay

  return (
    <button
      type="button"
      aria-label={isPlaying ? i18n.audioPlayer.pause : i18n.audioPlayer.play}
      disabled={disabled}
      onClick={onToggle}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary text-f1-foreground-secondary transition-colors dark:bg-f1-background-tertiary",
        "hover:bg-f1-background-secondary disabled:cursor-not-allowed disabled:opacity-50",
        size === "sm" ? "size-8" : "size-10",
        focusRing()
      )}
    >
      <Icon className={size === "sm" ? "size-5" : "size-6"} />
    </button>
  )
}
