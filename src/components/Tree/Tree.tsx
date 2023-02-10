import React from 'react'
import { treeData } from 'src/constants'
import { TreeContainer, TreeStyled } from './style'
import { TreeNode } from './TreeNode'
import { TreeProps } from './types'

export const Tree = ({
  dense = false,
  connectorLineType = 'solid',
  nodes,
}: TreeProps) => {
  return (
    <TreeContainer>
      <TreeStyled
        elevation={0}
        variant="outlined"
        connectorLineType={connectorLineType}
      >
        {nodes.map((node, index) => (
          <TreeNode
            key={`_${index.toString()}_${node.id}`}
            dense={dense}
            node={node}
          />
        ))}
      </TreeStyled>
    </TreeContainer>
  )
}
