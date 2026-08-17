import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { VacancyProfile } from "./types"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import { EntityRefHoverCard } from "../../components/EntityRefHoverCard"

const VacancyTrigger = forwardRef<HTMLButtonElement, { label: string }>(
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
VacancyTrigger.displayName = "VacancyTrigger"

/**
 * Inline vacancy entity reference with a hover card showing vacancy details.
 *
 * Renders the trigger as a styled link. On hover, lazily fetches
 * the vacancy data via `entityRefs.resolvers.vacancy` and displays
 * name, status, and vacancy type. Optionally links via `entityRefs.urls.vacancy`.
 */
export function VacancyEntityRef({ id, label }: { id: string; label: string }) {
  const { entityRefs } = useAiChat()
  const resolver = entityRefs?.resolvers?.vacancy
  const i18n = useI18n()

  const vacancyUrl = entityRefs?.urls?.vacancy?.(id)

  const mapToCard = useMemo(
    () =>
      (profile: VacancyProfile): F0CardProps => ({
        title: profile.name,
        description: [profile.status, profile.vacancyType]
          .filter(Boolean)
          .join(" · "),
        ...(vacancyUrl && {
          secondaryActions: {
            label: i18n.t("ai.view"),
            href: vacancyUrl,
          },
        }),
      }),
    [i18n, vacancyUrl]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      ...(vacancyUrl && {
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: vacancyUrl,
        },
      }),
    }),
    [label, i18n, vacancyUrl]
  )

  if (!resolver) {
    return <span>{label}</span>
  }

  return (
    <EntityRefHoverCard
      id={id}
      trigger={<VacancyTrigger label={label} />}
      resolver={resolver}
      mapToCard={mapToCard}
      fallbackCard={fallbackCard}
    />
  )
}
