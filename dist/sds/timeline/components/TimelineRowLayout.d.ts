import { ReactNode } from 'react';
import { TimelineRowStatus } from '../types';
export declare const TimelineRowLayout: ({ status, isLast, hideStatus, children, }: {
    status: TimelineRowStatus;
    isLast: boolean;
    hideStatus: boolean;
    children: ReactNode;
}) => import("react").JSX.Element;
