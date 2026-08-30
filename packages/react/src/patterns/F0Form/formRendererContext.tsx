import { createContext, useContext } from "react"

import type {
  F0FormPropsWithSingleSchemaDefinition,
  F0FormSchema,
} from "./types"

export type F0FormRenderer = (
  props: F0FormPropsWithSingleSchemaDefinition<F0FormSchema>
) => React.ReactElement

const F0FormRendererContext = createContext<F0FormRenderer | undefined>(
  undefined
)

export const F0FormRendererProvider = F0FormRendererContext.Provider

export function useF0FormRenderer(): F0FormRenderer {
  const renderer = useContext(F0FormRendererContext)
  if (!renderer) {
    throw new Error("F0Form fields must be rendered inside F0Form")
  }
  return renderer
}
