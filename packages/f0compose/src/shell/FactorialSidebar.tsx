import { Exit, Sliders, Sparkles } from "@factorialco/f0-react/icons/app"
import {
  Menu,
  type MenuCategory,
  SearchBar,
  Sidebar,
  SidebarFooter,
  SidebarHeader,
} from "@factorialco/f0-react/dist/experimental"
import { useNavigate } from "react-router-dom"
import { useViewer } from "@/lib/viewer"
import { type ModuleId, iconForModule, modules } from "./modules"

/**
 * Per-module numeric badges shown next to the sidebar entry. Kept
 * as a static map so the sidebar mirrors the production Factorial
 * screenshot ("Inbox 99"). When prototypes need live counts they
 * can read directly from their own state inside their page; the
 * sidebar is intentionally static so it doesn't re-render on
 * every prototype interaction.
 */
const SIDEBAR_BADGES: Partial<Record<ModuleId, number>> = {
  inbox: 99,
}

function modulesIn(group: string): MenuCategory["items"] {
  return modules
    .filter((m) => m.group === group)
    .map((m) => ({
      label: m.label,
      icon: iconForModule[m.id],
      href: `/__module/${m.id}`,
      exactMatch: true,
      badge: SIDEBAR_BADGES[m.id],
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
  const { employee: viewerEmployee } = useViewer()

  // Split fullName into first/last for SidebarFooter's API. The
  // fixture uses fullName for display and may or may not match
  // preferredName; we honour preferredName for the first chunk so
  // the footer reads "Marie" / "Hellen" / "Alan" rather than the
  // whole formal name. Last name falls back to the trailing word.
  const [firstName, lastName] = (() => {
    const preferred = viewerEmployee.preferredName?.trim()
    const parts = viewerEmployee.fullName.split(" ").filter(Boolean)
    const first = preferred || parts[0] || ""
    const last = parts.slice(preferred ? 0 : 1).join(" ") || parts[parts.length - 1] || ""
    // When preferredName matched the start of fullName, the last
    // slice above would duplicate it; trim that duplication.
    const lastTrimmed = last.startsWith(first + " ")
      ? last.slice(first.length + 1)
      : last === first
        ? ""
        : last
    return [first, lastTrimmed]
  })()

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
      id: "finance",
      title: "Finance",
      isOpen: true,
      isSortable: true,
      items: modulesIn("finance"),
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
            firstName,
            lastName,
            avatarUrl: viewerEmployee.avatarUrl ?? "",
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
