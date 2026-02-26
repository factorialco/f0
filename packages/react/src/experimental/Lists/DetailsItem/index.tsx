import { ComponentProps, FC, forwardRef } from "react"

import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0AvatarListProps } from "@/components/avatars/F0AvatarList/types"
import { Weekdays } from "@/experimental/Widgets/Content/Weekdays"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { cn } from "@/lib/utils"

import { DataList } from "../DataList"

type Content =
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
  | {
      type: "avatar-list"
      avatarList: F0AvatarListProps
    }

export interface DetailsItemType {
  title: string
  content: Content | Content[]
  isHorizontal?: boolean
  spacingAtTheBottom?: boolean
}

const isNumericValueText = (text: string): boolean => {
  const trimmed = text.trim()
  if (!trimmed) {
    return false
  }

  const firstToken = trimmed.split(/[\s/]+/)[0] ?? ""
  if (!/\d/.test(firstToken)) {
    return false
  }

  return !/\p{L}/u.test(firstToken)
}

const getContentAlign = (
  content: Content,
  isHorizontal: boolean
): "start" | "end" => {
  if (!isHorizontal || content.type !== "item") {
    return "start"
  }

  return isNumericValueText(content.text) ? "end" : "start"
}

const ItemContent: FC<{ content: Content; isHorizontal: boolean }> = ({
  content,
  isHorizontal,
}) => (
  <>
    {content.type === "weekdays" && (
      <li className="list-none px-1.5 py-1">
        <Weekdays {...content} />
      </li>
    )}
    {content.type === "person" && <DataList.PersonItem {...content} />}
    {content.type === "item" && (
      <DataList.Item
        {...content}
        contentAlign={getContentAlign(content, isHorizontal)}
      />
    )}
    {content.type === "team" && <DataList.TeamItem {...content} />}
    {content.type === "company" && <DataList.CompanyItem {...content} />}
    {content.type === "dot-tag" && <DataList.DotTagItem {...content} />}
    {content.type === "avatar-list" && (
      <li className="w-fit list-none px-1.5 py-1">
        <F0AvatarList {...content.avatarList} />
      </li>
    )}
  </>
)

const _DetailsItem = forwardRef<HTMLDivElement, DetailsItemType>(
  function DetailsItem(
    { title, content, isHorizontal = false, spacingAtTheBottom },
    ref
  ) {
    const contentArray = Array.isArray(content) ? content : [content]

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-0.5",
          spacingAtTheBottom && !isHorizontal && "pb-3",
          isHorizontal && "xs:[&_ul>li]:p-0 [&_ul]:flex-1"
        )}
      >
        <DataList label={title} isHorizontal={isHorizontal}>
          {contentArray.map((c, i) => (
            <ItemContent key={i} content={c} isHorizontal={isHorizontal} />
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
