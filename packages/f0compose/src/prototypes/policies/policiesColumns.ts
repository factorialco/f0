import type { Policy } from "@/fixtures"
import { relativeDate } from "@/fixtures"

/**
 * Column definitions for the Policies (Handbook Pages) table.
 */
export const policiesColumns = [
  {
    id: "title",
    label: "Title",
    sorting: "title",
    frozen: true,
    render: (item: Policy) => item.title,
  },
  {
    id: "owner",
    label: "Created by",
    render: (item: Policy) => ({
      type: "person" as const,
      value: {
        firstName: item.ownerName.split(" ")[0] ?? "",
        lastName: item.ownerName.split(" ").slice(1).join(" "),
        src: item.ownerAvatarUrl,
      },
    }),
  },
  {
    id: "folder",
    label: "Location",
    render: (item: Policy) =>
      item.visibility === "private"
        ? "—"
        : {
            type: "tag" as const,
            value: { label: item.folder },
          },
  },
  {
    id: "status",
    label: "Status",
    render: (item: Policy) => ({
      type: "status" as const,
      value: {
        label: item.visibility === "private" ? "Draft" : "Public",
        status: item.visibility === "private" ? "neutral" : "positive",
      },
    }),
  },
  {
    id: "updatedAt",
    label: "Updated",
    sorting: "updatedAt",
    render: (item: Policy) =>
      item.lastPublishedAt
        ? relativeDate(item.lastPublishedAt)
        : relativeDate(item.updatedAt),
  },
]
