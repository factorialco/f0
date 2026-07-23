import { useI18n } from "@/lib/providers/i18n"

import type { AudienceGroupKind, F0AudienceEntity } from "../types"

const kindTranslationKey = {
  team: "team",
  legal_entity: "legalEntity",
  workplace: "workplace",
  role: "role",
  permission_group: "permissionGroup",
  everyone: "everyone",
} as const satisfies Record<AudienceGroupKind, string>

/**
 * Individuals show their consumer-provided subtitle (e.g. job title); group
 * kinds show the localized "{{count}} people · {{kind}}" line owned by f0.
 *
 * Returned inline (no useCallback): `t` from the i18n provider is a fresh
 * closure each render, so memoization would never hold, and the result is
 * only used during render — not as an effect dependency.
 */
export const useAudienceEntitySubtitle = () => {
  const { t, ...i18n } = useI18n()

  return (entity: F0AudienceEntity): string | undefined => {
    if (entity.kind === "individual") {
      return entity.subtitle
    }
    const kindLabel =
      i18n.audience.selector.kind[kindTranslationKey[entity.kind]]
    if (entity.memberCount === undefined) {
      return kindLabel
    }
    const countLabel = t(
      entity.memberCount === 1
        ? "audience.selector.memberCount.one"
        : "audience.selector.memberCount.other",
      { count: entity.memberCount }
    )
    return `${countLabel} · ${kindLabel}`
  }
}
