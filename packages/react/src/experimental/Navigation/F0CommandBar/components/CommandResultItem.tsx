import { useEffect, useRef } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Link } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"

import { CommandItem } from "../types"

interface CommandResultItemProps {
  item: CommandItem
  isSelected: boolean
  onSelect: (item: CommandItem) => void
  onHover: (id: string) => void
}

export function CommandResultItem({
  item,
  isSelected,
  onSelect,
  onHover,
}: CommandResultItemProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (isSelected) {
      ref.current?.scrollIntoView({ block: "nearest" })
    }
  }, [isSelected])

  const content = (
    <div className="flex items-center gap-2.5">
      {item.icon && (
        <span className="shrink-0 text-f1-foreground-secondary">
          <F0Icon icon={item.icon} size="md" />
        </span>
      )}
      <span className="truncate text-sm font-medium text-f1-foreground">
        {item.label}
      </span>
    </div>
  )

  const sharedClass = cn(
    "flex w-full cursor-pointer items-center rounded-md px-2 py-2 transition-colors",
    isSelected
      ? "bg-f1-background-secondary"
      : "hover:bg-f1-background-secondary",
    focusRing()
  )

  if (item.href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noreferrer noopener" : undefined}
        className={cn(sharedClass, "no-underline")}
        tabIndex={-1}
        onMouseEnter={() => onHover(item.id)}
        onClick={() => onSelect(item)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={sharedClass}
      tabIndex={-1}
      onMouseEnter={() => onHover(item.id)}
      onClick={() => onSelect(item)}
    >
      {content}
    </button>
  )
}
