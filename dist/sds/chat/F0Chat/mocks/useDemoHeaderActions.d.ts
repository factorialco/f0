import { ReactNode } from 'react';
import { F0ChatHeaderAction, F0ChatRuntime, F0ChatUser } from '../types';
/** My role in the mocked channel — what a real host derives from its
 * permission system (e.g. the Stream member's role). */
export type DemoChannelRole = "admin" | "member" | "guest";
/**
 * Demo wiring of {@link F0ChatHeaderAction} the way a real host would do it,
 * driven by the user's PERMISSIONS in the channel:
 * - "guest" → no actions at all (only the built-in search remains),
 * - "member" → Pin/Unpin + Mute/Unmute, wired to the runtime's toggles,
 * - "admin" → the above plus "Edit group", which opens an F0Dialog owned by
 *   the host (rendered OUTSIDE F0Chat — the callback is the whole contract).
 *   The dialog mocks a real edit form: group name input + the member tags.
 *
 * The array is rebuilt per render so the pin/mute labels and icons follow the
 * channel state — the documented pattern for toggle actions.
 */
export declare function useDemoHeaderActions(runtime: Pick<F0ChatRuntime, "channel" | "togglePin" | "toggleMute">, role?: DemoChannelRole, opts?: {
    members?: F0ChatUser[];
}): {
    headerActions: F0ChatHeaderAction[];
    editDialog: ReactNode;
};
