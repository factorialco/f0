import { ReactElement, ReactNode } from "react"
import { View, Text } from "react-native"

import { cn } from "../../../../lib/utils"
import { F0Icon, type IconType } from "../../../primitives/F0Icon"

import { CopyAction } from "./actions/CopyAction"
import { GenericAction } from "./actions/GenericAction"

import { ActionType } from "."

type ItemContainerProps = {
  leftIcon?: IconType | (() => ReactElement)
  action?: ActionType
  text: string
  className?: string
}

export const ItemContainer = (props: ItemContainerProps) => {
  const {
    text,
    leftIcon: LeftIcon,
    className,
    action = { type: "noop" },
  } = props

  return (
    <View className="flex rounded font-medium text-f0-foreground *:flex-1">
      <Action
        action={action}
        className={cn("flex flex-row items-center gap-1.5 p-1.5", className)}
      >
        {LeftIcon &&
          (typeof LeftIcon === "function" ? (
            LeftIcon({})
          ) : (
            <F0Icon icon={LeftIcon} size="md" />
          ))}
        <Text className="line-clamp-5 text-left text-f0-foreground">
          {text}
        </Text>
      </Action>
    </View>
  )
}

const Action = ({
  children,
  action,
  ...props
}: {
  className: string
  action: ActionType
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
    case "generic":
      return (
        <GenericAction {...action} {...props}>
          {children}
        </GenericAction>
      )
    case "noop":
      return <View {...props}>{children}</View>
    default: {
      const _exhaustiveCheck: never = type
      return _exhaustiveCheck
    }
  }
}
