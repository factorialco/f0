import { PresetsDefinition } from '../../OneFilterPicker/types';
import { DashboardItem } from '../types';
export declare const dashboardFilters: {
    readonly department: {
        readonly type: "in";
        readonly label: "Department";
        readonly options: {
            readonly options: {
                value: "Engineering" | "Product" | "Design" | "Marketing";
                label: "Engineering" | "Product" | "Design" | "Marketing";
            }[];
        };
    };
    readonly status: {
        readonly type: "in";
        readonly label: "Status";
        readonly options: {
            readonly options: {
                value: "Active" | "Inactive";
                label: "Active" | "Inactive";
            }[];
        };
    };
    readonly employeeSearch: {
        readonly type: "search";
        readonly label: "Employee search";
    };
    readonly reviewDate: {
        readonly type: "date";
        readonly label: "Review date";
        readonly options: {
            readonly mode: "single";
        };
    };
    readonly dateRange: {
        readonly type: "date";
        readonly label: "Date range";
        readonly options: {
            readonly mode: "range";
        };
    };
    readonly salaryExact: {
        readonly type: "number";
        readonly label: "Exact salary";
        readonly options: {
            readonly modes: readonly ["single"];
            readonly min: 0;
            readonly max: 250000;
        };
    };
    readonly salary: {
        readonly type: "number";
        readonly label: "Salary range";
        readonly options: {
            readonly modes: readonly ["range"];
            readonly min: 0;
            readonly max: 250000;
            readonly openCloseToggle: true;
        };
    };
};
export type DashboardFiltersType = typeof dashboardFilters;
export declare const dashboardPresets: PresetsDefinition<DashboardFiltersType>;
export declare const mixedItems: DashboardItem<DashboardFiltersType>[];
