import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { SolidPlay } from "@/icons/app"
import {
  collectLanguages,
  defaultLocale,
  resolveLocalized,
} from "@/lib/localized"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { Controls } from "./components/Controls"
import { useAudioDescription } from "./hooks/useAudioDescription"
import { useFullscreen } from "./hooks/useFullscreen"
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts"
import { useRestrictForwardSeek } from "./hooks/useRestrictForwardSeek"
import { useVideoCaptions } from "./hooks/useVideoCaptions"
import { useVideoCompletion } from "./hooks/useVideoCompletion"
import { useVideoMilestones } from "./hooks/useVideoMilestones"
import { useVideoState } from "./hooks/useVideoState"
import { useVideoTracking } from "./hooks/useVideoTracking"
import { F0VideoPlayerProps } from "./types"

/**
 * Video player built on a native `<video>` element.
 *
 *   useVideoState           → element ref, native listeners, derived state.
 *   useFullscreen           → toggles fullscreen on the wrapper (keeps controls visible).
 *   useKeyboardShortcuts    → Space, ←/→, ↑/↓, M, F.
 *   useVideoTracking        → analytics callback on play/pause + interval.
 *   useVideoMilestones      → watched-% milestone callbacks (25/50/75).
 *   useVideoCompletion      → "watched enough" callback (min(10s, 3%)).
 *   useRestrictForwardSeek  → blocks seeking past the furthest-watched point.
 *   <Controls>              → presentation only; interactions delegated back here.
 */
export function F0VideoPlayerInternal({
  src,
  poster,
  ariaLabel,
  silent = false,
  persistControls = false,
  content,
  defaultLanguage,
  autoPlay = false,
  autoFocus = false,
  restrictForwardSeek = false,
  onTrackAction,
  onMilestone,
  onComplete,
  ...dataAttributes
}: F0VideoPlayerProps) {
  const { t } = useI18n()
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Three independent language selections, each driven by its own control: the
  // audio (dubbed `src`) track, the captions, and the audio description
  // (descriptions text + described source). A viewer can, say, watch English
  // audio with Spanish captions. A dimension offered in one language is a plain
  // on/off toggle in the bar; offered in several, its selection moves into the
  // settings gear (see Controls).
  const audioLanguages = useMemo(() => collectLanguages(src), [src])
  const [audioLocale, setAudioLocale] = useState(() =>
    defaultLocale(audioLanguages, defaultLanguage)
  )
  const activeAudioLocale = audioLanguages.some((l) => l.locale === audioLocale)
    ? audioLocale
    : defaultLocale(audioLanguages, defaultLanguage)
  const resolvedSrc = resolveLocalized(src, activeAudioLocale) ?? ""

  const captionLanguages = useMemo(
    () => collectLanguages(content?.captions),
    [content?.captions]
  )
  const [captionLocale, setCaptionLocale] = useState(() =>
    defaultLocale(captionLanguages, defaultLanguage)
  )
  const activeCaptionLocale = captionLanguages.some(
    (l) => l.locale === captionLocale
  )
    ? captionLocale
    : defaultLocale(captionLanguages, defaultLanguage)
  const captionsSrc = resolveLocalized(content?.captions, activeCaptionLocale)

  const audioDescriptionLanguages = useMemo(
    () => collectLanguages(content?.descriptions, content?.describedSrc),
    [content?.descriptions, content?.describedSrc]
  )
  const [audioDescriptionLocale, setAudioDescriptionLocale] = useState(() =>
    defaultLocale(audioDescriptionLanguages, defaultLanguage)
  )
  const activeAudioDescriptionLocale = audioDescriptionLanguages.some(
    (l) => l.locale === audioDescriptionLocale
  )
    ? audioDescriptionLocale
    : defaultLocale(audioDescriptionLanguages, defaultLanguage)
  const descriptionsSrc = resolveLocalized(
    content?.descriptions,
    activeAudioDescriptionLocale
  )
  const describedSrc = resolveLocalized(
    content?.describedSrc,
    activeAudioDescriptionLocale
  )

  // While audio description is on, play the described rendition (if provided).
  const [audioDescriptionOn, setAudioDescriptionOn] = useState(false)
  const activeSrc =
    audioDescriptionOn && describedSrc ? describedSrc : resolvedSrc

  const video = useVideoState(activeSrc)
  const captions = useVideoCaptions(video.videoElement, captionsSrc)
  const audioDescription = useAudioDescription(video.videoElement, {
    enabled: audioDescriptionOn,
    describedSrc,
    descriptions: descriptionsSrc,
  })

  // Swapping the media source (audio-language change or described-source
  // toggle) reloads the element; carry the position and play state across it.
  const preservePositionAcrossSwap = useCallback(() => {
    const el = video.videoRef.current
    if (!el) return
    const time = el.currentTime
    const wasPlaying = !el.paused
    const restore = () => {
      el.currentTime = time
      if (wasPlaying) void el.play().catch(() => {})
      el.removeEventListener("loadedmetadata", restore)
    }
    el.addEventListener("loadedmetadata", restore)
  }, [video.videoRef])

  const changeAudioLanguage = useCallback(
    (locale: string) => {
      preservePositionAcrossSwap()
      setAudioLocale(locale)
    },
    [preservePositionAcrossSwap]
  )

  const toggleAudioDescription = useCallback(() => {
    // Only the described-source path swaps the source; the WebVTT path doesn't.
    if (describedSrc) preservePositionAcrossSwap()
    setAudioDescriptionOn((on) => !on)
  }, [describedSrc, preservePositionAcrossSwap])

  // Settings-gear handlers: picking a language turns the feature on and selects
  // it; the "Off" row turns it off. Explicit set-on / set-off (not a toggle) so
  // re-picking the current row is idempotent.
  const selectCaptionLanguage = useCallback(
    (locale: string) => {
      setCaptionLocale(locale)
      if (!captions.showing) captions.toggle()
    },
    [captions]
  )
  const disableCaptions = useCallback(() => {
    if (captions.showing) captions.toggle()
  }, [captions])

  const selectAudioDescriptionLanguage = useCallback(
    (locale: string) => {
      if (describedSrc) preservePositionAcrossSwap()
      setAudioDescriptionLocale(locale)
      setAudioDescriptionOn(true)
    },
    [describedSrc, preservePositionAcrossSwap]
  )
  const disableAudioDescription = useCallback(() => {
    if (describedSrc) preservePositionAcrossSwap()
    setAudioDescriptionOn(false)
  }, [describedSrc, preservePositionAcrossSwap])

  useVideoTracking({ video: video.videoElement, onTrackAction })
  useVideoMilestones({
    video: video.videoElement,
    onMilestone,
    resetKey: resolvedSrc,
  })
  useVideoCompletion({
    video: video.videoElement,
    onComplete,
    resetKey: resolvedSrc,
  })

  const { maxWatchedTime, clampSeek } = useRestrictForwardSeek({
    video: video.videoElement,
    enabled: restrictForwardSeek,
    resetKey: resolvedSrc,
  })

  const seek = useCallback(
    (target: number) => video.seekTo(clampSeek(target)),
    [video, clampSeek]
  )

  const { isFullscreen, toggleFullscreen } = useFullscreen({
    targetRef: wrapperRef,
  })

  // A silent (video-only) clip has no audio to play: force-mute it — even if the
  // file carries a track — and disable the mute/volume affordances, so the muted
  // control reads as a cue rather than a broken toggle. Exception: a silent video
  // can still carry audio description; when it's delivered by a *described
  // source* (audio in the media), that source must not be muted. (The WebVTT
  // description path speaks through the browser, independent of the video's
  // audio, so it plays regardless.)
  const noop = useCallback(() => {}, [])
  const describedSourceAudioActive = Boolean(audioDescriptionOn && describedSrc)
  useEffect(() => {
    const el = video.videoRef.current
    if (silent && el) el.muted = !describedSourceAudioActive
  }, [silent, describedSourceAudioActive, video.videoElement, video.videoRef])

  const handleKeyDown = useKeyboardShortcuts({
    videoRef: video.videoRef,
    seek,
    togglePlay: video.togglePlay,
    toggleMute: silent ? noop : video.toggleMute,
    toggleFullscreen,
    setVolume: silent ? noop : video.setVolume,
  })

  useEffect(() => {
    if (autoFocus) wrapperRef.current?.focus({ preventScroll: true })
  }, [autoFocus])

  // Advanced controls (native context menu / download, PiP, remote playback,
  // drag) are always disabled — undesirable for embedded product video.
  const handleContextMenu = (event: React.MouseEvent) => event.preventDefault()

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-[inherit]",
        "[&:fullscreen]:h-screen [&:fullscreen]:w-screen [&:fullscreen]:rounded-none [&:fullscreen]:bg-[#000]",
        focusRing()
      )}
      role="region"
      aria-label={ariaLabel ?? t("videoPlayer.regionLabel")}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      // Accessibility signal for the Storybook a11y check: prerecorded video
      // needs captions (WCAG 2.1 SC 1.2.2). "missing" is flagged when none are
      // available; "no-audio" exempts a silent (video-only) clip, for which
      // captions don't apply.
      data-video-captions={
        silent ? "no-audio" : captions.available ? "available" : "missing"
      }
      {...dataAttributes}
    >
      <video
        ref={video.setVideoNode}
        autoPlay={autoPlay}
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        draggable={false}
        onContextMenu={handleContextMenu}
        onClick={video.togglePlay}
        src={activeSrc}
        poster={poster}
        // Only for a remote caption/description URL — a same-origin blob (raw
        // VTT) needs none, and setting it unconditionally would force the video
        // itself through CORS.
        crossOrigin={
          captions.needsCrossOrigin || audioDescription.needsCrossOrigin
            ? "anonymous"
            : undefined
        }
        onLoadedData={() => video.setVideoLoaded(true)}
        className={cn(
          "block h-full w-full cursor-pointer rounded-[inherit] object-contain transition-opacity duration-300",
          // Lift native captions clear of the bottom controls bar (~3.5rem
          // tall) so they never sit behind it. WebKit/Blink honour this
          // pseudo-element; other engines keep the default bottom placement.
          "[&::-webkit-media-text-track-container]:![transform:translateY(-3.5rem)]"
        )}
        // Fade the video in once it loads — but if a poster is set, show it
        // immediately (otherwise the opacity gate would hide the poster too).
        style={{ opacity: video.videoLoaded || poster ? 1 : 0 }}
      >
        {captions.trackSrc && (
          <track
            kind="captions"
            src={captions.trackSrc}
            label={t("videoPlayer.captions")}
            default={false}
          />
        )}
        {audioDescription.trackSrc && (
          <track
            kind="descriptions"
            src={audioDescription.trackSrc}
            label={t("videoPlayer.audioDescription")}
            default={false}
          />
        )}
      </video>

      {/* Center play affordance while paused, so a still frame / poster reads
          as a video without hovering to reveal the controls. Visual only
          (`aria-hidden`, not focusable): the labelled play control lives in the
          controls bar and Space toggles playback on the focused region. */}
      {!video.isPlaying && (
        <div
          aria-hidden
          data-video-play-overlay
          className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center"
        >
          <button
            type="button"
            tabIndex={-1}
            onClick={video.togglePlay}
            className="dark pointer-events-auto flex size-14 items-center justify-center rounded-full bg-[#000000b3] pl-0.5 text-f1-foreground shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform duration-150 hover:scale-105 motion-reduce:transition-none [&_svg]:size-7"
          >
            <F0Icon icon={SolidPlay} size="lg" />
          </button>
        </div>
      )}

      {/* Description text shown as a caption for deaf/HoH viewers when captions
          are on — the visual counterpart of the spoken audio description. Drawn
          here (top, distinct italic style) since browsers don't render
          `kind="descriptions"` tracks; `aria-hidden` because screen-reader users
          get the spoken description instead. */}
      {captions.showing && audioDescription.activeCue && (
        <div
          aria-hidden
          className="dark pointer-events-none absolute inset-x-0 top-0 z-[2] flex justify-center p-3"
        >
          <p className="max-w-[90%] rounded-md bg-[#000000b3] px-2 py-1 text-center text-base italic text-f1-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.55)]">
            <span className="pr-1 font-medium not-italic opacity-70">
              [{t("videoPlayer.audioDescription")}]
            </span>
            {audioDescription.activeCue}
          </p>
        </div>
      )}

      {/* Polite live region so play/pause via keyboard shortcuts is announced. */}
      <span className="sr-only" aria-live="polite">
        {video.isPlaying ? t("videoPlayer.playing") : t("videoPlayer.paused")}
      </span>

      {/* Render the controls only once the video is ready — avoids focusable
          controls living inside an `aria-hidden` subtree before load. */}
      {video.videoLoaded && (
        <Controls
          isPlaying={video.isPlaying}
          currentTime={video.currentTime}
          duration={video.duration}
          volume={video.volume}
          isMuted={video.isMuted}
          playbackRate={video.playbackRate}
          isFullscreen={isFullscreen}
          markerTime={restrictForwardSeek ? maxWatchedTime : undefined}
          blockSeekPastMarker={restrictForwardSeek}
          containerRef={wrapperRef}
          captionsAvailable={captions.available}
          captionsOn={captions.showing}
          audioDescriptionAvailable={audioDescription.available}
          audioDescriptionOn={audioDescriptionOn}
          silent={silent}
          persist={persistControls}
          audioLanguages={audioLanguages}
          audioLanguage={activeAudioLocale}
          onAudioLanguageChange={changeAudioLanguage}
          captionLanguages={captionLanguages}
          captionLanguage={activeCaptionLocale}
          onCaptionLanguageChange={selectCaptionLanguage}
          onCaptionsOff={disableCaptions}
          audioDescriptionLanguages={audioDescriptionLanguages}
          audioDescriptionLanguage={activeAudioDescriptionLocale}
          onAudioDescriptionLanguageChange={selectAudioDescriptionLanguage}
          onAudioDescriptionOff={disableAudioDescription}
          onTogglePlay={video.togglePlay}
          onToggleMute={video.toggleMute}
          onVolumeChange={video.setVolume}
          onPlaybackRateChange={video.setPlaybackRate}
          onToggleFullscreen={() => void toggleFullscreen()}
          onToggleCaptions={captions.toggle}
          onToggleAudioDescription={toggleAudioDescription}
          onSeek={seek}
        />
      )}
    </div>
  )
}
