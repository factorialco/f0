import { BudgetsBody } from "./pages/BudgetsBody"
import { CoursesBody } from "./pages/CoursesBody"
import { InsightsBody } from "./pages/InsightsBody"
import { RequestsBody } from "./pages/RequestsBody"
import { TrainingLayout } from "./pages/TrainingLayout"

export const meta = {
  slug: "training",
  title: "Training",
  description:
    "Training course catalog — a courses table (code, participants, validity, catalog, status, requirement, competencies) with All / My courses views, plus Budgets, Requests and Insights tabs.",
  category: "Talent",
  module: "my-training",
  audience: ["admin", "manager"],
  tags: ["training", "courses", "data-collection", "views"],
  createdAt: "2026-06-24",
  author: "Jonathan Centeno",
}

export const routes = [
  {
    element: <TrainingLayout />,
    handle: { crumb: meta.title },
    children: [
      { index: true, element: <CoursesBody />, handle: { crumb: "Courses" } },
      {
        path: "budgets",
        element: <BudgetsBody />,
        handle: { crumb: "Budgets" },
      },
      {
        path: "requests",
        element: <RequestsBody />,
        handle: { crumb: "Requests" },
      },
      {
        path: "insights",
        element: <InsightsBody />,
        handle: { crumb: "Insights" },
      },
    ],
  },
]
