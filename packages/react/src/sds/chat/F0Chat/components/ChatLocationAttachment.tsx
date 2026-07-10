import { lazy, type ReactNode, Suspense } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import { type F0ChatLocationAttachment } from "../types"

// maplibre-gl is heavy — it lives in its own chunk, fetched on first render of
// a location attachment (see LocationMap).
const LocationMap = lazy(() => import("./LocationMap"))

const MAP_HEIGHT = 200

const mapsUrl = ({ latitude, longitude }: F0ChatLocationAttachment): string =>
  `https://www.google.com/maps?q=${latitude},${longitude}`

/**
 * A shared location (WhatsApp-style): a clean, non-interactive vector map
 * preview (MapLibre + OpenFreeMap — keyless and free for commercial use) with
 * an F0 pin on the point. Map-only card — the place name, when present, is the
 * link's accessible label. Clicking anywhere opens the point in Google Maps in
 * a new tab; the map is pointer-inert so the click always lands on the
 * surrounding link.
 */
export const ChatLocationAttachment = ({
  location,
  cornerClass = "rounded-xl",
}: {
  location: F0ChatLocationAttachment
  /** Chained-corner classes mirroring the bubble (see `bubbleCornerClass`). */
  cornerClass?: string
}): ReactNode => {
  const i18n = useI18n()
  return (
    <a
      href={mapsUrl(location)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={location.name ?? i18n.chat.location}
      className={cn(
        "flex w-96 min-w-0 max-w-full flex-col overflow-hidden no-underline",
        "border border-solid border-f1-border-secondary bg-f1-background-tertiary",
        "transition-colors hover:bg-f1-background-secondary",
        cornerClass
      )}
      data-testid="chat-location-attachment"
    >
      <div
        className="pointer-events-none relative w-full"
        style={{ height: MAP_HEIGHT }}
      >
        <Suspense
          fallback={<Skeleton className="h-full w-full rounded-none" />}
        >
          <LocationMap
            latitude={location.latitude}
            longitude={location.longitude}
          />
        </Suspense>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full drop-shadow-md"
          data-testid="chat-location-pin"
        >
          <svg width="27" height="40" viewBox="0 0 24 36" aria-hidden="true">
            <path
              d="M12 .5C5.66.5.5 5.66.5 12c0 2.79 1.32 5.94 2.96 8.86 3.28 5.83 7.6 11.14 7.77 11.35a1 1 0 0 0 1.54 0c.17-.21 4.49-5.52 7.77-11.35 1.64-2.92 2.96-6.07 2.96-8.86C23.5 5.66 18.34.5 12 .5Z"
              className="fill-f1-background-accent-bold"
              stroke="black"
              strokeOpacity={0.25}
            />
            <circle cx={12} cy={12} r={4.5} fill="black" fillOpacity={0.3} />
          </svg>
        </div>
      </div>
    </a>
  )
}
