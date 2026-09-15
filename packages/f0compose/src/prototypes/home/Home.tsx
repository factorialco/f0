import type { IconType } from "@factorialco/f0-react"

import {
  F0AvatarPerson,
  F0Button,
  F0Heading,
  type ModuleId,
} from "@factorialco/f0-react"
import {
  Breadcrumbs,
  F0AvatarModule,
} from "@factorialco/f0-react/dist/experimental"
import {
  Calendar,
  ChartLine,
  CheckCircleLine,
  DollarBill,
  Ellipsis,
  File,
  PalmTree,
  Reaction,
  Receipt,
  Settings,
  Timer,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import type { ChatId } from "./comms/chats"
import type { LeftPaneId } from "./comms/ChatsColumn"
import type { WindowId } from "./windows/types"

import { ActivityScreen } from "./activity/ActivityScreen"
import { AgentsScreen } from "./agents/AgentsScreen"
import { agentById } from "./agents/agentStore"
import { ArtifactsScreen } from "./artifacts/ArtifactsScreen"
import { AskFactorialButton } from "./AskFactorial"
import { CalendarScreen } from "./calendar/CalendarScreen"
import { CHATS_BY_ID } from "./comms/chats"
import {
  animateChatClose,
  ChatsColumn,
  isTicket,
  leftPaneKind,
  MaximizedChat,
  useChats,
} from "./comms/ChatsColumn"
import {
  onChatRequest,
  onChatsCloseRequest,
  setOpenChats,
} from "./comms/chatStore"
import { MessagesScreen } from "./comms/MessagesScreen"
import { EmployeeCanvas } from "./EmployeeCanvas"
import {
  PROFILE_PEOPLE,
  type NeedsYouTask,
  type ProfilePerson,
} from "./fixtures"
import { HomeNav } from "./HomeNav"
import { ImportedHubScreen, hasImportedScreen } from "./hub/ImportedHubScreen"
import { ToolsScreen } from "./hub/ToolsScreen"
import { HybridHome } from "./HybridHome"
import { InboxScreen } from "./inbox/InboxScreen"
import { ModuleScreen } from "./ModuleScreen"
import { PersonalPreferencesScreen } from "./navigation/PreferencesScreen"
import { setNavPanelOpen, useNavPanelOpen } from "./navPanelStore"
import { NeedsYouItem } from "./NeedsYouItem"
import { phaseFor, useNeedsYou, visibleTasks } from "./needsYouStore"
import { Onboarding } from "./onboarding/Onboarding"
import { getOnboarding, useOnboarding } from "./onboarding/state"
import { ClockInPill } from "./one/ClockInPill"
import { completeOnboardingHome, enterHome } from "./one/conversationStore"
import {
  goHome,
  onWindowRequest,
  useConversations,
} from "./one/conversationStore"
import { ConversationView } from "./one/ConversationView"
import { DailyDigest } from "./one/DailyDigest"
import { DailyDigestButton } from "./one/DailyDigestButton"
import { HomeRecommendationCarousel } from "./one/HomeRecommendationCarousel"
import { PanelExpand } from "./PanelCollapse"
import { PeopleScreen } from "./people/PeopleScreen"
import { PoliciesScreen } from "./policies/PoliciesScreen"
import { PreferencesScreen } from "./preferences/PreferencesScreen"
import { useProfile } from "./profileStore"
import { SectionHeader } from "./SectionHeader"
import { GuidedHome } from "./setup/HomeArtifacts"
import { HomeBackdrop } from "./waves/HomeBackdrop"
import { readSelection } from "./widget-editor/model"
import { StaticWidgets } from "./widget-editor/StaticWidgets"
import { WidgetEditor } from "./widget-editor/WidgetEditor"
import { ClockInButton } from "./windows/ClockInButton"
import { useClockInWidgetRequests } from "./windows/clockInStore"
import { ClockInWindow } from "./windows/ClockInWindow"
import { FloatingWindow } from "./windows/FloatingWindow"
import { CANVAS_MIN_PEEK, stackWidth } from "./windows/stack"
import { useWindows } from "./windows/useWindows"
import { useWidgetCollapse } from "./windows/widgetCollapse"
import {
  animateWindowClose,
  CANVAS_MIN_WIDTH,
  MaximizedWindow,
} from "./windows/WindowsColumn"

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
 * isn't a module page. The design is a seamless full-bleed hsl(var(--neutral-10)) canvas
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
  [aria-label="Conversation"] [data-testid="card"] { border-color: hsl(var(--neutral-10)); }
  /* A white widget on a near-white page needs its edge back: secondary
     border + the soft shadow, which is what "floating" means in the new
     ramp. Before 2026-09-14 the page was 6% grey and the border alone did
     the work. */
  [data-static-widget] [role="article"] { background: hsl(var(--neutral-0)); border-color: hsl(var(--neutral-10)); box-shadow: 0 2px 20px 0 rgba(13, 22, 37, 0.04); }
  [data-widget-overlay="true"] [role="article"] > :first-child,
  [data-widget-draggable="true"] [role="article"] > :first-child { cursor: grab; user-select: none; touch-action: none; padding-left: 24px; min-height: 40px; }
  [data-widget-draggable="true"] [role="article"] > :first-child:active { cursor: grabbing; }
  [data-widget-draggable="true"] [role="article"] > :first-child button { cursor: pointer; }
  [data-widget-overlay="true"] { cursor: grabbing; transform: scale(1.02); }
  [data-widget-overlay="true"] [role="article"] { box-shadow: 0 8px 24px hsl(var(--neutral-20)); }
  [data-home-input-surface] {
    transition: height 260ms cubic-bezier(0.22, 1, 0.36, 1);
    /* A whisper of lift off the dotted backdrop (Angel, 2026-09-14) —
       enough to separate the input from the grid, not enough to read as
       a floating card. */
    box-shadow: 0 1px 2px 0 rgba(13, 22, 37, 0.04), 0 6px 20px -6px rgba(13, 22, 37, 0.06);
  }
  @media (prefers-reduced-motion: reduce) {
    [data-hybrid-composer], [data-home-input-surface] { transition: none !important; }
  }
  [aria-label="Conversation"] [data-testid="card"]:hover,
  [data-home-generated-section] .f0c-ease-hover:hover { background: hsl(var(--neutral-20)); box-shadow: none; }
  [aria-label="Conversation"] [data-testid="card"]:focus-within { box-shadow: none; }
  /* THREE AppShell backgrounds, Angel's own values (2026-09-14). They
     are close on purpose: the ramp says which layer is which, it is not
     a contrast device.
       rail      #F7F7F7  hsl(0 0% 97%) — the first sidebar, furthest back
       ground    #FAFAFA  hsl(0 0% 98%) — the second sidebar and the
                          surface behind the content sheet
       sheet     #FCFCFC  hsl(0 0% 99%) — the content itself, with a
                          secondary border and a shadow
       cards     #FFFFFF  widgets, windows and menus, one step above the
                          sheet they sit on
     One ground, not two (Angel, 2026-09-14): with every view now sitting
     in a white sheet, a second near-grey behind it was a difference you
     could see but not name.
     Literal hexes rather than f0 neutrals because f0's are navy alphas
     (--neutral-5 composites to #F5F6F8, a cool cast he did not ask for)
     and because a surface painted with alpha compounds when stacked.
     Every one of them has its .dark counterpart below. */
  .f0c-surface-chrome { background: #f5f5f5; }
  .f0c-surface-page { background: #f7f7f7; }
  main#content { padding: 0 !important; background: #f7f7f7; }
  /* The ApplicationFrame slot reserves a fixed 240px column (plus a 12px
     gutter) for the classic sidebar — the rail + panel nav sizes itself,
     so the wrapper follows its content instead. The wrapper has no
     stable selector; :has() on the nav root is the only hook. */
  div:has(> [data-home-nav]) { width: auto !important; padding-left: 0 !important; }
  /* Rail and panel share the sidebar tier, so the hairline between THEM
     is the only separation they get (Angel, 2026-09-14: border-secondary
     between the first and the second sidebar). An inset shadow rather
     than a border, so the rail's fixed 68px does not become 69. The
     panel needs none: the tonal step to the page does that job. */
  [data-home-rail] {
    background: #f5f5f5;
  }
  [data-home-rail][data-panel="closed"] {
    background: #f7f7f7;
  }
  [data-home-panel] {
    background: #f7f7f7;
  }
  /* The hairline between the two sidebars; they share one ground, so it
     is the only thing separating them. */
  [data-home-rail][data-panel="open"] {
    box-shadow: inset -1px 0 0 hsl(var(--neutral-10));
  }

  /* The split conversation panel sits on the ground like everything
     else; its own cards are what float. */
  [data-one-panel] {
    background: #f7f7f7;
  }
  /* Dark: the light hexes above have no dark pair, so the same THREE
     tiers are rebuilt from f0's dark tokens — sidebars the base, page the
     base lifted by --page, floating lifted again (that one is f0's own
     bg-f1-background, which flips on its own). */
  .dark .f0c-surface-chrome,
  .dark [data-home-rail],
  .dark [data-home-panel] {
    background: hsl(var(--neutral-0));
  }
  .dark .f0c-surface-page,
  .dark main#content,
  .dark [data-one-panel],
  .dark .f0c-canvas-surface {
    background: hsl(var(--neutral-0));
  }
  .dark [data-home-rail][data-panel="open"] {
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
  [data-one-composer] form {
    transition: border-color 140ms ease;
    /* At rest the border is f0's DEFAULT (Angel, 2026-09-14) — the
       composer sits on a patterned backdrop now, and a secondary edge
       disappeared into the dots. */
    border-color: hsl(var(--neutral-30)) !important;
  }
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
    /* Overridable per instance: the Agents brief passes its own copy in
       through --f0c-one-placeholder (see OnePromptBar). */
    content: var(--f0c-one-placeholder, "How can I help you today?");
    font-size: 14px;
  }
  /* ChatSpinner's own animations, copied from f0's
     sds/ai/F0ActionItem/styles.css. They are NOT in f0-react's dist —
     the reworked spinner lives on a branch that has not shipped — so the
     local ChatSpinner would otherwise render with no entrance and no
     breath. (shine-text DOES ship, in F0AiChat.css, which is why the
     "Thinking..." label already shimmers.) Keep in step with that file.
     No backticks in here: the whole block is a template literal. */
  @keyframes globe-spin-enter {
    from {
      opacity: 0;
      transform: scale(0.92);
      /* Size-relative — set by the component. A flat px blur reads
         completely differently at 20px and at 120px. */
      filter: blur(var(--globe-spin-blur, 1px));
    }
    to {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
    }
  }
  @keyframes globe-spin-fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  /* Subtle "thinking" breath, on the spin's own period so the two
     rhythms stay in phase. ~3.5% so it reads as life, not noise. */
  @keyframes globe-spin-breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.035); }
  }
  /* Both in ONE class because the animation shorthand resets every
     animation-* property: two separate classes would have the second
     wipe out the first. */
  .globe-spin-anim {
    animation:
      globe-spin-enter 0.2s cubic-bezier(0.23, 1, 0.32, 1) both,
      globe-spin-breathe var(--globe-spin-cycle, 2300ms) ease-in-out 0.2s infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .globe-spin-anim {
      animation: globe-spin-fade 0.2s ease both;
    }
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
  /* Clock in reads as ACTIVE by tinting its glyph viridian rather than by
     holding the button pressed (per Oskar). f0's ghost variant paints the
     icon through a [&_svg:not([data-has-color])]:text-f1-icon utility,
     which this selector matches in specificity — and this block is
     injected after Tailwind's sheet, so it wins. --selected-60 IS
     viridian: core's palette defines viridian.60 as the same 184 92% 28%.
     (No backticks in here — this whole block is a template literal.) */
  [data-home-clockin-button][data-open] svg {
    color: hsl(var(--selected-60));
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
  /* The overlaying column carries NO ground and NO shadow of its own
     (Oskar, 2026-09-04). It used to paint hsl(var(--neutral-10)) plus a -12px edge
     shadow, on the theory that the p-2 gutters between panels would
     otherwise let content show through — but that is precisely what
     should happen: over a conversation the opaque slab clipped the rows
     behind it mid-word, and the shadow made the whole column read as one
     sheet laid across the chat.
     What floats is the WIDGET. Every panel already carries its own
     surface and shadow in WindowStack's CARD_CLASS, which is exactly how
     the Communities panel reads. The class is kept rather than deleted
     because WindowsColumn still hangs data-window-stack off it and the
     dark theme may yet want a ground here. */
  /* The canvas ground, for anything that must be opaque over it — the
     calendar's sticky day header would otherwise need white, which the
     frame does not use. Same value as the overlay below. */
  .f0c-canvas-surface { background: #f7f7f7; }
  /* Home is a white sheet now like every other view, so its sticky
     greeting bar takes the sheet rather than the page tone — otherwise it
     reads as a grey band behind "Welcome to your new Home". */
  [data-hybrid-root][data-view="home"] .f0c-canvas-surface { background: #fcfcfc; }
  .dark [data-hybrid-root][data-view="home"] .f0c-canvas-surface {
    background: linear-gradient(hsl(var(--page)), hsl(var(--page))), hsl(var(--neutral-0));
  }


  /* The People table's header is STICKY, so it needs an opaque ground or
     rows scroll through it — but f0 paints it bg-f1-background, i.e.
     white, and this canvas uses the secondary F0 background (it should not read as a
     white band). Same problem and same answer as the calendar's sticky
     day header above: paint it the CANVAS surface, so it is opaque
     without being a different colour from the page. This block is
     injected after Tailwind's sheet and the selector outweighs a single
     utility class, so it wins. */
  main#content thead th { background: #f7f7f7; }
  .dark main#content thead th {
    background: linear-gradient(hsl(var(--page)), hsl(var(--page))), hsl(var(--neutral-0));
  }
  /* INSIDE A WINDOW THE GROUND IS THE CARD, NOT THE CANVAS.
     The two rules above paint sticky headers hsl(var(--neutral-10)) because the People
     table and the calendar's day row used to sit directly on the page.
     They are in a WHITE card now, where hsl(var(--neutral-10)) reads as a grey band with
     a seam where it meets the card — Oskar, comparing People against a
     maximized chat: "es como que en People se ve la linea de separacion".
     Same token the card itself uses (bg-f1-background compiles to
     hsl(var(--neutral-0))), so this needs no dark twin: the token flips.
     The main#content prefix is repeated only to out-specify the id
     selector above; without it this loses to a rule with an id in it. */
  main#content section[data-home-window] thead th,
  main#content section[data-home-window] .f0c-canvas-surface,
  /* Module screens render inside the floating canvas sheet, which is
     white for every non-home view — a page-tier sticky header there is
     the same grey band, one layer further in. Home is excluded: there the
     sheet is transparent and the bar sits on the page itself. */
  main#content [data-hybrid-root]:not([data-view="home"]) [data-hybrid-canvas] thead th,
  main#content [data-hybrid-root]:not([data-view="home"]) [data-hybrid-canvas] .f0c-canvas-surface {
    background: #fcfcfc;
  }

  .f0c-window-overlay {
    background: transparent;
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
    transition: -webkit-mask-image 150ms ease, mask-image 150ms ease;
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  }
  /* The same fade the composer end has, at the TOP once you have
     actually scrolled (Oskar). Gated on the data-scrolled attribute — which
     ConversationView's existing scroll listener sets — because the bottom
     fade can be permanent (the composer is always there) while a
     permanent top one would sit on the first turn at rest. 32px against
     the bottom's 40: there is less to hide up here, and the navbar edge
     is right above it. */
  .home-canvas-scroll[data-scrolled] {
    -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 40px), transparent 100%);
    mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 40px), transparent 100%);
  }
  /* The thumb shows only WHILE YOU SCROLL (Oskar: "podemos ocultar la
     barra de scroll si no estamos haciendo scroll?"). It used to appear on
     hovering the window, which meant a long table showed a dark bar down
     its edge the whole time your pointer was anywhere in it — and against
     One's canvas that reads as another divider.
     The gutter is NOT reclaimed: scrollbar-width stays thin and only the
     colour changes, so nothing reflows when the bar comes and goes.
     The data-scrolling attribute is set by useTransientScrollbars. */
  .home-window-scroll[data-scrolling] {
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
  /* One resolving a row in place. Each reasoning step REPLACES the last,
     so the change has to be marked — a line silently becoming a different
     line is easy to miss at a glance. Same 3-4px/200ms/curve as the card
     entrance above, so the row keeps one motion vocabulary. */
  @keyframes f0c-step-in {
    from { opacity: 0; transform: translateY(3px); }
    to { opacity: 1; transform: none; }
  }
  .f0c-step-in { animation: f0c-step-in 0.2s cubic-bezier(0.23, 1, 0.32, 1) backwards; }
  /* The check landing is the one beat worth a little weight. 0.8 and
     never 0: nothing in the real world appears from nothing (Emil). */
  @keyframes f0c-check-in {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: none; }
  }
  .f0c-check-in { animation: f0c-check-in 0.2s cubic-bezier(0.23, 1, 0.32, 1) backwards; }
  /* A cleared row LEAVES by collapsing its own height and the gap it
     owns, so the rows below slide up instead of teleporting when it
     unmounts. 160ms against the entrance's 200ms — exit faster than
     enter, because the user is waiting on the system here rather than
     deciding (Emil). The gap lives on the inner element on purpose: a
     parent flex gap-2 would survive the collapse and leave an 8px hole
     behind, so each row carries its own spacing and takes it with it. */
  /* One's blank-state headline (Figma 2756:475075). The three stops are
     the SAME brand palette as the composer's focus glow above — lavender,
     ONE red, ONE orange — which is what the prototype uses wherever the
     brand speaks for itself. Fixed in both themes by design, like every
     other ONE gradient here, which is also why it lives in this block
     rather than as utilities: they are raw brand colours with no f1
     token, and the prototype checker is right to reject those in a
     className. */
  .f0c-one-headline {
    background-image: linear-gradient(to left, #a1ade5 18%, rgba(229, 25, 67, 0.7) 50%, rgba(229, 86, 25, 0.7) 83%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .f0c-row-slot {
    display: grid;
    grid-template-rows: 1fr;
    transition: grid-template-rows 160ms cubic-bezier(0.23, 1, 0.32, 1), opacity 160ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .f0c-row-slot[data-exiting] { grid-template-rows: 0fr; opacity: 0; }
  /* Reduced motion keeps the OPACITY — it is what tells you the row has
     gone, and Emil's rule is fewer and gentler, not none — and drops the
     movement: no collapse, no offsets, no scale. */
  @media (prefers-reduced-motion: reduce) {
    .f0c-step-in, .f0c-check-in, .f0c-card-in { animation: none; }
    .f0c-row-slot { transition: opacity 160ms ease; }
    .f0c-row-slot[data-exiting] { grid-template-rows: 1fr; }
  }
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

/* The navbar's One button lived here (Figma 2756:472409/472468) and is
   GONE on Oskar's word: "sin el boton de One que se ve ahora". It was the
   only caller of `OneMark`/`OneMarkGradient` and of `useOnePending`, both
   of which are left intact in their own files — the gradient mark and the
   notification dot survive, so putting the entry point back anywhere is a
   handful of lines. One's insight reading is still reachable from the
   chevron ON the headcount banner inside the People window, which is the
   route the frame draws. */

/**
 * Flag any window scroll area as `data-scrolling` while it is moving, and
 * clear it once it has been still for a beat.
 *
 * ONE listener on `document` in the CAPTURE phase rather than a hook per
 * component: `scroll` does not bubble but it does capture, and this class
 * is on eight different bodies today (window panels, the calendar grid,
 * the ticket pane, a chat, the picker modal, celebrations). Anything that
 * gets the class later is covered without being told.
 */
const SCROLLBAR_IDLE_MS = 700

function useTransientScrollbars() {
  useEffect(() => {
    const timers = new WeakMap<Element, number>()
    const onScroll = (event: Event) => {
      const el = event.target
      if (
        !(el instanceof Element) ||
        !el.classList.contains("home-window-scroll")
      )
        return
      el.setAttribute("data-scrolling", "")
      window.clearTimeout(timers.get(el))
      timers.set(
        el,
        window.setTimeout(
          () => el.removeAttribute("data-scrolling"),
          SCROLLBAR_IDLE_MS
        )
      )
    }
    document.addEventListener("scroll", onScroll, true)
    return () => document.removeEventListener("scroll", onScroll, true)
  }, [])
}

function useFullBleedChrome() {
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = FULL_BLEED_CSS
    document.head.appendChild(style)
    return () => style.remove()
  }, [])
}

/**
 * Remove the redundant `title` from f0's icon-only buttons, so the browser
 * stops drawing its NATIVE tooltip on top of f0's styled one.
 *
 * `F0Button` with `hideLabel` produces both, from two independent lines in
 * `components/F0Button/internal.tsx`:
 *
 *   tooltip={tooltip ?? (!noAutoTooltip && hideLabel && label)}   // f0's
 *   title={noTitle ? undefined : props.title || (hideLabel && buttonLabel)}
 *
 * so you hover once and get two boxes with the same words (Oskar spotted
 * it on the clock-in). Both of f0's own escape hatches for this,
 * `noTitle` and `noAutoTooltip`, are listed in `F0Button`'s `privateProps`
 * and stripped before they reach the component — from the public API there
 * is no way to opt out, which is why this has to be a DOM pass.
 *
 * It strips ONLY a `title` identical to the element's `aria-label`. That is
 * exactly f0's duplicate, because it sets both from the same label; a
 * deliberately different `title` is somebody's real tooltip and is left
 * alone. `aria-label` is never touched, so the accessible name survives —
 * that, not `title`, is what a screen reader announces.
 *
 * The MutationObserver is not optional: most of these buttons mount later
 * (windows, panels, the run cards), and React re-sets `title` on re-render,
 * which the `attributeFilter` catches.
 *
 * The real fix is one line in f0 — `title` should be a FALLBACK for when no
 * styled tooltip renders, not an addition to it. Kept local on Oskar's
 * call (2026-09-02).
 */
function useSingleTooltip() {
  useEffect(() => {
    const stripped = new Map<Element, string>()
    const stripOne = (el: Element) => {
      const title = el.getAttribute("title")
      if (title && title === el.getAttribute("aria-label")) {
        stripped.set(el, title)
        el.removeAttribute("title")
      }
    }
    const strip = (root: Element | Document) => {
      if (root instanceof Element) stripOne(root)
      root.querySelectorAll("[title][aria-label]").forEach(stripOne)
    }
    strip(document)
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "attributes") stripOne(record.target as Element)
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) strip(node)
        })
      }
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributeFilter: ["title"],
    })
    return () => {
      observer.disconnect()
      // Reversible like the chrome above: anything still mounted when the
      // prototype unmounts gets its attribute back.
      stripped.forEach((title, el) => el.setAttribute("title", title))
    }
  }, [])
}

/**
 * `?reset=1` on any prototype URL wipes this prototype's saved state and
 * reloads clean.
 *
 * Nothing seeds an agent — a first-time visitor always gets the empty
 * state — but everything IS persisted, so a shared link shows a returning
 * visitor their own leftovers instead. That is right for Oskar mid-session
 * and wrong for a link handed to a colleague, and a console one-liner is
 * not something you can put in a Slack message. Scoped to this
 * prototype's keys rather than `localStorage.clear()`, which would take
 * the shell's own settings with it.
 */
const PROTOTYPE_KEYS = [
  "agents",
  "conversations",
  "nav-open",
  "needs-you",
  "nav-section",
  "profile",
  "recents-filter",
  "survey-draft",
]

function useResetParam(searchParams: URLSearchParams) {
  const asked = searchParams.get("reset")
  useEffect(() => {
    if (!asked) return
    for (const key of PROTOTYPE_KEYS) {
      window.localStorage.removeItem(`f0compose:home:${key}`)
    }
    // Drop the param before reloading, or the reload wipes again forever.
    const url = new URL(window.location.href)
    url.searchParams.delete("reset")
    window.location.replace(url.toString())
  }, [asked])
}

function HomeNavbar({
  openWindows,
  onToggleWindow,
  conversationTitle,
  conversationEmoji,
  homeSession,
  screenTitle,
  screenModule,
  screenActions,
  homeAction,
}: {
  openWindows: WindowId[]
  onToggleWindow: (id: WindowId) => void
  /** When set, the navbar shows the conversation title + its actions. */
  conversationTitle?: string
  homeSession?: boolean
  /**
   * The agent this conversation belongs to (Figma 2741:466470): its emoji
   * leads the title, and the play button goes — that one previews a
   * created survey, which has nothing to do with briefing an agent.
   */
  conversationEmoji?: string
  /** When set (and no conversation), a module screen title (Figma
   *  1350:190929: module avatar + name, gear + ⋮ on the right). */
  screenTitle?: string
  /** Brand avatar beside the screen title — the calendar has its own. */
  screenModule?: ModuleId
  /** Replaces the screen's default ⋮ + gear pair. The People screen's
   *  frame (2730:461163) carries a single announcements button instead. */
  screenActions?: React.ReactNode
  /**
   * An extra control in HOME mode, before the clock-in. A module window
   * leaves the navbar in Home mode (its title lives on the window), so
   * this is where One's own button goes — `screenActions` is unreachable
   * there, because that whole branch is gated on `screenTitle`.
   */
  homeAction?: React.ReactNode
  /**
   * Set when this conversation came from a module screen's split panel:
   * a button LEFT of the title takes it back there, carrying the module's
   * own icon so it says which screen it is going back to (per Oskar).
   * Absent on a conversation that was never in a panel — there would be
   * nothing to go back to.
   */
  /** The section's own glyph, so the button says where it goes back to. */
}) {
  const [, setParams] = useSearchParams()
  const navPanelOpen = useNavPanelOpen()
  return (
    // min-h-8 on the cluster, so the bar is 60px tall whether or not the
    // expand button is mounted: without it the row collapsed to its
    // padding with the panel open, and the centred composer jumped 16px
    // on every toggle (Angel, 2026-09-15).
    <div className="flex w-full items-center justify-between p-[14px]">
      <div className="flex min-h-8 min-w-0 items-center gap-2">
        {/* The way back to the second level: with no panel there is no
            header to hold its own toggle (Angel, 2026-09-14). */}
        {!navPanelOpen && (
          <F0Button
            variant="ghost"
            size="md"
            icon={PanelExpand}
            hideLabel
            label="Expand panel"
            onClick={() => setNavPanelOpen(true)}
          />
        )}
        {conversationTitle ? (
          <span className="flex min-w-0 items-center gap-2">
            {conversationEmoji && (
              <span
                aria-hidden
                className="flex size-5 shrink-0 items-center justify-center text-[16px] leading-none"
              >
                {conversationEmoji}
              </span>
            )}
            <span className="truncate text-base font-medium text-f1-foreground">
              {homeSession ? "" : conversationTitle}
            </span>
          </span>
        ) : screenTitle === "Activity" || screenTitle === "Preferences" ? (
          <Breadcrumbs
            breadcrumbs={[
              {
                id: "home",
                label: "Home",
                href: "/p/home",
                onClick: () => {
                  goHome()
                  setParams({})
                },
              },
              { id: screenTitle.toLowerCase(), label: screenTitle },
            ]}
          />
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
      <div className="flex shrink-0 items-center gap-2">
        {conversationTitle ? null : screenTitle ? (
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
            {homeAction}
            <ClockInButton
              open={openWindows.includes("clockin")}
              onToggle={() => onToggleWindow("clockin")}
            />
          </div>
        )}
        <AskFactorialButton />
      </div>
    </div>
  )
}

/**
 * The row under the composer. Clocking in confirms itself and leaves, and
 * the digest steps up into the primary slot behind it (Angel,
 * 2026-09-15).
 */
/** What a Factorial user actually opens Home to do, in the order the day
 *  tends to need them. Clock-in leads and is the only one that acts. */
/** Where the digest settles, measured from the suggestions. */
const DIGEST_GAP = 256

const RECOMMENDATIONS: { icon: IconType; label: string }[] = [
  { icon: Timer, label: "Review this week's timesheet" },
  { icon: CheckCircleLine, label: "Approve 3 pending time off requests" },
  { icon: PalmTree, label: "Request time off for the Easter break" },
  { icon: Calendar, label: "See who is off this week" },
  { icon: DollarBill, label: "Download my August payslip" },
  { icon: Receipt, label: "Submit last week's expenses" },
  { icon: File, label: "Sign my updated contract annex" },
  { icon: ChartLine, label: "Finish my performance review" },
]

function HomeRecommendations() {
  return (
    <HomeRecommendationCarousel
      // Clock-in leads and stays: once it is running it becomes the
      // outline timer rather than leaving (Angel, 2026-09-15).
      pinned={<ClockInPill />}
      // Every recommendation is a ghost: the only filled thing on the row
      // is clock-in, and it is not one of them (Angel, 2026-09-15).
      items={RECOMMENDATIONS}
    />
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
  const profile = useProfile()
  const onboarding = useOnboarding(profile)
  const [params] = useSearchParams()
  if (
    onboarding.screen !== "complete" &&
    !onboarding.hidden &&
    !params.get("view")
  )
    return <Onboarding profile={profile} />
  return (
    <HybridHome>
      <HomeCanvas />
    </HybridHome>
  )
}

function HomeCanvas() {
  useTransientScrollbars()
  useSingleTooltip()
  // Needs-you rows One has cleared. Read here rather than inside the row
  // so both the list AND its ordering come from one snapshot.
  const needsYou = useNeedsYou()

  // The TEMPLATE is picked once per load; the name re-resolves when the
  // profile changes, so switching does not reshuffle the greeting too.
  const [greetingTemplate] = useState(
    () => GREETINGS[Math.floor(Math.random() * GREETINGS.length)]
  )
  const windows = useWindows()
  const chats = useChats()

  // The rail's running timer lives in the nav's tree and cannot reach
  // this one, so it bumps a counter and each bump toggles the clock-in
  // card beside it (Angel, 2026-09-15). The widgets column is the static
  // rail now, with no floating stack of its own, so the card is mounted
  // here directly.
  const clockInRequests = useClockInWidgetRequests()
  const [clockInCard, setClockInCard] = useState(false)
  useEffect(() => {
    if (clockInRequests === 0) return
    setClockInCard((open) => !open)
  }, [clockInRequests])
  const { conversations, activeId } = useConversations()
  // Sub-screens have distinct URLs (?view=policies); an open conversation
  // always takes the canvas over the screen.
  const [searchParams] = useSearchParams()
  const view = searchParams.get("view")
  const activeConversation =
    !view && !chats.state.open.some(isTicket)
      ? conversations.find((conversation) => conversation.id === activeId)
      : undefined
  // Module screens now occupy the canvas. The persistent agent entry owns
  // the adjacent conversation, while the existing widget stacks stay intact.
  useResetParam(searchParams)
  const screenView = view
  // A view id is not always a title: "messages" is the DMs section, and
  // an open thread names itself.
  const openChat = searchParams.get("chat")
  const screenTitle = screenView
    ? screenView === "messages"
      ? ((openChat ? CHATS_BY_ID[openChat as ChatId]?.title : undefined) ??
        "DMs")
      : screenView.charAt(0).toUpperCase() +
        screenView.slice(1).replaceAll("-", " ")
    : undefined
  // Screens that run EDGE TO EDGE and scroll their own content: nesting
  // them inside the canvas gutters plus its scroller would give them a
  // second scrollbar inside the first.
  const fullWidthView =
    screenView === "preferences" ||
    screenView === "activity" ||
    screenView === "ai-activity" ||
    screenView === "calendar" ||
    // The three screens the rail's own sections landed on since
    // 2026-09-14: each scrolls its own content.
    screenView === "messages" ||
    screenView === "inbox" ||
    screenView === "tools" ||
    screenView === "people" ||
    screenView === "organization" ||
    screenView === "agents" ||
    (screenView !== null && hasImportedScreen(screenView))
  // Only Home owns an in-flow composer slot. Module chats use HybridHome’s side panel.
  const showPromptBar = screenView === null
  /**
   * Landing on Home is JUST the composer (Angel, 2026-09-14: "remove the
   * things below, leave just the chat there"). The briefing and the
   * Needs-you list are what One produces once you ask it something — on
   * arrival they were answering a question nobody had asked yet.
   * A real thread still renders: that IS the chat.
   */
  const homeSession =
    !!activeConversation?.homeBriefing ||
    !!(activeConversation?.homeSetup && !activeConversation.homeSetup.purpose)
  const homeLanding = showPromptBar && (!activeConversation || homeSession)

  /**
   * The landing's scroll, in two beats (Angel, 2026-09-15). The digest
   * parks 24px below the fold, which is much further down than where it
   * belongs — 256px under the suggestions. So the first stretch of
   * scrolling PINS the input and its suggestions while the digest climbs
   * into that gap; once the gap is 256px the pin releases and the whole
   * page scrolls as one. The digest button, being the hint that there is
   * anything down there, shows only at the very top.
   */
  const scrollerRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const firstScreenRef = useRef<HTMLDivElement>(null)
  const digestRef = useRef<HTMLDivElement>(null)
  const [atTop, setAtTop] = useState(true)
  useLayoutEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const pinBox = pinRef.current
    const screen = firstScreenRef.current
    const digest = digestRef.current
    const recommendations = scroller.querySelector(
      "[data-home-recommendations]"
    )
    const measure = () => {
      if (!pinBox || !screen || !digest || !recommendations) return
      const height = scroller.clientHeight
      // The screen is exactly one viewport and STICKS to the top, so it
      // holds still for as long as the box around it is taller than it
      // is. Sticky rather than a transform: a transform on the pills'
      // ancestor makes it a backdrop root, and their blur would have
      // nothing left to work on (Angel, 2026-09-15).
      pinBox.style.height = `${height}px`
      screen.style.height = `${height}px`
      digest.style.marginTop = "0px"
      const top = scroller.getBoundingClientRect().top
      const base =
        recommendations.getBoundingClientRect().bottom - top + DIGEST_GAP
      const parked = height + 24
      const pin = Math.max(0, parked - base)
      pinBox.style.height = `${height + pin}px`
      // The digest parks 24px below the fold and climbs into its base
      // position while the screen above it is held.
      digest.style.marginTop = `${24 - pin}px`
    }
    measure()
    const follow = () => setAtTop(scroller.scrollTop < 8)
    follow()
    scroller.addEventListener("scroll", follow, { passive: true })
    const observer = new ResizeObserver(measure)
    observer.observe(scroller)
    if (recommendations) observer.observe(recommendations)
    return () => {
      observer.disconnect()
      scroller.removeEventListener("scroll", follow)
      if (pinBox) pinBox.style.height = ""
      if (screen) screen.style.height = ""
      if (digest) digest.style.marginTop = ""
    }
  }, [homeLanding])
  /**
   * The widgets are the HOME canvas's, and they belong to it AT REST: the
   * moment any window occupies the canvas area they go (Oskar,
   * 2026-09-08: "al entrar en cualquier seccion y abrir una ventana,
   * deberian desaparecer los widgets que tengamos abiertos en la parte de
   * needs you" — measured before this: a Comms chat pane left Clock in
   * and Communities open, squeezing One's canvas into a strip between
   * them).
   *
   * So: any `?view=` screen, OR any open pane in the left stack. The raw
   * `view`, not `screenView`, so expanding a conversation opened FROM such
   * a screen does not pop them back in mid-flow. Hidden, not closed:
   * closing the window restores exactly what was open.
   */
  const onModuleScreen = view !== null
  const hideWidgets = onModuleScreen || chats.state.open.length > 0

  // Replies and nav panel rows can call for a window — e.g. the survey
  // preview opens itself the moment One says it created the survey. A
  // maximized window gives way first: the nav lives in the sidebar slot,
  // outside this component's maximized early-return, so it stays
  // clickable while the takeover hides the stack.
  useEffect(
    () =>
      onWindowRequest((id) => {
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
        // Three kinds now, not two: a module, a ticket and a
        // conversation each own a slot, so a new conversation replaces the
        // conversation and stacks below either of the others.
        const sameKind = (open: LeftPaneId) =>
          leftPaneKind(open) === leftPaneKind(id)
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
  useEffect(() => {
    if (!view && !chats.state.open.length) {
      const onboarding = getOnboarding(profile)
      if (onboarding.screen !== "complete" && !activeId)
        completeOnboardingHome(
          profile,
          onboarding.selected,
          onboarding.customActive ? onboarding.custom : ""
        )
      else enterHome(profile)
    }
  }, [view, activeId, profile, chats.state.open.length])
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

  /**
   * The widget column's REAL width, not the 384 it takes when every
   * widget is open: fold them all and it renders as an 88px rail, and a
   * hard-coded 384 made the push-vs-overlay math think it still needed
   * the full column — so the canvas parked at its 480 floor with ~280px
   * of dead space to its right (Angel, 2026-09-14: "smudged to the left").
   */
  const rightRef = useRef<HTMLDivElement>(null)
  const [rightMeasured, setRightMeasured] = useState(0)
  /**
   * Folded, the widget column is a 64px strip of mostly empty rail — and
   * pushing the canvas aside for it left the composer sitting visibly
   * left of centre (Angel, 2026-09-14). Folded it FLOATS over the canvas
   * instead, so the input centres on the whole sheet and the little rail
   * buttons ride on the backdrop; expanded it pushes as before.
   */
  const widgetIds = readSelection(profile).personal
  const { collapsed: collapsedWidgets } = useWidgetCollapse(profile)
  const widgetsFolded =
    widgetIds.length === 0 ||
    widgetIds.every((id) => collapsedWidgets.includes(id))
  useLayoutEffect(() => {
    const el = rightRef.current
    if (!el) return
    const measure = () => setRightMeasured(el.getBoundingClientRect().width)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  })
  const rightWidth = hideWidgets || widgetsFolded ? 0 : rightMeasured || 384
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
  // And a SINGLE overlay gets a cap too, now that a drag can push past
  // the floor: without it the seam could be dragged clean off the shell
  // and there would be nothing left to grab to come back.
  const overlayCap =
    overlayColumns && overlayChats
      ? shellWidth / 2
      : overlayColumns || overlayChats
        ? shellWidth - CANVAS_MIN_PEEK
        : undefined
  useEffect(() => {
    if (maximized) windows.toggleMaximized(maximized)
    if (chats.state.maximized) chats.toggleMaximized(chats.state.maximized)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, view])

  // One motion language for the whole window system: widgets slide in
  // from the side and slide back out the same way (see f0c-window-in and
  // animateWindowClose). Only maximize ↔ restore morphs, because there a
  // single element really does travel between two rects.
  const toggleWindow = (id: WindowId) => {
    if (windows.state.open.includes(id)) {
      animateWindowClose(id, () => windows.close(id))
    } else {
      windows.open(id)
    }
  }
  const closeWindow = (id: WindowId) =>
    animateWindowClose(id, () => windows.close(id))
  /**
   * A module pane's ✕ clears `?view` and lets the effect above do the
   * closing, so the URL and the stack cannot disagree about whether the
   * section is open. Everything else closes itself.
   */
  const closeChat = (id: LeftPaneId) =>
    animateChatClose(id, () => chats.close(id))

  const handleOpen = (task: NeedsYouTask) => {
    // eslint-disable-next-line no-console
    console.log("open", task.id)
  }

  useEffect(
    () =>
      onChatsCloseRequest(() => {
        if (!chats.state.open.length) return
        let pending = chats.state.open.length
        chats.state.open.forEach((id) =>
          animateChatClose(id, () => {
            pending -= 1
            if (!pending) chats.closeAll()
          })
        )
      }),
    [chats.state.open, chats.closeAll]
  )

  // A maximized window takes over the whole canvas (Figma 1365:12972) —
  // navbar, content, and prompt bar give way until it's restored.
  if (view === "widgets") return <WidgetEditor key={profile} />

  if (windows.state.maximized) {
    return (
      <div
        data-hybrid-source
        data-hybrid-maximized
        className="flex min-h-full w-full overflow-hidden"
      >
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
      <div
        data-hybrid-source
        data-hybrid-maximized
        className="flex min-h-full w-full overflow-hidden"
      >
        <MaximizedChat
          id={chats.state.maximized}
          onRestore={() => chats.toggleMaximized(chats.state.maximized!)}
          onClose={() => closeChat(chats.state.maximized!)}
        />
      </div>
    )
  }

  return (
    <div data-hybrid-source className="flex min-h-full w-full overflow-hidden">
      {/* The pane the window stacks measure themselves against. The split
          conversation panel sits OUTSIDE it, so an overlaying stack
          (`absolute right-0`) pins to the panel's edge instead of covering
          it — which also means every existing push-vs-overlay calculation
          accounts for the panel without a rule of its own. */}
      <div
        ref={shellRef}
        className="relative flex min-w-0 flex-1 overflow-hidden"
      >
        {/* The backdrop spans the WHOLE canvas, widget column included
            (Angel, 2026-09-14): the widgets float on it as cards, they do
            not cut it off. Behind everything, deaf to the pointer. */}
        {homeLanding && <HomeBackdrop />}
        {/* The digest stands on its own at the foot of the canvas, out of
            the recommendation row (Angel, 2026-09-15). Absolutely placed,
            so the composer keeps the midline it is centred on. */}
        {homeLanding && atTop && (
          <div className="pointer-events-none absolute bottom-2 left-0 right-0 z-10 flex justify-center">
            <div className="pointer-events-auto">
              <DailyDigestButton />
            </div>
          </div>
        )}
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
          // `relative z-0` is a STACKING CONTEXT, not a z-index race: f0's
          // chat textarea carries its own z-index inside the composer and
          // was painting over the docked window (measured with
          // elementFromPoint: the TEXTAREA was the top element inside the
          // overlap). Confining One's whole column to level 0 puts
          // everything in it — composer included — under the dock's z-20
          // whatever f0 does inside, which is what "dejar el input por
          // debajo" asks for.
          className="relative z-0 flex flex-col overflow-hidden"
          style={
            overlayColumns || overlayChats
              ? {
                  flex: "0 0 auto",
                  width: CANVAS_MIN_WIDTH,
                  // A LEFT overlay is pinned over the canvas's START edge —
                  // the side you read from — so the canvas steps aside
                  // instead of parking underneath it. A right overlay needs
                  // no offset: the canvas already begins where it should.
                  // The module dock is a left overlay too.
                  marginLeft: overlayChats ? "auto" : undefined,
                }
              : { flex: "1 1 0%", minWidth: 0 }
          }
        >
          {screenView !== "preferences" && screenView !== "activity" && (
            // On the landing it FLOATS: the content scrolls under it
            // instead of being guillotined at its edge (Angel,
            // 2026-09-15). Its own buttons keep their clicks; the strip
            // between them lets the wheel through to the page.
            <div
              className={
                homeLanding
                  ? "pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col [&_button]:pointer-events-auto"
                  : "flex flex-col"
              }
            >
              <HomeNavbar
                openWindows={windows.state.open}
                onToggleWindow={toggleWindow}
                conversationTitle={activeConversation?.title}
                homeSession={
                  !!(
                    activeConversation?.homeBriefing ||
                    (activeConversation?.homeSetup &&
                      !activeConversation.homeSetup.purpose)
                  )
                }
                conversationEmoji={
                  agentById(activeConversation?.agentId)?.emoji
                }
                screenTitle={screenTitle}
              />
            </div>
          )}
          {/* Figma 975:11536 — content column: pt-24px, centered 712px column,
            welcome block pinned top, ONE bar pinned bottom (pb-12px).
            A submitted prompt replaces the greeting + Needs-you canvas
            with the full-screen ONE conversation (Figma 1342:168003).
            Only the content scrolls — the prompt bar + actions stay
            pinned, and the content fades out as it slides under them. */}
          {/* Back to the shape it had before the module window existed:
            the gutters live here and there is no extra wrapper. A DOCKED
            module window is no longer inside this column at all — it is a
            pane beside it, so nothing here has to make room for it. */}
          <div
            className={`relative flex min-h-0 w-full flex-1 flex-col items-center ${
              // No top padding in a CONVERSATION (per Oskar): the thread
              // brings its own `pt-2`, and the extra 24 pushed the first
              // turn away from the navbar for no reason. The greeting
              // canvas still wants it — that one is a page, not a thread.
              fullWidthView ? "" : activeConversation ? "px-4" : "px-4 pt-6"
            }`}
          >
            {/* Home's composer sits on the VIEWPORT's midline with the
                content under it (Angel, 2026-09-14). Two flex-1 siblings
                — this spacer above, the content scroller below — always
                split the leftover room equally, so the input stays
                centred however long the briefing runs. */}
            {showPromptBar && !homeLanding && (
              <div className="order-1 w-full flex-1" />
            )}
            <div
              ref={scrollerRef}
              className={`flex min-h-0 w-full min-w-0 flex-1 flex-col items-center ${
                showPromptBar ? "order-3" : ""
              } ${
                fullWidthView
                  ? "overflow-hidden"
                  : "home-canvas-scroll overflow-y-auto"
              }`}
            >
              {/* ONE scrolling parent on the landing (Angel, 2026-09-15):
                  the input, the recommendations and the digest are all in
                  here, so a wheel anywhere moves the lot. The first block
                  is a full screen with its contents centred, which is what
                  puts the composer on the midline at rest and the digest
                  exactly one screen down. */}
              {homeLanding ? (
                <>
                  <div ref={pinRef} className="w-full shrink-0">
                    <div
                      ref={firstScreenRef}
                      // No min-height here: at 100% of the pinned box it would be as
                      // tall as the box and could never stick. Its height is
                      // measured to one viewport instead.
                      className="sticky top-0 flex w-full flex-col items-center justify-center"
                    >
                      <div
                        data-home-promptbar
                        className="relative z-10 w-[712px] max-w-full shrink-0"
                      >
                        <div data-hybrid-target />
                      </div>
                      {/* Hung off the midline rather than stacked under the
                        input: in the flow its height would push the input
                        off centre, and the input owns the midline (Angel,
                        2026-09-15). 84px = half the sheet plus the 20px
                        gap. It scrolls with this block like everything
                        else. */}
                      <div className="absolute inset-x-0 top-1/2 mt-[84px] flex justify-center">
                        <HomeRecommendations />
                      </div>
                    </div>
                  </div>
                  <div ref={digestRef} className="w-full">
                    <DailyDigest />
                  </div>
                </>
              ) : activeConversation ? (
                <div
                  data-home-inline-conversation
                  className="flex w-full min-w-0 flex-col"
                  role="region"
                  aria-label="Conversation"
                >
                  {activeConversation.homeBriefing ||
                  (activeConversation.homeSetup &&
                    !activeConversation.homeSetup.purpose) ? (
                    <GuidedHome conversation={activeConversation} />
                  ) : (
                    <ConversationView conversation={activeConversation} />
                  )}
                </div>
              ) : /* WINDOW views are absent from this chain on
                     purpose: they render in the layer below instead, and
                     One's floor has to fall through to the greeting so it
                     is still there underneath them. `screenView` is null
                     for them, which is what makes the fall-through
                     automatic rather than a second list to maintain. */
              screenView === "people" || screenView === "organization" ? (
                // The admin Hub's row is "Organization" now and this IS
                // that screen — Organization › People (Figma 2730:459215).
                // The employee Hub still says People.
                <PeopleScreen />
              ) : screenView === "calendar" ? (
                <CalendarScreen />
              ) : screenView === "policies" ? (
                <PoliciesScreen />
              ) : screenView === "artifacts" ? (
                <ArtifactsScreen />
              ) : screenView === "messages" ? (
                <MessagesScreen />
              ) : screenView === "inbox" ? (
                <InboxScreen />
              ) : screenView === "tools" ? (
                <ToolsScreen />
              ) : screenView === "activity" || screenView === "ai-activity" ? (
                <ActivityScreen />
              ) : screenView === "agents" ? (
                <AgentsScreen />
              ) : screenView ? (
                screenView === "personal-preferences" ? (
                  <PersonalPreferencesScreen />
                ) : screenView === "preferences" ? (
                  <PreferencesScreen />
                ) : hasImportedScreen(screenView) ? (
                  <ImportedHubScreen key={screenView} view={screenView} />
                ) : (
                  <ModuleScreen title={screenTitle ?? screenView} />
                )
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
                      {/* No "View all" (per Oskar): the count was the
                          only thing on the right and it sent you to a
                          window that lists the same rows. */}
                      <SectionHeader title="Needs you" />
                      {/* No `gap-2`: each row slot carries its own
                          bottom spacing so a collapsing row takes the gap
                          with it (see .f0c-row-slot). */}
                      <div className="flex w-full flex-col">
                        {visibleTasks(needsYou).map((task, index) => (
                          <NeedsYouItem
                            key={task.id}
                            task={task}
                            index={index}
                            onOpen={handleOpen}
                            phase={phaseFor(needsYou, task.id)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            {/* The Home composer slot must not reserve space on module
                pages, and on the LANDING it lives inside the scroller
                instead (see below). */}
            {showPromptBar && !homeLanding && (
              <div
                data-home-promptbar
                className="relative z-10 order-2 w-[712px] max-w-full shrink-0"
              >
                <div data-hybrid-target />
              </div>
            )}
          </div>
        </div>

        {clockInCard && (
          <FloatingWindow
            title="Clock in"
            width={240}
            anchorSelector="[data-home-clockin-pill], [data-home-clockin-rail]"
            onClose={() => setClockInCard(false)}
          >
            <ClockInWindow />
          </FloatingWindow>
        )}

        {/* Right-hand window stack — pushes the canvas, Claude-Code style. */}
        {/* Clock in is the one widget that floats instead of maximizing
          (per Oskar) — its card lives outside the column, over the
          canvas, hanging from the navbar button that opened it. */}
        {!hideWidgets && (
          <div
            ref={rightRef}
            className={
              widgetsFolded
                ? "absolute right-0 top-0 z-10 flex h-full min-h-0"
                : "flex h-full min-h-0 shrink-0"
            }
          >
            <StaticWidgets
              onCloseConversation={
                activeConversation && !activeConversation.homeBriefing
                  ? goHome
                  : undefined
              }
            />
          </div>
        )}
      </div>
    </div>
  )
}
