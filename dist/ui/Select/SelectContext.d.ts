export type SelectContextType = {
    open?: boolean;
    as?: "list";
    multiple?: boolean;
    value: string[] | string;
};
export declare const SelectContext: import('react').Context<SelectContextType>;
export declare const useSelectContext: () => SelectContextType;
