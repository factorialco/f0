import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { PersonProfile } from "./types"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import { EntityRefHoverCard } from "../../components/EntityRefHoverCard"

const PersonTrigger = forwardRef<HTMLButtonElement, { label: string }>(
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
      @{label}
    </button>
  )
)
PersonTrigger.displayName = "PersonTrigger"

/**
 * Inline person entity reference with a hover card showing profile details.
 *
 * Renders the trigger as a styled @mention. On hover, lazily fetches
 * the employee profile via `entityRefs.resolvers.person` and displays
 * avatar, name, and job title. Optionally links via `entityRefs.urls.person`.
 */
export function PersonEntityRef({ id, label }: { id: string; label: string }) {
  const { entityRefs } = useAiChat()
  const resolver = entityRefs?.resolvers?.person
  const i18n = useI18n()

  const personUrl = entityRefs?.urls?.person?.(id)

  const mapToCard = useMemo(
    () =>
      (profile: PersonProfile): F0CardProps => ({
        avatar: {
          type: "person",
          firstName: profile.firstName,
          lastName: profile.lastName,
          src: profile.avatarUrl,
        },
        title: `${profile.firstName} ${profile.lastName}`,
        description: profile.jobTitle,
        ...(personUrl && {
          secondaryActions: {
            label: i18n.t("ai.view"),
            href: personUrl,
          },
        }),
      }),
    [i18n, personUrl]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      ...(personUrl && {
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: personUrl,
        },
      }),
    }),
    [label, i18n, personUrl]
  )

  if (!resolver) {
    return <span>{label}</span>
  }

  return (
    <EntityRefHoverCard
      id={id}
      trigger={<PersonTrigger label={label} />}
      resolver={resolver}
      mapToCard={mapToCard}
      fallbackCard={fallbackCard}
    />
  )
}
