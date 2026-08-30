/** Coalesces synchronous bursts into one write before the next paint. */
export declare const useMicrotaskBatch: <Value>(write: (value: Value) => void) => ((value: Value) => void);
