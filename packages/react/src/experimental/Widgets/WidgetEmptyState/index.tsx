import { IconType } from "../../../components/F0Icon"
import { OneEmptyState } from "../../OneEmptyState/OneEmptyState"
import { experimentalComponent } from "@/lib/experimental"

type Action = {
  label: string
  onClick: () => void
  icon?: IconType
  variant?: "default" | "outline" | "promote"
}

export type WidgetEmptyStateProps = {
  title: string
  description: string
  emoji?: string
  actions?: Action[]
}

function _WidgetEmptyState({
  title,
  description,
  emoji,
  actions,
}: WidgetEmptyStateProps) {
  if ((actions?.length ?? 0) > 2) {
    throw Error(
      "You can only provide up to two actions for the WidgetEmptyState"
    )
  }

  return (
    <OneEmptyState
      title={title}
      description={description}
      {...(emoji ? { emoji } : { variant: "warning" as const })}
      actions={actions}
    />
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const WidgetEmptyState = experimentalComponent(
  "WidgetEmptyState",
  _WidgetEmptyState
)
