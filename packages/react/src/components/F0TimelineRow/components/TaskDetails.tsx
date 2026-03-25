import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { FileItem } from "@/experimental/RichText/FileItem"

import type { F0TimelineRowTaskProps } from "../types"

import { Actions } from "./Actions"

export const TaskDetails = ({ props }: { props: F0TimelineRowTaskProps }) => {
  const {
    right,
    files,
    assignees,
    primaryAction,
    secondaryActions,
    otherActions,
  } = props

  return (
    <div className="pl-9">
      {right && <div className="mb-3 flex items-center gap-2">{right}</div>}

      {files && files.length > 0 && (
        <div className="mb-3 flex items-center gap-2">
          {files.map((file, index) => (
            <FileItem key={`${file.name}-${index}`} file={file} />
          ))}
        </div>
      )}

      {assignees && assignees.length > 0 && (
        <div className="mb-3 w-fit">
          <F0AvatarList type="person" avatars={assignees} size="sm" max={3} />
        </div>
      )}

      {(primaryAction ||
        (secondaryActions && secondaryActions.length > 0) ||
        (otherActions && otherActions.length > 0)) && (
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
