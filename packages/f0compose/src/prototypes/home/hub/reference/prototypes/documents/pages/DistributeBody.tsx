import { F0Box, F0Card, F0Heading } from "@factorialco/f0-react"

import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"

import {
  distributeOptions,
  optionDescription,
  optionTitle,
} from "../mocks/distributeOptions"

const STR = {
  en: { sendInBulk: "Send in bulk" },
  es: { sendInBulk: "Envío masivo" },
} as const

/**
 * Distribute files ("Send in bulk") screen — reached from the Upload files
 * resource header. Shows the bulk-send methods as a grid of option cards. The
 * page shell + breadcrumb (Documents › Library › Distribute files) live in
 * DocumentsLayout / DocumentsHeader, so this is body-only.
 */
export function DistributeBody() {
  const locale = useLocale()
  return (
    <F0Box display="flex" flexDirection="column" gap="md" padding="lg">
      <F0Heading
        content={STR[locale].sendInBulk}
        variant="heading-large"
        as="h1"
      />
      <F0Box
        display="grid"
        columns="1"
        md={{ columns: "2" }}
        lg={{ columns: "4" }}
        gap="md"
      >
        {distributeOptions.map((option) => (
          <F0Card
            key={option.id}
            title={optionTitle(option, locale)}
            description={optionDescription(option, locale)}
            onClick={() => {}}
          />
        ))}
      </F0Box>
    </F0Box>
  )
}
