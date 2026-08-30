export declare const headingTags: readonly ["h1", "h2", "h3", "h4", "h5", "h6"];
export declare const textTags: readonly ["p", "span", "div", "label", "code"];
export declare const allTags: readonly ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div", "label", "code"];
export type HeadingTags = (typeof headingTags)[number];
export type TextTags = (typeof textTags)[number];
export type AsAllowedList = (typeof allTags)[number];
