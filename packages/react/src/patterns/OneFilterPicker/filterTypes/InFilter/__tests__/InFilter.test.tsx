import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import { useState } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { InFilter } from "../InFilter"

vi.mock("../useLoadOptions", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../useLoadOptions")>()
  return {
    ...actual,
    useLoadOptions: vi.fn(),
  }
})

import { useLoadOptions } from "../useLoadOptions"

const mockedUseLoadOptions = vi.mocked(useLoadOptions)

const defaultLoadOptionsReturn = {
  options: [],
  isLoading: false,
  error: null,
  setOptions: vi.fn(),
  loadOptions: vi.fn(),
  loadMore: undefined,
  hasMore: false,
}

describe("InFilter", () => {
  describe("static options", () => {
    it("shows 'No options available' when there are no static options", () => {
      mockedUseLoadOptions.mockReturnValue(defaultLoadOptionsReturn)

      render(
        <InFilter
          schema={{
            label: "Department",
            options: {
              options: [],
            },
          }}
          value={[]}
          onChange={vi.fn()}
        />
      )

      expect(screen.getByText("No options available")).toBeInTheDocument()
      expect(screen.queryByRole("searchbox")).not.toBeInTheDocument()
    })

    it("shows search box when static options exist", () => {
      mockedUseLoadOptions.mockReturnValue({
        ...defaultLoadOptionsReturn,
        options: [
          { value: "eng", label: "Engineering" },
          { value: "design", label: "Design" },
        ],
      })

      render(
        <InFilter
          schema={{
            label: "Department",
            options: {
              options: [
                { value: "eng", label: "Engineering" },
                { value: "design", label: "Design" },
              ],
            },
          }}
          value={[]}
          onChange={vi.fn()}
        />
      )

      expect(screen.getByRole("searchbox")).toBeInTheDocument()
      expect(screen.getByText("Engineering")).toBeInTheDocument()
      expect(screen.getByText("Design")).toBeInTheDocument()
    })
  })

  describe("data source options", () => {
    it("keeps search box visible when data source returns no results", () => {
      mockedUseLoadOptions.mockReturnValue({
        ...defaultLoadOptionsReturn,
        loadMore: vi.fn(),
      })

      render(
        <InFilter
          schema={{
            label: "Manager",
            options: {
              source: {} as any,
              mapOptions: (item: any) => ({
                value: item.id,
                label: item.name,
              }),
            },
          }}
          value={[]}
          onChange={vi.fn()}
        />
      )

      expect(screen.getByRole("searchbox")).toBeInTheDocument()
      expect(screen.queryByText("No options available")).not.toBeInTheDocument()
    })

    it("shows 'No results found' message when data source returns empty results", () => {
      mockedUseLoadOptions.mockReturnValue({
        ...defaultLoadOptionsReturn,
        loadMore: vi.fn(),
      })

      render(
        <InFilter
          schema={{
            label: "Manager",
            options: {
              source: {} as any,
              mapOptions: (item: any) => ({
                value: item.id,
                label: item.name,
              }),
            },
          }}
          value={[]}
          onChange={vi.fn()}
        />
      )

      expect(screen.getByText("No results found")).toBeInTheDocument()
    })

    it("does not show 'No results found' while loading", () => {
      mockedUseLoadOptions.mockReturnValue({
        ...defaultLoadOptionsReturn,
        isLoading: true,
        loadMore: vi.fn(),
      })

      render(
        <InFilter
          schema={{
            label: "Manager",
            options: {
              source: {} as any,
              mapOptions: (item: any) => ({
                value: item.id,
                label: item.name,
              }),
            },
          }}
          value={[]}
          onChange={vi.fn()}
        />
      )

      expect(screen.queryByText("No results found")).not.toBeInTheDocument()
    })

    it("renders options from data source when available", () => {
      mockedUseLoadOptions.mockReturnValue({
        ...defaultLoadOptionsReturn,
        options: [
          { value: "user-1", label: "Alice Johnson" },
          { value: "user-2", label: "Bob Smith" },
        ],
        loadMore: vi.fn(),
      })

      render(
        <InFilter
          schema={{
            label: "Manager",
            options: {
              source: {} as any,
              mapOptions: (item: any) => ({
                value: item.id,
                label: item.name,
              }),
            },
          }}
          value={[]}
          onChange={vi.fn()}
        />
      )

      expect(screen.getByText("Alice Johnson")).toBeInTheDocument()
      expect(screen.getByText("Bob Smith")).toBeInTheDocument()
      expect(screen.queryByText("No results found")).not.toBeInTheDocument()
    })

    it("allows selecting options from data source", async () => {
      const onChange = vi.fn()
      const user = userEvent.setup()

      mockedUseLoadOptions.mockReturnValue({
        ...defaultLoadOptionsReturn,
        options: [
          { value: "user-1", label: "Alice Johnson" },
          { value: "user-2", label: "Bob Smith" },
        ],
        loadMore: vi.fn(),
      })

      render(
        <InFilter
          schema={{
            label: "Manager",
            options: {
              source: {} as any,
              mapOptions: (item: any) => ({
                value: item.id,
                label: item.name,
              }),
            },
          }}
          value={[]}
          onChange={onChange}
        />
      )

      await user.click(screen.getByText("Alice Johnson"))

      expect(onChange).toHaveBeenCalledWith(["user-1"])
    })
  })

  // Regression coverage for the checkbox being unclickable: the presentational
  // checkbox sits behind a pointer-events guard so a real click falls through to
  // the row's onToggle. userEvent doesn't model that fall-through, so we disable
  // its pointer-events check to dispatch directly on the checkbox — which still
  // reproduces the broken case (the click used to be swallowed by the wrapper's
  // stopPropagation and never reached onToggle).
  describe("selecting via the checkbox", () => {
    const staticSchema = (options: { value: string; label: string }[]) => ({
      label: "Department",
      options: { options },
    })

    it("selects a flat option when its checkbox is clicked", async () => {
      const onChange = vi.fn()
      const user = userEvent.setup({ pointerEventsCheck: 0 })

      const options = [
        { value: "eng", label: "Engineering" },
        { value: "design", label: "Design" },
      ]
      mockedUseLoadOptions.mockReturnValue({
        ...defaultLoadOptionsReturn,
        options,
      })

      render(
        <InFilter
          schema={staticSchema(options)}
          value={[]}
          onChange={onChange}
        />
      )

      await user.click(screen.getByRole("checkbox", { name: "Design" }))

      expect(onChange).toHaveBeenCalledWith(["design"])
    })

    it("deselects an already-selected flat option when its checkbox is clicked", async () => {
      const onChange = vi.fn()
      const user = userEvent.setup({ pointerEventsCheck: 0 })

      const options = [
        { value: "eng", label: "Engineering" },
        { value: "design", label: "Design" },
      ]
      mockedUseLoadOptions.mockReturnValue({
        ...defaultLoadOptionsReturn,
        options,
      })

      render(
        <InFilter
          schema={staticSchema(options)}
          value={["eng"]}
          onChange={onChange}
        />
      )

      await user.click(screen.getByRole("checkbox", { name: "Engineering" }))

      expect(onChange).toHaveBeenCalledWith([])
    })

    it("selects a nested parent option when its checkbox is clicked", async () => {
      const onChange = vi.fn()
      const user = userEvent.setup({ pointerEventsCheck: 0 })

      // A parent with children forces the hierarchical InFilterOptionRow path
      // (instead of InFilterFlatOption).
      const options = [
        {
          value: "eng",
          label: "Engineering",
          children: {
            filterKey: "team",
            options: [{ value: "frontend", label: "Frontend" }],
          },
        },
      ]
      mockedUseLoadOptions.mockReturnValue({
        ...defaultLoadOptionsReturn,
        options,
      })

      render(
        <InFilter
          schema={{ label: "Department", options: { options } }}
          value={[]}
          onChange={onChange}
        />
      )

      await user.click(screen.getByRole("checkbox", { name: "Engineering" }))

      expect(onChange).toHaveBeenCalledWith(["eng"])
    })

    it("toggles exactly once inside a <form> without an infinite update loop", async () => {
      // Inside a <form>, Radix renders a hidden BubbleInput that dispatches a
      // synthetic click whenever `checked` changes. If that click reaches the
      // row's onToggle it flips the value back and re-fires forever ("Maximum
      // update depth exceeded"). This guards that the synthetic click stays
      // swallowed while a real toggle still happens exactly once.
      const onChange = vi.fn()
      const user = userEvent.setup()

      const options = [{ value: "eng", label: "Engineering" }]
      mockedUseLoadOptions.mockReturnValue({
        ...defaultLoadOptionsReturn,
        options,
      })

      function StatefulInFilter() {
        const [value, setValue] = useState<string[]>([])
        return (
          <form>
            <InFilter
              schema={staticSchema(options)}
              value={value}
              onChange={(next) => {
                setValue(next as string[])
                onChange(next)
              }}
            />
          </form>
        )
      }

      render(<StatefulInFilter />)

      await user.click(screen.getByText("Engineering"))

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith(["eng"])
    })
  })
})
