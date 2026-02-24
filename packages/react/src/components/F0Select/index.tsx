import type { ReactElement } from "react"

import type { WithDataTestIdProps } from "@/lib/data-testid"

import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import type { F0SelectProps } from "./types"

import { F0Select as F0SelectComponent } from "./F0Select"

export * from "./types"

/**
 * Generic component type so consumers can use <F0Select<T, R> />.
 * Preserves dataTestId and F0SelectProps<T, R>.
 */
type F0SelectGeneric = <T extends string, R = unknown>(
  props: F0SelectProps<T, R> & WithDataTestIdProps
) => ReactElement | null

const F0SelectWrapped = withDataTestId(
  experimentalComponent("F0Select", F0SelectComponent)
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0Select = F0SelectWrapped as unknown as F0SelectGeneric
