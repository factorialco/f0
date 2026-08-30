type MoveExecutor<TResult> = () => Promise<TResult>;
type MoveCoordinatorApi = {
    getMoveKey: (sourceId: string, initialLaneId: string) => string;
    perform: <TResult>(key: string, executor?: MoveExecutor<TResult>) => Promise<TResult>;
    leave: <TResult>(key: string) => Promise<TResult>;
    insert: <TResult>(key: string, executor: MoveExecutor<TResult>) => Promise<TResult>;
};
export declare function useMoveCoordinator(): MoveCoordinatorApi;
export declare function MoveCoordinatorProvider({ children, }: {
    children: React.ReactNode;
}): import("react").JSX.Element;
export {};
