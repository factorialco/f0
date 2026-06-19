import { F0Box, F0Heading, F0Text, F0TagStatus } from "@factorialco/f0-react"
import {
  enpsSurveys,
  type EnpsSurvey,
  surveyStatusVariant,
  surveyStatusLabel,
} from "../enpsFixtures"

function ScoreGauge({ score, label }: { score: number; label: string }) {
  const color =
    score >= 50
      ? "text-f1-foreground-positive"
      : score >= 0
        ? "text-f1-foreground-warning"
        : "text-f1-foreground-critical"

  return (
    <F0Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="sm"
      padding="lg"
      background="secondary"
      borderRadius="md"
    >
      <F0Text content={label} variant="label" />
      <span className={`text-4xl font-bold ${color}`}>{score}</span>
      <F0Text content="eNPS Score" variant="description" />
    </F0Box>
  )
}

function SurveyCard({ survey }: { survey: EnpsSurvey }) {
  const responseRate =
    survey.totalParticipants > 0
      ? Math.round((survey.totalResponses / survey.totalParticipants) * 100)
      : 0

  return (
    <F0Box
      padding="lg"
      background="primary"
      border="default"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      gap="md"
    >
      <F0Box display="flex" justifyContent="between" alignItems="center">
        <F0Heading content={survey.name} variant="heading" as="h3" />
        <F0TagStatus
          text={surveyStatusLabel(survey.status)}
          variant={surveyStatusVariant(survey.status)}
        />
      </F0Box>
      <F0Box display="flex" gap="lg">
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Period" variant="label" />
          <F0Text
            content={`${survey.startDate} — ${survey.endDate}`}
            variant="body"
          />
        </F0Box>
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Response rate" variant="label" />
          <F0Text
            content={`${survey.totalResponses}/${survey.totalParticipants} (${responseRate}%)`}
            variant="body"
          />
        </F0Box>
        {survey.status !== "draft" && (
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text content="eNPS Score" variant="label" />
            <F0Text content={String(survey.enpsScore)} variant="body" />
          </F0Box>
        )}
      </F0Box>
      {survey.frozenAt && (
        <F0Box
          padding="sm"
          borderRadius="sm"
          background="info"
          display="flex"
          alignItems="center"
          gap="sm"
        >
          <F0Text
            content={`Results frozen on ${new Date(survey.frozenAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
            variant="small"
          />
        </F0Box>
      )}
    </F0Box>
  )
}

export function OverviewView() {
  const latestClosed = enpsSurveys.find((s) => s.status === "closed")
  const activeSurvey = enpsSurveys.find((s) => s.status === "active")

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Heading content="eNPS Overview" variant="heading" as="h2" />

      <F0Box display="flex" gap="lg">
        <ScoreGauge
          score={activeSurvey?.enpsScore ?? 0}
          label="Current (Active)"
        />
        <ScoreGauge
          score={latestClosed?.enpsScore ?? 0}
          label="Last closed"
        />
      </F0Box>

      <F0Box display="flex" flexDirection="column" gap="md">
        <F0Heading content="Survey history" variant="heading" as="h3" />
        {enpsSurveys.map((survey) => (
          <SurveyCard key={survey.id} survey={survey} />
        ))}
      </F0Box>
    </F0Box>
  )
}
