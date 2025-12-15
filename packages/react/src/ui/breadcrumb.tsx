import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { AnimatePresence, LayoutGroup } from "motion/react"
import { ComponentProps, forwardRef, useId } from "react"

import { Link } from "../lib/linkHandler"
import { cn } from "../lib/utils"

const Breadcrumb = forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, children, ...props }, ref) => {
    const id = useId()

    return (
      <ol
        ref={ref}
        className={cn(
          "flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary",
          className
        )}
        {...props}
      >
        <LayoutGroup id={id}>
          <AnimatePresence initial={false}>{children}</AnimatePresence>
        </LayoutGroup>
      </ol>
    )
  }
)

BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = ({ className, ...props }: ComponentProps<"li">) => (
  <li className={cn("inline-flex items-center gap-0.5 pr-1", className)} {...props} />
)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : Link

  return (
    <Comp
      ref={ref}
      className={cn(
        "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
        className
      )}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("truncate px-1.5 py-0.5 text-f1-foreground", className)}
      {...props}
    />
  )
)
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("flex align-bottom", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
