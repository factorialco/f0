import { Editor, type JSONContent } from "@tiptap/core"
import { afterEach, describe, expect, it } from "vitest"

import { StarterKitExtension, TextStyleExtension } from "../../configured"
import { FONT_SIZE_SCALE, FontSizeExtension } from "../index"

describe("FontSizeExtension", () => {
  const editors: Editor[] = []

  afterEach(() => {
    editors.forEach((editor) => editor.destroy())
    editors.length = 0
  })

  const createEditor = (content: JSONContent | string) => {
    const editor = new Editor({
      extensions: [StarterKitExtension, TextStyleExtension, FontSizeExtension],
      content,
    })

    editors.push(editor)

    return editor
  }

  const sizedDoc = (fontSize: string): JSONContent => ({
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Small print",
            marks: [{ type: "textStyle", attrs: { fontSize } }],
          },
        ],
      },
    ],
  })

  const firstMark = (editor: Editor) =>
    editor.getJSON().content?.[0]?.content?.[0]?.marks?.[0]

  // Without the attribute the mark is parsed with `fontSize` unknown, so it is
  // dropped and the editor autosaves a bare textStyle: the size is destroyed the
  // first time someone opens a document. These two are that failure.
  it("keeps the attribute when loading stored JSON", () => {
    const editor = createEditor(sizedDoc("24px"))

    expect(firstMark(editor)?.attrs?.fontSize).toBe("24px")
  })

  it("still carries the attribute after an unrelated edit", () => {
    const editor = createEditor(sizedDoc("24px"))

    editor.commands.insertContentAt(editor.state.doc.content.size, {
      type: "paragraph",
      content: [{ type: "text", text: "Appended elsewhere" }],
    })

    expect(firstMark(editor)?.attrs?.fontSize).toBe("24px")
  })

  // A size on the scale renders as both a class and an inline style: the class
  // is what survives the sanitizer used for read-only content, the style is what
  // lets TextStyle recognise the span when parsing HTML back (it rejects a span
  // that has no style attribute) and what a renderer outside F0 reads.
  it.each([...FONT_SIZE_SCALE])(
    "renders %ipx on the scale as a class",
    (px) => {
      const editor = createEditor(sizedDoc(`${px}px`))

      const html = editor.getHTML()

      expect(html).toContain(`f0-fs-${px}`)
      expect(html).toContain(`font-size: ${px}px`)
    }
  )

  it.each([...FONT_SIZE_SCALE])("parses the class for %ipx back", (px) => {
    const editor = createEditor(
      `<p><span class="f0-fs-${px}" style="font-size: ${px}px">Sized</span></p>`
    )

    expect(firstMark(editor)?.attrs?.fontSize).toBe(`${px}px`)
  })

  // The class is the snapped value, so it wins over whatever the inline style
  // happens to say.
  it("prefers the class over a disagreeing inline style", () => {
    const editor = createEditor(
      '<p><span class="f0-fs-24" style="font-size: 99px">Sized</span></p>'
    )

    expect(firstMark(editor)?.attrs?.fontSize).toBe("24px")
  })

  // Known limitation, recorded rather than worked around: TextStyle only accepts
  // a span that has a style attribute, so HTML stripped of styles (by the
  // read-only sanitizer, for instance) parses back without the size. Supporting
  // it would mean changing TextStyle's own parse rule for both editors. Nothing
  // in the product feeds sanitized HTML back into an editor today.
  it("does not parse a span that carries only the class", () => {
    const editor = createEditor('<p><span class="f0-fs-24">Sized</span></p>')

    expect(firstMark(editor)).toBeUndefined()
  })

  // The sanitizer applied to read-only content allows `class` but not `style`,
  // so a size on the scale must never render as an inline style.
  it("keeps a size off the scale as an inline style rather than dropping it", () => {
    const editor = createEditor(sizedDoc("13px"))

    const html = editor.getHTML()

    expect(html).toContain("font-size: 13px")
    expect(html).not.toContain("f0-fs-")
    expect(firstMark(editor)?.attrs?.fontSize).toBe("13px")
  })

  it("parses an inline font-size for values off the scale", () => {
    const editor = createEditor(
      '<p><span style="font-size: 13px">Sized</span></p>'
    )

    expect(firstMark(editor)?.attrs?.fontSize).toBe("13px")
  })

  it("round-trips its own HTML output", () => {
    const editor = createEditor(sizedDoc("18px"))
    const html = editor.getHTML()

    const reparsed = createEditor(html)

    expect(firstMark(reparsed)?.attrs?.fontSize).toBe("18px")
  })

  it("leaves text without a size unmarked", () => {
    const editor = createEditor({
      type: "doc",
      content: [
        { type: "paragraph", content: [{ type: "text", text: "Body" }] },
      ],
    })

    const html = editor.getHTML()

    expect(html).not.toContain("f0-fs-")
    expect(html).not.toContain("font-size")
  })

  describe("commands", () => {
    const editorWithSelection = () => {
      const editor = createEditor({
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "Selected" }] },
        ],
      })

      editor.commands.selectAll()

      return editor
    }

    it("setFontSize applies a size to the selection", () => {
      const editor = editorWithSelection()

      editor.commands.setFontSize("20px")

      expect(firstMark(editor)?.attrs?.fontSize).toBe("20px")
    })

    it("unsetFontSize removes it again", () => {
      const editor = editorWithSelection()

      editor.commands.setFontSize("20px")
      editor.commands.unsetFontSize()

      expect(firstMark(editor)).toBeUndefined()
    })
  })
})
