import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { motion } from "motion/react"
import { forwardRef, useId, useState, type CSSProperties } from "react"

import { F0Button } from "@/components/F0Button"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
import { TabNavigation, TabNavigationLink } from "@/ui/tab-navigation"

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
  const detailsId = useId()

  const hasDetails = Boolean(details && details.length > 0)
  const [isExpanded = false, setExpanded] = useControllableState<boolean>({
    prop: expanded,
    defaultProp: defaultExpanded,
    onChange: onExpandedChange,
  })
  const [activeTab, setActiveTab] = useState(details?.[0]?.value)
  const activeContent =
    details?.find((tab) => tab.value === activeTab)?.content ??
    details?.[0]?.content

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
          id={detailsId}
          role="region"
          aria-label={title}
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            visibility: isExpanded ? "visible" : "hidden",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.15,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className="-mx-3 overflow-hidden"
        >
          <TabNavigation className="px-0">
            {details?.map((tab) => (
              <TabNavigationLink
                key={tab.value}
                active={tab.value === activeTab}
                asChild
              >
                <button type="button" onClick={() => setActiveTab(tab.value)}>
                  {tab.label}
                </button>
              </TabNavigationLink>
            ))}
          </TabNavigation>
          <div className="px-3 pt-2.5">
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
