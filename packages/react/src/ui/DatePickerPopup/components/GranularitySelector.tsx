import { GranularityDefinitionKey } from "@/experimental/OneCalendar"
import { useI18n } from "@/lib/providers/i18n"
import { Select, SelectContent, SelectItem } from "@/ui/Select"

interface GranularitySelectorProps {
  granularities: GranularityDefinitionKey[]
  value?: GranularityDefinitionKey
  onChange: (granularity: GranularityDefinitionKey) => void
}

export function GranularitySelector({ granularities, value, onChange }: GranularitySelectorProps) {
  const i18n = useI18n()

  const handleChange = (granularity: GranularityDefinitionKey) => {
    onChange(granularity)
  }

  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-sm font-medium">{i18n.date.selectedBy}</h6>
      <Select value={value} onValueChange={handleChange} as="list">
        <SelectContent>
          {granularities.map((granularity) => (
            <SelectItem key={granularity} value={granularity}>
              {(i18n.date.granularities as Record<GranularityDefinitionKey, { label: string }>)[
                granularity
              ]?.label || granularity}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
