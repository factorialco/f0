import { F0Icon, F0IconProps, IconType } from "@/components/F0Icon"
import { AlertCircle, InfoCircle, Warning } from "@/icons/app"
import { cn } from "@/lib/utils"

import { InputFieldStatus, InputFieldStatusType } from "../types"

type InputMessagesProps = {
  status?: InputFieldStatus
  /**
   * Applied to the message container, so a field can point `aria-describedby`
   * at it and have the message actually announced.
   */
  id?: string
}

/**
 * The messages a status will really render, empty entries dropped.
 *
 * Exported because a field needs to know whether the container exists before
 * referencing it: an `aria-describedby` pointing at an element that never
 * rendered is itself an accessibility failure, not a no-op.
 */
export function inputStatusMessages(status?: InputFieldStatus): string[] {
  if (!status) return []
  const raw = Array.isArray(status.message) ? status.message : [status.message]
  return raw.filter((message): message is string => Boolean(message))
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

const InputMessages = ({ status, id }: InputMessagesProps) => {
  if (!status) return null

  const messages = inputStatusMessages(status)

  const icon = statuses[status.type].icon

  return (
    messages.length > 0 && (
      <div className="flex gap-1" id={id}>
        {icon && (
          <F0Icon
            icon={icon}
            color={statuses[status.type].iconColor || "currentColor"}
          />
        )}
        <ul className="list-none">
          {messages.map((message) => (
            <li
              key={message}
              className={cn(
                "text-base font-medium",
                statuses[status.type].color
              )}
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
