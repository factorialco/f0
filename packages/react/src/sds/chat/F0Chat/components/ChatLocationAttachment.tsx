import { type ReactNode } from "react"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type F0ChatLocationAttachment } from "../types"

/** Span of the embedded map viewport, in degrees (~small neighbourhood). */
const BBOX_LNG = 0.004
const BBOX_LAT = 0.002

const embedUrl = ({
  latitude,
  longitude,
}: F0ChatLocationAttachment): string => {
  const bbox = [
    longitude - BBOX_LNG,
    latitude - BBOX_LAT,
    longitude + BBOX_LNG,
    latitude + BBOX_LAT,
  ].join(",")
  const params = new URLSearchParams({
    bbox,
    layer: "mapnik",
    marker: `${latitude},${longitude}`,
  })
  return `https://www.openstreetmap.org/export/embed.html?${params.toString()}`
}

const mapsUrl = ({ latitude, longitude }: F0ChatLocationAttachment): string =>
  `https://www.google.com/maps?q=${latitude},${longitude}`

/**
 * A shared location: an embedded OpenStreetMap preview (keyless — no maps API
 * token needed) with a footer naming the place; clicking anywhere opens the
 * point in Google Maps in a new tab. The iframe is pointer-inert so the click
 * always lands on the surrounding link.
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
      className={cn(
        "flex w-full flex-col overflow-hidden bg-f1-background-tertiary no-underline transition-colors hover:bg-f1-background-secondary",
        cornerClass
      )}
      data-testid="chat-location-attachment"
    >
      <iframe
        src={embedUrl(location)}
        title={location.name ?? i18n.chat.location}
        loading="lazy"
        className="pointer-events-none h-fit w-full border-0"
      />
      <div className="flex min-w-0 items-center gap-1.5 p-2.5">
        <OneEllipsis className="text-sm font-medium text-f1-foreground">
          {location.name ?? i18n.chat.location}
        </OneEllipsis>
      </div>
    </a>
  )
}
