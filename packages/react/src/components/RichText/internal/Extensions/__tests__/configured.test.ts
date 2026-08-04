import { Editor, type JSONContent } from "@tiptap/core"
import { afterEach, describe, expect, it } from "vitest"

import { StarterKitExtension } from "../configured"

describe("StarterKitExtension heading levels", () => {
  const editors: Editor[] = []

  afterEach(() => {
    editors.forEach((editor) => editor.destroy())
    editors.length = 0
  })

  const createEditor = (content: JSONContent) => {
    const editor = new Editor({
      extensions: [StarterKitExtension],
      content,
    })

    editors.push(editor)

    return editor
  }

  const headingDoc = (level: number): JSONContent => ({
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level },
        content: [{ type: "text", text: `Level ${level}` }],
      },
    ],
  })

  const levels = [1, 2, 3, 4, 5, 6]

  // A level outside the configured list is kept in the document but clamped by
  // renderHTML to the first configured level, so stored h4-h6 used to be drawn
  // as h1 while their JSON stayed correct. Assert on the rendered tag: it is
  // what regresses if the levels array is narrowed again.
  it.each(levels)(
    "renders a stored level %i heading with its own tag",
    (level) => {
      const editor = createEditor(headingDoc(level))

      expect(editor.getHTML()).toContain(`<h${level}>`)
    }
  )

  it.each(levels)("preserves level %i through a JSON round-trip", (level) => {
    const editor = createEditor(headingDoc(level))

    expect(editor.getJSON().content?.[0]?.attrs?.level).toBe(level)
  })

  it.each(levels)("parses an <h%i> tag back into its level", (level) => {
    const editor = createEditor({ type: "doc", content: [] })

    editor.commands.setContent(`<h${level}>Level ${level}</h${level}>`)

    expect(editor.getJSON().content?.[0]?.attrs?.level).toBe(level)
  })

  it.each(levels)("can toggle a paragraph into a level %i heading", (level) => {
    const editor = createEditor({
      type: "doc",
      content: [
        { type: "paragraph", content: [{ type: "text", text: "Text" }] },
      ],
    })

    editor.commands.toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 | 6 })

    expect(editor.getJSON().content?.[0]?.type).toBe("heading")
    expect(editor.getJSON().content?.[0]?.attrs?.level).toBe(level)
  })
})
