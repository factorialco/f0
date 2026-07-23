import type { Meta, StoryObj } from "@storybook/react-vite"

import React from "react"

/**
 * Throwaway demo used only to capture the a11y PR-comment "failures" state
 * for the docs of the a11y-comment feature. It renders deliberately
 * low-contrast text so axe reports a `color-contrast` violation
 * (WCAG 1.4.3, AA). Runs in `test: "todo"` mode so it surfaces in the PR
 * comment without failing the Storybook Tests build.
 */
const LowContrastDemo = () => (
  <button
    type="button"
    style={{
      color: "#b8b8b8",
      backgroundColor: "#cfcfcf",
      border: "none",
      padding: 8,
      borderRadius: 4,
    }}
  >
    Low-contrast action
  </button>
)

const meta: Meta<typeof LowContrastDemo> = {
  title: "A11y Demo",
  component: LowContrastDemo,
  tags: ["experimental"],
  parameters: {
    // Known-failing on purpose — records the violation for the PR comment
    // but does not fail the build.
    a11y: { test: "todo" },
  },
}

export default meta
type Story = StoryObj<typeof LowContrastDemo>

export const LowContrast: Story = {}
