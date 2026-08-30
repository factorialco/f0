import { ClarifyingOption, ClarifyingSelectionMode } from '../types';
interface OptionRowProps {
    option: ClarifyingOption;
    isSelected: boolean;
    mode: ClarifyingSelectionMode;
    /** Whether this row is the current tab stop in the roving tabindex group */
    isTabStop?: boolean;
    onToggle: (optionId: string) => void;
    /** Handle arrow/home/end navigation within the group */
    onKeyNavigate?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}
export declare const OptionRow: import('react').ForwardRefExoticComponent<OptionRowProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
