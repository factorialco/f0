import { describe, expect, it } from "vitest"

import { useI18n } from "@/lib/providers/i18n"
import { zeroRenderHook } from "@/testing/test-utils"

import type { FiltersDefinition, FiltersState } from "../types"

import { getActiveFiltersValue } from "./getActiveFiltersValue"

const filters = {
  department: {
    type: "in",
    label: "Department",
    options: { options: [{ value: "eng", label: "Engineering" }] },
  },
  search: { type: "search", label: "Search" },
} as const satisfies FiltersDefinition

const useTestI18n = () => zeroRenderHook(() => useI18n()).result.current

describe("getActiveFiltersValue", () => {
  it("drops empty-valued filters so a fully-cleared set collapses to {}", () => {
    const i18n = useTestI18n()
    const cleared: FiltersState<typeof filters> = {
      department: [],
      search: "",
    }
    expect(getActiveFiltersValue(filters, cleared, i18n)).toEqual({})
  })

  it("keeps only the active filters (drops the empty ones)", () => {
    const i18n = useTestI18n()
    const value: FiltersState<typeof filters> = {
      department: ["eng"],
      search: "",
    }
    expect(getActiveFiltersValue(filters, value, i18n)).toEqual({
      department: ["eng"],
    })
  })

  it("keeps a non-empty search", () => {
    const i18n = useTestI18n()
    expect(getActiveFiltersValue(filters, { search: "ada" }, i18n)).toEqual({
      search: "ada",
    })
  })
})
