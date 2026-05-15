import { F0Box } from "@factorialco/f0-react"
import {
  Breadcrumbs,
  type BreadcrumbItemType,
} from "@factorialco/f0-react/dist/experimental"

import type { FormSubStepId } from "../wizard/useWizardState"
import type { PolicyView } from "./viewRouter"

/**
 * In-canvas breadcrumb that sits above the active view's title (spec
 * §3). It mirrors the style of the PageHeader breadcrumb but lives
 * inside the main content area, so users always have a clear path
 * back from a sub-view.
 *
 * Iterated UX: there are only two sub-views now —
 * `forms-summary` (landing) and `forms-detail` (per form type).
 * Categories / Subcategories / Payment methods are no longer
 * separate screens (they live inline + in modals on the detail
 * view), so the breadcrumb stays shallow.
 *
 * Navigation: the F0 Breadcrumb component only follows `href` props
 * (its underlying `Link` ignores `onClick`-only items and renders
 * disabled `<span>` for items without `href`). The leaf segment
 * omits `href` so the component renders it as the current
 * (bold, non-clickable) page item.
 */
export function BreadcrumbBar(props: { view: PolicyView }) {
  const items: BreadcrumbItemType[] = []

  if (props.view.kind === "forms-summary") {
    items.push({ id: "expense-forms", label: "Expense forms" })
  } else {
    items.push({
      id: "expense-forms",
      label: "Expense forms",
      href: hrefForView({ kind: "forms-summary" }),
    })
    items.push({
      id: "forms-detail",
      label: labelForFormType(props.view.formType),
    })
  }

  return (
    <F0Box paddingY="sm">
      <Breadcrumbs breadcrumbs={items} />
    </F0Box>
  )
}

/**
 * Build the URL for a given view. Keeps the URL shape in one place
 * so this file and `viewRouter.ts` stay in sync.
 */
export function hrefForView(view: PolicyView): string {
  const base = "/p/expense-policy-settings"
  switch (view.kind) {
    case "forms-summary":
      return base
    case "forms-detail":
      return `${base}?view=forms-detail&type=${encodeURIComponent(view.formType)}`
  }
}

function labelForFormType(t: FormSubStepId): string {
  switch (t) {
    case "regular":
      return "Regular expenses"
    case "per-diem":
      return "Per diem"
    case "mileage":
      return "Mileage"
  }
}
