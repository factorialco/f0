import { OverviewBody } from "./pages/OverviewBody"
import { ProfileLayout } from "./pages/ProfileLayout"

export const meta = {
  slug: "profile",
  title: "Profile",
  description:
    "Employee profile — the Overview dashboard from the reference screen: clock status, goals, time off, timesheet, tasks, performance, projects, expenses, employee pulse, training and a right-hand details panel, under the profile tab strip.",
  category: "People",
  module: "profile",
  audience: ["admin", "manager", "employee"],
  tags: ["profile", "overview", "dashboard"],
  createdAt: "2026-06-24",
  author: "Jonathan Centeno",
}

export const routes = [
  {
    element: <ProfileLayout />,
    handle: { crumb: meta.title },
    children: [
      { index: true, element: <OverviewBody />, handle: { crumb: "Overview" } },
    ],
  },
]
