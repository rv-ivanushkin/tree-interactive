import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ConnectorLineType, Tree } from 'src/components/Tree'
import { TreeControlStyled, TreeOptionsControlStyled } from './style'

export const TreeControl = () => {
  const { t } = useTranslation()
  const [dense, setDense] = useState(false)
  const [connectorLineType, setConnectorLineType] =
    useState<ConnectorLineType>('dashed')

  const handleDense = () => setDense((prev) => !prev)
  const handleChangeLineType = (event: SelectChangeEvent) => {
    setConnectorLineType(event.target.value as ConnectorLineType)
  }

  return (
    <TreeControlStyled>
      <Tree dense={dense} connectorLineType={connectorLineType} />
      <TreeOptionsControlStyled>
        <Typography>{t('connectorLineType')}</Typography>
        <Select
          size="small"
          value={connectorLineType}
          onChange={handleChangeLineType}
        >
          <MenuItem value="solid">solid</MenuItem>
          <MenuItem value="dashed">dashed</MenuItem>
        </Select>
        <Typography>{t('dense')}</Typography>
        <Switch value={dense} onChange={handleDense} />
      </TreeOptionsControlStyled>
    </TreeControlStyled>
  )
}
