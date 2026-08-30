import { Transition } from 'motion/react';
import { AiInsightCardContent } from '../types';
type CardMetadataProps = {
    heading: string;
    label?: string;
    shouldFadeContent?: boolean;
    fadeTransition?: Transition;
} & AiInsightCardContent;
export declare const CardMetadata: (props: CardMetadataProps) => import("react").JSX.Element;
export {};
