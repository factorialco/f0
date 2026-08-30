import { IconType } from '../../../../components/F0Icon';
declare const tagCellVariants: {
    readonly default: undefined;
    readonly neutral: "border-none bg-f1-background-secondary text-f1-foreground-secondary";
};
type TagCellVariant = keyof typeof tagCellVariants;
interface TagValue {
    label: string;
    icon?: IconType;
    /**
     * Visual variant of the tag. `neutral` renders a grey filled tag with
     * secondary foreground text instead of the default outlined style.
     * @default "default"
     */
    variant?: TagCellVariant;
}
export type TagCellValue = TagValue;
export declare const TagCell: (args: TagCellValue) => import("react").JSX.Element;
export {};
