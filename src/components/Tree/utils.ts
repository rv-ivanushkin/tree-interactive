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
