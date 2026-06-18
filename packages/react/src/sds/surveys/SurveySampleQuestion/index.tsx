import { F0Box, type F0BoxProps } from "@/lib/F0Box"

import { SampleQuestionProps } from "./types"

export type { SampleQuestionProps } from "./types"

/**
 * A non-interactive preview of a survey question, used to illustrate what a
 * given survey type produces (for example inside the survey type selector).
 * It is purely presentational — the inputs are mocked placeholders, not real
 * form fields.
 */
export function SampleQuestion(props: SampleQuestionProps) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="lg"
      padding="lg"
      background="secondary"
      borderRadius="lg"
    >
      <p className="m-0 text-sm font-semibold text-f1-foreground">
        {props.question}
      </p>
      {props.type === "rating" ? (
        <RatingScale
          steps={props.steps ?? 5}
          minLabel={props.minLabel}
          maxLabel={props.maxLabel}
        />
      ) : (
        <ChoiceList options={props.options} />
      )}
    </F0Box>
  )
}

function RatingScale({
  steps,
  minLabel,
  maxLabel,
}: {
  steps: number
  minLabel?: string
  maxLabel?: string
}) {
  const columns = String(steps) as F0BoxProps["columns"]

  return (
    <F0Box display="flex" flexDirection="column" gap="sm">
      <F0Box display="grid" columns={columns} gap="sm">
        {Array.from({ length: steps }).map((_, i) => (
          <F0Box
            key={i}
            height="8"
            border="default"
            borderRadius="md"
            background="primary"
          />
        ))}
      </F0Box>
      {(minLabel || maxLabel) && (
        <F0Box display="flex" justifyContent="between" alignItems="center">
          <span className="text-xs text-f1-foreground-secondary">
            {minLabel}
          </span>
          <span className="text-xs text-f1-foreground-secondary">
            {maxLabel}
          </span>
        </F0Box>
      )}
    </F0Box>
  )
}

function ChoiceList({ options }: { options: string[] }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      {options.map((option) => (
        <F0Box
          key={option}
          display="flex"
          alignItems="center"
          gap="md"
          paddingX="md"
          paddingY="sm"
          border="default"
          borderRadius="md"
          background="primary"
        >
          <F0Box
            shrink={false}
            width="4"
            height="4"
            border="thick"
            borderRadius="full"
          />
          <span className="text-sm text-f1-foreground-secondary">{option}</span>
        </F0Box>
      ))}
    </F0Box>
  )
}
