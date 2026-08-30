/**
 * Validates a storage key format: {name}/{version}
 *
 * @param key - The storage key to validate
 * @returns true if valid, false otherwise
 *
 * Rules:
 * - Key must contain at least one forward slash
 * - The part after the last slash is the version
 * - Version must start with 'v' followed by alphanumeric characters
 * - Name can be a path (e.g., 'employees/list/') and must not be empty
 *
 * Valid examples:
 * - 'employees/v1'
 * - 'employees/list/v2'
 * - 'products/categories/v1'
 *
 * Invalid examples:
 * - 'employees' (no version)
 * - 'employees/1' (version doesn't start with 'v')
 * - '/v1' (empty name)
 * - 'employees/v' (version has no number/identifier)
 */
export declare const validateStorageKey: (key: string) => boolean;
/**
 * Extracts the name and version from a valid storage key
 *
 * @param key - The storage key to parse
 * @returns Object with name and version, or null if invalid
 */
export declare const parseStorageKey: (key: string) => {
    name: string;
    version: string;
} | null;
