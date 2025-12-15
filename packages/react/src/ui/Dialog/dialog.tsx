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

const Dialog = DialogPrimitive.Root

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
