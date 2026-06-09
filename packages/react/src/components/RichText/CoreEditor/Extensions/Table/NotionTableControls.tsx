import { Extension } from "@tiptap/core"
import { Command, Plugin, PluginKey } from "@tiptap/pm/state"
import {
  addColumnAfter,
  addColumnBefore,
  addRowAfter,
  addRowBefore,
  cellAround,
  CellSelection,
  deleteColumn,
  deleteRow,
  toggleHeaderColumn,
  toggleHeaderRow,
} from "@tiptap/pm/tables"
import { EditorView } from "@tiptap/pm/view"

/**
 * Notion-style table controls.
 *
 * Adds a hover/selection overlay over the active table with:
 *  - column grips (top of each column) and row grips (left of each row) that
 *    select the whole column/row and open a small context menu (insert
 *    before/after, delete, toggle header),
 *  - "+" affordances on the right and bottom edges to append a column/row.
 *
 * It is a pure overlay rendered into `document.body` and positioned with
 * `getBoundingClientRect`, so it never touches the table's own DOM and keeps
 * column resizing intact. Drag-to-reorder is intentionally out of scope for
 * this iteration.
 */

export interface NotionTableControlsLabels {
  insertLeft: string
  insertRight: string
  insertAbove: string
  insertBelow: string
  deleteColumn: string
  deleteRow: string
  toggleHeaderColumn: string
  toggleHeaderRow: string
  addColumn: string
  addRow: string
}

const GRIP = 14 // px thickness of the grip bars

const el = (tag: string, className: string): HTMLElement => {
  const node = document.createElement(tag)
  node.className = className
  return node
}

const GRIP_CLASS =
  "pointer-events-auto absolute cursor-pointer rounded-[3px] border border-solid border-f1-border bg-f1-background-secondary transition-colors hover:bg-f1-background-accent-bold"
const ADD_CLASS =
  "pointer-events-auto absolute flex cursor-pointer items-center justify-center rounded-[3px] border border-dashed border-f1-border bg-transparent text-f1-foreground-secondary opacity-0 transition-opacity hover:bg-f1-background-secondary"
const MENU_CLASS =
  "dark fixed z-[10000] flex min-w-44 flex-col gap-0.5 rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-md"
const MENU_ITEM_CLASS =
  "flex w-full cursor-pointer items-center rounded px-2 py-1.5 text-left text-sm text-f1-foreground hover:bg-f1-background-secondary-hover"
const MENU_ITEM_CRITICAL_CLASS =
  "flex w-full cursor-pointer items-center rounded px-2 py-1.5 text-left text-sm text-f1-foreground-critical hover:bg-f1-background-secondary-hover"

class TableControlsView {
  private overlay: HTMLElement
  private menu: HTMLElement | null = null
  private rafId: number | null = null

  constructor(
    private view: EditorView,
    private labels: NotionTableControlsLabels
  ) {
    this.overlay = el("div", "pointer-events-none fixed left-0 top-0 z-[9999]")
    document.body.appendChild(this.overlay)
    window.addEventListener("scroll", this.schedule, true)
    window.addEventListener("resize", this.schedule)
    this.render()
  }

  private schedule = () => {
    if (this.rafId !== null) return
    this.rafId = window.requestAnimationFrame(() => {
      this.rafId = null
      this.render()
    })
  }

  update(view: EditorView) {
    this.view = view
    this.render()
  }

  destroy() {
    window.removeEventListener("scroll", this.schedule, true)
    window.removeEventListener("resize", this.schedule)
    if (this.rafId !== null) window.cancelAnimationFrame(this.rafId)
    this.closeMenu()
    this.overlay.remove()
  }

  /** Resolve the <table> DOM element that contains the current selection. */
  private getActiveTable(): HTMLTableElement | null {
    const { selection } = this.view.state
    const $from = selection.$from
    for (let depth = $from.depth; depth > 0; depth--) {
      if ($from.node(depth).type.name === "table") {
        const pos = $from.before(depth)
        const dom = this.view.nodeDOM(pos) as HTMLElement | null
        if (!dom) return null
        return (
          dom.tagName === "TABLE"
            ? (dom as HTMLTableElement)
            : dom.querySelector("table")
        ) as HTMLTableElement | null
      }
    }
    return null
  }

  private run(command: Command) {
    command(this.view.state, this.view.dispatch)
    this.view.focus()
  }

  private selectColumn(cell: Element) {
    const pos = this.view.posAtDOM(cell, 0)
    const $cell = cellAround(this.view.state.doc.resolve(pos))
    if (!$cell) return
    this.view.dispatch(
      this.view.state.tr.setSelection(CellSelection.colSelection($cell))
    )
  }

  private selectRow(cell: Element) {
    const pos = this.view.posAtDOM(cell, 0)
    const $cell = cellAround(this.view.state.doc.resolve(pos))
    if (!$cell) return
    this.view.dispatch(
      this.view.state.tr.setSelection(CellSelection.rowSelection($cell))
    )
  }

  private closeMenu() {
    this.menu?.remove()
    this.menu = null
    document.removeEventListener("mousedown", this.onDocMouseDown, true)
  }

  private onDocMouseDown = (e: MouseEvent) => {
    if (this.menu && !this.menu.contains(e.target as Node)) this.closeMenu()
  }

  private openMenu(
    x: number,
    y: number,
    items: { label: string; command: Command; critical?: boolean }[]
  ) {
    this.closeMenu()
    const menu = el("div", MENU_CLASS)
    menu.style.left = `${x}px`
    menu.style.top = `${y}px`
    items.forEach((item) => {
      const btn = el(
        "button",
        item.critical ? MENU_ITEM_CRITICAL_CLASS : MENU_ITEM_CLASS
      )
      btn.textContent = item.label
      btn.addEventListener("mousedown", (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.run(item.command)
        this.closeMenu()
      })
      menu.appendChild(btn)
    })
    document.body.appendChild(menu)
    this.menu = menu
    document.addEventListener("mousedown", this.onDocMouseDown, true)
  }

  private render() {
    this.overlay.replaceChildren()
    if (!this.view.editable) return
    const table = this.getActiveTable()
    if (!table) return

    const tableRect = table.getBoundingClientRect()
    const rows = Array.from(
      table.querySelectorAll<HTMLTableRowElement>(
        ":scope > tbody > tr, :scope > tr"
      )
    )
    if (rows.length === 0) return
    const firstRowCells = Array.from(rows[0].children)

    // Column grips (top)
    firstRowCells.forEach((cell) => {
      const r = cell.getBoundingClientRect()
      const grip = el("div", GRIP_CLASS)
      grip.style.left = `${r.left}px`
      grip.style.top = `${tableRect.top - GRIP - 2}px`
      grip.style.width = `${r.width}px`
      grip.style.height = `${GRIP}px`
      grip.title = `${this.labels.insertLeft} · ${this.labels.deleteColumn}`
      grip.addEventListener("mousedown", (e) => {
        e.preventDefault()
        this.selectColumn(cell)
        this.openMenu(r.left, tableRect.top + GRIP, [
          { label: this.labels.insertLeft, command: addColumnBefore },
          { label: this.labels.insertRight, command: addColumnAfter },
          {
            label: this.labels.toggleHeaderColumn,
            command: toggleHeaderColumn,
          },
          {
            label: this.labels.deleteColumn,
            command: deleteColumn,
            critical: true,
          },
        ])
      })
      this.overlay.appendChild(grip)
    })

    // Row grips (left)
    rows.forEach((row) => {
      const r = row.getBoundingClientRect()
      const firstCell = row.children[0]
      if (!firstCell) return
      const grip = el("div", GRIP_CLASS)
      grip.style.left = `${tableRect.left - GRIP - 2}px`
      grip.style.top = `${r.top}px`
      grip.style.width = `${GRIP}px`
      grip.style.height = `${r.height}px`
      grip.title = `${this.labels.insertAbove} · ${this.labels.deleteRow}`
      grip.addEventListener("mousedown", (e) => {
        e.preventDefault()
        this.selectRow(firstCell)
        this.openMenu(tableRect.left + GRIP, r.top, [
          { label: this.labels.insertAbove, command: addRowBefore },
          { label: this.labels.insertBelow, command: addRowAfter },
          { label: this.labels.toggleHeaderRow, command: toggleHeaderRow },
          {
            label: this.labels.deleteRow,
            command: deleteRow,
            critical: true,
          },
        ])
      })
      this.overlay.appendChild(grip)
    })

    // "+" add column (right edge)
    const addCol = el("div", `${ADD_CLASS} hover:opacity-100`)
    addCol.textContent = "+"
    addCol.style.left = `${tableRect.right + 4}px`
    addCol.style.top = `${tableRect.top}px`
    addCol.style.width = `${GRIP + 4}px`
    addCol.style.height = `${tableRect.height}px`
    addCol.style.opacity = "1"
    addCol.title = this.labels.addColumn
    addCol.addEventListener("mousedown", (e) => {
      e.preventDefault()
      const lastCell = firstRowCells[firstRowCells.length - 1]
      if (lastCell) {
        this.selectColumn(lastCell)
        this.run(addColumnAfter)
      }
    })
    this.overlay.appendChild(addCol)

    // "+" add row (bottom edge)
    const addRow = el("div", `${ADD_CLASS} hover:opacity-100`)
    addRow.textContent = "+"
    addRow.style.left = `${tableRect.left}px`
    addRow.style.top = `${tableRect.bottom + 4}px`
    addRow.style.width = `${tableRect.width}px`
    addRow.style.height = `${GRIP + 4}px`
    addRow.style.opacity = "1"
    addRow.title = this.labels.addRow
    addRow.addEventListener("mousedown", (e) => {
      e.preventDefault()
      const lastRow = rows[rows.length - 1]
      const firstCell = lastRow?.children[0]
      if (firstCell) {
        this.selectRow(firstCell)
        this.run(addRowAfter)
      }
    })
    this.overlay.appendChild(addRow)
  }
}

export const NotionTableControlsPluginKey = new PluginKey("notionTableControls")

export const NotionTableControls = Extension.create<{
  labels: NotionTableControlsLabels
}>({
  name: "notionTableControls",

  addOptions() {
    return {
      labels: {
        insertLeft: "Insert column left",
        insertRight: "Insert column right",
        insertAbove: "Insert row above",
        insertBelow: "Insert row below",
        deleteColumn: "Delete column",
        deleteRow: "Delete row",
        toggleHeaderColumn: "Toggle header column",
        toggleHeaderRow: "Toggle header row",
        addColumn: "Add column",
        addRow: "Add row",
      },
    }
  },

  addProseMirrorPlugins() {
    const labels = this.options.labels
    return [
      new Plugin({
        key: NotionTableControlsPluginKey,
        view: (view) => new TableControlsView(view, labels),
      }),
    ]
  },
})
