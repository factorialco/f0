import { ReactElement, ReactNode } from 'react';
import { PageLayoutBlockComponent, PageLayoutGroupComponent } from '../types';
export declare const isPageLayoutBlockComponent: (child: ReactNode) => child is ReactElement<PageLayoutBlockComponent>;
export declare const isPageLayoutGroupComponent: (child: ReactNode) => child is ReactElement<PageLayoutGroupComponent>;
export declare const validLayoutChildrenGuard: (component: string, children: ReactNode, allowedTypes: ("block" | "group")[]) => void;
