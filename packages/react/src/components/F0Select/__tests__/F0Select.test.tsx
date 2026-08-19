import { fireEvent, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import { createRef, useState } from "react"
import { beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest"

import { createDataSourceDefinition, type RecordType } from "@/hooks/datasource"
import { zeroRender as render } from "@/testing/test-utils"

import type { F0SelectItemProps, F0SelectProps } from "../types"

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
    await user.click(screen.getByRole("combobox"))

    // Wait for animation to finish
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
    const teaser = screen.getByRole("listbox")
    fireEvent.animationStart(teaser)
  }

  const createDeferredOptionsSource = () => {
    let resolveFetch: (() => void) | undefined
    const source = createDataSourceDefinition<RecordType>({
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: async () => {
          await new Promise<void>((resolve) => {
            resolveFetch = resolve
          })
          return {
            type: "infinite-scroll" as const,
            cursor: undefined,
            perPage: 100,
            hasMore: false,
            records: [
              { id: "option1", name: "Option 1" },
              { id: "option2", name: "Option 2" },
            ],
            total: 2,
          }
        },
      },
    })

    return {
      source,
      resolve: () => {
        if (!resolveFetch) {
          throw new Error("The deferred options request has not started")
        }
        resolveFetch()
      },
    }
  }

  const getSelectContent = () => {
    const content = screen
      .getByRole("listbox")
      .closest<HTMLElement>("[data-radix-select-content]")

    if (!content) {
      throw new Error("Select content shell not found")
    }

    return content
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

  it("renders metadata as secondary text next to the label", async () => {
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultSelectProps}
        options={[
          {
            value: "es",
            label: "Spain",
            metadata: { type: "dialCode", dialCode: "+34" },
          },
          {
            value: "kr",
            label: "South Korea",
            metadata: { type: "dialCode", dialCode: "+82" },
          },
        ]}
        onChange={() => {}}
      />
    )

    await openSelect(user)

    const dialCode = screen.getByText("+34")
    expect(dialCode.className).toContain("text-f1-foreground-secondary")
    // Metadata is a row-sibling of the label, not a stacked second line
    expect(dialCode.parentElement?.className).not.toContain("flex-col")
    expect(
      within(dialCode.parentElement as HTMLElement).getByText("Spain")
    ).toBeInTheDocument()
    expect(screen.getByText("+82")).toBeInTheDocument()
  })

  it("warns in dev when a metadata dial code is malformed, once per value", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
    const user = userEvent.setup()
    const brokenOptions = [
      {
        value: "xx",
        label: "Broken",
        metadata: { type: "dialCode", dialCode: "34" } as const,
      },
    ]
    const { rerender } = render(
      <F0Select
        {...defaultSelectProps}
        options={brokenOptions}
        onChange={() => {}}
      />
    )

    await openSelect(user)

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('dialCode "34" is not a valid dial code')
    )

    // Virtualized rows re-render on every scroll-in — the warning must not repeat
    const warnCalls = warn.mock.calls.length
    rerender(
      <F0Select
        {...defaultSelectProps}
        options={brokenOptions}
        onChange={() => {}}
      />
    )
    expect(warn).toHaveBeenCalledTimes(warnCalls)
    warn.mockRestore()
  })

  it("opens even when Date.now is frozen (MockDate in stories)", async () => {
    // Regression: the open/close debounce used lodash.debounce, which decides
    // its trailing edge by reading Date.now(). Stories that freeze the clock
    // with MockDate (e.g. DatePicker) made the 100ms window never elapse, so
    // the dropdown could never open. The debounce must ride on setTimeout.
    const frozenNow = new Date(2025, 6, 30).getTime()
    const nowSpy = vi.spyOn(Date, "now").mockReturnValue(frozenNow)
    try {
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
    } finally {
      nowSpy.mockRestore()
    }
  })

  it("sizes the dropdown to its content when fitContentWidth is set", async () => {
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
        fitContentWidth
      />
    )

    await openSelect(user)

    const content = getSelectContent()
    expect(content.className).toContain("w-max")
    expect(content.className).not.toContain("min-w-80")
  })

  it("keeps the default 20rem dropdown minimum without fitContentWidth", async () => {
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
      />
    )

    await openSelect(user)

    expect(getSelectContent().className).toContain("min-w-80")
  })

  it("keeps the field presentation when variant is omitted", () => {
    const { container } = render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
      />
    )

    expect(
      container.querySelector("[data-testid='input-field-wrapper']")
    ).toBeInTheDocument()
    expect(screen.getByRole("combobox").className).not.toContain("h-7")
  })

  describe("inline variant", () => {
    it("exposes the single, non-clearable inline type contract", () => {
      type InlineProps = Extract<F0SelectProps<"viewer">, { variant: "inline" }>

      expectTypeOf<InlineProps["label"]>().toEqualTypeOf<string>()
      expectTypeOf<InlineProps["multiple"]>().toEqualTypeOf<false | undefined>()
      expectTypeOf<InlineProps["clearable"]>().toEqualTypeOf<
        false | undefined
      >()
      expectTypeOf<InlineProps["children"]>().toEqualTypeOf<undefined>()
      expectTypeOf<InlineProps["asList"]>().toEqualTypeOf<undefined>()
      expectTypeOf<InlineProps["showPreview"]>().toEqualTypeOf<undefined>()
      expectTypeOf<
        InlineProps["withApplySelection"]
      >().toEqualTypeOf<undefined>()
      expectTypeOf<InlineProps["loading"]>().toEqualTypeOf<undefined>()
      expectTypeOf<InlineProps["error"]>().toEqualTypeOf<undefined>()
    })

    const roleOptions = [
      {
        value: "owner",
        label: "Owner",
        description: "Can manage access and change roles",
      },
      {
        value: "editor",
        label: "Editor",
        description: "Can view and edit",
      },
      {
        value: "viewer",
        label: "Viewer",
        description: "Can view",
      },
    ]

    it("renders selected and placeholder states and follows controlled updates", async () => {
      const { rerender } = render(
        <F0Select
          variant="inline"
          label="Access level"
          placeholder="Select role"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      const trigger = screen.getByRole("combobox", { name: "Access level" })
      expect(within(trigger).getByText("Viewer")).toBeInTheDocument()
      expect(screen.queryByText("Access level")).not.toBeInTheDocument()

      rerender(
        <F0Select
          variant="inline"
          label="Access level"
          placeholder="Select role"
          options={roleOptions}
          value="editor"
          onChange={() => {}}
        />
      )

      await waitFor(() => {
        expect(within(trigger).getByText("Editor")).toBeInTheDocument()
      })

      rerender(
        <F0Select
          variant="inline"
          label="Access level"
          placeholder="Select role"
          options={roleOptions}
          value={undefined}
          onChange={() => {}}
        />
      )

      await waitFor(() => {
        expect(within(trigger).getByText("Select role")).toBeInTheDocument()
      })
    })

    it("uses compact sm and md trigger dimensions", () => {
      const { rerender } = render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          size="sm"
          onChange={() => {}}
        />
      )

      const trigger = screen.getByRole("combobox", { name: "Access level" })
      expect(trigger.className).toContain("h-7")
      expect(trigger.className).toContain("pl-3")
      expect(trigger.className).toContain("pr-1")

      rerender(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          size="md"
          onChange={() => {}}
        />
      )

      expect(trigger.className).toContain("h-8")
      expect(trigger.className).toContain("pl-3")
      expect(trigger.className).toContain("pr-2")
    })

    it("keeps the requested sm size when an option uses a status tag", () => {
      render(
        <F0Select
          variant="inline"
          label="Approval status"
          options={[
            {
              value: "approved",
              label: "Approved",
              tag: {
                type: "status",
                text: "Approved",
                variant: "positive",
              },
            },
          ]}
          value="approved"
          size="sm"
          onChange={() => {}}
        />
      )

      expect(
        screen.getByRole("combobox", { name: "Approval status" }).className
      ).toContain("h-7")
    })

    it("uses defaultItem while a data source is loading", () => {
      const source = createDataSourceDefinition<RecordType>({
        dataAdapter: {
          paginationType: "infinite-scroll",
          fetchData: () =>
            Promise.resolve({
              type: "infinite-scroll" as const,
              cursor: undefined,
              perPage: 100,
              hasMore: false,
              records: [],
              total: 0,
            }),
        },
      })

      render(
        <F0Select
          variant="inline"
          label="Access level"
          source={source}
          mapOptions={(item) => ({
            value: item.id as string,
            label: item.name as string,
          })}
          value="viewer"
          defaultItem={{ value: "viewer", label: "Viewer" }}
          onChange={() => {}}
        />
      )

      expect(
        within(
          screen.getByRole("combobox", { name: "Access level" })
        ).getByText("Viewer")
      ).toBeInTheDocument()
    })

    it("uses intrinsic borderless trigger styling and a plain chevron", () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      const trigger = screen.getByRole("combobox", { name: "Access level" })
      expect(trigger.className).toContain("w-fit")
      expect(trigger.className).toContain("gap-1")
      expect(trigger.className).toContain("rounded-sm")
      expect(trigger.className).toContain("border-0")
      expect(trigger.className).toContain("bg-transparent")
      expect(trigger.className).toContain("shadow-none")

      const chevron = trigger.querySelector("svg")
      expect(chevron).toBeInTheDocument()
      expect(chevron?.parentElement?.className).not.toContain("bg-")
    })

    it("does not open when disabled", async () => {
      const user = userEvent.setup()
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          disabled
          onChange={() => {}}
        />
      )

      const trigger = screen.getByRole("combobox", { name: "Access level" })
      expect(trigger).toBeDisabled()
      expect(trigger.className).toContain("disabled:bg-f1-background-tertiary")
      expect(trigger.className).toContain(
        "disabled:text-f1-foreground-disabled"
      )

      await user.click(trigger)

      expect(trigger).toHaveAttribute("aria-expanded", "false")
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    it("selects an option and reports it through onChange", async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      const ControlledInlineSelect = () => {
        const [value, setValue] = useState("viewer")

        return (
          <F0Select
            variant="inline"
            label="Access level"
            options={roleOptions}
            value={value}
            onChange={(nextValue, originalItem, option) => {
              handleChange(nextValue, originalItem, option)
              setValue(nextValue)
            }}
          />
        )
      }

      render(<ControlledInlineSelect />)

      await openSelect(user)
      await user.keyboard("{ArrowUp}{Enter}")

      await waitFor(() => {
        expect(handleChange).toHaveBeenCalledWith(
          "editor",
          undefined,
          expect.objectContaining({ value: "editor", label: "Editor" })
        )
        expect(handleChange).toHaveBeenCalledTimes(1)
      })
      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
      })
      expect(
        within(
          screen.getByRole("combobox", { name: "Access level" })
        ).getByText("Editor")
      ).toBeInTheDocument()
    })

    it("restores a controlled value rejected by the parent and allows retrying it", async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={handleChange}
        />
      )

      const trigger = screen.getByRole("combobox", { name: "Access level" })

      await openSelect(user)
      await user.keyboard("{ArrowUp}{Enter}")

      await waitFor(() => {
        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(handleChange).toHaveBeenLastCalledWith(
          "editor",
          undefined,
          expect.objectContaining({ value: "editor", label: "Editor" })
        )
        expect(within(trigger).getByText("Viewer")).toBeInTheDocument()
      })

      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
      })
      await openSelect(user)

      expect(screen.getByRole("option", { name: /Viewer/ })).toHaveAttribute(
        "data-state",
        "checked"
      )
      expect(screen.getByRole("option", { name: /Editor/ })).toHaveAttribute(
        "data-state",
        "unchecked"
      )

      await user.keyboard("{ArrowUp}{Enter}")

      await waitFor(() => {
        expect(handleChange).toHaveBeenCalledTimes(2)
        expect(handleChange).toHaveBeenLastCalledWith(
          "editor",
          undefined,
          expect.objectContaining({ value: "editor", label: "Editor" })
        )
        expect(within(trigger).getByText("Viewer")).toBeInTheDocument()
      })
    })

    it("defaults to content width and honors an explicit popup-width override", async () => {
      const user = userEvent.setup()
      const firstRender = render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      await openSelect(user)
      expect(getSelectContent().className).toContain("w-max")

      firstRender.unmount()

      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          fitContentWidth={false}
          onChange={() => {}}
        />
      )

      await openSelect(user)
      expect(getSelectContent().className).toContain("min-w-80")
    })

    it("reuses the standard popup and option presentation", async () => {
      const user = userEvent.setup()
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      await openSelect(user)

      const content = getSelectContent()
      const option = screen.getByRole("option", { name: /Viewer/ })
      const description = screen.getByText("Can view")
      const indicator = option.querySelector(".text-f1-icon-selected")

      await waitFor(() => expect(option).toHaveFocus())

      expect(content.className).toContain("rounded-md")
      expect(content.className).toContain("shadow-md")
      expect(option.className).toContain("px-3")
      expect(option.className).toContain("py-2")
      expect(option.className).toContain(
        "data-[state=checked]:after:bg-f1-background-selected-bold/10"
      )
      expect(option.className).toContain("grid-cols-[1fr_20px]")
      expect(description.className).not.toContain("text-sm")
      expect(indicator).toBeInTheDocument()
      expect(option.lastElementChild).toBe(indicator)
      expect(indicator?.querySelector("svg")?.className.baseVal).toContain(
        "w-5"
      )
    })

    it("runs footer actions", async () => {
      const user = userEvent.setup()
      const handleRemove = vi.fn()
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
          showSearchBox
          actions={[
            {
              label: "Remove access",
              variant: "critical",
              onClick: handleRemove,
            },
          ]}
        />
      )

      await openSelect(user)
      const search = screen.getByRole("searchbox")
      const action = screen.getByRole("button", { name: "Remove access" })

      search.focus()
      await user.tab()
      expect(document.activeElement).toHaveAttribute("role", "option")

      await user.tab()
      expect(action).toHaveFocus()

      await user.tab({ shift: true })
      expect(document.activeElement).toHaveAttribute("role", "option")

      await user.tab({ shift: true })
      expect(search).toHaveFocus()

      await user.tab()
      await user.tab()
      expect(action).toHaveFocus()

      await user.keyboard("{Enter}")

      await waitFor(() => {
        expect(handleRemove).toHaveBeenCalledOnce()
      })
    })

    it("forwards refs through both trigger variants", () => {
      const fieldRef = createRef<HTMLButtonElement>()
      const field = render(
        <F0Select
          ref={fieldRef}
          label="Field access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      expect(fieldRef.current).not.toBeNull()
      field.unmount()

      const inlineRef = createRef<HTMLButtonElement>()
      render(
        <F0Select
          ref={inlineRef}
          variant="inline"
          label="Inline access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      expect(inlineRef.current).toBe(
        screen.getByRole("combobox", { name: "Inline access level" })
      )
    })
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

  it("renders selected status tags as pills in the trigger", async () => {
    render(
      <F0Select
        {...defaultSelectProps}
        options={[
          {
            value: "approved",
            label: "Approved",
            tag: {
              type: "status",
              text: "Approved",
              variant: "positive",
            },
          },
        ]}
        value="approved"
      />
    )

    const combobox = screen.getByRole("combobox")
    const selectedLabel = within(combobox).getByText("Approved")

    await waitFor(() => {
      expect(selectedLabel.closest(".bg-f1-background-positive")).toBeTruthy()
    })
  })

  it("renders status-only options without duplicating the label", async () => {
    const user = userEvent.setup()
    render(
      <F0Select
        {...defaultSelectProps}
        options={[
          {
            value: "draft",
            label: "Draft",
            tag: {
              type: "status",
              text: "Draft",
              variant: "neutral",
            },
          },
          {
            value: "approved",
            label: "Approved",
            tag: {
              type: "status",
              text: "Approved",
              variant: "positive",
            },
          },
        ]}
        onChange={() => {}}
      />
    )

    await openSelect(user)

    const approvedOption = screen.getByRole("option", { name: "Approved" })

    expect(within(approvedOption).getAllByText("Approved")).toHaveLength(1)
    expect(
      within(approvedOption)
        .getByText("Approved")
        .closest(".bg-f1-background-positive")
    ).toBeTruthy()
  })

  it("throws when options mix multiple tag types", () => {
    expect(() =>
      render(
        <F0Select
          {...defaultSelectProps}
          options={[
            {
              value: "approved",
              label: "Approved",
              tag: {
                type: "status",
                text: "Approved",
                variant: "positive",
              },
            },
            {
              value: "isabella",
              label: "Isabella",
              tag: { type: "person", name: "Isabella" },
            },
          ]}
          onChange={() => {}}
        />
      )
    ).toThrow(/All options must use the same tag type/)
  })

  it("forces at least md trigger size when options carry status tags", () => {
    const { container } = render(
      <F0Select
        {...defaultSelectProps}
        size="sm"
        value="approved"
        options={[
          {
            value: "approved",
            label: "Approved",
            tag: {
              type: "status",
              text: "Approved",
              variant: "positive",
            },
          },
        ]}
      />
    )

    expect(container.querySelector(".h-\\[40px\\]")).toBeTruthy()
    expect(container.querySelector(".h-\\[32px\\]")).toBeFalsy()
  })

  it("forces at least md trigger size for a preselected status pill not yet in the dataset", () => {
    const { container } = render(
      <F0Select
        {...defaultSelectProps}
        size="sm"
        value="approved"
        // Dataset hasn't loaded the selected record; the pill comes from defaultItem
        options={[]}
        defaultItem={{
          value: "approved",
          label: "Approved",
          tag: {
            type: "status",
            text: "Approved",
            variant: "positive",
          },
        }}
      />
    )

    expect(container.querySelector(".h-\\[40px\\]")).toBeTruthy()
    expect(container.querySelector(".h-\\[32px\\]")).toBeFalsy()
  })

  it("keeps the requested sm trigger size when no status tags are present", () => {
    const { container } = render(
      <F0Select
        {...defaultSelectProps}
        size="sm"
        value="option1"
        options={[{ value: "option1", label: "Option 1" }]}
      />
    )

    expect(container.querySelector(".h-\\[32px\\]")).toBeTruthy()
    expect(container.querySelector(".h-\\[40px\\]")).toBeFalsy()
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
    const onSearchChange = vi.fn()
    render(
      <F0Select
        {...defaultSelectProps}
        options={mockOptions}
        onChange={() => {}}
        onSearchChange={onSearchChange}
        showSearchBox
      />
    )

    await openSelect(user)
    const searchInput = screen.getByRole("searchbox")
    await user.type(searchInput, "Option 1")

    await waitFor(() =>
      expect(onSearchChange).toHaveBeenLastCalledWith("Option 1")
    )
    expect(screen.getByText("Option 1")).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.queryByText("Option 2")).not.toBeInTheDocument()
    )
    expect(searchInput).toHaveFocus()
  })

  it("keeps search focus when async options load", async () => {
    const user = userEvent.setup()
    const deferredOptions = createDeferredOptionsSource()

    render(
      <F0Select
        {...defaultSelectProps}
        source={deferredOptions.source}
        mapOptions={(item) => ({
          value: item.id as string,
          label: item.name as string,
        })}
        value="option2"
        defaultItem={{ value: "option2", label: "Option 2" }}
        showSearchBox
      />
    )

    await openSelect(user)
    const searchInput = screen.getByRole("searchbox")
    await waitFor(() => expect(searchInput).toHaveFocus())

    deferredOptions.resolve()

    await waitFor(() =>
      expect(
        within(screen.getByRole("listbox")).getByRole("option", {
          name: "Option 2",
        })
      ).toBeInTheDocument()
    )
    expect(searchInput).toHaveFocus()
  })

  it("keeps footer focus when async options load", async () => {
    const user = userEvent.setup()
    const deferredOptions = createDeferredOptionsSource()

    render(
      <F0Select
        {...defaultSelectProps}
        source={deferredOptions.source}
        mapOptions={(item) => ({
          value: item.id as string,
          label: item.name as string,
        })}
        value="option2"
        defaultItem={{ value: "option2", label: "Option 2" }}
        showSearchBox
        actions={[{ label: "Manage options", onClick: vi.fn() }]}
      />
    )

    await openSelect(user)
    const searchInput = screen.getByRole("searchbox")
    const footerAction = screen.getByRole("button", { name: "Manage options" })
    await waitFor(() => expect(searchInput).toHaveFocus())

    await user.tab()
    expect(footerAction).toHaveFocus()

    deferredOptions.resolve()

    await waitFor(() =>
      expect(
        within(screen.getByRole("listbox")).getByRole("option", {
          name: "Option 2",
        })
      ).toBeInTheDocument()
    )
    expect(footerAction).toHaveFocus()
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

    // Find the clear button using the same approach as F0InputField tests
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

  it("closes the dropdown and discards staged changes when cancel is clicked", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <F0Select
        {...defaultSelectProps}
        multiple
        options={mockOptions}
        value={["option1"]}
        onChange={handleChange}
        withApplySelection
      />
    )

    await openSelect(user)
    await user.click(screen.getByText("Option 2"))
    await user.click(screen.getByRole("button", { name: "Cancel" }))

    await waitFor(() => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })
    expect(handleChange).not.toHaveBeenCalled()

    await openSelect(user)
    await user.click(screen.getByRole("button", { name: "Apply selection" }))

    await waitFor(() => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })
    expect(handleChange).not.toHaveBeenCalled()
  })

  it("renders a custom apply-button label when applySelectionLabel is provided", async () => {
    const user = userEvent.setup()

    render(
      <F0Select
        {...defaultSelectProps}
        multiple
        options={mockOptions}
        value={[]}
        onChange={vi.fn()}
        withApplySelection
        applySelectionLabel="Add to schedule"
      />
    )

    await openSelect(user)

    expect(
      screen.getByRole("button", { name: "Add to schedule" })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Apply selection" })
    ).not.toBeInTheDocument()
  })

  describe("selected item's display", () => {
    it("shows `selectedLabel` on the trigger while the row keeps its `label`", async () => {
      const user = userEvent.setup()
      render(
        <F0Select
          {...defaultSelectProps}
          value="option1"
          options={[
            {
              value: "option1",
              label: "Tokens",
              selectedLabel: "Tokens — Design system",
            },
            { value: "option2", label: "Components" },
          ]}
          onChange={() => {}}
        />
      )

      // The trigger has no group header or siblings to read "Tokens" against.
      expect(screen.getByText("Tokens — Design system")).toBeInTheDocument()

      await openSelect(user)

      // The row does, so it stays short.
      expect(screen.getByText("Tokens")).toBeInTheDocument()
    })

    it("draws ONE glyph on the trigger when the field and the option both have an icon", async () => {
      const user = userEvent.setup()
      const { container } = render(
        <F0Select
          {...defaultSelectProps}
          icon={Search}
          value="option1"
          options={mockOptions}
          onChange={() => {}}
        />
      )

      // The field's icon owns the trigger's glyph slot; the selected option's is
      // left out, because the two are drawn in different places and would sit 4px
      // apart. `mockOptions[0]` carries an icon of its own.
      const trigger = screen.getByRole("combobox")
      expect(trigger.querySelectorAll("svg")).toHaveLength(0)
      expect(container.querySelectorAll("svg").length).toBeGreaterThan(0)

      // …while the ROW keeps its icon. Scoped to the list: the trigger shows the
      // same label, so an unscoped query finds both.
      await openSelect(user)
      const row = within(screen.getByRole("listbox"))
        .getByText("Option 1")
        .closest("[role='option']")
      expect(row?.querySelectorAll("svg").length).toBeGreaterThan(0)
    })

    describe("hover tooltip", () => {
      /**
       * The trigger is WIRED as a tooltip trigger: Radix marks its (asChild)
       * trigger with `data-state`, and renders the content lazily — so this is
       * what "there is a tooltip here" looks like before anyone hovers. Opening
       * it for real needs Radix's 700ms timer, which deadlocks `user.hover`
       * under fake timers and does not resolve under real ones in jsdom; what the
       * tooltip SAYS is asserted in `F0Select.triggerTooltip.test.tsx`, against a
       * stubbed tooltip.
       */
      const tooltipWrapper = () =>
        screen.getByRole("combobox").closest("div[data-state]")

      it("is wired on the trigger when an item is selected", () => {
        render(
          <F0Select
            {...defaultSelectProps}
            hideLabel
            value="option1"
            options={mockOptions}
            onChange={() => {}}
          />
        )

        expect(tooltipWrapper()).toHaveAttribute("data-state", "closed")
      })

      it("stays wired when nothing is selected", () => {
        render(
          <F0Select
            {...defaultSelectProps}
            hideLabel
            options={mockOptions}
            onChange={() => {}}
          />
        )

        // Wired but silent: nothing selected means nothing to explain, and an
        // empty tooltip never opens (`Tooltip.emptyContent.test.tsx`). Dropping
        // the wiring instead would change the element type above the trigger and
        // remount it (`F0Select.triggerIdentity.test.tsx`).
        expect(tooltipWrapper()).toHaveAttribute("data-state", "closed")
      })
    })
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

    /**
     * ONE SCROLLPORT. The virtualized list is rendered through Radix's
     * `Select.Viewport` with `asChild`, so Radix merges its own
     * `overflow: hidden auto; flex: 1 1 0%` onto the virtualizer's SIZER — which
     * made a second scroll container inside the `ScrollArea` that already scrolls
     * the list. Two nested scrollers is the "double scroll" a grouped list is long
     * enough to expose: the wheel fills the inner one, then hands off to the outer.
     */
    it("leaves the scrolling to ONE element, not two", async () => {
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

      const sizer = document.querySelector<HTMLElement>(
        "[data-radix-select-viewport]"
      )
      expect(sizer).not.toBeNull()
      // The spacer must not scroll, and must not be shrinkable below the height
      // the virtualizer gave it.
      expect(sizer!.style.overflow).toBe("visible")
      // `flex: none` as the browser stores it.
      expect(sizer!.style.flex).toBe("0 0 auto")
    })

    // NOTE: the other half of this fix — that expanding a group no longer scrolls
    // the list back to the selection — has no honest test here. jsdom has no
    // layout, so the virtualizer's scroll is a no-op and any assertion about it
    // passes whether the bug is present or not. It is verified in a browser.
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

  describe("onChange emit is debounced against spurious re-fires", () => {
    // Regression for the F0Select double-emit observed in the
    // BankAccountTypeSelectorWizardStepF0 flow:
    //
    // With an async datasource (`useGraphqlDataSource`-style), clicking a
    // single-select option fired `onChange` once on the click, and then a
    // second time once the async `records` finished resolving / the
    // `selectedState` items were re-cloned by `updateLocalSelectedState`.
    // Consumers that toggle state on every onChange call ended up flipping
    // back to a stale value.
    //
    // The contract we enforce here: a single user click on a single-select
    // F0Select with an async datasource must call `onChange` exactly once
    // with that value, even after async data resolution settles.
    it("single-select async datasource: a single click emits onChange exactly once", async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      let resolveFetch: (() => void) | undefined
      const source = createDataSourceDefinition<RecordType>({
        dataAdapter: {
          paginationType: "infinite-scroll",
          fetchData: async () => {
            // Defer the first resolution to simulate an async backend
            // (GraphQL roundtrip). The click below should NOT wait for this.
            await new Promise<void>((resolve) => {
              resolveFetch = resolve
            })
            return {
              type: "infinite-scroll" as const,
              cursor: "100",
              perPage: 100,
              hasMore: false,
              records: [
                { id: "1", name: "Alice" },
                { id: "2", name: "Bob" },
              ],
              total: 2,
            }
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

      // Wait until the datasource's fetchData effect has run and exposed the
      // resolver, then resolve so the options render. Calling resolveFetch
      // synchronously after render races with the useEffect that triggers it.
      await waitFor(() => {
        expect(resolveFetch).toBeDefined()
      })
      resolveFetch!()

      await waitFor(() => {
        expect(screen.getAllByText("Alice").length).toBeGreaterThanOrEqual(1)
      })

      // Pick "Alice".
      await user.click(screen.getAllByText("Alice")[0])

      await waitFor(() => {
        expect(handleChange).toHaveBeenCalledWith(
          "1",
          expect.objectContaining({ id: "1", name: "Alice" }),
          expect.objectContaining({ value: "1", label: "Alice" })
        )
      })

      // Give async effects (record resolution, deep-compare effects, item
      // reference population) time to settle, then assert the emit count
      // stays at exactly one. Note: a `waitFor`-based check is not suitable
      // here because `waitFor` returns on the first passing assertion and
      // therefore cannot prove "stays stable over a window" — a regression
      // that produces a second emit a few ms later would slip through. We
      // wait an explicit window (100ms is generous w.r.t. the < ~16ms render
      // cycle that would carry the duplicate emit) and then assert.
      await new Promise((resolve) => setTimeout(resolve, 100))

      const callsForOne = handleChange.mock.calls.filter(
        (call: unknown[]) => call[0] === "1"
      )
      expect(callsForOne).toHaveLength(1)
    })
  })
})
