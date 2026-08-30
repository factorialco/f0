interface PresetProps {
    label: string;
    number?: number | Promise<number | undefined>;
    onClick?: () => void;
    selected?: boolean;
    /** Optional longer description, shown as a tooltip on hover. */
    description?: string;
    /** When provided, an edit icon button is shown on hover. */
    onEdit?: () => void;
}
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Preset: ({ label, number, onClick, selected, description, onEdit, }: PresetProps) => import("react").JSX.Element;
export {};
