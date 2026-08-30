import { AiPromotionChatProviderProps } from '../../experimental/AiPromotionChat';
import { AiChatProviderProps } from '../../kits/ai/F0AiChat';
export interface ApplicationFrameProps {
    ai?: Omit<AiChatProviderProps, "children">;
    aiPromotion?: Omit<AiPromotionChatProviderProps, "children">;
    banner?: React.ReactNode;
    sidebar: React.ReactNode;
    children: React.ReactNode;
}
declare function _ApplicationFrame({ children, sidebar, banner, ai, aiPromotion, }: ApplicationFrameProps): import("react").JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const ApplicationFrame: typeof _ApplicationFrame;
export {};
