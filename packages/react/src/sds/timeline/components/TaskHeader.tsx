import { Metadata } from "@/experimental/Information/Headers/Metadata"
import Marker from "@/icons/app/Marker"
import { cn } from "@/lib/utils"

import type { F0TimelineRowTaskProps } from "../types"

import { F0Text } from "@/components/F0Text"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon/F0AvatarIcon"

export const TaskHeader = ({ props }: { props: F0TimelineRowTaskProps }) => {
  const { status, icon = Marker, title, description, metadata } = props

  const hasMetadata = metadata?.some(Boolean)

  return (
    <div className="flex justify-between gap-3 w-full flex-wrap">
      <div className="flex justify-start items-center gap-3 h-8">
        <F0AvatarIcon icon={icon} size="sm" />
        <h4
          className={cn(
            "text-base font-semibold text-f1-foreground",
            status === "completed" && "line-through"
          )}
        >
          {title}
        </h4>
        {description && <F0Text content={description} variant="description" />}
      </div>
      <div className="flex justify-end items-center gap-3 pl-9">
        {status === "completed" && metadata && hasMetadata && (
          <Metadata items={metadata} />
        )}
      </div>
    </div>
  )
}
