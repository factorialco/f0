import { PropsWithoutRef } from 'react';
import { ComponentMetadata } from './types';
export declare const Component: <R extends HTMLElement | SVGElement, P extends React.RefAttributes<R>>(meta: ComponentMetadata, Component: React.FC<PropsWithoutRef<P>>) => import('react').ForwardRefExoticComponent<PropsWithoutRef<P> & import('react').RefAttributes<R>>;
