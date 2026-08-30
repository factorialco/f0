export interface RadialProgressProps {
    value: number;
    max?: number;
    color?: string;
    overview?: {
        number: number;
        label: string;
    };
}
export declare function RadialProgressChart({ value, max, color, overview, }: RadialProgressProps): import("react").JSX.Element;
