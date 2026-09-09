import { F0Box, F0Button, F0Text } from "@factorialco/f0-react"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "@factorialco/f0-react/icons/app"

import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"

const STR = {
  en: {
    prevWeek: "Previous week",
    nextWeek: "Next week",
    thisWeek: "This week",
  },
  es: {
    prevWeek: "Semana anterior",
    nextWeek: "Semana siguiente",
    thisWeek: "Esta semana",
  },
} as const

/**
 * The week navigator from the reference screen: a bordered `< label >` segment
 * plus a "This week" reset button. Pure presentation — the parent owns the week
 * offset and passes the formatted label + handlers.
 */
export function WeekNavigator({
  label,
  onPrev,
  onNext,
  onThisWeek,
}: {
  label: string
  onPrev: () => void
  onNext: () => void
  onThisWeek: () => void
}) {
  const locale = useLocale()
  const t = STR[locale]
  return (
    <F0Box display="flex" alignItems="center" gap="sm">
      <F0Box
        display="flex"
        alignItems="center"
        gap="xs"
        border="default"
        borderColor="secondary"
        borderRadius="md"
        paddingX="xs"
      >
        <F0Button
          label={t.prevWeek}
          icon={ChevronLeft}
          hideLabel
          variant="ghost"
          onClick={onPrev}
        />
        <F0Text content={label} variant="label" />
        <F0Button
          label={t.nextWeek}
          icon={ChevronRight}
          hideLabel
          variant="ghost"
          onClick={onNext}
        />
      </F0Box>
      <F0Button
        label={t.thisWeek}
        icon={Calendar}
        variant="outline"
        onClick={onThisWeek}
      />
    </F0Box>
  )
}
