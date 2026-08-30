import { PageLayoutBlockComponent, PageLayoutGroupComponent } from './types';
export declare const createPageLayoutBlock: <Props = unknown>(displayName: string, Component: React.ComponentType<Props>) => React.ComponentType<Props> & PageLayoutBlockComponent;
export declare const createPageLayoutBlockGroup: <Props = unknown>(displayName: string, Component: React.ComponentType<Props>) => React.ComponentType<Props> & PageLayoutGroupComponent;
