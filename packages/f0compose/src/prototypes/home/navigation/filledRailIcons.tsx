import type { IconType } from "@factorialco/f0-react"

import { forwardRef, type Ref, type SVGProps } from "react"

/**
 * Filled counterparts for the six rail glyphs, for the ACTIVE state —
 * Slack's pattern, and what Angel asked for on 2026-09-14.
 *
 * f0 ships no filled set for these: `icons/app` has exactly seven
 * *Filled/Solid one-offs (Bookmark, File, Message, PushPin, Star, two
 * Thumbs) and none of them is Home, Inbox, Calendar, Folders or Hub. So
 * rather than import a foreign pack — which the prototype allowlist
 * forbids and which would not match the family anyway — each of these is
 * f0's OWN outline redrawn as a solid: same 24 viewBox, same silhouette,
 * same corner radii, with the interior details knocked out through
 * `fillRule="evenodd"` so they read at 24px instead of closing up.
 *
 * If f0 ever ships a real filled set, delete this file and swap the map.
 */

type Props = SVGProps<SVGSVGElement>

function icon(name: string, body: React.ReactNode): IconType {
  const Svg = (props: Props, ref: Ref<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      {body}
    </svg>
  )
  Svg.displayName = name
  return forwardRef(Svg) as IconType
}

/** The outline's own roof-and-walls, filled, with the door knocked out. */
const HomeFilled = icon(
  "HomeFilled",
  <path
    fill="currentColor"
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.2563 4.74551C11.2994 4.00044 12.7006 4.00044 13.7437 4.74551L17.7437 7.60265C18.5321 8.16579 19 9.075 19 10.0439V16C19 17.6569 17.6569 19 16 19H15C14.4477 19 14 18.5523 14 18V15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5V18C10 18.5523 9.55228 19 9 19H8C6.34315 19 5 17.6569 5 16V10.0439C5 9.075 5.4679 8.16579 6.25629 7.60265L10.2563 4.74551Z"
  />
)

/** Both speech bubbles of `Messages`, solid; the back one keeps its tail. */
const MessagesFilled = icon(
  "MessagesFilled",
  <>
    <path
      fill="currentColor"
      d="M12 5C10.8954 5 10 5.89543 10 7V10H12C14.2091 10 16 11.7909 16 14V14H17L18.1464 15.1464C18.4614 15.4614 19 15.2383 19 14.7929V7C19 5.89543 18.1046 5 17 5H12Z"
      opacity={0.45}
    />
    <path
      fill="currentColor"
      d="M7 12C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17V14C14 12.8954 13.1046 12 12 12H7Z"
    />
  </>
)

/** The tray, solid, with the outline's inner lip knocked out. */
const InboxFilled = icon(
  "InboxFilled",
  <path
    fill="currentColor"
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.31014 6C7.31744 6 6.38901 6.49108 5.83033 7.31164L4.34677 9.49064C4.12081 9.82252 4 10.2147 4 10.6162V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15V10.7146C20 10.2525 19.84 9.80468 19.5471 9.44721L17.6236 7.09895C17.0538 6.40334 16.202 6 15.3028 6H8.31014ZM7.65285 10.75H6V15C6 15.5523 6.44772 16 7 16H17C17.5523 16 18 15.5523 18 15V10.75H16.3471L16.1256 12.0788C15.9649 13.0432 15.1305 13.75 14.1529 13.75H9.8471C8.86945 13.75 8.03506 13.0432 7.87434 12.0788L7.65285 10.75Z"
  />
)

/** The rounded body, solid, with the outline's header band knocked out so
 *  the two hanging pins still read. */
const CalendarFilled = icon(
  "CalendarFilled",
  <>
    <path
      fill="currentColor"
      d="M9 3C9.55228 3 10 3.44772 10 4V5H14V4C14 3.44772 14.4477 3 15 3C15.5523 3 16 3.44772 16 4V5.04938C18.2447 5.27543 20 7.17393 20 9.48V10C20 10.5523 19.5523 11 19 11H5C4.44772 11 4 10.5523 4 10V9.48C4 7.17393 5.75527 5.27543 8 5.04938V4C8 3.44772 8.44772 3 9 3Z"
      opacity={0.45}
    />
    <path
      fill="currentColor"
      d="M4 12.5H20V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V12.5Z"
    />
  </>
)

/** The two stacked folders of `Folders`, solid. */
const FoldersFilled = icon(
  "FoldersFilled",
  <>
    <path
      fill="currentColor"
      d="M7.12954 4C6.07585 4 5.54901 4 5.14167 4.19355C4.72595 4.39108 4.39108 4.72595 4.19355 5.14167C4 5.54901 4 6.07585 4 7.12954V11.2C4 12.8802 4 13.7202 4.32698 14.362C4.6146 14.9265 5.07354 15.3854 5.63803 15.673C6.27976 16 7.11984 16 8.8 16H13.2C14.8802 16 15.7202 16 16.362 15.673C16.9265 15.3854 17.3854 14.9265 17.673 14.362C18 13.7202 18 12.8802 18 11.2V10.4168C18 9.09704 18 8.43714 17.796 7.91257C17.4911 7.12874 16.8713 6.50887 16.0874 6.20402C15.5629 6 14.903 6 13.5832 6H12.1473C11.4386 6 10.785 5.61772 10.4375 5C10.09 4.38228 9.43639 4 8.72765 4H7.12954Z"
    />
    <path
      fill="currentColor"
      d="M20 9V9.4C20 12.7603 20 14.4405 19.346 15.7239C18.7708 16.8529 17.8529 17.7708 16.7239 18.346C15.4405 19 13.7603 19 10.4 19H7C6.44772 19 6 19.4477 6 20C6 20.5523 6.44772 21 7 21H11.4C14.7603 21 16.4405 21 17.7239 20.346C18.8529 19.7708 19.7708 18.8529 20.346 17.7239C21 16.4405 21 14.7603 21 11.4V9C21 8.44772 20.5523 8 20 8C19.4477 8 19 8.44772 19 9H20Z"
      opacity={0.45}
    />
  </>
)

/** `Hub`'s four tiles, solid, keeping the top-left one's rounder radius. */
const HubFilled = icon(
  "HubFilled",
  <>
    <rect fill="currentColor" width={6} height={6} x={4.5} y={4.5} rx={3} />
    <rect fill="currentColor" width={6} height={6} x={4.5} y={13.5} rx={1.5} />
    <rect fill="currentColor" width={6} height={6} x={13.5} y={4.5} rx={1.5} />
    <rect fill="currentColor" width={6} height={6} x={13.5} y={13.5} rx={1.5} />
  </>
)

/** Keyed by the rail section id, so a section without a filled glyph
 *  simply keeps its outline instead of falling back to a wrong shape. */
export const FILLED_RAIL_ICONS: Record<string, IconType> = {
  home: HomeFilled,
  comms: MessagesFilled,
  inbox: InboxFilled,
  cal: CalendarFilled,
  files: FoldersFilled,
  hub: HubFilled,
}
