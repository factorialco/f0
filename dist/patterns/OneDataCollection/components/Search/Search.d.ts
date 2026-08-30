import { AvatarVariant } from '../../../../components/avatars/F0Avatar';
export type SearchResultItem = {
    id: string;
    avatar?: AvatarVariant;
    title: string;
    subtitle?: string;
};
interface SearchProps {
    value?: string;
    onChange: (value: string | undefined) => void;
    loading?: boolean;
    /** Optional rich preview results rendered in a dropdown below the input. */
    results?: SearchResultItem[];
    /** Whether the preview results are still loading. */
    resultsLoading?: boolean;
    /** Fired when a preview result is selected. */
    onResultSelect?: (id: string) => void;
    /** Whether another page of results can be pulled via infinite scroll. */
    hasMore?: boolean;
    /** Whether a further page is currently being appended. */
    loadingMore?: boolean;
    /** Request the next page (fired when the list is scrolled near the bottom). */
    onLoadMore?: () => void;
}
export declare const Search: ({ value, onChange, loading, results, resultsLoading, onResultSelect, hasMore, loadingMore, onLoadMore, }: SearchProps) => import("react").JSX.Element;
export {};
