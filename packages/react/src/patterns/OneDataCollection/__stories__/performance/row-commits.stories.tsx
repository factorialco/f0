import { Meta, StoryObj } from "@storybook/react-vite"
import { useCallback, useRef, useState } from "react"
import { F0Button } from "@/components/F0Button"
import { OneDataCollection } from "../.."
import { useDataCollectionSource } from "../../hooks/useDataCollectionSource"
import type { DataCollectionDataAdapter } from "../../hooks/useDataCollectionSource/types"

type Person = {
  id: number
  name: string
  email: string
  department: string
}

const DEPARTMENTS = ["Engineering", "Design", "Sales", "Support"]
const PER_PAGE = 25
const TOTAL = 2000

const people: Person[] = Array.from({ length: TOTAL }, (_, index) => ({
  id: index + 1,
  name: `Person ${index + 1}`,
  email: `person${index + 1}@example.com`,
  department: DEPARTMENTS[index % DEPARTMENTS.length],
}))

/** A skipped row calls none of its column renderers, so counting there counts commits. */
const useRowCommitCounter = () => {
  const total = useRef(0)
  const [readout, setReadout] = useState<
    { label: string; commits: number; rows: number }[]
  >([])

  const count = useCallback(() => {
    total.current += 1
  }, [])

  const measure = useCallback(
    (label: string, rows: number) => {
      const before = total.current
      // The render is synchronous and an append settles before the next paint.
      requestAnimationFrame(() =>
        requestAnimationFrame(() =>
          setReadout((entries) => [
            { label, commits: total.current - before, rows },
            ...entries,
          ])
        )
      )
    },
    [total]
  )

  return { count, measure, readout }
}

type Adapter = DataCollectionDataAdapter<Person>

const pageOf = (offset: number) => people.slice(offset, offset + PER_PAGE)

/**
 * Split, not parameterised: the response shape comes from a literal
 * `paginationType`, so one function returning both satisfies neither. Leave
 * `fetchData`'s parameters inferred for the same reason.
 */
const makeAdapter = (
  paginationType: "pages" | "infinite-scroll",
  onLoaded: (rows: number) => void
): Adapter => {
  if (paginationType === "pages") {
    const adapter: Adapter = {
      paginationType: "pages",
      perPage: PER_PAGE,
      fetchData: async ({ pagination }) => {
        const currentPage = pagination?.currentPage ?? 1
        const records = pageOf((currentPage - 1) * PER_PAGE)
        onLoaded(records.length)

        return {
          type: "pages" as const,
          records,
          total: people.length,
          perPage: PER_PAGE,
          currentPage,
          pagesCount: Math.ceil(people.length / PER_PAGE),
        }
      },
    }
    return adapter
  }

  const adapter: Adapter = {
    paginationType: "infinite-scroll",
    perPage: PER_PAGE,
    fetchData: async ({ pagination }) => {
      const offset = Number(pagination?.cursor ?? 0) || 0
      const nextCursor = offset + PER_PAGE
      onLoaded(nextCursor)

      return {
        type: "infinite-scroll" as const,
        records: pageOf(offset),
        total: people.length,
        perPage: PER_PAGE,
        cursor: String(nextCursor),
        hasMore: nextCursor < people.length,
      }
    },
  }
  return adapter
}

const Harness = ({
  paginationType,
}: {
  paginationType: "pages" | "infinite-scroll"
}) => {
  const { count, measure, readout } = useRowCommitCounter()
  const [tick, setTick] = useState(0)
  const loadedRef = useRef(0)

  const source = useDataCollectionSource(
    {
      memoizeDefinition: true,
      selectable: (item: Person) => item.id,
      dataAdapter: makeAdapter(paginationType, (rows) => {
        loadedRef.current = rows
      }),
    },
    // Nothing here closes over component state. A real consumer must list
    // whatever its callbacks capture.
    [paginationType]
  )

  const columns = [
    {
      label: "Name",
      render: (item: Person) => {
        count()
        return item.name
      },
    },
    { label: "Email", render: (item: Person) => item.email },
    { label: "Department", render: (item: Person) => item.department },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <F0Button
          label="Render the consumer"
          variant="outline"
          onClick={() => {
            measure("consumer render", loadedRef.current)
            setTick(tick + 1)
          }}
        />
        <F0Button
          label="Measure the next page"
          variant="outline"
          onClick={() => measure("next page", loadedRef.current)}
        />
        <span className="text-f1-foreground-secondary">
          consumer renders: {tick}
        </span>
      </div>

      <p className="text-f1-foreground-secondary">
        &ldquo;Render the consumer&rdquo; changes state the collection knows
        nothing about. Every row commit it reports is waste. &ldquo;Measure the
        next page&rdquo; arms the counter, then scroll (or page) to load one:
        under infinite scroll the count should stay near a page&rsquo;s worth
        however many rows are already loaded, not grow with them.
      </p>

      {readout.length > 0 && (
        <table className="w-fit border-collapse text-left">
          <thead>
            <tr className="text-f1-foreground-secondary">
              <th className="pr-6 font-normal">action</th>
              <th className="pr-6 font-normal">rows loaded</th>
              <th className="font-normal">row commits</th>
            </tr>
          </thead>
          <tbody>
            {readout.slice(0, 12).map((entry, index) => (
              <tr key={`${entry.label}-${index}`}>
                <td className="pr-6">{entry.label}</td>
                <td className="pr-6 tabular-nums">{entry.rows}</td>
                <td className="tabular-nums">{entry.commits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <OneDataCollection
        source={source}
        visualizations={[{ type: "table", options: { columns } }]}
      />
    </div>
  )
}

const meta = {
  title: "Data Collection/Performance",
  component: Harness,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A measuring harness, not a showcase. It counts row commits so the two costs that dominate a large collection can be read off directly: what a consumer render costs, and whether the cost of loading a page grows with the rows already loaded.",
      },
    },
  },
  tags: ["experimental", "internal"],
} satisfies Meta<typeof Harness>

export default meta
type Story = StoryObj<typeof meta>

export const InfiniteScroll: Story = {
  args: { paginationType: "infinite-scroll" },
}

export const Paged: Story = {
  args: { paginationType: "pages" },
}
