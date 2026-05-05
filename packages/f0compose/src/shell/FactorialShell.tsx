import { ApplicationFrame } from "@factorialco/f0-react/dist/experimental"
import type { ModuleId } from "./modules"
import { FactorialSidebar } from "./FactorialSidebar"

/**
 * Wraps a prototype in the canonical Factorial product shell:
 * `ApplicationFrame` (real, from f0-react's experimental surface) +
 * the Factorial sidebar built from `Sidebar` / `Menu` / `SidebarHeader`
 * / `SidebarFooter`.
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
    <ApplicationFrame
      sidebar={<FactorialSidebar activeModule={activeModule} />}
    >
      {children}
    </ApplicationFrame>
  )
}
