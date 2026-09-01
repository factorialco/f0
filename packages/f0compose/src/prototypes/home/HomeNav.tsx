import {
  F0AvatarCompany,
  F0AvatarEmoji,
  F0AvatarPerson,
  F0Checkbox,
  F0Button,
  F0Icon,
  IconType,
} from "@factorialco/f0-react"
import {
  F0AvatarModule,
  SearchBar,
} from "@factorialco/f0-react/dist/experimental"
import {
  AcademicCap,
  Balance,
  Bank,
  Basket,
  BookOpen,
  Calendar,
  ChartLine,
  ChartPie,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Comment,
  Computer,
  Delete,
  DollarBill,
  Ellipsis,
  Exit,
  Files,
  Folder,
  Folders,
  Graph,
  Handshake,
  Home as HomeIcon,
  Hub as HubIcon,
  Inbox as InboxIcon,
  Laptop,
  Lightbulb,
  Marketplace,
  Megaphone,
  MessageHeart,
  Messages,
  Money,
  Moon,
  Office,
  Organization,
  Pencil,
  People,
  Plane,
  PalmTree,
  Plus,
  Present,
  Schedule,
  SearchPerson,
  Settings,
  Shield,
  Sliders,
  Sparkles,
  Suitcase,
  Timer,
  Wallet,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useNavigate, useSearchParams } from "react-router-dom"

import { avatarFor } from "@/fixtures/helpers"

import type { Chat, ChatId } from "./comms/chats"
import type { InboxTask } from "./inbox/inboxTasks"

import { Bot } from "./Bot"
import { TEAM_ABSENCE_FILTERS, WORKPLACES } from "./calendar/calendarFixtures"
import { CalGroup, MiniMonth } from "./calendar/MiniMonth"
import { CHANNEL_CHATS, DIRECT_CHATS } from "./comms/chats"
import { requestChat, useOpenChats } from "./comms/chatStore"
import { factorialLogo, PROFILE_PEOPLE } from "./fixtures"
import { inboxTasks } from "./inbox/inboxTasks"
import {
  clearConversations,
  deleteConversation,
  goHome,
  openConversation,
  renameConversation,
  useConversations,
  type Conversation,
} from "./one/conversationStore"
import { PanelCollapse } from "./PanelCollapse"
import {
  PROFILE_LABELS,
  setProfile,
  useProfile,
  type ProfileId,
} from "./profileStore"

/**
 * Home's navigation (Figma 2621:22725, "Home - Vision"): a FIXED 48px
 * icon rail (Home / Comms / Inbox / Cal / Hub, Marketplace + Security +
 * user at the bottom) plus a 240px CONTEXTUAL panel that swaps its body
 * with the selected rail section and collapses behind the header button.
 * Replaces both the old Work/Chats sidebar and the navbar "⋮" windows
 * menu — Insights and Events windows now open from panel rows (via the
 * conversationStore's window-request channel, so they keep the generic
 * slide-in that One-triggered opens use).
 *
 * The rail must never hide, so the panel's collapse is prototype state
 * (persisted) — NOT the ApplicationFrame's locked/hidden mechanism,
 * which is normalized to "locked" on mount.
 *
 * Icon gaps vs the Figma design (closest f0 equivalent in use):
 * robot/Agents → Ai · panel-collapse → local PanelCollapse.tsx ·
 * cube/Spaces → LayersFront.
 */

const THEME_STORAGE_KEY = "f0compose:theme"

function readTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark"
    ? "dark"
    : "light"
}

type NavSectionId = "home" | "comms" | "inbox" | "cal" | "hub"

const NAV_SECTION_KEY = "f0compose:home:nav-section"
const NAV_OPEN_KEY = "f0compose:home:nav-open"

const RAIL_SECTIONS: { id: NavSectionId; label: string; icon: IconType }[] = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "comms", label: "Comms", icon: Messages },
  { id: "inbox", label: "Inbox", icon: InboxIcon },
  { id: "cal", label: "Cal", icon: Calendar },
  { id: "hub", label: "Hub", icon: HubIcon },
]

const PANEL_TITLES: Record<NavSectionId, string> = {
  home: "Home",
  comms: "Comms",
  inbox: "Inbox",
  cal: "Calendar",
  hub: "Hub",
}

function readSection(): NavSectionId {
  if (typeof window === "undefined") return "home"
  const stored = window.localStorage.getItem(NAV_SECTION_KEY)
  return RAIL_SECTIONS.some((s) => s.id === stored)
    ? (stored as NavSectionId)
    : "home"
}

function readPanelOpen(): boolean {
  if (typeof window === "undefined") return true
  return window.localStorage.getItem(NAV_OPEN_KEY) !== "closed"
}

function NavRow({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon?: IconType
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`f0c-pressable flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left ${
        active
          ? "bg-f1-background-secondary"
          : "hover:bg-f1-background-secondary"
      }`}
    >
      {icon && <F0Icon icon={icon} size="md" color="default" />}
      <span className="flex-1 truncate text-base font-medium text-f1-foreground">
        {label}
      </span>
    </button>
  )
}

/** Collapsible section header ("Pinned ⌄", "Canales ⌄"…). */
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
      {/* pr-1 matches RecentRow's own right padding, so the trailing
          control lines up exactly with the "⋮" on the rows below. */}
      <div className="flex items-center justify-between pr-1">
        <button
          onClick={() => setGroupOpen(!groupOpen)}
          className="f0c-pressable flex cursor-pointer items-center gap-1 rounded-[10px] px-1.5 py-1 text-sm font-medium text-f1-foreground-secondary"
        >
          {label}
          {/* Icon swap, not a rotate class — F0Icon drops className. */}
          <F0Icon
            icon={groupOpen ? ChevronDown : ChevronRight}
            size="xs"
            color="default"
          />
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
 * the same stacking-context reason as the rail user menu.
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
    setMenuPos((pos) =>
      pos ? null : { left: rect.left, top: rect.bottom + 4 }
    )
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
        <F0Icon icon={Comment} size="md" color="default" />
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

  // Portal events propagate through the REACT tree, not the DOM tree —
  // without these stops every menu click would also fire the row's
  // openConversation (Delete would then re-open the just-deleted id).
  const menu = menuPos && (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={(event) => {
          event.stopPropagation()
          setMenuPos(null)
        }}
      />
      <div
        onClick={(event) => event.stopPropagation()}
        className="f0c-popover fixed z-50 flex w-[180px] flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
        style={{
          left: menuPos.left,
          top: menuPos.top,
          transformOrigin: "top left",
        }}
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
      className={`f0c-pressable group flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-1 ${
        active
          ? "bg-f1-background-secondary"
          : "hover:bg-f1-background-secondary"
      }`}
    >
      {menu && createPortal(menu, document.body)}
      <F0Icon icon={Comment} size="md" color="default" />
      <span className="flex-1 truncate text-base font-medium text-f1-foreground">
        {conversation.title}
      </span>
      <button
        ref={menuButtonRef}
        onClick={openMenu}
        aria-label={`Options for "${conversation.title}"`}
        // The reveal is hover-gated to fine pointers: on touch there is
        // no hover, so the ⋮ would be permanently invisible and the row
        // would lose rename/delete entirely.
        // hover goes DARKER, not white. f0's background tokens are alpha
        // (secondary = rgba(5,38,87,.06)), so a tint on the already-hovered
        // row COMPOUNDS into a deeper grey — the two hovers multiply. The
        // old `hover:bg-f1-background` was opaque white and punched a pale
        // hole through the row instead.
        className={`f0c-pressable flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[6px] transition-opacity duration-100 hover:bg-f1-background-secondary-hover ${
          menuPos
            ? ""
            : "[@media(hover:hover)_and_(pointer:fine)]:opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100"
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
 * The Recents sliders button + its config popup: recents are mostly
 * ephemeral, so "Active only" (default) shows the few most recently
 * touched conversations and "All conversations" reveals the rest on
 * demand. The button mirrors the RecentRow "⋮" exactly — same 24px box,
 * same 16px secondary glyph, same right padding — so the two line up down
 * the edge of the Recents list (per Oskar). It is bespoke rather than an
 * F0Button because F0Button exposes neither className nor an icon colour,
 * so its ghost variant always renders the glyph at full foreground.
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
              <F0Icon icon={Check} size="sm" color="info" />
            ) : undefined
          }
          onClick={() => pick("active")}
        />
        <MenuRow
          icon={<F0Icon icon={Files} size="md" color="default" />}
          label="All conversations"
          trailing={
            filter === "all" ? (
              <F0Icon icon={Check} size="sm" color="info" />
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
        className="f0c-pressable flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[6px] hover:bg-f1-background-secondary"
      >
        <F0Icon icon={Sliders} size="sm" color="secondary" />
      </button>
    </>
  )
}

/** Home section (Figma 2621:23055): quick actions + Pinned + the live
 *  Recents (wired to conversations started from the ONE prompt bar). */
function HomePanelBody() {
  const profile = useProfile()
  const { conversations, activeId } = useConversations()
  // Sub-screens live in the URL (?view=policies) so back/forward and
  // deep links behave; an open conversation always wins the canvas.
  const [searchParams, setSearchParams] = useSearchParams()
  const view = searchParams.get("view")
  const openScreen = (screen: string | null) => {
    goHome()
    setSearchParams(screen ? { view: screen } : {})
  }
  const [recentsFilter, setRecentsFilter] =
    useState<RecentsFilter>(readRecentsFilter)

  const changeFilter = (next: RecentsFilter) => {
    setRecentsFilter(next)
    window.localStorage.setItem(RECENTS_FILTER_KEY, next)
  }

  // Most recently touched first; "Active only" keeps the section short.
  const sorted = [...conversations].sort(
    (a, b) => b.lastActiveAt - a.lastActiveAt
  )
  const visible =
    recentsFilter === "active" ? sorted.slice(0, RECENTS_ACTIVE_LIMIT) : sorted

  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      <div className="flex flex-col gap-0.5">
        <NavRow icon={Plus} label="New" onClick={() => openScreen(null)} />
        {/* Agents and Reports are admin-only: the employee panel in the
            frame is New / Routines / Documents. The real bot glyph comes
            from the One AI Kit (13961:4824) — f0 ships no robot icon. */}
        {profile === "admin" && <NavRow icon={Bot} label="Agents" />}
        <NavRow icon={Clock} label="Routines" />
        {/* Reports is NOT the Insights widget (per Oskar, 2026-08-31):
            Insights tells you about your own activity, Reports is for
            reports you build yourself with One. It used to open the
            Insights widget, which demoed the wrong concept — so it is
            visual-only like Agents and Routines until a Reports surface
            is designed. */}
        {profile === "admin" && <NavRow icon={Graph} label="Reports" />}
        {/* The Documents screen is the Policies ODC sub-screen. */}
        <NavRow
          icon={Folders}
          label="Documents"
          active={activeId === null && view === "policies"}
          onClick={() => openScreen("policies")}
        />
      </div>
      {/* Pinned carries a different example per profile, straight from the
          frame: a manager pins their triage queue, an employee pins their
          own holidays. */}
      <SidebarGroup label="Pinned">
        {profile === "admin" ? (
          <NavRow icon={Comment} label="Inbox triage" />
        ) : (
          <NavRow icon={Plane} label="My holidays" />
        )}
      </SidebarGroup>
      {/* Recents is admin-only — the employee panel in the frame stops at
          Pinned. Conversations still work, they just aren't listed here. */}
      {profile === "admin" && conversations.length > 0 && (
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
    </div>
  )
}

/** Light-blue unread badge used by the Comms section (vs the red Counter). */
function UnreadBadge({ count }: { count: number }) {
  return (
    <span className="flex min-w-5 items-center justify-center rounded-md bg-f1-background-selected-secondary px-1 text-sm font-medium text-f1-foreground-selected">
      {count}
    </span>
  )
}

/** A conversation row. Clicking opens it as a window in the left-hand
 *  stack, and the row carries NavRow's selected state while it is open. */
function ChatRow({
  id,
  avatar,
  label,
  unread,
  active,
}: {
  id: ChatId
  avatar: React.ReactNode
  label: string
  unread?: number
  active: boolean
}) {
  return (
    <button
      onClick={() => requestChat(id)}
      className={`f0c-pressable flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left ${
        active
          ? "bg-f1-background-secondary"
          : "hover:bg-f1-background-secondary"
      }`}
    >
      {avatar}
      <span
        className={`flex-1 truncate text-base ${
          unread ? "font-semibold" : "font-medium"
        } text-f1-foreground`}
      >
        {label}
      </span>
      {unread !== undefined && <UnreadBadge count={unread} />}
    </button>
  )
}

/** Comms section — the old Chats tab, per the new nav design.
 *
 *  The list is driven by the CHATS fixture rather than hardcoded here:
 *  the chat WINDOWS render from the same data, so a row and its window
 *  can never disagree about a title, an emoji or an unread count. */
function CommsPanelBody() {
  const openChats = useOpenChats()
  const row = (chat: Chat) => (
    <ChatRow
      key={chat.id}
      id={chat.id}
      active={openChats.includes(chat.id)}
      avatar={
        chat.kind === "channel" ? (
          <F0AvatarEmoji emoji={chat.emoji ?? "\u{1F4AC}"} size="sm" />
        ) : (
          <F0AvatarPerson
            firstName={chat.title.split(" ")[0]}
            lastName={chat.title.split(" ").slice(1).join(" ")}
            src={chat.seed ? avatarFor(chat.seed) : undefined}
            size="xs"
          />
        )
      }
      label={chat.title}
      unread={chat.unread}
    />
  )
  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      <div className="flex flex-col gap-0.5">
        <NavRow icon={Pencil} label="New conversation" />
        <NavRow icon={Megaphone} label="New channel" />
      </div>
      <SidebarGroup label="Chats directos">
        {DIRECT_CHATS.map(row)}
      </SidebarGroup>
      <SidebarGroup label="Canales">{CHANNEL_CHATS.map(row)}</SidebarGroup>
    </div>
  )
}

/**
 * A row in the Inbox nav (Figma 2621:28151). Measured off the frame at
 * its 419px width: the row is 66 tall, the 20px selector sits at x=12,
 * the 32px avatar (with its 16px module badge) at x=44, and the text
 * column at x=88. Title and subtitle are BOTH 14/20 — the subtitle is
 * separated by colour, not size.
 *
 * Rows are divided by an edge-to-edge hairline, so the padding lives on
 * the row rather than on the list.
 */
function InboxPanelRow({ item, active }: { item: InboxTask; active: boolean }) {
  const [done, setDone] = useState(false)
  return (
    <div
      className={`flex h-[66px] w-full items-center gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 ${
        active ? "bg-f1-background-secondary" : ""
      }`}
    >
      <F0Checkbox
        checked={done}
        onCheckedChange={setDone}
        title={done ? `Reopen "${item.title}"` : `Complete "${item.title}"`}
        hideLabel
      />
      <div className="shrink-0">
        <F0AvatarPerson
          firstName={item.avatarSeed}
          lastName="."
          src={avatarFor(item.avatarSeed)}
          size="md"
          badge={{ type: "module", module: item.module }}
        />
      </div>
      {/* The row body opens the ticket; the checkbox beside it stays its
          own control, so ticking one off never opens it. */}
      <button
        onClick={() => requestChat(`ticket:${item.id}`)}
        className={`flex min-w-0 flex-1 cursor-pointer flex-col items-start text-left ${
          done ? "opacity-50" : ""
        }`}
      >
        <span className="w-full truncate text-base font-medium text-f1-foreground">
          {item.title}
        </span>
        <span className="w-full truncate text-base text-f1-foreground-secondary">
          {item.meta}
        </span>
      </button>
    </div>
  )
}

function InboxPanelBody() {
  const profile = useProfile()
  const open = useOpenChats()
  return (
    <div className="flex flex-col">
      {inboxTasks(profile).map((item) => (
        <InboxPanelRow
          key={item.id}
          item={item}
          active={open.includes(`ticket:${item.id}`)}
        />
      ))}
    </div>
  )
}

/**
 * Cal section (Figma 2621:29173). Month picker on top, then the three
 * filter groups the frame shows: who you are meeting, which workplaces,
 * and which slice of team absences to overlay on the grid.
 *
 * The frame's own upcoming-events list is gone — that content lives in
 * the Events widget, and the calendar canvas now shows the week itself.
 */
function CalPanelBody() {
  return (
    <div className="flex flex-col">
      <MiniMonth />
      <div className="flex flex-col gap-3 px-3 pb-1.5">
        <CalGroup label="Meet with">
          <PeopleSearch />
        </CalGroup>
        <CalGroup label="Workplaces">
          {WORKPLACES.map((place) => (
            <NavRow key={place} icon={Office} label={place} />
          ))}
        </CalGroup>
        <CalGroup label="Team absences">
          {TEAM_ABSENCE_FILTERS.map((filter) => (
            <AbsenceFilterRow key={filter} label={filter} />
          ))}
        </CalGroup>
      </div>
    </div>
  )
}

/** The "Meet with" field. Hand-rolled rather than the shell's SearchBar,
 *  which carries its own px-3 wrapper and bottom margin — inside a group
 *  that already has padding it came out inset twice and too narrow. The
 *  frame runs it the full width of the panel's content column. */
function PeopleSearch() {
  return (
    <div className="flex h-8 w-full items-center gap-2 rounded-[10px] border border-solid border-f1-border-secondary bg-f1-background px-2.5">
      <F0Icon icon={SearchPerson} size="sm" color="default" />
      <input
        aria-label="Search for people"
        placeholder="Search for people"
        className="min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-secondary"
      />
    </div>
  )
}

/** A checkbox row in "Team absences" — the frame's only checked list in
 *  the nav, so it does not reuse NavRow. */
function AbsenceFilterRow({ label }: { label: string }) {
  const [on, setOn] = useState(false)
  return (
    <label className="flex w-full cursor-pointer items-center gap-2 rounded-[10px] py-1.5 pl-1.5 pr-2 hover:bg-f1-background-secondary">
      <F0Checkbox
        checked={on}
        onCheckedChange={setOn}
        title={label}
        hideLabel
      />
      <span className="min-w-0 flex-1 truncate text-base font-medium text-f1-foreground">
        {label}
      </span>
    </label>
  )
}

/** Hub section — every module, grouped by intention-level category. */
/**
 * One glyph per Hub label, shared by both profiles so the same module
 * never changes icon between them.
 *
 * Where the employee frame (2712:430800) NAMES its icon layers, that name
 * wins — it is ground truth from the design system, and it corrects four
 * of the guesses the admin Hub shipped with when 2639:49719 turned out to
 * export no per-icon assets (Workplaces was Building, Handbook File,
 * Software Code, Purchasing ShoppingCart, Projects Briefcase).
 *
 * INFERRED, still: Planning wants `HeadcountPlanning`, which f0 has no
 * equivalent for — `Organization` is the closest. Equipment, Payroll,
 * Recruitment, Sales, Treasury and Accounting are admin-only rows the
 * employee frame never shows, so they keep their earlier matches.
 */
const HUB_ICONS: Record<string, IconType> = {
  Absences: PalmTree,
  Accounting: Balance,
  Benefits: Present,
  Compensation: ChartPie,
  Engagement: MessageHeart,
  Equipment: Laptop,
  Handbook: Folder,
  Hours: Timer,
  Learning: AcademicCap,
  Payroll: Money,
  Payslips: DollarBill,
  People: People,
  Performance: ChartLine,
  Planning: Organization,
  Projects: Suitcase,
  Purchasing: Basket,
  Recruitment: SearchPerson,
  Sales: Handshake,
  Shifts: Schedule,
  Software: Computer,
  Spend: Wallet,
  Spending: Wallet,
  Training: BookOpen,
  Treasury: Bank,
  "Time off": PalmTree,
  "Time tracking": Timer,
  Workplaces: Office,
}

type HubGroup = { label: string; items: string[] }

/** Figma 2639:49719 — five groups. */
const ADMIN_HUB: HubGroup[] = [
  {
    label: "Company",
    items: ["People", "Workplaces", "Equipment", "Software", "Handbook"],
  },
  { label: "Work", items: ["Time off", "Time tracking", "Shifts", "Projects"] },
  { label: "Pay", items: ["Payroll", "Compensation", "Benefits"] },
  {
    label: "Talent",
    // The frame reads "Engagment" — a typo in the mock.
    items: ["Recruitment", "Performance", "Engagement", "Training"],
  },
  {
    label: "Finance",
    items: [
      "Planning",
      "Sales",
      "Spending",
      "Purchasing",
      "Treasury",
      "Accounting",
    ],
  },
]

/**
 * Figma 2712:430800 — the employee's Hub. It is the admin's with the
 * administering stripped out (no Payroll, Recruitment, Shifts, Equipment,
 * Sales, Treasury, Accounting) and a new PERSONAL group on top holding
 * the four things an employee opens about themselves. Software moves from
 * Company to Finance.
 */
const EMPLOYEE_HUB: HubGroup[] = [
  { label: "Personal", items: ["Hours", "Absences", "Payslips", "Learning"] },
  { label: "Company", items: ["People", "Workplaces", "Handbook"] },
  { label: "Work", items: ["Time off", "Time tracking", "Projects"] },
  { label: "Pay", items: ["Compensation", "Benefits"] },
  { label: "Talent", items: ["Performance", "Engagement", "Training"] },
  { label: "Finance", items: ["Planning", "Spend", "Purchasing", "Software"] },
]

/**
 * Hub rows that have a screen behind them, label → `?view=` slug. Every
 * other row is still visual-only (the prototype's rule: keep the finished
 * shape, don't fake the surface), so this map is the whole allow-list.
 */
const HUB_VIEWS: Record<string, string> = {
  People: "people",
}

function HubPanelBody() {
  const profile = useProfile()
  const groups = profile === "employee" ? EMPLOYEE_HUB : ADMIN_HUB
  // Same URL-driven navigation the Home panel's Documents row uses — an
  // open conversation always wins the canvas, so `goHome()` first.
  const { activeId } = useConversations()
  const [searchParams, setSearchParams] = useSearchParams()
  const view = searchParams.get("view")
  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      {groups.map((group) => (
        <SidebarGroup key={group.label} label={group.label}>
          {group.items.map((label) => {
            const screen = HUB_VIEWS[label]
            return (
              <NavRow
                key={label}
                icon={HUB_ICONS[label]}
                label={label}
                active={
                  screen !== undefined && activeId === null && view === screen
                }
                onClick={
                  screen === undefined
                    ? undefined
                    : () => {
                        goHome()
                        setSearchParams({ view: screen })
                      }
                }
              />
            )
          })}
        </SidebarGroup>
      ))}
    </div>
  )
}

const companies = [
  { id: "factorial", name: "Factorial" },
  { id: "test-de-verdad", name: "Test de verdad" },
]

function MenuDivider() {
  return <div className="-mx-1 my-1 h-px shrink-0 bg-f1-border-secondary" />
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
 * back to catalog. Now anchored to the rail's bottom avatar, opening
 * to its right (portalled to <body> — the rail and the canvas are
 * sibling stacking contexts).
 */
function RailUserMenu() {
  const profile = useProfile()
  // The rail face follows the profile too — it is the whole point of the
  // switch that you are looking at someone else's Home.
  const person = PROFILE_PEOPLE[profile]
  const navigate = useNavigate()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [menuPos, setMenuPos] = useState<{
    left: number
    bottom: number
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
      setMenuPos({
        // Just right of the rail, bottom-aligned with the avatar.
        left: rect.right + 8,
        bottom: window.innerHeight - rect.bottom,
      })
    }
    setOpen((o) => !o)
  }

  const menu = open && menuPos && (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      <div
        className="f0c-popover fixed z-50 flex w-[248px] flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
        style={{
          left: menuPos.left,
          bottom: menuPos.bottom,
          transformOrigin: "bottom left",
        }}
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
                <F0Icon icon={Check} size="sm" color="info" />
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
        {/* Profile switcher (per Oskar, Figma 2694:55469): the prototype
            can be viewed as the manager it has always shown, or as an
            employee — which swaps the canvas and strips this nav down to
            the self-service essentials. */}
        {(["admin", "employee"] as ProfileId[]).map((id) => (
          <MenuRow
            key={id}
            icon={
              <F0Icon
                icon={id === "admin" ? Shield : SearchPerson}
                size="md"
                color="default"
              />
            }
            label={`View as ${PROFILE_LABELS[id].toLowerCase()}`}
            trailing={
              profile === id ? (
                <F0Icon icon={Check} size="sm" color="info" />
              ) : undefined
            }
            onClick={() => {
              setProfile(id)
              setOpen(false)
            }}
          />
        ))}
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
    <>
      {menu && createPortal(menu, document.body)}
      <button
        ref={triggerRef}
        onClick={toggleMenu}
        aria-label="Open user menu"
        className="f0c-pressable flex cursor-pointer items-center justify-center rounded-full"
      >
        {/* 24px in the rail (Figma 2621:22884) — one step up from the
            20px the old sidebar footer used. */}
        <F0AvatarPerson
          firstName={person.firstName}
          lastName={person.lastName}
          src={person.avatar}
          size="sm"
        />
      </button>
    </>
  )
}

/** One 48px rail item: 32px icon button + 9px label (Figma 2621:22827). */
function RailItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: IconType
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-current={active ? "true" : undefined}
      className="group flex w-full cursor-pointer flex-col items-center gap-0.5"
    >
      <span
        className={`flex size-8 items-center justify-center rounded-[10px] ${
          active
            ? "bg-f1-background-secondary"
            : "group-hover:bg-f1-background-secondary"
        }`}
      >
        {/* Every rail glyph is the SAME weight in the design (Figma
            2694:55571 — all six export as #011637, the active one
            included): `foreground/default/secondary` composites to
            rgb(99,112,132) over the rail, which is f0's `icon` DEFAULT
            token (rgb(99,110,131)), not `icon-secondary` (rgb(162,172,190))
            — that was the washed-out look Oskar flagged. Active is
            distinguished by its pill background alone. */}
        <F0Icon icon={icon} size="md" color="default" />
      </span>
      <span className="w-full truncate text-center text-[9px] font-medium leading-3 text-f1-foreground-secondary">
        {label}
      </span>
    </button>
  )
}

/** Visual-only 32px icon button for the rail's bottom cluster. */
function RailIconButton({ icon, label }: { icon: IconType; label: string }) {
  return (
    <button
      aria-label={label}
      className="f0c-pressable flex size-8 cursor-pointer items-center justify-center rounded-[10px] hover:bg-f1-background-secondary"
    >
      {/* Same token as the section items above — see RailItem. */}
      <F0Icon icon={icon} size="md" color="default" />
    </button>
  )
}

export function HomeNav() {
  // setSearchParams, NOT navigate("/"): the prototype is mounted at
  // /p/home, so navigating to the root leaves it altogether.
  const [searchParams, setSearchParams] = useSearchParams()
  const [section, setSection] = useState<NavSectionId>(readSection)
  const [panelOpen, setPanelOpen] = useState<boolean>(readPanelOpen)
  const rootRef = useRef<HTMLDivElement>(null)

  // NEVER call toggleSidebar here: the ONE chat forces the xl breakpoint,
  // so under 1440px the FrameProvider treats the viewport as small and
  // "locked" is unreachable — toggling only flips the floating overlay
  // (whose backdrop would dim and block the canvas). Instead the frame is
  // left parked on "hidden" and its two side effects are neutralized: the
  // slot width via CSS (see FULL_BLEED_CSS) and the `inert` attribute the
  // ApplicationFrame re-sets on every commit, stripped here as it lands.
  useEffect(() => {
    const wrapper = rootRef.current?.parentElement
    if (!wrapper) return
    const strip = () => wrapper.removeAttribute("inert")
    strip()
    const observer = new MutationObserver(strip)
    observer.observe(wrapper, { attributes: true, attributeFilter: ["inert"] })
    return () => observer.disconnect()
  }, [])

  const persist = (nextSection: NavSectionId, nextOpen: boolean) => {
    window.localStorage.setItem(NAV_SECTION_KEY, nextSection)
    window.localStorage.setItem(NAV_OPEN_KEY, nextOpen ? "open" : "closed")
  }

  const pickSection = (id: NavSectionId) => {
    // Re-clicking the active section toggles the panel; anything else
    // switches (and reopens if collapsed).
    const nextOpen = id === section ? !panelOpen : true
    setSection(id)
    setPanelOpen(nextOpen)
    persist(id, nextOpen)
    // Cal is the one section that is also a DESTINATION: the frame shows
    // its panel beside the week grid, not beside Home (Figma 2621:29173).
    // Comms/Inbox/Hub stay side panels and leave the canvas alone.
    if (id === "cal") {
      goHome()
      setSearchParams({ view: "calendar" })
    } else if (searchParams.get("view") === "calendar") {
      setSearchParams({})
    }
  }

  /**
   * The Inbox panel is far wider than the rest (Figma 2621:28151 draws it
   * at 419), because its rows carry a title AND a subtitle instead of a
   * single label. That matches the proportion Linear gives its own inbox
   * list — roughly 1.7x its nav — which is the reference Oskar named.
   */
  const panelWidth = section === "inbox" ? 419 : section === "cal" ? 293 : 240

  const collapse = () => {
    setPanelOpen(false)
    persist(section, false)
  }

  return (
    <div ref={rootRef} data-home-nav className="flex h-full min-h-0">
      {/* Fixed 48px icon rail. */}
      <div
        data-home-rail
        className="flex w-12 shrink-0 flex-col items-center overflow-y-auto"
      >
        {/* Figma 2621:22835 — f0's AvatarCompany in its with-logo variant
            (24px). The logo file is f0's own storybook asset, re-exported
            from fixtures; without `src` this falls back to initials. */}
        <div className="flex h-[60px] shrink-0 items-center justify-center">
          <F0AvatarCompany name="Factorial" src={factorialLogo} size="sm" />
        </div>
        <div className="flex w-full flex-col gap-2 px-1.5">
          {RAIL_SECTIONS.map((s) => (
            <RailItem
              key={s.id}
              icon={s.icon}
              label={s.label}
              active={s.id === section}
              onClick={() => pickSection(s.id)}
            />
          ))}
        </div>
        {/* Figma 2621:22880: Marketplace above Shield (2px apart), then the
            user avatar 8px below — measured off the composed frame render.
            Isolated per-node renders of this cluster resolve the icon
            overrides differently (they come back as Feed/Shield swapped);
            the composed frame is the one that matches the design. */}
        <div className="mt-auto flex flex-col items-center gap-0.5 pb-3 pt-2">
          <RailIconButton icon={Marketplace} label="Marketplace" />
          <RailIconButton icon={Shield} label="Security" />
          <span className="pt-1.5">
            <RailUserMenu />
          </span>
        </div>
      </div>

      {/* Contextual panel — collapses to nothing behind the header button. */}
      <div
        data-home-panel
        className="f0c-ease-out h-full shrink-0 overflow-hidden transition-[width] duration-200 motion-reduce:transition-none"
        style={{ width: panelOpen ? panelWidth : 0 }}
        ref={(node) => {
          // Keep the collapsed panel out of the tab order.
          if (panelOpen) node?.removeAttribute("inert")
          else node?.setAttribute("inert", "")
        }}
      >
        {/* Fixed at the panel's OWN width so the body does not reflow
            while the wrapper animates open or shut. */}
        <div className="flex h-full flex-col" style={{ width: panelWidth }}>
          <div className="flex h-[60px] shrink-0 items-center justify-between pl-3 pr-2">
            <span className="truncate text-base font-medium text-f1-foreground">
              {PANEL_TITLES[section]}
            </span>
            <div className="flex shrink-0 items-center">
              {/* The Inbox header carries a filter control beside the
                  collapse button (Figma 2621:28151) — visual only. */}
              {section === "inbox" && (
                <F0Button
                  variant="ghost"
                  size="sm"
                  icon={Sliders}
                  hideLabel
                  label="Filter inbox"
                />
              )}
              <F0Button
                variant="ghost"
                size="sm"
                icon={PanelCollapse}
                hideLabel
                label="Collapse panel"
                onClick={collapse}
              />
            </div>
          </div>
          {/* SearchBar ships its own px-3 wrapper + bottom margin. The
              Cal frame has no search under its header — its only field is
              the people picker inside "Meet with". */}
          {section !== "cal" && <SearchBar placeholder="Search…" />}
          <div className="home-panel-scroll min-h-0 flex-1 overflow-y-auto">
            {section === "home" ? (
              <HomePanelBody />
            ) : section === "comms" ? (
              <CommsPanelBody />
            ) : section === "inbox" ? (
              <InboxPanelBody />
            ) : section === "cal" ? (
              <CalPanelBody />
            ) : (
              <HubPanelBody />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
