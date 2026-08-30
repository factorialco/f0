import { Observable } from 'zen-observable-ts';
import { PromiseState } from '../../../lib/promise-to-observable';
import { generateMockUsers, MockUser, DEPARTMENTS_MOCK } from '../../../mocks';
import { SummariesDefinition } from '../summary.ts';
import { GroupingDefinition, GroupingState, SortingsStateMultiple } from '../../../hooks/datasource';
import { BaseResponse, OnSelectItemsCallback, PaginationInfo, PaginationType, RecordType, SelectedItemsState, SortingsDefinition, SortingsState } from '../../../hooks/datasource/types';
import { SearchOptions } from '../../../hooks/datasource/types/search.typings';
import { BulkActionsDefinition, DataCollectionBaseFetchOptions, DataCollectionDataAdapter } from '../hooks/useDataCollectionSource';
import { FilterDefinition, FiltersState, PresetsDefinition } from '../../OneFilterPicker';
import { PrimaryActionsDefinitionFn, SecondaryActionItem, SecondaryActionsDefinition } from '../actions';
import { DataCollectionStatusComplete, DataCollectionStorageFeaturesDefinition } from '../hooks/useDataColectionStorage/types';
import { ItemActionsDefinition } from '../item-actions';
import { NavigationFiltersDefinition, NavigationFiltersState } from '../navigationFilters/types';
import { OnBulkActionCallback } from '../types';
import { Visualization, VisualizationType } from '../visualizations/collection';
export { generateMockUsers, type MockUser };
export declare const nestedFilters: {
    readonly office: {
        readonly type: "in";
        readonly label: "Office";
        readonly options: {
            readonly options: {
                children?: {
                    filterKey: string;
                    options: {
                        children?: {
                            filterKey: string;
                            options: {
                                value: string;
                                label: "Desk A2" | "Desk B1" | "Hot Desk 1" | "Desk A1" | "Desk B2";
                            }[];
                        } | undefined;
                        value: string;
                        label: "Floor 2" | "Floor 1" | "Ground Floor" | "Rooftop Terrace" | "Main Floor";
                    }[];
                } | undefined;
                value: string;
                label: "London" | "New York" | "Barcelona HQ" | "Madrid Office";
            }[];
        };
    };
    readonly space: {
        readonly type: "in";
        readonly label: "Space";
        readonly hideSelector: true;
        readonly options: {
            readonly options: {
                value: string;
                label: "Floor 2" | "Floor 1" | "Ground Floor" | "Rooftop Terrace" | "Main Floor";
            }[];
        };
    };
    readonly desk: {
        readonly type: "in";
        readonly label: "Desk";
        readonly hideSelector: true;
        readonly options: {
            readonly options: {
                value: string;
                label: "Desk A2" | "Desk B1" | "Hot Desk 1" | "Desk A1" | "Desk B2";
            }[];
        };
    };
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
};
export type NestedFiltersType = typeof nestedFilters;
export type WorkplaceMockUser = MockUser & {
    officeId: string;
    spaceId: string;
    deskId?: string;
};
export declare const subfilterMockUsers: WorkplaceMockUser[];
export declare const filters: {
    readonly search: {
        readonly type: "search";
        readonly label: "Search";
    };
    readonly searchStrict: {
        readonly type: "search";
        readonly label: "Search with strict toggle example to clear the search value to clear the search value example to clear the search value to clear the search value";
        readonly options: {
            readonly strictToggle: true;
        };
    };
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
    readonly salary: {
        readonly type: "number";
        readonly label: "Salary";
        readonly options: {
            readonly modes: readonly ["range", "single"];
            readonly min: 0;
            readonly openCloseToggle: true;
        };
    };
};
export declare const filterPresets: PresetsDefinition<typeof filters>;
/**
 * MockDataCache - Simulates Apollo cache behavior with observable pattern
 * Updates data mutations and notifies subscribers when data changes
 *
 * @example
 * const cache = new MockDataCache(mockUsers)
 * cache.subscribe(() => console.log('Data changed!'))
 * cache.updateItemDepartment('user-1', 'Engineering')
 *
 * KNOWN ISSUE - Selection State Not Preserved Across Lane Moves:
 * ==============================================================
 * When moving items between Kanban lanes, selection state is lost.
 *
 * Root Cause:
 * - Each lane has its own independent `useSelectable` instance
 * - Selection state is stored per-lane in `itemsState` Map
 * - When an item moves from Lane A → Lane B:
 *   * Lane A: Has the item selected in its local state
 *   * Lane B: Has no knowledge of the selection (empty state for that item)
 * - No mechanism exists to sync selection state between lanes
 *
 * Why This Happens with Apollo Too:
 * - Apollo cache preserves object references but doesn't automatically
 *   sync React component state (which is what `useSelectable` manages)
 * - The issue is architectural: selection state needs to be global,
 *   not scoped per-lane
 *
 * Potential Solutions (for future PR):
 * 1. Make selection state global at DataCollection level
 * 2. Sync selection state between lanes when items move
 * 3. Use defaultSelectedItems to persist state across lane changes
 *
 * This mock correctly simulates Apollo cache behavior. The selection
 * issue is a system design limitation that also exists in production.
 */
export declare class MockDataCache<T extends MockUser> {
    private dataMap;
    private subscribers;
    constructor(initialData: T[]);
    getData(): T[];
    /**
     * Subscribe to cache changes - simulates Apollo's cache.watch
     * Returns unsubscribe function
     */
    subscribe(callback: () => void): () => void;
    /**
     * Notify all subscribers that data has changed
     */
    private notify;
    updateItemDepartment(itemId: string, newDepartment: string): T | null;
    /**
     * Replace an item in the cache with a new version.
     */
    updateItem(updatedItem: T): T | null;
    reset(newData: T[]): void;
}
export declare const mockUsers: MockUser[];
export declare const getMockVisualizations: (options?: {
    frozenColumns?: 0 | 1 | 2;
    table?: {
        frozenColumns?: 0 | 1 | 2;
        allowColumnHiding?: boolean;
        allowColumnReordering?: boolean;
        noSorting?: boolean;
        nestedRecords?: boolean;
        applyLongText?: boolean;
        longColumnLabels?: boolean;
        referenceRows?: boolean;
        bordered?: boolean;
    };
    cache?: MockDataCache<MockUser>;
}) => Record<Exclude<VisualizationType, "custom">, Visualization<MockUser, FiltersType, typeof sortings, SummariesDefinition, ItemActionsDefinition<MockUser>, NavigationFiltersDefinition, GroupingDefinition<MockUser>>>;
export declare const sortings: {
    readonly name: {
        readonly label: "Name";
    };
    readonly email: {
        readonly label: "Email";
    };
    readonly department: {
        readonly label: "Department";
    };
    readonly role: {
        readonly label: "Role";
    };
    readonly salary: {
        readonly label: "Salary";
    };
    readonly "permissions.read": {
        readonly label: "Read";
    };
    readonly "permissions.write": {
        readonly label: "Write";
    };
    readonly "permissions.delete": {
        readonly label: "Delete";
    };
};
export declare const filterUsers: (users: MockUser[], filterValues: FiltersState<typeof filters>, sortingState: SortingsStateMultiple, navigationFilters?: NavigationFiltersState<NavigationFiltersDefinition>, search?: string) => MockUser[];
export declare const createObservableDataFetch: (delay?: number) => ({ filters, sortings: sortingsState, navigationFilters, }: DataCollectionBaseFetchOptions<FiltersType, NavigationFiltersDefinition>) => Observable<PromiseState<BaseResponse<MockUser>>>;
export declare const createPromiseDataFetch: (delay?: number, cache?: MockDataCache<MockUser>, nestedRecords?: boolean, nestedRecordsType?: "basic" | "detailed" | "mixed") => (options: DataCollectionBaseFetchOptions<FiltersType, NavigationFiltersDefinition>) => Promise<BaseResponse<MockUser>>;
export type FiltersType = typeof filters;
export declare const ExampleComponent: ({ useObservable, usePresets, presets: presetsOverride, frozenColumns, selectable, defaultSelectedItems, allPagesSelection, bulkActions, currentGrouping, currentSortings, currentNavigationFilters, grouping, noSorting, navigationFilters, totalItemSummary, visualizations, fullHeight, dataAdapter, primaryActions, secondaryActions, searchBar, id, storage, tableAllowColumnReordering, tableAllowColumnHiding, onStateChange, currentFilters, enableCache, hideFilters, tmpFullWidth, nestedRecords, nestedRecordsType, csvExport, }: {
    useObservable?: boolean;
    usePresets?: boolean;
    /** Override the developer-provided presets used when `usePresets` is true. */
    presets?: PresetsDefinition<typeof filters>;
    frozenColumns?: 0 | 1 | 2;
    fullHeight?: boolean;
    visualizations?: ReadonlyArray<Visualization<MockUser, FiltersType, typeof sortings, SummariesDefinition, ItemActionsDefinition<MockUser>, NavigationFiltersDefinition, GroupingDefinition<MockUser>>>;
    id?: string;
    storage?: false | {
        features?: DataCollectionStorageFeaturesDefinition;
    };
    dataAdapter?: DataCollectionDataAdapter<MockUser, FiltersType, NavigationFiltersDefinition>;
    defaultSelectedItems?: SelectedItemsState<MockUser>;
    selectable?: (item: MockUser) => string | number | undefined;
    allPagesSelection?: boolean;
    bulkActions?: BulkActionsDefinition<MockUser, FiltersType>;
    onSelectItems?: OnSelectItemsCallback<MockUser, FiltersType>;
    onBulkAction?: OnBulkActionCallback<MockUser, FiltersType>;
    navigationFilters?: NavigationFiltersDefinition;
    totalItemSummary?: true | ((totalItems: number) => string);
    grouping?: GroupingDefinition<MockUser> | undefined;
    currentGrouping?: GroupingState<MockUser, GroupingDefinition<MockUser>>;
    noSorting?: boolean;
    paginationType?: PaginationType;
    primaryActions?: PrimaryActionsDefinitionFn;
    secondaryActions?: SecondaryActionsDefinition;
    searchBar?: boolean | SearchOptions;
    tableAllowColumnReordering?: boolean;
    tableAllowColumnHiding?: boolean;
    onStateChange?: (state: DataCollectionStatusComplete<FiltersState<typeof filters>>) => void;
    enableCache?: boolean;
    hideFilters?: boolean;
    currentFilters?: FiltersState<FiltersType>;
    currentSortings?: SortingsState<typeof sortings>;
    currentNavigationFilters?: NavigationFiltersState<NavigationFiltersDefinition>;
    tmpFullWidth?: boolean;
    nestedRecords?: boolean;
    nestedRecordsType?: "basic" | "detailed" | "mixed";
    csvExport?: boolean | {
        filename?: string;
    };
}) => import("react").JSX.Element;
export declare const SubfiltersExampleComponent: () => import("react").JSX.Element;
/**
 * An `in` filter with many options — stands in for a filter backed by a large /
 * paginated data source. Selecting all of them produces a big value array, which
 * is exactly the case the URL-params value cap guards against.
 */
export declare const manyOptionFilters: {
    readonly assignee: {
        readonly type: "in";
        readonly label: "Assignee (60 options)";
        readonly options: {
            readonly options: {
                value: string;
                label: string;
            }[];
        };
    };
};
interface DataAdapterOptions<TRecord> {
    data: TRecord[];
    delay?: number;
    useObservable?: boolean;
    paginationType?: PaginationType;
    perPage?: number | "auto";
    search?: string;
}
export declare function createDataAdapter<TRecord extends RecordType & {
    name: string;
    email: string;
    department: (typeof DEPARTMENTS_MOCK)[number];
    salary?: number;
}, TFilters extends Record<string, FilterDefinition>, TNavigationFilters extends NavigationFiltersDefinition>({ data, delay, useObservable, paginationType, perPage, search, }: DataAdapterOptions<TRecord>): DataCollectionDataAdapter<TRecord, TFilters, TNavigationFilters>;
/**
 * Filters used by the combined URL-params story: the standard set plus an
 * `assignee` filter with 60 options (to exercise the "select all" URL value
 * cap).
 */
export declare const paginationFilters: {
    readonly assignee: {
        readonly type: "in";
        readonly label: "Assignee (60 options)";
        readonly options: {
            readonly options: {
                value: string;
                label: string;
            }[];
        };
    };
    readonly search: {
        readonly type: "search";
        readonly label: "Search";
    };
    readonly searchStrict: {
        readonly type: "search";
        readonly label: "Search with strict toggle example to clear the search value to clear the search value example to clear the search value to clear the search value";
        readonly options: {
            readonly strictToggle: true;
        };
    };
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
    readonly salary: {
        readonly type: "number";
        readonly label: "Salary";
        readonly options: {
            readonly modes: readonly ["range", "single"];
            readonly min: 0;
            readonly openCloseToggle: true;
        };
    };
};
export type PaginationFiltersType = typeof paginationFilters;
/**
 * A page-paginated collection (8 per page over 48 records → 6 pages) with
 * filters (including a 60-option multi-select) and sorting. It exposes the
 * current page via `onPaginationChange` and the rest of the state via
 * `onStateChange`, and seeds `currentFilters` / `currentSortings` /
 * `currentPage` synchronously. The built-in URL sync is disabled and storage is
 * off, so the consumer (the story) owns reflecting *all* of them in the URL —
 * which is what lets page + sorting + filters coexist without clobbering.
 *
 * Seeding synchronously means the very first fetch already has filters + sorting
 * + page, so loading a `?dc_page=3&dc_sort=…&dc_department=…` URL lands on the
 * right page with the right filters/sorting and no reset race.
 */
export declare const PaginationExampleComponent: ({ id, currentFilters, currentPage, currentSortings, onPaginationChange, onStateChange, }: {
    id?: string;
    currentFilters?: FiltersState<PaginationFiltersType>;
    currentPage?: number;
    currentSortings?: SortingsState<SortingsDefinition>;
    onPaginationChange?: (paginationInfo: PaginationInfo | null) => void;
    onStateChange?: (state: DataCollectionStatusComplete<FiltersState<PaginationFiltersType>>) => void;
}) => import("react").JSX.Element;
export declare const buildSecondaryActions: () => SecondaryActionItem[];
export declare const getMockVisualizationsWithCreate: (params: {
    onCreate: (laneId: string) => void;
} & Parameters<typeof getMockVisualizations>[0]) => {
    kanban: {
        type: "kanban";
        options: {
            onCreate: (laneId: string) => void;
            lanes?: readonly import('../visualizations/collection/Kanban').KanbanLaneDefinition[] | undefined;
            getLanesForGroup?: (groupKey: string) => ReadonlyArray<import('../visualizations/collection/Kanban').KanbanLaneDefinition>;
            selectableGroups?: boolean;
            title?: ((record: MockUser) => string) | undefined;
            description?: ((record: MockUser) => string) | undefined;
            avatar?: ((record: MockUser) => import('../../../components/F0Card/components/CardAvatar').CardAvatarVariant) | undefined;
            metadata?: ((record: MockUser) => ReadonlyArray<import('../../../components/F0Card/types').CardMetadata>) | undefined;
            onMove?: import('../../../ui/Kanban').KanbanOnMove<MockUser> | undefined;
        };
    };
    table: Visualization<MockUser, {
        readonly search: {
            readonly type: "search";
            readonly label: "Search";
        };
        readonly searchStrict: {
            readonly type: "search";
            readonly label: "Search with strict toggle example to clear the search value to clear the search value example to clear the search value to clear the search value";
            readonly options: {
                readonly strictToggle: true;
            };
        };
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
        readonly salary: {
            readonly type: "number";
            readonly label: "Salary";
            readonly options: {
                readonly modes: readonly ["range", "single"];
                readonly min: 0;
                readonly openCloseToggle: true;
            };
        };
    }, {
        readonly name: {
            readonly label: "Name";
        };
        readonly email: {
            readonly label: "Email";
        };
        readonly department: {
            readonly label: "Department";
        };
        readonly role: {
            readonly label: "Role";
        };
        readonly salary: {
            readonly label: "Salary";
        };
        readonly "permissions.read": {
            readonly label: "Read";
        };
        readonly "permissions.write": {
            readonly label: "Write";
        };
        readonly "permissions.delete": {
            readonly label: "Delete";
        };
    }, SummariesDefinition, ItemActionsDefinition<MockUser>, NavigationFiltersDefinition, GroupingDefinition<MockUser>>;
    list: Visualization<MockUser, {
        readonly search: {
            readonly type: "search";
            readonly label: "Search";
        };
        readonly searchStrict: {
            readonly type: "search";
            readonly label: "Search with strict toggle example to clear the search value to clear the search value example to clear the search value to clear the search value";
            readonly options: {
                readonly strictToggle: true;
            };
        };
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
        readonly salary: {
            readonly type: "number";
            readonly label: "Salary";
            readonly options: {
                readonly modes: readonly ["range", "single"];
                readonly min: 0;
                readonly openCloseToggle: true;
            };
        };
    }, {
        readonly name: {
            readonly label: "Name";
        };
        readonly email: {
            readonly label: "Email";
        };
        readonly department: {
            readonly label: "Department";
        };
        readonly role: {
            readonly label: "Role";
        };
        readonly salary: {
            readonly label: "Salary";
        };
        readonly "permissions.read": {
            readonly label: "Read";
        };
        readonly "permissions.write": {
            readonly label: "Write";
        };
        readonly "permissions.delete": {
            readonly label: "Delete";
        };
    }, SummariesDefinition, ItemActionsDefinition<MockUser>, NavigationFiltersDefinition, GroupingDefinition<MockUser>>;
    graph: Visualization<MockUser, {
        readonly search: {
            readonly type: "search";
            readonly label: "Search";
        };
        readonly searchStrict: {
            readonly type: "search";
            readonly label: "Search with strict toggle example to clear the search value to clear the search value example to clear the search value to clear the search value";
            readonly options: {
                readonly strictToggle: true;
            };
        };
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
        readonly salary: {
            readonly type: "number";
            readonly label: "Salary";
            readonly options: {
                readonly modes: readonly ["range", "single"];
                readonly min: 0;
                readonly openCloseToggle: true;
            };
        };
    }, {
        readonly name: {
            readonly label: "Name";
        };
        readonly email: {
            readonly label: "Email";
        };
        readonly department: {
            readonly label: "Department";
        };
        readonly role: {
            readonly label: "Role";
        };
        readonly salary: {
            readonly label: "Salary";
        };
        readonly "permissions.read": {
            readonly label: "Read";
        };
        readonly "permissions.write": {
            readonly label: "Write";
        };
        readonly "permissions.delete": {
            readonly label: "Delete";
        };
    }, SummariesDefinition, ItemActionsDefinition<MockUser>, NavigationFiltersDefinition, GroupingDefinition<MockUser>>;
    editableTable: Visualization<MockUser, {
        readonly search: {
            readonly type: "search";
            readonly label: "Search";
        };
        readonly searchStrict: {
            readonly type: "search";
            readonly label: "Search with strict toggle example to clear the search value to clear the search value example to clear the search value to clear the search value";
            readonly options: {
                readonly strictToggle: true;
            };
        };
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
        readonly salary: {
            readonly type: "number";
            readonly label: "Salary";
            readonly options: {
                readonly modes: readonly ["range", "single"];
                readonly min: 0;
                readonly openCloseToggle: true;
            };
        };
    }, {
        readonly name: {
            readonly label: "Name";
        };
        readonly email: {
            readonly label: "Email";
        };
        readonly department: {
            readonly label: "Department";
        };
        readonly role: {
            readonly label: "Role";
        };
        readonly salary: {
            readonly label: "Salary";
        };
        readonly "permissions.read": {
            readonly label: "Read";
        };
        readonly "permissions.write": {
            readonly label: "Write";
        };
        readonly "permissions.delete": {
            readonly label: "Delete";
        };
    }, SummariesDefinition, ItemActionsDefinition<MockUser>, NavigationFiltersDefinition, GroupingDefinition<MockUser>>;
    card: Visualization<MockUser, {
        readonly search: {
            readonly type: "search";
            readonly label: "Search";
        };
        readonly searchStrict: {
            readonly type: "search";
            readonly label: "Search with strict toggle example to clear the search value to clear the search value example to clear the search value to clear the search value";
            readonly options: {
                readonly strictToggle: true;
            };
        };
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
        readonly salary: {
            readonly type: "number";
            readonly label: "Salary";
            readonly options: {
                readonly modes: readonly ["range", "single"];
                readonly min: 0;
                readonly openCloseToggle: true;
            };
        };
    }, {
        readonly name: {
            readonly label: "Name";
        };
        readonly email: {
            readonly label: "Email";
        };
        readonly department: {
            readonly label: "Department";
        };
        readonly role: {
            readonly label: "Role";
        };
        readonly salary: {
            readonly label: "Salary";
        };
        readonly "permissions.read": {
            readonly label: "Read";
        };
        readonly "permissions.write": {
            readonly label: "Write";
        };
        readonly "permissions.delete": {
            readonly label: "Delete";
        };
    }, SummariesDefinition, ItemActionsDefinition<MockUser>, NavigationFiltersDefinition, GroupingDefinition<MockUser>>;
};
