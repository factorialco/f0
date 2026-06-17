import { F0Box, F0DataChart, F0Heading, F0Text } from "@factorialco/f0-react"

import type { ReviewDetail } from "./reviewDetailData"

export function ScoreDistributionCard({ detail }: { detail: ReviewDetail }) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="md"
      padding="md"
      border="default"
      borderRadius="md"
      background="primary"
    >
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading
          content="Performance score distribution"
          variant="heading"
          as="h3"
        />
        <F0Text content="Average score" variant="description" />
        <F0Heading
          content={`${detail.averageScore}/5`}
          variant="heading-large"
          as="h2"
        />
      </F0Box>
      <F0Box height="72" width="full">
        <F0DataChart
          type="bar"
          categories={detail.distribution.map((b) => b.label)}
          series={[
            {
              name: "Employees",
              data: detail.distribution.map((b) => b.count),
              color: "malibu",
            },
          ]}
          showLabels
        />
      </F0Box>
    </F0Box>
  )
}
