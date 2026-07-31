import { Editor } from "@tiptap/core"
import { afterEach, describe, expect, it } from "vitest"

import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"

import { StarterKitExtension } from "../../configured"
import { getGroupedCommands } from "../AvailableCommands"

describe("getGroupedCommands", () => {
  const editors: Editor[] = []

  afterEach(() => {
    editors.forEach((editor) => editor.destroy())
    editors.length = 0
  })

  const translations = defaultTranslations as unknown as Parameters<
    typeof getGroupedCommands
  >[0]["translations"]

  const textStyles = () => {
    const groups = getGroupedCommands({ translations })
    const group = groups.find(
      (candidate) =>
        candidate.title === defaultTranslations.richTextEditor.groups.textStyles
    )

    if (!group) throw new Error("text styles group missing")

    return group
  }

  const editorWithParagraph = () => {
    const editor = new Editor({
      extensions: [StarterKitExtension],
      content: "<p>Section title</p>",
    })

    editors.push(editor)
    editor.commands.selectAll()

    return editor
  }

  it("offers every heading level the editor can render", () => {
    expect(textStyles().commands).toHaveLength(6)
  })

  // The importer emits h4-h6, so a person editing an imported policy has to be
  // able to produce the same levels by hand.
  it.each([
    [4, defaultTranslations.richTextEditor.heading4],
    [5, defaultTranslations.richTextEditor.heading5],
    [6, defaultTranslations.richTextEditor.heading6],
  ])("applies heading %i from its menu entry", (level, title) => {
    const item = textStyles().commands.find(
      (command) => command.title === title
    )

    if (!item) throw new Error(`no menu entry titled ${title}`)

    const editor = editorWithParagraph()
    item.command(editor)

    const first = editor.getJSON().content?.[0]

    expect(first?.type).toBe("heading")
    expect(first?.attrs?.level).toBe(level)
  })

  it("still applies the levels that existed before", () => {
    const editor = editorWithParagraph()
    const item = textStyles().commands.find(
      (command) => command.title === defaultTranslations.richTextEditor.heading1
    )

    item?.command(editor)

    expect(editor.getJSON().content?.[0]?.attrs?.level).toBe(1)
  })

  it("carries an icon on every heading entry", () => {
    expect(textStyles().commands.every((command) => command.icon)).toBe(true)
  })
})
