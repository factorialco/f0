import { F0Button } from "@/components/F0Button"
import { F0TagDot } from "@/components/tags/F0TagDot"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { Fragment } from "react"
import { actionType, MetadataItemValue } from "../types"

interface HeaderProps {
  actions?: actionType[]
  metadata?: MetadataItemValue[]
}

const buildMetadataItems = ({ items }: { items: MetadataItemValue[] }) =>
  items?.map((item, index) => (
    <Fragment key={`intersperse-${index}`}>
      {item.type === "status" ? (
        <F0TagStatus text={item.label} variant={item.variant} />
      ) : item.type === "dot-tag" ? (
        <F0TagDot text={item.label} color={item.color} />
      ) : item.type === "tag" ? (
        <F0TagRaw text={item.label} icon={item.icon} />
      ) : (
        item.type === "text" && (
          <div className="flex flex-row gap-2">
            <div className="flex w-fit items-center truncate text-f1-foreground-secondary">
              <span>{item.label}</span>
            </div>
            <div className="flex items-center truncate font-medium text-f1-foreground">
              <span>{item.content}</span>
            </div>
          </div>
        )
      )}
      {index < items.length - 1 && <div className="h-4 w-[1px] bg-f1-border" />}
    </Fragment>
  ))

const Header = ({ actions, metadata }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <div className="flex flex-row items-center gap-2">
        {buildMetadataItems({ items: metadata || [] })}
      </div>
      <div className="flex flex-row gap-2">
        {actions?.map((action, index) => (
          <F0Button
            key={index}
            onClick={action.onClick}
            variant={action.variant || "outline"}
            label={action.label}
            icon={action.icon}
            hideLabel={action.hideLabel}
          />
        ))}
      </div>
    </div>
  )
}

export default Header
