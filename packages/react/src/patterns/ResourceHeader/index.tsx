import { ComponentProps } from "react"

import { experimentalComponent } from "@/lib/experimental"

import { BaseHeader } from "@/experimental/Information/Headers/BaseHeader"

type BaseHeaderProps = ComponentProps<typeof BaseHeader>

type Props = {} & Pick<
  BaseHeaderProps,
  | "avatar"
  | "title"
  | "description"
  | "primaryAction"
  | "secondaryActions"
  | "otherActions"
  | "metadata"
  | "status"
  | "deactivated"
  | "metadataRowGap"
  | "showBottomBorder"
  | "onHistoryClick"
  | "onClose"
>

const _ResourceHeader = ({
  avatar,
  title,
  description,
  primaryAction,
  secondaryActions,
  otherActions,
  status,
  metadata,
  deactivated,
  metadataRowGap,
  showBottomBorder,
  onHistoryClick,
  onClose,
}: Props) => {
  return (
    <BaseHeader
      avatar={avatar}
      title={title}
      description={description}
      primaryAction={primaryAction}
      secondaryActions={secondaryActions}
      otherActions={otherActions}
      status={status}
      metadata={metadata}
      deactivated={deactivated}
      metadataRowGap={metadataRowGap}
      showBottomBorder={showBottomBorder}
      onHistoryClick={onHistoryClick}
      onClose={onClose}
    />
  )
}

export type ResourceHeaderProps = Props

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const ResourceHeader = experimentalComponent(
  "ResourceHeader",
  _ResourceHeader
)
