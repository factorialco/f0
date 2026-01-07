import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { useIsSmallScreen } from "../utils"
import { useF0Dialog } from "./F0DialogProvider"

export type F0DialogContentProps = {
  children: React.ReactNode
  withPadding?: boolean
}

export const F0DialogContent = ({
  children,
  withPadding = true,
}: F0DialogContentProps) => {
  const { position } = useF0Dialog()
  const isSmallScreen = useIsSmallScreen()

  return (
    <ScrollArea
      className={cn(
        "[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col",
        "[&_.resource-header]:p-0 [&_.resource-header]:pr-1",
        withPadding && "px-4 [&>div]:py-4",
        !isSmallScreen && position === "center" && "max-h-[512px]"
      )}
    >
      {children}
      <ScrollBar orientation="vertical" className="[&_div]:bg-f1-background" />
    </ScrollArea>
  )
}
