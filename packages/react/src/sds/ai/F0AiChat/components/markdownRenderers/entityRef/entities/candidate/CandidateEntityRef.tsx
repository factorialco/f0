import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { CandidateProfile } from "./types"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import { EntityRefHoverCard } from "../../components/EntityRefHoverCard"

const CandidateTrigger = forwardRef<HTMLButtonElement, { label: string }>(
  ({ label, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        focusRing()
      )}
      {...props}
    >
      {label}
    </button>
  )
)
CandidateTrigger.displayName = "CandidateTrigger"

type CandidateRow = {
  title: string
  value: React.ReactNode
}

/**
 * Inline candidate entity reference with a hover card showing profile details.
 *
 * Renders the trigger as a styled link. On hover, lazily fetches the candidate
 * profile via `entityRefs.resolvers.candidate` and displays source and applied
 * date rows in addition to the avatar header.
 *
 * Uses a compact custom row layout rather than `DetailsItem` so label/value
 * spacing stays tight and natural on a small hover card.
 */
export function CandidateEntityRef({
  id,
  label,
}: {
  id: string
  label: string
}) {
  const { entityRefs } = useAiChat()
  const resolver = entityRefs?.resolvers?.candidate
  const i18n = useI18n()

  const candidateUrl = entityRefs?.urls?.candidate?.(id)

  const mapToCard = useMemo(
    () =>
      (profile: CandidateProfile): F0CardProps => {
        const rows: CandidateRow[] = []

        if (profile.source) {
          rows.push({
            title: i18n.t("ai.entityRef.candidate.source"),
            value: profile.source,
          })
        }

        if (profile.appliedAt) {
          rows.push({
            title: i18n.t("ai.entityRef.candidate.applied"),
            value: profile.appliedAt,
          })
        }

        return {
          avatar: {
            type: "person",
            firstName: profile.firstName,
            lastName: profile.lastName,
            src: profile.avatarUrl,
          },
          title: `${profile.firstName} ${profile.lastName}`,
          ...(rows.length > 0 && {
            children: (
              <div className="flex flex-col gap-2">
                {rows.map((row) => (
                  <div key={row.title} className="flex flex-col">
                    <p className="text-f1-foreground-secondary">{row.title}</p>
                    <div className="flex items-center gap-1.5 font-medium text-f1-foreground">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            ),
          }),
          ...(candidateUrl && {
            secondaryActions: {
              label: i18n.t("ai.view"),
              href: candidateUrl,
            },
          }),
        }
      },
    [i18n, candidateUrl]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      ...(candidateUrl && {
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: candidateUrl,
        },
      }),
    }),
    [label, i18n, candidateUrl]
  )

  if (!resolver) {
    return <span>{label}</span>
  }

  return (
    <EntityRefHoverCard
      id={id}
      trigger={<CandidateTrigger label={label} />}
      resolver={resolver}
      mapToCard={mapToCard}
      fallbackCard={fallbackCard}
    />
  )
}
