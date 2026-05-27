import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

import { aiTranslations } from "@/sds/ai/F0AiChat"
import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import {
  zeroRender as render,
  zeroRenderHook as renderHook,
} from "@/testing/test-utils"

import { useDataCollectionSource } from "../hooks/useDataCollectionSource"
import { OneDataCollection } from "../index"
import { EAGER_REQUIRES_NO_PAGINATION_MESSAGE } from "../visualizations/collection/Graph/Graph"

// Force the Graph dev guards on so the eager-pagination check fires when
// exercised through OneDataCollection's chrome / VisualizationRenderer path.
vi.mock("@/lib/providers/user-platafform", async () => {
  const actual = await vi.importActual<
    typeof import("@/lib/providers/user-platafform")
  >("@/lib/providers/user-platafform")
  return {
    ...actual,
    useIsDev: () => true,
  }
})

// Stub F0Graph so we don't pull in the React Flow runtime — the test throws
// before render commits anyway, but the stub keeps the suite hermetic.
vi.mock("@/patterns/F0Graph", async () => {
  const actual =
    await vi.importActual<typeof import("@/patterns/F0Graph")>(
      "@/patterns/F0Graph"
    )
  return {
    ...actual,
    F0Graph: vi.fn(() => <div data-testid="f0graph-mock" />),
  }
})

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

describe("OneDataCollection — graph viz eager-pagination guard reads effective source", () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // React logs the thrown render error to console.error; silence it so the
    // test output stays clean while we still assert on the throw.
    consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)
  })

  afterEach(() => {
    consoleErrorSpy.mockRestore()
  })

  test("throws when graph viz override source is paginated and viz is in eager mode", () => {
    type Person = { id: string; name: string; parentId: string | null }

    // Top-level source is intentionally non-paginated. If the guard read from
    // the top-level source it would NOT trip — so a passing assertion proves
    // the guard correctly reads the effective (override) source.
    const { result: topLevel } = renderHook(
      () =>
        useDataCollectionSource<Person>({
          dataAdapter: {
            fetchData: async () => ({
              records: [{ id: "1", name: "Root", parentId: null }],
            }),
          },
        }),
      { wrapper: TestWrapper }
    )

    // Paginated override source. `loadChildren` is omitted on the viz options
    // below, so the graph is in eager mode and the guard must trip.
    const { result: override } = renderHook(
      () =>
        useDataCollectionSource<Person>({
          dataAdapter: {
            fetchData: async () => ({
              records: [{ id: "1", name: "Root", parentId: null }],
              total: 1,
              currentPage: 1,
              perPage: 10,
              pagesCount: 1,
              type: "pages",
            }),
            paginationType: "pages",
            perPage: 10,
          },
        }),
      { wrapper: TestWrapper }
    )

    expect(() =>
      render(
        <TestWrapper>
          <OneDataCollection
            source={topLevel.current}
            visualizations={[
              {
                type: "graph",
                source: override.current,
                options: {
                  nodeAdapter: (record) => ({ parentId: record.parentId }),
                  renderNode: () => null,
                },
              },
            ]}
          />
        </TestWrapper>
      )
    ).toThrow(EAGER_REQUIRES_NO_PAGINATION_MESSAGE)
  })
})
