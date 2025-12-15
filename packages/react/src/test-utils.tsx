import { render, RenderResult, type RenderOptions } from "@testing-library/react"
import type { ReactElement } from "react"
import { defaultTranslations, I18nProvider } from "./lib/providers/i18n"

// Test provider for i18n - can be used in individual tests
export const TestI18nProvider = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <TestI18nProvider>{children}</TestI18nProvider>
}
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
