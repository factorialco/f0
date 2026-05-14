import { ComponentProps, FC, forwardRef } from "react"

import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0AvatarListProps } from "@/components/avatars/F0AvatarList/types"
import { FileItem } from "@/components/RichText/FileItem"
import { TagAlertProps } from "@/components/tags/F0TagAlert"
import { TagBalanceProps } from "@/components/tags/F0TagBalance"
import { TagListProps, TagType } from "@/components/tags/F0TagList"
import { TagRawProps } from "@/components/tags/F0TagRaw"
import { TagStatusProps } from "@/components/tags/F0TagStatus"
import { Weekdays } from "@/experimental/Widgets/Content/Weekdays"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { cn } from "@/lib/utils"

import { DataList } from "../DataList"

export type DetailsItemContent =
  | (ComponentProps<typeof DataList.Item> & {
      type: "item"
    })
  | (ComponentProps<typeof DataList.PersonItem> & {
      type: "person"
    })
  | (ComponentProps<typeof DataList.CompanyItem> & {
      type: "company"
    })
  | (ComponentProps<typeof DataList.TeamItem> & {
      type: "team"
    })
  | (ComponentProps<typeof Weekdays> & {
      type: "weekdays"
    })
  | (ComponentProps<typeof DataList.DotTagItem> & {
      type: "dot-tag"
    })
  | (TagAlertProps & {
      type: "alert-tag"
    })
  | (TagBalanceProps & {
      type: "balance-tag"
    })
  | (TagStatusProps & {
      type: "status-tag"
    })
  | (TagRawProps & {
      type: "raw-tag"
    })
  | {
      [T in TagType]: {
        type: "tag-list"
        tagList: TagListProps<T>
      }
    }[TagType]
  | {
      type: "avatar-list"
      avatarList: F0AvatarListProps
    }
  | (ComponentProps<typeof FileItem> & {
      type: "file"
    })

export interface DetailsItemType {
  title: string
  content: DetailsItemContent | DetailsItemContent[]
  isHorizontal?: boolean
  /**
   * When true inside a tableView, keeps the table-row padding but stacks
   * the label above the content instead of side-by-side. Useful for
   * long-form text fields like rich-text or textarea.
   */
  verticalLayout?: boolean
  spacingAtTheBottom?: boolean
}

const ItemContent: FC<{ content: DetailsItemContent }> = ({ content }) => (
  <>
    {content.type === "weekdays" && (
      <li className="list-none px-1.5 py-1">
        <Weekdays {...content} />
      </li>
    )}
    {content.type === "person" && <DataList.PersonItem {...content} />}
    {content.type === "item" && <DataList.Item {...content} />}
    {content.type === "team" && <DataList.TeamItem {...content} />}
    {content.type === "company" && <DataList.CompanyItem {...content} />}
    {content.type === "dot-tag" && <DataList.DotTagItem {...content} />}
    {content.type === "alert-tag" && <DataList.AlertTagItem {...content} />}
    {content.type === "balance-tag" && <DataList.BalanceTagItem {...content} />}
    {content.type === "status-tag" && <DataList.StatusTagItem {...content} />}
    {content.type === "raw-tag" && <DataList.RawTagItem {...content} />}
    {content.type === "tag-list" && (
      <DataList.TagListItem {...content.tagList} />
    )}
    {content.type === "avatar-list" && (
      <li className="list-none px-1.5 py-1">
        <F0AvatarList {...content.avatarList} />
      </li>
    )}
    {content.type === "file" && (
      <li className="list-none px-1.5 py-1">
        <FileItem {...content} />
      </li>
    )}
  </>
)

const _DetailsItem = forwardRef<HTMLDivElement, DetailsItemType>(
  function DetailsItem(
    {
      title,
      content,
      isHorizontal = false,
      verticalLayout = false,
      spacingAtTheBottom,
    },
    ref
  ) {
    const contentArray = Array.isArray(content) ? content : [content]

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-0.5",
          spacingAtTheBottom && !isHorizontal && "pb-3",
          isHorizontal && !verticalLayout && "xs:[&_ul>li]:p-0 [&_ul]:flex-1",
          isHorizontal &&
            verticalLayout &&
            "[&_ul>li>*]:px-0 [&_ul]:flex-1 xs:[&>div]:flex-col"
        )}
      >
        <DataList label={title} isHorizontal={isHorizontal}>
          {contentArray.map((c, i) => (
            <ItemContent key={i} content={c} />
          ))}
        </DataList>
      </div>
    )
  }
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const DetailsItem = withDataTestId(
  experimentalComponent("DetailsItem", _DetailsItem)
)
