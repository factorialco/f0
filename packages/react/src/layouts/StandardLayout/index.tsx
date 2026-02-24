import { cva, type VariantProps } from "cva"
import React from "react"

import { Component } from "@/lib/component/component"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import { LayoutProvider } from "../LayoutProvider"

export interface StandardLayoutProps extends VariantProps<
  typeof layoutVariants
> {
  children?: React.ReactNode
}

const layoutVariants = cva({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg",
    },
  },
})

const _StandardLayout = React.forwardRef<
  HTMLElement,
  StandardLayoutProps & React.HTMLAttributes<HTMLElement>
>(({ children, variant, className, ...props }, ref) => {
  return (
    <LayoutProvider layout="standard">
      <section
        ref={ref}
        className={cn("relative flex-1 overflow-auto", className)}
        {...props}
      >
        <div className={cn(layoutVariants({ variant }))}>{children}</div>
      </section>
    </LayoutProvider>
  )
})

_StandardLayout.displayName = "StandardLayout"

export const StandardLayout = withDataTestId(
  Component(
    {
      name: "StandardLayout",
      type: "layout",
    },
    _StandardLayout
  )
)
