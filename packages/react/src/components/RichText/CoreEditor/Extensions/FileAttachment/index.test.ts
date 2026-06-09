import { Editor } from "@tiptap/core"
import { Node as ProseMirrorNode } from "@tiptap/pm/model"
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest"

import { StarterKitExtension } from "../StarterKit"
import {
  FileAttachmentExtension,
  FileUploadConfig,
  insertFileFromFile,
  isSafeAttachmentUrl,
} from "./index"

// jsdom does not implement object URLs, which the optimistic insert relies on.
beforeAll(() => {
  URL.createObjectURL = vi.fn(() => "blob:mock-preview")
  URL.revokeObjectURL = vi.fn()
})

const editors: Editor[] = []

afterEach(() => {
  editors.forEach((editor) => editor.destroy())
  editors.length = 0
  vi.clearAllMocks()
})

const createEditor = () => {
  const editor = new Editor({
    extensions: [StarterKitExtension, FileAttachmentExtension],
    content: "<p></p>",
  })

  editors.push(editor)

  return editor
}

const createPdfFile = (name = "report.pdf", content = "pdf-bytes") =>
  new File([content], name, { type: "application/pdf" })

const findAttachments = (editor: Editor) => {
  const found: { node: ProseMirrorNode; pos: number }[] = []
  editor.state.doc.descendants((node, pos) => {
    if (node.type.name === "fileAttachment") {
      found.push({ node, pos })
    }
  })
  return found
}

const deferred = <T>() => {
  let resolve!: (value: T) => void
  let reject!: (reason?: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

describe("isSafeAttachmentUrl", () => {
  it("allows http, https and blob URLs", () => {
    expect(isSafeAttachmentUrl("https://example.com/doc.pdf")).toBe(true)
    expect(isSafeAttachmentUrl("http://example.com/doc.pdf")).toBe(true)
    expect(isSafeAttachmentUrl("blob:https://example.com/abc-123")).toBe(true)
  })

  it("rejects script-capable and other unexpected schemes", () => {
    expect(isSafeAttachmentUrl("javascript:alert(1)")).toBe(false)
    // eslint-disable-next-line no-script-url
    expect(isSafeAttachmentUrl("JavaScript:alert(1)")).toBe(false)
    expect(
      isSafeAttachmentUrl("data:text/html,<script>alert(1)</script>")
    ).toBe(false)
    expect(isSafeAttachmentUrl("vbscript:msgbox(1)")).toBe(false)
    expect(isSafeAttachmentUrl("file:///etc/passwd")).toBe(false)
  })

  it("allows relative URLs (they resolve against the app origin)", () => {
    expect(isSafeAttachmentUrl("/files/doc.pdf")).toBe(true)
  })
})

describe("insertFileFromFile", () => {
  describe("validation", () => {
    it("reports invalid-type and inserts nothing for a rejected mime type", async () => {
      const editor = createEditor()
      const onUpload = vi.fn()
      const onError = vi.fn()

      await insertFileFromFile(
        editor,
        new File(["zip-bytes"], "archive.zip", { type: "application/zip" }),
        { onUpload, onError }
      )

      expect(onError).toHaveBeenCalledWith("invalid-type")
      expect(onUpload).not.toHaveBeenCalled()
      expect(findAttachments(editor)).toHaveLength(0)
    })

    it("reports file-too-large and inserts nothing when over maxFileSize", async () => {
      const editor = createEditor()
      const onUpload = vi.fn()
      const onError = vi.fn()

      await insertFileFromFile(editor, createPdfFile(), {
        onUpload,
        onError,
        maxFileSize: 1,
      })

      expect(onError).toHaveBeenCalledWith("file-too-large")
      expect(onUpload).not.toHaveBeenCalled()
      expect(findAttachments(editor)).toHaveLength(0)
    })

    it("respects a custom acceptedTypes allowlist", async () => {
      const editor = createEditor()
      const onUpload = vi.fn()
      const onError = vi.fn()

      await insertFileFromFile(editor, createPdfFile(), {
        onUpload,
        onError,
        acceptedTypes: ["text/plain"],
      })

      expect(onError).toHaveBeenCalledWith("invalid-type")
      expect(findAttachments(editor)).toHaveLength(0)
    })
  })

  describe("upload reconciliation", () => {
    it("optimistically inserts an uploading node, then swaps in the uploaded URL", async () => {
      const editor = createEditor()
      const upload = deferred<{ url: string; signedId?: string }>()
      const config: FileUploadConfig = {
        onUpload: vi.fn(() => upload.promise),
      }

      const result = insertFileFromFile(editor, createPdfFile(), config)

      // Insert is synchronous: the node is already in the doc, marked uploading.
      const [pending] = findAttachments(editor)
      expect(pending).toBeDefined()
      expect(pending.node.attrs.uploading).toBe(true)
      expect(pending.node.attrs.filename).toBe("report.pdf")
      expect(pending.node.attrs.mimeType).toBe("application/pdf")
      expect(pending.node.attrs["data-upload-id"]).toBeTruthy()

      upload.resolve({
        url: "https://cdn.example.com/report.pdf",
        signedId: "signed-123",
      })
      await result

      const [settled] = findAttachments(editor)
      expect(settled.node.attrs).toMatchObject({
        src: "https://cdn.example.com/report.pdf",
        signedId: "signed-123",
        uploading: false,
        "data-upload-id": null,
      })
    })

    it("stores a null signedId when the consumer omits it", async () => {
      const editor = createEditor()

      await insertFileFromFile(editor, createPdfFile(), {
        onUpload: vi.fn(async () => ({ url: "https://cdn.example.com/a.pdf" })),
      })

      const [settled] = findAttachments(editor)
      expect(settled.node.attrs.signedId).toBeNull()
    })

    it("reconciles by upload id, not position, when content shifts during upload", async () => {
      const editor = createEditor()
      const upload = deferred<{ url: string; signedId?: string }>()

      const result = insertFileFromFile(editor, createPdfFile(), {
        onUpload: vi.fn(() => upload.promise),
      })

      // Content typed above the attachment moves its position mid-upload.
      editor.commands.insertContentAt(0, "<p>typed while uploading</p>")

      upload.resolve({ url: "https://cdn.example.com/report.pdf" })
      await result

      const [settled] = findAttachments(editor)
      expect(settled.node.attrs.src).toBe("https://cdn.example.com/report.pdf")
      expect(settled.node.attrs.uploading).toBe(false)
    })

    it("removes the node and reports upload-failed when the upload rejects", async () => {
      const editor = createEditor()
      const onError = vi.fn()

      await insertFileFromFile(editor, createPdfFile(), {
        onUpload: vi.fn(async () => {
          throw new Error("network down")
        }),
        onError,
      })

      expect(onError).toHaveBeenCalledWith("upload-failed")
      expect(findAttachments(editor)).toHaveLength(0)
    })

    it("does nothing when the node was deleted mid-upload", async () => {
      const editor = createEditor()
      const upload = deferred<{ url: string; signedId?: string }>()

      const result = insertFileFromFile(editor, createPdfFile(), {
        onUpload: vi.fn(() => upload.promise),
      })

      const [pending] = findAttachments(editor)
      editor.commands.deleteRange({
        from: pending.pos,
        to: pending.pos + pending.node.nodeSize,
      })

      upload.resolve({ url: "https://cdn.example.com/report.pdf" })
      await expect(result).resolves.toBeUndefined()

      expect(findAttachments(editor)).toHaveLength(0)
    })
  })
})
