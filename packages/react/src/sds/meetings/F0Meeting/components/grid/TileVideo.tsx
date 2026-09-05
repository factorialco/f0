import { cn } from "@/lib/utils"

import { useTrackBinding } from "../../providers/useTrackBinding"
import { type F0MeetingTrack } from "../../types"

export type TileVideoProps = {
  track: F0MeetingTrack
  /** Screen shares are letterboxed; cameras fill the tile. */
  contain?: boolean
  /** Mirror the local camera, as every other call product does. */
  mirrored?: boolean
}

/**
 * The only place a `<video>` is created. It is never unmounted while the track
 * exists — remounting one shows a black frame and, with simulcast, forces a
 * layer renegotiation.
 */
export const TileVideo = ({
  track,
  contain = false,
  mirrored = false,
}: TileVideoProps) => {
  const ref = useTrackBinding<HTMLVideoElement>(track)

  return (
    <video
      ref={ref}
      autoPlay
      playsInline
      // The room renders one <audio> per remote track instead, so a muted
      // participant tile can never double up the audio.
      muted
      className={cn(
        "h-full w-full",
        contain ? "object-contain" : "object-cover",
        mirrored && "-scale-x-100"
      )}
    />
  )
}
