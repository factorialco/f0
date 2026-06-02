import { ReactNode } from "react"

export type VirtualItemType = "item" | "separator" | "group-header"

export type VirtualItem = {
  height: number
  value?: string
  key: string
  item: ReactNode
  type?: VirtualItemType
}
