import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { Cross, Quote } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type PendingQuote } from "../../../types"

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
    <div className="px-1 pt-1">
      <div
        className={cn(
          "flex items-start gap-2",
          "rounded-md bg-f1-background-tertiary py-1 px-2"
        )}
      >
        <F0Icon icon={Quote} size="md" />
        <OneEllipsis
          className="my-1 flex-1 text-sm text-f1-foreground-secondary"
          lines={2}
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
