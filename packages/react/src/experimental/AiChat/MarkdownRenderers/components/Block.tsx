import { cn } from "@/lib/utils"

export function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      {...props}
      className={cn(
        "relative mx-0 my-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2",
        props.className
      )}
    >
      {children}
    </pre>
  )
}

export function Blockquote({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      {...props}
      className={cn(
        "m-0 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-4",
        props.className
      )}
    >
      {children}
    </blockquote>
  )
}

export function Hr({ ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr {...props} className={cn("my-3 border-0 border-t border-f1-border", props.className)} />
  )
}
