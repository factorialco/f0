import { ReactNode } from 'react';
import { EmojiCategoryId } from '../../utils/emoji-index';
/** The frequently-used block sits above the categories and is jumped to the
 * same way, so the bar always has exactly one entry selected. */
export declare const FREQUENT_SECTION_ID = "frequent";
export type EmojiSectionId = EmojiCategoryId | typeof FREQUENT_SECTION_ID;
export declare const CategoryBar: ({ sections, activeSection, onJump, }: {
    sections: {
        id: EmojiSectionId;
        label: string;
    }[];
    activeSection: EmojiSectionId | null;
    onJump: (id: EmojiSectionId) => void;
}) => ReactNode;
