import { FilterTypeComponentProps } from '../types';
export type NumberFilterOptions = {
    min?: number;
    max?: number;
    modes?: readonly ("range" | "single")[];
    openCloseToggle?: boolean;
};
export type NumberFilterValue = {
    mode: "single";
    value: number | undefined;
} | {
    mode: "range";
    from: {
        value: number | undefined;
        closed: boolean;
    };
    to: {
        value: number | undefined;
        closed: boolean;
    };
} | undefined;
export type NumberFilterComponentProps = FilterTypeComponentProps<NumberFilterValue, NumberFilterOptions> & {
    isCompactMode?: boolean;
};
/**
 * A number filter component that provides number input.
 */
export declare function NumberFilter({ value, onChange, schema, isCompactMode, }: NumberFilterComponentProps): import("react").JSX.Element;
