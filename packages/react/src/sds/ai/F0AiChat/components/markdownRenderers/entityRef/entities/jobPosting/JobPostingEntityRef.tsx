import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { getColor } from "@/kits/Charts/utils/colors"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Progress } from "@/ui/progress"

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

function VacanciesProgress({
  filled,
  total,
}: {
  filled: number
  total: number
}) {
  const percentage = total > 0 ? (filled / total) * 100 : 0
  return (
    <div className="flex w-full items-center gap-2">
      <Progress
        value={percentage}
        max={100}
        className="h-1.5 w-1/2"
        color={getColor("categorical-1")}
      />
      <span className="shrink-0 tabular-nums">
        {filled}/{total}
      </span>
    </div>
  )
}

type JobPostingRow = {
  title: string
  value: React.ReactNode
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

  const jobPostingUrl = entityRefs?.urls?.jobPosting?.(id)

  const mapToCard = useMemo(
    () =>
      (profile: JobPostingProfile): F0CardProps => {
        const filled = profile.vacanciesFilled ?? 0
        const total = profile.vacanciesTotal ?? 0

        const rows: JobPostingRow[] = [
          profile.location && {
            title: i18n.t("ai.entityRef.jobPosting.location"),
            value: profile.location,
          },
          profile.publishedAt && {
            title: i18n.t("ai.entityRef.jobPosting.published"),
            value: profile.publishedAt,
          },
          total > 0 && {
            title: i18n.t("ai.entityRef.jobPosting.vacancies"),
            value: <VacanciesProgress filled={filled} total={total} />,
          },
        ].filter(Boolean) as JobPostingRow[]

        const statusTag = profile.status ? (
          <F0TagStatus
            text={profile.status}
            variant={profile.statusVariant ?? "neutral"}
          />
        ) : null

        return {
          title: profile.title,
          ...((statusTag || rows.length > 0) && {
            children: (
              <div className="flex flex-col gap-2">
                {statusTag}
                {rows.map((row) => (
                  <div key={row.title} className="flex flex-col">
                    <p className="text-f1-foreground-secondary">{row.title}</p>
                    <div className="flex items-center gap-1.5 font-medium text-f1-foreground">
                      {row.value}
                    </div>
                  </div>
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
