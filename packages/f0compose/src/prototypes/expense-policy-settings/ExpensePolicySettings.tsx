import { F0Box, F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
} from "@factorialco/f0-react/dist/experimental"
import { Settings } from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"

import { useAiChat } from "@/copilot"

import { CertifiedDocumentsSection } from "./certified-documents/CertifiedDocumentsSection"
import { useCertifiedDocsConvoAction } from "./certified-documents/copilot/useCertifiedDocsConvoAction"
import { useExposeCertificationContext } from "./certified-documents/copilot/useExposeCertificationContext"
import { useCertificationData } from "./certified-documents/useCertificationData"
import { useCoCreationOpenerAction } from "./copilot/useCoCreationOpenerAction"
import { useExposeContext } from "./copilot/useExposeContext"
import { useExpensePolicySetup } from "./copilot/useExpensePolicySetup"
import { useExpensePolicySetupActions } from "./copilot/useExpensePolicySetupActions"
import { useHideChatComposer } from "./copilot/useHideChatComposer"
import { useChatTitle } from "./copilot/useChatTitle"
import { useNavigateToViewAction } from "./copilot/useNavigateToViewAction"
import { useRenderRegularSummaryAction } from "./copilot/useRenderRegularSummaryAction"
import { useStartSetupAction } from "./copilot/useStartSetupAction"
import { usePolicyData } from "./data/usePolicyData"
import { ExpensePolicyHeader } from "./header/ExpensePolicyHeader"
import { ExpenseFormsSection } from "./forms/ExpenseFormsSection"
import { useExpenseFormsSource } from "./forms/useExpenseFormsSource"
import { LeftNavPane } from "./nav/LeftNavPane"
import type { NavEntryId } from "./nav/navConfig"
import type { PrototypeMeta } from "../types"
import { BreadcrumbBar } from "./views/BreadcrumbBar"
import { usePolicyView, type PolicyView } from "./views/viewRouter"
import { FormsSummaryView } from "./wizard/FormsSummaryView"
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
  const formsSource = useExpenseFormsSource()
  const policyData = usePolicyData()
  const certificationData = useCertificationData()
  const wizard = useWizardState()
  const { view, setView } = usePolicyView()
  const { setOpen, appendMessages } = useAiChat()
  const setupState = useExpensePolicySetup()

  useExposeContext({
    activeNavId,
    rows: formsSource.rows,
    view,
    categories: policyData.categories,
    subcategories: policyData.subcategories,
    paymentMethods: policyData.paymentMethods,
    wizard,
    setupAnswers: setupState.answers,
  })

  // One drives the URL: agent can switch sub-views by name (handler
  // action). The co-creation opener fires once on mount and seeds a
  // welcome + single-option ClarifyingQuestion ("Start configuring
  // Regular expenses"). The sequential wizard model means there's
  // no branch picker — every step has exactly one next action.
  useNavigateToViewAction({ setView })
  useStartSetupAction({ setView })
  useCoCreationOpenerAction()
  // Co-creation actions: 3 silent cascade applies (Q1/Q2/Q3) +
  // inline summary card render with Looks-good / Make-changes CTAs.
  // The Mastra `expensePolicySetup` skill (see
  // `factorial-agent-skill.md` next to this file) drives the script
  // and calls these tools in sequence.
  useExpensePolicySetupActions({ policyData, formsSource, setupState })
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
  // Wizard-driven flow: the user only progresses via the CTAs the
  // agent renders. Free-form typing is intentionally disabled (the
  // Mastra agent isn't a general assistant here — it's a scripted
  // co-creator). The hook hides the composer via a scoped CSS
  // injection; see `useHideChatComposer` for why we can't do this
  // via a public F0AiChat prop.
  useHideChatComposer()
  // Override the default "New conversation" header text with a
  // wizard-specific name so the chat reads like a named flow.
  useChatTitle("Set up expense policy")

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
  const convoTriggeredRef = useRef(false)
  useEffect(() => {
    if (activeNavId !== "certified-documents") return
    if (convoTriggeredRef.current) {
      // Already running — just re-open the chat panel so the
      // conversation is visible. The orchestrator state persists
      // across hide/show.
      setOpen(true)
      return
    }
    convoTriggeredRef.current = true
    setOpen(true)
    appendMessages(
      [
        {
          role: "assistant",
          content: "",
          toolCalls: [
            {
              id: "certified-docs-convo",
              function: {
                name: "certifiedDocsConvo",
                arguments: "{}",
              },
            },
          ],
        },
      ],
      { persist: false }
    )
  }, [activeNavId, appendMessages, setOpen])

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "settings",
              name: "Settings",
              href: "/p/expense-policy-settings",
            }}
            breadcrumbs={[{ id: "expenses", label: "Expenses" }]}
            actions={[
              {
                label: "Policy settings",
                icon: Settings,
                onClick: () => {},
              },
            ]}
          />
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
          <LeftNavPane activeId={activeNavId} onSelect={setActiveNavId} />
          <F0Box
            display="flex"
            flexDirection="column"
            grow
            gap="md"
            minWidth="0"
            paddingLeft="2xl"
          >
            {/* In-canvas breadcrumb above every sub-view, including
                the root forms view. Confirmed with PM: keeps the
                wayfinding consistent. */}
            {activeNavId === "expense-forms" && (
              <BreadcrumbBar view={view} />
            )}

            {activeNavId === "expense-forms" ? (
              renderExpenseFormsView(view, {
                policyData,
                formsSource,
                wizard,
                onDrillToFormDetail: (formType) =>
                  setView({ kind: "forms-detail", formType }),
              })
            ) : activeNavId === "certified-documents" ? (
              <CertifiedDocumentsSection
                certificationData={certificationData}
                onRequestAuthorize={(entityId) => {
                  // The "Enable certification" card button doesn't open
                  // a modal — it hands the request off to the mocked
                  // One conversation. We open the chat panel and jump
                  // the orchestrator straight to the consent turn for
                  // the entity the admin clicked, skipping the welcome
                  // bubble. The orchestrator's `render` re-runs and
                  // paints the consent panel inline.
                  const entity = certificationData.entities.find(
                    (e) => e.id === entityId
                  )
                  if (!entity) return
                  if (entity.certificationStatus === "active") return
                  setOpen(true)
                  certificationData.setConvoTurn({
                    kind: "authorize-consent",
                    entityId,
                  })
                }}
              />
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
    onDrillToFormDetail: (
      formType: ReturnType<typeof useWizardState>["currentFormSubStep"]
    ) => void
  }
) {
  switch (view.kind) {
    case "forms-summary":
      return (
        <FormsSummaryView
          regularRows={context.formsSource.rows}
          status={context.wizard.formSubStatus}
          onDrill={context.onDrillToFormDetail}
        />
      )
    case "forms-detail":
      // Slice 1: every form type renders the same Regular-shaped
      // editor. Slice 2 parameterizes `useExpenseFormsSource(formType)`
      // so each type has its own field set.
      return <ExpenseFormsSection policyData={context.policyData} />
  }
}
