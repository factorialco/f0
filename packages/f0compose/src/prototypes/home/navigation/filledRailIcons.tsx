import type { IconType } from "@factorialco/f0-react"

import { forwardRef, type Ref, type SVGProps } from "react"

/**
 * Filled counterparts for the six rail glyphs, for the ACTIVE state —
 * Slack's pattern, and what Angel asked for on 2026-09-14.
 *
 * f0 ships no filled set for these: `icons/app` has exactly seven
 * *Filled/Solid one-offs (Bookmark, File, Message, PushPin, Star, two
 * Thumbs) and none of them is Home, Inbox, Calendar, Folders or Hub.
 *
 * So these are f0's OWN icons with their OWN path data, verbatim —
 * "keep the same icons and fill the closed paths", his second pass —
 * with `fill="currentColor"` added to the subpaths that close, and the
 * stroke kept so the open subpaths (the calendar's pins, the back
 * bubble, the back folder) still draw. ONE colour throughout: no
 * duotone, no tinted second shape.
 *
 * Delete this file if f0 ever ships a real filled set.
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

/** One closed path — the house with its doorway notch. */
const HomeFilled = icon(
  "HomeFilled",
  <path
    fill="currentColor"
    stroke="currentColor"
    strokeLinejoin="round"
    d="M6.25629 7.60265L10.2563 4.74551C11.2994 4.00044 12.7006 4.00044 13.7437 4.74551L17.7437 7.60265C18.5321 8.16579 19 9.075 19 10.0439V16C19 17.6569 17.6569 19 16 19H15C14.4477 19 14 18.5523 14 18V15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5V18C10 18.5523 9.55228 19 9 19H8C6.34315 19 5 17.6569 5 16V10.0439C5 9.075 5.4679 8.16579 6.25629 7.60265Z"
    vectorEffect="non-scaling-stroke"
  />
)

/** The front bubble closes, so it fills; the back one is an open path and
 *  stays a stroke, in the same colour. */
const MessagesFilled = icon(
  "MessagesFilled",
  <>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 9V7C10 5.89543 10.8954 5 12 5H17C18.1046 5 19 5.89543 19 7V12.7929C19 13.2383 18.4614 13.4614 18.1464 13.1464L17 12H16.5"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z"
      vectorEffect="non-scaling-stroke"
    />
  </>
)

/**
 * Filling the whole tray turned it into a blob — the lip that makes it an
 * inbox is an open path, so it vanished into the fill. Solid only BELOW
 * the lip, with f0's outline still stroked over it: the tray reads full
 * rather than solid.
 */
const InboxFilled = icon(
  "InboxFilled",
  <>
    <path
      fill="currentColor"
      d="M4 10.6162C4 10.2147 4.12081 9.82252 4.34677 9.49064L4.49998 10H7.65285C8.14169 10 8.55888 10.3534 8.63924 10.8356L8.86071 12.1644C8.94107 12.6466 9.35827 13 9.8471 13H14.1529C14.6417 13 15.0589 12.6466 15.1392 12.1644L15.3607 10.8356C15.4411 10.3534 15.8583 10 16.3471 10H19.5L20 10.7146V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V10.6162Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M20 15V10.7146C20 10.2525 19.84 9.80468 19.5471 9.44721L17.6236 7.09895C17.0538 6.40334 16.202 6.00001 15.3028 6.00001H8.31014C7.31744 6.00001 6.38901 6.49108 5.83033 7.31164L4.34677 9.49064C4.12081 9.82252 3.99997 10.2147 3.99997 10.6162V15C3.99997 16.6569 5.34312 18 6.99997 18H17C18.6568 18 20 16.6569 20 15Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.49998 10H7.65285C8.14169 10 8.55888 10.3534 8.63924 10.8356L8.86071 12.1644C8.94107 12.6466 9.35827 13 9.8471 13H14.1529C14.6417 13 15.0589 12.6466 15.1392 12.1644L15.3607 10.8356C15.4411 10.3534 15.8583 10 16.3471 10H19.5"
      vectorEffect="non-scaling-stroke"
    />
  </>
)

/**
 * Filling the whole body swallowed the date grid and left a slab with two
 * antennas. Solid only in the HEADER band above f0's own divider, with
 * the outline and its pins stroked on top — the filled-calendar idiom,
 * and still one colour.
 */
const CalendarFilled = icon(
  "CalendarFilled",
  <>
    <path
      fill="currentColor"
      d="M5 8C5 6.34315 6.34315 5 8 5H16C17.6569 5 19 6.34315 19 8V10H5V8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10V8C5 6.34315 6.34315 5 8 5H9M9 5V3M9 5V7"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 10H19"
      vectorEffect="non-scaling-stroke"
    />
  </>
)

/** The front folder closes and fills; the back one is an open curve and
 *  stays a stroke. */
const FoldersFilled = icon(
  "FoldersFilled",
  <>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M7 19H11.4C14.7603 19 16.4405 19 17.7239 18.346C18.8529 17.7708 19.7708 16.8529 20.346 15.7239C21 14.4405 21 12.7603 21 9.4V9"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      d="M10.4375 5C10.09 4.38228 9.43639 4 8.72765 4H7.12954C6.07585 4 5.54901 4 5.14167 4.19355C4.72595 4.39108 4.39108 4.72595 4.19355 5.14167C4 5.54901 4 6.07585 4 7.12954V11.2C4 12.8802 4 13.7202 4.32698 14.362C4.6146 14.9265 5.07354 15.3854 5.63803 15.673C6.27976 16 7.11984 16 8.8 16H13.2C14.8802 16 15.7202 16 16.362 15.673C16.9265 15.3854 17.3854 14.9265 17.673 14.362C18 13.7202 18 12.8802 18 11.2V10.4168C18 9.09704 18 8.43714 17.796 7.91257C17.4911 7.12874 16.8713 6.50887 16.0874 6.20402C15.5629 6 14.903 6 13.5832 6H12.1473C11.4386 6 10.785 5.61772 10.4375 5V5Z"
      vectorEffect="non-scaling-stroke"
    />
  </>
)

/** Four closed rects, so all four fill — radii untouched. */
const HubFilled = icon(
  "HubFilled",
  <>
    <rect
      fill="currentColor"
      stroke="currentColor"
      width={6}
      height={6}
      x={4.5}
      y={4.5}
      rx={3}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      fill="currentColor"
      stroke="currentColor"
      width={6}
      height={6}
      x={4.5}
      y={13.5}
      rx={1.5}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      fill="currentColor"
      stroke="currentColor"
      width={6}
      height={6}
      x={13.5}
      y={4.5}
      rx={1.5}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      fill="currentColor"
      stroke="currentColor"
      width={6}
      height={6}
      x={13.5}
      y={13.5}
      rx={1.5}
      vectorEffect="non-scaling-stroke"
    />
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
