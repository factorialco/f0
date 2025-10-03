import { type VariantProps } from "cva"
import { textVariants } from "./variants"

export type AsAllowedList =
  | "div"
  | "p"
  | "label"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "code"

export type TextVariants = VariantProps<typeof textVariants>
export type TextVariant = NonNullable<TextVariants["variant"]>
