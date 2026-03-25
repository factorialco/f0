import { F0Icon } from "@/components/F0Icon"
import Multitask from "@/icons/app/Multitask"
import { GroupHeader } from "@/ui/GroupHeader/GroupHeader"

import type { F0TimelineRowMultitaskProps } from "../types"

import { IconContainer } from "./IconContainer"
import { F0TagStatus } from "@/components/tags/F0TagStatus"

const MultitaskIcon = () => (
  <F0Icon icon={Multitask} size="sm" color="default" />
)

export const MultitaskHeader = ({
  props,
}: {
  props: F0TimelineRowMultitaskProps
}) => {
  const { status, title, taskCount, completedCount, expanded, onExpandToggle } =
    props

  return (
    <>
      <IconContainer status={status}>
        <MultitaskIcon />
      </IconContainer>
      <div className="flex flex-1 items-center justify-between">
        <GroupHeader
          label={`${taskCount} ${title}`}
          itemCount={undefined}
          open={expanded}
          onOpenChange={() => onExpandToggle()}
          showOpenChange
        />
        {completedCount !== undefined && (
          <F0TagStatus
            text={`${completedCount}/${taskCount}`}
            variant={status === "completed" ? "positive" : "warning"}
          />
        )}
      </div>
    </>
  )
}
