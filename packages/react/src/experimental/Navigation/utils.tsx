import { DataAttributes } from "@/global.types"
import { LinkProps } from "../../lib/linkHandler"

export type NavigationItem = Pick<LinkProps, "href" | "exactMatch" | "onClick"> & {
  label: string
} & DataAttributes
