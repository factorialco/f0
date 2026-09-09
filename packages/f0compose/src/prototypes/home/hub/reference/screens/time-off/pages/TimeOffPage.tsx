import {
  F0Box,
  F0Button,
  F0Heading,
  F0TagRaw,
  F0Text,
  type IconType,
  StandardLayout,
} from "@factorialco/f0-react"
import { Page } from "@factorialco/f0-react/dist/experimental"
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  People,
  Plus,
} from "@factorialco/f0-react/icons/app"

import { PageHeader } from "@/prototypes/home/hub/reference/framework/components/EmbeddedPageHeader"

import { PolicyCard } from "../components/PolicyCard"
import { YearCalendar } from "../components/YearCalendar"
import { assignmentFrom, policies } from "../mocks/timeOff"

/** Section heading with an icon tag, a title and a one-line caption. */
function SectionHeader({
  icon,
  title,
  caption,
}: {
  icon: IconType
  title: string
  caption: string
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0TagRaw onlyIcon icon={icon} text={title} />
      <F0Heading content={title} variant="heading" as="h2" />
      <F0Text content={caption} variant="description" />
    </F0Box>
  )
}

/**
 * The employee's Time off detail page. Left rail: current policy assignment +
 * the two policy cards, then past time off. Right rail: the year-at-a-glance
 * calendar and the allowance adjustments block. Mirrors the reference screen.
 */
export function TimeOffPage() {
  return (
    <Page
      embedded
      header={
        <PageHeader
          module={{ id: "timeoff", name: "Time off", href: "/m/time-off" }}
          actions={[]}
        />
      }
    >
      <StandardLayout>
        <F0Box
          display="flex"
          flexDirection="column"
          lg={{ flexDirection: "row" }}
          gap="2xl"
        >
          {/* Left rail */}
          <F0Box display="flex" flexDirection="column" gap="2xl" grow>
            <F0Box display="flex" flexDirection="column" gap="md">
              <SectionHeader
                icon={People}
                title="Current policy assignment"
                caption={assignmentFrom}
              />
              <F0Box display="flex">
                <F0Button
                  label="View all policy assignments"
                  icon={ChevronRight}
                  variant="outline"
                  onClick={() => {}}
                />
              </F0Box>
              <F0Box display="flex" flexDirection="column" gap="md">
                {policies.map((policy) => (
                  <PolicyCard key={policy.name} policy={policy} />
                ))}
              </F0Box>
            </F0Box>

            <F0Box display="flex" flexDirection="column" gap="md">
              <SectionHeader
                icon={Calendar}
                title="Past time off"
                caption="Your past absences."
              />
              <F0Text content="No past absences this year" variant="body" />
              <F0Box display="flex">
                <F0Button
                  label="Show past years' absences"
                  icon={ChevronDown}
                  variant="ghost"
                  onClick={() => {}}
                />
              </F0Box>
            </F0Box>
          </F0Box>

          {/* Right rail */}
          {/* Boolean `grow`, not `grow={2}`: F0Box only knows on/off, and the
              2 was already rendering as plain grow — this states what shows. */}
          <F0Box display="flex" flexDirection="column" gap="2xl" grow>
            <YearCalendar />

            <F0Box display="flex" flexDirection="column" gap="md">
              <F0Heading
                content="Time off allowance adjustments"
                variant="heading"
                as="h2"
              />
              <F0Text
                content="Add or subtract hours or days from this person's time off allowance."
                variant="description"
              />
              <F0Box display="flex">
                <F0Button
                  label="Add adjustment"
                  icon={Plus}
                  variant="outline"
                  onClick={() => {}}
                />
              </F0Box>
            </F0Box>
          </F0Box>
        </F0Box>
      </StandardLayout>
    </Page>
  )
}
