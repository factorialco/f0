import { BlockProps } from './Block';
export interface BlockContentExtraProps {
    title?: string;
    description?: string;
    titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export declare const BlockContent: import('react').ComponentType<BlockProps & BlockContentExtraProps> & import('..').PageLayoutBlockComponent;
