import { AnimatePresence, motion } from "framer-motion"
import { memo, useState } from "react"
import { Button, CopyButton } from "../../../../components/Actions/Button"
import { Icon, IconType } from "../../../../components/Utilities/Icon"
import { InfoCircleLine } from "../../../../icons/app"
import { cn } from "../../../../lib/utils"
import { MobileDropdown } from "../../../Navigation/Dropdown"
import { Tooltip } from "../../../Overlays/Tooltip"
import { AvatarVariant } from "../../Avatars/Avatar"
import { NewColor } from "../../Tags/DotTag"
import { StatusVariant } from "../../Tags/StatusTag"
import { MetadataValue } from "./MetadataValue"

type MetadataItemValue =
  | { type: "text"; content: string }
  | { type: "avatar"; variant: AvatarVariant; text: string }
  | { type: "status"; label: string; variant: StatusVariant }
  | { type: "list"; variant: AvatarVariant["type"]; avatars: AvatarVariant[] }
  | { type: "data-list"; data: string[] }
  | { type: "tag-list"; tags: string[] }
  | { type: "dot-tag"; label: string; color: NewColor }
  | { type: "date"; formattedDate: string; icon?: "warning" | "critical" }

type MetadataAction = {
  icon: IconType
  label: string
  onClick: () => void
  type?: never
}

type MetadataCopyAction = {
  icon?: never
  label?: never
  onClick?: never
  copyValue?: string
  type: "copy"
}
const isMetadataAction = (
  action: MetadataAction | MetadataCopyAction
): action is MetadataAction => {
  return action?.type !== "copy"
}

const isMetadataCopyAction = (
  action: MetadataAction | MetadataCopyAction
): action is MetadataCopyAction => {
  return action?.type === "copy"
}

interface MetadataItem {
  label: string
  value: MetadataItemValue
  actions?: (MetadataAction | MetadataCopyAction)[]
  hideLabel?: boolean
  tooltip?: {
    title: string
    description?: string
  }
}

export interface MetadataProps {
  /**
   * Everything is not a MetadataItem is ignored.
   * Undefined and boolean enable conditional items
   **/
  items: (MetadataItem | undefined | boolean)[]

  /**
   * If true and the metadata type is a list, it will be collapsed to the first item
   */
  collapse?: boolean
}

function MetadataItem({ item }: { item: MetadataItem }) {
  const [isActive, setIsActive] = useState(false)
  const isList =
    (item.value.type === "data-list" && item.value.data.length > 1) ||
    (item.value.type === "tag-list" && item.value.tags.length > 1)
  const isAction = item.actions?.length
  const hasHover = isAction || isList

  const getValueToCopy = (
    value: MetadataItemValue,
    copyValue?: string
  ): string => {
    if (copyValue) {
      return copyValue
    }
    let _exhaustiveCheck: never
    switch (value.type) {
      case "text":
        return value.content
      case "avatar":
        return value.text
      case "status":
      case "dot-tag":
        return value.label
      case "date":
        return value.formattedDate
      case "tag-list":
        return value.tags.join(", ")
      case "data-list":
        return value.data.join(", ")
      case "list":
        return ""
      default:
        _exhaustiveCheck = value // Nice hack to ensure we covered all cases
        return _exhaustiveCheck
    }
  }

  return (
    <div className="flex h-8 items-center gap-2">
      <div
        className={cn(
          "flex w-28 items-center gap-1 truncate text-f1-foreground-secondary md:w-fit",
          item.hideLabel && "md:hidden"
        )}
      >
        {item.label}
        {item.tooltip && (
          <div className="flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help">
            <Tooltip
              label={item.tooltip.title}
              description={item.tooltip.description}
            >
              <Icon icon={InfoCircleLine} size="sm" />
            </Tooltip>
          </div>
        )}
      </div>
      <div
        role="button"
        tabIndex={hasHover ? 0 : -1}
        onMouseEnter={() => hasHover && setIsActive(true)}
        onMouseLeave={() => hasHover && setIsActive(false)}
        onFocus={() => hasHover && setIsActive(true)}
        onBlur={() => hasHover && setIsActive(false)}
        className="relative flex h-5 w-fit items-center hover:cursor-default"
        aria-label={`${item.label} actions`}
      >
        <div
          className={cn(
            "hidden font-medium text-f1-foreground md:block",
            !isAction && "block"
          )}
        >
          <MetadataValue item={item} collapse />
        </div>
        {isAction && (
          <div className="w-full md:hidden">
            <MobileDropdown
              items={
                item.actions?.filter(isMetadataAction).map((action) => ({
                  label: action.label,
                  icon: action.icon,
                  onClick: action.onClick,
                })) ?? []
              }
            >
              <MetadataValue item={item} collapse />
            </MobileDropdown>
          </div>
        )}
        <AnimatePresence>
          {isActive && hasHover && (
            <motion.div
              className={cn(
                "absolute -left-1.5 -top-1.5 z-50 hidden max-h-[80vh] items-start justify-center gap-1.5 overflow-y-auto whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex",
                !isList && "h-8 items-start",
                isAction ? "pr-1" : "pr-1.5"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div
                className={cn(
                  "flex h-6 items-center font-medium text-f1-foreground",
                  isList && "h-auto items-start pt-0.5"
                )}
              >
                <MetadataValue item={item} />
              </div>
              {isAction && (
                <motion.div
                  className="flex gap-1"
                  initial={{ x: -16 }}
                  animate={{ x: 0 }}
                  exit={{ x: -16 }}
                  transition={{ duration: 0.1 }}
                >
                  {item.actions?.map((action, index) => {
                    if (isMetadataCopyAction(action)) {
                      return (
                        <CopyButton
                          key={`copy-${index}`}
                          valueToCopy={getValueToCopy(
                            item.value,
                            action.copyValue
                          )}
                        />
                      )
                    } else {
                      return (
                        <Tooltip label={action.label} key={`tooltip-${index}`}>
                          <Button
                            key={`action-${index}`}
                            size="sm"
                            variant="neutral"
                            round
                            label={action.label}
                            hideLabel
                            icon={action.icon}
                            onClick={action.onClick}
                          />
                        </Tooltip>
                      )
                    }
                  })}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export const Metadata = memo(function Metadata({ items }: MetadataProps) {
  const cleanedItems = items.filter((item) => typeof item === "object")
  return (
    <div className="flex flex-col items-start gap-x-3 gap-y-0 md:flex-row md:flex-wrap md:items-center">
      {cleanedItems.map((item, index) => (
        <>
          <MetadataItem key={`item-${index}`} item={item} />
          {index < cleanedItems.length - 1 && (
            <div
              key={`separator-${index}`}
              className="hidden h-4 w-[1px] bg-f1-border md:block"
            />
          )}
        </>
      ))}
    </div>
  )
})

export type { MetadataAction, MetadataItem, MetadataItemValue }
