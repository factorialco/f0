import { type ReactNode } from "react"

import { F0Icon } from "@/components/F0Icon"
import { ClockBack } from "@/icons/app"
import { EmojiImage } from "@/lib/emojis"

import { type EmojiCategoryId } from "../../utils/emoji-index"
import { emojiButtonClass, EMOJI_BUTTON_SIZE } from "./button"

/** The frequently-used block sits above the categories and is jumped to the
 * same way, so the bar always has exactly one entry selected. */
export const FREQUENT_SECTION_ID = "frequent"

export type EmojiSectionId = EmojiCategoryId | typeof FREQUENT_SECTION_ID

/**
 * Glyphs for the jump-to bar. All Emoji 1.0, so every platform draws them —
 * including the flags entry, which is 🚩 rather than 🏳️ on purpose: a white
 * flag survives Windows, where the actual country flags this category holds do
 * not.
 *
 * Frequently-used is the exception: an icon rather than a glyph, because no
 * emoji means "the ones you reach for" and any that came close would read as a
 * ninth category.
 */
const CATEGORY_GLYPH: Record<EmojiCategoryId, string> = {
  people: "😀",
  nature: "🌿",
  foods: "🍔",
  activity: "⚽",
  places: "🚗",
  objects: "💡",
  symbols: "🔣",
  flags: "🚩",
}

export const CategoryBar = ({
  sections,
  activeSection,
  onJump,
}: {
  sections: { id: EmojiSectionId; label: string }[]
  activeSection: EmojiSectionId | null
  onJump: (id: EmojiSectionId) => void
}): ReactNode => (
  // Same horizontal padding as the grid rows, so the bar's buttons sit directly
  // under the emoji columns instead of drifting a few pixels off.
  <div
    className="flex shrink-0 border-t border-solid border-f1-border-secondary px-2 py-1 border-0"
    role="tablist"
  >
    {sections.map((section) => {
      const isActive = section.id === activeSection
      return (
        <button
          key={section.id}
          type="button"
          role="tab"
          aria-selected={isActive}
          aria-label={section.label}
          title={section.label}
          tabIndex={-1}
          // The search box owns focus for the whole panel.
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => onJump(section.id)}
          className={emojiButtonClass(isActive)}
          style={{ width: EMOJI_BUTTON_SIZE, height: EMOJI_BUTTON_SIZE }}
        >
          {section.id === FREQUENT_SECTION_ID ? (
            // The icon case: an F0 icon at the size a `md` button gives it.
            <F0Icon icon={ClockBack} size="md" />
          ) : (
            // The emoji case: the same renderer every other emoji in the chat
            // goes through, so the bar can't drift from the grid.
            <EmojiImage
              emoji={CATEGORY_GLYPH[section.id]}
              mode="native"
              size="md"
              alt=""
            />
          )}
        </button>
      )
    })}
  </div>
)
