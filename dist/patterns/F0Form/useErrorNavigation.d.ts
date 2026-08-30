import { FieldErrors } from 'react-hook-form';
interface UseErrorNavigationOptions {
    /** Form name for generating anchor IDs */
    formName: string;
    /** Field errors from react-hook-form */
    errors: FieldErrors;
}
interface UseErrorNavigationReturn {
    /** List of field IDs with errors */
    fieldErrors: string[];
    /** Whether there are any field errors */
    hasErrors: boolean;
    /** Number of field errors */
    errorCount: number;
    /** Current error index for navigation */
    currentErrorIndex: number;
    /** Navigate to previous error */
    goToPreviousError: () => void;
    /** Navigate to next error */
    goToNextError: () => void;
    /** Reset error navigation state (e.g., on form reset) */
    resetErrorNavigation: () => void;
}
/**
 * Custom hook for managing form error navigation and auto-focus behavior.
 *
 * Features:
 * - Tracks field errors (excluding root errors)
 * - Auto-focuses newly triggered errors
 * - Provides navigation between errors (prev/next)
 * - Wraps around when navigating past first/last error
 */
export declare function useErrorNavigation({ formName, errors, }: UseErrorNavigationOptions): UseErrorNavigationReturn;
export {};
