/**
 * Information source attached to an assistant message.
 */
export type F0AiMessageSource = {
    title: string;
    link?: string;
    /** Name of an icon exported by `@factorialco/f0-react/icons/app`. */
    icon?: string;
    targetBlank?: boolean;
};
export type F0AiMessageSourcesProps = {
    sources: F0AiMessageSource[];
    /**
     * Override the section title. Defaults to the
     * `ai.resourcesGroupTitle` translation key.
     */
    title?: string;
};
/**
 * Renders a collapsible group of information sources attached to an
 * assistant message. Sources without a `link` render as plain rows;
 * sources with a `link` render as clickable Actions. Pure presentational
 * — no hooks, no AI coupling.
 */
export declare function F0AiMessageSources({ sources, title: titleProp, }: F0AiMessageSourcesProps): import("react").JSX.Element | null;
export declare namespace F0AiMessageSources {
    var displayName: string;
}
