import { cn } from "@/lib/utils"

export function P({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...props} className={cn("text-base font-normal", props.className)}>
      {children}
    </p>
  )
}

export function H1({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn("mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0", props.className)}
    >
      {children}
    </h1>
  )
}

export function H2({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={cn(
        "mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0",
        props.className
      )}
    >
      {children}
    </h2>
  )
}

export function H3({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn("mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0", props.className)}
    >
      {children}
    </h3>
  )
}

export function Strong({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <strong {...props} className={cn("font-semibold", props.className)}>
      {children}
    </strong>
  )
}

export function Em({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <em {...props} className={cn("italic", props.className)}>
      {children}
    </em>
  )
}
