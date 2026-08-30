import { NavigationProps } from '../PageNavigation';
export declare const PageHeaderNavigationContext: import('react').Context<NavigationProps | null>;
/**
 * Provider that lets a page component inject navigation data into PageHeader
 * without needing to pass it down as a prop. PageHeader reads this context
 * only when its own `navigation` prop is undefined, so the prop always wins.
 *
 * @example
 * ```tsx
 * const { navigation } = useDataCollectionItemNavigation({ source, collectionId, activeItemId })
 * return (
 *   <PageHeaderNavigationProvider value={navigation}>
 *     <MyDetailPage />
 *   </PageHeaderNavigationProvider>
 * )
 * ```
 */
export declare const PageHeaderNavigationProvider: import('react').Provider<NavigationProps | null>;
/**
 * Returns the navigation value injected by the nearest
 * `PageHeaderNavigationProvider`, or null when no provider is present.
 */
export declare function usePageHeaderNavigation(): NavigationProps | null;
