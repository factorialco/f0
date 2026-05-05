import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add, Star, StarFilled } from "@factorialco/f0-react/icons/app"

import { type Job, jobs } from "@/fixtures"

/**
 * useDataCollectionSource setup for the Jobs table:
 * - Status filter + presets (Published / Unlisted / Draft / Archived).
 * - Pin/Unpin row action branched on `item.pinned`.
 * - Primary action "New job opening".
 *
 * fetchData is mock-only — it slices the in-memory `jobs` fixture by the
 * currently-selected status filter.
 */
export function useJobsSource() {
  return useDataCollectionSource<Job>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "published", label: "Published" },
              { value: "unlisted", label: "Unlisted" },
              { value: "draft", label: "Draft" },
              { value: "archived", label: "Archived" },
            ],
          },
        },
      },
      currentFilters: { status: ["published", "draft"] },
      presets: [
        { label: "Published", filter: { status: ["published"] } },
        { label: "Unlisted", filter: { status: ["unlisted"] } },
        { label: "Draft", filter: { status: ["draft"] } },
        { label: "Archived", filter: { status: ["archived"] } },
      ],
      dataAdapter: {
        fetchData: ({ filters }) => {
          const raw = filters?.status
          const wanted = Array.isArray(raw) ? (raw as string[]) : []
          const filtered =
            wanted.length === 0
              ? jobs
              : jobs.filter((j) => wanted.includes(j.status))
          return { records: filtered }
        },
      },
      sortings: {
        title: { label: "Job opening" },
        location: { label: "Location" },
        publishedAt: { label: "Published" },
      },
      primaryActions: () => ({
        label: "New job opening",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: (item: Job) => [
        item.pinned
          ? { label: "Unpin job", icon: StarFilled, onClick: () => {} }
          : { label: "Pin job", icon: Star, onClick: () => {} },
        { label: "View job opening", onClick: () => {} },
        { label: "Edit", onClick: () => {} },
        { type: "separator" },
        { label: "Archive", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
