import { cva, type VariantProps } from "cva"
import {
  BookOpen,
  CircleCheck,
  LucideProps,
  OctagonX,
  TriangleAlert,
} from "lucide-react"
import * as React from "react"

import { experimentalComponent } from "@/lib/experimental"

import { Component } from "../../../lib/component/component"
import { cn } from "../../../lib/utils"

type Variants = "destructive" | "positive" | "warning" | "info"

const alertVariants = cva({
  base: "relative w-full rounded-xl bg-f1-background-secondary p-6 text-f1-foreground [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-f1-foreground [&>svg~*]:pl-8",
  variants: {
    variant: {
      destructive: "bg-f1-background-critical [&>svg]:text-f1-icon-critical",
      positive: "bg-f1-background-positive [&>svg]:text-f1-icon-positive",
      warning: "bg-f1-background-warning [&>svg]:text-f1-icon-warning",
      info: "bg-f1-background-info [&>svg]:text-f1-icon-info",
    } satisfies Record<Variants, string>,
  },
  defaultVariants: {
    variant: "info",
  },
})

const variantIcons: Record<Variants, React.FC<LucideProps>> = {
  destructive: OctagonX,
  positive: CircleCheck,
  warning: TriangleAlert,
  info: BookOpen,
}

const _Alert = Component(
  {
    name: "Alert",
    type: "info",
  },
  // eslint-disable-next-line react/display-name
  React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
  >(({ className, variant = "info", children, ...props }, ref) => {
    const IconComponent = variant ? variantIcons[variant] : null

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex flex-row">
          {IconComponent && (
            <div className="mr-2 flex h-6 items-center">
              <IconComponent size={20} />
            </div>
          )}
          <div>{children}</div>
        </div>
      </div>
    )
  })
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
const Alert = experimentalComponent("Alert", _Alert)

const _AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(function AlertTitle({ className, ...props }, ref) {
  return (
    <h5
      ref={ref}
      className={cn("mb-1 text-base font-medium tracking-tight", className)}
      {...props}
    />
  )
})

/**
 * @experimental This is an experimental component use it at your own risk
 */
const AlertTitle = experimentalComponent("AlertTitle", _AlertTitle)

const _AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(function AlertDescription({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("[&_p]:leading-relaxed", className)}
      {...props}
    />
  )
})

/**
 * @experimental This is an experimental component use it at your own risk
 */
const AlertDescription = experimentalComponent(
  "AlertDescription",
  _AlertDescription
)

export { Alert, AlertDescription, AlertTitle }
