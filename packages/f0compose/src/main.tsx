import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { App } from "./App"
import { CatalogHome } from "./catalog/CatalogHome"
import { PrototypeRoute } from "./shell/PrototypeRoute"
import { installDeployedAutoRefresh } from "./autoRefreshDeployed"
import "./styles.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <CatalogHome /> },
      { path: "p/:slug", element: <PrototypeRoute /> },
    ],
  },
])

const rootEl = document.getElementById("root")
if (!rootEl) throw new Error("#root not found")

// NOTE: React.StrictMode is intentionally NOT used here.
//
// f0compose pulls in experimental f0-react components (selectors,
// OneDataCollection lanes, F0AiChat) that aren't strict-mode-safe —
// they re-enter setState during dev's double-invocation and crash
// localhost with "Maximum update depth exceeded". Vercel prod builds
// don't double-invoke, which is why deployments work fine.
//
// Re-enable <StrictMode> only after the upstream f0-react components
// have been audited for strict-mode compliance. Until then we mirror
// production behaviour in dev so teammates can run prototypes locally.
createRoot(rootEl).render(<RouterProvider router={router} />)

// Production-only: poll for new deploys and reload the page when one
// lands, so people sitting on a share link see iteration as it ships.
// No-op in `pnpm dev` (HMR already covers that).
installDeployedAutoRefresh()
