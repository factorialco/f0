import { describe, expect, it, vi } from "vitest"

import {
  notifyDataCollectionStorageChange,
  subscribeToDataCollectionStorageChanges,
} from "../dataCollectionStorageEvents"

describe("dataCollectionStorageEvents", () => {
  it("notifies subscribers of the matching collection id only", () => {
    const matching = vi.fn()
    const other = vi.fn()
    const unsubscribeMatching = subscribeToDataCollectionStorageChanges(
      "employees/v1",
      matching
    )
    const unsubscribeOther = subscribeToDataCollectionStorageChanges(
      "teams/v1",
      other
    )

    notifyDataCollectionStorageChange("employees/v1")

    expect(matching).toHaveBeenCalledTimes(1)
    expect(other).not.toHaveBeenCalled()

    unsubscribeMatching()
    unsubscribeOther()
  })

  it("stops notifying after unsubscribe", () => {
    const listener = vi.fn()
    const unsubscribe = subscribeToDataCollectionStorageChanges(
      "employees/v1",
      listener
    )

    notifyDataCollectionStorageChange("employees/v1")
    unsubscribe()
    notifyDataCollectionStorageChange("employees/v1")

    expect(listener).toHaveBeenCalledTimes(1)
  })

  it("notifying with no subscribers is a no-op", () => {
    expect(() =>
      notifyDataCollectionStorageChange("nobody/listening/v1")
    ).not.toThrow()
  })

  it("supports multiple subscribers on the same id", () => {
    const first = vi.fn()
    const second = vi.fn()
    const unsubscribeFirst = subscribeToDataCollectionStorageChanges(
      "employees/v1",
      first
    )
    const unsubscribeSecond = subscribeToDataCollectionStorageChanges(
      "employees/v1",
      second
    )

    notifyDataCollectionStorageChange("employees/v1")

    expect(first).toHaveBeenCalledTimes(1)
    expect(second).toHaveBeenCalledTimes(1)

    unsubscribeFirst()
    unsubscribeSecond()
  })
})
