import { F0Alert, F0Box, F0Heading, F0Text } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { enpsSurveys } from "../enpsFixtures"
import { resultsColumns } from "./resultsColumns"
import { useResultsSource } from "./useResultsSource"

export function ResultsView() {
  const source = useResultsSource()
  const selectedSurvey = enpsSurveys.find((s) => s.status === "closed" && s.id === "enps-002")

  if (!selectedSurvey) return null

  const responseRate =
    selectedSurvey.totalParticipants > 0
      ? Math.round(
          (selectedSurvey.totalResponses / selectedSurvey.totalParticipants) *
            100
        )
      : 0

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      {selectedSurvey.frozenAt && (
        <F0Alert
          variant="info"
          title="Frozen results"
          description={`These results were frozen on ${new Date(selectedSurvey.frozenAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}. Historical data from closed surveys cannot be modified, regardless of employee additions or departures.`}
        />
      )}

      <F0Box display="flex" gap="lg">
        <F0Box
          padding="lg"
          background="secondary"
          borderRadius="md"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          grow
        >
          <F0Text content="eNPS Score" variant="label" />
          <F0Heading
            content={String(selectedSurvey.enpsScore)}
            variant="heading-large"
            as="h2"
          />
        </F0Box>
        <F0Box
          padding="lg"
          background="secondary"
          borderRadius="md"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          grow
        >
          <F0Text content="Response rate" variant="label" />
          <F0Heading
            content={`${responseRate}%`}
            variant="heading-large"
            as="h2"
          />
          <F0Text
            content={`${selectedSurvey.totalResponses} of ${selectedSurvey.totalParticipants}`}
            variant="description"
          />
        </F0Box>
        <F0Box
          padding="lg"
          background="positive"
          borderRadius="md"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          grow
        >
          <F0Text content="Promoters" variant="label" />
          <F0Heading
            content={String(selectedSurvey.promoters)}
            variant="heading-large"
            as="h2"
          />
        </F0Box>
        <F0Box
          padding="lg"
          background="warning"
          borderRadius="md"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          grow
        >
          <F0Text content="Passives" variant="label" />
          <F0Heading
            content={String(selectedSurvey.passives)}
            variant="heading-large"
            as="h2"
          />
        </F0Box>
        <F0Box
          padding="lg"
          background="critical"
          borderRadius="md"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          grow
        >
          <F0Text content="Detractors" variant="label" />
          <F0Heading
            content={String(selectedSurvey.detractors)}
            variant="heading-large"
            as="h2"
          />
        </F0Box>
      </F0Box>

      <F0Heading content="Individual responses" variant="heading" as="h3" />

      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: { columns: resultsColumns },
          },
        ]}
      />
    </F0Box>
  )
}
