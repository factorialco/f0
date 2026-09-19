/**
 * Form layout constants
 */

/** Gap between form fields (16px) */
export const FIELD_GAP = "gap-4"

/** Padding for switch group container (16px) */
export const SWITCH_GROUP_PADDING = "p-4"

/** Margin between sections (24px) */
export const SECTION_MARGIN = "mt-6"

export const FORM_SIZE = "md" as const

/**
 * Distance between the pinned sections rail and the top of the scrolling
 * ancestor. Exposed as a custom property so a consumer can clear its own
 * sticky header by setting it on any element above the form.
 */
export const SECTIONS_RAIL_TOP_VAR = "--f0-form-sections-rail-top"

/** Where the rail pins once the form scrolls under it. */
export const SECTIONS_RAIL_TOP_CLASS =
  "top-[var(--f0-form-sections-rail-top,0px)]"

/**
 * Keeps a section heading clear of both the rail offset and its own 16px of
 * breathing room when an anchor is scrolled to.
 */
export const SECTION_SCROLL_MARGIN_CLASS =
  "scroll-mt-[calc(1rem_+_var(--f0-form-sections-rail-top,0px))]"
