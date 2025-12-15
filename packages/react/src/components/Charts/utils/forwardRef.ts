import { forwardRef, PropsWithoutRef } from "react"

export function fixedForwardRef<T, P>(
  render: (props: PropsWithoutRef<P>, ref: React.Ref<T>) => React.ReactNode
) {
  return forwardRef(render) as (props: P & React.RefAttributes<T>) => React.ReactNode
}
