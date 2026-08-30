import { ReactNode } from 'react';
import { AiChatCredits } from '../../F0AiChat/types';
type CreditsPopoverProps = {
    credits?: AiChatCredits;
    /** Custom popover trigger (asChild). Defaults to the Sliders icon button. */
    trigger?: ReactNode;
};
export declare function CreditsPopover({ credits, trigger }: CreditsPopoverProps): import("react").JSX.Element | null;
export {};
