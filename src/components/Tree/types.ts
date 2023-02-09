export type ConnectorLineTypes = 'solid' | 'dashed'
export type Dense = boolean
export type ConnectorLineType = ConnectorLineTypes

export interface TreeNode {
  label: string
  id: string | number
  children?: TreeNode[]
}

export interface TreeNodeProps {
  node: TreeNode
  dense?: Dense
}

export interface TreeProps {
  connectorLineType?: ConnectorLineType
}
