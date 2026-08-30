import { FiltersDefinition, PresetsDefinition } from '../types';
export declare const filterDefinition: FiltersDefinition;
export declare const samplePresets: PresetsDefinition<typeof filterDefinition>;
export declare const generateCountries: () => {
    value: string;
    label: string;
}[];
export declare const getPresetMock: (itemsCount?: boolean) => {
    itemsCount: (() => number) | undefined;
    id?: string;
    label: string;
    description?: string;
    filter: import('../../../hooks/datasource').FiltersState<FiltersDefinition>;
    sortings?: unknown;
    grouping?: unknown;
    visualization?: number;
    settings?: unknown;
}[];
export declare const sourceBasedDefinition: FiltersDefinition;
