import { useState } from "react"

import { F0Icon, type IconType } from "@/components/F0Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { InfoCircleLine } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

/**
 * Structured help copy for a labelled thing — a table column, a dashboard
 * widget. `link` is for what the description implies but cannot do: opening the
 * catalog entry the copy came from.
 */
export type InfoHintContent = {
  title: string
  description: string
  link?: {
    label: string
    onClick: () => void
  }
  /**
   * Accessible name for the icon trigger. Falls back to `label` on the host
   * and then to a generic "More information", so the trigger is never named
   * after the thing it describes alone — a name identical to the heading
   * beside it says nothing about what the control does.
   */
  label?: string
}

/**
 * The body of a structured hint, shared by every surface that reveals one —
 * the ⓘ trigger below, or a host that makes a whole region (a table header
 * cell) the hover target. `onLinkClick` lets the host dismiss its own overlay
 * before the link's action runs.
 */
export function InfoHintBody({
  info,
  onLinkClick,
}: {
  info: InfoHintContent
  onLinkClick?: () => void
}) {
  return (
    <div className="flex flex-col gap-1 whitespace-normal text-left">
      <p>{info.title}</p>
      <p className="text-f1-foreground-inverse-secondary">{info.description}</p>
      {info.link && (
        <button
          type="button"
          onClick={() => {
            onLinkClick?.()
            info.link?.onClick()
          }}
          className={cn(
            "mt-1 w-fit rounded-xs font-medium text-f1-foreground-inverse underline underline-offset-2 transition-colors hover:text-f1-foreground-inverse-secondary",
            focusRing()
          )}
        >
          {info.link.label}
        </button>
      )}
    </div>
  )
}

function StructuredHint({
  info,
  icon,
  label,
}: {
  info: InfoHintContent
  icon: IconType
  label?: string
}) {
  const [open, setOpen] = useState(false)
  const { forms } = useI18n()

  // HoverCard (not Tooltip): the content is hover-revealed but may contain a
  // link action, while the plain string path remains a non-interactive Tooltip.
  return (
    <HoverCard
      open={open}
      onOpenChange={setOpen}
      openDelay={300}
      closeDelay={100}
    >
      <HoverCardTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded-xs text-f1-foreground-secondary",
            focusRing()
          )}
          // A trigger named after the heading it sits beside ("Headcount by
          // team, button") announces a duplicate and never says what it does.
          // Hosts that have a better name pass one; the rest get the generic.
          aria-label={info.label ?? label ?? forms.moreInformation}
        >
          <F0Icon icon={icon} size="sm" />
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto max-w-xs px-3 py-2 shadow-md">
        <InfoHintBody info={info} onLinkClick={() => setOpen(false)} />
      </HoverCardContent>
    </HoverCard>
  )
}

/**
 * The ⓘ affordance that reveals help copy for the thing it sits next to.
 *
 * A string gets a plain, non-interactive tooltip; an {@link InfoHintContent}
 * gets a hoverable card that can carry a link. Both forms are one component so
 * every surface offering column- or widget-level help looks and behaves the
 * same.
 *
 * @internal Shared chrome — not part of the package's public API.
 */
export function InfoHint({
  info,
  icon = InfoCircleLine,
  label,
}: {
  info: string | InfoHintContent
  /** @default InfoCircleLine */
  icon?: IconType
  /** Accessible name for the trigger, when the content declares none. */
  label?: string
}) {
  if (typeof info !== "string") {
    return <StructuredHint info={info} icon={icon} label={label} />
  }

  return (
    <Tooltip label={info}>
      <div
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-xs",
          focusRing()
        )}
        tabIndex={0}
      >
        <F0Icon icon={icon} size="sm" />
      </div>
    </Tooltip>
  )
}
