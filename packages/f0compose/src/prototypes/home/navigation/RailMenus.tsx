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
  Reset,
  Sliders,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useSearchParams } from "react-router-dom"

import { PROFILE_PEOPLE } from "../fixtures"
import { MenuSurface } from "../MenuRow"
import { reopenOnboarding, startNavigationTour } from "../onboarding/state"
import { goHome } from "../one/conversationStore"
import { useProfile } from "../profileStore"
import { ENTITIES, setEntity, useEntity } from "./entityStore"
import { EntityRows, ProfileMenu, type HelpRow } from "./ReferenceMenus"

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
/**
 * The company avatar at the top of the rail, which is now the entity
 * SWITCHER (Angel, 2026-09-14: "el selector de empresa… también debería
 * estar arriba del todo de la primera navegación del sidebar, es el patrón
 * actual y el que buscará la gente"). Same rows as the profile menu, same
 * store, so the two can never disagree — and the same right-of-the-rail
 * anchoring every other rail menu uses, which is measured rather than
 * hard-coded and so survived the rail getting wider.
 */
export function CompanySwitcher() {
  const entity = useEntity()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null)

  const toggle = () => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos((open) =>
      open
        ? null
        : {
            left:
              (buttonRef.current
                ?.closest("[data-home-rail]")
                ?.getBoundingClientRect().right ?? rect.right) + 8,
            top: rect.top,
          }
    )
  }

  const menu = pos && (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setPos(null)} />
      <div
        className="fixed z-50"
        style={{ left: pos.left, top: pos.top, transformOrigin: "top left" }}
      >
        <MenuSurface className="w-[248px]">
          <div
            role="menu"
            aria-label="Switch company"
            className="flex flex-col"
          >
            <EntityRows
              entities={ENTITIES}
              selected={entity.id}
              onSelect={(id) => {
                setEntity(id)
                setPos(null)
              }}
            />
          </div>
        </MenuSurface>
      </div>
    </>
  )

  return (
    <>
      {menu && createPortal(menu, document.body)}
      <button
        ref={buttonRef}
        type="button"
        aria-label="Switch company"
        aria-haspopup="menu"
        onClick={toggle}
        className="f0c-pressable flex size-11 cursor-pointer items-center justify-center rounded-xl hover:bg-f1-background-secondary"
      >
        <F0AvatarCompany name={entity.name} src={entity.src} size="sm" />
      </button>
    </>
  )
}
export function RailPersonalMenu() {
  const entity = useEntity()

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
  const resume = (screen: "welcome" | "preferences") => {
    setParams({})
    reopenOnboarding(profile, screen)
  }
  // The two tour rows came with Help out of the rail; they lead the list
  // because they are about THIS prototype, not about support.
  const help: HelpRow[] = [
    {
      kind: "item",
      label: "Explore the new navigation",
      icon: BookOpen,
      onClick: () => {
        setParams({})
        startNavigationTour(profile)
      },
    },
    {
      kind: "item",
      label: "Personalise my Home",
      icon: Sliders,
      onClick: () => resume("preferences"),
    },
    { kind: "separator" },
    ...helpRows,
  ]
  const personal = [
    { label: "My profile", icon: Person, onClick: () => open("profile") },
    {
      label: "Preferences",
      icon: Sliders,
      onClick: () => open("personal-preferences"),
    },
    {
      label: "Submit a complaint",
      icon: ExternalLink,
      onClick: () => open("trust-channel"),
    },
    {
      label: "Reset prototype",
      icon: Reset,
      onClick: () => {
        const keys = Object.keys(window.localStorage).filter((key) =>
          key.startsWith("f0compose:home:")
        )
        const backup = Object.fromEntries(
          keys.map((key) => [key, window.localStorage.getItem(key)])
        )
        window.sessionStorage.setItem(
          "f0compose:home-reset-backup",
          JSON.stringify(backup)
        )
        keys.forEach((key) => window.localStorage.removeItem(key))
        window.location.assign(window.location.pathname)
      },
    },
    { label: "Sign out", icon: Exit, critical: true, onClick: () => {} },
  ]
  return (
    <ProfileMenu
      accountEmail="alicia.keys@factorial.co"
      entities={ENTITIES}
      selectedEntity={entity.id}
      onSelectEntity={setEntity}
      personal={personal}
      help={help}
      labels={{
        personal: "Personal",
        help: "Get help",
        notifications: "Notifications",
      }}
    >
      <button
        type="button"
        aria-label="Open user menu"
        aria-haspopup="menu"
        className="f0c-pressable flex size-11 cursor-pointer items-center justify-center rounded-full hover:bg-f1-background-secondary"
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
