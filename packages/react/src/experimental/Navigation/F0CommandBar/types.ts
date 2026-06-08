import { IconType } from "@/components/F0Icon"

export interface CommandItemBase {
  id: string
  label: string
  icon?: IconType
  keywords?: string[]
}

export type CommandItem =
  | (CommandItemBase & { onSelect: () => void; href?: never })
  | (CommandItemBase & { href: string; external?: boolean; onSelect?: never })

export interface CommandGroup {
  id: string
  title?: string
  items: CommandItem[]
}

export interface F0CommandBarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  groups: CommandGroup[]
  placeholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  /** When true (default), the component filters items by label + keywords. Set to false when the consumer owns filtering. */
  filter?: boolean
  loading?: boolean
  emptyState?: React.ReactNode
}
