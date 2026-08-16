import { resizeHandles, type ResizeHandleId } from "./placement"

const POSITION: Record<ResizeHandleId, string> = {
  n: "left-3 right-3 top-0 h-1.5",
  s: "left-3 right-3 bottom-0 h-1.5",
  w: "top-3 bottom-3 left-0 w-1.5",
  e: "top-3 bottom-3 right-0 w-1.5",
  nw: "left-0 top-0 h-4 w-4",
  ne: "right-0 top-0 h-4 w-4",
  sw: "left-0 bottom-0 h-4 w-4",
  se: "right-0 bottom-0 h-4 w-4",
}

const IDS = Object.keys(resizeHandles) as ResizeHandleId[]

/**
 * Eight invisible grips generated from the geometry table.
 *
 * They are `aria-hidden`: resizing is exposed to keyboard users through the
 * window header's arrow-key shortcuts instead, which is both fewer tab stops
 * and easier to actually operate.
 */
export const ResizeHandles = ({
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
}: {
  onPointerDown: (event: React.PointerEvent, handle: ResizeHandleId) => void
  onPointerMove: (event: React.PointerEvent) => void
  onPointerUp: (event: React.PointerEvent) => void
  onPointerCancel: (event: React.PointerEvent) => void
}) => (
  <>
    {IDS.map((id) => (
      <div
        key={id}
        aria-hidden
        data-f0-no-drag
        className={`absolute z-20 ${POSITION[id]}`}
        style={{ cursor: resizeHandles[id].cursor, touchAction: "none" }}
        onPointerDown={(event) => onPointerDown(event, id)}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      />
    ))}
  </>
)
