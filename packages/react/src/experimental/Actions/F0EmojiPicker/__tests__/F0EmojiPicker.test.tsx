import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0EmojiPicker } from "../index"

vi.mock("@/lib/EmojiPicker", () => ({
  EmojiPicker: ({
    locale,
    onEmojiSelect,
  }: {
    locale?: string
    onEmojiSelect?: (emoji: { native: string }) => void
  }) => (
    <>
      <button
        type="button"
        data-locale={locale}
        onClick={() => onEmojiSelect?.({ native: "🎉" })}
      >
        Select celebration
      </button>
      <button type="button" onClick={() => onEmojiSelect?.({ native: "👨‍👩‍👧‍👦" })}>
        Select family
      </button>
    </>
  ),
}))

describe("F0EmojiPicker", () => {
  it("renders the Reaction fallback with an accessible label", () => {
    const { container } = render(<F0EmojiPicker label="Choose group emoji" />)

    const trigger = screen.getByRole("button", { name: "Choose group emoji" })

    expect(trigger).toHaveAttribute("type", "button")
    expect(trigger).toHaveAttribute("title", "Choose group emoji")
    expect(container.querySelector("svg")).toBeInTheDocument()
    expect(container.querySelector("img")).not.toBeInTheDocument()
  })

  it("stores and displays the selected emoji when uncontrolled", async () => {
    const user = userEvent.setup()
    const { container } = render(<F0EmojiPicker label="Choose group emoji" />)

    await user.click(screen.getByRole("button", { name: "Choose group emoji" }))
    await user.click(screen.getByRole("button", { name: "Select celebration" }))

    expect(container.querySelector("img")).toHaveAttribute(
      "src",
      expect.stringContaining("1f389")
    )
    expect(
      screen.queryByRole("button", { name: "Select celebration" })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Choose group emoji: 🎉" })
    ).toBeInTheDocument()
  })

  it("preserves multi-codepoint emoji selections", async () => {
    const user = userEvent.setup()
    const { container } = render(<F0EmojiPicker label="Choose group emoji" />)

    await user.click(screen.getByRole("button", { name: "Choose group emoji" }))
    await user.click(screen.getByRole("button", { name: "Select family" }))

    expect(container.querySelector("img")).toHaveAttribute(
      "src",
      expect.stringContaining("1f468-200d-1f469-200d-1f467-200d-1f466")
    )
    expect(
      screen.getByRole("button", {
        name: "Choose group emoji: 👨‍👩‍👧‍👦",
      })
    ).toBeInTheDocument()
  })

  it("clears an uncontrolled selection to null when clearable", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    const { container } = render(
      <F0EmojiPicker
        label="Choose group emoji"
        defaultValue="💬"
        clearable
        onChange={onChange}
      />
    )

    const trigger = screen.getByRole("button", {
      name: "Choose group emoji: 💬",
    })

    await user.click(trigger)
    await user.click(screen.getByRole("button", { name: "Clear" }))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(null)
    expect(
      screen.getByRole("button", { name: "Choose group emoji" })
    ).toHaveAttribute("aria-expanded", "false")
    await waitFor(() => expect(trigger).toHaveFocus())
    expect(container.querySelector("svg")).toBeInTheDocument()
    expect(container.querySelector("img")).not.toBeInTheDocument()
  })

  it("requests a null value without mutating a controlled selection", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    const { container, rerender } = render(
      <F0EmojiPicker
        label="Choose group emoji"
        value="💬"
        clearable
        onChange={onChange}
      />
    )

    const trigger = screen.getByRole("button", {
      name: "Choose group emoji: 💬",
    })

    await user.click(trigger)
    await user.click(screen.getByRole("button", { name: "Clear" }))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(null)
    expect(
      screen.getByRole("button", { name: "Choose group emoji: 💬" })
    ).toHaveAttribute("aria-expanded", "false")
    await waitFor(() => expect(trigger).toHaveFocus())
    expect(container.querySelector("img")).toHaveAttribute(
      "src",
      expect.stringContaining("1f4ac")
    )

    rerender(
      <F0EmojiPicker
        label="Choose group emoji"
        value={null}
        clearable
        onChange={onChange}
      />
    )

    expect(
      screen.getByRole("button", { name: "Choose group emoji" })
    ).toBeInTheDocument()
    expect(container.querySelector("svg")).toBeInTheDocument()
    expect(container.querySelector("img")).not.toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Choose group emoji" }))
    expect(
      screen.queryByRole("button", { name: "Clear" })
    ).not.toBeInTheDocument()
  })

  it("uses the localized clear action label", async () => {
    const user = userEvent.setup()
    const translations = {
      ...defaultTranslations,
      actions: {
        ...defaultTranslations.actions,
        clear: "Borrar",
      },
    }

    render(
      <I18nProvider translations={translations}>
        <F0EmojiPicker label="Choose group emoji" defaultValue="💬" clearable />
      </I18nProvider>
    )

    await user.click(
      screen.getByRole("button", { name: "Choose group emoji: 💬" })
    )

    expect(screen.getByRole("button", { name: "Borrar" })).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Clear" })
    ).not.toBeInTheDocument()
  })

  it("only shows the clear action for a clearable selected value", async () => {
    const user = userEvent.setup()
    const { unmount } = render(
      <F0EmojiPicker label="Choose group emoji" defaultValue="💬" />
    )

    await user.click(
      screen.getByRole("button", { name: "Choose group emoji: 💬" })
    )
    expect(
      screen.queryByRole("button", { name: "Clear" })
    ).not.toBeInTheDocument()

    unmount()
    render(<F0EmojiPicker label="Choose group emoji" clearable />)
    await user.click(screen.getByRole("button", { name: "Choose group emoji" }))

    expect(
      screen.queryByRole("button", { name: "Clear" })
    ).not.toBeInTheDocument()
  })

  it.each([
    ["sm", "size-6"],
    ["md", "size-8"],
    ["lg", "size-10"],
  ] as const)(
    "renders the %s trigger size in both states",
    (size, className) => {
      const { rerender } = render(
        <F0EmojiPicker label="Choose group emoji" size={size} value={null} />
      )

      expect(
        screen.getByRole("button", { name: "Choose group emoji" })
          .firstElementChild
      ).toHaveClass(className)

      rerender(
        <F0EmojiPicker label="Choose group emoji" size={size} value="🎉" />
      )

      expect(
        screen.getByRole("button", { name: "Choose group emoji: 🎉" })
          .firstElementChild
      ).toHaveClass(className)
    }
  )

  it("calls onChange without mutating a controlled value", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    const { container } = render(
      <F0EmojiPicker
        label="Choose group emoji"
        value="💬"
        onChange={onChange}
      />
    )

    await user.click(
      screen.getByRole("button", { name: "Choose group emoji: 💬" })
    )
    await user.click(screen.getByRole("button", { name: "Select celebration" }))

    expect(onChange).toHaveBeenCalledWith("🎉")
    expect(container.querySelector("img")).toHaveAttribute(
      "src",
      expect.stringContaining("1f4ac")
    )
  })

  it("uses defaultValue as the initial uncontrolled selection", () => {
    const { container } = render(
      <F0EmojiPicker label="Choose group emoji" defaultValue="💬" />
    )

    expect(container.querySelector("img")).toHaveAttribute(
      "src",
      expect.stringContaining("1f4ac")
    )
  })

  it("does not open when disabled", async () => {
    const user = userEvent.setup()
    render(<F0EmojiPicker label="Choose group emoji" disabled />)

    await user.click(screen.getByRole("button", { name: "Choose group emoji" }))

    expect(
      screen.queryByRole("button", { name: "Select celebration" })
    ).not.toBeInTheDocument()
  })

  it("closes when disabled while open and stays closed when re-enabled", async () => {
    const user = userEvent.setup()
    const { rerender } = render(<F0EmojiPicker label="Choose group emoji" />)

    await user.click(screen.getByRole("button", { name: "Choose group emoji" }))
    expect(
      screen.getByRole("button", { name: "Select celebration" })
    ).toBeInTheDocument()

    rerender(<F0EmojiPicker label="Choose group emoji" disabled />)
    expect(
      screen.queryByRole("button", { name: "Select celebration" })
    ).not.toBeInTheDocument()

    rerender(<F0EmojiPicker label="Choose group emoji" />)
    expect(
      screen.queryByRole("button", { name: "Select celebration" })
    ).not.toBeInTheDocument()
  })

  it("displays externally updated controlled values", () => {
    const { rerender } = render(
      <F0EmojiPicker label="Choose group emoji" value="💬" />
    )

    expect(
      screen.getByRole("button", { name: "Choose group emoji: 💬" })
    ).toBeInTheDocument()

    rerender(<F0EmojiPicker label="Choose group emoji" value="🎉" />)

    expect(
      screen.getByRole("button", { name: "Choose group emoji: 🎉" })
    ).toBeInTheDocument()
  })

  it("forwards the locale to the emoji picker", async () => {
    const user = userEvent.setup()
    render(<F0EmojiPicker label="Choose group emoji" locale="es" />)

    await user.click(screen.getByRole("button", { name: "Choose group emoji" }))

    expect(
      screen.getByRole("button", { name: "Select celebration" })
    ).toHaveAttribute("data-locale", "es")
  })

  it("exposes dataTestId through the public component", () => {
    render(
      <F0EmojiPicker
        label="Choose group emoji"
        dataTestId="group-emoji-picker"
      />
    )

    expect(screen.getByTestId("group-emoji-picker")).toBeInTheDocument()
  })
})
