import { ReactNode, RefObject } from 'react';
import { RecorderStatus } from '../useAudioRecorder';
interface ActionBarProps {
    onUploadFiles: ((files: File[]) => Promise<unknown>) | undefined;
    toolbarStart?: ReactNode;
    /**
     * Content for the middle of the row, between the attachment/host controls and
     * the dictation/send pair. Takes the row's slack (`flex-1`) and is expected to
     * handle its own overflow — the `inside` suggestions layout puts the chips
     * here, scrolled sideways.
     *
     * Dropped while recording: that row is the waveform plus its cancel · confirm
     * pair, and it needs the whole width.
     */
    center?: ReactNode;
    isAtMaxFiles: boolean;
    maxFiles: number | undefined;
    acceptValue: string | undefined;
    fileInputRef: RefObject<HTMLInputElement>;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inProgress?: boolean;
    hasDataToSend: boolean;
    isPreSending?: boolean;
    /** Voice dictation — when canRecord is false the microphone is hidden. */
    canRecord?: boolean;
    recordingStatus?: RecorderStatus;
    recordingStream?: MediaStream | null;
    onStartRecording?: () => void;
    onStopRecording?: () => void;
    onCancelRecording?: () => void;
}
export declare const ActionBar: ({ onUploadFiles, toolbarStart, center, isAtMaxFiles, maxFiles, acceptValue, fileInputRef, handleFileSelect, inProgress, hasDataToSend, isPreSending, canRecord, recordingStatus, recordingStream, onStartRecording, onStopRecording, onCancelRecording, }: ActionBarProps) => import("react").JSX.Element;
export {};
