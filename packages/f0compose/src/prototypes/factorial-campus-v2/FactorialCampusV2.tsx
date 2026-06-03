import {
  F0Alert,
  F0Box,
  F0Heading,
  F0Icon,
  F0Text,
  StandardLayout,
} from "@factorialco/f0-react"
import {
  ArrowRight,
  Clock,
  ExternalLink,
  Money,
  People,
  Search,
} from "@factorialco/f0-react/icons/app"
import {
  Input,
  Page,
  PageHeader,
} from "@factorialco/f0-react/dist/experimental"
import type { ComponentProps, ComponentType, CSSProperties } from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { BundleDetail } from "./components/BundleDetail"
import { CampusSidebar } from "./components/CampusSidebar"
import { CatalogCard } from "./components/CatalogCard"
import { CourseDetail } from "./components/CourseDetail"
import { TrainingView } from "./components/TrainingView"
import {
  type CatalogItemState,
  bundle,
  campusCopy,
  freeCourse,
} from "./shared/campusData"

export const meta: PrototypeMeta = {
  slug: "factorial-campus-v2",
  title: "Factorial Campus V2",
  description:
    "Admin marketplace inside Talent to discover and roll out Factorial training. Catalog of items-with-state (free/included, purchasable, purchased) built around the EU AI Act Compliance Pack, designed to grow into more categories and providers.",
  category: "Talent",
  module: "factorial-campus",
  audience: ["admin"],
  tags: ["training", "campus", "marketplace", "eu-ai-act", "compliance", "admin"],
  createdAt: "2026-06-02",
}

type F0BoxWithStyle = ComponentProps<typeof F0Box> & { style?: CSSProperties }
const Box = F0Box as ComponentType<F0BoxWithStyle>

// `id` must be one of f0-react PageHeader's known module ids (drives the header
// glyph); the displayed label comes from `name`.
const moduleInfo = {
  id: "company_trainings" as const,
  name: "Factorial Campus",
  href: "/p/factorial-campus-v2",
}

function EmptyHint({ title, description }: { title: string; description: string }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="xs"
      padding="xl"
      borderRadius="lg"
      border="default"
      borderColor="secondary"
    >
      <F0Icon icon={Search} size="md" color="secondary" />
      <F0Text content={title} variant="label" />
      <F0Text content={description} variant="small" />
    </Box>
  )
}

function MarketplaceEntry({
  onOpenBundle,
  onOpenFreeCourse,
  onOpenTraining,
  bundleState,
}: {
  onOpenBundle: () => void
  onOpenFreeCourse: () => void
  onOpenTraining: () => void
  bundleState: CatalogItemState
}) {
  const [activeId, setActiveId] = useState("all")
  const [query, setQuery] = useState("")

  const q = query.trim().toLowerCase()

  // ---- Catalog items: same shape, different state ----
  const freeItem = {
    id: freeCourse.id,
    haystack: `${freeCourse.title} ${freeCourse.audienceLabel} ${bundle.category}`,
    card: {
      title: freeCourse.title,
      description: freeCourse.blurb,
      image: freeCourse.image,
      stateTag: {
        label: campusCopy.catalog.states.included.tag,
        variant: "positive" as const,
      },
      metadata: [
        {
          icon: People,
          property: {
            type: "status" as const,
            label: "Audience",
            value: {
              status: freeCourse.audienceTone,
              label: freeCourse.audienceLabel,
            },
          },
        },
        {
          icon: Clock,
          property: {
            type: "text" as const,
            label: "Duration",
            value: freeCourse.duration,
          },
        },
      ],
      primaryAction: {
        label: campusCopy.catalog.actions.openCourse,
        icon: ArrowRight,
        onClick: onOpenFreeCourse,
      },
    },
  }

  const bundlePurchased = bundleState === "purchased"
  const bundleItem = {
    id: bundle.id,
    haystack: `${bundle.title} ${bundle.category} ${bundle.legal.regulation}`,
    card: {
      title: bundle.title,
      description: bundle.tagline,
      image: bundle.image,
      stacked: true,
      badge: campusCopy.catalog.bundleBadge,
      stateTag: bundlePurchased
        ? {
            label: campusCopy.catalog.states.purchased.tag,
            variant: "positive" as const,
          }
        : {
            label: campusCopy.catalog.states.purchasable.tag,
            variant: "warning" as const,
          },
      metadata: [
        {
          icon: People,
          property: {
            type: "text" as const,
            label: "Roles",
            value: `${bundle.courses.length} role-based courses`,
          },
        },
        ...(bundlePurchased
          ? []
          : [
              {
                icon: Money,
                property: {
                  type: "text" as const,
                  label: "Price",
                  value: `${bundle.pricing.perSeat} ${bundle.pricing.unit} / mo`,
                },
              },
            ]),
      ],
      primaryAction: bundlePurchased
        ? {
            label: campusCopy.catalog.actions.viewInTraining,
            icon: ExternalLink,
            onClick: onOpenTraining,
          }
        : {
            label: campusCopy.catalog.actions.viewBundle,
            icon: ArrowRight,
            onClick: onOpenBundle,
          },
    },
  }

  const items = [freeItem, bundleItem]
  const inComplianceScope = activeId === "all" || activeId === "compliance"
  const visible = items.filter((item) => {
    if (!inComplianceScope) return false
    return q === "" || item.haystack.toLowerCase().includes(q)
  })

  return (
    <Page header={<PageHeader module={moduleInfo} />}>
      <StandardLayout>
        <Box
          display="flex"
          gap="2xl"
          width="full"
          style={{ maxWidth: "88rem", marginInline: "auto" }}
        >
          <CampusSidebar activeId={activeId} onSelect={setActiveId} />

          <Box grow display="flex" flexDirection="column" gap="xl" minWidth="0">
            {/* Screen title */}
            <Box display="flex" flexDirection="column" gap="xs">
              <F0Heading
                content={campusCopy.pageTitle}
                variant="heading-large"
                as="h1"
              />
              <F0Text content={campusCopy.pageSubtitle} variant="description" />
            </Box>

            {/* Search */}
            <Input
              label={campusCopy.searchPlaceholder}
              hideLabel
              value={query}
              onChange={(value: string) => setQuery(value)}
              placeholder={campusCopy.searchPlaceholder}
            />

            {/* Why this matters — the EU AI Act deadline that drives the catalog. */}
            <F0Alert
              variant="info"
              title={campusCopy.legalCallout.title}
              description={campusCopy.legalCallout.description}
            />

            {visible.length > 0 ? (
              <Box
                display="grid"
                columns="3"
                gap="lg"
                alignItems="stretch"
                paddingTop="md"
              >
                {visible.map((item) => (
                  <CatalogCard key={item.id} {...item.card} />
                ))}
              </Box>
            ) : (
              <EmptyHint
                title="No items match your search"
                description="Try a different term, or browse the Compliance category."
              />
            )}
          </Box>
        </Box>
      </StandardLayout>
    </Page>
  )
}

export default function FactorialCampusV2() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [saved, setSaved] = useState(false)
  const [purchased, setPurchased] = useState(false)
  const view = searchParams.get("view")

  const bundleState: CatalogItemState = purchased ? "purchased" : "purchasable"
  const openTraining = () => setSearchParams({ view: "training" })

  if (view === "training") {
    return (
      <TrainingView
        onBack={() => setSearchParams({})}
        onViewFreeCourse={() =>
          setSearchParams({ view: "course", course: freeCourse.id })
        }
      />
    )
  }

  if (view === "course") {
    const courseId = searchParams.get("course")
    const fromBundle = bundle.courses.find((c) => c.id === courseId)
    const course =
      fromBundle ?? (courseId === freeCourse.id ? freeCourse : undefined)
    if (course) {
      return (
        <CourseDetail
          bundle={fromBundle ? bundle : undefined}
          course={course}
          onBack={() =>
            fromBundle
              ? setSearchParams({ view: "bundle" })
              : setSearchParams({})
          }
        />
      )
    }
  }

  if (view === "bundle") {
    return (
      <BundleDetail
        bundle={bundle}
        saved={saved}
        onToggleSave={() => setSaved((prev) => !prev)}
        purchased={purchased}
        onPurchase={() => setPurchased(true)}
        onBack={() => setSearchParams({})}
        onViewCourse={(courseId) =>
          setSearchParams({ view: "course", course: courseId })
        }
        onOpenTraining={openTraining}
      />
    )
  }

  return (
    <MarketplaceEntry
      onOpenBundle={() => setSearchParams({ view: "bundle" })}
      onOpenFreeCourse={() =>
        setSearchParams({ view: "course", course: freeCourse.id })
      }
      onOpenTraining={openTraining}
      bundleState={bundleState}
    />
  )
}
