import {
  GranularityDefinition,
  GranularityDefinitionKey,
} from "@/components/OneCalendar"
import { useI18n } from "@/lib/providers/i18n"
import { Select, SelectContent, SelectItem } from "@/ui/Select"

interface GranularitySelectorProps {
  granularities: GranularityDefinitionKey[]
  value?: GranularityDefinitionKey
  onChange: (granularity: GranularityDefinitionKey) => void
  /** Definitions in play, so a data-driven granularity can name itself. */
  definitions?: Record<string, GranularityDefinition>
}

export function GranularitySelector({
  granularities,
  value,
  onChange,
  definitions,
}: GranularitySelectorProps) {
  const i18n = useI18n()

  const handleChange = (granularity: GranularityDefinitionKey) => {
    onChange(granularity)
  }

  const labelOf = (granularity: GranularityDefinitionKey) =>
    definitions?.[granularity]?.selectorLabel ||
    (
      i18n.date.granularities as Record<
        GranularityDefinitionKey,
        { label: string }
      >
    )[granularity]?.label ||
    granularity

  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-sm font-medium">{i18n.date.selectedBy}</h6>
      <Select value={value} onValueChange={handleChange} as="list">
        <SelectContent>
          {granularities.map((granularity) => (
            <SelectItem key={granularity} value={granularity}>
              {labelOf(granularity)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
