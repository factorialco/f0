import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import OutlineCircle from "@/icons/animated/CheckCircleLine"
import DottedCircle from "@/icons/app/DottedCircle"
import { cn } from "@/lib/utils"

import "./styles.css"
import { ChatSpinner } from "./components/ChatSpinner"
import { F0ActionItemProps } from "./types"

export const F0ActionItem = ({ title, status, inGroup }: F0ActionItemProps) => {
  return (
    <div className="flex w-full items-start gap-1 text-f1-foreground-secondary">
      {status === "inProgress" && (
        <div className="-mt-[2px] *:block">
          <F0Icon
            state="animate"
            size={inGroup ? "md" : "lg"}
            icon={DottedCircle}
          />
        </div>
      )}
      {status === "executing" && (
        <div className="-mt-[2px] grid h-6 w-6 shrink-0 items-center justify-items-center">
          <ChatSpinner />
        </div>
      )}
      {status === "completed" && (
        <div className="-mt-[2px] *:block">
          <F0Icon
            color="secondary"
            state="animate"
            size={inGroup ? "md" : "lg"}
            icon={OutlineCircle}
          />
        </div>
      )}
      <OneEllipsis
        className={cn("text-pretty", status === "executing" && "shine-text")}
      >
        {title}
      </OneEllipsis>
    </div>
  )
}
