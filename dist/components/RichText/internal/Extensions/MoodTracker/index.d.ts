import { Node } from '@tiptap/core';
import { NodeViewProps } from '@tiptap/react';
import { default as React } from 'react';
import { Pulse } from '../../../../../lib/mood';
interface MoodTrackerData {
    title: string;
    averageMoodComment: string;
    days: {
        day: string;
        mood: Pulse;
        comment: string;
    }[];
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        moodTracker: {
            insertMoodTracker: (data: MoodTrackerData) => ReturnType;
        };
    }
}
export declare const MoodTrackerView: React.FC<NodeViewProps>;
export declare const MoodTracker: Node<{
    currentConfig: null;
}, any>;
export declare const MoodTrackerExtension: Node<{
    currentConfig: null;
}, any>;
export {};
