import { ActionProps, OneEmptyStateProps } from '../../../components/OneEmptyState/types';
export type EmptyState = {
    emoji?: string;
    title: string;
    description?: string;
    actions?: ActionProps[];
};
export declare const emptyStatesTypes: readonly ["no-data", "no-results", "error"];
export type EmptyStateType = (typeof emptyStatesTypes)[number];
export type CustomEmptyStates = Partial<Record<EmptyStateType, Partial<EmptyState>>>;
export type EmptyStates = Record<EmptyStateType, EmptyState>;
export declare const useEmptyState: (customEmptyStates: CustomEmptyStates | undefined, actions: {
    retry: () => void;
    clearFilters: () => void;
}) => {
    emptyState: (EmptyState & {
        variant?: Exclude<OneEmptyStateProps["variant"], "positive">;
    }) | undefined;
    setEmptyStateType: (type: EmptyStateType | false, errorMessage?: string) => void;
};
