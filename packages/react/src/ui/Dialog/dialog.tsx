"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"

import { DialogClose } from "./components/DialogClose"
import { DialogContent } from "./components/DialogContent"
import { DialogDescription } from "./components/DialogDescription"
import { DialogFooter } from "./components/DialogFooter"
import { DialogHeader } from "./components/DialogHeader"
import { DialogOverlay } from "./components/DialogOverlay"
import { DialogPortal } from "./components/DialogPortal"
import { DialogTitle } from "./components/DialogTitle"
import { DialogTrigger } from "./components/DialogTrigger"
import { DialogPrimitiveContext } from "./context"
import { DialogProps } from "./types"

const Dialog = (props: DialogProps) => {
  // We force the modal prop to show the overlay
  return (
    <DialogPrimitiveContext.Provider
      value={{ ...props, showOverlay: props.showOverlay }}
    >
      <DialogPrimitive.Root {...props} />
    </DialogPrimitiveContext.Provider>
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
