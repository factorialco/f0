import {
  DialogAction,
  DialogActionValuePrimitive,
  DialogDefinitionInternal,
  DrawerDefinitionInternal,
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
