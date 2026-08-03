import { beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render } from "@/testing/test-utils"

import { F0DataChart } from "../F0DataChart"

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

const containerSize = { width: 800, height: 320 }

vi.mock("../utils/useContainerSize", () => ({
  useContainerSize: () => containerSize,
}))

function getLatestOption() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as {
    tooltip?: { formatter?: (params: unknown) => string }
  }
}

/** Run the tooltip formatter the way ECharts would on hover. */
function hover(params: unknown) {
  const formatter = getLatestOption().tooltip?.formatter
  if (!formatter) throw new Error("the chart built no tooltip formatter")
  return formatter(params)
}

const funnelProps = {
  type: "funnel" as const,
  series: {
    name: "Hiring",
    data: [
      { name: "Applied", value: 1200 },
      { name: "Screened", value: 480 },
      { name: "Interviewed", value: 120 },
      { name: "Hired", value: 24 },
    ],
  },
}

beforeEach(() => {
  setOptionMock.mockClear()
  containerSize.width = 800
  containerSize.height = 320
})

// The formatter runs inside ECharts on hover, so it only gets exercised by
// calling it with the params ECharts passes.
describe("FunnelChart — tooltip", () => {
  it("shows the stage and its value, with no conversion rows by default", () => {
    render(<F0DataChart {...funnelProps} />)

    const html = hover({
      name: "Screened",
      value: 480,
      marker: '<span class="trusted-marker"></span>',
    })
    expect(html).toContain('<span class="trusted-marker"></span>')
    expect(html).toContain("Screened")
    expect(html).toContain((480).toLocaleString())
    expect(html).not.toContain("of total")
  })

  it("adds share-of-first and step-over-step rows when showConversion is set", () => {
    render(<F0DataChart {...funnelProps} showConversion />)

    const html = hover({ name: "Interviewed", value: 120 })
    expect(html).toContain("10.0%") // 120 of the 1,200 that applied
    expect(html).toContain("of total")
    expect(html).toContain("25.0%") // 120 of the 480 screened
    expect(html).toContain("from Screened")
  })

  it("omits the step row on the first stage, which has nothing before it", () => {
    render(<F0DataChart {...funnelProps} showConversion />)

    const html = hover({ name: "Applied", value: 1200 })
    expect(html).toContain("100%")
    expect(html).toContain("of total")
    expect(html).not.toContain("from ")
  })

  it("reads the previous stage from rendered order, not array order", () => {
    render(<F0DataChart {...funnelProps} sort="ascending" showConversion />)

    // Ascending renders Hired → Interviewed → Screened → Applied, so the stage
    // before "Screened" is "Interviewed", and 100% is the smallest stage.
    const html = hover({ name: "Screened", value: 480 })
    expect(html).toContain("from Interviewed")
    expect(html).toContain("400.0%") // 480 over the 120 interviewed
  })

  it("keeps the value alone when a stage has nothing to convert from", () => {
    render(
      <F0DataChart
        type="funnel"
        showConversion
        series={{
          name: "Hiring",
          data: [
            { name: "Applied", value: 0 },
            { name: "Hired", value: 0 },
          ],
        }}
      />
    )

    const html = hover({ name: "Applied", value: 0 })
    expect(html).toContain((0).toLocaleString())
    expect(html).not.toContain("of total")
    expect(html).not.toContain("NaN")
    expect(html).not.toContain("Infinity")
  })

  it("escapes the stage name it names in a conversion row", () => {
    render(
      <F0DataChart
        type="funnel"
        showConversion
        tooltipValueFormatter={(v) => `${v} people`}
        series={{
          name: "Hiring",
          data: [
            { name: "<script>x</script>", value: 100 },
            { name: "Hired", value: 25 },
          ],
        }}
      />
    )

    const html = hover({ name: "Hired", value: 25 })
    expect(html).toContain("25 people")
    // The previous stage's name lands in a label — escaped like any other text.
    expect(html).toContain("&lt;script&gt;")
    expect(html).not.toContain("<script>")
  })

  it("shows the full number, not the compact stage-label format", () => {
    render(
      <F0DataChart {...funnelProps} valueFormatter={(v) => `${v / 1000}k`} />
    )

    const html = hover({ name: "Screened", value: 480 })
    expect(html).toContain((480).toLocaleString())
    expect(html).not.toContain("0.48k") // that stays on the stage label
  })

  it("lets tooltipValueFormatter set the tooltip number", () => {
    render(
      <F0DataChart
        {...funnelProps}
        valueFormatter={(v) => `${v / 1000}k`}
        tooltipValueFormatter={(v) => `${v.toLocaleString("en-US")} people`}
      />
    )

    expect(hover({ name: "Screened", value: 480 })).toContain("480 people")
  })

  it("survives params with no name or value", () => {
    render(<F0DataChart {...funnelProps} showConversion />)

    const html = hover({})
    expect(html).toContain((0).toLocaleString())
    expect(html).not.toContain("of total") // unknown stage, no position to use
    expect(html).not.toContain("undefined")
  })
})
