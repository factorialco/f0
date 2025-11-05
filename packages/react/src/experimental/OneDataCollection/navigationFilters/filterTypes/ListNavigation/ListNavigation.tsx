import { F0ListNavigation } from "@/components/F0ListNavigation"
import { ListNavigationProps } from "./types"

export function ListNavigation({
  value,
  onChange,
  filter,
}: ListNavigationProps) {
  if (filter.options.length === 0) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      <F0ListNavigation
        value={value}
        onChange={onChange}
        options={filter.options}
      />
    </div>
  )
}
