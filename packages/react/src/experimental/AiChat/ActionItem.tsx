import { Icon } from "@/components/Utilities/Icon"
import CheckCircle from "@/icons/animated/CheckCircle"
import DottedCircle from "@/icons/app/DottedCircle"
import { Spinner } from "../Information/Spinner"

export interface ActionItemProps {
  title: string
  status: "inProgress" | "executing" | "completed"
}

export const ActionItem = ({ title, status }: ActionItemProps) => {
  return (
    <div className="flex items-center gap-1 text-f1-foreground-secondary">
      {status === "inProgress" && (
        <Icon state="animate" size="lg" icon={DottedCircle} />
      )}
      {status === "executing" && <Spinner className="h-6 w-6" />}
      {status === "completed" && (
        <Icon state="animate" size="lg" icon={CheckCircle} />
      )}
      <p>{title}</p>
    </div>
  )
}
