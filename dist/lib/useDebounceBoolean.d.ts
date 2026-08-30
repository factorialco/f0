type Params<T extends boolean> = {
    value: T;
    delay: number;
};
export declare const useDebounceBoolean: <T extends boolean>({ value, delay, }: Params<T>) => boolean;
export {};
