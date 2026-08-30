import { InFilterOptionItem } from '../types';
export type InFilterFlatOptionProps<T extends string> = {
    option: InFilterOptionItem<T>;
    isSelected: boolean;
    onToggle: () => void;
    isCompactMode?: boolean;
};
export declare function InFilterFlatOption<T extends string>({ option, isSelected, onToggle, isCompactMode, }: InFilterFlatOptionProps<T>): import("react").JSX.Element;
