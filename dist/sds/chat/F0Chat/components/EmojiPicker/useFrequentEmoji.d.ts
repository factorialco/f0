import { EmojiEntry } from '../../utils/emoji-index';
/**
 * The "frequently used" row, ranked by how often this browser has picked each
 * emoji. Read once per mount — the picker mounts with its popover, so every
 * open already picks up the latest tally.
 */
export declare const useFrequentEmoji: () => {
    frequent: EmojiEntry[];
    recordUse: (emoji: EmojiEntry) => void;
};
