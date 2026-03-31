import Multitask from "@/icons/app/Multitask"
import { GroupHeader } from "@/ui/GroupHeader/GroupHeader"

import type { F0TimelineRowMultitaskProps } from "../types"

import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon/F0AvatarIcon"

export const MultitaskHeader = ({
  props,
}: {
  props: F0TimelineRowMultitaskProps
}) => {
  const { status, title, taskCount, completedCount, expanded, onExpandToggle } =
    props

  return (
    <>
      <F0AvatarIcon icon={Multitask} size="sm" />
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
