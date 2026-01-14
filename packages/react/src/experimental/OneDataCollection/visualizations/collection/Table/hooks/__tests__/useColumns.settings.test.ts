import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { TableColumnDefinition, TableVisualizationSettings } from "../../types"
import { useColumns } from "../useColums"

describe("useColumns with settings", () => {
  const mockColumns: TableColumnDefinition<unknown, never, never>[] = [
    { id: "column1", label: "Column 1" },
    { id: "column2", label: "Column 2", hidden: true },
    { id: "column3", label: "Column 3", hidden: true },
    { id: "column4", label: "Column 4" },
  ]

  it("should respect developer hidden: true when settings are empty object (no user preferences)", () => {
    const settings: TableVisualizationSettings = {}
    const frozenColumns = 0
    const allowSorting = true
    const allowHiding = true

    const { result } = renderHook(() =>
      useColumns(
        mockColumns,
        frozenColumns,
        settings,
        allowSorting,
        allowHiding
      )
    )

    // column2 and column3 should be hidden as per developer defaults
    expect(result.current.colsHidden).toEqual(["column2", "column3"])
    expect(result.current.columns).toHaveLength(2)
    expect(result.current.columns.map((c) => c.id)).toEqual([
      "column1",
      "column4",
    ])
  })

  it("should respect user preferences when settings.hidden is an empty array (user showed all columns)", () => {
    const settings: TableVisualizationSettings = {
      hidden: [],
    }
    const frozenColumns = 0
    const allowSorting = true
    const allowHiding = true

    const { result } = renderHook(() =>
      useColumns(
        mockColumns,
        frozenColumns,
        settings,
        allowSorting,
        allowHiding
      )
    )

    // All columns should be visible because user explicitly set hidden to []
    expect(result.current.colsHidden).toEqual([])
    expect(result.current.columns).toHaveLength(4)
    expect(result.current.columns.map((c) => c.id)).toEqual([
      "column1",
      "column2",
      "column3",
      "column4",
    ])
  })

  it("should respect user preferences when settings.hidden has specific columns", () => {
    const settings: TableVisualizationSettings = {
      hidden: ["column3", "column4"],
    }
    const frozenColumns = 0
    const allowSorting = true
    const allowHiding = true

    const { result } = renderHook(() =>
      useColumns(
        mockColumns,
        frozenColumns,
        settings,
        allowSorting,
        allowHiding
      )
    )

    // column3 and column4 should be hidden per user preferences (overriding developer defaults)
    // Note: column1 is always visible as it's the first column (frozen by default)
    expect(result.current.colsHidden).toEqual(["column3", "column4"])
    expect(result.current.columns).toHaveLength(2)
    expect(result.current.columns.map((c) => c.id)).toEqual([
      "column1",
      "column2",
    ])
  })

  it("should respect developer hidden when allowHiding is false", () => {
    const settings: TableVisualizationSettings = {
      hidden: [],
    }
    const frozenColumns = 0
    const allowSorting = true
    const allowHiding = false

    const { result } = renderHook(() =>
      useColumns(
        mockColumns,
        frozenColumns,
        settings,
        allowSorting,
        allowHiding
      )
    )

    // Should use developer defaults even when settings exist
    expect(result.current.colsHidden).toEqual(["column2", "column3"])
    expect(result.current.columns).toHaveLength(2)
  })

  it("should respect developer order when settings.order is undefined", () => {
    const columnsWithOrder: TableColumnDefinition<unknown, never, never>[] = [
      { id: "column1", label: "Column 1", order: 3 },
      { id: "column2", label: "Column 2", order: 1 },
      { id: "column3", label: "Column 3", order: 2 },
    ]
    const settings: TableVisualizationSettings = {}
    const frozenColumns = 0
    const allowSorting = true
    const allowHiding = true

    const { result } = renderHook(() =>
      useColumns(
        columnsWithOrder,
        frozenColumns,
        settings,
        allowSorting,
        allowHiding
      )
    )

    // Should respect developer-defined order
    expect(result.current.colsOrder).toEqual(["column2", "column3", "column1"])
  })

  it("should respect user order when settings.order is defined", () => {
    const columnsWithOrder: TableColumnDefinition<unknown, never, never>[] = [
      { id: "column1", label: "Column 1", order: 3 },
      { id: "column2", label: "Column 2", order: 1 },
      { id: "column3", label: "Column 3", order: 2 },
    ]
    const settings: TableVisualizationSettings = {
      order: ["column3", "column1", "column2"],
    }
    const frozenColumns = 0
    const allowSorting = true
    const allowHiding = true

    const { result } = renderHook(() =>
      useColumns(
        columnsWithOrder,
        frozenColumns,
        settings,
        allowSorting,
        allowHiding
      )
    )

    // Should respect user-defined order
    expect(result.current.colsOrder).toEqual(["column3", "column1", "column2"])
  })

  it("should maintain developer-defined order when settings.order is an empty array", () => {
    const columnsWithOrder: TableColumnDefinition<unknown, never, never>[] = [
      { id: "column1", label: "Column 1", order: 3 },
      { id: "column2", label: "Column 2", order: 1 },
      { id: "column3", label: "Column 3", order: 2 },
    ]
    const settings: TableVisualizationSettings = {
      order: [], // Empty array (different from undefined)
    }
    const frozenColumns = 0
    const allowSorting = true
    const allowHiding = true

    const { result } = renderHook(() =>
      useColumns(
        columnsWithOrder,
        frozenColumns,
        settings,
        allowSorting,
        allowHiding
      )
    )

    // Empty array means no columns in saved order, so all maintain definition order
    // Since colsOrder is [], all columns have indexOf = -1, resulting in stable sort
    expect(result.current.colsOrder).toEqual([])
    // Columns should appear in their original definition order (stable sort)
    expect(result.current.columns.map((c) => c.id)).toEqual([
      "column1",
      "column2",
      "column3",
    ])
  })

  it("should hide NEW columns with hidden: true even when user has saved preferences", () => {
    // Scenario: User saved preferences for columns 1-3, developer adds column4 with hidden: true
    const columnsWithNewHidden: TableColumnDefinition<unknown, never, never>[] =
      [
        { id: "column1", label: "Column 1" },
        { id: "column2", label: "Column 2" },
        { id: "column3", label: "Column 3" },
        { id: "column4", label: "Column 4", hidden: true }, // NEW column added by developer
      ]
    const settings: TableVisualizationSettings = {
      // User previously showed all columns (empty hidden array)
      // But column4 didn't exist when user saved these settings
      hidden: [],
      order: ["column1", "column2", "column3"],
    }
    const frozenColumns = 0
    const allowSorting = true
    const allowHiding = true

    const { result } = renderHook(() =>
      useColumns(
        columnsWithNewHidden,
        frozenColumns,
        settings,
        allowSorting,
        allowHiding
      )
    )

    // column4 should be hidden because it's NEW (not in saved settings) and has hidden: true
    expect(result.current.colsHidden).toContain("column4")
    // Visible columns should NOT include column4
    expect(result.current.columns.map((c) => c.id)).not.toContain("column4")
  })

  it("should NOT hide new columns that don't have hidden: true", () => {
    const columnsWithNewVisible: TableColumnDefinition<
      unknown,
      never,
      never
    >[] = [
      { id: "column1", label: "Column 1" },
      { id: "column2", label: "Column 2" },
      { id: "column3", label: "Column 3", hidden: true }, // Existing hidden
      { id: "column4", label: "Column 4" }, // NEW column, no hidden flag
    ]
    const settings: TableVisualizationSettings = {
      hidden: ["column3"],
      order: ["column1", "column2", "column3"],
    }
    const frozenColumns = 0
    const allowSorting = true
    const allowHiding = true

    const { result } = renderHook(() =>
      useColumns(
        columnsWithNewVisible,
        frozenColumns,
        settings,
        allowSorting,
        allowHiding
      )
    )

    // column4 should be visible (no hidden: true)
    expect(result.current.colsHidden).not.toContain("column4")
    // column3 should still be hidden (from user preferences)
    expect(result.current.colsHidden).toContain("column3")
  })
})
