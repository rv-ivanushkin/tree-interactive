import { TreeNode } from './types'

export const filterNodesByKey = (
  nodes: TreeNode[],
  filter: string
): TreeNode[] => {
  const filterNodes = (
    node: TreeNode,
    parents: TreeNode[] = []
  ): TreeNode | null => {
    let res = null

    const filteredChildren = node.children
      ?.map((childNode) => filterNodes(childNode, [...parents, node]))
      .filter((i) => i !== null)

    const hasChildrenMatched = filteredChildren && filteredChildren.length > 0
    const isNodeItselfMatched = node.label
      .toLocaleUpperCase()
      .includes(filter.toLocaleUpperCase())

    if (isNodeItselfMatched || hasChildrenMatched) {
      res = { ...node, children: filteredChildren } as TreeNode
    }

    return res
  }

  const result = nodes
    .map((node) => filterNodes(node, []))
    .filter((i) => i !== null) as TreeNode[]

  return (Array.isArray(result) && result) || []
}

export const getAllIds = (nodes: TreeNode[]) => {
  let result: string[] = []
  for (let i = 0; i < nodes.length; i += 1) {
    const current = nodes[i]
    if (Array.isArray(current.children)) {
      result.push(current.id)
      result = result.concat(getAllIds(current.children))
    }
  }
  return result
}
