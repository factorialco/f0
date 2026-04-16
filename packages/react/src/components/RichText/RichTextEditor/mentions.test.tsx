import { afterEach, describe, expect, it, vi } from "vitest"

import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

vi.mock("@/components/RichText/CoreEditor", async (importOriginal) => {
  const actual =
    await importOriginal<typeof import("@/components/RichText/CoreEditor")>()

  return {
    ...actual,
    EditorBubbleMenu: () => null,
    Toolbar: () => null,
  }
})

import { RichTextEditor } from "./index"

describe("RichTextEditor mentions", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const users = [
    { id: 1, label: "Alice", href: "/alice" },
    { id: 2, label: "Bob", href: "/bob" },
    { id: 3, label: "Charlie", href: "/charlie" },
    { id: 4, label: "Dave", href: "/dave" },
  ]

  const selectMentionFromQuery = async (editor: HTMLElement, query: string) => {
    editor.focus()
    await userEvent.keyboard(query)

    const queryText = query.replace("@", "") || users[0].label
    const option = (await screen.findAllByText(new RegExp(queryText, "i")))
      .filter((node) => !node.closest(".ProseMirror"))
      .at(0)

    expect(option).toBeDefined()
    await userEvent.click(option as HTMLElement)
  }

  it("keeps all mentions when adding the fourth mention", async () => {
    const onChange = vi.fn()

    zeroRender(
      <RichTextEditor
        title="Title"
        placeholder="Placeholder..."
        onChange={onChange}
        mentionsConfig={{ users }}
      />
    )

    const editor = document.querySelector(".ProseMirror")
    if (!(editor instanceof HTMLElement)) {
      throw new Error("Expected .ProseMirror editor to be rendered")
    }

    await selectMentionFromQuery(editor, "@ali")
    await selectMentionFromQuery(editor, "@bob")
    await selectMentionFromQuery(editor, "@char")
    await selectMentionFromQuery(editor, "@dav")

    await waitFor(() => {
      const mentionNodes = editor.querySelectorAll("a.mention")
      const mentionIds = Array.from(mentionNodes).map((node) =>
        Number(node.getAttribute("data-id"))
      )

      expect(mentionIds).toEqual([1, 2, 3, 4])
    })

    const lastCallWithMentions = [...onChange.mock.calls]
      .map((call) => call[0])
      .reverse()
      .find((value) => Array.isArray(value?.mentionIds))

    expect(lastCallWithMentions?.mentionIds).toEqual([1, 2, 3, 4])
  })

  it("supports mentions across paragraphs and consecutive mentions", async () => {
    zeroRender(
      <RichTextEditor
        title="Title"
        placeholder="Placeholder..."
        onChange={vi.fn()}
        mentionsConfig={{ users }}
      />
    )

    const editor = document.querySelector(".ProseMirror")
    if (!(editor instanceof HTMLElement)) {
      throw new Error("Expected .ProseMirror editor to be rendered")
    }

    await selectMentionFromQuery(editor, "@ali")

    editor.focus()
    await userEvent.keyboard("{Backspace}")
    await selectMentionFromQuery(editor, "@bob")

    editor.focus()
    await userEvent.keyboard("{Enter}")

    await selectMentionFromQuery(editor, "@")
    await selectMentionFromQuery(editor, "@dav")

    await waitFor(() => {
      const mentionNodes = editor.querySelectorAll("a.mention")
      const mentionLabels = Array.from(mentionNodes).map(
        (node) => node.textContent
      )

      expect(mentionLabels).toEqual(["Alice", "Bob", "Alice", "Dave"])
      expect(editor.querySelectorAll("p").length).toBeGreaterThanOrEqual(2)
    })
  })
})
