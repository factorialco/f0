export interface TitleProps {
    value: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}
declare const Title: ({ value, onChange, placeholder, disabled, }: TitleProps) => import("react").JSX.Element;
export { Title };
