import { ActionProps } from './components/CustomButton';
export type AiPromotionChatProviderProps = {
    enabled?: boolean;
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
    children: React.ReactNode;
};
/**
 * @experimental This is an experimental component use it at your own risk
 */
declare const AiPromotionChat: import('../../lib/data-testid').WithDataTestIdReturnType<() => import("react").JSX.Element | null>;
declare const AiPromotionChatProvider: import('../../lib/data-testid').WithDataTestIdReturnType<({ enabled, greeting, title, description, benefits, actions, onShow, onHide, children, }: AiPromotionChatProviderProps) => import("react").JSX.Element>;
export { AiPromotionChat, AiPromotionChatProvider };
