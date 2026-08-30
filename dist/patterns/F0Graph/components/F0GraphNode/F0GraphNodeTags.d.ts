import { F0GraphNodeTag } from './types';
interface F0GraphNodeTagsProps {
    tags: F0GraphNodeTag[];
}
/**
 * Renders a flex-wrap row with every tag shown individually. Tags are never
 * grouped or collapsed into a summary — even several tags of the same type are
 * all rendered as-is.
 */
export declare function F0GraphNodeTags({ tags }: F0GraphNodeTagsProps): import("react").JSX.Element | null;
export {};
