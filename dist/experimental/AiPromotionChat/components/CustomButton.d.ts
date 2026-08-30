import { ButtonVariant } from '../../../components/F0Button/types';
import { IconType } from '../../../components/F0Icon/F0Icon';
export type ActionProps = {
    buttonType: "gradient" | "internal";
    label: string;
    onClick: () => void;
    isLoading: boolean;
    buttonVariant?: ButtonVariant;
    icon?: IconType;
};
type CustomButtonProps = {
    action: ActionProps;
    onClose: () => void;
};
export declare const CustomButton: ({ action, onClose }: CustomButtonProps) => import("react").JSX.Element;
export {};
