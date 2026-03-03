import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"
import { cn } from "@/lib/utils"

import {
  AlertTagItem,
  BalanceTagItem,
  CompanyItem,
  DotTagItem,
  Item,
  PersonItem,
  RawTagItem,
  StatusTagItem,
  TagListItem,
  TeamItem,
} from "./items"
import type { DataListProps } from "./types"

export type {
  ActionType,
  CopyActionType,
  DataListProps,
  ItemProps,
  NavigateActionType,
  OpenLinkActionType,
} from "./types"

const _DataList = forwardRef<HTMLUListElement, DataListProps>(
  ({ children, label, isHorizontal = false }, ref) => {
    return (
      <div
        className={cn(
          isHorizontal
            ? "flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row"
            : "min-w-32 md:max-w-80"
        )}
      >
        {label && (
          <p
            className={cn(
              "px-1.5 text-f1-foreground-secondary",
              isHorizontal ? "mt-2 w-44 xs:px-0" : "mb-0.5"
            )}
          >
            {label}
          </p>
        )}
        <ul className="flex flex-col justify-center gap-0.5" ref={ref}>
          {children}
        </ul>
      </div>
    )
  }
)

_DataList.displayName = "DataList"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const _DataListComponent = experimentalComponent("DataList", _DataList)

export const DataList = Object.assign(_DataListComponent, {
  Item,
  CompanyItem,
  PersonItem,
  TeamItem,
  DotTagItem,
  AlertTagItem,
  BalanceTagItem,
  StatusTagItem,
  RawTagItem,
  TagListItem,
})
