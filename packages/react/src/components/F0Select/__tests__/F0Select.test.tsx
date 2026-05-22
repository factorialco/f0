import { fireEvent, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { createDataSourceDefinition, type RecordType } from "@/hooks/datasource"
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

  it("renders icon tags with text", async () => {
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultSelectProps}
        options={[
          {
            value: "icon-tag-option",
            label: "Icon tag option",
            tag: {
              type: "icon",
              text: "System",
              icon: Search,
            },
          },
        ]}
        onChange={() => {}}
      />
    )

    await openSelect(user)

    expect(screen.getByText("System")).toBeInTheDocument()
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

  it("defers onChange until apply when withApplySelection is enabled", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <F0Select
        {...defaultSelectProps}
        multiple
        options={mockOptions}
        value={[]}
        onChange={handleChange}
        withApplySelection
      />
    )

    await openSelect(user)
    await user.click(screen.getByText("Option 1"))

    expect(handleChange).not.toHaveBeenCalled()

    await user.click(screen.getByRole("button", { name: "Apply selection" }))

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(
        ["option1"],
        [
          {
            id: "option1",
            name: "Option 1",
            description: "Description 1",
          },
        ],
        [
          expect.objectContaining({
            label: "Option 1",
            value: "option1",
            description: "Description 1",
          }),
        ]
      )
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it("cancels staged multi-select changes on outside click when withApplySelection is enabled", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <div>
        <button type="button">Outside</button>
        <F0Select
          {...defaultSelectProps}
          multiple
          options={mockOptions}
          value={["option1", "option2"]}
          onChange={handleChange}
          withApplySelection
        />
      </div>
    )

    await openSelect(user)
    await user.click(screen.getByText("Option 2"))
    fireEvent.pointerDown(document.body)

    await waitFor(() => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    expect(handleChange).not.toHaveBeenCalled()

    await openSelect(user)
    await user.click(screen.getByText("Option 3"))
    await user.click(screen.getByRole("button", { name: "Apply selection" }))

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    expect(handleChange.mock.calls[0]?.[0]).toEqual(
      expect.arrayContaining(["option1", "option2", "option3"])
    )
    expect(handleChange).toHaveBeenCalledWith(
      expect.arrayContaining(["option1", "option2", "option3"]),
      expect.any(Array),
      expect.any(Array)
    )
  })

  it("cancels staged changes without closing when cancel button is clicked", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <F0Select
        {...defaultSelectProps}
        multiple
        options={mockOptions}
        value={["option1", "option2"]}
        onChange={handleChange}
        withApplySelection
      />
    )

    await openSelect(user)
    await user.click(screen.getByText("Option 2"))
    await user.click(screen.getByRole("button", { name: "Cancel" }))

    expect(screen.getByRole("listbox")).toBeInTheDocument()
    expect(handleChange).not.toHaveBeenCalled()

    await user.click(screen.getByText("Option 3"))
    await user.click(screen.getByRole("button", { name: "Apply selection" }))

    expect(handleChange).toHaveBeenCalledWith(
      expect.arrayContaining(["option1", "option2", "option3"]),
      expect.arrayContaining([
        {
          id: "option1",
          name: "Option 1",
          description: "Description 1",
        },
        {
          id: "option2",
          name: "Option 2",
          description: "Description 2",
        },
        {
          id: "option3",
          name: "Option 3",
          description: "Description 3",
        },
      ]),
      expect.arrayContaining([
        expect.objectContaining({
          label: "Option 1",
          value: "option1",
          description: "Description 1",
        }),
        expect.objectContaining({
          label: "Option 2",
          value: "option2",
        }),
        expect.objectContaining({
          label: "Option 3",
          value: "option3",
        }),
      ])
    )
  })

  describe("asList mode", () => {
    it("preserves selection after searching and clicking an item", async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      const source = createDataSourceDefinition<RecordType>({
        dataAdapter: {
          paginationType: "infinite-scroll",
          fetchData: ({ search }) => {
            const allRecords = [
              { id: "1", name: "Alice" },
              { id: "2", name: "Bob" },
              { id: "3", name: "Carol" },
            ]
            const filtered = search
              ? allRecords.filter((r) =>
                  r.name.toLowerCase().includes(search.toLowerCase())
                )
              : allRecords
            return Promise.resolve({
              type: "infinite-scroll" as const,
              cursor: "100",
              perPage: 100,
              hasMore: false,
              records: filtered,
              total: filtered.length,
            })
          },
        },
      })

      render(
        <F0Select
          {...defaultSelectProps}
          source={source}
          mapOptions={(item: RecordType) => ({
            value: item.id as string,
            label: item.name as string,
          })}
          onChange={handleChange}
          asList
          showSearchBox
        />
      )

      // In asList mode, items are shown inline (no popover to open)
      await waitFor(() => {
        expect(screen.getAllByText("Alice").length).toBeGreaterThanOrEqual(1)
      })

      // Type in the search box to filter
      const searchInput = screen.getByRole("searchbox")
      await user.type(searchInput, "Ali")

      // Wait for filtered results
      await waitFor(() => {
        expect(screen.getAllByText("Alice").length).toBeGreaterThanOrEqual(1)
        expect(screen.queryByText("Bob")).not.toBeInTheDocument()
      })

      // Click the first "Alice" element to select it
      await user.click(screen.getAllByText("Alice")[0])

      // onChange should be called with the selected value
      await waitFor(() => {
        expect(handleChange).toHaveBeenCalledWith(
          "1",
          expect.objectContaining({ id: "1", name: "Alice" }),
          expect.objectContaining({ value: "1", label: "Alice" })
        )
      })

      // Wait a bit for any debounced effects to fire
      await waitFor(
        () => {
          // onChange should NOT have been called with undefined (i.e., selection should not be cleared)
          const calls = handleChange.mock.calls
          const undefinedCall = calls.find(
            (call: unknown[]) => call[0] === undefined
          )
          expect(undefinedCall).toBeUndefined()
        },
        { timeout: 1000 }
      )
    })
  })

  describe("collapsible groups", () => {
    type GroupedItem = {
      value: string
      label: string
      role: string
    }

    const groupedItems: GroupedItem[] = [
      { value: "a1", label: "Alice", role: "Engineer" },
      { value: "a2", label: "Bob", role: "Engineer" },
      { value: "b1", label: "Carol", role: "Designer" },
      { value: "b2", label: "Dan", role: "Designer" },
    ]

    const buildSource = (defaultOpenGroups: boolean) =>
      createDataSourceDefinition<GroupedItem>({
        grouping: {
          mandatory: true,
          collapsible: true,
          defaultOpenGroups,
          groupBy: {
            role: {
              name: "Role",
              label: (groupId) => `${groupId}`,
              itemCount: (groupId) =>
                groupedItems.filter((item) => item.role === groupId).length,
            },
          },
        },
        dataAdapter: {
          paginationType: "infinite-scroll",
          fetchData: () =>
            Promise.resolve({
              type: "infinite-scroll" as const,
              cursor: "100",
              perPage: 100,
              hasMore: false,
              records: groupedItems,
              total: groupedItems.length,
            }),
        },
      })

    const mapOptions = (item: GroupedItem) => ({
      value: item.value,
      label: item.label,
    })

    it("shows group headers when all groups are collapsed (no false empty state)", async () => {
      const user = userEvent.setup()
      render(
        <F0Select
          {...defaultSelectProps}
          source={buildSource(false)}
          mapOptions={mapOptions}
          searchEmptyMessage="No results found"
          onChange={() => {}}
        />
      )

      await openSelect(user)

      // Group headers must be visible even though no items contribute a value
      await waitFor(() => {
        expect(screen.getByText("Engineer")).toBeInTheDocument()
      })
      expect(screen.getByText("Designer")).toBeInTheDocument()

      // Records remain hidden while groups are closed
      expect(screen.queryByText("Alice")).not.toBeInTheDocument()
      expect(screen.queryByText("Carol")).not.toBeInTheDocument()

      // Empty-state message must NOT show — group headers count as content
      expect(screen.queryByText("No results found")).not.toBeInTheDocument()
    })

    it("shows group headers and records when groups are open by default", async () => {
      const user = userEvent.setup()
      render(
        <F0Select
          {...defaultSelectProps}
          source={buildSource(true)}
          mapOptions={mapOptions}
          onChange={() => {}}
        />
      )

      await openSelect(user)

      await waitFor(() => {
        expect(screen.getByText("Engineer")).toBeInTheDocument()
      })
      expect(screen.getByText("Alice")).toBeInTheDocument()
      expect(screen.getByText("Bob")).toBeInTheDocument()
      expect(screen.getByText("Carol")).toBeInTheDocument()
      expect(screen.getByText("Dan")).toBeInTheDocument()
    })

    it("reveals records when a closed group header is clicked", async () => {
      const user = userEvent.setup()
      render(
        <F0Select
          {...defaultSelectProps}
          source={buildSource(false)}
          mapOptions={mapOptions}
          onChange={() => {}}
        />
      )

      await openSelect(user)

      await waitFor(() => {
        expect(screen.getByText("Engineer")).toBeInTheDocument()
      })
      expect(screen.queryByText("Alice")).not.toBeInTheDocument()

      await user.click(screen.getByText("Engineer"))

      await waitFor(() => {
        expect(screen.getByText("Alice")).toBeInTheDocument()
      })
      expect(screen.getByText("Bob")).toBeInTheDocument()
      // The other group remains collapsed
      expect(screen.queryByText("Carol")).not.toBeInTheDocument()
    })
  })

  describe("onCreate", () => {
    it("shows create button in empty state when search has text", async () => {
      const user = userEvent.setup()
      const handleCreate = vi.fn()

      render(
        <F0Select
          {...defaultSelectProps}
          options={mockOptions}
          showSearchBox
          onCreate={handleCreate}
        />
      )

      await openSelect(user)

      const searchInput = screen.getByRole("searchbox")
      await user.type(searchInput, "nonexistent")

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /Create "nonexistent"/ })
        ).toBeInTheDocument()
      })
    })

    it("does not show create button when search is empty", async () => {
      const user = userEvent.setup()
      const handleCreate = vi.fn()

      render(
        <F0Select
          {...defaultSelectProps}
          options={[]}
          showSearchBox
          onCreate={handleCreate}
        />
      )

      await openSelect(user)

      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: /Create/ })
        ).not.toBeInTheDocument()
      })
    })

    it("calls onCreate with search text when create button is clicked", async () => {
      const user = userEvent.setup()
      const handleCreate = vi.fn()

      render(
        <F0Select
          {...defaultSelectProps}
          options={mockOptions}
          showSearchBox
          onCreate={handleCreate}
        />
      )

      await openSelect(user)

      const searchInput = screen.getByRole("searchbox")
      await user.type(searchInput, "new item")

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /Create "new item"/ })
        ).toBeInTheDocument()
      })

      await user.click(
        screen.getByRole("button", { name: /Create "new item"/ })
      )

      expect(handleCreate).toHaveBeenCalledWith("new item")
    })

    it("clears search after async onCreate resolves", async () => {
      const user = userEvent.setup()
      let resolveCreate: () => void
      const handleCreate = vi.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveCreate = resolve
          })
      )

      render(
        <F0Select
          {...defaultSelectProps}
          options={mockOptions}
          showSearchBox
          onCreate={handleCreate}
        />
      )

      await openSelect(user)

      const searchInput = screen.getByRole("searchbox")
      await user.type(searchInput, "new item")

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /Create "new item"/ })
        ).toBeInTheDocument()
      })

      await user.click(
        screen.getByRole("button", { name: /Create "new item"/ })
      )

      // Search should still show while promise is pending
      expect(handleCreate).toHaveBeenCalledWith("new item")

      // Resolve the promise
      resolveCreate!()

      // After resolution, search should be cleared
      await waitFor(() => {
        expect(searchInput).toHaveValue("")
      })
    })
  })

  describe("controlled value sync", () => {
    // Regression test for https://github.com/factorialco/f0/pull/4134
    // After PR #4134 refactored F0Select to use `useSelectable`'s `localValue` /
    // `committedSelectionRef`, programmatic resets of the `value` prop from the
    // parent stopped being reflected in the displayed selection: the previous
    // value remained "stuck" in the trigger because the internal
    // `updateLocalSelectedState` merge in useSelectable was additive and never
    // unchecked items that disappeared from the external state.
    it("reflects an externally reset `value` prop after the user has clicked another option", async () => {
      const user = userEvent.setup()

      const { rerender } = render(
        <F0Select
          {...defaultSelectProps}
          options={mockOptions}
          value="option1"
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Option 1")).toBeInTheDocument()
      })

      // User picks Option 2 (simulates a transient selection inside a form).
      await openSelect(user)
      await user.click(screen.getByText("Option 2"))

      await waitFor(() => {
        expect(screen.getByText("Option 2")).toBeInTheDocument()
      })

      // Parent programmatically resets the value (e.g. cross-field rule
      // forcing recurrence back to a default option). The trigger must
      // reflect the new value, not stay stuck on the user's previous pick.
      rerender(
        <F0Select
          {...defaultSelectProps}
          options={mockOptions}
          value="option3"
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Option 3")).toBeInTheDocument()
      })
      expect(screen.queryByText("Option 2")).not.toBeInTheDocument()
    })
  })
})
