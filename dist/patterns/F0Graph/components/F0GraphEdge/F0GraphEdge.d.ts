import { EdgeProps } from '@xyflow/react';
import { F0GraphEdgeProps } from './types';
export declare function F0GraphEdgeBase({ variant: variantProp, strokeWidth: propStrokeWidth, pathType: pathTypeProp, type: _rfType, ...edgeProps }: F0GraphEdgeProps & EdgeProps): import("react").JSX.Element;
export declare namespace F0GraphEdgeBase {
    var displayName: string;
}
export declare const F0GraphEdge: import('react').MemoExoticComponent<typeof F0GraphEdgeBase>;
