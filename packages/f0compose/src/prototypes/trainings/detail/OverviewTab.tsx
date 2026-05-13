import {
  F0Box,
  F0Heading,
  F0Text,
  TwoColumnLayout,
} from "@factorialco/f0-react"
import { Tooltip } from "@factorialco/f0-react/dist/experimental"

import type { Training } from "@/fixtures"
import { competencies as competenciesFixture } from "@/fixtures"

type Props = { training: Training }

function Section({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="sm">
      <F0Text content={label} variant="label" />
      {children}
    </F0Box>
  )
}

function ChipTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-f1-background-secondary px-2 py-0.5 text-sm text-f1-foreground-secondary">
      {label}
    </span>
  )
}

function formatMoney(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}

function formatScore(value: number | null | undefined): string {
  if (value == null) return "–"
  return value.toFixed(1)
}

function CostWithTooltip({
  label,
  amount,
  tooltip,
}: {
  label: string
  amount: number
  tooltip: string
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="sm">
      <F0Box display="flex" flexDirection="row" alignItems="center" gap="sm">
        <F0Text content={label} variant="label" />
        <Tooltip label={tooltip}>
          <span
            className="inline-flex h-4 w-4 items-center justify-center rounded-full text-xs text-f1-foreground-secondary"
            aria-label={tooltip}
          >
            ⓘ
          </span>
        </Tooltip>
      </F0Box>
      <F0Text content={formatMoney(amount)} variant="body" />
    </F0Box>
  )
}

export function OverviewTab({ training }: Props) {
  const trainingCompetencies =
    training.competencyIds && training.competencyIds.length > 0
      ? competenciesFixture.filter((c) => training.competencyIds!.includes(c.id))
      : []

  const isSpanishCompany = training.countryHint === "es"
  const isFrenchCompany = training.countryHint === "fr"

  const subsidizedLabel = training.fundaeSubsidized && isSpanishCompany
    ? "Subsidized by Fundae"
    : training.subsidized && !isSpanishCompany
      ? "Subsidized"
      : "Not subsidized"

  const totalCost = training.totalCost
  const totalSalaryCost = training.totalSalaryCost
  const totalSubsidizedCost = training.totalSubsidizedCost

  const mainContent = (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {/* FormsScores */}
      <F0Box display="flex" flexDirection="row" gap="xl" flexWrap="wrap">
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Text content="Satisfaction" variant="label" />
          <F0Heading
            content={formatScore(training.scoreSatisfaction)}
            as="h3"
            variant="heading"
          />
        </F0Box>
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Text content="Effectiveness" variant="label" />
          <F0Heading
            content={formatScore(training.scoreEffectiveness)}
            as="h3"
            variant="heading"
          />
        </F0Box>
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Text content="Knowledge" variant="label" />
          <F0Heading
            content={formatScore(training.scoreKnowledge)}
            as="h3"
            variant="heading"
          />
        </F0Box>
      </F0Box>

      <Section label="Competencies">
        {trainingCompetencies.length > 0 ? (
          <F0Box display="flex" flexDirection="row" flexWrap="wrap" gap="sm">
            {trainingCompetencies.map((c) => (
              <ChipTag key={c.id} label={c.name} />
            ))}
          </F0Box>
        ) : (
          <F0Text content="No competencies linked" variant="body" />
        )}
      </Section>

      <Section label="Objectives">
        <F0Text content={training.objectives || "-"} variant="body" />
      </Section>

      <Section label="Description">
        <F0Text content={training.description || "-"} variant="body" />
      </Section>

      {training.validFor != null && (
        <Section label="Course validity">
          <F0Text
            content={
              training.validFor === 1 ? "1 year" : `${training.validFor} years`
            }
            variant="body"
          />
        </Section>
      )}

      {training.learningPlatformLink && (
        <Section label="Learning platform">
          <a
            href={training.learningPlatformLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-f1-foreground-info underline"
          >
            {training.learningPlatformLink}
          </a>
        </Section>
      )}
    </F0Box>
  )

  const sideContent = (
    <F0Box display="flex" flexDirection="column" gap="xl" paddingLeft="xl">
      {training.thumbnail && (
        <div className="flex max-h-[140px] max-w-[360px] items-center justify-center overflow-hidden rounded-md">
          <img
            src={training.thumbnail}
            alt={training.name}
            className="h-auto max-h-full w-auto max-w-full object-contain"
          />
        </div>
      )}

      <Section label="Subsidized">
        <F0Text content={subsidizedLabel} variant="body" />
      </Section>

      <Section label="Workflow">
        {training.processId && training.workflowName ? (
          <F0Text content={training.workflowName} variant="body" />
        ) : (
          <F0Text content="No workflow linked" variant="body" />
        )}
      </Section>

      <Section label="Internal code">
        <F0Text content={training.code ?? "-"} variant="body" />
      </Section>

      {training.type === "external" && training.externalProvider && (
        <Section label="Provider">
          <F0Text content={training.externalProvider} variant="body" />
        </Section>
      )}

      <Section label="Tags">
        {training.categories.length > 0 ? (
          <F0Box display="flex" flexDirection="row" flexWrap="wrap" gap="sm">
            {training.categories.map((c) => (
              <ChipTag key={c.id} label={c.name} />
            ))}
          </F0Box>
        ) : (
          <F0Text content="-" variant="body" />
        )}
      </Section>

      {isFrenchCompany && training.axes && training.axes.length > 0 && (
        <Section label="Axes">
          <F0Box display="flex" flexDirection="row" flexWrap="wrap" gap="sm">
            {training.axes.map((a) => (
              <ChipTag key={a.id} label={a.name} />
            ))}
          </F0Box>
        </Section>
      )}

      <CostWithTooltip
        label="Total cost"
        amount={totalCost}
        tooltip="Sum of direct and indirect training costs."
      />

      <CostWithTooltip
        label="Total salary cost"
        amount={totalSalaryCost}
        tooltip="Estimated salary cost of participants attending the training."
      />

      <CostWithTooltip
        label="Reviewed subsidized cost"
        amount={totalSubsidizedCost}
        tooltip="Subsidized amount reviewed by Fundae or equivalent body."
      />

      <Section label="Year">
        <F0Text content={String(training.year)} variant="body" />
      </Section>
    </F0Box>
  )

  return (
    <F0Box padding="xl">
      <TwoColumnLayout sideContent={sideContent}>{mainContent}</TwoColumnLayout>
    </F0Box>
  )
}
