import {
  F0Alert,
  F0Box,
  F0Heading,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"

import {
  findCategoryName,
  findCompetencyName,
  type Training,
} from "@/fixtures"

interface Props {
  training: Training
  onEditEnrollmentSettings?: () => void
}

export function OverviewTab({ training, onEditEnrollmentSettings }: Props) {
  return (
    <F0Box display="flex" gap="xl" padding="lg">
      {/* Left column — main content */}
      <F0Box display="flex" flexDirection="column" gap="lg" grow={true}>
        {/* Alert banner */}
        <F0Alert
          variant="warning"
          title="Completion criteria not met"
          description="Knowledge test not sent"
          link={{ label: "Go to completion settings", href: "#" }}
        />

        {/* Objectives */}
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Heading content="Objectives" variant="heading" as="h3" />
          <F0Text content={training.description} variant="body" />
        </F0Box>

        {/* Description (numbered list) */}
        {training.objectives && (
          <F0Box display="flex" flexDirection="column" gap="sm">
            <F0Heading content="Description" variant="heading" as="h3" />
            <F0Box display="flex" flexDirection="column" gap="xs">
              {training.objectives.split("\n").map((line, i) => (
                <F0Text
                  key={i}
                  content={`${i + 1}. ${line}`}
                  variant="body"
                />
              ))}
            </F0Box>
          </F0Box>
        )}

        {/* Competencies */}
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Text content="Competencies" variant="label" />
          {training.competencyIds.length === 0 ? (
            <F0Text content="No competencies assigned" variant="description" />
          ) : (
            <F0Box display="flex" gap="sm">
              {training.competencyIds.map((id) => (
                <F0TagStatus
                  key={id}
                  text={findCompetencyName(id)}
                  variant="neutral"
                />
              ))}
            </F0Box>
          )}
        </F0Box>

        {/* Tags / Categories */}
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Text content="Tags" variant="label" />
          {training.categoryIds.length === 0 ? (
            <F0Text content="None" variant="description" />
          ) : (
            <F0Box display="flex" gap="sm">
              {training.categoryIds.map((id) => (
                <F0TagStatus
                  key={id}
                  text={findCategoryName(id)}
                  variant="neutral"
                />
              ))}
            </F0Box>
          )}
        </F0Box>
      </F0Box>

      {/* Right column — sidebar */}
      <F0Box
        display="flex"
        flexDirection="column"
        gap="lg"
        shrink={false}
        width="1/4"
      >
        {/* Course thumbnail */}
        <F0Box
          display="flex"
          borderRadius="sm"
          overflow="hidden"
          height="xl"
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=320&fit=crop"
            alt="Course thumbnail"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </F0Box>

        {/* Completion settings */}
        {training.completionCriteria && (
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text content="Completion settings" variant="label" />
            <F0Text
              content={[
                training.completionCriteria.completeLmsModules &&
                  "LMS modules",
                training.completionCriteria.attendSessions &&
                  `Attend ${training.completionCriteria.minimumAttendance ?? "100%"} of sessions`,
                training.completionCriteria.passKnowledgeTest &&
                  "pass Knowledge test",
              ]
                .filter(Boolean)
                .join(", ")}
              variant="body"
            />
          </F0Box>
        )}

        {/* Enrollment settings */}
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Box display="flex" alignItems="center" gap="sm">
            <F0Text content="Enrollment settings" variant="description" />
            <F0TagStatus text="NEW" variant="info" />
          </F0Box>
          <F0Text
            content={
              training.courseType === "scheduled"
                ? "Scheduled editions"
                : "Self-paced"
            }
            variant="body"
          />
          <F0Text
            content={
              training.groupAssignment === "waitlist"
                ? "Waitlist"
                : "Next available group"
            }
            variant="body"
          />
          {onEditEnrollmentSettings && (
            <F0Box display="flex" padding="xs">
              <button
                onClick={onEditEnrollmentSettings}
                className="rounded-full border border-solid border-f1-border-secondary px-3 py-1 text-sm text-f1-foreground hover:bg-f1-background-secondary"
              >
                Edit settings
              </button>
            </F0Box>
          )}
        </F0Box>

        {/* Course validity */}
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Course validity" variant="label" />
          <F0Text
            content={
              typeof training.validity === "string"
                ? training.validity
                : training.validity?.enabled
                  ? `${training.validity.months ?? 12} months`
                  : "Not renewable"
            }
            variant="body"
          />
        </F0Box>

        {/* Subsidized by FUNDAE */}
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Subsidized by FUNDAE" variant="label" />
          <F0Text content="Yes" variant="body" />
        </F0Box>

        {/* Workflow */}
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Workflow" variant="label" />
          <F0Text content="-" variant="body" />
        </F0Box>

        {/* Creation year */}
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Creation year" variant="label" />
          <F0Text content={String(training.year)} variant="body" />
        </F0Box>

        {/* Type */}
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Type" variant="label" />
          <F0Box display="flex">
            <F0TagStatus text={training.format} variant="neutral" />
          </F0Box>
        </F0Box>

        {/* Total cost */}
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Total cost" variant="label" />
          <F0Text
            content={`${training.classes.reduce((sum, c) => sum + (c.cost ?? 0), 0).toLocaleString()} €`}
            variant="body"
          />
        </F0Box>

        {/* Subsidiary cost */}
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Subsidiary cost" variant="label" />
          <F0Text content="150 €" variant="body" />
        </F0Box>

        {/* Tags */}
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Text content="Tags" variant="label" />
          {training.categoryIds.length === 0 ? (
            <F0Text content="None" variant="description" />
          ) : (
            <F0Box display="flex" gap="sm" flexWrap="wrap">
              {training.categoryIds.map((id) => (
                <F0TagStatus
                  key={id}
                  text={findCategoryName(id)}
                  variant="neutral"
                />
              ))}
            </F0Box>
          )}
        </F0Box>
      </F0Box>
    </F0Box>
  )
}
