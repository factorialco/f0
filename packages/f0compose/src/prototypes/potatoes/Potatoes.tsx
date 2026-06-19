import { F0Box, F0Heading, StandardLayout } from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
  ResourceHeader,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  Cross,
  Crown,
  List,
  ShoppingCart,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import { useCallback, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { applySort } from "@/lib/applySort"

import type { PrototypeMeta } from "../types"

import { AddVarietyForm, type NewPotatoVariety } from "./shared/AddVarietyForm"
import { PotatoKpi } from "./shared/PotatoKpi"

/**
 * Toy prototype: a simple OneDataCollection of potato varieties. It exists to
 * showcase how a single-tab, single-table prototype looks with the canonical
 * page shell, presets, search, sort and pagination — not because Factorial
 * has a potato module. Fixture is inlined deliberately (not in @/fixtures)
 * since the domain is playful and has no reuse value across prototypes.
 */

type PotatoVariety = "floury" | "firm" | "all-purpose"

type Potato = {
  id: string
  name: string
  variety: PotatoVariety
  origin: string
  bestUses: string[]
  averageWeight: number // grams
  stock: number // kg in inventory
}

const varietyLabel: Record<PotatoVariety, string> = {
  floury: "Floury",
  firm: "Firm",
  "all-purpose": "All-purpose",
}

const varietyColor: Record<PotatoVariety, "camel" | "viridian" | "yellow"> = {
  floury: "camel",
  firm: "viridian",
  "all-purpose": "yellow",
}

const seedPotatoes: Potato[] = [
  {
    id: "p-monalisa",
    name: "Monalisa",
    variety: "all-purpose",
    origin: "Spain",
    bestUses: ["Boil", "Roast", "Stew"],
    averageWeight: 180,
    stock: 420,
  },
  {
    id: "p-kennebec",
    name: "Kennebec",
    variety: "all-purpose",
    origin: "Galicia",
    bestUses: ["Fry", "Tortilla"],
    averageWeight: 220,
    stock: 510,
  },
  {
    id: "p-agria",
    name: "Agria",
    variety: "floury",
    origin: "Netherlands",
    bestUses: ["Fry", "Mash"],
    averageWeight: 240,
    stock: 380,
  },
  {
    id: "p-ratte",
    name: "Ratte",
    variety: "firm",
    origin: "France",
    bestUses: ["Salad", "Steam"],
    averageWeight: 60,
    stock: 95,
  },
  {
    id: "p-yukon-gold",
    name: "Yukon Gold",
    variety: "all-purpose",
    origin: "Canada",
    bestUses: ["Mash", "Roast"],
    averageWeight: 200,
    stock: 260,
  },
  {
    id: "p-russet",
    name: "Russet",
    variety: "floury",
    origin: "USA",
    bestUses: ["Bake", "Fry", "Mash"],
    averageWeight: 280,
    stock: 640,
  },
  {
    id: "p-charlotte",
    name: "Charlotte",
    variety: "firm",
    origin: "France",
    bestUses: ["Salad", "Boil"],
    averageWeight: 90,
    stock: 140,
  },
  {
    id: "p-vitelotte",
    name: "Vitelotte",
    variety: "firm",
    origin: "Peru",
    bestUses: ["Salad", "Roast"],
    averageWeight: 70,
    stock: 45,
  },
  {
    id: "p-desiree",
    name: "Desirée",
    variety: "all-purpose",
    origin: "Netherlands",
    bestUses: ["Stew", "Roast", "Mash"],
    averageWeight: 210,
    stock: 320,
  },
  {
    id: "p-marabel",
    name: "Marabel",
    variety: "firm",
    origin: "Germany",
    bestUses: ["Boil", "Steam"],
    averageWeight: 130,
    stock: 175,
  },
  {
    id: "p-bintje",
    name: "Bintje",
    variety: "floury",
    origin: "Netherlands",
    bestUses: ["Fry", "Mash"],
    averageWeight: 230,
    stock: 290,
  },
  {
    id: "p-pink-fir",
    name: "Pink Fir Apple",
    variety: "firm",
    origin: "United Kingdom",
    bestUses: ["Salad", "Steam"],
    averageWeight: 80,
    stock: 60,
  },
  {
    id: "p-cara",
    name: "Cara",
    variety: "all-purpose",
    origin: "Ireland",
    bestUses: ["Boil", "Bake"],
    averageWeight: 250,
    stock: 410,
  },
  {
    id: "p-spunta",
    name: "Spunta",
    variety: "all-purpose",
    origin: "Italy",
    bestUses: ["Fry", "Roast"],
    averageWeight: 270,
    stock: 480,
  },
  {
    id: "p-jersey-royal",
    name: "Jersey Royal",
    variety: "firm",
    origin: "Jersey",
    bestUses: ["Boil", "Steam", "Salad"],
    averageWeight: 65,
    stock: 110,
  },
  {
    id: "p-maris-piper",
    name: "Maris Piper",
    variety: "floury",
    origin: "United Kingdom",
    bestUses: ["Fry", "Mash", "Roast"],
    averageWeight: 260,
    stock: 580,
  },
  {
    id: "p-fingerling",
    name: "Fingerling",
    variety: "firm",
    origin: "USA",
    bestUses: ["Roast", "Salad"],
    averageWeight: 55,
    stock: 75,
  },
  {
    id: "p-king-edward",
    name: "King Edward",
    variety: "floury",
    origin: "United Kingdom",
    bestUses: ["Bake", "Mash", "Roast"],
    averageWeight: 270,
    stock: 350,
  },
]

/**
 * KPIs derived from the current potato list. Computed inside the
 * component so they stay in sync as the AI / user adds new varieties
 * via the co-creation form.
 */
function computeKpis(rows: Potato[]) {
  const totalVarieties = rows.length
  const totalStock = rows.reduce((sum, p) => sum + p.stock, 0)
  const avgWeight = rows.length
    ? Math.round(
        rows.reduce((sum, p) => sum + p.averageWeight, 0) / rows.length
      )
    : 0

  const heaviest = rows.reduce<Potato | null>(
    (top, p) => (top === null || p.averageWeight > top.averageWeight ? p : top),
    null
  )

  const mostVersatile = rows.reduce<Potato | null>(
    (top, p) =>
      top === null || p.bestUses.length > top.bestUses.length ? p : top,
    null
  )

  const allUses = rows.flatMap((p) => p.bestUses)
  const useCounts = allUses.reduce<Record<string, number>>((acc, use) => {
    acc[use] = (acc[use] ?? 0) + 1
    return acc
  }, {})
  const topUseEntry = Object.entries(useCounts).sort(([, a], [, b]) => b - a)[0]
  const topUse = topUseEntry
    ? { use: topUseEntry[0], count: topUseEntry[1] }
    : null

  return {
    totalVarieties,
    totalStock,
    avgWeight,
    heaviest,
    mostVersatile,
    topUse,
  }
}

export const meta: PrototypeMeta = {
  slug: "potatoes",
  title: "Potatoes",
  description:
    "Toy catalog of potato varieties — single OneDataCollection table with variety presets (Floury / Firm / All-purpose), search by name, sortable columns, and page-based pagination.",
  category: "Other",
  module: "documents",
  audience: ["admin"],
  tags: ["demo", "table", "playground"],
  createdAt: "2026-05-06",
}

export default function Potatoes() {
  const [potatoes, setPotatoes] = useState<Potato[]>(seedPotatoes)
  const [searchParams, setSearchParams] = useSearchParams()
  // The view lives in the URL so:
  //  - the auto-prepended "Potatoes" breadcrumb (which links to
  //    `/p/potatoes`, with no query) naturally returns the user to the
  //    list view,
  //  - browser back/forward and refresh keep the user where they were.
  const view = searchParams.get("view") === "create" ? "create" : "list"
  const goToCreate = () => setSearchParams({ view: "create" })
  const goToList = () => setSearchParams({})
  const kpis = useMemo(() => computeKpis(potatoes), [potatoes])

  const handleCreate = useCallback(
    (data: NewPotatoVariety) => {
      setPotatoes((prev) => [
        {
          id: `p-${data.name.toLowerCase().replace(/\s+/g, "-")}-${prev.length + 1}`,
          name: data.name,
          variety: data.variety,
          origin: data.origin,
          // Capitalize for consistency with seed data ("Boil", "Fry", …).
          bestUses: data.bestUses.map(
            (u) => u.charAt(0).toUpperCase() + u.slice(1)
          ),
          averageWeight: data.averageWeight,
          stock: data.stock,
        },
        ...prev,
      ])
      // Return to the catalog so the new row is visible at the top.
      setSearchParams({})
    },
    [setSearchParams]
  )

  const source = useDataCollectionSource<Potato>(
    {
      search: { enabled: true, sync: true },
      filters: {
        variety: {
          type: "in",
          label: "Variety",
          options: {
            options: [
              { value: "floury", label: "Floury" },
              { value: "firm", label: "Firm" },
              { value: "all-purpose", label: "All-purpose" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Floury", filter: { variety: ["floury"] } },
        { label: "Firm", filter: { variety: ["firm"] } },
        { label: "All-purpose", filter: { variety: ["all-purpose"] } },
      ],
      sortings: {
        name: { label: "Name" },
        averageWeight: { label: "Avg. weight" },
        stock: { label: "Stock" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wanted = Array.isArray(filters?.variety)
            ? (filters.variety as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = potatoes
            .filter((p) =>
              wanted.length === 0 ? true : wanted.includes(p.variety)
            )
            .filter((p) =>
              term === "" ? true : p.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (p, field) => {
            switch (field) {
              case "name":
                return p.name.toLowerCase()
              case "averageWeight":
                return p.averageWeight
              case "stock":
                return p.stock
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 10
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = sorted.slice(start, start + perPage)

          return {
            type: "pages" as const,
            records,
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "Add variety",
        icon: Add,
        onClick: goToCreate,
      }),
      itemActions: () => [
        { label: "View details", onClick: () => {} },
        { label: "Edit", onClick: () => {} },
        { type: "separator" },
        { label: "Archive", onClick: () => {}, critical: true },
      ],
    },
    [potatoes]
  )

  if (view === "create") {
    return (
      <Page
        header={
          <>
            <PageHeader
              module={{
                id: "documents",
                name: "Potatoes",
                href: "/p/potatoes",
              }}
              // PageHeader auto-prepends the module as the first
              // breadcrumb (label "Potatoes", linking to module.href), so
              // we only pass the leaf here. Clicking "Potatoes" navigates
              // to /p/potatoes — no query — and the view drops back to
              // the list automatically (see useSearchParams above).
              breadcrumbs={[{ id: "new", label: "New variety" }]}
            />
            {/*
              Sticky resource header for the sub-screen. Cancel sits as
              a secondary action here; Create button is owned by the form.
            */}
            <ResourceHeader
              title="New potato variety"
              description="Fill the form below or ask the copilot (top right) to fill it for you. Submit when you're ready and the new variety will appear at the top of the catalog."
              secondaryActions={[
                { label: "Cancel", icon: Cross, onClick: goToList },
              ]}
            />
          </>
        }
      >
        <StandardLayout>
          <AddVarietyForm onCreate={handleCreate} />
        </StandardLayout>
      </Page>
    )
  }

  return (
    <Page
      header={
        <PageHeader
          module={{
            id: "documents",
            name: "Potatoes",
            href: "/p/potatoes",
          }}
          actions={[]}
        />
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Box display="flex" flexDirection="column" gap="md">
            <F0Heading
              content="Interesting KPIs"
              variant="heading-large"
              as="h2"
            />
            <F0Box
              display="grid"
              columns="1"
              gap="md"
              sm={{ columns: "2" }}
              lg={{ columns: "4" }}
            >
              <PotatoKpi
                icon={List}
                label="Varieties"
                value={kpis.totalVarieties.toString()}
                caption={
                  kpis.topUse
                    ? `Most common use: ${kpis.topUse.use} (${kpis.topUse.count} varieties)`
                    : undefined
                }
              />
              <PotatoKpi
                icon={ShoppingCart}
                label="Total stock"
                value={`${kpis.totalStock.toLocaleString()} kg`}
                caption={`Avg. weight per tuber: ${kpis.avgWeight} g`}
              />
              <PotatoKpi
                icon={Crown}
                label="Heaviest variety"
                value={kpis.heaviest ? `${kpis.heaviest.averageWeight} g` : "—"}
                caption={
                  kpis.heaviest
                    ? `${kpis.heaviest.name} — from ${kpis.heaviest.origin}`
                    : undefined
                }
              />
              <PotatoKpi
                icon={Sparkles}
                label="Most versatile"
                value={
                  kpis.mostVersatile
                    ? `${kpis.mostVersatile.bestUses.length} uses`
                    : "—"
                }
                caption={
                  kpis.mostVersatile
                    ? `${kpis.mostVersatile.name} — ${kpis.mostVersatile.bestUses.join(", ")}`
                    : undefined
                }
              />
            </F0Box>
          </F0Box>
          <OneDataCollection
            source={source}
            visualizations={[
              {
                type: "table",
                options: {
                  columns: [
                    {
                      id: "name",
                      label: "Name",
                      sorting: "name",
                      render: (item: Potato) => item.name,
                    },
                    {
                      id: "variety",
                      label: "Variety",
                      render: (item: Potato) => ({
                        type: "dotTag" as const,
                        value: {
                          label: varietyLabel[item.variety],
                          color: varietyColor[item.variety],
                        },
                      }),
                    },
                    {
                      id: "origin",
                      label: "Origin",
                      render: (item: Potato) => item.origin,
                    },
                    {
                      id: "bestUses",
                      label: "Best uses",
                      render: (item: Potato) => ({
                        type: "tagList" as const,
                        value: {
                          type: "dot" as const,
                          tags: item.bestUses.map((use) => ({
                            text: use,
                            color: "smoke" as const,
                          })),
                          max: 3,
                        },
                      }),
                    },
                    {
                      id: "averageWeight",
                      label: "Avg. weight",
                      sorting: "averageWeight",
                      render: (item: Potato) => `${item.averageWeight} g`,
                    },
                    {
                      id: "stock",
                      label: "Stock",
                      sorting: "stock",
                      render: (item: Potato) => `${item.stock} kg`,
                    },
                  ],
                },
              },
            ]}
          />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}
