import { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"

import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../../index"

/**
 * `defaultExpanded` decides which rows of a nested table start out open before
 * the user touches anything. It is evaluated per row as rows mount, so an
 * opened row's children evaluate it in turn and the cascade needs no
 * consumer-side traversal of the tree.
 */
const meta = {
  title: "Data Collection/Visualizations/Table/Default expanded",
  parameters: { layout: "padded" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type Node = {
  id: string
  name: string
  kind: "category" | "role" | "level"
  children?: Node[]
}

const TREE: Node[] = [
  {
    id: "engineering",
    name: "Engineering",
    kind: "category",
    children: [
      {
        id: "backend",
        name: "Backend",
        kind: "category",
        children: [
          {
            id: "backend-engineer",
            name: "Backend Engineer",
            kind: "role",
            children: [
              { id: "be-junior", name: "Junior", kind: "level" },
              { id: "be-senior", name: "Senior", kind: "level" },
            ],
          },
        ],
      },
      {
        id: "frontend",
        name: "Frontend",
        kind: "category",
        children: [
          {
            id: "frontend-engineer",
            name: "Frontend Engineer",
            kind: "role",
            children: [
              { id: "fe-junior", name: "Junior", kind: "level" },
              { id: "fe-senior", name: "Senior", kind: "level" },
            ],
          },
        ],
      },
    ],
  },
]

const byId = new Map<string, Node>()
const indexTree = (nodes: Node[]) =>
  nodes.forEach((node) => {
    byId.set(node.id, node)
    if (node.children) indexTree(node.children)
  })
indexTree(TREE)

const columns = [
  { id: "name", label: "Name", render: (node: Node) => node.name },
  { id: "kind", label: "Kind", width: 140, render: (node: Node) => node.kind },
] as const

const useTreeSource = () =>
  useDataCollectionSource({
    dataAdapter: { fetchData: async () => ({ records: TREE }) },
    itemsWithChildren: (node: Node) => !!byId.get(node.id)?.children?.length,
    fetchChildren: async ({ item }: { item: Node }) => ({
      records: byId.get(item.id)?.children ?? [],
      type: "basic" as const,
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)

const Tree = ({
  defaultExpanded,
}: {
  defaultExpanded: boolean | number | ((node: Node) => boolean)
}) => {
  const source = useTreeSource()
  return (
    <OneDataCollection
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      source={source as any}
      visualizations={[
        {
          type: "table",
          options: { columns, defaultExpanded },
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        } as any,
      ]}
    />
  )
}

/** Nothing starts open — the behaviour before `defaultExpanded` existed. */
export const Collapsed: Story = {
  render: () => <Tree defaultExpanded={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await canvas.findByText("Engineering")
    expect(canvas.queryByText("Backend")).toBeNull()
  },
}

/** `true` — the whole tree, levels included. */
export const All: Story = {
  render: () => <Tree defaultExpanded={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Depth 3 proves the cascade: each level opened because its parent did.
    await canvas.findByText("Senior")
  },
}

/** A depth — `1` opens the top-level rows and reveals depth 1. */
export const ToDepth: Story = {
  render: () => <Tree defaultExpanded={1} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await canvas.findByText("Backend")
    expect(canvas.queryByText("Backend Engineer")).toBeNull()
  },
}

/**
 * A predicate — everything opens except roles, so roles are visible and their
 * levels stay closed. This is the Job Catalog case.
 */
export const StopAtRoles: Story = {
  render: () => <Tree defaultExpanded={(node) => node.kind !== "role"} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await canvas.findByText("Backend Engineer")
    expect(canvas.queryByText("Junior")).toBeNull()
  },
}
