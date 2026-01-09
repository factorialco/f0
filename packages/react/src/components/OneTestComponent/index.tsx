import { forwardRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import "./OneTestComponent.css"

// Type definitions and interfaces
export interface OneTestComponentProps {
  children?: ReactNode
  className?: string
  variant?: "default" | "outlined" | "filled"
}

export interface TestHeaderProps {
  title?: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export interface TestContentProps {
  children?: ReactNode
  className?: string
  padding?: "none" | "small" | "medium" | "large"
}

export interface TestFooterProps {
  children?: ReactNode
  className?: string
  align?: "left" | "center" | "right"
}

export interface TestSidebarProps {
  children?: ReactNode
  className?: string
  position?: "left" | "right"
}

// Main component implementation
export const OneTestComponent = forwardRef<
  HTMLDivElement,
  OneTestComponentProps
>(({ children, className, variant = "default" }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "one-test-component",
        `one-test-component--${variant}`,
        className
      )}
    >
      {children}
    </div>
  )
})

OneTestComponent.displayName = "OneTestComponent"

// Subcomponent: TestHeader
export const TestHeader = forwardRef<HTMLDivElement, TestHeaderProps>(
  ({ title, subtitle, children, className }, ref) => {
    return (
      <div ref={ref} className={cn("test-header", className)}>
        {title && <h3 className="test-header__title">{title}</h3>}
        {subtitle && <p className="test-header__subtitle">{subtitle}</p>}
        {children}
      </div>
    )
  }
)

TestHeader.displayName = "TestHeader"

// Subcomponent: TestContent
export const TestContent = forwardRef<HTMLDivElement, TestContentProps>(
  ({ children, className, padding = "medium" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "test-content",
          `test-content--padding-${padding}`,
          className
        )}
      >
        {children}
      </div>
    )
  }
)

TestContent.displayName = "TestContent"

// Subcomponent: TestFooter
export const TestFooter = forwardRef<HTMLDivElement, TestFooterProps>(
  ({ children, className, align = "right" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("test-footer", `test-footer--align-${align}`, className)}
      >
        {children}
      </div>
    )
  }
)

TestFooter.displayName = "TestFooter"

// Subcomponent: TestSidebar
export const TestSidebar = forwardRef<HTMLElement, TestSidebarProps>(
  ({ children, className, position = "left" }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "test-sidebar",
          `test-sidebar--position-${position}`,
          className
        )}
      >
        {children}
      </aside>
    )
  }
)

TestSidebar.displayName = "TestSidebar"
