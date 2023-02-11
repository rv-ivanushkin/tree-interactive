import React, { memo } from 'react'
import { TreeProvider } from './context'
import { useTreeNodes, useTreeNodeState } from './hooks'
import { TreeContainer, TreeStyled } from './style'
import { TreeNode } from './TreeNode'
import { TreeProps } from './types'

// eslint-disable-next-line react/display-name
export const Tree = memo(
  ({
    nodes: defaultNodes,
    checked,
    expanded,

    dense = false,
    connectorLineType = 'solid',
    isChecked = false,
    filter,
    onChecked,
    onExpanded,
  }: TreeProps) => {
    const { nodes } = useTreeNodes({ nodes: defaultNodes, filter })
    const { contextValue } = useTreeNodeState({
      checked,
      expanded,
      onChecked,
      onExpanded,
    })

    return (
      <TreeContainer>
        <TreeStyled
          elevation={0}
          variant="outlined"
          connectorLineType={connectorLineType}
        >
          <TreeProvider value={contextValue}>
            {nodes.length &&
              nodes.map((node, index) => (
                <TreeNode
                  key={`_${index.toString()}_${node.id}`}
                  dense={dense}
                  node={node}
                  isChecked={isChecked}
                />
              ))}
          </TreeProvider>
        </TreeStyled>
      </TreeContainer>
    )
  }
)
