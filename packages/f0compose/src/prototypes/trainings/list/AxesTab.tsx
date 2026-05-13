import { F0Box, F0Button, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"

import { trainingAxes, trainings } from "@/fixtures"

export function AxesTab() {
  // Compute training counts per axis from synthetic distribution.
  const counts = trainingAxes.map((a, i) => ({
    axis: a,
    count: trainings.filter((_t, ti) => (ti + i) % trainingAxes.length === 0).length,
  }))

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <F0Heading content="Axes" variant="heading-large" as="h1" />
          <F0Text
            content="Strategic axes used to classify trainings (Strategic, Compliance, Onboarding…)."
            variant="body"
          />
        </div>
        <F0Button label="New axis" variant="default" />
      </div>

      <F0Card title={`Axes (${counts.length})`}>
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {counts.map(({ axis, count }) => (
            <div
              key={axis.id}
              className="flex items-center justify-between p-4"
            >
              <div className="flex flex-col">
                <F0Text content={axis.name} variant="label" />
                <F0Text content={`${count} trainings`} variant="small" />
              </div>
              <div className="flex gap-2">
                <F0Button label="Edit" variant="ghost" size="sm" />
                <F0Button label="Delete" variant="ghost" size="sm" />
              </div>
            </div>
          ))}
        </div>
      </F0Card>
    </F0Box>
  )
}
