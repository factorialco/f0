import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
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
})
