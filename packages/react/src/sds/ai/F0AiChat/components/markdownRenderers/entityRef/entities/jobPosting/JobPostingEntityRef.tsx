import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { getColor } from "@/kits/Charts/utils/colors"

import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { cn, focusRing } from "@/lib/utils"
import { Progress } from "@/ui/progress"

import type { JobPostingProfile } from "./types"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import type { EntityRefDetailRow } from "../../components/EntityRefDetails"
import { EntityRefDetails } from "../../components/EntityRefDetails"
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

function formatPublishedAt(value: string, locale: string): string {
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  const date = dateOnly
    ? new Date(
        Number(dateOnly[1]),
        Number(dateOnly[2]) - 1,
        Number(dateOnly[3])
      )
    : new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function VacanciesProgress({
  filled,
  total,
  ariaLabel,
}: {
  filled: number
  total: number
  ariaLabel: string
}) {
  const rawPercentage = total > 0 ? (filled / total) * 100 : 0
  const percentage = Math.min(100, Math.max(0, rawPercentage))
  return (
    <div className="flex w-full items-center gap-2">
      <Progress
        value={percentage}
        max={100}
        className="h-1.5 w-1/2"
        color={getColor("categorical-1")}
        aria-label={ariaLabel}
      />
      <span className="shrink-0 tabular-nums">
        {filled}/{total}
      </span>
    </div>
  )
}

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
  const { locale } = useL10n()

  const jobPostingUrl = entityRefs?.urls?.jobPosting?.(id)

  const mapToCard = useMemo(
    () =>
      (profile: JobPostingProfile): F0CardProps => {
        const filled = profile.vacanciesFilled ?? 0
        const total = profile.vacanciesTotal ?? 0

        const candidateRows: Array<EntityRefDetailRow | undefined> = [
          profile.status
            ? {
                label: i18n.t("ai.entityRef.jobPosting.status"),
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
          profile.publishedAt
            ? {
                label: i18n.t("ai.entityRef.jobPosting.published"),
                value: formatPublishedAt(profile.publishedAt, locale),
              }
            : undefined,
          total > 0
            ? {
                label: i18n.t("ai.entityRef.jobPosting.vacancies"),
                value: (
                  <VacanciesProgress
                    filled={filled}
                    total={total}
                    ariaLabel={i18n.t(
                      "ai.entityRef.jobPosting.vacanciesProgress",
                      { filled, total }
                    )}
                  />
                ),
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
          ...(jobPostingUrl && {
            secondaryActions: {
              label: i18n.t("ai.view"),
              href: jobPostingUrl,
            },
          }),
        }
      },
    [i18n, jobPostingUrl, locale]
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
