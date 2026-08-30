import { TranscribeFn } from '../F0AiChat/types';
export type RecorderStatus = "idle" | "recording" | "transcribing";
export type RecorderError = "permission-denied" | "device-error" | "transcription-failed";
type UseAudioRecorderParams = {
    onTranscribe: TranscribeFn | undefined;
    /** Cumulative partial transcript — drives live textarea fill. */
    onPartial: (text: string) => void;
    /** Final transcript once transcription resolves. */
    onFinal: (text: string) => void;
    onError: (error: RecorderError) => void;
    maxDurationMs?: number;
    /**
     * Voice-note mode: when provided, the recorded audio is delivered RAW
     * (blob + duration) instead of being transcribed — `onTranscribe` is not
     * needed and the "transcribing" status never happens. Used by the F0Chat
     * composer to send voice notes.
     */
    onAudio?: (audio: Blob, durationMs: number) => void;
};
/**
 * Records microphone audio and pipes it through a transcription function.
 * The recorder owns mic permission, the MediaRecorder lifecycle, a duration
 * timer and a max-duration auto-stop; transcription streaming is delegated to
 * `onTranscribe` (which reports partials via `onPartial`).
 */
export declare function useAudioRecorder({ onTranscribe, onPartial, onFinal, onError, maxDurationMs, onAudio, }: UseAudioRecorderParams): {
    status: RecorderStatus;
    durationMs: number;
    isSupported: boolean;
    stream: MediaStream | null;
    start: () => Promise<void>;
    stop: () => void;
    cancel: () => void;
};
export {};
