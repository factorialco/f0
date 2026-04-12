import { beforeEach, describe, expect, it, vi } from "vitest"

import { createSuggestionConfig } from "./suggestion"
import { MentionedUser } from "./types"

const rendererState: {
  props: {
    items: MentionedUser[]
    command: (item: MentionedUser) => void
  } | null
} = {
  props: null,
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
      if (!rendererState.props) return
      rendererState.props = {
        ...rendererState.props,
        ...nextProps,
      }
    }

    destroy() {}
  }

  return {
    Editor: class {},
    ReactRenderer: MockReactRenderer,
  }
})

vi.mock("react-dom/client", () => ({
  createRoot: () => ({
    render: vi.fn(),
    unmount: vi.fn(),
  }),
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
