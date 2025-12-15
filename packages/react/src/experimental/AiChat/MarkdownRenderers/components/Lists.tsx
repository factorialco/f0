import { cn } from "@/lib/utils"

export function Ul({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul {...props} className={cn("list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", props.className)}>
      {children}
    </ul>
  )
}

export function Ol({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      {...props}
      className={cn("list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", props.className)}
    >
      {children}
    </ol>
  )
}

export function Li({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li {...props} className={cn("mb-2", props.className)}>
      {children}
    </li>
  )
}
