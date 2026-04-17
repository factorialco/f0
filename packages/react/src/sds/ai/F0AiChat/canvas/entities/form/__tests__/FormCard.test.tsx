import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { FormCardValueFormatter } from "../FormCard"

import {
  FormCardValueFormatterProvider,
  useSetFormCardValueFormatter,
} from "../../../../providers/FormCardValueFormatterProvider"

const mockOpenCanvas = vi.fn()
const mockCloseCanvas = vi.fn()
let mockCanvasContent: Record<string, unknown> | null = null

vi.mock("../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    canvasContent: mockCanvasContent,
    openCanvas: mockOpenCanvas,
    closeCanvas: mockCloseCanvas,
  }),
}))

// Track calls to useAutoOpenCanvas so we can verify the hook is wired up
const mockUseAutoOpenCanvas = vi.fn()
vi.mock("../../../../hooks/useAutoOpenCanvas", () => ({
  useAutoOpenCanvas: (...args: unknown[]) => mockUseAutoOpenCanvas(...args),
}))

import { FormCard } from "../FormCard"

describe("FormCard", () => {
  const defaultProps = {
    formName: "edit-employee",
    formDescription: "Edit an employee",
    module: "people" as const,
    cardTitle: "Edit Employee",
    cardDescription: "Fill in the employee details",
  }

  beforeEach(() => {
    vi.clearAllMocks()
    mockCanvasContent = null
  })

  it("renders title and description", () => {
    render(<FormCard {...defaultProps} />)

    expect(screen.getByText("Edit Employee")).toBeInTheDocument()
    expect(screen.getByText("Fill in the employee details")).toBeInTheDocument()
  })

  it("does not show a button when not active", () => {
    render(<FormCard {...defaultProps} />)

    // FormCard hides the button when not active (showOpenButton={isActive})
    // — the card itself is clickable to open the canvas
    expect(
      screen.queryByRole("button", { name: "Open" })
    ).not.toBeInTheDocument()
  })

  it("shows Close button when active", () => {
    mockCanvasContent = { type: "form", formName: "edit-employee" }

    render(<FormCard {...defaultProps} />)

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument()
  })

  it("calls openCanvas with form content when clicking the card", async () => {
    const user = userEvent.setup()

    render(<FormCard {...defaultProps} />)

    // No Open button when inactive — click the card itself
    await user.click(screen.getByText("Edit Employee"))
    expect(mockOpenCanvas).toHaveBeenCalledWith({
      type: "form",
      title: "Edit Employee",
      description: "Fill in the employee details",
      formName: "edit-employee",
      formDescription: "Edit an employee",
      formModule: "people",
    })
  })

  it("calls closeCanvas when clicking Close", async () => {
    const user = userEvent.setup()
    mockCanvasContent = { type: "form", formName: "edit-employee" }

    render(<FormCard {...defaultProps} />)

    await user.click(screen.getByRole("button", { name: "Close" }))
    expect(mockCloseCanvas).toHaveBeenCalled()
  })

  it("calls useAutoOpenCanvas with formName to auto-open on first render", () => {
    render(<FormCard {...defaultProps} />)

    expect(mockUseAutoOpenCanvas).toHaveBeenCalledWith(
      "edit-employee",
      expect.any(Function)
    )
  })

  it("auto-open callback triggers openCanvas with correct content", () => {
    render(<FormCard {...defaultProps} />)

    // Extract the open callback passed to useAutoOpenCanvas and invoke it
    const openCallback = mockUseAutoOpenCanvas.mock.calls[0][1] as () => void
    openCallback()

    expect(mockOpenCanvas).toHaveBeenCalledWith({
      type: "form",
      title: "Edit Employee",
      description: "Fill in the employee details",
      formName: "edit-employee",
      formDescription: "Edit an employee",
      formModule: "people",
    })
  })

  describe("field value formatting", () => {
    it("formats duration fields as compact time string", () => {
      render(
        <FormCard
          {...defaultProps}
          fieldDescriptions={{
            shiftDuration: { label: "Duration", fieldType: "duration" },
          }}
          formValues={{ shiftDuration: 9000 }}
        />
      )

      expect(screen.getByText("2h 30m")).toBeInTheDocument()
    })

    it("formats zero-second duration as 0s", () => {
      render(
        <FormCard
          {...defaultProps}
          fieldDescriptions={{
            dur: { label: "Duration", fieldType: "duration" },
          }}
          formValues={{ dur: 0 }}
        />
      )

      expect(screen.getByText("0s")).toBeInTheDocument()
    })

    it("strips HTML from rich text values", () => {
      render(
        <FormCard
          {...defaultProps}
          fieldDescriptions={{
            desc: { label: "Description", fieldType: "richtext" },
          }}
          formValues={{
            desc: {
              value: "<p>Some <strong>bold</strong> text</p>",
            },
          }}
        />
      )

      expect(screen.getByText("Some bold text")).toBeInTheDocument()
    })

    it("shows dash for richtext with null value", () => {
      render(
        <FormCard
          {...defaultProps}
          fieldDescriptions={{
            desc: { label: "Description", fieldType: "richtext" },
          }}
          formValues={{
            desc: { value: null },
          }}
        />
      )

      // Empty richtext → filtered out (shown as dash)
      expect(screen.queryByText("Description")).not.toBeInTheDocument()
    })

    it("formats daterange as from – to", () => {
      render(
        <FormCard
          {...defaultProps}
          fieldDescriptions={{
            period: { label: "Period", fieldType: "daterange" },
          }}
          formValues={{
            period: {
              from: new Date("2026-04-01"),
              to: new Date("2026-04-30"),
            },
          }}
        />
      )

      expect(screen.getByText("Period")).toBeInTheDocument()
      // The text should contain a dash between two dates
      const text = screen.getByText(/–/)
      expect(text).toBeInTheDocument()
    })

    it("extracts label from objects with a label property", () => {
      render(
        <FormCard
          {...defaultProps}
          fieldDescriptions={{
            status: { label: "Status" },
          }}
          formValues={{
            status: { label: "In progress", id: 3 },
          }}
        />
      )

      expect(screen.getByText("In progress")).toBeInTheDocument()
    })

    it("uses valueFormatter when provided", () => {
      const formatter: FormCardValueFormatter = (_key, _value, meta) => {
        if (meta.customFieldName === "assignees_selector") {
          return {
            type: "item",
            text: "Alice Garcia, Bob Martinez",
          }
        }
        return undefined
      }

      render(
        <FormCard
          {...defaultProps}
          fieldDescriptions={{
            assignees: {
              label: "Assignees",
              fieldType: "custom",
              customFieldName: "assignees_selector",
            },
          }}
          formValues={{
            assignees: { type: "manual", ids: ["5", "12"] },
          }}
          valueFormatter={formatter}
        />
      )

      expect(screen.getByText("Alice Garcia, Bob Martinez")).toBeInTheDocument()
    })

    it("falls back to built-in formatting when valueFormatter returns undefined", () => {
      const formatter: FormCardValueFormatter = () => undefined

      render(
        <FormCard
          {...defaultProps}
          fieldDescriptions={{
            name: { label: "Name" },
          }}
          formValues={{ name: "Test value" }}
          valueFormatter={formatter}
        />
      )

      expect(screen.getByText("Test value")).toBeInTheDocument()
    })

    it("formats plain string values as item text", () => {
      render(
        <FormCard
          {...defaultProps}
          fieldDescriptions={{
            concept: { label: "Concept" },
          }}
          formValues={{ concept: "Ticket restaurant" }}
        />
      )

      expect(screen.getByText("Ticket restaurant")).toBeInTheDocument()
    })

    it("formats boolean values as Yes/No", () => {
      render(
        <FormCard
          {...defaultProps}
          fieldDescriptions={{
            active: { label: "Active" },
          }}
          formValues={{ active: true }}
        />
      )

      expect(screen.getByText("Yes")).toBeInTheDocument()
    })

    it("uses formatter from FormCardValueFormatterProvider context", () => {
      function SetupFormatter() {
        const setFormatter = useSetFormCardValueFormatter()
        setFormatter({
          customFieldName: "team_selector",
          format: () => ({ type: "item", text: "Engineering Team" }),
        })
        return null
      }

      render(
        <FormCardValueFormatterProvider>
          <SetupFormatter />
          <FormCard
            {...defaultProps}
            fieldDescriptions={{
              team: {
                label: "Team",
                fieldType: "custom",
                customFieldName: "team_selector",
              },
            }}
            formValues={{ team: { id: 1, name: "eng" } }}
          />
        </FormCardValueFormatterProvider>
      )

      expect(screen.getByText("Engineering Team")).toBeInTheDocument()
    })

    it("uses scoped formatter when registered for a specific formName", () => {
      function SetupFormatter() {
        const setFormatter = useSetFormCardValueFormatter()
        setFormatter({
          formName: "edit-employee",
          customFieldName: "team_selector",
          format: () => ({ type: "item", text: "Scoped Team" }),
        })
        return null
      }

      render(
        <FormCardValueFormatterProvider>
          <SetupFormatter />
          <FormCard
            {...defaultProps}
            fieldDescriptions={{
              team: {
                label: "Team",
                fieldType: "custom",
                customFieldName: "team_selector",
              },
            }}
            formValues={{ team: { id: 1, name: "eng" } }}
          />
        </FormCardValueFormatterProvider>
      )

      expect(screen.getByText("Scoped Team")).toBeInTheDocument()
    })

    it("does not apply scoped formatter to a different formName", () => {
      function SetupFormatter() {
        const setFormatter = useSetFormCardValueFormatter()
        setFormatter({
          formName: "other-form",
          format: () => ({ type: "item", text: "Should not appear" }),
        })
        return null
      }

      render(
        <FormCardValueFormatterProvider>
          <SetupFormatter />
          <FormCard
            {...defaultProps}
            fieldDescriptions={{
              name: { label: "Name" },
            }}
            formValues={{ name: "Test value" }}
          />
        </FormCardValueFormatterProvider>
      )

      expect(screen.getByText("Test value")).toBeInTheDocument()
      expect(screen.queryByText("Should not appear")).not.toBeInTheDocument()
    })

    it("scoped formatter takes precedence over global formatter", () => {
      function SetupFormatters() {
        const setFormatter = useSetFormCardValueFormatter()
        setFormatter({
          format: () => ({ type: "item", text: "From global" }),
        })
        setFormatter({
          formName: "edit-employee",
          format: () => ({ type: "item", text: "From scoped" }),
        })
        return null
      }

      render(
        <FormCardValueFormatterProvider>
          <SetupFormatters />
          <FormCard
            {...defaultProps}
            fieldDescriptions={{
              name: { label: "Name" },
            }}
            formValues={{ name: "test" }}
          />
        </FormCardValueFormatterProvider>
      )

      expect(screen.getByText("From scoped")).toBeInTheDocument()
      expect(screen.queryByText("From global")).not.toBeInTheDocument()
    })

    it("prop valueFormatter takes precedence over context formatter", () => {
      function SetupFormatter() {
        const setFormatter = useSetFormCardValueFormatter()
        setFormatter({
          format: () => ({ type: "item", text: "From context" }),
        })
        return null
      }

      const propFormatter: FormCardValueFormatter = () => ({
        type: "item",
        text: "From prop",
      })

      render(
        <FormCardValueFormatterProvider>
          <SetupFormatter />
          <FormCard
            {...defaultProps}
            fieldDescriptions={{
              name: { label: "Name" },
            }}
            formValues={{ name: "test" }}
            valueFormatter={propFormatter}
          />
        </FormCardValueFormatterProvider>
      )

      expect(screen.getByText("From prop")).toBeInTheDocument()
      expect(screen.queryByText("From context")).not.toBeInTheDocument()
    })
  })
})
