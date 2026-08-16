import { useF0MeetingRoster } from "../../providers/F0MeetingProvider"
import { useTrackBinding } from "../../providers/useTrackBinding"
import { type F0MeetingTrack } from "../../types"

const RemoteAudio = ({ track }: { track: F0MeetingTrack }) => {
  const ref = useTrackBinding<HTMLAudioElement>(track)
  return <audio ref={ref} autoPlay />
}

/**
 * One `<audio>` per remote track, mounted at the root of the surface and never
 * inside the grid.
 *
 * Audio elements must survive everything the layout does: pagination, spotlight
 * changes, mode switches. Mounting them next to the tiles would cut someone off
 * mid-sentence as soon as they scrolled off the visible page.
 */
export const MeetingAudioRenderer = () => {
  const { participants } = useF0MeetingRoster()

  const tracks = participants
    .filter((participant) => !participant.isLocal)
    .flatMap((participant) =>
      participant.tracks.filter(
        (track) =>
          (track.kind === "microphone" || track.kind === "screenShareAudio") &&
          track.live
      )
    )

  return (
    <div aria-hidden className="hidden">
      {tracks.map((track) => (
        <RemoteAudio key={track.bindingKey} track={track} />
      ))}
    </div>
  )
}
