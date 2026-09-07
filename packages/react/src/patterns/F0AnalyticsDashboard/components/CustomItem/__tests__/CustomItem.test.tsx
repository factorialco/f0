import type { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import { zeroRender } from "@/testing/test-utils"

import type { DashboardCustomItem } from "../../../types"
import { CustomItem } from "../CustomItem"

const dashboardItemProps = vi.hoisted(() => vi.fn())

vi.mock(
  "@/patterns/F0AnalyticsDashboard/components/DashboardItem/DashboardItem",
  () => ({
    DashboardItem: (props: { children: ReactNode }) => {
      dashboardItemProps(props)
      return <section data-testid="dashboard-shell">{props.children}</section>
    },
  })
)

const filtersDefinition = {
  department: {
    type: "in",
    label: "Department",
    options: { options: [{ value: "engineering", label: "Engineering" }] },
  },
} as const satisfies FiltersDefinition

type TestFilters = FiltersState<typeof filtersDefinition>

describe("CustomItem", () => {
  it("forwards dashboard shell behavior and the resolved filter scope", () => {
    const filters: TestFilters = { department: ["engineering"] }
    const renderContent = vi.fn(() => <div>Host content</div>)
    const handleDelete = vi.fn()
    const onAskAi = vi.fn()
    const onFullscreenChange = vi.fn()
    const item: DashboardCustomItem<typeof filtersDefinition> = {
      id: "custom",
      type: "custom",
      title: "Host visualization",
      description: "Current period",
      info: "Host-owned content",
      explanation: "Calculated by the host.",
      renderContent,
    }

    const { rerender } = zeroRender(
      <CustomItem
        item={item}
        filters={filters}
        editMode
        handleDelete={handleDelete}
        onAskAi={onAskAi}
        isFullscreen
        onFullscreenChange={onFullscreenChange}
      />
    )

    expect(renderContent).toHaveBeenLastCalledWith(filters)
    expect(dashboardItemProps).toHaveBeenLastCalledWith(
      expect.objectContaining({
        title: "Host visualization",
        description: "Current period",
        info: "Host-owned content",
        explanation: "Calculated by the host.",
        editMode: true,
        handleDelete,
        onAskAi,
        itemId: "custom",
        isFullscreen: true,
        onFullscreenChange,
      })
    )

    rerender(
      <CustomItem
        item={{ ...item, useDashboardFilters: false }}
        filters={filters}
      />
    )
    expect(renderContent).toHaveBeenLastCalledWith({})
  })
})
