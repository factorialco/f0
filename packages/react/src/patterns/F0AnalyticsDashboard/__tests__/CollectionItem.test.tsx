import type { ReactNode } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { CollectionItem } from "../components/CollectionItem/CollectionItem"
import type {
  DashboardCollectionItem,
  DashboardItemFiltersConfig,
} from "../types"

interface CapturedCollectionProps {
  disableUrlParams?: boolean
  presetsAction?: "auto" | "none"
  onStateChange?: (state: {
    filters?: Record<string, unknown>
    settings?: {
      visualization?: Record<string, { hidden?: string[]; order?: string[] }>
    }
  }) => void
}

const mocks = vi.hoisted(() => ({
  collection: vi.fn<(props: CapturedCollectionProps) => ReactNode>(),
  source: vi.fn<(definition: unknown) => unknown>(),
}))

vi.mock("@/patterns/OneDataCollection", () => ({
  OneDataCollection: mocks.collection,
}))

vi.mock("@/patterns/OneDataCollection/hooks/useDataCollectionSource", () => ({
  useDataCollectionSource: mocks.source,
}))

vi.mock("../hooks/useCollectionDownloadActions", () => ({
  useCollectionDownloadActions: () => [],
}))

const item: DashboardCollectionItem = {
  id: "employees",
  title: "Employees",
  type: "collection",
  createSource: () => ({ dataAdapter: vi.fn() }),
  visualizations: [],
}

const makeItemFilters = (
  overrides: Partial<DashboardItemFiltersConfig> = {}
): DashboardItemFiltersConfig => ({
  filters: {
    country: {
      type: "operator",
      label: "Country",
      options: {
        operators: [{ value: "equals", label: "Is" }],
        suggestions: ["Spain"],
      },
    },
  },
  value: {},
  onChange: vi.fn(),
  ...overrides,
})

const latestCollectionProps = (): CapturedCollectionProps => {
  const props = mocks.collection.mock.calls.at(-1)?.[0]
  if (!props) throw new Error("OneDataCollection was not rendered")
  return props
}

const latestSourceDefinition = (): Record<string, unknown> => {
  const definition = mocks.source.mock.calls.at(-1)?.[0]
  if (typeof definition !== "object" || definition === null) {
    throw new Error("The collection source definition was not created")
  }
  return definition
}

describe("CollectionItem item filters", () => {
  beforeEach(() => {
    mocks.collection.mockReset()
    mocks.collection.mockReturnValue(<div>Collection</div>)
    mocks.source.mockReset()
    mocks.source.mockImplementation((definition) => definition)
  })

  it("isolates every embedded widget from unscoped URL state", () => {
    window.history.replaceState({}, "", "/?dc_country=Germany&dc_sort=name-asc")

    render(
      <CollectionItem
        item={item}
        filters={{}}
        itemFilters={makeItemFilters({
          value: { country: { operator: "equals", values: ["Spain"] } },
        })}
      />
    )

    expect(latestCollectionProps()).toMatchObject({
      disableUrlParams: true,
      presetsAction: "none",
    })
    expect(window.location.search).toBe("?dc_country=Germany&dc_sort=name-asc")
  })

  it("preserves legacy URL and preset behavior without item filters", () => {
    render(<CollectionItem item={item} filters={{}} />)

    expect(latestCollectionProps().disableUrlParams).toBeUndefined()
    expect(latestCollectionProps().presetsAction).toBeUndefined()
  })

  it("notifies the host once when unrelated collection state changes", () => {
    const onChange = vi.fn()
    render(
      <CollectionItem
        item={item}
        filters={{}}
        itemFilters={makeItemFilters({ onChange })}
      />
    )

    const onStateChange = latestCollectionProps().onStateChange
    if (!onStateChange) throw new Error("onStateChange was not provided")

    const filters = {
      country: { operator: "equals", values: ["Spain"] },
    }
    onStateChange({ filters })
    onStateChange({
      filters: {
        country: { operator: "equals", values: ["Spain"] },
      },
      settings: { visualization: { table: { order: ["name"] } } },
    })

    expect(onChange).toHaveBeenCalledOnce()
    expect(onChange).toHaveBeenCalledWith(filters)
  })

  it("refreshes a same-key filter when its catalog definition changes", () => {
    const firstConfig = makeItemFilters()
    const { rerender } = render(
      <CollectionItem item={item} filters={{}} itemFilters={firstConfig} />
    )

    const nextConfig = makeItemFilters({
      filters: {
        country: {
          type: "operator",
          label: "Country or region",
          options: {
            operators: [
              { value: "equals", label: "Is" },
              { value: "not_equals", label: "Is not" },
            ],
            suggestions: ["Spain", "France"],
          },
        },
      },
    })

    rerender(
      <CollectionItem item={item} filters={{}} itemFilters={nextConfig} />
    )

    expect(latestSourceDefinition().filters).toEqual(nextConfig.filters)
  })

  it("refreshes a same-key filter when only its option loader changes", () => {
    const firstOptions = () => [{ value: "ES", label: "Spain" }]
    const secondOptions = () => [{ value: "FR", label: "France" }]
    const firstConfig = makeItemFilters({
      filters: {
        country: {
          type: "in",
          label: "Country",
          options: { options: firstOptions },
        },
      },
    })
    const { rerender } = render(
      <CollectionItem item={item} filters={{}} itemFilters={firstConfig} />
    )
    const nextConfig = makeItemFilters({
      filters: {
        country: {
          type: "in",
          label: "Country",
          options: { options: secondOptions },
        },
      },
    })

    rerender(
      <CollectionItem item={item} filters={{}} itemFilters={nextConfig} />
    )

    const filters = latestSourceDefinition().filters as Record<
      string,
      { options: { options: unknown } }
    >
    expect(filters.country.options.options).toBe(secondOptions)
  })
})
