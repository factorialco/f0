import { F0Icon } from "@/components/F0Icon"
import {
  ResolvedRecordType,
  Select,
  SelectItemObject,
  SelectProps,
} from "@/experimental/Forms/Fields/Select"
import { ChevronDown } from "@/icons/app"
import { motion } from "motion/react"
import { useState } from "react"

export type BreadcrumbSelectProps<T extends string, R = unknown> = SelectProps<
  T,
  R
>

export function BreadcrumbSelect<T extends string, R = unknown>({
  ...props
}: BreadcrumbSelectProps<T, R>) {
  const [localOpen, setLocalOpen] = useState(props.open)

  const onOpenChangeLocal = (open: boolean) => {
    setLocalOpen(open)
    props.onOpenChange?.(open)
  }

  const [selectedLabel, setSelectedLabel] = useState(
    props.placeholder || props.label
  )

  const handleChange = (
    value: T,
    item?: ResolvedRecordType<R>,
    option?: SelectItemObject<T, ResolvedRecordType<R>>
  ) => {
    props.onChange?.(value, item, option)
  }

  const handleChangeSelectedOption = (
    option: SelectItemObject<T, ResolvedRecordType<R>>
  ) => {
    setSelectedLabel(option.label)
  }

  return (
    <Select<T, R>
      {...props}
      clearable={false}
      onOpenChange={onOpenChangeLocal}
      onChange={handleChange}
      onChangeSelectedOption={handleChangeSelectedOption}
      label={selectedLabel}
      hideLabel
    >
      <button className="flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary">
        <span className="block grow text-f1-foreground">{selectedLabel}</span>
        <div className="ml-2">
          <motion.div
            animate={{ rotate: localOpen ? 180 : 0 }}
            className="h-[16px] w-[16px]"
          >
            <F0Icon
              icon={ChevronDown}
              size="sm"
              className="rounded-2xs bg-f1-background-secondary p-0.5"
            />
          </motion.div>
        </div>
      </button>
    </Select>
  )
}
