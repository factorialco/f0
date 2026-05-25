import {
  Bank,
  CheckCircleLine,
  Command,
  Exit,
  Home,
  Inbox,
  Laptop,
  Marketplace,
  Megaphone,
  Person,
  Settings,
  Shield,
  Sliders,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import {
  Menu,
  type MenuCategory,
  SearchBar,
  Sidebar,
  SidebarFooter,
  SidebarHeader,
} from "@factorialco/f0-react/dist/experimental"
import { useNavigate } from "react-router-dom"

export function ItSidebar() {
  const navigate = useNavigate()

  const tree: MenuCategory[] = [
    {
      id: "root",
      title: "",
      isRoot: true,
      isSortable: false,
      items: [
        { label: "Home", icon: Home, href: "/p/factorial-it/home", exactMatch: true },
        {
          label: "Inbox",
          icon: Inbox,
          href: "/p/factorial-it/inbox",
          exactMatch: true,
        },
        {
          label: "Marketplace",
          icon: Marketplace,
          href: "/p/factorial-it/marketplace",
          exactMatch: true,
        },
        {
          label: "Discover",
          icon: Megaphone,
          href: "/p/factorial-it/discover",
          exactMatch: true,
        },
      ],
    },
    {
      id: "it",
      title: "IT",
      isOpen: true,
      isSortable: false,
      items: [
        {
          label: "Tickets",
          icon: CheckCircleLine,
          href: "/p/factorial-it/tickets",
          exactMatch: true,
        },
        {
          label: "Devices",
          icon: Laptop,
          href: "/p/factorial-it/devices",
          exactMatch: true,
        },
        {
          label: "Employees",
          icon: Person,
          href: "/p/factorial-it/employees",
          exactMatch: true,
        },
        {
          label: "Security",
          icon: Shield,
          href: "/p/factorial-it/security",
          exactMatch: true,
        },
        {
          label: "Compliance",
          icon: Bank,
          href: "/p/factorial-it/compliance",
          exactMatch: true,
        },
        {
          label: "SaaS Management",
          icon: Command,
          href: "/p/factorial-it/saas-management",
          exactMatch: true,
        },
        {
          label: "Settings",
          icon: Settings,
          href: "/p/factorial-it/settings",
          exactMatch: true,
        },
      ],
    },
  ]

  return (
    <Sidebar
      header={
        <>
          <SidebarHeader
            companies={[{ id: "factorial", name: "Factorial IT", logo: "" }]}
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
