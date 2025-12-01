import { F0Button } from "@/components/F0Button"
import { F0Link } from "@/components/F0Link/F0Link"
import DownloadIcon from "@/icons/app/Download"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { type AssistantMessageProps } from "@copilotkit/react-ui"
import { useCallback, useRef } from "react"
import { downloadTableAsExcel } from "./utils/tableExport"

/**
 * Table wrapper component with max height, scroll, and download button
 */
function TableWrapper({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  const translations = useI18n()
  const tableRef = useRef<HTMLTableElement>(null)

  const handleExport = useCallback(() => {
    if (tableRef.current) {
      downloadTableAsExcel(
        tableRef.current,
        translations.ai.generatedTableFilename
      )
    }
  }, [translations.ai.generatedTableFilename])

  return (
    <div className="mb-2 flex flex-col gap-2">
      <div className="max-h-[600px] overflow-auto rounded-md border border-solid border-f1-border-secondary">
        <table
          ref={tableRef}
          {...props}
          className={cn(
            "w-full border-separate border-spacing-0",
            props.className
          )}
        >
          {children}
        </table>
      </div>
      <div className="flex justify-start">
        <F0Button
          variant="outline"
          size="sm"
          label={translations.ai.exportTable}
          icon={DownloadIcon}
          onClick={handleExport}
        />
      </div>
    </div>
  )
}

export const markdownRenderers: NonNullable<
  AssistantMessageProps["markdownTagRenderers"]
> = {
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={cn("text-base font-normal", props.className)}>
      {children}
    </p>
  ),
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      {...props}
      className={cn(
        "mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0",
        props.className
      )}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className={cn(
        "mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0",
        props.className
      )}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className={cn(
        "mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0",
        props.className
      )}
    >
      {children}
    </h3>
  ),
  a: ({
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <F0Link {...props} variant="link" href={props.href}>
      {children}
    </F0Link>
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <strong {...props} className={cn("font-semibold", props.className)}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <em {...props} className={cn("italic", props.className)}>
      {children}
    </em>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className={cn("mb-2", props.className)}>
      {children}
    </li>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      {...props}
      className={cn(
        "relative mx-0 my-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2",
        props.className
      )}
    >
      {children}
    </pre>
  ),
  blockquote: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className={cn(
        "m-0 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-4",
        props.className
      )}
    >
      {children}
    </blockquote>
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      {...props}
      className={cn("my-3 border-0 border-t border-f1-border", props.className)}
    />
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      className={cn(
        "list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        props.className
      )}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      className={cn(
        "list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        props.className
      )}
    >
      {children}
    </ol>
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <TableWrapper {...props} />
  ),
  th: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      {...props}
      className={cn(
        "border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
        // Make header sticky when scrolling vertically
        "sticky top-0",
        props.className
      )}
    >
      {children}
    </th>
  ),
  td: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      {...props}
      className={cn(
        "border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        props.className
      )}
    >
      {children}
    </td>
  ),
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const handleDownload = () => {
      if (src) {
        const link = document.createElement("a")
        link.href = src
        link.download = alt || "image"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }

    return (
      <div className="relative w-fit">
        <img
          {...props}
          src={src}
          alt={alt}
          className={cn("max-w-full rounded-md", props.className)}
        />
        <div className="absolute right-2 top-2 rounded bg-f1-background-inverse-secondary">
          <F0Button
            variant="neutral"
            label={"t.actions.save"}
            hideLabel
            icon={DownloadIcon}
            onClick={handleDownload}
          />
        </div>
      </div>
    )
  },
}
