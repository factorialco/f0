// ---------------------------------------------------------------------------
// Org Visualization Spec — model-authored configuration for the browser-owned
// org renderer. The renderer supports multiple representations of the same org
// data: tree, matrix, and clustered matrix.
// ---------------------------------------------------------------------------

export type FieldRef = string

export interface DisplayField {
  field: FieldRef
  label?: string
  format?: "text" | "number" | "currency" | "percent" | "date"
  position?: "title" | "subtitle" | "body" | "badge" | "metric"
  visible?: boolean
}

export interface AvatarSpec {
  src?: FieldRef
  firstName?: FieldRef
  lastName?: FieldRef
  fallback?: "initials" | "generic"
}

export interface CardSpec {
  title: FieldRef
  subtitle?: FieldRef
  avatar?: AvatarSpec
  fields?: DisplayField[]
  badges?: Array<FieldRef | DisplayField>
  metrics?: Array<FieldRef | DisplayField>
}

export type OrgLayoutSpec =
  | {
      type: "tree"
      idField: FieldRef
      parentField: FieldRef
      orientation?: "top-down" | "left-to-right" | "bottom-up" | "right-to-left"
      nodeWidth?: number
      nodeHeight?: number
      levelGap?: number
      siblingGap?: number
      initialDepth?: number
    }
  | {
      type: "matrix" | "clusteredMatrix"
      rows: FieldRef[]
      columns: FieldRef[]
      clusterBy?: FieldRef[]
      stackBy?: FieldRef
      nodeWidth?: number
      nodeHeight?: number
      cellGap?: number
      rowHeaderWidth?: number
      columnHeaderHeight?: number
      maxItemsPerCell?: number
      cellStackDirection?: "vertical" | "horizontal"
    }

export interface OrgVisualizationSpec {
  layout: OrgLayoutSpec
  card: CardSpec
  encodings?: {
    colorBy?: FieldRef
    sizeBy?: { field: FieldRef; range: [number, number] }
    opacityBy?: { field: FieldRef; range: [number, number] }
    borderBy?: FieldRef
    heatBy?: FieldRef
  }
  overlays?: OrgOverlay[]
  interactions?: {
    zoom?: boolean
    pan?: boolean
    collapse?: boolean
    search?: boolean
    select?: boolean
    findMe?: boolean
    tooltip?: Array<{ field: FieldRef; label?: string }>
  }
  query?: string
}

// ---------------------------------------------------------------------------
// Internal grammar consumed by the current engine implementation.
// ---------------------------------------------------------------------------

export interface VizNodeField {
  column: string
  label?: string
  style?: "title" | "subtitle" | "body" | "tag" | "badge"
  format?: "text" | "number" | "currency" | "percent" | "date"
  position?: "top" | "center" | "bottom"
  visible?: boolean
}

export interface VizVisualEncoding {
  colorBy?: {
    field: string
    palette?: "categorical" | "sequential" | string[]
  }
  sizeBy?: {
    field: string
    range: [number, number]
  }
  opacityBy?: {
    field: string
    range: [number, number]
  }
}

export interface VizEdgeConfig {
  style: "straight" | "bezier" | "orthogonal" | "step"
  width?: number
  color?: string
  animated?: boolean
}

export type OrgOverlay =
  | {
      type: "badge"
      field: string
      condition?: string
      icon?: string
      label?: string
    }
  | { type: "progress-bar"; field: string; maxValue?: number }
  | { type: "action"; column: string; icon?: string; label?: string }
  | { type: "budgetVariance"; field: string }

export type VizOverlay = OrgOverlay

export interface VizConditionalStyle {
  condition: string
  backgroundColor?: string
  borderColor?: string
  borderWidth?: number
}

export interface VizInteractivity {
  zoom: boolean
  pan: boolean
  collapsible?: boolean
  initialDepth?: number
  tooltip?: Array<{ column: string; label?: string }>
}

export interface VizLayoutConfig {
  algorithm: "tree" | "matrix"
  orientation?: "top-down" | "left-to-right" | "bottom-up" | "right-to-left"
  // Tree-specific
  idField?: string
  parentIdField?: string
  nodeWidth?: number
  nodeHeight?: number
  levelGap?: number
  siblingGap?: number
  // Matrix-specific
  rowField?: string
  columnField?: string
  clusterBy?: string[]
  stackBy?: string
  cellGap?: number
  rowHeaderWidth?: number
  columnHeaderHeight?: number
  maxItemsPerCell?: number
  cellStackDirection?: "vertical" | "horizontal"
}

export interface VizNodeConfig {
  shape: "rect" | "circle" | "rounded-rect"
  width?: number
  height?: number
  border?: {
    width?: number
    color?: string
    colorBy?: string
  }
  background?: {
    color?: string
    colorBy?: string
  }
  fields: VizNodeField[]
  avatar?: {
    column?: string
    fallback: "initials" | "generic"
    size?: number
  }
  conditionalStyles?: VizConditionalStyle[]
}

export interface DynamicVisualizationGrammar {
  layout: VizLayoutConfig
  nodes: VizNodeConfig
  visualEncoding?: VizVisualEncoding
  edges?: VizEdgeConfig & {
    sourceField?: string
    targetField?: string
  }
  overlays?: VizOverlay[]
  interactivity: VizInteractivity
  query?: string
}

export type OrgChartGrammar = DynamicVisualizationGrammar

export type NormalizedGrammar = DynamicVisualizationGrammar & {
  layout: Required<VizLayoutConfig>
  nodes: Required<VizNodeConfig>
  edges: Required<VizEdgeConfig>
  interactivity: Required<VizInteractivity>
}
