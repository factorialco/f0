import { withDataTestId } from "@/lib/data-testid"

import { Component } from "../../lib/component/component"
import { F0Icon as BaseIcon } from "./F0Icon"

export const F0Icon = withDataTestId(
  Component(
    {
      name: "F0Icon",
      type: "info",
    },
    BaseIcon
  )
)

export type {
  AiIconName,
  AppIconName,
  F0IconProps,
  IconComponent,
  IconName,
  IconNamespace,
  IconNamesByNamespace,
  IconType,
  ModulesIconName,
} from "./F0Icon"
export { isIconName, resolveIcon, resolveIconName } from "@/icons/resolve"
