import { DialogInternal } from "./internal/DialogInternal"
import { DialogInternalProps } from "./internal/internal-types"

const privateProps = ["variant", "disableClose"] as const

export type F0DialogProps = Omit<
  DialogInternalProps,
  (typeof privateProps)[number]
>

const F0Dialog = (props: F0DialogProps) => {
  const publicProps = privateProps.reduce<DialogInternalProps>((acc, key) => {
    const { [key as keyof DialogInternalProps]: _, ...rest } = acc
    return rest as DialogInternalProps
  }, props as DialogInternalProps)

  return <DialogInternal {...publicProps} />
}

F0Dialog.displayName = "F0Dialog"

export { F0Dialog }
