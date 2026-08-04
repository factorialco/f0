import { Editor, type JSONContent } from "@tiptap/core"
import { afterEach, describe, expect, it } from "vitest"

import { StarterKitExtension } from "../../configured"
import { INDENT_MAX_LEVEL, INDENT_STEP_PX, IndentExtension } from "../index"

describe("IndentExtension", () => {
  const editors: Editor[] = []

  afterEach(() => {
    editors.forEach((editor) => editor.destroy())
    editors.length = 0
  })

  const createEditor = (content: JSONContent | string) => {
    const editor = new Editor({
      extensions: [StarterKitExtension, IndentExtension],
      content,
    })

    editors.push(editor)

    return editor
  }

  const indentedDoc = (indent: number, type = "paragraph"): JSONContent => ({
    type: "doc",
    content: [
      {
        type,
        ...(type === "heading"
          ? { attrs: { level: 2, indent } }
          : { attrs: { indent } }),
        content: [{ type: "text", text: "Indented" }],
      },
    ],
  })

  const firstNode = (editor: Editor) => editor.getJSON().content?.[0]

  // Without the attribute a stored indent is parsed as unknown, dropped, and
  // autosaved away the first time someone opens the document — the same
  // failure fontSize had. These two are that failure.
  it("keeps the attribute when loading stored JSON", () => {
    const editor = createEditor(indentedDoc(2))

    expect(firstNode(editor)?.attrs?.indent).toBe(2)
  })

  it("still carries the attribute after an unrelated edit", () => {
    const editor = createEditor(indentedDoc(2))

    editor.commands.insertContentAt(editor.state.doc.content.size, {
      type: "paragraph",
      content: [{ type: "text", text: "Appended elsewhere" }],
    })

    expect(firstNode(editor)?.attrs?.indent).toBe(2)
  })

  it("applies to headings as well", () => {
    const editor = createEditor(indentedDoc(3, "heading"))

    expect(firstNode(editor)?.attrs?.indent).toBe(3)
    expect(editor.getHTML()).toContain("f0-indent-3")
  })

  // The class is what survives the sanitizer used for read-only content; the
  // inline style is what a renderer outside F0 reads.
  it("renders a level as both a class and an inline style", () => {
    const editor = createEditor(indentedDoc(2))

    const html = editor.getHTML()

    expect(html).toContain("f0-indent-2")
    expect(html).toContain(`padding-left: ${2 * INDENT_STEP_PX}px`)
  })

  it("parses the class back", () => {
    const editor = createEditor('<p class="f0-indent-4">Indented</p>')

    expect(firstNode(editor)?.attrs?.indent).toBe(4)
  })

  it("parses an inline padding-left back, quantized to the step", () => {
    const editor = createEditor(
      `<p style="padding-left: ${3 * INDENT_STEP_PX}px">Indented</p>`
    )

    expect(firstNode(editor)?.attrs?.indent).toBe(3)
  })

  it("round-trips its own HTML output", () => {
    const editor = createEditor(indentedDoc(5))
    const html = editor.getHTML()

    const reparsed = createEditor(html)

    expect(firstNode(reparsed)?.attrs?.indent).toBe(5)
  })

  // Beyond the styled range the class caps (sanitized rendering degrades to
  // the deepest styled level) while the JSON and inline style keep the true
  // depth — store what's given, never destroy.
  it("caps the class at the deepest styled level but keeps the true depth", () => {
    const deep = INDENT_MAX_LEVEL + 4
    const editor = createEditor(indentedDoc(deep))

    const html = editor.getHTML()

    expect(firstNode(editor)?.attrs?.indent).toBe(deep)
    expect(html).toContain(`f0-indent-${INDENT_MAX_LEVEL}`)
    expect(html).toContain(`padding-left: ${deep * INDENT_STEP_PX}px`)
  })

  it("leaves unindented blocks unmarked", () => {
    const editor = createEditor({
      type: "doc",
      content: [
        { type: "paragraph", content: [{ type: "text", text: "Body" }] },
      ],
    })

    const html = editor.getHTML()

    expect(html).not.toContain("f0-indent-")
    expect(html).not.toContain("padding-left")
  })

  it("ignores a zero or negative stored value", () => {
    const editor = createEditor(indentedDoc(0))

    expect(editor.getHTML()).not.toContain("f0-indent-")
  })

  // An import infers depth from page geometry and can get it wrong, so a
  // reader must always be able to take a level back off.
  describe("removing an indent", () => {
    const pressKey = (editor: Editor, key: string, shiftKey = false) =>
      editor.view.someProp("handleKeyDown", (handler) =>
        handler(
          editor.view,
          new KeyboardEvent("keydown", { key, shiftKey, bubbles: true })
        )
      ) ?? false

    const flushDoc = (): JSONContent => ({
      type: "doc",
      content: [
        { type: "paragraph", content: [{ type: "text", text: "Flush" }] },
      ],
    })

    const atStart = (editor: Editor) => {
      editor.commands.setTextSelection(1)
      return editor
    }

    it("outdent drops one level at a time and then clears", () => {
      const editor = createEditor(indentedDoc(2))

      editor.commands.outdent()
      expect(firstNode(editor)?.attrs?.indent).toBe(1)

      editor.commands.outdent()
      expect(firstNode(editor)?.attrs?.indent).toBeNull()
    })

    it("outdent refuses when there is nothing to remove", () => {
      const editor = createEditor(flushDoc())

      expect(editor.can().outdent()).toBe(false)
    })

    it("setIndent clamps to the styled range and unsetIndent clears", () => {
      const editor = createEditor(flushDoc())

      editor.commands.setIndent(99)
      expect(firstNode(editor)?.attrs?.indent).toBe(INDENT_MAX_LEVEL)

      editor.commands.unsetIndent()
      expect(firstNode(editor)?.attrs?.indent).toBeNull()
    })

    it("Shift-Tab outdents an indented paragraph", () => {
      const editor = atStart(createEditor(indentedDoc(2)))

      expect(pressKey(editor, "Tab", true)).toBe(true)
      expect(firstNode(editor)?.attrs?.indent).toBe(1)
    })

    it("Shift-Tab is left alone when the block is not indented", () => {
      const editor = atStart(createEditor(flushDoc()))

      // Falling through is what keeps reverse tabbing out of the editor working.
      expect(pressKey(editor, "Tab", true)).toBe(false)
    })

    it("Backspace at the start of an indented block outdents instead of joining", () => {
      const editor = atStart(createEditor(indentedDoc(2)))

      expect(pressKey(editor, "Backspace")).toBe(true)

      const first = firstNode(editor)
      expect(first?.attrs?.indent).toBe(1)
      expect(first?.content?.[0]?.text).toBe("Indented")
    })

    it("Backspace mid-text is left alone", () => {
      const editor = createEditor(indentedDoc(2))
      editor.commands.setTextSelection(4)

      expect(pressKey(editor, "Backspace")).toBe(false)
      expect(firstNode(editor)?.attrs?.indent).toBe(2)
    })

    it("Backspace at the start of a flush block is left alone", () => {
      const editor = atStart(createEditor(flushDoc()))

      expect(pressKey(editor, "Backspace")).toBe(false)
    })

    it("leaves Shift-Tab to list nesting inside a list item", () => {
      const editor = createEditor({
        type: "doc",
        content: [
          {
            type: "bulletList",
            content: [
              {
                type: "listItem",
                content: [
                  {
                    type: "paragraph",
                    attrs: { indent: 2 },
                    content: [{ type: "text", text: "Item" }],
                  },
                ],
              },
            ],
          },
        ],
      })
      editor.commands.setTextSelection(3)

      pressKey(editor, "Tab", true)

      // The list keymap lifts the item; the indent attribute is not what
      // Shift-Tab acts on here, so it is left untouched.
      const lifted = editor.getJSON().content?.[0]
      expect(lifted?.type).toBe("paragraph")
      expect(lifted?.attrs?.indent).toBe(2)
    })
  })
})
