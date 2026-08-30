import { ComponentProps } from 'react';
import { F0AvatarListProps } from '../../../components/avatars/F0AvatarList/types';
import { F0FileItem } from '../../../components/F0FileItem';
import { TagAlertProps } from '../../../components/tags/F0TagAlert';
import { TagBalanceProps } from '../../../components/tags/F0TagBalance';
import { TagListProps, TagType } from '../../../components/tags/F0TagList';
import { TagRawProps } from '../../../components/tags/F0TagRaw';
import { TagStatusProps } from '../../../components/tags/F0TagStatus';
import { Weekdays } from '../../Widgets/Content/Weekdays';
import { DataList } from '../DataList';
export type DetailsItemContent = (ComponentProps<typeof DataList.Item> & {
    type: "item";
}) | (ComponentProps<typeof DataList.PersonItem> & {
    type: "person";
}) | (ComponentProps<typeof DataList.CompanyItem> & {
    type: "company";
}) | (ComponentProps<typeof DataList.TeamItem> & {
    type: "team";
}) | (ComponentProps<typeof Weekdays> & {
    type: "weekdays";
}) | (ComponentProps<typeof DataList.DotTagItem> & {
    type: "dot-tag";
}) | (TagAlertProps & {
    type: "alert-tag";
}) | (TagBalanceProps & {
    type: "balance-tag";
}) | (TagStatusProps & {
    type: "status-tag";
}) | (TagRawProps & {
    type: "raw-tag";
}) | {
    [T in TagType]: {
        type: "tag-list";
        tagList: TagListProps<T>;
    };
}[TagType] | {
    type: "avatar-list";
    avatarList: F0AvatarListProps;
} | (ComponentProps<typeof F0FileItem> & {
    type: "file";
});
export interface DetailsItemType {
    title: string;
    content: DetailsItemContent | DetailsItemContent[];
    isHorizontal?: boolean;
    /**
     * When true inside a tableView, keeps the table-row padding but stacks
     * the label above the content instead of side-by-side. Useful for
     * long-form text fields like rich-text or textarea.
     */
    verticalLayout?: boolean;
    spacingAtTheBottom?: boolean;
}
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const DetailsItem: import('../../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<DetailsItemType & import('react').RefAttributes<HTMLDivElement>>>;
