import type { Project } from "../shared/data"
import {
  categoryDotColor,
  categoryLabel,
  statusLabel,
  statusVariant,
} from "../shared/helpers"

export const projectsColumns = [
  {
    id: "name",
    label: "Proyecto",
    sorting: "name",
    render: (item: Project) => item.name,
  },
  {
    id: "client",
    label: "Cliente",
    sorting: "client",
    render: (item: Project) => item.client ?? "—",
  },
  {
    id: "category",
    label: "Categoría",
    render: (item: Project) => ({
      type: "dotTag" as const,
      value: {
        label: categoryLabel[item.category],
        color: categoryDotColor[item.category],
      },
    }),
  },
  {
    id: "tracked",
    label: "Horas registradas",
    sorting: "tracked",
    render: (item: Project) =>
      `${item.trackedHours}h / ${item.plannedHours}h`,
  },
  {
    id: "rate",
    label: "Tarifa",
    sorting: "rate",
    render: (item: Project) => `${item.rate} €/h`,
  },
  {
    id: "status",
    label: "Estado",
    render: (item: Project) => ({
      type: "status" as const,
      value: {
        label: statusLabel[item.status],
        status: statusVariant[item.status],
      },
    }),
  },
]
