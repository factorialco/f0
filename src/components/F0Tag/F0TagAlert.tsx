import React from "react"

import { AlertCircle, CheckCircle, InfoCircle, Warning } from "../../icons/app"
import { enforceTextFormat } from "../../lib/text"
import { cn } from "../../lib/utils"
import { F0Icon, type F0IconProps, type IconType } from "../primitives/F0Icon"

import {
  f0TagAlertLevelClasses,
  f0TagAlertTextLevelColors,
  type F0TagAlertProps,
} from "./F0Tag.types"
import { F0TagRoot } from "./F0TagRoot"

const f0TagAlertIcons: Record<keyof typeof f0TagAlertLevelClasses, IconType> = {
  info: InfoCircle,
  warning: Warning,
  critical: AlertCircle,
  positive: CheckCircle,
}

const f0TagAlertIconColors: Record<
  keyof typeof f0TagAlertLevelClasses,
  F0IconProps["color"]
> = {
  info: "info",
  warning: "warning",
  critical: "critical",
  positive: "positive",
}

/**
 * Alert semantic tag with level-based icon and colors.
 */
const F0TagAlert = React.memo(function F0TagAlert({
  text,
  level,
  info,
}: F0TagAlertProps) {
  enforceTextFormat(text, { disallowEmpty: true })

  return (
    <F0TagRoot
      className={cn("pl-0.5", f0TagAlertLevelClasses[level])}
      textColor={f0TagAlertTextLevelColors[level]}
      left={
        <F0Icon
          icon={f0TagAlertIcons[level]}
          color={f0TagAlertIconColors[level]}
          size="md"
          aria-hidden
        />
      }
      text={text}
      info={info}
    />
  )
})

F0TagAlert.displayName = "F0Tag.Alert"

export { F0TagAlert }
