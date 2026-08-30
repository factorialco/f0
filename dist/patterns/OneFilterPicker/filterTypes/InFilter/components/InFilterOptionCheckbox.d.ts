export type InFilterOptionCheckboxProps = {
    label: string;
    isSelected: boolean;
    onToggle: () => void;
};
/**
 * Checkbox rendered inside an InFilter option row. It stays interactive so
 * keyboard and assistive-technology users can toggle the option, and its click
 * is stopped from reaching the mouse-friendly row handler that would otherwise
 * toggle the value a second time.
 */
export declare function InFilterOptionCheckbox({ label, isSelected, onToggle, }: InFilterOptionCheckboxProps): import("react").JSX.Element;
