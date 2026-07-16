import type { ComponentStatus } from "@/component-status"

/** The DoD checklist is only meaningful for components on the road to stable. */
export function showsChecklist(status: ComponentStatus): boolean {
  return (
    status.apiStatus === "stable" ||
    status.apiStatus === "experimental" ||
    status.apiStatus === "unknown"
  )
}

/** One-line summary shown under the status badge. */
export function describeStatus(status: ComponentStatus): string {
  if (status.apiStatus === "deprecated") {
    return "Deprecated — avoid in new work and migrate to the recommended alternative."
  }
  if (status.apiStatus === "internal") {
    return "Internal — not part of the public API."
  }
  if (status.meetsBar && status.taggedStable) {
    return "Stable and meets the definition of done."
  }
  if (status.discrepancy === "tagged-but-below-bar") {
    return "Tagged stable, but the checklist below isn't complete yet."
  }
  if (status.discrepancy === "meets-bar-not-tagged") {
    return "Meets the definition of done — ready to be promoted to stable."
  }
  if (status.apiStatus === "unknown") {
    return "No maturity tag set. Complete the checklist below to reach stable."
  }
  return "Experimental. Complete the checklist below to reach stable."
}
