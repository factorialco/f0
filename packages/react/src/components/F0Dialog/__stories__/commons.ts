import { Meta } from "@storybook/react-vite"
import { F0Dialog } from "../F0Dialog"
import { dialogSizes } from "../types"
import { Pencil, Delete } from "@/icons/app"

export const argTypes: Meta<typeof F0Dialog>["argTypes"] = {
  size: {
    description: "The size of the dialog.",
    control: {
      type: "select",
      options: dialogSizes,
    },
    table: {
      type: { summary: dialogSizes.join(" | ") },
      defaultValue: { summary: "md" },
    },
  },
}

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
  },
  {
    label: "Delete",
    icon: Delete,
    onClick: () => {},
  },
]
