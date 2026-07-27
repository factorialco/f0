# Submit-with-One — surface timing & orchestration spec

How the three "Submit with One" entry points in My spending are timed so a
user is nudged, not bombarded. Dev-facing; pairs with the walkthrough video.

## The three surfaces = three jobs on a funnel

| Surface | Job | Trigger / placement | Lifecycle |
|---|---|---|---|
| **4th dropdown item** ("Submit with One") | Durable home | Inside the **New expense** dropdown | **Always present.** Never dismissed, never times out. Zero interruption — only seen when the user deliberately opens the menu. |
| **Big banner** (above the table) | First **discovery** | Top of Submit list | Loudest, **shortest-lived.** Retires on the FIRST of: **engage (click Submit with One)** · dismiss · first One use · impression cap · time cap. |
| **Inline callout** (expense detail) | Catch the pain **in context** | On a To‑Do draft being assembled | **Context-gated + backs off.** Shows on its own screen (the detail page); hides on **engage (click Add with One)** or dismiss; re-surfaces only on a fresh relevance signal. |

## Two golden rules

1. **Engagement and success both retire.** Clicking a promo's CTA
   (Submit / Add with One) retires **that** promo immediately — One takes over
   in the chat, so the nudge is redundant. And once One has actually created an
   expense, **all** promos switch off everywhere, for good. (The dropdown item
   always stays.)
2. **One promo per screen.** The banner lives on the list, the callout on the
   expense detail page — they're never on the same screen, so they can't
   stack. No sequencing needed; each shows independently in its own place.

## Display logic

Inputs (per user):
- `hasUsedOne` — has One ever created an expense for this user
- `bannerDismissed`, `bannerImpressions`
- `calloutDismissCount`, `calloutLastShownAt`
- `context` — is the user assembling a To‑Do draft right now

Rules:
```
dropdownItem   = always
showBanner     = !hasUsedOne
              && !bannerDismissed
              && bannerImpressions < IMPRESSION_CAP   // e.g. 3
              && withinTimeWindow()                   // e.g. first 2 weeks
showCallout    = !hasUsedOne
              && context == "todo-draft"               // its own screen; independent of the banner
              && !recentlyDismissed(calloutLastShownAt, BACKOFF)
              && calloutDismissCount < CALLOUT_CAP     // e.g. 2
```
Callout **re-surface** signal (so a single dismiss doesn't kill it forever):
only when there's a genuine multi-receipt moment — e.g. the user created **3+
drafts within a short window**. Not on every visit.

## What the prototype demonstrates today

Session-scoped slice of the above (no per-user persistence, no impression/time
caps), enough to show the orchestration on camera:

- The dropdown item, banner CTA and in-expense nudge all **invite** ("sure,
  drop your receipts here") — they don't fabricate a draft from a click.
- Clicking a CTA also **closes that promo** (the banner on Submit / Add, the
  callout on Add with One) — engagement retires it. (Rule 1.)
- `hasUsedOne` is **derived** from "One actually created a draft"
  (`useChatDrafts().length > 0`), which happens on the real create path
  (type "create an expense from this receipt" / drop one).
- Once One creates a draft → **banner + callout both disappear** everywhere. (Rule 1.)
- Open a To‑Do draft → the inline callout shows there, independent of the banner (different screen). (Rule 2.)
- Dismiss the callout → it stays hidden for the session.

Code: `copilot/oneNudgeStore.ts` (flags) · `copilot/useOnePromo.ts` (the rules) ·
consumed by `submit/SubmitExpensesTab.tsx` (banner) and
`shared/detail/ExpenseDetailPage.tsx` (callout).

## For production (what's stubbed here)

- Persist the inputs **per user** (not session): `hasUsedOne`, `bannerDismissed`,
  `bannerImpressions`, `calloutDismissCount`, `calloutLastShownAt`.
- Add the **impression cap + time window** on the banner.
- Add the **back-off + re-surface signal** on the callout.
- Decide the exact constants (`IMPRESSION_CAP`, `CALLOUT_CAP`, `BACKOFF`,
  time window) with growth/analytics.
