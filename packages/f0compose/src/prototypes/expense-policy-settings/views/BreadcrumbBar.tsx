import { F0Box } from "@factorialco/f0-react"
import {
  Breadcrumbs,
  type BreadcrumbItemType,
} from "@factorialco/f0-react/dist/experimental"

import type { NavEntryId } from "../nav/navConfig"
import type { FormSubStepId } from "../wizard/useWizardState"
import type { PolicyView } from "./viewRouter"

/**
 * In-canvas breadcrumb that sits above the active view's title (spec
 * §3). It mirrors the style of the PageHeader breadcrumb but lives
 * inside the main content area, so users always have a clear path
 * back from a sub-view.
 *
 * Nav coverage (iterated): renders for both `expense-forms` and
 * `approval-flows` so the two landings share a single visual
 * vocabulary. The leaf segment (the bold, non-clickable label at
 * the end of the trail) doubles as the section heading — that's
 * why neither landing renders its own H1 in the body, matching the
 * Factorial Settings pattern.
 *
 * Why we accept `nav` explicitly: the URL `view` state can't fully
 * disambiguate which surface we're on (a `forms-summary` URL is
 * the default for *both* nav entries — see `viewRouter.ts` for the
 * reasoning). The active nav is component state on the page; the
 * router doesn't know about it, so we plumb it in.
 *
 * Navigation: the F0 Breadcrumb component only follows `href` props
 * (its underlying `Link` ignores `onClick`-only items and renders
 * disabled `<span>` for items without `href`). The leaf segment
 * omits `href` so the component renders it as the current
 * (bold, non-clickable) page item.
 */
export function BreadcrumbBar(props: {
  nav: NavEntryId
  view: PolicyView
  // Optional flow name used when rendering the `flow-detail` leaf.
  // We don't resolve it here (the bar doesn't import data state);
  // the caller passes it down from whatever has the flow handy.
  flowName?: string
}) {
  const items: BreadcrumbItemType[] = []

  if (props.nav === "expense-forms") {
    if (props.view.kind === "forms-summary") {
      items.push({ id: "expense-forms", label: "Expense types" })
    } else if (props.view.kind === "forms-detail") {
      items.push({
        id: "expense-forms",
        label: "Expense types",
        href: hrefForView({ kind: "forms-summary" }),
      })
      items.push({
        id: "forms-detail",
        label: labelForFormType(props.view.formType),
      })
    } else {
      // Unknown view kind for this nav — render the section root
      // defensively so the breadcrumb never disappears.
      items.push({ id: "expense-forms", label: "Expense types" })
    }
  } else if (props.nav === "approval-flows") {
    if (props.view.kind === "flow-detail") {
      items.push({
        id: "approval-flows",
        label: "Approval flows",
        href: hrefForView({ kind: "forms-summary" }),
      })
      items.push({
        id: "flow-detail",
        label: props.flowName ?? "Approval flow",
      })
    } else {
      items.push({ id: "approval-flows", label: "Approval flows" })
    }
  } else if (props.nav === "certified-documents") {
    // Certified documents is a flat surface (no sub-views), so the
    // breadcrumb is just the section leaf — which doubles as the
    // page title, matching Expense types and Approval flows.
    items.push({ id: "certified-documents", label: "Certified documents" })
  } else {
    // Other navs don't render a breadcrumb yet. Returning null lets
    // the caller render its own section header without us emitting
    // an empty bar.
    return null
  }

  return (
    // Asymmetric padding: `paddingTop="xs"` keeps a small amount of
    // air above the breadcrumb (separating it from the PageHeader
    // chrome) while `paddingBottom="none"` collapses the gap to the
    // section subtitle below. Designer feedback (iterated twice):
    // the H1↔subtitle distance kept reading as too generous. With
    // zero bottom padding here, the only remaining spacer is the
    // parent canvas column's `gap="md"`, which lands the H1↔subtitle
    // distance roughly half of where it was after the prior tighten.
    // Applies uniformly to every nav that uses the breadcrumb.
    <F0Box paddingTop="xs" paddingBottom="none">
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
    case "flow-detail":
      return `${base}?view=flow-detail&flow=${encodeURIComponent(view.flowId)}`
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
