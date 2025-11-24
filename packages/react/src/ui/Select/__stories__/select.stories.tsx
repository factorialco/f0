import type { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo, useState } from "react"
import { Circle, Desktop } from "../../../icons/app"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectProps,
  SelectTrigger,
  SelectValue,
} from "../index"

const SelectWithHooks = ({
  options,
  placeholder,
  as,
  ...props
}: SelectProps) => {
  const { value, multiple } = props
  const [localValue, setLocalValue] = useState<string | string[] | undefined>(
    value
  )

  const RenderSelect = (
    props: Omit<SelectProps, "value"> & {
      children: React.ReactNode
      value: string | string[] | undefined
      onValueChange: (value: string | string[]) => void
    }
  ) => {
    const { value: initialValue, defaultValue: _, multiple, ...rest } = props

    if (multiple) {
      const [value, setValue] = useState<string[] | undefined>(
        initialValue as string[] | undefined
      )
      const handleChange = (value: string[]) => {
        console.log("value", value)
        setValue(value)
        props.onValueChange(value)
      }
      return (
        <Select {...rest} value={value} onValueChange={handleChange} multiple>
          {props.children}
        </Select>
      )
    } else {
      const [value, setValue] = useState<string | undefined>(
        props.value as string | undefined
      )
      const handleChange = (value: string) => {
        console.log("value", value)
        setValue(value)
        props.onValueChange(value)
      }

      return (
        <Select
          {...rest}
          value={value}
          onValueChange={handleChange}
          multiple={false}
        />
      )
    }
  }

  const items = useMemo(
    () =>
      (options || []).map((option) => ({
        value: option.value,
        height: 40,
        item: <SelectItem value={option.value}>{option.label}</SelectItem>,
      })),
    [options]
  )

  const handleValueChange = (value: string | string[]) => {
    setLocalValue(value)
  }

  return (
    <>
      <RenderSelect
        value={localValue}
        multiple={multiple}
        as={as}
        {...props}
        onValueChange={handleValueChange}
      >
        <SelectTrigger>
          {localValue}
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent items={items} />
      </RenderSelect>
      <div className="mt-20">Selected: {JSON.stringify(localValue)}</div>
    </>
  )
}

const meta = {
  title: "Components/Select",
  component: SelectWithHooks,
  parameters: {
    a11y: {
      skipCi: true, // Todo add aria labels
    },
    //layout: "centered",
    docs: {
      description: {
        component:
          "<p>The `Select` component the base component for the `Select` component. It provides the basic styling and " +
          "functionality for the select component.</p>" +
          "<p>The pop content contains the list of items, but it can also contain a `Top` and/or `Bottom` content fixed" +
          " (not scrollable). Useful for searchboxes, buttons, etc</p>" +
          "<p>You can pass the options items as children or via the `items` props. When the items are passed in the " +
          "items props of `SelectContent` the list is virtualized to manage  huge amount of items",
      },
    },
  },
  args: {
    placeholder: "Select an option",
    multiple: false,
    options: [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" },
      { value: "system", label: "System" },
      ...Array.from({ length: 10 }, (_, i) => ({
        value: `option-${i}`,
        label: `Option ${i} very long content`,
      })),
    ],
  },
  tags: ["autodocs", "internal"],
} satisfies Meta<typeof SelectWithHooks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AsList: Story = {
  args: {
    as: "list",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Renders the select as a list. Removes the triger and keeps it always open.",
      },
    },
  },
}

export const Multiple: Story = {
  args: {
    value: ["light", "system"],
    multiple: true,
  },
  render: ({ options, placeholder }) => {
    const [value, setValue] = useState<string[]>([])

    return (
      <Select value={value} onValueChange={setValue} multiple>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const WithTopContent: Story = {
  render: ({ options, placeholder }) => {
    const [value, setValue] = useState("")

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          top={<div className="border-b border-f1-border p-3">Top Content</div>}
        >
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const WithBottomContent: Story = {
  render: ({ options, placeholder }) => {
    const [value, setValue] = useState("")

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          bottom={
            <div className="border-t border-f1-border p-3">Bottom Content</div>
          }
        >
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const WithBothTopAndBottom: Story = {
  render: ({ options, placeholder }) => {
    const [value, setValue] = useState("")

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          top={
            <div className="border-b border-f1-border p-3">
              Search or Filter
            </div>
          }
          bottom={
            <div className="border-t border-f1-border p-3">
              <button className="w-full text-center text-f1-foreground-secondary hover:text-f1-foreground">
                Add New Option
              </button>
            </div>
          }
        >
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

const words =
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(
    " "
  )

export const VirtualizedItems: Story = {
  args: {
    options: Array.from({ length: 10000 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${words[i % words.length]} ${i}`,
    })),
  },
}

export const WithCustomTrigger: Story = {
  render: ({ options }) => {
    const [value, setValue] = useState("")

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger asChild>
          <button className="flex h-10 w-full items-center justify-between rounded-md border border-f1-border bg-f1-background px-3 text-f1-foreground">
            <span>{value || "Select theme..."}</span>
            <Circle className="h-4 w-4" />
          </button>
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                <Desktop className="h-4 w-4" />
                {option.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}
