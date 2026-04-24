import { screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"

import { aiTranslations } from "@/sds/ai/F0AiChat"
import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import {
  zeroRender as render,
  zeroRenderHook as renderHook,
} from "@/testing/test-utils"

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

const selectFirstRow = async () => {
  await waitFor(() => {
    expect(screen.getByText("Alpha")).toBeInTheDocument()
  })
  const user = userEvent.setup()
  const checkboxes = screen.getAllByRole("checkbox")
  // 0: header checkbox; 1: first row checkbox.
  await user.click(checkboxes[1])
  return user
}

describe("OneDataCollection bulk-action status", () => {
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

  test("async handler WITH autoManageBulkActionStatus disables buttons while pending and dismisses on resolve", async () => {
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

    resolveHandler?.()

    // After resolve, bar eventually dismisses (SUCCESS_DISMISS_MS = 1500ms).
    await waitFor(
      () => {
        expect(queryArchiveButtons()).toHaveLength(0)
      },
      { timeout: 3000 }
    )
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
