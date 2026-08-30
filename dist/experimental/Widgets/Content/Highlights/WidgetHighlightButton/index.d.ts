import { IconType } from '../../../../../components/F0Icon';
type Props = {
    label: string;
    icon: IconType;
    iconClassName?: string;
    count: number;
    onClick?: () => void;
};
export type WidgetHighlightButtonProps = Props;
export declare function WidgetHighlightButton({ label, count, icon, iconClassName, onClick, }: Props): import("react").JSX.Element;
export {};
