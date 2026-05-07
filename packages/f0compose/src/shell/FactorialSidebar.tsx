import {
  Menu,
  type MenuCategory,
  SearchBar,
  Sidebar,
  SidebarFooter,
  SidebarHeader,
} from "@factorialco/f0-react/dist/experimental"
import { Exit, Sliders, Sparkles } from "@factorialco/f0-react/icons/app"
import { useNavigate } from "react-router-dom"

import { type ModuleId, iconForModule, modules } from "./modules"

function modulesIn(group: string): MenuCategory["items"] {
  return modules
    .filter((m) => m.group === group)
    .map((m) => ({
      label: m.label,
      icon: iconForModule[m.id],
      href: `/__module/${m.id}`,
      exactMatch: true,
    }))
}

/**
 * Factorial-canonical sidebar built with the real f0 components and
 * shaped after the production product screenshot:
 * - Header: CompanySelector + SearchBar (cmd+K shortcut)
 * - Body: Root (no title) → Personal → Tasks → Company → Talent → Payroll
 * - Footer: user avatar + name dropdown
 */
export function FactorialSidebar(_props: { activeModule: ModuleId | null }) {
  const navigate = useNavigate()

  const tree: MenuCategory[] = [
    {
      id: "root",
      title: "",
      isRoot: true,
      isSortable: false,
      items: modulesIn("root"),
    },
    {
      id: "personal",
      title: "Personal",
      isOpen: true,
      isSortable: true,
      items: modulesIn("personal"),
    },
    {
      id: "company",
      title: "Company",
      isOpen: true,
      isSortable: true,
      items: modulesIn("company"),
    },
    {
      id: "talent",
      title: "Talent",
      isOpen: true,
      isSortable: true,
      items: modulesIn("talent"),
    },
    {
      id: "payroll",
      title: "Payroll",
      isOpen: true,
      isSortable: true,
      items: modulesIn("payroll"),
    },
  ]

  return (
    <Sidebar
      header={
        <>
          <SidebarHeader
            companies={[{ id: "factorial", name: "Factorial", logo: "" }]}
            selected="factorial"
            onChange={() => {}}
            withNotification={false}
            isExpanded={true}
          />
          <SearchBar
            placeholder="Search..."
            shortcut={["cmd", "k"]}
            onClick={() => {}}
          />
        </>
      }
      body={<Menu tree={tree} />}
      footer={
        <SidebarFooter
          user={{
            firstName: "Hellen",
            lastName: "the HR",
            avatarUrl: "",
          }}
          options={[
            {
              label: "Catalog",
              icon: Sparkles,
              onClick: () => navigate("/"),
            },
            {
              label: "Preferences",
              icon: Sliders,
              onClick: () => {},
            },
            { type: "separator" },
            {
              label: "Sign out",
              icon: Exit,
              critical: true,
              onClick: () => {},
            },
          ]}
        />
      }
    />
  )
}
