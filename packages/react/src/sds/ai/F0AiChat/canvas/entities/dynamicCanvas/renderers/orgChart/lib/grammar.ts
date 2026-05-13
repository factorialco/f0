import type {
  CardSpec,
  DisplayField,
  DynamicVisualizationGrammar,
  OrgVisualizationSpec,
} from "../types"

const DEFAULT_GRAMMAR: DynamicVisualizationGrammar = {
  layout: {
    algorithm: "tree",
    orientation: "top-down",
    idField: "id",
    parentIdField: "managerId",
    nodeWidth: 220,
    nodeHeight: 100,
    levelGap: 80,
    siblingGap: 40,
  },
  nodes: {
    shape: "rounded-rect",
    fields: [{ column: "id", style: "title" }],
  },
  edges: {
    style: "bezier",
    width: 2,
    color: "#cbd5e1",
  },
  interactivity: {
    zoom: true,
    pan: true,
    collapsible: true,
    initialDepth: Infinity,
  },
}

function isOrgVisualizationSpec(raw: unknown): raw is OrgVisualizationSpec {
  return (
    !!raw &&
    typeof raw === "object" &&
    "layout" in raw &&
    "card" in raw &&
    typeof (raw as { layout?: { type?: unknown } }).layout?.type === "string"
  )
}

function normalizeField(
  field: string | DisplayField,
  fallbackPosition: DisplayField["position"]
) {
  const displayField: DisplayField =
    typeof field === "string" ? { field, position: fallbackPosition } : field

  const position = displayField.position ?? fallbackPosition
  return {
    column: displayField.field,
    label: displayField.label,
    format: displayField.format,
    visible: displayField.visible,
    style:
      position === "title"
        ? ("title" as const)
        : position === "badge" || position === "metric"
          ? ("tag" as const)
          : ("body" as const),
    position:
      position === "title" || position === "subtitle"
        ? ("center" as const)
        : position === "badge" || position === "metric"
          ? ("bottom" as const)
          : ("center" as const),
  }
}

function cardFields(card: CardSpec) {
  return [
    normalizeField({ field: card.title, position: "title" }, "title"),
    ...(card.subtitle
      ? [
          normalizeField(
            { field: card.subtitle, position: "subtitle" },
            "subtitle"
          ),
        ]
      : []),
    ...(card.fields ?? []).map((field) => normalizeField(field, "body")),
    ...(card.badges ?? []).map((field) => normalizeField(field, "badge")),
    ...(card.metrics ?? []).map((field) => normalizeField(field, "metric")),
  ]
}

function orgSpecToGrammar(
  spec: OrgVisualizationSpec
): DynamicVisualizationGrammar {
  const common = {
    visualEncoding: {
      colorBy: spec.encodings?.colorBy
        ? { field: spec.encodings.colorBy, palette: "categorical" as const }
        : undefined,
      sizeBy: spec.encodings?.sizeBy,
      opacityBy: spec.encodings?.opacityBy,
    },
    edges: DEFAULT_GRAMMAR.edges,
    overlays: spec.overlays,
    query: spec.query,
  }

  if (spec.layout.type === "tree") {
    const layout = spec.layout
    return {
      layout: {
        ...DEFAULT_GRAMMAR.layout,
        algorithm: "tree",
        idField: layout.idField,
        parentIdField: layout.parentField,
        orientation: layout.orientation ?? "top-down",
        nodeWidth: layout.nodeWidth ?? DEFAULT_GRAMMAR.layout.nodeWidth,
        nodeHeight: layout.nodeHeight ?? DEFAULT_GRAMMAR.layout.nodeHeight,
        levelGap: layout.levelGap ?? DEFAULT_GRAMMAR.layout.levelGap,
        siblingGap: layout.siblingGap ?? DEFAULT_GRAMMAR.layout.siblingGap,
      },
      nodes: {
        ...DEFAULT_GRAMMAR.nodes,
        width: layout.nodeWidth ?? 220,
        height: layout.nodeHeight ?? 100,
        fields: cardFields(spec.card),
        avatar: spec.card.avatar
          ? {
              column: spec.card.avatar.src,
              fallback: spec.card.avatar.fallback ?? "initials",
            }
          : undefined,
        background: spec.encodings?.colorBy
          ? { colorBy: spec.encodings.colorBy }
          : DEFAULT_GRAMMAR.nodes.background,
        border: spec.encodings?.borderBy
          ? { colorBy: spec.encodings.borderBy, width: 2 }
          : DEFAULT_GRAMMAR.nodes.border,
      },
      interactivity: {
        zoom: spec.interactions?.zoom ?? true,
        pan: spec.interactions?.pan ?? true,
        collapsible: spec.interactions?.collapse ?? true,
        initialDepth: layout.initialDepth ?? Infinity,
        tooltip: spec.interactions?.tooltip?.map(({ field, label }) => ({
          column: field,
          label,
        })),
      },
      ...common,
    }
  }

  const layout = spec.layout
  return {
    layout: {
      ...DEFAULT_GRAMMAR.layout,
      algorithm: "matrix",
      rowField: layout.rows[0] ?? "role",
      columnField: layout.columns[0] ?? "domain",
      clusterBy: layout.clusterBy,
      stackBy: layout.stackBy,
      nodeWidth: layout.nodeWidth ?? 180,
      nodeHeight: layout.nodeHeight ?? 80,
      cellGap: layout.cellGap ?? 10,
      rowHeaderWidth: layout.rowHeaderWidth ?? 140,
      columnHeaderHeight: layout.columnHeaderHeight ?? 36,
      maxItemsPerCell: layout.maxItemsPerCell,
      cellStackDirection: layout.cellStackDirection,
    },
    nodes: {
      ...DEFAULT_GRAMMAR.nodes,
      width: layout.nodeWidth ?? 180,
      height: layout.nodeHeight ?? 80,
      fields: cardFields(spec.card),
      avatar: spec.card.avatar
        ? {
            column: spec.card.avatar.src,
            fallback: spec.card.avatar.fallback ?? "initials",
          }
        : undefined,
      background: spec.encodings?.colorBy
        ? { colorBy: spec.encodings.colorBy }
        : DEFAULT_GRAMMAR.nodes.background,
      border: spec.encodings?.borderBy
        ? { colorBy: spec.encodings.borderBy, width: 2 }
        : DEFAULT_GRAMMAR.nodes.border,
    },
    interactivity: {
      zoom: spec.interactions?.zoom ?? true,
      pan: spec.interactions?.pan ?? true,
      collapsible: false,
      initialDepth: Infinity,
      tooltip: spec.interactions?.tooltip?.map(({ field, label }) => ({
        column: field,
        label,
      })),
    },
    ...common,
  }
}

export function normalizeOrgSpec(raw: unknown): DynamicVisualizationGrammar {
  if (isOrgVisualizationSpec(raw)) {
    return orgSpecToGrammar(raw)
  }

  if (!raw || typeof raw !== "object") {
    console.warn("[DynamicVisualizationEngine] Invalid spec, using defaults")
    return DEFAULT_GRAMMAR
  }

  const partial = raw as Partial<DynamicVisualizationGrammar>

  return {
    layout: {
      ...DEFAULT_GRAMMAR.layout,
      ...(partial.layout ?? {}),
    },
    nodes: {
      ...DEFAULT_GRAMMAR.nodes,
      ...(partial.nodes ?? {}),
      fields: partial.nodes?.fields ?? DEFAULT_GRAMMAR.nodes.fields,
    },
    visualEncoding: partial.visualEncoding,
    edges: partial.edges
      ? { ...DEFAULT_GRAMMAR.edges, ...partial.edges }
      : DEFAULT_GRAMMAR.edges,
    overlays: partial.overlays,
    interactivity: {
      ...DEFAULT_GRAMMAR.interactivity,
      ...(partial.interactivity ?? {}),
    },
    query: partial.query,
  }
}

export const normalizeGrammar = normalizeOrgSpec
