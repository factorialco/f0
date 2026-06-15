import { cloneElement, isValidElement, type ReactNode } from "react"

/**
 * Removes the native HTML `title` attribute from a tooltip's child element.
 *
 * F0 tooltips wrap their child through Radix's `asChild` (Slot). When that
 * child also carries a native `title` (e.g. an icon button), the browser shows
 * its own tooltip on hover in addition to the F0 one, leaving the user with two
 * overlapping tooltips. Stripping the `title` here keeps only the F0 tooltip.
 */
export function stripNativeTitle(children: ReactNode): ReactNode {
  if (!isValidElement(children)) {
    return children
  }

  const { title } = children.props as { title?: unknown }
  if (title == null) {
    return children
  }

  return cloneElement(children, { title: undefined })
}
