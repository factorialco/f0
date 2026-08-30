type GroupHeaderProps = {
    label: string | Promise<string>;
    itemCount: number | Promise<number | undefined> | undefined;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    showOpenChange?: boolean;
    selectable?: boolean;
    select?: true | false | "indeterminate";
    onSelectChange?: (selected: boolean) => void;
    className?: string;
    chevronPosition?: "leading" | "trailing";
    closedRotation?: number;
    openRotation?: number;
};
export declare const GroupHeader: ({ label, itemCount, open, onOpenChange, showOpenChange, selectable, select, onSelectChange, className, chevronPosition, closedRotation, openRotation, }: GroupHeaderProps) => import("react").JSX.Element;
export {};
