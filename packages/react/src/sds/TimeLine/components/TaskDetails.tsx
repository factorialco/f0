import { Metadata } from "@/experimental/Information/Headers/Metadata"

import type { F0TimelineRowTaskProps } from "../types"

import { Actions } from "./Actions"

export const TaskDetails = ({ metadata, primaryAction, secondaryActions, otherActions } { props: F0TimelineRowTaskProps }) => {


  const hasMetadata = metadata?.some(Boolean)
  const hasActions =
    primaryAction ||
    (secondaryActions && secondaryActions.length > 0) ||
    (otherActions && otherActions.length > 0)

  return (
    <div className="pl-9">
      {metadata && hasMetadata && (
        <div className="mb-3">
          <Metadata items={metadata} />
        </div>
      )}

      {hasActions && (
        <div className="mb-3">
          <Actions
            primaryAction={primaryAction}
            secondaryActions={secondaryActions}
            otherActions={otherActions}
          />
        </div>
      )}
    </div>
  )
}
