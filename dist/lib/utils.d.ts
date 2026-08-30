import { ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
export declare function focusRing(extraClasses?: string): string;
/**
 * A generic type guard that checks if a given string is in the provided array
 * of valid values (forming a string literal union).
 *
 * @param value - The string value to test
 * @param validValues - An array of valid string literals (forming a union type)
 * @returns true if the value is one of validValues, otherwise false
 */
export declare function isStringInUnion<T extends string>(value: string, validValues: readonly T[]): value is T;
export declare function isStringInUnionWithDefault<T extends string>(value: string, validValues: readonly T[], defaultValue: T): T;
