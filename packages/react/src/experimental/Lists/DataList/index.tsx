import { forwardRef, ReactElement } from "react"
import { experimentalComponent } from "@/lib/experimental"

import { F0AvatarCompany } from "@/components/avatars/F0AvatarCompany"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0AvatarTeam } from "@/components/avatars/F0AvatarTeam"
import { IconType } from "@/components/F0Icon"
import { F0TagDot, TagDotProps } from "@/components/tags/F0TagDot"
import { cn } from "@/lib/utils"
import { InternalActionType, ItemContainer } from "./ItemContainer"

export type DataListProps = {
  children: ReactElement<Items>[] | ReactElement<Items>
  label?: string
  isHorizontal?: boolean
}

type Items =
  | typeof Item
  | typeof PersonItem
  | typeof CompanyItem
  | typeof TeamItem

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
              isHorizontal ? "mt-1.5 w-44 xs:px-0" : "mb-0.5"
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

export type ItemProps = {
  text: string
  icon?: IconType
  action?: ActionType
}

export type ActionType =
  | CopyActionType
  | NavigateActionType
  | OpenLinkActionType

export type CopyActionType = {
  type: "copy"
  text?: string
}

export type NavigateActionType = {
  type: "navigate"
  href: string
}

export type OpenLinkActionType = {
  type: "open-link"
  href: string
}

const _Item = forwardRef<HTMLLIElement, ItemProps>(
  ({ text, icon, action }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        text={text}
        leftIcon={icon}
        action={getInternalAction(action, text)}
      />
    )
  }
)

_Item.displayName = "DataList.Item"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const Item = experimentalComponent("DataList.Item", _Item)

type URL = string

type EmployeeItemProps = {
  firstName: string
  lastName: string
  avatarUrl?: URL
  action?: ActionType
}

const _PersonItem = forwardRef<HTMLLIElement, EmployeeItemProps>(
  ({ action, avatarUrl, firstName, lastName }, ref) => {
    const fullName = `${firstName} ${lastName}`
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => (
          <F0AvatarPerson
            size="xs"
            src={avatarUrl}
            firstName={firstName}
            lastName={lastName}
          />
        )}
        text={fullName}
        action={getInternalAction(action, fullName)}
      />
    )
  }
)
_PersonItem.displayName = "PersonItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const PersonItem = experimentalComponent("PersonItem", _PersonItem)

type CompanyItemProps = {
  name: string
  avatarUrl?: URL
  action?: ActionType
}

const _CompanyItem = forwardRef<HTMLLIElement, CompanyItemProps>(
  ({ avatarUrl, name, action }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => (
          <F0AvatarCompany name={name} size="xs" src={avatarUrl} />
        )}
        text={name}
        action={getInternalAction(action, name)}
      />
    )
  }
)

_CompanyItem.displayName = "CompanyItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const CompanyItem = experimentalComponent("CompanyItem", _CompanyItem)

type TeamItemProps = {
  name: string
  action?: ActionType
}

const _TeamItem = forwardRef<HTMLLIElement, TeamItemProps>(
  ({ action, name }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => <F0AvatarTeam name={name} size="xs" />}
        text={name}
        action={getInternalAction(action, name)}
      />
    )
  }
)

_TeamItem.displayName = "TeamItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const TeamItem = experimentalComponent("TeamItem", _TeamItem)

type DotTagItemProps = TagDotProps

const _DotTagItem = forwardRef<HTMLLIElement, DotTagItemProps>(
  ({ ...props }, ref) => {
    return (
      <li ref={ref} className="flex items-start pt-1">
        <F0TagDot {...props} />
      </li>
    )
  }
)

_DotTagItem.displayName = "DotTagItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const DotTagItem = experimentalComponent("DotTagItem", _DotTagItem)

/**
 * convert simplified action type received from user to internal action format
 * @param action ActionType
 * @param defaultCopyText what to use if copy text is not present
 */
const getInternalAction = (
  action: ActionType | undefined,
  defaultCopyText: string
): InternalActionType | undefined => {
  if (action && action.type === "copy") {
    return { type: "copy", text: action.text ?? defaultCopyText }
  }

  return action
}

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
})
