import { Tabs, TabsProps } from "@/experimental/Navigation/Tabs"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { useOneModal } from "../OneModalProvider"
import { useIsSmallScreen } from "../utils"

export type OneModalContentProps = {
  children: React.ReactNode
  withPadding?: boolean
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

export const OneModalContent = ({
  tabs,
  activeTabId,
  setActiveTabId,
  withPadding = false,
  children,
}: OneModalContentProps) => {
  const { position: modalPosition } = useOneModal()

  const isSmallScreen = useIsSmallScreen()

  return (
    <>
      {tabs && (
        <div className="-mx-2">
          <Tabs tabs={tabs} activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
        </div>
      )}
      <ScrollArea
        className={cn(
          "[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col",
          "[&_.resource-header]:p-0 [&_.resource-header]:pr-1",
          withPadding && "px-5 py-3",
          !isSmallScreen && modalPosition === "center" && "max-h-[512px]"
        )}
      >
        {children}
        <ScrollBar orientation="vertical" className="[&_div]:bg-f1-background" />
      </ScrollArea>
    </>
  )
}
