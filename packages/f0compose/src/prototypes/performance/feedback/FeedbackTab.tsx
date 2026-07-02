import { F0Box } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { feedbackColumns } from "./feedbackColumns"
import { useFeedbackSource } from "./useFeedbackSource"

/** Feedback tab — table of peer/manager feedback entries. */
export function FeedbackTab() {
  const source = useFeedbackSource()

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <OneDataCollection
        source={source}
        visualizations={[
          { type: "table", options: { columns: feedbackColumns } },
        ]}
      />
    </F0Box>
  )
}
