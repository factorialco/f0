/** Primary tabs for the Projects module — match the production navigation. */
export const moduleTabs = [
  { id: "projects", label: "Proyectos" },
  { id: "planning", label: "Planificación" },
  { id: "roles", label: "Puestos de trabajo y tarifas" },
  { id: "people", label: "Personas" },
] as const

export type ModuleTabId = (typeof moduleTabs)[number]["id"]
