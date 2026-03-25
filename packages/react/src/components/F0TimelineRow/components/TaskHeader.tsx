import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0Icon } from "@/components/F0Icon"
import { FileItem } from "@/experimental/RichText/FileItem"
import Check from "@/icons/app/Check"
import Marker from "@/icons/app/Marker"
import { cn } from "@/lib/utils"

import type { F0TimelineRowTaskProps } from "../types"

import { IconContainer } from "./IconContainer"

export const TaskHeader = ({ props }: { props: F0TimelineRowTaskProps }) => {
  const {
    status,
    icon = Marker,
    title,
    description,
    assignees,
    right,
    files,
  } = props

  return (
    <>
      <IconContainer status={status}>
        <F0Icon icon={icon} size="sm" color="default" />
      </IconContainer>
      <span
        className={cn(
          "text-base font-semibold text-f1-foreground",
          status === "completed" && "line-through"
        )}
      >
        {title}
      </span>
      {description && (
        <span className="text-sm text-f1-foreground-secondary">
          {description}
        </span>
      )}
      {status === "completed" &&
        (right || files || (assignees && assignees.length > 0)) && (
          <div className="ml-auto flex shrink-0 items-center gap-3">
            {right}
            {files && files.length > 0 && (
              <div className="flex items-center gap-2">
                {files.map((file, index) => (
                  <FileItem key={`${file.name}-${index}`} file={file} />
                ))}
              </div>
            )}
            {assignees && assignees.length > 0 && (
              <F0AvatarList
                type="person"
                avatars={assignees.map((a) => ({
                  ...a,
                  badge: {
                    type: "positive" as const,
                    icon: Check,
                  },
                }))}
                size="xs"
                max={3}
              />
            )}
          </div>
        )}
    </>
  )
}
