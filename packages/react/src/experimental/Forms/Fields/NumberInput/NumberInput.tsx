import { experimentalComponent } from "@/lib/experimental"
import { NumberInputInternal, NumberInputInternalProps } from "./internal"

const privateProps = ["buttonToggle"] as const

export type NumberInputProps = Omit<
  NumberInputInternalProps,
  (typeof privateProps)[number]
>

const NumberInputComponent = (props: NumberInputProps) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as NumberInputInternalProps)

  return <NumberInputInternal {...publicProps} />
}

export const NumberInput = experimentalComponent<typeof NumberInputComponent>(
  "NumberInput",
  NumberInputComponent
)
