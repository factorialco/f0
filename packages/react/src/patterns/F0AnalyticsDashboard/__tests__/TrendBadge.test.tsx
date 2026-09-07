import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"
import { F0Icon } from "@/components/F0Icon"
import { ArrowDown, ArrowUp } from "@/icons/app"

import type { DashboardMetricTrend } from "../types"

import { TrendBadge, toTrendBadge } from "../components/TrendBadge/TrendBadge"

type Direction = DashboardMetricTrend["direction"]
type Sentiment = DashboardMetricTrend["sentiment"]

/** The arrows are bare SVG paths, so the drawn one is named by its own markup. */
function arrowMarkup(icon: typeof ArrowUp) {
  const { container, unmount } = render(<F0Icon icon={icon} size="sm" />)
  const markup = container.querySelector("svg")!.innerHTML
  unmount()
  return markup
}

function renderBadge(direction: Direction, sentiment: Sentiment) {
  const { container } = render(
    <TrendBadge
      trend={toTrendBadge({ direction, label: "1.2 pp", sentiment })}
    />
  )
  return {
    label: container.querySelector("span[aria-hidden='true']")!,
    arrow: container.querySelector("svg"),
  }
}

describe("TrendBadge", () => {
  // Sentiment absent: exactly what the badge showed before it existed.
  const cases: [Direction, Sentiment, string, string | null][] = [
    ["up", undefined, "text-f1-foreground-positive", "text-f1-icon-positive"],
    ["down", undefined, "text-f1-foreground-critical", "text-f1-icon-critical"],
    ["flat", undefined, "text-f1-foreground-secondary", null],
    ["up", "positive", "text-f1-foreground-positive", "text-f1-icon-positive"],
    ["up", "negative", "text-f1-foreground-critical", "text-f1-icon-critical"],
    ["up", "neutral", "text-f1-foreground-secondary", "text-f1-icon-secondary"],
    [
      "down",
      "positive",
      "text-f1-foreground-positive",
      "text-f1-icon-positive",
    ],
    [
      "down",
      "negative",
      "text-f1-foreground-critical",
      "text-f1-icon-critical",
    ],
    [
      "down",
      "neutral",
      "text-f1-foreground-secondary",
      "text-f1-icon-secondary",
    ],
    ["flat", "positive", "text-f1-foreground-positive", null],
    ["flat", "negative", "text-f1-foreground-critical", null],
    ["flat", "neutral", "text-f1-foreground-secondary", null],
  ]

  it.each(cases)(
    "colours a %s / %s trend with %s",
    (direction, sentiment, labelClass, iconClass) => {
      const { arrow, label } = renderBadge(direction, sentiment)

      expect(label).toHaveClass(labelClass)
      if (iconClass === null) {
        expect(arrow).toBeNull()
      } else {
        expect(arrow).toHaveClass(iconClass)
      }
    }
  )

  it("keeps the arrow on the direction when the sentiment disagrees", () => {
    expect(renderBadge("down", "positive").arrow!.innerHTML).toBe(
      arrowMarkup(ArrowDown)
    )
    expect(renderBadge("up", "negative").arrow!.innerHTML).toBe(
      arrowMarkup(ArrowUp)
    )
  })
})
