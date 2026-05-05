import { F0Box, F0Heading } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { useMemo } from "react"

import { jobs } from "@/fixtures"

import { jobsColumns } from "./jobsColumns"
import { PinnedJobCard } from "./PinnedJobCard"
import { useJobsSource } from "./useJobsSource"

/**
 * "Jobs" tab body: pinned jobs grid + the OneDataCollection table.
 *
 * `activeSubTab` is owned by the parent so the secondary tabs can sit in the
 * Page header slot. Only "Job openings" has demo content; the "Requisitions"
 * sub-tab is part of the navigation scaffold.
 */
export function JobsTab({ activeSubTab }: { activeSubTab: string }) {
  void activeSubTab
  const pinned = useMemo(() => jobs.filter((j) => j.pinned), [])
  const source = useJobsSource()

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {pinned.length > 0 && (
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Heading content="Pinned jobs" variant="heading" as="h2" />
          <F0Box display="grid" columns="1" md={{ columns: "2" }} gap="md">
            {pinned.map((job) => (
              <PinnedJobCard key={job.id} job={job} />
            ))}
          </F0Box>
        </F0Box>
      )}

      <OneDataCollection
        source={source}
        visualizations={[{ type: "table", options: { columns: jobsColumns } }]}
      />
    </F0Box>
  )
}
