import { describe, expect, it } from "vitest"

import type { SortAndHideListItem } from "../visualizations/collection/Table/components/SortAndHideList/types"
import { mergeUnlockedOrderIntoBaseline } from "./SortAndHideSettings"

const item = (id: string, locked = false): SortAndHideListItem => ({
  id,
  label: id,
  locked,
})

describe("mergeUnlockedOrderIntoBaseline", () => {
  it("keeps locked columns in their saved slots while unlocked rows reorder", () => {
    expect(
      mergeUnlockedOrderIntoBaseline(
        ["name", "email", "role", "location"],
        [item("role", true), item("location"), item("name"), item("email")]
      )
    ).toEqual(["location", "name", "role", "email"])
  })

  it("keeps multiple locked columns anchored and appends new columns", () => {
    expect(
      mergeUnlockedOrderIntoBaseline(
        ["name", "email", "role"],
        [
          item("name", true),
          item("role", true),
          item("location"),
          item("email"),
        ]
      )
    ).toEqual(["name", "location", "role", "email"])
  })
})
