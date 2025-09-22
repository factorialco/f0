import { OneEllipsis } from "@/components/OneEllipsis"
import { cn } from "@/lib/utils"

export const AppendTag = ({ text }: { text: string; disabled?: boolean }) => {
  return (
    <div
      className={cn(
        "shadow-sm flex h-[24px] max-w-20 items-center gap-2 rounded-sm border border-solid border-f1-border px-2 py-0.5 font-medium text-f1-foreground"
      )}
    >
      <OneEllipsis tag="span">{text}</OneEllipsis>
    </div>
  )
}
