import { IconType } from '../../components/F0Icon';
import { F0ButtonProps } from '../../components/F0Button';
type Props = {
    /** Main heading text */
    title: string;
    /** Description text below the title */
    description: string;
    /**  Complementary action specific to the section */
    action?: Pick<F0ButtonProps, "label" | "onClick"> & {
        icon?: IconType;
        variant?: "default" | "outline";
    };
    /** Optional link to related documentation (Help center or other link) */
    link?: {
        label: string;
        href: string;
    };
    /** If specified, a separator will be displayed above or below the content */
    separator?: "top" | "bottom";
};
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const SectionHeader: ({ title, description, action, link, separator, }: Props) => import("react").JSX.Element;
export {};
