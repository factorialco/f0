import { useSyncExternalStore } from "react"

import { useChatDrafts } from "./useChatDrafts"
import {
  dismissBanner,
  dismissCallout,
  isBannerDismissed,
  isCalloutDismissed,
  subscribeOnePromo,
} from "./oneNudgeStore"

/**
 * Single source of truth for which One *promo* is allowed to show.
 *
 * Encodes the orchestration rules (see ONE_PROMO_TIMING.md):
 *  - GOLDEN RULE 1 — success retires promotion: the moment One has
 *    created an expense (`hasUsedOne`), both promos switch off.
 *  - GOLDEN RULE 2 — one promo per screen: the banner lives on the
 *    list and the callout on the detail page, so they're NEVER on the
 *    same screen — no sequencing needed. Each shows independently in
 *    its own place until dismissed or until One is used.
 *
 * The 4th dropdown item is intentionally absent here — it's the always
 * present, zero-interruption home and isn't gated by any of this.
 *
 * Callers still apply their own CONTEXT gate (e.g. the callout only on
 * a To-Do draft, not in edit mode) on top of `showCallout`.
 */
export function useOnePromo(): {
  hasUsedOne: boolean
  showBanner: boolean
  showCallout: boolean
  dismissBanner: () => void
  dismissCallout: () => void
} {
  const bannerDismissed = useSyncExternalStore(
    subscribeOnePromo,
    isBannerDismissed,
    isBannerDismissed
  )
  const calloutDismissed = useSyncExternalStore(
    subscribeOnePromo,
    isCalloutDismissed,
    isCalloutDismissed
  )
  // One actually created an expense → the awareness job is done.
  const hasUsedOne = useChatDrafts().length > 0

  const showBanner = !hasUsedOne && !bannerDismissed
  // Independent of the banner (different screen). Shows in its own
  // context until dismissed or until One is used. `bannerDismissed`
  // intentionally NOT a condition here.
  const showCallout = !hasUsedOne && !calloutDismissed

  return { hasUsedOne, showBanner, showCallout, dismissBanner, dismissCallout }
}
