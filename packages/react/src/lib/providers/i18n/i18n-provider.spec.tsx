import { aiTranslations } from "@/ai/AiChat/providers/AiChatTranslationsProvider"
import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { I18nProvider, TranslationsType, useI18n } from "./i18n-provider"
import { defaultTranslations } from "./i18n-provider-defaults"

// Test component that uses the i18n hook
function TestComponent() {
  const i18n = useI18n()
  return <div data-testid="translation">{i18n.actions.save}</div>
}

describe("I18nProvider", () => {
  it("allows overriding translations", () => {
    const customTranslations: TranslationsType = {
      ...defaultTranslations,
      ai: {
        ...defaultTranslations.ai,
        ...aiTranslations.ai,
        closeChat: "CLOSE",
      },
      actions: {
        ...defaultTranslations.actions,
        add: "Add",
        edit: "Edit",
        save: "Desar",
        send: "Enviar",
        cancel: "Cancelar",
        copy: "Copiar",
        skipToContent: "Saltar a contenido",
        showAll: "Mostrar todo",
        showLess: "Mostrar menos",
        view: "Ver",
        unselect: "Deseleccionar",
        search: "Buscar",
        clear: "Borrar",
        more: "Más",
        moveUp: "Mover arriba",
        moveDown: "Mover abajo",
        close: "Cerrar",
        other: "Otras acciones",
        thumbsUp: "Like",
        thumbsDown: "Dislike",
        toggle: "Alternar",
      },
    }

    render(
      <I18nProvider translations={customTranslations}>
        <TestComponent />
      </I18nProvider>
    )

    expect(screen.getByTestId("translation")).toHaveTextContent("Desar")
  })

  it("throws error when useI18n is used outside provider", () => {
    // Suppress console.error for this test as we expect an error
    const consoleSpy = vi.spyOn(console, "error")
    consoleSpy.mockImplementation(() => {})

    expect(() => {
      render(<TestComponent />)
    }).toThrow("useI18n must be used within an I18nProvider")

    consoleSpy.mockRestore()
  })

  // Type tests - these will fail at compile time if types are wrong
  it.skip("maintains type safety for translation overrides", () => {
    render(
      // @ts-expect-error - Invalid translation key should be caught by TypeScript
      <I18nProvider translations={{ invalidKey: "test" }}>
        <div />
      </I18nProvider>
    )

    render(
      // @ts-expect-error - Missing required translation keys should be caught by TypeScript
      <I18nProvider translations={{}}>
        <div />
      </I18nProvider>
    )

    render(
      // @ts-expect-error - Translations are required
      <I18nProvider>
        <div />
      </I18nProvider>
    )
  })
})
