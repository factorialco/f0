import { forwardRef, ReactNode } from "react"

interface TwoColumnsItemType {
  title: string
  info: string | ReactNode
}

interface TwoColumnsListType {
  title?: string
  titleValue?: string
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
  function TwoColumnsList({ title, titleValue, list }, ref) {
    return (
      <div ref={ref} className="flex flex-col gap-2">
        {title && (
          <div className="flex items-center justify-between gap-2 font-medium">
            <div>{title}</div>
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
