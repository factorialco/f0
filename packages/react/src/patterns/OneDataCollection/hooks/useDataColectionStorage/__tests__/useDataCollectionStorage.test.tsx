import { act } from "@testing-library/react"
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
import { TestProviders, zeroRenderHook } from "@/testing/test-utils"

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

const wrapperWith = (handler: DataCollectionStorageHandler) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <TestProviders>
      <DataCollectionStorageProvider handler={handler}>
        {children}
      </DataCollectionStorageProvider>
    </TestProviders>
  )
  Wrapper.displayName = "DeferredStorageWrapper"
  return Wrapper
}

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

    const { rerender } = zeroRenderHook(
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

    const { unmount } = zeroRenderHook(
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

    const { rerender } = zeroRenderHook(
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

    zeroRenderHook(
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

    zeroRenderHook(
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

  it("blocks writes during the second hydration when key changes", async () => {
    // First key already hydrated with cached state.
    const persistedA: DataCollectionStorage = {
      visualization: 0,
      visualizationFilters: { "0": { fromA: true } },
    } as DataCollectionStorage

    const { handler, resolveGet, setSpy } = createDeferredHandler(persistedA)

    const restoredA = buildFeatureProviders({
      visualization: 0,
      visualizationFilters: persistedA.visualizationFilters as Record<
        string,
        Record<string, unknown>
      >,
    })

    const { rerender } = zeroRenderHook(
      ({ providers, storageKey }) =>
        useDataCollectionStorage(
          storageKey,
          features,
          providers as AnyFeatureProviders
        ),
      {
        wrapper: wrapperWith(handler),
        initialProps: {
          providers: restoredA.buildProviders(),
          storageKey: "key-a/v1",
        },
      }
    )

    // Resolve hydration for key A so storageReady becomes true.
    await act(async () => {
      resolveGet(persistedA)
    })
    await flushMicrotasks()
    await act(async () => {
      vi.advanceTimersByTime(500)
    })
    setSpy.mockClear()

    // Switch to key B with a seed (pre-hydration) provider state. Without the
    // storageReady reset, the write effect would see storageReady=true and
    // schedule a debounced write under key B with the seeded snapshot,
    // potentially landing before key B's get resolves.
    const seededB = buildFeatureProviders({
      visualization: 0,
      visualizationFilters: {},
    })
    rerender({
      providers: seededB.buildProviders(),
      storageKey: "key-b/v1",
    })

    // Advance well past the debounce window without resolving get(B).
    await act(async () => {
      vi.advanceTimersByTime(1000)
    })

    // No write should have happened under key B before its hydration.
    expect(setSpy).not.toHaveBeenCalled()

    // Now resolve hydration for key B and simulate the consumer applying the
    // restored providers; subsequent writes must target key-b/v1, not key-a/v1.
    const persistedB: DataCollectionStorage = {
      visualization: 1,
      visualizationFilters: { "0": { fromB: true }, "1": { fromB: true } },
    } as DataCollectionStorage
    await act(async () => {
      resolveGet(persistedB)
    })
    await flushMicrotasks()

    const restoredB = buildFeatureProviders({
      visualization: 1,
      visualizationFilters: persistedB.visualizationFilters as Record<
        string,
        Record<string, unknown>
      >,
    })
    rerender({
      providers: restoredB.buildProviders(),
      storageKey: "key-b/v1",
    })

    await act(async () => {
      vi.advanceTimersByTime(500)
    })

    for (const call of setSpy.mock.calls) {
      expect(call[0]).toBe("key-b/v1")
    }
  })
})
