import type { Ref, SVGProps } from "react"

import { forwardRef } from "react"

/**
 * The dock/float toggle glyphs, exported from Figma (the floating card is
 * 2694:55372, the docked panel 1044:8162). f0 ships no equivalent — its
 * `Windows` icon is the Microsoft logo, and there is no side-panel or
 * floating-card glyph in the app set.
 *
 * FILL paths, not strokes, so they must NOT carry `vector-effect:
 * non-scaling-stroke` the way f0's stroke icons do.
 *
 * The two share the same rounded-rect frame and differ only in the inset
 * block: a small square in the bottom-right corner reads as a floating
 * card, a tall bar down the right side as a side panel.
 */

const FRAME =
  "M20.6586 14.9935C20.6585 17.0093 19.024 18.6439 17.0082 18.6439L11.7504 18.6439L7.0014 18.6498L7.00043 18.6498C4.9849 18.6496 3.35025 17.0159 3.35004 15.0004L3.35004 9.00037C3.35004 7.01372 4.93803 5.3993 6.91351 5.35291C6.94198 5.34908 6.97092 5.34319 7.00043 5.34314L17.0082 5.34314C19.0241 5.34314 20.6586 6.97768 20.6586 8.99353L20.6586 14.9935ZM19.3578 8.99353C19.3578 7.69565 18.3061 6.64392 17.0082 6.64392L7.06097 6.64392C7.04107 6.6458 7.02081 6.64978 7.00043 6.64978C5.70274 6.64999 4.65082 7.70263 4.65082 9.00037L4.65082 15.0004C4.65103 16.2976 5.70234 17.3492 6.99945 17.35L11.7485 17.3431L17.0082 17.3431C18.3061 17.3431 19.3577 16.2913 19.3578 14.9935L19.3578 8.99353Z"

const FLOATING_BLOCK =
  "M16.8251 12.0067C17.2806 12.0069 17.6493 12.3764 17.6493 12.8319V14.8387C17.649 15.294 17.2804 15.6628 16.8251 15.663H12.8261C12.3707 15.6629 12.0012 15.2941 12.0009 14.8387V12.8319C12.0009 12.3763 12.3705 12.0068 12.8261 12.0067H16.8251Z"

const SIDEPANEL_BLOCK =
  "M16.8251 8.3092C17.2806 8.30938 17.6493 8.67887 17.6493 9.1344V14.8453C17.6491 15.3007 17.2805 15.6704 16.8251 15.6705H12.8261C12.3706 15.6705 12.0011 15.3008 12.0009 14.8453V9.1344C12.0009 8.67881 12.3705 8.30927 12.8261 8.3092H16.8251Z"

/** forwardRef so these satisfy f0's `IconType`, the same shape its own
 *  generated icons have — otherwise they can only be passed where the
 *  prop is loosely typed. */
function panelIcon(block: string) {
  const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d={FRAME} />
      <path fill="currentColor" d={block} />
    </svg>
  )
  return forwardRef(Icon)
}

/** A card floating over the canvas — shown while the widget is DOCKED,
 *  because a toggle's glyph names the state you will get, not the one
 *  you are in. */
export const FloatingIcon = panelIcon(FLOATING_BLOCK)

/** The widget docked back into its side column — shown while FLOATING. */
export const SidePanelIcon = panelIcon(SIDEPANEL_BLOCK)
