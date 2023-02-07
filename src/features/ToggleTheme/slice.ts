import { PaletteMode } from '@mui/material'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/types'

export const modeSlice = createSlice({
  name: 'mode',
  initialState: 'light' as PaletteMode,
  reducers: {
    toggle: (state) => (state === 'light' ? 'dark' : 'light'),
  },
})

export const selectThemeMode = (state: RootState) => state.mode
