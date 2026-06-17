import type { ReviewCampaign } from "@/fixtures/performance"

/** ISO YYYY-MM-DD → DD/MM/YYYY (matches the production "Created on" column). */
function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-")
  return `${d}/${m}/${y}`
}

const STATUS_META: Record<
  ReviewCampaign["status"],
  { label: string; status: "positive" | "warning" | "neutral" | "info" }
> = {
  active: { label: "Active", status: "positive" },
  draft: { label: "Draft", status: "warning" },
  finished: { label: "Finished", status: "neutral" },
  archived: { label: "Archived", status: "info" },
}

/**
 * Columns for the Review campaigns table: Name, Status, Participation rate
 * (progress bar), Created on. The participation bar turns red when an active
 * campaign is significantly behind, mirroring the warning marker in the
 * production screenshot.
 */
export const reviewsListColumns = [
  {
    id: "name",
    label: "Name",
    sorting: "name",
    frozen: true,
    render: (item: ReviewCampaign) => item.name,
  },
  {
    id: "status",
    label: "Status",
    sorting: "status",
    render: (item: ReviewCampaign) => ({
      type: "status" as const,
      value: STATUS_META[item.status],
    }),
  },
  {
    id: "participation",
    label: "Participation rate",
    render: (item: ReviewCampaign) => {
      if (item.completed == null || item.total == null) return "-"
      const behind =
        item.status === "active" && item.completed / item.total < 0.5
      return {
        type: "progressBar" as const,
        value: {
          value: item.completed,
          max: item.total,
          label: `${item.completed}/${item.total}`,
          color: behind ? "red" : undefined,
        },
      }
    },
  },
  {
    id: "createdOn",
    label: "Created on",
    sorting: "createdOn",
    render: (item: ReviewCampaign) => formatDate(item.createdOn),
  },
]
