import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { motion } from "motion/react"
import { forwardRef, useMemo, useState, type CSSProperties } from "react"

import { F0Button } from "@/components/F0Button"
import { F0SegmentedControl } from "@/experimental/Actions/F0SegmentedControl"
import { useReducedMotion } from "@/lib/a11y"
import {
  collectLanguages,
  defaultLocale,
  resolveLocalized,
} from "@/lib/localized"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"

import { AudioScrubber } from "./components/AudioScrubber"
import { LanguageSelect } from "./components/LanguageSelect"
import { PlaybackMenu } from "./components/PlaybackMenu"
import { PlaybackTime } from "./components/PlaybackTime"
import { PlayPauseButton } from "./components/PlayPauseButton"
import type { AudioPlayerDetailTab, F0AudioPlayerCardProps } from "./types"
import { useDerivedTranscription } from "./useDerivedTranscription"
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
    preload,
    autoPlay = false,
    disabled = false,
    ariaLabel,
    size = "md",
    content,
    defaultLanguage,
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

  // Legacy path: the deprecated `details` tab array is only used when the
  // structured `content` prop is absent — `content` always wins.
  const usesLegacyDetails = !content && Boolean(details && details.length > 0)

  // Localized content: a single shared language selection drives both the
  // summary and the transcription (each falls back to its first entry).
  const languages = useMemo(
    () => collectLanguages(content?.summary, content?.transcription),
    [content?.summary, content?.transcription]
  )
  const [selectedLocale, setSelectedLocale] = useState(() =>
    defaultLocale(languages, defaultLanguage)
  )
  const activeLocale = languages.some((l) => l.locale === selectedLocale)
    ? selectedLocale
    : defaultLocale(languages, defaultLanguage)

  const summary = resolveLocalized(content?.summary, activeLocale)

  // A transcription passed via `content` takes precedence; otherwise try to
  // derive one from the audio file's own text tracks.
  const passedTranscription = resolveLocalized(
    content?.transcription,
    activeLocale
  )
  const derivedTranscription = useDerivedTranscription(
    controller.audioRef,
    controller.currentSrc,
    !passedTranscription
  )
  const transcription = passedTranscription ?? derivedTranscription

  // Normalise whichever input was given into the tab list the panel renders.
  const tabs: AudioPlayerDetailTab[] = useMemo(() => {
    if (usesLegacyDetails) return details ?? []
    const built: AudioPlayerDetailTab[] = []
    if (summary) {
      built.push({
        value: "summary",
        label: i18n.audioPlayer.summary,
        content: <p className="whitespace-pre-line">{summary}</p>,
      })
    }
    if (transcription) {
      built.push({
        value: "transcription",
        label: i18n.audioPlayer.transcription,
        content: <p className="whitespace-pre-line">{transcription}</p>,
      })
    }
    return built
  }, [
    usesLegacyDetails,
    details,
    summary,
    transcription,
    i18n.audioPlayer.summary,
    i18n.audioPlayer.transcription,
  ])

  // Accessibility signal for the Storybook a11y check and product audits: an
  // audio-only recording needs a transcription (WCAG 2.1 SC 1.2.1). A passed or
  // derived transcription is "available"; anything else is "missing" — including
  // the deprecated `details` array, whose opaque content we can't confirm as a
  // transcript (migrate to `content.transcription` to be counted as available).
  const transcriptionState = transcription ? "available" : "missing"

  const hasDetails = tabs.length > 0
  // With a single tab there's nothing to switch between, so the segmented
  // control is dropped and the toggle names the content it reveals.
  const singleTab = tabs.length === 1 ? tabs[0] : undefined
  const detailToggleLabel = (isOpen: boolean): string => {
    if (singleTab?.value === "transcription") {
      return isOpen
        ? i18n.audioPlayer.hideTranscription
        : i18n.audioPlayer.viewTranscription
    }
    if (singleTab?.value === "summary") {
      return isOpen
        ? i18n.audioPlayer.hideSummary
        : i18n.audioPlayer.viewSummary
    }
    return isOpen ? i18n.audioPlayer.hideDetail : i18n.audioPlayer.viewDetail
  }

  const [isExpanded = false, setExpanded] = useControllableState<boolean>({
    prop: expanded,
    defaultProp: defaultExpanded,
    onChange: onExpandedChange,
  })
  const [selectedTab, setSelectedTab] = useState(tabs[0]?.value)
  // Guard against a stale selection if the tabs change (e.g. a recycled card in
  // a list, or a transcription resolving asynchronously): fall back to the
  // first tab so the highlight and content stay in sync.
  const activeTab = tabs.some((tab) => tab.value === selectedTab)
    ? selectedTab
    : tabs[0]?.value
  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content

  return (
    <div
      ref={ref}
      role="group"
      aria-label={ariaLabel ?? title}
      data-audio-transcription={transcriptionState}
      className={cn(
        "flex flex-col gap-2.5 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-3",
        className
      )}
      {...dataAttributes}
    >
      <audio
        ref={controller.audioRef}
        src={controller.currentSrc}
        preload={preload ?? (typeof src === "function" ? "none" : "metadata")}
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
            <span className="truncate text-base font-medium text-f1-foreground">
              {title}
            </span>
            {subtitle && (
              <span className="truncate text-base text-f1-foreground-secondary">
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
                label={detailToggleLabel(isExpanded)}
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
          aria-label={singleTab ? singleTab.label : i18n.audioPlayer.details}
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
          {/* Language picker when the content is provided in several languages;
              a single selection drives both tabs. */}
          {languages.length > 1 && activeLocale && (
            <div className="flex justify-end pb-2.5">
              <LanguageSelect
                value={activeLocale}
                options={languages}
                onChange={setSelectedLocale}
              />
            </div>
          )}
          {/* One tab has nothing to switch between — show the content alone. */}
          {!singleTab && (
            <F0SegmentedControl
              fullWidth
              ariaLabel={i18n.audioPlayer.details}
              value={activeTab}
              onChange={setSelectedTab}
              items={tabs.map((tab) => ({
                value: tab.value,
                label: tab.label,
              }))}
            />
          )}
          <div className={singleTab ? undefined : "pt-2.5"}>
            <ScrollArea
              style={
                {
                  "--audio-details-max-h": `${detailsMaxHeight}px`,
                } as CSSProperties
              }
              className="[&_[data-scroll-container]]:max-h-[var(--audio-details-max-h)]"
            >
              <div className="break-words pr-1 text-base text-f1-foreground">
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
