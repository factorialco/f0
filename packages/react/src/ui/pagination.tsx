import * as React from "react"
import { F0Icon } from "../components/F0Icon"
import { ChevronLeft, ChevronRight, EllipsisHorizontal } from "../icons/app"
import { cn, focusRing } from "../lib/utils"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex list-none flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex h-8 min-w-8 select-none items-center justify-center rounded px-1.5 font-medium text-f1-foreground-secondary transition-all hover:cursor-pointer hover:bg-f1-background-secondary-hover",
      isActive &&
        "bg-f1-background-selected-bold font-semibold text-f1-foreground-inverse hover:bg-f1-background-selected-bold-hover",
      focusRing(),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    role="button"
    aria-label="Go to previous page"
    className={cn(
      "border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background",
      className
    )}
    {...props}
  >
    <F0Icon icon={ChevronLeft} />
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    role="button"
    aria-label="Go to next page"
    className={cn(
      "border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background",
      className
    )}
    {...props}
  >
    <F0Icon icon={ChevronRight} />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <F0Icon icon={EllipsisHorizontal} />
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
