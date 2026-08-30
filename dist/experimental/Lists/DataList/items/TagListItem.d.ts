import { ForwardedRef, Ref } from 'react';
import { TagListProps, TagType } from '../../../../components/tags/F0TagList';
declare function _TagListItemInner<T extends TagType>(props: TagListProps<T>, ref: ForwardedRef<HTMLLIElement>): import("react").JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const TagListItem: <T extends TagType>(props: TagListProps<T> & {
    ref?: Ref<HTMLLIElement>;
}) => ReturnType<typeof _TagListItemInner>;
export {};
