import ChevronRight from "@/icons/app/ChevronRight"
import { ComponentPropsWithoutRef, forwardRef } from "react"

const BreadcrumbSeparator = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<"span">>(
  (props, ref) => (
    <span
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className="h-4 w-4 text-f1-icon-secondary"
      {...props}
    >
      <ChevronRight />
    </span>
  )
)

BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

export { BreadcrumbSeparator }
