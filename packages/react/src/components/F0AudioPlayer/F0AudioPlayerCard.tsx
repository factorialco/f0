import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { motion } from "motion/react"
import { forwardRef, useState, type CSSProperties } from "react"

import { F0Button } from "@/components/F0Button"
import { F0SegmentedControl } from "@/experimental/Actions/F0SegmentedControl"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"

import { AudioScrubber } from "./components/AudioScrubber"
import { PlaybackMenu } from "./components/PlaybackMenu"
import { PlaybackTime } from "./components/PlaybackTime"
import { PlayPauseButton } from "./components/PlayPauseButton"
import type { F0AudioPlayerCardProps } from "./types"
import { usePlayerController } from "./usePlayerController"
import { getDataAttributes } from "./utils"

const F0AudioPlayerCardBase = forwardRef<
  HTMLDivElement,
  F0AudioPlayerCardProps
>((props, ref) => {
  const {
    title,
    subtitle,
    actions,
    className,
    src,
    preload = "metadata",
    autoPlay = false,
    disabled = false,
    ariaLabel,
    size = "md",
    details,
    expanded,
    defaultExpanded = false,
    onExpandedChange,
    detailsMaxHeight = 200,
  } = props

  const i18n = useI18n()
  const controller = usePlayerController(props)
  const dataAttributes = getDataAttributes(props)
  const shouldReduceMotion = useReducedMotion()

  const hasDetails = Boolean(details && details.length > 0)
  const [isExpanded = false, setExpanded] = useControllableState<boolean>({
    prop: expanded,
    defaultProp: defaultExpanded,
    onChange: onExpandedChange,
  })
  const [selectedTab, setSelectedTab] = useState(details?.[0]?.value)
  // Guard against a stale selection if `details` changes (e.g. a recycled
  // card in a list): fall back to the first tab so the highlight and content
  // stay in sync.
  const activeTab = details?.some((tab) => tab.value === selectedTab)
    ? selectedTab
    : details?.[0]?.value
  const activeContent = details?.find((tab) => tab.value === activeTab)?.content

  return (
    <div
      ref={ref}
      role="group"
      aria-label={ariaLabel ?? title}
      className={cn(
        "flex flex-col gap-2.5 rounded-2xl border border-solid border-f1-border bg-f1-background p-3",
        className
      )}
      {...dataAttributes}
    >
      <audio
        ref={controller.audioRef}
        src={src}
        preload={preload}
        autoPlay={autoPlay}
      />

      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <PlayPauseButton
            isPlaying={controller.isPlaying}
            disabled={disabled}
            size={size}
            onToggle={controller.toggle}
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-medium text-f1-foreground">
              {title}
            </span>
            {subtitle && (
              <span className="truncate text-sm text-f1-foreground-secondary">
                {subtitle}
              </span>
            )}
          </div>
        </div>
        {(hasDetails || controller.playbackRates.length > 0 || actions) && (
          <div className="flex shrink-0 items-center gap-2">
            {hasDetails && (
              <F0Button
                variant="outline"
                size="sm"
                label={
                  isExpanded
                    ? i18n.audioPlayer.hideDetail
                    : i18n.audioPlayer.viewDetail
                }
                onClick={() => setExpanded(!isExpanded)}
                aria-expanded={isExpanded}
              />
            )}
            {(controller.playbackRates.length > 0 || actions) && (
              <PlaybackMenu
                playbackRate={controller.playbackRate}
                playbackRates={controller.playbackRates}
                onRateChange={controller.setPlaybackRate}
                disabled={disabled}
                extraItems={actions}
              />
            )}
          </div>
        )}
      </div>

      <div className="flex w-full items-center gap-2">
        <AudioScrubber
          currentTime={controller.currentTime}
          duration={controller.duration}
          buffered={controller.buffered}
          disabled={disabled}
          onSeek={controller.seek}
        />

        <PlaybackTime
          currentTime={controller.currentTime}
          duration={controller.duration}
          size={size}
        />
      </div>

      {hasDetails && (
        <motion.div
          role="region"
          aria-label={i18n.audioPlayer.details}
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            marginTop: isExpanded ? 0 : "-0.625rem",
            opacity: isExpanded ? 1 : 0,
            visibility: isExpanded ? "visible" : "hidden",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.15,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className="overflow-hidden"
        >
          <F0SegmentedControl
            fullWidth
            ariaLabel={i18n.audioPlayer.details}
            value={activeTab}
            onChange={setSelectedTab}
            items={
              details?.map((tab) => ({
                value: tab.value,
                label: tab.label,
              })) ?? []
            }
          />
          <div className="pt-2.5">
            <ScrollArea
              style={
                {
                  "--audio-details-max-h": `${detailsMaxHeight}px`,
                } as CSSProperties
              }
              className="[&_[data-scroll-container]]:max-h-[var(--audio-details-max-h)]"
            >
              <div className="break-words pr-1 text-sm text-f1-foreground">
                {activeContent}
              </div>
            </ScrollArea>
          </div>
        </motion.div>
      )}
    </div>
  )
})

F0AudioPlayerCardBase.displayName = "F0AudioPlayerCard"

export { F0AudioPlayerCardBase }
