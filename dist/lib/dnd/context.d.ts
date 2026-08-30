import { ReactNode } from 'react';
import { DndDriver } from './types';
type DndContextValue = {
    driver: DndDriver;
};
export declare function useDndContext(): DndContextValue;
export declare function useDndContextOptional(): DndContextValue | null;
export declare function DndProvider({ driver, children, }: {
    driver: DndDriver;
    children: ReactNode;
}): import("react").JSX.Element;
export {};
