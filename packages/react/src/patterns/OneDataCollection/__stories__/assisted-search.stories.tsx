import { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { DEPARTMENTS_MOCK } from "@/mocks"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"
import { OneDataCollection } from ".."
import {
  createPromiseDataFetch,
  filters,
  getMockVisualizations,
  sortings,
} from "./mockData"

const meta = {
  title: "Data Collection/Assisted search",
  parameters: {
    layout: "padded",
  },
  tags: ["internal"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const EXAMPLES = [
  "Engineering hired in the last 6 months",
  "Design earning more than 50k",
  "Product never promoted",
  "Marketing in Barcelona",
]

/**
 * Stands in for the assistant. The real reading happens server-side, where the
 * asker's field permissions are known; what matters here is the shape it
 * returns — the stretches it recognised, the filters they stand for, and a
 * line for whatever it could not turn into a filter.
 */
const analyze = (query: string) => {
  const spans: { start: number; end: number; key: string }[] = []
  const preview: { key: string; label: string; value: string }[] = []
  const staged: Record<string, string[]> = {}

  for (const department of DEPARTMENTS_MOCK) {
    const at = query.toLowerCase().indexOf(department.toLowerCase())
    if (at < 0) {
      continue
    }
    spans.push({ start: at, end: at + department.length, key: "department" })
    preview.push({ key: "department", label: "Department", value: department })
    staged.department = [department]
    break
  }

  const unreadable = /salary|salaries|earning|paid/i.test(query)

  return {
    spans,
    preview,
    filters: staged,
    // What was refused is never named: telling someone the table cannot filter
    // by salary confirms the column is there.
    note:
      unreadable && Object.keys(staged).length > 0
        ? "I couldn't turn all of it into filters. The rest is applied."
        : undefined,
  }
}

const AssistedCollection = ({ triggerLabel }: { triggerLabel?: string }) => {
  const [query, setQuery] = useState<string | undefined>()
  const [note, setNote] = useState<string | undefined>()

  const source = useDataCollectionSource(
    {
      filters,
      sortings,
      search: { enabled: true, sync: true },
      dataAdapter: { fetchData: createPromiseDataFetch(300) },
      searchPresentation: {
        triggerLabel,
        placeholderRotation: EXAMPLES,
        suggestions: EXAMPLES,
        value: query,
        onChange: setQuery,
        analyze,
        note,
        onSubmit: (asked) => {
          setNote(analyze(asked).note)
          setQuery(undefined)
        },
        onClear: () => setNote(undefined),
      },
    },
    [query, note]
  )

  return (
    <OneDataCollection
      source={source}
      visualizations={[getMockVisualizations().table]}
    />
  )
}

/**
 * The way in that ships: one field, searching by name as it always did, with
 * the assistant offered beside the text once there is something to ask.
 */
export const FromTheSearchField: Story = {
  render: () => <AssistedCollection />,
}

/**
 * The same query offered as the first entry of the filters panel. Everything
 * in that popover waits for the apply button, this included: the boxes tick to
 * say what was understood, and the table only moves once it is applied.
 */
export const FromTheFiltersPanel: Story = {
  render: () => <AssistedCollection triggerLabel="Ask ONE" />,
}
