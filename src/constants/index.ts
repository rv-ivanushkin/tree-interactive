import { TreeNode } from 'src/components/Tree/types'

export const treeDataChildren = [
  { label: 'Label Children level 1', id: 1, children: [] },
  { label: 'Label Children level 2', id: 2, children: [] },
  { label: 'Label Children level 3', id: 3, children: [] },
  { label: 'Label Children level 4', id: 4, children: [] },
  { label: 'Label Children level 5', id: 5, children: [] },
  { label: 'Label Children level 6', id: 6, children: [] },
]

export const treeData: TreeNode[] = [
  { label: 'Label Item level 1', id: 1, children: treeDataChildren },
  { label: 'Label Item level 2', id: 2, children: treeDataChildren },
  { label: 'Label Item level 3', id: 3, children: treeDataChildren },
  { label: 'Label Item level 4', id: 4, children: treeDataChildren },
  { label: 'Label Item level 5', id: 5, children: treeDataChildren },
  { label: 'Label Item level 6', id: 6, children: treeDataChildren },
]
