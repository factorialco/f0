/**
 * Given a scroll event on the viewer container, return the 1-based page number
 * of the page that occupies the most visible height, or null if none.
 */
export declare const calculateVisiblePage: (container: HTMLElement, pageElements: (HTMLElement | null)[], paddingTop: number) => number | null;
