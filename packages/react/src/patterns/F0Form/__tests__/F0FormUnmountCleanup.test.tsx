import {
  zeroRender as render,
  screen,
  waitFor,
  act,
} from "@/testing/test-utils"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { z } from "zod"
import userEvent from "@testing-library/user-event"

import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"

const formSchema = z.object({
  name: f0FormField(z.string().min(1), { label: "Name" }),
})

const actionBarConfig = {
  type: "action-bar" as const,
  discardable: true,
}

async function makeFormDirtyAndSubmit(
  user: ReturnType<typeof userEvent.setup>
) {
  const input = screen.getByLabelText("Name")
  await user.clear(input)
  await user.type(input, "updated")

  await waitFor(() => {
    expect(
      screen.getByText("You have changes pending to be saved")
    ).toBeInTheDocument()
  })

  const submitButtons = screen.getAllByText("Submit")
  await user.click(submitButtons[0])
}

/**
 * Regression coverage for a post-unmount setState leak.
 *
 * `handleSubmit` schedules the success timer *after* `await onSubmit(...)`. If
 * the form unmounts while that submit is in flight, the unmount cleanup has
 * already run (with `successTimerRef.current === null`, since the timer isn't
 * scheduled yet). Without a mounted-guard the resolved promise would go on to
 * schedule a timer that nothing clears — it fires after the test env is torn
 * down and calls a state setter, surfacing in CI as a stray
 * "ReferenceError: window is not defined" attributed to an unrelated test.
 */
describe("F0Form unmount cleanup", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("does not schedule the success timer when unmounted mid-submit", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    let resolveSubmit: (value: { success: true }) => void
    const onSubmit = vi.fn(
      () =>
        new Promise<{ success: true }>((resolve) => {
          resolveSubmit = resolve
        })
    )

    const { unmount } = render(
      <F0Form
        name="unmount-mid-submit-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    await makeFormDirtyAndSubmit(user)

    // Submit is in flight; the success timer has not been scheduled yet.
    await waitFor(() => {
      expect(screen.getByText("Saving...")).toBeInTheDocument()
    })

    unmount()

    // Resolving after unmount must NOT schedule a (leaked) success timer.
    const timersBeforeResolve = vi.getTimerCount()
    await act(async () => {
      resolveSubmit!({ success: true })
    })
    expect(vi.getTimerCount()).toBe(timersBeforeResolve)

    // Advancing past the success duration must not touch the torn-down tree.
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {})
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(errorSpy).not.toHaveBeenCalled()
    errorSpy.mockRestore()
  })

  it("clears a pending success timer on unmount", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const { unmount } = render(
      <F0Form
        name="unmount-success-timer-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    await makeFormDirtyAndSubmit(user)

    // Success timer is now pending (the "saved" message is showing).
    await waitFor(() => {
      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })

    unmount()

    // The pending timer must be gone — nothing fires after teardown.
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {})
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(errorSpy).not.toHaveBeenCalled()
    errorSpy.mockRestore()
  })

  it("clears a pending autosubmit timer on unmount", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const { unmount } = render(
      <F0Form
        name="unmount-autosubmit-timer-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={{ type: "autosubmit" as const, delay: 800 }}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    // Autosubmit timer is pending but has not fired yet.
    unmount()

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    // The debounced submit must never run after unmount.
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
