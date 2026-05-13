export interface TreeNode {
  id: string
  x: number
  y: number
  data: Record<string, unknown>
  children: TreeNode[]
  parent: TreeNode | null
  depth: number
  width: number
}

interface LayoutConfig {
  nodeWidth: number
  nodeHeight: number
  siblingGap: number
  levelGap: number
}

export function buildTreeLayout(
  rows: Record<string, unknown>[],
  idColumn: string,
  parentIdColumn: string,
  config: LayoutConfig
): TreeNode[] {
  const byManager = new Map<string | null, Record<string, unknown>[]>()

  for (const row of rows) {
    const parentId = (row[parentIdColumn] as string | null) ?? null
    const key = parentId === null || parentId === "" ? null : parentId
    if (!byManager.has(key)) {
      byManager.set(key, [])
    }
    byManager.get(key)!.push(row)
  }

  // Pass 1: build tree structure and compute subtree widths bottom-up
  function buildNode(row: Record<string, unknown>, depth: number): TreeNode {
    const id = String(row[idColumn])
    const children = byManager.get(id) ?? []
    const childNodes = children.map((child) => buildNode(child, depth + 1))

    // Compute subtree width: sum of child widths + gaps, or nodeWidth if leaf
    let subtreeWidth = config.nodeWidth
    if (childNodes.length > 0) {
      const childrenWidth = childNodes.reduce(
        (sum, child) => sum + child.width + config.siblingGap,
        0
      )
      subtreeWidth = Math.max(
        config.nodeWidth,
        childrenWidth - config.siblingGap
      )
    }

    return {
      id,
      x: 0, // assigned in pass 2
      y: depth * (config.nodeHeight + config.levelGap),
      data: row,
      children: childNodes,
      parent: null,
      depth,
      width: subtreeWidth,
    }
  }

  // Pass 2: assign x positions top-down, centering parents over children
  function assignPositions(node: TreeNode, startX: number): void {
    // Place this node centered in its allocated space
    node.x = startX + node.width / 2 - config.nodeWidth / 2

    // Place children side by side within the node's width
    let childX =
      startX +
      (node.width -
        node.children.reduce((sum, c) => sum + c.width + config.siblingGap, 0) +
        config.siblingGap) /
        2

    for (const child of node.children) {
      assignPositions(child, childX)
      childX += child.width + config.siblingGap
    }
  }

  const roots = byManager.get(null) ?? []
  const rootNodes = roots.map((root) => buildNode(root, 0))

  // Wire parent pointers
  for (const root of rootNodes) {
    wireParents(root, null)
  }

  // Place multiple roots side by side
  let currentX = 0
  const allNodes: TreeNode[] = []
  for (const root of rootNodes) {
    assignPositions(root, currentX)
    allNodes.push(...flattenNodes(root))
    currentX += root.width + config.siblingGap * 2
  }

  return allNodes
}

function wireParents(node: TreeNode, parent: TreeNode | null): void {
  node.parent = parent
  for (const child of node.children) {
    wireParents(child, node)
  }
}

function flattenNodes(root: TreeNode): TreeNode[] {
  const result: TreeNode[] = [root]
  for (const child of root.children) {
    result.push(...flattenNodes(child))
  }
  return result
}
