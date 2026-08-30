import { FiltersDefinition, FiltersMode, FiltersState } from '../types';
interface FiltersControlsProps<Filters extends FiltersDefinition> {
    /** The filters shown in the selector list (excludes `hideSelector` filters). */
    filters: Filters;
    /**
     * The complete filter definition, including `hideSelector` filters (e.g. the
     * sibling keys that hold nested/grouped child selections). Used when computing
     * the value to apply so nested selections aren't dropped. Falls back to
     * `filters` when omitted.
     */
    allFilters?: Filters;
    value: FiltersState<Filters>;
    onChange: (value: FiltersState<Filters>) => void;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    hideLabel?: boolean;
    mode?: FiltersMode;
    displayCounter?: boolean;
}
export declare function FiltersControls<Filters extends FiltersDefinition>({ filters, allFilters, value, onChange, isOpen: controlledIsOpen, onOpenChange: controlledOnOpenChange, hideLabel, mode, displayCounter, }: FiltersControlsProps<Filters>): import("react").JSX.Element;
export {};
