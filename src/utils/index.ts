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
