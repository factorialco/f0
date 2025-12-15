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
export const validateStorageKey = (key: string): boolean => {
  if (!key || typeof key !== "string") {
    return false
  }

  // Key must contain at least one forward slash
  const lastSlashIndex = key.lastIndexOf("/")
  if (lastSlashIndex === -1) {
    return false
  }

  const name = key.substring(0, lastSlashIndex)
  const version = key.substring(lastSlashIndex + 1)

  // Name must not be empty
  if (!name || name.trim() === "") {
    return false
  }

  // Version must match 'v' followed by one or more digits (e.g., v1, v2, v123 v.1.2)
  if (!version || !/^v[0-9]+$/.test(version)) {
    return false
  }

  return true
}

/**
 * Extracts the name and version from a valid storage key
 *
 * @param key - The storage key to parse
 * @returns Object with name and version, or null if invalid
 */
export const parseStorageKey = (key: string): { name: string; version: string } | null => {
  if (!validateStorageKey(key)) {
    return null
  }

  const lastSlashIndex = key.lastIndexOf("/")
  const name = key.substring(0, lastSlashIndex)
  const version = key.substring(lastSlashIndex + 1)

  return { name, version }
}
