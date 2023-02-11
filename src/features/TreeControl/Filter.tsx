import { TextField } from '@mui/material'
import debounce from 'lodash/debounce'
import React, { ChangeEvent, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

interface FilterProps {
  onChange?: (input: string) => void
}

// eslint-disable-next-line react/display-name
export const Filter = memo(({ onChange }: FilterProps) => {
  const { t } = useTranslation()

  const handleFilterChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  const handleFilterChangeDebounce = useMemo(
    () => debounce(handleFilterChange, 1000),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return (
    <TextField
      size="small"
      label={t('filterPlaceholder')}
      onChange={handleFilterChangeDebounce}
    />
  )
})
