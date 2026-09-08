/**
 * The surface every map overlay shares: a translucent card lifted off the map.
 * Held in one place so the navigation controls, the panel toggle and the side
 * panel read as one material instead of three lookalikes that drift apart.
 *
 * `F0Box` has no backdrop-filter prop, so the frosted-glass blur lives on a
 * wrapper whose radius matches the card - the translucent surface then frosts
 * the map behind it. `mapSurfaceBlur` is that wrapper's class.
 */
export const mapSurfaceProps = {
  background: "inverse-secondary",
  border: "default",
  borderStyle: "solid",
  borderColor: "secondary",
} as const

/**
 * Radius per overlay. A control card wraps a 10px-cornered button in 2px, so it
 * lands on the 12px corner. A panel is a surface rather than a snug wrapper and
 * takes the 16px corner, which is also what the page's own cards use. Named
 * separately so a change to either can move without dragging the other along.
 */
export const mapSurfaceRadius = { control: "md", panel: "xl" } as const

/**
 * Frosted-glass wrapper class per radius. Spelled out rather than interpolated:
 * Tailwind only keeps classes it can find literally in the source.
 */
const BLUR_BY_RADIUS = {
  md: "rounded-md backdrop-blur-md",
  lg: "rounded-lg backdrop-blur-md",
  xl: "rounded-xl backdrop-blur-md",
} as const

export const mapSurfaceBlur = (
  radius: (typeof mapSurfaceRadius)[keyof typeof mapSurfaceRadius]
) => BLUR_BY_RADIUS[radius]

/**
 * Geometry shared by the side panels and the overlay controls beside them. One
 * 8px rhythm throughout: a panel sits 8px off the map's edges, the controls sit
 * 8px off theirs, and 8px separates every pair.
 *
 * The two panels are sized for what they hold: the list is a column of rows and
 * needs only enough width for a name and a line under it, while the detail
 * carries labelled fields and team cards.
 */
export const MAP_PANEL = {
  /** Panel margin from the map's left, top and bottom edges. */
  inset: 8,
  /** Gap between a panel and whatever sits to its right. */
  gap: 8,
  /** Width of the list panel. */
  listWidth: 214,
  /** Width of the detail panel. */
  detailWidth: 344,
  /**
   * The panel toggle's card is square. A panel the toggle floats over starts
   * below it, clearing this plus the shared gap, so the button never sits on
   * the panel's own content.
   */
  toggleSize: 38,
} as const

/** Overlay controls' distance from the map's left, top and bottom edges. */
export const MAP_CONTROL_INSET = 8

/**
 * `easeInOutQuart`, the curve every panel moves on, in and out.
 *
 * Applied as inline style rather than Tailwind utilities on purpose: an
 * arbitrary `ease-[cubic-bezier(...)]` class is only generated if the scanner
 * finds that exact string, and when it doesn't the element silently falls back
 * to Tailwind's default curve - which is what happened here. There is no easing
 * token in the config to extend, so the values live with the component.
 */
const EASE_IN_OUT_QUART = "cubic-bezier(0.77, 0, 0.175, 1)"

/**
 * One timing for every panel, by direction. Arriving is quicker than leaving:
 * a panel you asked for should be there, while one you dismissed can take its
 * time getting out of the way.
 *
 * Anything moving *because* of a panel - the controls it displaces, a panel
 * shifting into a freed slot - runs on the same entry here, which is what keeps
 * them travelling as one thing instead of one chasing the other.
 */
export const MAP_PANEL_TIMING = {
  enter: { duration: "175ms", easing: EASE_IN_OUT_QUART },
  exit: { duration: "250ms", easing: EASE_IN_OUT_QUART },
} as const

/**
 * How each panel is placed when closed. The timing is shared (above); only the
 * shape of the movement differs.
 */
export const MAP_PANEL_ENTRANCE = {
  /**
   * The list panel, anchored to the map's edge: travels its whole width in from
   * off-canvas, so its closed transform depends on where it sits and is built
   * by the component.
   */
  slide: {},
  /**
   * A panel that appears beside one already open: it has nowhere to travel
   * from, so it grows into place instead - up from 0.97 with a nudge of a tenth
   * of its width, left to right, from the edge it emerges out of.
   */
  grow: {
    closedTransform: "translateX(-10%) scale(0.97)",
    /** Grows out of the edge it comes from, not from its own middle. */
    origin: "left center", // i18n-exempt: a CSS transform-origin, not copy
  },
} as const
