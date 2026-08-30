import { F0AiChatWelcomeCard } from '../../F0AiChat/types';
/**
 * Hard cap on welcome cards. The row is a two-column grid, so four cards fill
 * an even 2×2; anything beyond that is dropped to keep the welcome screen tidy.
 * Suggestions have no such cap.
 */
export declare const MAX_WELCOME_CARDS = 4;
export type WelcomeScreenCardsRowProps = {
    /**
     * Cards to render. Optional and independent of the suggestions row — the two
     * can have different counts. Only the first {@link MAX_WELCOME_CARDS} are
     * rendered; the rest are ignored.
     */
    cards: F0AiChatWelcomeCard[];
};
/**
 * Grid of cards shown below the composer on the fullscreen welcome screen,
 * rendered with `F0CardHorizontal`. Each card carries its own `onClick`; the
 * host owns the resulting behavior. A card without an `onClick` renders as
 * non-interactive.
 *
 * Renders at most {@link MAX_WELCOME_CARDS} cards; extras are dropped.
 */
export declare const WelcomeScreenCardsRow: ({ cards, }: WelcomeScreenCardsRowProps) => import("react").JSX.Element | null;
