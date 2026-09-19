import { beforeEach, describe, expect, it, vi } from "vitest"
import { defaultTranslations } from "@/lib/providers/i18n"
import { createSlashCommandExtension } from ".."

type RendererRecord = {
  component: unknown
  editor: unknown
  props: Record<string, unknown>
  element: HTMLElement
  updateProps: ReturnType<typeof vi.fn>
  destroy: ReturnType<typeof vi.fn>
}

const rendererState = vi.hoisted(() => ({
  renderers: [] as RendererRecord[],
}))

const suggestionState = vi.hoisted(() => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: null as any,
}))

vi.mock("@tiptap/react", async () => {
  const actual = await vi.importActual<Record<string, unknown>>("@tiptap/react")

  class MockReactRenderer {
    element = document.createElement("div")
    ref = { onKeyDown: vi.fn(() => false) }
    record: RendererRecord

    constructor(
      component: unknown,
      options: { props: Record<string, unknown>; editor: unknown }
    ) {
      this.record = {
        component,
        editor: options.editor,
        props: options.props,
        element: this.element,
        updateProps: vi.fn(),
        destroy: vi.fn(),
      }
      rendererState.renderers.push(this.record)
    }

    updateProps(nextProps: Record<string, unknown>) {
      this.record.updateProps(nextProps)
      this.record.props = { ...this.record.props, ...nextProps }
    }

    destroy() {
      this.record.destroy()
    }
  }

  return { ...actual, ReactRenderer: MockReactRenderer }
})

vi.mock("@tiptap/suggestion", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Suggestion: (config: any) => {
    suggestionState.config = config
    return {}
  },
}))

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(),
}))

const rect = {
  width: 10,
  height: 10,
  top: 0,
  right: 10,
  bottom: 10,
  left: 0,
  x: 0,
  y: 0,
  toJSON: () => ({}),
} as DOMRect

const createEditorMock = () => ({
  chain: vi.fn(() => ({
    focus: vi.fn().mockReturnThis(),
    deleteRange: vi.fn().mockReturnThis(),
    run: vi.fn(),
  })),
  commands: { focus: vi.fn() },
  view: { dom: { ownerDocument: document } },
})

const startPopover = () => {
  const extension = createSlashCommandExtension({
    translations: defaultTranslations,
  })
  const editor = createEditorMock()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(extension.config as any).addProseMirrorPlugins.call({
    editor,
    options: { suggestion: {} },
  })

  const renderer = suggestionState.config.render()
  const items = [
    { title: "Heading", command: vi.fn() },
    { title: "Image", command: vi.fn() },
  ]
  const props = {
    items,
    command: vi.fn(),
    clientRect: () => rect,
    editor,
    range: { from: 0, to: 1 },
    query: "",
  }

  renderer.onStart(props)

  const [list, popover] = rendererState.renderers
  return { renderer, props, list, popover }
}

describe("slash command suggestion popover", () => {
  beforeEach(() => {
    rendererState.renderers = []
    suggestionState.config = null
  })

  it("renders the popover through the editor's React tree, not a standalone root", async () => {
    const { createRoot } = await import("react-dom/client")
    const { popover, props } = startPopover()

    expect(rendererState.renderers).toHaveLength(2)
    expect(popover.editor).toBe(props.editor)
    expect(popover.element.parentElement).toBe(document.body)
    expect(createRoot).not.toHaveBeenCalled()
  })

  it("hides and restores the popover element as the query stops and starts matching", () => {
    const { renderer, props, popover } = startPopover()

    renderer.onUpdate({ ...props, items: [] })
    expect(popover.element.style.display).toBe("none")

    renderer.onUpdate(props)
    expect(popover.element.style.display).toBe("")
    expect(popover.updateProps).toHaveBeenCalledWith({
      anchorRect: expect.anything(),
    })
  })

  it("destroys both renderers and removes the popover on Escape", () => {
    const { renderer, list, popover } = startPopover()

    renderer.onKeyDown({ event: { key: "Escape" } as KeyboardEvent })

    expect(list.destroy).toHaveBeenCalledTimes(1)
    expect(popover.destroy).toHaveBeenCalledTimes(1)
    expect(popover.element.isConnected).toBe(false)
  })

  it("ignores callbacks that resume after the popover was dismissed", () => {
    const { renderer, props, list, popover } = startPopover()

    renderer.onKeyDown({ event: { key: "Escape" } as KeyboardEvent })
    renderer.onUpdate(props)
    expect(() => renderer.onExit()).not.toThrow()

    expect(list.updateProps).not.toHaveBeenCalled()
    expect(popover.updateProps).not.toHaveBeenCalled()
    expect(list.destroy).toHaveBeenCalledTimes(1)
    expect(popover.destroy).toHaveBeenCalledTimes(1)
  })
})
