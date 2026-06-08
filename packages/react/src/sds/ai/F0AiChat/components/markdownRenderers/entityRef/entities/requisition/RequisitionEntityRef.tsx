import { forwardRef, useMemo } from "react"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import type { F0CardProps } from "@/components/F0Card"
import { F0TagStatus } from "@/components/tags/F0TagStatus"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { RequisitionProfile } from "./types"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import type { EntityRefDetailRow } from "../../components/EntityRefDetails"
import { EntityRefDetails } from "../../components/EntityRefDetails"
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
      (profile: RequisitionProfile): F0CardProps => {
        const lineManagerName = profile.lineManager
          ? `${profile.lineManager.firstName} ${profile.lineManager.lastName}`
          : undefined

        const candidateRows: Array<EntityRefDetailRow | undefined> = [
          profile.status
            ? {
                label: i18n.t("ai.entityRef.requisition.status"),
                value: (
                  <div className="flex items-center pt-1">
                    <F0TagStatus
                      text={profile.status}
                      variant={profile.statusVariant ?? "neutral"}
                    />
                  </div>
                ),
              }
            : undefined,
          profile.lineManager
            ? {
                label: i18n.t("ai.entityRef.requisition.lineManager"),
                value: (
                  <div className="flex items-center gap-1.5 pt-1">
                    <F0AvatarPerson
                      firstName={profile.lineManager.firstName}
                      lastName={profile.lineManager.lastName}
                      src={profile.lineManager.avatarUrl}
                      size="xs"
                    />
                    <span>{lineManagerName}</span>
                  </div>
                ),
              }
            : undefined,
          profile.reason
            ? {
                label: i18n.t("ai.entityRef.requisition.reason"),
                value: profile.reason,
              }
            : undefined,
        ]
        const rows = candidateRows.filter(
          (row): row is EntityRefDetailRow => row !== undefined
        )

        return {
          title: profile.title,
          ...(profile.location && { description: profile.location }),
          ...(rows.length > 0 && {
            children: <EntityRefDetails rows={rows} />,
          }),
          ...(requisitionUrl && {
            secondaryActions: {
              label: i18n.t("ai.view"),
              href: requisitionUrl,
            },
          }),
        }
      },
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
