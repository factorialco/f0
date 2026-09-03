import { describe, expect, it } from "vitest"

import type { FilterTypeSchema } from "../../../types"
import type { InFilterOptionItem, InFilterOptions } from "../../types"

import { getCacheKey, loadOptions } from "../../useLoadOptions"
import { collectNestedFilterKeys } from "../option-utils"

type Schema = FilterTypeSchema<InFilterOptions<string>>

const workplaceOptions: InFilterOptionItem<string>[] = [
  {
    value: "barcelona",
    label: "Barcelona Office",
    children: {
      filterKey: "workArea",
      options: [
        {
          value: "floor-1",
          label: "Floor 1",
          children: {
            filterKey: "desk",
            options: [{ value: "desk-1", label: "Desk 1" }],
          },
        },
      ],
    },
  },
  { value: "remote", label: "Remote" },
]

describe("collectNestedFilterKeys", () => {
  it("walks literal option arrays at every depth", () => {
    const schema: Schema = {
      label: "Workplace",
      options: { options: workplaceOptions },
    }

    expect(collectNestedFilterKeys(schema)).toEqual(["workArea", "desk"])
  })

  it("returns no keys for a flat filter", () => {
    const schema: Schema = {
      label: "Department",
      options: { options: [{ value: "eng", label: "Engineering" }] },
    }

    expect(collectNestedFilterKeys(schema)).toEqual([])
  })

  it("reads the keys declared in the schema when options are async", () => {
    const schema: Schema = {
      label: "Workplace",
      options: {
        nestedFilterKeys: ["workArea"],
        options: async () => workplaceOptions,
      },
    }

    expect(collectNestedFilterKeys(schema)).toEqual(["workArea"])
  })

  it("reads the keys declared in the schema when options come from a source", () => {
    const schema: Schema = {
      label: "Workplace",
      options: {
        nestedFilterKeys: ["workArea"],
        source: { dataAdapter: { fetchData: async () => ({ records: [] }) } },
        mapOptions: (item: InFilterOptionItem<string>) => item,
      },
    }

    expect(collectNestedFilterKeys(schema)).toEqual(["workArea"])
  })

  it("falls back to the options resolved by a previous load", async () => {
    const schema: Schema = {
      label: "Workplace (cached)",
      options: { cache: true, options: async () => workplaceOptions },
    }

    expect(collectNestedFilterKeys(schema)).toEqual([])

    await loadOptions(getCacheKey(schema), () => workplaceOptions, true)

    expect(collectNestedFilterKeys(schema)).toEqual(["workArea", "desk"])
  })

  it("merges the declared keys with the ones found in the options", async () => {
    const schema: Schema = {
      label: "Workplace (merged)",
      options: {
        cache: true,
        nestedFilterKeys: ["workArea"],
        options: async () => workplaceOptions,
      },
    }

    await loadOptions(getCacheKey(schema), () => workplaceOptions, true)

    expect(collectNestedFilterKeys(schema)).toEqual(["workArea", "desk"])
  })
})
