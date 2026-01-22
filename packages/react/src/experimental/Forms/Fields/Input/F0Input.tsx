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

export const Input = <T extends string>(props: InputProps<T>) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as InputInternalProps<string>)

  return <InputInternal {...publicProps} />
}
