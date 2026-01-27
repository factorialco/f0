import { Pencil, Delete } from "@/icons/app"

export const TABS = [
  {
    id: "out-of-office",
    label: "Out of office",
  },
  {
    id: "missing-clock-in",
    label: "Missing clock in",
  },
  {
    id: "clocked-in",
    label: "Clocked in",
  },
  {
    id: "in-a-break",
    label: "In a break",
  },
]

export const OTHER_ACTIONS = [
  {
    label: "Edit",
    icon: Pencil,
    onClick: () => {},
    closeOnClick: true,
  },
  {
    label: "Delete",
    icon: Delete,
    onClick: () => {},
    closeOnClick: true,
  },
]
