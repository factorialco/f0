import { Editor } from "@tiptap/core"
import StarterKit from "@tiptap/starter-kit"
import { describe, expect, it } from "vitest"

import { EnhanceHighlight } from "@/components/RichText/internal/Extensions/EnhanceHighlight"

const createEditor = () =>
  new Editor({
    extensions: [StarterKit, EnhanceHighlight],
    content: "<p>Hello world enhance me</p>",
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
