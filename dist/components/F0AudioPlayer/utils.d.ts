import { DataAttributes } from '../../global.types';
import { TranscriptCue } from './types';
export declare const getDataAttributes: <T extends object>(props: T) => DataAttributes;
export declare const formatPlaybackTime: (seconds: number) => string;
export interface CueTimelineEntry {
    start: number;
    cueIndex: number;
}
export declare const buildCueTimeline: (cues: TranscriptCue[]) => CueTimelineEntry[];
export declare const findActiveCueIndex: (timeline: CueTimelineEntry[], time: number) => number;
