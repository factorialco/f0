import { act, renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { useCalculateConectorHeight } from "../useCalculateConectorHeight"

/**
 * A parent row, its first and last child, and a panel row between them —
 * enough structure for the hook to attach its observers to a real <tbody>.
 */
const buildTable = () => {
  const table = document.createElement("table")
  const tbody = document.createElement("tbody")
  table.appendChild(tbody)

  const makeRow = (attrs: Record<string, string> = {}) => {
    const tr = document.createElement("tr")
    Object.entries(attrs).forEach(([key, value]) => tr.setAttribute(key, value))
    const td = document.createElement("td")
    tr.appendChild(td)
    tbody.appendChild(tr)
    return { tr, td }
  }

  const parent = makeRow()
  const firstChild = makeRow()
  const panel = makeRow({ "data-expanded-content": "true" })
  const lastChild = makeRow()

  document.body.appendChild(table)

  return { table, parent, firstChild, panel, lastChild }
}

const renderConnector = (
  firstRow: HTMLTableRowElement,
  lastRow: HTMLTableRowElement
) => {
  const rendered = renderHook(() =>
    useCalculateConectorHeight({
      nestedVariant: "basic",
      withHasMore: false,
      withAddRowActions: false,
    })
  )

  act(() => {
    rendered.result.current.setFirstChildRef(firstRow)
    rendered.result.current.setLastChildRef(lastRow)
  })

  return rendered
}

describe("useCalculateConectorHeight", () => {
  it("ignores mutations inside a row's expanded content", async () => {
    const { panel, firstChild, lastChild, table } = buildTable()
    const observe = vi.spyOn(Element.prototype, "getBoundingClientRect")

    renderConnector(firstChild.tr, lastChild.tr)

    observe.mockClear()

    // Typing in a panel mutates its subtree; connectors cannot move as a
    // result, so nothing should be measured.
    await act(async () => {
      panel.td.textContent = "a"
      await new Promise((resolve) => requestAnimationFrame(resolve))
    })

    expect(observe).not.toHaveBeenCalled()

    observe.mockRestore()
    table.remove()
  })

  it("still measures when a data row changes", async () => {
    const { firstChild, lastChild, table } = buildTable()
    const observe = vi.spyOn(Element.prototype, "getBoundingClientRect")

    renderConnector(firstChild.tr, lastChild.tr)

    observe.mockClear()

    await act(async () => {
      lastChild.td.textContent = "changed"
      await new Promise((resolve) => requestAnimationFrame(resolve))
    })

    expect(observe).toHaveBeenCalled()

    observe.mockRestore()
    table.remove()
  })
})
