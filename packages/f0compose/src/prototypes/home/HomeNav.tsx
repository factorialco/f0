import {
  F0AvatarPerson,
  F0Checkbox,
  F0Button,
  F0Icon,
  IconType,
} from "@factorialco/f0-react"
import { SearchBar } from "@factorialco/f0-react/dist/experimental"
import {
  Bell,
  AcademicCap,
  Archive,
  Balance,
  Bank,
  Basket,
  BookOpen,
  Building,
  Calendar,
  ChartLine,
  ChartPie,
  BarGraph,
  Check,
  CheckCircleLine,
  ChevronDown,
  ChevronRight,
  Clock,
  Comment,
  Computer,
  Delete,
  DollarBill,
  Ellipsis,
  Files,
  Filter,
  Folder,
  Folders,
  Graph,
  Handshake,
  HardDrive,
  Headset,
  Heart,
  Laptop,
  Marketplace,
  MessageHeart,
  Messages,
  MoneyBag,
  Office,
  Organization,
  PalmTree,
  Pencil,
  People,
  Plus,
  Present,
  Receipt,
  Schedule,
  SearchPerson,
  Settings,
  Sliders,
  Suitcase,
  Timer,
  UserProtected,
  Wallet,
  Home as HomeIcon,
  Hub as HubIcon,
  Inbox as InboxIcon,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useSearchParams } from "react-router-dom"

import { avatarFor } from "@/fixtures/helpers"

import type { Chat, ChatId } from "./comms/chats"
import type { InboxTask } from "./inbox/inboxTasks"

import {
  TEAM_ABSENCE_FILTERS,
  WORKPLACES,
} from "./calendar/calendarFixtures"
import { CalGroup, MiniMonth } from "./calendar/MiniMonth"
import { CHANNEL_CHATS, DIRECT_CHATS } from "./comms/chats"
import {
  requestChat,
  requestChatsClose,
  useOpenChats,
} from "./comms/chatStore"
import { hubSlug } from "./hub/hubSlug"
import { motionKeyFor } from "./iconMotion"
import { openInboxTasks } from "./inbox/inboxTasks"
import { MenuDivider, MenuRow } from "./MenuRow"
import {
  CompanyLogo,
  RailHelpMenu,
  RailPersonalMenu,
} from "./navigation/RailMenus"
import { useNeedsYou } from "./needsYouStore"
import {
  clearConversations,
  deleteConversation,
  goHome,
  openConversation,
  renameConversation,
  requestWindowsCollapse,
  useConversations,
  type Conversation,
} from "./one/conversationStore"
import { PanelCollapse } from "./PanelCollapse"
import { type PinnedItem, removePinned, usePinned } from "./pinnedStore"
import { useProfile } from "./profileStore"
import { COMMUNITIES } from "./windows/communityPosts"

/**
 * Home's navigation (Figma 2621:22725, "Home - Vision"): a FIXED 48px
 * icon rail (Home / Comms / Inbox / Cal / Hub, Marketplace / Settings / Notifications / Help +
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

type NavSectionId = "home" | "comms" | "inbox" | "cal" | "hub"

const NAV_SECTION_KEY = "f0compose:home:nav-section"
const NAV_OPEN_KEY = "f0compose:home:nav-open"

const RAIL_SECTIONS: { id: NavSectionId; label: string; icon: IconType }[] =
  [
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
  emoji,
  label,
  active = false,
  trailing,
  onClick,
}: {
  icon?: IconType
  /**
   * An emoji instead of an icon, for the agent rows (Figma 2741:465529):
   * the frame puts the agent's own glyph in the same 20px box the icons
   * use, so the rows line up whichever they carry.
   */
  emoji?: string
  label: string
  active?: boolean
  /** Right-hand slot — the agents' activity dot lives here. */
  trailing?: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      data-icon-motion={motionKeyFor(icon)}
      className={`f0c-pressable flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left ${
        active
          ? "bg-f1-background-secondary"
          : "hover:bg-f1-background-secondary"
      }`}
    >
      {emoji ? (
        <span
          aria-hidden
          className="flex size-5 shrink-0 items-center justify-center text-[16px] leading-none"
        >
          {emoji}
        </span>
      ) : (
        icon && <F0Icon icon={icon} size="md" color="default" />
      )}
      <span className="flex-1 truncate text-base font-medium text-f1-foreground">
        {label}
      </span>
      {trailing}
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
    // No gap: the frame's bundle puts its Items straight under the 32px
    // Section header (2945:793556 — a plain flex-col, items at y=32).
    <div className="flex flex-col">
      {/* pr-1 matches RecentRow's own right padding, so the trailing
          control lines up exactly with the "⋮" on the rows below. */}
      <div className="flex items-center justify-between pr-1">
        {/* py-2, not py-1: the frame's Section header is 32 tall
            (px-[6px] py-[8px] over a 12/16 label, 2945:793557), which is
            what lines it up with the 36px rows under it. `flex-1` rather
            than `w-full` so a trailing control still sits beside it. */}
        <button
          onClick={() => setGroupOpen(!groupOpen)}
          className="f0c-pressable flex flex-1 cursor-pointer items-center gap-1 rounded-[10px] px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary"
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
      {/* The 2px lives HERE, on the Items column, not on the bundle: the
          frame's Items is `gap-[2px]` while the bundle around it has no
          gap at all (2945:793556/793558). Collapsing the two into one
          `gap-0.5` on the outer div is what made the header sit 2px low;
          collapsing them into `gap-0` then stacked the rows flush. */}
      {groupOpen && <div className="flex flex-col gap-0.5">{children}</div>}
    </div>
  )
}

/**
 * The hover "⋮" and the menu it opens, shared by the Recents and Pinned
 * rows. Extracted when Pinned became deletable too (Oskar, 2026-09-09) —
 * the button carries two hard-won details that are worth having in ONE
 * place, both recorded below.
 *
 * `items` is a render prop so each row supplies its own menu and gets the
 * closer back: Rename + Delete for a conversation, Delete for a pin.
 */
function RowOptions({
  label,
  items,
}: {
  label: string
  items: (close: () => void) => React.ReactNode
}) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null)

  const toggle = (event: React.MouseEvent) => {
    event.stopPropagation()
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos((open) =>
      open ? null : { left: rect.left, top: rect.bottom + 4 }
    )
  }

  // Portal events propagate through the REACT tree, not the DOM tree —
  // without these stops every menu click would also fire the row's own
  // onClick (Delete would then re-open the just-deleted id).
  const menu = pos && (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={(event) => {
          event.stopPropagation()
          setPos(null)
        }}
      />
      <div
        onClick={(event) => event.stopPropagation()}
        className="f0c-popover fixed z-50 flex w-[180px] flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
        style={{
          left: pos.left,
          top: pos.top,
          transformOrigin: "top left",
        }}
      >
        {items(() => setPos(null))}
      </div>
    </>
  )

  return (
    <>
      {menu && createPortal(menu, document.body)}
      <button
        ref={buttonRef}
        onClick={toggle}
        aria-label={`Options for "${label}"`}
        // The reveal is hover-gated to fine pointers: on touch there is
        // no hover, so the ⋮ would be permanently invisible and the row
        // would lose its menu entirely.
        // hover goes DARKER, not white. f0's background tokens are alpha
        // (secondary = rgba(5,38,87,.06)), so a tint on the already-hovered
        // row COMPOUNDS into a deeper grey — the two hovers multiply. The
        // old `hover:bg-f1-background` was opaque white and punched a pale
        // hole through the row instead.
        className={`f0c-pressable flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[6px] transition-opacity duration-100 hover:bg-f1-background-secondary-hover ${
          pos
            ? ""
            : "[@media(hover:hover)_and_(pointer:fine)]:opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100"
        }`}
      >
        <F0Icon icon={Ellipsis} size="sm" color="secondary" />
      </button>
    </>
  )
}

/**
 * A Pinned row: the Recents row's look and its ⋮, but the label is a
 * fixture rather than a conversation, so the menu offers Delete only —
 * there is nothing to rename a pin to. Not clickable, like the NavRow it
 * replaces: Pinned is still visual-only, it just stopped being permanent.
 */
function PinnedRow({ item }: { item: PinnedItem }) {
  return (
    <div className="group flex w-full items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-1 hover:bg-f1-background-secondary">
      <F0Icon icon={item.icon} size="md" color="default" />
      <span className="flex-1 truncate text-base font-medium text-f1-foreground">
        {item.label}
      </span>
      <RowOptions
        label={item.label}
        items={(close) => (
          <MenuRow
            icon={<F0Icon icon={Delete} size="md" color="critical" />}
            label="Delete"
            onClick={() => {
              close()
              removePinned(item.id)
            }}
          />
        )}
      />
    </div>
  )
}

/**
 * A Recents conversation row: NavRow's look plus a hover "⋮" menu with
 * Rename (inline input) and Delete. The menu is portalled to <body> for
 * the same stacking-context reason as the rail user menu.
 */
export function RecentRow({
  conversation,
  active,
}: {
  conversation: Conversation
  active: boolean
}) {
  const [renaming, setRenaming] = useState(false)
  const [draft, setDraft] = useState(conversation.title)

  const startRename = () => {
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

  return (
    <div
      onClick={() => openConversation(conversation.id)}
      className={`f0c-pressable group flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-1 ${
        active
          ? "bg-f1-background-secondary"
          : "hover:bg-f1-background-secondary"
      }`}
    >
      <F0Icon icon={Comment} size="md" color="default" />
      <span className="flex-1 truncate text-base font-medium text-f1-foreground">
        {conversation.title}
      </span>
      <RowOptions
        label={conversation.title}
        items={(close) => (
          <>
            <MenuRow
              icon={<F0Icon icon={Pencil} size="md" color="default" />}
              label="Rename"
              onClick={() => {
                close()
                startRename()
              }}
            />
            <MenuRow
              icon={<F0Icon icon={Delete} size="md" color="critical" />}
              label="Delete"
              onClick={() => {
                close()
                deleteConversation(conversation.id)
              }}
            />
          </>
        )}
      />
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
  const [pos, setPos] = useState<{ top: number; right: number } | null>(
    null
  )

  const toggle = () => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos((p) =>
      p
        ? null
        : { top: rect.bottom + 4, right: window.innerWidth - rect.right }
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
        style={{
          top: pos.top,
          right: pos.right,
          transformOrigin: "top right",
        }}
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
  const pinned = usePinned(profile)
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
  //
  // AGENT conversations stay EXCLUDED. The original reason was that the
  // Agents group listed them (Oskar, 2026-09-02) and that group is gone,
  // but the point of removing it was to get agents OUT of this panel —
  // letting their threads back in through Recents would undo the change.
  // Drop the filter if you want them listed again.
  const sorted = [...conversations]
    .filter((c) => {
      const owner = c.homeSetup?.profile ?? c.homeBriefing
      // Opening Home alone is not a saved conversation. Keep actual exchanges
      // in the existing Recents section, scoped to the current mock profile.
      return (
        !c.agentId &&
        (!owner || owner === profile) &&
        (!c.homeBriefing || c.messages.some((m) => m.role === "user"))
      )
    })
    .sort((a, b) => b.lastActiveAt - a.lastActiveAt)
  const visible =
    recentsFilter === "active"
      ? sorted.slice(0, RECENTS_ACTIVE_LIMIT)
      : sorted

  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      <div className="flex flex-col gap-0.5">
        <NavRow
          icon={Plus}
          label="New"
          onClick={() => {
            // A clean canvas, not just a change of view (per Oskar).
            // Home owns the widgets stack and lives outside this tree, so
            // this goes through the same channel the reply-driven windows
            // use. Collapse first: on a module screen the widgets are
            // unmounted, so they close instantly and Home is reached with
            // the stack already empty.
            requestWindowsCollapse()
            openScreen(null)
          }}
        />
        {/* Agents is GONE from this panel (per Oskar, 2026-09-09) — the
            row and the group below it. Reports stays admin-only, so the
            employee panel is New / Routines / Files. */}
        <NavRow icon={Clock} label="Routines" />
        {/* Reports is NOT the Insights widget (per Oskar, 2026-08-31):
            Insights tells you about your own activity, Reports is for
            reports you build yourself with One. It used to open the
            Insights widget, which demoed the wrong concept — so it is
            visual-only like Agents and Routines until a Reports surface
            is designed. */}
        {profile === "admin" && <NavRow icon={Graph} label="Reports" />}
        {/* The glyph is f0's `HardDrive` — the icon the frame's own menu
            item carries (Figma 2944:727924, instance "HardDrive" in the
            same 20px box). Storage, not a stack of folders. Still the
            Policies ODC sub-screen behind it. */}
        <NavRow
          icon={HardDrive}
          label="Files"
          active={activeId === null && view === "policies"}
          onClick={() => openScreen("policies")}
        />
      </div>
      {/* Pinned carries a different example per profile, straight from the
          frame: a manager pins their triage queue, an employee pins their
          own holidays. Both are DELETABLE now (Oskar, 2026-09-09), so the
          group is gated on having a row left — the same rule Recents
          follows, or you get a header standing over nothing. */}
      {pinned.length > 0 && (
        <SidebarGroup label="Pinned">
          {pinned.map((item) => (
            <PinnedRow key={item.id} item={item} />
          ))}
        </SidebarGroup>
      )}
      {/* Recents is now available to both profiles. The original employee frame stopped at
          Pinned. Conversations still work, they just aren't listed here. */}
      {/* `sorted`, not `conversations`: agent threads are filtered out
          above, so counting them here would leave "Recents" standing with
          a header and no rows. */}
      {sorted.length > 0 && (
        <SidebarGroup
          label="Recents"
          trailing={
            <RecentsControl
              filter={recentsFilter}
              total={sorted.length}
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

/**
 * A row inside a nav SECTION — the frame's "Selection list item"
 * (2945:793559): `p-[8px] gap-[8px]`, so 36 tall around a 20px avatar,
 * where the top-block "Menu item" that `NavRow` draws is 32 around the
 * same glyph. Four pixels, but it is the difference between the chat
 * rows and the Communities rows lining up or not, and it is why this is
 * a separate component instead of another NavRow prop: NavRow is the
 * 32px row and the Home and Hub panels are full of it.
 */
function SectionRow({
  leading,
  label,
  bold = false,
  trailing,
  active = false,
  onClick,
}: {
  leading: React.ReactNode
  label: string
  bold?: boolean
  trailing?: React.ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`f0c-pressable flex w-full cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left ${
        active
          ? "bg-f1-background-secondary"
          : "hover:bg-f1-background-secondary"
      }`}
    >
      {leading}
      <span
        className={`flex-1 truncate text-base ${
          bold ? "font-semibold" : "font-medium"
        } text-f1-foreground`}
      >
        {label}
      </span>
      {trailing}
    </button>
  )
}

/**
 * A section row's emoji, the way the frame draws it (2945:793623): a bare
 * 20px box centring a 13.33px glyph — no tile.
 *
 * NOT `F0AvatarEmoji`: its smallest size is `sm` at 24px, which is what
 * made every channel row 40 tall next to a 36 direct-chat row. A 20px box
 * is also what `F0AvatarPerson size="xs"` gives the rows above, so the
 * two kinds finally share one rhythm.
 */
function SectionEmoji({ emoji }: { emoji: string }) {
  return (
    <span
      aria-hidden
      className="flex size-5 shrink-0 items-center justify-center text-[13px] leading-none"
    >
      {emoji}
    </span>
  )
}

/** Light-blue unread badge used by the Comms section (vs the red Counter). */
function UnreadBadge({ count }: { count: number }) {
  return (
    // `p-0.5` and `rounded-xs`, not `px-1 rounded-md`: the frame's Counter
    // is 20x20 with `p-[2px] rounded-[6px]` over a 12/16 label
    // (2945:793562), and with only horizontal padding the pill collapsed
    // to its 16px line box next to a 20px avatar.
    <span className="flex min-w-5 items-center justify-center rounded-xs bg-f1-background-selected-secondary p-0.5 text-sm font-medium text-f1-foreground-selected">
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
    <SectionRow
      leading={avatar}
      label={label}
      bold={unread !== undefined}
      trailing={unread !== undefined && <UnreadBadge count={unread} />}
      active={active}
      onClick={() => requestChat(id)}
    />
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
          <SectionEmoji emoji={chat.emoji ?? "\u{1F4AC}"} />
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
    <div className="flex flex-col gap-4 px-3 pb-4">
      {/* Only two rows up here now (Oskar, 2026-09-09, Figma 2945:793075):
          "New channel" left with the redesign and Meetings arrived, on
          f0's Headset — the same glyph the frame's menu item carries. Both
          are visual-only, exactly like the rows they replace: the frame
          gives them no destination and neither exists as a surface. */}
      <div className="flex flex-col gap-0.5">
        <NavRow icon={Plus} label="New chat" />
        <NavRow icon={Headset} label="Meetings" />
      </div>
      <SidebarGroup label="Chats directos">
        {DIRECT_CHATS.map(row)}
      </SidebarGroup>
      <SidebarGroup label="Canales">{CHANNEL_CHATS.map(row)}</SidebarGroup>
      {/* Communities is NEW in that frame, and the frame's own rows are the
          six CHANNELS copied across — emoji and counters included — so its
          content was never authored. These are the real communities the
          Communities widget posts into (`COMMUNITIES`, derived from the
          wall), which is the only way the two lists cannot disagree.
          Visual-only for now: the widget shows the whole wall and cannot
          scope to one community, and landing "Book club" on Company
          updates would read as a bug. */}
      <SidebarGroup label="Communities">
        {COMMUNITIES.map((community) => (
          <SectionRow
            key={community.name}
            leading={<SectionEmoji emoji={community.emoji} />}
            label={community.name}
          />
        ))}
      </SidebarGroup>
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
function InboxPanelRow({
  item,
  active,
}: {
  item: InboxTask
  active: boolean
}) {
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
  // Same resolutions the canvas list reads, so the two cannot drift.
  const needsYou = useNeedsYou()
  return (
    <div className="flex flex-col">
      {openInboxTasks(profile, needsYou.cleared).map((item) => (
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
export const HUB_ICONS: Record<string, IconType> = {
  Absences: PalmTree,
  // ICON GAP: the frame draws a coin with a currency symbol and f0 has
  // no coin — all 256 app icons were checked, in both worktrees. `Balance`
  // is weighing scales; it is the incumbent and it renders, but it is the
  // wrong shape. Either accept the scales or ask f0 for a Coin.
  Accounting: Balance,
  Benefits: Present,
  Billing: Receipt,
  Compensation: ChartPie,
  // The frame's shopfront-with-awning: `Marketplace`'s second path IS
  // that awning.
  "Device catalog": Marketplace,
  Documents: Folders,
  Engagement: MessageHeart,
  Equipment: Laptop,
  Handbook: Folder,
  Hours: Timer,
  // Was "Sales" in the IT group, renamed on Oskar's word to break the
  // collision with Finance's Sales. `Archive` is a lidded crate.
  Inventory: Archive,
  Kudos: Heart,
  Learning: AcademicCap,
  // Same glyph as "People" on purpose: it is the same row renamed and the
  // same screen behind it.
  Organization: People,
  // `MoneyBag`, not `Money`: the frame draws a cinched bag with a
  // currency glyph, while `Money` is an upright banknote with a second
  // note behind it. The old Hub's choice predates this frame.
  Payroll: MoneyBag,
  Payslips: DollarBill,
  People: People,
  Performance: ChartLine,
  // `ChartPie` — a donut with its top-right quadrant offset, i.e. the
  // frame's exploded pie segment. It was `Organization`, an ORG-CHART
  // glyph, which is no longer what this row draws (and is now Workflows).
  Planning: ChartPie,
  // f0's `HardDrive`, which the Files row also carries — different panels,
  // and it is the glyph the frame draws for both.
  "Platform IT": HardDrive,
  // `UserProtected`, not `Shield`: the frame draws a shield with a person
  // inside, which is exactly this icon.
  Policies: UserProtected,
  Projects: Suitcase,
  Purchasing: Basket,
  Recruitment: SearchPerson,
  Sales: Handshake,
  Shifts: Schedule,
  Software: Computer,
  // `Building`'s geometry is an isometric cube (M5 8L12 12M12 20V12),
  // which is the frame's 3D box for Spaces — f0 has no cube glyph.
  Spaces: Building,
  Spend: Wallet,
  Spending: Wallet,
  // `BarGraph` is bars INSIDE a rounded rect (rect x=4 y=6 w=16 h=12
  // rx=3), which is what the frame draws; `ChartVerticalBars` is bare
  // bars with no container.
  "Talent analytics": BarGraph,
  // `CheckCircleLine`, the STROKED circle+check. `CheckCircle` is the
  // solid variant (a filled disc with the check knocked out) and would
  // have been the only filled glyph in an outline panel.
  Tickets: CheckCircleLine,
  Training: BookOpen,
  Treasury: Bank,
  "Time off": PalmTree,
  "Time tracking": Timer,
  // `Organization` is the only glyph here built from stroked nodes
  // joined by connectors — the frame's small node graph. `Split` is a
  // branching flow with arrowheads, which is a different idea.
  Workflows: Organization,
  Workplaces: Office,
}

export type HubGroup = { label: string; items: string[] }

/**
 * Figma 2945:795787 — SIX groups, replacing the five of 2639:49719.
 *
 * Read off the frame's own render, since Dev Mode would only hand back
 * metadata for this node: Company loses People/Workplaces/Equipment/
 * Software/Handbook for Organization/Documents/Policies/Tickets/Spaces/
 * Kudos, Work and Pay merge into Operations, Talent gains Talent
 * analytics, and "Gestion de IT" and "More" are new.
 *
 * THREE things the mock says that this does not copy verbatim:
 *   - "Engagment" is still the frame's typo; the spelling decision was
 *     already recorded here and stands.
 *   - "Sales" appeared TWICE, in IT and in Finance, which collide on one
 *     `?view=sales`. Oskar: the IT one is "Inventory".
 *   - "Gestion de IT" is the only Spanish group label, and unaccented.
 *     Kept exactly as drawn — renaming a designer's label is their call.
 */
export const ADMIN_HUB: HubGroup[] = [
  {
    label: "Company",
    // "Organization" is the row that used to read "People", and it still
    // points at that screen — PeopleScreen IS Organization › People
    // (Figma 2730:459215). Without that mapping the prototype's one real
    // Hub destination would lose its only entry point in this panel.
    items: [
      "Organization",
      "Documents",
      "Policies",
      "Tickets",
      "Spaces",
      "Kudos",
    ],
  },
  {
    label: "Operations",
    items: [
      "Time tracking",
      "Time off",
      "Shifts",
      "Projects",
      "Benefits",
      "Payroll",
    ],
  },
  {
    label: "Talent",
    items: [
      "Talent analytics",
      "Performance",
      "Recruitment",
      "Engagement",
      "Training",
    ],
  },
  {
    label: "Gestion de IT",
    items: ["Device catalog", "Inventory", "Platform IT"],
  },
  {
    label: "Finance",
    items: ["Planning", "Spending", "Treasury", "Sales", "Accounting"],
  },
  { label: "More", items: ["Billing", "Workflows"] },
]

/**
 * Figma 2712:430800 — the employee's Hub. It is the admin's with the
 * administering stripped out (no Payroll, Recruitment, Shifts, Equipment,
 * Sales, Treasury, Accounting) and a new PERSONAL group on top holding
 * the four things an employee opens about themselves. Software moves from
 * Company to Finance.
 */
export const EMPLOYEE_HUB: HubGroup[] = [
  {
    label: "Personal",
    items: ["Hours", "Absences", "Payslips", "Learning"],
  },
  { label: "Company", items: ["People", "Workplaces", "Handbook"] },
  { label: "Work", items: ["Time off", "Time tracking", "Projects"] },
  { label: "Pay", items: ["Compensation", "Benefits"] },
  { label: "Talent", items: ["Performance", "Engagement", "Training"] },
  {
    label: "Finance",
    items: ["Planning", "Spend", "Purchasing", "Software"],
  },
]

function HubPanelBody() {
  const profile = useProfile()
  const groups = profile === "employee" ? EMPLOYEE_HUB : ADMIN_HUB
  // Same URL-driven navigation the Home panel's Files row uses.
  // `goHome()` first because an open conversation still owns the FLOOR —
  // the window lands over it either way, but leaving the thread mounted
  // under a freshly opened module reads as two unrelated things.
  const [searchParams, setSearchParams] = useSearchParams()
  const view = searchParams.get("view")
  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      {groups.map((group) => (
        <SidebarGroup key={group.label} label={group.label}>
          {group.items.map((label) => {
            // EVERY row navigates now, not just the handful that had a
            // screen. Both sides of this merge reached the same rule
            // independently — Jonathan inlined
            // `label.toLowerCase().replaceAll(" ", "-")` here while this
            // branch extracted the identical thing to `hubSlug`, which is
            // also what killed the old HUB_VIEWS allow-list. A section
            // with nothing designed lands on ModuleScreen and says so.
            const screen = hubSlug(label)
            return (
              <NavRow
                key={label}
                icon={HUB_ICONS[label]}
                label={label}
                // No `activeId === null` term any more: the module is a
                // WINDOW now, so an open conversation on the floor does
                // not take the canvas from it — both are on screen, and
                // dimming the row would say otherwise.
                active={view === screen}
                onClick={() => {
                  // The rail is "take me here", so it clears the floor.
                  // The window's own "+" does not: there you are opening
                  // another tab of something already on top of One.
                  goHome()
                  setSearchParams({ view: screen })
                }}
              />
            )
          })}
        </SidebarGroup>
      ))}
    </div>
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
      data-icon-motion={motionKeyFor(icon)}
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

/** Utility destination with the same selected treatment as the main rail. */
function RailIconButton({
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
      aria-label={label}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      data-icon-motion={motionKeyFor(icon)}
      className={`f0c-pressable flex size-8 cursor-pointer items-center justify-center rounded-[10px] hover:bg-f1-background-secondary ${active ? "bg-f1-background-secondary" : ""}`}
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
  const view = searchParams.get("view")
  const utilityView =
    view === "marketplace" ||
    view === "settings" ||
    view === "notifications"
      ? view
      : null
  const panelVisible = panelOpen && !utilityView
  const activeSection = utilityView ?? section

  // Browser back to Calendar restores its rail selection as well as its page.
  useEffect(() => {
    if (view === "calendar") setSection("cal")
  }, [view])

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
    observer.observe(wrapper, {
      attributes: true,
      attributeFilter: ["inert"],
    })
    return () => observer.disconnect()
  }, [])

  const persist = (nextSection: NavSectionId, nextOpen: boolean) => {
    window.localStorage.setItem(NAV_SECTION_KEY, nextSection)
    window.localStorage.setItem(NAV_OPEN_KEY, nextOpen ? "open" : "closed")
  }

  const pickSection = (id: NavSectionId) => {
    // Re-clicking the active section toggles the panel; anything else
    // switches (and reopens if collapsed).
    const nextOpen = !utilityView && id === section ? !panelOpen : true
    setSection(id)
    setPanelOpen(nextOpen)
    persist(id, nextOpen)
    // Cal is the one section that is also a DESTINATION: the frame shows
    // its panel beside the week grid, not beside Home (Figma 2621:29173).
    // Comms/Inbox/Hub stay side panels and leave the canvas alone.
    if (id === "home") {
      requestChatsClose()
      goHome()
      setSearchParams({})
    } else if (id === "cal") {
      // Also the way back if you closed the calendar WINDOW with its own
      // ✕ while staying in this section: the rail row is still lit and
      // the panel is still open, so clicking it has to reopen the window
      // rather than be a no-op.
      goHome()
      setSearchParams({ view: "calendar" })
    } else if (view === "calendar" || utilityView) {
      setSearchParams({})
    }
  }

  /**
   * The Inbox panel is far wider than the rest (Figma 2621:28151 draws it
   * at 419), because its rows carry a title AND a subtitle instead of a
   * single label. That matches the proportion Linear gives its own inbox
   * list — roughly 1.7x its nav — which is the reference Oskar named.
   */
  const panelWidth =
    section === "inbox" ? 419 : section === "cal" ? 293 : 240

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
          <CompanyLogo />
        </div>
        <div className="flex w-full flex-col gap-2 px-1.5">
          {RAIL_SECTIONS.map((s) => (
            <RailItem
              key={s.id}
              icon={s.icon}
              label={s.label}
              active={s.id === activeSection}
              onClick={() => pickSection(s.id)}
            />
          ))}
        </div>
        {/* Utility actions follow the reference menu order. */}
        <div className="mt-auto flex flex-col items-center gap-0.5 pb-3 pt-2">
          <RailIconButton
            icon={Marketplace}
            label="Marketplace"
            active={activeSection === "marketplace"}
            onClick={() => {
              goHome()
              setSearchParams({ view: "marketplace" })
            }}
          />
          <RailIconButton
            icon={Settings}
            label="Settings"
            active={activeSection === "settings"}
            onClick={() => {
              goHome()
              setSearchParams({ view: "settings" })
            }}
          />
          <RailIconButton
            icon={Bell}
            label="Notifications"
            active={activeSection === "notifications"}
            onClick={() => {
              goHome()
              setSearchParams({ view: "notifications" })
            }}
          />
          <RailHelpMenu />
          <span className="pt-1.5">
            <RailPersonalMenu />
          </span>
        </div>
      </div>

      {/* Contextual panel — collapses to nothing behind the header button. */}
      <div
        data-home-panel
        data-nav-section={section}
        className="f0c-ease-out h-full shrink-0 overflow-hidden transition-[width] duration-200 motion-reduce:transition-none"
        style={{ width: panelVisible ? panelWidth : 0 }}
        ref={(node) => {
          // Keep the collapsed panel out of the tab order.
          if (panelVisible) node?.removeAttribute("inert")
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
            {/* gap-1 and size="md": the frame's navbar right group is
                `gap-[4px]` over 32px buttons (`p-[6px]` + a 20px glyph —
                2945:793485), where these shipped as 24px `sm` ones flush
                against each other. The 60px header is unchanged: 14 + 32
                + 14 is exactly what it was built for. */}
            <div className="flex shrink-0 items-center gap-1">
              {/* The Inbox header carries TWO controls beside the collapse
                  button now — a funnel added on Oskar's word (Figma
                  2945:794858: three 32px buttons where there were two).
                  Both visual-only, like the Sliders always was. */}
              {section === "inbox" && (
                <>
                  <F0Button
                    variant="ghost"
                    size="md"
                    icon={Filter}
                    hideLabel
                    label="Filter inbox"
                  />
                  <F0Button
                    variant="ghost"
                    size="md"
                    icon={Sliders}
                    hideLabel
                    label="Inbox display options"
                  />
                </>
              )}
              {/* Comms only, because Comms is the frame that draws it
                  (2945:793494, the Gear left of HideSidebar). f0's
                  `Settings` rather than the frame's filled glyph: every
                  other icon in this panel is an f0 outline, and a single
                  filled one would be the odd mark. Visual-only — the
                  frame gives it no destination. */}
              {section === "comms" && (
                <F0Button
                  variant="ghost"
                  size="md"
                  icon={Settings}
                  hideLabel
                  label="Comms settings"
                />
              )}
              <F0Button
                variant="ghost"
                size="md"
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
