import { DialogInternalProps, DialogVariant } from '../F0Dialog/internal/internal-types';
import { DialogAlikeActionsProps } from './types';
export type FooterProps = DialogAlikeActionsProps & {
    variant?: DialogVariant;
    type?: DialogInternalProps["type"];
    onClose: () => void;
};
export declare const Footer: (props: FooterProps) => import("react").JSX.Element | null;
