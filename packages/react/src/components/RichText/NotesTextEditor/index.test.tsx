import { act, waitFor } from "@testing-library/react"
import { createRef, type ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

vi.mock("@tiptap/extension-drag-handle-react", () => ({
  default: ({ children }: { children: ReactNode }) => children,
}))

vi.mock("tippy.js", () => ({
  default: () => ({
    destroy: vi.fn(),
    hide: vi.fn(),
    setProps: vi.fn(),
    show: vi.fn(),
  }),
}))

vi.mock("./extensions", async () => {
  const { StarterKitExtension } =
    await import("../CoreEditor/Extensions/StarterKit")
  const { BlockIdExtension } =
    await import("../CoreEditor/Extensions/BlockIdExtension")

  return {
    createNotesTextEditorExtensions: () => [
      StarterKitExtension,
      BlockIdExtension,
    ],
  }
})

vi.mock("@/components/RichText/CoreEditor", async (importOriginal) => {
  const actual =
    await importOriginal<typeof import("@/components/RichText/CoreEditor")>()

  return {
    ...actual,
    EditorBubbleMenu: () => null,
    Toolbar: () => null,
  }
})

import { NotesTextEditor } from "./index"
import type { NotesTextEditorHandle } from "./types"

describe("NotesTextEditor", () => {
  it("emits corrected JSON with string block ids when initialized with null ids", async () => {
    const onChange = vi.fn()

    zeroRender(
      <NotesTextEditor
        onChange={onChange}
        placeholder="Write something"
        onTitleChange={vi.fn()}
        initialEditorState={{
          content: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                attrs: { id: null },
                content: [{ type: "text", text: "First paragraph" }],
              },
              {
                type: "paragraph",
                attrs: { id: null },
                content: [{ type: "text", text: "Second paragraph" }],
              },
            ],
          },
        }}
      />
    )

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1)
    })

    expect(onChange).toHaveBeenCalledWith({
      json: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            attrs: { id: expect.any(String) },
            content: [{ type: "text", text: "First paragraph" }],
          },
          {
            type: "paragraph",
            attrs: { id: expect.any(String) },
            content: [{ type: "text", text: "Second paragraph" }],
          },
        ],
      },
      html: expect.stringContaining("First paragraph"),
    })
  })

  it("does not emit onChange on mount when all block ids are already present", async () => {
    const onChange = vi.fn()
    const ref = createRef<NotesTextEditorHandle>()

    zeroRender(
      <NotesTextEditor
        ref={ref}
        onChange={onChange}
        placeholder="Write something"
        onTitleChange={vi.fn()}
        initialEditorState={{
          content: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                attrs: { id: "first-block" },
                content: [{ type: "text", text: "First paragraph" }],
              },
              {
                type: "paragraph",
                attrs: { id: "second-block" },
                content: [{ type: "text", text: "Second paragraph" }],
              },
            ],
          },
        }}
      />
    )

    await waitFor(() => {
      expect(ref.current).not.toBeNull()
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  it("applies a single page-document patch through the imperative handle", async () => {
    const onChange = vi.fn()
    const ref = createRef<NotesTextEditorHandle>()

    zeroRender(
      <NotesTextEditor
        ref={ref}
        onChange={onChange}
        placeholder="Write something"
        onTitleChange={vi.fn()}
        initialEditorState={{
          content: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                attrs: { id: "first-block" },
                content: [{ type: "text", text: "First paragraph" }],
              },
            ],
          },
        }}
      />
    )

    await waitFor(() => {
      expect(ref.current).not.toBeNull()
    })

    let snapshot:
      | ReturnType<NonNullable<NotesTextEditorHandle["applyPageDocumentPatch"]>>
      | undefined

    act(() => {
      snapshot = ref.current?.applyPageDocumentPatch({
        type: "insert_after",
        targetId: "first-block",
        blocks: [
          {
            type: "paragraph",
            attrs: { id: "ai-generated-id" },
            content: [{ type: "text", text: "Inserted through handle" }],
          },
        ],
      })
    })

    expect(snapshot).toBeDefined()
    expect(snapshot?.json).toMatchObject({
      type: "doc",
      content: [
        {
          type: "paragraph",
          attrs: { id: "first-block" },
          content: [{ type: "text", text: "First paragraph" }],
        },
        {
          type: "paragraph",
          content: [{ type: "text", text: "Inserted through handle" }],
        },
      ],
    })
    expect(snapshot?.json?.content?.[1]?.attrs?.id).toEqual(expect.any(String))
    expect(snapshot?.json?.content?.[1]?.attrs?.id).not.toBe("ai-generated-id")
    expect(snapshot?.html).toContain("Inserted through handle")
    expect(onChange).not.toHaveBeenCalled()
  })

  it("resumes normal change notifications after imperative AI patch application", async () => {
    const onChange = vi.fn()
    const ref = createRef<NotesTextEditorHandle>()

    zeroRender(
      <NotesTextEditor
        ref={ref}
        onChange={onChange}
        placeholder="Write something"
        onTitleChange={vi.fn()}
        initialEditorState={{
          content: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                attrs: { id: "first-block" },
                content: [{ type: "text", text: "First paragraph" }],
              },
            ],
          },
        }}
      />
    )

    await waitFor(() => {
      expect(ref.current).not.toBeNull()
    })

    act(() => {
      ref.current?.applyPageDocumentPatch({
        type: "insert_after",
        targetId: "first-block",
        blocks: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Inserted through handle" }],
          },
        ],
      })
    })

    expect(onChange).not.toHaveBeenCalled()

    act(() => {
      ref.current?.pushContent("<p>Manual follow-up</p>")
    })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled()
    })
  })
})
