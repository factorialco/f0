import { RecorderStatus } from '../useAudioRecorder';
interface DictationButtonProps {
    inProgress?: boolean;
    recordingStatus?: RecorderStatus;
    onStartRecording?: () => void;
    /**
     * `md` (32px) in the action row, `sm` (24px) when it trails the text inline on
     * the collapsed bar — see {@link SubmitButton} for why a 32px button cannot be
     * centred on a 20px line of text.
     *
     * @default "md"
     */
    size?: "sm" | "md";
}
/**
 * The composer's dictation control.
 *
 * Kept apart from `ActionBar` because the collapsed bar keeps this button and
 * send while dropping every other control: talking is a way to start a prompt
 * without typing one, so it earns its place on a one-line bar. Both placements
 * must render the same button, so there is one definition rather than two.
 */
export declare const DictationButton: ({ inProgress, recordingStatus, onStartRecording, size, }: DictationButtonProps) => import("react").JSX.Element;
export {};
