import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { L10nProvider, useL10n } from "./l10n-provider"

// Test component that uses the l10n hook
function TestComponent() {
  const l10n = useL10n()
  return <div data-testid="locale">{l10n.locale}</div>
}

describe("L10nProvider", () => {
  it("provides locale value to children", () => {
    render(
      <L10nProvider l10n={{ locale: "es-ES" }}>
        <TestComponent />
      </L10nProvider>
    )

    expect(screen.getByTestId("locale")).toHaveTextContent("es-ES")
  })

  // Type tests - these will fail at compile time if types are wrong
  it.skip("maintains type safety for l10n props", () => {
    render(
      // @ts-expect-error - Invalid l10n prop should be caught by TypeScript
      <L10nProvider l10n={{ invalidKey: "test" }}>
        <div />
      </L10nProvider>
    )

    render(
      // @ts-expect-error - Missing required locale should be caught by TypeScript
      <L10nProvider l10n={{}}>
        <div />
      </L10nProvider>
    )

    render(
      // @ts-expect-error - L10n prop is required
      <L10nProvider>
        <div />
      </L10nProvider>
    )
  })
})
