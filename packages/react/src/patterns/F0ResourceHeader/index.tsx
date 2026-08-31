import { ComponentProps } from "react"

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
  | "onClose"
>

/**
 * Header for a resource detail page: avatar, title, description, status,
 * metadata and its primary, secondary and overflow actions.
 */
export const F0ResourceHeader = ({
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
      onClose={onClose}
    />
  )
}

export type F0ResourceHeaderProps = Props
