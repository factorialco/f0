import { describe, expect, it } from "vitest"

import {
  computeCategoryAxisLayout,
  computeLabelInterval,
  deltaRow,
  escapeTooltipText,
  renderMarker,
  renderValueTooltip,
} from "../utils/options"
import { resolveChartTheme } from "../utils/theme"

describe("escapeTooltipText", () => {
  it("escapes HTML-significant characters in consumer-provided text", () => {
    expect(escapeTooltipText(`<img src=x onerror="alert('xss')">&`)).toBe(
      "&lt;img src=x onerror=&quot;alert(&#039;xss&#039;)&quot;&gt;&amp;"
    )
  })
})

describe("computeLabelInterval", () => {
  it("returns undefined when labels fit comfortably", () => {
    // 5 categories in 600px = 120px each, well above MIN_LABEL_WIDTH (60)
    expect(computeLabelInterval(5, 600)).toBeUndefined()
  })

  it("returns an interval > 0 when labels don't fit", () => {
    // 30 categories in 300px = 10px each, way below MIN_LABEL_WIDTH
    const interval = computeLabelInterval(30, 300)
    expect(interval).toBeDefined()
    expect(interval).toBeGreaterThan(0)
  })

  it("returns undefined when width is 0", () => {
    expect(computeLabelInterval(10, 0)).toBeUndefined()
  })

  it("returns undefined when width is undefined", () => {
    expect(computeLabelInterval(10, undefined)).toBeUndefined()
  })

  it("returns undefined for a single category", () => {
    expect(computeLabelInterval(1, 100)).toBeUndefined()
  })

  it("returns undefined when exactly at the threshold", () => {
    // 10 categories in 600px = 60px each, exactly MIN_LABEL_WIDTH
    expect(computeLabelInterval(10, 600)).toBeUndefined()
  })

  it("returns interval when just below the threshold", () => {
    // 11 categories in 600px ≈ 54.5px each, below MIN_LABEL_WIDTH
    const interval = computeLabelInterval(11, 600)
    expect(interval).toBeDefined()
    expect(interval).toBeGreaterThan(0)
  })

  it("uses the custom minSpace when provided (vertical/Y axis labels)", () => {
    // 12 categories in 360px = 30px each. With the 60px width default this
    // would skip (30 < 60), but a ~25px line-height min fits every label.
    expect(computeLabelInterval(12, 360)).toBeGreaterThan(0) // default 60 → skips
    expect(computeLabelInterval(12, 360, 25)).toBeUndefined() // line-height → all fit
  })
})

describe("computeCategoryAxisLayout", () => {
  it("returns undefined when there's no width", () => {
    expect(computeCategoryAxisLayout(10, undefined, false)).toBeUndefined()
    expect(computeCategoryAxisLayout(10, 0, false)).toBeUndefined()
  })

  it("returns undefined for a single category", () => {
    expect(computeCategoryAxisLayout(1, 600, false)).toBeUndefined()
  })

  it("shows every label with truncation when there is enough room (centered)", () => {
    // 10 cats in 600px → ~60px slot - 8 gap = 52px label width
    const layout = computeCategoryAxisLayout(10, 600, false)
    expect(layout).toBeDefined()
    expect(layout!.interval).toBe(0)
    expect(layout!.labelWidth).toBeGreaterThanOrEqual(24)
  })

  it("caps the label width below the step when edge-aligned (line chart)", () => {
    // 10 cats in 600px, edgeAligned: step = 600/9 ≈ 66.67px
    // labelWidth ≈ 66.67 * 0.65 ≈ 43px (Math.floor → 43)
    const layout = computeCategoryAxisLayout(10, 600, true)
    expect(layout).toBeDefined()
    expect(layout!.interval).toBe(0)
    expect(layout!.labelWidth).toBeLessThan(600 / 9)
    expect(layout!.labelWidth).toBeGreaterThanOrEqual(24)
  })

  it("falls back to skipping labels when even truncated labels don't fit", () => {
    // 100 categories in 200px → way too crowded
    const layout = computeCategoryAxisLayout(100, 200, false)
    expect(layout).toBeDefined()
    expect(layout!.interval).toBeGreaterThan(0)
    expect(layout!.labelWidth).toBeGreaterThanOrEqual(24)
  })

  it("never returns a label width below the readable minimum", () => {
    const layout = computeCategoryAxisLayout(50, 100, true)
    expect(layout).toBeDefined()
    expect(layout!.labelWidth).toBeGreaterThanOrEqual(24)
  })
})

// ---------------------------------------------------------------------------
// Shared tooltip renderer — every chart type funnels through this.
// ---------------------------------------------------------------------------

describe("renderValueTooltip", () => {
  const theme = resolveChartTheme()

  it("renders marker, title, subtitle, value and rows", () => {
    const html = renderValueTooltip(
      {
        marker: '<span class="dot"></span>',
        title: "Variable pay",
        subtitle: "Q2",
        value: "22,000",
        rows: [{ value: "14.1%", label: "of total" }],
      },
      theme
    )
    expect(html).toContain('<span class="dot"></span>') // trusted, unescaped
    expect(html).toContain("Variable pay")
    expect(html).toContain("Q2")
    expect(html).toContain("22,000")
    expect(html).toContain("14.1%")
    expect(html).toContain("of total")
    expect(html).toContain("min-width: 130px")
  })

  it("escapes everything except the ECharts marker", () => {
    const html = renderValueTooltip(
      {
        marker: '<span class="dot"></span>',
        title: "<script>x</script>",
        subtitle: "<b>c</b>",
        value: "<em>1</em>",
        rows: [{ value: "<i>2</i>", label: "<u>l</u>" }],
      },
      theme
    )
    expect(html).toContain('<span class="dot"></span>')
    expect(html).not.toContain("<script>")
    expect(html).not.toContain("<b>")
    expect(html).not.toContain("<em>")
    expect(html).not.toContain("<i>")
  })

  it("omits sections that were not provided and drops falsy rows", () => {
    const html = renderValueTooltip(
      { title: "Only a title", rows: [undefined, false] },
      theme
    )
    expect(html).toContain("Only a title")
    expect(html).not.toContain("font-size: 20px") // no headline value
    expect(html).not.toContain("<strong")
  })
})

describe("deltaRow", () => {
  const theme = resolveChartTheme()

  it("signs and colors an increase", () => {
    const row = deltaRow(125, 100, "from previous", theme)
    expect(row?.value).toBe("+25.0%")
    expect(row?.color).toBe(theme.colors.positive)
  })

  it("colors a decrease and keeps the minus sign", () => {
    const row = deltaRow(75, 100, "from previous", theme)
    expect(row?.value).toBe("-25.0%")
    expect(row?.color).toBe(theme.colors.critical)
  })

  it("returns nothing without a usable baseline", () => {
    expect(deltaRow(10, undefined, "l", theme)).toBeUndefined()
    expect(deltaRow(10, 0, "l", theme)).toBeUndefined()
    expect(deltaRow(Number.NaN, 10, "l", theme)).toBeUndefined()
  })

  it("falls back to the primary foreground when the theme omits delta colors", () => {
    const bare = {
      ...theme,
      colors: { ...theme.colors, positive: undefined, critical: undefined },
    }
    const html = renderValueTooltip(
      { value: "125", rows: [deltaRow(125, 100, "from previous", bare)] },
      bare
    )
    expect(html).toContain(`color: ${theme.colors.foreground}`)
  })
})

describe("renderMarker", () => {
  it("builds a dot in the requested color", () => {
    expect(renderMarker("#0d9488")).toContain("background-color:#0d9488")
  })

  it("strips characters that would break out of the style attribute", () => {
    expect(renderMarker('red"><script>alert(1)</script>')).not.toContain(
      "<script>"
    )
  })
})
