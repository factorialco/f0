interface ExtractedNumber {
    formattedValue: string;
    value: number | null;
}
export interface Options {
    /**
     * The maximum number of decimals to allow. Set to 0 to only allow integers.
     */
    maxDecimals?: number;
}
/**
 *
 * @param input The text from which to extract a number
 * @returns an object with the formatted number and the value as a number
 *
 * TODO: Make internationalization-friendly to support grouping character
 */
export declare function extractNumber(input: string, { maxDecimals }: Options): ExtractedNumber | null;
export {};
