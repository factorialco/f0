import { ReactNode } from 'react';
export type EntityRefDetailRow = {
    label?: string;
    value: ReactNode;
};
type EntityRefDetailsProps = {
    rows: EntityRefDetailRow[];
};
export declare function EntityRefDetails({ rows }: EntityRefDetailsProps): import("react").JSX.Element | null;
export {};
