import { fireEvent } from "@testing-library/react"
import React from "react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, within } from "@/testing/test-utils"

import { defaultTranslations, I18nProvider } from "../../lib/providers/i18n"
import { L10nProvider } from "../../lib/providers/l10n"
import { OneCalendar } from "./OneCalendar"
import { WeekStartDay } from "./types"

const TestWrapper = ({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: string
}) => (
  <I18nProvider translations={defaultTranslations}>
    <L10nProvider
      l10n={{ locale, date: { weekStartsOn: WeekStartDay.Monday } }}
    >
      {children}
    </L10nProvider>
  </I18nProvider>
)

describe("OneCalendar", () => {
  it("renders day view with Spanish localization", () => {
    // Set a fixed date for testing
    const mockDate = new Date("2024-03-15")
    vi.useFakeTimers()
    vi.setSystemTime(mockDate)

    render(
      <TestWrapper locale="es-ES">
        <OneCalendar
          mode="single"
          view="day"
          defaultMonth={mockDate}
          showNavigation={true}
        />
      </TestWrapper>
    )

    // Check if weekday headers are in Spanish
    const grid = screen.getAllByRole("grid")[0]
    expect(within(grid).getByText("lu")).toBeInTheDocument() // Lunes
    expect(within(grid).getByText("ma")).toBeInTheDocument() // Martes
    expect(within(grid).getByText("mi")).toBeInTheDocument() // Miércoles
    expect(within(grid).getByText("sá")).toBeInTheDocument() // Sábado
    expect(within(grid).getByText("do")).toBeInTheDocument() // Domingo

    vi.useRealTimers()
  })

  describe("header month/year dropdowns", () => {
    beforeAll(() => {
      // F0Select relies on ResizeObserver and layout APIs jsdom lacks.
      global.ResizeObserver = class {
        observe = vi.fn()
        unobserve = vi.fn()
        disconnect = vi.fn()
      } as unknown as typeof ResizeObserver
      Element.prototype.scrollIntoView = vi.fn()
    })

    // A null selection makes OneCalendar snap the view to "today", so pin the
    // month by passing a concrete selected date.
    const march2024 = new Date(2024, 2, 15)

    it("shows month and year dropdowns in day view", async () => {
      render(
        <TestWrapper locale="en-US">
          <OneCalendar mode="single" view="day" defaultSelected={march2024} />
        </TestWrapper>
      )

      const comboboxes = screen.getAllByRole("combobox")
      expect(comboboxes).toHaveLength(2)
      expect(await screen.findByText("March")).toBeInTheDocument()
      expect(await screen.findByText("2024")).toBeInTheDocument()
    })

    it("shows month and year dropdowns in week view", async () => {
      render(
        <TestWrapper locale="en-US">
          <OneCalendar mode="single" view="week" defaultSelected={march2024} />
        </TestWrapper>
      )

      expect(screen.getAllByRole("combobox")).toHaveLength(2)
      expect(await screen.findByText("March")).toBeInTheDocument()
    })

    it("shows only a year dropdown in month view", async () => {
      render(
        <TestWrapper locale="en-US">
          <OneCalendar mode="single" view="month" defaultSelected={march2024} />
        </TestWrapper>
      )

      // Exactly one dropdown (year); the month picker is the grid itself.
      const comboboxes = screen.getAllByRole("combobox")
      expect(comboboxes).toHaveLength(1)
      expect(comboboxes[0]).toHaveTextContent("2024")
    })

    it("keeps the plain label (no dropdowns) in quarter view", () => {
      render(
        <TestWrapper locale="en-US">
          <OneCalendar
            mode="single"
            view="quarter"
            defaultSelected={march2024}
          />
        </TestWrapper>
      )

      // No month/year dropdowns; quarter view keeps its plain label + arrows.
      expect(screen.queryAllByRole("combobox")).toHaveLength(0)
      expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument()
    })

    it("clamps arrow navigation to the year dropdown range", async () => {
      // The year list ends at the current year; arrowing from December must
      // not escape into a year the dropdown can't display (regression: the
      // trigger rendered an ellipsis). The Next arrow is disabled instead.
      const currentYear = new Date().getFullYear()
      render(
        <TestWrapper locale="en-US">
          <OneCalendar
            mode="single"
            view="day"
            defaultSelected={new Date(currentYear, 11, 15)}
          />
        </TestWrapper>
      )

      expect(await screen.findByText("December")).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "Next" })).toBeDisabled()

      fireEvent.click(screen.getByRole("button", { name: "Next" }))
      expect(await screen.findByText("December")).toBeInTheDocument()
      expect(await screen.findByText(String(currentYear))).toBeInTheDocument()
    })

    it("disables adjacent-month day cells that fall outside the year range", async () => {
      // December's grid shows the first days of next January; those lie
      // outside the selectable years and must not be selectable.
      const currentYear = new Date().getFullYear()
      const onSelect = vi.fn()
      render(
        <TestWrapper locale="en-US">
          <OneCalendar
            mode="single"
            view="day"
            defaultSelected={new Date(currentYear, 11, 15)}
            onSelect={onSelect}
          />
        </TestWrapper>
      )

      expect(await screen.findByText("December")).toBeInTheDocument()
      onSelect.mockClear()

      // The trailing "1" in December's grid is January 1 of the next year.
      const grid = screen.getAllByRole("grid")[0]
      const dayOnes = within(grid).getAllByText("1")
      const trailingJanuaryFirst = dayOnes[dayOnes.length - 1]

      fireEvent.click(trailingJanuaryFirst)
      expect(onSelect).not.toHaveBeenCalled()

      // An in-range day still selects fine.
      fireEvent.click(within(grid).getByText("20"))
      expect(onSelect).toHaveBeenCalled()
    })

    it("clamps arrow navigation to minDate/maxDate years", async () => {
      render(
        <TestWrapper locale="en-US">
          <OneCalendar
            mode="single"
            view="day"
            defaultSelected={new Date(1990, 0, 15)}
            minDate={new Date(1990, 0, 1)}
            maxDate={new Date(1995, 11, 31)}
          />
        </TestWrapper>
      )

      expect(await screen.findByText("January")).toBeInTheDocument()
      // January 1990: going back would leave the 1990-1995 window.
      expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled()
      expect(screen.getByRole("button", { name: "Next" })).toBeEnabled()
    })

    it("stays in sync with the prev/next arrows", async () => {
      render(
        <TestWrapper locale="en-US">
          <OneCalendar mode="single" view="day" defaultSelected={march2024} />
        </TestWrapper>
      )

      expect(await screen.findByText("March")).toBeInTheDocument()

      fireEvent.click(screen.getByRole("button", { name: "Next" }))
      expect(await screen.findByText("April")).toBeInTheDocument()

      fireEvent.click(screen.getByRole("button", { name: "Previous" }))
      fireEvent.click(screen.getByRole("button", { name: "Previous" }))
      expect(await screen.findByText("February")).toBeInTheDocument()
    })
  })

  describe("selectOnCellOnly", () => {
    const selected = {
      from: new Date(2026, 0, 1),
      to: new Date(2026, 11, 31),
    }

    it("emits onSelect on granularity change by default", () => {
      const onSelect = vi.fn()
      const { rerender } = render(
        <TestWrapper locale="en-US">
          <OneCalendar
            mode="single"
            view="year"
            defaultSelected={selected}
            onSelect={onSelect}
          />
        </TestWrapper>
      )

      onSelect.mockClear()
      rerender(
        <TestWrapper locale="en-US">
          <OneCalendar
            mode="single"
            view="quarter"
            defaultSelected={selected}
            onSelect={onSelect}
          />
        </TestWrapper>
      )

      expect(onSelect).toHaveBeenCalled()
    })

    it("does not emit onSelect on granularity change when selectOnCellOnly is true", () => {
      const onSelect = vi.fn()
      const { rerender } = render(
        <TestWrapper locale="en-US">
          <OneCalendar
            mode="single"
            view="year"
            defaultSelected={selected}
            onSelect={onSelect}
            selectOnCellOnly
          />
        </TestWrapper>
      )

      onSelect.mockClear()
      rerender(
        <TestWrapper locale="en-US">
          <OneCalendar
            mode="single"
            view="quarter"
            defaultSelected={selected}
            onSelect={onSelect}
            selectOnCellOnly
          />
        </TestWrapper>
      )

      expect(onSelect).not.toHaveBeenCalled()
    })
  })
})
