import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Button } from "@/components/F0Button"
import { F0TagDot } from "@/components/tags/F0TagDot"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { ScrollArea } from "@/experimental/Utilities/ScrollArea"
import { Fragment } from "react"
import { actionType, MetadataItemValue, secondaryActionsType } from "../types"

interface HeaderProps {
  actions?: actionType[]
  metadata?: MetadataItemValue[]
  secondaryActions?: secondaryActionsType[]
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
      ) : item.type === "person" ? (
        <div className="flex items-center gap-1">
          <div className="flex w-fit items-center truncate text-f1-foreground-secondary">
            <span>{item.label}</span>
          </div>
          <F0Avatar
            avatar={{
              type: "person",
              firstName: item.firstName,
              lastName: item.lastName,
              src: item.src,
            }}
            size="xs"
          />
          <span>
            {item.firstName} {item.lastName}
          </span>
        </div>
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

const Header = ({ actions, metadata, secondaryActions }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-2 px-6 py-3">
      <ScrollArea>
        <div className="flex flex-row items-center gap-2">
          {buildMetadataItems({ items: metadata || [] })}
        </div>
      </ScrollArea>
      <div className="flex flex-shrink-0 flex-row gap-2">
        {secondaryActions && (
          <>
            <Dropdown
              items={secondaryActions.map((action) => ({
                label: action.label,
                icon: action.icon,
                onClick: action.onClick,
                critical: action.critical,
              }))}
            />
          </>
        )}
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
