import { forwardRef, ReactElement, ReactNode } from "react"

import { F0Icon, IconType } from "../../../components/F0Icon"
import { cn } from "../../../lib/utils"
import { CopyAction } from "./actions/CopyAction"
import { NavigateAction } from "./actions/NavigateAction"
import { OpenLinkAction } from "./actions/OpenLinkAction"

type ItemContainerProps = {
  leftIcon?: IconType | (() => ReactElement)
  action?: InternalActionType
  text: string
  className?: string
}

// internally all action fields are mandatory
export type InternalActionType =
  | InternalCopyActionType
  | InternalNavigateActionType
  | InternalOpenLinkActionType
  | InternalNoopActionType

export type InternalCopyActionType = {
  type: "copy"
  text: string
}

export type InternalNavigateActionType = {
  type: "navigate"
  href: string
}

export type InternalOpenLinkActionType = {
  type: "open-link"
  href: string
}

export type InternalNoopActionType = {
  type: "noop"
}

export const ItemContainer = forwardRef<HTMLLIElement, ItemContainerProps>(
  (props, ref) => {
    const {
      text,
      leftIcon: LeftIcon,
      className,
      action = { type: "noop" },
    } = props

    return (
      <li
        className="flex rounded font-medium text-f1-foreground *:flex-1"
        ref={ref}
      >
        <Action
          action={action}
          className={cn("flex items-center gap-1.5 p-1.5", className)}
        >
          {LeftIcon &&
            (typeof LeftIcon === "function" ? (
              LeftIcon({})
            ) : (
              <F0Icon icon={LeftIcon} size="md" aria-hidden="true" />
            ))}
          <div className="line-clamp-5 flex-1 whitespace-pre-line text-left">
            {text}
          </div>
        </Action>
      </li>
    )
  }
)
ItemContainer.displayName = "ItemContainer"

const Action = ({
  children,
  action,
  ...props
}: {
  className: string
  action: InternalActionType
  children: ReactNode
}) => {
  const type = action.type
  switch (type) {
    case "copy":
      return (
        <CopyAction {...action} {...props}>
          {children}
        </CopyAction>
      )
    case "navigate":
      return (
        <NavigateAction {...action} {...props}>
          {children}
        </NavigateAction>
      )
    case "open-link":
      return (
        <OpenLinkAction {...action} {...props}>
          {children}
        </OpenLinkAction>
      )
    case "noop":
      return <div {...props}>{children}</div>
    default: {
      const _exhaustiveCheck: never = type
      return _exhaustiveCheck
    }
  }
}
