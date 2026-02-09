import { F0Icon, F0IconProps, IconType } from "@/components/F0Icon"
import { AlertCircle, InfoCircle, Warning } from "@/icons/app"
import { cn } from "@/lib/utils"

import { InputFieldStatus, InputFieldStatusType } from "../types"

type InputMessagesProps = {
  status?: InputFieldStatus
}

const statuses: Record<
  InputFieldStatusType,
  { color: string; iconColor: F0IconProps["color"]; icon?: IconType }
> = {
  default: {
    color: "text-f1-foreground-secondary",
    iconColor: "default",
  },
  warning: {
    color: "text-f1-foreground-warning",
    iconColor: "warning",
    icon: Warning,
  },
  info: {
    color: "text-f1-foreground-info",
    iconColor: "info",
    icon: InfoCircle,
  },
  error: {
    color: "text-f1-foreground-critical",
    iconColor: "critical",
    icon: AlertCircle,
  },
}

const InputMessages = ({ status }: InputMessagesProps) => {
  if (!status) return null

  const messages = (
    Array.isArray(status.message) ? status.message : [status.message]
  ).filter(Boolean)

  const icon = statuses[status.type].icon

  return (
    messages.length > 0 && (
      <div className="flex gap-1">
        {icon && (
          <div className="-translate-y-[2px]">
            <F0Icon
              icon={icon}
              color={statuses[status.type].iconColor || "currentColor"}
            />
          </div>
        )}
        <ul className="list-none">
          {messages.map((message) => (
            <li
              key={message}
              className={cn("text-sm font-medium", statuses[status.type].color)}
            >
              {message}
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

export { InputMessages }
