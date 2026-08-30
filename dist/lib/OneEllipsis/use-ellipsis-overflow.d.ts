import { RefObject } from 'react';
interface UseEllipsisOverflowOptions {
    disabled: boolean;
    lines: number;
    onChange?: (hasEllipsis: boolean) => void;
    ref: RefObject<HTMLElement | null> | null;
}
export declare function useEllipsisOverflow({ disabled, lines, onChange, ref, }: UseEllipsisOverflowOptions): boolean;
export {};
