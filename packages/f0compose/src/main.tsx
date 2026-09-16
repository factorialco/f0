import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"

import { App } from "./App"
import { PrototypeRoute } from "./shell/PrototypeRoute"
import "./styles.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // This deploy is a single-prototype preview (Angel, 2026-09-16):
      // landing on the catalog made no sense when there is only one
      // thing to look at, so "/" goes straight to it.
      { index: true, element: <Navigate to="p/home" replace /> },
      { path: "p/:slug", element: <PrototypeRoute /> },
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
