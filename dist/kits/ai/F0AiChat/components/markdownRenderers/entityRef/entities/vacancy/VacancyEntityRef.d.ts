/**
 * Inline vacancy entity reference with a hover card showing vacancy details.
 *
 * Renders the trigger as a styled link. On hover, lazily fetches
 * the vacancy data via `entityRefs.resolvers.vacancy` and displays
 * name, status, and vacancy type. Optionally links via `entityRefs.urls.vacancy`.
 */
export declare function VacancyEntityRef({ id, label }: {
    id: string;
    label: string;
}): import("react").JSX.Element;
