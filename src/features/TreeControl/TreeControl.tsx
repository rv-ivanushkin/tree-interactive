import React, { memo, useState } from 'react'
import { Tree } from 'src/components/Tree'
import { genDataItems } from 'src/utils'

import { useTranslation } from 'react-i18next'
import { Divider, MenuItem, Select, Switch, Typography } from '@mui/material'
import {
  OptionsStyled,
  TreeControlStyled,
  TreeOptionsControlStyled,
} from './style'
import { Filter } from './Filter'
import { OptionsNames, useOptions } from './hooks'
import { HandleChange, LabelProps } from './types'

const nodes = genDataItems(5)

// eslint-disable-next-line react/display-name
export const Label = memo(({ label, ...props }: LabelProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Typography {...props}>{label}</Typography>
))

export const TreeControl = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('')

  const { dense, isChecked, connectorLineType, updateOption } = useOptions({
    isChecked: true,
  })

  const handleChange: HandleChange = (event, checked) => {
    const { name } = event.target

    if (name) {
      switch (event.target.name as OptionsNames) {
        case 'connectorLineType': {
          updateOption({
            [event.target.name]: event.target.value,
          })
          break
        }
        default: {
          updateOption({
            [event.target.name]: checked,
          })
        }
      }
    }
  }

  return (
    <TreeControlStyled>
      <Filter onChange={setFilter} />
      <div />
      <Tree filter={filter} nodes={nodes} dense={dense} isChecked={isChecked} />
      <OptionsStyled>
        <Label variant="h5" label={t('optionsLabel')} />
        <Divider />
        <TreeOptionsControlStyled elevation={0}>
          <Label label={t('connectorLineType')} />
          <Select
            name="connectorLineType"
            size="small"
            value={connectorLineType}
            onChange={handleChange}
          >
            <MenuItem value="solid">solid</MenuItem>
            <MenuItem value="dashed">dashed</MenuItem>
          </Select>
          <Label label={t('dense')} />
          <Switch
            name="dense"
            checked={dense}
            value={dense}
            onChange={handleChange}
          />
          <Label label={t('isChecked')} />
          <Switch
            name="isChecked"
            checked={isChecked}
            value={isChecked}
            onChange={handleChange}
          />
        </TreeOptionsControlStyled>
      </OptionsStyled>
    </TreeControlStyled>
  )
}
