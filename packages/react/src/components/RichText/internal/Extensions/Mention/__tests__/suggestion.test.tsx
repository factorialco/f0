import { createRoot } from "react-dom/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { MentionPopover } from "../MentionPopover"
import { createSuggestionConfig } from "../suggestion"
import { MentionedUser } from "../types"

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(),
}))

type RendererRecord = {
  component: unknown
  editor: unknown
  props: Record<string, unknown>
  element: HTMLElement
  updateProps: ReturnType<typeof vi.fn>
  destroy: ReturnType<typeof vi.fn>
}

const rendererState: { renderers: RendererRecord[] } = {
  renderers: [],
}

vi.mock("@tiptap/react", () => {
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

  return {
    Editor: class {
      destroy() {}
    },
    ReactRenderer: MockReactRenderer,
  }
})

const users: MentionedUser[] = [
  { id: 1, label: "Alice", image_url: "/alice.png", href: "/alice" },
  { id: 2, label: "Bob", image_url: "/bob.png", href: "/bob" },
  { id: 3, label: "Charlie", image_url: "/charlie.png", href: "/charlie" },
  { id: 4, label: "Dave", image_url: "/dave.png", href: "/dave" },
]

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

type EditorLike = {
  chain: ReturnType<typeof vi.fn>
  commands: {
    focus: ReturnType<typeof vi.fn>
  }
  view: {
    dom: {
      ownerDocument: Document
    }
  }
}

const createEditorMock = () => {
  const chain = {
    focus: vi.fn(),
    insertContentAt: vi.fn(),
    run: vi.fn(),
  }

  chain.focus.mockReturnValue(chain)
  chain.insertContentAt.mockReturnValue(chain)

  const editor: EditorLike = {
    chain: vi.fn(() => chain),
    commands: {
      focus: vi.fn(),
    },
    view: {
      dom: {
        ownerDocument: document,
      },
    },
  }

  return {
    editor,
    chain,
  }
}

describe("createSuggestionConfig", () => {
  beforeEach(() => {
    rendererState.renderers = []
  })

  const startPopover = () => {
    const config = createSuggestionConfig(users, vi.fn(), undefined, users)
    const renderer = config.render()
    const { editor } = createEditorMock()
    const props = {
      items: users,
      clientRect: () => rect,
      editor: editor as never,
      range: { from: 0, to: 1 },
    }

    renderer.onStart(props)

    const [list, popover] = rendererState.renderers
    expect(list).toBeDefined()
    expect(popover).toBeDefined()
    expect(popover.element.parentElement).toBe(document.body)

    return { config, renderer, props, list, popover }
  }

  it("renders the popover through the editor's React tree, not a standalone root", () => {
    const { popover, props } = startPopover()

    expect(popover.component).toBe(MentionPopover)
    expect(popover.editor).toBe(props.editor)
    expect(createRoot).not.toHaveBeenCalled()
  })

  it("keeps the popover anchored as the query changes", () => {
    const { renderer, props, list, popover } = startPopover()

    renderer.onUpdate(props)

    expect(list.updateProps).toHaveBeenCalledWith({ items: props.items })
    expect(popover.updateProps).toHaveBeenCalledTimes(1)
    expect(popover.updateProps.mock.calls[0][0]).toHaveProperty("anchorRect")
  })

  it("tears down only once when Escape is followed by the exit callback", () => {
    const { renderer, list, popover } = startPopover()

    renderer.onKeyDown({ event: { key: "Escape" } as KeyboardEvent })
    expect(() => renderer.onExit()).not.toThrow()

    expect(list.destroy).toHaveBeenCalledTimes(1)
    expect(popover.destroy).toHaveBeenCalledTimes(1)
  })

  it("ignores a suspended update that resumes after the popover exited", () => {
    const { renderer, props, list, popover } = startPopover()

    renderer.onExit()
    expect(popover.destroy).toHaveBeenCalledTimes(1)

    renderer.onUpdate(props)

    expect(list.updateProps).not.toHaveBeenCalled()
    expect(popover.updateProps).not.toHaveBeenCalled()
  })

  it("ignores a suspended update that resumes after Escape dismissed it", () => {
    const { renderer, props, list, popover } = startPopover()

    renderer.onKeyDown({ event: { key: "Escape" } as KeyboardEvent })
    expect(popover.destroy).toHaveBeenCalledTimes(1)

    renderer.onUpdate(props)

    expect(list.updateProps).not.toHaveBeenCalled()
    expect(popover.updateProps).not.toHaveBeenCalled()
  })

  it("clears a pending debounce when Escape dismisses the popover", async () => {
    vi.useFakeTimers()
    try {
      const publish = vi.fn()
      const config = createSuggestionConfig([], publish, undefined, users)
      const renderer = config.render()
      const { editor } = createEditorMock()

      renderer.onStart({
        items: users,
        clientRect: () => rect,
        editor: editor as never,
        range: { from: 0, to: 1 },
      })

      await config.items({ query: "" })
      void config.items({ query: "ali" })
      publish.mockClear()
      expect(vi.getTimerCount()).toBe(1)

      renderer.onKeyDown({ event: { key: "Escape" } as KeyboardEvent })

      expect(vi.getTimerCount()).toBe(0)
      await vi.advanceTimersByTimeAsync(500)
      expect(publish).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })

  it("destroys both renderers and removes the container on Escape", () => {
    const { renderer, list, popover } = startPopover()

    renderer.onKeyDown({ event: { key: "Escape" } as KeyboardEvent })

    expect(list.destroy).toHaveBeenCalledTimes(1)
    expect(popover.destroy).toHaveBeenCalledTimes(1)
    expect(popover.element.isConnected).toBe(false)
  })

  it("destroys both renderers and removes the container on exit", () => {
    const { renderer, list, popover } = startPopover()

    renderer.onExit()

    expect(list.destroy).toHaveBeenCalledTimes(1)
    expect(popover.destroy).toHaveBeenCalledTimes(1)
    expect(popover.element.isConnected).toBe(false)
  })

  it("ignores a command fired after the popover was dismissed", () => {
    const { renderer, props, list } = startPopover()
    const command = list.props.command as (item: MentionedUser) => void

    renderer.onUpdate(props)
    renderer.onExit()
    command?.(users[0])

    expect(props.editor.chain).not.toHaveBeenCalled()
  })

  it("stops handling keys once the popover has been dismissed", () => {
    const { renderer } = startPopover()

    renderer.onKeyDown({ event: { key: "Escape" } as KeyboardEvent })

    expect(
      renderer.onKeyDown({ event: { key: "ArrowDown" } as KeyboardEvent })
    ).toBe(false)
    expect(
      renderer.onKeyDown({ event: { key: "Escape" } as KeyboardEvent })
    ).toBe(false)
  })

  it("uses latest suggestion range and inserts mention atomically", () => {
    const selection = {
      collapseToEnd: vi.fn(),
    } as unknown as Selection
    const getSelectionSpy = vi
      .spyOn(window, "getSelection")
      .mockReturnValue(selection)

    const config = createSuggestionConfig(users, vi.fn(), undefined, users)
    const renderer = config.render()

    const startEditor = createEditorMock()
    const updateEditor = createEditorMock()

    renderer.onStart({
      items: users,
      clientRect: () => rect,
      editor: startEditor.editor as never,
      range: { from: 5, to: 9 },
    })

    const command = rendererState.renderers[0]?.props.command as (
      item: MentionedUser
    ) => void
    expect(command).toBeDefined()

    renderer.onUpdate({
      items: users,
      clientRect: () => rect,
      editor: updateEditor.editor as never,
      range: { from: 22, to: 28 },
    })

    command?.(users[3])

    expect(startEditor.editor.chain).not.toHaveBeenCalled()
    expect(updateEditor.editor.chain).toHaveBeenCalledTimes(1)
    expect(updateEditor.chain.insertContentAt).toHaveBeenCalledWith(
      { from: 22, to: 28 },
      [
        {
          type: "mention",
          attrs: {
            id: "4",
            label: "Dave",
            image_url: "/dave.png",
            href: "/dave",
          },
        },
        {
          type: "text",
          text: " ",
        },
      ]
    )
    expect(updateEditor.chain.run).toHaveBeenCalledTimes(1)
    expect(selection.collapseToEnd).toHaveBeenCalledTimes(1)

    renderer.onExit()
    getSelectionSpy.mockRestore()
  })
})
