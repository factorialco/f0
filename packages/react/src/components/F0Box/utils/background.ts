import type { BackgroundToken } from "../types"

export const backgroundVariants = {
  background: {
    transparent: "bg-transparent",
    primary: "bg-f1-background",
    secondary: "bg-f1-background-secondary",
    tertiary: "bg-f1-background-tertiary",
    inverse: "bg-f1-background-inverse",
    bold: "bg-f1-background-bold",
    accent: "bg-f1-background-accent",
    promote: "bg-f1-background-promote",
    critical: "bg-f1-background-critical",
    info: "bg-f1-background-info",
    warning: "bg-f1-background-warning",
    positive: "bg-f1-background-positive",
    selected: "bg-f1-background-selected",
    "selected-bold": "bg-f1-background-selected-bold",
    overlay: "bg-f1-background-overlay",
  } satisfies Record<BackgroundToken, string>,
}
