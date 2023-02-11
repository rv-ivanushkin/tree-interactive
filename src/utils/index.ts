import { TreeNode } from 'src/components/Tree'

export const genDataItems = (
  depth = 5,
  childrenCount = 10,
  label = 'Node 1'
): TreeNode[] => {
  if (depth === 0 || depth > 5) {
    return []
  }
  return new Array(childrenCount).fill({}).map((_, index) => ({
    id: `id-${label}.${index + 1}`,
    label: `${label}.${index + 1}`,
    children: genDataItems(depth - 1, childrenCount, `${label}.${index + 1}`),
  }))
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
