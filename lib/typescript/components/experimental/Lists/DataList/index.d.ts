import { ReactElement } from "react";
import { IconType } from "../../../Icon";
import { DotTagProps } from "../../../Tags/DotTag";
export type DataListProps = {
    children: ReactElement<Items>[] | ReactElement<Items>;
    label?: string;
    isHorizontalItem?: boolean;
    tableView?: boolean;
};
type Items = typeof Item | typeof PersonItem | typeof CompanyItem | typeof TeamItem;
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
declare const Item: ({ text, icon, action }: ItemProps) => import("react").JSX.Element;
type URL = string;
type EmployeeItemProps = {
    firstName: string;
    lastName: string;
    avatarUrl?: URL;
    action?: ActionType;
};
declare const PersonItem: ({ action, avatarUrl, firstName, lastName, }: EmployeeItemProps) => import("react").JSX.Element;
type CompanyItemProps = {
    name: string;
    avatarUrl?: URL;
    action?: ActionType;
};
declare const CompanyItem: ({ avatarUrl, name, action }: CompanyItemProps) => import("react").JSX.Element;
type TeamItemProps = {
    name: string;
    action?: ActionType;
};
declare const TeamItem: ({ action, name }: TeamItemProps) => import("react").JSX.Element;
type DotTagItemProps = DotTagProps;
export declare const DataList: (({ children, label, isHorizontalItem, tableView, }: DataListProps) => import("react").JSX.Element) & {
    Item: ({ text, icon, action }: ItemProps) => import("react").JSX.Element;
    CompanyItem: ({ avatarUrl, name, action }: CompanyItemProps) => import("react").JSX.Element;
    PersonItem: ({ action, avatarUrl, firstName, lastName, }: EmployeeItemProps) => import("react").JSX.Element;
    TeamItem: ({ action, name }: TeamItemProps) => import("react").JSX.Element;
    DotTagItem: ({ ...props }: DotTagItemProps) => import("react").JSX.Element;
};
export {};
//# sourceMappingURL=index.d.ts.map