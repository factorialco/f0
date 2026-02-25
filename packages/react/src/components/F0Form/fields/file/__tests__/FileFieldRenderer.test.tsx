import React from "react"
import {
  zeroRender as render,
  screen,
  waitFor,
  fireEvent,
} from "@/testing/test-utils"
import { describe, expect, it, vi } from "vitest"
import { z } from "zod"
import userEvent from "@testing-library/user-event"

import { F0Form } from "../../../F0Form"
import { f0FormField } from "../../../f0Schema"
import type {
  FileUploadResult,
  FileUploadStatus,
  UseFileUpload,
} from "../types"

function createMockUploadHook(
  options: {
    delay?: number
    shouldFail?: boolean
  } = {}
): UseFileUpload {
  const { delay = 0, shouldFail = false } = options

  return () => {
    const [progress, setProgress] = React.useState(0)
    const [status, setStatus] = React.useState<FileUploadStatus>("idle")

    const upload = React.useCallback(
      async (file: File): Promise<FileUploadResult> => {
        setStatus("processing")
        setProgress(0)

        if (delay > 0) {
          await new Promise((r) => setTimeout(r, delay))
        }

        if (shouldFail) {
          setStatus("idle")
          throw new Error("Upload failed")
        }

        setStatus("uploading")
        setProgress(0.5)

        if (delay > 0) {
          await new Promise((r) => setTimeout(r, delay))
        }

        setProgress(1)
        setStatus("success")
        return { type: "success", value: `signed_${file.name}` }
      },
      [delay, shouldFail]
    )

    const cancelUpload = React.useCallback(() => {
      setStatus("idle")
      setProgress(0)
    }, [])

    return { upload, cancelUpload, progress, status }
  }
}

function createFile(
  name: string,
  size: number = 1024,
  type: string = "application/pdf"
): File {
  const content = new Uint8Array(size)
  return new File([content], name, { type })
}

describe("FileFieldRenderer", () => {
  it("renders a dropzone with default text", () => {
    const schema = z.object({
      file: f0FormField(z.string().optional(), {
        label: "Document",
        fieldType: "file",
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-file"
        schema={schema}
        defaultValues={{ file: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByText("Document")).toBeInTheDocument()
    expect(
      screen.getByText("Drag and drop a file, or click to select")
    ).toBeInTheDocument()
  })

  it("renders custom description text", () => {
    const schema = z.object({
      file: f0FormField(z.string().optional(), {
        label: "Photo",
        fieldType: "file",
        description: "Upload a photo (max 5 MB)",
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-file-desc"
        schema={schema}
        defaultValues={{ file: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByText("Upload a photo (max 5 MB)")).toBeInTheDocument()
  })

  it("renders multiple file dropzone text", () => {
    const schema = z.object({
      files: f0FormField(z.array(z.string()), {
        label: "Attachments",
        fieldType: "file",
        multiple: true,
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-multi-file"
        schema={schema}
        defaultValues={{ files: [] }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(
      screen.getByText("Drag and drop files, or click to select")
    ).toBeInTheDocument()
  })

  it("uploads a file and sets the form value", async () => {
    const onSubmit = vi.fn(async () => ({ success: true }))

    const schema = z.object({
      file: f0FormField(z.string().min(1), {
        label: "Document",
        fieldType: "file",
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-upload"
        schema={schema}
        defaultValues={{ file: "" }}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement
    expect(input).toBeTruthy()

    const file = createFile("test.pdf")
    await userEvent.upload(input, file)

    // Wait for the file name to appear (upload complete)
    await waitFor(() => {
      expect(screen.getByText("test.pdf")).toBeInTheDocument()
    })

    // Submit the form
    const submitButton = screen.getByText("Save")
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          file: "signed_test.pdf",
        })
      )
    })
  })

  it("shows accepted file types in the dropzone", () => {
    const schema = z.object({
      file: f0FormField(z.string().optional(), {
        label: "Document",
        fieldType: "file",
        accept: ["application/pdf", "image/jpeg", "image/png"],
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-accepted-types"
        schema={schema}
        defaultValues={{ file: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(
      screen.getByText("Accepted formats: PDF, JPEG, PNG")
    ).toBeInTheDocument()
  })

  it("shows accepted types in file type validation error on drag-and-drop", async () => {
    const schema = z.object({
      file: f0FormField(z.string().optional(), {
        label: "Photo Only",
        fieldType: "file",
        accept: ["image/jpeg", "image/png"],
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-type-validation"
        schema={schema}
        defaultValues={{ file: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Drag-and-drop bypasses the <input accept> filter, so our
    // client-side validateFile runs and rejects the wrong type.
    const dropzone = screen.getByRole("button", {
      name: /drag and drop/i,
    })
    const pdfFile = createFile("doc.pdf", 1024, "application/pdf")

    const dataTransfer = {
      files: [pdfFile],
      types: ["Files"],
    }

    fireEvent.dragOver(dropzone, { dataTransfer })
    fireEvent.drop(dropzone, { dataTransfer })

    await waitFor(() => {
      expect(
        screen.getByText("File type not accepted. Accepted formats: JPEG, PNG")
      ).toBeInTheDocument()
    })
  })

  it("shows file size validation error", async () => {
    const schema = z.object({
      file: f0FormField(z.string().optional(), {
        label: "Small File",
        fieldType: "file",
        maxSizeMB: 0.001, // ~1 KB
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-size-validation"
        schema={schema}
        defaultValues={{ file: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement
    const largeFile = createFile("large.pdf", 10 * 1024) // 10 KB

    await userEvent.upload(input, largeFile)

    await waitFor(() => {
      expect(
        screen.getByText("File exceeds 0.001 MB limit")
      ).toBeInTheDocument()
    })
  })

  it("shows upload failure error", async () => {
    const schema = z.object({
      file: f0FormField(z.string().optional(), {
        label: "Failing Upload",
        fieldType: "file",
        useUpload: createMockUploadHook({ shouldFail: true }),
      }),
    })

    render(
      <F0Form
        name="test-fail"
        schema={schema}
        defaultValues={{ file: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement
    const file = createFile("fail.pdf")

    await userEvent.upload(input, file)

    await waitFor(() => {
      expect(screen.getByText("Upload failed")).toBeInTheDocument()
    })
  })

  it("removes an uploaded file", async () => {
    const schema = z.object({
      file: f0FormField(z.string().optional(), {
        label: "Removable",
        fieldType: "file",
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-remove"
        schema={schema}
        defaultValues={{ file: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement
    const file = createFile("remove-me.pdf")

    await userEvent.upload(input, file)

    await waitFor(() => {
      expect(screen.getByText("remove-me.pdf")).toBeInTheDocument()
    })

    const removeButton = screen.getByLabelText("Remove")
    await userEvent.click(removeButton)

    await waitFor(() => {
      expect(screen.queryByText("remove-me.pdf")).not.toBeInTheDocument()
    })

    // Dropzone should reappear
    expect(
      screen.getByText("Drag and drop a file, or click to select")
    ).toBeInTheDocument()
  })

  it("renders disabled state", () => {
    const schema = z.object({
      file: f0FormField(z.string().optional(), {
        label: "Disabled File",
        fieldType: "file",
        disabled: true,
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-disabled"
        schema={schema}
        defaultValues={{ file: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    const dropzone = screen.getByRole("button", {
      name: /drag and drop/i,
    })
    expect(dropzone).toHaveAttribute("aria-disabled", "true")
  })

  it("renders a single initial file without uploading", () => {
    const schema = z.object({
      file: f0FormField(z.string().min(1), {
        label: "Contract",
        fieldType: "file",
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-initial-single"
        schema={schema}
        defaultValues={{ file: "existing_contract.pdf" }}
        initialFiles={[
          {
            value: "existing_contract.pdf",
            name: "contract_2024.pdf",
            type: "application/pdf",
            size: 2_500_000,
          },
        ]}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByText("contract_2024.pdf")).toBeInTheDocument()
    expect(screen.getByText("2.4 MB")).toBeInTheDocument()

    expect(
      screen.queryByText("Drag and drop a file, or click to select")
    ).not.toBeInTheDocument()
  })

  it("removes a single initial file and restores the dropzone", async () => {
    const onSubmit = vi.fn(async () => ({ success: true }))

    const schema = z.object({
      file: f0FormField(z.string().optional(), {
        label: "Contract",
        fieldType: "file",
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-initial-remove"
        schema={schema}
        defaultValues={{ file: "existing_contract.pdf" }}
        initialFiles={[
          {
            value: "existing_contract.pdf",
            name: "contract_2024.pdf",
            type: "application/pdf",
            size: 2_500_000,
          },
        ]}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    expect(screen.getByText("contract_2024.pdf")).toBeInTheDocument()

    const removeButton = screen.getByLabelText("Remove")
    await userEvent.click(removeButton)

    await waitFor(() => {
      expect(screen.queryByText("contract_2024.pdf")).not.toBeInTheDocument()
    })

    await waitFor(() => {
      expect(
        screen.getByText("Drag and drop a file, or click to select")
      ).toBeInTheDocument()
    })
  })

  it("renders multiple initial files with dropzone still visible", () => {
    const schema = z.object({
      files: f0FormField(z.array(z.string()), {
        label: "Attachments",
        fieldType: "file",
        multiple: true,
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-initial-multi"
        schema={schema}
        defaultValues={{ files: ["invoice_id", "receipt_id"] }}
        initialFiles={[
          {
            value: "invoice_id",
            name: "invoice.pdf",
            type: "application/pdf",
            size: 1_200_000,
          },
          {
            value: "receipt_id",
            name: "receipt.png",
            type: "image/png",
            size: 850_000,
          },
        ]}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByText("invoice.pdf")).toBeInTheDocument()
    expect(screen.getByText("receipt.png")).toBeInTheDocument()

    expect(
      screen.getByText("Drag and drop files, or click to select")
    ).toBeInTheDocument()
  })

  it("removes one initial file from a multi-file field and submits the rest", async () => {
    const onSubmit = vi.fn(async () => ({ success: true }))

    const schema = z.object({
      files: f0FormField(z.array(z.string()), {
        label: "Attachments",
        fieldType: "file",
        multiple: true,
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-initial-multi-remove"
        schema={schema}
        defaultValues={{ files: ["invoice_id", "receipt_id"] }}
        initialFiles={[
          {
            value: "invoice_id",
            name: "invoice.pdf",
            type: "application/pdf",
            size: 1_200_000,
          },
          {
            value: "receipt_id",
            name: "receipt.png",
            type: "image/png",
            size: 850_000,
          },
        ]}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    expect(screen.getByText("invoice.pdf")).toBeInTheDocument()
    expect(screen.getByText("receipt.png")).toBeInTheDocument()

    const removeButtons = screen.getAllByLabelText("Remove")
    await userEvent.click(removeButtons[0])

    await waitFor(() => {
      expect(screen.queryByText("invoice.pdf")).not.toBeInTheDocument()
    })

    expect(screen.getByText("receipt.png")).toBeInTheDocument()

    const submitButton = screen.getByText("Save")
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          files: ["receipt_id"],
        })
      )
    })
  })

  it("submits initial file values without re-uploading", async () => {
    const onSubmit = vi.fn(async () => ({ success: true }))

    const schema = z.object({
      file: f0FormField(z.string().min(1), {
        label: "Document",
        fieldType: "file",
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-initial-submit"
        schema={schema}
        defaultValues={{ file: "https://cdn.example.com/contract.pdf" }}
        initialFiles={[
          {
            value: "https://cdn.example.com/contract.pdf",
            name: "contract.pdf",
            type: "application/pdf",
          },
        ]}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    expect(screen.getByText("contract.pdf")).toBeInTheDocument()

    const submitButton = screen.getByText("Save")
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          file: "https://cdn.example.com/contract.pdf",
        })
      )
    })
  })

  it("handles multiple file uploads", async () => {
    const onSubmit = vi.fn(async () => ({ success: true }))

    const schema = z.object({
      files: f0FormField(z.array(z.string()), {
        label: "Multi Files",
        fieldType: "file",
        multiple: true,
        useUpload: createMockUploadHook(),
      }),
    })

    render(
      <F0Form
        name="test-multi-upload"
        schema={schema}
        defaultValues={{ files: [] }}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement

    const file1 = createFile("doc1.pdf")
    const file2 = createFile("doc2.pdf")

    await userEvent.upload(input, file1)

    await waitFor(() => {
      expect(screen.getByText("doc1.pdf")).toBeInTheDocument()
    })

    await userEvent.upload(input, file2)

    await waitFor(() => {
      expect(screen.getByText("doc2.pdf")).toBeInTheDocument()
    })

    // Both files should be visible
    expect(screen.getByText("doc1.pdf")).toBeInTheDocument()
    expect(screen.getByText("doc2.pdf")).toBeInTheDocument()

    // Dropzone should still be visible in multiple mode
    expect(
      screen.getByText("Drag and drop files, or click to select")
    ).toBeInTheDocument()
  })
})
