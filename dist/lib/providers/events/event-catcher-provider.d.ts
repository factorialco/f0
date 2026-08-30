import { ReactNode } from 'react';
import { EventCatcherFunction } from './types';
type ContextType = {
    onEvent: EventCatcherFunction;
};
export interface EventCatcherProviderProps {
    children: ReactNode;
    onEvent: EventCatcherFunction;
    enabled?: boolean;
    catchEvents?: string[];
}
export declare function F0EventCatcherProvider({ children, onEvent, enabled, catchEvents, }: EventCatcherProviderProps): JSX.Element;
export declare function useF0EventCatcher(): ContextType;
export {};
