import type { Policy, PolicyStatus } from "./policiesData"

/**
 * Column definitions for the Policies table (Figma 1350:190929): name,
 * creator as a bare avatar, status dot tag, relative last update.
 * Renderers return strings or compound { type, value } objects — no JSX.
 */

const STATUS_VARIANT: Record<
  PolicyStatus,
  "positive" | "neutral" | "warning"
> = {
  published: "positive",
  draft: "neutral",
  outdated: "warning",
}

const STATUS_LABEL: Record<PolicyStatus, string> = {
  published: "Published",
  draft: "Draft",
  outdated: "Outdated",
}

export const policiesColumns = [
  {
    id: "name",
    label: "Policy name",
    sorting: "name",
    render: (item: Policy) => item.name,
  },
  {
    id: "createdBy",
    label: "Created by",
    render: (item: Policy) => ({
      type: "avatarList" as const,
      value: { type: "person" as const, avatarList: [item.createdBy], max: 1 },
    }),
  },
  {
    id: "status",
    label: "Status",
    render: (item: Policy) => ({
      type: "status" as const,
      value: {
        status: STATUS_VARIANT[item.status],
        label: STATUS_LABEL[item.status],
      },
    }),
  },
  {
    id: "lastUpdate",
    label: "Last update",
    sorting: "lastUpdate",
    render: (item: Policy) => item.lastUpdate,
  },
]
