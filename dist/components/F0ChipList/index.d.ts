import { ChipProps } from '../OneChip';
type Props = {
    /**
     * Array of chips to display.
     */
    chips: Array<ChipProps>;
    /**
     * The maximum number of chips to display.
     * @default 4
     */
    max?: number;
    /**
     * The remaining number to display.
     */
    remainingCount?: number;
    /**
     * The layout of the chip list.
     * - "fill" - Chips will expand to fill the available width, with overflow items shown in a counter
     * - "compact" - Chips will be stacked together up to the max limit, with remaining shown in counter
     * @default "compact"
     */
    layout?: "fill" | "compact";
};
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0ChipList: import('../../lib/data-testid').WithDataTestIdReturnType<{
    ({ chips, max, remainingCount: initialRemainingCount, layout, }: Props): import("react").JSX.Element;
    displayName: string;
}>;
export {};
