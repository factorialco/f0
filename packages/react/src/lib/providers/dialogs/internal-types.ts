import {
  DialogAction,
  DialogActionValuePrimitive,
  DialogDefinitionInternal,
} from "./types"

export type DialogDefinitionProviderItem = DialogDefinitionInternal & {
  onCloseDialog: () => void
  onClickAction: (
    action: DialogAction,
    value: DialogActionValuePrimitive
  ) => void
}
