import { F0Box, F0Button, F0Heading, F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
} from "@factorialco/f0-react/dist/experimental"
import {
  CheckDouble,
  FileSigned,
  Files,
  Paperclip,
  Settings,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useSearchParams } from "react-router-dom"

import { useAiChat } from "@/copilot"

import { CertifiedDocumentsSection } from "./certified-documents/CertifiedDocumentsSection"
import { useCertifiedDocsConvoAction } from "./certified-documents/copilot/useCertifiedDocsConvoAction"
import { useEnableCertificationAction } from "./certified-documents/copilot/useEnableCertificationAction"
import { useExposeCertificationContext } from "./certified-documents/copilot/useExposeCertificationContext"
import { useCertificationData } from "./certified-documents/useCertificationData"
import { useApprovalFlowActions } from "./copilot/useApprovalFlowActions"
import { useSetApprovalWorkflowAction } from "./copilot/useSetApprovalWorkflowAction"
import { useExpenseTypesActions } from "./copilot/useExpenseTypesActions"
import { usePolicyRulesActions } from "./copilot/usePolicyRulesActions"
import { useApplyInterviewAnswersAction } from "./copilot/useApplyInterviewAnswersAction"
import { useGuidedTour } from "./copilot/useGuidedTour"
import { useExposeContext } from "./copilot/useExposeContext"
import { useInterviewWelcomeAction } from "./copilot/useInterviewWelcomeAction"
import { useExpensePolicySetup } from "./copilot/useExpensePolicySetup"
import { useExpensePolicySetupActions } from "./copilot/useExpensePolicySetupActions"
import { useChatTitle } from "./copilot/useChatTitle"
import { useNavigateToViewAction } from "./copilot/useNavigateToViewAction"
import { useGoToApprovalFlowsAction } from "./copilot/useGoToApprovalFlowsAction"
import { useRenderRegularSummaryAction } from "./copilot/useRenderRegularSummaryAction"
import { useStartSetupAction } from "./copilot/useStartSetupAction"
import { usePolicyData } from "./data/usePolicyData"
import { ExpensePolicyHeader } from "./header/ExpensePolicyHeader"
import { useExpenseFormsSource } from "./forms/useExpenseFormsSource"
import { LeftNavPane } from "./nav/LeftNavPane"
import { useNavCompletion } from "./nav/useNavCompletion"
import { ExceptionsView } from "./policy-rules/exceptions/ExceptionsView"
import { MealsView } from "./policy-rules/meals/MealsView"
import { ReceiptsView } from "./policy-rules/receipts/ReceiptsView"
import { ReimbursementsView } from "./policy-rules/reimbursements/ReimbursementsView"
import { TravelView } from "./policy-rules/travel/TravelView"
import { usePolicyRulesData } from "./policy-rules/usePolicyRulesData"
import {
  isPolicyRuleNav,
  policyRulesSection,
  type NavEntryId,
} from "./nav/navConfig"
import type { PrototypeMeta } from "../types"
import { BreadcrumbBar } from "./views/BreadcrumbBar"
import { DemoInterview } from "./views/DemoInterview"
import { SectionIconTile } from "./views/SectionIconTile"
import { isDemoMode } from "./lib/demoMode"

// Section glyphs for the three core pages, whose title is the
// breadcrumb leaf (not a HeroBlock). Same tinted-tile language as the
// policy-rules HeroBlocks (Coffee/info, Plane/promote, Wallet/positive,
// Receipt/accent, Shield/warning) — these fill the remaining slots so
// every section opens with a consistent icon.
const CORE_SECTION_ICON = {
  "expense-forms": {
    icon: Files,
    color: "accent" as const,
    bgClass: "bg-f1-background-accent/5",
  },
  "approval-flows": {
    icon: CheckDouble,
    color: "info" as const,
    bgClass: "bg-f1-background-info/5",
  },
  "certified-documents": {
    icon: FileSigned,
    color: "positive" as const,
    bgClass: "bg-f1-background-positive/5",
  },
}
import { ApprovalWorkflowView } from "./views/ApprovalWorkflowView"
import { EmptyStateView } from "./views/EmptyStateView"
import { GeneratingPolicyView } from "./views/GeneratingPolicyView"
import { usePolicyView, type PolicyView } from "./views/viewRouter"
import { FormsSummaryView } from "./wizard/FormsSummaryView"
import { useSetupPhase, type SetupPhase } from "./wizard/useSetupPhase"
import { useWizardCompletionActions } from "./wizard/useWizardCompletionActions"
import { useWizardState } from "./wizard/useWizardState"

/**
 * Expense Policy settings page.
 *
 * Three coexisting state systems (handoff §2.1–§2.6):
 *
 *  - `activeNavId` (local React state): the left-nav section
 *    (Expense forms · Rates · Approval flows · Certified documents).
 *    Drives which content pane appears. Slice 1: the section is the
 *    same as the wizard's currentOuterStep, but they're kept
 *    independent so the admin can browse — sequencing is enforced
 *    only when the agent advances the wizard.
 *  - `view` (URL via `useSearchParams`): WITHIN "Expense forms",
 *    which sub-screen is shown — the new `forms-summary` landing
 *    (the 3-card wizard view), or `forms-detail` for one form-type
 *    editor. The Categories / Subcategories / Payment methods
 *    surfaces are no longer URL-routable: Categories expands inline
 *    inside `forms-detail`, and Subcategories / Payment methods open
 *    in F0Dialog modals on top of `forms-detail`. This was a
 *    deliberate UX iteration — co-creation flows shouldn't lose the
 *    editor's context to a navigation event.
 *  - `wizard` (`useWizardState`, persisted in localStorage v1):
 *    which outer steps + form sub-steps the admin has completed
 *    through the co-creation flow. Completion is hard-signaled by
 *    the agent calling `completeStep` / `completeSubStep`.
 *
 * Why three: nav is UI-local, view is deep-linkable, wizard is
 * domain progress that must survive refresh.
 *
 * `usePolicyData()` is the single source of truth for global
 * Categories / Subcategories / Payment methods lists (visual-only —
 * see BR-008). Each view reads + mutates through the hook.
 */
export const meta: PrototypeMeta = {
  slug: "expense-policy-settings",
  title: "Expense policy settings",
  description:
    "Visual recreation of the Expense Policy settings page with drill-in management views for Categories, Subcategories, and Payment methods (PSPEC-spending-expense-policy-page).",
  category: "Settings",
  module: "spending",
  audience: ["admin"],
  tags: ["spending", "expenses", "policy", "settings", "recreation"],
  createdAt: "2026-05-14",
}

export default function ExpensePolicySettings() {
  const [activeNavId, setActiveNavId] = useState<NavEntryId>("expense-forms")
  const navCompletion = useNavCompletion()
  const formsSource = useExpenseFormsSource()
  const policyData = usePolicyData()
  const policyRules = usePolicyRulesData()
  const certificationData = useCertificationData()
  const wizard = useWizardState()
  const { view, setView } = usePolicyView()
  const [searchParams, setSearchParams] = useSearchParams()
  // `setOpen` from `useAiChat()` is only needed when an
  // auto-triggered One conversation re-opens the chat panel — that
  // path is parked (see the commented `convoTriggeredRef` effect
  // below and the `onRequestAuthorize` handler in the certified-
  // documents branch). Restore it from the destructure if you
  // re-enable either flow.
  const {
    appendMessages,
    clearAndAppend,
    sendMessage,
    setOpen,
    setVisualizationMode,
  } = useAiChat()
  const setupState = useExpensePolicySetup()

  // Front-of-funnel phase: empty → interview → generating → cocreation
  // (see useSetupPhase). The co-creation editor below only renders in
  // the "cocreation" phase; the earlier phases render a minimal shell.
  const setup = useSetupPhase()
  // Guards the one-time greeting when the editor is first entered.
  const greetedRef = useRef(false)
  // Guards the one-time interview kickoff message so re-entering the
  // "interview" phase (or a stray re-render) can't post a second kickoff
  // and make One greet twice (re-armed whenever we leave the interview).
  const kickoffFiredRef = useRef(false)
  // DOM anchor injected into One's interview message column, between the
  // greeting and the One loading icon, so the "Upload supporting docs"
  // button renders IN FLOW (reflows the icon down) rather than overlaying
  // it. We portal the React button into this anchor (null = not placed).
  const [uploadAnchor, setUploadAnchor] = useState<HTMLElement | null>(null)

  // Chat-aware phase transitions. The One chat goes FULLSCREEN for the
  // interview, then collapses to the side panel for generating + the
  // editor. setOpen keeps the panel mounted across the swap so the
  // conversation survives the transition.
  const goToPhase = (target: SetupPhase) => {
    switch (target) {
      case "interview":
        setOpen(true)
        setVisualizationMode("fullscreen")
        setup.enterInterview()
        // Fire the interview DIRECTLY — no welcome/drop-zone/skip gate.
        // Posting this kickoff message wakes the `expensePolicySetup`
        // skill, which (per Section 1 of the skill) greets the user by
        // name, renders the "Upload supporting docs" affordance under its
        // greeting (the `interviewWelcome` action), and immediately fires
        // the 5-step clarifying-question panel. The short delay lets the
        // fullscreen transition settle; the chat bridge is already wired
        // (the shell mounts it on page load), and this is a post-load
        // user-initiated action, so it does NOT hit the old on-mount
        // sendMessage race that the earlier auto-opener suffered.
        // Fire the kickoff at most once per interview entry — without
        // this guard a re-entry/re-render could post a second kickoff and
        // One would greet twice. Re-armed when we leave the interview
        // (see the upload-seed effect's phase!=="interview" branch).
        if (!kickoffFiredRef.current) {
          kickoffFiredRef.current = true
          window.setTimeout(() => {
            // Wipe any prior thread first so the interview always starts
            // clean (no stale post-generation "Done…" messages bleeding
            // in from an earlier run), then post the kickoff. Same
            // clearAndAppend([])-then-sendMessage pattern the old skip
            // button used.
            clearAndAppend([])
            sendMessage("Help me create an expense policy for my company.")
          }, 450)
        }
        break
      case "generating":
        setVisualizationMode("sidepanel")
        setOpen(true)
        setup.enterGenerating()
        break
      case "cocreation":
        setVisualizationMode("sidepanel")
        setOpen(true)
        setup.enterCoCreation()
        break
      case "empty":
        setVisualizationMode("sidepanel")
        setOpen(false)
        setup.reset()
        break
    }
  }

  // Which empty-state route the admin chose. Persisted so the landing
  // greeting can match it (interview = "drafted from your answers";
  // defaults = "set up with defaults, tweak or upload docs"). Reading
  // localStorage keeps it correct across the generating→cocreation
  // transition and a refresh.
  const SETUP_ROUTE_KEY = "expense-policy-setup-route-v1"
  const markRoute = (route: "interview" | "defaults") => {
    try {
      window.localStorage.setItem(SETUP_ROUTE_KEY, route)
    } catch {
      // best-effort — greeting falls back to the interview copy
    }
  }

  // "Use defaults" → skip the interview entirely: show the brief
  // generating/loading skeleton, then drop into the editor seeded with
  // the prototype's common-practice defaults. The landing greeting
  // (posted by the cocreation-entry effect) reminds the user they can
  // upload documents for extra context.
  // Collapse to the side panel + show the brief "Setting up…" skeleton,
  // then drop into the editor. Shared by the interview apply, the demo
  // interview, and "Use defaults".
  const enterEditorWithLoading = () => {
    setVisualizationMode("sidepanel")
    setOpen(true)
    setup.enterGenerating()
    window.setTimeout(() => setup.enterCoCreation(), 2200)
  }

  // "Use defaults" → skip the interview, land in the editor on the
  // prototype's common-practice defaults.
  const startWithDefaults = () => {
    markRoute("defaults")
    enterEditorWithLoading()
  }

  // "Describe your way" → the interview. With the agent (localhost) the
  // skill drives the real clarifying flow via goToPhase. On the agent-less
  // demo build we still go fullscreen + interview phase, but skip the chat
  // seeding (it can't render offline) — the DemoInterview overlay takes
  // over and drives the real clarifying panel with no agent.
  const startInterview = () => {
    markRoute("interview")
    if (isDemoMode()) {
      setOpen(true)
      setVisualizationMode("fullscreen")
      setup.enterInterview()
    } else {
      goToPhase("interview")
    }
  }

  // Keep the chat presentation in sync with the phase. The empty-state
  // landing shows NO chat (matches the design) — it opens FULLSCREEN
  // for the interview and collapses to the side panel afterwards. The
  // interview/generating/cocreation open+mode are driven by goToPhase
  // on the transition; here we only enforce the closed empty state
  // (including the initial mount, where the chat defaults to open).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (setup.phase === "empty") {
      setVisualizationMode("sidepanel")
      setOpen(false)
    }
  }, [setup.phase])

  // During the interview, hide the free-text chat composer so the only
  // forward actions are the welcome widget's drop zone / "Skip" button
  // (and, once they start, the clarifying-question panel).
  //
  // CRITICAL: the composer AND the clarifying-question panel are rendered
  // as the two children of a SINGLE shared <form>. The composer's input is
  // the only <textarea>; the panel's custom-answer field is an <input>. So
  // `form:has(textarea)` matches the shared form ANCESTOR and hides the
  // panel along with the composer — which is exactly what broke Q1 (the
  // whole question panel went display:none, leaving an empty canvas that
  // "couldn't be scrolled to"). Scope to the composer's own child div
  // (`form > div:has(textarea)`) so ONLY the composer is hidden and the
  // sibling panel stays visible. Gated to a body marker set in the
  // interview phase.
  useEffect(() => {
    const STYLE_ID = "eps-hide-composer-style"
    const existing = document.getElementById(STYLE_ID)
    const css =
      'body[data-eps-hide-composer="1"] form > div:has(textarea){display:none !important;}'
    if (existing) {
      existing.textContent = css
    } else {
      const style = document.createElement("style")
      style.id = STYLE_ID
      style.textContent = css
      document.head.appendChild(style)
    }
  }, [])
  useEffect(() => {
    // Hide the free-text composer through the interview AND the
    // generating/loading screen — the user only gets free chat once
    // they're in the co-creation editor.
    if (setup.phase === "interview" || setup.phase === "generating") {
      document.body.dataset.epsHideComposer = "1"
    } else {
      delete document.body.dataset.epsHideComposer
    }
    return () => {
      delete document.body.dataset.epsHideComposer
    }
  }, [setup.phase])

  // Interview-phase housekeeping + place the "Upload supporting docs"
  // button IN FLOW, between One's greeting and the One loading icon.
  //
  // Not a chat message: injecting a client message mid-turn makes
  // CopilotKit re-render and duplicate One's greeting (the "looping
  // greeting" we chased). Not a fixed overlay either: an overlay floats
  // ON TOP of the loading icon and can't push it down. Instead we insert
  // a plain <div> anchor as a sibling right after the greeting bubble
  // inside One's message column (a `flex flex-col gap-2`), so the flex
  // column reflows to greeting → button → loading icon. The React button
  // is portaled into that anchor. A short poll re-inserts the anchor if a
  // CopilotKit re-render drops it. Visual only.
  useEffect(() => {
    if (setup.phase !== "interview") {
      kickoffFiredRef.current = false
      document.getElementById("eps-upload-anchor")?.remove()
      setUploadAnchor(null)
      return
    }
    let cancelled = false
    const anchor = document.createElement("div")
    anchor.id = "eps-upload-anchor"
    anchor.style.width = "100%"
    const place = () => {
      if (cancelled) return
      const p = Array.from(document.querySelectorAll("p")).find((e) =>
        /to get started, answer a couple of questions/i.test(
          e.textContent || ""
        )
      )
      if (!p) return
      // Climb to the greeting's "bubble" = the direct child of One's
      // vertical message column (the flex-col that also holds the loading
      // icon as the next sibling).
      let bubble: HTMLElement = p
      while (
        bubble.parentElement &&
        !/flex flex-col items-start justify-start gap-2/.test(
          (bubble.parentElement.className || "").toString()
        )
      ) {
        bubble = bubble.parentElement
      }
      const col = bubble.parentElement
      if (!col) return
      if (anchor.previousElementSibling !== bubble || anchor.parentElement !== col) {
        col.insertBefore(anchor, bubble.nextSibling)
      }
      setUploadAnchor((prev) => (prev === anchor ? prev : anchor))
    }
    place()
    const id = window.setInterval(place, 300)
    return () => {
      cancelled = true
      window.clearInterval(id)
      anchor.remove()
    }
  }, [setup.phase])

  // In co-creation, label the composer's attach (paperclip) button so it
  // reads "Attach your expenses policy". The f0 button lays its content out
  // in an inner `.main` element (flex, items-center, gap-1, its own padding +
  // height). We append the label text INSIDE that `.main`, AFTER the icon, so
  // the button grows naturally into a proper icon+label pill — inheriting the
  // f0 button's own alignment/height/padding (no box-model overrides). Visual
  // only (upload isn't wired). A short poll re-injects it if a chat re-render
  // drops it.
  useEffect(() => {
    const LABEL_ID = "eps-attach-label"
    if (setup.phase !== "cocreation") {
      document.getElementById(LABEL_ID)?.remove()
      return
    }
    let cancelled = false
    const place = () => {
      if (cancelled) return
      if (document.getElementById(LABEL_ID)) return
      const btn = document.querySelector<HTMLElement>(
        'button[aria-label="Attach file"]'
      )
      if (!btn) return
      const main = btn.querySelector<HTMLElement>(".main") ?? btn
      const label = document.createElement("span")
      label.id = LABEL_ID
      label.textContent = "Attach your expenses policy"
      label.style.cssText =
        "font-size:14px;line-height:1;white-space:nowrap;pointer-events:none;"
      main.appendChild(label)
    }
    place()
    const id = window.setInterval(place, 400)
    return () => {
      cancelled = true
      window.clearInterval(id)
      document.getElementById(LABEL_ID)?.remove()
    }
  }, [setup.phase])

  // Keep the interview's conversation visible. The fullscreen chat
  // auto-scrolls its transcript to the BOTTOM on every content change,
  // which pushes One's short lead-in above the fold and leaves a large
  // empty gap above the docked question panel. We scroll the transcript
  // back to the TOP so the lead-in stays visible with the panel below it.
  //
  // This replaces an earlier hack that (a) selected the FIRST scrollable
  // <div> — the left-nav sidebar's Radix viewport, not the chat — so it
  // only ever froze the sidebar, and (b) hard-locked via a scroll listener,
  // which blocked manual scrolling. This version instead (a) targets the
  // real transcript (the `overflow-y-scroll` scroller) and (b) only re-pins
  // on CONTENT changes via a scoped MutationObserver — never on the user's
  // own scroll — so manual scrolling keeps working. During the interview no
  // new transcript content arrives after the lead-in (the question panel is
  // a separate docked element, not part of the transcript), so the observer
  // effectively fires only while the opening messages render.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (setup.phase !== "interview") return
    // The chat transcript is the only scroller f0 styles with the
    // `overflow-y-scroll` utility class; the left-nav sidebar uses a Radix
    // ScrollArea viewport (`size-full snap-none …`, no such class) and other
    // rails use `overflow-y-auto`. So this class match uniquely targets the
    // transcript — no width heuristic (it can briefly measure 0 wide during
    // the fullscreen transition, which a width filter would wrongly skip).
    const findTranscript = (): HTMLElement | null =>
      Array.from(document.querySelectorAll<HTMLElement>("div")).find((el) =>
        el.className.includes("overflow-y-scroll")
      ) ?? null
    let obs: MutationObserver | null = null
    let observed: HTMLElement | null = null
    const toTop = () => {
      const el = findTranscript()
      if (!el) return
      el.scrollTop = 0
      if (el !== observed) {
        obs?.disconnect()
        observed = el
        obs = new MutationObserver(() => {
          if (observed) observed.scrollTop = 0
        })
        obs.observe(el, { childList: true, subtree: true })
      }
    }
    // Catch the fullscreen transition + async panel/message mount, and win
    // the race against the chat's own auto-scroll-to-bottom as it settles.
    const raf = requestAnimationFrame(toTop)
    const timers = [80, 250, 600, 1200].map((ms) =>
      window.setTimeout(toTop, ms)
    )
    return () => {
      cancelAnimationFrame(raf)
      timers.forEach(clearTimeout)
      obs?.disconnect()
    }
  }, [setup.phase])

  // "Settings" is the entrypoint / restart affordance. The module
  // breadcrumb (and any Settings link) points at `?restart=1`; landing
  // here with that flag resets the flow back to the empty-state landing
  // and strips the param. Clicking it from within co-creation restarts
  // the whole prototype.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (searchParams.get("restart") === "1") {
      const next = new URLSearchParams(searchParams)
      next.delete("restart")
      setSearchParams(next, { replace: true })
      navCompletion.reset()
      goToPhase("empty")
    }
  }, [searchParams])

  // Hard refresh always lands on the forms-summary card view
  // (handoff §2.3). Without this, a refresh from a `?view=forms-detail`
  // URL keeps the user on the deep-linked sub-screen, which is
  // disorienting for a wizard-style prototype where the summary is
  // the canonical entry point. Fires exactly once on mount; in-app
  // `setView` calls afterwards stick as normal.
  //
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setView({ kind: "forms-summary" })
  }, [])

  useExposeContext({
    activeNavId,
    rows: formsSource.rowsByForm.regular,
    view,
    categories: policyData.categories,
    subcategories: policyData.subcategories,
    paymentMethods: policyData.paymentMethods,
    rates: policyData.rates,
    approvalFlows: policyData.approvalFlows,
    users: policyData.users,
    entities: policyData.entities,
    wizard,
    setupAnswers: setupState.answers,
    certificationEntities: certificationData.entities,
    policyRules,
  })

  // One drives the URL: agent can switch sub-views by name (handler
  // action). Auto-opener removed (2026-05): sendMessage on mount was
  // racing CopilotKit's bridge wire-up and the message never landed
  // (silent no-op for 15s + bridge-never-wired timeout). Instead, the
  // chat opens empty on mount and the user kicks the conversation
  // off via the standard chat composer OR by clicking the in-canvas
  // "Set up Regular form" CTA (useStartSetupAction) which posts the
  // first user message — by then the bridge is reliably wired.
  useNavigateToViewAction({ setView })
  // Handoff CTA emitted by FormsSummaryView when all three forms
  // are marked ready — flips activeNavId to "approval-flows".
  useGoToApprovalFlowsAction({ setActiveNavId })
  useStartSetupAction({ setView })
  // Renders the interview welcome widget (drop zone + "Skip and start
  // guided setup") when the empty-state "Get started" CTA appends the
  // welcome turn. The button posts a user message that wakes the skill.
  useInterviewWelcomeAction()
  // Setup intro — posts the single clean landing greeting (resets the
  // chat). The page-by-page guided walkthrough was removed; co-creation
  // now happens on demand (Edit buttons / free text), not via a tour.
  const { postGreeting } = useGuidedTour({ setActiveNavId })
  // The single apply step of the interview: One calls this once after
  // the user submits the 5-step question; it maps answers → policy
  // state and runs the generating → editor transition.
  useApplyInterviewAnswersAction({
    policyData,
    formsSource,
    setupState,
    onComplete: enterEditorWithLoading,
  })
  // When the editor (cocreation) is entered, RESET the chat to the one
  // clean intro greeting — ONCE per page load. We first wait for One's
  // turn to go idle (it may still be streaming the recap we told it not
  // to write); resetting only after idle means the greeting sticks
  // instead of being overwritten by a late stream. Reaching cocreation by
  // any route (interview or a direct load) triggers this, so the greeting
  // is reliable and One always greets proactively.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (setup.phase !== "cocreation") return
    // The INTERVIEW route's closing message is now posted by the skill
    // itself (a real agent turn, so it renders reliably — `appendMessages`
    // here was getting dropped right after the interview). Only the
    // "Use defaults" route (no agent turn) needs the prototype to seed a
    // greeting, so skip this effect entirely for the interview route.
    let route: "interview" | "defaults" = "interview"
    try {
      if (window.localStorage.getItem(SETUP_ROUTE_KEY) === "defaults") {
        route = "defaults"
      }
    } catch {
      // best-effort
    }
    if (route !== "defaults") return
    if (greetedRef.current) return
    greetedRef.current = true
    let lastText = ""
    let stable = 0
    let elapsed = 0
    const STEP = 300
    const MIN = 300
    const MAX = 8000
    const tick = () => {
      elapsed += STEP
      const txt = document.body.innerText || ""
      const thinking = /Thinking/i.test(txt)
      if (txt === lastText && !thinking) stable++
      else stable = 0
      lastText = txt
      if ((stable >= 2 && !thinking && elapsed >= MIN) || elapsed >= MAX) {
        postGreeting("defaults")
        return
      }
      window.setTimeout(tick, STEP)
    }
    window.setTimeout(tick, STEP)
  }, [setup.phase])
  // Co-creation actions: 3 silent cascade applies (Q1/Q2/Q3) +
  // inline summary card render with Looks-good / Make-changes CTAs.
  // The Mastra `expensePolicySetup` skill (see
  // `factorial-agent-skill.md` next to this file) drives the script
  // and calls these tools in sequence.
  useExpensePolicySetupActions({ policyData, formsSource, setupState })
  // Approval-flow edit actions — exposed unconditionally so the
  // agent can drive changes via chat from anywhere on the page
  // (the user might describe a flow change while still configuring
  // Expense types, and we want the agent to be able to apply it).
  useApprovalFlowActions({ policyData })
  // Co-creation for the approval WORKFLOW document — One regenerates the
  // whole { steps: [...] } JSON and we render it on the Approval flows
  // screen (the real product's co-creation pattern).
  useSetApprovalWorkflowAction({ policyData })
  useExpenseTypesActions({ policyData })
  // Co-creation for the Policy-rules sections (meals/travel/reimbursements/
  // receipts/exceptions): the generic setPolicyRule tool so One can
  // actually mutate those fields when the user clicks a card's Edit.
  usePolicyRulesActions({ rules: policyRules })
  useRenderRegularSummaryAction({
    setupState,
    onLooksGood: () => {
      // Post a user message so the agent advances. The skill's prompt
      // listens for this and replies by calling completeSubStep.
      appendMessages(
        [{ role: "user", content: "Looks good — let's continue." }],
        { persist: false }
      )
    },
    onMakeChanges: () => {
      appendMessages(
        [
          {
            role: "user",
            content:
              "I want to change one of my answers. Which question can I re-open?",
          },
        ],
        { persist: false }
      )
    },
  })
  // Free text + co-creation (2026-05): the composer is ALWAYS
  // available now. The old `useHideChatComposer()` that hid the
  // textarea (wizard-only, CTA-driven) is gone — the admin types
  // whatever they want and One co-creates. Guided guardrails may
  // come back later, gated so they never force the rails.
  // Override the default "New conversation" header text with a
  // wizard-specific name so the chat reads like a named flow.
  useChatTitle("Expenses setup")

  // Hard-signal wizard completion: the agent calls `completeStep` /
  // `completeSubStep` when each step is finished. Sequencing is
  // enforced in the handler (refuses to mark a later step done while
  // earlier ones are still open), independent of the system prompt.
  useWizardCompletionActions({ wizard })

  // Certified-documents context + the mocked One conversation
  // orchestrator. Calling these unconditionally (outside the
  // `activeNavId` switch) keeps the agent aware of the step's state
  // from anywhere in the policy, so the orchestrator can deep-link
  // even if the user is still on the Expense forms step.
  useExposeCertificationContext({ entities: certificationData.entities })
  useCertifiedDocsConvoAction({ certificationData })
  useEnableCertificationAction({ certificationData })

  // The mocked conversation is triggered by appending an assistant
  // message whose `toolCalls[0].function.name === "certifiedDocsConvo"`
  // — that's the action name registered above. The action's `render`
  // then paints the full mocked transcript (welcome, suggestion chips,
  // consent panel, success alert) inline in the chat.
  //
  // We only fire this ONCE per session: a ref guards against
  // re-triggering when the user navigates away and back to the step.
  // If the admin wants to "start over" they can refresh the page —
  // that matches the throwaway nature of a visual-only prototype.
  //
  // DISABLED (2026-05): the One co-creation flow is parked while we
  // re-evaluate the runtime. We still register the action, expose the
  // step context, and keep the orchestrator wired so navigating to
  // Certified documents doesn't auto-open the chat or paint the
  // welcome bubble. Re-enable by un-commenting the effect below.
  // const convoTriggeredRef = useRef(false)
  // useEffect(() => {
  //   if (activeNavId !== "certified-documents") return
  //   if (convoTriggeredRef.current) {
  //     // Already running — just re-open the chat panel so the
  //     // conversation is visible. The orchestrator state persists
  //     // across hide/show.
  //     setOpen(true)
  //     return
  //   }
  //   convoTriggeredRef.current = true
  //   setOpen(true)
  //   appendMessages(
  //     [
  //       {
  //         role: "assistant",
  //         content: "",
  //         toolCalls: [
  //           {
  //             id: "certified-docs-convo",
  //             function: {
  //               name: "certifiedDocsConvo",
  //               arguments: "{}",
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //     { persist: false }
  //   )
  // }, [activeNavId, appendMessages, setOpen])

  // Module breadcrumb header — shared across every phase.
  const moduleHeader = (
    <PageHeader
      module={{
        id: "settings",
        name: "Settings",
        // Clicking "Settings" restarts the prototype back to the
        // empty-state landing (consumed by the restart effect above).
        href: "/p/expense-policy-settings?restart=1",
      }}
      breadcrumbs={[{ id: "expenses", label: "Expenses" }]}
      actions={[
        {
          label: "Expenses settings",
          icon: Settings,
          onClick: () => {},
        },
      ]}
    />
  )

  // Front-of-funnel phases render a minimal shell: module header only
  // (no sub-header, no left nav). During the interview the fullscreen
  // chat covers the canvas, so we paint a quiet skeleton behind it.
  if (setup.phase !== "cocreation") {
    return (
      <Page header={moduleHeader}>
        <StandardLayout>
          {setup.phase === "empty" ? (
            <EmptyStateView
              onUseDefaults={startWithDefaults}
              onDescribe={startInterview}
            />
          ) : (
            <GeneratingPolicyView showProgress={setup.phase === "generating"} />
          )}
        </StandardLayout>
        {/* Agent-less demo build: the interview runs as a frontend overlay
            that drives the real clarifying panel (no Mastra needed). On
            localhost the skill drives the chat instead, so this is inert. */}
        {isDemoMode() && setup.phase === "interview" && (
          <DemoInterview
            deps={{ policyData, formsSource, setupState }}
            onComplete={enterEditorWithLoading}
          />
        )}
        {/* "Upload supporting docs" affordance for the live-agent interview,
            portaled IN FLOW into One's message column (see the placing
            effect) so it sits between the greeting and the loading icon and
            reflows the icon down rather than covering it. Visual only. */}
        {!isDemoMode() &&
          setup.phase === "interview" &&
          uploadAnchor &&
          createPortal(
            <div style={{ display: "flex", paddingTop: 2 }}>
              <F0Button
                variant="outline"
                size="md"
                label="Attach your expenses policy"
                icon={Paperclip}
                onClick={() => {}}
              />
            </div>,
            uploadAnchor
          )}
      </Page>
    )
  }

  return (
    <Page
      header={
        <>
          {moduleHeader}
          {/* Tight bottom stroke directly under the ResourceHeader.
              Placed inside the Page header slot (not inside
              StandardLayout) so it sits flush with the bottom of the
              header row — matching the visual gap between the
              PageHeader actions and the ResourceHeader actions above.
              Spans the full page width including under the left nav,
              forming a clean T-junction with the nav's right border. */}
          <F0Box borderBottom="default" borderColor="secondary">
            <ExpensePolicyHeader />
          </F0Box>
        </>
      }
    >
      <StandardLayout>
        <F0Box
          display="flex"
          flexDirection="row"
          gap="lg"
          alignItems="stretch"
        >
          <LeftNavPane
            activeId={activeNavId}
            isComplete={navCompletion.isComplete}
            onSelect={(nextNavId) => {
              // Selecting a left-nav entry must reset the view URL,
              // otherwise a sub-view query string left over from the
              // previous section (e.g. `?view=flow-detail&flow=…`
              // from Approval flows) bleeds into the newly-active
              // nav. The router's switch on `view.kind` only handles
              // the kinds belonging to the *active* nav, so a stale
              // `flow-detail` view under `expense-forms` falls
              // through and the canvas renders blank. Resetting to
              // `forms-summary` here is safe regardless of which nav
              // we're switching to: every section treats an empty
              // URL as "show the landing", and `setView` writes
              // `setParams({})` for the summary kind.
              if (nextNavId !== activeNavId) {
                setView({ kind: "forms-summary" })
                // Mark the section we're leaving as "gone through" — it
                // flips to a green check in the rail. Revisiting keeps it
                // checked (the user can still edit a done section).
                navCompletion.markComplete(activeNavId)
              }
              setActiveNavId(nextNavId)
            }}
          />
          <F0Box
            display="flex"
            flexDirection="column"
            grow
            gap="sm"
            minWidth="0"
            paddingLeft="2xl"
          >
            {/* In-canvas breadcrumb above every sub-view, including
                the summary landings. Confirmed with PM: keeps the
                wayfinding consistent across Expense types, Approval
                flows, and Certified documents. The leaf segment
                doubles as the section heading, so none of the
                landings render their own H1 in the body. */}
            {/* Section icon tile — the same tinted glyph treatment the
                policy-rules HeroBlocks have, so the core pages (whose
                title is the breadcrumb leaf) read consistently. Shown
                only on the section root (not when drilled into a
                forms-/flow-detail sub-view). */}
            {view.kind === "forms-summary" &&
              CORE_SECTION_ICON[activeNavId as keyof typeof CORE_SECTION_ICON] && (
                <SectionIconTile
                  {...CORE_SECTION_ICON[
                    activeNavId as keyof typeof CORE_SECTION_ICON
                  ]}
                />
              )}
            {(activeNavId === "expense-forms" ||
              activeNavId === "approval-flows" ||
              activeNavId === "certified-documents") && (
              <BreadcrumbBar
                nav={activeNavId}
                view={view}
                flowName={
                  view.kind === "flow-detail"
                    ? policyData.approvalFlows.find(
                        (f) => f.id === view.flowId
                      )?.name
                    : undefined
                }
              />
            )}

            {activeNavId === "expense-forms" ? (
              renderExpenseFormsView(view, {
                policyData,
                formsSource,
                wizard,
              })
            ) : activeNavId === "certified-documents" ? (
              <CertifiedDocumentsSection
                certificationData={certificationData}
                onRequestAuthorize={(entityId) => {
                  // DISABLED (2026-05): the One-chat consent path is
                  // parked. The original handler opened the chat and
                  // jumped the orchestrator to the consent turn for
                  // the entity (kept below, commented, so we can
                  // restore it when the runtime is sorted). For now
                  // we flip the entity straight to `active` so the
                  // button stays useful — admins see the card update
                  // to "Authorized {date}" immediately. Re-enable the
                  // chat path by un-commenting the original branch
                  // and removing the direct call.
                  const entity = certificationData.entities.find(
                    (e) => e.id === entityId
                  )
                  if (!entity) return
                  if (entity.certificationStatus === "active") return
                  certificationData.authorizeEntity(entityId)
                  // setOpen(true)
                  // certificationData.setConvoTurn({
                  //   kind: "authorize-consent",
                  //   entityId,
                  // })
                }}
              />
            ) : activeNavId === "approval-flows" ? (
              // Approval workflow — a single workflow rendered as an
              // ordered WHEN→THEN rule list (first match wins, default
              // pinned last). Edits are co-creation-first: add/edit
              // hand off to One, which mutates the same state live.
              <ApprovalWorkflowView policyData={policyData} />
            ) : activeNavId === "policy-meals" ? (
              <MealsView rules={policyRules} />
            ) : activeNavId === "policy-travel" ? (
              <TravelView rules={policyRules} />
            ) : activeNavId === "policy-reimbursements" ? (
              <ReimbursementsView rules={policyRules} />
            ) : activeNavId === "policy-receipts" ? (
              <ReceiptsView rules={policyRules} />
            ) : activeNavId === "policy-exceptions" ? (
              <ExceptionsView rules={policyRules} />
            ) : isPolicyRuleNav(activeNavId) ? (
              // Policy rules placeholder. Each entry under the
              // "Policy rules" section in the left nav (Meals &
              // hospitality, Travel, Reimbursements, Receipts &
              // evidence, Exceptions) renders this shared canvas
              // until the real surface ships. The label is looked
              // up from the nav config so adding a new rule entry
              // is a single edit in `navConfig.ts` — this branch
              // requires no changes. We render an inline H1 (the
              // breadcrumb intentionally `return null`s for these
              // navs so policy-rules pages don't claim the breadcrumb
              // wayfinding the three core sections share).
              <PolicyRulePlaceholder navId={activeNavId} />
            ) : (
              <F0Box
                display="flex"
                flexDirection="column"
                gap="sm"
                padding="lg"
                background="secondary"
                borderRadius="md"
              >
                <F0Text
                  content="This section is out of scope for the current prototype."
                  variant="description"
                />
              </F0Box>
            )}
          </F0Box>
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

/**
 * Render the active sub-view inside the "Expense forms" pane.
 *
 * Pulled out of the main component as a plain function so the JSX of
 * `ExpensePolicySettings` stays scannable. All view-specific props
 * are passed in via the `context` argument — no hidden coupling.
 *
 * The `forms-summary` view (handoff §2.3) is the new wizard landing:
 * three cards showing the status of Regular / Per diem / Mileage.
 * Clicking a non-locked card drills into `forms-detail` for that
 * form type, which (slice 1) renders the existing
 * `ExpenseFormsSection` for ALL types — the per-form parameterized
 * field source is on the slice-2 list.
 */
function renderExpenseFormsView(
  view: PolicyView,
  context: {
    policyData: ReturnType<typeof usePolicyData>
    formsSource: ReturnType<typeof useExpenseFormsSource>
    wizard: ReturnType<typeof useWizardState>
  }
) {
  // The Expense forms tab is now a single-view surface. The
  // historical `forms-detail` URL branch is gone \u2014 each form's
  // Configure / Preview lifecycle is owned locally by its card
  // inside `FormsSummaryView`. We render the summary view for any
  // value of `view` to keep deep links pointing at the old detail
  // URL from painting a blank canvas.
  void view
  return (
    <FormsSummaryView
      rowsByForm={context.formsSource.rowsByForm}
      status={context.wizard.formSubStatus}
      expenseGroupsEnabled={context.policyData.expenseGroupsEnabled}
      onToggleExpenseGroups={context.policyData.setExpenseGroupsEnabled}
      policyData={context.policyData}
      formsSource={context.formsSource}
    />
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Policy rules placeholder — shared "coming soon" canvas.
 *
 * Mounted for every entry in the left nav's "Policy rules" section
 * until each surface gets its own designed view. We resolve the
 * label from the nav config (single source of truth) so adding a
 * new policy rule entry doesn't require touching this component.
 *
 * Visual: inline H1 (no breadcrumb wayfinding — by design, see the
 * BreadcrumbBar `return null` branch for non-core navs) + a soft
 * placeholder card explaining the surface is forthcoming. Same
 * chrome as the table containers elsewhere in the prototype so the
 * page doesn't read as broken.
 * ──────────────────────────────────────────────────────────────────── */

function PolicyRulePlaceholder(props: { navId: NavEntryId }) {
  const entry = policyRulesSection.entries.find((e) => e.id === props.navId)
  const label = entry?.label ?? "Policy rule"

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading content={label} variant="heading-large" as="h1" />
        <F0Text
          content={`${label} configuration is coming soon. We'll design this surface in a follow-up pass.`}
          variant="description"
        />
      </F0Box>

      <F0Box
        display="flex"
        flexDirection="column"
        gap="md"
        border="default"
        borderColor="secondary"
        borderRadius="md"
        background="primary"
        padding="2xl"
        alignItems="center"
      >
        <F0Text
          content="No configuration available yet."
          variant="description"
        />
      </F0Box>
    </F0Box>
  )
}
