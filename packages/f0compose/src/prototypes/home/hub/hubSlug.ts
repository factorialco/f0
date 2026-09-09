/**
 * A Hub section's label ↔ its `?view=` slug.
 *
 * A LEAF module on purpose: HomeNav owns the Hub's rows and ModulePane
 * owns the allow-list built from them, so if either of them owned the
 * slug function the other would close a module cycle around it.
 */
export function hubSlug(label: string): string {
  return label.toLowerCase().replace(/\s+/g, "-")
}
