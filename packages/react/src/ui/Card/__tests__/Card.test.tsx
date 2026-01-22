import { fireEvent, render, screen } from "@testing-library/react"
import * as React from "react"
import { describe, expect, it, vi } from "vitest"

import ChevronRight from "../../../icons/app/ChevronRight"
import { I18nProvider } from "../../../lib/providers/i18n"
import { defaultTranslations } from "../../../lib/providers/i18n/i18n-provider-defaults"
import {
  Card,
  CardComment,
  CardContent,
  CardFooter,
  CardHeader,
  CardInfo,
  CardLink,
  CardSubtitle,
  CardTitle,
} from "../Card"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

const renderWithWrapper = (ui: React.ReactElement) => {
  return render(ui, { wrapper: TestWrapper })
}

describe("Card Components", () => {
  describe("Card", () => {
    it("renders basic card with children", () => {
      renderWithWrapper(
        <Card>
          <div>Test Content</div>
        </Card>
      )
      expect(screen.getByText("Test Content")).toBeInTheDocument()
    })

    it("handles click events when not disabled", () => {
      const handleClick = vi.fn()
      renderWithWrapper(
        <Card onClick={handleClick}>
          <div>Clickable Card</div>
        </Card>
      )
      fireEvent.click(screen.getByText("Clickable Card"))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("does not handle click events when disabled", () => {
      const handleClick = vi.fn()
      renderWithWrapper(
        <Card onClick={handleClick} disabled>
          <div>Disabled Card</div>
        </Card>
      )
      fireEvent.click(screen.getByText("Disabled Card"))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it("applies hover styles when clickable", () => {
      const { container } = renderWithWrapper(
        <Card onClick={() => {}}>
          <div>Clickable Card</div>
        </Card>
      )
      const card = container.firstChild
      expect(card).toHaveClass("cursor-pointer")
    })
  })

  describe("CardHeader", () => {
    it("renders with children", () => {
      renderWithWrapper(
        <CardHeader>
          <div>Header Content</div>
        </CardHeader>
      )
      expect(screen.getByText("Header Content")).toBeInTheDocument()
    })
  })

  describe("CardTitle", () => {
    it("renders with correct text and styling", () => {
      renderWithWrapper(<CardTitle>Test Title</CardTitle>)
      const title = screen.getByText("Test Title")
      expect(title).toBeInTheDocument()
      expect(title).toHaveClass("text-base", "font-medium")
    })
  })

  describe("CardSubtitle", () => {
    it("renders with correct text and styling", () => {
      renderWithWrapper(<CardSubtitle>Test Subtitle</CardSubtitle>)
      const subtitle = screen.getByText("Test Subtitle")
      expect(subtitle).toBeInTheDocument()
      expect(subtitle).toHaveClass("text-base", "font-normal")
    })
  })

  describe("CardInfo", () => {
    it("renders with tooltip content", () => {
      renderWithWrapper(<CardInfo content="Test Info" />)
      const infoIcon = screen.getByLabelText("Test Info")
      expect(infoIcon).toBeInTheDocument()
    })
  })

  describe("CardContent", () => {
    it("renders with children", () => {
      renderWithWrapper(
        <CardContent>
          <div>Content</div>
        </CardContent>
      )
      expect(screen.getByText("Content")).toBeInTheDocument()
    })
  })

  describe("CardFooter", () => {
    it("renders with children", () => {
      renderWithWrapper(
        <CardFooter>
          <div>Footer Content</div>
        </CardFooter>
      )
      expect(screen.getByText("Footer Content")).toBeInTheDocument()
    })
  })

  describe("CardLink", () => {
    it("renders with icon and title", () => {
      renderWithWrapper(<CardLink title="Test Link" icon={ChevronRight} />)
      const link = screen.getByLabelText("Test Link")
      expect(link).toBeInTheDocument()
    })
  })

  describe("CardComment", () => {
    it("renders with text content", () => {
      renderWithWrapper(<CardComment>42</CardComment>)
      expect(screen.getByText("42")).toBeInTheDocument()
    })
  })

  describe("Complete Card Integration", () => {
    it("renders a complete card with all components", () => {
      renderWithWrapper(
        <Card>
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
            <CardSubtitle>Test Subtitle</CardSubtitle>
            <CardInfo content="Test Info" />
          </CardHeader>
          <CardContent>
            <p>Test Content</p>
          </CardContent>
          <CardFooter>
            <CardLink title="View more" icon={ChevronRight} />
          </CardFooter>
          <CardComment>99+</CardComment>
        </Card>
      )

      expect(screen.getByText("Test Title")).toBeInTheDocument()
      expect(screen.getByText("Test Subtitle")).toBeInTheDocument()
      expect(screen.getByLabelText("Test Info")).toBeInTheDocument()
      expect(screen.getByText("Test Content")).toBeInTheDocument()
      expect(screen.getByLabelText("View more")).toBeInTheDocument()
      expect(screen.getByText("99+")).toBeInTheDocument()
    })
  })
})
