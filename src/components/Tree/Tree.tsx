import React from 'react'
import { treeData } from 'src/constants'
import { TreeContainer, TreeStyled } from './style'
import { TreeNode } from './TreeNode'
import { TreeProps } from './types'

export const Tree = ({
  dense = false,
  connectorLineType = 'solid',
}: TreeProps) => {
  return (
    <TreeContainer>
      <TreeStyled
        elevation={0}
        square
        variant="outlined"
        connectorLineType={connectorLineType}
      >
        {treeData.map((node, index) => (
          <TreeNode key={`_${index.toString()}_${node.id}`} node={node} />
        ))}
      </TreeStyled>
    </TreeContainer>
  )
}
