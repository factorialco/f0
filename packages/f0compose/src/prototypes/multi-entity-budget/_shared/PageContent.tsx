import type { ReactNode } from "react"

/**
 * Wraps the body of a `<Page>` so that the content does NOT sit flush against
 * the page header / Tabs. Mirrors the spacing upstream applies in the
 * Factorial product (top + horizontal padding plus vertical gap between
 * stacked sections).
 *
 * Use as the only direct child of `<Page>`:
 *
 *     <Page header={...}>
 *       <PageContent>
 *         ...
 *       </PageContent>
 *     </Page>
 */
export function PageContent({
  children,
  gap = "lg",
  padded = true,
}: {
  children: ReactNode
  gap?: "md" | "lg" | "xl"
  padded?: boolean
}) {
  const gapClass =
    gap === "md" ? "gap-4" : gap === "xl" ? "gap-8" : "gap-6"
  return (
    <div
      className={`flex flex-col ${gapClass} ${padded ? "px-6 py-6" : ""}`}
    >
      {children}
    </div>
  )
}
