import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"

export type ContentProps = {
  children: React.ReactNode
  /**
   * Disable the default padding from the dialog content area
   * @default false
   */
  disableContentPadding?: boolean
}

export const Content = ({
  children,
  disableContentPadding = false,
}: ContentProps) => {
  return (
    <ScrollArea
      className={cn(
        "[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col",
        "[&_.resource-header]:p-0 [&_.resource-header]:pr-1",
        !disableContentPadding && "px-4 [&>div]:py-4"
      )}
    >
      {children}
      <ScrollBar orientation="vertical" className="[&_div]:bg-f1-background" />
    </ScrollArea>
  )
}
