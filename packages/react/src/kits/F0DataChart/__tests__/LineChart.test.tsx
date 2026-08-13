import { beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render } from "@/testing/test-utils"

import { F0DataChart } from "../F0DataChart"

// ---------------------------------------------------------------------------
// ECharts mock
//
// We can't render real canvases in jsdom, so we mock the `echarts` module and
// capture every `setOption` call. The shared `lastSetOption` ref is what the
// tests inspect to assert on the option object the line chart hook produced.
// ---------------------------------------------------------------------------

const setOptionMock = vi.fn()

vi.mock("echarts", () => ({
  init: vi.fn(() => ({
    setOption: setOptionMock,
    resize: vi.fn(),
    dispose: vi.fn(),
    getDom: vi.fn(() => document.createElement("div")),
    on: vi.fn(),
    off: vi.fn(),
  })),
  use: vi.fn(),
  getInstanceByDom: vi.fn(),
  graphic: {
    LinearGradient: vi.fn(function LinearGradient(this: object) {
      return this
    }),
  },
}))

vi.mock("echarts/components", () => ({
  AriaComponent: {},
}))

// ---------------------------------------------------------------------------
// useContainerSize mock — lets each test pin a discrete container width so we
// can assert on each responsive breakpoint without depending on jsdom layout.
// ---------------------------------------------------------------------------

const containerSize = { width: 800, height: 320 }

vi.mock("../utils/useContainerSize", () => ({
  useContainerSize: () => containerSize,
}))

function getLatestOption() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as {
    series: Array<{ areaStyle?: unknown }>
    legend?: { show?: boolean }
    xAxis: { axisLabel: { show: boolean } }
    yAxis: { axisLabel: { show: boolean } }
    tooltip?: {
      formatter?: (params: unknown) => string
    }
  }
}

beforeEach(() => {
  setOptionMock.mockClear()
  containerSize.width = 800
  containerSize.height = 320
})

describe("LineChart — area mode", () => {
  it("renders area fill when there is exactly one series", () => {
    render(
      <F0DataChart
        type="line"
        categories={["Jan", "Feb", "Mar"]}
        series={[{ name: "Revenue", data: [1, 2, 3] }]}
        showArea
      />
    )

    const option = getLatestOption()
    expect(option.series).toHaveLength(1)
    expect(option.series[0].areaStyle).toBeDefined()
  })

  it("forces area off for multiple series even when showArea=true", () => {
    render(
      <F0DataChart
        type="line"
        categories={["Jan", "Feb", "Mar"]}
        series={[
          { name: "A", data: [1, 2, 3] },
          { name: "B", data: [3, 2, 1] },
        ]}
        showArea
      />
    )

    const option = getLatestOption()
    expect(option.series).toHaveLength(2)
    for (const s of option.series) {
      expect(s.areaStyle).toBeUndefined()
    }
  })

  it("forces area off even when a per-series override sets showArea=true", () => {
    render(
      <F0DataChart
        type="line"
        categories={["Jan", "Feb"]}
        series={[
          { name: "A", data: [1, 2], showArea: true },
          { name: "B", data: [2, 1], showArea: true },
        ]}
        showArea={false}
      />
    )

    const option = getLatestOption()
    for (const s of option.series) {
      expect(s.areaStyle).toBeUndefined()
    }
  })
})

describe("LineChart — responsive breakpoints", () => {
  const minimalProps = {
    type: "line" as const,
    categories: ["Jan", "Feb", "Mar"],
    series: [{ name: "A", data: [1, 2, 3] }],
  }

  it("hides legend and both axes at the small breakpoint (< 220px)", () => {
    containerSize.width = 180
    render(<F0DataChart {...minimalProps} />)

    const option = getLatestOption()
    expect(option.legend).toBeUndefined()
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(option.yAxis.axisLabel.show).toBe(false)
  })

  it("shows legend and Y axis but hides X axis at the medium breakpoint (220–519px)", () => {
    containerSize.width = 320
    render(<F0DataChart {...minimalProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(option.yAxis.axisLabel.show).toBe(true)
  })

  it("shows legend and both axes at the large breakpoint (>= 520px)", () => {
    containerSize.width = 720
    render(<F0DataChart {...minimalProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    expect(option.xAxis.axisLabel.show).toBe(true)
    expect(option.yAxis.axisLabel.show).toBe(true)
  })
})

describe("LineChart — tooltip value formatting", () => {
  const hoverFirstPoint = () =>
    getLatestOption().tooltip?.formatter?.([
      { axisValue: "A", seriesName: "S", value: 107505, dataIndex: 0 },
    ])

  it("falls back to the axis formatter when no tooltipValueFormatter is given", () => {
    render(
      <F0DataChart
        type="line"
        categories={["A"]}
        series={[{ name: "S", data: [107505] }]}
        valueFormatter={(v) => `${Math.round(v / 1000)}K €`}
      />
    )

    expect(hoverFirstPoint()).toContain("108K €")
  })

  it("uses a plain localized number when neither formatter is given", () => {
    render(
      <F0DataChart
        type="line"
        categories={["A"]}
        series={[{ name: "S", data: [107505] }]}
      />
    )

    expect(hoverFirstPoint()).toContain((107505).toLocaleString())
  })

  it("lets tooltipValueFormatter keep a unit the axis formatter would drop", () => {
    render(
      <F0DataChart
        type="line"
        categories={["A"]}
        series={[{ name: "S", data: [107505] }]}
        valueFormatter={(v) => `${Math.round(v / 1000)}K`}
        tooltipValueFormatter={(v) => `${v.toLocaleString("en-US")} €`}
      />
    )

    expect(hoverFirstPoint()).toContain("107,505 €")
  })
})

// The count of entities behind a plotted point — how many people an average
// was taken over, which the value alone never says.
describe("LineChart — segment context", () => {
  const trend = {
    categories: ["Jan", "Feb"],
    series: [{ name: "Average absence days", data: [3.2, 4.1] }],
  }

  const hover = (dataIndex: number, seriesName = "Average absence days") =>
    getLatestOption().tooltip?.formatter?.([
      { axisValue: "Jan", seriesName, value: 3.2, dataIndex },
    ])

  it("adds a row naming what it counts", () => {
    render(
      <F0DataChart
        type="line"
        {...trend}
        context={[{ name: "Active headcount", data: [1204, 380] }]}
      />
    )

    const html = hover(0)
    expect(html).toContain("1,204")
    expect(html).toContain("Active headcount")
  })

  it("lets a formatter inflect the label to agree with the count", () => {
    render(
      <F0DataChart
        type="line"
        {...trend}
        context={[{ name: "Active headcount", data: [256, 1] }]}
        contextLabelFormatter={(count) => (count === 1 ? "person" : "people")}
      />
    )

    expect(hover(0)).toContain("people")
    expect(hover(1)).toContain("person")
  })

  // The value formatter carries the plotted measure's unit; a headcount is not
  // measured in it.
  it("formats the count as a plain integer, never in the measure's unit", () => {
    render(
      <F0DataChart
        type="line"
        {...trend}
        valueFormatter={(v) => `${v} days`}
        context={[{ name: "Active headcount", data: [1204, 380] }]}
      />
    )

    const html = hover(0)
    expect(html).toContain("1,204")
    expect(html).not.toContain("1,204 days")
  })

  // A multi-series card already lists every series; per-series counts would
  // double its length, so only a single shared entry earns a row there.
  it("adds one shared row to a multi-series card", () => {
    render(
      <F0DataChart
        type="line"
        categories={["Jan"]}
        series={[
          { name: "Engineering", data: [3.2] },
          { name: "Sales", data: [2.1] },
        ]}
        context={[{ name: "Active headcount", data: [1204] }]}
      />
    )

    const html = getLatestOption().tooltip?.formatter?.([
      { axisValue: "Jan", seriesName: "Engineering", value: 3.2, dataIndex: 0 },
      { axisValue: "Jan", seriesName: "Sales", value: 2.1, dataIndex: 0 },
    ])
    expect(html).toContain("Engineering")
    expect(html).toContain("Sales")
    expect(html).toContain("1,204")
  })

  it("renders the usual tooltip when no context is given", () => {
    render(<F0DataChart type="line" {...trend} />)

    expect(hover(0)).not.toContain("headcount")
  })
})
