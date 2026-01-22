/**
 * Alert tag cell type for displaying alert indicators with labels.
 * Used for showing alerts on items in data collections.
 */
import { F0AvatarFlag } from "@/components/avatars/F0AvatarFlag"
import { OneEllipsis } from "@/components/OneEllipsis"
import { CountryCode } from "@/lib/countries"

import { ValueDisplayRendererContext } from "../../renderers"

interface CountryValue {
  code: CountryCode | (string & {})
  label?: string
}
export type CountryCellValue = CountryValue

export const CountryCell = (
  args: CountryCellValue,
  context: ValueDisplayRendererContext
) => {
  const countryName =
    args.label ?? context.i18n.countries[args.code as CountryCode] ?? args.code

  return (
    <div data-cell-type="country" className="flex items-center gap-2">
      <F0AvatarFlag size="sm" flag={args.code} aria-label={countryName} />{" "}
      <OneEllipsis className="min-w-0 flex-1 text-f1-foreground" tag="span">
        {countryName}
      </OneEllipsis>
    </div>
  )
}
