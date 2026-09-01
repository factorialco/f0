import {
  F0AvatarPerson,
  F0Button,
  F0Heading,
  type ModuleId,
} from "@factorialco/f0-react"
import { F0AvatarModule } from "@factorialco/f0-react/dist/experimental"
import {
  Ellipsis,
  Megaphone,
  Reaction,
  Settings,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import type { LeftPaneId } from "./comms/ChatsColumn"
import type { WindowId } from "./windows/types"

import { MONTH_LABEL } from "./calendar/calendarFixtures"
import { CalendarScreen } from "./calendar/CalendarScreen"
import {
  animateChatClose,
  ChatsColumn,
  isTicket,
  MaximizedChat,
  useChats,
} from "./comms/ChatsColumn"
import { onChatRequest, setOpenChats } from "./comms/chatStore"
import { EmployeeCanvas } from "./EmployeeCanvas"
import {
  INBOX_TOTAL,
  needsYouTasks,
  PROFILE_PEOPLE,
  type NeedsYouTask,
  type ProfilePerson,
} from "./fixtures"
import { HomeNav } from "./HomeNav"
import { NeedsYouItem } from "./NeedsYouItem"
import { ConversationPanel } from "./one/ConversationPanel"
import {
  closeConversationPanel,
  onWindowRequest,
  useConversations,
} from "./one/conversationStore"
import { ConversationView } from "./one/ConversationView"
import { PlayOutline } from "./one/PlayOutline"
import { OnePromptBar } from "./OnePromptBar"
import { PeopleScreen } from "./people/PeopleScreen"
import { PoliciesScreen } from "./policies/PoliciesScreen"
import { useProfile } from "./profileStore"
import { SectionHeader } from "./SectionHeader"
import { ClockInButton } from "./windows/ClockInButton"
import { stackWidth } from "./windows/stack"
import { useWindows } from "./windows/useWindows"
import {
  animateWindowClose,
  CANVAS_MIN_WIDTH,
  FloatingWidgets,
  MaximizedWindow,
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
 *     windows/          ← Claude-Code-style window stack: nav panel rows and
 *                          One replies open Insights / Events / Preview into
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
  // Home explores a different nav concept (see HomeNav): a fixed 48px
  // icon rail (Home/Comms/Inbox/Cal/Hub) plus a contextual, collapsible
  // 240px panel — docked, it pushes content, it doesn't float.
  sidebar: HomeNav,
}

// The ApplicationFrame paints a 4px gutter around #content (the grey
// #F5F6F8 frame bleeds through) and leaves the docked aside transparent.
// This concept needs a seamless canvas edge-to-edge, so we override both
// while Home is mounted and restore them on unmount.
const FULL_BLEED_CSS = `
  main#content { padding: 0 !important; background: #FCFCFC; }
  /* The ApplicationFrame slot reserves a fixed 240px column (plus a 12px
     gutter) for the classic sidebar — the rail + panel nav sizes itself,
     so the wrapper follows its content instead. The wrapper has no
     stable selector; :has() on the nav root is the only hook. */
  div:has(> [data-home-nav]) { width: auto !important; padding-left: 0 !important; }
  /* Rail, panel and canvas are ONE flat surface (#FCFCFC, verified pixel
     by pixel against the Figma render, per Oskar) — the nav carries no
     colour of its own; only a hairline separates the columns. The divider
     is an inset shadow, not a border: a border would shrink the fixed
     content boxes and force 1px horizontal scrollbars in their bodies.
     rgba(5,38,87,0.06) over #FCFCFC resolves to the design's #EDEFF2. */
  [data-home-rail],
  [data-home-panel] {
    background: #FCFCFC;
    box-shadow: inset -1px 0 0 rgba(5, 38, 87, 0.06);
  }
  /* The split conversation panel is another column of the same surface,
     so it gets the same hairline — on its LEADING edge, since the canvas
     is what it sits beside (the frame draws it as a border-right on the
     canvas; an inset shadow here keeps the fixed content boxes from
     shrinking, the same reason the nav columns use one). */
  [data-one-panel] {
    background: #FCFCFC;
    box-shadow: inset 1px 0 0 rgba(5, 38, 87, 0.06);
  }
  /* Dark: the light values above are experimental customs with no dark
     pair, so rebuild the same relationships from f0's dark tokens — one
     surface again (chrome base neutral-0 lifted by the --page overlay,
     the identical formula the canvas uses), dividers to white-alpha. */
  .dark main#content,
  .dark [data-home-rail],
  .dark [data-home-panel],
  .dark [data-one-panel] {
    background: linear-gradient(hsl(var(--page)), hsl(var(--page))), hsl(var(--neutral-0));
  }
  .dark [data-home-rail],
  .dark [data-home-panel] {
    box-shadow: inset -1px 0 0 hsl(var(--neutral-10));
  }
  .dark [data-one-panel] {
    box-shadow: inset 1px 0 0 hsl(var(--neutral-10));
  }
  /* Same thin theme-aware scrollbar as the canvas, no mask. */
  .home-panel-scroll {
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  }
  /* One composer (Figma 2639:45460): f0's F0AiChatTextArea with Oskar's
     tweaks — 16px radius instead of f0's rounded-lg (14px), and 16px of
     text padding instead of 12px. The component takes no className, so
     these are scoped to the prototype's wrapper. The text layers all
     stack in ONE grid cell (textarea + invisible autosize mirror +
     mention highlight + placeholder), each carrying its own padding, so
     every layer has to move together or the placeholder drifts off the
     caret. The action bar already matches the design's 12px. */
  [data-one-composer] form { border-radius: 16px; }
  /* Border stays f0's own token in every state — no gradient ring (it read
     as far too loud, and insetting f0's opaque ::before panel to expose it
     left the inner corner at a different radius than the outer one). Only
     hover shifts it a step darker; focus is the DEFAULT colour, since f0
     itself lightens it to background-tertiary, which reads as the border
     dropping out. Colour change gets plain ease, and stays short: hovering
     the composer is a many-times-a-day interaction (Emil).
     The !important flags are needed throughout this block: f0 styles the
     form with Tailwind utilities that win over these selectors in
     practice, and the component exposes no className to do it properly. */
  [data-one-composer] form { transition: border-color 140ms ease; }
  /* Gated to fine pointers: a touch tap fires :hover and would leave the
     composer stuck a step darker until the next tap elsewhere. */
  @media (hover: hover) and (pointer: fine) {
    [data-one-composer] form:hover {
      border-color: hsl(var(--neutral-40)) !important;
    }
  }
  [data-one-composer] form:has(textarea:focus) {
    border-color: hsl(var(--neutral-30)) !important;
  }
  /* Focus glow: f0's own conic gradient, restopped to the earlier bar's
     palette (orange → red → lavender) at lower alpha and a wider blur so
     it reads as a soft halo rather than a coloured edge, and pushed
     outside the border. Orbits on our own angle so we control the pace. */
  [data-one-composer] form::after {
    background: conic-gradient(
      from var(--f0c-one-angle),
      rgba(229, 86, 25, 0.32),
      rgba(229, 25, 67, 0.32),
      rgba(161, 173, 229, 0.48),
      rgba(229, 86, 25, 0.32)
    );
    inset: -4px !important;
    filter: blur(14px) !important;
  }
  /* Orbit ONLY while the glow is on screen. f0 keeps this ::after at
     opacity 0 until focus, so an always-on animation re-resolved the
     conic gradient and re-blurred the full composer box every frame for
     something nobody could see — and --f0c-one-angle is a registered
     custom property, so it invalidates paint rather than compositing.
     The reduced-motion override must carry the same :has() selector or
     it loses on specificity and stops applying. */
  [data-one-composer] form:has(textarea:focus)::after {
    animation: f0c-one-orbit 7s linear infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-one-composer] form:has(textarea:focus)::after { animation: none; }
  }
  [data-one-composer] div:has(> textarea[name="one-ai-input"]) > * {
    padding-left: 16px;
    padding-right: 16px;
  }
  [data-one-composer] textarea[name="one-ai-input"] { margin-top: 16px; }
  /* The autosize mirror sizes the cell — its margins set the box height. */
  [data-one-composer] div:has(> textarea[name="one-ai-input"]) > div {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  /* The placeholder positions with padding, not margin. Its copy comes
     from i18n whenever there is a SINGLE placeholder — the chat context's
     placeholder list only feeds the typewriter, which needs two or more
     and animates. Swapping the glyphs here keeps the design's static line
     without an app-wide i18n override or a fake second placeholder. */
  [data-one-composer] div:has(> textarea[name="one-ai-input"]) > p {
    padding-top: 16px;
    font-size: 0;
  }
  [data-one-composer] div:has(> textarea[name="one-ai-input"]) > p::before {
    content: "How can I help you today?";
    font-size: 14px;
  }
  /* The ONE glow behind the clarifying panel (Figma 2732:462941): a
     blurred gradient sibling painted BEFORE the card, so only the ~4px
     spilling past the border shows. Real CSS rather than Tailwind —
     arbitrary blur-[4px] and multi-stop from-/via-/to- utilities are
     exactly the kind this build drops silently. Left-to-right the frame
     reads orange → red → lavender (its gradient runs "to left"). */
  .f0c-clarify-glow {
    position: absolute;
    inset: -0.5px;
    border-radius: 12px;
    filter: blur(4px);
    opacity: 0.8;
    pointer-events: none;
    background: linear-gradient(
      to left,
      rgba(161, 173, 229, 0.7),
      rgba(229, 25, 67, 0.5),
      rgba(229, 86, 25, 0.5)
    );
  }
  /* Hide the composer FAB — its actions (theme toggle, back to catalog)
     live in the sidebar's user menu on this prototype. */
  div:has(> div > [aria-label="Open f0compose controls"]) { display: none; }
  /* ONE entrance for every widget: a short lift and fade — the
     "stacking" move Oskar picked out as the right level of subtlety. The
     old lateral slide (a full column width of travel) is gone; with close
     dissolving in place, all widget motion is one quiet family. */
  /* Chat message tints (Figma 2707:406513). Each speaker carries an
     "R G B" triple on --f0c-author; the name uses it at full strength and
     the bubble at 6%, so one value drives both. The Figma frame paints
     these as raw fills with no token behind them — see CHAT_AUTHORS.
     Alpha rather than a baked colour so the wash composites over whatever
     the panel is sitting on, which is what makes dark mode work. */
  .f0c-chat-author { color: rgb(var(--f0c-author)); }
  .f0c-chat-bubble { background-color: rgb(var(--f0c-author) / 0.04); }
  /* On dark the saturated tints go muddy against the panel — lift them
     toward white, keeping each speaker distinguishable. */
  .dark .f0c-chat-author {
    color: color-mix(in srgb, rgb(var(--f0c-author)) 45%, white);
  }
  .dark .f0c-chat-bubble {
    background-color: rgb(var(--f0c-author) / 0.16);
  }

  @keyframes f0c-window-rise {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: none; }
  }
  section[data-home-window] {
    animation: f0c-window-rise 0.22s cubic-bezier(0.23, 1, 0.32, 1);
  }
  /* Reduced motion keeps the fade, drops the travel (Emil: gentler, not
     zero) — the panel still announces itself instead of materialising in
     the same frame the canvas reflows around it. */
  @keyframes f0c-window-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    section[data-home-window] {
      animation: f0c-window-fade-in 0.12s cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
  /* Once the columns overlay the canvas they need their own ground —
     the p-2 gutters between panels would otherwise let the content show
     through — plus a soft edge so the stack reads as sitting ON the
     canvas rather than beside it. Same surface formula as the rail.
     The shadow falls on the CANVAS-facing side, so it flips for the
     left-hand chats stack — a -12px offset with -12px spread paints
     only the left edge, which on that side would fire into the nav. */
  /* The canvas ground, for anything that must be opaque over it — the
     calendar's sticky day header would otherwise need white, which the
     frame does not use. Same value as the overlay below. */
  .f0c-canvas-surface { background: #FCFCFC; }
  .dark .f0c-canvas-surface {
    background: linear-gradient(hsl(var(--page)), hsl(var(--page))), hsl(var(--neutral-0));
  }
  .f0c-window-overlay {
    background: #FCFCFC;
    box-shadow: -12px 0 28px -12px rgba(13, 22, 37, 0.14);
  }
  .f0c-window-overlay[data-window-stack="left"] {
    box-shadow: 12px 0 28px -12px rgba(13, 22, 37, 0.14);
  }
  .dark .f0c-window-overlay {
    background: linear-gradient(hsl(var(--page)), hsl(var(--page))), hsl(var(--neutral-0));
    box-shadow: -12px 0 28px -12px rgba(0, 0, 0, 0.5);
  }
  .dark .f0c-window-overlay[data-window-stack="left"] {
    box-shadow: 12px 0 28px -12px rgba(0, 0, 0, 0.5);
  }
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
  /* The ONE gradient orbits the composer's focus glow. Constant
     decorative motion → linear (Emil), slow enough to be felt, not
     watched. Animating the angle on the pseudo-element itself is
     deliberate: the property is registered as non-inheriting, so a
     ::after would otherwise fall back to the initial 0deg and sit still. */
  @property --f0c-one-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes f0c-one-orbit {
    to { --f0c-one-angle: 360deg; }
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
  /* Matches .f0c-modal's duration and curve — the scrim and its dialog
     are one event, and the built-in ease-out is too weak to pair with
     the custom curve every other keyframe here uses. */
  .f0c-overlay { animation: f0c-overlay-in 0.2s cubic-bezier(0.23, 1, 0.32, 1); }
  /* Swapping which conversation the Comms panel shows. Only ONE chat is
     open at a time and its React slot is stable, so the CARD never moves
     — the contents change underneath it. A short fade is therefore the
     honest cue: nothing travelled, something was replaced. Reduced motion
     keeps it, since a fade is already the gentle option. */
  .f0c-swap-in { animation: f0c-overlay-in 0.14s cubic-bezier(0.23, 1, 0.32, 1); }
  /* Timing functions as REAL CSS. Arbitrary "ease-[cubic-bezier(...)]"
     utilities emit NOTHING in f0compose's utilities-only Tailwind pass —
     Tailwind reports them as ambiguous and drops them, so anything using
     one silently falls back to the default ease-in-out. Named durations
     (duration-100/150/200) DO work; arbitrary ones (duration-[140ms]) do
     not. These classes are the supported way to reach a custom curve.
     Injected after Tailwind's sheet, so a single class is enough to win. */
  .f0c-ease-out { transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1); }
  .f0c-ease-hover { transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); }
  /* Pressable feedback for bespoke (non-F0Button) buttons. The colour
     pair lives HERE rather than as a transition-colors utility on each
     row: this is a shorthand, so it would silently drop whatever the
     utility set. Press → 160ms ease-out (button-press band); hover tint →
     100ms plain ease, since these rows are hovered many times a day. */
  .f0c-pressable {
    transition:
      transform 160ms cubic-bezier(0.23, 1, 0.32, 1),
      background-color 100ms ease,
      color 100ms ease;
  }
  .f0c-pressable:active { transform: scale(0.97); }
  /* Pulse avatar intro, mirroring f0's F0AvatarPulse: the waving hand
     pops in and rocks, then the avatar + reaction badge follow.
     DRASTICALLY REDUCED (2026-08-30): this used to open at scale(0.5) on
     a 1.56 back-out overshoot over 450ms, rock twice, and land the badge
     at ~1850ms. Home is seen dozens of times a day, so the whole thing
     now speaks the same language as the Needs-you cards beside it —
     0.97 start (never from near-zero), the shared ease-out curve, and
     every stage under the 300ms ceiling. */
  @keyframes f0c-pulse-pop {
    from { opacity: 0; transform: scale(0.97); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes f0c-wave-rock {
    0%, 100% { transform: rotate(-15deg); }
    50% { transform: rotate(20deg); }
  }
  .f0c-pulse-wave { animation: f0c-pulse-pop 0.2s cubic-bezier(0.23, 1, 0.32, 1); }
  .f0c-pulse-hand {
    display: inline-block;
    transform-origin: 60% 60%;
    animation: f0c-wave-rock 0.45s ease-in-out 1;
  }
  .f0c-pulse-avatar { animation: f0c-pulse-pop 0.2s cubic-bezier(0.23, 1, 0.32, 1); }
  .f0c-pulse-badge { animation: f0c-pulse-pop 0.15s cubic-bezier(0.23, 1, 0.32, 1) 0.12s backwards; }
  /* ---- Reduced motion, consolidated ----
     Every remaining prototype animation drops its movement and keeps the
     opacity cue that explains what appeared. f0c-overlay-in is the
     opacity-only keyframe the rest borrow. */
  @keyframes f0c-modal-fade-in {
    from { opacity: 0; transform: translate(-50%, -50%); }
    to { opacity: 1; transform: translate(-50%, -50%); }
  }
  @media (prefers-reduced-motion: reduce) {
    .f0c-card-in { animation-name: f0c-overlay-in; }
    .f0c-popover { animation-name: f0c-overlay-in; }
    .f0c-modal { animation-name: f0c-modal-fade-in; }
    .f0c-pressable { transition: none; }
    .f0c-pressable:active { transform: none; }
    .f0c-pulse-wave, .f0c-pulse-avatar, .f0c-pulse-badge {
      animation: f0c-overlay-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) backwards;
    }
    .f0c-pulse-hand { animation: none; }
  }
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
  screenModule,
  screenActions,
}: {
  openWindows: WindowId[]
  onToggleWindow: (id: WindowId) => void
  /** When set, the navbar shows the conversation title + its actions. */
  conversationTitle?: string
  /** When set (and no conversation), a module screen title (Figma
   *  1350:190929: module avatar + name, gear + ⋮ on the right). */
  screenTitle?: string
  /** Brand avatar beside the screen title — the calendar has its own. */
  screenModule?: ModuleId
  /** Replaces the screen's default ⋮ + gear pair. The People screen's
   *  frame (2730:461163) carries a single announcements button instead. */
  screenActions?: React.ReactNode
}) {
  return (
    <div className="flex w-full items-center justify-between p-[14px]">
      <div className="flex min-w-0 items-center gap-2">
        {conversationTitle ? (
          <span className="truncate text-base font-medium text-f1-foreground">
            {conversationTitle}
          </span>
        ) : screenTitle ? (
          <span className="flex min-w-0 items-center gap-2">
            {/* No "policies" module in f0 — company_documents is the
                closest brand avatar (icon gap). */}
            <F0AvatarModule
              module={screenModule ?? "company_documents"}
              size="sm"
            />
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
            onClick={() => onToggleWindow("preview")}
          />
          <F0Button
            variant="ghost"
            size="md"
            icon={Ellipsis}
            hideLabel
            label="Conversation options"
          />
        </div>
      ) : screenTitle ? (
        <div className="flex items-center">
          {screenActions ?? (
            <>
              <F0Button
                variant="ghost"
                size="md"
                icon={Ellipsis}
                hideLabel
                label="Screen options"
              />
              <F0Button
                variant="ghost"
                size="md"
                icon={Settings}
                hideLabel
                label="Screen settings"
              />
            </>
          )}
        </div>
      ) : (
        // Default Home mode: Clock in's own button, then the widgets "⋮"
        // (Figma 2621:23687).
        <div className="flex items-center">
          <ClockInButton
            open={openWindows.includes("clockin")}
            onToggle={() => onToggleWindow("clockin")}
          />
          <WindowsMenu open={openWindows} onToggle={onToggleWindow} />
        </div>
      )}
    </div>
  )
}

/**
 * The "how was your day" avatar, mirroring f0's F0AvatarPulse (not exported
 * from the dist bundles): a waving hand greets first, then the avatar with
 * the reaction badge springs in.
 */
function PulseGreetingAvatar({ person }: { person: ProfilePerson }) {
  const [showWave, setShowWave] = useState(true)

  useEffect(() => {
    // Pop-in (0.2s) + ONE rock of the hand (0.45s) before swapping. This
    // ran 1300ms — pop + two rocks — which put the badge at ~1850ms on a
    // canvas seen dozens of times a day; the whole greeting now lands in
    // well under a second (Emil: frequency decides).
    const timer = setTimeout(() => setShowWave(false), 650)
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
        firstName={person.firstName}
        lastName={person.lastName}
        src={person.avatar}
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

// A different greeting on every screen load, addressed to whoever you are
// viewing as — the profile switch has to change the name too, or the two
// views read as the same person's screen twice.
const GREETINGS = [
  "Welcome back, %s",
  "Good morning, %s",
  "Hey there, %s",
  "Nice to see you, %s",
  "Let's get to it, %s",
  "Ready when you are, %s",
]

export default function Home() {
  useFullBleedChrome()

  // The TEMPLATE is picked once per load; the name re-resolves when the
  // profile changes, so switching does not reshuffle the greeting too.
  const [greetingTemplate] = useState(
    () => GREETINGS[Math.floor(Math.random() * GREETINGS.length)]
  )
  const windows = useWindows()
  const chats = useChats()
  const { conversations, activeId, panelId } = useConversations()
  const activeConversation = conversations.find((c) => c.id === activeId)
  // The SPLIT conversation (Figma 2730:458631) lives beside the canvas
  // instead of taking it over, so it is independent of activeConversation.
  const panelConversation = conversations.find((c) => c.id === panelId)
  /**
   * The right-hand pane holds EITHER the widgets or the split
   * conversation — the same rule the left pane already has for a chat vs
   * a ticket. Both frames hide the lateral widgets, and the arithmetic
   * agrees: at the design's own 1440 a 438px panel, a 448px widget column
   * and a readable canvas do not fit. The stack is HIDDEN, not closed, so
   * closing the conversation brings it back exactly as it was; acting on
   * a widget control the other way closes the panel (see toggleWindow and
   * onWindowRequest), so a click is never dead.
   */
  const panelOpen = panelConversation !== undefined
  // Sub-screens have distinct URLs (?view=policies); an open conversation
  // always takes the canvas over the screen.
  const [searchParams] = useSearchParams()
  const view = searchParams.get("view")
  /**
   * The screen the canvas is actually showing. An open conversation takes
   * the canvas over, so every screen-shaped rule below — the title, the
   * edge-to-edge gutters, whether the composer shows — has to stop
   * applying while one is open, or an expanded conversation inherits the
   * People screen's "no composer, no scroller" layout.
   */
  const screenView = activeConversation ? null : view
  const screenTitle =
    screenView === "policies"
      ? "Policies"
      : screenView === "calendar"
        ? MONTH_LABEL
        : screenView === "people"
          ? "Organization"
          : undefined
  // Screens that run EDGE TO EDGE and scroll their own content: nesting
  // them inside the canvas gutters plus its scroller would give them a
  // second scrollbar inside the first.
  const fullWidthView = screenView === "calendar" || screenView === "people"
  // Screens whose frame carries no ONE composer. The calendar's grid uses
  // the full height and a floating composer would cover the hours you are
  // reading; the People screen reaches One from the button ON its
  // headcount banner instead, which is the point of that design.
  const showPromptBar = !fullWidthView
  /**
   * The widgets are the HOME canvas's, not a module's (per Oskar: "al
   * clicar en People, los widgets que teniamos activados en la home
   * deberian desaparecer"). Every module frame draws its lateral widgets
   * hidden, so any `?view=` screen puts the stack away — and the raw
   * `view`, not `screenView`, so expanding a conversation opened FROM such
   * a screen does not pop them back in mid-flow. Hidden, not closed:
   * navigating back to Home restores exactly what was open.
   */
  const onModuleScreen = view !== null
  const hideWidgets = panelOpen || onModuleScreen

  // Replies and nav panel rows can call for a window — e.g. the survey
  // preview opens itself the moment One says it created the survey. A
  // maximized window gives way first: the nav lives in the sidebar slot,
  // outside this component's maximized early-return, so it stays
  // clickable while the takeover hides the stack.
  useEffect(
    () =>
      onWindowRequest((id) => {
        // Same handover as toggleWindow: whatever the user (or a reply)
        // asked for takes the right-hand pane.
        closeConversationPanel()
        if (windows.state.maximized) {
          windows.toggleMaximized(windows.state.maximized)
        }
        // A maximized CHAT hides the widgets stack just as thoroughly, so
        // it has to give way too or the new widget lands behind it.
        if (chats.state.maximized) chats.toggleMaximized(chats.state.maximized)
        windows.open(id)
      }),
    [
      windows.open,
      windows.toggleMaximized,
      windows.state.maximized,
      chats.toggleMaximized,
      chats.state.maximized,
    ]
  )

  // Clicking a conversation in the nav's Comms section toggles it in the
  // LEFT-hand stack. Same channel shape as onWindowRequest, and for the
  // same reason: HomeNav is the shell's `sidebar` slot — a sibling tree,
  // so it cannot be handed callbacks.
  useEffect(
    () =>
      onChatRequest((id) => {
        if (chats.state.open.includes(id)) {
          // Close it where it stands. Restoring first would only be
          // QUEUED — React flushes the click update after the handler
          // returns — so the exit would start animating the very element
          // the restore is about to unmount. `close` already nulls
          // `maximized` when it matches, so nothing is left behind.
          animateChatClose(id, () => chats.close(id))
          return
        }
        // Opening a DIFFERENT conversation has to break out of a WIDGET
        // takeover first, or the panel arrives behind it. A maximized
        // CHAT stays maximized — you are swapping which conversation it
        // shows, not leaving the full-screen view.
        if (windows.state.maximized) {
          windows.toggleMaximized(windows.state.maximized)
        }
        // Replace within a KIND, STACK across them (per Oskar): a new
        // conversation takes over the conversation you were reading
        // (Slack-style), but stacks below an open inbox task the way the
        // widgets stack on the right.
        const sameKind = (open: LeftPaneId) => isTicket(open) === isTicket(id)
        // Read BEFORE the update — this asks what was ALREADY there.
        const stacksWithSomething = chats.state.open.some((w) => !sameKind(w))
        chats.openReplacing(id, sameKind)
        // A ticket takes the whole canvas only when it lands ALONE
        // (Figma 2725:444787); with a conversation beside it there is a
        // stack worth seeing, so it docks instead.
        if (isTicket(id) && !stacksWithSomething) chats.maximize(id)
        else chats.restore()
      }),
    [
      chats.openReplacing,
      chats.close,
      chats.maximize,
      chats.restore,
      chats.state.open,
      windows.toggleMaximized,
      windows.state.maximized,
    ]
  )

  // Publish upward so the nav rows can light up as selected — the same
  // sibling-trees problem, in the other direction.
  useEffect(() => {
    setOpenChats(chats.state.open)
  }, [chats.state.open])

  // Same reason: nav-driven navigation (opening a conversation from
  // Recents, New, Documents) must break out of a maximized window or the
  // click would appear dead behind the takeover.
  const profile = useProfile()
  const person = PROFILE_PEOPLE[profile]
  const greeting = greetingTemplate.replace("%s", person.firstName)
  const { maximized } = windows.state

  // Push-vs-overlay: measure the shell so we know whether the docked
  // columns still fit beside a canvas at its floor.
  const shellRef = useRef<HTMLDivElement>(null)
  const [shellWidth, setShellWidth] = useState(0)
  useLayoutEffect(() => {
    const el = shellRef.current
    if (!el) return
    const measure = () => setShellWidth(el.getBoundingClientRect().width)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    // Belt and braces: ResizeObserver is the precise signal (the nav panel
    // collapsing changes this box without the window changing), but it does
    // not fire in every environment — the window event covers the common
    // case on its own.
    window.addEventListener("resize", measure)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])
  // Two stacks now squeeze one canvas. Measuring each against "the room
  // the other leaves" looked per-stack but was NOT: both inequalities
  // reduce to `left + right > shell - 480`, so the pair overflowing lifted
  // BOTH out of flow at once and left the canvas with no docked edge to
  // sit against (measured at a 1280 viewport: 32px of canvas visible).
  //
  // So: a stack overlays when it ALONE cannot fit, or — when only the
  // PAIR overflows — when it is the wider of the two. The narrower one
  // keeps pushing, so the canvas always has one side to rest against.
  const rightWidth = hideWidgets ? 0 : stackWidth(windows.state)
  const leftWidth = stackWidth(chats.state)
  const room = shellWidth - CANVAS_MIN_WIDTH
  const soloOverflows = (width: number) => shellWidth > 0 && width > room
  const pairOverflows = shellWidth > 0 && leftWidth + rightWidth > room
  const overlayColumns =
    rightWidth > 0 &&
    (soloOverflows(rightWidth) || (pairOverflows && rightWidth >= leftWidth))
  const overlayChats =
    leftWidth > 0 &&
    (soloOverflows(leftWidth) || (pairOverflows && leftWidth > rightWidth))
  // Both overlaying means both are pinned to opposite edges over a canvas
  // already parked at its floor, with nothing between them — without a cap
  // they cross in the middle (measured: 24px of overlap at a 900px
  // viewport). Half the shell each: they meet, they never overlap.
  const overlayCap = overlayColumns && overlayChats ? shellWidth / 2 : undefined
  useEffect(() => {
    if (maximized) windows.toggleMaximized(maximized)
    if (chats.state.maximized) chats.toggleMaximized(chats.state.maximized)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, panelId, view])

  // One motion language for the whole window system: widgets slide in
  // from the side and slide back out the same way (see f0c-window-in and
  // animateWindowClose). Only maximize ↔ restore morphs, because there a
  // single element really does travel between two rects.
  const toggleWindow = (id: WindowId) => {
    // Acting on a widget hands the right-hand pane back to the stack.
    closeConversationPanel()
    if (windows.state.open.includes(id)) {
      animateWindowClose(id, () => windows.close(id))
    } else {
      windows.open(id)
    }
  }
  const closeWindow = (id: WindowId) =>
    animateWindowClose(id, () => windows.close(id))
  const closeChat = (id: LeftPaneId) =>
    animateChatClose(id, () => chats.close(id))

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
  // A maximized CHAT takes over the same way — the two stacks are the
  // same window system, so maximize behaves identically on either side.
  if (chats.state.maximized) {
    return (
      <div className="flex min-h-full w-full overflow-hidden">
        <MaximizedChat
          id={chats.state.maximized}
          onRestore={() => chats.toggleMaximized(chats.state.maximized!)}
          onClose={() => closeChat(chats.state.maximized!)}
        />
      </div>
    )
  }

  return (
    <div className="flex min-h-full w-full overflow-hidden">
      {/* The pane the window stacks measure themselves against. The split
          conversation panel sits OUTSIDE it, so an overlaying stack
          (`absolute right-0`) pins to the panel's edge instead of covering
          it — which also means every existing push-vs-overlay calculation
          accounts for the panel without a rule of its own. */}
      <div
        ref={shellRef}
        className="relative flex min-w-0 flex-1 overflow-hidden"
      >
        {/* Left-hand Comms stack — conversations opened from the nav. Same
          window system as the widgets, mirrored (Figma 2707:406513). */}
        <ChatsColumn
          state={chats.state}
          overlay={overlayChats}
          maxWidth={overlayCap}
          onClose={closeChat}
          onToggleMaximized={chats.toggleMaximized}
          onSetColumnWidth={chats.setColumnWidth}
          onResizeBetween={chats.resizeBetween}
          onResizeColumnsBetween={chats.resizeColumnsBetween}
        />

        {/* Canvas: navbar + content. Windows PUSH it narrower until it hits
          CANVAS_MIN_WIDTH; past that the columns overlay instead and the
          canvas parks at its floor underneath (per Oskar). */}
        <div
          className="flex flex-col overflow-hidden"
          style={
            overlayColumns || overlayChats
              ? {
                  flex: "0 0 auto",
                  width: CANVAS_MIN_WIDTH,
                  // A LEFT overlay is pinned over the canvas's START edge —
                  // the side you read from — so the canvas steps aside
                  // instead of parking underneath it. A right overlay needs
                  // no offset: the canvas already begins where it should.
                  marginLeft: overlayChats ? "auto" : undefined,
                }
              : { flex: "1 1 0%", minWidth: CANVAS_MIN_WIDTH }
          }
        >
          <div className="flex flex-col">
            <HomeNavbar
              openWindows={windows.state.open}
              onToggleWindow={toggleWindow}
              conversationTitle={activeConversation?.title}
              screenTitle={screenTitle}
              screenModule={
                screenView === "calendar"
                  ? "calendar"
                  : screenView === "people"
                    ? // `employees` IS the Organization brand avatar in f0
                      // (modules.ts maps it to ModuleIcons.Organization),
                      // which is the glyph the frame's AvatarModule draws.
                      "employees"
                    : undefined
              }
              screenActions={
                screenView === "people" ? (
                  <F0Button
                    variant="ghost"
                    size="md"
                    icon={Megaphone}
                    hideLabel
                    label="Announcements"
                  />
                ) : undefined
              }
            />
          </div>
          {/* Figma 975:11536 — content column: pt-24px, centered 712px column,
            welcome block pinned top, ONE bar pinned bottom (pb-12px).
            A submitted prompt replaces the greeting + Needs-you canvas
            with the full-screen ONE conversation (Figma 1342:168003).
            Only the content scrolls — the prompt bar + actions stay
            pinned, and the content fades out as it slides under them. */}
          <div
            className={`flex min-h-0 w-full flex-1 flex-col items-center ${
              fullWidthView ? "" : "px-4 pt-6"
            }`}
          >
            <div
              className={`flex min-h-0 w-full flex-1 flex-col items-center ${
                fullWidthView
                  ? "overflow-hidden"
                  : "home-canvas-scroll overflow-y-auto"
              }`}
            >
              {activeConversation ? (
                <ConversationView conversation={activeConversation} />
              ) : view === "policies" ? (
                <PoliciesScreen />
              ) : view === "calendar" ? (
                <CalendarScreen />
              ) : view === "people" ? (
                <PeopleScreen />
              ) : (
                <div className="flex w-[712px] max-w-full flex-col gap-8">
                  <div className="flex items-center gap-3">
                    <PulseGreetingAvatar person={person} />
                    <F0Heading content={greeting} variant="heading" as="h1" />
                  </div>
                  {profile === "employee" ? (
                    <EmployeeCanvas />
                  ) : (
                    <div className="flex w-full flex-col gap-2">
                      <SectionHeader
                        title="Needs you"
                        viewAllCount={INBOX_TOTAL}
                      />
                      <div className="flex w-full flex-col gap-2">
                        {needsYouTasks.map((task, index) => (
                          <NeedsYouItem
                            key={task.id}
                            task={task}
                            index={index}
                            onOpen={handleOpen}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            {/* See showPromptBar: the calendar and People frames carry no
              composer. Every other screen keeps ONE pinned. */}
            {showPromptBar && (
              <div
                data-home-promptbar
                className="relative w-[712px] max-w-full shrink-0 pb-1.5"
              >
                <OnePromptBar />
              </div>
            )}
          </div>
        </div>

        {/* Right-hand window stack — pushes the canvas, Claude-Code style. */}
        {/* Clock in is the one widget that floats instead of maximizing
          (per Oskar) — its card lives outside the column, over the
          canvas, hanging from the navbar button that opened it. */}
        {!hideWidgets && (
          <>
            <FloatingWidgets
              state={windows.state}
              onToggleFloat={windows.toggleFloating}
              onClose={closeWindow}
            />

            <WindowsColumn
              state={windows.state}
              overlay={overlayColumns}
              onToggleFloat={windows.toggleFloating}
              maxWidth={overlayCap}
              onClose={closeWindow}
              onToggleMaximized={windows.toggleMaximized}
              onSetColumnWidth={windows.setColumnWidth}
              onResizeBetween={windows.resizeBetween}
              onResizeColumnsBetween={windows.resizeColumnsBetween}
            />
          </>
        )}
      </div>

      {/* The split conversation panel (Figma 2730:458631) — a flush,
          full-height second pane, not a widget from the stack. */}
      {panelConversation && (
        <ConversationPanel conversation={panelConversation} />
      )}
    </div>
  )
}
