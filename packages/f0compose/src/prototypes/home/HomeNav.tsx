import {
  Chip,
  F0AvatarPerson,
  F0Checkbox,
  F0Button,
  F0Icon,
  IconType,
} from "@factorialco/f0-react"
import { SearchBar } from "@factorialco/f0-react/dist/experimental"
import {
  Archive,
  Calendar,
  ChartLine,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Comment,
  Delete,
  Ellipsis,
  Files,
  Filter,
  Folder,
  Folders,
  Graph,
  Headset,
  Messages,
  Office,
  Pencil,
  Plus,
  PushPin,
  PushPinSolid,
  SearchPerson,
  Settings,
  Sliders,
  Home as HomeIcon,
  Hub as HubIcon,
  Inbox as InboxIcon,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useSearchParams } from "react-router-dom"

import { avatarFor } from "@/fixtures/helpers"

import type { Chat, ChatId } from "./comms/chats"
import type { InboxPreset } from "./inbox/inboxTasks"

import { TEAM_ABSENCE_FILTERS, WORKPLACES } from "./calendar/calendarFixtures"
import { CalGroup, MiniMonth } from "./calendar/MiniMonth"
import { CHANNEL_CHATS, DIRECT_CHATS } from "./comms/chats"
import { requestChat, requestChatsClose, useOpenChats } from "./comms/chatStore"
import {
  ADMIN_HUB,
  EMPLOYEE_HUB,
  HUB_ICONS,
  filterHub,
  hubLabels,
} from "./hub/hubCatalog"
import { hubSlug } from "./hub/hubSlug"
import { InboxRow } from "./inbox/InboxRow"
import { inboxPresetCounts, openInboxTasks } from "./inbox/inboxTasks"
import { MenuDivider, MenuRow, MenuSurface } from "./MenuRow"
import { CompanySwitcher, RailPersonalMenu } from "./navigation/RailMenus"
import { useNeedsYou } from "./needsYouStore"
import { useOnboarding, updateOnboarding } from "./onboarding/state"
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
import { PLAN_MODULES, RAIL_PROMOTE_MAX, usePlan } from "./planStore"
import { useProfile } from "./profileStore"
import {
  pinToRail,
  RAIL_PIN_LIMIT,
  unpinFromRail,
  useRailPins,
} from "./railPinsStore"
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

type NavSectionId = "home" | "comms" | "inbox" | "cal" | "files" | "hub"

const NAV_SECTION_KEY = "f0compose:home:nav-section"
const NAV_OPEN_KEY = "f0compose:home:nav-open"

/**
 * The labels changed on 2026-09-14, the ids did not (Angel: "cambiaría
 * Comms con Chat, o DMs como Slack" and "lo mismo con Cal, llámalo
 * Calendar. Se entiende mejor"). "Messages" over "DMs" because this
 * section holds channels and communities as well as direct chats.
 *
 * Ids stay `comms`/`cal`/`hub` on purpose: they are persisted in
 * localStorage and `agent-entry.css` selects on `[data-nav-section]`.
 */
const RAIL_SECTIONS: { id: NavSectionId; label: string; icon: IconType }[] = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "comms", label: "Messages", icon: Messages },
  { id: "inbox", label: "Inbox", icon: InboxIcon },
  { id: "cal", label: "Calendar", icon: Calendar },
  // Files earned the first level on usage (Angel, 2026-09-14). It reuses
  // the imported documents prototype, which `?view=files` already aliases.
  { id: "files", label: "Files", icon: Folders },
  { id: "hub", label: "Tools", icon: HubIcon },
]

const PANEL_TITLES: Record<NavSectionId, string> = {
  home: "Home",
  comms: "Messages",
  inbox: "Inbox",
  cal: "Calendar",
  files: "Files",
  hub: "Tools",
}

/**
 * Which canvas each rail section owns. Before 2026-09-14 only Home and Cal
 * touched the URL, so clicking Messages, Inbox or Tools swapped the panel
 * and left the canvas on whatever was there — Angel: "cuando pulsas en
 * cualquiera de los elementos del primer nivel de navegación, la parte de
 * layout del content debería cambiar siempre".
 */
const SECTION_VIEW: Record<NavSectionId, string | null> = {
  home: null,
  comms: "messages",
  inbox: "inbox",
  cal: "calendar",
  files: "files",
  hub: "tools",
}

const VIEW_SECTION: Record<string, NavSectionId> = Object.fromEntries(
  Object.entries(SECTION_VIEW)
    .filter(([, view]) => view !== null)
    .map(([id, view]) => [view as string, id as NavSectionId])
)

/** Sections whose panel IS the section — collapsing it leaves nothing
 *  behind, so they do not offer it (Angel, 2026-09-14). */
const CAN_COLLAPSE: Record<NavSectionId, boolean> = {
  home: true,
  comms: false,
  inbox: false,
  cal: true,
  files: true,
  hub: true,
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

/**
 * The line between a panel's fixed rows and its flexible list (Angel,
 * 2026-09-14: "me falta un separador horizontal que separe los elementos
 * fijos de elementos flexibles"). Same token and height as `MenuDivider`,
 * but not that component: its negative margins are cut for a popover's
 * 4px padding and bleed inside the panel's 12px one.
 */
function PanelDivider() {
  return <div className="mx-1.5 h-px shrink-0 bg-f1-border-secondary" />
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
    setPos((open) => (open ? null : { left: rect.left, top: rect.bottom + 4 }))
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

/**
 * The Home panel's "New ⌄": a named row with a chevron, because the one
 * thing it used to say was the one thing it could not answer — new what.
 * Conversation is the only live destination; Routine and Report follow
 * the panel's existing convention for undesigned surfaces.
 */
function NewMenu({ onConversation }: { onConversation: () => void }) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null)

  const toggle = () => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos((open) => (open ? null : { left: rect.left, top: rect.bottom + 4 }))
  }

  const menu = pos && (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setPos(null)} />
      <div
        className="fixed z-50"
        style={{ left: pos.left, top: pos.top, transformOrigin: "top left" }}
      >
        <MenuSurface className="w-[200px]">
          <MenuRow
            icon={<F0Icon icon={Comment} size="md" color="default" />}
            label="Conversation"
            onClick={() => {
              setPos(null)
              onConversation()
            }}
          />
          <MenuRow
            icon={<F0Icon icon={Clock} size="md" color="default" />}
            label="Routine"
            onClick={() => setPos(null)}
          />
          <MenuRow
            icon={<F0Icon icon={Graph} size="md" color="default" />}
            label="Report"
            onClick={() => setPos(null)}
          />
        </MenuSurface>
      </div>
    </>
  )

  return (
    <div ref={buttonRef} className="flex w-full">
      {menu && createPortal(menu, document.body)}
      <NavRow
        icon={Plus}
        label="New"
        onClick={toggle}
        trailing={<F0Icon icon={ChevronDown} size="xs" color="default" />}
      />
    </div>
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
    recentsFilter === "active" ? sorted.slice(0, RECENTS_ACTIVE_LIMIT) : sorted

  return (
    <div className="flex h-full min-h-0 flex-col px-3 pb-3">
      <div className="home-panel-scroll flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto">
        <div className="flex flex-col gap-0.5">
          {/* "New" on its own said nothing (Angel, 2026-09-14: "New what?
              Le falta un nombre, o si esto debería abrir un select…
              pondría un chevron a la derecha"), and it starts three
              different things, so it is a menu now. */}
          <NewMenu
            onConversation={() => {
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
            row and the group below it. */}
          <NavRow icon={Clock} label="Routines" />
          {/* Activity left the panel HEADER on 2026-09-14 (Angel: "me
            chirría el botón de analytics ahí arriba"). It is a row now,
            beside the other things One keeps for you — and not folded
            into Artifacts, because it is a log of what One DID, not
            something it produced. */}
          <NavRow
            icon={ChartLine}
            label="Activity"
            active={activeId === null && view === "activity"}
            onClick={() => openScreen("activity")}
          />
          {/* Was "Files" pointing at Policies, with a visual-only
            "Reports" row above it. Both are Artifacts now (Angel,
            2026-09-14): what One produces for you, documents and
            analytics in one place, while the Files MODULE lives on the
            rail. */}
          <NavRow
            icon={Archive}
            label="Artifacts"
            active={activeId === null && view === "artifacts"}
            onClick={() => openScreen("artifacts")}
          />
        </div>
        <PanelDivider />
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
        {/* "New message", not "New chat" (Angel, 2026-09-14): Home's own
            New starts a conversation with One, and two "new chat"s in one
            navigation meant two different things. */}
        <NavRow icon={Plus} label="New message" />
        <NavRow icon={Headset} label="Meetings" />
      </div>
      <PanelDivider />
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
 * The Inbox presets, under the panel's search (Angel, 2026-09-14: the
 * Bell folded in here, and the kinds became "preset buttons arriba…
 * debajo de Search"). The selection lives in the URL because the panel and
 * the canvas list are sibling trees — the same channel every other
 * nav→canvas decision in this prototype travels through.
 */
function InboxPresets({
  preset,
  counts,
  onPick,
}: {
  preset: InboxPreset
  counts: Record<InboxPreset, number>
  onPick: (next: InboxPreset) => void
}) {
  const options: { id: InboxPreset; label: string }[] = [
    { id: "all", label: "All" },
    { id: "request", label: "Requests" },
    { id: "notification", label: "Notifications" },
  ]
  return (
    <div className="flex shrink-0 gap-1.5 overflow-x-auto px-3 pb-2">
      {options.map((option) => (
        <Chip
          key={option.id}
          label={`${option.label} ${counts[option.id]}`}
          variant={preset === option.id ? "selected" : "default"}
          onClick={() => onPick(option.id)}
        />
      ))}
    </div>
  )
}

function InboxPanelBody({ preset }: { preset: InboxPreset }) {
  const profile = useProfile()
  const open = useOpenChats()
  // Same resolutions the canvas list reads, so the two cannot drift.
  const needsYou = useNeedsYou()
  return (
    <div className="flex flex-col">
      {openInboxTasks(profile, needsYou.cleared, preset).map((item) => (
        <InboxRow
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
 * A Tools row: `NavRow`'s look plus the hover "⋮" that pins it to the
 * first level. A clickable DIV rather than a NavRow because `RowOptions`
 * is a button and `NavRow` is a button — nesting the two is invalid
 * markup and the inner click stops being reliable. `RecentRow` solved
 * this first; this is its shell with a module row inside.
 */
function HubRow({
  label,
  active,
  onOpen,
}: {
  label: string
  active: boolean
  onOpen: () => void
}) {
  const profile = useProfile()
  const pins = useRailPins(profile)
  const pinned = pins.includes(label)
  const full = pins.length >= RAIL_PIN_LIMIT
  return (
    <div
      onClick={onOpen}
      className={`f0c-pressable group flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-1 ${
        active
          ? "bg-f1-background-secondary"
          : "hover:bg-f1-background-secondary"
      }`}
    >
      {HUB_ICONS[label] && (
        <F0Icon icon={HUB_ICONS[label]} size="md" color="default" />
      )}
      <span className="flex-1 truncate text-base font-medium text-f1-foreground">
        {label}
      </span>
      <RowOptions
        label={label}
        items={(close) => (
          <MenuRow
            icon={
              <F0Icon
                icon={pinned ? PushPinSolid : PushPin}
                size="md"
                color="default"
              />
            }
            label={
              pinned
                ? "Remove from sidebar"
                : full
                  ? `Sidebar is full (${RAIL_PIN_LIMIT})`
                  : "Pin to sidebar"
            }
            onClick={() => {
              close()
              if (pinned) unpinFromRail(profile, label)
              else pinToRail(profile, label)
            }}
          />
        )}
      />
    </div>
  )
}

function HubPanelBody() {
  const profile = useProfile()
  const plan = usePlan()
  // The panel shows what the company HAS, so it agrees with the rail:
  // under a small plan the promoted modules and these rows are the same
  // list, read from the same place.
  const groups = filterHub(
    profile === "employee" ? EMPLOYEE_HUB : ADMIN_HUB,
    PLAN_MODULES[plan]
  )
  // Same URL-driven navigation the Home panel's rows use.
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
              <HubRow
                key={label}
                label={label}
                // No `activeId === null` term any more: the module is a
                // WINDOW now, so an open conversation on the floor does
                // not take the canvas from it — both are on screen, and
                // dimming the row would say otherwise.
                active={view === screen}
                onOpen={() => {
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

/**
 * Files section — the imported documents prototype's own pages. `?view=
 * files` already resolves to it through `hasImportedScreen`'s alias, and
 * its routes define these three children, so this panel is a real second
 * level with no new canvas behind it.
 */
function FilesPanelBody() {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get("page") ?? ""
  const open = (next: string) => {
    goHome()
    setSearchParams(next ? { view: "files", page: next } : { view: "files" })
  }
  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      <div className="flex flex-col gap-0.5">
        {/* Visual-only, like the Routines and Meetings rows: the imported
            prototype owns the real upload flow. */}
        <NavRow icon={Plus} label="New folder" />
        <NavRow icon={Files} label="Upload" />
      </div>
      <PanelDivider />
      <div className="flex flex-col gap-0.5">
        <NavRow
          icon={Folders}
          label="Library"
          active={page === ""}
          onClick={() => open("")}
        />
        <NavRow
          icon={Folder}
          label="Templates"
          active={page === "templates"}
          onClick={() => open("templates")}
        />
        <NavRow
          icon={Delete}
          label="Trash"
          active={page === "trash"}
          onClick={() => open("trash")}
        />
      </div>
    </div>
  )
}

/**
 * One rail item: a 56x56 target carrying a 24px glyph over a 10px label.
 *
 * Grew from the frame's 48px rail on 2026-09-14 (Angel: "la haría más
 * ancha, y los botones más grandes… el usuario tocará esos botones
 * muchísimas veces cada día… tiraría min 44x44 y que cualquier lugar del
 * botón, incluso más allá de la zona que cambia en estado de hover").
 * So the tint moved from the inner 32px pill ONTO the button: what you
 * can click and what lights up are now the same rectangle, label
 * included.
 */
function RailItem({
  icon,
  label,
  active,
  onClick,
  trailing,
}: {
  icon: IconType
  label: string
  active: boolean
  onClick: () => void
  /** Absolutely-positioned extras (the pinned rows' "⋮"). */
  trailing?: React.ReactNode
}) {
  return (
    <div className="relative flex w-full">
      <button
        onClick={onClick}
        aria-label={label}
        aria-current={active ? "true" : undefined}
        className="f0c-pressable group flex w-full cursor-pointer flex-col items-center gap-1 py-2"
      >
        {/* The tint is a 36x36 SQUARE around the glyph, not the whole
            button (Angel, 2026-09-14). Measured off Slack's own rail,
            which is the reference he named: 70px rail, 52x68 buttons,
            36x36 icon chip at radius 8, a 20px glyph inside it, and an
            11/12 label 4px below. The button stays the target — the
            chip is only what lights up. */}
        <span
          className={`flex size-9 items-center justify-center rounded-lg ${
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
              distinguished by its chip background alone. */}
          <F0Icon icon={icon} size="md" color="default" />
        </span>
        <span className="w-full truncate text-center text-[11px] font-semibold leading-3 text-f1-foreground-secondary">
          {label}
        </span>
      </button>
      {trailing}
    </div>
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
      className={`f0c-pressable flex size-9 cursor-pointer items-center justify-center rounded-lg hover:bg-f1-background-secondary ${active ? "bg-f1-background-secondary" : ""}`}
    >
      {/* Same token as the section items above — see RailItem. */}
      <F0Icon icon={icon} size="md" color="default" />
    </button>
  )
}

export function HomeNav() {
  const profile = useProfile()
  // setSearchParams, NOT navigate("/"): the prototype is mounted at
  // /p/home, so navigating to the root leaves it altogether.
  const [searchParams, setSearchParams] = useSearchParams()
  const [section, setSection] = useState<NavSectionId>(readSection)
  const [panelOpen, setPanelOpen] = useState<boolean>(readPanelOpen)
  const rootRef = useRef<HTMLDivElement>(null)
  const view = searchParams.get("view")
  // Notifications and Marketplace left the rail on 2026-09-14, so Settings
  // is the only utility with a view of its own.
  const utilityView = view === "settings" ? view : null
  const onboarding = useOnboarding(profile)
  const plan = usePlan()
  const pins = useRailPins(profile)
  const contracted = hubLabels(
    filterHub(
      profile === "employee" ? EMPLOYEE_HUB : ADMIN_HUB,
      PLAN_MODULES[plan]
    )
  )
  /**
   * A company with a handful of modules does not need a door called
   * "Tools" in front of them (Angel, 2026-09-14) — the rail simply IS the
   * catalog, and pinning is suppressed because there is nothing left to
   * promote.
   */
  const promoted =
    contracted.length > 0 && contracted.length <= RAIL_PROMOTE_MAX
      ? contracted
      : null
  const railSections = promoted
    ? RAIL_SECTIONS.filter((s) => s.id !== "hub")
    : RAIL_SECTIONS
  const railPins = promoted ? [] : pins
  const panelVisible =
    panelOpen &&
    !utilityView &&
    (onboarding.screen === "complete" ||
      onboarding.screen === "tour" ||
      onboarding.hidden)
  // The URL wins over the persisted section: a deep link, browser-back or
  // a pinned module must light the item it actually landed on.
  const activeSection =
    utilityView ?? (view ? VIEW_SECTION[view] : undefined) ?? section

  // Welcome hides the secondary menu. Keep its underlying state closed too,
  // so Show me around only reveals it after the visitor clicks a rail item.
  useEffect(() => {
    if (onboarding.screen === "welcome" && !onboarding.hidden) {
      setPanelOpen(false)
      window.localStorage.setItem(NAV_OPEN_KEY, "closed")
    }
  }, [onboarding.screen, onboarding.hidden])

  // Browser back restores the rail selection as well as the page — for
  // every section now, not just Calendar.
  useEffect(() => {
    const restored = view ? VIEW_SECTION[view] : undefined
    if (restored) setSection(restored)
  }, [view])

  // A section that cannot be collapsed must not load collapsed: a stored
  // "closed" plus a stored "inbox" would open with no way back to a panel.
  useEffect(() => {
    if (!CAN_COLLAPSE[section] && !panelOpen) {
      setPanelOpen(true)
      window.localStorage.setItem(NAV_OPEN_KEY, "open")
    }
  }, [section, panelOpen])

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
    if (onboarding.screen !== "complete" && onboarding.screen !== "tour")
      updateOnboarding(profile, { hidden: true })
    // Re-clicking the active section toggles the panel; anything else
    // switches (and reopens if collapsed).
    const nextOpen =
      onboarding.screen === "tour"
        ? true
        : !utilityView && id === section && CAN_COLLAPSE[id]
          ? !panelOpen
          : true
    setSection(id)
    setPanelOpen(nextOpen)
    persist(id, nextOpen)
    // EVERY section is a destination now (Angel, 2026-09-14). Clicking
    // Home still closes the chats column, because Home is the floor
    // rather than a screen; everything else is one `?view=` away, which
    // is also the way back after closing a section's window with its own
    // ✕ while staying in the section.
    if (id === "home") requestChatsClose()
    goHome()
    const nextView = SECTION_VIEW[id]
    setSearchParams(nextView ? { view: nextView } : {})
  }

  /** A pinned module: the Tools panel stays the coherent second level
   *  behind it, so the pin reads as a shortcut rather than a section. */
  const openModule = (label: string) => {
    goHome()
    setSearchParams({ view: hubSlug(label) })
    setSection("hub")
    setPanelOpen(true)
    persist("hub", true)
  }

  /**
   * The Inbox panel is far wider than the rest (Figma 2621:28151 draws it
   * at 419), because its rows carry a title AND a subtitle instead of a
   * single label. That matches the proportion Linear gives its own inbox
   * list — roughly 1.7x its nav — which is the reference Oskar named.
   */
  const panelWidth = section === "inbox" ? 419 : section === "cal" ? 293 : 240

  const rawPreset = searchParams.get("preset")
  const inboxPreset: InboxPreset =
    rawPreset === "request" || rawPreset === "notification" ? rawPreset : "all"
  const needsYou = useNeedsYou()
  const presetCounts = inboxPresetCounts(profile, needsYou.cleared)

  const collapse = () => {
    setPanelOpen(false)
    persist(section, false)
  }

  return (
    <div ref={rootRef} data-home-nav className="flex h-full min-h-0">
      {/* Slack's rail geometry, which is the reference Angel named:
          70px wide, 8px of top padding, 52x68 buttons 12px apart, and a
          36x36 icon chip that is the only thing carrying the hover or
          active background. 76 rather than 70 because "Messages" and
          "Calendar" are longer words than "DMs" and "Later", and NO gap
          between items (Angel, 2026-09-14) — the chips already carry
          their own 8px of breathing room top and bottom, and Slack's
          extra 12 made the column read as six separate things. */}
      <div
        data-home-rail
        className="flex w-[76px] shrink-0 flex-col items-center overflow-y-auto pt-2"
      >
        {/* Figma 2621:22835 — f0's AvatarCompany in its with-logo variant
            (24px). It is the entity SWITCHER since 2026-09-14: the pattern
            people already look for, and the same rows the profile menu
            shows. */}
        <div className="flex h-[60px] shrink-0 items-center justify-center">
          <CompanySwitcher />
        </div>
        <div className="flex w-full flex-col px-2">
          {railSections.map((s) => (
            <RailItem
              key={s.id}
              icon={s.icon}
              label={s.label}
              active={s.id === activeSection}
              onClick={() => pickSection(s.id)}
            />
          ))}
          {/* The modules this company actually has, in place of a generic
              "Tools" door. */}
          {promoted?.map((label) => (
            <RailItem
              key={label}
              icon={HUB_ICONS[label] ?? HubIcon}
              label={label}
              active={view === hubSlug(label)}
              onClick={() => openModule(label)}
            />
          ))}
          {railPins.length > 0 && (
            <>
              <PanelDivider />
              {railPins.map((label) => (
                <RailItem
                  key={label}
                  icon={HUB_ICONS[label] ?? HubIcon}
                  label={label}
                  active={view === hubSlug(label)}
                  onClick={() => openModule(label)}
                />
              ))}
            </>
          )}
        </div>
        {/* Marketplace moved into Tools and Notifications into the Inbox,
            so what is left down here is Settings and you. Help lives in
            the profile menu as "Get help". */}
        <div className="mt-auto flex flex-col items-center gap-1 pb-3 pt-2">
          <RailIconButton
            icon={Settings}
            label="Settings"
            active={activeSection === "settings"}
            onClick={() => {
              goHome()
              setSearchParams({ view: "settings" })
            }}
          />
          <RailPersonalMenu />
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
              {/* Activity left this header on 2026-09-14 and became a row
                  in the panel below (Angel: "me chirría el botón de
                  analytics ahí arriba"). */}
              {section === "home" && (
                <F0Button
                  label="Preferences"
                  icon={Settings}
                  hideLabel
                  variant="ghost"
                  size="md"
                  onClick={() => {
                    goHome()
                    setSearchParams({ view: "preferences" })
                  }}
                />
              )}
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
              {/* Messages and Inbox ARE their panel — collapsing one
                  leaves a rail pointing at nothing (Angel, 2026-09-14). */}
              {CAN_COLLAPSE[section] && (
                <F0Button
                  variant="ghost"
                  size="md"
                  icon={PanelCollapse}
                  hideLabel
                  label="Collapse panel"
                  onClick={collapse}
                />
              )}
            </div>
          </div>
          {/* SearchBar ships its own px-3 wrapper + bottom margin. The
              Cal frame has no search under its header — its only field is
              the people picker inside "Meet with". */}
          {section !== "cal" && <SearchBar placeholder="Search…" />}
          {section === "inbox" && (
            <InboxPresets
              preset={inboxPreset}
              counts={presetCounts}
              onPick={(next) =>
                setSearchParams(
                  next === "all"
                    ? { view: "inbox" }
                    : { view: "inbox", preset: next }
                )
              }
            />
          )}
          <div
            className={`home-panel-scroll min-h-0 flex-1 ${section === "home" ? "overflow-hidden" : "overflow-y-auto"}`}
          >
            {section === "home" ? (
              <HomePanelBody />
            ) : section === "comms" ? (
              <CommsPanelBody />
            ) : section === "inbox" ? (
              <InboxPanelBody preset={inboxPreset} />
            ) : section === "cal" ? (
              <CalPanelBody />
            ) : section === "files" ? (
              <FilesPanelBody />
            ) : (
              <HubPanelBody />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
