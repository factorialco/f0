import { Editor } from "@tiptap/react"
import type { JSONContent } from "@tiptap/react"
import { describe, expect, it } from "vitest"

import { BlockIdExtension } from "../CoreEditor/Extensions/BlockIdExtension"
import { StarterKitExtension } from "../CoreEditor/Extensions/StarterKit"
import {
  applyPageDocumentPatch,
  NotesTextEditorPatchTargetNotFoundError,
  NotesTextEditorUnsupportedPatchTypeError,
} from "./applyPageDocumentPatch"

const createEditor = (content?: JSONContent | string) => {
  return new Editor({
    extensions: [StarterKitExtension, BlockIdExtension],
    content: content ?? "",
  })
}

const baseDocument: JSONContent = {
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
}

describe("applyPageDocumentPatch", () => {
  it("prepends top-level blocks without deleting existing empty nodes", () => {
    const editor = createEditor({
      type: "doc",
      content: [{ type: "paragraph" }],
    })

    try {
      const snapshot = applyPageDocumentPatch(editor, {
        type: "top_level_prepend",
        blocks: [
          {
            type: "paragraph",
            attrs: { id: "ai-prepend-id" },
            content: [{ type: "text", text: "Prepended paragraph" }],
          },
        ],
      })

      expect(snapshot.json).toMatchObject({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Prepended paragraph" }],
          },
          {
            type: "paragraph",
          },
        ],
      })
      expect(snapshot.json?.content).toHaveLength(2)
      expect(snapshot.json?.content?.[0]?.attrs?.id).toEqual(expect.any(String))
      expect(snapshot.json?.content?.[0]?.attrs?.id).not.toBe("ai-prepend-id")
      expect(snapshot.html).toContain("Prepended paragraph")
    } finally {
      editor.destroy()
    }
  })

  it("appends top-level blocks without deleting existing empty nodes", () => {
    const editor = createEditor({
      type: "doc",
      content: [{ type: "paragraph" }],
    })

    try {
      const snapshot = applyPageDocumentPatch(editor, {
        type: "top_level_append",
        blocks: [
          {
            type: "paragraph",
            attrs: { id: "ai-append-id" },
            content: [{ type: "text", text: "Appended paragraph" }],
          },
        ],
      })

      expect(snapshot.json).toMatchObject({
        type: "doc",
        content: [
          {
            type: "paragraph",
          },
          {
            type: "paragraph",
            content: [{ type: "text", text: "Appended paragraph" }],
          },
        ],
      })
      expect(snapshot.json?.content).toHaveLength(2)
      expect(snapshot.json?.content?.[1]?.attrs?.id).toEqual(expect.any(String))
      expect(snapshot.json?.content?.[1]?.attrs?.id).not.toBe("ai-append-id")
      expect(snapshot.html).toContain("Appended paragraph")
    } finally {
      editor.destroy()
    }
  })

  it("inserts blocks before a targeted block id and generates fresh ids", () => {
    const editor = createEditor(baseDocument)

    try {
      const snapshot = applyPageDocumentPatch(editor, {
        type: "insert_before",
        targetId: "second-block",
        blocks: [
          {
            type: "paragraph",
            attrs: { id: "ai-before-id" },
            content: [{ type: "text", text: "Inserted before" }],
          },
        ],
      })

      expect(snapshot.json).toMatchObject({
        type: "doc",
        content: [
          {
            type: "paragraph",
            attrs: { id: "first-block" },
            content: [{ type: "text", text: "First paragraph" }],
          },
          {
            type: "paragraph",
            content: [{ type: "text", text: "Inserted before" }],
          },
          {
            type: "paragraph",
            attrs: { id: "second-block" },
            content: [{ type: "text", text: "Second paragraph" }],
          },
        ],
      })
      expect(snapshot.json?.content?.[1]?.attrs?.id).toEqual(expect.any(String))
      expect(snapshot.json?.content?.[1]?.attrs?.id).not.toBe("ai-before-id")
    } finally {
      editor.destroy()
    }
  })

  it("inserts blocks after a targeted block id and generates fresh ids", () => {
    const editor = createEditor(baseDocument)

    try {
      const snapshot = applyPageDocumentPatch(editor, {
        type: "insert_after",
        targetId: "first-block",
        blocks: [
          {
            type: "paragraph",
            attrs: { id: "ai-after-id" },
            content: [{ type: "text", text: "Inserted after" }],
          },
        ],
      })

      expect(snapshot.json).toMatchObject({
        type: "doc",
        content: [
          {
            type: "paragraph",
            attrs: { id: "first-block" },
            content: [{ type: "text", text: "First paragraph" }],
          },
          {
            type: "paragraph",
            content: [{ type: "text", text: "Inserted after" }],
          },
          {
            type: "paragraph",
            attrs: { id: "second-block" },
            content: [{ type: "text", text: "Second paragraph" }],
          },
        ],
      })
      expect(snapshot.json?.content?.[1]?.attrs?.id).toEqual(expect.any(String))
      expect(snapshot.json?.content?.[1]?.attrs?.id).not.toBe("ai-after-id")
    } finally {
      editor.destroy()
    }
  })

  it("replaces a block while preserving the existing target id", () => {
    const editor = createEditor(baseDocument)

    try {
      const snapshot = applyPageDocumentPatch(editor, {
        type: "replace_block",
        targetId: "first-block",
        block: {
          type: "paragraph",
          attrs: { id: "ai-replacement-id" },
          content: [{ type: "text", text: "Replacement paragraph" }],
        },
      })

      expect(snapshot.json).toMatchObject({
        type: "doc",
        content: [
          {
            type: "paragraph",
            attrs: { id: "first-block" },
            content: [{ type: "text", text: "Replacement paragraph" }],
          },
          {
            type: "paragraph",
            attrs: { id: "second-block" },
            content: [{ type: "text", text: "Second paragraph" }],
          },
        ],
      })
      expect(snapshot.json?.content?.[0]?.attrs?.id).toBe("first-block")
      expect(snapshot.json?.content?.[0]?.attrs?.id).not.toBe(
        "ai-replacement-id"
      )
    } finally {
      editor.destroy()
    }
  })

  it("replaces block content while preserving the existing block id", () => {
    const editor = createEditor(baseDocument)

    try {
      const snapshot = applyPageDocumentPatch(editor, {
        type: "replace_content",
        targetId: "first-block",
        content: [{ type: "text", text: "Updated inline content" }],
      })

      expect(snapshot.json).toMatchObject({
        type: "doc",
        content: [
          {
            type: "paragraph",
            attrs: { id: "first-block" },
            content: [{ type: "text", text: "Updated inline content" }],
          },
          {
            type: "paragraph",
            attrs: { id: "second-block" },
            content: [{ type: "text", text: "Second paragraph" }],
          },
        ],
      })
      expect(snapshot.json?.content?.[0]?.attrs?.id).toBe("first-block")
    } finally {
      editor.destroy()
    }
  })

  it("deletes a targeted block", () => {
    const editor = createEditor(baseDocument)

    try {
      const snapshot = applyPageDocumentPatch(editor, {
        type: "delete_block",
        targetId: "first-block",
      })

      expect(snapshot.json).toMatchObject({
        type: "doc",
        content: [
          {
            type: "paragraph",
            attrs: { id: "second-block" },
            content: [{ type: "text", text: "Second paragraph" }],
          },
        ],
      })
      expect(snapshot.json?.content).toHaveLength(1)
    } finally {
      editor.destroy()
    }
  })

  it("throws an explicit target-not-found error for missing block ids", () => {
    const editor = createEditor(baseDocument)

    try {
      expect(() =>
        applyPageDocumentPatch(editor, {
          type: "insert_after",
          targetId: "missing-block",
          blocks: [
            {
              type: "paragraph",
              content: [{ type: "text", text: "Will fail" }],
            },
          ],
        })
      ).toThrowError(NotesTextEditorPatchTargetNotFoundError)

      try {
        applyPageDocumentPatch(editor, {
          type: "replace_block",
          targetId: "missing-block",
          block: {
            type: "paragraph",
            content: [{ type: "text", text: "Will fail" }],
          },
        })
      } catch (error) {
        expect(error).toBeInstanceOf(NotesTextEditorPatchTargetNotFoundError)
        expect(error).toMatchObject({
          code: "target_not_found",
          targetId: "missing-block",
        })
      }
    } finally {
      editor.destroy()
    }
  })

  it("throws an explicit unsupported-patch-type error for invalid runtime patch types", () => {
    const editor = createEditor(baseDocument)

    try {
      let error: unknown

      try {
        applyPageDocumentPatch(editor, {
          type: "unsupported_runtime_patch_type",
        } as unknown as Parameters<typeof applyPageDocumentPatch>[1])
      } catch (caughtError) {
        error = caughtError
      }

      expect(error).toBeInstanceOf(NotesTextEditorUnsupportedPatchTypeError)
      expect(error).toMatchObject({
        code: "unsupported_patch_type",
        patchType: "unsupported_runtime_patch_type",
      })
    } finally {
      editor.destroy()
    }
  })

  it("surfaces raw editor execution failures for invalid insertions", () => {
    const editor = createEditor(baseDocument)

    try {
      let error: unknown

      try {
        applyPageDocumentPatch(editor, {
          type: "top_level_append",
          blocks: [{ type: "unknown_block_type" }],
        })
      } catch (caughtError) {
        error = caughtError
      }

      expect(error).toBeInstanceOf(Error)
      expect(error).not.toBeInstanceOf(NotesTextEditorPatchTargetNotFoundError)
      expect((error as Error).message).not.toContain(
        "Could not find block node"
      )
    } finally {
      editor.destroy()
    }
  })
})
