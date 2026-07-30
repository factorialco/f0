import { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, waitFor, within } from "storybook/test"
import { useState, useMemo } from "react"

import { F0Button } from "@/components/F0Button"
import {
  CompoundCellValue,
  CompoundTone,
} from "@/ui/value-display/types/compound"

import { ExampleComponent, getMockVisualizations } from "../../mockData"
import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../../index"

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
              headerGroups: {
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

export const TableWithCollapsibleHeaderGroups: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A header group becomes collapsible as soon as its definition declares `collapsedColumns`: the ids of the columns that stay visible while the group is collapsed. Everything else in the group is hidden until the user expands it. Groups declared as a plain string (`headcount` here) stay purely visual.",
      },
    },
  },
  render: () => {
    const records = [
      {
        id: 1,
        team: "Engineering",
        headcount: 42,
        janSalaries: "€310,400",
        janBonuses: "€24,000",
        janTotal: "€334,400",
        febSalaries: "€318,900",
        febBonuses: "€12,500",
        febTotal: "€331,400",
      },
      {
        id: 2,
        team: "Design",
        headcount: 11,
        janSalaries: "€78,200",
        janBonuses: "€4,000",
        janTotal: "€82,200",
        febSalaries: "€80,100",
        febBonuses: "€2,000",
        febTotal: "€82,100",
      },
      {
        id: 3,
        team: "Sales",
        headcount: 27,
        janSalaries: "€164,700",
        janBonuses: "€38,900",
        janTotal: "€203,600",
        febSalaries: "€169,300",
        febBonuses: "€41,200",
        febTotal: "€210,500",
      },
    ]

    const source = useDataCollectionSource({
      dataAdapter: {
        fetchData: async () => ({ records }),
      },
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              frozenColumns: 1,
              headerGroups: {
                headcount: "Headcount",
                january: {
                  label: "January",
                  // Only the total stays visible while the group is collapsed
                  collapsedColumns: ["jan-total"],
                },
                february: {
                  label: "February",
                  collapsedColumns: ["feb-total"],
                  defaultCollapsed: true,
                },
              },
              onHeaderGroupCollapsedChange: (groupId, collapsed) => {
                console.log(`Header group "${groupId}" collapsed:`, collapsed)
              },
              columns: [
                {
                  label: "Team",
                  id: "team",
                  render: (item) => item.team,
                },
                {
                  label: "People",
                  id: "people",
                  align: "right",
                  headerGroupId: "headcount",
                  render: (item) => `${item.headcount}`,
                },
                {
                  label: "Salaries",
                  id: "jan-salaries",
                  align: "right",
                  headerGroupId: "january",
                  render: (item) => item.janSalaries,
                },
                {
                  label: "Bonuses",
                  id: "jan-bonuses",
                  align: "right",
                  headerGroupId: "january",
                  render: (item) => item.janBonuses,
                },
                {
                  label: "Total",
                  id: "jan-total",
                  align: "right",
                  headerGroupId: "january",
                  render: (item) => item.janTotal,
                },
                {
                  label: "Salaries",
                  id: "feb-salaries",
                  align: "right",
                  headerGroupId: "february",
                  render: (item) => item.febSalaries,
                },
                {
                  label: "Bonuses",
                  id: "feb-bonuses",
                  align: "right",
                  headerGroupId: "february",
                  render: (item) => item.febBonuses,
                },
                {
                  label: "Total",
                  id: "feb-total",
                  align: "right",
                  headerGroupId: "february",
                  render: (item) => item.febTotal,
                },
              ],
            },
          },
        ]}
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // February starts collapsed: only its total column is rendered.
    const february = await canvas.findByRole("button", { name: "February" })
    expect(february).toHaveAttribute("aria-expanded", "false")
    expect(canvas.queryByText("€318,900")).not.toBeInTheDocument()

    await userEvent.click(february)

    await expect(await canvas.findByText("€318,900")).toBeInTheDocument()
    expect(february).toHaveAttribute("aria-expanded", "true")
  },
}

export const TableWithCollapsibleHeaderGroupsAndSorting: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Sorting and collapsing don't compete: the collapse toggle lives in the spanning header row and the sort control in the column row below it, so a group's own cell never carries a sort affordance. Sorting is owned by the datasource and keyed by sorting key, not by column, so collapsing a group never resets it — sort by *Bonuses*, collapse *January*, and the rows keep that order even though the column (and its indicator) is gone. Expanding brings the indicator back. This mirrors what already happens when a column is hidden from the column-settings popover.",
      },
    },
  },
  render: () => {
    const records = [
      {
        id: 1,
        team: "Engineering",
        headcount: 42,
        janSalaries: 310400,
        janBonuses: 24000,
        febSalaries: 318900,
        febBonuses: 12500,
      },
      {
        id: 2,
        team: "Design",
        headcount: 11,
        janSalaries: 78200,
        janBonuses: 4000,
        febSalaries: 80100,
        febBonuses: 2000,
      },
      {
        id: 3,
        team: "Sales",
        headcount: 27,
        janSalaries: 164700,
        janBonuses: 38900,
        febSalaries: 169300,
        febBonuses: 41200,
      },
      {
        id: 4,
        team: "Support",
        headcount: 19,
        janSalaries: 96500,
        janBonuses: 11200,
        febSalaries: 98400,
        febBonuses: 9800,
      },
    ]

    const eur = (value: number) => `€${value.toLocaleString("en-US")}`
    const janTotal = (item: (typeof records)[number]) =>
      item.janSalaries + item.janBonuses
    const febTotal = (item: (typeof records)[number]) =>
      item.febSalaries + item.febBonuses

    const sortValue: Record<
      string,
      (item: (typeof records)[number]) => number | string
    > = {
      team: (item) => item.team,
      "jan-salaries": (item) => item.janSalaries,
      "jan-bonuses": (item) => item.janBonuses,
      "jan-total": janTotal,
      "feb-salaries": (item) => item.febSalaries,
      "feb-bonuses": (item) => item.febBonuses,
      "feb-total": febTotal,
    }

    const source = useDataCollectionSource({
      sortings: {
        team: { label: "Team" },
        "jan-salaries": { label: "January salaries" },
        "jan-bonuses": { label: "January bonuses" },
        "jan-total": { label: "January total" },
        "feb-salaries": { label: "February salaries" },
        "feb-bonuses": { label: "February bonuses" },
        "feb-total": { label: "February total" },
      },
      dataAdapter: {
        fetchData: async ({ sortings }) => {
          if (!sortings || sortings.length === 0) return { records }

          const [{ field, order }] = sortings
          const read = sortValue[field as string]
          if (!read) return { records }

          const sorted = [...records].sort((a, b) => {
            const left = read(a)
            const right = read(b)
            const diff =
              typeof left === "string" && typeof right === "string"
                ? left.localeCompare(right)
                : Number(left) - Number(right)
            return order === "asc" ? diff : -diff
          })

          return { records: sorted }
        },
      },
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              frozenColumns: 1,
              headerGroups: {
                headcount: "Headcount",
                january: {
                  label: "January",
                  collapsedColumns: ["jan-total"],
                },
                february: {
                  label: "February",
                  collapsedColumns: ["feb-total"],
                },
              },
              columns: [
                {
                  label: "Team",
                  id: "team",
                  sorting: "team",
                  render: (item) => item.team,
                },
                {
                  label: "People",
                  id: "people",
                  align: "right",
                  headerGroupId: "headcount",
                  render: (item) => `${item.headcount}`,
                },
                {
                  label: "Salaries",
                  id: "jan-salaries",
                  align: "right",
                  sorting: "jan-salaries",
                  headerGroupId: "january",
                  render: (item) => eur(item.janSalaries),
                },
                {
                  label: "Bonuses",
                  id: "jan-bonuses",
                  align: "right",
                  sorting: "jan-bonuses",
                  headerGroupId: "january",
                  render: (item) => eur(item.janBonuses),
                },
                {
                  label: "Total",
                  id: "jan-total",
                  align: "right",
                  sorting: "jan-total",
                  headerGroupId: "january",
                  render: (item) => eur(janTotal(item)),
                },
                {
                  label: "Salaries",
                  id: "feb-salaries",
                  align: "right",
                  sorting: "feb-salaries",
                  headerGroupId: "february",
                  render: (item) => eur(item.febSalaries),
                },
                {
                  label: "Bonuses",
                  id: "feb-bonuses",
                  align: "right",
                  sorting: "feb-bonuses",
                  headerGroupId: "february",
                  render: (item) => eur(item.febBonuses),
                },
                {
                  label: "Total",
                  id: "feb-total",
                  align: "right",
                  sorting: "feb-total",
                  headerGroupId: "february",
                  render: (item) => eur(febTotal(item)),
                },
              ],
            },
          },
        ]}
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Grouping is what lets two columns share a label, so "Bonuses" is
    // deliberately ambiguous: January's comes first, February's second.
    const bonusesHeaders = () =>
      canvas
        .getAllByRole("columnheader")
        .filter((cell) => cell.textContent?.includes("Bonuses"))

    // The first two rows are the spanning group row and the column row.
    const firstTeam = () =>
      canvas.getAllByRole("row")[2]?.querySelector("td")?.textContent

    const january = await canvas.findByRole("button", { name: "January" })
    await waitFor(() => expect(bonusesHeaders()).toHaveLength(2))

    // The group's own cell carries the collapse toggle and nothing else — the
    // sort control sits in the column header row below it.
    expect(january.closest("th")).not.toHaveAttribute("aria-sort")

    // Sort ascending by January's Bonuses, which January will hide on collapse.
    await userEvent.click(
      within(bonusesHeaders()[0]).getByRole("button", { name: "Sort" })
    )
    await waitFor(() =>
      expect(bonusesHeaders()[0]).toHaveAttribute("aria-sort", "ascending")
    )

    // Design has the smallest January bonus, so it leads after sorting.
    await waitFor(() => expect(firstTeam()).toContain("Design"))

    // Collapsing hides the sorted column, but the order it produced survives.
    // February stays expanded, so one "Bonuses" header remains — its own.
    await userEvent.click(january)
    await waitFor(() =>
      expect(january).toHaveAttribute("aria-expanded", "false")
    )
    expect(bonusesHeaders()).toHaveLength(1)
    expect(bonusesHeaders()[0].closest("th")).not.toHaveAttribute(
      "aria-sort",
      "ascending"
    )
    expect(firstTeam()).toContain("Design")

    // Expanding restores January's column with its indicator intact.
    await userEvent.click(january)
    await waitFor(() => expect(bonusesHeaders()).toHaveLength(2))
    expect(bonusesHeaders()[0]).toHaveAttribute("aria-sort", "ascending")
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
