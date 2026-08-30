/**
 * Inline job posting entity reference with a hover card showing posting details.
 *
 * Renders the trigger as a styled link. On hover, lazily fetches
 * the job posting data via `entityRefs.resolvers.jobPosting` and displays
 * title, status, and location. Optionally links via `entityRefs.urls.jobPosting`.
 */
export declare function JobPostingEntityRef({ id, label, }: {
    id: string;
    label: string;
}): import("react").JSX.Element;
