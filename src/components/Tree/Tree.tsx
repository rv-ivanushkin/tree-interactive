import { isNull } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'
import { TreeContext } from './context'
import { TreeContainer, TreeStyled } from './style'
import { TreeNode } from './TreeNode'
import { TreeProps } from './types'
import { filterNodesByKey, getAllIds } from './utils'

export const Tree = ({
  dense = false,
  connectorLineType = 'solid',
  nodes: defaultNodes,
  filter = '',
  isChecked = false,
  checked: defaultChecked,
  expanded: defaultExpanded,
  onChecked,
  onExpanded,
}: TreeProps) => {
  const [nodes, setNodes] = useState(defaultNodes)
  const [checked, setChecked] = useState<string[]>([])
  const [expanded, setExpanded] = useState<string[]>([])

  useEffect(() => {
    if (defaultChecked) {
      setChecked(defaultChecked)
    }
  }, [defaultChecked])

  useEffect(() => {
    if (defaultExpanded) {
      setExpanded(defaultExpanded)
    }
  }, [defaultExpanded])

  useEffect(() => {
    if (onChecked) {
      onChecked(checked)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked])

  useEffect(() => {
    if (onExpanded) {
      onExpanded(expanded)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded])

  const contextValue = useMemo(
    () => ({
      checked,
      setChecked,
      expanded,
      setExpanded,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checked, expanded]
  )

  useEffect(() => {
    setNodes(
      filter !== '' ? filterNodesByKey(defaultNodes, filter) : defaultNodes
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  return (
    <TreeContainer>
      <TreeStyled
        elevation={0}
        variant="outlined"
        connectorLineType={connectorLineType}
      >
        <TreeContext.Provider value={contextValue}>
          {nodes.map((node, index) => (
            <TreeNode
              key={`_${index.toString()}_${node.id}`}
              dense={dense}
              node={node}
              isChecked={isChecked}
            />
          ))}
        </TreeContext.Provider>
      </TreeStyled>
    </TreeContainer>
  )
}
