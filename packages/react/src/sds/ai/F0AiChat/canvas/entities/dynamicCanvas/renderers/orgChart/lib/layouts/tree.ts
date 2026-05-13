import type { LayoutAlgorithm, PositionedElement } from "./types"

interface TreeConfig {
  nodeWidth: number
  nodeHeight: number
  siblingGap: number
  levelGap: number
  orientation?: "top-down" | "left-to-right" | "bottom-up" | "right-to-left"
  idField?: string
  parentIdField?: string
}

interface TreeNode {
  id: string
  x: number
  y: number
  data: Record<string, unknown>
  children: TreeNode[]
  parent: TreeNode | null
  depth: number
  width: number
  height: number
}

export const treeLayout: LayoutAlgorithm = (data, rawConfig) => {
  const config = rawConfig as unknown as TreeConfig
  const nodeWidth = config.nodeWidth ?? 220
  const nodeHeight = config.nodeHeight ?? 100
  const siblingGap = config.siblingGap ?? 40
  const levelGap = config.levelGap ?? 80
  const orientation = config.orientation ?? "top-down"
  const idField = config.idField ?? "id"
  const parentIdField = config.parentIdField ?? "managerId"

  const byManager = new Map<string | null, Record<string, unknown>[]>()

  for (const row of data) {
    const parentId = row[parentIdField]
    const key = parentId == null || parentId === "" ? null : String(parentId)
    if (!byManager.has(key)) {
      byManager.set(key, [])
    }
    byManager.get(key)!.push(row)
  }

  function buildNode(row: Record<string, unknown>, depth: number): TreeNode {
    const id = String(row[idField])
    const children = byManager.get(id) ?? []
    const childNodes = children.map((child) => buildNode(child, depth + 1))

    let subtreeWidth = nodeWidth
    if (childNodes.length > 0) {
      const childrenWidth = childNodes.reduce(
        (sum, child) => sum + child.width + siblingGap,
        0
      )
      subtreeWidth = Math.max(nodeWidth, childrenWidth - siblingGap)
    }

    return {
      id,
      x: 0,
      y: depth * (nodeHeight + levelGap),
      data: row,
      children: childNodes,
      parent: null,
      depth,
      width: subtreeWidth,
      height: nodeHeight,
    }
  }

  function assignPositions(node: TreeNode, startX: number): void {
    node.x = startX + node.width / 2 - nodeWidth / 2
    let childX =
      startX +
      (node.width -
        node.children.reduce((sum, c) => sum + c.width + siblingGap, 0) +
        siblingGap) /
        2

    for (const child of node.children) {
      assignPositions(child, childX)
      childX += child.width + siblingGap
    }
  }

  function wireParents(node: TreeNode, parent: TreeNode | null): void {
    node.parent = parent
    for (const child of node.children) {
      wireParents(child, node)
    }
  }

  const roots = byManager.get(null) ?? []
  const rootNodes = roots.map((root) => buildNode(root, 0))

  for (const root of rootNodes) {
    wireParents(root, null)
  }

  let currentX = 0
  const elements: PositionedElement[] = []
  const edges: Array<{ parent: TreeNode; child: TreeNode }> = []

  for (const root of rootNodes) {
    assignPositions(root, currentX)

    function collectNodes(node: TreeNode): void {
      elements.push({
        id: node.id,
        x: node.x,
        y: node.y,
        width: nodeWidth,
        height: nodeHeight,
        data: node.data,
        type: "node",
        parentId: node.parent?.id,
      })

      for (const child of node.children) {
        edges.push({ parent: node, child })
        collectNodes(child)
      }
    }

    collectNodes(root)
    currentX += root.width + siblingGap * 2
  }

  // Compute bounds
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  for (const el of elements) {
    minX = Math.min(minX, el.x)
    minY = Math.min(minY, el.y)
    maxX = Math.max(maxX, el.x + el.width)
    maxY = Math.max(maxY, el.y + el.height)
  }

  // Store edges in the first element's data for later retrieval
  if (elements.length > 0) {
    elements[0].data.__edges = edges as unknown as Record<string, unknown>
    elements[0].data.__orientation = orientation
  }

  return {
    elements,
    bounds: {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY,
    },
  }
}
