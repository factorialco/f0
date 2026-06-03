import {
  F0Box,
  F0Button,
  F0Heading,
  F0TagStatus,
  F0Text,
  StandardLayout,
} from "@factorialco/f0-react"
import { ArrowLeft, Sparkles } from "@factorialco/f0-react/icons/app"
import {
  OneDataCollection,
  Page,
  PageHeader,
  Tabs,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import type { ComponentProps, ComponentType, CSSProperties } from "react"

import { trainings } from "@/fixtures"

type F0BoxWithStyle = ComponentProps<typeof F0Box> & { style?: CSSProperties }
const Box = F0Box as ComponentType<F0BoxWithStyle>

type CatalogueCourse = {
  id: string
  name: string
  code: string
  participants: number
  expired: number
  status: "published" | "draft"
  mandatory: boolean
  catalogue: "factorial-campus" | null
}

// The three new Factorial Campus courses — they sit at the top of the list.
const factorialCampusCourses: CatalogueCourse[] = [
  {
    id: "fc-es",
    name: "Cumple con la EU AI Act en 8 pasos",
    code: "—",
    participants: 18,
    expired: 0,
    status: "published",
    mandatory: false,
    catalogue: "factorial-campus",
  },
  {
    id: "fc-pt",
    name: "Cumpre o EU AI Act em 8 passos",
    code: "—",
    participants: 8,
    expired: 0,
    status: "published",
    mandatory: false,
    catalogue: "factorial-campus",
  },
  {
    id: "fc-it",
    name: "Rispetta l'EU AI Act in 8 passaggi",
    code: "—",
    participants: 1,
    expired: 0,
    status: "published",
    mandatory: false,
    catalogue: "factorial-campus",
  },
]

// The courses the company already had — pulled from the shared fixtures.
const existingCourses: CatalogueCourse[] = trainings.map((t) => ({
  id: t.id,
  name: t.name,
  code: t.code,
  participants: t.participantCount,
  expired: t.expiredParticipantCount,
  status: t.status === "draft" ? "draft" : "published",
  mandatory: t.isMandatory,
  catalogue: null,
}))

// Factorial Campus courses first, then everything that was already there.
const courses: CatalogueCourse[] = [...factorialCampusCourses, ...existingCourses]

const columns = [
  { id: "name", label: "Course", render: (c: CatalogueCourse) => c.name },
  { id: "code", label: "Internal code", render: (c: CatalogueCourse) => c.code },
  {
    id: "participants",
    label: "Participants",
    render: (c: CatalogueCourse) => c.participants,
  },
  {
    id: "expired",
    label: "Validity expired",
    render: (c: CatalogueCourse) => ({
      type: "status" as const,
      value: {
        status: c.expired > 0 ? ("warning" as const) : ("positive" as const),
        label: `${c.expired} people`,
      },
    }),
  },
  {
    id: "catalogue",
    label: "Catalogue",
    render: (c: CatalogueCourse) =>
      c.catalogue === "factorial-campus"
        ? {
            type: "company" as const,
            value: {
              name: "Factorial campus",
              src: "/campus/factorial-campus-logo.svg",
            },
          }
        : "—",
  },
  {
    id: "status",
    label: "Status",
    render: (c: CatalogueCourse) => ({
      type: "status" as const,
      value: {
        status: c.status === "published" ? ("positive" as const) : ("neutral" as const),
        label: c.status === "published" ? "Published" : "Draft",
      },
    }),
  },
  {
    id: "requirement",
    label: "Requirement",
    render: (c: CatalogueCourse) => ({
      type: "tag" as const,
      value: { label: c.mandatory ? "Mandatory" : "Not mandatory" },
    }),
  },
  { id: "categories", label: "Categories", render: () => "—" },
]

function useCatalogueSource() {
  return useDataCollectionSource<CatalogueCourse>(
    {
      search: { enabled: true, sync: true },
      filters: {
        catalogue: {
          type: "in",
          label: "Catalogue",
          options: { options: [{ value: "factorial-campus", label: "Factorial campus" }] },
        },
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "published", label: "Published" },
              { value: "draft", label: "Draft" },
            ],
          },
        },
        expiration: {
          type: "in",
          label: "Validity expired",
          options: {
            options: [{ value: "expired", label: "With expired participants" }],
          },
        },
      },
      presets: [
        { label: "All courses", filter: {} },
        { label: "Validity expired", filter: { expiration: ["expired"] } },
        { label: "Factorial campus", filter: { catalogue: ["factorial-campus"] } },
      ],
      primaryActions: () => ({ label: "New course", onClick: () => {} }),
      dataAdapter: {
        paginationType: "pages",
        perPage: 30,
        fetchData: ({ filters, search }) => {
          const wantStatus = Array.isArray(filters?.status) ? (filters.status as string[]) : []
          const wantExpired = Array.isArray(filters?.expiration)
            ? (filters.expiration as string[])
            : []
          const wantCatalogue = Array.isArray(filters?.catalogue)
            ? (filters.catalogue as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()
          const records = courses
            .filter((c) => (wantStatus.length === 0 ? true : wantStatus.includes(c.status)))
            .filter((c) => (wantExpired.length === 0 ? true : c.expired > 0))
            .filter((c) =>
              wantCatalogue.length === 0 ? true : wantCatalogue.includes(c.catalogue ?? "")
            )
            .filter((c) => (term === "" ? true : c.name.toLowerCase().includes(term)))
          return {
            type: "pages" as const,
            records,
            total: records.length,
            perPage: 30,
            currentPage: 1,
            pagesCount: 1,
          }
        },
      },
    },
    []
  )
}

const moduleTabs = [
  { id: "courses", label: "Courses" },
  { id: "requests", label: "Requests" },
  { id: "budgets", label: "Budgets" },
  { id: "insights", label: "Insights" },
]

const subTabs = [
  { id: "all", label: "All courses" },
  { id: "categories", label: "Categories" },
  { id: "axes", label: "Axes" },
  { id: "survey-templates", label: "Survey templates" },
]

/**
 * The Training module "Courses" screen after purchase — the Factorial Campus
 * courses show in the list (Catalogue = "Factorial campus", with a matching
 * preset), beneath the EU AI Act free-course promo banner.
 */
export function TrainingView({
  onBack,
  onViewFreeCourse,
}: {
  onBack: () => void
  onViewFreeCourse: () => void
}) {
  const source = useCatalogueSource()
  const tabs = moduleTabs.map((t) => ({ ...t, onClick: () => {} }))
  const secondary = subTabs.map((t) => ({ ...t, onClick: () => {} }))

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{ id: "company_trainings", name: "Training", href: "/p/factorial-campus-v2" }}
            actions={[
              { label: "Back to Factorial Campus", icon: ArrowLeft, onClick: onBack },
            ]}
          />
          <Tabs key="courses" tabs={tabs} activeTabId="courses" />
          <Tabs secondary key="all" tabs={secondary} activeTabId="all" />
        </>
      }
    >
      <StandardLayout>
        <Box display="flex" flexDirection="column" gap="lg" width="full">
          {/* Promo banner — EU AI Act free course */}
          <Box
            display="flex"
            gap="lg"
            alignItems="center"
            padding="md"
            borderRadius="xl"
            border="default"
            borderColor="secondary"
            background="primary"
          >
            <Box
              shrink={false}
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              style={{
                width: "16rem",
                aspectRatio: "16 / 9",
                backgroundImage: "url(/campus/ai-literacy-all-employees.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box position="absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
                <F0TagStatus text="EU AI Act Essentials" variant="neutral" />
              </Box>
            </Box>

            <Box grow minWidth="0" display="flex" flexDirection="column" gap="sm">
              <F0Heading
                content="EU AI Act: train your team before August 2nd or get fined"
                variant="heading"
                as="h2"
              />
              <F0Text
                content="Give your team the AI literacy training required under Article 4. Built-in courses and an automated audit trail keep compliance covered without extra admin work."
                variant="body"
              />
              <Box display="flex">
                <F0Button
                  label="View free course"
                  icon={Sparkles}
                  variant="outline"
                  onClick={onViewFreeCourse}
                />
              </Box>
            </Box>
          </Box>

          {/* Courses table */}
          <OneDataCollection
            source={source}
            visualizations={[{ type: "table", options: { columns } }]}
          />
        </Box>
      </StandardLayout>
    </Page>
  )
}
