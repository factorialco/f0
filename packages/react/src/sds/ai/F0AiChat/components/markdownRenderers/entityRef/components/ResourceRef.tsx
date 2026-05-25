import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { useAiChat } from "../../../../providers/AiChatStateProvider"
import { entityRefConfig } from "./entityRefConfig"
import { EntityRefHoverCard } from "./EntityRefHoverCard"

type ResourceRefTriggerProps = {
  label: string
  prefix?: string
}

const ResourceRefTrigger = forwardRef<
  HTMLButtonElement,
  ResourceRefTriggerProps
>(({ label, prefix, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
      focusRing()
    )}
    {...props}
  >
    {prefix}
    {label}
  </button>
))
ResourceRefTrigger.displayName = "ResourceRefTrigger"

type ResourceRefProps = {
  configKey: string
  id: string
  label: string
}

/**
 * Unified inline entity reference. Looks up the entity configuration in
 * `entityRefConfig`, resolves the appropriate resolver and URL builder
 * from the current AI chat state, and delegates rendering to the shared
 * `EntityRefHoverCard`.
 *
 * Falls back to plain text when:
 * - the `configKey` is not registered, or
 * - no resolver is configured for the entity type.
 */
export function ResourceRef({ configKey, id, label }: ResourceRefProps) {
  const { entityRefs } = useAiChat()
  const i18n = useI18n()

  const config = entityRefConfig[configKey]

  const resolver = config
    ? entityRefs?.resolvers?.[config.resolverKey]
    : undefined
  const url = config ? entityRefs?.urls?.[config.urlKey]?.(id) : undefined

  const mapToCard = useMemo(
    () =>
      (profile: unknown): F0CardProps => {
        if (!config) {
          return { title: label }
        }
        return config.mapToCard(profile, { i18n, url, label })
      },
    [config, i18n, url, label]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      ...(url && {
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: url,
        },
      }),
    }),
    [label, i18n, url]
  )

  if (!config || !resolver) {
    return <span>{label}</span>
  }

  return (
    <EntityRefHoverCard
      id={id}
      trigger={
        <ResourceRefTrigger label={label} prefix={config.triggerPrefix} />
      }
      resolver={resolver}
      mapToCard={mapToCard}
      fallbackCard={fallbackCard}
    />
  )
}
