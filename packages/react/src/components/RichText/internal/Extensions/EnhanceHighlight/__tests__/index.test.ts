import { Editor } from "@tiptap/core"
import StarterKit from "@tiptap/starter-kit"
import { describe, expect, it } from "vitest"

import { EnhanceHighlight } from "@/components/RichText/internal/Extensions/EnhanceHighlight"

const createEditor = (content = "<p>Hello world enhance me</p>") =>
  new Editor({
    extensions: [StarterKit, EnhanceHighlight],
    content,
  })

describe("EnhanceHighlight", () => {
  it("applies decorations over the full doc (mirrors enhance-without-selection)", () => {
    const editor = createEditor()
    editor.setEditable(false)
    const to = Math.max(1, editor.state.doc.content.size - 1)
    editor.commands.setEnhanceHighlight(0, to)

    const decorations = editor.view.dom.querySelectorAll(".enhance-highlight")
    expect(decorations.length).toBeGreaterThan(0)
  })

  it("shows the loading placeholder when the document has no text", () => {
    const editor = createEditor("<p></p>")
    editor.setEditable(false)
    editor.commands.setEnhanceHighlight(0, editor.state.doc.content.size, {
      placeholder: "Loading...",
    })

    const placeholder = editor.view.dom.querySelector(
      ".enhance-highlight-placeholder"
    )
    expect(placeholder).not.toBeNull()
    expect(placeholder?.textContent).toBe("Loading...")
    expect(placeholder?.classList.contains("enhance-highlight")).toBe(true)
  })

  it("prefers the text shine over the placeholder when there is text", () => {
    const editor = createEditor()
    const to = Math.max(1, editor.state.doc.content.size - 1)
    editor.commands.setEnhanceHighlight(0, to, { placeholder: "Loading..." })

    expect(
      editor.view.dom.querySelectorAll(".enhance-highlight-placeholder").length
    ).toBe(0)
    expect(
      editor.view.dom.querySelectorAll(".enhance-highlight").length
    ).toBeGreaterThan(0)
  })

  it("renders nothing on an empty document without a placeholder", () => {
    const editor = createEditor("<p></p>")
    editor.commands.setEnhanceHighlight(0, editor.state.doc.content.size)

    expect(editor.view.dom.querySelectorAll(".enhance-highlight").length).toBe(
      0
    )
  })

  it("clears the placeholder together with the highlight", () => {
    const editor = createEditor("<p></p>")
    editor.commands.setEnhanceHighlight(0, editor.state.doc.content.size, {
      placeholder: "Loading...",
    })
    expect(
      editor.view.dom.querySelectorAll(".enhance-highlight-placeholder").length
    ).toBeGreaterThan(0)

    editor.commands.clearEnhanceHighlight()
    expect(
      editor.view.dom.querySelectorAll(".enhance-highlight-placeholder").length
    ).toBe(0)
  })

  it("clears decorations", () => {
    const editor = createEditor()
    editor.commands.setEnhanceHighlight(1, 5)
    expect(
      editor.view.dom.querySelectorAll(".enhance-highlight").length
    ).toBeGreaterThan(0)
    editor.commands.clearEnhanceHighlight()
    expect(editor.view.dom.querySelectorAll(".enhance-highlight").length).toBe(
      0
    )
  })
})
