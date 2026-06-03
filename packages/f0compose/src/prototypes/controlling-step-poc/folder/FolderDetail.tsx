import {
  expenseGroups,
  expenses,
  type ExpenseGroup,
} from "@/fixtures"
import { F0Box, F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
  ResourceHeader,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Cross,
  Delete,
  Download,
  Pencil,
  Upload,
} from "@factorialco/f0-react/icons/app"
import { useMemo } from "react"

import { applySort } from "@/lib/applySort"

import { spendingColumns } from "../shared/columns"
import { expenseToRow, type SpendingRow } from "../shared/rows"
import { STATUS_LABEL, STATUS_VARIANT } from "../shared/expenseStatus"

const eurFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR",
})
function formatEUR(amount: number) {
  return eurFormatter.format(amount)
}

/**
 * Folder detail sub-screen.
 *
 * BR-009: folders keep all their existing operations — submit for
 * approval, export PDF, rename, delete, and they aggregate a total.
 *
 * The inner table reuses the unified `spendingColumns` minus the
 * folder cell quirks; nested expenses are rendered as plain rows.
 */
export function FolderDetail(props: {
  folderId: string
  onBack: () => void
  /** Open the full-page expense detail for a row inside the folder. */
  onExpenseClick: (expenseId: string) => void
}) {
  // Folders today don't carry a list of expense ids in the fixture, so
  // we deterministically take the first N expenses to hydrate the demo.
  const folder: ExpenseGroup | undefined = expenseGroups.find(
    (g) => g.id === props.folderId
  )
  const memberRows = useMemo(() => {
    if (!folder) return []
    return expenses.slice(0, folder.expenseCount).map(expenseToRow)
  }, [folder])

  const source = useDataCollectionSource<SpendingRow>(
    {
      search: { enabled: true, sync: true },
      filters: {},
      currentFilters: {},
      sortings: {
        name: { label: "Provider" },
        date: { label: "Date" },
        amount: { label: "Amount" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ search, sortings, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = memberRows.filter((r) =>
            term === "" ? true : r.name.toLowerCase().includes(term)
          )
          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "name":
                return r.name.toLowerCase()
              case "amount":
                return r.amount
              case "date":
                return Date.parse(r.date)
              default:
                return null
            }
          })
          const perPage = pagination?.perPage ?? 10
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      itemActions: () => [
        { label: "View details", onClick: () => {} },
        { label: "Remove from folder", onClick: () => {}, critical: true },
      ],
      // Row checkboxes — folder detail's only meaningful bulk action
      // is removing expenses from the folder.
      selectable: (item: SpendingRow) => item.id,
      bulkActions: () => ({
        primary: [
          {
            id: "remove-from-folder",
            label: "Remove from folder",
            icon: Cross,
            critical: true,
          },
        ],
      }),
    },
    [memberRows]
  )

  if (!folder) {
    return (
      <Page
        header={
          <PageHeader
            module={{ id: "my_spending", name: "Spend management", href: "/p/controlling-step-poc?tab=submit&sub=expenses" }}
            breadcrumbs={[{ id: "missing", label: "Folder not found" }]}
          />
        }
      >
        <StandardLayout>
          <F0Text
            content="No folder matches that id. Try another one."
            variant="description"
          />
        </StandardLayout>
      </Page>
    )
  }

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "my_spending",
              name: "Spend management",
              href: "/p/controlling-step-poc?tab=submit&sub=expenses",
            }}
            breadcrumbs={[{ id: folder.id, label: folder.name }]}
          />
          <ResourceHeader
            title={folder.name}
            status={{
              label: "Status",
              text: STATUS_LABEL[folder.status],
              variant: STATUS_VARIANT[folder.status],
            }}
            metadata={[
              {
                label: "Total cost",
                value: {
                  type: "text",
                  content: formatEUR(folder.reimbursableAmount),
                },
              },
              {
                label: "Legal entity",
                value: {
                  type: "text",
                  content: "Barcelona Legal entity",
                },
              },
            ]}
            primaryAction={{
              label: "Send for approval",
              icon: Upload,
              onClick: () => {},
            }}
            secondaryActions={[
              // BaseHeader renders secondaryActions in array order to
              // the LEFT of the primary CTA. Order matches the
              // screenshot: [Delete folder] [Edit] | [Send for approval].
              {
                label: "Delete folder",
                icon: Delete,
                variant: "outline",
                onClick: () => {},
              },
              {
                label: "Edit",
                icon: Pencil,
                variant: "outline",
                onClick: () => {},
              },
            ]}
            otherActions={[
              // Demoted to the 3-dot menu — useful escape hatch for
              // finance, but not loud enough to deserve its own
              // header slot per the new layout.
              { label: "Export PDF", icon: Download, onClick: () => {} },
            ]}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="lg">
          <OneDataCollection
            source={{
              ...source,
              // Expense rows open the detail page; non-expense rows
              // (e.g. nested folders) must return `undefined` so the
              // OneTable cell falls through to `itemUrl`. A no-op
              // function here would block navigation — see ManageTab
              // for the full explanation.
              itemOnClick: ((item: SpendingRow) =>
                item.kind === "expense"
                  ? () => props.onExpenseClick(item.id)
                  : undefined) as unknown as (
                item: SpendingRow
              ) => () => void,
            }}
            visualizations={[
              { type: "table", options: { columns: [...spendingColumns] } },
            ]}
          />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}
