import { cloneElement, isValidElement, type ReactNode } from "react"

/**
 * Suppresses the native browser tooltip from a tooltip's child element while
 * preserving its accessibility.
 *
 * F0 tooltips wrap their child through Radix's `asChild` (Slot). When that
 * child also carries a native HTML `title` (e.g. an icon button), the browser
 * shows its own tooltip on hover in addition to the F0 one, leaving the user
 * with two overlapping tooltips.
 *
 * The native browser tooltip is intrinsic to the `title` attribute — there's no
 * way to keep `title` and hide only the bubble. So we remove `title` and, when
 * the child has no other accessible name, promote the title text to an
 * `aria-label`. Screen readers still announce it; the browser has no `title`
 * left to render a tooltip from.
 */
export function stripNativeTitle(children: ReactNode): ReactNode {
  if (!isValidElement(children)) {
    return children
  }

  const props = children.props as {
    title?: unknown
    "aria-label"?: unknown
    "aria-labelledby"?: unknown
  }

  if (props.title == null) {
    return children
  }

  const nextProps: { title: undefined; "aria-label"?: string } = {
    title: undefined,
  }

  // Keep the title text as an accessible name when the child doesn't already
  // have one, so suppressing the native tooltip doesn't drop accessibility.
  const hasAccessibleName =
    props["aria-label"] != null || props["aria-labelledby"] != null
  if (!hasAccessibleName && typeof props.title === "string") {
    nextProps["aria-label"] = props.title
  }

  return cloneElement(children, nextProps)
}
