import { F0Alert, F0Box, F0Button, F0Text } from "@factorialco/f0-react"

import { useCopilotAction } from "@/copilot"

import { countryCopy, regimeCopy } from "../seeds"
import type { Entity } from "../types"
import type {
  CertificationData,
  ConvoTurn,
} from "../useCertificationData"

/**
 * Mocked conversation orchestrator for the Certified documents step.
 *
 * The prototype has no live agent connection, so the "chat" is a
 * scripted state machine rendered inside a single CopilotKit action.
 * The action is triggered by appending an assistant message with a
 * `toolCalls` entry whose name matches this action — see
 * `ExpensePolicySettings` for the trigger.
 *
 * The conversation cursor (`convoTurn`) lives in `useCertificationData`
 * so external callers (e.g. the "Enable certification" card CTA) can
 * deep-link to a specific turn — for example, jump straight to the
 * consent panel for the entity the user clicked.
 *
 * Conversation shape (Claude-style follow-up suggestions, not free
 * text):
 *  - turn "welcome": One greets the admin, lists the entities not yet
 *    authorized, ends with suggestion buttons (one per entity + a
 *    "Tell me more" option).
 *  - turn "regime-explainer-{entityId}": after "Tell me more", One
 *    explains the regime in plain English, ends with "Authorize {entity}"
 *    + "Back to list" buttons.
 *  - turn "authorize-consent-{entityId}": consent panel with regime
 *    legal blurb, Authorize / Cancel buttons.
 *  - turn "authorize-done-{entityId}": success alert + suggestion
 *    buttons for the next unauthorized entity.
 *  - turn "all-done": friendly wrap-up when every entity is authorized.
 *  - turn "cancelled-{entityId}": dismissed-consent acknowledgement,
 *    buttons to retry or move on.
 */

function ConvoOrchestrator(props: {
  certificationData: CertificationData
}) {
  const { entities, convoTurn, setConvoTurn } = props.certificationData

  const inactive = entities.filter((e) => e.certificationStatus === "inactive")
  const active = entities.filter((e) => e.certificationStatus === "active")

  // Auto-advance to all-done once every entity is authorized. This is
  // a derived state, NOT a turn the user picks — keeps the bubble in
  // sync with the cards.
  const effectiveTurn: ConvoTurn =
    inactive.length === 0 &&
    (convoTurn.kind === "welcome" ||
      convoTurn.kind === "authorize-done" ||
      convoTurn.kind === "cancelled")
      ? { kind: "all-done" }
      : convoTurn

  switch (effectiveTurn.kind) {
    case "welcome":
      return (
        <WelcomeTurn
          inactive={inactive}
          active={active}
          onPickEntity={(entityId) =>
            setConvoTurn({ kind: "authorize-consent", entityId })
          }
          onAskExplainer={(entityId) =>
            setConvoTurn({ kind: "regime-explainer", entityId })
          }
        />
      )

    case "regime-explainer": {
      const entity = entities.find((e) => e.id === effectiveTurn.entityId)
      if (!entity) return null
      return (
        <RegimeExplainerTurn
          entity={entity}
          onAuthorize={() =>
            setConvoTurn({
              kind: "authorize-consent",
              entityId: effectiveTurn.entityId,
            })
          }
          onBack={() => setConvoTurn({ kind: "welcome" })}
        />
      )
    }

    case "authorize-consent": {
      const entity = entities.find((e) => e.id === effectiveTurn.entityId)
      if (!entity) return null
      // Defensive: if the agent re-triggers consent for an entity that
      // is already active (e.g. fast double-click on the card), skip
      // straight to the done state.
      if (entity.certificationStatus === "active") {
        return (
          <AuthorizeDoneTurn
            entity={entity}
            remainingInactive={inactive}
            onPickEntity={(entityId) =>
              setConvoTurn({ kind: "authorize-consent", entityId })
            }
          />
        )
      }
      return (
        <AuthorizeConsentTurn
          entity={entity}
          onAuthorize={() => {
            props.certificationData.authorizeEntity(entity.id)
            setConvoTurn({ kind: "authorize-done", entityId: entity.id })
          }}
          onCancel={() =>
            setConvoTurn({ kind: "cancelled", entityId: effectiveTurn.entityId })
          }
        />
      )
    }

    case "authorize-done": {
      const entity = entities.find((e) => e.id === effectiveTurn.entityId)
      if (!entity) return null
      return (
        <AuthorizeDoneTurn
          entity={entity}
          remainingInactive={inactive}
          onPickEntity={(entityId) =>
            setConvoTurn({ kind: "authorize-consent", entityId })
          }
        />
      )
    }

    case "cancelled": {
      const entity = entities.find((e) => e.id === effectiveTurn.entityId)
      if (!entity) return null
      return (
        <CancelledTurn
          entity={entity}
          remainingInactive={inactive}
          onRetry={() =>
            setConvoTurn({
              kind: "authorize-consent",
              entityId: effectiveTurn.entityId,
            })
          }
          onPickAnother={(entityId) =>
            setConvoTurn({ kind: "authorize-consent", entityId })
          }
        />
      )
    }

    case "all-done":
      return <AllDoneTurn entities={entities} />
  }
}

/* ────────────────────────────────────────────────────────────────────
 * Turn renderers — each one is a single chat bubble with its
 * suggestion buttons. They never own state; the parent orchestrator
 * holds the conversation cursor.
 * ──────────────────────────────────────────────────────────────────── */

function WelcomeTurn(props: {
  inactive: Entity[]
  active: Entity[]
  onPickEntity: (entityId: string) => void
  onAskExplainer: (entityId: string) => void
}) {
  const opener =
    props.inactive.length === 3
      ? "You have 3 legal entities that need certification authorization. I can walk you through each one. Where would you like to start?"
      : props.inactive.length === 2
        ? `${props.active.length === 1 ? "Nice — one done." : ""} You still have ${props.inactive.length} entities left. Pick one to continue:`
        : `Almost there — one entity left to authorize:`

  return (
    <Bubble>
      <F0Text content={opener} variant="body" />
      <Suggestions>
        {props.inactive.map((entity) => (
          <SuggestionButton
            key={entity.id}
            label={`Authorize ${entity.legalName}`}
            onClick={() => props.onPickEntity(entity.id)}
          />
        ))}
        {props.inactive[0] && (
          <SuggestionButton
            label={`What does ${regimeCopy[props.inactive[0].regime].name} do?`}
            onClick={() => props.onAskExplainer(props.inactive[0].id)}
            secondary
          />
        )}
      </Suggestions>
    </Bubble>
  )
}

function RegimeExplainerTurn(props: {
  entity: Entity
  onAuthorize: () => void
  onBack: () => void
}) {
  const regime = regimeCopy[props.entity.regime]
  const country = countryCopy[props.entity.country]
  return (
    <Bubble>
      <F0Text content={`${regime.name} — ${country.name}`} variant="label" />
      <F0Text content={regime.summary} variant="body" />
      <F0Text
        content={`Authority: ${regime.authority}. Once authorized, Factorial signs and transmits invoices to them on your behalf for every expense reported against this entity.`}
        variant="description"
      />
      <Suggestions>
        <SuggestionButton
          label={`Authorize ${props.entity.legalName}`}
          onClick={props.onAuthorize}
        />
        <SuggestionButton
          label="Back to list"
          onClick={props.onBack}
          secondary
        />
      </Suggestions>
    </Bubble>
  )
}

function AuthorizeConsentTurn(props: {
  entity: Entity
  onAuthorize: () => void
  onCancel: () => void
}) {
  const regime = regimeCopy[props.entity.regime]
  const country = countryCopy[props.entity.country]
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="md"
      padding="md"
      borderRadius="md"
      border="default"
      borderColor="secondary"
      background="primary"
    >
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Text
          content={`Authorize ${regime.name} certification`}
          variant="label"
        />
        <F0Text
          content={`${country.flag} ${props.entity.legalName}`}
          variant="description"
        />
      </F0Box>
      <F0Text content={regime.legalBlurb} variant="body" />
      <F0Box
        display="flex"
        flexDirection="row"
        gap="sm"
        justifyContent="end"
      >
        <F0Button
          variant="ghost"
          size="sm"
          label="Cancel"
          onClick={props.onCancel}
        />
        <F0Button
          variant="default"
          size="sm"
          label="Authorize"
          onClick={props.onAuthorize}
        />
      </F0Box>
    </F0Box>
  )
}

function AuthorizeDoneTurn(props: {
  entity: Entity
  remainingInactive: Entity[]
  onPickEntity: (entityId: string) => void
}) {
  const regime = regimeCopy[props.entity.regime]
  // remainingInactive includes the just-authorized entity if state
  // hasn't propagated yet; filter defensively.
  const stillToDo = props.remainingInactive.filter(
    (e) => e.id !== props.entity.id
  )

  return (
    <Bubble>
      <F0Alert
        variant="positive"
        title="Authorization complete"
        description={`Factorial is now authorized to certify expense invoices for ${props.entity.legalName} under ${regime.name}.`}
      />
      {stillToDo.length > 0 && (
        <>
          <F0Text
            content={
              stillToDo.length === 1
                ? "One entity left. Want to authorize it now?"
                : `${stillToDo.length} entities left. Which one next?`
            }
            variant="body"
          />
          <Suggestions>
            {stillToDo.map((entity) => (
              <SuggestionButton
                key={entity.id}
                label={`Authorize ${entity.legalName}`}
                onClick={() => props.onPickEntity(entity.id)}
              />
            ))}
          </Suggestions>
        </>
      )}
    </Bubble>
  )
}

function CancelledTurn(props: {
  entity: Entity
  remainingInactive: Entity[]
  onRetry: () => void
  onPickAnother: (entityId: string) => void
}) {
  const others = props.remainingInactive.filter((e) => e.id !== props.entity.id)
  return (
    <Bubble>
      <F0Alert
        variant="info"
        title="Authorization cancelled"
        description={`No changes were made to ${props.entity.legalName}. You can authorize it any time.`}
      />
      <Suggestions>
        <SuggestionButton
          label={`Retry ${props.entity.legalName}`}
          onClick={props.onRetry}
        />
        {others.map((entity) => (
          <SuggestionButton
            key={entity.id}
            label={`Authorize ${entity.legalName} instead`}
            onClick={() => props.onPickAnother(entity.id)}
            secondary
          />
        ))}
      </Suggestions>
    </Bubble>
  )
}

function AllDoneTurn(props: { entities: Entity[] }) {
  return (
    <Bubble>
      <F0Alert
        variant="positive"
        title="All entities authorized"
        description={`Factorial is now certifying invoices for all ${props.entities.length} of your legal entities. Your expense policy setup is complete.`}
      />
    </Bubble>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Primitives — bubble container, suggestion-button row, suggestion
 * button. Pulled out so all turns look identical.
 * ──────────────────────────────────────────────────────────────────── */

function Bubble(props: { children: React.ReactNode }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      {props.children}
    </F0Box>
  )
}

function Suggestions(props: { children: React.ReactNode }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs" alignItems="start">
      {props.children}
    </F0Box>
  )
}

function SuggestionButton(props: {
  label: string
  onClick: () => void
  secondary?: boolean
}) {
  return (
    <F0Button
      variant={props.secondary ? "ghost" : "outline"}
      size="sm"
      label={props.label}
      onClick={props.onClick}
    />
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Action registration.
 * ──────────────────────────────────────────────────────────────────── */

/**
 * Register the `certifiedDocsConvo` orchestrator action. The action
 * has no parameters — its render is the entire mocked conversation.
 * Trigger it once per session by appending an assistant message with
 * a matching `toolCalls[0].function.name` (see
 * `useTriggerCertifiedDocsConvo`).
 */
export function useCertifiedDocsConvoAction(args: {
  certificationData: CertificationData
}): void {
  useCopilotAction({
    name: "certifiedDocsConvo",
    description:
      "Mocked conversation for the Certified documents step of the Expense Policy.",
    available: "frontend",
    parameters: [],
    render: () => (
      <ConvoOrchestrator certificationData={args.certificationData} />
    ),
  })
}
