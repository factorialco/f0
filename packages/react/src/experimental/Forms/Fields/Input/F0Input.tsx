import { experimentalComponent } from "@/lib/experimental"

/**
 * Public implementations of the ButtonInternal component.
 * Button component.
 */
import { InputInternal, type InputInternalProps } from "./internal"

const privateProps = ["buttonToggle"] as const

export type InputProps<T extends string> = Omit<
  InputInternalProps<T>,
  (typeof privateProps)[number]
>

const _Input = <T extends string>(props: InputProps<T>) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as InputInternalProps<string>)

  return <InputInternal {...publicProps} />
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Input = experimentalComponent("Input", _Input)
