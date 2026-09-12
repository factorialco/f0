import { useEffect, useState } from "react"
import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { F0OneIcon } from "@factorialco/f0-react/dist/ai"
import type { ProfileId } from "../profileStore"
import { getOnboarding, updateOnboarding, useOnboarding } from "./state"
import { driver, type Driver } from "./driver/driver.mjs"
import "./driver/driver.css"
import "./driver/tourStyles.css"
import "./navigation-tour.css"
import { animateCursorMove, pinCursorToElement, removeCursor, showCursor, showTooltipOnCursor } from "./cursor/cursor"

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
  const [missing, setMissing] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const finish = () => updateOnboarding(profile, { screen: "preferences", tourStep: 0, tourPaused: false, hidden: false })
  useEffect(() => {
    if (state.tourPaused) return
    const abort = new AbortController()
    let current = Math.min(getOnboarding(profile).tourStep, steps.length - 1)
    let target: HTMLElement | null = null
    let stopPin: (() => void) | undefined
    let spotlight: Driver | undefined
    let timer = 0
    let frame = 0
    let waiting = false
    setMissing(false)
    document.body.setAttribute("data-home-navigation-tour", "")
    const point = async (tries = 0) => {
      if (abort.signal.aborted || current >= steps.length) return
      target = document.querySelector<HTMLElement>(`[data-home-rail] button[aria-label="${steps[current].target}"]`)
      if (!target || !target.getClientRects().length) {
        if (tries < 20) timer = window.setTimeout(() => void point(tries + 1), 150)
        else setMissing(true)
        return
      }
      // Orient the user before the first click; later steps retain the open
      // menu spotlight while the cursor points to the next destination.
      if (!spotlight) {
        spotlight = driver({
          animate: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          allowClose: false, allowKeyboardControl: false,
          disableActiveInteraction: false,
          overlayColor: "rgba(0, 0, 0, 0.5)", stagePadding: 4, stageRadius: 8,
        })
        spotlight.highlight({ element: document.querySelector<HTMLElement>("[data-home-rail]") ?? target })
      }
      showCursor()
      await animateCursorMove(target, "right-outside", window.matchMedia("(prefers-reduced-motion: reduce)").matches ? Infinity : 10)
      if (abort.signal.aborted || waiting) return
      showTooltipOnCursor(`Click ${steps[current].target}`, "right")
      stopPin = pinCursorToElement(target, "right-outside", abort.signal)
    }
    const explain = (clicked: number, tries = 0) => {
      if (abort.signal.aborted) return
      const panel = document.querySelector<HTMLElement>("[data-home-panel]")
      if (!panel || panel.getBoundingClientRect().width < 20 || panel.hasAttribute("inert")) {
        if (tries < 20) timer = window.setTimeout(() => explain(clicked, tries + 1), 150)
        else { waiting = false; setMissing(true) }
        return
      }
      spotlight?.destroy()
      const last = clicked === steps.length - 1
      spotlight = driver({
        animate: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        allowClose: false, allowKeyboardControl: false, disableActiveInteraction: false,
        overlayColor: "rgba(0, 0, 0, 0.5)", stagePadding: 4, stageRadius: 8,
        popoverClass: "demo-tour-popover home-menu-tour-popover",
        onPopoverRender: (popover) => {
          const skip = document.createElement("button")
          skip.className = "demo-tour-quit-btn"
          skip.textContent = "Skip tour and set up Home"
          skip.onclick = finish
          popover.footer.prepend(skip)
          popover.footer.style.display = "flex"
          popover.previousButton.style.display = "none"
          popover.nextButton.style.display = last ? "block" : "none"
          popover.progress.style.display = "none"
        },
      })
      spotlight.highlight({ element: panel, popover: {
        title: steps[clicked].title,
        description: steps[clicked].description.replace(/^Open (Tools|Inbox|Comms) to /, "Here you can "),
        side: "right", align: "center", showButtons: last ? ["next"] : [],
        nextBtnText: "Set up Home", onNextClick: finish,
      } })
      current = clicked + 1
      waiting = false
      if (!last) {
        updateOnboarding(profile, { tourStep: current })
        void point()
      }
    }
    const waitForMenu = (clicked: number) => {
      let stableFrames = 0
      let previous = ""
      const started = performance.now()
      const inspect = () => {
        if (abort.signal.aborted) return
        const panel = document.querySelector<HTMLElement>("[data-home-panel]")
        const rect = panel?.getBoundingClientRect()
        const expected = ["hub", "inbox", "comms", "home"][clicked]
        const ready = panel && rect && rect.width > 20 && !panel.hasAttribute("inert") && panel.dataset.navSection === expected
        const geometry = rect ? [rect.x, rect.y, rect.width, rect.height].map(n => n.toFixed(2)).join(":") : ""
        const moving = panel?.getAnimations().some(animation => animation.playState === "running")
        stableFrames = ready && !moving && geometry === previous ? stableFrames + 1 : 0
        previous = geometry
        if (stableFrames >= 4) { explain(clicked); return }
        if (performance.now() - started > 5000) { waiting = false; setMissing(true); return }
        frame = requestAnimationFrame(inspect)
      }
      frame = requestAnimationFrame(inspect)
    }
    const click = (event: MouseEvent) => {
      if (waiting || current >= steps.length || !(event.target instanceof Node) || !target?.contains(event.target)) return
      waiting = true
      stopPin?.(); removeCursor(); target = null
      const clicked = current
      // Remove the previous spotlight BEFORE React changes the menu geometry.
      spotlight?.destroy()
      spotlight = undefined
      waitForMenu(clicked)
    }
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") updateOnboarding(profile, { tourPaused: true })
    }
    document.addEventListener("click", click, true)
    document.addEventListener("keydown", key)
    void point()
    return () => {
      abort.abort(); clearTimeout(timer); cancelAnimationFrame(frame); stopPin?.(); removeCursor(); spotlight?.destroy()
      document.body.removeAttribute("data-home-navigation-tour")
      document.removeEventListener("click", click, true)
      document.removeEventListener("keydown", key)
    }
  }, [profile, state.tourPaused, attempt])
  return (
    <F0Box width="full" height="full" overflowY="auto" display="flex" flexDirection="column" alignItems="center" padding="3xl">
      <F0Box data-home-onboarding maxWidth="full" marginTop="5xl" display="flex" flexDirection="column" gap="2xl" paddingBottom="2xl">
        <F0OneIcon size="lg" className="home-onboarding-logo" />
        <F0Box data-onboarding-headline display="flex" flexDirection="column" gap="none">
          <F0Heading data-onboarding-muted content="Welcome to your new Factorial" variant="heading-large" />
          <F0Heading content="I’m One, your personal assistant" variant="heading-large" />
        </F0Box>
        <F0Text content="Before we start, let me show you what’s new and where to find everything." variant="label" />
        <F0Box data-home-tour-controls display="flex" flexWrap="wrap" gap="md">
          <F0Button label="Skip tour and set up Home" variant="outline" onClick={finish} />
          <F0Button label={state.tourPaused ? "Resume tour" : "Pause tour"} variant="ghost" onClick={() => updateOnboarding(profile, {tourPaused: !state.tourPaused})} />
          {missing && <F0Button label="Retry" onClick={() => setAttempt(value => value + 1)} />}
        </F0Box>
      </F0Box>
    </F0Box>
  )
}
