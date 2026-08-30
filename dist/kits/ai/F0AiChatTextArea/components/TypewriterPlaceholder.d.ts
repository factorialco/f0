export interface TypewriterPlaceholderProps {
    placeholders: string[];
    defaultPlaceholder: string;
    inputValue: string;
    inProgress: boolean;
}
export declare const TypewriterPlaceholder: ({ placeholders, defaultPlaceholder, inputValue, inProgress, }: TypewriterPlaceholderProps) => import("react").JSX.Element | null;
