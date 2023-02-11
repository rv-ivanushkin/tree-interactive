import { SelectChangeEvent, TypographyProps } from '@mui/material'
import { ChangeEvent } from 'react'

export type HandleChange = {
  (event: SelectChangeEvent<'solid' | 'dashed'>, child: React.ReactNode): void
  (event: ChangeEvent<HTMLInputElement>, checked: boolean): void
}

export type LabelProps = TypographyProps & { label: string | null }
