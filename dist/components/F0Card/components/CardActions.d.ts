import { IconType } from '../../F0Icon';
import { F0LinkProps } from '../../F0Link';
export interface CardPrimaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
    /**
     * Visual emphasis of the primary action. `"outline"` renders it as an outline
     * button while keeping it pinned at the trailing edge (so a lone CTA never
     * sheds into the "⋯" menu). Use it when the card's only action shouldn't carry
     * full primary weight.
     * @default "default"
     */
    variant?: "default" | "outline";
}
export interface CardSecondaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
}
export interface CardSecondaryLink extends Pick<F0LinkProps, "href" | "target" | "disabled"> {
    label: string;
}
interface CardActionsProps {
    primaryAction?: CardPrimaryAction;
    secondaryActions?: CardSecondaryAction[] | CardSecondaryLink;
    compact?: boolean;
}
export declare function CardActions({ primaryAction, secondaryActions, compact, }: CardActionsProps): import("react").JSX.Element | null;
export {};
