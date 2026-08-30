import { EnhancementOption } from './types';
interface AIEnhanceMenuProps {
    onSelect: ({ selectedIntent, customIntent, }: {
        selectedIntent?: string;
        customIntent?: string;
    }) => void;
    enhancementOptions: EnhancementOption[];
    inputPlaceholder: string;
    darkMode?: boolean;
    menuWidth?: number;
    menuState?: "idle" | "loading" | "review";
    loadingLabel?: string;
    onAccept?: () => void;
    onReject?: () => void;
    onRetry?: () => void;
    canShowOptions?: boolean;
    compactReview?: boolean;
}
declare const AIEnhanceMenu: ({ onSelect, enhancementOptions, inputPlaceholder, darkMode, menuWidth, menuState, loadingLabel, onAccept, onReject, onRetry, canShowOptions, compactReview, }: AIEnhanceMenuProps) => import("react").JSX.Element;
export { AIEnhanceMenu };
