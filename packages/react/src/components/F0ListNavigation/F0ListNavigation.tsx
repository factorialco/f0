import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { Select } from "@/experimental/Forms/Fields/Select"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { useState } from "react"

interface ListNavigationOption {
  value: string
  label: string
}

export interface F0ListNavigationProps {
  value: string
  disabled?: boolean
  onChange: (newValue: string) => void
  options: ListNavigationOption[]
  hideNavigation?: boolean
}

export const F0ListNavigation = ({
  value,
  hideNavigation,
  disabled,
  onChange,
  options,
}: F0ListNavigationProps) => {
  const i18n = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const selectedIndex = options.findIndex((option) => option.value === value)
  const selectedItem = options[selectedIndex]

  return (
    <div
      className={cn(
        "inline-flex cursor-auto appearance-none gap-1 rounded-md border-0 bg-f1-background px-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover",
        "[%>*] py-1",
        focusRing("focus:ring-f1-border-hover"),
        disabled && "cursor-not-allowed bg-f1-background-secondary opacity-50"
      )}
    >
      <div
        className={cn(
          "flex flex-1 gap-1",
          hideNavigation ? "justify-center" : "justify-between"
        )}
      >
        {hideNavigation ? null : (
          <F0Button
            size="sm"
            variant="ghost"
            icon={ChevronLeft}
            label={i18n.navigation.previous}
            hideLabel
            disabled={disabled || selectedIndex === 0}
            onClick={() => onChange(options[selectedIndex - 1].value)}
          />
        )}

        <Select
          label="Navigation"
          hideLabel
          value={value}
          onChange={onChange}
          open={isOpen}
          onOpenChange={setIsOpen}
          options={options}
        >
          <ButtonInternal
            size="sm"
            variant="ghost"
            label={selectedItem?.label}
            onClick={() => {}}
            disabled={disabled}
            className={cn(isOpen && "bg-f1-background-secondary-hover")}
          />
        </Select>

        {hideNavigation ? null : (
          <F0Button
            variant="ghost"
            icon={ChevronRight}
            label={i18n.navigation.next}
            hideLabel
            size="sm"
            disabled={disabled || selectedIndex >= options.length - 1}
            onClick={() => onChange(options[selectedIndex + 1].value)}
          />
        )}
      </div>
    </div>
  )
}

F0ListNavigation.displayName = "ListNavigation"
