import { FC, PropsWithChildren } from 'react';
import { ActionProps } from '../components/CustomButton';
export interface AiPromotionChatState {
    enabled: boolean;
    greeting?: string;
    title?: string;
    description?: string;
    benefits?: {
        noBoldText: string;
        boldText: string;
    }[];
    actions?: ActionProps[];
    onShow?: () => void;
    onHide?: () => void;
}
type AiPromotionChatProviderReturnValue = {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    shouldPlayEntranceAnimation: boolean;
    setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Set the amount of minutes after which the chat will be cleared automatically
     * Set `null` to disable auto-clearing
     *
     * @default 15
     */
    setAutoClearMinutes: React.Dispatch<React.SetStateAction<number | null>>;
    autoClearMinutes: number | null;
    /**
     * Clear/reset the chat conversation
     */
    clear: () => void;
    /**
     * Internal function to set the clear function from CopilotKit
     * @internal
     */
    setClearFunction: (clearFn: (() => void) | null) => void;
} & Pick<AiPromotionChatState, "greeting" | "title" | "description" | "benefits" | "actions" | "onShow" | "onHide">;
export declare const AiPromotionChatStateProvider: FC<PropsWithChildren<AiPromotionChatState>>;
export declare function useAiPromotionChat(): AiPromotionChatProviderReturnValue;
export {};
