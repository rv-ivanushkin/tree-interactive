import React, { useState } from 'react'
import { ConnectorLineType, Tree } from 'src/components/Tree'
import { TreeControlStyled } from './style'

export const TreeControl = () => {
  const [dense, setDense] = useState(false)
  const [connectorLineType, setConnectorLineType] =
    useState<ConnectorLineType>('dashed')

  return (
    <TreeControlStyled>
      <Tree dense={dense} connectorLineType={connectorLineType} />
      <div />
    </TreeControlStyled>
  )
}
