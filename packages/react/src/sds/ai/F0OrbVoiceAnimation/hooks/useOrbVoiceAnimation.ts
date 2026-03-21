import {
  type AgentState,
  type TrackReference,
  type TrackReferenceOrPlaceholder,
  useTrackVolume,
} from "@livekit/components-react"
import { type LocalAudioTrack, type RemoteAudioTrack } from "livekit-client"
import {
  type AnimationPlaybackControlsWithThen,
  type ValueAnimationTransition,
  animate,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"

const DEFAULT_SPEED = 1.8
const DEFAULT_INTENSITY = 0.45
const DEFAULT_COMPLEXITY = 0.62
const DEFAULT_SCALE = 1
const DEFAULT_STATE_PHASE = 0
const DEFAULT_TRANSITION: ValueAnimationTransition = {
  duration: 0.45,
  ease: "easeOut",
}
const DEFAULT_PULSE_TRANSITION: ValueAnimationTransition = {
  duration: 0.5,
  ease: "easeOut",
  repeat: Infinity,
  repeatType: "mirror",
}

function useAnimatedValue<T>(initialValue: T) {
  const [value, setValue] = useState(initialValue)
  const motionValue = useMotionValue(initialValue)
  const controlsRef = useRef<AnimationPlaybackControlsWithThen | null>(null)
  useMotionValueEvent(motionValue, "change", (value) => setValue(value as T))

  const animateFn = useCallback(
    (targetValue: T | T[], transition: ValueAnimationTransition) => {
      controlsRef.current = animate(motionValue, targetValue, transition)
    },
    [motionValue]
  )

  return { value, motionValue, controls: controlsRef, animate: animateFn }
}

export function useOrbVoiceAnimation(
  state: AgentState | undefined,
  audioTrack?: LocalAudioTrack | RemoteAudioTrack | TrackReferenceOrPlaceholder
) {
  const { value: speed, animate: animateSpeed } =
    useAnimatedValue(DEFAULT_SPEED)
  const { value: intensity, animate: animateIntensity } =
    useAnimatedValue(DEFAULT_INTENSITY)
  const { value: complexity, animate: animateComplexity } =
    useAnimatedValue(DEFAULT_COMPLEXITY)
  const { value: scale, animate: animateScale } =
    useAnimatedValue(DEFAULT_SCALE)
  const { value: statePhase, animate: animateStatePhase } =
    useAnimatedValue(DEFAULT_STATE_PHASE)

  const volume = useTrackVolume(audioTrack as TrackReference, {
    fftSize: 512,
    smoothingTimeConstant: 0.55,
  })

  useEffect(() => {
    switch (state) {
      case "idle":
      case "failed":
      case "disconnected":
        animateStatePhase(0, DEFAULT_TRANSITION)
        animateSpeed(1.2, DEFAULT_TRANSITION)
        animateIntensity(0.36, DEFAULT_TRANSITION)
        animateComplexity(0.34, DEFAULT_TRANSITION)
        animateScale(0.96, DEFAULT_TRANSITION)
        return
      case "listening":
      case "pre-connect-buffering":
        animateStatePhase(1, DEFAULT_TRANSITION)
        animateSpeed(1.9, DEFAULT_TRANSITION)
        animateIntensity([0.46, 0.6], {
          ...DEFAULT_PULSE_TRANSITION,
          duration: 0.9,
        })
        animateComplexity(0.56, DEFAULT_TRANSITION)
        animateScale([0.99, 1.025], {
          ...DEFAULT_PULSE_TRANSITION,
          duration: 1.0,
        })
        return
      case "thinking":
      case "connecting":
      case "initializing":
        animateStatePhase(2, DEFAULT_TRANSITION)
        animateSpeed(2.5, DEFAULT_TRANSITION)
        animateIntensity([0.56, 0.82], {
          ...DEFAULT_PULSE_TRANSITION,
          duration: 0.56,
        })
        animateComplexity(0.82, DEFAULT_TRANSITION)
        animateScale([1.02, 1.075], {
          ...DEFAULT_PULSE_TRANSITION,
          duration: 0.58,
        })
        return
      case "speaking":
        animateStatePhase(3, DEFAULT_TRANSITION)
        animateSpeed(2.2, DEFAULT_TRANSITION)
        animateIntensity(0.56, DEFAULT_TRANSITION)
        animateComplexity(0.76, DEFAULT_TRANSITION)
        animateScale(1.02, DEFAULT_TRANSITION)
        return
      default:
        animateStatePhase(DEFAULT_STATE_PHASE, DEFAULT_TRANSITION)
        animateSpeed(DEFAULT_SPEED, DEFAULT_TRANSITION)
        animateComplexity(DEFAULT_COMPLEXITY, DEFAULT_TRANSITION)
        animateIntensity([0.38, DEFAULT_INTENSITY], DEFAULT_PULSE_TRANSITION)
        animateScale([0.99, DEFAULT_SCALE], {
          ...DEFAULT_PULSE_TRANSITION,
          duration: 0.8,
        })
        return
    }
  }, [
    state,
    animateComplexity,
    animateIntensity,
    animateScale,
    animateSpeed,
    animateStatePhase,
  ])

  useEffect(() => {
    if (state !== "speaking") {
      return
    }

    const clampedVolume = Math.min(Math.max(volume, 0), 1)
    animateIntensity(0.44 + clampedVolume * 0.56, { duration: 0 })
    animateSpeed(1.9 + clampedVolume * 2.2, { duration: 0 })
    animateComplexity(0.68 + clampedVolume * 0.18, { duration: 0.12 })
    animateScale(1.0 + clampedVolume * 0.11, { duration: 0 })
  }, [
    state,
    volume,
    animateComplexity,
    animateIntensity,
    animateScale,
    animateSpeed,
  ])

  return {
    speed,
    intensity,
    complexity,
    scale,
    statePhase,
  }
}
