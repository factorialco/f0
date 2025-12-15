import { render, screen, within } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { defaultTranslations, I18nProvider } from "../../lib/providers/i18n"
import { L10nProvider } from "../../lib/providers/l10n"
import { OneCalendar } from "./OneCalendar"

const TestWrapper = ({ children, locale }: { children: React.ReactNode; locale: string }) => (
  <I18nProvider translations={defaultTranslations}>
    <L10nProvider l10n={{ locale }}>{children}</L10nProvider>
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
        <OneCalendar mode="single" view="day" defaultMonth={mockDate} showNavigation={true} />
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
})
