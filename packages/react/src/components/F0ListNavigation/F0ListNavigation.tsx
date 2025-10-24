import { Button } from "@/components/Actions/Button"
import { ButtonInternal } from "@/components/Actions/Button/internal"
import { Select } from "@/experimental/Forms/Fields/Select"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { forwardRef, useState } from "react"

interface ListNavigationOption {
  value: string
  label: string
}

export interface F0ListNavigationProps {
  value: string
  disabled?: boolean
  onChange: (newValue: string) => void
  options: [ListNavigationOption, ...ListNavigationOption[]]
  hideNavigation?: boolean
}

export const F0ListNavigation = forwardRef<
  HTMLDivElement,
  F0ListNavigationProps
>(({ value, hideNavigation, disabled, onChange, options }, ref) => {
  const i18n = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const selectedIndex = options.findIndex((option) => option.value === value)
  const selectedItem = options[selectedIndex]

  return (
    <div
      ref={ref}
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
          <Button
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
          <Button
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
})

// Add display name for better debugging
F0ListNavigation.displayName = "ListNavigation"
