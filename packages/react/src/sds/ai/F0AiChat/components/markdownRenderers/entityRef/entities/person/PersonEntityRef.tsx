import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import { EntityRefHoverCard } from "../../components/EntityRefHoverCard"
import type { PersonProfile } from "./types"

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

/**
 * Inline person entity reference with a hover card showing profile details.
 *
 * Renders the trigger as a styled @mention. On hover, lazily fetches
 * the employee profile via `entityResolvers.person` and displays
 * avatar, name, job title, and a link to `/employees/:id`.
 */
export function PersonEntityRef({ id, label }: { id: string; label: string }) {
  const { entityResolvers } = useAiChat()
  const resolver = entityResolvers?.person
  const i18n = useI18n()

  const employeeUrl = `/employees/${id}`

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
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: employeeUrl,
        },
      }),
    [i18n, employeeUrl]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      secondaryActions: {
        label: i18n.t("ai.view"),
        href: employeeUrl,
      },
    }),
    [label, i18n, employeeUrl]
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
