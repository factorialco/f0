import { ComponentProps } from "react"
import { BaseHeader } from "../BaseHeader"
import { experimentalComponent } from "@/lib/experimental"

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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const ResourceHeader = experimentalComponent(
  "ResourceHeader",
  _ResourceHeader
)
