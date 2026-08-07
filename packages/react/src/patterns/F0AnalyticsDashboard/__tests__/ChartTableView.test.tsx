import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { ChartTableView } from "../components/ChartItem/ChartItem"

vi.mock("@/patterns/OneDataCollection/hooks/useDataCollectionSource", () => ({
  useDataCollectionSource: (definition: unknown) => definition,
}))

vi.mock("@/patterns/OneDataCollection", () => ({
  OneDataCollection: ({
    source,
    visualizations,
  }: {
    source: {
      dataAdapter: { fetchData: () => { records: Record<string, unknown>[] } }
      columns: { id: string; label: string }[]
    }
    visualizations: {
      options: {
        columns: {
          label: string
          render: (row: Record<string, unknown>) => string
        }[]
      }
    }[]
  }) => {
    const rows = source.dataAdapter.fetchData().records
    const columns = visualizations[0].options.columns
    return (
      <>
        <output data-testid="source-column-ids">
          {source.columns.map((column) => column.id).join(",")}
        </output>
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.label}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={column.label}>{column.render(row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  },
}))

describe("ChartTableView", () => {
  it("renders duplicate series names as distinct qualified columns and cells", () => {
    render(
      <ChartTableView
        config={{
          type: "combo",
          primaryAxisLabel: "Amount",
          secondaryAxisLabel: "Percent",
        }}
        data={{
          categories: ["Jan"],
          barSeries: [
            { name: "Revenue", data: [10] },
            { name: "Revenue", data: [20] },
          ],
          lineSeries: [{ name: "Revenue", data: [5] }],
        }}
      />
    )

    expect(screen.getByText("Revenue · Amount (1)")).toBeInTheDocument()
    expect(screen.getByText("Revenue · Amount (2)")).toBeInTheDocument()
    expect(screen.getByText("Revenue · Percent")).toBeInTheDocument()
    expect(screen.getByText("10")).toBeInTheDocument()
    expect(screen.getByText("20")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
    expect(screen.getByTestId("source-column-ids")).toHaveTextContent(
      "category,bar-0,bar-1,line-0"
    )
  })

  it("omits transient empty series from source columns", () => {
    render(
      <ChartTableView
        config={{
          type: "combo",
          primaryAxisLabel: "Amount",
          secondaryAxisLabel: "Percent",
        }}
        data={{
          categories: ["Jan"],
          barSeries: [
            { name: "Revenue", data: [] },
            { name: "Revenue", data: [20] },
          ],
          lineSeries: [{ name: "Revenue", data: [] }],
        }}
      />
    )

    expect(screen.getByText("Revenue · Amount")).toBeInTheDocument()
    expect(screen.getByTestId("source-column-ids")).toHaveTextContent(
      "category,bar-0"
    )
  })
})
