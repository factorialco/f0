import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { BreadcrumbSelect } from "./index"

const mockOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
]

const mockOnChange = vi.fn()

describe.skip("BreadcrumbSelect", () => {
  // Mock ResizeObserver
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

  Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
    value: 800,
  })
  Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
    value: 800,
  })

  beforeEach(() => {
    // Mock getBoundingClientRect for width calculations
    Element.prototype.getBoundingClientRect = vi.fn(() => ({
      width: 1000,
      height: 200,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
      toJSON: () => {},
    }))
  })

  const openSelect = async (user: ReturnType<typeof userEvent.setup>) => {
    await user.click(screen.getByRole("combobox"))
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
    const teaser = screen.getByRole("listbox")
    fireEvent.animationStart(teaser)
  }

  it("renders with default value", () => {
    render(
      <BreadcrumbSelect
        label="Select an option"
        options={mockOptions}
        value="option1"
        onChange={mockOnChange}
      />
    )
    expect(screen.getByText("Option 1")).toBeInTheDocument()
  })

  it("renders with default item when no value is provided", () => {
    render(
      <BreadcrumbSelect
        label="Select an option"
        options={mockOptions}
        onChange={mockOnChange}
        defaultItem={{ value: "option1", label: "Option 1" }}
      />
    )
    expect(screen.getByText("Option 1")).toBeInTheDocument()
  })

  it("renders placeholder when no value or default item is provided", () => {
    render(
      <BreadcrumbSelect
        label="Select an option"
        options={mockOptions}
        onChange={mockOnChange}
        placeholder="Select an option"
      />
    )
    expect(screen.getByText("Select an option")).toBeInTheDocument()
  })

  it("calls onChange when selecting an option", async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(
      <BreadcrumbSelect
        label="Select an option"
        options={mockOptions}
        onChange={onChange}
      />
    )

    await openSelect(user)

    await waitFor(() => {
      expect(screen.getByText("Option 2")).toBeInTheDocument()
    })

    user.click(screen.getByText("Option 2"))
    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(onChange).toHaveBeenCalledWith("option2")
  })

  it("filters options with search", async () => {
    const onSearchChange = vi.fn()
    const user = userEvent.setup()

    render(
      <BreadcrumbSelect
        label="Select an option"
        hideLabel
        options={mockOptions}
        onSearchChange={onSearchChange}
        showSearchBox
        onChange={mockOnChange}
      />
    )

    await user.click(screen.getByRole("combobox"))
    await user.type(screen.getByRole("searchbox"), "Option 1")

    expect(onSearchChange).toHaveBeenCalledWith("O")
  })
})
