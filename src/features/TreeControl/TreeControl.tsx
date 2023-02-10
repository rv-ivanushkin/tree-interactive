import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
  Divider,
} from '@mui/material'
import React, { ChangeEvent, useMemo, useState } from 'react'
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

const expandedOne = 'id-Node 1.1'
const checkedOne = 'id-Node 1.1'

export const TreeControl = () => {
  const { t } = useTranslation()
  const [checked, setChecked] = useState<string[]>(['id-Node 1.1'])
  const [expanded, setExpanded] = useState<string[]>(['id-Node 1.1'])
  const [dense, setDense] = useState(true)
  const [isChecked, setIsChecked] = useState(true)
  const [filter, setFilter] = useState('')
  const [connectorLineType, setConnectorLineType] =
    useState<ConnectorLineType>('dashed')

  const handleDense = () => setDense((prev) => !prev)
  const handleCheck = (event: ChangeEvent<HTMLInputElement>, check: boolean) =>
    setIsChecked(check)
  const handleChangeLineType = (event: SelectChangeEvent) => {
    setConnectorLineType(event.target.value as ConnectorLineType)
  }

  const handleFilterChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilter(event.target.value)
  }

  const handleExpandOne = () => {
    if (expanded.includes(expandedOne)) {
      setExpanded((prev) => prev.filter((id) => id !== expandedOne))
    } else {
      setExpanded((prev) => [...prev, 'id-Node 1.1'])
    }
  }
  const handleCheckedOne = () => {
    if (checked.includes(checkedOne)) {
      setChecked((prev) => prev.filter((id) => id !== checkedOne))
    } else {
      setChecked((prev) => [...prev, 'id-Node 1.1'])
    }
  }

  const handleFilterChangeDebounce = useMemo(
    () => debounce(handleFilterChange, 1000),
    []
  )

  const handleCheckedTree = (ids: string[]) => setChecked(ids)
  const handleExpandedTree = (ids: string[]) => setExpanded(ids)

  return (
    <TreeControlStyled>
      <TextField
        size="small"
        label={t('filterPlaceholder')}
        onChange={handleFilterChangeDebounce}
      />
      <div />
      <Tree
        isChecked={isChecked}
        filter={filter}
        nodes={nodes}
        dense={dense}
        connectorLineType={connectorLineType}
        checked={checked}
        expanded={expanded}
        onChecked={handleCheckedTree}
        onExpanded={handleExpandedTree}
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
          <Typography>{t('isChecked')}</Typography>
          <Switch checked={isChecked} onChange={handleCheck} />

          <Typography>{t('checked')} (id-Node 1.1)</Typography>
          <Switch
            checked={checked.includes('id-Node 1.1')}
            onChange={handleCheckedOne}
          />
          <Typography>{t('expanded')} (id-Node 1.1)</Typography>
          <Switch
            checked={expanded.includes('id-Node 1.1')}
            onChange={handleExpandOne}
          />
        </TreeOptionsControlStyled>
      </OptionsStyled>
    </TreeControlStyled>
  )
}
