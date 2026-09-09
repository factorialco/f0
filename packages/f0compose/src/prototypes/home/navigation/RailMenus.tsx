import { F0AvatarCompany, F0AvatarPerson } from "@factorialco/f0-react"
import {
  AlertCircleLine,
  BookOpen,
  Comment,
  Exit,
  ExternalLink,
  Megaphone,
  Person,
  Phone,
  Sliders,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { PROFILE_PEOPLE } from "../fixtures"
import { goHome } from "../one/conversationStore"
import { useProfile } from "../profileStore"
import factorial from "./assets/factorial.svg"
import jira from "./assets/jira.svg"
import planes from "./assets/planes.svg"
import {
  EntityMenu,
  HelpMenu,
  ProfileMenu,
  type HelpRow,
} from "./ReferenceMenus"

const entities = [
  { id: "factorial", name: "Factorial", src: factorial },
  { id: "jira", name: "Jira", src: jira },
  { id: "planes", name: "Planes", src: planes },
]
const ENTITY_KEY = "f0compose:home:legal-entity"
// These destinations are placeholders in the reference; the prototype does not contact support.
const HELP_URL = "https://help.factorial.example"
const helpRows: HelpRow[] = [
  { kind: "header", text: "I need help" },
  { kind: "item", label: "Chat with support", icon: Comment },
  {
    kind: "item",
    label: "Call an specialist",
    icon: Phone,
    href: `${HELP_URL}/call`,
  },
  {
    kind: "item",
    label: "Report a problem",
    icon: AlertCircleLine,
    href: `${HELP_URL}/report`,
  },
  { kind: "item", label: "Help center", icon: BookOpen, href: HELP_URL },
  { kind: "separator" },
  { kind: "item", label: "What's new?", icon: Megaphone },
  { kind: "footer", text: "User ID: #4079271" },
]
export function LegalEntityMenu() {
  const [selected, setSelected] = useState(() => {
    const stored = window.localStorage.getItem(ENTITY_KEY)
    return entities.some((entity) => entity.id === stored)
      ? stored!
      : "factorial"
  })
  const active =
    entities.find((entity) => entity.id === selected) ?? entities[0]
  return (
    <EntityMenu
      entities={entities}
      selected={selected}
      actions={[]}
      onSelect={(id) => {
        setSelected(id)
        window.localStorage.setItem(ENTITY_KEY, id)
      }}
    >
      <button
        type="button"
        aria-label={`Change legal entity: ${active.name}`}
        aria-haspopup="menu"
        className="flex size-8 cursor-pointer items-center justify-center rounded-lg hover:bg-f1-background-hover"
      >
        <F0AvatarCompany name={active.name} src={active.src} size="sm" />
      </button>
    </EntityMenu>
  )
}
export function RailHelpMenu() {
  return <HelpMenu label="Help" rows={helpRows} />
}
export function RailPersonalMenu() {
  useEffect(() => {
    const theme =
      window.localStorage.getItem("f0compose:theme") === "dark"
        ? "dark"
        : "light"
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.style.colorScheme = theme
  }, [])
  const profile = useProfile()
  const person = PROFILE_PEOPLE[profile]
  const [, setParams] = useSearchParams()
  const open = (view: string) => {
    goHome()
    setParams({ view })
  }
  const personal = [
    { label: "My profile", icon: Person, onClick: () => open("profile") },
    { label: "Preferences", icon: Sliders, onClick: () => open("preferences") },
    {
      label: "Submit a complaint",
      icon: ExternalLink,
      onClick: () => open("trust-channel"),
    },
    { label: "Sign out", icon: Exit, critical: true, onClick: () => {} },
  ]
  return (
    <ProfileMenu
      personal={personal}
      help={helpRows}
      labels={{
        personal: "Personal",
        help: "Help",
        notifications: "Notifications",
      }}
    >
      <button
        type="button"
        aria-label="Open user menu"
        aria-haspopup="menu"
        className="flex cursor-pointer items-center justify-center rounded-full"
      >
        <F0AvatarPerson
          firstName={person.firstName}
          lastName={person.lastName}
          src={person.avatar}
          size="sm"
        />
      </button>
    </ProfileMenu>
  )
}
