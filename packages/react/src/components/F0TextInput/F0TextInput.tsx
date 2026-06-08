import { experimentalComponent } from "@/lib/experimental"

import { InputInternal, type InputInternalProps } from "./internal"

const privateProps = ["buttonToggle"] as const

export type F0TextInputProps<T extends string> = Omit<
  InputInternalProps<T>,
  (typeof privateProps)[number]
>

const _F0TextInput = <T extends string>(props: F0TextInputProps<T>) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as InputInternalProps<string>)

  return <InputInternal {...publicProps} />
}

/**
 * @experimental This is an experimental component, use it at your own risk.
 *
 * F0TextInput is the writable text field for forms — a box where the user
 * types text, numbers (as text), passwords, emails, etc. It is the canonical
 * "text input" of F0. For numeric or duration data prefer F0NumberInput or
 * F0DurationInput respectively.
 */
export const F0TextInput = experimentalComponent("F0TextInput", _F0TextInput)
