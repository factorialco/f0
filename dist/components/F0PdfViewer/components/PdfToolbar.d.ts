import { Ref } from 'react';
import { F0PdfScale, F0PdfViewerAction } from '../types';
interface ScaleOption {
    value: F0PdfScale;
    label: string;
}
interface PdfToolbarProps {
    toolbarRef: Ref<HTMLDivElement>;
    currentPage: number;
    totalPages: number | undefined;
    hasDocument: boolean;
    selectedScale: F0PdfScale;
    scaleOptions: ScaleOption[];
    onPreviousPage: () => void;
    onNextPage: () => void;
    onZoomIn: () => void;
    onZoomOut: () => void;
    onScaleChange: (value: F0PdfScale) => void;
    rotatable: boolean;
    onRotate: () => void;
    onPrint: () => void;
    onDownload: () => void;
    /** Host-provided actions appended after the built-in controls. */
    actions?: F0PdfViewerAction[];
}
export declare const PdfToolbar: ({ toolbarRef, currentPage, totalPages, hasDocument, selectedScale, scaleOptions, onPreviousPage, onNextPage, onZoomIn, onZoomOut, onScaleChange, rotatable, onRotate, onPrint, onDownload, actions, }: PdfToolbarProps) => import("react").JSX.Element;
export {};
