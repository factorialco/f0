import * as NavigationMenuPrimitives from "@radix-ui/react-navigation-menu"
import { cva, type VariantProps } from "cva"
import { LayoutGroup, motion } from "motion/react"
import * as React from "react"
import { useId } from "react"
import { withSkeleton } from "../lib/skeleton"
import { cn } from "../lib/utils"
import { Skeleton } from "./skeleton"

function getSubtree(
  options: { asChild: boolean | undefined; children: React.ReactNode },
  content: React.ReactNode | ((children: React.ReactNode) => React.ReactNode)
) {
  const { asChild, children } = options
  if (!asChild) return typeof content === "function" ? content(children) : content

  const firstChild = React.Children.only(children) as React.ReactElement
  return React.cloneElement(firstChild, {
    children: typeof content === "function" ? content(firstChild.props.children) : content,
  })
}

const tabNavigationVariants = cva({
  base: "relative flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  variants: {
    secondary: {
      true: "bg-f1-foreground/[.02] dark:bg-f1-foreground/[.02]",
      false: "bg-f1-background-transparent pt-1",
    },
  },
  defaultVariants: {
    secondary: false,
  },
})

interface TabNavigationProps
  extends
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Root>,
    VariantProps<typeof tabNavigationVariants> {}

const TabNavigation = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Root>,
  TabNavigationProps
>(({ className, children, secondary, ...props }, forwardedRef) => {
  const id = useId()

  return (
    <NavigationMenuPrimitives.Root
      ref={forwardedRef}
      {...props}
      asChild={false}
      className="relative"
    >
      <div className="absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary" />
      <LayoutGroup id={id}>
        <NavigationMenuPrimitives.List
          className={cn(tabNavigationVariants({ secondary }), className)}
        >
          {children}
        </NavigationMenuPrimitives.List>
      </LayoutGroup>
    </NavigationMenuPrimitives.Root>
  )
})

TabNavigation.displayName = "TabNavigation"

const tabNavigationLinkVariants = cva({
  base: "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
  variants: {
    secondary: {
      true: "group-hover:ring-f1-border group-data-[active=true]:bg-f1-background-inverse-secondary group-data-[active=true]:text-f1-foreground group-data-[active=true]:ring-f1-border",
      false:
        "bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground",
    },
    disabled: {
      true: "pointer-events-none text-f1-foreground-disabled",
    },
  },
  defaultVariants: {
    secondary: false,
    disabled: false,
  },
})

interface TabNavigationLinkProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Link>, "onSelect">,
    VariantProps<typeof tabNavigationLinkVariants> {
  active?: boolean
}

const _TabNavigationLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Link>,
  TabNavigationLinkProps
>(function TabNavigationLink(
  { asChild, disabled, active, className, children, secondary, ...props },
  forwardedRef
) {
  return (
    <NavigationMenuPrimitives.Item className="flex">
      <NavigationMenuPrimitives.Link
        data-active={active ? "true" : undefined}
        aria-disabled={disabled || undefined}
        className={cn(
          "group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1",
          disabled ? "pointer-events-none" : ""
        )}
        ref={forwardedRef}
        onSelect={() => {}}
        asChild={asChild}
        {...props}
      >
        {getSubtree({ asChild, children }, (children) => (
          <span
            className={cn(
              "text-f1-foreground-secondary ring-1 ring-inset ring-transparent",
              tabNavigationLinkVariants({ secondary, disabled }),
              className
            )}
          >
            {children}
            {active && !secondary && (
              <motion.div
                layoutId="underline"
                className="absolute inset-x-0 -bottom-3 h-px bg-f1-background-inverse"
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.5,
                }}
              />
            )}
          </span>
        ))}
      </NavigationMenuPrimitives.Link>
    </NavigationMenuPrimitives.Item>
  )
})

const TabNavigationLinkSkeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <li className="list-none">
      <Skeleton
        className={cn("mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent", className)}
      >
        &nbsp;
      </Skeleton>
    </li>
  )
}

const TabNavigationLink = withSkeleton(_TabNavigationLink, TabNavigationLinkSkeleton)

export { TabNavigation, TabNavigationLink }
