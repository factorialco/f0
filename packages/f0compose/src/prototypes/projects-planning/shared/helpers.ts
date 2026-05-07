import type { Project, ProjectStatus } from "./data"

type DotColor = "viridian" | "indigo" | "yellow" | "orange" | "lilac"

/** Map project category to a dot color (used in tagList cells). */
export const categoryDotColor: Record<Project["category"], DotColor> = {
  design: "viridian",
  engineering: "indigo",
  ops: "yellow",
  sales: "orange",
  research: "lilac",
}

/** Map status to a status cell variant. */
export const statusVariant: Record<
  ProjectStatus,
  "positive" | "warning" | "neutral"
> = {
  active: "positive",
  paused: "warning",
  archived: "neutral",
}

export const statusLabel: Record<ProjectStatus, string> = {
  active: "Activo",
  paused: "En pausa",
  archived: "Archivado",
}

export const categoryLabel: Record<Project["category"], string> = {
  design: "Diseño",
  engineering: "Ingeniería",
  ops: "Operaciones",
  sales: "Ventas",
  research: "Investigación",
}
