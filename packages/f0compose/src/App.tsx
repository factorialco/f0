import { F0Provider } from "@factorialco/f0-react"
import { CopilotKit } from "@copilotkit/react-core"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { defaultI18nTranslations, defaultL10n } from "@/lib/providers"
import { prototypeRegistry } from "@/prototypes/registry"
import { FloatingControls } from "@/shell/FloatingControls"
import { aiChatConfig } from "@/shell/aiChatConfig"

/**
 * Root layout. Wires F0Provider with:
 * - i18n / l10n defaults so f0 components have their context.
 * - `link` with a reactive `currentPath` and a custom `component` so:
 *     - Menu items light up the active module (Menu uses isActive(href)).
 *     - Anchor clicks within the f0 internals are intercepted by
 *       react-router, no full-page reloads.
 *
 * The synthetic currentPath shape is `/__module/<moduleId>`. Sidebar items
 * use the same shape as their `href`. This keeps the sidebar-active state
 * decoupled from real f0compose routes (`/p/:slug`).
 */
export function App() {
  const location = useLocation()
  const navigate = useNavigate()

  let currentPath = "/__module/home"
  if (location.pathname.startsWith("/p/")) {
    const slug = location.pathname.slice(3)
    const entry = prototypeRegistry[slug]
    if (entry) currentPath = `/__module/${entry.meta.module}`
  }

  const inner = (
    <F0Provider
      i18n={{ translations: defaultI18nTranslations }}
      l10n={{ l10n: defaultL10n }}
      link={{
        currentPath,
        component: (props, ref) => (
          <a
            ref={ref}
            {...props}
            onClick={(event) => {
              if (props.onClick) props.onClick(event)
              if (event.defaultPrevented) return
              const href = props.href
              if (!href || href.startsWith("http") || href.startsWith("//")) {
                return
              }
              event.preventDefault()
              if (href.startsWith("/__module/")) return
              navigate(href)
            }}
          />
        ),
      }}
    >
      <Outlet />
      <FloatingControls />
    </F0Provider>
  )

  // Only mount CopilotKit when the AI chat is actually enabled. Otherwise it
  // tries to reach the agent runtime on load and surfaces a "Failed to fetch"
  // toast in environments without an agent (previews, public demos). No
  // prototype uses the copilot hooks, so skipping the provider is safe.
  if (!aiChatConfig.enabled) return inner

  return (
    <CopilotKit runtimeUrl={aiChatConfig.runtimeUrl} agent={aiChatConfig.agent}>
      {inner}
    </CopilotKit>
  )
}
