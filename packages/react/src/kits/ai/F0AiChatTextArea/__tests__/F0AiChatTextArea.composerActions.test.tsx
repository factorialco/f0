import { userEvent } from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { Link, Sparkles } from "@/icons/app"
import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"
import type { AiChatComposerAction } from "../../F0AiChat/types"

const recorderState = vi.hoisted(() => ({
  status: "idle" as "idle" | "recording" | "transcribing",
}))

vi.mock("../useAudioRecorder", () => ({
  useAudioRecorder: () => ({
    status: recorderState.status,
    stream: null,
    isSupported: false,
    start: vi.fn(),
    stop: vi.fn(),
    cancel: vi.fn(),
  }),
}))

import { F0AiChatTextArea } from "../F0AiChatTextArea"

const fileAttachments = { onUploadFiles: vi.fn(async () => []) }

const actions: AiChatComposerAction[] = [
  { id: "connectors", label: "Connectors", icon: Link, onClick: vi.fn() },
  { id: "prompts", label: "Saved prompts", icon: Sparkles, onClick: vi.fn() },
]

const openMenu = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("button", { name: /add to message/i }))
  return screen.findByRole("menu")
}

describe("F0AiChatTextArea composerActions", () => {
  beforeEach(() => {
    recorderState.status = "idle"
  })

  it("keeps the paperclip when no actions are passed", () => {
    render(
      <F0AiChatTextArea onSubmit={vi.fn()} fileAttachments={fileAttachments} />
    )

    expect(
      screen.getByRole("button", { name: /attach file/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /add to message/i })
    ).not.toBeInTheDocument()
  })

  it("keeps the paperclip when the actions array is empty", () => {
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        fileAttachments={fileAttachments}
        composerActions={[]}
      />
    )

    expect(
      screen.getByRole("button", { name: /attach file/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /add to message/i })
    ).not.toBeInTheDocument()
  })

  it("replaces the paperclip with a menu that lists attaching first", async () => {
    const user = userEvent.setup()
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        fileAttachments={fileAttachments}
        composerActions={actions}
      />
    )

    expect(
      screen.queryByRole("button", { name: /attach file/i })
    ).not.toBeInTheDocument()

    const trigger = screen.getByRole("button", { name: /add to message/i })
    expect(trigger).toHaveAttribute("aria-haspopup", "menu")
    expect(trigger).toHaveAttribute("aria-expanded", "false")

    await openMenu(user)

    expect(trigger).toHaveAttribute("aria-expanded", "true")

    const items = screen.getAllByRole("menuitem")
    expect(items.map((item) => item.textContent)).toEqual([
      "Attach file",
      "Connectors",
      "Saved prompts",
    ])
  })

  it("opens the file picker from the attach entry", async () => {
    const user = userEvent.setup()
    const { container } = render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        fileAttachments={fileAttachments}
        composerActions={actions}
      />
    )

    const input =
      container.querySelector<HTMLInputElement>('input[type="file"]')
    expect(input).not.toBeNull()
    const click = vi.spyOn(input!, "click")

    await openMenu(user)
    await user.click(screen.getByRole("menuitem", { name: "Attach file" }))

    // The dropdown defers item callbacks to let its close animation settle.
    await waitFor(() => expect(click).toHaveBeenCalledTimes(1))
  })

  // The feature's core promise: attaching is not lost when the paperclip goes,
  // so the menu route must reach the SAME upload pipeline, not just the input.
  it("uploads a file picked through the menu entry", async () => {
    const user = userEvent.setup()
    const onUploadFiles = vi.fn(async () => [])
    const file = new File(["receipt"], "receipt.pdf", {
      type: "application/pdf",
    })

    const { container } = render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        fileAttachments={{ onUploadFiles }}
        composerActions={actions}
      />
    )

    await openMenu(user)
    await user.click(screen.getByRole("menuitem", { name: "Attach file" }))

    // The input is `display: none`, so userEvent's click-then-upload refuses it;
    // the picker is what the menu entry opens, and this is its result landing.
    fireEvent.change(
      container.querySelector<HTMLInputElement>('input[type="file"]')!,
      { target: { files: [file] } }
    )

    await waitFor(() => expect(onUploadFiles).toHaveBeenCalledWith([file]))
  })

  it("fires a host action's onClick", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        fileAttachments={fileAttachments}
        composerActions={[{ id: "connectors", label: "Connectors", onClick }]}
      />
    )

    await openMenu(user)
    await user.click(screen.getByRole("menuitem", { name: "Connectors" }))

    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
  })

  it("omits the attach entry when attachments are not configured", async () => {
    const user = userEvent.setup()
    const { container } = render(
      <F0AiChatTextArea onSubmit={vi.fn()} composerActions={actions} />
    )

    expect(container.querySelector('input[type="file"]')).toBeNull()

    await openMenu(user)

    expect(
      screen.queryByRole("menuitem", { name: "Attach file" })
    ).not.toBeInTheDocument()
    expect(screen.getAllByRole("menuitem")).toHaveLength(2)
  })

  it("disables only the attach entry once maxFiles is reached", async () => {
    const user = userEvent.setup()
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        // maxFiles 0 puts the composer at the cap with no upload to stage.
        fileAttachments={{ ...fileAttachments, maxFiles: 0 }}
        composerActions={actions}
      />
    )

    await openMenu(user)

    expect(
      screen.getByRole("menuitem", { name: "Attach file" })
    ).toHaveAttribute("aria-disabled", "true")
    expect(
      screen.getByRole("menuitem", { name: "Connectors" })
    ).not.toHaveAttribute("aria-disabled", "true")
  })

  // Guards the reason the stopPropagation wrapper exists: without it the form's
  // click-to-focus-the-textarea handler pulls focus out of the menu the instant
  // it opens, and neither arrow keys nor Escape-restores-focus would work.
  it("opens and closes by keyboard, returning focus to the trigger", async () => {
    const user = userEvent.setup()
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        fileAttachments={fileAttachments}
        composerActions={actions}
      />
    )

    const trigger = screen.getByRole("button", { name: /add to message/i })
    trigger.focus()
    await user.keyboard("{Enter}")

    await screen.findByRole("menu")

    await user.keyboard("{Escape}")

    await waitFor(() => expect(trigger).toHaveFocus())
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("lets a host switch its own action off", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        fileAttachments={fileAttachments}
        composerActions={[
          {
            id: "screenshot",
            label: "Capture screen",
            description: "Needs the desktop app",
            disabled: true,
            disabledTooltip: "Screen capture needs the desktop app",
            onClick,
          },
        ]}
      />
    )

    await openMenu(user)

    const item = screen.getByRole("menuitem", { name: /Capture screen/ })
    expect(item).toHaveAttribute("aria-disabled", "true")
    expect(item).toHaveTextContent("Needs the desktop app")
  })

  // The one disabled state that differs in KIND from the paperclip's: reaching
  // maxFiles no longer kills the trigger, but transcribing still does — nothing
  // in the composer is actionable while a transcript is landing.
  it("kills the whole trigger while transcribing", async () => {
    const user = userEvent.setup()
    recorderState.status = "transcribing"

    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        onTranscribe={vi.fn()}
        fileAttachments={fileAttachments}
        composerActions={actions}
      />
    )

    const trigger = screen.getByRole("button", { name: /add to message/i })
    expect(trigger).toHaveAttribute("aria-disabled", "true")

    await user.click(trigger)

    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })
})
