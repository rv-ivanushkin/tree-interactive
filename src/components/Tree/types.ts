export type ConnectorLineTypes = 'solid' | 'dashed'
export type Dense = boolean
export type ConnectorLineType = ConnectorLineTypes

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TreeContextProps {}

export type TreeStyledProps = {
  connectorLineType?: ConnectorLineType
  dense?: Dense
}

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
  dense?: Dense
  nodes: TreeNode[]
  filter?: string
}
