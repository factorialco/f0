import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { App } from "./App"
import { CatalogHome } from "./catalog/CatalogHome"
import { PrototypeRoute } from "./shell/PrototypeRoute"
import "./styles.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <CatalogHome /> },
      { path: "p/:slug/*", element: <PrototypeRoute /> },
    ],
  },
])

const rootEl = document.getElementById("root")
if (!rootEl) throw new Error("#root not found")

createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
