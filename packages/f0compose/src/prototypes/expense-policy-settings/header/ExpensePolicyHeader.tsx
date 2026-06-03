import { ResourceHeader } from "@factorialco/f0-react/dist/experimental"
import { SolidPlay } from "@factorialco/f0-react/icons/app"

/**
 * "Expenses Policy" resource header (BR-002, BR-009).
 *
 * Matches the PSPEC reference frame:
 *  - Title only (no description) — keeps the header tight.
 *  - Secondary action: "Run a test" with the SolidPlay icon. There's
 *    no plain `Play` outline icon in the F0 set; SolidPlay is the
 *    closest match and visually reads the same at this size.
 *  - Primary action: "Publish changes" — active (admins can publish
 *    their drafted setup at any time).
 *  - Other actions: surfaced through the 3-dot menu.
 *
 * The breadcrumb (`Settings > Expenses`) is rendered by `PageHeader`,
 * not here.
 */
export function ExpensePolicyHeader() {
  return (
    <ResourceHeader
      title="Expenses setup"
      primaryAction={{
        label: "Publish changes",
        onClick: () => {},
      }}
      secondaryActions={[
        {
          label: "Run a test",
          icon: SolidPlay,
          onClick: () => {},
        },
      ]}
      otherActions={[
        { label: "Duplicate setup", onClick: () => {} },
        { label: "Reset to defaults", onClick: () => {} },
        { label: "Archive setup", onClick: () => {}, critical: true },
      ]}
    />
  )
}
