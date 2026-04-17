import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { RequisitionProfile } from "./types"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import { EntityRefHoverCard } from "../../components/EntityRefHoverCard"

const RequisitionTrigger = forwardRef<HTMLButtonElement, { label: string }>(
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
RequisitionTrigger.displayName = "RequisitionTrigger"

/**
 * Inline requisition entity reference with a hover card showing requisition details.
 *
 * Renders the trigger as a styled link. On hover, lazily fetches
 * the requisition data via `entityRefs.resolvers.requisition` and displays
 * title, status, and reason. Optionally links via `entityRefs.urls.requisition`.
 */
export function RequisitionEntityRef({
  id,
  label,
}: {
  id: string
  label: string
}) {
  const { entityRefs } = useAiChat()
  const resolver = entityRefs?.resolvers?.requisition
  const i18n = useI18n()

  const requisitionUrl = entityRefs?.urls?.requisition?.(id)

  const mapToCard = useMemo(
    () =>
      (profile: RequisitionProfile): F0CardProps => ({
        title: profile.title,
        description: [profile.status, profile.reason]
          .filter(Boolean)
          .join(" · "),
        ...(requisitionUrl && {
          secondaryActions: {
            label: i18n.t("ai.view"),
            href: requisitionUrl,
          },
        }),
      }),
    [i18n, requisitionUrl]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      ...(requisitionUrl && {
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: requisitionUrl,
        },
      }),
    }),
    [label, i18n, requisitionUrl]
  )

  if (!resolver) {
    return <span>{label}</span>
  }

  return (
    <EntityRefHoverCard
      id={id}
      trigger={<RequisitionTrigger label={label} />}
      resolver={resolver}
      mapToCard={mapToCard}
      fallbackCard={fallbackCard}
    />
  )
}
