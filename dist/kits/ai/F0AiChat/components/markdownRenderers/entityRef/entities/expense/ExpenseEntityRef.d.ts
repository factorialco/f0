/**
 * Inline expense entity reference with a hover card showing expense details.
 *
 * Renders the trigger as a styled link. On hover, lazily fetches
 * the expense profile via `entityRefs.resolvers.expense` and displays
 * description, amount, and status. Optionally links via `entityRefs.urls.expense`.
 */
export declare function ExpenseEntityRef({ id, label }: {
    id: string;
    label: string;
}): import("react").JSX.Element;
