import { F0Provider } from "@factorialco/f0-react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { defaultI18nTranslations, defaultL10n } from "@/lib/providers"
import { prototypeRegistry } from "@/prototypes/registry"
import { FloatingControls } from "@/shell/FloatingControls"

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
// Reverse map: moduleId → first prototype slug that uses it
const moduleToSlug = Object.fromEntries(
  Object.values(prototypeRegistry).map((e) => [e.meta.module, e.meta.slug])
)

export function App() {
  const location = useLocation()
  const navigate = useNavigate()

  let currentPath = "/__module/home"
  if (location.pathname.startsWith("/p/")) {
    const slug = location.pathname.slice(3).split("?")[0]
    const entry = prototypeRegistry[slug]
    if (entry) {
      // If the module has a direct prototype link, use the /p/ path
      // so the sidebar item highlights correctly.
      currentPath = `/p/${slug}`
    }
  }

  return (
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
              // Synthetic /__module/* hrefs: navigate to prototype if one exists
              if (href.startsWith("/__module/")) {
                const moduleId = href.slice("/__module/".length)
                const slug = moduleToSlug[moduleId]
                if (slug) navigate(`/p/${slug}`)
                return
              }
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
}
