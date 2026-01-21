import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import type { FiltersDefinition } from "../../OneFilterPicker/types"
import { F0FilterPickerContent } from "../F0FilterPickerContent"

const definition = {
  department: {
    type: "in",
    label: "Department",
    options: {
      options: [
        { label: "Engineering", value: "engineering" },
        { label: "Design", value: "design" },
        { label: "Product", value: "product" },
      ],
    },
  },
  location: {
    type: "in",
    label: "Location",
    options: {
      options: [
        { label: "New York", value: "nyc" },
        { label: "San Francisco", value: "sf" },
        { label: "London", value: "london" },
      ],
    },
  },
  search: {
    type: "search",
    label: "Search",
  },
} as const satisfies FiltersDefinition

describe("F0FilterPickerContent", () => {
  describe("Rendering", () => {
    it("renders the filter list and content", async () => {
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
        />
      )

      // Should show filter categories on the left
      await waitFor(() => {
        expect(screen.getByText("Department")).toBeInTheDocument()
        expect(screen.getByText("Location")).toBeInTheDocument()
        expect(screen.getByText("Search")).toBeInTheDocument()
      })
    })

    it("auto-selects the first filter category", async () => {
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
        />
      )

      // First filter's options should be visible
      await waitFor(() => {
        expect(screen.getByText("Engineering")).toBeInTheDocument()
        expect(screen.getByText("Design")).toBeInTheDocument()
        expect(screen.getByText("Product")).toBeInTheDocument()
      })
    })

    it("renders with custom width", () => {
      const onChange = vi.fn()

      const { container } = render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
          width={800}
        />
      )

      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveStyle({ maxWidth: "800px" })
    })

    it("renders without apply button when showApplyButton is false", async () => {
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
          showApplyButton={false}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Department")).toBeInTheDocument()
      })

      expect(
        screen.queryByRole("button", { name: /apply/i })
      ).not.toBeInTheDocument()
    })
  })

  describe("Filter Navigation", () => {
    it("switches to a different filter when clicking on it", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Department")).toBeInTheDocument()
      })

      // Click on Location filter
      await user.click(screen.getByText("Location"))

      // Location options should be visible
      await waitFor(() => {
        expect(screen.getByText("New York")).toBeInTheDocument()
        expect(screen.getByText("San Francisco")).toBeInTheDocument()
        expect(screen.getByText("London")).toBeInTheDocument()
      })
    })

    it("filters the filter list based on search", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Department")).toBeInTheDocument()
      })

      // Find the search input for filter list
      const searchInputs = await screen.findAllByRole("searchbox")
      await user.type(searchInputs[0], "Loc")

      // Only Location should be visible
      await waitFor(() => {
        expect(screen.queryByText("Department")).not.toBeInTheDocument()
        expect(screen.getByText("Location")).toBeInTheDocument()
        expect(screen.queryByText("Search")).not.toBeInTheDocument()
      })
    })
  })

  describe("Filter Selection", () => {
    it("selects an option when clicking on it", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      })

      // Click on Engineering option
      await user.click(screen.getByText("Engineering"))

      // Click Apply button
      await user.click(screen.getByRole("button", { name: /apply/i }))

      expect(onChange).toHaveBeenCalledWith({
        department: ["engineering"],
      })
    })

    it("selects multiple options", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      })

      // Click on Engineering and Design
      await user.click(screen.getByText("Engineering"))
      await user.click(screen.getByText("Design"))

      // Click Apply button
      await user.click(screen.getByRole("button", { name: /apply/i }))

      expect(onChange).toHaveBeenCalledWith({
        department: ["engineering", "design"],
      })
    })

    it("selects options across different filters", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      })

      // Select Engineering
      await user.click(screen.getByText("Engineering"))

      // Switch to Location filter
      await user.click(screen.getByText("Location"))

      await waitFor(() => {
        expect(screen.getByText("New York")).toBeInTheDocument()
      })

      // Select New York
      await user.click(screen.getByText("New York"))

      // Click Apply button
      await user.click(screen.getByRole("button", { name: /apply/i }))

      expect(onChange).toHaveBeenCalledWith({
        department: ["engineering"],
        location: ["nyc"],
      })
    })
  })

  describe("Pre-selected Values", () => {
    it("shows pre-selected values as checked", async () => {
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{ department: ["engineering", "design"] }}
          onChange={onChange}
        />
      )

      await waitFor(() => {
        const engineeringCheckbox = screen
          .getByText("Engineering")
          .closest("div")
          ?.querySelector('[role="checkbox"]')
        const designCheckbox = screen
          .getByText("Design")
          .closest("div")
          ?.querySelector('[role="checkbox"]')
        const productCheckbox = screen
          .getByText("Product")
          .closest("div")
          ?.querySelector('[role="checkbox"]')

        expect(engineeringCheckbox).toHaveAttribute("data-state", "checked")
        expect(designCheckbox).toHaveAttribute("data-state", "checked")
        expect(productCheckbox).toHaveAttribute("data-state", "unchecked")
      })
    })

    it("auto-selects filter with values when opening", async () => {
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{ location: ["nyc"] }}
          onChange={onChange}
        />
      )

      // Should auto-select Location filter since it has a value
      await waitFor(() => {
        const locationButton = screen.getByText("Location").closest("button")
        expect(locationButton).toHaveClass("bg-f1-background-secondary")
      })
    })

    it("shows indicator on filters with selected values", async () => {
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{ department: ["engineering"] }}
          onChange={onChange}
        />
      )

      await waitFor(() => {
        const departmentButton = screen
          .getByText("Department")
          .closest("button")
        // Should have the indicator dot
        expect(
          departmentButton?.querySelector(".bg-f1-background-selected-bold")
        ).toBeInTheDocument()
      })
    })
  })

  describe("Select All and Clear", () => {
    it("selects all options when clicking Select All", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      })

      // Click Select All
      await user.click(screen.getByRole("button", { name: /select all/i }))

      // Click Apply button
      await user.click(screen.getByRole("button", { name: /apply/i }))

      expect(onChange).toHaveBeenCalledWith({
        department: ["engineering", "design", "product"],
      })
    })

    it("clears all options when clicking Clear", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{ department: ["engineering", "design"], location: ["nyc"] }}
          onChange={onChange}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      })

      // Click Clear (only clears current filter's selections)
      await user.click(screen.getByRole("button", { name: /clear/i }))

      // Click Apply button
      await user.click(screen.getByRole("button", { name: /apply/i }))

      // Location should still have its value, department is cleared (empty array)
      expect(onChange).toHaveBeenCalledWith({
        department: [],
        location: ["nyc"],
      })
    })
  })

  describe("Custom Apply Button Label", () => {
    it("renders custom apply button label", async () => {
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
          applyButtonLabel="Save Selection"
        />
      )

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: "Save Selection" })
        ).toBeInTheDocument()
      })
    })
  })

  describe("onChange Behavior Without Apply Button", () => {
    it("calls onChange immediately when showApplyButton is false", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
          showApplyButton={false}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      })

      // Click on Engineering option
      await user.click(screen.getByText("Engineering"))

      // onChange should be called immediately
      expect(onChange).toHaveBeenCalledWith({
        department: ["engineering"],
      })
    })

    it("calls onChange on every selection when showApplyButton is false", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
          showApplyButton={false}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      })

      // Select Engineering
      await user.click(screen.getByText("Engineering"))
      expect(onChange).toHaveBeenLastCalledWith({
        department: ["engineering"],
      })

      // Select Design as well
      await user.click(screen.getByText("Design"))
      expect(onChange).toHaveBeenLastCalledWith({
        department: ["engineering", "design"],
      })

      // onChange should have been called twice
      expect(onChange).toHaveBeenCalledTimes(2)
    })

    it("does not call onChange on selection when showApplyButton is true", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <F0FilterPickerContent
          filters={definition}
          value={{}}
          onChange={onChange}
          showApplyButton={true}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      })

      // Click on Engineering option
      await user.click(screen.getByText("Engineering"))

      // onChange should NOT be called yet (not applied)
      expect(onChange).not.toHaveBeenCalled()

      // Click Apply button
      await user.click(screen.getByRole("button", { name: /apply/i }))

      // Now onChange should be called
      expect(onChange).toHaveBeenCalledWith({
        department: ["engineering"],
      })
    })
  })
})
