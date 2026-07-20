import { LayoutGroup, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { F0Icon, IconType } from "@/components/F0Icon"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"
const UnreadDot = () => {
  return (
    <div className="absolute -right-3.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full">
      <span className="h-2.5 w-2.5 rounded-full bg-f1-special-highlight" />
    </div>
  )
}

export type SidebarTab = {
  id: string
  label: string
  icon: IconType
  /** Unread counter shown next to the tab. */
  badge?: number
  /**
   * Visual variant. "ai" renders the tab as an AI-variant button — the animated
   * gradient shimmer on hover — e.g. the "One" tab. Defaults to the plain ghost
   * tab (transparent background; the icon darkens on hover).
   */
  variant?: "default" | "ai"
}

export type SidebarTabsProps = {
  tabs: SidebarTab[]
  activeTab: string
  onTabChange: (id: string) => void
}

/**
 * A single tab. All tabs are ghost buttons; the active state is a shared-layout
 * "pill" (`layoutId`) that springs between tabs as the selection changes, while
 * each button resizes (`layout`) and the active label animates in/out. A single
 * `LayoutGroup` (in `SidebarTabs`) coordinates the three so the switch reads as
 * one fluid motion.
 */
const TabButton = ({
  tab,
  isActive,
  showLabel,
  grow = true,
  probe = false,
  onClick,
}: {
  tab: SidebarTab
  isActive: boolean
  /** Reveal the label. Always true for the active tab; inactive tabs get it
   * when every label fits in the row (measured by `SidebarTabs`). */
  showLabel: boolean
  /** Share the row's space (`flex-1`) instead of hugging the content. */
  grow?: boolean
  /** Measurement-only twin rendered inside the invisible probe: hugs its
   * natural width and is inert (disabled, unfocusable). */
  probe?: boolean
  onClick?: () => void
}) => {
  const reduceMotion = useReducedMotion()
  // `bounce: 0` → a critically-damped spring that eases to a stop with no
  // overshoot (avoids the little "whip" at the end of the switch).
  const transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, duration: 0.35, bounce: 0 }

  // An "ai" tab (e.g. One) shows the signature gradient aura behind its pill
  // when active — otherwise it behaves like any other ghost tab.
  const isAi = tab.variant === "ai"

  // Show the aura instantly (no fade) once active, but only after the sliding
  // pill has settled, so it never flashes mid-transition. Hidden immediately
  // when the tab deactivates.
  const [showAura, setShowAura] = useState(false)
  useEffect(() => {
    if (!(isAi && isActive)) {
      setShowAura(false)
      return
    }
    const timer = setTimeout(() => setShowAura(true), reduceMotion ? 0 : 350)
    return () => clearTimeout(timer)
  }, [isAi, isActive, reduceMotion])

  return (
    <button
      type="button"
      aria-label={tab.label}
      aria-pressed={isActive}
      onClick={onClick}
      disabled={probe}
      tabIndex={probe ? -1 : undefined}
      className={cn(
        // With every label revealed all tabs share the space, so switching
        // never resizes them — the pill slide is the only motion. When labels
        // are collapsed, the active tab hugs its content (label always
        // visible) and the icon-only tabs share the rest. The probe twin
        // always hugs its natural width.
        grow && !probe ? "flex-1" : "shrink-0",
        actionVariants({ variant: "ghost" }),
        buttonSizeVariants({ size: "md" }),
        focusRing(),
        // The sliding pill is the only selection affordance, so suppress the
        // ghost variant's grey backgrounds entirely — on hover, press, and
        // pressed. Otherwise the just-activated tab flashes its hover grey
        // while the pill is still sliding over to it.
        "hover:bg-transparent hover:shadow-none",
        "active:bg-transparent active:shadow-none",
        "data-[pressed=true]:bg-transparent data-[pressed=true]:shadow-none"
      )}
    >
      {/* AI aura for an "ai" tab (e.g. One): a blurred, slowly-rotating conic
          gradient with an inner background mask so it reads as a glowing ring.
          Toggled (no fade) so it appears/disappears directly — shown only once
          the pill has settled (see `showAura`) so it never flashes mid-transition.
          The slower spin comes from the inline animation-duration (keyframe is 2s). */}
      {showAura && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded"
        >
          <span
            style={{ animationDuration: "8s" }}
            className="absolute inset-0 animate-rotate-gradient rounded bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] opacity-80 blur-sm [--gradient-angle:0deg]"
          />
          <span className="absolute inset-0 rounded bg-f1-background" />
        </span>
      )}
      {/* The sliding active background — one element shared across tabs. */}
      {isActive && (
        <motion.span
          layoutId="sidebar-tab-active-pill"
          transition={transition}
          aria-hidden="true"
          className="absolute inset-0 rounded bg-f1-background-inverse-secondary ring-1 ring-inset ring-f1-border dark:bg-f1-background"
        />
      )}
      <div className="main flex h-8 min-w-0 items-center justify-center">
        {/* Icon inherits the span's colour (F0Icon ignores a passed className),
            so an inactive tab only darkens its icon on hover — no background. */}
        <span
          className={cn(
            "relative flex items-center text-f1-icon transition-colors",
            !isActive && "group-hover:text-f1-icon-bold"
          )}
        >
          <F0Icon icon={tab.icon} size="md" color="currentColor" />
          {/* The unread dot shows on an inactive tab (hover only darkens the
              icon now, so the dot no longer needs to hide). */}
        </span>
        {/* The label reveals via an animated grid column (0fr → 1fr). Unlike a
            width:auto tween it interpolates cleanly and never resets at the
            end, so there's no snap when it finishes expanding. */}
        <span
          className={cn(
            "grid transition-[grid-template-columns] duration-300 ease-out motion-reduce:transition-none",
            showLabel ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
          )}
        >
          <span className="min-w-0 overflow-hidden">
            <span className="block whitespace-nowrap pl-1 pr-0.5 font-semibold">
              {tab.label}
            </span>
          </span>
        </span>
        {tab.badge && <UnreadDot />}
      </div>
    </button>
  )
}

/**
 * Tab switcher that replaces the `SearchBar` row when the Sidebar gains tabs.
 * The active tab always shows icon + label (animated in); inactive tabs show
 * theirs too when every label fits in the row, and fall back to icon-only
 * when space is tight. Search becomes an icon button on the right.
 *
 * When no tabs are needed, keep composing the Sidebar header with `SearchBar`
 * instead — that path is unchanged.
 */
export const SidebarTabs = ({
  tabs,
  activeTab,
  onTabChange,
}: SidebarTabsProps) => {
  const i18n = useI18n()
  const groupRef = useRef<HTMLDivElement>(null)
  const probeRef = useRef<HTMLDivElement>(null)
  const [labelsFit, setLabelsFit] = useState(false)

  // The tabs array is usually rebuilt inline each render — key the measure
  // effect on what actually affects widths (count + labels).
  const tabsKey = tabs.map((tab) => `${tab.id}:${tab.label}`).join("|")

  // All-or-nothing: inactive labels show only when EVERY tab fits with its
  // label revealed. Measured against an invisible probe row (all tabs at full
  // width) so toggling the real labels can't feed back into the measurement.
  useEffect(() => {
    const group = groupRef.current
    const probe = probeRef.current
    if (!group || !probe) return
    const measure = () => {
      setLabelsFit(probe.scrollWidth <= group.clientWidth)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(group)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabsKey])

  return (
    <div className="mb-4 flex items-stretch justify-between px-3">
      <div
        role="group"
        ref={groupRef}
        aria-label={i18n.navigation.sidebar.tabs.label}
        className="relative flex w-full flex-row justify-between gap-0 rounded bg-f1-background-secondary p-0"
      >
        {/* Measurement probe: the real TabButton rendered inert at its
            expanded (icon + label) width, so the measure always matches the
            actual paddings/typography. Invisible and absolute, it never
            affects layout. */}
        <div
          ref={probeRef}
          aria-hidden="true"
          className="pointer-events-none invisible absolute left-0 top-0 flex flex-row"
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={false}
              showLabel
              probe
            />
          ))}
        </div>
        <LayoutGroup>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={tab.id === activeTab}
              showLabel={tab.id === activeTab || labelsFit}
              // With labels revealed everywhere, keep the active tab fluid
              // too — constant widths make the pill slide the whole motion.
              grow={labelsFit || tab.id !== activeTab}
              onClick={() => onTabChange(tab.id)}
            />
          ))}
        </LayoutGroup>
      </div>
    </div>
  )
}
