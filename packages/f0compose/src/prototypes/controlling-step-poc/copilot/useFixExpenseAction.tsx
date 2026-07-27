import { useChatAction } from "@/chat"
import { employees, type Participant } from "@/fixtures"
import { markFieldsFilled } from "@/prototypes/_shared/requiredFields"

import { getChatDrafts, updateChatDraft } from "./chatDraftsStore"
import { getAwaitingFix, setAwaitingFix } from "./chatFocusStore"

/**
 * Fix / out-of-policy troubleshoot — the two hero "answer One's
 * follow-up" beats:
 *
 *   A. Over-limit meal → "was this a shared meal? who attended?" The
 *      user names attendees ("it was a client dinner with Ada and
 *      Marie"); One resolves the names to internal participants, marks
 *      the meal as shared, and CLEARS the `meal-over-limit` alert
 *      (per-person it's now in policy).
 *
 *   B. Missing description → "what was this for?" The user answers
 *      ("client kickoff dinner"); One writes the description, which
 *      clears the required-fields gate.
 *
 * Routing: the matcher fires on the shapes those answers take
 * (shared / attendee / client / dinner / lunch / "it was…"), OR
 * whenever `awaitingFix` is armed (set after One asked the question),
 * so a plain free-text answer still lands here and isn't stolen by a
 * generic matcher. We then pick the right draft from the store
 * (the over-limit one for attendees; the description-less one for a
 * "what for" answer) and patch it.
 */

/** Resolve employee names mentioned in free text → internal participants. */
function resolveParticipants(text: string): Participant[] {
  const lc = text.toLowerCase()
  const matched = employees.filter((e) => {
    const first = (e.preferredName ?? e.fullName.split(" ")[0] ?? "").toLowerCase()
    return first.length >= 3 && lc.includes(first)
  })
  return matched.map((e) => ({
    kind: "internal" as const,
    employeeId: e.id,
    confirmation: "pending" as const,
  }))
}

/** Does the text name at least one real colleague? */
function namesAnEmployee(text: string): boolean {
  return resolveParticipants(text).length > 0
}

/**
 * A "who attended / it was shared" answer. Kept tight: shared-meal
 * vocabulary OR an actual colleague name — NOT the loose "dinner /
 * lunch / client" nouns (those also appear in description answers and
 * would mis-route the missing-description beat).
 */
function looksLikeAttendeeAnswer(text: string): boolean {
  return (
    /\b(shared|share|attend|attendee|attended|participant|colleagues?|guests?|with)\b/i.test(
      text
    ) || namesAnEmployee(text)
  )
}

/** A "what was this for" answer — explicitly fixing the description. */
function looksLikeDescriptionFix(text: string): boolean {
  return /\b(description|it was for|this was for|for the|fix the description|was a)\b/i.test(
    text
  )
}

export function useFixExpenseAction(): void {
  useChatAction({
    name: "fixExpense",
    describe:
      "Answer One's follow-up: fill participants (over-limit meal) or description (missing-field gate).",
    match: (text) => {
      const awaiting = getAwaitingFix()
      if (awaiting) {
        // While armed, claim the user's answer — UNLESS it's clearly a
        // different intent (send / group / new type / explicit edit),
        // which the dedicated actions should still own.
        const otherIntent =
          /\b(send|submit)\b.*\b(approval|review)\b|\bsend (it|them)\b|\b(group|folder|trip)\b|\bmileage|drove|per[- ]?diem\b/i.test(
            text
          )
        return !otherIntent
      }
      // Cold trigger (no armed question): claim clear attendee answers
      // or explicit "fix the description" phrasings.
      return looksLikeAttendeeAnswer(text) || looksLikeDescriptionFix(text)
    },
    run: (text, ctx) => {
      const drafts = getChatDrafts()
      const awaiting = getAwaitingFix()

      const overLimit = drafts.find((d) => d.alerts.includes("meal-over-limit"))
      const missingDesc = drafts.find((d) => !d.description)

      // Decide which beat this message is answering. Armed context
      // wins; otherwise infer from the message shape + remaining work:
      //   - mentions attendees / shared / names  → meal participants
      //   - else, if a description-less draft exists → description
      const wantsDescription =
        awaiting?.field === "description" ||
        (!awaiting &&
          !looksLikeAttendeeAnswer(text) &&
          (looksLikeDescriptionFix(text) || (!overLimit && !!missingDesc)))

      // --- Path B: description answer for the missing-field draft ---
      if (wantsDescription) {
        const draft =
          (awaiting?.field === "description" &&
            drafts.find((d) => d.id === awaiting.draftId)) ||
          missingDesc
        setAwaitingFix(null)
        if (!draft) {
          ctx.reply("That expense isn't around anymore — try dropping it again.")
          return
        }
        // Strip a leading "it was for / this was for" so the stored
        // description reads like a note, not a sentence fragment.
        const description = text
          .replace(/^.*?(it was for|this was for|for the|fix the description[: ]*|description[: ]*)/i, "")
          .trim() || text.trim()
        updateChatDraft(draft.id, { description })
        // Clear the required-fields gate now the description exists.
        markFieldsFilled(draft.id)
        ctx.think("Adding the description…", "Re-checking the required fields…")
        ctx.reply(
          `Got it — I set the description on **${draft.provider}** to ` +
            `“${description}”. That clears the missing-field check, so it's ready to send. ✅`
        )
        return
      }

      // --- Path A: attendees for the over-limit meal -----------------
      const target =
        (awaiting?.field === "participants" &&
          drafts.find((d) => d.id === awaiting.draftId)) ||
        overLimit
      // Hand off to the next follow-up: if a description-less draft is
      // still waiting, arm it so the user's NEXT answer fixes it.
      if (missingDesc && missingDesc.id !== target?.id) {
        setAwaitingFix({ draftId: missingDesc.id, field: "description" })
      } else {
        setAwaitingFix(null)
      }

      if (!target) {
        ctx.reply(
          "I don't see an expense that needs fixing right now. Drop your receipts and I'll flag anything off-policy."
        )
        return
      }

      const participants = resolveParticipants(text)
      ctx.think(
        "Recording the attendees…",
        "Recalculating the per-person amount…",
        "Re-checking against policy…"
      )
      const cleared = target.alerts.filter((a) => a !== "meal-over-limit")
      const headcount = participants.length + 1 // +1 for the owner
      const perPerson = target.amount / headcount
      updateChatDraft(target.id, {
        participants,
        alerts: cleared,
        description:
          target.description && target.description.length > 0
            ? target.description
            : "Shared team meal",
      })

      const names =
        participants.length > 0
          ? participants
              .map((p) => {
                if (p.kind !== "internal") return null
                const e = employees.find((emp) => emp.id === p.employeeId)
                return e?.preferredName ?? e?.fullName ?? null
              })
              .filter(Boolean)
              .join(", ")
          : null

      ctx.reply(
        `Perfect — I marked **${target.provider}** as a shared meal` +
          (names ? ` with **${names}**` : "") +
          `. Split across ${headcount} people that's **€${perPerson.toFixed(2)}/person**, ` +
          `which is back within the limit, so I cleared the flag. ✅\n\n` +
          `Ready to send whenever you are.`
      )
    },
  })
}
