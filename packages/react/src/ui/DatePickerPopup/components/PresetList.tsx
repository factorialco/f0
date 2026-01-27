import { isEqual } from "date-fns"
import { useEffect, useState } from "react"

import { Select, SelectContent, SelectItem, SelectSeparator } from "@/ui/Select"

import { DatePickerValue, DatePreset } from "../types"

export type PresetListProps = {
  presets: DatePreset[]
  date: DatePickerValue | undefined
  onSelect?: (preset: string) => void
}

const presetCustom = "__custom__"

const isDateMatchingPreset = (
  date: DatePickerValue | undefined,
  preset: DatePreset
): boolean => {
  if (!date?.value) return false

  const presetRange =
    typeof preset.value === "function" ? preset.value() : preset.value

  // Check if the granularity matches
  if (date.granularity !== preset.granularity) return false

  // Check if the date ranges match
  return (
    isEqual(date.value.from, presetRange.from) &&
    (!date.value.to ||
      !presetRange.to ||
      isEqual(date.value.to, presetRange.to))
  )
}

export const PresetList = ({ presets, ...props }: PresetListProps) => {
  const [currentPreset, setCurrentPreset] = useState<string | undefined>()

  useEffect(() => {
    if (props.date) {
      // Find the first preset that matches the current date
      const matchingPreset = Object.entries(presets).find(([_, preset]) =>
        isDateMatchingPreset(props.date, preset)
      )

      setCurrentPreset(matchingPreset ? matchingPreset[0] : undefined)
    }
  }, [props.date, presets])

  const handlePresetSelect = (preset: string) => {
    setCurrentPreset(preset)
    props.onSelect?.(preset)
  }

  return (
    <Select as="list" value={currentPreset} onValueChange={handlePresetSelect}>
      <SelectContent>
        {Object.entries(presets).map(([key, preset]) => (
          <SelectItem key={key} value={key}>
            {preset?.label || key}
          </SelectItem>
        ))}
        <SelectSeparator />
        <SelectItem key={presetCustom} value={presetCustom}>
          Custom
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
