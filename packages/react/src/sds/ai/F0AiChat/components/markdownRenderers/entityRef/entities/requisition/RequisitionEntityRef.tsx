import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"
import {
  DetailsItem,
  type DetailsItemType,
} from "@/experimental/Lists/DetailsItem"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { PersonRef } from "../person/types"

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
 * Renders the trigger as a styled link. On hover, lazily fetches the requisition
 * data via `entityRefs.resolvers.requisition` and displays status and owner rows.
 *
 * Owner becomes a clickable link when `entityRefs.urls.person` is provided.
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
  const personUrlBuilder = entityRefs?.urls?.person

  const mapToCard = useMemo(
    () =>
      (profile: RequisitionProfile): F0CardProps => {
        const details: DetailsItemType[] = []

        if (profile.status) {
          details.push({
            title: i18n.t("ai.entityRef.requisition.status"),
            content: {
              type: "status-tag",
              text: profile.status,
              variant: profile.statusVariant ?? "neutral",
            },
          })
        }

        if (profile.owner) {
          details.push(
            personRow(
              i18n.t("ai.entityRef.requisition.owner"),
              profile.owner,
              personUrlBuilder
            )
          )
        }

        return {
          title: profile.title,
          ...(profile.reason && { description: profile.reason }),
          ...(details.length > 0 && {
            children: (
              <div className="-mx-1.5 flex flex-col gap-2">
                {details.map((d) => (
                  <DetailsItem key={d.title} {...d} />
                ))}
              </div>
            ),
          }),
          ...(requisitionUrl && {
            secondaryActions: {
              label: i18n.t("ai.view"),
              href: requisitionUrl,
            },
          }),
        }
      },
    [i18n, requisitionUrl, personUrlBuilder]
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

function personRow(
  title: string,
  person: PersonRef,
  urlBuilder: ((id: string) => string) | undefined
): DetailsItemType {
  const href = urlBuilder?.(String(person.id))
  return {
    title,
    content: {
      type: "person",
      firstName: person.firstName,
      lastName: person.lastName,
      avatarUrl: person.avatarUrl,
      ...(href && {
        action: {
          type: "navigate",
          href,
          showChevron: false,
        },
      }),
    },
  }
}
