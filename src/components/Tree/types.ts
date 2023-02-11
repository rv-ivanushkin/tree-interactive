export type ConnectorLineTypes = 'solid' | 'dashed'
export type Dense = boolean
export type ConnectorLineType = ConnectorLineTypes

export interface TreeProps {
  connectorLineType?: ConnectorLineType
  dense?: Dense
  nodes: TreeNode[]
  filter?: string
  isChecked?: boolean
  checked?: string[]
  expanded?: string[]
  onChecked?: (checked: string[]) => void
  onExpanded?: (expanded: string[]) => void
}

export interface TreeContextProps {
  checked: string[]
  setChecked: (checked: string[]) => void
  expanded: string[]
  setExpanded: (expanded: string[]) => void
}

export type TreeStyledProps = {
  connectorLineType?: ConnectorLineType
  dense?: Dense
}

export interface TreeNode {
  label: string
  id: string
  children?: TreeNode[]
}

export interface TreeNodeProps {
  node: TreeNode
  dense?: Dense
  isChecked?: boolean
}

export interface UseTreeNodesProps {
  nodes: TreeNode[]
  filter?: string
}

export interface UseTreeNodeStateProps {
  checked?: string[]
  expanded?: string[]
  onChecked?: (checked: string[]) => void
  onExpanded?: (expanded: string[]) => void
}
