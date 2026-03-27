import { act } from "@testing-library/react"
import { afterEach, describe, expect, test, vi, beforeEach } from "vitest"

import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useExportAction } from "../hooks/useExportAction"

type MockRecord = { id: number; name: string; email: string }

/** Read Blob content as text (jsdom Blob may not have .text()), stripping BOM */
function readBlobAsText(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () =>
      resolve((reader.result as string).replace(/^\uFEFF/, ""))
    reader.onerror = () => reject(reader.error)
    reader.readAsText(blob)
  })
}

function mockRecords(count: number): MockRecord[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }))
}

/**
 * Build a minimal mock source that satisfies what useExportAction reads.
 * The hook casts internally to ExportableSource so we only need the fields it accesses.
 */
function createMockSource(overrides: {
  fetchData: (...args: unknown[]) => unknown
  paginationType?: string
  isLoading?: boolean
}) {
  return {
    dataAdapter: {
      fetchData: overrides.fetchData,
      paginationType: overrides.paginationType,
    },
    currentFilters: {},
    currentSortings: null,
    currentSearch: undefined,
    currentNavigationFilters: {},
    isLoading: overrides.isLoading ?? false,
    // Stubs for fields required by the full DataCollectionSource type
    setCurrentFilters: vi.fn(),
    setCurrentSortings: vi.fn(),
    setCurrentSearch: vi.fn(),
    setIsLoading: vi.fn(),
    setCurrentNavigationFilters: vi.fn(),
  } as unknown as Parameters<typeof useExportAction>[0]["source"]
}

const tableVisualization = {
  type: "table" as const,
  options: {
    columns: [
      { label: "Name", render: (item: MockRecord) => item.name },
      { label: "Email", render: (item: MockRecord) => item.email },
    ],
  },
} as unknown as Parameters<typeof useExportAction>[0]["currentVisualization"]

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

let clickSpy: ReturnType<typeof vi.fn>
let blobCapture: Blob | undefined

// Grab the real createElement before any spy is installed
const realCreateElement = document.createElement.bind(document)

beforeEach(() => {
  clickSpy = vi.fn()
  blobCapture = undefined

  // Mock URL static methods without breaking the constructor
  vi.stubGlobal(
    "URL",
    class extends URL {
      static override createObjectURL = (blob: Blob) => {
        blobCapture = blob
        return "blob:mock"
      }
      static override revokeObjectURL = vi.fn()
    }
  )

  // Intercept <a> creation to capture click + download filename
  vi.spyOn(document, "createElement").mockImplementation(
    (tagName: string, options?: ElementCreationOptions) => {
      const el = realCreateElement(tagName, options)
      if (tagName === "a") {
        el.click = clickSpy
      }
      return el
    }
  )
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe("useExportAction", () => {
  describe("i18n labels", () => {
    test("uses default i18n translations for label and description", () => {
      const source = createMockSource({
        fetchData: vi.fn().mockResolvedValue({ records: [] }),
      })

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
          }),
        { wrapper: TestWrapper }
      )

      expect(result.current.label).toBe(
        defaultTranslations.collections.export.label
      )
      expect(result.current.description).toBe(
        defaultTranslations.collections.export.description
      )
    })

    test("uses custom i18n translations when provided", () => {
      const customTranslations = {
        ...defaultTranslations,
        collections: {
          ...defaultTranslations.collections,
          export: {
            label: "Exportar a CSV",
            description: "Descargar todos los datos como archivo CSV",
          },
        },
      }

      const CustomWrapper = ({ children }: { children: React.ReactNode }) => (
        <I18nProvider translations={customTranslations}>
          {children}
        </I18nProvider>
      )

      const source = createMockSource({
        fetchData: vi.fn().mockResolvedValue({ records: [] }),
      })

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
          }),
        { wrapper: CustomWrapper }
      )

      expect(result.current.label).toBe("Exportar a CSV")
      expect(result.current.description).toBe(
        "Descargar todos los datos como archivo CSV"
      )
    })
  })

  describe("state", () => {
    test("disabled when source is loading", () => {
      const source = createMockSource({
        fetchData: vi.fn().mockResolvedValue({ records: [] }),
        isLoading: true,
      })

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
          }),
        { wrapper: TestWrapper }
      )

      expect(result.current.disabled).toBe(true)
    })

    test("not disabled when source is idle", () => {
      const source = createMockSource({
        fetchData: vi.fn().mockResolvedValue({ records: [] }),
        isLoading: false,
      })

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
          }),
        { wrapper: TestWrapper }
      )

      expect(result.current.disabled).toBe(false)
    })
  })

  describe("non-paginated export", () => {
    test("fetches all records and triggers CSV download", async () => {
      const records = mockRecords(5)
      const fetchData = vi.fn().mockResolvedValue({ records })

      const source = createMockSource({ fetchData })

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
            filename: "test_export",
          }),
        { wrapper: TestWrapper }
      )

      await act(async () => {
        await result.current.onClick()
      })

      expect(fetchData).toHaveBeenCalledOnce()
      expect(clickSpy).toHaveBeenCalledOnce()
      expect(blobCapture).toBeInstanceOf(Blob)

      const csvText = await readBlobAsText(blobCapture!)
      const lines = csvText.split("\n")

      expect(lines).toHaveLength(6)
      expect(lines[0]).toBe("Name,Email")
      expect(lines[1]).toBe("User 1,user1@example.com")
      expect(lines[5]).toBe("User 5,user5@example.com")
    })

    test("does not trigger download when no records returned", async () => {
      const fetchData = vi.fn().mockResolvedValue({ records: [] })
      const source = createMockSource({ fetchData })

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
          }),
        { wrapper: TestWrapper }
      )

      await act(async () => {
        await result.current.onClick()
      })

      expect(fetchData).toHaveBeenCalledOnce()
      expect(clickSpy).not.toHaveBeenCalled()
    })
  })

  describe("page-based pagination", () => {
    test("fetches all pages and merges records", async () => {
      const allRecords = mockRecords(75)
      const pageSize = 100 // EXPORT_PAGE_SIZE

      const fetchData = vi.fn().mockImplementation(({ pagination }) => {
        const page = pagination.currentPage
        const start = (page - 1) * pageSize
        const pageRecords = allRecords.slice(start, start + pageSize)
        return Promise.resolve({
          records: pageRecords,
          pagesCount: Math.ceil(allRecords.length / pageSize),
          currentPage: page,
          total: allRecords.length,
        })
      })

      const source = createMockSource({
        fetchData,
        paginationType: "pages",
      })

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
            filename: "paginated_export",
          }),
        { wrapper: TestWrapper }
      )

      await act(async () => {
        await result.current.onClick()
      })

      expect(fetchData).toHaveBeenCalledOnce()
      expect(clickSpy).toHaveBeenCalledOnce()

      const csvText = await readBlobAsText(blobCapture!)
      const lines = csvText.split("\n")

      expect(lines).toHaveLength(76)
    })

    test("fetches multiple pages when records span pages", async () => {
      const allRecords = mockRecords(250)
      const pageSize = 100

      const fetchData = vi.fn().mockImplementation(({ pagination }) => {
        const page = pagination.currentPage
        const start = (page - 1) * pageSize
        const pageRecords = allRecords.slice(start, start + pageSize)
        return Promise.resolve({
          records: pageRecords,
          pagesCount: Math.ceil(allRecords.length / pageSize),
          currentPage: page,
          total: allRecords.length,
        })
      })

      const source = createMockSource({
        fetchData,
        paginationType: "pages",
      })

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
          }),
        { wrapper: TestWrapper }
      )

      await act(async () => {
        await result.current.onClick()
      })

      expect(fetchData).toHaveBeenCalledTimes(3)

      const csvText = await readBlobAsText(blobCapture!)
      const lines = csvText.split("\n")

      expect(lines).toHaveLength(251)
    })
  })

  describe("infinite-scroll pagination", () => {
    test("follows cursor until hasMore is false", async () => {
      const allRecords = mockRecords(250)
      const pageSize = 100

      const fetchData = vi.fn().mockImplementation(({ pagination }) => {
        const cursorIndex = pagination.cursor ? parseInt(pagination.cursor) : 0
        const pageRecords = allRecords.slice(
          cursorIndex,
          cursorIndex + pageSize
        )
        const nextCursor = cursorIndex + pageSize
        return Promise.resolve({
          records: pageRecords,
          cursor:
            nextCursor < allRecords.length ? String(nextCursor) : undefined,
          hasMore: nextCursor < allRecords.length,
        })
      })

      const source = createMockSource({
        fetchData,
        paginationType: "infinite-scroll",
      })

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
          }),
        { wrapper: TestWrapper }
      )

      await act(async () => {
        await result.current.onClick()
      })

      expect(fetchData).toHaveBeenCalledTimes(3)

      const csvText = await readBlobAsText(blobCapture!)
      const lines = csvText.split("\n")

      expect(lines).toHaveLength(251)
    })
  })

  describe("filter/sorting passthrough", () => {
    test("passes currentFilters and currentSortings to fetchData", async () => {
      const fetchData = vi.fn().mockResolvedValue({
        records: mockRecords(1),
      })

      const source = createMockSource({ fetchData })
      // Override filters/sortings on the mock
      ;(source as unknown as Record<string, unknown>).currentFilters = {
        status: "active",
      }
      ;(source as unknown as Record<string, unknown>).currentSortings = {
        field: "name",
        order: "asc",
      }

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
          }),
        { wrapper: TestWrapper }
      )

      await act(async () => {
        await result.current.onClick()
      })

      expect(fetchData).toHaveBeenCalledWith(
        expect.objectContaining({
          filters: { status: "active" },
          sortings: [{ field: "name", order: "asc" }],
        })
      )
    })
  })

  describe("error handling", () => {
    test("catches fetch errors without crashing", async () => {
      const consoleError = vi
        .spyOn(console, "error")
        .mockImplementation(() => {})

      const fetchData = vi.fn().mockRejectedValue(new Error("Network failure"))

      const source = createMockSource({ fetchData })

      const { result } = renderHook(
        () =>
          useExportAction({
            source,
            currentVisualization: tableVisualization,
          }),
        { wrapper: TestWrapper }
      )

      await act(async () => {
        await result.current.onClick()
      })

      expect(consoleError).toHaveBeenCalledWith(
        "Export failed:",
        expect.any(Error)
      )
      expect(result.current.loading).toBe(false)

      consoleError.mockRestore()
    })
  })
})
