import { Meta, StoryObj } from "@storybook/react-vite"
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
  title: "Patterns/Data Collection/Visualizations/Table",
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
