import { forwardRef, ReactNode } from "react"
import { F0Icon } from "../../../../components/F0Icon"
import { InfoCircleLine } from "../../../../icons/app"
import { Tooltip } from "../../../Overlays/Tooltip"

interface TwoColumnsItemType {
  title: string
  info: string | ReactNode
}

interface TwoColumnsListType {
  title?: string
  titleValue?: string
  titleTooltip?: {
    label?: string
    description: string
  }
  list: TwoColumnsItemType[]
}

const Item = ({ title, info }: TwoColumnsItemType) => (
  <div className="flex items-center justify-between">
    <p className="flex text-f1-foreground-secondary">{title}</p>
    <div className="max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium">
      {info}
    </div>
  </div>
)

export const TwoColumnsList = forwardRef<HTMLDivElement, TwoColumnsListType>(
  function TwoColumnsList({ title, titleValue, titleTooltip, list }, ref) {
    return (
      <div ref={ref} className="flex flex-col gap-2">
        {title && (
          <div className="flex items-center justify-between gap-2 font-medium">
            <div className="flex items-center gap-1">
              <div>{title}</div>
              {titleTooltip && (
                <div className="flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help">
                  <Tooltip
                    label={titleTooltip.label}
                    description={titleTooltip.description}
                  >
                    <F0Icon icon={InfoCircleLine} size="sm" />
                  </Tooltip>
                </div>
              )}
            </div>
            {titleValue && <div>{titleValue}</div>}
          </div>
        )}
        {list.map((item) => (
          <Item key={item.title} title={item.title} info={item.info} />
        ))}
      </div>
    )
  }
)
