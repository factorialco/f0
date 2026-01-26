import * as DialogPrimitive from "@radix-ui/react-dialog"

export type DialogProps = DialogPrimitive.DialogProps & {
  showOverlay?: boolean
}

export type DialogAnimation = "zoom" | "slideLeft" | "slideRight"
