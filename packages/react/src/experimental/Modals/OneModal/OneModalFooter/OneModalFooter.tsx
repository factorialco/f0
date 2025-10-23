import { cn } from "@/lib/utils"
import { useOneModal } from "../OneModalProvider"
import { ContentPadding } from "../types"

export type OneModalFooterProps = {
  children: React.ReactNode
}

const classesByContentPadding: Record<ContentPadding, string> = {
  sm: "min-h-14 py-3 px-4",
  md: "min-h-18 p-5",
}

export const OneModalFooter = ({ children }: OneModalFooterProps) => {
  const { contentPadding } = useOneModal()
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background",
        classesByContentPadding[contentPadding]
      )}
    >
      {children}
    </div>
  )
}
