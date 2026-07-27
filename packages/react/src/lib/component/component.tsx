import { forwardRef, PropsWithoutRef, useEffect } from "react"

import { useComponentXRay } from "../xray"
import { ComponentMetadata } from "./types"

/**
 * Static, per-component-type marker stamped on the root DOM node of every
 * component built with the {@link Component} factory. Unlike `data-testid`
 * (which is a per-instance, consumer-supplied test hook), this identifies
 * *which F0 component* rendered a node — the same value for every instance of
 * a given component — so static analysis / tooling can map DOM back to F0.
 */
export const F0_COMPONENT_NAME_ATTRIBUTE = "data-f0-component-name"

export const Component = <
  R extends HTMLElement | SVGElement,
  P extends React.RefAttributes<R>,
>(
  meta: ComponentMetadata,
  Component: React.FC<PropsWithoutRef<P>>
) => {
  const Forwarded = forwardRef<R, P>((props, forwardedRef) => {
    const { ref } = useComponentXRay(meta, forwardedRef)

    // Always mark the rendered root node with the component's F0 identity.
    // This is independent of XRay (a debug-only overlay) and always present.
    useEffect(() => {
      const element = ref.current
      if (element instanceof Element) {
        element.setAttribute(F0_COMPONENT_NAME_ATTRIBUTE, meta.name)
      }
    }, [ref, meta.name])

    return <Component ref={ref} {...props} />
  })
  Forwarded.displayName = `${meta.name}`
  return Forwarded
}
