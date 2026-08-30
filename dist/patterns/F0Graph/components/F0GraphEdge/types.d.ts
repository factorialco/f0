export declare const edgeTypes: readonly ["smoothstep", "straight", "bezier"];
export type EdgeType = (typeof edgeTypes)[number];
export declare const edgeVariants: readonly ["default", "hover", "highlighted", "dimmed"];
export type EdgeVariant = (typeof edgeVariants)[number];
export interface F0GraphEdgeProps {
    /**
     * Edge rendering style. Renamed from `type` to avoid colliding with
     * React Flow's reserved `type` key (which selects the edge component).
     * May also be supplied via `edgeProps.data.pathType` when registering the
     * edge as a React Flow edge type — the explicit prop takes precedence.
     */
    pathType?: EdgeType;
    /** Visual variant */
    variant?: EdgeVariant;
    /** Stroke width (adjusts with zoom level) */
    strokeWidth?: number;
}
