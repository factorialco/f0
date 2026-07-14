import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import { EnhanceActivator } from "../EnhanceActivator"
import type { UseEnhanceReturn } from "../useEnhance"

const wrapper = ({ children }: { children: ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

const buildEnhance = (
  overrides?: Partial<UseEnhanceReturn>
): UseEnhanceReturn => ({
  config: {
    onEnhanceText: vi.fn(),
    enhancementOptions: [],
  },
  isLoading: false,
  isAcceptChangesOpen: false,
  error: null,
  disableButtons: false,
  handleEnhanceWithAI: vi.fn(),
  acceptChanges: vi.fn(),
  rejectChanges: vi.fn(),
  retryChanges: vi.fn(),
  setError: vi.fn(),
  clearError: vi.fn(),
  reviewAnchorTop: null,
  ...overrides,
})

const renderActivator = (enhance: UseEnhanceReturn) =>
  render(<EnhanceActivator enhance={enhance} disabled={false} />, { wrapper })

describe("EnhanceActivator", () => {
  it("opens the options menu when idle", async () => {
    const user = userEvent.setup()
    renderActivator(buildEnhance())

    await user.click(
      screen.getByRole("button", {
        name: defaultTranslations.richTextEditor.ai.enhanceButtonLabel,
      })
    )

    expect(
      screen.getByPlaceholderText(
        defaultTranslations.richTextEditor.ai.customPromptPlaceholder
      )
    ).toBeInTheDocument()
  })

  it("hides the menu while the enhancement is loading", async () => {
    const user = userEvent.setup()
    const enhance = buildEnhance()
    const { rerender } = renderActivator(enhance)

    await user.click(
      screen.getByRole("button", {
        name: defaultTranslations.richTextEditor.ai.enhanceButtonLabel,
      })
    )

    rerender(
      <EnhanceActivator
        enhance={buildEnhance({ isLoading: true })}
        disabled={false}
      />
    )

    // AnimatePresence keeps the menu mounted during the exit animation.
    await waitFor(() => {
      expect(
        screen.queryByPlaceholderText(
          defaultTranslations.richTextEditor.ai.customPromptPlaceholder
        )
      ).not.toBeInTheDocument()
    })
    expect(
      screen.queryByText(
        defaultTranslations.richTextEditor.ai.loadingEnhanceLabel
      )
    ).not.toBeInTheDocument()
  })

  it("reopens in review mode once the enhancement finishes", async () => {
    const user = userEvent.setup()
    const { rerender } = renderActivator(buildEnhance())

    await user.click(
      screen.getByRole("button", {
        name: defaultTranslations.richTextEditor.ai.enhanceButtonLabel,
      })
    )

    rerender(
      <EnhanceActivator
        enhance={buildEnhance({ isLoading: true })}
        disabled={false}
      />
    )
    rerender(
      <EnhanceActivator
        enhance={buildEnhance({ isAcceptChangesOpen: true })}
        disabled={false}
      />
    )

    expect(
      await screen.findByRole("button", { name: "Accept" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Discard" })).toBeInTheDocument()
  })
})
