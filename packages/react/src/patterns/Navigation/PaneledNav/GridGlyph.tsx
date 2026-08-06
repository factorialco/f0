/**
 * The 2×2-grid glyph used by the navigation trigger. F0 has no equivalent
 * grid icon, so it is rendered from four rounded squares that inherit the
 * trigger's `currentColor` (so it flips to white when the trigger is active).
 */
export const GridGlyph = () => (
  <span
    aria-hidden="true"
    className="grid h-4 w-4 grid-cols-2 grid-rows-2 gap-[3px]"
  >
    <span className="block rounded-[2px] bg-current" />
    <span className="block rounded-[2px] bg-current" />
    <span className="block rounded-[2px] bg-current" />
    <span className="block rounded-[2px] bg-current" />
  </span>
)
