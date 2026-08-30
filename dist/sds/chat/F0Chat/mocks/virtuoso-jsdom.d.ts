type VirtuosoModule = typeof import("react-virtuoso");
/**
 * jsdom has no layout, so Virtuoso would render zero rows. Wrapping the real
 * component in the official VirtuosoMockContext gives every row a fixed height
 * and a viewport tall enough to render EVERYTHING — content assertions then
 * see the full transcript, like the old pass-through virtualizer mock did.
 *
 * Use from a test file as:
 *   vi.mock("react-virtuoso", async (importOriginal) => {
 *     const { mockVirtuosoModule } = await import("../mocks/virtuoso-jsdom")
 *     return mockVirtuosoModule(await importOriginal())
 *   })
 */
export declare function mockVirtuosoModule(actual: VirtuosoModule): VirtuosoModule;
export {};
