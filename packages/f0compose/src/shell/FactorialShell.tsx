import type { ModuleId } from "./modules"
import { FactorialSidebar } from "./FactorialSidebar"

/**
 * Wraps a prototype in the Factorial product shell: sidebar + content area.
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
    <div className="flex min-h-screen bg-f1-background">
      <FactorialSidebar activeModule={activeModule} />
      <main className="min-w-0 flex-1" style={{ marginLeft: 240 }}>{children}</main>
    </div>
  )
}
