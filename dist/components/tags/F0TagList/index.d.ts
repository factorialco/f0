export { TagCounter } from './components/TagCounter';
export type { TagCounterItem } from './components/TagCounter';
export type { F0TagListProps as TagListProps, TagType } from './types';
export declare const F0TagList: import('../../../lib/data-testid').WithDataTestIdReturnType<{
    <T extends import('./types').TagType>({ type, tags, max, remainingCount: initialRemainingCount, }: import('./types').F0TagListProps<T>): import("react").JSX.Element;
    displayName: string;
}>;
