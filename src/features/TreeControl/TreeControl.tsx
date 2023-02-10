import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
  Divider,
} from '@mui/material'
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ConnectorLineType, Tree } from 'src/components/Tree'
import { genDataItems } from 'src/utils'
import debounce from 'lodash/debounce'

import {
  OptionsStyled,
  TreeControlStyled,
  TreeOptionsControlStyled,
} from './style'

const nodes = genDataItems(4)

export const TreeControl = () => {
  const { t } = useTranslation()
  const [dense, setDense] = useState(false)
  const [filter, setFilter] = useState('')
  const [connectorLineType, setConnectorLineType] =
    useState<ConnectorLineType>('dashed')

  const handleDense = () => setDense((prev) => !prev)
  const handleChangeLineType = (event: SelectChangeEvent) => {
    setConnectorLineType(event.target.value as ConnectorLineType)
  }

  const handleFilterChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilter(event.target.value)
  }

  const handleFilterChangeDebounce = useMemo(
    () => debounce(handleFilterChange, 1000),
    []
  )

  return (
    <TreeControlStyled>
      <TextField
        size="small"
        label={t('filterPlaceholder')}
        onChange={handleFilterChangeDebounce}
      />
      <div />
      <Tree
        filter={filter}
        nodes={nodes}
        dense={dense}
        connectorLineType={connectorLineType}
      />
      <OptionsStyled>
        <Typography variant="h5">{t('optionsLabel')}</Typography>
        <Divider />
        <TreeOptionsControlStyled elevation={0}>
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
      </OptionsStyled>
    </TreeControlStyled>
  )
}
