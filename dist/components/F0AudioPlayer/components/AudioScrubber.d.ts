interface AudioScrubberProps {
    currentTime: number;
    duration: number;
    buffered?: number;
    disabled?: boolean;
    onSeek: (seconds: number) => void;
}
export declare const AudioScrubber: ({ currentTime, duration, buffered, disabled, onSeek, }: AudioScrubberProps) => import("react").JSX.Element;
export {};
