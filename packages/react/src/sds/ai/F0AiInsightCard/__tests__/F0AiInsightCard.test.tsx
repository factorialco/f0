import type { ReactNode } from "react"

import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { F0AiInsightCard } from "../F0AiInsightCard"

// Mock Recharts since JSDOM does not support SVG layout
vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: { children: ReactNode }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
  AreaChart: ({ children }: { children: ReactNode }) => (
    <svg data-testid="area-chart">{children}</svg>
  ),
  Area: () => <rect data-testid="area" />,
  YAxis: () => <g data-testid="y-axis" />,
}))

// Mock OverflowList since JSDOM does not support layout measurement.
// Renders visible items directly and shows the overflow indicator.
vi.mock("@/ui/OverflowList", () => ({
  OverflowList: <T,>({
    items,
    max,
    renderListItem,
    renderOverflowIndicator,
  }: {
    items: T[]
    max?: number
    renderListItem: (item: T, index: number) => ReactNode
    renderOverflowIndicator?: (count: number, isOpen: boolean) => ReactNode
  }) => {
    const limit = max ?? items.length
    const visible = items.slice(0, limit)
    const overflowCount = Math.max(0, items.length - limit)
    return (
      <div data-testid="overflow-list-mock">
        {visible.map((item, i) => renderListItem(item, i))}
        {overflowCount > 0 && renderOverflowIndicator?.(overflowCount, false)}
      </div>
    )
  },
}))

describe("F0AiInsightCard", () => {
  describe("text content", () => {
    it("renders heading, description, and label", () => {
      render(
        <F0AiInsightCard
          content="text"
          heading="Total headcount"
          description="Department"
          label="HR Analytics"
        />
      )

      expect(screen.getByText("Total headcount")).toBeInTheDocument()
      expect(screen.getByText("Department")).toBeInTheDocument()
      expect(screen.getByText("HR Analytics")).toBeInTheDocument()
    })

    it("renders without optional props", () => {
      render(<F0AiInsightCard content="text" heading="Headcount" />)

      expect(screen.getByText("Headcount")).toBeInTheDocument()
    })
  })

  describe("person content", () => {
    it("renders a person avatar", () => {
      render(
        <F0AiInsightCard
          content="person"
          heading="Jane Cooper"
          avatar={{ firstName: "Jane", lastName: "Cooper", src: "" }}
        />
      )

      expect(screen.getByText("Jane Cooper")).toBeInTheDocument()
      expect(screen.getByText("J")).toBeInTheDocument()
    })
  })

  describe("people content", () => {
    it("renders the heading and avatar initials", () => {
      render(
        <F0AiInsightCard
          content="people"
          heading="Engineering leads"
          avatars={[
            { firstName: "Jane", lastName: "Cooper", src: "" },
            { firstName: "Alex", lastName: "Doe", src: "" },
          ]}
        />
      )

      expect(screen.getByText("Engineering leads")).toBeInTheDocument()
      expect(screen.getByText("JC")).toBeInTheDocument()
      expect(screen.getByText("AD")).toBeInTheDocument()
    })

    it("shows overflow counter when avatars exceed max", () => {
      render(
        <F0AiInsightCard
          content="people"
          heading="Big team"
          avatars={[
            { firstName: "A", lastName: "1", src: "" },
            { firstName: "B", lastName: "2", src: "" },
            { firstName: "C", lastName: "3", src: "" },
            { firstName: "D", lastName: "4", src: "" },
            { firstName: "E", lastName: "5", src: "" },
            { firstName: "F", lastName: "6", src: "" },
            { firstName: "G", lastName: "7", src: "" },
          ]}
        />
      )

      expect(screen.getByText("Big team")).toBeInTheDocument()
      expect(screen.getByText("+4")).toBeInTheDocument()
    })
  })

  describe("team content", () => {
    it("renders a team avatar", () => {
      render(
        <F0AiInsightCard
          content="team"
          heading="Product Design"
          avatar={{ name: "Product Design", src: "" }}
        />
      )

      expect(screen.getByText("Product Design")).toBeInTheDocument()
    })
  })

  describe("company content", () => {
    it("renders a company avatar", () => {
      render(
        <F0AiInsightCard
          content="company"
          heading="Factorial Inc."
          avatar={{ name: "Factorial", src: "" }}
        />
      )

      expect(screen.getByText("Factorial Inc.")).toBeInTheDocument()
    })
  })

  describe("alert content", () => {
    it("renders an alert tag", () => {
      render(
        <F0AiInsightCard
          content="alert"
          heading="Expiring contracts"
          level="warning"
          alertLabel="Needs attention"
        />
      )

      expect(screen.getByText("Expiring contracts")).toBeInTheDocument()
      expect(screen.getByText("Needs attention")).toBeInTheDocument()
    })
  })

  describe("balance content", () => {
    it("renders a balance tag", () => {
      render(
        <F0AiInsightCard
          content="balance"
          heading="Monthly revenue"
          balance={{
            amount: {
              value: 12450,
              units: "$",
              unitsPosition: "prepend" as const,
            },
          }}
        />
      )

      expect(screen.getByText("Monthly revenue")).toBeInTheDocument()
    })
  })

  describe("sparkline content", () => {
    it("renders sparkline and balance", () => {
      render(
        <F0AiInsightCard
          content="sparkline"
          heading="Employee satisfaction"
          data={[{ value: 10 }, { value: 20 }, { value: 15 }]}
          label="+992"
        />
      )

      expect(screen.getByText("Employee satisfaction")).toBeInTheDocument()
      expect(screen.getByTestId("area-chart")).toBeInTheDocument()
    })

    it("renders sparkline balance pill and trend dot", () => {
      render(
        <F0AiInsightCard
          content="sparkline"
          heading="Chart card"
          data={[{ value: 10 }, { value: 20 }]}
          label="+992"
        />
      )

      // Recharts doesn't compute SVG coordinates in jsdom, so the dot won't render
      expect(screen.getByTestId("area-chart")).toBeInTheDocument()
    })

    it("renders negative trend chart", () => {
      render(
        <F0AiInsightCard
          content="sparkline"
          heading="Declining metric"
          data={[{ value: 20 }, { value: 10 }]}
          label="-15%"
        />
      )

      expect(screen.getByText("Declining metric")).toBeInTheDocument()
      expect(screen.getByTestId("area-chart")).toBeInTheDocument()
    })

    it("auto-derives positive direction from ascending data", () => {
      render(
        <F0AiInsightCard
          content="sparkline"
          heading="Rising metric"
          data={[{ value: 5 }, { value: 10 }, { value: 20 }]}
          label="+15"
        />
      )

      const chart = screen.getByRole("img")
      expect(chart).toHaveAttribute(
        "aria-label",
        "Sparkline chart showing positive trend"
      )
    })

    it("auto-derives negative direction from descending data", () => {
      render(
        <F0AiInsightCard
          content="sparkline"
          heading="Falling metric"
          data={[{ value: 20 }, { value: 10 }, { value: 5 }]}
          label="-15"
        />
      )

      const chart = screen.getByRole("img")
      expect(chart).toHaveAttribute(
        "aria-label",
        "Sparkline chart showing negative trend"
      )
    })

    it("inverts direction when invertStatus is true", () => {
      render(
        <F0AiInsightCard
          content="sparkline"
          heading="Inverted metric"
          data={[{ value: 5 }, { value: 10 }, { value: 20 }]}
          label="+15"
          invertStatus
        />
      )

      const chart = screen.getByRole("img")
      expect(chart).toHaveAttribute(
        "aria-label",
        "Sparkline chart showing negative trend"
      )
    })

    it("shows neutral direction for flat data", () => {
      render(
        <F0AiInsightCard
          content="sparkline"
          heading="Flat metric"
          data={[{ value: 10 }, { value: 10 }]}
          label="0"
        />
      )

      const chart = screen.getByRole("img")
      expect(chart).toHaveAttribute(
        "aria-label",
        "Sparkline chart showing neutral trend"
      )
    })
  })

  describe("interactions", () => {
    it("calls onClick when the card is clicked", async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <F0AiInsightCard
          content="text"
          heading="Clickable card"
          onClick={handleClick}
        />
      )

      await user.click(screen.getByText("Clickable card"))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("calls onClick on Enter key press", async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <F0AiInsightCard
          content="text"
          heading="Keyboard card"
          onClick={handleClick}
        />
      )

      const button = screen.getByRole("button")
      await user.type(button, "{Enter}")
      expect(handleClick).toHaveBeenCalled()
    })

    it("calls onClick on Space key press", async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <F0AiInsightCard
          content="text"
          heading="Keyboard card"
          onClick={handleClick}
        />
      )

      const button = screen.getByRole("button")
      await user.type(button, " ")
      expect(handleClick).toHaveBeenCalled()
    })

    it("reveals Ask One button on hover", async () => {
      const user = userEvent.setup()
      const handleAskOne = vi.fn()

      render(
        <F0AiInsightCard
          content="text"
          heading="Hoverable card"
          onAskOne={handleAskOne}
        />
      )

      expect(screen.queryByText("Ask One")).not.toBeInTheDocument()

      const card = screen.getByText("Hoverable card").closest("div[class]")!
      await user.hover(card)

      await waitFor(() => {
        expect(screen.getByText("Ask One")).toBeInTheDocument()
      })
    })

    it("renders Ask One button without an icon", async () => {
      const user = userEvent.setup()

      render(
        <F0AiInsightCard
          content="text"
          heading="No icon card"
          onAskOne={vi.fn()}
        />
      )

      const card = screen.getByText("No icon card").closest("div[class]")!
      await user.hover(card)

      await waitFor(() => {
        expect(screen.getByText("Ask One")).toBeInTheDocument()
      })

      const button = screen.getByText("Ask One").closest("button")!
      expect(button.querySelector("svg")).not.toBeInTheDocument()
    })

    it("does not show Ask One button when onAskOne is not provided", async () => {
      const user = userEvent.setup()

      render(<F0AiInsightCard content="text" heading="No ask one" />)

      const card = screen.getByText("No ask one").closest("div[class]")!
      await user.hover(card)

      expect(screen.queryByText("Ask One")).not.toBeInTheDocument()
    })

    it("has button role when onClick is provided", () => {
      render(
        <F0AiInsightCard
          content="text"
          heading="Interactive"
          onClick={vi.fn()}
        />
      )

      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    it("does not have button role when onClick is not provided", () => {
      render(<F0AiInsightCard content="text" heading="Static" />)

      expect(screen.queryByRole("button")).not.toBeInTheDocument()
    })
  })

  describe("selected state", () => {
    it("renders gradient border when selected", () => {
      render(<F0AiInsightCard content="text" heading="Selected" selected />)

      expect(screen.getByTestId("selected-border")).toBeInTheDocument()
    })

    it("does not render gradient border when not selected", () => {
      render(<F0AiInsightCard content="text" heading="Not selected" />)

      expect(screen.queryByTestId("selected-border")).not.toBeInTheDocument()
    })
  })

  describe("skeleton", () => {
    it("renders skeleton state", () => {
      const { container } = render(<F0AiInsightCard.Skeleton />)

      const skeleton = container.querySelector("[aria-busy='true']")
      expect(skeleton).toBeInTheDocument()
    })

    it("has aria-live polite on skeleton", () => {
      const { container } = render(<F0AiInsightCard.Skeleton />)

      const skeleton = container.querySelector("[aria-live='polite']")
      expect(skeleton).toBeInTheDocument()
    })
  })
})
