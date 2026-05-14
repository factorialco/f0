import { useState } from "react"

import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"
import { F0Button } from "@/components/F0Button"
import { cn } from "@/lib/utils"

import type { F0AiProposalConfirmationCardProps } from "./types"

const DEFAULT_MAX_COLLAPSED_DESCRIPTION_LENGTH = 180

const getCollapsedDescription = (description: string, maxLength: number) => {
  if (description.length <= maxLength) return description

  return `${description.slice(0, maxLength).trimEnd()}...`
}

export function F0AiProposalConfirmationCard({
  module,
  heading,
  title,
  subtitle,
  description,
  seeMoreLabel,
  primaryActionLabel,
  secondaryActionLabel,
  primaryActionIcon,
  showActions = true,
  onPrimaryAction,
  onSecondaryAction,
  maxCollapsedDescriptionLength = DEFAULT_MAX_COLLAPSED_DESCRIPTION_LENGTH,
  ...dataAttributes
}: F0AiProposalConfirmationCardProps) {
  const [expanded, setExpanded] = useState(false)
  const shouldTruncate = description.length > maxCollapsedDescriptionLength
  const visibleDescription = expanded
    ? description
    : getCollapsedDescription(description, maxCollapsedDescriptionLength)

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
                className="inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary"
                onClick={() => setExpanded(true)}
              >
                {seeMoreLabel}
              </button>
            </>
          )}
        </p>
      </div>

      {showActions && (
        <div className="flex items-center justify-between gap-3 border-0 border-t border-solid border-f1-border-secondary px-4 py-3">
          <F0Button
            type="button"
            label={primaryActionLabel}
            icon={primaryActionIcon}
            onClick={onPrimaryAction}
          />
          <F0Button
            type="button"
            variant="ghost"
            label={secondaryActionLabel}
            onClick={onSecondaryAction}
          />
        </div>
      )}
    </section>
  )
}

F0AiProposalConfirmationCard.displayName = "F0AiProposalConfirmationCard"
