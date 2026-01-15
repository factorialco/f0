import {
  DialogAction,
  DialogActionValuePrimitive,
  DialogDefinition,
} from "./types"

export type DialogDefinitionInternal = DialogDefinition & {
  onCloseDialog: () => void
  onClickAction: (
    action: DialogAction,
    value: DialogActionValuePrimitive
  ) => void
}
