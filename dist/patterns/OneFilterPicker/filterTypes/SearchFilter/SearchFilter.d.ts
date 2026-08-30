import { FilterTypeComponentProps } from '../types';
export type SearchFilterOptions = {
    /**
     * Shows a strict toggle button to clear the search value
     **/
    strictToggle?: false;
} | {
    strictToggle: true;
    defaultStrict?: boolean;
};
/**
 * Props for the SearchFilter component.
 */
export type SearchFilterComponentProps = FilterTypeComponentProps<string | {
    value: string;
    strict: boolean;
}, SearchFilterOptions, true>;
/**
 * A search filter component that provides free-text search functionality.
 * Renders an input field with appropriate placeholder text based on the filter label.
 *
 * @example
 * ```tsx
 * <SearchFilter
 *   filter={{ type: "search", label: "Name" }}
 *   value={searchTerm}
 *   onChange={setSearchTerm}
 * />
 * ```
 */
export declare function SearchFilter({ schema, value, onChange, }: SearchFilterComponentProps): import("react").JSX.Element;
