import { Home, Sparkles } from "@factorialco/f0-react/icons/app"
import {
  Menu,
  Sidebar,
  SidebarHeader,
} from "@factorialco/f0-react/dist/experimental"
import { useNavigate } from "react-router-dom"

/**
 * Lightweight sidebar shown on the catalog homepage. Distinct from
 * `FactorialSidebar` — this one only has Catalog / About entries; we
 * don't pretend to be inside a Factorial product on the catalog itself.
 */
export function CatalogSidebar() {
  const navigate = useNavigate()
  return (
    <Sidebar
      header={
        <SidebarHeader
          companies={[{ id: "f0compose", name: "f0compose", logo: "" }]}
          selected="f0compose"
          onChange={() => {}}
          withNotification={false}
          isExpanded={true}
        />
      }
      body={
        <Menu
          tree={[
            {
              id: "main",
              title: "f0compose",
              isRoot: true,
              isSortable: false,
              items: [
                {
                  label: "Catalog",
                  icon: Home,
                  href: "/",
                  exactMatch: true,
                  onClick: () => navigate("/"),
                },
                {
                  label: "About",
                  icon: Sparkles,
                  href: "https://github.com/factorialco/f0",
                  exactMatch: false,
                },
              ],
            },
          ]}
        />
      }
    />
  )
}
