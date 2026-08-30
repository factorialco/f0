import { ButtonHTMLAttributes } from 'react';
interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder: string;
    shortcut?: string[];
}
export declare function SearchBar({ onClick, placeholder, shortcut, ...props }: SearchBarProps): import("react").JSX.Element;
export {};
