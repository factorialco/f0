import { useState } from "react"
import { describe, expect, it, vi } from "vitest"
import { F0FormField } from "@/patterns/F0FormField"
import {
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"
import type { F0Field } from "../../types"
import type { F0FieldRequestChange } from "../types"

function fieldWith(requestChange: F0FieldRequestChange): F0Field {
  return {
    id: "contractStart",
    type: "text",
    label: "Contract start date",
    inline: { readonly: true, requestChange },
  }
}

function Row({ field }: { field: F0Field }) {
  const [value, setValue] = useState<unknown>("01 Jan 2024")
  return (
    <F0FormField field={field as never} value={value} onChange={setValue} />
  )
}

const openDialog = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(
    screen.getByRole("button", {
      name: "Request a change to Contract start date",
    })
  )
  return screen.findByRole("dialog")
}

describe("requesting a change", () => {
  it("offers the ask to a reader who cannot change the value", () => {
    render(<Row field={fieldWith({ onSubmit: vi.fn() })} />)

    expect(
      screen.getByRole("button", {
        name: "Request a change to Contract start date",
      })
    ).toBeInTheDocument()
  })

  it("shows the value the request is measured against", async () => {
    const user = userEvent.setup()
    render(<Row field={fieldWith({ onSubmit: vi.fn() })} />)

    const dialog = await openDialog(user)

    expect(dialog).toHaveTextContent("It says now")
    expect(dialog).toHaveTextContent("01 Jan 2024")
  })

  it("holds the request back until it says something new", async () => {
    const user = userEvent.setup()
    render(<Row field={fieldWith({ onSubmit: vi.fn() })} />)

    await openDialog(user)
    const send = screen.getByRole("button", { name: "Send request" })
    expect(send).toBeDisabled()

    const newValue = screen.getByRole("textbox", { name: "It should say" })
    await user.type(newValue, "01 Jan 2024")
    expect(send).toBeDisabled()

    await user.clear(newValue)
    await user.type(newValue, "01 Feb 2024")
    expect(send).toBeEnabled()
  })

  it("sends what was asked for, and why", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<Row field={fieldWith({ onSubmit })} />)

    await openDialog(user)
    await user.type(
      screen.getByRole("textbox", { name: "It should say" }),
      "01 Feb 2024"
    )
    await user.type(
      screen.getByRole("textbox", { name: "Why (optional)" }),
      "The contract was re-signed"
    )
    await user.click(screen.getByRole("button", { name: "Send request" }))

    expect(onSubmit).toHaveBeenCalledWith({
      from: "01 Jan 2024",
      to: "01 Feb 2024",
      reason: "The contract was re-signed",
    })
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    )
  })

  it("leaves the reason out when there is none", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<Row field={fieldWith({ onSubmit })} />)

    await openDialog(user)
    await user.type(
      screen.getByRole("textbox", { name: "It should say" }),
      "01 Feb 2024"
    )
    await user.click(screen.getByRole("button", { name: "Send request" }))

    expect(onSubmit).toHaveBeenCalledWith({
      from: "01 Jan 2024",
      to: "01 Feb 2024",
      reason: undefined,
    })
  })

  describe("a request already on the record", () => {
    const pending = { id: "req-1", to: "01 Feb 2024" }

    it("says what was asked for, under the value", () => {
      render(<Row field={fieldWith({ onSubmit: vi.fn(), pending })} />)

      expect(screen.getByText("Requested: 01 Feb 2024")).toBeInTheDocument()
    })

    it("takes the ask away, because there is one already", () => {
      render(<Row field={fieldWith({ onSubmit: vi.fn(), pending })} />)

      expect(
        screen.queryByRole("button", {
          name: "Request a change to Contract start date",
        })
      ).not.toBeInTheDocument()
    })

    it("lets whoever asked take it back", async () => {
      const user = userEvent.setup()
      const onCancel = vi.fn()
      render(
        <Row field={fieldWith({ onSubmit: vi.fn(), pending, onCancel })} />
      )

      await user.click(screen.getByRole("button", { name: "Cancel" }))

      expect(onCancel).toHaveBeenCalledWith("req-1")
    })

    it("offers no answer here — approving lives where approvals already live", () => {
      render(
        <Row
          field={fieldWith({ onSubmit: vi.fn(), pending, onCancel: vi.fn() })}
        />
      )

      expect(
        screen.queryByRole("button", { name: "Approve" })
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "Decline" })
      ).not.toBeInTheDocument()
    })

    it("says what is pending without a withdrawal nobody can make", () => {
      render(<Row field={fieldWith({ onSubmit: vi.fn(), pending })} />)

      expect(screen.getByText("Requested: 01 Feb 2024")).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "Cancel" })
      ).not.toBeInTheDocument()
    })
  })
})
