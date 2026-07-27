import type { RouteObject } from "react-router"

import type { PrototypeMeta } from "@/prototypes/types"

import ControllingStepPoc from "./ControllingStepPoc"

/**
 * Composer entry for the migrated `controlling-step-poc` prototype.
 *
 * f0compose prototypes exported `meta` + a default component and drove
 * sub-views with `useSearchParams`. Composer expects `meta` + `routes`
 * (React Router). The whole screen — including its query-param sub-views
 * (`?expense=…`, tabs) — still works under a single index route, so we
 * just mount the existing component there.
 *
 * `meta` lives here (not in the component file) so ControllingStepPoc.tsx
 * exports only its component — keeps Vite Fast Refresh happy.
 */
export const meta: PrototypeMeta = {
  slug: "controlling-step-poc",
  title: "Controlling Step (POC)",
  description:
    "Spend management — IA r3. Top-level tabs: Expenses · Purchase invoices · Procurement · Cards. Inside Expenses: Submit · Approve · Control · Pending payment · Ready to export · Archive. Submit hosts the personal lifecycle; the five manage sub-tabs reuse ManageTab with variant-driven datasets.",
  category: "Other",
  module: "my-spending",
  audience: ["employee", "manager", "admin"],
  tags: ["spending", "expenses", "finance", "ia", "shell"],
  createdAt: "2026-05-11",
}

export const routes: RouteObject[] = [
  {
    index: true,
    element: <ControllingStepPoc />,
    handle: { crumb: meta.title },
  },
]
