import { F0AvatarPerson, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import {
  F0AvatarModule,
  useSidebar,
} from "@factorialco/f0-react/dist/experimental"
import {
  Ellipsis,
  Menu,
  Reaction,
  Settings,
  Timer,
} from "@factorialco/f0-react/icons/app"

import { PlayOutline } from "./one/PlayOutline"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { ClockInPopup } from "./ClockInPopup"

import type { PrototypeMeta } from "../types"
import { aliciaAvatar, needsYouTasks, type NeedsYouTask } from "./fixtures"
import { HomeSidebar } from "./HomeSidebar"
import { NeedsYouItem } from "./NeedsYouItem"
import { OnePromptBar } from "./OnePromptBar"
import { ConversationView } from "./one/ConversationView"
import { onWindowRequest, useConversations } from "./one/conversationStore"
import { PoliciesScreen } from "./policies/PoliciesScreen"
import type { WindowId } from "./windows/types"
import { useWindows } from "./windows/useWindows"
import {
  animateWindowClose,
  MaximizedWindow,
  setWindowFlipOrigin,
  WindowsColumn,
} from "./windows/WindowsColumn"
import { WindowsMenu } from "./windows/WindowsMenu"

/**
 * Home — "Needs you" (Manager view).
 *
 * Folder layout:
 *   home/
 *     Home.tsx          ← this file (navbar + welcome + Needs you + ONE bar)
 *     NeedsYouItem.tsx  ← bespoke row (icon, title, subtitle, CTA, chevron)
 *     OnePromptBar.tsx  ← "Hey One…" input, forwards into the global ONE panel
 *     fixtures.ts       ← the 6 "Needs you" tasks (time off, recruitment,
 *                          contracts, performance, payroll, training)
 *     windows/          ← Claude-Code-style window stack: the navbar "⋮" menu
 *                          opens Communities / Events / Inbox / Insights into
 *                          a right-hand column that pushes the canvas; windows
 *                          stack vertically, resizable both ways.
 *
 * Deliberately does NOT use the canonical Page/PageHeader chrome — Home
 * isn't a module page. The design is a seamless full-bleed #FCFCFC canvas
 * (like Claude Code): no rounded card frame, no ring border, no gutter
 * around the content, and the sidebar pushes the canvas when it opens.
 */
export const meta: PrototypeMeta = {
  slug: "home",
  title: "Home",
  description:
    "Manager-facing Home: a bounded 'Needs you' task queue aggregated across time off, recruitment, contracts, performance, and payroll, plus an embedded ONE prompt that forwards into the global chat panel. Based on the 'Home - Vision' Figma file.",
  category: "Other",
  module: "home",
  audience: ["manager"],
  tags: ["home", "inbox", "needs-you", "one", "manager"],
  createdAt: "2026-07-30",
  // Home explores a different nav concept (see HomeSidebar): grouped by
  // intention-level category instead of a flat 48-module list. Docked
  // (locked) like the classic sidebar — it pushes content, it doesn't float.
  sidebar: HomeSidebar,
}

// The ApplicationFrame paints a 4px gutter around #content (the grey
// #F5F6F8 frame bleeds through) and leaves the docked aside transparent.
// This concept needs a seamless canvas edge-to-edge, so we override both
// while Home is mounted and restore them on unmount.
const FULL_BLEED_CSS = `
  main#content { padding: 0 !important; background: #FCFCFC; }
  /* Divider drawn as an inset shadow: a real border would shrink the aside's
     240px content box and force a 1px horizontal scrollbar in its body. */
  aside { background: #F9F9F9 !important; box-shadow: inset -1px 0 0 rgba(5, 38, 87, 0.06); }
  /* Dark: the light values above are experimental customs with no dark
     pair, so rebuild the same relationships from f0's dark tokens — the
     canvas is the chrome base (neutral-0) lifted by the --page overlay,
     the aside stays on the base, and the divider flips to white-alpha. */
  .dark main#content {
    background: linear-gradient(hsl(var(--page)), hsl(var(--page))), hsl(var(--neutral-0));
  }
  .dark aside {
    background: hsl(var(--neutral-0)) !important;
    box-shadow: inset -1px 0 0 hsl(var(--neutral-10));
  }
  /* Hide the composer FAB — its actions (theme toggle, back to catalog)
     live in the sidebar's user menu on this prototype. */
  div:has(> div > [aria-label="Open f0compose controls"]) { display: none; }
  /* Windows slide in from the right when opened. */
  @keyframes f0c-window-in {
    from { transform: translateX(24px); opacity: 0; }
    to { transform: none; opacity: 1; }
  }
  section[data-home-window] { animation: f0c-window-in 0.2s cubic-bezier(0.23, 1, 0.32, 1); }
  /* Thinnest scrollbar available, hidden until you interact with the window. */
  .home-window-scroll {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  /* Conversation content fades out as it slides under the pinned ONE bar.
     Scrollbars use f0's --scrollbar-* vars, which flip with the theme. */
  .home-canvas-scroll {
    -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 40px), transparent 100%);
    mask-image: linear-gradient(to bottom, black calc(100% - 40px), transparent 100%);
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  }
  section[data-home-window]:hover .home-window-scroll {
    scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  }
  /* Needs-you cards stack in on load. Home is seen dozens of times a
     day, so the entrance is drastically reduced (Emil framework): tiny
     4px offset, 200ms, strong ease-out, tight 30ms stagger. */
  @keyframes f0c-card-in {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: none; }
  }
  .f0c-card-in { animation: f0c-card-in 0.2s cubic-bezier(0.23, 1, 0.32, 1) backwards; }
  /* The ONE gradient slowly orbits the prompt bar (border + focus glow
     share the same animated angle, so they stay in sync). Constant
     decorative motion → linear, slow enough to be felt, not watched. */
  @property --f0c-one-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes f0c-one-orbit {
    to { --f0c-one-angle: 360deg; }
  }
  .f0c-one-gradient {
    /* Fallback for browsers without @property: static linear gradient. */
    background: linear-gradient(90deg, rgba(229,86,25,0.5) 0%, rgba(229,25,67,0.5) 50%, rgba(161,173,229,0.7) 100%);
    background: conic-gradient(
      from var(--f0c-one-angle) at 50% 50%,
      rgba(229, 86, 25, 0.5),
      rgba(229, 25, 67, 0.5),
      rgba(161, 173, 229, 0.7),
      rgba(229, 86, 25, 0.5)
    );
    animation: f0c-one-orbit 7s linear infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .f0c-one-gradient { animation: none; }
  }
  /* Popovers scale in from their trigger corner; modals from center.
     Never from scale(0) — 0.97 keeps a visible shape (Emil). */
  @keyframes f0c-pop-in {
    from { opacity: 0; transform: scale(0.97); }
    to { opacity: 1; transform: scale(1); }
  }
  .f0c-popover { animation: f0c-pop-in 0.15s cubic-bezier(0.23, 1, 0.32, 1); }
  /* Centered modals bake the -50% translate INTO the keyframes: a plain
     scale animation would override the translate utilities mid-flight and
     the dialog would flash off-center before snapping into place. */
  @keyframes f0c-modal-in {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.97); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }
  .f0c-modal { animation: f0c-modal-in 0.2s cubic-bezier(0.23, 1, 0.32, 1); transform-origin: center; }
  /* Scrim behind modals — f0's dialog overlay token, faded in. */
  @keyframes f0c-overlay-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .f0c-overlay { animation: f0c-overlay-in 0.15s ease-out; }
  /* Pressable feedback for bespoke (non-F0Button) buttons. */
  .f0c-pressable { transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1); }
  .f0c-pressable:active { transform: scale(0.97); }
  /* Pulse avatar intro, mirroring f0's F0AvatarPulse: the waving hand pops
     in and rocks twice, then the avatar + reaction badge spring in. */
  @keyframes f0c-pulse-pop {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes f0c-wave-rock {
    0%, 100% { transform: rotate(-15deg); }
    50% { transform: rotate(20deg); }
  }
  .f0c-pulse-wave { animation: f0c-pulse-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .f0c-pulse-hand {
    display: inline-block;
    transform-origin: 60% 60%;
    animation: f0c-wave-rock 0.5s ease-in-out 2;
  }
  .f0c-pulse-avatar { animation: f0c-pulse-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .f0c-pulse-badge { animation: f0c-pulse-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s backwards; }
`

function useFullBleedChrome() {
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = FULL_BLEED_CSS
    document.head.appendChild(style)
    return () => style.remove()
  }, [])
}

function HomeNavbar({
  openWindows,
  onToggleWindow,
  conversationTitle,
  screenTitle,
}: {
  openWindows: WindowId[]
  /** `originRect` = the trigger element, so opening windows FLIP from it. */
  onToggleWindow: (id: WindowId, originRect?: DOMRect) => void
  /** When set, the navbar shows the conversation title + its actions. */
  conversationTitle?: string
  /** When set (and no conversation), a module screen title (Figma
   *  1350:190929: module avatar + name, gear + ⋮ on the right). */
  screenTitle?: string
}) {
  const { toggleSidebar } = useSidebar()
  const timerRef = useRef<HTMLDivElement>(null)
  const [clockAnchor, setClockAnchor] = useState<{
    top: number
    right: number
  } | null>(null)
  const [clockedInAt, setClockedInAt] = useState<number | null>(null)

  const toggleClockPopup = () => {
    if (clockAnchor) {
      setClockAnchor(null)
      return
    }
    const rect = timerRef.current?.getBoundingClientRect()
    if (!rect) return
    setClockAnchor({
      top: rect.bottom + 4,
      right: window.innerWidth - rect.right,
    })
  }

  return (
    <div className="flex w-full items-center justify-between p-[14px]">
      <div className="flex min-w-0 items-center gap-2">
        <F0Button
          variant="ghost"
          size="md"
          icon={Menu}
          hideLabel
          label="Toggle sidebar"
          onClick={() => toggleSidebar()}
        />
        {conversationTitle ? (
          <span className="truncate text-base font-medium text-f1-foreground">
            {conversationTitle}
          </span>
        ) : screenTitle ? (
          <span className="flex min-w-0 items-center gap-2">
            {/* No "policies" module in f0 — company_documents is the
                closest brand avatar (icon gap). */}
            <F0AvatarModule module="company_documents" size="sm" />
            <span className="truncate text-base font-medium text-f1-foreground">
              {screenTitle}
            </span>
          </span>
        ) : null}
      </div>
      {conversationTitle ? (
        <div className="flex items-center">
          <F0Button
            variant="ghost"
            size="md"
            icon={PlayOutline}
            hideLabel
            label="Open creation preview"
            onClick={(event: React.MouseEvent) =>
              onToggleWindow(
                "preview",
                event.currentTarget.getBoundingClientRect()
              )
            }
          />
          <F0Button variant="ghost" size="md" icon={Ellipsis} hideLabel label="Conversation options" />
        </div>
      ) : screenTitle ? (
        <div className="flex items-center">
          <F0Button variant="ghost" size="md" icon={Ellipsis} hideLabel label="Screen options" />
          <F0Button variant="ghost" size="md" icon={Settings} hideLabel label="Screen settings" />
        </div>
      ) : (
      <div className="flex items-center">
        <div ref={timerRef} className="relative">
          <F0Button
            variant="ghost"
            size="md"
            icon={Timer}
            hideLabel
            label="Time tracking"
            onClick={toggleClockPopup}
          />
          {/* The dot flags a pending clock-in; it clears once clocked in.
              Ring uses the background token so it works in dark mode. */}
          {!clockedInAt && (
            <span className="pointer-events-none absolute right-0 top-0 size-2 rounded-full border border-solid border-f1-background bg-f1-special-highlight" />
          )}
        </div>
        <WindowsMenu open={openWindows} onToggle={onToggleWindow} />
      </div>
      )}
      {clockAnchor && (
        <ClockInPopup
          anchor={clockAnchor}
          onClose={() => setClockAnchor(null)}
          clockedInAt={clockedInAt}
          onToggleClock={() =>
            setClockedInAt((current) => (current ? null : Date.now()))
          }
        />
      )}
    </div>
  )
}

/**
 * The "how was your day" avatar, mirroring f0's F0AvatarPulse (not exported
 * from the dist bundles): a waving hand greets first, then the avatar with
 * the reaction badge springs in.
 */
function PulseGreetingAvatar() {
  const [showWave, setShowWave] = useState(true)

  useEffect(() => {
    // Pop-in (0.45s) + two rocks of the hand (2 × 0.5s) before swapping.
    const timer = setTimeout(() => setShowWave(false), 1300)
    return () => clearTimeout(timer)
  }, [])

  if (showWave) {
    return (
      <div className="f0c-pulse-wave flex size-10 items-center justify-center rounded-full bg-f1-background-warning">
        <span className="f0c-pulse-hand text-[22px] leading-none">👋</span>
      </div>
    )
  }

  return (
    <div className="f0c-pulse-avatar relative size-10">
      <F0AvatarPerson
        firstName="Alicia"
        lastName="Torres"
        src={aliciaAvatar}
        size="lg"
      />
      <div className="f0c-pulse-badge absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background">
        <F0Button
          variant="neutral"
          size="sm"
          icon={Reaction}
          hideLabel
          label="Add how your day went"
        />
      </div>
    </div>
  )
}

// A different greeting on every screen load.
const GREETINGS = [
  "Welcome back, Alicia",
  "Good morning, Alicia",
  "Hey there, Alicia",
  "Nice to see you, Alicia",
  "Let's get to it, Alicia",
  "Ready when you are, Alicia",
]

export default function Home() {
  useFullBleedChrome()

  const [greeting] = useState(
    () => GREETINGS[Math.floor(Math.random() * GREETINGS.length)]
  )
  const windows = useWindows()
  const { conversations, activeId } = useConversations()
  const activeConversation = conversations.find((c) => c.id === activeId)
  // Sub-screens have distinct URLs (?view=policies); an open conversation
  // always takes the canvas over the screen.
  const [searchParams] = useSearchParams()
  const view = searchParams.get("view")
  const screenTitle =
    !activeConversation && view === "policies" ? "Policies" : undefined

  // Replies can call for a window — e.g. the survey preview opens itself
  // the moment One says it created the survey.
  useEffect(() => onWindowRequest(windows.open), [windows.open])

  // One motion language for the whole window system: opening FLIP-grows
  // from the trigger (menu row, play button), closing shrink-fades out.
  const toggleWindow = (id: WindowId, originRect?: DOMRect) => {
    if (windows.state.open.includes(id)) {
      animateWindowClose(id, () => windows.close(id))
    } else {
      if (originRect) setWindowFlipOrigin(id, originRect)
      windows.open(id)
    }
  }
  const closeWindow = (id: WindowId) =>
    animateWindowClose(id, () => windows.close(id))

  const handleAction = (task: NeedsYouTask) => {
    // eslint-disable-next-line no-console
    console.log("action", task.id)
  }
  const handleOpen = (task: NeedsYouTask) => {
    // eslint-disable-next-line no-console
    console.log("open", task.id)
  }

  // A maximized window takes over the whole canvas (Figma 1365:12972) —
  // navbar, content, and prompt bar give way until it's restored.
  if (windows.state.maximized) {
    return (
      <div className="flex min-h-full w-full overflow-hidden">
        <MaximizedWindow
          id={windows.state.maximized}
          onRestore={() => windows.toggleMaximized(windows.state.maximized!)}
          onClose={() => closeWindow(windows.state.maximized!)}
        />
      </div>
    )
  }

  return (
    <div className="flex min-h-full w-full overflow-hidden">
      {/* Canvas: navbar + content. Shrinks when windows open on the right,
          but never below a usable floor — extra columns shrink instead. */}
      <div className="flex min-w-[320px] flex-1 flex-col overflow-hidden">
        <div className="flex flex-col">
          <HomeNavbar
            openWindows={windows.state.open}
            onToggleWindow={toggleWindow}
            conversationTitle={activeConversation?.title}
            screenTitle={screenTitle}
          />
        </div>
        {/* Figma 975:11536 — content column: pt-24px, centered 712px column,
            welcome block pinned top, ONE bar pinned bottom (pb-12px).
            A submitted prompt replaces the greeting + Needs-you canvas
            with the full-screen ONE conversation (Figma 1342:168003).
            Only the content scrolls — the prompt bar + actions stay
            pinned, and the content fades out as it slides under them. */}
        <div className="flex min-h-0 w-full flex-1 flex-col items-center pt-6">
          <div className="home-canvas-scroll flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto">
            {activeConversation ? (
              <ConversationView conversation={activeConversation} />
            ) : view === "policies" ? (
              <PoliciesScreen />
            ) : (
              <div className="flex w-[712px] max-w-full flex-col gap-8">
                <div className="flex items-center gap-3">
                  <PulseGreetingAvatar />
                  <F0Heading content={greeting} variant="heading" as="h1" />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <F0Text content="Needs you" variant="label" />
                  <div className="flex w-full flex-col gap-2">
                    {needsYouTasks.map((task, index) => (
                      <NeedsYouItem
                        key={task.id}
                        task={task}
                        index={index}
                        onAction={handleAction}
                        onOpen={handleOpen}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-[712px] max-w-full shrink-0 pb-3">
            <OnePromptBar />
          </div>
        </div>
      </div>

      {/* Right-hand window stack — pushes the canvas, Claude-Code style. */}
      <WindowsColumn
        state={windows.state}
        onClose={closeWindow}
        onToggleMaximized={windows.toggleMaximized}
        onSetColumnWidth={windows.setColumnWidth}
        onResizeBetween={windows.resizeBetween}
      />
    </div>
  )
}
