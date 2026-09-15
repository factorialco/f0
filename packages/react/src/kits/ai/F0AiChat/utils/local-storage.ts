// Moved to `@/lib/local-storage` once the emoji picker needed the same helpers
// and `lib/` couldn't reach into a kit. Re-exported so the kit's own imports
// (and anything pointing at this path) keep working.
export { readFromLocalStorage, writeToLocalStorage } from "@/lib/local-storage"
