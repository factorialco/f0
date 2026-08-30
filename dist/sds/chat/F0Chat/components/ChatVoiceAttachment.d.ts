import { ReactNode } from 'react';
import { F0ChatVoiceAttachment } from '../types';
export declare const ChatVoiceAttachment: ({ voice, isMine, cornerClass, className, surfaceClassName, }: {
    voice: F0ChatVoiceAttachment;
    isMine?: boolean;
    cornerClass?: string;
    className?: string;
    /** Sender-aware surface supplied by a transcript message. */
    surfaceClassName?: string;
}) => ReactNode;
