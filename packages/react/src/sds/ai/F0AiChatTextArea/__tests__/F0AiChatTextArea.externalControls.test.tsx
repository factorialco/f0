import { act } from "@testing-library/react"
import { createRef } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0AiChatTextArea } from "../F0AiChatTextArea"
import type { F0AiChatTextAreaHandle } from "../types"

interface TextareaFieldMockProps {
  inputValue: string
}

// Mirror the value-only mock used by the sibling tests so `setContent` is
// observable through the rendered textarea.
vi.mock("../components/TextareaField", () => ({
  TextareaField: ({ inputValue }: TextareaFieldMockProps) => (
    <textarea aria-label="Message" value={inputValue} readOnly />
  ),
}))

describe("F0AiChatTextArea external controls", () => {
  it("hides the built-in submit button when showSubmitButton is false", () => {
    render(<F0AiChatTextArea onSubmit={vi.fn()} showSubmitButton={false} />)

    expect(
      screen.queryByRole("button", { name: /send message/i })
    ).not.toBeInTheDocument()
  })

  it("keeps the built-in submit button by default", () => {
    render(<F0AiChatTextArea onSubmit={vi.fn()} />)

    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument()
  })

  it("populates the textarea via apiRef.setContent()", () => {
    const apiRef = createRef<F0AiChatTextAreaHandle>()
    render(<F0AiChatTextArea onSubmit={vi.fn()} apiRef={apiRef} />)

    act(() => apiRef.current?.setContent("Draft my weekly update"))

    expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
      "Draft my weekly update"
    )
  })

  it("reads the current value via apiRef.getContent()", () => {
    const apiRef = createRef<F0AiChatTextAreaHandle>()
    render(<F0AiChatTextArea onSubmit={vi.fn()} apiRef={apiRef} />)

    expect(apiRef.current?.getContent()).toBe("")
    act(() => apiRef.current?.setContent("hello world"))
    expect(apiRef.current?.getContent()).toBe("hello world")
  })

  it("clears the textarea via apiRef.clear()", () => {
    const apiRef = createRef<F0AiChatTextAreaHandle>()
    render(<F0AiChatTextArea onSubmit={vi.fn()} apiRef={apiRef} />)

    act(() => apiRef.current?.setContent("hello world"))
    expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
      "hello world"
    )

    act(() => apiRef.current?.clear())
    expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue("")
  })

  it("notifies onChange so a host can react to the content", () => {
    const onChange = vi.fn()
    const apiRef = createRef<F0AiChatTextAreaHandle>()
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        apiRef={apiRef}
        onChange={onChange}
      />
    )

    // Fires on mount with the initial (empty) value.
    expect(onChange).toHaveBeenCalledWith("")

    act(() => apiRef.current?.setContent("typing…"))
    expect(onChange).toHaveBeenLastCalledWith("typing…")
  })

  it("submits via apiRef.submit() even with the button hidden", async () => {
    const onSubmit = vi.fn()
    const apiRef = createRef<F0AiChatTextAreaHandle>()
    render(
      <F0AiChatTextArea
        onSubmit={onSubmit}
        apiRef={apiRef}
        showSubmitButton={false}
      />
    )

    act(() => apiRef.current?.setContent("hello"))
    act(() => apiRef.current?.submit())

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit.mock.calls[0][0].text).toBe("hello")
  })

  it("does not submit via apiRef.submit() when the textarea is empty", async () => {
    const onSubmit = vi.fn()
    const apiRef = createRef<F0AiChatTextAreaHandle>()
    render(
      <F0AiChatTextArea
        onSubmit={onSubmit}
        apiRef={apiRef}
        showSubmitButton={false}
      />
    )

    act(() => apiRef.current?.submit())

    // Give any async submit path a tick to run before asserting it didn't.
    await Promise.resolve()
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
