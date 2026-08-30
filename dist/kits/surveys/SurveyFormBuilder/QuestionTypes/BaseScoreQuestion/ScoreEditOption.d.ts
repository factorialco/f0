export type ScoreEditOptionProps = {
    option: {
        value: number;
        label: string;
    };
    selected: boolean;
    onClick: (value: number) => void;
    onRemove?: (value: number) => void;
    onChangeLabel?: (value: number, newLabel: string) => void;
    disabled?: boolean;
    isEmojiMode?: boolean;
};
export declare const ScoreEditOption: ({ option, selected, onClick, onChangeLabel, disabled, isEmojiMode, }: ScoreEditOptionProps) => import("react").JSX.Element;
