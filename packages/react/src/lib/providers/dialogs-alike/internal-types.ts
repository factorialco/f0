import { DrawerDefinitionInternal } from "@/hooks/drawer/types"

import {
  DialogAction,
  DialogActionValuePrimitive,
  DialogDefinitionInternal,
} from "./types"

export type DialogAlikeDefinition =
  | (DialogDefinitionInternal & { variant: "default" | "notification" })
  | DrawerDefinitionInternal

export type DialogDefinitionProviderItem = DialogAlikeDefinition & {
  onCloseDialog: () => void
  onClickAction: (
    action: DialogAction,
    value: DialogActionValuePrimitive
  ) => void
}
