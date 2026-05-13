import { cn } from "@/lib/utils"

interface RadioIndicatorProps {
  isSelected: boolean
}

export const RadioIndicator = ({ isSelected }: RadioIndicatorProps) => {
  return (
    <div
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        isSelected
          ? "bg-f1-background-selected-bold"
          : "border-2 border-solid border-f1-border bg-f1-background"
      )}
    >
      {isSelected && <div className="h-2 w-2 rounded-full bg-f1-background" />}
    </div>
  )
}
