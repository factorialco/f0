import { DataDownloadDataset } from '../canvas/types';
export type F0AiTableCardProps = {
    /**
     * Tabular data to render. Reuses the same shape used by the
     * `dataDownload` canvas entity so the agent payload travels untouched.
     */
    dataset: DataDownloadDataset;
    /**
     * Title shown above the table. Defaults to the `ai.aiTable.title`
     * translation key (English: "Table").
     */
    title?: string;
    /**
     * Filename used for downloads (without extension). Defaults to the
     * slugified title, or `"table"` when no title is provided.
     */
    filename?: string;
};
/**
 * Compact inline table for small datasets shown directly in an AI chat
 * stream. Headers come from `columnLabels` when present, otherwise from
 * the raw column id. Shows a download dropdown (Excel / CSV) — Excel
 * support is loaded lazily via `xlsx`. Pure presentational — no hooks,
 * no AI coupling.
 */
export declare function F0AiTableCard({ dataset, title: titleProp, filename, }: F0AiTableCardProps): import("react").JSX.Element | null;
export declare namespace F0AiTableCard {
    var displayName: string;
}
