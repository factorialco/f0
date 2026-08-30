import { DataListProps } from './types';
export type { ActionType, CopyActionType, DataListProps, ItemProps, NavigateActionType, OpenLinkActionType, } from './types';
export declare const DataList: import('react').ForwardRefExoticComponent<DataListProps & import('react').RefAttributes<HTMLUListElement>> & {
    Item: import('react').ForwardRefExoticComponent<import('./types').ItemProps & import('react').RefAttributes<HTMLLIElement>>;
    CompanyItem: import('react').ForwardRefExoticComponent<import('./types').CompanyItemProps & import('react').RefAttributes<HTMLLIElement>>;
    PersonItem: import('react').ForwardRefExoticComponent<import('./types').EmployeeItemProps & import('react').RefAttributes<HTMLLIElement>>;
    TeamItem: import('react').ForwardRefExoticComponent<import('./types').TeamItemProps & import('react').RefAttributes<HTMLLIElement>>;
    DotTagItem: import('react').ForwardRefExoticComponent<import('../../../f0').TagDotProps & import('react').RefAttributes<HTMLLIElement>>;
    AlertTagItem: import('react').ForwardRefExoticComponent<import('../../../f0').TagAlertProps & import('react').RefAttributes<HTMLLIElement>>;
    BalanceTagItem: import('react').ForwardRefExoticComponent<import('../../../f0').TagBalanceProps & import('react').RefAttributes<HTMLLIElement>>;
    StatusTagItem: import('react').ForwardRefExoticComponent<import('../../../f0').TagStatusProps & import('react').RefAttributes<HTMLLIElement>>;
    RawTagItem: import('react').ForwardRefExoticComponent<import('../../../f0').TagRawProps & import('react').RefAttributes<HTMLLIElement>>;
    TagListItem: <T extends import('../../../f0').TagType>(props: import('../../../f0').TagListProps<T> & {
        ref?: import('react').Ref<HTMLLIElement>;
    }) => ReturnType<(<T_1 extends import('../../../f0').TagType>(props: import('../../../f0').TagListProps<T_1>, ref: import('react').ForwardedRef<HTMLLIElement>) => import("react").JSX.Element)>;
};
