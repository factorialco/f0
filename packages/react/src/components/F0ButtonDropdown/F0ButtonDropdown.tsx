import { F0Icon } from "@/components/F0Icon"
import { DropdownInternal } from "@/experimental/Navigation/Dropdown/internal.tsx"
import { ChevronDown } from "@/icons/app/index.ts"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils.ts"
import { Action } from "@/ui/Action/index.tsx"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants.ts"
import { useMemo, useState } from "react"
import { F0ButtonDropdownProps } from "./types.ts"

const F0ButtonDropdown = ({
  items,
  onClick,
  value,
  ...props
}: F0ButtonDropdownProps) => {
  const t = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const localValue = useMemo(() => value || items[0].value, [value, items])

  const selectedItem = useMemo(
    () => items.find((item) => item.value === localValue),
    [localValue, items]
  )

  const handleClick = () => {
    onClick(localValue, items.find((value) => value.value === localValue)!)
  }

  const dropdownItems = useMemo(
    () =>
      items
        .filter((item) => item.value !== localValue)
        .map((item) => ({
          ...item,
          onClick: () => {
            onClick(item.value, item)
            setIsOpen(false)
          },
        })),
    [items, localValue, onClick]
  )

  const dropdownSize =
    props.size === "sm"
      ? "[&_.main]:w-6"
      : props.size === "lg"
        ? "[&_.main]:w-10"
        : "[&_.main]:w-8"

  return (
    selectedItem && (
      <Action
        onClick={handleClick}
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        loading={props.loading}
        data-testid="button-main"
        aria-label={selectedItem.label}
        prepend={selectedItem.icon && <F0Icon icon={selectedItem.icon} />}
        className="rounded-r-none after:rounded-r-none"
        tooltip={props.tooltip}
        appendOutside={
          <DropdownInternal
            items={dropdownItems}
            align="end"
            open={isOpen && !props.disabled}
            onOpenChange={(open) => {
              if (props.disabled) return
              setIsOpen(open)
            }}
          >
            <button
              className={cn(
                actionVariants({
                  variant: props.variant,
                  pressed: isOpen && !props.disabled,
                }),
                buttonSizeVariants({ size: props.size }),
                "-translate-x-px rounded-l-none px-0 after:rounded-l-none",
                dropdownSize,
                focusRing()
              )}
              disabled={props.disabled}
              data-testid="button-menu"
              data-pressed={isOpen && !props.disabled}
            >
              <div className="main flex items-center justify-center gap-1">
                <span className="sr-only">{t.actions.more}</span>
                <F0Icon
                  icon={ChevronDown}
                  size={props.size === "sm" ? "sm" : "md"}
                />
              </div>
            </button>
          </DropdownInternal>
        }
      >
        {selectedItem.label}
      </Action>
    )
  )
}

export { F0ButtonDropdown }
