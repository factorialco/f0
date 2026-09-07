import { beforeEach, describe, expect, it, vi } from "vitest"
import { createSuggestionConfig } from "../suggestion"
import { MentionedUser } from "../types"

const rendererState: {
  props: {
    items: MentionedUser[]
    command: (item: MentionedUser) => void
  } | null
  destroy: ReturnType<typeof vi.fn>
} = {
  props: null,
  destroy: vi.fn(),
}

vi.mock("@tiptap/react", () => {
  class MockReactRenderer {
    element = document.createElement("div")
    ref = { onKeyDown: vi.fn(() => false) }

    constructor(
      _component: unknown,
      options: {
        props: {
          items: MentionedUser[]
          command: (item: MentionedUser) => void
        }
      }
    ) {
      rendererState.props = options.props
    }

    updateProps(nextProps: { items: MentionedUser[] }) {
      if (!rendererState.props) {
        return
      }
      rendererState.props = {
        ...rendererState.props,
        ...nextProps,
      }
    }

    destroy() {
      rendererState.destroy()
    }
  }

  return {
    Editor: class {
      destroy() {}
    },
    ReactRenderer: MockReactRenderer,
  }
})

const rootState: {
  roots: {
    render: ReturnType<typeof vi.fn>
    unmount: ReturnType<typeof vi.fn>
  }[]
} = {
  roots: [],
}

vi.mock("react-dom/client", () => ({
  createRoot: () => {
    const root = {
      render: vi.fn(),
      unmount: vi.fn(),
    }
    rootState.roots.push(root)
    return root
  },
}))

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
    rendererState.props = null
    rendererState.destroy.mockClear()
    rootState.roots = []
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

    const root = rootState.roots.at(-1)
    expect(root?.render).toHaveBeenCalledTimes(1)
    const container = document.body.lastElementChild
    expect(container).not.toBeNull()

    return { config, renderer, props, root, container }
  }

  it("ignores a suspended update that resumes after the popover exited", () => {
    const { renderer, props, root } = startPopover()

    renderer.onExit()
    expect(root?.unmount).toHaveBeenCalledTimes(1)

    renderer.onUpdate(props)

    expect(root?.render).toHaveBeenCalledTimes(1)
  })

  it("ignores a suspended update that resumes after Escape dismissed it", () => {
    const { renderer, props, root } = startPopover()

    renderer.onKeyDown({ event: { key: "Escape" } as KeyboardEvent })
    expect(root?.unmount).toHaveBeenCalledTimes(1)

    renderer.onUpdate(props)

    expect(root?.render).toHaveBeenCalledTimes(1)
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

  it("destroys the renderer and removes the container on Escape", () => {
    const { renderer, container } = startPopover()

    renderer.onKeyDown({ event: { key: "Escape" } as KeyboardEvent })

    expect(rendererState.destroy).toHaveBeenCalledTimes(1)
    expect(container?.isConnected).toBe(false)
  })

  it("destroys the renderer and removes the container on exit", () => {
    const { renderer, container } = startPopover()

    renderer.onExit()

    expect(rendererState.destroy).toHaveBeenCalledTimes(1)
    expect(container?.isConnected).toBe(false)
  })

  it("ignores a command fired after the popover was dismissed", () => {
    const { renderer, props } = startPopover()
    const command = rendererState.props?.command

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

    const command = rendererState.props?.command
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
