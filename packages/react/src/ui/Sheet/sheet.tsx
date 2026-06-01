"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"

import { SheetClose } from "./components/SheetClose"
import {
  SheetContent,
  type SheetContentProps,
  type SheetSide,
  sheetSides,
} from "./components/SheetContent"
import { SheetDescription } from "./components/SheetDescription"
import { SheetFooter } from "./components/SheetFooter"
import { SheetHeader } from "./components/SheetHeader"
import { SheetOverlay } from "./components/SheetOverlay"
import { SheetPortal } from "./components/SheetPortal"
import { SheetTitle } from "./components/SheetTitle"
import { SheetTrigger } from "./components/SheetTrigger"

const Sheet = DialogPrimitive.Root

export {
  Sheet,
  SheetClose,
  SheetContent,
  type SheetContentProps,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  type SheetSide,
  sheetSides,
  SheetTitle,
  SheetTrigger,
}
