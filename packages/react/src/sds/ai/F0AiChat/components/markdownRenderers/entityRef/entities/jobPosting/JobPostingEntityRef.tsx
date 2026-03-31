import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"

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
 * Renders the trigger as a styled link. On hover, lazily fetches
 * the job posting data via `entityResolvers.jobPosting` and displays
 * title, status, location, and a link to the posting page.
 */
export function JobPostingEntityRef({
  id,
  label,
}: {
  id: string
  label: string
}) {
  const { entityResolvers } = useAiChat()
  const resolver = entityResolvers?.jobPosting
  const i18n = useI18n()

  const jobPostingUrl = `/recruitment/jobs/${id}/applications`

  const mapToCard = useMemo(
    () =>
      (profile: JobPostingProfile): F0CardProps => ({
        title: profile.title,
        description: [profile.status, profile.location]
          .filter(Boolean)
          .join(" · "),
        secondaryActions: {
          label: i18n.t("ai.viewJobPosting"),
          href: jobPostingUrl,
        },
      }),
    [i18n, jobPostingUrl]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      secondaryActions: {
        label: i18n.t("ai.viewJobPosting"),
        href: jobPostingUrl,
      },
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
