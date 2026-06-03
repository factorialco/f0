import {
  F0Box,
  F0Heading,
  F0Icon,
  F0TagStatus,
  F0Text,
  StandardLayout,
} from "@factorialco/f0-react"
import { Check, Clock, Cross, People } from "@factorialco/f0-react/icons/app"
import {
  Page,
  PageHeader,
  ResourceHeader,
} from "@factorialco/f0-react/dist/experimental"
import type { ComponentProps, ComponentType, CSSProperties } from "react"

import {
  type CampusBundle,
  type CampusCourse,
  campusCopy,
} from "../shared/campusData"

// F0Box drops `style` from its public props; the cast opts it back in for the
// two layout-only needs the variants can't express (hero background image,
// content max-width cap).
type F0BoxWithStyle = ComponentProps<typeof F0Box> & { style?: CSSProperties }
const Box = F0Box as ComponentType<F0BoxWithStyle>

/** Section block — a heading + its content, stacked. */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box display="flex" flexDirection="column" gap="sm">
      <F0Heading content={title} variant="heading" as="h2" />
      {children}
    </Box>
  )
}

/** A checked bullet list (objectives, syllabus). */
function CheckedList({ items }: { items: string[] }) {
  return (
    <Box display="flex" flexDirection="column" gap="sm">
      {items.map((item) => (
        <Box key={item} display="flex" alignItems="start" gap="sm">
          <F0Icon icon={Check} size="sm" color="positive" />
          <F0Text content={item} variant="body" />
        </Box>
      ))}
    </Box>
  )
}

/**
 * Per-course detail — a full-page layout (not boxed in a card). A hero image
 * sits below the resource header, followed by the description, learning
 * objectives, competencies, and the course content (syllabus). Format and
 * languages close out the page.
 */
export function CourseDetail({
  bundle,
  course,
  onBack,
}: {
  /** Present when the course is reached from a bundle; absent for a standalone (free) course. */
  bundle?: CampusBundle
  course: CampusCourse
  onBack: () => void
}) {
  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "company_trainings",
              name: "Factorial Campus",
              href: "/p/factorial-campus-v2",
            }}
            breadcrumbs={
              bundle
                ? [
                    { id: "bundle", label: bundle.title, onClick: onBack },
                    { id: "course", label: course.title },
                  ]
                : [{ id: "course", label: course.title }]
            }
          />
          <ResourceHeader
            avatar={{ type: "icon", icon: course.icon }}
            title={course.title}
            description={course.blurb}
            secondaryActions={[
              {
                label: bundle
                  ? campusCopy.detail.backToBundle
                  : campusCopy.detail.backToCampus,
                icon: Cross,
                onClick: onBack,
              },
            ]}
            metadata={[
              {
                label: "Audience",
                value: {
                  type: "status",
                  label: course.audienceLabel,
                  variant: "info",
                },
              },
              {
                label: "Duration",
                value: { type: "text", content: course.duration },
              },
            ]}
          />
        </>
      }
    >
      <StandardLayout>
        <Box
          display="flex"
          flexDirection="column"
          gap="2xl"
          width="full"
          style={{ maxWidth: "56rem" }}
        >
          {/* Hero image */}
          <Box
            width="full"
            borderRadius="xl"
            style={{
              aspectRatio: "16 / 7",
              backgroundImage: `url(${course.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* About this course */}
          <Section title={campusCopy.detail.descriptionLabel}>
            <F0Text content={course.description} variant="body" />
          </Section>

          {/* Learning objectives */}
          <Section title={campusCopy.detail.objectivesLabel}>
            <CheckedList items={course.objectives} />
          </Section>

          {/* Competencies */}
          <Section title={campusCopy.detail.competenciesLabel}>
            <Box display="flex" gap="sm" flexWrap="wrap">
              {course.competencies.map((competency) => (
                <F0TagStatus
                  key={competency}
                  text={competency}
                  variant="neutral"
                />
              ))}
            </Box>
          </Section>

          {/* Course content (syllabus) */}
          <Section title={campusCopy.detail.contentLabel}>
            <CheckedList items={course.syllabus} />
          </Section>

          {/* Format + languages */}
          <Box
            display="flex"
            gap="2xl"
            flexWrap="wrap"
            borderTop="default"
            borderColor="secondary"
            paddingTop="lg"
          >
            <Box display="flex" alignItems="start" gap="sm">
              <F0Icon icon={Clock} size="sm" color="secondary" />
              <Box display="flex" flexDirection="column" gap="none">
                <F0Text content={campusCopy.detail.formatLabel} variant="small" />
                <F0Text content={course.format} variant="body" />
              </Box>
            </Box>
            <Box display="flex" alignItems="start" gap="sm">
              <F0Icon icon={People} size="sm" color="secondary" />
              <Box display="flex" flexDirection="column" gap="none">
                <F0Text
                  content={campusCopy.detail.languagesLabel}
                  variant="small"
                />
                <F0Text content={course.languages.join(", ")} variant="body" />
              </Box>
            </Box>
          </Box>
        </Box>
      </StandardLayout>
    </Page>
  )
}
