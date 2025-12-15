import { F0Checkbox } from "@/components/F0Checkbox"
import { OneEllipsis } from "@/components/OneEllipsis"
import { Await } from "@/components/Utilities/Await"
import { useI18n } from "@/lib/providers/i18n"
import { Skeleton } from "@/ui/skeleton"

export type SelectAllProps = {
  selectedCount: number | Promise<number>
  value: boolean
  indeterminate: boolean
  onChange: (checked: boolean) => void
}

export const SelectAll = ({ selectedCount, indeterminate, value, onChange }: SelectAllProps) => {
  const i18n = useI18n()

  const handleChange = (checked: boolean) => {
    if (indeterminate) {
      onChange(false)
    } else {
      onChange(checked)
    }
  }

  return (
    <div className="flex items-center gap-2 p-1 pl-4 pr-3">
      <div className="flex-1 whitespace-nowrap">
        <Await resolve={selectedCount} fallback={<Skeleton className="h-4 w-4" />}>
          {(selectedCount: number) => (
            <OneEllipsis className="text-f1-foreground-secondary">
              {`${selectedCount} ${
                selectedCount === 1
                  ? i18n.status.selected.singular.toLowerCase()
                  : i18n.status.selected.plural.toLowerCase()
              }`}
            </OneEllipsis>
          )}
        </Await>
      </div>
      <div className="shrink-0">
        <F0Checkbox
          id="select-all"
          title={i18n.actions.selectAll}
          checked={indeterminate || value}
          indeterminate={indeterminate}
          onCheckedChange={handleChange}
          presentational
          hideLabel
        />
      </div>
    </div>
  )
}
