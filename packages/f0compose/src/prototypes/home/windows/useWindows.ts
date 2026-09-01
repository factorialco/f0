import type { WindowId } from "./types"

import { useWindowStack } from "./stack"
import { DEFAULT_OPEN_WINDOWS } from "./types"

export { MAX_COLUMN_WIDTH, MIN_COLUMN_WIDTH } from "./stack"

/** The right-hand widgets stack. Everything is in `useWindowStack`, which
 *  the left-hand Comms chats stack uses too. */
export function useWindows() {
  return useWindowStack<WindowId>({ open: DEFAULT_OPEN_WINDOWS })
}
