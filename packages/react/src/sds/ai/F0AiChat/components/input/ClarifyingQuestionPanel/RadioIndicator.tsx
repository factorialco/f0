import { F0Icon } from "@/components/F0Icon/F0Icon"
import { Check } from "@/icons/app"
import { cn } from "@/lib/utils"

interface RadioIndicatorProps {
  isSelected: boolean
}

export const RadioIndicator = ({ isSelected }: RadioIndicatorProps) => {
  return (
    <span
      className={cn(
        "flex h-5 w-5 m-0.5 shrink-0 items-center justify-center rounded-full transition-colors",
        isSelected
          ? "bg-f1-background-selected-bold"
          : "border-2 border-solid border-f1-border"
      )}
    >
      {isSelected && <F0Icon icon={Check} size="sm" color="inverse" />}
    </span>
  )
}
