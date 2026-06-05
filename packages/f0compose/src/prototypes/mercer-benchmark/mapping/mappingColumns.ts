import type { MappingRow } from "./mappingTypes"
import { findMercerRole } from "../shared/mercerCatalog"
import { statusLabel, statusVariant } from "../shared/statusHelpers"

export const mappingColumns = [
  {
    id: "title",
    label: "Role",
    sorting: "title",
    render: (item: MappingRow) => {
      if (item.isGroup) return item.title
      return item.level
    },
  },
  {
    id: "status",
    label: "Status",
    render: (item: MappingRow) => {
      if (item.isGroup) {
        const total = item.childCount ?? 0
        const confirmed = item.confirmedChildCount ?? 0
        const pct = total > 0 ? Math.round((confirmed / total) * 100) : 0
        return {
          type: "progressBar" as const,
          value: {
            value: confirmed,
            max: total,
            label: `${confirmed}/${total}`,
            color: pct >= 100 ? "green" : "yellow",
          },
        }
      }
      return {
        type: "status" as const,
        value: {
          label: statusLabel(item.status),
          status: statusVariant(item.status),
        },
      }
    },
  },
  {
    id: "mercerMapping",
    label: "Mercer mapping",
    render: (item: MappingRow) => {
      if (item.isGroup) return ""
      const code = item.confirmedMercerCode ?? item.suggestedMercerCode
      if (!code) return "—"
      const mercer = findMercerRole(code)
      return mercer ? mercer.title : code
    },
  },
]
