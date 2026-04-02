import {
  zeroRender as render,
  screen,
  waitFor,
  act,
} from "@/testing/test-utils"
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
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

describe("F0Form action bar status flow", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("shows idle label before submitting", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="status-idle-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    await waitFor(() => {
      expect(
        screen.getByText("You have changes pending to be saved")
      ).toBeInTheDocument()
    })
  })

  it("shows loading status while submitting", async () => {
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
        name="status-loading-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    await makeFormDirtyAndSubmit(user)

    await waitFor(() => {
      expect(screen.getByText("Saving...")).toBeInTheDocument()
    })

    const submitButtons = screen.getAllByRole("button", { name: /submit/i })
    submitButtons.forEach((btn) => expect(btn).toBeDisabled())

    await act(async () => {
      resolveSubmit!({ success: true })
    })

    await waitFor(() => {
      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })
  })

  it("shows custom saving message from submitConfig", async () => {
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
        name="status-custom-saving-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={{
          ...actionBarConfig,
          savingMessage: "Updating employee...",
        }}
      />
    )

    await makeFormDirtyAndSubmit(user)

    await waitFor(() => {
      expect(screen.getByText("Updating employee...")).toBeInTheDocument()
    })

    await act(async () => {
      resolveSubmit!({ success: true })
    })
  })

  it("shows default success message after successful submit", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="status-success-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    await makeFormDirtyAndSubmit(user)

    await waitFor(() => {
      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })
  })

  it("shows custom success message from onSubmit result", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi
      .fn()
      .mockResolvedValue({ success: true, message: "Employee updated!" })

    render(
      <F0Form
        name="status-custom-message-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    await makeFormDirtyAndSubmit(user)

    await waitFor(() => {
      expect(screen.getByText("Employee updated!")).toBeInTheDocument()
    })
  })

  it("auto-hides success message after 3 seconds", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="status-auto-hide-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    await makeFormDirtyAndSubmit(user)

    await waitFor(() => {
      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    await waitFor(() => {
      expect(
        screen.queryByText("Your changes have been saved")
      ).not.toBeInTheDocument()
    })
  })

  it("keeps action bar open during success state even though form is not dirty", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="status-open-during-success-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    await makeFormDirtyAndSubmit(user)

    await waitFor(() => {
      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })

    // The action bar should still be visible with the success message
    // even though form.reset(data) was called and isDirty is false
    const submitButtons = screen.getAllByRole("button", { name: /submit/i })
    submitButtons.forEach((btn) => expect(btn).toBeDisabled())
  })

  it("returns to idle status on failed submission", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({
      success: false,
      errors: { name: "Name already taken" },
    })

    render(
      <F0Form
        name="status-failure-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    await makeFormDirtyAndSubmit(user)

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })

    await waitFor(() => {
      expect(screen.getByText("1 issue")).toBeInTheDocument()
    })

    expect(
      screen.queryByText("Your changes have been saved")
    ).not.toBeInTheDocument()
    expect(screen.queryByText("Saving...")).not.toBeInTheDocument()
  })

  it("does not show success message on failed submission", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({
      success: false,
      rootMessage: "Server error",
    })

    render(
      <F0Form
        name="status-no-success-on-failure-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    await makeFormDirtyAndSubmit(user)

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })

    expect(
      screen.queryByText("Your changes have been saved")
    ).not.toBeInTheDocument()
  })
})

describe("F0Form default submit type shows success action bar", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("shows loading action bar while submitting", async () => {
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
        name="default-loading-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    const submitButton = screen.getByRole("button", { name: /submit/i })
    await user.click(submitButton)

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

  it("shows success action bar after successful submit", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="default-success-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    const submitButton = screen.getByRole("button", { name: /submit/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })
  })

  it("shows custom success message for default submit type", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi
      .fn()
      .mockResolvedValue({ success: true, message: "Record created!" })

    render(
      <F0Form
        name="default-custom-message-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    const submitButton = screen.getByRole("button", { name: /submit/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText("Record created!")).toBeInTheDocument()
    })
  })

  it("auto-hides success action bar after 3 seconds", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="default-auto-hide-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    const submitButton = screen.getByRole("button", { name: /submit/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    await waitFor(() => {
      expect(
        screen.queryByText("Your changes have been saved")
      ).not.toBeInTheDocument()
    })
  })

  it("does not show success action bar on failed submission", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({
      success: false,
      rootMessage: "Server error",
    })

    render(
      <F0Form
        name="default-failure-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    const submitButton = screen.getByRole("button", { name: /submit/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })

    expect(
      screen.queryByText("Your changes have been saved")
    ).not.toBeInTheDocument()
  })
})
