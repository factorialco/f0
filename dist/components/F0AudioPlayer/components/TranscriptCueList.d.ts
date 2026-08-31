import { RefObject } from 'react';
import { TranscriptCue } from '../types';
type CueRefs = RefObject<Array<HTMLLIElement | null>>;
interface TranscriptCueListProps {
    cues: TranscriptCue[];
    activeIndex: number;
    onSeek?: (seconds: number) => void;
    cueRefs?: CueRefs;
}
export declare const TranscriptCueList: import('react').MemoExoticComponent<({ cues, activeIndex, onSeek, cueRefs, }: TranscriptCueListProps) => import("react").JSX.Element>;
export {};
