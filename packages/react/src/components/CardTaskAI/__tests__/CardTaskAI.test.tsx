import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { CardTaskAI } from "../CardTaskAI"
import type { CardTaskAIProps } from "../types"

describe("CardTaskAI", () => {
  const defaultProps: CardTaskAIProps = {
    icon: <span data-testid="icon">📄</span>,
    title: "Test Task",
    options: [{ type: "text", id: "1", label: "Task 1" }],
  }

  describe("Basic rendering", () => {
    it("renders title", () => {
      render(<CardTaskAI {...defaultProps} />)
      expect(screen.getByText("Test Task")).toBeInTheDocument()
    })

    it("renders icon", () => {
      render(<CardTaskAI {...defaultProps} />)
      expect(screen.getByTestId("icon")).toBeInTheDocument()
    })

    it("renders description when provided", () => {
      render(<CardTaskAI {...defaultProps} description="Test description" />)
      expect(screen.getByText("Test description")).toBeInTheDocument()
    })

    it("renders badge when provided", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          badge={{ label: "New", variant: "primary" }}
        />
      )
      expect(screen.getByText("New")).toBeInTheDocument()
    })
  })

  describe("Option types - Text", () => {
    it("renders text option", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            {
              type: "text",
              id: "1",
              label: "Fill in personal information",
            },
          ]}
        />
      )
      expect(
        screen.getByText("Fill in personal information")
      ).toBeInTheDocument()
    })

    it("renders text option with custom icon", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            {
              type: "text",
              id: "1",
              label: "Task with icon",
              icon: <span data-testid="text-icon">📋</span>,
            },
          ]}
        />
      )
      expect(screen.getByTestId("text-icon")).toBeInTheDocument()
      expect(screen.getByText("Task with icon")).toBeInTheDocument()
    })
  })

  describe("Option types - Automation", () => {
    it("renders automation option", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            {
              type: "automation",
              id: "1",
              label: "Automatically send by ONE",
            },
          ]}
        />
      )
      expect(screen.getByText("Automatically send by ONE")).toBeInTheDocument()
    })

    it("renders automation option with default label", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[{ type: "automation", id: "1" }]}
        />
      )
      expect(screen.getByText("Automatically send by ONE")).toBeInTheDocument()
    })
  })

  describe("Option types - Form", () => {
    it("renders form option", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            {
              type: "form",
              id: "1",
              label: "Employee Survey",
            },
          ]}
        />
      )
      expect(screen.getByText("Employee Survey")).toBeInTheDocument()
    })

    it("calls onClick handler for form option", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            {
              type: "form",
              id: "1",
              label: "Survey Form",
              onClick: handleClick,
            },
          ]}
        />
      )

      const form = screen.getByText("Survey Form")
      await user.click(form)
      expect(handleClick).toHaveBeenCalled()
    })
  })

  describe("Option types - Document", () => {
    it("renders document option with file type", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            {
              type: "document",
              id: "1",
              label: "Contract.pdf",
              fileType: "pdf",
            },
          ]}
        />
      )
      expect(screen.getByText("Contract.pdf")).toBeInTheDocument()
      expect(screen.getByText("pdf")).toBeInTheDocument()
    })

    it("calls onClick handler for document option", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            {
              type: "document",
              id: "1",
              label: "Document.pdf",
              fileType: "pdf",
              onClick: handleClick,
            },
          ]}
        />
      )

      const document = screen.getByText("Document.pdf")
      await user.click(document)
      expect(handleClick).toHaveBeenCalled()
    })

    it("supports different file types", () => {
      const { rerender } = render(
        <CardTaskAI
          {...defaultProps}
          options={[
            { type: "document", id: "1", label: "file.pdf", fileType: "pdf" },
          ]}
        />
      )
      expect(screen.getByText("pdf")).toBeInTheDocument()

      rerender(
        <CardTaskAI
          {...defaultProps}
          options={[
            {
              type: "document",
              id: "1",
              label: "file.xlsx",
              fileType: "xlsx",
            },
          ]}
        />
      )
      expect(screen.getByText("xlsx")).toBeInTheDocument()
    })
  })

  describe("Option types - Tags", () => {
    it("renders tags option", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            {
              type: "tags",
              id: "1",
              tags: [
                { id: "tag1", label: "Engineering" },
                { id: "tag2", label: "Senior" },
              ],
            },
          ]}
        />
      )
      expect(screen.getByText("Engineering")).toBeInTheDocument()
      expect(screen.getByText("Senior")).toBeInTheDocument()
    })

    it("renders tags with different variants", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            {
              type: "tags",
              id: "1",
              tags: [
                { id: "tag1", label: "Success", variant: "success" },
                { id: "tag2", label: "Error", variant: "error" },
                { id: "tag3", label: "Warning", variant: "warning" },
              ],
            },
          ]}
        />
      )
      expect(screen.getByText("Success")).toBeInTheDocument()
      expect(screen.getByText("Error")).toBeInTheDocument()
      expect(screen.getByText("Warning")).toBeInTheDocument()
    })
  })

  describe("Multiple options", () => {
    it("renders 1 option", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[{ type: "text", id: "1", label: "Option 1" }]}
        />
      )
      expect(screen.getByText("Option 1")).toBeInTheDocument()
    })

    it("renders 2 options", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            { type: "text", id: "1", label: "Option 1" },
            { type: "automation", id: "2" },
          ]}
        />
      )
      expect(screen.getByText("Option 1")).toBeInTheDocument()
      expect(screen.getByText("Automatically send by ONE")).toBeInTheDocument()
    })

    it("renders 5 options (max)", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          options={[
            { type: "text", id: "1", label: "Text" },
            { type: "automation", id: "2" },
            { type: "form", id: "3", label: "Form" },
            { type: "document", id: "4", label: "Doc.pdf", fileType: "pdf" },
            {
              type: "tags",
              id: "5",
              tags: [{ id: "t1", label: "Tag" }],
            },
          ]}
        />
      )
      expect(screen.getByText("Text")).toBeInTheDocument()
      expect(screen.getByText("Automatically send by ONE")).toBeInTheDocument()
      expect(screen.getByText("Form")).toBeInTheDocument()
      expect(screen.getByText("Doc.pdf")).toBeInTheDocument()
      expect(screen.getByText("Tag")).toBeInTheDocument()
    })
  })

  describe("Interactions", () => {
    it("calls onClick handler when card is clicked", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      const { container } = render(
        <CardTaskAI {...defaultProps} onClick={handleClick} />
      )

      const card = container.querySelector('[data-testid="card-task-ai"]')
      await user.click(card!)
      expect(handleClick).toHaveBeenCalled()
    })

    it("applies custom className", () => {
      const { container } = render(
        <CardTaskAI {...defaultProps} className="custom-class" />
      )
      const card = container.querySelector("[data-testid='card-task-ai']")
      expect(card).toHaveClass("custom-class")
    })

    it("applies custom data-testid", () => {
      const { _container } = render(
        <CardTaskAI {...defaultProps} data-testid="custom-card" />
      )
      expect(screen.getByTestId("custom-card")).toBeInTheDocument()
    })
  })

  describe("Badge variants", () => {
    it("renders all badge variants", () => {
      const variants = [
        "default",
        "primary",
        "success",
        "warning",
        "error",
      ] as const

      variants.forEach((variant) => {
        const { unmount } = render(
          <CardTaskAI
            {...defaultProps}
            badge={{ label: `Badge ${variant}`, variant }}
          />
        )
        expect(screen.getByText(`Badge ${variant}`)).toBeInTheDocument()
        unmount()
      })
    })

    it("renders badge with avatar", () => {
      render(
        <CardTaskAI
          {...defaultProps}
          badge={{
            label: "New",
            avatar: <span data-testid="badge-avatar">👤</span>,
          }}
        />
      )
      expect(screen.getByTestId("badge-avatar")).toBeInTheDocument()
    })
  })
})
