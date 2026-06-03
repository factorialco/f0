import { F0Provider } from "@factorialco/f0-react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useMemo } from "react"
import { defaultI18nTranslations, defaultL10n } from "@/lib/providers"
import { ViewerProvider } from "@/lib/viewer"
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
 *
 * Sidebar click → prototype routing: when a sidebar item's module has
 * exactly one prototype whose `meta.module` matches, clicking that item
 * navigates to that prototype's `/p/<slug>`. This makes built-in modules
 * like Inbox feel live in the demo. Modules without a matching prototype
 * stay as no-op markers (consistent with the previous behavior).
 */
export function App() {
  const location = useLocation()
  const navigate = useNavigate()

  // Explicit allowlist: which prototype "owns" each sidebar module
  // entry. Keep this hand-curated rather than auto-derived from
  // `meta.module`, because many prototypes legitimately attach
  // themselves to the same module (e.g. `spending` has the
  // controlling-step PoC, the card-refunds PoC, etc.) and we don't
  // want sidebar click destinations to silently shuffle based on
  // glob order.
  //
  // To add a new sidebar→prototype wire, add a line here. To
  // unwire, delete the line. Modules not present here render as
  // dead sidebar entries (no navigation on click), which is the
  // intended fallback.
  const moduleToSlug: Record<string, string> = useMemo(
    () => ({
      inbox: "inbox",
      spending: "controlling-step-poc",
    }),
    []
  )

  let currentPath = "/__module/home"
  if (location.pathname.startsWith("/p/")) {
    const slug = location.pathname.slice(3)
    const entry = prototypeRegistry[slug]
    if (entry) currentPath = `/__module/${entry.meta.module}`
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
              // Synthetic /__module/* hrefs — if a prototype exists for
              // that module, navigate to it; otherwise stay put (it's a
              // visual marker only).
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
      {/* ViewerProvider sits INSIDE F0Provider so any descendant
          (sidebar footer, prototype bodies) can read or override
          the current viewer. Default viewer is Hellen; prototypes
          push overrides via `useViewerOverride(...)`. */}
      <ViewerProvider>
        <Outlet />
        <FloatingControls />
      </ViewerProvider>
    </F0Provider>
  )
}
