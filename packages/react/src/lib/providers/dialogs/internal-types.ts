import {
  DialogAction,
  DialogActionValuePrimitive,
  DialogDefinition,
} from "./types"

export type DialogDefinitionProviderItem = DialogDefinition & {
  onCloseDialog: () => void
  onClickAction: (
    action: DialogAction,
    value: DialogActionValuePrimitive
  ) => void
}
