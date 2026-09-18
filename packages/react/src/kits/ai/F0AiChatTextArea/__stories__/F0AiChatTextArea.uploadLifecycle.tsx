import { useRef, useState } from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"
import type { AiChatFileIntake } from "../../F0AiChat/types"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

export const partialUploadRecoveryStory = {
  render: () => {
    const intake = useRef<AiChatFileIntake | null>(null)
    const composer = useRef<HTMLDivElement>(null)
    const failed = useRef(false)
    const [attempts, setAttempts] = useState<string[]>([])
    return (
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() =>
            void intake
              .current?.([
                new globalThis.File(["good"], "good.pdf", {
                  type: "application/pdf",
                }),
                new globalThis.File(["retry"], "retry.pdf", {
                  type: "application/pdf",
                }),
              ])
              .catch(() => undefined)
          }
        >
          Prepare two files
        </button>
        <output aria-label="Upload attempts">{attempts.join(", ")}</output>
        <F0AiChatTextArea
          ref={composer}
          onStop={() => {}}
          onSubmit={() => {}}
          onProcessFilesRef={(handler) => {
            intake.current = handler
          }}
          fileAttachments={{
            onUploadFiles: async (files) => {
              setAttempts((current) => [...current, files[0].name])
              if (files[0].name === "retry.pdf" && !failed.current) {
                failed.current = true
                throw new Error("Offline")
              }
              return files.map((file) => ({
                url: "https://example.com/" + file.name,
                filename: file.name,
                mimetype: file.type,
              }))
            },
          }}
        />
      </div>
    )
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(
      canvas.getByRole("button", { name: "Prepare two files" })
    )
    const retry = await canvas.findByRole("button", {
      name: /retry.*retry.pdf/i,
    })
    await userEvent.click(retry)
    await waitFor(() =>
      expect(canvas.getByLabelText("Upload attempts")).toHaveTextContent(
        "good.pdf, retry.pdf, retry.pdf"
      )
    )
    await waitFor(() =>
      expect(
        canvas.queryByRole("button", { name: /retry.*retry.pdf/i })
      ).not.toBeInTheDocument()
    )
  },
}

export const preparedFileIntakeStory = {
  render: () => {
    const intake = useRef<AiChatFileIntake | null>(null)
    const composer = useRef<HTMLDivElement>(null)
    const file = useRef(
      new globalThis.File(["prepared"], "prepared.pdf", {
        type: "application/pdf",
      })
    )
    const [accepted, setAccepted] = useState(false)
    return (
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() =>
            void intake
              .current?.([file.current], {
                preparedFiles: [
                  {
                    url: "https://example.com/prepared.pdf",
                    filename: "prepared.pdf",
                    mimetype: "application/pdf",
                  },
                ],
                onPrepared: () => {
                  setAccepted(true)
                  return accepted
                },
              })
              .catch(() => undefined)
          }
        >
          {accepted ? "Accept prepared file" : "Adopt prepared file"}
        </button>
        <F0AiChatTextArea
          ref={composer}
          onStop={() => {}}
          onSubmit={() => {}}
          onProcessFilesRef={(handler) => {
            intake.current = handler
          }}
          fileAttachments={{
            onUploadFiles: async () => {
              throw new Error("Adoption must not upload")
            },
          }}
        />
      </div>
    )
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(
      canvas.getByRole("button", { name: "Adopt prepared file" })
    )
    await canvas.findByText("prepared.pdf")
    await userEvent.click(
      canvas.getByRole("button", { name: "Accept prepared file" })
    )
    await waitFor(() =>
      expect(canvas.queryByText("prepared.pdf")).not.toBeInTheDocument()
    )
  },
}
