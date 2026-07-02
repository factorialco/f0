import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { compensationReviewsColumns } from "./compensationReviewsColumns"
import { useCompensationReviewsSource } from "./useCompensationReviewsSource"

export function CompensationReviewsTab() {
  const source = useCompensationReviewsSource()

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: compensationReviewsColumns } },
      ]}
    />
  )
}
