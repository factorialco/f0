import * as React from "react"

import { cn } from "../lib/utils"

import ChevronRight from "../icons/app/ChevronRight"
import InfoCircleLine from "../icons/app/InfoCircleLine"

import { Icon, IconType } from "@/components/Utilities/Icon"
import { Link } from "@/lib/linkHandler"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="article"
    className={cn(
      "flex flex-col items-stretch rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-4 shadow",
      className
    )}
    {...props}
  />
))

Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row gap-1.5", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-base font-medium text-f1-foreground", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "line-clamp-1 text-base font-normal text-f1-foreground-secondary",
      className
    )}
    {...props}
  />
))
CardSubtitle.displayName = "CardSubtitle"

const CardInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, content }, ref) => (
  <div
    ref={ref}
    className={cn("-ml-1 flex h-6 w-6 items-center justify-center", className)}
  >
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="h-5 w-5 cursor-help text-f1-foreground-secondary"
          aria-label={content}
        >
          <Icon icon={InfoCircleLine} size="md" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
))
CardInfo.displayName = "CardInfo"

const CardLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { icon?: IconType }
>(({ className, title, icon = ChevronRight, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      className={cn(
        "group inline-flex aspect-square h-6 items-center justify-center gap-1", //layout
        "rounded-sm border border-solid border-f1-border bg-f1-background-inverse-secondary", //appearance
        "whitespace-nowrap px-0 text-base font-medium text-f1-foreground", //typography
        "cursor-pointer transition-colors hover:border-f1-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1", //interaction
        className
      )}
      aria-label={title}
      {...props}
      role="link"
    >
      <Icon size="sm" icon={icon} className="text-f1-icon-bold" />
    </Link>
  )
})
CardLink.displayName = "CardLink"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex grow flex-col", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

const CardComment = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function CardComment({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("flex text-3xl font-semibold", className)}
      {...props}
    />
  )
})
CardFooter.displayName = "CardComment"

export {
  Card,
  CardComment,
  CardContent,
  CardFooter,
  CardHeader,
  CardInfo,
  CardLink,
  CardSubtitle,
  CardTitle,
}
