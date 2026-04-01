import { ComponentPropsWithoutRef, forwardRef } from "react"

import { Skeleton } from "@/ui/skeleton"

/**
 * Loading skeleton for breadcrumb items
 */
const BreadcrumbSkeleton = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div ref={ref} className="px-1.5" {...props}>
    <Skeleton className="h-4 w-24" aria-hidden="true" />
  </div>
))

BreadcrumbSkeleton.displayName = "BreadcrumbSkeleton"

export { BreadcrumbSkeleton }
