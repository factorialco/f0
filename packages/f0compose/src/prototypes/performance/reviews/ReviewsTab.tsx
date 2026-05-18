import { F0Box } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { reviewsColumns } from "./reviewsColumns"
import { useReviewsSource } from "./useReviewsSource"

/** Reviews tab — table of performance review cycles. */
export function ReviewsTab() {
  const source = useReviewsSource()

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <OneDataCollection
        source={source}
        visualizations={[
          { type: "table", options: { columns: reviewsColumns } },
        ]}
      />
    </F0Box>
  )
}
