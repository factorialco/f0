import { useState } from "react"
import { describe, expect, it, vi } from "vitest"

import { createDataSourceDefinition } from "@/hooks/datasource"
import {
  act,
  fireEvent,
  screen,
  userEvent,
  waitFor,
  within,
  zeroRender as render,
} from "@/testing/test-utils"

import type {
  F0FilterTagPickerFiltersDefinition,
  F0FilterTagPickerMode,
  F0FilterTagPickerValue,
} from "../types"

import { getCategoryDotStyle } from "../colorStyles"
import { F0FilterTagPicker } from "../F0FilterTagPicker"
import { filterTagPickerValueToFiltersState } from "../types"
import { normalizeFilterTagPickerValue } from "../value"

Object.defineProperty(window, "scrollBy", {
  configurable: true,
  value: () => {},
})
Object.defineProperty(document, "elementFromPoint", {
  configurable: true,
  value: () => document.activeElement,
})
global.ResizeObserver = class MockResizeObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
} as typeof ResizeObserver
Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
  configurable: true,
  value: 800,
})
Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
  configurable: true,
  value: 800,
})
vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(() => ({
  width: 120,
  height: 120,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  x: 0,
  y: 0,
  toJSON: () => {},
}))

const filters = {
  location: {
    type: "in",
    label: "Location",
    options: {
      options: [
        { value: "barcelona", label: "Barcelona" },
        { value: "madrid", label: "Madrid" },
        { value: "malaga", label: "Málaga" },
      ],
    },
  },
  role: {
    type: "in",
    label: "Role",
    options: {
      options: [
        { value: "engineer", label: "Engineer" },
        { value: "designer", label: "Product designer" },
        { value: "support", label: "Customer support agent" },
      ],
    },
  },
} satisfies F0FilterTagPickerFiltersDefinition

type Filters = typeof filters

function ControlledPicker({
  initialValue = [],
  mode = "mixed",
  onChange = () => {},
}: {
  initialValue?: F0FilterTagPickerValue<Filters>
  mode?: F0FilterTagPickerMode
  onChange?: (value: F0FilterTagPickerValue<Filters>) => void
}) {
  const [value, setValue] =
    useState<F0FilterTagPickerValue<Filters>>(initialValue)

  return (
    <>
      <F0FilterTagPicker
        filters={filters}
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue)
          onChange(nextValue)
        }}
        label="Who should belong to this team?"
        mode={mode}
      />
      <output data-testid="picker-value">{JSON.stringify(value)}</output>
      <output data-testid="filters-state">
        {JSON.stringify(filterTagPickerValueToFiltersState(value))}
      </output>
    </>
  )
}

async function getEditor(name = "Who should belong to this team?") {
  return screen.findByRole("combobox", { name })
}

function moveCaretToEnd(editor: HTMLElement) {
  const range = document.createRange()
  range.selectNodeContents(editor)
  range.collapse(false)
  const selection = window.getSelection()
  selection?.removeAllRanges()
  selection?.addRange(range)
  fireEvent(document, new Event("selectionchange"))
}

function moveCaretToStart(editor: HTMLElement) {
  const range = document.createRange()
  range.selectNodeContents(editor)
  range.collapse(true)
  const selection = window.getSelection()
  selection?.removeAllRanges()
  selection?.addRange(range)
  fireEvent(document, new Event("selectionchange"))
}

describe("F0FilterTagPicker value", () => {
  it("merges adjacent text, removes empty text, and derives unique filters", () => {
    const value: F0FilterTagPickerValue<Filters> = [
      { type: "text", value: "People " },
      { type: "text", value: "in " },
      { type: "text", value: "" },
      { type: "filter", filterKey: "location", value: "madrid" },
      { type: "filter", filterKey: "location", value: "madrid" },
      { type: "filter", filterKey: "role", value: "engineer" },
    ]

    expect(normalizeFilterTagPickerValue(value)).toEqual([
      { type: "text", value: "People in " },
      { type: "filter", filterKey: "location", value: "madrid" },
      { type: "filter", filterKey: "location", value: "madrid" },
      { type: "filter", filterKey: "role", value: "engineer" },
    ])
    expect(filterTagPickerValueToFiltersState(value)).toEqual({
      location: ["madrid"],
      role: ["engineer"],
    })
  })
})

describe("F0FilterTagPicker", () => {
  it("uses a compact two-line editor by default", async () => {
    render(<ControlledPicker />)

    const editor = await getEditor()
    expect(editor.parentElement).toHaveClass("min-h-20")
    expect(editor.parentElement?.className).toContain(
      "[&_.ProseMirror]:min-h-[3.75rem]"
    )
    expect(editor.parentElement?.parentElement).toHaveClass("min-h-20")
  })

  it("adds category selections as tags when Apply closes the select", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker mode="tags" />)

    await user.click(await screen.findByRole("combobox", { name: "Location" }))
    fireEvent.animationStart(await screen.findByRole("listbox"))
    await user.click(await screen.findByText("Madrid"))

    expect(screen.getByTestId("filters-state")).toHaveTextContent("{}")

    await user.click(screen.getByRole("button", { name: "Apply selection" }))

    await waitFor(() => {
      expect(screen.getByTestId("filters-state")).toHaveTextContent(
        JSON.stringify({ location: ["madrid"] })
      )
    })
    expect(
      screen.getByRole("button", { name: "Remove Madrid from Location" })
    ).toBeInTheDocument()
  })

  it("commits the draft selection when a category select closes", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker mode="tags" />)

    await user.click(await screen.findByRole("combobox", { name: "Role" }))
    fireEvent.animationStart(await screen.findByRole("listbox"))
    await user.click(await screen.findByText("Engineer"))
    await user.keyboard("{Escape}")

    await waitFor(() => {
      expect(screen.getByTestId("filters-state")).toHaveTextContent(
        JSON.stringify({ role: ["engineer"] })
      )
    })
  })

  it("emits free text immediately while preserving spaces and line breaks", async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ControlledPicker onChange={onChange} />)

    const editor = await getEditor()
    expect(editor.querySelector("[data-placeholder]")).toHaveAttribute(
      "data-placeholder",
      "Describe people or type a location, role, team..."
    )
    expect(
      screen.getByText(/Write freely\. Use arrow keys/)
    ).toBeInTheDocument()
    await user.click(editor)
    await user.type(
      editor,
      "People in Europe{Shift>}{Enter}{/Shift}who work remotely"
    )

    expect(onChange).toHaveBeenCalled()
    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([
        { type: "text", value: "People in Europe\nwho work remotely" },
      ])
    )
    expect(editor).toHaveFocus()
  })

  it("uses text only as a transient query in tags mode", async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ControlledPicker mode="tags" onChange={onChange} />)

    const editor = await getEditor()
    expect(editor.querySelector("[data-placeholder]")).toHaveAttribute(
      "data-placeholder",
      "Search locations, roles, teams..."
    )
    expect(
      screen.getByText(/Type to search\. Use arrow keys/)
    ).toBeInTheDocument()
    await user.click(editor)
    await user.type(editor, "madrid")

    expect(onChange).not.toHaveBeenCalled()
    expect(
      await screen.findByRole("option", { name: /Madrid/ })
    ).toBeInTheDocument()
    await user.keyboard("{Enter}")

    const expectedValue = [
      { type: "filter", filterKey: "location", value: "madrid" },
    ]
    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify(expectedValue)
    )
    expect(onChange).toHaveBeenLastCalledWith(expectedValue)
  })

  it("prevents line breaks and clears an unfinished query on blur in tags mode", async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ControlledPicker mode="tags" onChange={onChange} />)

    const editor = await getEditor()
    await user.click(editor)
    await user.type(editor, "unknown")
    await user.keyboard("{Enter}{Shift>}{Enter}{/Shift}")

    expect(editor).toHaveTextContent("unknown")
    expect(onChange).not.toHaveBeenCalled()

    fireEvent.blur(editor)

    await waitFor(() => expect(editor).toHaveTextContent(""))
    expect(screen.getByTestId("picker-value")).toHaveTextContent("[]")
    expect(onChange).not.toHaveBeenCalled()
  })

  it("replaces the longest matching phrase with a filter tag", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker />)

    const editor = await getEditor()
    await user.click(editor)
    await user.type(editor, "People in Customer support")

    expect(
      await screen.findByRole("option", { name: /Customer support agent/ })
    ).toBeInTheDocument()
    await user.keyboard("{Enter}")

    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([
        { type: "text", value: "People in " },
        { type: "filter", filterKey: "role", value: "support" },
        { type: "text", value: " " },
      ])
    )
    expect(screen.getByTestId("filters-state")).toHaveTextContent(
      JSON.stringify({ role: ["support"] })
    )
    expect(
      screen.getByRole("button", {
        name: "Remove Customer support agent from Role",
      })
    ).toBeInTheDocument()
  })

  it("navigates the flat results with arrows and selects with Enter", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker />)

    const editor = await getEditor()
    await user.click(editor)
    await user.type(editor, "a")
    expect(editor).toHaveAttribute(
      "aria-activedescendant",
      screen.getAllByRole("option")[0].id
    )
    expect(screen.getAllByRole("option")[0]).toHaveAttribute(
      "aria-selected",
      "false"
    )
    await user.keyboard("{ArrowDown}{Enter}")

    expect(screen.getByTestId("filters-state")).toHaveTextContent(
      JSON.stringify({ location: ["madrid"] })
    )
  })

  it("wraps upward from the first result", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker />)

    const editor = await getEditor()
    await user.click(editor)
    await user.type(editor, "d")
    await user.keyboard("{ArrowUp}{Enter}")

    expect(screen.getByTestId("filters-state")).toHaveTextContent(
      JSON.stringify({ role: ["designer"] })
    )
  })

  it("selects a result with the pointer interaction", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker />)

    const editor = await getEditor()
    await user.click(editor)
    await user.type(editor, "madrid")
    await user.click(await screen.findByRole("option", { name: /Madrid/ }))

    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([
        { type: "filter", filterKey: "location", value: "madrid" },
        { type: "text", value: " " },
      ])
    )
  })

  it("inserts a line break with Enter when no result is active", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker />)

    const editor = await getEditor()
    await user.click(editor)
    await user.type(editor, "unmatched{Enter}next")

    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([{ type: "text", value: "unmatched\nnext" }])
    )
  })

  it("mixes categories in one flat, color-distinguished list", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker />)

    const editor = await getEditor()
    await user.click(editor)
    await user.type(editor, "d")

    const listbox = await screen.findByRole("listbox")
    const options = within(listbox).getAllByRole("option")
    expect(options.map((option) => option.textContent)).toEqual([
      expect.stringContaining("Madrid"),
      expect.stringContaining("Product designer"),
    ])
    expect(within(listbox).queryByRole("group")).not.toBeInTheDocument()
    expect(
      options.every((option) =>
        Boolean(option.querySelector('[aria-hidden="true"][style]'))
      )
    ).toBe(true)
  })

  it("matches without accents and omits selected duplicates", async () => {
    const user = userEvent.setup()
    render(
      <ControlledPicker
        initialValue={[
          { type: "filter", filterKey: "location", value: "madrid" },
          { type: "text", value: " and malaga" },
        ]}
      />
    )

    const editor = await getEditor()
    await user.click(editor)
    moveCaretToEnd(editor)

    expect(
      await screen.findByRole("option", { name: /Málaga/ })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("option", { name: /Madrid/ })
    ).not.toBeInTheDocument()
  })

  it("removes inline tags with their X and Backspace", async () => {
    const user = userEvent.setup()
    render(
      <ControlledPicker
        initialValue={[
          { type: "text", value: "Based in " },
          { type: "filter", filterKey: "location", value: "barcelona" },
          { type: "text", value: " or " },
          { type: "filter", filterKey: "location", value: "madrid" },
        ]}
      />
    )

    await user.click(
      await screen.findByRole("button", {
        name: "Remove Barcelona from Location",
      })
    )
    expect(screen.getByTestId("filters-state")).toHaveTextContent(
      JSON.stringify({ location: ["madrid"] })
    )
    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([
        { type: "text", value: "Based in or " },
        { type: "filter", filterKey: "location", value: "madrid" },
      ])
    )

    const editor = await getEditor()
    await user.click(editor)
    moveCaretToEnd(editor)
    fireEvent.keyDown(editor, { key: "Backspace" })

    expect(screen.getByTestId("filters-state")).toHaveTextContent("{}")
    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([{ type: "text", value: "Based in or " }])
    )
  })

  it("removes a following tag with Delete", async () => {
    render(
      <ControlledPicker
        initialValue={[
          { type: "filter", filterKey: "location", value: "madrid" },
          { type: "text", value: " remains editable" },
        ]}
      />
    )

    const editor = await getEditor()
    fireEvent.focus(editor)
    moveCaretToStart(editor)
    fireEvent.keyDown(editor, { key: "Delete" })

    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([{ type: "text", value: " remains editable" }])
    )
  })

  it("keeps the caret active through controlled parent updates", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker />)

    const editor = await getEditor()
    await user.click(editor)
    await user.type(editor, "A natural sentence")
    await user.type(editor, " that keeps growing")

    expect(editor).toHaveFocus()
    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([
        { type: "text", value: "A natural sentence that keeps growing" },
      ])
    )
  })

  it("reflects externally controlled token updates", async () => {
    const { rerender } = render(
      <F0FilterTagPicker
        filters={filters}
        value={[]}
        onChange={vi.fn()}
        label="Filters"
      />
    )

    await screen.findByRole("combobox", { name: "Filters" })
    rerender(
      <F0FilterTagPicker
        filters={filters}
        value={[
          { type: "text", value: "A " },
          { type: "filter", filterKey: "role", value: "designer" },
        ]}
        onChange={vi.fn()}
        label="Filters"
      />
    )

    expect(
      await screen.findByRole("button", {
        name: "Remove Product designer from Role",
      })
    ).toBeInTheDocument()
    expect(screen.getByRole("combobox", { name: "Filters" })).toHaveTextContent(
      "A Product designer"
    )
  })

  it("closes suggestions with Escape without deleting free text", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker />)

    const editor = await getEditor()
    await user.click(editor)
    await user.type(editor, "madrid")
    expect(editor).toHaveAttribute("aria-expanded", "true")

    await user.keyboard("{Escape}")

    expect(editor).toHaveAttribute("aria-expanded", "false")
    expect(editor).toHaveTextContent("madrid")
    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([{ type: "text", value: "madrid" }])
    )
  })

  it("accepts only plain text when pasting", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker />)

    const editor = await getEditor()
    await user.click(editor)
    await user.paste("First line\nSecond line")

    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([{ type: "text", value: "First line\nSecond line" }])
    )
    expect(editor.querySelector("script")).not.toBeInTheDocument()
  })

  it("discards rich clipboard markup in favor of text/plain", async () => {
    render(<ControlledPicker />)

    const editor = await getEditor()
    fireEvent.focus(editor)
    fireEvent.paste(editor, {
      clipboardData: {
        getData: (type: string) =>
          type === "text/plain" ? "Safe text" : "<strong>Rich text</strong>",
      },
    })

    expect(screen.getByTestId("picker-value")).toHaveTextContent(
      JSON.stringify([{ type: "text", value: "Safe text" }])
    )
    expect(editor.querySelector("strong")).not.toBeInTheDocument()
  })

  it("waits for IME composition to end before opening suggestions", async () => {
    const user = userEvent.setup()
    render(<ControlledPicker />)

    const editor = await getEditor()
    await user.click(editor)
    fireEvent.compositionStart(editor)
    await user.type(editor, "mad")
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()

    fireEvent.compositionEnd(editor)
    expect(await screen.findByRole("listbox")).toBeInTheDocument()
  })

  it("writes hierarchical child selections to their declared filter key", async () => {
    const hierarchicalFilters = {
      office: {
        type: "in",
        label: "Office",
        options: {
          options: [
            {
              value: "barcelona-hq",
              label: "Barcelona HQ",
              children: {
                filterKey: "space",
                options: [{ value: "floor-1", label: "Floor 1" }],
              },
            },
          ],
        },
      },
      space: {
        type: "in",
        label: "Space",
        options: { options: [] },
      },
    } satisfies F0FilterTagPickerFiltersDefinition
    const user = userEvent.setup()

    function HierarchicalPicker() {
      const [value, setValue] = useState<
        F0FilterTagPickerValue<typeof hierarchicalFilters>
      >([])
      return (
        <>
          <F0FilterTagPicker
            filters={hierarchicalFilters}
            value={value}
            onChange={setValue}
            label="Filters"
          />
          <output data-testid="hierarchical-state">
            {JSON.stringify(filterTagPickerValueToFiltersState(value))}
          </output>
        </>
      )
    }

    render(<HierarchicalPicker />)
    const editor = await getEditor("Filters")
    await user.click(editor)
    await user.type(editor, "floor")
    await user.keyboard("{Enter}")

    expect(screen.getByTestId("hierarchical-state")).toHaveTextContent(
      JSON.stringify({ space: ["floor-1"] })
    )
    expect(
      screen.getByRole("button", {
        name: "Remove Barcelona HQ › Floor 1 from Office",
      })
    ).toBeInTheDocument()
  })

  it("does not expose hierarchical child keys missing from the filter definition", async () => {
    const invalidHierarchicalFilters = {
      office: {
        type: "in",
        label: "Office",
        options: {
          options: [
            {
              value: "barcelona-hq",
              label: "Barcelona HQ",
              children: {
                filterKey: "undeclared-space",
                options: [{ value: "floor-1", label: "Floor 1" }],
              },
            },
          ],
        },
      },
    } satisfies F0FilterTagPickerFiltersDefinition
    const user = userEvent.setup()

    render(
      <F0FilterTagPicker
        filters={invalidHierarchicalFilters}
        value={[]}
        onChange={vi.fn()}
        label="Filters"
      />
    )
    const editor = await getEditor("Filters")
    await user.click(editor)
    await user.type(editor, "floor")

    expect(
      screen.queryByRole("option", { name: /Floor 1/ })
    ).not.toBeInTheDocument()
    await waitFor(() =>
      expect(editor).toHaveAttribute("aria-expanded", "false")
    )
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })

  it("loads asynchronous options and retries a failed provider", async () => {
    const loadOptions = vi
      .fn<() => Promise<Array<{ value: string; label: string }>>>()
      .mockRejectedValueOnce(new Error("Network unavailable"))
      .mockResolvedValue([{ value: "platform", label: "Platform" }])
    const asyncFilters = {
      team: {
        type: "in",
        label: "Team",
        options: { options: loadOptions },
      },
    } satisfies F0FilterTagPickerFiltersDefinition
    const user = userEvent.setup()

    function AsyncPicker() {
      const [value, setValue] = useState<
        F0FilterTagPickerValue<typeof asyncFilters>
      >([])
      return (
        <F0FilterTagPicker
          filters={asyncFilters}
          value={value}
          onChange={setValue}
          label="Filters"
        />
      )
    }

    render(<AsyncPicker />)
    const editor = await getEditor("Filters")
    await user.click(editor)
    await user.type(editor, "plat")

    const retry = await screen.findByRole("option", { name: "Retry Team" })
    await user.click(retry)

    expect(
      await screen.findByRole("option", { name: /Platform/ })
    ).toBeInTheDocument()
    expect(loadOptions).toHaveBeenCalledTimes(2)
  })

  it("announces loading and replaces it with async options", async () => {
    let resolveOptions: (
      options: Array<{ value: string; label: string }>
    ) => void = () => {}
    const loadingFilters = {
      team: {
        type: "in",
        label: "Team",
        options: {
          options: () =>
            new Promise<Array<{ value: string; label: string }>>((resolve) => {
              resolveOptions = resolve
            }),
        },
      },
    } satisfies F0FilterTagPickerFiltersDefinition
    const user = userEvent.setup()

    function LoadingPicker() {
      const [value, setValue] = useState<
        F0FilterTagPickerValue<typeof loadingFilters>
      >([])
      return (
        <F0FilterTagPicker
          filters={loadingFilters}
          value={value}
          onChange={setValue}
          label="Filters"
        />
      )
    }

    render(<LoadingPicker />)
    const editor = await getEditor("Filters")
    await user.click(editor)
    await user.type(editor, "plat")
    expect(screen.getByRole("status")).toHaveTextContent("Loading options")

    await act(async () => {
      resolveOptions([{ value: "platform", label: "Platform" }])
    })

    expect(
      await screen.findByRole("option", { name: /Platform/ })
    ).toBeInTheDocument()
  })

  it("closes the popover when loading finishes without options", async () => {
    let resolveOptions: (
      options: Array<{ value: string; label: string }>
    ) => void = () => {}
    const emptyFilters = {
      team: {
        type: "in",
        label: "Team",
        options: {
          options: () =>
            new Promise<Array<{ value: string; label: string }>>((resolve) => {
              resolveOptions = resolve
            }),
        },
      },
    } satisfies F0FilterTagPickerFiltersDefinition
    const user = userEvent.setup()

    function EmptyPicker() {
      const [value, setValue] = useState<
        F0FilterTagPickerValue<typeof emptyFilters>
      >([])
      return (
        <F0FilterTagPicker
          filters={emptyFilters}
          value={value}
          onChange={setValue}
          label="Filters"
        />
      )
    }

    render(<EmptyPicker />)
    const editor = await getEditor("Filters")
    await user.click(editor)
    await user.type(editor, "unknown")
    expect(screen.getByRole("status")).toHaveTextContent("Loading options")

    await act(async () => resolveOptions([]))

    await waitFor(() =>
      expect(editor).toHaveAttribute("aria-expanded", "false")
    )
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    expect(screen.queryByText("No matching options")).not.toBeInTheDocument()
  })

  it("searches every remote source only after two debounced characters", async () => {
    type Employee = { id: number; name: string }
    const firstFetch = vi.fn(async () => ({
      records: [{ id: 1, name: "Ada Lovelace" }],
    }))
    const secondFetch = vi.fn(async () => ({
      records: [{ id: 2, name: "Ada Platform" }],
    }))
    const sourceFilters = {
      person: {
        type: "in",
        label: "Person",
        options: {
          source: createDataSourceDefinition<Employee>({
            dataAdapter: { fetchData: firstFetch },
          }),
          mapOptions: (employee: Employee) => ({
            value: employee.id,
            label: employee.name,
          }),
        },
      },
      owner: {
        type: "in",
        label: "Owner",
        options: {
          source: createDataSourceDefinition<Employee>({
            dataAdapter: { fetchData: secondFetch },
          }),
          mapOptions: (employee: Employee) => ({
            value: employee.id,
            label: employee.name,
          }),
        },
      },
    } satisfies F0FilterTagPickerFiltersDefinition
    const user = userEvent.setup()

    function RemotePicker() {
      const [value, setValue] = useState<
        F0FilterTagPickerValue<typeof sourceFilters>
      >([])
      return (
        <F0FilterTagPicker
          filters={sourceFilters}
          value={value}
          onChange={setValue}
          label="Filters"
        />
      )
    }

    render(<RemotePicker />)
    const editor = await getEditor("Filters")
    await user.click(editor)
    await user.type(editor, "a")
    expect(firstFetch).not.toHaveBeenCalled()
    expect(secondFetch).not.toHaveBeenCalled()

    await user.type(editor, "d")
    expect(
      await screen.findByRole("option", { name: /Ada Lovelace/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("option", { name: /Ada Platform/ })
    ).toBeInTheDocument()
    expect(firstFetch).toHaveBeenCalled()
    expect(secondFetch).toHaveBeenCalled()
  })

  it("discards results from a stale remote query", async () => {
    type Employee = { id: number; name: string }
    const requests = new Map<
      string,
      (result: { records: Employee[] }) => void
    >()
    const fetchData = vi.fn(
      ({ search }: { search?: string }) =>
        new Promise<{ records: Employee[] }>((resolve) => {
          requests.set(search ?? "", resolve)
        })
    )
    const sourceFilters = {
      person: {
        type: "in",
        label: "Person",
        options: {
          source: createDataSourceDefinition<Employee>({
            dataAdapter: { fetchData },
          }),
          mapOptions: (employee: Employee) => ({
            value: employee.id,
            label: employee.name,
          }),
        },
      },
    } satisfies F0FilterTagPickerFiltersDefinition
    const user = userEvent.setup()

    function RemotePicker() {
      const [value, setValue] = useState<
        F0FilterTagPickerValue<typeof sourceFilters>
      >([])
      return (
        <>
          <F0FilterTagPicker
            filters={sourceFilters}
            value={value}
            onChange={setValue}
            label="Filters"
          />
          <button
            type="button"
            onClick={() => setValue([{ type: "text", value: "gr" }])}
          >
            Use Grace query
          </button>
        </>
      )
    }

    render(<RemotePicker />)
    const editor = await getEditor("Filters")
    await user.click(editor)
    await user.type(editor, "ad")
    await waitFor(() => expect(requests.has("ad")).toBe(true))

    await user.click(screen.getByRole("button", { name: "Use Grace query" }))
    await user.click(editor)
    moveCaretToEnd(editor)
    await waitFor(() => expect(requests.has("gr")).toBe(true))

    await act(async () => {
      requests.get("gr")?.({ records: [{ id: 2, name: "Grace Hopper" }] })
    })
    expect(
      await screen.findByRole("option", { name: /Grace Hopper/ })
    ).toBeInTheDocument()

    await act(async () => {
      requests.get("ad")?.({ records: [{ id: 1, name: "Ada Lovelace" }] })
    })
    expect(
      screen.queryByRole("option", { name: /Ada Lovelace/ })
    ).not.toBeInTheDocument()
  })

  it("keeps successful remote results usable and retries a failed source", async () => {
    type Employee = { id: number; name: string }
    let shouldFail = true
    const failingFetch = vi.fn(async () => {
      if (shouldFail) throw new Error("Network unavailable")
      return { records: [{ id: 1, name: "Ada Lovelace" }] }
    })
    const workingFetch = vi.fn(async () => ({
      records: [{ id: 2, name: "People Platform" }],
    }))
    const sourceFilters = {
      person: {
        type: "in",
        label: "Person",
        options: {
          source: createDataSourceDefinition<Employee>({
            dataAdapter: { fetchData: failingFetch },
          }),
          mapOptions: (employee: Employee) => ({
            value: employee.id,
            label: employee.name,
          }),
        },
      },
      team: {
        type: "in",
        label: "Team",
        options: {
          source: createDataSourceDefinition<Employee>({
            dataAdapter: { fetchData: workingFetch },
          }),
          mapOptions: (employee: Employee) => ({
            value: employee.id,
            label: employee.name,
          }),
        },
      },
    } satisfies F0FilterTagPickerFiltersDefinition
    const user = userEvent.setup()

    function RemoteErrorPicker() {
      const [value, setValue] = useState<
        F0FilterTagPickerValue<typeof sourceFilters>
      >([])
      return (
        <F0FilterTagPicker
          filters={sourceFilters}
          value={value}
          onChange={setValue}
          label="Filters"
        />
      )
    }

    render(<RemoteErrorPicker />)
    const editor = await getEditor("Filters")
    await user.click(editor)
    await user.type(editor, "pe")

    expect(
      await screen.findByRole("option", { name: /People Platform/ })
    ).toBeInTheDocument()
    shouldFail = false
    await user.click(screen.getByRole("option", { name: "Retry Person" }))

    expect(
      await screen.findByRole("option", { name: /Ada Lovelace/ })
    ).toBeInTheDocument()
    expect(failingFetch.mock.calls.length).toBeGreaterThanOrEqual(2)
  })

  it("surfaces a remote mapOptions failure as a retry row", async () => {
    type Employee = { id: number; name: string }
    const mappingFilters = {
      person: {
        type: "in",
        label: "Person",
        options: {
          source: createDataSourceDefinition<Employee>({
            dataAdapter: {
              fetchData: async () => ({
                records: [{ id: 1, name: "Ada Lovelace" }],
              }),
            },
          }),
          mapOptions: () => {
            throw new Error("Invalid record")
          },
        },
      },
    } satisfies F0FilterTagPickerFiltersDefinition
    const user = userEvent.setup()

    function MappingErrorPicker() {
      const [value, setValue] = useState<
        F0FilterTagPickerValue<typeof mappingFilters>
      >([])
      return (
        <F0FilterTagPicker
          filters={mappingFilters}
          value={value}
          onChange={setValue}
          label="Filters"
        />
      )
    }

    render(<MappingErrorPicker />)
    const editor = await getEditor("Filters")
    await user.click(editor)
    await user.type(editor, "pe")

    expect(
      await screen.findByRole("option", { name: "Retry Person" })
    ).toBeInTheDocument()
  })

  it("loads another remote page from a flat action row", async () => {
    type Employee = { id: number; name: string }
    const fetchData = vi.fn(
      async ({ pagination }: { pagination: { cursor?: string | null } }) => {
        const secondPage = pagination.cursor === "next"
        return {
          type: "infinite-scroll" as const,
          cursor: secondPage ? null : "next",
          perPage: 1,
          hasMore: !secondPage,
          records: secondPage
            ? [{ id: 2, name: "Grace Hopper" }]
            : [{ id: 1, name: "Ada Lovelace" }],
          total: 2,
        }
      }
    )
    const sourceFilters = {
      person: {
        type: "in",
        label: "Person",
        options: {
          source: createDataSourceDefinition<Employee>({
            dataAdapter: {
              paginationType: "infinite-scroll",
              perPage: 1,
              fetchData,
            },
          }),
          mapOptions: (employee: Employee) => ({
            value: employee.id,
            label: employee.name,
          }),
        },
      },
    } satisfies F0FilterTagPickerFiltersDefinition
    const user = userEvent.setup()

    function PaginatedPicker() {
      const [value, setValue] = useState<
        F0FilterTagPickerValue<typeof sourceFilters>
      >([])
      return (
        <>
          <F0FilterTagPicker
            filters={sourceFilters}
            value={value}
            onChange={setValue}
            label="Filters"
          />
          <output data-testid="paginated-state">
            {JSON.stringify(filterTagPickerValueToFiltersState(value))}
          </output>
        </>
      )
    }

    render(<PaginatedPicker />)
    const editor = await getEditor("Filters")
    await user.click(editor)
    await user.type(editor, "pe")
    await user.click(
      await screen.findByRole("option", { name: "Load more Person" })
    )
    await user.click(
      await screen.findByRole("option", { name: /Grace Hopper/ })
    )

    expect(screen.getByTestId("paginated-state")).toHaveTextContent(
      JSON.stringify({ person: [2] })
    )
  })

  it("resolves labels for controlled remote values", async () => {
    const getLabel = vi.fn(async (value: unknown) =>
      value === 1 ? "Ada Lovelace" : String(value)
    )
    const labelFilters = {
      person: {
        type: "in",
        label: "Person",
        options: { options: [], getLabel },
      },
    } satisfies F0FilterTagPickerFiltersDefinition

    render(
      <F0FilterTagPicker
        filters={labelFilters}
        value={[{ type: "filter", filterKey: "person", value: 1 }]}
        onChange={() => {}}
        label="Filters"
      />
    )

    expect(
      await screen.findByRole("button", {
        name: "Remove Ada Lovelace from Person",
      })
    ).toBeInTheDocument()
    expect(getLabel).toHaveBeenCalledWith(1)
  })

  it("applies disabled, data test id, and combobox semantics", async () => {
    render(
      <F0FilterTagPicker
        filters={filters}
        value={[{ type: "filter", filterKey: "location", value: "madrid" }]}
        onChange={vi.fn()}
        label="Filters"
        dataTestId="employee-filter-picker"
        disabled
      />
    )

    const editor = await getEditor("Filters")
    expect(screen.getByTestId("employee-filter-picker")).toContainElement(
      editor
    )
    expect(editor).toHaveAttribute("contenteditable", "false")
    expect(editor).toHaveAttribute("aria-autocomplete", "list")
    expect(editor).toHaveAttribute("aria-expanded", "false")
    expect(editor).toHaveAttribute("aria-disabled", "true")
    expect(
      screen.getByRole("button", { name: "Remove Madrid from Location" })
    ).toBeDisabled()
  })

  it("applies a custom placeholder and category color", async () => {
    const { rerender } = render(
      <F0FilterTagPicker
        filters={filters}
        value={[]}
        onChange={vi.fn()}
        label="Filters"
        placeholder="Describe an audience"
        categoryColors={{ location: "malibu" }}
      />
    )

    const editor = await getEditor("Filters")
    expect(editor.querySelector("[data-placeholder]")).toHaveAttribute(
      "data-placeholder",
      "Describe an audience"
    )

    rerender(
      <F0FilterTagPicker
        filters={filters}
        value={[{ type: "filter", filterKey: "location", value: "madrid" }]}
        onChange={vi.fn()}
        label="Filters"
        placeholder="Describe an audience"
        categoryColors={{ location: "malibu" }}
      />
    )

    const tag = await screen.findByLabelText("Location: Madrid")
    expect(tag.querySelector('[aria-hidden="true"]')).toHaveStyle(
      getCategoryDotStyle("malibu")
    )
  })
})
