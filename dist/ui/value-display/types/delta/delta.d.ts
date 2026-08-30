type DeltaStatus = "positive" | "negative";
interface DeltaValue {
    label: string;
    deltaStatus: DeltaStatus;
}
export type DeltaCellValue = DeltaValue;
export declare const DeltaCell: (args: DeltaCellValue) => import("react").JSX.Element;
export {};
