import { Node } from '@tiptap/core';
import { NodeViewProps } from '@tiptap/react';
import { default as React } from 'react';
export interface User {
    id: string;
    fullname: string;
    imageUrl: string;
}
export interface Message {
    userId: string;
    text: string;
    dateTime: string;
}
export interface TranscriptData {
    title: string;
    messages: Message[];
    users: User[];
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        transcript: {
            insertTranscript: (data: TranscriptData) => ReturnType;
        };
    }
}
export declare const TranscriptView: React.FC<NodeViewProps>;
export declare const Transcript: Node<{
    currentConfig: null;
}, any>;
export declare const TranscriptExtension: Node<{
    currentConfig: null;
}, any>;
