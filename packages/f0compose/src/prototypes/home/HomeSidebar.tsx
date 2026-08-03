import {
  F0AvatarCompany,
  F0AvatarEmoji,
  F0AvatarPerson,
  F0Icon,
  IconType,
} from "@factorialco/f0-react"
import {
  Counter,
  F0AvatarModule,
  SearchBar,
  Sidebar,
} from "@factorialco/f0-react/dist/experimental"
import {
  BarGraph,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  Delete,
  Ellipsis,
  Exit,
  File,
  Files,
  Folder,
  Graph,
  Home as HomeIcon,
  Inbox,
  LayersFront,
  Lightbulb,
  Comment,
  Megaphone,
  MessageFilled,
  Moon,
  Pencil,
  People,
  SearchPerson,
  Settings,
  Shield,
  Sliders,
  Sparkles,
  Timer,
  VideoRecorder,
  Wallet,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useNavigate, useSearchParams } from "react-router-dom"

import { avatarFor } from "@/fixtures/helpers"
import { aliciaAvatar } from "./fixtures"
import {
  clearConversations,
  deleteConversation,
  goHome,
  openConversation,
  renameConversation,
  useConversations,
  type Conversation,
} from "./one/conversationStore"

/**
 * Home's own sidebar — a different navigation concept from the classic
 * 48-module FactorialSidebar (see PrototypeMeta.sidebar override). Grouped
 * by intention-level category (Company, Operations, Talent, Finance)
 * instead of a flat module list, plus a Work/Chats top-level switch.
 * Matches the "Home - Vision" Figma file (Home state: Home item active).
 *
 * The footer user row opens a menu with the composer utilities (theme
 * toggle + back to catalog) that used to live in the floating FAB.
 *
 * Icon gaps vs the Figma design (no f0 equivalent yet, closest used):
 * upgrade-plan → Rocket, ChartBars → BarGraph, ArrowFork → Split.
 */

const THEME_STORAGE_KEY = "f0compose:theme"

function readTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark"
    ? "dark"
    : "light"
}

function NavRow({
  icon,
  label,
  active = false,
  badge,
  onClick,
}: {
  icon?: IconType
  label: string
  active?: boolean
  badge?: number
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left ${
        active ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary"
      }`}
    >
      {icon && <F0Icon icon={icon} size="md" />}
      <span className="flex-1 truncate text-base font-medium text-f1-foreground">
        {label}
      </span>
      {badge !== undefined && <Counter value={badge} size="md" type="bold" />}
    </button>
  )
}

type SidebarTab = "work" | "chats"

function WorkChatsTabs({
  tab,
  onChange,
}: {
  tab: SidebarTab
  onChange: (tab: SidebarTab) => void
}) {
  const base =
    "flex flex-1 items-center justify-center gap-1 rounded-[8px] py-1.5 pl-2 pr-3 text-base font-medium"
  return (
    <div className="flex w-full items-center rounded-[8px] bg-f1-background-secondary">
      <button
        onClick={() => onChange("work")}
        className={`${base} ${
          tab === "work"
            ? "border border-solid border-f1-border bg-f1-background text-f1-foreground"
            : "border border-solid border-transparent text-f1-foreground-tertiary"
        }`}
      >
        <F0Icon icon={HomeIcon} size="md" />
        Work
      </button>
      <button
        onClick={() => onChange("chats")}
        className={`${base} ${
          tab === "chats"
            ? "border border-solid border-f1-border bg-f1-background text-f1-foreground"
            : "border border-solid border-transparent text-f1-foreground-tertiary"
        }`}
      >
        <F0Icon icon={MessageFilled} size="md" />
        Chats
      </button>
    </div>
  )
}

function HomeSidebarHeader({
  tab,
  onTabChange,
}: {
  tab: SidebarTab
  onTabChange: (tab: SidebarTab) => void
}) {
  return (
    <>
      <div className="flex h-[60px] items-center px-3 py-1.5">
        <WorkChatsTabs tab={tab} onChange={onTabChange} />
      </div>
      {/* SearchBar ships its own px-3 wrapper + bottom margin, so no extra
          horizontal padding here — it lines up with the tabs above. */}
      <SearchBar placeholder="Search…" />
    </>
  )
}

/** Collapsible section header ("Favorites ⌄", "Canales ⌄"…). */
function SidebarGroup({
  label,
  trailing,
  children,
}: {
  label: string
  trailing?: React.ReactNode
  children: React.ReactNode
}) {
  const [groupOpen, setGroupOpen] = useState(true)
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center justify-between pr-1.5">
        <button
          onClick={() => setGroupOpen(!groupOpen)}
          className="flex cursor-pointer items-center gap-1 rounded-[10px] px-1.5 py-1 text-sm font-medium text-f1-foreground-secondary"
        >
          {label}
          {/* Icon swap, not a rotate class — F0Icon drops className. */}
          <F0Icon icon={groupOpen ? ChevronDown : ChevronRight} size="xs" />
        </button>
        {trailing}
      </div>
      {groupOpen && children}
    </div>
  )
}

/**
 * A Recents conversation row: NavRow's look plus a hover "⋮" menu with
 * Rename (inline input) and Delete. The menu is portalled to <body> for
 * the same stacking-context reason as the footer user menu.
 */
function RecentRow({
  conversation,
  active,
}: {
  conversation: Conversation
  active: boolean
}) {
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const [menuPos, setMenuPos] = useState<{ left: number; top: number } | null>(
    null
  )
  const [renaming, setRenaming] = useState(false)
  const [draft, setDraft] = useState(conversation.title)

  const openMenu = (event: React.MouseEvent) => {
    event.stopPropagation()
    const rect = menuButtonRef.current?.getBoundingClientRect()
    if (!rect) return
    setMenuPos((pos) => (pos ? null : { left: rect.left, top: rect.bottom + 4 }))
  }

  const startRename = () => {
    setMenuPos(null)
    setDraft(conversation.title)
    setRenaming(true)
  }

  const commitRename = () => {
    renameConversation(conversation.id, draft)
    setRenaming(false)
  }

  if (renaming) {
    return (
      <div className="flex w-full items-center gap-1.5 rounded-[10px] bg-f1-background-secondary py-1.5 pl-1.5 pr-2">
        <F0Icon icon={Comment} size="md" />
        <input
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commitRename}
          onKeyDown={(e) => {
            if (e.key === "Enter") commitRename()
            if (e.key === "Escape") setRenaming(false)
          }}
          className="min-w-0 flex-1 border-0 bg-transparent text-base font-medium text-f1-foreground outline-none"
        />
      </div>
    )
  }

  const menu = menuPos && (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setMenuPos(null)} />
      <div
        className="f0c-popover fixed z-50 flex w-[180px] flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
        style={{ left: menuPos.left, top: menuPos.top, transformOrigin: "top left" }}
      >
        <MenuRow
          icon={<F0Icon icon={Pencil} size="md" color="default" />}
          label="Rename"
          onClick={startRename}
        />
        <MenuRow
          icon={<F0Icon icon={Delete} size="md" color="critical" />}
          label="Delete"
          onClick={() => {
            setMenuPos(null)
            deleteConversation(conversation.id)
          }}
        />
      </div>
    </>
  )

  return (
    <div
      onClick={() => openConversation(conversation.id)}
      className={`group flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-1 ${
        active ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary"
      }`}
    >
      {menu && createPortal(menu, document.body)}
      <F0Icon icon={Comment} size="md" />
      <span className="flex-1 truncate text-base font-medium text-f1-foreground">
        {conversation.title}
      </span>
      <button
        ref={menuButtonRef}
        onClick={openMenu}
        aria-label={`Options for "${conversation.title}"`}
        className={`flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[6px] hover:bg-f1-background ${
          menuPos ? "" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <F0Icon icon={Ellipsis} size="sm" color="secondary" />
      </button>
    </div>
  )
}

/** How many conversations "Active only" keeps visible — enough to feel
 *  alive, few enough to never drag the navigation below down. */
const RECENTS_ACTIVE_LIMIT = 4

type RecentsFilter = "active" | "all"

const RECENTS_FILTER_KEY = "f0compose:home:recents-filter"

function readRecentsFilter(): RecentsFilter {
  if (typeof window === "undefined") return "active"
  return window.localStorage.getItem(RECENTS_FILTER_KEY) === "all"
    ? "all"
    : "active"
}

/**
 * The Recents sliders button (Figma 1342:178885: 20px icon in a 4px
 * button) + its config popup: recents are mostly ephemeral, so "Active
 * only" (default) shows the few most recently touched conversations and
 * "All conversations" reveals the rest on demand.
 */
function RecentsControl({
  filter,
  total,
  onChange,
}: {
  filter: RecentsFilter
  total: number
  onChange: (filter: RecentsFilter) => void
}) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [pos, setPos] = useState<{ top: number; right: number } | null>(null)

  const toggle = () => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos((p) =>
      p ? null : { top: rect.bottom + 4, right: window.innerWidth - rect.right }
    )
  }

  const pick = (next: RecentsFilter) => {
    onChange(next)
    setPos(null)
  }

  // Portalled to <body> — same stacking-context reason as every sidebar
  // menu.
  const menu = pos && (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setPos(null)} />
      <div
        className="f0c-popover fixed z-50 flex w-[220px] flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
        style={{ top: pos.top, right: pos.right, transformOrigin: "top right" }}
      >
        <MenuRow
          icon={<F0Icon icon={Comment} size="md" color="default" />}
          label="Active only"
          trailing={
            filter === "active" ? (
              <F0Icon icon={Check} size="sm" color="positive" />
            ) : undefined
          }
          onClick={() => pick("active")}
        />
        <MenuRow
          icon={<F0Icon icon={Files} size="md" color="default" />}
          label="All conversations"
          trailing={
            filter === "all" ? (
              <F0Icon icon={Check} size="sm" color="positive" />
            ) : (
              <span className="text-sm font-medium text-f1-foreground-tertiary">
                {total}
              </span>
            )
          }
          onClick={() => pick("all")}
        />
        <MenuDivider />
        <MenuRow
          icon={<F0Icon icon={Delete} size="md" color="critical" />}
          label="Clear recents"
          onClick={() => {
            setPos(null)
            clearConversations()
          }}
        />
      </div>
    </>
  )

  return (
    <>
      {menu && createPortal(menu, document.body)}
      <button
        ref={buttonRef}
        onClick={toggle}
        aria-label="Configure recents"
        className="flex cursor-pointer items-center justify-center rounded-[8px] p-1 hover:bg-f1-background-secondary"
      >
        <F0Icon icon={Sliders} size="md" color="secondary" />
      </button>
    </>
  )
}

/** Work tab — Figma node 1058:11641 (with the Recents group wired to
 * conversations started from the ONE prompt bar). */
function WorkBody() {
  const { conversations, activeId } = useConversations()
  // Sub-screens live in the URL (?view=policies) so back/forward and
  // deep links behave; an open conversation always wins the canvas.
  const [searchParams, setSearchParams] = useSearchParams()
  const view = searchParams.get("view")
  const openScreen = (screen: string | null) => {
    goHome()
    setSearchParams(screen ? { view: screen } : {})
  }
  const [recentsFilter, setRecentsFilter] = useState<RecentsFilter>(readRecentsFilter)

  const changeFilter = (next: RecentsFilter) => {
    setRecentsFilter(next)
    window.localStorage.setItem(RECENTS_FILTER_KEY, next)
  }

  // Most recently touched first; "Active only" keeps the section short.
  const sorted = [...conversations].sort(
    (a, b) => b.lastActiveAt - a.lastActiveAt
  )
  const visible =
    recentsFilter === "active"
      ? sorted.slice(0, RECENTS_ACTIVE_LIMIT)
      : sorted

  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      <div className="flex flex-col gap-0.5">
        <NavRow
          icon={HomeIcon}
          label="Home"
          active={activeId === null && view !== "policies"}
          onClick={() => openScreen(null)}
        />
        <NavRow icon={Inbox} label="Inbox" badge={8} />
        <NavRow icon={Calendar} label="Calendar" />
        <NavRow icon={Graph} label="Analytics" />
      </div>
      {conversations.length > 0 && (
        <SidebarGroup
          label="Recents"
          trailing={
            <RecentsControl
              filter={recentsFilter}
              total={conversations.length}
              onChange={changeFilter}
            />
          }
        >
          {visible.map((conversation) => (
            <RecentRow
              key={conversation.id}
              conversation={conversation}
              active={conversation.id === activeId}
            />
          ))}
        </SidebarGroup>
      )}
      <SidebarGroup label="Favorites">
        <NavRow icon={Folder} label="Payslip" />
        <NavRow icon={File} label="Travel and Employee expenses policy" />
      </SidebarGroup>
      <SidebarGroup label="Company">
        <NavRow icon={People} label="People" />
        <NavRow icon={Files} label="Documents" />
        <NavRow
          icon={Shield}
          label="Policies"
          active={activeId === null && view === "policies"}
          onClick={() => openScreen("policies")}
        />
        <NavRow icon={LayersFront} label="Spaces" />
        <NavRow icon={SearchPerson} label="Talent" />
        <NavRow icon={Timer} label="Operations" />
        <NavRow icon={BarGraph} label="Planning" />
        <NavRow icon={Wallet} label="Expenses" />
      </SidebarGroup>
    </div>
  )
}

/** Light-blue unread badge used by the Chats tab (vs the red Counter). */
function UnreadBadge({ count }: { count: number }) {
  return (
    <span className="flex min-w-5 items-center justify-center rounded-md bg-f1-background-selected-secondary px-1 text-sm font-medium text-f1-foreground-selected">
      {count}
    </span>
  )
}

function ChatRow({
  avatar,
  label,
  unread,
}: {
  avatar: React.ReactNode
  label: string
  unread?: number
}) {
  return (
    <div className="flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-2 hover:bg-f1-background-secondary">
      {avatar}
      <span
        className={`flex-1 truncate text-base ${
          unread ? "font-semibold" : "font-medium"
        } text-f1-foreground`}
      >
        {label}
      </span>
      {unread !== undefined && <UnreadBadge count={unread} />}
    </div>
  )
}

/** Chats tab — Figma node 1047:10936. */
function ChatsBody() {
  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      <div className="flex flex-col gap-0.5">
        <NavRow icon={Pencil} label="Nuevo chat" />
        <NavRow icon={Megaphone} label="Nuevo canal" />
        <NavRow icon={VideoRecorder} label="Meetings" />
      </div>
      <SidebarGroup label="Chats directos">
        <ChatRow
          avatar={
            <F0AvatarPerson
              firstName="Lucía"
              lastName="Fernandez"
              src={avatarFor("lucia-f")}
              size="xs"
            />
          }
          label="Lucía Fernandez"
          unread={1}
        />
        <ChatRow
          avatar={
            <F0AvatarPerson
              firstName="Pablo"
              lastName="Navarro"
              src={avatarFor("pablo-n")}
              size="xs"
            />
          }
          label="Pablo Navarro"
        />
      </SidebarGroup>
      <SidebarGroup label="Canales">
        <ChatRow avatar={<F0AvatarEmoji emoji="📰" size="sm" />} label="Anuncios" unread={2} />
        <ChatRow avatar={<F0AvatarEmoji emoji="🚨" size="sm" />} label="Incidencias" />
        <ChatRow avatar={<F0AvatarEmoji emoji="⭐" size="sm" />} label="Turno mañana" unread={3} />
        <ChatRow avatar={<F0AvatarEmoji emoji="🛍️" size="sm" />} label="Tienda centro" />
        <ChatRow avatar={<F0AvatarEmoji emoji="📦" size="sm" />} label="Almacén Getafe" />
        <ChatRow avatar={<F0AvatarEmoji emoji="🌡️" size="sm" />} label="Encargados" />
      </SidebarGroup>
    </div>
  )
}

const companies = [
  { id: "factorial", name: "Factorial" },
  { id: "test-de-verdad", name: "Test de verdad" },
]

function MenuDivider() {
  return (
    <div className="-mx-1 my-1 h-px shrink-0 bg-f1-border-secondary" />
  )
}

function MenuRow({
  icon,
  label,
  trailing,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  trailing?: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left hover:bg-f1-background-secondary"
    >
      {icon}
      <span className="min-w-0 flex-1 truncate text-base font-medium text-f1-foreground">
        {label}
      </span>
      {trailing}
    </button>
  )
}

/**
 * The user menu, matching the "View drawer" in the Home - Vision Figma
 * file (node 1338:171587): company switcher on top (email + companies
 * with a check on the active one), then dark mode + settings, then
 * back to catalog.
 */
function HomeSidebarFooter() {
  const navigate = useNavigate()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [menuPos, setMenuPos] = useState<{
    left: number
    bottom: number
    width: number
  } | null>(null)
  const [theme, setTheme] = useState<"light" | "dark">(readTheme)
  const [activeCompany, setActiveCompany] = useState("factorial")

  // Same mechanism FloatingControls used: toggle the .dark class on <html>.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleMenu = () => {
    if (!open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      // Anchored to the sidebar itself: 12px inset on BOTH edges, so the
      // gap against the right border always mirrors the left one.
      const aside = triggerRef.current.closest("aside")
      const asideRect = aside?.getBoundingClientRect()
      const inset = 12
      setMenuPos({
        // Clamp: a mid-transition aside can measure off-screen.
        left: Math.max((asideRect?.left ?? rect.left - inset) + inset, inset),
        bottom: window.innerHeight - rect.top + 4,
        width: (asideRect?.width ?? rect.width + inset * 2) - inset * 2,
      })
    }
    setOpen((o) => !o)
  }

  // Portalled to <body>: the aside and the main content are sibling
  // stacking contexts, so anything rendered inside the aside would paint
  // *under* the canvas where it overflows the 240px sidebar — and the
  // click-away backdrop would never receive clicks over the canvas.
  const menu = open && menuPos && (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      <div
        className="f0c-popover fixed z-50 flex flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
        style={{ left: menuPos.left, bottom: menuPos.bottom, width: menuPos.width, transformOrigin: "bottom left" }}
      >
            {/* Company switcher — the Factorial row carries the brand
                module avatar (Figma: AvatarModule), the rest a company
                initial avatar. */}
            <div className="p-2 text-sm font-medium text-f1-foreground-secondary">
              alicia.keys@factorial.co
            </div>
            {companies.map((company) => (
              <MenuRow
                key={company.id}
                icon={
                  company.id === "factorial" ? (
                    <F0AvatarModule module="home" size="sm" />
                  ) : (
                    <F0AvatarCompany name={company.name} size="xs" />
                  )
                }
                label={company.name}
                trailing={
                  activeCompany === company.id ? (
                    <F0Icon icon={Check} size="sm" color="positive" />
                  ) : undefined
                }
                onClick={() => setActiveCompany(company.id)}
              />
            ))}
            <MenuDivider />
            {/* New in the Figma (1356:193937): upgrade-plan icon has no
                f0 equivalent — Sparkles is the closest stroke match. */}
            <MenuRow
              icon={<F0Icon icon={Sparkles} size="md" color="default" />}
              label="Discover Factorial"
            />
            <MenuDivider />
            <MenuRow
              icon={
                <F0Icon
                  icon={theme === "dark" ? Lightbulb : Moon}
                  size="md"
                  color="default"
                />
              }
              label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            />
            <MenuRow
              icon={<F0Icon icon={Settings} size="md" color="default" />}
              label="Settings"
            />
            <MenuDivider />
            <MenuRow
              icon={<F0Icon icon={Exit} size="md" color="default" />}
              label="Back to catalog"
              onClick={() => navigate("/")}
            />
      </div>
    </>
  )

  return (
    <div className="border-0 border-t border-solid border-f1-border-secondary px-3 py-2">
      {menu && createPortal(menu, document.body)}
      <button
        ref={triggerRef}
        onClick={toggleMenu}
        className="flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left hover:bg-f1-background-secondary"
      >
        <F0AvatarPerson
          firstName="Alicia"
          lastName="Keys"
          src={aliciaAvatar}
          size="xs"
        />
        <span className="flex-1 truncate text-base font-medium text-f1-foreground">
          Alicia Keys · Factorial
        </span>
      </button>
    </div>
  )
}

export function HomeSidebar() {
  const [tab, setTab] = useState<SidebarTab>("work")
  return (
    <Sidebar
      header={<HomeSidebarHeader tab={tab} onTabChange={setTab} />}
      body={tab === "work" ? <WorkBody /> : <ChatsBody />}
      footer={<HomeSidebarFooter />}
    />
  )
}
