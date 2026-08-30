interface FavoriteButtonProps {
    /**
     * the state of the button pressed/unpressed
     */
    isMarked: boolean;
    onChange: (newValue: boolean) => void;
    /**
     * Label of the button, will be used as accessibility
     */
    label: string;
}
export declare const FavoriteButton: ({ isMarked, onChange, label, }: FavoriteButtonProps) => import("react").JSX.Element;
export {};
