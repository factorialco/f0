import { describe, expect, it, vi } from "vitest"
import {
  fireEvent,
  screen,
  waitFor,
  within,
  zeroRender as render,
} from "@/testing/test-utils"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

describe("F0AiChatTextArea clipboard attachments", () => {
  it("pastes a screenshot and text into one draft", async () => {
    const onUploadFiles = vi.fn(async (files: File[]) =>
      files.map((file) => ({
        url: `https://example.com/${file.name}`,
        filename: file.name,
        mimetype: file.type,
      }))
    )
    const onSubmit = vi.fn()
    render(
      <F0AiChatTextArea
        onSubmit={onSubmit}
        fileAttachments={{ onUploadFiles }}
      />
    )

    const textarea = screen.getByRole("textbox")
    const image = new File(["image"], "screenshot.png", { type: "image/png" })
    fireEvent.paste(textarea, {
      clipboardData: {
        files: [image],
        getData: (type: string) =>
          type === "text/plain" ? "Please inspect" : "",
      },
    })

    expect(textarea).toHaveValue("Please inspect")
    await waitFor(() =>
      expect(onUploadFiles).toHaveBeenCalledExactlyOnceWith([image])
    )
    fireEvent.click(
      await screen.findByRole("button", { name: /open image.*screenshot.png/i })
    )
    expect(
      screen.getByRole("dialog", { name: "screenshot.png" })
    ).toBeInTheDocument()
    fireEvent.click(
      within(
        screen.getByRole("dialog", { name: "screenshot.png" })
      ).getAllByRole("button", { name: "Close" })[0]
    )
    expect(
      screen.queryByRole("dialog", { name: "screenshot.png" })
    ).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole("button", { name: /send message/i }))
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit.mock.calls[0]?.[0]).toMatchObject({
      text: "Please inspect",
      files: [{ filename: "screenshot.png", mimetype: "image/png" }],
    })
  })
})
