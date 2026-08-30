import { TagVariant } from '../../../../components/tags/F0Tag/F0Tag';
import { TagType } from '../../../../components/tags/F0TagList';
interface TagListValue {
    tags: Array<Omit<TagVariant, "type">>;
    max?: number;
    type: TagType;
}
export type TagListCellValue = TagListValue;
export declare const TagListCell: (args: TagListCellValue) => import("react").JSX.Element;
export {};
