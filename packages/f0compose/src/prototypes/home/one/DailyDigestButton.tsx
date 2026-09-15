import { F0Icon } from "@factorialco/f0-react"
import { Feed } from "@factorialco/f0-react/icons/app"

/**
 * The daily digest, out of the recommendation row and standing on its own
 * at the foot of Home (Angel, 2026-09-15). Fully rounded and a third
 * roomier than a recommendation pill, so it reads as the one standing
 * invitation on the canvas rather than as another suggestion.
 */
export function DailyDigestButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      // px-[13px]/px-[19px] is the pill's 10/14 plus a third.
      className="f0c-pressable inline-flex h-9 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border-none bg-f1-background-inverse-secondary pl-[13px] pr-[19px] text-base font-medium text-f1-foreground ring-1 ring-inset ring-f1-border backdrop-blur-[8px] hover:bg-f1-background-tertiary dark:bg-f1-background-tertiary"
    >
      <span className="flex size-5 shrink-0 items-center justify-center text-f1-icon">
        <F0Icon icon={Feed} size="md" color="currentColor" />
      </span>
      View daily digest
    </button>
  )
}
