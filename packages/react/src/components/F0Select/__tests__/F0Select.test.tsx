import type { RecordType } from "@/hooks/datasource"
import { zeroRender as render } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import { fireEvent, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { Search } from "../../../icons/app"
import { Select } from "../index"
import type { F0SelectItemProps } from "../types"

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
  // Mock ResizeObserver
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

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
      <Select
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
      <Select
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
      <Select {...defaultSelectProps} options={mockOptions} value="option1" />
    )

    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument()
    })
  })

  it("renders search box when showSearchBox is true", async () => {
    const user = userEvent.setup()
    render(
      <Select
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
      <Select
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
      <Select
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
      <Select
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
      <Select
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
      <Select
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
      <Select {...defaultSelectProps} options={mockOptions} onChange={() => {}}>
        <button>Custom Trigger</button>
      </Select>
    )

    expect(screen.getByText("Custom Trigger")).toBeInTheDocument()
  })

  it("calls onChange when option is selected with item", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <Select
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
      <Select
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
      <Select
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
      expect(handleChange).toHaveBeenCalledWith("", undefined, undefined)
    })
    await waitFor(() => {
      expect(handleChangeSelectedOption).toHaveBeenCalledWith(undefined)
    })
  })
})
