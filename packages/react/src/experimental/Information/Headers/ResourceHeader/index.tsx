import { ComponentProps } from "react"

import { BaseHeader } from "../BaseHeader"

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
>

export const ResourceHeader = ({
  avatar,
  title,
  description,
  primaryAction,
  secondaryActions,
  otherActions,
  status,
  metadata,
  deactivated,
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
    />
  )
}
