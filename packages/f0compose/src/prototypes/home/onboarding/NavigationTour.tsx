import { useEffect, useState } from "react"
import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { F0OneIcon } from "@factorialco/f0-react/dist/ai"
import type { ProfileId } from "../profileStore"
import { updateOnboarding, useOnboarding } from "./state"
import {
  animateCursorMove,
  pinCursorToElement,
  removeCursor,
  showCursor,
  showTooltipOnCursor,
} from "./cursor/cursor"

const steps = [
  {
    target: "Tools",
    title: "All your tools, in one place",
    description:
      "Open Tools to find your tools, grouped by category. Your personal sections live inside each category.",
  },
  {
    target: "Inbox",
    title: "Everything that needs your action",
    description:
      "Open Inbox to review requests, approvals and other tasks waiting for you.",
  },
  {
    target: "Comms",
    title: "Stay connected with your team",
    description:
      "Open Comms to find conversations and updates from your communities.",
  },
  {
    target: "Home",
    title: "Your day starts here",
    description:
      "Home brings together what matters to you. Open it, then let’s prepare your personal overview.",
  },
]

export function NavigationTour({ profile }: { profile: ProfileId }) {
  const state = useOnboarding(profile)
  const index = Math.min(state.tourStep, steps.length - 1)
  const step = steps[index]
  const [visited, setVisited] = useState(false)
  const [missing, setMissing] = useState(false)
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    const pause = (event: KeyboardEvent) => {
      if (event.key === "Escape")
        updateOnboarding(profile, { tourPaused: true })
    }
    document.addEventListener("keydown", pause)
    return () => document.removeEventListener("keydown", pause)
  }, [profile])
  useEffect(() => {
    setVisited(false)
    setMissing(false)
    if (state.tourPaused) return
    const abort = new AbortController()
    let target: HTMLElement | null = null
    let stopPin: (() => void) | undefined
    let timer = 0
    let watcher = 0
    let polls = 0
    const click = (event: MouseEvent) => {
      if (event.target instanceof Node && target?.contains(event.target)) {
        abort.abort()
        clearInterval(watcher)
        setVisited(true)
        stopPin?.()
        removeCursor()
      }
    }
    document.addEventListener("click", click)
    const locate = async () => {
      if (abort.signal.aborted) return
      target = document.querySelector<HTMLElement>(
        `[data-home-rail] button[aria-label="${step.target}"]`
      )
      if (!target || !target.getClientRects().length) {
        if (++polls < 20) timer = window.setTimeout(locate, 150)
        else setMissing(true)
        return
      }
      target.scrollIntoView({ block: "nearest" })
      showCursor()
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      await animateCursorMove(target, "right-outside", reduced ? Infinity : 10)
      if (abort.signal.aborted) return
      showTooltipOnCursor(`Click ${step.target}`, "right")
      stopPin = pinCursorToElement(target, "right-outside", abort.signal)
      watcher = window.setInterval(() => {
        if (abort.signal.aborted) return
        if (!target?.isConnected || !target.getClientRects().length) {
          abort.abort()
          removeCursor()
          setMissing(true)
        }
      }, 250)
    }
    void locate()
    return () => {
      abort.abort()
      clearTimeout(timer)
      clearInterval(watcher)
      stopPin?.()
      removeCursor()
      document.removeEventListener("click", click)
    }
  }, [index, state.tourPaused, attempt, step.target])
  const update = (patch: Parameters<typeof updateOnboarding>[1]) =>
    updateOnboarding(profile, patch)
  const finish = () =>
    update({
      screen: "preferences",
      tourStep: 0,
      tourPaused: false,
      hidden: false,
    })
  const next = () => {
    if (!visited) return
    if (index === steps.length - 1) finish()
    else update({ tourStep: index + 1 })
  }
  return (
    <F0Box
      width="full"
      height="full"
      overflowY="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="3xl"
    >
      <F0Box
        data-home-onboarding
        maxWidth="full"
        marginTop="5xl"
        display="flex"
        flexDirection="column"
        gap="2xl"
        paddingBottom="2xl"
      >
        <F0OneIcon size="lg" className="home-onboarding-logo" />
        <F0Text
          content={`Navigation tour · ${index + 1} of ${steps.length}`}
          variant="label"
        />
        <F0Heading content={step.title} variant="heading-large" />
        <F0Text content={step.description} variant="label" />
        <F0Box role="status" aria-live="polite">
          <F0Text
            content={
              state.tourPaused
                ? "Tour paused. You can resume whenever you’re ready."
                : missing
                  ? "This section isn’t available right now. Retry, or continue to your Home setup."
                  : visited
                    ? "Take a look around, then continue when you’re ready."
                    : `Click ${step.target} in the navigation to continue.`
            }
          />
        </F0Box>
        <F0Box display="flex" flexWrap="wrap" gap="md">
          {state.tourPaused ? (
            <F0Button
              label="Resume tour"
              onClick={() => update({ tourPaused: false })}
            />
          ) : missing ? (
            <F0Button
              label="Retry"
              onClick={() => setAttempt((value) => value + 1)}
            />
          ) : (
            <F0Button
              label={
                index === steps.length - 1 ? "Prepare my Home" : "Continue"
              }
              disabled={!visited}
              onClick={next}
            />
          )}
          {!state.tourPaused && (
            <F0Button
              label="Pause tour"
              variant="outline"
              onClick={() => update({ tourPaused: true })}
            />
          )}
          <F0Button
            label="Start again"
            variant="ghost"
            onClick={() => {
              update({ tourStep: 0, tourPaused: false })
              setAttempt((value) => value + 1)
            }}
          />
          <F0Button
            label="Set up my Home"
            variant="ghost"
            onClick={() => update({ screen: "preferences", tourPaused: true })}
          />
        </F0Box>
      </F0Box>
    </F0Box>
  )
}
