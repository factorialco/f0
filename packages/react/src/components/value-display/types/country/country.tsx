/**
 * Alert tag cell type for displaying alert indicators with labels.
 * Used for showing alerts on items in data collections.
 */
import { F0AvatarFlag } from "@/components/avatars/F0AvatarFlag"
import { CountryCode } from "@/lib/countries"
import { ValueDisplayRendererContext } from "../../renderers"

interface CountryValue {
  code: CountryCode
  label?: string
}
export type CountryCellValue = CountryValue

export const CountryCell = (
  args: CountryCellValue,
  context: ValueDisplayRendererContext
) => {
  const countryName =
    args.label ?? context.i18n.countries[args.code] ?? args.code

  return (
    <div data-cell-type="country">
      <F0AvatarFlag flag={args.code} aria-label={countryName} />{" "}
      {countryName ?? args.label}
    </div>
  )
}
