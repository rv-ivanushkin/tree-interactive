export type ConnectorLineType = 'solid' | 'dashed'

export interface TreeNode {
  label: string
  id: string | number
  children?: TreeNode[]
}

export interface TreeNodeProps {
  node: TreeNode
}

export interface TreeProps {
  connectorLineType?: ConnectorLineType
  dense?: boolean
}
