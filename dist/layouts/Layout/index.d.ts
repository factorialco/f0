export * from './types';
export declare const Layout: {
    Page: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<import('./pages/Page').PageProps & import('react').RefAttributes<HTMLDivElement>>>;
    Block: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<import('./blocks/Block').BlockProps & import('react').RefAttributes<HTMLDivElement>>>;
    BlockContent: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ComponentType<import('./blocks/Block').BlockProps & import('./blocks/BlockContent').BlockContentExtraProps> & import('./types').PageLayoutBlockComponent>;
    Group: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<import('./groups/GroupLinear').GroupLinearProps & import('react').RefAttributes<HTMLDivElement>>>;
    GroupGrid: import('../../lib/data-testid').WithDataTestIdReturnType<{
        <Widget extends import('./groups/GroupGrid').GroupGridWidget, Deps extends Record<string, unknown> = Record<string, unknown>>({ widgets, editMode, onChange, WidgetWrapper, main, deps: dependencyValues, }: import('./groups/GroupGrid').GroupGridProps<Widget, Deps>): import("react").JSX.Element;
        displayName: string;
    }>;
    GroupMasonry: import('../../lib/data-testid').WithDataTestIdReturnType<{
        ({ blocks, sortable: _sortable, onSort: _onSort, main, }: import('./groups/GroupMasonry').GroupMasonryProps): import("react").JSX.Element;
        displayName: string;
    }>;
};
export * from './utils';
