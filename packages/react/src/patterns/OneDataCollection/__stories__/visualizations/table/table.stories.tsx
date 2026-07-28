import { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { useState, useMemo } from "react"

import { F0Button } from "@/components/F0Button"
import {
  CompoundCellValue,
  CompoundTone,
} from "@/ui/value-display/types/compound"

import { ChildrenPaginationInfo } from "@/hooks/datasource/types/nested.typings"

import { ExampleComponent, getMockVisualizations } from "../../mockData"
import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../../index"
import {
  NestedChildrenDisplayMode,
  nestedChildrenDisplayModes,
  NestedExpandAnimation,
  nestedExpandAnimations,
  NestedTableOptions,
  useNestedTable,
} from "../../../visualizations/collection/Table/nested"

const meta = {
  title: "Data Collection/Visualizations/Table",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Table view specific visualization. Displays a table of items with a checkbox column and a list of properties.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicListVisualization: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return <ExampleComponent visualizations={[mockVisualizations.table]} />
  },
}

export const ReferenceRowsVisualization: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: { referenceRows: true },
    })
    return <ExampleComponent visualizations={[mockVisualizations.table]} />
  },
}

export const TableFrozenCols: Story = {
  render: () => <ExampleComponent frozenColumns={2} />,
}

export const TableFrozenColsWithMinWidth: Story = {
  render: () => {
    const records = Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      name: `Person ${i + 1}`,
      email: `person${i + 1}@example.com`,
      role: "Engineer",
      department: "Product",
      location: "Madrid",
      manager: "Alice",
    }))

    const source = useDataCollectionSource({
      dataAdapter: { fetchData: async () => ({ records }) },
    })

    return (
      <div style={{ maxWidth: 600 }}>
        <OneDataCollection
          source={source}
          visualizations={[
            {
              type: "table",
              options: {
                frozenColumns: 2,
                columns: [
                  {
                    id: "name",
                    label: "Name",
                    minWidth: 200,
                    render: (item) => item.name,
                  },
                  {
                    id: "email",
                    label: "Email",
                    minWidth: 150,
                    render: (item) => item.email,
                  },
                  { id: "role", label: "Role", render: (item) => item.role },
                  {
                    id: "department",
                    label: "Department",
                    render: (item) => item.department,
                  },
                  {
                    id: "location",
                    label: "Location",
                    render: (item) => item.location,
                  },
                  {
                    id: "manager",
                    label: "Manager",
                    render: (item) => item.manager,
                  },
                ],
              },
            },
          ]}
        />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const nameCell = await canvas.findByText("Person 1")
    const emailCell = await canvas.findByText("person1@example.com")
    const nameTd = nameCell.closest("td")
    const emailTd = emailCell.closest("td")

    expect(nameTd && getComputedStyle(nameTd).position).toBe("sticky")
    expect(emailTd && getComputedStyle(emailTd).position).toBe("sticky")
    expect(nameTd && getComputedStyle(nameTd).left).toBe("0px")
    expect(emailTd && getComputedStyle(emailTd).left).toBe("200px")
  },
}

export const TableColumnOrderingAndHidden: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        allowColumnHiding: true,
        allowColumnReordering: true,
      },
    })
    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        tableAllowColumnHiding
        noSorting
        visualizations={[mockVisualizations.table]}
        id="employees/v1"
      />
    )
  },
}

export const TableColumnOrderingAndHiddenNoPersistentStorage: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        allowColumnHiding: true,
        allowColumnReordering: true,
      },
    })
    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        tableAllowColumnHiding
        noSorting
        storage={false}
        visualizations={[mockVisualizations.table]}
        id="employees/v1"
      />
    )
  },
}

export const TableWithNestedRecords: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        referenceRows: true,
        allowColumnHiding: true,
        allowColumnReordering: true,
        nestedRecords: true,
        applyLongText: false,
      },
    })

    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        tableAllowColumnHiding
        noSorting
        storage={false}
        visualizations={[mockVisualizations.table]}
        id="employees/v1"
        nestedRecords
      />
    )
  },
}

export const TableWithNestedRecordsDetailed: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        allowColumnHiding: true,
        allowColumnReordering: true,
        nestedRecords: true,
        applyLongText: false,
      },
    })

    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        tableAllowColumnHiding
        noSorting
        storage={false}
        visualizations={[mockVisualizations.table]}
        id="employees/v1"
        nestedRecords
        nestedRecordsType="detailed"
      />
    )
  },
}

export const TableWithMixedNestedRecords: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        allowColumnHiding: true,
        allowColumnReordering: true,
        nestedRecords: true,
        applyLongText: false,
      },
    })

    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        tableAllowColumnHiding
        noSorting
        storage={false}
        visualizations={[mockVisualizations.table]}
        id="employees/v1"
        nestedRecords
        nestedRecordsType="mixed"
      />
    )
  },
}

export const TableWithSelectableNestedRecords: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        allowColumnHiding: true,
        allowColumnReordering: true,
        nestedRecords: true,
        applyLongText: false,
      },
    })

    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        tableAllowColumnHiding
        noSorting
        storage={false}
        visualizations={[mockVisualizations.table]}
        id="employees/v1"
        nestedRecords
        nestedRecordsType="mixed"
        selectable={() => {
          return ""
        }}
      />
    )
  },
}

type KpiTableRow = {
  id: string
  usedVsBudgetCap: CompoundCellValue
  costToDateVsEstCost: CompoundCellValue
  currentVsEstProfit: CompoundCellValue
  currentVsEstMargin: CompoundCellValue
}

const makeAmountSegment = (
  value: number | undefined,
  tone: CompoundTone = "neutral",
  currency: {
    symbol: string
    symbolPosition?: "left" | "right"
    decimalPlaces: number
  } = {
    symbol: "EUR",
    decimalPlaces: 0,
  }
) => ({
  type: "amount" as const,
  value,
  currency,
  tone,
})

const makePercentageSegment = (
  value: number | undefined,
  tone: CompoundTone = "neutral",
  decimalPlaces = 0
) => ({
  type: "percentage" as const,
  value,
  decimalPlaces,
  tone,
})

const makeMissingSegment = () => ({
  type: "text" as const,
  value: undefined,
  placeholder: "-",
  tone: "secondary" as const,
})

const kpiRows: KpiTableRow[] = [
  {
    id: "row-1",
    usedVsBudgetCap: {
      segments: [
        makeAmountSegment(4000, "critical"),
        makeAmountSegment(1000, "critical"),
      ],
    },
    costToDateVsEstCost: {
      segments: [makeAmountSegment(3500), makeMissingSegment()],
    },
    currentVsEstProfit: {
      segments: [makeAmountSegment(-2500, "critical"), makeMissingSegment()],
    },
    currentVsEstMargin: {
      segments: [makePercentageSegment(-250, "critical"), makeMissingSegment()],
    },
  },
  {
    id: "row-2",
    usedVsBudgetCap: {
      segments: [makeAmountSegment(200), makeMissingSegment()],
    },
    costToDateVsEstCost: {
      segments: [makeAmountSegment(50), makeAmountSegment(1500, "secondary")],
    },
    currentVsEstProfit: {
      segments: [
        makeAmountSegment(150, "neutral", {
          symbol: "$",
          symbolPosition: "left",
          decimalPlaces: 0,
        }),
        makeMissingSegment(),
      ],
    },
    currentVsEstMargin: {
      segments: [makePercentageSegment(75), makeMissingSegment()],
    },
  },
  {
    id: "row-3",
    usedVsBudgetCap: {
      segments: [makeAmountSegment(1200), makeAmountSegment(3000, "secondary")],
    },
    costToDateVsEstCost: {
      segments: [makeAmountSegment(500), makeAmountSegment(1500, "secondary")],
    },
    currentVsEstProfit: {
      segments: [makeAmountSegment(700), makeAmountSegment(1500, "secondary")],
    },
    currentVsEstMargin: {
      segments: [
        makePercentageSegment(58.3, "neutral", 1),
        makePercentageSegment(50, "secondary"),
      ],
    },
  },
  {
    id: "row-4",
    usedVsBudgetCap: {
      segments: [makeAmountSegment(2500), makeAmountSegment(4000, "secondary")],
    },
    costToDateVsEstCost: {
      segments: [makeAmountSegment(2800), makeAmountSegment(2000, "secondary")],
    },
    currentVsEstProfit: {
      segments: [
        makeAmountSegment(-300, "critical"),
        makeAmountSegment(2000, "secondary"),
      ],
    },
    currentVsEstMargin: {
      segments: [
        makePercentageSegment(-12, "critical"),
        makePercentageSegment(50, "secondary"),
      ],
    },
  },
  {
    id: "row-5",
    usedVsBudgetCap: {
      segments: [
        makeAmountSegment(6000, "critical"),
        makeAmountSegment(5000, "critical"),
      ],
    },
    costToDateVsEstCost: {
      segments: [makeAmountSegment(3500), makeAmountSegment(3000, "secondary")],
    },
    currentVsEstProfit: {
      segments: [
        makeAmountSegment(1500),
        makeAmountSegment(2000, "secondary", {
          symbol: "$",
          symbolPosition: "left",
          decimalPlaces: 0,
        }),
      ],
    },
    currentVsEstMargin: {
      segments: [
        makePercentageSegment(30),
        makePercentageSegment(40, "secondary"),
      ],
    },
  },
]

export const TableKpiCompoundValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A KPI-focused table showcasing multi-segment `compound` values with semantic tones and `value / value` formatting.",
      },
    },
  },
  render: () => {
    const dataSource = useDataCollectionSource({
      dataAdapter: {
        fetchData: () => Promise.resolve({ records: kpiRows }),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Used / budget cap",
                  info: "Current used budget compared to cap.",
                  render: (item) => ({
                    type: "compound",
                    value: item.usedVsBudgetCap,
                  }),
                  align: "right",
                },
                {
                  label: "Cost-to-date / est. cost",
                  info: "Current costs compared to estimated final cost.",
                  render: (item) => ({
                    type: "compound",
                    value: item.costToDateVsEstCost,
                  }),
                  align: "right",
                },
                {
                  label: "Current / est. profit",
                  info: "Current profit compared to estimated final profit. Includes EUR and $ examples.",
                  render: (item) => ({
                    type: "compound",
                    value: item.currentVsEstProfit,
                  }),
                  align: "right",
                },
                {
                  label: "Current / est. margin",
                  info: "Current margin compared to estimated final margin.",
                  render: (item) => ({
                    type: "compound",
                    value: item.currentVsEstMargin,
                  }),
                  align: "right",
                },
              ],
            },
          },
        ]}
      />
    )
  },
}

export const TableColumnOrdering: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        allowColumnReordering: true,
      },
    })
    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        visualizations={[mockVisualizations.table]}
        id="table-column-ordering/v1"
      />
    )
  },
}

export const TableColumnHidden: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        allowColumnHiding: true,
      },
    })
    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnHiding
        visualizations={[mockVisualizations.table]}
        id="table-column-hidden/v1"
      />
    )
  },
}

export const TableColumnOrderingAndHiddenWithColumnsChanges: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates how the table columns can be changed after the initial render, the order and hidden state of the columns change as well.",
      },
    },
  },
  render: () => {
    const [index, setIndex] = useState<number>(0)

    const mockVisualizations = useMemo(
      () =>
        getMockVisualizations({
          table: {
            noSorting: true,
            allowColumnHiding: true,
            allowColumnReordering: true,
          },
        }),
      []
    )

    const tableDef: ReturnType<typeof getMockVisualizations>["table"] = {
      ...mockVisualizations.table,
    }

    const columns = useMemo(() => {
      return [
        ...((tableDef as any)["options"]?.["columns"]?.slice(0, index) ?? []),
      ]
    }, [index, tableDef])

    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <F0Button
            onClick={() => setIndex(index + 1)}
            label="Add Column"
          ></F0Button>
          <F0Button
            onClick={() => setIndex(index - 1)}
            label="Remove Column"
            disabled={index === 0}
          ></F0Button>
        </div>
        <ExampleComponent
          frozenColumns={2}
          tableAllowColumnReordering
          tableAllowColumnHiding
          noSorting
          visualizations={[
            {
              ...mockVisualizations.table,
              type: "table",
              options: {
                ...(mockVisualizations.table as any)["options"],
                columns: columns,
              },
            },
          ]}
          id="employees/v1"
        />
      </div>
    )
  },
}

export const TableWithGroupedHeaders: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: { noSorting: true },
    })
    const baseOptions = (mockVisualizations.table as any)["options"]

    return (
      <ExampleComponent
        noSorting
        frozenColumns={2}
        visualizations={[
          {
            ...mockVisualizations.table,
            type: "table",
            options: {
              ...baseOptions,
              headerGroupLabels: {
                personal: "Personal Information",
                employment: "Employment Details",
              },
              columns: [
                {
                  label: "Employee",
                  render: (item: any) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
                  id: "name",
                },
                {
                  label: "Email",
                  align: "right",
                  render: (item: any) => item.email,
                  id: "email",
                  headerGroupId: "personal",
                },
                {
                  label: "Role",
                  align: "right",
                  render: (item: any) => item.role,
                  id: "role",
                  headerGroupId: "employment",
                },
                {
                  label: "Department",
                  align: "right",
                  render: (item: any) => item.department,
                  id: "department",
                  headerGroupId: "employment",
                },
                {
                  label: "Manager",
                  align: "right",
                  render: (item: any) => item.manager,
                  id: "manager",
                  headerGroupId: "employment",
                },
                {
                  label: "Status",
                  align: "right",
                  render: (item: any) => item.status,
                  id: "status",
                },
              ],
            },
          },
        ]}
      />
    )
  },
}

export const StrikedRowsVisualization: Story = {
  render: () => {
    const records = [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        active: true,
      },
      { id: 2, name: "Bob Smith", email: "bob@example.com", active: false },
      { id: 3, name: "Carol Lee", email: "carol@example.com", active: true },
      { id: 4, name: "Dan Park", email: "dan@example.com", active: false },
    ]

    const source = useDataCollectionSource({
      dataAdapter: {
        fetchData: async () => ({ records }),
      },
    })

    return (
      <div style={{ maxWidth: 600 }}>
        <OneDataCollection
          source={source}
          visualizations={[
            {
              type: "table",
              options: {
                referenceRowType: (item) => (item.active ? "none" : "striked"),
                columns: [
                  { label: "Name", render: (item) => item.name, id: "name" },
                  { label: "Email", render: (item) => item.email, id: "email" },
                  {
                    label: "Status",
                    id: "status",
                    render: (item) => ({
                      type: "status",
                      value: {
                        status: item.active ? "positive" : "critical",
                        label: item.active ? "Active" : "Inactive",
                      },
                    }),
                  },
                ],
              },
            },
          ]}
        />
      </div>
    )
  },
}

export const BorderedTable: Story = {
  render: () => {
    const records = [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "Admin",
      },
      { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor" },
      { id: 3, name: "Carol Lee", email: "carol@example.com", role: "Viewer" },
    ]

    const source = useDataCollectionSource({
      dataAdapter: {
        fetchData: async () => ({ records }),
      },
    })

    return (
      <div style={{ maxWidth: 600 }}>
        <OneDataCollection
          source={source}
          visualizations={[
            {
              type: "table",
              options: {
                bordered: true,
                columns: [
                  {
                    label: "Name",
                    render: (item) => ({
                      type: "person" as const,
                      value: {
                        firstName: item.name.split(" ")[0],
                        lastName: item.name.split(" ")[1],
                      },
                    }),
                    id: "name",
                  },
                  {
                    label: "Email",
                    render: (item) => item.email,
                    id: "email",
                  },
                  {
                    label: "Role",
                    render: (item) => item.role,
                    id: "role",
                  },
                ],
              },
            },
          ]}
        />
      </div>
    )
  },
}

type AddRemoveRow = {
  id: number
  name: string
  email: string
  role: string
  department: string
  location: string
  manager: string
}

const addRemoveRecords: AddRemoveRow[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  email: `person${i + 1}@example.com`,
  role: "Engineer",
  department: "Product",
  location: "Madrid",
  manager: "Alice",
}))

const addRemoveColumns: {
  id: string
  label: string
  render: (item: AddRemoveRow) => string
}[] = [
  { id: "name", label: "Name", render: (item) => item.name },
  { id: "email", label: "Email", render: (item) => item.email },
  { id: "role", label: "Role", render: (item) => item.role },
  { id: "department", label: "Department", render: (item) => item.department },
  { id: "location", label: "Location", render: (item) => item.location },
  { id: "manager", label: "Manager", render: (item) => item.manager },
]

/**
 * Demonstrates the column add/remove affordances. Open the settings popover
 * (sliders icon): an "Add column" entry sits on top, and hovering any
 * non-frozen column reveals a trash button. `onAddColumn` / `onRemoveColumn`
 * mutate the consumer's `columns` — distinct from the hide toggle, which only
 * changes visibility.
 */
export const WithColumnAddRemove: Story = {
  render: () => {
    const [visibleIds, setVisibleIds] = useState<string[]>([
      "name",
      "email",
      "role",
    ])

    const columns = visibleIds
      .map((id) => addRemoveColumns.find((column) => column.id === id))
      .filter((column): column is (typeof addRemoveColumns)[number] =>
        Boolean(column)
      )

    const source = useDataCollectionSource({
      dataAdapter: { fetchData: async () => ({ records: addRemoveRecords }) },
    })

    return (
      <div style={{ maxWidth: 720 }}>
        <OneDataCollection
          source={source}
          visualizations={[
            {
              type: "table",
              options: {
                frozenColumns: 1,
                allowColumnReordering: true,
                allowColumnHiding: true,
                columns,
                onAddColumn: () => {
                  const next = addRemoveColumns.find(
                    (column) => !visibleIds.includes(column.id)
                  )
                  if (next) {
                    setVisibleIds((prev) => [...prev, next.id])
                  }
                },
                onRemoveColumn: (columnId) =>
                  setVisibleIds((prev) => prev.filter((id) => id !== columnId)),
              },
            },
          ]}
        />
      </div>
    )
  },
}

/**
 * Nested tables — programmatic expansion control
 * ------------------------------------------------------------------
 * The stories below share an org-chart dataset (departments → teams →
 * squads → members) with unique ids and real children pagination, so the
 * "show more" vs "load all" behaviors can be exercised.
 */

type OrgNode = {
  id: string
  name: string
  role: string
  children?: OrgNode[]
}

const ORG_MEMBER_NAMES = [
  "Ana García",
  "Liam Chen",
  "Maya Patel",
  "Noah Kim",
  "Sara López",
  "Tom Becker",
  "Zoe Martin",
  "Iris Novak",
]

const buildOrgMembers = (
  parentId: string,
  count: number,
  role: string
): OrgNode[] =>
  Array.from({ length: count }, (_, index) => ({
    id: `${parentId}.member-${index + 1}`,
    name: ORG_MEMBER_NAMES[index % ORG_MEMBER_NAMES.length],
    role,
  }))

const orgTree: OrgNode[] = [
  {
    id: "engineering",
    name: "Engineering",
    role: "Department",
    children: [
      {
        id: "engineering.platform",
        name: "Platform",
        role: "Team",
        children: [
          {
            id: "engineering.platform.core",
            name: "Core Squad",
            role: "Squad",
            children: buildOrgMembers(
              "engineering.platform.core",
              7,
              "Backend Engineer"
            ),
          },
          {
            id: "engineering.platform.infra",
            name: "Infra Squad",
            role: "Squad",
            children: buildOrgMembers(
              "engineering.platform.infra",
              5,
              "Site Reliability Engineer"
            ),
          },
        ],
      },
      {
        id: "engineering.frontend",
        name: "Frontend",
        role: "Team",
        children: [
          {
            id: "engineering.frontend.web",
            name: "Web Squad",
            role: "Squad",
            children: buildOrgMembers(
              "engineering.frontend.web",
              6,
              "Frontend Engineer"
            ),
          },
          {
            id: "engineering.frontend.ds",
            name: "Design Systems Squad",
            role: "Squad",
            children: buildOrgMembers(
              "engineering.frontend.ds",
              4,
              "UI Engineer"
            ),
          },
        ],
      },
    ],
  },
  {
    id: "product",
    name: "Product",
    role: "Department",
    children: [
      {
        id: "product.discovery",
        name: "Discovery",
        role: "Team",
        children: buildOrgMembers("product.discovery", 5, "Product Manager"),
      },
      {
        id: "product.growth",
        name: "Growth",
        role: "Team",
        children: buildOrgMembers("product.growth", 8, "Growth Manager"),
      },
    ],
  },
  {
    id: "design",
    name: "Design",
    role: "Department",
    children: buildOrgMembers("design", 6, "Product Designer"),
  },
]

const countOrgDescendants = (node: OrgNode): number =>
  node.children?.reduce(
    (total, child) => total + 1 + countOrgDescendants(child),
    0
  ) ?? 0

const ORG_CHILDREN_PER_PAGE = 3

const useOrgTreeSource = () =>
  useDataCollectionSource({
    dataAdapter: {
      fetchData: async () => ({ records: orgTree }),
    },
    itemsWithChildren: (item: OrgNode) => !!item.children?.length,
    childrenCount: ({ item }: { item: OrgNode }) => item.children?.length,
    fetchChildren: async ({
      item,
      pagination,
    }: {
      item: OrgNode
      pagination?: ChildrenPaginationInfo
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 400))
      const all = item.children ?? []
      const currentPage = (pagination?.currentPage ?? 0) + 1
      const start = (currentPage - 1) * ORG_CHILDREN_PER_PAGE
      return {
        records: all.slice(start, start + ORG_CHILDREN_PER_PAGE),
        paginationInfo: {
          total: all.length,
          perPage: ORG_CHILDREN_PER_PAGE,
          currentPage,
          pagesCount: Math.ceil(all.length / ORG_CHILDREN_PER_PAGE),
          hasMore: currentPage * ORG_CHILDREN_PER_PAGE < all.length,
        },
      }
    },
  })

const orgColumns = [
  {
    id: "name",
    label: "Name",
    width: 320,
    render: (item: OrgNode) => item.name,
  },
  { id: "role", label: "Role", render: (item: OrgNode) => item.role },
  {
    id: "people",
    label: "People",
    render: (item: OrgNode) => {
      const descendants = countOrgDescendants(item)
      return descendants > 0 ? String(descendants) : "—"
    },
  },
]

const OrgNestedTable = ({
  nested,
}: {
  nested?: NestedTableOptions<OrgNode>
}) => {
  const source = useOrgTreeSource()

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        {
          type: "table",
          options: { columns: orgColumns, nested },
        },
      ]}
    />
  )
}

const NestedDemoSection = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div className="flex flex-col gap-1" role="group" aria-label={title}>
    <span className="text-sm font-medium text-f1-foreground">{title}</span>
    <div className="flex flex-wrap items-center gap-2">{children}</div>
  </div>
)

/**
 * Full playground for the programmatic API: create a controller with
 * `useNestedTable()`, pass it via `options.nested.control` and drive the
 * tree from anywhere. The toolbar also switches the children load mode
 * ("show more" vs eager) and the expand animation at runtime, and can reset
 * the table (and its children cache) back to its initial state.
 */
export const TableNestedProgrammaticControl: Story = {
  render: function Render() {
    const nestedTable = useNestedTable<OrgNode>()
    const [childrenMode, setChildrenMode] =
      useState<NestedChildrenDisplayMode>("paginated")
    const [expandAnimation, setExpandAnimation] =
      useState<NestedExpandAnimation>("stagger")
    const [lastEvent, setLastEvent] = useState("—")
    const [resetKey, setResetKey] = useState(0)

    return (
      <div className="flex flex-col gap-4">
        <NestedDemoSection title="Bulk expansion (expandAll / collapseAll)">
          <F0Button
            size="sm"
            label="Expand all"
            onClick={() => nestedTable.expandAll({ children: childrenMode })}
          />
          <F0Button
            size="sm"
            label="Expand 1 level"
            onClick={() =>
              nestedTable.expandAll({ depth: 1, children: childrenMode })
            }
          />
          <F0Button
            size="sm"
            label="Expand 2 levels"
            onClick={() =>
              nestedTable.expandAll({ depth: 2, children: childrenMode })
            }
          />
          <F0Button
            size="sm"
            variant="critical"
            label="Collapse all"
            onClick={() => nestedTable.collapseAll()}
          />
        </NestedDemoSection>
        <NestedDemoSection title="Targeted operations (expand / toggle / expandTo)">
          <F0Button
            size="sm"
            variant="outline"
            label="Expand Engineering branch (all pages)"
            onClick={() =>
              nestedTable.expandAll({
                where: (ctx) => ctx.item.id.startsWith("engineering"),
                children: "all",
              })
            }
          />
          <F0Button
            size="sm"
            variant="outline"
            label="Toggle Platform team"
            onClick={() => nestedTable.toggle("engineering.platform")}
          />
          <F0Button
            size="sm"
            variant="outline"
            label="Reveal Core Squad (expandTo)"
            onClick={() =>
              nestedTable.expandTo(
                [
                  "engineering",
                  "engineering.platform",
                  "engineering.platform.core",
                ],
                { children: childrenMode }
              )
            }
          />
        </NestedDemoSection>
        <div className="flex flex-wrap items-start gap-4">
          <NestedDemoSection title="Children load mode">
            {nestedChildrenDisplayModes.map((mode) => (
              <F0Button
                key={mode}
                size="sm"
                variant={childrenMode === mode ? "default" : "outline"}
                label={mode === "paginated" ? "Show more" : "Load all"}
                onClick={() => setChildrenMode(mode)}
              />
            ))}
          </NestedDemoSection>
          <NestedDemoSection title="Expand animation">
            {nestedExpandAnimations.map((animation) => (
              <F0Button
                key={animation}
                size="sm"
                variant={expandAnimation === animation ? "default" : "outline"}
                label={animation}
                onClick={() => setExpandAnimation(animation)}
              />
            ))}
          </NestedDemoSection>
          <NestedDemoSection title="Table state">
            <F0Button
              size="sm"
              variant="outline"
              label="Reset to initial state"
              onClick={() => {
                setResetKey((key) => key + 1)
                setLastEvent("—")
              }}
            />
            <span
              role="status"
              className="text-sm text-f1-foreground-secondary"
            >
              Last change: {lastEvent}
            </span>
          </NestedDemoSection>
        </div>
        <OrgNestedTable
          key={resetKey}
          nested={{
            control: nestedTable,
            expandAnimation,
            onExpandedChange: ({ item, depth, expanded }) =>
              setLastEvent(
                `${item.name} (depth ${depth}) → ${expanded ? "expanded" : "collapsed"}`
              ),
          }}
        />
      </div>
    )
  },
}

/**
 * Declarative auto-expansion: `defaultExpanded: 1` opens every root row on
 * mount (2 visible levels). Children keep their "show more" pagination.
 */
export const TableNestedAutoExpandFirstLevel: Story = {
  render: () => <OrgNestedTable nested={{ defaultExpanded: 1 }} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The defaultExpanded: 1 policy expands root rows, revealing depth-1 rows
    await canvas.findByText("Platform")
    await canvas.findByText("Discovery")
    // …but depth-1 rows stay collapsed, so their children are not rendered
    expect(canvas.queryByText("Core Squad")).toBeNull()
  },
}

/**
 * Criteria-based auto-expansion: a predicate receives `{ item, depth }`, so
 * any practical rule works — here every root department is expanded and the
 * whole Engineering branch is expanded with its children pages loaded
 * eagerly (no "show more" rows), while deeper levels outside Engineering
 * stay collapsed.
 */
export const TableNestedAutoExpandCriteria: Story = {
  render: function Render() {
    const [resetKey, setResetKey] = useState(0)

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <F0Button
            size="sm"
            variant="outline"
            label="Reset to initial state"
            onClick={() => setResetKey((key) => key + 1)}
          />
        </div>
        <OrgNestedTable
          key={resetKey}
          nested={{
            defaultExpanded: (ctx) =>
              ctx.depth === 0 || ctx.item.id.startsWith("engineering"),
            defaultExpandedChildren: "all",
          }}
        />
      </div>
    )
  },
}

/**
 * Expand animations: `"fade"` reveals all rows at once, while `"stagger"`,
 * `"slide"` and `"pop"` sequence them by sibling index and depth — so a
 * cached subtree still cascades level by level. Collapse stays instant and
 * `prefers-reduced-motion` disables every mode. Use the toolbar to switch
 * modes, replay the animation on cached data (Collapse all → Expand all),
 * or reset the table (clearing the children cache).
 */
export const TableNestedExpandAnimation: Story = {
  render: function Render() {
    const nestedTable = useNestedTable<OrgNode>()
    const [expandAnimation, setExpandAnimation] =
      useState<NestedExpandAnimation>("stagger")
    const [resetKey, setResetKey] = useState(0)

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div
            className="flex items-center gap-2"
            role="group"
            aria-label="Expand animation"
          >
            {nestedExpandAnimations.map((animation) => (
              <F0Button
                key={animation}
                size="sm"
                variant={expandAnimation === animation ? "default" : "outline"}
                label={animation}
                onClick={() => setExpandAnimation(animation)}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <F0Button
              size="sm"
              label="Expand all"
              onClick={() => nestedTable.expandAll()}
            />
            <F0Button
              size="sm"
              variant="outline"
              label="Collapse all"
              onClick={() => nestedTable.collapseAll()}
            />
            <F0Button
              size="sm"
              variant="outline"
              label="Reset to initial state"
              onClick={() => setResetKey((key) => key + 1)}
            />
          </div>
        </div>
        <OrgNestedTable
          key={resetKey}
          nested={{
            control: nestedTable,
            defaultExpanded: 1,
            expandAnimation,
          }}
        />
      </div>
    )
  },
}
