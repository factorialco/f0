import { F0Box, OneEmptyState, StandardLayout } from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Download, Pencil } from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import type { ReviewCampaign } from "@/fixtures/performance"

import { participantsColumns } from "./participantsColumns"
import { getReviewDetail } from "./reviewDetailData"
import { reviewDetailTabs, type ReviewDetailTabId } from "./reviewDetailTabs"
import { ReviewSummaryCards } from "./ReviewSummaryCards"
import { ScoreDistributionCard } from "./ScoreDistributionCard"
import { useParticipantsSource } from "./useParticipantsSource"

const VALID_TABS = new Set<string>(reviewDetailTabs.map((t) => t.id))

const STATUS_VARIANT: Record<
  ReviewCampaign["status"],
  "positive" | "warning" | "neutral" | "info"
> = {
  active: "positive",
  draft: "warning",
  finished: "neutral",
  archived: "info",
}

const STATUS_LABEL: Record<ReviewCampaign["status"], string> = {
  active: "Active",
  draft: "Draft",
  finished: "Finished",
  archived: "Archived",
}

export function ReviewDetailView({
  review,
  onBack,
}: {
  review: ReviewCampaign
  onBack: () => void
}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const detail = getReviewDetail(review)
  const source = useParticipantsSource(review.id)

  const rawTab = searchParams.get("detailTab")
  const activeTab: ReviewDetailTabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as ReviewDetailTabId) : "insights"

  const setTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "insights") next.delete("detailTab")
    else next.set("detailTab", id)
    setSearchParams(next)
  }

  const tabsWithNav = reviewDetailTabs.map((t) => ({
    ...t,
    onClick: () => setTab(t.id),
  }))

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "performance",
              name: "Performance",
              href: "/p/goals-strategy-map",
            }}
            breadcrumbs={[
              { id: "reviews", label: "Reviews", onClick: onBack },
              { id: "detail", label: review.name },
            ]}
          />
          <ResourceHeader
            title={review.name}
            description={detail.description}
            primaryAction={{ label: "Stop review", onClick: () => {} }}
            secondaryActions={[
              { label: "Save as template", onClick: () => {}, variant: "outline" },
              { label: "Edit", icon: Pencil, onClick: () => {}, variant: "outline" },
            ]}
            otherActions={[
              { label: "Download", icon: Download, onClick: () => {} },
            ]}
            metadata={[
              {
                label: "Status",
                hideLabel: true,
                value: {
                  type: "status",
                  label: STATUS_LABEL[review.status],
                  variant: STATUS_VARIANT[review.status],
                },
              },
              {
                label: "Due date",
                value: { type: "date", formattedDate: detail.dueLabel },
              },
              {
                label: "Review types",
                value: { type: "text", content: detail.reviewTypes },
              },
              {
                label: "People to evaluate",
                value: {
                  type: "text",
                  content: `${detail.participantsCount} participants`,
                },
              },
            ]}
          />
          <Tabs key={activeTab} tabs={tabsWithNav} activeTabId={activeTab} />
        </>
      }
    >
      <StandardLayout>
        {activeTab === "insights" && (
          <F0Box display="flex" flexDirection="column" gap="xl">
            <ReviewSummaryCards detail={detail} />
            <ScoreDistributionCard detail={detail} />
            <OneDataCollection
              source={source}
              visualizations={[
                { type: "table", options: { columns: participantsColumns } },
              ]}
            />
          </F0Box>
        )}
        {activeTab !== "insights" && (
          <OneEmptyState
            title="Coming soon"
            description="This view is part of the navigation scaffold and isn't wired yet."
            emoji="🚧"
          />
        )}
      </StandardLayout>
    </Page>
  )
}
