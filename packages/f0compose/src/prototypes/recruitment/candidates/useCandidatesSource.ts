import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { type Candidate, candidates } from "@/fixtures"

/**
 * useDataCollectionSource setup for the Candidates table:
 * - State filter + presets (Active / Talent pool / Archived). These are
 *   presets, NOT sub-tabs — keep navigation primary-only.
 * - Search enabled (synced).
 * - Per-row actions: View / Send message / Archive.
 */
export function useCandidatesSource() {
  return useDataCollectionSource<Candidate>(
    {
      filters: {
        state: {
          type: "in",
          label: "State",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "talent-pool", label: "Talent pool" },
              { value: "archived", label: "Archived" },
            ],
          },
        },
      },
      currentFilters: { state: ["active"] },
      presets: [
        { label: "Active", filter: { state: ["active"] } },
        { label: "Talent pool", filter: { state: ["talent-pool"] } },
        { label: "Archived", filter: { state: ["archived"] } },
      ],
      dataAdapter: {
        fetchData: ({ filters }) => {
          const raw = filters?.state
          const wanted = Array.isArray(raw) ? (raw as string[]) : []
          const filtered =
            wanted.length === 0
              ? candidates
              : candidates.filter((c) => wanted.includes(c.state))
          return { records: filtered }
        },
      },
      sortings: {
        fullName: { label: "Name" },
        appliedOn: { label: "Applied on" },
        rating: { label: "Rating" },
      },
      search: { enabled: true, sync: true },
      primaryActions: () => ({
        label: "New candidate",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "View profile", onClick: () => {} },
        { label: "Send message", onClick: () => {} },
        { type: "separator" },
        { label: "Archive", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
