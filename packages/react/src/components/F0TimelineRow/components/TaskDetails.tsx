import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
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
        <div className="mb-3">
          {assignees.length <= 3 ? (
            <div className="flex flex-wrap items-center gap-3">
              {assignees.map((assignee, index) => (
                <div
                  key={`${assignee.firstName}-${assignee.lastName}-${index}`}
                  className="flex items-center gap-2"
                >
                  <F0AvatarPerson
                    firstName={assignee.firstName}
                    lastName={assignee.lastName}
                    src={assignee.src}
                    size="sm"
                  />
                  <span className="text-sm text-f1-foreground">
                    {assignee.firstName} {assignee.lastName}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-fit">
              <F0AvatarList
                type="person"
                avatars={assignees}
                size="sm"
                max={3}
              />
            </div>
          )}
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
