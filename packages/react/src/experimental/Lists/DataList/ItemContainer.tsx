import { forwardRef, ReactElement, ReactNode } from "react"
import { F0Icon, IconType } from "../../../components/F0Icon"
import { cn } from "../../../lib/utils"
import { CopyAction } from "./actions/CopyAction"
import { DrawerAction } from "./actions/DrawerAction"
import { NavigateAction } from "./actions/NavigateAction"
import { OpenLinkAction } from "./actions/OpenLinkAction"

type ItemContainerProps = {
  leftIcon?: IconType | (() => ReactElement)
  action?: InternalActionType
  /** Rendered as the row's text unless `content` is given; always the copy text. */
  text: string
  /** Richer body rendered in place of `text`. */
  content?: ReactNode
  /** Navigate rows drop their trailing chevron. Other actions keep their icon. */
  hideChevron?: boolean
  className?: string
}

// internally all action fields are mandatory
export type InternalActionType =
  | InternalCopyActionType
  | InternalNavigateActionType
  | InternalOpenLinkActionType
  | InternalDrawerActionType
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

export type InternalDrawerActionType = {
  type: "drawer"
  expanded: boolean
  onToggle: () => void
  controls?: string
}

export type InternalNoopActionType = {
  type: "noop"
}

export const ItemContainer = forwardRef<HTMLLIElement, ItemContainerProps>(
  (props, ref) => {
    const {
      text,
      content,
      leftIcon: LeftIcon,
      className,
      hideChevron,
      action = { type: "noop" },
    } = props

    return (
      <li
        className="flex rounded font-medium text-f1-foreground *:flex-1"
        ref={ref}
      >
        <Action
          action={action}
          hideChevron={hideChevron}
          className={cn("flex items-center gap-1.5 p-1.5", className)}
        >
          {LeftIcon ? (
            typeof LeftIcon === "function" ? (
              LeftIcon({})
            ) : (
              <F0Icon icon={LeftIcon} size="md" aria-hidden="true" />
            )
          ) : null}
          {content ?? (
            <div className="line-clamp-5 flex-1 whitespace-pre-line text-left">
              {text}
            </div>
          )}
        </Action>
      </li>
    )
  }
)
ItemContainer.displayName = "ItemContainer"

const Action = ({
  children,
  action,
  hideChevron,
  ...props
}: {
  className: string
  action: InternalActionType
  hideChevron?: boolean
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
        <NavigateAction {...action} {...props} hideChevron={hideChevron}>
          {children}
        </NavigateAction>
      )
    case "open-link":
      return (
        <OpenLinkAction {...action} {...props}>
          {children}
        </OpenLinkAction>
      )
    case "drawer":
      return (
        <DrawerAction {...action} {...props}>
          {children}
        </DrawerAction>
      )
    case "noop":
      return <div {...props}>{children}</div>
    default: {
      const _exhaustiveCheck: never = type
      return _exhaustiveCheck
    }
  }
}
