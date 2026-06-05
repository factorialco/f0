import { F0AiFormRegistryProvider } from "@factorialco/f0-react"
import { ApplicationFrame } from "@factorialco/f0-react/dist/experimental"
import type { ModuleId } from "./modules"
import { FactorialSidebar } from "./FactorialSidebar"
import { aiChatConfig } from "./aiChatConfig"

/**
 * Wraps a prototype in the canonical Factorial product shell:
 * `ApplicationFrame` (real, from f0-react's experimental surface) +
 * the Factorial sidebar built from `Sidebar` / `Menu` / `SidebarHeader`
 * / `SidebarFooter`, plus the AI chat panel and the AI form registry
 * for co-created forms.
 *
 * The AI chat is **always available** to every prototype — the panel,
 * provider and CopilotKit runtime wiring all live here so prototype
 * authors never have to think about them. To make the copilot interact
 * with a prototype, declare `useCopilotAction` / `useCopilotReadable`
 * from `@/copilot`.
 *
 * `F0AiFormRegistryProvider` wraps the chat so any prototype that
 * renders an `F0Form` can be filled by the agent via the built-in
 * `forms.fillForm` tool — no extra wiring per prototype. The provider
 * **must sit outside** `F0AiChatProvider` (mounted internally by
 * `ApplicationFrame`) for the registry hook-up to work.
 *
 * Prototypes only render the page body; FactorialShell is added by
 * `PrototypeRoute` automatically.
 */
export function FactorialShell({
  activeModule,
  children,
}: {
  activeModule: ModuleId | null
  children: React.ReactNode
}) {
  return (
    <F0AiFormRegistryProvider>
      <ApplicationFrame
        {...(aiChatConfig.enabled ? { ai: aiChatConfig } : {})}
        sidebar={<FactorialSidebar activeModule={activeModule} />}
      >
        {children}
      </ApplicationFrame>
    </F0AiFormRegistryProvider>
  )
}
