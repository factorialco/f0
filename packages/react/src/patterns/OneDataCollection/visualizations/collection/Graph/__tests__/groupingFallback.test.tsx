import { screen, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { F0Graph } from "@/patterns/F0Graph"
import type { GroupingDefinition } from "@/hooks/datasource"
import { zeroRender } from "@/testing/test-utils"

import {
  GraphCollection,
  GROUPING_NOT_SUPPORTED_FALLBACK_MESSAGE,
  GROUPING_NOT_SUPPORTED_MESSAGE,
} from "../Graph"

import { createEagerSource, stubRenderNode, type TestPerson } from "./_helpers"

vi.mock("@/lib/providers/user-platafform", async () => {
  const actual = await vi.importActual<
    typeof import("@/lib/providers/user-platafform")
  >("@/lib/providers/user-platafform")
  return {
    ...actual,
    useIsDev: () => false,
  }
})

vi.mock("@/patterns/F0Graph", async () => {
  const actual =
    await vi.importActual<typeof import("@/patterns/F0Graph")>(
      "@/patterns/F0Graph"
    )
  return {
    ...actual,
    F0Graph: vi.fn(() => <div data-testid="f0graph-mock" />),
  }
})

const f0GraphMock = vi.mocked(F0Graph)

const records: TestPerson[] = [
  { id: "1", name: "Root", parentId: null },
  { id: "2", name: "Child", parentId: "1" },
]

const nodeAdapter = (r: TestPerson) => ({ parentId: r.parentId })

const grouping: GroupingDefinition<TestPerson> = {
  collapsible: false,
  groupBy: {
    parentId: {
      name: "Parent",
      label: (groupId) => String(groupId ?? "none"),
    },
  },
}

describe("GraphCollection grouped-data fallback (non-dev)", () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    f0GraphMock.mockClear()
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {})
  })

  afterEach(() => {
    consoleErrorSpy.mockRestore()
    f0GraphMock.mockClear()
  })

  it("renders a fallback message and logs an error when grouping is present", async () => {
    const source = createEagerSource(records, {
      grouping,
      currentGrouping: { field: "parentId" },
    })

    zeroRender(
      <GraphCollection
        source={source}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(
        GROUPING_NOT_SUPPORTED_FALLBACK_MESSAGE
      )
    })

    expect(f0GraphMock).not.toHaveBeenCalled()

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining(GROUPING_NOT_SUPPORTED_MESSAGE)
      )
    })
  })
})
