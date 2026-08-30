import { DashboardItem } from '../types';
/**
 * The filters the real report derives from its querySpec dimensions
 * (`location_name`, `employee_gender`). The fixture data is static, so
 * applying them exercises the filter bar without changing the charts — the
 * production dashboard refetches from Cube instead.
 */
export declare const salaryDynamicsFilters: {
    readonly workplace: {
        readonly type: "in";
        readonly label: "Workplace";
        readonly options: {
            readonly options: {
                value: string;
                label: string;
            }[];
        };
    };
    readonly gender: {
        readonly type: "in";
        readonly label: "Gender";
        readonly options: {
            readonly options: {
                value: "male" | "female" | "unspecified";
                label: "male" | "female" | "unspecified";
            }[];
        };
    };
};
/** The report's title, as the canvas header shows it. */
export declare const salaryDynamicsTitle = "Average salary dynamics (12 months)";
export declare const salaryDynamicsDescription = "Average base salary grouped by contract effective month over the last 12 months.";
export declare const salaryDynamicsItems: DashboardItem[];
