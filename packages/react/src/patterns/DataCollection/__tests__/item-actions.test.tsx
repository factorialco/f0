import { describe, expect, it } from "vitest"

import { filterItemActions, type ItemActionsDefinition } from "../item-actions"
import { type RecordType } from "../types"

describe("filterItemActions", () => {
  type TestRecord = RecordType & {
    id: string
    name: string
  }

  const mockItem: TestRecord = {
    id: "1",
    name: "Test Item",
  }

  it("should return empty array when actions is undefined", () => {
    const result = filterItemActions(undefined, mockItem)
    expect(result).toEqual([])
  })

  it("should return empty array when actions returns undefined", () => {
    const actions: ItemActionsDefinition<TestRecord> = () => undefined
    const result = filterItemActions(actions, mockItem)
    expect(result).toEqual([])
  })

  it("should keep enabled actions", () => {
    const actions: ItemActionsDefinition<TestRecord> = () => [
      {
        label: "Enabled Action",
        onClick: () => {},
        enabled: true,
      },
    ]
    const result = filterItemActions(actions, mockItem)
    expect(result).toHaveLength(1)
    expect(result[0].label).toBe("Enabled Action")
  })

  it("should keep actions with undefined enabled property", () => {
    const actions: ItemActionsDefinition<TestRecord> = () => [
      {
        label: "Undefined Enabled Action",
        onClick: () => {},
      },
    ]
    const result = filterItemActions(actions, mockItem)
    expect(result).toHaveLength(1)
    expect(result[0].label).toBe("Undefined Enabled Action")
  })

  it("should keep separator actions regardless of enabled property", () => {
    const actions: ItemActionsDefinition<TestRecord> = () => [
      {
        type: "separator",
      },
    ]
    const result = filterItemActions(actions, mockItem)
    expect(result).toHaveLength(1)
    expect(result[0].type).toBe("separator")
  })

  it("should filter out disabled actions", () => {
    const actions: ItemActionsDefinition<TestRecord> = () => [
      {
        label: "Enabled Action",
        onClick: () => {},
        enabled: true,
      },
      {
        label: "Disabled Action",
        onClick: () => {},
        enabled: false,
      },
    ]
    const result = filterItemActions(actions, mockItem)
    expect(result).toHaveLength(1)
    expect(result[0].label).toBe("Enabled Action")
  })

  it("should handle mixed action types correctly", () => {
    const actions: ItemActionsDefinition<TestRecord> = () => [
      {
        label: "Enabled Action",
        onClick: () => {},
        enabled: true,
      },
      {
        type: "separator",
      },
      {
        label: "Disabled Action",
        onClick: () => {},
        enabled: false,
      },
      {
        label: "Undefined Enabled Action",
        onClick: () => {},
      },
    ]
    const result = filterItemActions(actions, mockItem)
    expect(result).toHaveLength(3)
    expect(result[0].label).toBe("Enabled Action")
    expect(result[1].type).toBe("separator")
    expect(result[2].label).toBe("Undefined Enabled Action")
  })
})
