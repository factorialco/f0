import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Distance (px) from the top of the scroll viewport that defines the
 * "activation line". A section becomes active once its top edge reaches or
 * passes this line. Matches the `scroll-mt-4` (16px) offset applied to each
 * section anchor, so the click-to-scroll target and the scroll-spy activation
 * point line up exactly.
 */
export const SCROLL_SPY_TOP_OFFSET = 16

/**
 * Fallback delay (ms) after a click-initiated smooth scroll before scroll-spy
 * is re-enabled, for browsers without the `scrollend` event (e.g. Safari).
 * Long enough to outlast a typical smooth-scroll animation.
 */
const PROGRAMMATIC_SCROLL_FALLBACK_MS = 700

/** Tolerance (px) for detecting the bottom of the scroll container. */
const BOTTOM_EPSILON = 2

/** Sub-pixel tolerance when comparing a section top against the activation line. */
const ACTIVATION_EPSILON = 1

/** A section's top edge measured relative to the scroll viewport's top edge. */
export interface SectionTop {
  id: string
  /** Viewport-relative top of the section (px). Negative once scrolled past. */
  top: number
}

/**
 * Pure selection logic for scroll-spy: given the current viewport-relative top
 * of each section (in DOM order), returns the id of the section that should be
 * highlighted.
 *
 * Rule: the active section is the **last** one whose top edge is at or above
 * the activation line (`topOffset` px below the viewport top). When the
 * container is scrolled to the bottom, the last section wins unconditionally so
 * a short final section that never reaches the line is still reachable.
 *
 * Kept pure (no DOM) so the core behavior is deterministic and unit-testable.
 */
export function getActiveSectionId(
  sections: SectionTop[],
  topOffset: number,
  atBottom: boolean
): string | undefined {
  if (sections.length === 0) return undefined
  if (atBottom) return sections[sections.length - 1]!.id

  let active = sections[0]!.id
  for (const section of sections) {
    if (section.top - topOffset <= ACTIVATION_EPSILON) {
      active = section.id
    } else {
      break
    }
  }
  return active
}

interface UseSectionScrollSpyOptions {
  /** Ordered section ids to track (DOM order, top to bottom). */
  sectionIds: string[]
  /** Resolve the DOM element id (anchor) for a given section id. */
  getElementId: (sectionId: string) => string
  /**
   * Ref to the scroll container that holds the stacked sections. This is the
   * same element the click-to-scroll handler scrolls, so spy and click stay in
   * sync.
   */
  containerRef: React.RefObject<HTMLElement | null>
  /** Whether scroll-spy is active (sidepanel shown with stacked sections). */
  enabled: boolean
  /** Activation-line offset from the viewport top (px). */
  topOffset?: number
}

/**
 * Tracks which form section is currently in view and keeps it in sync with the
 * sidebar highlight as the user scrolls.
 *
 * Owns the `activeSection` state. On a sidebar click, the caller should set the
 * active section directly (for an instant highlight) and call
 * `beginProgrammaticScroll` so the smooth scroll doesn't make the highlight
 * flicker through every intermediate section; spy resumes once the scroll
 * settles.
 */
export function useSectionScrollSpy({
  sectionIds,
  getElementId,
  containerRef,
  enabled,
  topOffset = SCROLL_SPY_TOP_OFFSET,
}: UseSectionScrollSpyOptions) {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    sectionIds[0]
  )

  // Muted while a click-initiated smooth scroll is animating.
  const isProgrammaticRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Latest values in refs so the scroll handler identity stays stable.
  const sectionIdsRef = useRef(sectionIds)
  sectionIdsRef.current = sectionIds
  const getElementIdRef = useRef(getElementId)
  getElementIdRef.current = getElementId

  const recompute = useCallback(() => {
    const container = containerRef.current
    const rootTop = container ? container.getBoundingClientRect().top : 0

    const sections: SectionTop[] = []
    for (const id of sectionIdsRef.current) {
      const el = document.getElementById(getElementIdRef.current(id))
      if (!el) continue
      sections.push({ id, top: el.getBoundingClientRect().top - rootTop })
    }

    const scrollTop = container ? container.scrollTop : window.scrollY
    const clientHeight = container ? container.clientHeight : window.innerHeight
    const scrollHeight = container
      ? container.scrollHeight
      : document.documentElement.scrollHeight

    // Only clamp to the last section when there is real vertical overflow to
    // scroll through. An unbounded container has clientHeight === scrollHeight,
    // which would otherwise read as "at the bottom" on the very first recompute
    // and wrongly activate the last section before the user has scrolled.
    const canScroll = scrollHeight > clientHeight + BOTTOM_EPSILON
    const atBottom =
      canScroll && scrollTop + clientHeight >= scrollHeight - BOTTOM_EPSILON

    const next = getActiveSectionId(sections, topOffset, atBottom)
    if (next !== undefined) setActiveSection(next)
  }, [containerRef, topOffset])

  const scheduleRecompute = useCallback(() => {
    if (isProgrammaticRef.current) return
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      recompute()
    })
  }, [recompute])

  const beginProgrammaticScroll = useCallback(() => {
    isProgrammaticRef.current = true
    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current)
    fallbackTimerRef.current = setTimeout(() => {
      isProgrammaticRef.current = false
      recompute()
    }, PROGRAMMATIC_SCROLL_FALLBACK_MS)
  }, [recompute])

  useEffect(() => {
    if (!enabled) return

    const container = containerRef.current
    const scrollTarget: HTMLElement | Window = container ?? window

    const handleScroll = () => scheduleRecompute()
    const handleScrollEnd = () => {
      if (!isProgrammaticRef.current) return
      isProgrammaticRef.current = false
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current)
      recompute()
    }

    scrollTarget.addEventListener("scroll", handleScroll, { passive: true })
    scrollTarget.addEventListener("scrollend", handleScrollEnd)
    window.addEventListener("resize", scheduleRecompute)

    // Recompute on layout changes (e.g. a conditional section appears).
    const resizeObserver =
      container && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => scheduleRecompute())
        : null
    if (resizeObserver && container) resizeObserver.observe(container)

    // Initial sync so the highlight matches the starting scroll position.
    recompute()

    return () => {
      scrollTarget.removeEventListener("scroll", handleScroll)
      scrollTarget.removeEventListener("scrollend", handleScrollEnd)
      window.removeEventListener("resize", scheduleRecompute)
      resizeObserver?.disconnect()
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current)
    }
  }, [enabled, containerRef, scheduleRecompute, recompute, sectionIds])

  return { activeSection, setActiveSection, beginProgrammaticScroll }
}
