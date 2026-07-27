import { useCallback, useEffect, useRef, useState } from "react"

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
  content,
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

  // While audio description is on, play the described rendition (if provided).
  const [audioDescriptionOn, setAudioDescriptionOn] = useState(false)
  const describedSrc = content?.describedSrc
  const activeSrc = audioDescriptionOn && describedSrc ? describedSrc : src

  const video = useVideoState(activeSrc)
  const captions = useVideoCaptions(video.videoElement, content?.captions)
  const audioDescription = useAudioDescription(video.videoElement, {
    enabled: audioDescriptionOn,
    describedSrc,
    descriptions: content?.descriptions,
  })

  // Toggling the described source reloads the element, so preserve the position
  // and play state across the swap. (The WebVTT path doesn't change the source.)
  const toggleAudioDescription = useCallback(() => {
    const el = video.videoRef.current
    if (el && describedSrc) {
      const time = el.currentTime
      const wasPlaying = !el.paused
      const restore = () => {
        el.currentTime = time
        if (wasPlaying) void el.play().catch(() => {})
        el.removeEventListener("loadedmetadata", restore)
      }
      el.addEventListener("loadedmetadata", restore)
    }
    setAudioDescriptionOn((on) => !on)
  }, [video.videoRef, describedSrc])

  useVideoTracking({ video: video.videoElement, onTrackAction })
  useVideoMilestones({ video: video.videoElement, onMilestone, resetKey: src })
  useVideoCompletion({ video: video.videoElement, onComplete, resetKey: src })

  const { maxWatchedTime, clampSeek } = useRestrictForwardSeek({
    video: video.videoElement,
    enabled: restrictForwardSeek,
    resetKey: src,
  })

  const seek = useCallback(
    (target: number) => video.seekTo(clampSeek(target)),
    [video, clampSeek]
  )

  const { isFullscreen, toggleFullscreen } = useFullscreen({
    targetRef: wrapperRef,
  })

  const handleKeyDown = useKeyboardShortcuts({
    videoRef: video.videoRef,
    seek,
    togglePlay: video.togglePlay,
    toggleMute: video.toggleMute,
    toggleFullscreen,
    setVolume: video.setVolume,
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
      aria-label={t("videoPlayer.regionLabel")}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      // Accessibility signal for the Storybook a11y check: prerecorded video
      // needs captions (WCAG 2.1 SC 1.2.2). "missing" is flagged when none are
      // passed via `content.captions` and none are embedded in the file.
      data-video-captions={captions.available ? "available" : "missing"}
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
        style={{ opacity: video.videoLoaded ? 1 : 0 }}
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
