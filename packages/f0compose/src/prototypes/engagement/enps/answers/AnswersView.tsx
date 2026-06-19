import { useState } from "react"
import {
  F0Box,
  F0Heading,
  F0Text,
  F0Button,
  F0Avatar,
  F0Icon,
} from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { Heart } from "@factorialco/f0-react/icons/app"
import { answersColumns } from "./answersColumns"
import { useAnswersSource } from "./useAnswersSource"

const scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function SurveyBlock() {
  const [selectedScore, setSelectedScore] = useState<number | null>(null)

  return (
    <div className="flex gap-10 items-start">
      {/* Left: survey info */}
      <div className="w-[340px] shrink-0 flex flex-col gap-2">
        <F0Icon icon={Heart} size="md" />
        <F0Heading content="Pesquisa eNPS" variant="heading-large" as="h2" />
        <F0Text content="Pesquisa Interna" variant="description" />
      </div>

      {/* Right: survey card */}
      <F0Box grow display="flex" flexDirection="column" border="default" borderRadius="md">
        {/* Anonymous user header */}
        <F0Box
          display="flex"
          alignItems="center"
          gap="md"
          padding="lg"
          background="secondary"
          borderRadius="md"
        >
          <F0Avatar
            avatar={{
              type: "person",
              firstName: "Anonymous",
              lastName: "user",
            }}
            size="md"
          />
          <F0Text content="Anonymous user" variant="body" />
        </F0Box>

        {/* Questions */}
        <F0Box display="flex" flexDirection="column" gap="xl" padding="lg">
          {/* Question 1: NPS score */}
          <F0Box display="flex" gap="md" alignItems="start">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-f1-background-info">
              <F0Text content="1" variant="label" />
            </div>
            <F0Box display="flex" flexDirection="column" gap="md" grow>
              <F0Text
                content="On a scale of 0 to 10, how likely are you to recommend our organization as a place to work?"
                variant="body"
              />
              <div className="flex">
                <div className="inline-flex rounded-md border border-f1-border">
                  {scores.map((score) => (
                    <button
                      key={score}
                      type="button"
                      onClick={() => setSelectedScore(score)}
                      className={`flex h-10 w-10 items-center justify-center border-r border-f1-border text-sm last:border-r-0 ${
                        selectedScore === score
                          ? "bg-f1-background-selected text-f1-foreground font-semibold"
                          : "bg-f1-background text-f1-foreground hover:bg-f1-background-hover"
                      }`}
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>
            </F0Box>
          </F0Box>

          {/* Question 2: Feedback */}
          <F0Box display="flex" gap="md" alignItems="start">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-f1-background-info">
              <F0Text content="2" variant="label" />
            </div>
            <F0Box display="flex" flexDirection="column" gap="md" grow>
              <F0Text
                content="Thank you for your feedback. Please share the reason behind your score."
                variant="body"
              />
              <textarea
                className="w-full rounded-md border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-selected focus:outline-none"
                rows={5}
                placeholder=""
              />
            </F0Box>
          </F0Box>

          {/* Save button */}
          <F0Box display="flex" justifyContent="end">
            <F0Button
              label="Save"
              variant="outline"
              onClick={() => {}}
            />
          </F0Box>
        </F0Box>
      </F0Box>
    </div>
  )
}

export function AnswersView() {
  const source = useAnswersSource()

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <SurveyBlock />

      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading content="Responses" variant="heading" as="h2" />
        <F0Text
          content="Anonymous eNPS responses. Use filters by type or date range to narrow down results."
          variant="description"
        />
      </F0Box>

      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: { columns: answersColumns },
          },
        ]}
      />
    </F0Box>
  )
}
