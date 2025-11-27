import { F0Icon } from "@factorialco/f0-react"
import CheckCircleLine from "@factorialco/f0-react/icons/animated/CheckCircleLine"
import DottedCircle from "@factorialco/f0-react/icons/app/DottedCircle"
import { cn } from "../../lib/utils"
import { OneSpinner } from "../OneSpinner"
import "./styles.css"

export interface ActionItemProps {
  title: string
  status?: "inProgress" | "executing" | "completed"
  inGroup?: boolean
}

export const ActionItem = ({ title, status, inGroup }: ActionItemProps) => {
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
          <OneSpinner />
        </div>
      )}
      {status === "completed" && (
        <div className="-mt-[2px] *:block">
          <F0Icon
            color="secondary"
            state="animate"
            size={inGroup ? "md" : "lg"}
            icon={CheckCircleLine}
          />
        </div>
      )}
      <p className={cn("text-pretty", status === "executing" && "shine-text")}>
        {title}
      </p>
    </div>
  )
}
