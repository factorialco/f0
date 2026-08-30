type CardHeaderProps = {
    description?: string;
    isRevealed: boolean;
    onAskOne?: () => void;
};
export declare const CardHeader: ({ description, isRevealed, onAskOne, }: CardHeaderProps) => import("react").JSX.Element;
export {};
