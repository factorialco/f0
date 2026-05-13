import { act, screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { useState } from "react"
import { afterEach, describe, expect, test, vi } from "vitest"

import { aiTranslations } from "@/sds/ai/F0AiChat"
import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import {
  zeroRender as render,
  zeroRenderHook as renderHook,
} from "@/testing/test-utils"
import type { ActionBarStatus } from "@/components/F0ActionBar"

import { useDataCollectionSource } from "../hooks/useDataCollectionSource"
import { OneDataCollection } from "../index"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider
    translations={{
      ...defaultTranslations,
      ai: {
        ...defaultTranslations.ai,
        ...aiTranslations.ai,
      },
    }}
  >
    {children}
  </I18nProvider>
)

type Row = { id: string; name: string }

const testRows: Row[] = [
  { id: "1", name: "Alpha" },
  { id: "2", name: "Beta" },
]

const bulkActions = () => ({
  primary: [{ label: "Archive", id: "archive" }],
})

const columns = [{ label: "Name", render: (item: Row) => item.name }] as const

const useTestSource = () =>
  useDataCollectionSource({
    selectable: (item: Row) => item.id,
    bulkActions,
    dataAdapter: { fetchData: async () => ({ records: testRows }) },
  })

// F0ActionBar renders the primary action twice (mobile + desktop render paths,
// one hidden at any given viewport via Tailwind responsive classes). Both DOM
// nodes mirror the same enabled/disabled state.
const findArchiveButtons = () =>
  screen.findAllByRole("button", { name: /archive/i })

const queryArchiveButtons = () =>
  screen.queryAllByRole("button", { name: /archive/i })

const selectFirstRow = async (user?: ReturnType<typeof userEvent.setup>) => {
  await waitFor(() => {
    expect(screen.getByText("Alpha")).toBeInTheDocument()
  })
  const u = user ?? userEvent.setup()
  const checkboxes = screen.getAllByRole("checkbox")
  // 0: header checkbox; 1: first row checkbox.
  await u.click(checkboxes[1])
  return u
}

describe("OneDataCollection bulk-action status", () => {
  // Restore real timers after any test that switches to fake timers.
  afterEach(() => {
    vi.useRealTimers()
  })

  test("sync handler clears selection immediately and never enters loading", async () => {
    const onBulkAction = vi.fn()
    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          onBulkAction={onBulkAction}
        />
      </TestWrapper>
    )

    const user = await selectFirstRow()
    const [archive] = await findArchiveButtons()

    await user.click(archive)

    expect(onBulkAction).toHaveBeenCalledWith(
      "archive",
      expect.anything(),
      expect.any(Function)
    )

    await waitFor(() => {
      expect(queryArchiveButtons()).toHaveLength(0)
    })
  })

  test("async handler WITHOUT autoManageBulkActionStatus preserves fire-and-forget", async () => {
    // Regression guard: a consumer whose handler happens to be `async` (e.g.
    // opens a modal) must not accidentally flash loading/success. Without the
    // opt-in flag, the returned promise is ignored.
    let resolveHandler: (() => void) | undefined
    const onBulkAction = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveHandler = resolve
        })
    )

    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          onBulkAction={onBulkAction}
        />
      </TestWrapper>
    )

    const user = await selectFirstRow()
    const [archive] = await findArchiveButtons()
    await user.click(archive)

    // Handler was invoked, but the returned promise is ignored: selection is
    // cleared immediately and the bar dismisses.
    await waitFor(() => {
      expect(queryArchiveButtons()).toHaveLength(0)
    })

    // Resolve the dangling promise; bar must stay absent.
    resolveHandler?.()
    await waitFor(() => {
      expect(queryArchiveButtons()).toHaveLength(0)
    })
  })

  test("async handler WITH autoManageBulkActionStatus disables buttons while pending", async () => {
    let resolveHandler: (() => void) | undefined
    const onBulkAction = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveHandler = resolve
        })
    )

    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          autoManageBulkActionStatus
          onBulkAction={onBulkAction}
        />
      </TestWrapper>
    )

    const user = await selectFirstRow()
    const [archive] = await findArchiveButtons()
    await user.click(archive)

    // Pending: bar stays open, all Archive DOM nodes are disabled.
    await waitFor(() => {
      const btns = queryArchiveButtons()
      expect(btns.length).toBeGreaterThan(0)
      btns.forEach((btn) => expect(btn).toBeDisabled())
    })

    // Clean up: resolve so there are no dangling promises.
    resolveHandler?.()
  })

  test("bar dismisses after SUCCESS_DISMISS_MS on resolve (fake timers)", async () => {
    // Uses fake timers so the test completes instantly without waiting for the
    // real 1500ms dismiss delay. userEvent must be set up with advanceTimers so
    // its internal scheduler and fake timers don't deadlock.
    vi.useFakeTimers({ shouldAdvanceTime: true })

    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    })

    let resolveHandler: (() => void) | undefined
    const onBulkAction = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveHandler = resolve
        })
    )

    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          autoManageBulkActionStatus
          onBulkAction={onBulkAction}
        />
      </TestWrapper>
    )

    await selectFirstRow(user)
    const [archive] = await findArchiveButtons()
    await user.click(archive)

    // Confirm loading state before resolving.
    await waitFor(() => {
      const btns = queryArchiveButtons()
      expect(btns.length).toBeGreaterThan(0)
      btns.forEach((btn) => expect(btn).toBeDisabled())
    })

    resolveHandler?.()

    // Flush microtasks so the .then() callback (setInternalBulkActionStatus
    // "success" + setTimeout) runs synchronously from our perspective.
    await Promise.resolve()

    // Skip past the 1500ms success-dismiss timer instantly.
    vi.advanceTimersByTime(1500)

    // Bar must now be gone.
    await waitFor(() => {
      expect(queryArchiveButtons()).toHaveLength(0)
    })
  })

  test("async rejection preserves selection and re-enables the button for retry", async () => {
    let rejectHandler: ((err: Error) => void) | undefined
    const onBulkAction = vi.fn(
      () =>
        new Promise<void>((_, reject) => {
          rejectHandler = reject
        })
    )

    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          autoManageBulkActionStatus
          onBulkAction={onBulkAction}
        />
      </TestWrapper>
    )

    const user = await selectFirstRow()
    const [archive] = await findArchiveButtons()
    await user.click(archive)

    // Loading: disabled.
    await waitFor(() => {
      queryArchiveButtons().forEach((btn) => expect(btn).toBeDisabled())
    })

    rejectHandler?.(new Error("boom"))

    // After rejection: bar stays (selection preserved), buttons re-enable for
    // retry.
    await waitFor(() => {
      const btns = queryArchiveButtons()
      expect(btns.length).toBeGreaterThan(0)
      btns.forEach((btn) => expect(btn).not.toBeDisabled())
    })
  })

  test("controlled bulkActionStatus='loading' disables actions regardless of handler shape", async () => {
    const onBulkAction = vi.fn()
    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          bulkActionStatus="loading"
          onBulkAction={onBulkAction}
        />
      </TestWrapper>
    )

    await selectFirstRow()

    await waitFor(() => {
      const btns = queryArchiveButtons()
      expect(btns.length).toBeGreaterThan(0)
      btns.forEach((btn) => expect(btn).toBeDisabled())
    })
  })

  test("controlled bulkActionStatus='idle' is transparent — auto-manage runs for promise handlers", async () => {
    // When bulkActionStatus="idle" is passed alongside autoManageBulkActionStatus,
    // "idle" is transparent: F0's internal auto-manage drives immediate
    // (promise-returning) actions exactly as if no bulkActionStatus were provided.
    // The promise resolves → selection is cleared → bar dismisses.
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    })

    let resolveHandler: (() => void) | undefined
    const onBulkAction = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveHandler = resolve
        })
    )

    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          autoManageBulkActionStatus
          bulkActionStatus="idle"
          onBulkAction={onBulkAction}
        />
      </TestWrapper>
    )

    await selectFirstRow(user)
    const [archive] = await findArchiveButtons()
    await user.click(archive)

    // Auto-manage kicks in: Archive is disabled during loading.
    await waitFor(() => {
      const btns = queryArchiveButtons()
      expect(btns.length).toBeGreaterThan(0)
      btns.forEach((btn) => expect(btn).toBeDisabled())
    })

    resolveHandler?.()
    await Promise.resolve()
    vi.advanceTimersByTime(1500)

    // Auto-manage cleared selection on resolve → bar dismissed.
    await waitFor(() => {
      expect(queryArchiveButtons()).toHaveLength(0)
    })
  })

  test("void handler with bulkActionStatus wired keeps selection without keepSelection", async () => {
    // When bulkActionStatus is provided (even as "idle"), void-returning handlers
    // must NOT auto-clear selection. The prop's presence signals that some actions
    // have external lifecycles — consumers no longer need keepSelection: true on
    // modal-gated actions.
    const onBulkAction = vi.fn() // returns void

    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          autoManageBulkActionStatus
          bulkActionStatus="idle"
          onBulkAction={onBulkAction}
        />
      </TestWrapper>
    )

    const user = await selectFirstRow()
    const [archive] = await findArchiveButtons()
    await user.click(archive)

    // Void return with bulkActionStatus wired: selection is preserved.
    await waitFor(() => {
      expect(queryArchiveButtons().length).toBeGreaterThan(0)
    })

    // Handler was still called.
    expect(onBulkAction).toHaveBeenCalledWith(
      "archive",
      expect.anything(),
      expect.any(Function)
    )
  })

  test("controlled 'success' auto-clears selection after SUCCESS_DISMISS_MS", async () => {
    // When the consumer sets bulkActionStatus="success", F0 should auto-clear
    // selection and reset to idle after ~1500ms — no manual timer or
    // clearSelectedItems call needed from the consumer.
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    })

    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    let setExternalStatus!: (s: ActionBarStatus) => void

    const Harness = () => {
      const [status, setStatus] = useState<ActionBarStatus>("idle")
      setExternalStatus = setStatus
      return (
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          autoManageBulkActionStatus
          bulkActionStatus={status}
          onBulkAction={vi.fn()}
        />
      )
    }

    render(
      <TestWrapper>
        <Harness />
      </TestWrapper>
    )

    // Select a row so the bar is visible.
    await selectFirstRow(user)
    await findArchiveButtons()

    // Consumer transitions to "success" (as if a modal mutation succeeded).
    act(() => {
      setExternalStatus("success")
    })

    // Before timer: bar still visible (success checkmark shown).
    await waitFor(() => {
      expect(queryArchiveButtons().length).toBeGreaterThan(0)
    })

    // Advance past SUCCESS_DISMISS_MS.
    act(() => {
      vi.advanceTimersByTime(1500)
    })

    // The nested setTimeout(0) defers the status transition — flush it.
    act(() => {
      vi.advanceTimersByTime(0)
    })

    // Selection auto-cleared → bar dismissed.
    await waitFor(() => {
      expect(queryArchiveButtons()).toHaveLength(0)
    })
  })

  test("Unselect button is disabled while a bulk action is loading", async () => {
    // Regression guard for review comment #2: leftContent sits outside
    // F0ActionBar's internal disabled logic, so we must disable it explicitly.
    // Without this, clicking Unselect during loading clears the selection
    // before a rejected promise can preserve it for retry.
    let resolveHandler: (() => void) | undefined
    const onBulkAction = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveHandler = resolve
        })
    )

    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          autoManageBulkActionStatus
          onBulkAction={onBulkAction}
        />
      </TestWrapper>
    )

    const user = await selectFirstRow()
    const [archive] = await findArchiveButtons()
    await user.click(archive)

    // While loading, the Unselect button must be disabled.
    await waitFor(() => {
      const unselectBtn = screen.queryByRole("button", { name: /unselect/i })
      expect(unselectBtn).toBeInTheDocument()
      expect(unselectBtn).toBeDisabled()
    })

    // Clean up: resolve so timers don't bleed into later tests.
    resolveHandler?.()
  })

  test("selection change during a pending promise preserves the new selection on resolve", async () => {
    // Regression guard for review comment #3: if the user clicks additional
    // rows while a bulk action is in-flight, resolving the promise must NOT
    // clear their new selection (only the original selection was acted on).
    let resolveHandler: (() => void) | undefined
    const onBulkAction = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveHandler = resolve
        })
    )

    const { result } = renderHook(() => useTestSource(), {
      wrapper: TestWrapper,
    })

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[{ type: "table", options: { columns } }]}
          autoManageBulkActionStatus
          onBulkAction={onBulkAction}
        />
      </TestWrapper>
    )

    // Select the first row and fire Archive.
    const user = await selectFirstRow()
    const [archive] = await findArchiveButtons()
    await user.click(archive)

    // While the promise is pending, select the second row (changes selection).
    await waitFor(() => {
      const btns = queryArchiveButtons()
      expect(btns.length).toBeGreaterThan(0)
    })
    const checkboxes = screen.getAllByRole("checkbox")
    // 0: header; 1: first row (already checked); 2: second row.
    await user.click(checkboxes[2])

    // Now resolve — the new selection (row 2) must survive.
    resolveHandler?.()

    // Bar should stay open because the new selection (row 2) was NOT cleared.
    await waitFor(
      () => {
        // The Archive buttons remain visible (bar still has a selection).
        expect(queryArchiveButtons().length).toBeGreaterThan(0)
      },
      { timeout: 3000 }
    )
  })
})
