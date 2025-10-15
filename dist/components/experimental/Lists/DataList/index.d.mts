import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactElement } from 'react';
import { IconType } from '../../../Icon/index.mjs';
import { DotTagProps } from '../../../Tags/DotTag/index.mjs';
import 'cva';
import 'react-native-svg';
import '@factorialco/f0-core';

type DataListProps = {
    children: ReactElement<Items>[] | ReactElement<Items>;
    label?: string;
    isHorizontalItem?: boolean;
    tableView?: boolean;
};
type Items = typeof Item | typeof PersonItem | typeof CompanyItem | typeof TeamItem;
type ItemProps = {
    text: string;
    icon?: IconType;
    action?: ActionType;
};
type ActionType = CopyActionType | GenericActionType | NoopActionType;
type CopyActionType = {
    type: "copy";
    text?: string;
};
type GenericActionType = {
    type: "generic";
    handlePress?: () => void;
};
type NoopActionType = {
    type: "noop";
};
declare const Item: ({ text, icon, action }: ItemProps) => react_jsx_runtime.JSX.Element;
type URL = string;
type EmployeeItemProps = {
    firstName: string;
    lastName: string;
    avatarUrl?: URL;
    action?: ActionType;
};
declare const PersonItem: ({ action, avatarUrl, firstName, lastName, }: EmployeeItemProps) => react_jsx_runtime.JSX.Element;
type CompanyItemProps = {
    name: string;
    avatarUrl?: URL;
    action?: ActionType;
};
declare const CompanyItem: ({ avatarUrl, name, action }: CompanyItemProps) => react_jsx_runtime.JSX.Element;
type TeamItemProps = {
    name: string;
    action?: ActionType;
};
declare const TeamItem: ({ action, name }: TeamItemProps) => react_jsx_runtime.JSX.Element;
type DotTagItemProps = DotTagProps;
declare const DataList: (({ children, label, isHorizontalItem, tableView, }: DataListProps) => react_jsx_runtime.JSX.Element) & {
    Item: ({ text, icon, action }: ItemProps) => react_jsx_runtime.JSX.Element;
    CompanyItem: ({ avatarUrl, name, action }: CompanyItemProps) => react_jsx_runtime.JSX.Element;
    PersonItem: ({ action, avatarUrl, firstName, lastName, }: EmployeeItemProps) => react_jsx_runtime.JSX.Element;
    TeamItem: ({ action, name }: TeamItemProps) => react_jsx_runtime.JSX.Element;
    DotTagItem: ({ ...props }: DotTagItemProps) => react_jsx_runtime.JSX.Element;
};

export { type ActionType, type CopyActionType, DataList, type DataListProps, type GenericActionType, type ItemProps, type NoopActionType };
