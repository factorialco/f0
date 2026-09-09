import { JobsRatesBody } from "./pages/JobsRatesBody"
import { PeopleBody } from "./pages/PeopleBody"
import { ProjectsLayout } from "./pages/ProjectsLayout"
import { ProjectsOverviewBody } from "./pages/ProjectsOverviewBody"
import { ScheduleBody } from "./pages/ScheduleBody"
import { TrackingBody } from "./pages/TrackingBody"

export const meta = {
  slug: "projects",
  title: "Projects",
  description:
    "Projects list with three in-table views — All, Assigned to me, and Created by me.",
  category: "Other",
  module: "my-projects",
  audience: ["admin", "manager"],
  tags: ["projects", "data-collection", "views"],
  createdAt: "2026-06-24",
  author: "Jonathan Centeno",
}

export const routes = [
  {
    element: <ProjectsLayout />,
    handle: { crumb: meta.title },
    children: [
      {
        index: true,
        element: <ProjectsOverviewBody />,
        handle: { crumb: "Overview" },
      },
      {
        path: "schedule",
        element: <ScheduleBody />,
        handle: { crumb: "Schedule" },
      },
      {
        path: "tracking",
        element: <TrackingBody />,
        handle: { crumb: "Tracking" },
      },
      {
        path: "jobs-and-rates",
        element: <JobsRatesBody />,
        handle: { crumb: "Jobs and rates" },
      },
      { path: "people", element: <PeopleBody />, handle: { crumb: "People" } },
    ],
  },
]
