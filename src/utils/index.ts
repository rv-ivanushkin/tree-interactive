import { TreeNode } from 'src/components/Tree'

export const genDataItems = (depth = 5, childrenCount = 10): TreeNode[] => {
  if (depth === 0 || depth > 5) {
    return []
  }
  return new Array(childrenCount).fill({}).map((_, index) => ({
    id: `${depth.toString()}_${depth.toString()}_${index.toString()}_id_child`,
    label: `LabelNode by (${depth.toString()}_${index.toString()})`,
    children: genDataItems(depth - 1, childrenCount),
  }))
}
