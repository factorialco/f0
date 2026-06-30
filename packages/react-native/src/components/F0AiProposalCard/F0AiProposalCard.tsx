import React, { useState } from "react"
import { View } from "react-native"

import { F0AvatarModule } from "../F0Avatar"
import { F0Button } from "../F0Button"
import { F0Text } from "../primitives/F0Text"

import { proposalCardVariants } from "./F0AiProposalCard.styles"
import type {
  F0AiProposalCardActions,
  F0AiProposalCardProps,
} from "./F0AiProposalCard.types"

const DEFAULT_MAX_COLLAPSED_DESCRIPTION_LENGTH = 180

const getSafeCollapsedDescriptionLength = (maxLength: number) =>
  Number.isFinite(maxLength)
    ? Math.max(0, Math.floor(maxLength))
    : DEFAULT_MAX_COLLAPSED_DESCRIPTION_LENGTH

const getCollapsedDescription = (description: string, maxLength: number) =>
  description.length <= maxLength
    ? description
    : `${description.slice(0, maxLength).trimEnd()}...`

const hasActions = (
  props: F0AiProposalCardProps
): props is F0AiProposalCardProps & F0AiProposalCardActions =>
  props.showActions !== false

/**
 * F0AiProposalCard - Inline card proposing an entity for the user to confirm.
 *
 * Native counterpart of the web F0AiProposalCard: a module avatar with a
 * heading/subtitle, the proposed title and a truncatable description, and an
 * optional primary-action footer. The card only proposes; confirmation is wired
 * by the consumer via onPrimaryAction.
 *
 * @example
 * <F0AiProposalCard
 *   module="ai_ticketing"
 *   heading="Review before creating"
 *   subtitle="Customer Support · IT Support"
 *   title="Laptop screen flickering on battery"
 *   description="Issue: the screen flickers on battery..."
 *   seeMoreLabel="See more"
 *   primaryActionLabel="Confirm"
 *   onPrimaryAction={handleConfirm}
 * />
 */
const F0AiProposalCard = React.memo(function F0AiProposalCard(
  props: F0AiProposalCardProps
) {
  const {
    module,
    heading,
    title,
    subtitle,
    description,
    seeMoreLabel,
    maxCollapsedDescriptionLength = DEFAULT_MAX_COLLAPSED_DESCRIPTION_LENGTH,
  } = props
  const [expanded, setExpanded] = useState(false)
  const safeMaxCollapsedDescriptionLength = getSafeCollapsedDescriptionLength(
    maxCollapsedDescriptionLength
  )
  const shouldTruncate = description.length > safeMaxCollapsedDescriptionLength
  const visibleDescription = expanded
    ? description
    : getCollapsedDescription(description, safeMaxCollapsedDescriptionLength)
  const actions = hasActions(props) ? props : null
  const { container, header, headerText, body, footer } = proposalCardVariants()

  return (
    <View className={container()}>
      <View className={header()}>
        {module ? <F0AvatarModule module={module} size="md" /> : null}
        <View className={headerText()}>
          <F0Text variant="heading-sm" color="default" numberOfLines={1}>
            {heading}
          </F0Text>
          {subtitle ? (
            <F0Text
              variant="body-md-default"
              color="secondary"
              numberOfLines={1}
            >
              {subtitle}
            </F0Text>
          ) : null}
        </View>
      </View>

      <View className={body()}>
        <F0Text variant="heading-sm" color="default">
          {title}
        </F0Text>
        <F0Text variant="body-md-default" color="default">
          {visibleDescription}
          {shouldTruncate && !expanded ? (
            <F0Text
              variant="body-md-medium"
              color="secondary"
              onPress={() => setExpanded(true)}
            >
              {" "}
              {seeMoreLabel}
            </F0Text>
          ) : null}
        </F0Text>
      </View>

      {actions ? (
        <View className={footer()}>
          <F0Button
            label={actions.primaryActionLabel}
            icon={actions.primaryActionIcon}
            onPress={actions.onPrimaryAction}
          />
        </View>
      ) : null}
    </View>
  )
})

F0AiProposalCard.displayName = "F0AiProposalCard"

export { F0AiProposalCard }
