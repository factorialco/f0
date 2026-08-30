import { IconType } from '../../../components/F0Icon';
import { ReactionProps } from './reaction';
export interface ReactionsProps {
    items: ReactionProps[];
    onInteraction?: (emoji: string) => void;
    locale?: string;
    action?: {
        label: string;
        icon: IconType;
        onClick: () => void;
    };
}
declare function _Reactions({ items, onInteraction, locale, action }: ReactionsProps): import("react").JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Reactions: typeof _Reactions;
export {};
