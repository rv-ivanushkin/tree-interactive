import React, { useEffect, useMemo, useState } from 'react'
import { TreeContext } from './context'
import { TreeContainer, TreeStyled } from './style'
import { TreeNode } from './TreeNode'
import { TreeProps } from './types'
import { filterNodesByKey } from './utils'

export const Tree = ({
  dense = false,
  connectorLineType = 'solid',
  nodes: defaultNodes,
  filter = '',
}: TreeProps) => {
  const [nodes, setNodes] = useState(defaultNodes)

  useEffect(() => {
    setNodes(filter ? filterNodesByKey(defaultNodes, filter) : defaultNodes)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

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
