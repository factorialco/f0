export const CHAT_COMPOSER_HEIGHT_PROPERTY = "--f0-chat-composer-overlay-height"

/**
 * The 7.5rem fallback must track the composer's real initial height (measured
 * ~118px: 44px textarea + 56px toolbar + 2px borders + 16px outer padding).
 * It's only read during the first commit — before useComposerOverlayLayout's
 * layout effect publishes the measured value — but Virtuoso computes its entry
 * scroll position within that window, so a drifted fallback shows up as a jump
 * on every conversation open.
 */
export const CHAT_COMPOSER_HEIGHT = `var(${CHAT_COMPOSER_HEIGHT_PROPERTY}, 7.5rem)`
