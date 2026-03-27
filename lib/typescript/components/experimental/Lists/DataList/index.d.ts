import React, { ReactElement } from "react";
import { type IconType } from "../../../primitives/F0Icon";
import { DotTagProps } from "../../../Tags/DotTag";
export type DataListProps = {
    children: ReactElement<Items>[] | ReactElement<Items>;
    label?: string;
    isHorizontalItem?: boolean;
    tableView?: boolean;
    fullWidth?: boolean;
};
type Items = typeof Item | typeof PersonItem | typeof CompanyItem | typeof TeamItem | typeof CardItem;
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
declare const Item: ({ text, icon, action }: ItemProps) => React.JSX.Element;
type URL = string;
type EmployeeItemProps = {
    firstName: string;
    lastName: string;
    avatarUrl?: URL;
    action?: ActionType;
};
declare const PersonItem: ({ action, avatarUrl, firstName, lastName, }: EmployeeItemProps) => React.JSX.Element;
type CompanyItemProps = {
    name: string;
    avatarUrl?: URL;
    action?: ActionType;
};
declare const CompanyItem: ({ avatarUrl, name, action }: CompanyItemProps) => React.JSX.Element;
type TeamItemProps = {
    name: string;
    action?: ActionType;
};
declare const TeamItem: ({ action, name }: TeamItemProps) => React.JSX.Element;
type DotTagItemProps = DotTagProps;
type CardMetadataProperty = {
    icon?: IconType;
    type: "text" | "progress" | "statusTag" | "alertTag";
    value: string;
    status?: "warning" | "critical" | "completed" | "neutral";
    level?: "info" | "warning" | "critical";
};
type CardItemProps = {
    name: string;
    thumbnailUrl?: string;
    metadata?: CardMetadataProperty[];
    action?: ActionType;
};
declare const CardItem: ({ action, name, thumbnailUrl, metadata }: CardItemProps) => React.JSX.Element;
export declare const DataList: (({ children, label, isHorizontalItem, tableView, fullWidth, }: DataListProps) => React.JSX.Element) & {
    Item: ({ text, icon, action }: ItemProps) => React.JSX.Element;
    CompanyItem: ({ avatarUrl, name, action }: CompanyItemProps) => React.JSX.Element;
    PersonItem: ({ action, avatarUrl, firstName, lastName, }: EmployeeItemProps) => React.JSX.Element;
    TeamItem: ({ action, name }: TeamItemProps) => React.JSX.Element;
    DotTagItem: ({ ...props }: DotTagItemProps) => React.JSX.Element;
    CardItem: ({ action, name, thumbnailUrl, metadata }: CardItemProps) => React.JSX.Element;
};
export {};
//# sourceMappingURL=index.d.ts.map