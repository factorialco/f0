import { RecorderStatus } from '../useAudioRecorder';
interface SubmitButtonProps {
    inProgress?: boolean;
    hasDataToSend: boolean;
    isPreSending?: boolean;
    recordingStatus?: RecorderStatus;
    /**
     * `md` (32px) for the action row, where the button stands in a row of its own
     * peers. `sm` (24px) when it trails the text inline — the collapsed bar, which
     * has no action row: a 32px button beside a 20px line of text cannot be centred
     * on that line without eating the field's top inset, which is what makes it
     * look pinned to the border.
     *
     * @default "md"
     */
    size?: "sm" | "md";
}
/**
 * The composer's send / stop control.
 *
 * Kept apart from `ActionBar` because the collapsed bar has no action row and
 * puts this button on the textarea's own line instead — both placements must
 * render the exact same button (same labels, same disabled rule, same
 * stop-while-streaming swap), so there is one definition rather than two.
 */
export declare const SubmitButton: ({ inProgress, hasDataToSend, isPreSending, recordingStatus, size, }: SubmitButtonProps) => import("react").JSX.Element;
export {};
