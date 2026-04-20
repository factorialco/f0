import { act, renderHook } from "@testing-library/react"
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type MockInstance,
} from "vitest"

import { DataCollectionStorageProvider } from "@/lib/providers/datacollection/DataCollectionStorageProvider"
import {
  DataCollectionStorage,
  DataCollectionStorageHandler,
} from "@/lib/providers/datacollection/types"

import { useDataCollectionStorage } from "../useDataCollectionStorage"
import {
  DataCollectionStorageFeaturesDefinition,
  FeatureProviders,
} from "../types"

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

type AnyFeatureProviders = FeatureProviders<
  Record<string, unknown>,
  never,
  never,
  Record<string, never>,
  Record<string, never>
>

type DeferredHandler = {
  handler: DataCollectionStorageHandler
  resolveGet: (value: DataCollectionStorage) => void
  setSpy: MockInstance<
    Parameters<DataCollectionStorageHandler["set"]>,
    ReturnType<DataCollectionStorageHandler["set"]>
  >
  getSpy: MockInstance<
    Parameters<DataCollectionStorageHandler["get"]>,
    ReturnType<DataCollectionStorageHandler["get"]>
  >
  /** In-memory state mimicking `localStorage[key]`. */
  state: { value: DataCollectionStorage }
}

/**
 * Creates a storage handler whose `get` resolves only when the test calls
 * `resolveGet(...)` and whose `set` writes into an in-memory record so we can
 * assert the final persisted value. `setSpy` records every call.
 */
const createDeferredHandler = (
  initial: DataCollectionStorage = {}
): DeferredHandler => {
  const state = { value: { ...initial } as DataCollectionStorage }
  let resolveGet: (value: DataCollectionStorage) => void = () => {}

  const handler: DataCollectionStorageHandler = {
    get: vi.fn(
      () =>
        new Promise<DataCollectionStorage>((resolve) => {
          resolveGet = resolve
        })
    ),
    set: vi.fn(async (_key, settings) => {
      // Mirror `dataCollectionLocalStorageHandler` semantics: replace the whole key.
      state.value = settings
    }),
  }

  return {
    handler,
    resolveGet: (value) => resolveGet(value),
    setSpy: handler.set as unknown as DeferredHandler["setSpy"],
    getSpy: handler.get as unknown as DeferredHandler["getSpy"],
    state,
  }
}

/**
 * Build a feature-providers object whose `setValue` for `visualizationFilters`
 * mutates a shared map so we can simulate React's restoration setting state.
 */
const buildFeatureProviders = (
  initial: {
    visualization: number
    visualizationFilters: Record<string, Record<string, unknown>>
  } = { visualization: 0, visualizationFilters: {} }
) => {
  const ref = {
    visualization: initial.visualization,
    visualizationFilters: initial.visualizationFilters,
  }

  const visualizationSetValue = vi.fn((value: number) => {
    ref.visualization = value
  })
  const visualizationFiltersSetValue = vi.fn(
    (value: Record<string, Record<string, unknown>>) => {
      ref.visualizationFilters = value
    }
  )

  const buildProviders = (): AnyFeatureProviders =>
    ({
      visualization: {
        value: ref.visualization,
        setValue: visualizationSetValue,
      },
      visualizationFilters: {
        value: ref.visualizationFilters,
        setValue: visualizationFiltersSetValue,
      },
    }) as unknown as AnyFeatureProviders

  return {
    ref,
    buildProviders,
    visualizationSetValue,
    visualizationFiltersSetValue,
  }
}

const wrapperWith =
  (handler: DataCollectionStorageHandler) =>
  ({ children }: { children: React.ReactNode }) =>
    DataCollectionStorageProvider({ children, handler })

const flushMicrotasks = async () => {
  // Allow queued Promise callbacks (storage.get().then(...)) to run.
  await act(async () => {
    await Promise.resolve()
    await Promise.resolve()
  })
}

/* ------------------------------------------------------------------ */
/* Tests                                                               */
/* ------------------------------------------------------------------ */

describe("useDataCollectionStorage — pre-hydration write race", () => {
  const features: DataCollectionStorageFeaturesDefinition = [
    "visualization",
    "visualizationFilters",
  ]

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it("never calls storage.set with a partial pre-hydration snapshot", async () => {
    const persisted: DataCollectionStorage = {
      visualization: 1,
      visualizationFilters: { "0": { x: [1] }, "1": { y: [2] } },
    } as DataCollectionStorage

    const { handler, resolveGet, setSpy } = createDeferredHandler(persisted)

    // Before hydration the provider sees an empty visualizationFilters map and
    // a default visualization of 0. This is the corrupting payload reported in
    // the bug.
    const { buildProviders } = buildFeatureProviders({
      visualization: 0,
      visualizationFilters: {},
    })

    const { rerender } = renderHook(
      ({ providers }) =>
        useDataCollectionStorage(
          "test/v1",
          features,
          providers as AnyFeatureProviders
        ),
      {
        wrapper: wrapperWith(handler),
        initialProps: { providers: buildProviders() },
      }
    )

    // Advance past the 200ms debounce window without resolving hydration.
    await act(async () => {
      vi.advanceTimersByTime(500)
    })

    expect(setSpy).not.toHaveBeenCalled()

    // Now resolve hydration. In production, `featureProvider.setValue(...)` is
    // called inside the resolved `.then(...)` and updates consumer state — we
    // simulate that by rerendering with providers reflecting the restored map.
    await act(async () => {
      resolveGet(persisted)
    })
    await flushMicrotasks()

    const restored = buildFeatureProviders({
      visualization: 1,
      visualizationFilters: persisted.visualizationFilters as Record<
        string,
        Record<string, unknown>
      >,
    })
    rerender({ providers: restored.buildProviders() })

    await act(async () => {
      vi.advanceTimersByTime(500)
    })

    // Any set call observed must contain both "0" and "1" keys.
    for (const call of setSpy.mock.calls) {
      const settings = call[1] as DataCollectionStorage
      const map = settings.visualizationFilters ?? {}
      expect(Object.keys(map).sort()).toEqual(["0", "1"])
    }
  })

  it("cancels pending writes on unmount before hydration resolves", async () => {
    const { handler, setSpy } = createDeferredHandler()
    const { buildProviders } = buildFeatureProviders({
      visualization: 0,
      visualizationFilters: { "0": { seeded: true } },
    })

    const { unmount } = renderHook(
      ({ providers }) =>
        useDataCollectionStorage(
          "test/v1",
          features,
          providers as AnyFeatureProviders
        ),
      {
        wrapper: wrapperWith(handler),
        initialProps: { providers: buildProviders() },
      }
    )

    // Schedule (but never resolve hydration), then unmount.
    await act(async () => {
      vi.advanceTimersByTime(50)
    })
    unmount()
    await act(async () => {
      vi.advanceTimersByTime(1000)
    })

    expect(setSpy).not.toHaveBeenCalled()
  })

  it("writes the merged multi-viz map after hydration completes", async () => {
    const persisted: DataCollectionStorage = {
      visualization: 1,
      visualizationFilters: { "0": { x: [1] }, "1": { y: [2] } },
    } as DataCollectionStorage

    const { handler, resolveGet, setSpy, state } =
      createDeferredHandler(persisted)

    const restored = buildFeatureProviders({
      visualization: 1,
      visualizationFilters: persisted.visualizationFilters as Record<
        string,
        Record<string, unknown>
      >,
    })

    const { rerender } = renderHook(
      ({ providers }) =>
        useDataCollectionStorage(
          "test/v1",
          features,
          providers as AnyFeatureProviders
        ),
      {
        wrapper: wrapperWith(handler),
        initialProps: {
          providers: buildFeatureProviders({
            visualization: 0,
            visualizationFilters: {},
          }).buildProviders(),
        },
      }
    )

    // Pre-hydration tick.
    await act(async () => {
      vi.advanceTimersByTime(300)
    })
    expect(setSpy).not.toHaveBeenCalled()

    // Resolve hydration. Simulate consumer re-rendering with the restored
    // providers (which mirrors how setValue updates feed back as new props).
    await act(async () => {
      resolveGet(persisted)
    })
    await flushMicrotasks()
    rerender({ providers: restored.buildProviders() })

    await act(async () => {
      vi.advanceTimersByTime(500)
    })

    expect(setSpy).toHaveBeenCalled()
    expect(state.value.visualizationFilters).toEqual({
      "0": { x: [1] },
      "1": { y: [2] },
    })
  })

  it("does not write when the storage key is undefined (storage disabled)", async () => {
    const { handler, setSpy } = createDeferredHandler()
    const { buildProviders } = buildFeatureProviders()

    renderHook(
      () =>
        useDataCollectionStorage(
          undefined,
          features,
          buildProviders() as AnyFeatureProviders
        ),
      {
        wrapper: wrapperWith(handler),
      }
    )

    await flushMicrotasks()
    await act(async () => {
      vi.advanceTimersByTime(1000)
    })

    expect(setSpy).not.toHaveBeenCalled()
  })

  it("does not write when explicitly disabled", async () => {
    const { handler, setSpy } = createDeferredHandler()
    const { buildProviders } = buildFeatureProviders()

    renderHook(
      () =>
        useDataCollectionStorage(
          "test/v1",
          features,
          buildProviders() as AnyFeatureProviders,
          true
        ),
      {
        wrapper: wrapperWith(handler),
      }
    )

    await flushMicrotasks()
    await act(async () => {
      vi.advanceTimersByTime(1000)
    })

    expect(setSpy).not.toHaveBeenCalled()
  })
})
