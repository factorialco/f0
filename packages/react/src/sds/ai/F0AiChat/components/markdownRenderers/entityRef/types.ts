import type { PersonProfile } from "./entities/person/types"

/**
 * Map of async resolver functions keyed by entity type.
 * Each resolver takes an entity ID and returns the profile data
 * needed to render the entity reference hover card.
 *
 * Extensible: add new entity types here as needed (e.g. `team`, `department`).
 */
export type EntityResolvers = {
  person?: (id: string) => Promise<PersonProfile>
  /**
   * Search for persons by name query. Used by the @mention autocomplete
   * in the chat input to let users reference specific employees.
   */
  searchPersons?: (query: string) => Promise<PersonProfile[]>
}
