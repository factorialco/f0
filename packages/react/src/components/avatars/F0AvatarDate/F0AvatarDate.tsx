import { getAbbreviateMonth, getDayOfMonth } from "@/lib/date"

import { BaseAvatarProps } from "../internal/BaseAvatar"

export type F0AvatarDateProps = {
  date: Date
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>

export const F0AvatarDate = ({
  date,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: F0AvatarDateProps) => {
  const dateDay = getDayOfMonth(date)
  const month = getAbbreviateMonth(date)

  return (
    <div
      className="flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      <div className="pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary">
        {month}
      </div>
      <div className="flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground">
        {dateDay}
      </div>
    </div>
  )
}
