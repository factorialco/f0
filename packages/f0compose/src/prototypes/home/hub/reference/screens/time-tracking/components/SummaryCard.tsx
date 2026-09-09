import {
  F0Box,
  F0Button,
  F0Heading,
  F0TagRaw,
  F0Text,
  type IconType,
} from "@factorialco/f0-react"
import { ChevronRight } from "@factorialco/f0-react/icons/app"

import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"

const STR = {
  en: { openDetails: "Open details" },
  es: { openDetails: "Ver detalles" },
} as const

/**
 * Headline metric card used on the My timesheet tab (Balance, Extra hours): a
 * title, a short status note, and a large signed value with its icon. An
 * optional chevron action opens the breakdown (decorative in the prototype).
 */
export function SummaryCard({
  title,
  note,
  value,
  icon,
  onOpen,
}: {
  title: string
  note: string
  value: string
  icon: IconType
  onOpen?: () => void
}) {
  const locale = useLocale()
  const t = STR[locale]
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="sm"
      padding="lg"
      border="default"
      borderColor="secondary"
      borderRadius="xl"
    >
      <F0Box display="flex" alignItems="center" justifyContent="between">
        <F0Text content={title} variant="label" />
        {onOpen ? (
          <F0Button
            label={t.openDetails}
            icon={ChevronRight}
            hideLabel
            variant="ghost"
            onClick={onOpen}
          />
        ) : null}
      </F0Box>
      <F0Text content={note} variant="description" />
      <F0Box display="flex" alignItems="center" gap="sm">
        <F0TagRaw onlyIcon icon={icon} text={title} />
        <F0Heading content={value} variant="heading-large" as="h3" />
      </F0Box>
    </F0Box>
  )
}
