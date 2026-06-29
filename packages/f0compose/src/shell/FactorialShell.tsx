import { useSearchParams } from "react-router-dom"

import type { ModuleId } from "./modules"
import { FactorialSidebar } from "./FactorialSidebar"

/**
 * Wraps a prototype in the Factorial product shell: sidebar + content area.
 * Prototypes only render the page body; FactorialShell is added by
 * `PrototypeRoute` automatically.
 *
 * En la vista FUNDAE (`fv=d`), página tipo Settings/policies, la navegación
 * global de Factorial se COLAPSA (como en el Figma de policies, donde la capa
 * "Sidebar" va `hidden`). El hamburguesa que la reabre lo pinta el PageHeader de
 * la propia página, INLINE con el breadcrumb (no aquí, para no meter una columna
 * que desplace el contenido). Estado por URL (`?nav=open`) para que el
 * hamburguesa y este shell compartan el mismo origen de verdad. Gateado a esa
 * ruta: el resto de prototipos no cambian.
 */
export function FactorialShell({
  activeModule,
  children,
}: {
  activeModule: ModuleId | null
  children: React.ReactNode
}) {
  const [searchParams] = useSearchParams()
  const isSettingsLike =
    searchParams.get("dtab") === "fundae" && searchParams.get("fv") === "d"
  const collapsed = isSettingsLike && searchParams.get("nav") !== "open"

  return (
    <div className="flex min-h-screen bg-f1-background">
      {!collapsed && <FactorialSidebar activeModule={activeModule} />}
      <main className="min-w-0 flex-1" style={{ marginLeft: collapsed ? 0 : 240 }}>
        {children}
      </main>
    </div>
  )
}
