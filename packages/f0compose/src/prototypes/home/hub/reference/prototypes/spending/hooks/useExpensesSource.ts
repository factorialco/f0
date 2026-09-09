import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  Check,
  Cross,
  EyeVisible,
  Folder,
  Pin,
  Receipt,
  Suitcase,
} from "@factorialco/f0-react/icons/app"

import { applySort } from "@/prototypes/home/hub/reference/lib/applySort"
import { findEmployee } from "@/prototypes/home/hub/reference/mocks"

import type { Expense } from "../mocks/expenses"

import { FactorialAgentIcon as OneMark } from "../../../../../FactorialAgentIcon"
import { CURRENT_USER_ID, type Scope, type SpendingStrings } from "../state"

/**
 * useDataCollectionSource for the company-wide Expenses table. Reads the LIVE
 * expenses (so approve / reject re-render) plus the co-created `scope` (all vs.
 * mine) and `onlyDuplicates` flag. Presets expose Pending / Approved / Paid
 * with live count badges via `itemsCount`. The "Approve" item action is
 * `type: "primary"`, so it renders inline on row hover (only while pending);
 * the rest live in the overflow (⋯) menu.
 */
export function useExpensesSource(
  expenses: Expense[],
  scope: Scope,
  onlyDuplicates: boolean,
  t: SpendingStrings,
  approveExpense: (id: string) => void,
  rejectExpense: (id: string) => void
) {
  return useDataCollectionSource<Expense>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: t.filterStatus,
          options: {
            options: [
              { value: "pending", label: t.status.pending },
              { value: "approved", label: t.status.approved },
              { value: "paid", label: t.status.paid },
            ],
          },
        },
        category: {
          type: "in",
          label: t.filterCategory,
          options: {
            options: [
              { value: "accommodation", label: t.category.accommodation },
              { value: "per_diem", label: t.category.per_diem },
              { value: "meals", label: t.category.meals },
              { value: "transport", label: t.category.transport },
              {
                value: "private_transport",
                label: t.category.private_transport,
              },
              { value: "rail_travel", label: t.category.rail_travel },
              { value: "training", label: t.category.training },
              { value: "public_transport", label: t.category.public_transport },
              { value: "subscriptions", label: t.category.subscriptions },
              { value: "tolls", label: t.category.tolls },
              { value: "refreshments", label: t.category.refreshments },
            ],
          },
        },
      },
      presets: [
        {
          label: t.presetPending,
          filter: { status: ["pending"] },
          itemsCount: () =>
            expenses.filter((e) => e.status === "pending").length,
        },
        {
          label: t.presetApproved,
          filter: { status: ["approved"] },
          itemsCount: () =>
            expenses.filter((e) => e.status === "approved").length,
        },
        {
          label: t.presetPaid,
          filter: { status: ["paid"] },
          itemsCount: () => expenses.filter((e) => e.status === "paid").length,
        },
      ],
      sortings: {
        owner: { label: t.colOwner },
        documentDate: { label: t.colDocumentDate },
        amount: { label: t.colAmount },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedStatus = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const wantedCategory = Array.isArray(filters?.category)
            ? (filters.category as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = expenses
            .filter((e) =>
              scope === "mine" ? e.ownerId === CURRENT_USER_ID : true
            )
            .filter((e) => (onlyDuplicates ? e.alert === "duplicate" : true))
            .filter((e) =>
              wantedStatus.length === 0 ? true : wantedStatus.includes(e.status)
            )
            .filter((e) =>
              wantedCategory.length === 0
                ? true
                : wantedCategory.includes(e.category)
            )
            .filter((e) => {
              if (term === "") return true
              const owner =
                findEmployee(e.ownerId)?.fullName.toLowerCase() ?? ""
              return owner.includes(term)
            })

          const sorted = applySort(filtered, sortings, (e, field) => {
            switch (field) {
              case "owner":
                return findEmployee(e.ownerId)?.fullName.toLowerCase() ?? ""
              case "documentDate":
                return Date.parse(e.documentDate)
              case "amount":
                return e.amount
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 20
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
      // "New expense" split button: because the actions carry `description`,
      // OneDataCollection renders them as a dropdown (icon + title + caption)
      // under the primary button labelled `primaryActionsLabel`. "Skip the
      // form" hands off to One (opens the onecast).
      primaryActionsLabel: t.newExpense.label,
      primaryActions: () => [
        {
          label: t.newExpense.skip,
          description: t.newExpense.skipDesc,
          icon: OneMark,
          onClick: () => {
            window.dispatchEvent(new Event("home-agent:open"))
          },
        },
        {
          label: t.newExpense.regular,
          description: t.newExpense.regularDesc,
          icon: Receipt,
          onClick: () => {},
        },
        {
          label: t.newExpense.mileage,
          description: t.newExpense.mileageDesc,
          icon: Pin,
          onClick: () => {},
        },
        {
          label: t.newExpense.perDiem,
          description: t.newExpense.perDiemDesc,
          icon: Suitcase,
          onClick: () => {},
        },
        {
          label: t.newExpense.group,
          description: t.newExpense.groupDesc,
          icon: Folder,
          onClick: () => {},
        },
      ],
      itemActions: (item: Expense) => [
        {
          label: t.approve,
          icon: Check,
          type: "primary",
          enabled: item.status === "pending",
          onClick: () => approveExpense(item.id),
        },
        {
          label: t.viewDetails,
          icon: EyeVisible,
          onClick: () => {},
        },
        { type: "separator" },
        {
          label: t.reject,
          icon: Cross,
          critical: true,
          enabled: item.status === "pending",
          onClick: () => rejectExpense(item.id),
        },
      ],
    },
    [expenses, scope, onlyDuplicates, t, approveExpense, rejectExpense]
  )
}
