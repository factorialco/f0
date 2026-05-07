import { type Employee, findDepartment } from "@/fixtures"

export const peopleColumns = [
  {
    id: "person",
    label: "Persona",
    sorting: "name",
    render: (item: Employee) => ({
      type: "person" as const,
      value: {
        firstName: item.preferredName ?? item.fullName.split(" ")[0],
        lastName: item.fullName.split(" ").slice(-1).join(" "),
        src: item.avatarUrl,
      },
    }),
  },
  {
    id: "role",
    label: "Puesto",
    sorting: "role",
    render: (item: Employee) => item.role,
  },
  {
    id: "department",
    label: "Departamento",
    render: (item: Employee) =>
      findDepartment(item.departmentId)?.name ?? "—",
  },
  {
    id: "location",
    label: "Ubicación",
    render: (item: Employee) => item.location,
  },
]
