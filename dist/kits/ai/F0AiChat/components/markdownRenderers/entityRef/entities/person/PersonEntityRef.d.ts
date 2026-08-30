/**
 * Inline person entity reference with a hover card showing profile details.
 *
 * Renders the trigger as a styled @mention. On hover, lazily fetches
 * the employee profile via `entityRefs.resolvers.person` and displays
 * avatar, name, and job title. Optionally links via `entityRefs.urls.person`.
 */
export declare function PersonEntityRef({ id, label }: {
    id: string;
    label: string;
}): import("react").JSX.Element;
