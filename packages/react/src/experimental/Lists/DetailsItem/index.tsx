import { ComponentProps, FC, forwardRef } from "react"

import type { TestableProps } from "@/global.types"
import { Weekdays } from "@/experimental/Widgets/Content/Weekdays"
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

export interface DetailsItemType extends TestableProps {
  title: string
  content: Content | Content[]
  isHorizontal?: boolean
  spacingAtTheBottom?: boolean
}

const ItemContent: FC<{ content: Content }> = ({ content }) => (
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
  </>
)

const _DetailsItem = forwardRef<HTMLDivElement, DetailsItemType>(
  function DetailsItem(
    { title, content, isHorizontal = false, spacingAtTheBottom, testId },
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
        data-testid={testId}
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
export const DetailsItem = experimentalComponent("DetailsItem", _DetailsItem)
