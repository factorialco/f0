/*
    Make a type optional by picking the properties that are optional and omitting the properties that are required.
*/
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
