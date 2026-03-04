import { fireEvent, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import { beforeEach, describe, expect, it, vi } from "vitest"

import type { RecordType } from "@/hooks/datasource"

import { zeroRender as render } from "@/testing/test-utils"

import type { F0SelectItemProps } from "../types"

import { Search } from "../../../icons/app"
import { F0Select } from "../index"

const mockOptions: F0SelectItemProps<string, RecordType>[] = [
  {
    value: "option1",
    label: "Option 1",
    icon: Search,
    description: "Description 1",
    item: {
      id: "option1",
      name: "Option 1",
      description: "Description 1",
    },
  },
  {
    value: "option2",
    label: "Option 2",
    item: {
      id: "option2",
      name: "Option 2",
      description: "Description 2",
    },
  },
  { type: "separator" },
  {
    value: "option3",
    label: "Option 3",
    description: "Description 3",
    item: {
      id: "option3",
      name: "Option 3",
      description: "Description 3",
    },
  },
]

// Default props to satisfy InputFieldProps requirements
const defaultSelectProps = {
  error: undefined,
  icon: undefined,
  loading: false,
  clearable: false,
  labelIcon: undefined,
  size: "md" as const,
  disabled: false,
  placeholder: "",
  label: "Pick an option",
  hideLabel: false,
  onChange: (value: string) => {
    console.log(value)
  },
}

describe("Select", () => {
  // Mock ResizeObserver - must be a class constructor for 'new ResizeObserver()' to work
  global.ResizeObserver = class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver

  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      value: 800,
    })
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      value: 800,
    })
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
      () => ({
        width: 120,
        height: 120,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => {},
      })
    )
  })

  const openSelect = async (user: ReturnType<typeof userEvent.setup>) => {
    user.click(screen.getByRole("combobox"))

    // Wait for animation to finish
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
    const teaser = screen.getByRole("listbox")
    fireEvent.animationStart(teaser)
  }

  it("renders with placeholder", async () => {
    render(
      <F0Select
        {...defaultSelectProps}
        multiple={false}
        clearable={false}
        options={mockOptions}
        placeholder="Select an option"
      />
    )
    await waitFor(async () => {
      const placeholder = await screen.findByText("Select an option")
      expect(placeholder).toBeInTheDocument()
    })
  })

  it("shows options when clicked", async () => {
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
      />
    )

    await openSelect(user)

    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
    expect(screen.getByText("Option 3")).toBeInTheDocument()
    expect(screen.getByText("Description 1")).toBeInTheDocument()
  })

  it("should display selected value", async () => {
    render(
      <F0Select {...defaultSelectProps} options={mockOptions} value="option1" />
    )

    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument()
    })
  })

  it("renders search box when showSearchBox is true", async () => {
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
        showSearchBox
        searchBoxPlaceholder="Search options"
      />
    )

    await openSelect(user)

    expect(screen.getByText("Search options")).toBeInTheDocument()
  })

  it("filters options based on search input", async () => {
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
        showSearchBox
      />
    )

    await openSelect(user)
    await user.type(screen.getByRole("searchbox"), "1")

    expect(screen.getByText("Option 1")).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.queryByText("Option 2")).not.toBeInTheDocument()
    )
  })

  it("should not lose the focus when the search input is focused and the list changes", async () => {
    const user = userEvent.setup({ delay: 100 })
    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
        showSearchBox
      />
    )

    await openSelect(user)
    await user.type(screen.getByRole("searchbox"), "Option 1")

    expect(screen.getByText("Option 1")).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.queryByText("Option 2")).not.toBeInTheDocument()
    )
  })

  it("shows empty message when no options match search", async () => {
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
        showSearchBox
        searchEmptyMessage="No results found"
      />
    )

    await openSelect(user)
    await user.type(screen.getByRole("searchbox"), "xyz")

    await waitFor(async () => {
      const emptyMessage = await screen.findByText("No results found")
      expect(emptyMessage).toBeInTheDocument()
    })
  })

  // TODO: Fix this test
  it.skip("maintains focus on search input during data loading", async () => {
    const user = userEvent.setup()
    const handleSearchChange = vi.fn()

    render(
      <F0Select
        options={mockOptions}
        onChange={() => {}}
        showSearchBox
        label="Select an option2"
        hideLabel
        onSearchChange={handleSearchChange}
      />
    )

    await openSelect(user)

    const searchInput = screen.getByRole("searchbox")

    // Focus the search input
    await user.click(searchInput)
    expect(searchInput).toHaveFocus()

    // Type to trigger search (which would normally cause a re-render)
    await user.type(searchInput, "test", { delay: 500 })
    // The search input should still have focus after the search
    expect(searchInput).toHaveFocus()
    expect(handleSearchChange).toHaveBeenCalled()
    expect(handleSearchChange).toHaveBeenCalledWith("t")
    await waitFor(() => {
      expect(handleSearchChange).toHaveBeenCalledWith("test")
    })
    // Should still show all options when externalSearch is true
    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
  })

  it("disables select when disabled prop is true", async () => {
    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
        disabled
      />
    )

    await waitFor(() => {
      expect(screen.getByRole("combobox")).toBeDisabled()
    })
  })

  it("renders with custom trigger", () => {
    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
      >
        <button>Custom Trigger</button>
      </F0Select>
    )

    expect(screen.getByText("Custom Trigger")).toBeInTheDocument()
  })

  it("calls onChange when option is selected with item", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={handleChange}
      />
    )

    await openSelect(user)
    await user.click(screen.getByText("Option 1"))

    expect(handleChange).toHaveBeenCalledWith(
      "option1",
      {
        id: "option1",
        name: "Option 1",
        description: "Description 1",
      },
      expect.objectContaining({
        label: "Option 1",
        value: "option1",
        description: "Description 1",
      })
    )
  })

  it("calls onChange when option is selected without item", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    const mockOptions: F0SelectItemProps<string>[] = [
      {
        value: "option1",
        label: "Option 1",
      },
      {
        value: "option2",
        label: "Option 2",
      },
      { type: "separator" },
      {
        value: "option3",
        label: "Option 3",
      },
    ]

    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={handleChange}
      />
    )

    await openSelect(user)
    await user.click(screen.getByText("Option 1"))

    expect(handleChange).toHaveBeenCalledWith(
      "option1",
      undefined,
      expect.objectContaining({
        label: "Option 1",
        value: "option1",
      })
    )
  })

  it("clears value and selectedOption when clearable and clear button is clicked", async () => {
    const handleChange = vi.fn()
    const handleChangeSelectedOption = vi.fn()
    const user = userEvent.setup()

    const { container } = render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={handleChange}
        onChangeSelectedOption={handleChangeSelectedOption}
        clearable
      />
    )

    // First select an option
    await openSelect(user)
    await user.click(screen.getByText("Option 1"))

    // Verify option was selected
    expect(handleChange).toHaveBeenCalledWith(
      "option1",
      expect.objectContaining({
        id: "option1",
        name: "Option 1",
        description: "Description 1",
      }),
      expect.objectContaining({
        label: "Option 1",
        value: "option1",
        description: "Description 1",
      })
    )

    // Reset mocks to track the clear action
    handleChange.mockClear()
    handleChangeSelectedOption.mockClear()

    // Wait for the component to settle with the selected value
    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument()
    })

    // Find the clear button using the same approach as InputField tests
    // The clear button should be visible when there's a value
    const clearButton = container.querySelector(
      "button[data-testid='clear-button']"
    )
    expect(clearButton).toBeInTheDocument()

    // Click the clear button using fireEvent directly
    await fireEvent.click(clearButton)

    // Verify that onChange is called with empty string and onChangeSelectedOption with undefined
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(undefined, undefined, undefined)
    })
    await waitFor(() => {
      expect(handleChangeSelectedOption).toHaveBeenCalledWith(undefined, false)
    })
  })
})

describe("Group Headers", () => {
  global.ResizeObserver = class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver

  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      value: 800,
    })
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      value: 800,
    })
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
      () => ({
        width: 120,
        height: 120,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => {},
      })
    )
  })

  const groupedOptions: F0SelectItemProps<string>[] = [
    { type: "group-header", label: "Group A" },
    { value: "a1", label: "Alpha 1" },
    { value: "a2", label: "Alpha 2" },
    { type: "group-header", label: "Group B" },
    { value: "b1", label: "Beta 1" },
  ]

  const defaultGroupProps = {
    label: "Pick an option",
    placeholder: "Select...",
    onChange: vi.fn(),
  }

  const openSelect = async (user: ReturnType<typeof userEvent.setup>) => {
    user.click(screen.getByRole("combobox"))
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
    const teaser = screen.getByRole("listbox")
    fireEvent.animationStart(teaser)
  }

  it("renders group header labels", async () => {
    const user = userEvent.setup()
    render(<F0Select {...defaultGroupProps} options={groupedOptions} />)

    await openSelect(user)

    expect(screen.getByText("Group A")).toBeInTheDocument()
    expect(screen.getByText("Group B")).toBeInTheDocument()
  })

  it("renders group headers with role=presentation for accessibility", async () => {
    const user = userEvent.setup()
    render(<F0Select {...defaultGroupProps} options={groupedOptions} />)

    await openSelect(user)

    const presentations = screen.getAllByRole("presentation")
    const groupHeaders = presentations.filter(
      (el) => el.textContent === "Group A" || el.textContent === "Group B"
    )
    expect(groupHeaders).toHaveLength(2)
  })

  it("does not trigger onChange when a group header is clicked", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultGroupProps}
        options={groupedOptions}
        onChange={handleChange}
      />
    )

    await openSelect(user)
    await user.click(screen.getByText("Group A"))

    expect(handleChange).not.toHaveBeenCalled()
  })

  it("renders selectable items alongside group headers", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultGroupProps}
        options={groupedOptions}
        onChange={handleChange}
      />
    )

    await openSelect(user)
    await user.click(screen.getByText("Alpha 1"))

    expect(handleChange).toHaveBeenCalledWith(
      "a1",
      undefined,
      expect.objectContaining({ label: "Alpha 1", value: "a1" })
    )
  })

  it("hides orphaned group headers when search filters out all items in a group", async () => {
    const user = userEvent.setup()
    render(
      <F0Select {...defaultGroupProps} options={groupedOptions} showSearchBox />
    )

    await openSelect(user)

    // Search for "Beta" — only Group B items match
    await user.type(screen.getByRole("searchbox"), "Beta")

    await waitFor(() => {
      expect(screen.getByText("Beta 1")).toBeInTheDocument()
      expect(screen.getByText("Group B")).toBeInTheDocument()
      // Group A header should be hidden since all its items are filtered out
      expect(screen.queryByText("Group A")).not.toBeInTheDocument()
    })
  })

  it("restores all group headers when search is cleared", async () => {
    const user = userEvent.setup()
    render(
      <F0Select {...defaultGroupProps} options={groupedOptions} showSearchBox />
    )

    await openSelect(user)

    // Type to filter
    await user.type(screen.getByRole("searchbox"), "Beta")
    await waitFor(() => {
      expect(screen.queryByText("Group A")).not.toBeInTheDocument()
    })

    // Clear search
    await user.clear(screen.getByRole("searchbox"))
    await waitFor(() => {
      expect(screen.getByText("Group A")).toBeInTheDocument()
      expect(screen.getByText("Group B")).toBeInTheDocument()
    })
  })

  it("hides all group headers when search matches no items", async () => {
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultGroupProps}
        options={groupedOptions}
        showSearchBox
        searchEmptyMessage="No results"
      />
    )

    await openSelect(user)
    await user.type(screen.getByRole("searchbox"), "zzz-no-match")

    await waitFor(() => {
      expect(screen.queryByText("Group A")).not.toBeInTheDocument()
      expect(screen.queryByText("Group B")).not.toBeInTheDocument()
      expect(screen.getByText("No results")).toBeInTheDocument()
    })
  })
})
