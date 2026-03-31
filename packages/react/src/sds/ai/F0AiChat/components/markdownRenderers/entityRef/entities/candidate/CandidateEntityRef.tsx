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

/**
 * Inline candidate entity reference with a hover card showing profile details.
 *
 * Renders the trigger as a styled link. On hover, lazily fetches
 * the candidate profile via `entityResolvers.candidate` and displays
 * avatar, name, source, and a link to the candidate page.
 */
export function CandidateEntityRef({
  id,
  label,
}: {
  id: string
  label: string
}) {
  const { entityResolvers } = useAiChat()
  const resolver = entityResolvers?.candidate
  const i18n = useI18n()

  const candidateUrl = `/recruitment/candidates/${id}/applications`

  const mapToCard = useMemo(
    () =>
      (profile: CandidateProfile): F0CardProps => ({
        avatar: {
          type: "person",
          firstName: profile.firstName,
          lastName: profile.lastName,
          src: profile.avatarUrl,
        },
        title: `${profile.firstName} ${profile.lastName}`,
        description: profile.source,
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: candidateUrl,
        },
      }),
    [i18n, candidateUrl]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      secondaryActions: {
        label: i18n.t("ai.view"),
        href: candidateUrl,
      },
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
