import { F0Icon } from "@/components/F0Icon"
import OutlineCircle from "@/icons/animated/CheckCircleLine"
import DottedCircle from "@/icons/app/DottedCircle"
import { cn } from "@/lib/utils"

import { ChatSpinner } from "./components/ChatSpinner"
import "./styles.css"
import { F0ActionItemProps } from "./types"

export const F0ActionItem = ({ title, status, inGroup }: F0ActionItemProps) => {
  return (
    <div className="flex w-full items-start gap-1 text-f1-foreground-secondary">
      <div className="flex h-6 w-6 shrink-0 items-center justify-start">
        {status === "inProgress" && (
          <F0Icon
            state="animate"
            size={inGroup ? "md" : "lg"}
            icon={DottedCircle}
          />
        )}
        {status === "executing" && (
          <div className="flex h-5 w-5 shrink-0 items-center justify-center">
            <ChatSpinner />
          </div>
        )}
        {status === "completed" && (
          <F0Icon
            color="secondary"
            state="animate"
            size={inGroup ? "md" : "lg"}
            icon={OutlineCircle}
          />
        )}
      </div>
      <div className="min-h-6 flex items-center">
        <p
          className={cn("text-pretty", status === "executing" && "shine-text")}
        >
          {title}
        </p>
      </div>
    </div>
  )
}
