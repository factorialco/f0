import type { Role } from "../shared/data"

export const rolesColumns = [
  {
    id: "name",
    label: "Puesto de trabajo",
    sorting: "name",
    render: (item: Role) => item.name,
  },
  {
    id: "rate",
    label: "Tarifa por hora",
    sorting: "rate",
    render: (item: Role) => `${item.rate} €/h`,
  },
  {
    id: "currency",
    label: "Moneda",
    render: (item: Role) => item.currency,
  },
  {
    id: "people",
    label: "Personas asignadas",
    sorting: "people",
    render: (item: Role) => String(item.peopleCount),
  },
]
