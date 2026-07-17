import {
  zeroRender as render,
  screen,
  waitFor,
  act,
} from "@/testing/test-utils"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { z } from "zod"
import userEvent from "@testing-library/user-event"
import { createRef } from "react"

import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"
import type { F0FormRef } from "../useF0Form"

const formSchema = z.object({
  name: f0FormField(z.string().min(1), { label: "Name" }),
})

const strictSchema = z.object({
  name: f0FormField(z.string().min(3, "Too short"), { label: "Name" }),
})

const switchSchema = z.object({
  anonymous: f0FormField(z.boolean(), {
    label: "Anonymous",
    fieldType: "switch",
  }),
})

const autosubmitConfig = {
  type: "autosubmit" as const,
}

describe("F0Form autosubmit", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("does not render a submit button in autosubmit mode", () => {
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-no-button"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={autosubmitConfig}
      />
    )

    expect(
      screen.queryByRole("button", { name: /submit/i })
    ).not.toBeInTheDocument()
  })

  it("does not submit before the delay elapses", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-before-delay"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 800 }}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "a")

    // Advance less than the delay
    act(() => {
      vi.advanceTimersByTime(700)
    })

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("submits once after the delay elapses", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-after-delay"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 800 }}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    act(() => {
      vi.advanceTimersByTime(800)
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ name: "updated" })
    )
  })

  // Regression: a single discrete change on a pristine form (e.g. toggling one
  // switch) must autosubmit. Previously the dirty guard was read synchronously
  // inside `form.watch`, before react-hook-form recomputed `isDirty`, so the
  // first change was dropped and only a second change triggered a submit.
  it("submits after a single switch toggle on a pristine form", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-single-toggle"
        schema={switchSchema}
        defaultValues={{ anonymous: false }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 800, hideActionBar: true }}
      />
    )

    const toggle = screen.getByRole("switch", { name: "Anonymous" })
    await user.click(toggle)

    act(() => {
      vi.advanceTimersByTime(800)
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ anonymous: true })
    )

    // Flush the post-submit success flow so its auto-dismiss timer fires and
    // self-clears while still mounted, instead of leaking past teardown.
    await act(async () => {
      await vi.advanceTimersByTimeAsync(2000)
    })
  })

  // Regression: if the form unmounts while an autosubmit is in flight, the
  // resolved submit must not touch React state or schedule the success-message
  // timer on the dead component. A timer scheduled after unmount is never
  // cleared and fires on a torn-down tree ("window is not defined" in tests).
  it("does not schedule state updates after unmount mid-submit", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    let resolveSubmit: (result: { success: true }) => void = () => {}
    const onSubmit = vi.fn().mockImplementation(
      () =>
        new Promise<{ success: true }>((resolve) => {
          resolveSubmit = resolve
        })
    )

    const { unmount } = render(
      <F0Form
        name="autosubmit-unmount-midflight"
        schema={switchSchema}
        defaultValues={{ anonymous: false }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 800, hideActionBar: true }}
      />
    )

    await user.click(screen.getByRole("switch", { name: "Anonymous" }))

    act(() => {
      vi.advanceTimersByTime(800)
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    // Unmount while onSubmit is still pending, then resolve it. The success
    // branch must bail out and schedule no new timer.
    const timersBeforeResolve = vi.getTimerCount()
    unmount()
    await act(async () => {
      resolveSubmit({ success: true })
      await Promise.resolve()
    })

    expect(vi.getTimerCount()).toBeLessThanOrEqual(timersBeforeResolve)
  })

  it("debounces multiple rapid changes into a single submit", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-debounce-rapid"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 800 }}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "abc")

    // Each keystroke resets the debounce, so after typing 3 chars no submit yet
    expect(onSubmit).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(800)
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ name: "abc" })
    )
  })

  it("uses a default delay of 800ms when delay is not specified", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-default-delay"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={autosubmitConfig}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "x")

    act(() => {
      vi.advanceTimersByTime(799)
    })
    expect(onSubmit).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(1)
    })
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
  })

  it("does not submit when the form is not dirty", async () => {
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-not-dirty"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={autosubmitConfig}
      />
    )

    // No user interaction; just advance time
    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("does not call onSubmit when validation fails", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-invalid"
        schema={strictSchema}
        defaultValues={{ name: "valid" }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 500 }}
        errorTriggerMode="on-change"
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "ab")

    act(() => {
      vi.advanceTimersByTime(500)
    })

    // RHF runs validation; invalid form must not call onSubmit
    await waitFor(() => {
      expect(screen.getByText("Too short")).toBeInTheDocument()
    })
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("shows the action bar with Saving then Saved feedback", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    let resolveSubmit: (value: { success: true }) => void
    const onSubmit = vi.fn(
      () =>
        new Promise<{ success: true }>((resolve) => {
          resolveSubmit = resolve
        })
    )

    render(
      <F0Form
        name="autosubmit-action-bar"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 300 }}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    act(() => {
      vi.advanceTimersByTime(300)
    })

    await waitFor(() => {
      expect(screen.getByText("Saving...")).toBeInTheDocument()
    })

    await act(async () => {
      resolveSubmit!({ success: true })
    })

    await waitFor(() => {
      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })
  })

  it("hides the action bar when hideActionBar is true", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-hide-action-bar"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={{
          ...autosubmitConfig,
          delay: 300,
          hideActionBar: true,
        }}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    act(() => {
      vi.advanceTimersByTime(300)
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    expect(screen.queryByText("Saving...")).not.toBeInTheDocument()
    expect(
      screen.queryByText("Your changes have been saved")
    ).not.toBeInTheDocument()
  })

  it("cancels the pending submit on unmount", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const { unmount } = render(
      <F0Form
        name="autosubmit-unmount"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 800 }}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    unmount()

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("resets isDirty to false after a successful autosubmit", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })
    const formRef = createRef<F0FormRef>()

    render(
      <F0Form
        name="autosubmit-resets-dirty"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 200 }}
        formRef={formRef as React.MutableRefObject<F0FormRef | null>}
      />
    )

    expect(formRef.current?.isDirty()).toBe(false)

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    expect(formRef.current?.isDirty()).toBe(true)

    act(() => {
      vi.advanceTimersByTime(200)
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    await waitFor(() => {
      expect(formRef.current?.isDirty()).toBe(false)
    })
  })

  it("autosubmits again after a successful autosubmit", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-consecutive"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 200 }}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "first")

    act(() => {
      vi.advanceTimersByTime(200)
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
    expect(onSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({ name: "first" })
    )

    await user.type(input, "-second")

    act(() => {
      vi.advanceTimersByTime(200)
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(2)
    })
    expect(onSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({ name: "first-second" })
    )
  })

  it("preserves input focus and caret position across a debounced autosubmit", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosubmit-preserve-focus"
        schema={formSchema}
        defaultValues={{ name: "" }}
        onSubmit={onSubmit}
        submitConfig={{ ...autosubmitConfig, delay: 200 }}
      />
    )

    const input = screen.getByLabelText("Name") as HTMLInputElement
    input.focus()
    await user.type(input, "hello")

    expect(document.activeElement).toBe(input)

    act(() => {
      vi.advanceTimersByTime(200)
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    await waitFor(() => {
      expect(document.activeElement).toBe(input)
    })
    expect(input.selectionStart).toBe(5)
    expect(input.selectionEnd).toBe(5)
  })

  it("preserves focus when submitting via the Enter key", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="enter-key-preserve-focus"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
      />
    )

    const input = screen.getByLabelText("Name") as HTMLInputElement
    input.focus()
    await user.type(input, "{Enter}")

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    await waitFor(() => {
      expect(document.activeElement).toBe(input)
    })
  })

  it("focuses the first invalid field when submitting via the action bar button", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="button-click-error-focus"
        schema={strictSchema}
        defaultValues={{ name: "ab" }}
        onSubmit={onSubmit}
      />
    )

    const submitButton = screen.getByRole("button", { name: /submit/i })
    await user.click(submitButton)

    await waitFor(() => {
      const input = screen.getByLabelText("Name") as HTMLInputElement
      expect(document.activeElement).toBe(input)
    })
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
