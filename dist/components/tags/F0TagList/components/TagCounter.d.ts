import { TagVariant } from '../../F0Tag/F0Tag';
export type TagCounterItem = TagVariant;
type Props = {
    count: number;
    list?: TagCounterItem[];
};
export declare const TagCounter: {
    ({ count, list }: Props): import("react").JSX.Element;
    displayName: string;
};
export {};
