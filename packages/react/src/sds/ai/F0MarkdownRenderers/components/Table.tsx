import { useRef } from "react"

import { cn } from "@/lib/utils"

export function Table({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  const ref = useRef<HTMLTableElement>(null)

  return (
    <div className="flex flex-col gap-2">
      <div className="group/table scrollbar-macos overflow-x-auto rounded-md border border-solid border-f1-border-secondary">
        <table
          ref={ref}
          {...props}
          className={cn(
            "w-full border-separate border-spacing-0",
            props.className
          )}
        >
          {children}
        </table>
      </div>
    </div>
  )
}

/**
 * Table variant without the built-in download button.
 * Used inside components that already provide their own download controls.
 */
export function TableSimple({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="flex flex-col gap-2 text-base [&_*]:text-base">
      <div className="scrollbar-macos overflow-x-auto rounded-md border border-solid border-f1-border-secondary">
        <table
          {...props}
          className={cn(
            "w-full border-separate border-spacing-0",
            props.className
          )}
        >
          {children}
        </table>
      </div>
    </div>
  )
}

export function Th({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      {...props}
      className={cn(
        "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
        props.className
      )}
    >
      {children}
    </th>
  )
}

export function Td({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      {...props}
      className={cn(
        "max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        props.className
      )}
    >
      {children}
    </td>
  )
}
