import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { reviewsListColumns } from "./reviewsListColumns"
import { useReviewCampaignsSource } from "./useReviewCampaignsSource"

export function ReviewsListView({
  onOpenReview,
}: {
  onOpenReview: (id: string) => void
}) {
  const source = useReviewCampaignsSource(onOpenReview)
  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: reviewsListColumns } },
      ]}
    />
  )
}
