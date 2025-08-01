import { OverflowList } from "@/ui/OverflowList"
import { Chip, type ChipProps } from "../OneChip"
import { ChipCounter } from "./ChipCounter"

type Props = {
  /**
   * Array of chips to display.
   */
  chips: Array<ChipProps>

  /**
   * The maximum number of chips to display.
   * @default 4
   */
  max?: number

  /**
   * The remaining number to display.
   */
  remainingCount?: number

  /**
   * The layout of the chip list.
   * - "fill" - Chips will expand to fill the available width, with overflow items shown in a counter
   * - "compact" - Chips will be stacked together up to the max limit, with remaining shown in counter
   * @default "compact"
   */
  layout?: "fill" | "compact"
}

export const ChipList = ({
  chips,
  max = 4,
  remainingCount: initialRemainingCount,
  layout = "compact",
}: Props) => {
  if (layout === "fill") {
    return (
      <OverflowList
        items={chips}
        renderListItem={(chip) => <Chip {...chip} />}
        renderDropdownItem={() => null}
        forceShowingOverflowIndicator={initialRemainingCount !== undefined}
        renderOverflowIndicator={(count) => (
          <ChipCounter
            count={(initialRemainingCount ?? 0) + count}
            list={
              initialRemainingCount
                ? undefined
                : chips.slice(chips.length - count)
            }
          />
        )}
        overflowIndicatorWithPopover={false}
        className="flex-1"
      />
    )
  }

  const visibleChips = chips.slice(0, max)
  const remainingChips = chips.slice(max)
  const remainingCount = initialRemainingCount ?? chips.length - max
  const showCounter = remainingCount > 0

  return (
    <div className="flex items-center gap-2">
      {visibleChips.map((chip, index) => {
        return <Chip key={index} {...chip} />
      })}

      {showCounter && (
        <ChipCounter
          count={remainingCount}
          list={initialRemainingCount ? undefined : remainingChips}
        />
      )}
    </div>
  )
}

ChipList.displayName = "ChipList"
