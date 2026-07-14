import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { aiTranslations } from "@/sds/ai/F0AiChat"

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

  it("falls back to default translations when used outside a provider", () => {
    // No provider: the hook must not throw — it degrades to the built-in
    // (English) defaults so the subtree still renders.
    render(<TestComponent />)

    expect(screen.getByTestId("translation")).toHaveTextContent(
      defaultTranslations.actions.save
    )
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
