import {
  ACCESS_LABEL,
  CONTRACT_LABEL,
  CONTRACT_VARIANT,
  type PersonRow,
} from "./peopleData"

/**
 * Columns for the People table (Figma 2730:461223): Employee as an avatar
 * + name, then three plain-text cells and the contract state as a dot tag.
 *
 * All copy is English, per Oskar (2026-09-01): the frame writes
 * "Contratado" beside "Total empleados" / "Altas" / "Bajas", and the whole
 * set is translated rather than half of it.
 *
 * Renderers return strings or compound { type, value } objects, never JSX
 * (the same rule policiesColumns follows).
 */
export const peopleColumns = [
  {
    id: "employee",
    label: "Employee",
    sorting: "name",
    render: (item: PersonRow) => ({
      type: "person" as const,
      value: {
        firstName: item.firstName,
        lastName: item.lastName,
        src: item.avatar,
      },
    }),
  },
  {
    id: "workplace",
    label: "Workplace",
    sorting: "workplace",
    render: (item: PersonRow) => item.workplace,
  },
  {
    id: "hired",
    label: "Hired",
    sorting: "hired",
    render: (item: PersonRow) => item.hired,
  },
  {
    // Plain text in the frame, not a tag — only the contract state is
    // tinted (checked against 2730:461223, where this cell is a bare
    // ValueDisplay label).
    id: "access",
    label: "Access status",
    render: (item: PersonRow) => ACCESS_LABEL[item.access],
  },
  {
    id: "contract",
    label: "Contract status",
    render: (item: PersonRow) => ({
      type: "status" as const,
      value: {
        status: CONTRACT_VARIANT[item.contract],
        label: CONTRACT_LABEL[item.contract],
      },
    }),
  },
]
