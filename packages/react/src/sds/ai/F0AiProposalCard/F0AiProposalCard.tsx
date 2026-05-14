import { useEffect, useId, useRef, useState } from "react"

import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"
import { F0Button } from "@/components/F0Button"
import type { DataAttributes } from "@/global.types"
import { cn, focusRing } from "@/lib/utils"

import type { F0AiProposalCardActions, F0AiProposalCardProps } from "./types"

const DEFAULT_MAX_COLLAPSED_DESCRIPTION_LENGTH = 180

const getSafeCollapsedDescriptionLength = (maxLength: number) => {
  if (!Number.isFinite(maxLength))
    return DEFAULT_MAX_COLLAPSED_DESCRIPTION_LENGTH

  return Math.max(0, Math.floor(maxLength))
}

const getCollapsedDescription = (description: string, maxLength: number) => {
  if (description.length <= maxLength) return description

  return `${description.slice(0, maxLength).trimEnd()}...`
}

const hasActions = (
  props: F0AiProposalCardProps
): props is F0AiProposalCardProps & F0AiProposalCardActions => {
  return props.showActions !== false
}

const getDataAttributes = (props: F0AiProposalCardProps): DataAttributes => {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) => key.startsWith("data-"))
  ) as DataAttributes
}

export function F0AiProposalCard(props: F0AiProposalCardProps) {
  const {
    module,
    heading,
    title,
    subtitle,
    description,
    seeMoreLabel,
    maxCollapsedDescriptionLength = DEFAULT_MAX_COLLAPSED_DESCRIPTION_LENGTH,
  } = props
  const [expanded, setExpanded] = useState(false)
  const descriptionId = useId()
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const safeMaxCollapsedDescriptionLength = getSafeCollapsedDescriptionLength(
    maxCollapsedDescriptionLength
  )
  const shouldTruncate = description.length > safeMaxCollapsedDescriptionLength
  const visibleDescription = expanded
    ? description
    : getCollapsedDescription(description, safeMaxCollapsedDescriptionLength)
  const actions = hasActions(props) ? props : null
  const dataAttributes = getDataAttributes(props)

  useEffect(() => {
    if (expanded) {
      descriptionRef.current?.focus()
    }
  }, [expanded])

  return (
    <section
      className="overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background"
      {...dataAttributes}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        {module && <F0AvatarModule module={module} size="lg" />}
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-semibold text-f1-foreground">
            {heading}
          </h2>
          {subtitle && (
            <p className="truncate text-base text-f1-foreground-secondary">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4 py-3">
        <h3 className="text-lg font-semibold text-f1-foreground">{title}</h3>
        <p
          id={descriptionId}
          ref={descriptionRef}
          tabIndex={expanded ? -1 : undefined}
          className={cn(
            "text-base text-f1-foreground whitespace-pre-wrap break-words",
            !expanded && "inline"
          )}
        >
          {visibleDescription}
          {shouldTruncate && !expanded && (
            <>
              {" "}
              <button
                type="button"
                className={cn(
                  "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
                  focusRing()
                )}
                aria-controls={descriptionId}
                aria-expanded={expanded}
                onClick={() => setExpanded(true)}
              >
                {seeMoreLabel}
              </button>
            </>
          )}
        </p>
      </div>

      {actions && (
        <div className="flex items-center justify-between gap-3 border-0 border-t border-solid border-f1-border-secondary px-4 py-3">
          <F0Button
            type="button"
            label={actions.primaryActionLabel}
            icon={actions.primaryActionIcon}
            onClick={actions.onPrimaryAction}
          />
          <F0Button
            type="button"
            variant="ghost"
            label={actions.secondaryActionLabel}
            onClick={actions.onSecondaryAction}
          />
        </div>
      )}
    </section>
  )
}

F0AiProposalCard.displayName = "F0AiProposalCard"
