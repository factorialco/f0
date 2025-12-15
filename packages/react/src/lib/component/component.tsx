import { forwardRef, PropsWithoutRef } from "react"
import { useComponentXRay } from "../xray"
import { ComponentMetadata } from "./types"

export const Component = <R extends HTMLElement | SVGElement, P extends React.RefAttributes<R>>(
  meta: ComponentMetadata,
  Component: React.FC<PropsWithoutRef<P>>
) => {
  const Forwarded = forwardRef<R, P>((props, forwardedRef) => {
    const { ref } = useComponentXRay(meta, forwardedRef)

    return <Component ref={ref} {...props} />
  })
  Forwarded.displayName = `${meta.name}`
  return Forwarded
}
