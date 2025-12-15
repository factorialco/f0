import { cn } from "@/lib/utils"
import React, { forwardRef } from "react"
import { DetailsItem, DetailsItemType } from "../DetailsItem"

interface DetailsItemsListProps {
  title?: string
  tableView?: boolean
  details: DetailsItemType[]
}

export const DetailsItemsList = forwardRef<HTMLDivElement, DetailsItemsListProps>(
  function DetailsItemList({ title, tableView = false, details }, ref) {
    return (
      <div ref={ref} className="flex flex-col gap-4">
        {!!title && (
          <p className="mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary">
            {title.toLocaleUpperCase()}
          </p>
        )}
        <div
          className={cn(
            "flex flex-col",
            tableView
              ? "max-w-[580px] rounded-md border border-solid border-f1-border-secondary"
              : "gap-3"
          )}
        >
          {details?.map((item, index) => (
            <React.Fragment key={item.title}>
              <DetailsItem
                title={item.title}
                key={item.title}
                content={item.content}
                spacingAtTheBottom={item.spacingAtTheBottom}
                isHorizontal={tableView}
              />
              {tableView && index !== details.length - 1 && (
                <div className="h-[1px] w-full bg-f1-border-secondary" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  }
)
