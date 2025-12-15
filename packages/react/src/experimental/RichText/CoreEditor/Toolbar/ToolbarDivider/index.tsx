import { cn } from "@/lib/utils"

interface ToolbarDividerProps {
  hidden?: boolean
}

export const ToolbarDivider = ({ hidden = false }: ToolbarDividerProps) => (
  <div
    className={cn("mx-1 h-4 w-[1px] flex-shrink-0 bg-f1-foreground-disabled", hidden && "hidden")}
  />
)
