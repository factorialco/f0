import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { Cross, Reply } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type PendingQuote } from "../../F0AiChat/types"

type PendingQuoteChipProps = {
  quote: PendingQuote
  onRemove: () => void
}

/**
 * Inline "file chip"–style preview shown at the top of the composer when the
 * user is replying to a fragment. Single line, truncated, with a quote icon
 * on the left and a close button on the right. Mirrors the Figma spec of
 * the reply chip: compact, flush with the textarea, neutral background.
 */
export const PendingQuoteChip = ({
  quote,
  onRemove,
}: PendingQuoteChipProps) => {
  const translation = useI18n()

  return (
    <div className="p-1">
      <div
        className={cn(
          "flex items-start gap-2 justify-center",
          "rounded-[10px] bg-f1-background-hover pl-2 py-1.5 pr-1.5"
        )}
      >
        <div className="flex items-center py-0.5">
          <F0Icon icon={Reply} size="md" color="default" />
        </div>
        <OneEllipsis
          className="h-full flex-1 py-0.5 text-[12px] font-medium text-f1-foreground-secondary"
          lines={1}
        >
          {quote.text}
        </OneEllipsis>
        <ButtonInternal
          variant="ghost"
          label={translation.ai.removeQuote}
          onClick={onRemove}
          icon={Cross}
          hideLabel
          size="sm"
        />
      </div>
    </div>
  )
}
