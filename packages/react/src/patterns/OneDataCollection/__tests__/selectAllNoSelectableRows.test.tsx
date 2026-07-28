import { screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"

import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import { zeroRender as render } from "@/testing/test-utils"

import { useDataCollectionSource } from "../hooks/useDataCollectionSource"
import { OneDataCollection } from "../index"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

type Row = { id: string; name: string; locked: boolean }

const TOTAL = 20
const PER_PAGE = 2
// Only page 1 is locked, so 18 of the 20 records are actually selectable.
const SELECTABLE_TOTAL = TOTAL - PER_PAGE

const pageRecords = (currentPage: number): Row[] =>
  Array.from({ length: PER_PAGE }, (_, i) => ({
    id: `${currentPage}-${i}`,
    name: `Row ${currentPage}-${i}`,
    locked: currentPage === 1,
  }))

const columns = [{ label: "Name", render: (item: Row) => item.name }] as const

const useTestSource = (fetchSelectableTotal?: () => Promise<number>) =>
  useDataCollectionSource({
    selectable: (item: Row) => (item.locked ? undefined : item.id),
    allPagesSelection: true,
    fetchSelectableTotal,
    bulkActions: () => ({ primary: [{ label: "Archive", id: "archive" }] }),
    dataAdapter: {
      paginationType: "pages",
      perPage: PER_PAGE,
      fetchData: async (options) => {
        const currentPage =
          ("pagination" in options ? options.pagination?.currentPage : 1) ?? 1
        return {
          records: pageRecords(currentPage),
          total: TOTAL,
          currentPage,
          perPage: PER_PAGE,
          pagesCount: TOTAL / PER_PAGE,
          type: "pages" as const,
        }
      },
    },
  })

// The source must live in the same root as the collection: `selectableTotal`
// resolves asynchronously, and a source snapshot taken from renderHook would
// never carry the resolved value.
const Harness = ({
  fetchSelectableTotal,
}: {
  fetchSelectableTotal?: () => Promise<number>
}) => (
  <OneDataCollection
    source={useTestSource(fetchSelectableTotal)}
    visualizations={[{ type: "table", options: { columns } }]}
  />
)

const renderCollection = (fetchSelectableTotal?: () => Promise<number>) =>
  render(
    <TestWrapper>
      <Harness fetchSelectableTotal={fetchSelectableTotal} />
    </TestWrapper>
  )

describe("select all with no selectable rows on the current page", () => {
  test("offers the cross-page CTA and disables the inert header checkbox", async () => {
    renderCollection()

    await waitFor(() => {
      expect(screen.getByText("Row 1-0")).toBeInTheDocument()
    })

    // The CTA must be offered without a prior selection — the header checkbox
    // can't produce one on this page.
    const cta = await screen.findByRole("button", { name: "Select all items" })

    const [headerCheckbox] = screen.getAllByRole("checkbox")
    expect(headerCheckbox).toBeDisabled()

    await userEvent.setup().click(cta)

    await waitFor(() => {
      expect(screen.getAllByText("All items selected").length).toBeGreaterThan(
        0
      )
    })
  })

  test("never shows paginationInfo.total as the selectable count", async () => {
    // 20 records but only 18 selectable: showing "20" would be a lie, so the
    // label drops the number entirely.
    renderCollection()

    await waitFor(() => {
      expect(screen.getByText("Row 1-0")).toBeInTheDocument()
    })

    expect(
      screen.queryByRole("button", { name: `Select all ${TOTAL} items` })
    ).not.toBeInTheDocument()
  })

  test("uses the consumer-provided selectable total when available", async () => {
    const fetchSelectableTotal = vi.fn(async () => SELECTABLE_TOTAL)
    renderCollection(fetchSelectableTotal)

    const cta = await screen.findByRole("button", {
      name: `Select all ${SELECTABLE_TOTAL} items`,
    })

    expect(fetchSelectableTotal).toHaveBeenCalled()

    await userEvent.setup().click(cta)

    await waitFor(() => {
      expect(
        screen.getAllByText(`All ${SELECTABLE_TOTAL} items selected`).length
      ).toBeGreaterThan(0)
    })
  })
})
