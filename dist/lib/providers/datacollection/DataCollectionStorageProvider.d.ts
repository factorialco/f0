import { DataCollectionStorageHandler } from './types';
export declare const DataCollectionStorageProvider: ({ children, handler, }: {
    children: React.ReactNode;
    handler?: DataCollectionStorageHandler;
}) => import("react").JSX.Element;
export declare const useDataCollectionStorage: () => DataCollectionStorageHandler;
