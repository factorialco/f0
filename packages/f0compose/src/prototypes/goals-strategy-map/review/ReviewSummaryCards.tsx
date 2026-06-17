import {
  F0Box,
  F0Button,
  F0Heading,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { Bell } from "@factorialco/f0-react/icons/app"

import type { ReviewDetail } from "./reviewDetailData"

/** Closest F0Box width fraction token to a 0–100 percentage. */
const FRACTIONS: [number, "0" | "1/6" | "1/5" | "1/4" | "1/3" | "2/5" | "1/2" | "3/5" | "2/3" | "3/4" | "4/5" | "5/6" | "full"][] = [
  [0, "0"],
  [16.7, "1/6"],
  [20, "1/5"],
  [25, "1/4"],
  [33.3, "1/3"],
  [40, "2/5"],
  [50, "1/2"],
  [60, "3/5"],
  [66.7, "2/3"],
  [75, "3/4"],
  [80, "4/5"],
  [83.3, "5/6"],
  [100, "full"],
]

function pctToFraction(pct: number) {
  let best = FRACTIONS[0]
  for (const f of FRACTIONS) {
    if (Math.abs(f[0] - pct) < Math.abs(best[0] - pct)) best = f
  }
  return best[1]
}

function Card({ children }: { children: React.ReactNode }) {
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
      {children}
    </F0Box>
  )
}

export function ReviewSummaryCards({ detail }: { detail: ReviewDetail }) {
  return (
    <F0Box
      display="grid"
      columns="1"
      md={{ columns: "3" }}
      gap="lg"
    >
      {/* Participation rate */}
      <Card>
        <F0Heading content="Participation rate" variant="heading" as="h3" />
        <F0Box display="flex" alignItems="center" gap="md">
          <F0Heading
            content={`${detail.participationPct}%`}
            variant="heading-large"
            as="h2"
          />
          <F0Box
            grow
            height="2"
            borderRadius="full"
            background="secondary"
            display="flex"
          >
            <F0Box
              height="2"
              width={pctToFraction(detail.participationPct)}
              borderRadius="full"
              background="positive"
            />
          </F0Box>
          <F0Text
            content={`${detail.participationDone}/${detail.participationTotal}`}
            variant="body"
          />
        </F0Box>
        <F0Box display="flex">
          <F0Button
            label="Send reminders"
            variant="outline"
            icon={Bell}
            onClick={() => {}}
          />
        </F0Box>
      </Card>

      {/* Reviews */}
      <Card>
        <F0Box display="flex" alignItems="center" gap="sm">
          <F0Heading content="Reviews" variant="heading" as="h3" />
          {detail.reviewsPending > 0 && (
            <F0TagStatus
              text={`${detail.reviewsPending} pending`}
              variant="warning"
            />
          )}
        </F0Box>
        <F0Text content="Complete and check your reviews." variant="description" />
        <F0Box display="flex">
          <F0Button label="Start" variant="outline" onClick={() => {}} />
        </F0Box>
      </Card>

      {/* Action plans */}
      <Card>
        <F0Box display="flex" alignItems="center" gap="sm">
          <F0Heading content="Action plans" variant="heading" as="h3" />
          {detail.actionPlansPending > 0 && (
            <F0TagStatus
              text={`${detail.actionPlansPending} pending`}
              variant="warning"
            />
          )}
        </F0Box>
        <F0Text
          content="Compare answers and create action items to help achieve shared goals."
          variant="description"
        />
        <F0Box display="flex">
          <F0Button label="Start" variant="outline" onClick={() => {}} />
        </F0Box>
      </Card>
    </F0Box>
  )
}
