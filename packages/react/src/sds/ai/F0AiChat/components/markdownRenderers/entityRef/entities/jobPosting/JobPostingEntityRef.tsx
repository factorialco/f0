import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"
import {
  DetailsItem,
  type DetailsItemType,
} from "@/experimental/Lists/DetailsItem"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { JobPostingProfile } from "./types"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import { EntityRefHoverCard } from "../../components/EntityRefHoverCard"

const JobPostingTrigger = forwardRef<HTMLButtonElement, { label: string }>(
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
JobPostingTrigger.displayName = "JobPostingTrigger"

/**
 * Inline job posting entity reference with a hover card showing posting details.
 *
 * Renders the trigger as a styled link. On hover, lazily fetches the job posting
 * data via `entityRefs.resolvers.jobPosting` and displays status, vacancies
 * filled/total, and published date rows.
 */
export function JobPostingEntityRef({
  id,
  label,
}: {
  id: string
  label: string
}) {
  const { entityRefs } = useAiChat()
  const resolver = entityRefs?.resolvers?.jobPosting
  const i18n = useI18n()

  const jobPostingUrl = entityRefs?.urls?.jobPosting?.(id)

  const mapToCard = useMemo(
    () =>
      (profile: JobPostingProfile): F0CardProps => {
        const details: DetailsItemType[] = []

        if (profile.status) {
          details.push({
            title: i18n.t("ai.entityRef.jobPosting.status"),
            content: {
              type: "status-tag",
              text: profile.status,
              variant: profile.statusVariant ?? "neutral",
            },
          })
        }

        if (
          profile.vacanciesTotal !== undefined ||
          profile.vacanciesFilled !== undefined
        ) {
          const filled = profile.vacanciesFilled ?? 0
          const total = profile.vacanciesTotal ?? 0
          details.push({
            title: i18n.t("ai.entityRef.jobPosting.vacancies"),
            content: { type: "item", text: `${filled} / ${total}` },
          })
        }

        if (profile.publishedAt) {
          details.push({
            title: i18n.t("ai.entityRef.jobPosting.published"),
            content: { type: "item", text: profile.publishedAt },
          })
        }

        return {
          title: profile.title,
          ...(profile.location && { description: profile.location }),
          ...(details.length > 0 && {
            children: (
              <div className="-mx-1.5 flex flex-col gap-2">
                {details.map((d) => (
                  <DetailsItem key={d.title} {...d} />
                ))}
              </div>
            ),
          }),
          ...(jobPostingUrl && {
            secondaryActions: {
              label: i18n.t("ai.view"),
              href: jobPostingUrl,
            },
          }),
        }
      },
    [i18n, jobPostingUrl]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      ...(jobPostingUrl && {
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: jobPostingUrl,
        },
      }),
    }),
    [label, i18n, jobPostingUrl]
  )

  if (!resolver) {
    return <span>{label}</span>
  }

  return (
    <EntityRefHoverCard
      id={id}
      trigger={<JobPostingTrigger label={label} />}
      resolver={resolver}
      mapToCard={mapToCard}
      fallbackCard={fallbackCard}
    />
  )
}
