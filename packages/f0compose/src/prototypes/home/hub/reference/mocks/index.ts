/**
 * Shared mocks — cross-cutting Factorial entities used across many prototypes.
 * Import these from a prototype with `import { employees } from "@/prototypes/home/hub/reference/mocks"`.
 * Never inline data arrays; module-specific data lives in the prototype's own
 * `mocks/` folder.
 */

export * from "./types"
export * from "./helpers"
export { employees, findEmployee } from "./employees"
export { teams, findTeam } from "./teams"
export { departments, findDepartment } from "./departments"
export { legalEntities, findLegalEntity } from "./legalEntities"
export { locations, findLocation } from "./locations"
