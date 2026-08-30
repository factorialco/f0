/**
 * Builds the localStorage key for a OneDataCollection's persisted state.
 *
 * @param id - The OneDataCollection `id` (e.g. `organization/employees/v1`),
 *             WITHOUT the `datacollection-` prefix.
 */
export declare const getDataCollectionStorageKey: (id: string) => string;
