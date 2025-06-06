import { forwardRef, ReactElement } from "react"

import { cn } from "@/lib/utils"
import { IconType } from "../../../components/Utilities/Icon"
import { CompanyAvatar } from "../../Information/Avatars/CompanyAvatar"
import { PersonAvatar } from "../../Information/Avatars/PersonAvatar"
import { TeamAvatar } from "../../Information/Avatars/TeamAvatar"
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
            ? "flex flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row"
            : "min-w-32 max-w-72"
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
        <ul className="flex flex-col gap-0.5" ref={ref}>
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

export type ActionType = CopyActionType | NavigateActionType

export type CopyActionType = {
  type: "copy"
  text?: string
}

export type NavigateActionType = {
  type: "navigate"
  href: string
}

const Item = forwardRef<HTMLLIElement, ItemProps>(
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

Item.displayName = "DataList.Item"

type URL = string

type EmployeeItemProps = {
  firstName: string
  lastName: string
  avatarUrl?: URL
  action?: ActionType
}

const PersonItem = forwardRef<HTMLLIElement, EmployeeItemProps>(
  ({ action, avatarUrl, firstName, lastName }, ref) => {
    const fullName = `${firstName} ${lastName}`
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => (
          <PersonAvatar
            size="xsmall"
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
PersonItem.displayName = "PersonItem"

type CompanyItemProps = {
  name: string
  avatarUrl?: URL
  action?: ActionType
}

const CompanyItem = forwardRef<HTMLLIElement, CompanyItemProps>(
  ({ avatarUrl, name, action }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => (
          <CompanyAvatar name={name} size="xsmall" src={avatarUrl} />
        )}
        text={name}
        action={getInternalAction(action, name)}
      />
    )
  }
)

CompanyItem.displayName = "CompanyItem"

type TeamItemProps = {
  name: string
  action?: ActionType
}

const TeamItem = forwardRef<HTMLLIElement, TeamItemProps>(
  ({ action, name }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => <TeamAvatar name={name} size="xsmall" />}
        text={name}
        action={getInternalAction(action, name)}
      />
    )
  }
)

TeamItem.displayName = "TeamItem"

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

export const DataList = Object.assign(_DataList, {
  Item,
  CompanyItem,
  PersonItem,
  TeamItem,
})
