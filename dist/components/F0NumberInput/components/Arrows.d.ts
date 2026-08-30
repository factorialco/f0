type ArrowsProps = {
    step?: number;
    disabled?: boolean;
    onClickArrow: (type: "increase" | "decrease") => () => void;
};
export declare const Arrows: ({ onClickArrow, step, disabled }: ArrowsProps) => import("react").JSX.Element | null;
export {};
