import { ChevronsDown } from "./ChevronsDown"

/**
 * The daily digest, out of the recommendation row and standing on its own
 * at the foot of Home (Angel, 2026-09-15). Fully rounded and a third
 * roomier than a recommendation pill, so it reads as the one standing
 * invitation on the canvas rather than as another suggestion. The double
 * chevron says the digest is DOWN there rather than behind a navigation.
 */
export function DailyDigestButton() {
  const scrollToDigest = () =>
    document
      .querySelector("[data-home-digest]")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <button
      type="button"
      onClick={scrollToDigest}
      // px-[13px]/px-[19px] is the pill's 10/14 plus a third.
      className="f0c-pressable inline-flex h-9 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border-none bg-f1-background-inverse-secondary pl-[19px] pr-[13px] text-base font-medium text-f1-foreground ring-1 ring-inset ring-f1-border backdrop-blur-[8px] hover:bg-f1-background-tertiary dark:bg-f1-background-tertiary"
    >
      View daily digest
      <ChevronsDown className="size-4 shrink-0 text-f1-icon" />
    </button>
  )
}
