import { AlertAvatarProps } from '../../components/avatars/F0AvatarAlert';
import { F0ButtonProps } from '../../components/F0Button';
type BaseAction = Pick<F0ButtonProps, "label" | "onClick" | "icon" | "disabled">;
type PrimaryActionVariant = "default" | "critical" | "neutral";
type PrimaryAction = BaseAction & {
    variant?: PrimaryActionVariant;
};
type SecondaryAction = BaseAction;
type DialogProps = {
    header: {
        type: AlertAvatarProps["type"];
        title: string;
        description: string;
    };
    actions?: {
        primary: PrimaryAction;
        secondary: SecondaryAction;
    };
    open?: boolean;
    onClose?: () => void;
};
declare const OneDialog: import('react').ForwardRefExoticComponent<DialogProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const Dialog: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<DialogProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export { OneDialog as DialogInner };
