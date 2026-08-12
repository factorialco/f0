import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"

export const AppendTag = ({ text }: { text: string }) => {
  return (
    <div
      className={cn(
        // `text-f1-foreground-secondary`, not `-tertiary`: tertiary composites
        // to #8d98ae on a white field, which is 2.9:1 against the input
        // background and fails WCAG 2.0 SC 1.4.3 (AA needs 4.5:1). Secondary
        // composites to #647185 → 4.95:1.
        "flex h-[24px] max-w-20 items-center gap-2 rounded-sm border border-solid border-f1-border px-2 py-0.5 font-medium text-f1-foreground-secondary"
      )}
    >
      <OneEllipsis tag="span">{text}</OneEllipsis>
    </div>
  )
}
