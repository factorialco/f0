import { ReactElement } from "react";

import { ItemContainer } from "./ItemContainer";
import { cn } from "../../../../lib/utils";
import { IconType } from "../../../Icon";
import { PersonAvatar } from "../../../Avatars/PersonAvatar";
import { CompanyAvatar } from "../../../Avatars/CompanyAvatar";
import { TeamAvatar } from "../../../Avatars/TeamAvatar";
import { DotTag, DotTagProps } from "../../../Tags/DotTag";
import { View, Text } from "react-native";

export type DataListProps = {
  children: ReactElement<Items>[] | ReactElement<Items>;
  label?: string;
  isHorizontalItem?: boolean;
  tableView?: boolean;
};

type Items =
  | typeof Item
  | typeof PersonItem
  | typeof CompanyItem
  | typeof TeamItem;

const _DataList = ({
  children,
  label,
  isHorizontalItem = false,
  tableView = false,
}: DataListProps) => {
  return (
    <View
      className={cn(
        isHorizontalItem
          ? "flex min-h-12 flex-shrink flex-row"
          : "min-w-32 max-w-72",
        tableView ? "px-[8px] pb-[10px] pt-[14px]" : "",
      )}
    >
      {!!label && (
        <Text
          className={cn(
            "px-1.5 text-f1-foreground-secondary",
            isHorizontalItem ? "mt-1.5 w-36 shrink-0" : "",
          )}
        >
          {label}
        </Text>
      )}
      <View className="flex flex-shrink justify-center gap-0.5">
        {children}
      </View>
    </View>
  );
};

export type ItemProps = {
  text: string;
  icon?: IconType;
  action?: ActionType;
};

export type ActionType = CopyActionType | GenericActionType | NoopActionType;

export type CopyActionType = {
  type: "copy";
  text?: string;
};

export type GenericActionType = {
  type: "generic";
  handlePress?: () => void;
};

export type NoopActionType = {
  type: "noop";
};

const Item = ({ text, icon, action }: ItemProps) => {
  return (
    <ItemContainer
      text={text}
      leftIcon={icon}
      action={getInternalAction(action, text)}
    />
  );
};

type URL = string;

type EmployeeItemProps = {
  firstName: string;
  lastName: string;
  avatarUrl?: URL;
  action?: ActionType;
};

const PersonItem = ({
  action,
  avatarUrl,
  firstName,
  lastName,
}: EmployeeItemProps) => {
  const fullName = `${firstName} ${lastName}`;
  return (
    <ItemContainer
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
  );
};

type CompanyItemProps = {
  name: string;
  avatarUrl?: URL;
  action?: ActionType;
};

const CompanyItem = ({ avatarUrl, name, action }: CompanyItemProps) => {
  return (
    <ItemContainer
      leftIcon={() => (
        <CompanyAvatar name={name} size="xsmall" src={avatarUrl} />
      )}
      text={name}
      action={getInternalAction(action, name)}
    />
  );
};

type TeamItemProps = {
  name: string;
  action?: ActionType;
};

const TeamItem = ({ action, name }: TeamItemProps) => {
  return (
    <ItemContainer
      leftIcon={() => <TeamAvatar name={name} size="xsmall" />}
      text={name}
      action={getInternalAction(action, name)}
    />
  );
};

type DotTagItemProps = DotTagProps;

const DotTagItem = ({ ...props }: DotTagItemProps) => {
  return (
    <View className="flex items-start pt-1">
      <DotTag {...props} />
    </View>
  );
};

/**
 * convert simplified action type received from user to internal action format
 * @param action ActionType
 * @param defaultCopyText what to use if copy text is not present
 */
const getInternalAction = (
  action: ActionType | undefined,
  defaultCopyText: string,
): ActionType | undefined => {
  if (action && action.type === "copy") {
    return { type: "copy", text: action.text ?? defaultCopyText };
  }

  return action;
};

export const DataList = Object.assign(_DataList, {
  Item,
  CompanyItem,
  PersonItem,
  TeamItem,
  DotTagItem,
});
