import { Meta } from "@storybook/react-vite";
import { F0Dialog } from "../F0Dialog";
import { dialogPositions, dialogWidths } from "../types";
import { Pencil, Delete } from "@/icons/app";

export const argTypes: Meta<typeof F0Dialog>["argTypes"] = {
  position: {
    description: "The position of the dialog",
    control: {
      type: "select",
      options: dialogPositions,
    },
  },
  width: {
    description: "The width of the dialog. ⚠️ Only applies to center position",
    control: {
      type: "select",
      options: dialogWidths,
    },
    table: {
      type: { summary: "sm | md | lg" },
      defaultValue: { summary: "md" },
    },
  },
};

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
];

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
];
