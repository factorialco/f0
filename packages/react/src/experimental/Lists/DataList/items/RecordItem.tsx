import { forwardRef } from "react"
import { F0TagAlert } from "@/components/tags/F0TagAlert"
import { F0TagBalance } from "@/components/tags/F0TagBalance"
import { F0TagDot } from "@/components/tags/F0TagDot"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { experimentalComponent } from "@/lib/experimental"
import { Progress } from "@/ui/progress"
import { ItemContainer } from "../ItemContainer"
import type { RecordDetail, RecordItemProps, RecordProgress } from "../types"
import { getInternalAction } from "../utils"

// `type` is only the discriminator; strip it so it never reaches a tag.
const RecordDetailTag = ({ detail }: { detail: RecordDetail }) => {
  switch (detail.type) {
    case "status-tag": {
      const { type: _type, ...props } = detail
      return <F0TagStatus {...props} />
    }
    case "alert-tag": {
      const { type: _type, ...props } = detail
      return <F0TagAlert {...props} />
    }
    case "dot-tag": {
      const { type: _type, ...props } = detail
      return <F0TagDot {...props} />
    }
    case "raw-tag": {
      const { type: _type, ...props } = detail
      return <F0TagRaw {...props} />
    }
    case "balance-tag": {
      const { type: _type, ...props } = detail
      return <F0TagBalance {...props} />
    }
    default: {
      const _exhaustiveCheck: never = detail
      return _exhaustiveCheck
    }
  }
}

const RecordProgressBar = ({
  progress,
  title,
}: {
  progress: RecordProgress
  title: string
}) => {
  const max = progress.max ?? 100
  const percentage = Math.min(100, Math.max(0, (progress.value / max) * 100))
  const label = progress.label ?? `${Math.round(percentage)}%`

  return (
    <div className="flex items-center gap-2 pt-1">
      <Progress
        value={percentage}
        max={100}
        color="hsl(var(--positive-50))"
        className="h-1.5"
        aria-label={`${title} progress`}
        getValueLabel={() => label}
      />
      <span className="shrink-0 text-sm font-medium text-f1-foreground">
        {label}
      </span>
    </div>
  )
}

const _RecordItem = forwardRef<HTMLLIElement, RecordItemProps>(
  ({ title, description, detail, progress, action }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        text={title}
        action={getInternalAction(action, title)}
        // The detail tag already sits at the right edge; a chevron beside it
        // crowds the row. Hover and the link itself carry the affordance.
        hideChevron
        content={
          // The tag gets its own column so it never stretches the title line
          // and the text keeps its 2px stack. Its box matches the title's
          // line height, so the tag centers on the title, not on the row.
          <div className="flex min-w-0 flex-1 flex-col text-left">
            <div className="flex min-w-0 items-start gap-2">
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="truncate">{title}</span>
                {description ? (
                  <span className="font-normal text-f1-foreground-secondary">
                    {description}
                  </span>
                ) : null}
              </div>
              {detail ? (
                <span className="flex h-5 shrink-0 items-center">
                  <RecordDetailTag detail={detail} />
                </span>
              ) : null}
            </div>
            {/* The bar spans the row, under both the text and the tag. */}
            {progress ? (
              <RecordProgressBar progress={progress} title={title} />
            ) : null}
          </div>
        }
      />
    )
  }
)

_RecordItem.displayName = "DataList.RecordItem"

/**
 * @experimental This is an experimental component, use it at your own risk
 */
export const RecordItem = experimentalComponent(
  "DataList.RecordItem",
  _RecordItem
)
